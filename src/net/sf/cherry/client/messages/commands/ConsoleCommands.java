/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sf.cherry.client.messages.commands;

import java.util.Collection;
import java.util.Collections;
import java.util.LinkedHashSet;

import net.sf.cherry.client.MapleCharacter;
import net.sf.cherry.net.channel.ChannelServer;

/**
 *
 * @author David
 * @credit: Hades for (Examples)
 * @credit: kevintjuh93 (connect the string in the array)
 */

public class ConsoleCommands {
    
    public static boolean executeCommand(String[] sub, char heading) {
       // WorldServer srv = WorldServer.getInstance();
        //WorldServer worldServer = null;
        ChannelServer ChannelServer = null;
        //MapleClient c = null;
       // MapleCharacter player = c.getPlayer();
        
       
     //   switch (sub[0].toLowerCase()) {
            if(sub[0].toLowerCase().equals("gmonline")){
                for (ChannelServer ch : ChannelServer.getAllInstances()) {
                    String s = "Characters online (Channel: " + ch.getChannel() + " Online: " + ch.getPlayerStorage().getAllCharacters().size() + ") : ";
                    if (ch.getPlayerStorage().getAllCharacters().size() < 50) {
                        for (MapleCharacter chr : ch.getPlayerStorage().getAllCharacters()) {
                            if (chr.isGM()) {
                                s += MapleCharacter.makeMapleReadable(chr.getName()) + ", ";
                            }
                        }
                        System.out.println(s.substring(0, s.length() - 2));
                    }
                }
} else if(sub[0].toLowerCase().equals("online")){
                for (ChannelServer ch : ChannelServer.getAllInstances()) {
                        String s = "Characters online (Channel: " + ch.getChannel() + " Online: " + ch.getPlayerStorage().getAllCharacters().size() + ") : ";
                        if (ch.getPlayerStorage().getAllCharacters().size() < 50) {
                            for (MapleCharacter chr : ch.getPlayerStorage().getAllCharacters()) {
                                s += MapleCharacter.makeMapleReadable(chr.getName()) + ", ";
                            }
                            System.out.println(s.substring(0, s.length() - 2));
                        }
                    }
} else if(sub[0].toLowerCase().equals("shutdown")){
          //  case "shutdown":
                ChannelServer.shutdown();
} else if(sub[0].toLowerCase().equals("restart")){
          //  case "restart":
              //  ChannelServer.restart();
} else if(sub[0].toLowerCase().equals("exprate")){
          //  case "exprate":
               /* if (sub.length <= 1) {
                    worldServer = srv.getWorld(Integer.parseInt(sub[1]));
                    worldServer.setExpRate(Integer.parseInt(sub[2]));
                    for (MapleCharacter mc : worldServer.getPlayerStorage().getAllCharacters()) {
                        mc.setRates();
                    }
                    break;
                } else {
                    System.out.println("[Command] !exprate {world #} {rate}");
                }*/
} else if(sub[0].toLowerCase().equals("saveall")){
         //   case "saveall":
                try {
                     Collection<ChannelServer> ccs = ChannelServer.getAllInstances();
       for (ChannelServer chan : ccs) {
         //mc.dropMessage("Saving characters on channel " + chan.getChannel());
         if (chan != null) {
           Collection<MapleCharacter> chars = new LinkedHashSet(Collections.synchronizedCollection(chan.getPlayerStorage().getAllCharacters()));
           synchronized (chars) {
             for (MapleCharacter chr : chars) {
               try {
                 if (chr != null)
                   chr.saveToDB(true);
               } catch (Exception e) {
               }
               continue;
             }
           }
         }
       }
                    System.out.println("[Notice] World Saved!");
                } catch (Exception e) {
                    System.out.println("[Notice] Error has occur!");
                }     
    
} else if(sub[0].toLowerCase().equals("servermessage")){
           // case "servermessage":
               // worldServer = srv.getWorld(Integer.parseInt(sub[1]));
                //worldServer.setServerMessage(joinStringFrom(sub, 2));
} else if(sub[0].toLowerCase().equals("notice")){
         //   case "notice":
} else if(sub[0].toLowerCase().equals("message")){
          //  case "message":
                try {
                    //player.getMap().broadcastMessage(Integer.parseInt(sub[1]), MaplePacketCreator.serverNotice(6, " " + joinStringFrom(sub, 2)));
                    System.out.println("[Notice] " + joinStringFrom(sub, 2));
                } catch (Exception ex) {
                    System.out.println("Please enter the correct world (starting from 0)");
                }
             //   break;
           // default:
               // return false;
        }
        return true;
    }
    
    private static String joinStringFrom(String arr[], int start) {
        return joinStringFrom(arr, start, arr.length - 1);
    }

    private static String joinStringFrom(String arr[], int start, int end) {
        StringBuilder builder = new StringBuilder();
        for (int i = start; i < arr.length; i++) {
            builder.append(arr[i]);
            if (i != end) {
                builder.append(" ");
            }
        }
        return builder.toString();
    }
}
