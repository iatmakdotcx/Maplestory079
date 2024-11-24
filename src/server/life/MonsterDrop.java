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

import java.util.List;

public class MonsterDrop {

    public List<MonsterDropEntry> drops;
    public int lastAssigned = -1;
    int minChance = 1;

    public MonsterDrop(List<MonsterDropEntry> drops){
        this.drops = drops;
        for (MonsterDropEntry d : drops) {
            if (d.chance > minChance) {
                minChance = d.chance;
            }
        }
        for (MonsterDropEntry d : drops) {
            d.assignedRangeStart = lastAssigned + 1;
            d.assignedRangeLength = (int) Math.ceil((1.0 / d.chance) * minChance);
            lastAssigned += d.assignedRangeLength;
        }
    }

}
