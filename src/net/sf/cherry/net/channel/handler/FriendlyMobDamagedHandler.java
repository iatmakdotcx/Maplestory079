package net.sf.cherry.net.channel.handler;

import net.sf.cherry.client.MapleClient;
import net.sf.cherry.net.AbstractMaplePacketHandler;
import net.sf.cherry.server.life.MapleMonster;
import net.sf.cherry.server.maps.MapleMap;
import net.sf.cherry.tools.Randomizer;
import net.sf.cherry.tools.data.input.SeekableLittleEndianAccessor;

public class FriendlyMobDamagedHandler extends AbstractMaplePacketHandler {
	public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
        MapleMap map = c.getPlayer().getMap();
        if (map == null) {
            return;
        }
        MapleMonster mobfrom = map.getMonsterByOid(slea.readInt());
        slea.skip(4);
        MapleMonster mobto = map.getMonsterByOid(slea.readInt());
        
        if ((mobfrom != null) && 
			 (mobto != null) && 
			 (mobto.getStats().isFriendly())) {
        	//这个伤害数量。。。。
            //int damage = mobto.getStats().getLevel() * Randomizer.getInstance().nextInt(mobto.getStats().getLevel()) / 2;
        	//50次左右搞死一个怪
        	int damage = (mobto.getStats().getHp() / 50);
        	damage = Randomizer.getInstance().nextInt(damage) * 2;
            //TODO:MAK  怪物伤害
            mobto.damagefromMonster(damage);
            //checkShammos(chr, mobto, map);
        } 
	}
}
