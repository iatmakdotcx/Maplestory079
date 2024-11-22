/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License version 3
 as published by the Free Software Foundation. You may not use, modify
 or distribute this program under any other version of the
 GNU Affero General Public License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package server.life;

import client.MapleCharacter;
import client.MapleClient;
import server.MapleShopFactory;
import server.maps.MapleMapObjectType;
import tools.MaplePacketCreator;

public class MapleNPC extends AbstractLoadedMapleLife {

    private String name = "MISSINGNO";

    public MapleNPC(final int id, final String name) {
        super(id);
        this.name = name;
    }

    public final boolean hasShop() {
        return MapleShopFactory.getInstance().getShopForNPC(getId()) != null;
    }

    public final void sendShop(final MapleClient c) {
        MapleShopFactory.getInstance().getShopForNPC(getId()).sendShop(c);
    }

    @Override
    public void sendSpawnData(final MapleClient client) {
        if (isHidden()) return;
        if (getId() < 9901000) {
            client.sendPacket(MaplePacketCreator.spawnNPC(this, true));
            client.sendPacket(MaplePacketCreator.spawnNPCRequestController(this, true));
        }
    }

    @Override
    public final void sendDestroyData(final MapleClient client) {
        client.getSession().writeAndFlush(MaplePacketCreator.removeNPCController(getObjectId()));
        client.sendPacket(MaplePacketCreator.removeNPC(getObjectId()));
    }

    @Override
    public final MapleMapObjectType getType() {
        return MapleMapObjectType.NPC;
    }

    public final String getName() {
        return name;
    }

    public void setName(String n) {
        this.name = n;
    }

    @Override
    public final String toString() {
        final StringBuilder sb = new StringBuilder();

        sb.append(getId());
        sb.append("(");
        sb.append(name);
        sb.append(") (X:");
        sb.append(getPosition().x);
        sb.append(", Y:");
        sb.append(getPosition().y);
        sb.append(") hide:");
        sb.append(isHidden());
        sb.append(" custom:");
        sb.append(isCustom());
//        sb.append(" limitedname:");
//        sb.append(limitedname);
        return sb.toString();
    }

}
