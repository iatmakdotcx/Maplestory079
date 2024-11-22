var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendSimple("#b#L2#���������ʿһ���ۻ�.#l\r\n#L3#��������10������#l\r\n#L4#���˵Ķ�����20������#l#k");
    } else if (status == 1) {
	if (selection == 2) {
	    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
		cm.sendOk("�����쵼�˱���������.");
	    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var mapId = cm.getPlayer().getMapId();
		var next = true;
		var size = 0;
		var it = party.iterator();
		while (it.hasNext()) {
			var cPlayer = it.next();
			var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if (ccPlayer == null || ccPlayer.getLevel() < 20) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && size >= 2) {
			var em = cm.getEventManager("Iceman");
			if (em == null) {
				cm.sendOk("�Ҳ�������ҵ����ѣ��˿�. ���Ժ�����.");
			} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 70);
		    } else {
			cm.sendOk("��һ���������Ѿ������ͨ��.");
		    }
			}
		} else {
			cm.sendOk("��ȫ��2+��Ա�������������20�������.");
		}
	    }
	} else if (selection == 3) {
		if (!cm.canHold(1072510,1)) {
			cm.sendOk("ʹװ����.");
		} else if (cm.haveItem(4001529,10)) { //TODO JUMP
			cm.gainItem(1072510, 1);
			cm.gainItem(4001529, -10);
		} else {
			cm.sendOk("������10����.");
		}
	} else if (selection == 4) {
		if (!cm.canHold(1032100,1)) {
			cm.sendOk("ʹװ����.");
		} else if (cm.haveItem(4001529,20)) { //TODO JUMP
			cm.gainItem(1032100, 1);
			cm.gainItem(4001529, -20);
		} else {
			cm.sendOk("������20����.");
		}
	}
	cm.dispose();
    }
}