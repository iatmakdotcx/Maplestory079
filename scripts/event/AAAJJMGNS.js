/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  功能：麦格纳斯 Magnus Hard
 *  @Author Kent 
 */

//自定义复活次数
var reviveCount = 3;
var TimeA = 1000 * 60 * 60;
var MaxDamage = [], MaxName = [], DISPLAY;
function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "false");
    var eim = em.newInstance("BossMagnus_HARD");
    var map = eim.setInstanceMap(401060100);
    map.resetFully();
    map.killAllMonsters(false);
    var mob = em.getMonster(8880000);//190J
    //mob.getStats().setChange(true);
    mob.changeLevel(230);
    mob.getChangedStats().setOHp(300000000000000);
    mob.setHp(300000000000000);
    /*var modified = em.newMonsterStats();
     modified.setOHp(mob.getMobMaxHp() * 300);
     modified.setOMp(mob.getMobMaxMp() * 9000);
     mob.setOverrideStats(modified);*/
    eim.registerMonster(mob);
    map.spawnMonsterOnGroundBelow(mob, new java.awt.Point(1860, -1450));
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
        eim.setProperty("Name", "[ 困 难 ] 暴　君");
        eim.setProperty("PlayerName", eim.getPlayers().get(0).getName());
    }
	    /* 下面的内容是要复制的 */
    DISPLAY = true;//true 显示 队友 | false 不显示队友
    /* Register = 注册项目制进去 */
    Register(eim, player);
    /* 这里的内容是要复制的 */
    var map = eim.getMapInstance(0);
    player.setReviveCount(reviveCount);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    if (player.getReviveCount() > 0) {
        var map = player.getMap();
        //player.eventRevive();
		player.heal();
        player.changeMap(map, map.getPortal(0));
        return true;
    }
    player.addHP(50);
    var map = eim.getMapFactoryMap(401060000);
    player.changeMap(map, map.getPortal(0));
    return true;
}

function changedMap(eim, player, mapid) {
    if (mapid != 401060100) {
        eim.unregisterPlayer(player);
        if (eim.disposeIfPlayerBelow(0, 0)) {
            em.setProperty("state", "0");
            em.setProperty("leader", "true");
        }
    }
}

