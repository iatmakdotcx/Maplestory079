/*
	This file is part of the OdinMS Maple Story Server
    Copyright (C) 2008 Patrick Huy <patrick.huy@frz.cc>
		       Matthias Butz <matze@odinms.de>
		       Jan Christian Meyer <vimes@odinms.de>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as
    published by the Free Software Foundation version 3 as published by
    the Free Software Foundation. You may not use, modify or distribute
    this program under any other version of the GNU Affero General Public
    License.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

package net.sf.cherry.net.channel.handler;

import net.sf.cherry.client.IItem;
import net.sf.cherry.client.MapleClient;
import net.sf.cherry.client.MapleInventoryType;
import net.sf.cherry.client.anticheat.CheatingOffense;
import net.sf.cherry.net.AbstractMaplePacketHandler;
import net.sf.cherry.tools.MaplePacketCreator;
import net.sf.cherry.tools.data.input.SeekableLittleEndianAccessor;

/**
 * @author Jay Estrella
 */
public class FishingHandler extends AbstractMaplePacketHandler{

    @Override
    public void handlePacket(SeekableLittleEndianAccessor slea, final MapleClient c) {
        int itemId = 3011000;
        if (c.getPlayer().getJob() == null || c.getPlayer().getMap() == null) { 
            return; 
        } 
        final IItem toUse = c.getPlayer().getInventory(MapleInventoryType.SETUP).findById(itemId); 
        if (toUse == null) { 
            c.getPlayer().getCheatTracker().registerOffense(CheatingOffense.USING_UNAVAILABLE_ITEM, Integer.toString(itemId)); 
            return; 
        } 
         
    /*if (itemId == c.getPlayer().fishingChair && c.getPlayer().getMapId() == c.getPlayer().fishingMap) { 
            c.getPlayer().fishingTimer(5000);//1分钟一次 60000
              c.getPlayer().set怪物伤害(1);
        }*/
        if (itemId == c.getPlayer().fishingChair && c.getPlayer().getMapId() == c.getPlayer().fishingMap) { 
            if (c.getPlayer().getItemQuantity(5340001, false) == 1) {
                c.getPlayer().getClient().getSession().write(MaplePacketCreator.sendHint("使用高级鱼竿钓鱼。1分钟一次\r\n", 200, 200));
            c.getPlayer().fishingTimer(6000);//1分钟一次 60000
           // c.getPlayer().saveToDB(true);
            } else if (c.getPlayer().getItemQuantity(5340000, false) == 1) {
                c.getPlayer().getClient().getSession().write(MaplePacketCreator.sendHint("使用普通鱼竿钓鱼。3分钟一次\r\n", 200, 200));
            c.getPlayer().fishingTimer(18000);//1分钟一次 60000
            //c.getPlayer().saveToDB(true);

            } else if (c.getPlayer().getItemQuantity(5340000, false) == 0 && c.getPlayer().getItemQuantity(5340001, false) == 0) {
                c.getPlayer().getClient().getSession().write(MaplePacketCreator.sendHint("没有鱼竿无法钓鱼\r\n请去商城购买鱼竿！", 200, 200));
                //c.getPlayer().cancelFishing();
                return;
            }
        }else if(itemId == c.getPlayer().fishingChair && c.getPlayer().getMapId() != c.getPlayer().fishingMap){
            return; 
        } else if(itemId != c.getPlayer().fishingChair && c.getPlayer().getMapId() == c.getPlayer().fishingMap){
            return;
        } else if (toUse == null) { 
            c.getPlayer().getCheatTracker().registerOffense(CheatingOffense.USING_UNAVAILABLE_ITEM, Integer.toString(itemId)); 
            return; 
        } else {
            return;
        }

        c.getPlayer().setChair(itemId); 
        c.getPlayer().getMap().broadcastMessage(c.getPlayer(), MaplePacketCreator.showChair(c.getPlayer().getId(), itemId), false); 
        c.getSession().write(MaplePacketCreator.enableActions()); 
    }
    
}