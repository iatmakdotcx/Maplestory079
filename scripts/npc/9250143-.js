/*�¸�����û����*/
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
	        cm.sendSimple("��ӭ.#b\r\n\r\n#L0#ת��ĸ�� - �ף�30+����#l\r\n#L1#ת��ĸ�� - ���ͣ�60+����#l\r\n#L2#ת��ĸ�� - Ӳ�̣��ȼ�120+��#l");
    	    } else if (status == 1) {
	        if (selection == 0 || selection == 1 || selection == 2) {
   		    var em = cm.getEventManager("Visitor");
    		    if (em == null) {
			cm.sendOk("���Ժ�����.");
			cm.dispose();
			return;
    		    }
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
				if (ccPlayer == null || ccPlayer.getLevel() < (selection == 0 ? 30 : (selection == 1 ? 60 : 120))) {
					next = false;
					break;
				}
				size += (ccPlayer.isGM() ? 2 : 1);
			}	
			if (next && size >= 2) {
		    		if (em.getInstance("Visitor" + selection) == null) {
					em.startInstance_Party("" + selection, cm.getPlayer());
		    		} else {
					cm.sendOk("��һ���������Ѿ������ͨ��.");
		    		}
			} else {
				cm.sendOk("�󵳵����г�Ա���������������Ҫ2�˽���ĸ��.");
			}
		    }
		}
	        cm.dispose();
            }
}