function playerDisconnected(eim, player) {
    eim.disposeIfPlayerBelow(0, 401060000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
    return 0;
}

function monsterValue(eim, mobId) {
    switch (mobId) {
        case 8880000:
            eim.setProperty("MiA", Math.floor((TimeA - eim.getTimeLeft()) / (60 * 1000)));
            eim.setProperty("MiX", Math.floor((TimeA - eim.getTimeLeft()) % (60 * 1000) / 1000));
            openNpc(eim, 1540008, "TimCareU");
            for (i = 0; i < eim.getPlayers().size() ; i++) {
                eim.getPlayers().get(i).setPQLog("麦格纳斯[困难]");
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
function monsterDamaged(eim, player, mobID, damage) {
    switch (mobID) {
        case 100100://这个是攻击这个怪物显示伤害
            /* 这里是玩家造成伤害实时显示 */
            C_UP(eim, player, damage)
            /* 上面的内容是要复制的 */
            break;
    }
};

function monsterKilled(eim, player, mobID) {
    switch (mobID) {
        case 100100://最后要显示输出伤害的怪物id 通畅都是最后的一个boss
            /* 这里是打死BOSS执行通关 | eim player | 副本时间 | 副本名称  | 公告类型 */
            C_THREAD(eim, player, TimeA, "麦格纳斯", 282);
            var map = eim.getMapInstance(0);
            map.spawnNpc(NPCID写这里, new java.awt.Point(-89, 314));
            /* 上面的内容是要复制的 */
            break;
    }
};
function playerExit(eim, player) {
    eim.unregisterPlayer(player);
    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}
function scheduledTimeout(eim) {
    eim.disposeIfPlayerBelow(100, 401060000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    scheduledTimeout(eim);
}

function allMonstersDead(eim) {
    //em.broadcastServerMsg(5120027, "麦格纳斯已被消灭，请在1分钟内点击NPC获得奖励。" ,true);
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
    var time = 4500;
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
        var mob = map.getMonsterById(8880000);
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
/* 下面的内容要进行复制的 */
function C_THREAD(eim, Char, time, name, type) {
    var max = Math.max.apply(null, MaxDamage);
    var minutes = Math.floor((time - eim.getTimeLeft()) / (60 * 1000));
    var seconds = Math.floor((time - eim.getTimeLeft()) % (60 * 1000) / 1000);
    eim.setProperty("minutes", minutes);
    eim.setProperty("seconds", seconds);
    var Content = []
    var group = [];
    Content.push("　[ BOSS副本 ]　" + format(" ", 42, name.toString()));
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        var Player = eim.getPlayers().get(i)
        var limitBreak = Player.getStat().getLimitBreak(Player)
        if (Char.getParty().getLeader().getId() == Player.getId()) {
            Content.push("　[ 副本队长 ]　" + format(" ", 15, Player.getName().toString()) + "　武器破攻　" + format(" ", 22, (limitBreak).toString()));
        } else {
            Content.push("　[ 副本队员 ]　" + format(" ", 15, Player.getName().toString()) + "　武器破攻　" + format(" ", 22, (limitBreak).toString()));
        }
        var C_A = parseInt(eim.getProperty(eim.getPlayers().get(i).getId() + "-D_A") / 1E8)
        var C_B = parseInt(eim.getProperty(eim.getPlayers().get(i).getId() + "-D_C") / 1E8)
        var C_C = (parseInt(eim.getProperty(eim.getPlayers().get(i).getId() + "-D_A")) / (minutes * 60 + seconds)) / 1E8

        if (DISPLAY) {
            Content.push("　[ 伤害数据 ]　" + format(" ", 43, ("BOSS血量 " + format(" ", 12, C_A.toString()) + " E").toString()));
            Content.push("　[ 伤害数据 ]　" + format(" ", 43, ("最高伤害 " + format(" ", 12, C_B.toString()) + " E").toString()));
            Content.push("　[ 伤害数据 ]　" + format(" ", 43, ("平均秒伤 " + format(" ", 12, C_C.toFixed(2).toString()) + " E").toString()));
        };
        group.push("[" + [Player.getId(), "'" + Player.getName() + "'", C_A] + "]");
    }
    Content.push("　[ 击杀时间 ]　" + format(" ", 42, ("" + minutes + " 分钟 " + seconds + " 秒").toString()));
    Content.push("　[ 全场最佳 ]　" + format(" ", 42, MaxName[MaxDamage.indexOf(max)].toString()));
    for (var i in Content) {
        em.worldSpouseMessage(0x16, Content[i]);
    }

    //em.worldMessageEffect("玩家 " + Char.getParty().getLeader().getName() + " 挑战排行榜副本： " + name + " 时间： " + minutes + " 分钟 " + seconds + " 秒 !!!", type, 10);
    eim.setProperty("groupgame", "[" + group + "]");
    //eim.getPlayers().get(0).openNpc(0, "goodtext");
}

function Register(eim, chr) {
    var DOMList = ["-D_A", "-D_D", "-D_B", "-D_C"];
    for (var i in DOMList) {
        eim.setProperty(chr.getId() + DOMList[i], "0");
    }
}
function C_UP(eim, chr, damage) {
    D_A = parseInt(eim.getProperty(chr.getId() + "-D_A"));//累计值
    D_B = parseInt(eim.getProperty(chr.getId() + "-D_B"));//攻击值
    D_C = parseInt(eim.getProperty(chr.getId() + "-D_C"));//最高值
    D_A += parseInt(Math.abs(damage))
    D_B += 1
    D_D = parseInt(Math.abs(damage))//伤害值
    eim.setProperty(chr.getId() + "-D_D", String(D_D));
    eim.setProperty(chr.getId() + "-D_B", String(D_B));
    eim.setProperty(chr.getId() + "-D_A", String(D_A));
    if (parseInt(Math.abs(damage)) > D_C) {
        eim.setProperty(chr.getId() + "-D_C", String(Math.abs(damage)));
    }
    for (var i = 0; i < eim.getPlayerCount(); i++) {
        MaxDamage[i] = parseInt(eim.getProperty(eim.getPlayers().get(i).getId() + "-D_A"));
        MaxName[i] = eim.getPlayers().get(i).getName();
    }
    var max = Math.max.apply(null, MaxDamage);
}

var format = function FormatString(c, length, content) {
    var str = "";
    var cs = "";
    if (content.length > length) {
        str = content;
    } else {
        for (var j = 0; j < length - content.getBytes("GB2312").length; j++) {
            cs = cs + c;
        }
    }
    str = content + cs;
    return str;
}