/*
 *重生迷之蛋 || 永恒迷之蛋
 */
package net.sf.cherry.net;

import net.sf.cherry.client.MapleClient;
import net.sf.cherry.tools.MaplePacketCreator;
import net.sf.cherry.tools.data.input.SeekableLittleEndianAccessor;

/**
 *
 * @author Administrator
 */
public class MZD extends AbstractMaplePacketHandler {
     public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c)
   {int action = slea.readByte();
       if (action == 1) {
           c.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(1, "测试期间不开放迷之蛋！1"));
                c.getSession().write(MaplePacketCreator.enableActions());
       }else if (action == 2){
            c.getPlayer().getClient().getSession().write(MaplePacketCreator.serverNotice(1, "测试期间不开放迷之蛋！2"));
                c.getSession().write(MaplePacketCreator.enableActions());
       }
      }
   }

