var mapId = 401060100;
//zhgw(id,xue,jy,x,y,map,eim)

function init() {
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function setup(eim, leaderid) {
    em.setProperty("state", "1");
    em.setProperty("leader", "true");
    var eim = em.newInstance("Vergamot" + leaderid);
    eim.setProperty("vergamotSummoned", "0");
    var map = eim.setInstanceMap(mapId);
    map.resetFully();
zhgw(8920100 + Math.floor(Math.random() * 4),1000000000,10000,946,-1347,map,eim);
zhgw(9400014,100000000,100000,946,-1347,map,eim);
zhgw(9400121,100000000,100000,946,-1347,map,eim);
map.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(5, "Ů�������ˣ����С���ˡ�"));
    eim.startEventTimer(3600000); // 2 hr
    return eim;
}

function playerEntry(eim, player) {
    var map = eim.getMapInstance(0);
    player.changeMap(map, map.getPortal(0));
}

function playerRevive(eim, player) {
    return false;
}

function scheduledTimeout(eim) {
    end(eim);
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
    return 0;
}

function monsterValue(eim, mobId) {
var gs;
var hzb;
    var map = eim.getMapFactory().getMap(401060100);
    switch (mobId) {
case 8920100:
case 8920101:
case 8920102:
case 8920103:
zhgw(8920000 + Math.floor(Math.random() * 4),2000000000,10000,1400,-1347,map,eim);
zhgw(9400121,100000000,100000,1400,-1347,map,eim);
zhgw(9400121,100000000,100000,1400,-1347,map,eim);
zhgw(9400014,100000000,100000,1400,-1347,map,eim);
zhgw(9400014,100000000,100000,1400,-1347,map,eim);
gs = Math.floor(Math.random() * 4) + 1;
for (var i = 1 ; i < gs ; i++) {
hzb = Math.floor(Math.random() * 2632) + 444;
eim.getMapInstance(0).spawnAutoDrop(1003717,new java.awt.Point(hzb,-1347)); 
}
map.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(5, "����Ů�������ˣ�����Ů�������ˣ����С���ˣ�ͬʱ��ͼ�ϳ�����Ů�����ڣ������ϸ����"));
break;
case 8920000:
case 8920001:
case 8920002:
case 8920003:
zhgw(8930100,2000000000,10000,1900,-1347,map,eim);
zhgw(9400121,100000000,100000,1900,-1347,map,eim);
zhgw(9400121,100000000,100000,1900,-1347,map,eim);
zhgw(9400121,100000000,100000,1900,-1347,map,eim);
zhgw(9400014,100000000,100000,1900,-1347,map,eim);
zhgw(9400014,100000000,100000,1900,-1347,map,eim);
zhgw(9400014,100000000,100000,1900,-1347,map,eim);
gs = Math.floor(Math.random() * 2) + 1;
for (var i = 1 ; i < gs ; i++) {
hzb = Math.floor(Math.random() * 2632) + 444;
eim.getMapInstance(0).spawnAutoDrop(1003721,new java.awt.Point(hzb,-1347)); 
}

map.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(5, "���Ž���Ů�������ˣ����׳����ˣ����С���ˡ�ͬʱ��ͼ�ϳ����˽���Ů�����ڣ������ϸ����"));
break;
case 8930000:

gs = Math.floor(Math.random() * 2) + 1;
for (var i = 1 ; i < gs ; i++) {
hzb = Math.floor(Math.random() * 2632) + 444;
eim.getMapInstance(0).spawnAutoDrop(1003722,new java.awt.Point(hzb,-1347)); 
}
map.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(5, "���Ž��ױ��������ˣ���ͼ�ϳ����˽��ױ���ͷ���������ϸ����"));
break;
case 8930100: 
zhgw(8930000,200000000,100000,2835,-1347,map,eim);
    var mobx = em.getMonster(8880000);
    var overrideStatsx = Packages.server.life.OverrideMonsterStats();
    overrideStatsx.setOHp(25000000000);
    overrideStatsx.setOExp(10000000);
    overrideStatsx.setOMp(200000);
    mobx.setOverrideStats(overrideStatsx);
    mobx.setHp(25000000000);
    eim.registerMonster(mobx);
    map.spawnMonsterOnGroundBelow(mobx, new java.awt.Point(2835, -1400));
zhgw(9400014,100000000,100000,2835,-1347,map,eim);
zhgw(9400014,100000000,100000,2835,-1347,map,eim);
zhgw(9400014,100000000,100000,2835,-1347,map,eim);
zhgw(9400014,100000000,100000,2835,-1347,map,eim);
zhgw(9400014,100000000,100000,2835,-1347,map,eim);
zhgw(9400121,100000000,100000,2835,-1347,map,eim);
zhgw(9400121,100000000,100000,2835,-1347,map,eim);
zhgw(9400121,100000000,100000,2835,-1347,map,eim);
zhgw(9400121,100000000,100000,2835,-1347,map,eim);
zhgw(9400121,100000000,100000,2835,-1347,map,eim);
gs = Math.floor(Math.random() * 2) + 1;
for (var i = 1 ; i < gs ; i++) {
hzb = Math.floor(Math.random() * 2632) + 444;
eim.getMapInstance(0).spawnAutoDrop(1003718,new java.awt.Point(hzb,-1347)); 
}
map.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(5, "���ű��׵�����������ͽ��ױ��׳����ˣ����С���ˡ�ͬʱ��ͼ�ϳ����˱���ͷ���������ϸ����"));
break;
case 8880000:
allMonstersDead(eim);
break;
}
   
    return 1;
}

