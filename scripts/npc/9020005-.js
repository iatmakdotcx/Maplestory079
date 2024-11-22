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
	cm.sendSimple("#b#L2#ȥ���Ƽ�����һ���ۻ�.#l\r\n#L3#���˼���롤����������50����Կ��) (STR/DEX)#l\r\n#L4#�����ꡤ�롤����������50���Ӽ�����INT / LUK��#l\r\n#L5#����˹������������50���Ӽ�����STR/ DEX��#l\r\n#L6#�������������������50���Ӽ�����DEX/ LUK��#l\r\n#L7#�������롤����������50���Ӽ�����STR/ DEX��#l#k");
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
			if (ccPlayer == null || ccPlayer.getLevel() < 120) {
				next = false;
				break;
			}
			size += (ccPlayer.isGM() ? 4 : 1);
		}	
		if (next && size >= 2) {
			var em = cm.getEventManager("Prison");
			if (em == null) {
				cm.sendOk("������Ŀǰ��. ���Ժ�����.");
			} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap(), 200);
		    } else {
			cm.sendOk("��һ���������Ѿ������ͨ��.");
		    }
			}
		} else {
			cm.sendOk("��ȫ��2+��Ա������������͵ȼ�120�����.");
		}
	    }
	} else if (selection == 3 || selection == 4 || selection == 5 || selection == 6 || selection == 7) {
		if (!cm.canHold(1132091 + selection,1)) {
			cm.sendOk("ʹװ����.");
		} else if (cm.haveItem(4001534,50)) { //TODO JUMP
			cm.gainItem(1132091 + selection, 1);
			cm.gainItem(4001534, -50);
		} else {
			cm.sendOk("������50���ӹؼ�.");
		}
	}
	cm.dispose();
    }
}