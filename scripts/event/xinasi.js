/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  ���ܣ������˹ Magnus Hard
 *  @Author Kent 
 */

//�Զ��帴�����
var reviveCount = 3;
var TimeA = 12000 * 60 * 60;

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("xinasi");//��------
    var map = eim.setInstanceMap(271040100);//��------
    map.resetFully();
    map.killAllMonsters(false);
    var mob = em.getMonster(8850011);//��------
    mob.getStats().setChange(true);
    mob.changeLevel(170);//��------
    mob.getChangedStats().setOHp(36200000000);//��------
    mob.setHp(36200000000);//��------
    /*var modified = em.newMonsterStats();
     modified.setOHp(mob.getMobMaxHp() * 300);
     modified.setOMp(mob.getMobMaxMp() * 9000);
     mob.setOverrideStats(modified);*/
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(-147, 115));//��------
    eim.setProperty("HPstate", "1");
    eim.startEventTimer(TimeA); // 30 min
    eim.schedule("checkChrHP", 2000);
    eim.schedule("summonFall", 5000);
    return eim;
}

function playerEntry(eim, player) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
    }
    if (i <= 1) {
        eim.setProperty("Name", "[ �� �� ] ���װ�");
        eim.setProperty("PlayerName", eim.getPlayers().get(0).getName());
    }

    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        player.eventRevive();
		player.heal();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(105300303);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function changedMap(eim, player, mapid) {
    if (mapid != 271040100) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(0, 271040100);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    return 0;
}

function monsterValue(eim, mobId) {
    switch (mobId) {
        case 8850011:
            eim.setProperty("MiA", Math.floor((TimeA - eim.getTimeLeft()) / (360 * 1000)));
            eim.setProperty("MiX", Math.floor((TimeA - eim.getTimeLeft()) % (360 * 1000) / 1000));
 //           openNpc(eim, 1540008, "TimCareU");
            for (i = 0; i < eim.getPlayers().size() ; i++) {
                eim.getPlayers().get(i).setPQLog("���װ�[����]");
            }
            break;
    }
    return 1;
}
function openNpc(eim, npcid, mode) {
    for (var i = 0; i < eim.getPlayerCount() ; i++) {
        eim.getPlayers().get(i).openNpc(npcid, mode);
    }
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 271040100);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}


function clearPQ(eim) {
    scheduledTimeout(eim);
}


function allMonstersDead(eim) {
    //em.broadcastServerMsg(5120027, "�����˹�ѱ���������1�����ڵ��NPC��ý�����" ,true);
    //eim.startEventTimer(1000 * 60); //10 min
    //eim.getMapInstance(0).spawnNpc(9390123, new java.awt.Point(599, -1386));
    eim.setProperty("HPstate", "-1");
    var state = em.getProperty("state");
    if (state.equals("1")) {
        em.setProperty("state", "2");
    } else if (state.equals("2")) {
        em.setProperty("state", "3");
    }
}

function leftParty(eim, player) {
}
function disbandParty(eim) {
}
function playerDead(eim, player) {
}
function cancelSchedule() {
}

function summonFall(eim) {
    var state = parseInt(eim.getProperty("HPstate"));
    var time = 34500;
    if (state > 0) {
        var map = eim.getMapInstance(0);
        map.obtacleFall(5 * state + 1, 1, 8);
        eim.schedule("summonFall", time);
    }
}

function checkChrHP(eim) {
    var state = parseInt(eim.getProperty("HPstate"));
    if (state > 0) {
        var map = eim.getMapInstance(0);
        var mob = map.getMonsterById(8850011);
        if (mob != null) {
            for (i = 0; i < eim.getPlayers().size() ; i++) {
                mob.checkMobZone(eim.getPlayers().get(i), true);
            }
            eim.schedule("checkChrHP", 2000);
        }
    }
}
function pickUpItem(eim, player, itemID) {
}