function zhgw(id,xue,jy,x,y,map,eim) {
var mob1 = em.getMonster(id);
var overrideStats2 = Packages.server.life.OverrideMonsterStats();
    overrideStats2.setOHp(xue);
    overrideStats2.setOExp(jy);
    overrideStats2.setOMp(200000);
    mob1.setOverrideStats(overrideStats2);
    mob1.setHp(xue);
    eim.registerMonster(mob1);
    map.spawnMonsterOnGroundBelow(mob1, new java.awt.Point( x, y));

}
function playerExit(eim, player) {
    eim.unregisterPlayer(player);

    if (eim.disposeIfPlayerBelow(0, 0)) {
        em.setProperty("state", "0");
        em.setProperty("leader", "true");
    }
}

function end(eim) {
    eim.disposeIfPlayerBelow(100, 400000000);
    em.setProperty("state", "0");
    em.setProperty("leader", "true");
}

function clearPQ(eim) {
    end(eim);
}

function allMonstersDead(eim) {
    eim.restartEventTimer(60000);
        var iter = em.getInstances().iterator();
        while (iter.hasNext()) {
            var eim = iter.next();
            var pIter = eim.getPlayers().iterator();
            while (pIter.hasNext()) {
                var chr = pIter.next();
                var map = eim.getMapFactory().getMap(401060100);
		//map.spawnAutoDrop(3993003,new java.awt.Point(600,-1347)); 

            }
        }

                map.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(5, "�����Ѿ���ɱ���ˣ������ǽ���ʱ��-->60��,���ڶ���ȫ������֮���ټ�ȡ���������Լ�����"));
                            //em.startInstance(em.getParty(), cm.getPlayer().getMap());

var x ;
var gs;
/*
//ħ��
gs = Math.floor(Math.random() * 10) + 40;
for (var i = 1; i < gs ; i++) {
x = Math.floor(Math.random() * 2632) + 444;
eim.getMapInstance(0).spawnAutoDrop(5062000,new java.awt.Point(x,-1347)); 
}
*/
//³�̰�
gs = Math.floor(Math.random() * 11) + 10;
for (var i = 1; i < gs ; i++) {
x = Math.floor(Math.random() * 2632) + 444;
eim.getMapInstance(0).spawnAutoDrop(4001024,new java.awt.Point(x,-1347)); 
}
//�ͼ�Ǳ��ӡ��
gs = Math.floor(Math.random() * 2) + 10;// 10-12��
for (var i = 1; i < gs ; i++) {
x = Math.floor(Math.random() * 2632) + 444;
eim.getMapInstance(0).spawnAutoDrop(2048200,new java.awt.Point(x,-1347)); 
}
//�м�Ǳ��ӡ��
gs = Math.floor(Math.random() * 1) + 3;// 3-4��
for (var i = 1; i < gs ; i++) {
x = Math.floor(Math.random() * 2632) + 444;
eim.getMapInstance(0).spawnAutoDrop(2048201,new java.awt.Point(x,-1347)); 
}
//�߼�Ǳ��ӡ��
gs = Math.floor(Math.random() * 1) + 1;// 1-2��
for (var i = 1; i < gs ; i++) {
x = Math.floor(Math.random() * 2632) + 444;
eim.getMapInstance(0).spawnAutoDrop(2048202,new java.awt.Point(x,-1347)); 
}

//��Ʊ
/*
gs = Math.floor(Math.random() * 41) + 10;
 for (var i = 1; i < gs ; i++) {
x = Math.floor(Math.random() * 2632) + 444;
eim.getMapInstance(0).spawnAutoDrop(4002000,new java.awt.Point(x,-1347)); 
}


gs = Math.floor(Math.random() * 30);
for (var i = 1 ; i < gs ; i++) {
x = Math.floor(Math.random() * 2632) + 444;
eim.getMapInstance(0).spawnAutoDrop(4002002,new java.awt.Point(x,-1347)); 
}
*/


//����
gs = Math.floor(Math.random() * 11) ;
for (var i = 1; i < gs ; i++) {
x = Math.floor(Math.random() * 2632) + 444;
eim.getMapInstance(0).spawnAutoDrop(4000138,new java.awt.Point(x,-1347)); 
}
//�����
/*
gs = Math.floor(Math.random() * 11) + 20;
for (var i = 1; i < gs ; i++) {
x = Math.floor(Math.random() * 2632) + 444;
eim.getMapInstance(0).spawnAutoDrop(4000463,new java.awt.Point(x,-1347)); 
}
*/


    }

function leftParty(eim, player) {}

function disbandParty(eim) {end(eim);}

function playerDead(eim, player) {}

function cancelSchedule() {
}



