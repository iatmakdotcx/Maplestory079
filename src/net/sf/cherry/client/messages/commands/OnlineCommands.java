package net.sf.cherry.client.messages.commands;



 import java.rmi.RemoteException;
import java.util.Collection;

import net.sf.cherry.client.MapleCharacter;
import net.sf.cherry.client.MapleCharacterUtil;
import net.sf.cherry.client.MapleClient;
import net.sf.cherry.client.messages.Command;
import net.sf.cherry.client.messages.CommandDefinition;
import net.sf.cherry.client.messages.MessageCallback;
import net.sf.cherry.net.channel.ChannelServer;

 public class OnlineCommands
   implements Command
 {
   public static void Fake(Exception e)
   {
     e.toString();
   }

   public void execute(MapleClient c, MessageCallback mc, String[] splitted)
     throws Exception, RemoteException
   {
     if (splitted[0].toLowerCase().equals("!在线玩家")) {
       mc.dropMessage("在线人物: ");
       for (ChannelServer cs : ChannelServer.getAllInstances()) {
         mc.dropMessage("[频道 " + cs.getChannel() + "]");
         StringBuilder sb = new StringBuilder();
         Collection<MapleCharacter> cmc = cs.getPlayerStorage().getAllCharacters();
         for (MapleCharacter chr : cmc) {
           if (sb.length() > 150) {
             sb.setLength(sb.length() - 2);
             mc.dropMessage(sb.toString());
             sb = new StringBuilder();
           }
           if (!chr.isGM()) {
             sb.append(MapleCharacterUtil.makeMapleReadable("ID:" + chr.getId() + "Name:" + chr.getName()));
             sb.append(", ");
           }
         }
         if (sb.length() >= 2) {
           sb.setLength(sb.length() - 2);
           mc.dropMessage(sb.toString());
         }
       }
   
 }
      }
    public CommandDefinition[] getDefinition()
 {
     return new CommandDefinition[] {
         new CommandDefinition("在线玩家", "", "List all of the users on the server, organized by channel.", 5),
        };
     }
    }
 






