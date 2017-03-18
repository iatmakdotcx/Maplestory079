var minPlayers = 1;
var leaderid = 1;
var pqMap = 910010000;
var pqTime = 600000;//10 Minutes

function init() {
	
}

function setup(level, partyId) {
	
    var eim = em.newInstance("HenesysPQ" + (leaderid++));
    em.setProperty("stage", "0");
    var map = eim.getMapInstance(pqMap);
	map.killAllMonsters();
    //map.resetFully(false);
    //map.setSpawns(false);
    //map.resetSpawnLevel(level);
    eim.startEventTimer(pqTime); 
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(pqMap);
    player.changeMap(map, map.getPortal(0));
    player.startQuest(1200, 1012114, true);  //迎月花保护月妙组队任务
}

function playerRevive(eim, player) {}

function scheduledTimeout(eim) {
    end(eim);
}

function changedMap(eim, player, mapid) {
    if (mapid != pqMap) {
        eim.unregisterPlayer(player);
    }
}

function playerDisconnected(eim, player) {
    return 0;
}

function monsterValue(eim, mobId) {
    if (mobId == 9300061) {
        eim.broadcastPlayerMsg(5, "The Moon Bunny has been killed.");
        end(eim);
    }
    return 1;
}

function playerExit(eim, player) {
    eim.unregisterPlayer(player);
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 910010300);
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {}

function leftParty(eim, player) {
    // If only 2 players are left, uncompletable:
    end(eim);
}
function disbandParty(eim) {
    end(eim);
}
function playerDead(eim, player) {}
function cancelSchedule() {}