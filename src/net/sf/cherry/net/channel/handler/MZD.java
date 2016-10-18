/*
 *重生迷之蛋
 */
package net.sf.cherry.net.channel.handler;

import net.sf.cherry.client.MapleClient;
import net.sf.cherry.net.AbstractMaplePacketHandler;
import net.sf.cherry.scripting.npc.NPCScriptManager;
import net.sf.cherry.tools.MaplePacketCreator;
import net.sf.cherry.tools.data.input.SeekableLittleEndianAccessor;

/**
 *
 * @author Administrator
 */
public class MZD extends AbstractMaplePacketHandler {
    @Override
     public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c)
   {
      NPCScriptManager.getInstance().start(c, 9330009);
     c.getSession().write(MaplePacketCreator.enableActions());
      }
   }
