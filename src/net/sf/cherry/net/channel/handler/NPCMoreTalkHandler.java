 package net.sf.cherry.net.channel.handler;
 
 import net.sf.cherry.client.MapleClient;
import net.sf.cherry.net.AbstractMaplePacketHandler;
import net.sf.cherry.scripting.npc.NPCScriptManager;
import net.sf.cherry.scripting.quest.QuestScriptManager;
import net.sf.cherry.tools.data.input.SeekableLittleEndianAccessor;
 
 public class NPCMoreTalkHandler extends AbstractMaplePacketHandler
 {
   public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c)
   {
     c.doneedlog(this, c.getPlayer());
     byte lastMsg = slea.readByte();
     byte action = slea.readByte();
 
     if (lastMsg == 2) {
       if (action != 0) {
         String returnText = slea.readMapleAsciiString();
         if (c.getQM() != null) {
          c.getQM().setGetText(returnText);
/* 45 */           if (c.getQM().isStart())
/* 46 */             QuestScriptManager.getInstance().start(c, action, lastMsg, -1);
/*    */           else
/* 48 */             QuestScriptManager.getInstance().end(c, action, lastMsg, -1);
/*    */         }
/*    */         else {
/* 51 */           c.getCM().setGetText(returnText);
/* 52 */           NPCScriptManager.getInstance().action(c, action, lastMsg, -1);
/*    */         }
/*    */       }
/* 55 */       else if (c.getQM() != null) {
/* 56 */         c.getQM().dispose();
/*    */       } else {
/* 58 */         c.getCM().dispose();
/*    */       }
/*    */     }
/*    */     else {
/* 62 */       int selection = -1;
/* 63 */       if (slea.available() >= 4L) {
/* 64 */         selection = slea.readInt();
/* 65 */         if (selection < 0) {
/* 66 */           if (c.getQM() != null)
/* 67 */             c.getQM().dispose();
/*    */           else {
/* 69 */             c.getCM().dispose();
/*    */           }
/* 71 */           return;
/*    */         }
/* 73 */       } else if (slea.available() > 0L) {
/* 74 */         selection = slea.readByte();
/*    */       }
/*    */
/* 77 */       if (c.getQM() != null) {
/* 78 */         if (c.getQM().isStart())
/* 79 */           QuestScriptManager.getInstance().start(c, action, lastMsg, selection);
/*    */         else
/* 81 */           QuestScriptManager.getInstance().end(c, action, lastMsg, selection);
/*    */       }
/* 83 */       else if (c.getCM() != null)
/* 84 */         NPCScriptManager.getInstance().action(c, action, lastMsg, selection);
/*    */     }
/*    */   }
/*    */ }