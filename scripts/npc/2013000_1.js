function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��ӭ�´�������ս��");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {	
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
	if (cm.getMapId() == 920011200) { //inside orbis pq
    for (var i = 4001044; i < 4001064; i++) {
        cm.removeAll(i); //holy
    }
    cm.warp(200080101);
    cm.dispose();
    return;
    }
    var em = cm.getEventManager("OrbisPQ");
    if (em == null) {
    cm.sendOk("�ű���������ϵ����Ա��");
    cm.dispose();
    return;
    }
    if (!cm.isLeader()) {
    cm.sendOk("��ֻ�ܸ���Ķӳ�˵����");
    cm.dispose();
    return;
    }
     if (em.getProperty("pre").equals("0")) {
		if(cm.getPlayer().haveItem(4001063, 20) && cm.getPlayer().getMapId() == 920010000) {
			cm.givePartyExp(50000);
			cm.gainItem(4001063, -20);
			em.setProperty("pre", "1");
		} else{
			cm.sendOk("�ұ�Զ�ž������������������ռ��������ҳ�ȥ��");
			cm.dispose();
			return;
		}
    }
	if (cm.getMapId() == 920010000) {
            clear();
        cm.warpParty(920010000, 2);
		cm.dispose();
        return;
		}
	if (cm.getMapId() == 920010100) {		
	   if (!cm.haveItem(4001055)) {
		}else {
        cm.sendOk("���Ѿ�����˴�����,��������ݷ���Ů������м�,����Ů���������");
		cm.dispose();
		return;
		}
        if (em.getProperty("stage").equals("6")) {
        if (em.getProperty("finished").equals("0")) {
			cm.sendOk("лл��������ǣ�������Ů��˵����");
            cm.warpParty(920010800); //GARDEN.  
        } else {
            cm.sendOk("лл��������ǣ�������Ů��˵����");
        }
		
        } else {
        cm.sendOk("���ռ�����Ů��������Ƭ�ڷ첹Ů�����Ȼ��������̸��������ǰ�����һ��Ѱ�������ݡ�");
        }
		cm.dispose();
        return;
		}
	if (cm.getMapId() == 920010200) {
        if (!cm.haveItem(4001050,30)) {
		cm.sendOk("����Ҫ#b#t4001050# 30��#k��Ŀǰ��#c4001050#����");
        } else {
        cm.removeAll(4001050);
        cm.gainItem(4001044,1); //first piece
        cm.givePartyExp(50000);
        clear();
        }
		cm.dispose();
        return;
		}
	if (cm.getMapId() == 920010300) {
        if (!cm.haveItem(4001051,15)) {
        cm.sendOk("����Ҫ#b#t4001051# 15��#k��Ŀǰ��#c4001051#����");
        } else {
        cm.removeAll(4001051);
        cm.gainItem(4001045,1); //second piece
        cm.givePartyExp(30000);
        clear();
        }
		cm.dispose();
        return;
		}
	if (cm.getMapId() == 920010400) {
        if (em.getProperty("stage3").equals("0")) {
        cm.sendOk("���ҵ�����ĳ�Ƭ���������������ֺв���\r\n#v4001056#������\r\n#v4001057#����һ\r\n#v4001058#���ڶ�\r\n#v4001059#������\r\n#v4001060#������\r\n#v4001061#������\r\n#v4001062#������\r\n");
        } else if (em.getProperty("stage3").equals("1")) {
        if (cm.canHold(4001046,1)) {
            cm.gainItem(4001046,1); //third piece
            cm.givePartyExp(30000);
            clear();
            em.setProperty("stage3", "2");
        } else {
            cm.sendOk("�����һЩ�ռ䡣");
        }
        } else {
        cm.sendOk("лл�㡣");
        }
		cm.dispose();
        return;
		}
	if (cm.getMapId() == 920010500) {
	    if (em.getProperty("stage4").equals("0")) {
		var players = Array();
		var total = 0;
		for (var i = 0; i < 3; i++) {
		    var z = cm.getMap().getNumPlayersItemsInArea(i);
		    players.push(z);
		    total += z;
		}
		if (total != 3) {
		    cm.sendOk("��Ҫ��3��ѡ��վ����Ŀƽ̨�ϣ��ӳ��ڵ��NPC����.");
		} else {
		    var num_correct = 0;
		    for (var i = 0; i < 3; i++) {
			if (em.getProperty("stage4_" + i).equals("" + players[i])) {
			    num_correct++;
			}
		    }
		    if (num_correct == 3) {
			if (cm.canHold(4001047,1)) {
	    		    clear();
			    cm.gainItem(4001047,1); //fourth
			    cm.givePartyExp(200000);
	    		    em.setProperty("stage4", "1");
			} else {
			    cm.sendOk("���ڳ��ռ�!");
			}
			cm.dispose();
		    } else {
    	    		cm.showEffect(true, "quest/party/wrong_kor");
    	    		cm.playSound(true, "Party1/Failed");
			if (num_correct > 0) {
			    cm.sendOk("һ��ƽ̨����ȷ��.");
			} else {
			    cm.sendOk("���е�ƽ̨���Ǵ����.");

			}
			cm.dispose();
		    }
		}
	    } else {
		cm.sendOk("�ű��򿪣� �ߣ�");
		cm.dispose();
	    }
	    cm.dispose();
	    return;
		}
	if (cm.getMapId() == 920010600) {
        if (!cm.haveItem(4001052,35)) {
		cm.sendOk("����Ҫ#b#t4001052# 35��#k��Ŀǰ��#c4001052#����");
        } else {
        cm.removeAll(4001052);
        cm.gainItem(4001048,1); //fifth piece
        //cm.givePartyExp(7500);
        clear();
        }
		cm.dispose();
        return;
		}
	if (cm.getMapId() == 920010700) {
	    if (em.getProperty("stage6").equals("0")) {
		var react = Array();
		var total = 0;
	    	for(var i = 0; i < 3; i++) {
		    if (cm.getMap().getReactorByName("" + (i + 1)).getState() > 0) {
			react.push("1");
			total += 1;
		    } else {
			react.push("0");
		    }
	    	}
		if (total != 2) {
		    cm.sendOk("��ͼ������Ҫ�����������˳���,�밴ѹ�ϰ�.");
			cm.dispose();
		} else {
		    var num_correct = 0;
		    for (var i = 0; i < 3; i++) {
			if (em.getProperty("stage62_" + i).equals("" + react[i])) {
			    num_correct++;
			}
		    }
		    if (num_correct == 3) {
			if (cm.canHold(4001049,1)) {
	    		    clear();
			    cm.gainItem(4001049,1); 
			    cm.givePartyExp(100000);
	    		    em.setProperty("stage6", "1");
					cm.dispose();
			} else {
			    cm.sendOk("���ڳ��ռ�!");
				cm.dispose();
			}
		    } else {
    	    		cm.showEffect(true, "quest/party/wrong_kor");
    	    		cm.playSound(true, "Party1/Failed");
			if (num_correct >= 1) { //this should always be true
			    cm.sendOk("����һ���ܸ�����ȷ��.");
				cm.dispose();
			} else {
			    cm.sendOk("�������ܸ��Ǵ����.");
				cm.dispose();
			}
		    }
		}
	    } else {
		cm.sendOk("лл!!");
		cm.dispose();
	    }
	    return;
		}
	if (cm.getMapId() == 920010800) {
	    cm.sendOk("���ҵ�һ��������սʤС����İְ֣�һ�����#r��#k#v4001053#���뻨������ֲ���ֺ�ɫʳ�˻�����ͻᷢ��С����İְ֣�սʤ���õ�#r��#k#v4001054#�ٴζ��뻨����ֲ�õ�#r��#k#v4001055#�����������ޣ�����"); 
		cm.dispose();
	    return;
		}
	if (cm.getMapId() == 920010900) {
        cm.sendOk("�������ļ���������ܻᷢ��һЩ�óԵĶ��������������֮�⣬�Ҳ���Ϊ������ʲô���������"); 
		cm.dispose();
        return;
		}
	if (cm.getMapId() == 920011000) {
        cm.sendOk("�������صķ�����������ܻᷢ��һЩ�óԵĶ��������������֮�⣬�Ҳ���Ϊ������ʲô���������"); 
		cm.dispose();
        return;
    }
    cm.dispose();
}}}

function clear() {
    cm.showEffect(true, "quest/party/clear");
    cm.playSound(true, "Party1/Clear");
}