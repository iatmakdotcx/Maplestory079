/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sf.cherry.net.channel.handler;

import net.sf.cherry.client.MapleCharacter;
import net.sf.cherry.client.MapleClient;
import net.sf.cherry.net.AbstractMaplePacketHandler;
import net.sf.cherry.tools.MaplePacketCreator;
import net.sf.cherry.tools.data.input.SeekableLittleEndianAccessor;

/**
 * @author Jay Estrella
 */
public class FishingTowHandler extends AbstractMaplePacketHandler{

    public void handlePacket(SeekableLittleEndianAccessor slea, MapleClient c) {
        short id = 0;
        MapleCharacter chr = null;
        if(chr.getMapId() == chr.fishingMap){ 
            chr.cancelFishing(); 
    } 

        if (id == -1) { // Cancel Chair 
            chr.setChair(0); 
            c.getSession().write(MaplePacketCreator.cancelChair(-1)); 
            if (chr.getMap() != null) { 
                chr.getMap().broadcastMessage(chr, MaplePacketCreator.showChair(chr.getId(), 0), false); 
            } 
        } else { // Use In-Map Chair 
            chr.setChair(id); 
            c.getSession().write(MaplePacketCreator.cancelChair(id)); 
        } 
    }
    }
