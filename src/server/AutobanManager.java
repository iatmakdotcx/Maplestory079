package server;

import client.MapleClient;
import constants.PiPiConfig;
import handling.world.World;
import tools.FileoutputUtil;
import tools.MaplePacketCreator;

import java.util.*;
import java.util.concurrent.locks.ReentrantLock;

public class AutobanManager implements Runnable {

    private static class ExpirationEntry implements Comparable<ExpirationEntry> {

        public long time;
        public int acc;
        public int points;

        public ExpirationEntry(long time, int acc, int points) {
            this.time = time;
            this.acc = acc;
            this.points = points;
        }

        public int compareTo(AutobanManager.ExpirationEntry o) {
            return (int) (time - o.time);
        }

        @Override
        public boolean equals(Object oth) {
            if (!(oth instanceof AutobanManager.ExpirationEntry)) {
                return false;
            }
            final AutobanManager.ExpirationEntry ee = (AutobanManager.ExpirationEntry) oth;
            return (time == ee.time && points == ee.points && acc == ee.acc);
        }
    }

    private final Map<Integer, Integer> points = new HashMap<>();
    private final Map<Integer, List<String>> reasons = new HashMap<>();
    private final Set<ExpirationEntry> expirations = new TreeSet<>();
    private static final int AUTOBAN_POINTS = 5000;
    private static final AutobanManager instance = new AutobanManager();
    private final ReentrantLock lock = new ReentrantLock(true);

    public static final AutobanManager getInstance() {
        return instance;
    }

    public final void autoban(final MapleClient c, final String reason) {
        if (c.getPlayer().isGM() || c.getPlayer().isClone()) {
            c.getPlayer().dropMessage(5, "[警告] A/b 触发 原因 : " + reason);
            return;
        }
        addPoints(c, AUTOBAN_POINTS, 0, reason);
    }

    public final void addPoints(final MapleClient c, final int points, final long expiration, final String reason) {
        lock.lock();
        try {
            List<String> reasonList;
            final int acc = c.getPlayer().getAccountID();

            if (this.points.containsKey(acc)) {
                final int SavedPoints = this.points.get(acc);
                if (SavedPoints >= AUTOBAN_POINTS) { // Already auto ban'd.
                    return;
                }
                this.points.put(acc, SavedPoints + points); // Add
                reasonList = this.reasons.get(acc);
                reasonList.add(reason);
            } else {
                this.points.put(acc, points);
                reasonList = new LinkedList<>();
                reasonList.add(reason);
                this.reasons.put(acc, reasonList);
            }

            if (this.points.get(acc) >= AUTOBAN_POINTS) { // See if it's sufficient to auto ban
                if (c.getPlayer().isGM() || c.getPlayer().isClone()) {
                    c.getPlayer().dropMessage(5, "[警告] A/b 触发 原因 : " + reason);
                    return;
                }
                final StringBuilder sb = new StringBuilder("a/b ");
                sb.append(c.getPlayer().getName());
                sb.append(" (IP ");
                sb.append(c.getSession().remoteAddress().toString());
                sb.append("): ");
                sb.append(" (MAC ");
                sb.append(c.getMacs());
                sb.append("): ");
                for (final String s : reasons.get(acc)) {
                    sb.append(s);
                    sb.append(", ");
                }
                if (PiPiConfig.getAutoban()) {
                    FileoutputUtil.logToFile("logs/Hack/Ban/AutoBan.txt", "\r\n" + FileoutputUtil.NowTime() + "玩家: " + c.getPlayer().getName() + " 因为 " + sb + " 而被系统封锁");
                    World.Broadcast.broadcastGMMessage(MaplePacketCreator.serverNotice(0, "[GM密语] " + c.getPlayer().getName() + "因为使用" + sb + "而被管理员永久停权。"));
                    World.Broadcast.broadcastMessage(MaplePacketCreator.serverNotice(0, "[封锁系统] " + c.getPlayer().getName() + "因为使用违法程序已被永久封停。"));
                    FileoutputUtil.logToFile("logs/Hack/AutoBan.txt", "\r\n" + FileoutputUtil.NowTime() + "玩家: " + c.getPlayer().getName() + " 因为 " + sb + " 而被系统封锁");
//		Calendar cal = Calendar.getInstance();
//		cal.add(Calendar.DATE, 60);
//		c.getPlayer().tempban(sb.toString(), cal, 1, false);
                    c.getPlayer().ban(sb.toString(), false, true, false);
                    c.getSession().close();
                    //c.disconnect(true, false);
                } else {
                    FileoutputUtil.logToFile("logs/Hack/AutoBan.txt", "\r\n" + FileoutputUtil.NowTime() + "玩家: " + c.getPlayer().getName() + " 因为 " + sb + " 而被系统封锁");

                }
            } else if (expiration > 0) {
                expirations.add(new ExpirationEntry(System.currentTimeMillis() + expiration, acc, points));
            }
        } finally {
            lock.unlock();
        }
    }

    public final void run() {
        final long now = System.currentTimeMillis();
        for (final ExpirationEntry e : expirations) {
            if (e.time <= now) {
                this.points.put(e.acc, this.points.get(e.acc) - e.points);
            } else {
                return;
            }
        }
    }
}
