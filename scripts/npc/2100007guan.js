
1var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
	if (status == 0) {
	text = "����Ҫ��Щʲô��\r\n";
				text += "#L0##k��������#l\r\n\r\n";
				text += "#L1##k�һ����#l\r\n\r\n";
				text += "#L2##k�������#l\r\n\r\n";
				text += "#L3##k��ս����#l\r\n\r\n";
					text += "\r\n";
            cm.sendSimple(text);
    } else if (status == 1) {
		if (selection == 0) {
			cm.openNpc(9250010,0);
		}else if (selection == 1) {
			if(cm.haveItem(4001246,20) == false){
				cm.sendNext("#v4001246#���� 20 ��")
				cm.dispose();
			}else{
				cm.gainItem(1102389,10,10,10,10,0,0,10,10,0,0,0,0,0,0);
				cm.gainItem(4001246,-20);
				cm.dispose();
			}
		}else if (selection == 2) {
			cm.openNpc(2120001,3);
	}else if (selection == 3) {		
	var test = "��������\r\n";
	   test += "Ҫ��ȼ���100��\r\n";
	   test += "������ߣ�#v4001201#\r\n";
	cm.sendYesNo(test)
	}
    } else if (status == 2) {
	if (cm.getParty() != null) {
        cm.sendNext("���˳���ǰ����");
        cm.dispose();
	} else if (cm.getChar().getLevel() < 100) {
        cm.sendNext("��ǰ�ȼ����㡣");
        cm.dispose();
	} else if (cm.haveItem(4001201,1) == false) {
        cm.sendNext("���߲��㣬�޷����롣");
        cm.dispose();
	} else if (cm.getPlayerCount(229010100) > 0 && cm.getPlayerCount(229010000) > 0) {
        cm.sendNext("��ǰ��������������ս���Ժ�����");
        cm.dispose();
	}else{
	cm.gainItem(4001201,-1);	
	cm.resetMap(229010100);
	cm.resetMap(229010000);
	cm.warp(229010100,0);
	cm.spawnMobOnMap(9500196, 1, -847, 88, 229010100, 50);
	cm.spawnMobOnMap(9500196, 1, -651, 88, 229010100, 50);
	cm.spawnMobOnMap(9500196, 1, -467, 88, 229010100, 50);
	cm.spawnMobOnMap(9500196, 1, -293, 88, 229010100, 50);
	cm.spawnMobOnMap(9500196, 1, -52, 88, 229010100, 50);
	cm.dispose();
    }
}}