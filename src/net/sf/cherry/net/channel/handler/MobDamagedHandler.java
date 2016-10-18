package net.sf.cherry.net.channel.handler;

import net.sf.cherry.client.MapleClient;
import net.sf.cherry.client.SkillFactory;
import net.sf.cherry.net.AbstractMaplePacketHandler;
import net.sf.cherry.tools.MaplePacketCreator;
import net.sf.cherry.tools.data.input.SeekableLittleEndianAccessor;

public class MobDamagedHandler extends AbstractMaplePacketHandler {
    private int 矛连击强化防御;
    private int 矛连击强化魔法防御;
    @Override
    public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
        c.doneedlog(this, c.getPlayer());
        if (((c.getPlayer().getJob().getId() >= 2000) || (c.getPlayer().getJob().getId() == 900)) && (c.getPlayer().getSkillLevel(SkillFactory.getSkill(21000000)) > 0)) {
            if (c.getPlayer().getLastAttack() < System.currentTimeMillis() + 2500L) {
                c.getPlayer().setCombo(c.getPlayer().getCombo() + 1);
            } else {
                c.getPlayer().setCombo(1);
            }
            switch (c.getPlayer().getCombo()) {
                case 10:
                case 20:
                case 30:
                case 40:
                case 50:
                case 60:
                case 70:
                case 80:
                case 90:
                case 100:
                    if (c.getPlayer().getSkillLevel(21000000) < c.getPlayer().getCombo() / 10) {
                        break;
                    }
                    SkillFactory.getSkill(21000000).getEffect(c.getPlayer().getCombo() / 10).applyComboBuff(c.getPlayer(), c.getPlayer().getCombo(), c.getPlayer().getCombo() + 矛连击强化防御, c.getPlayer().getCombo() + 矛连击强化魔法防御);
                    if (c.getPlayer().getSkillLevel(SkillFactory.getSkill(21110000)) > 0 && c.getPlayer().getJob().getId() > 2110) {
                        SkillFactory.getSkill(21110000).getEffect(c.getPlayer().getCombo() / 10).爆击强化(c.getPlayer(), c.getPlayer().getCombo());
                    }
                    break;
            }
            c.getSession().write(MaplePacketCreator.Combo_Effect(c.getPlayer().getCombo()));
            c.getPlayer().setLastAttack((int) System.currentTimeMillis());
        }
    }
}
