var status = 0;
var minLevel = 50;
var maxLevel = 256;
var minPartySize = 1;
var maxPartySize = 6;
var �������� = 10;
var ����Ԥ�� = [

	[4031997, 1, 100]
];

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        else status--;
	if (cm.getPlayer().getClient().getChannel() == 1 || cm.getPlayer().getClient().getChannel() == 2 || cm.getPlayer().getClient().getChannel() == 3 || cm.getPlayer().getClient().getChannel() == 4) {
        if (status == 0) {
	cm.removeAll(4001117);
	cm.removeAll(4031437);
	cm.removeAll(4001120);
	cm.removeAll(4001121);
	cm.removeAll(4001122);
	cm.removeAll(4001260);
		var �ı���Ϣ = "";
			�ı���Ϣ += "        #b���x1#k\r\n"
			for (var i = 0; i < ����Ԥ��.length; i++) {
				�ı���Ϣ += "   " + cm.��ʾ��Ʒ(����Ԥ��[i][0]) + "x" + ����Ԥ��[i][1] +" " + ����Ԥ��[i][2] +" % #k\r\n";
			}
            cm.sendSimple("�װ���#r#h ##k���ã��������������:\r\n#r�����ӳ����ҶԻ�ִ�С�\r\n���Ա�ȼ�����Ҫ��" + minLevel + "�����ϡ�\r\n#���Ա����Ҫ" + minPartySize + "�����ϣ�" + maxPartySize + "�����¡�#b\r\nͨ�ػ��:\r\n" + �ı���Ϣ + "\r\n��������� #r" + cm.�ж�ÿ��ֵ("������") + "#k��\r\n\r\n#L0#���뺣����\r\n\r\n");
        } else if (status == 1) {
            if (selection == 0) {
                if (cm.getParty() == null) { // û�����
                    cm.sendOk("����Ӻ����̸����");
                    cm.dispose();
                }
else if(cm.getBossLog("haidao") > 9) {
	            cm.sendOk("����,ϵͳ�޶�ÿ��ֻ����ս10��!");
                    cm.dispose();
		}
else if(cm.getBossLog('haid') > 19) {
	            cm.sendOk("����,ϵͳ�޶�ͬһ�ʺ��ܹ��������ս20��!");
                    cm.dispose();
		}
 else if (!cm.isLeader()) { // ���Ƕӳ�
                    cm.sendOk("�ӳ��������������������˵����");
                    cm.dispose();
                    } else  {
                    var party = cm.getParty().getMembers();
                    var mapId = cm.getPlayer().getMapId();
                    var next = true;
                    var levelValid = 0;
                    var inMap = 0;
                    var it = party.iterator();
                    while (it.hasNext()) {
                        var cPlayer = it.next();
                        if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
                            levelValid += 1;
                        } else {
                            next = false;
                        }
                        if (cPlayer.getMapid() == mapId) {
                            inMap += 1;
                        }
                    }
                    if (party.size() < minPartySize || party.size() > maxPartySize || inMap < minPartySize) {
                        next = false;
                    }
					// if(cm.�ж��Ŷ�ÿ��("������", ��������) == 0){
						// cm.sendOk("��Ǹ��������Ķ����������Ѿ����� " + �������� + " ���ˣ�");
						// cm.dispose();
						// return;
					// }
                    if (next) {
                        var em = cm.getEventManager("Pirate");
                        if (em == null) {
                            cm.sendOk("���������ڽ��赱�С�");
                        } else {
                            var prop = em.getProperty("state");
                            if (prop.equals("0") || prop == null) {
                                em.startInstance(cm.getParty(), cm.getMap());
                               cm.givePartyBossLog("haidao");
cm.setBossLog('haid');
                                cm.dispose();
                                return;
                            } else {
                                cm.sendOk("[�ճ�]��ռ���������������Ѿ������ˣ����Եȣ�");
                            }
                        }
                        cm.dispose();
                    } else {
                        cm.sendOk("��ȷ��������Ա��\r\n\r\n#b1�����Ա����Ҫ" + minPartySize + "�����ϣ�" + maxPartySize + "�����¡�\r\n2�����Ա�ȼ�����Ҫ��" + minLevel + "�����ϡ�\r\n\r\n��#r�����Ȼ����, ��������,�ٵ�½ ������������ӡ�#k#b��");
                        cm.dispose();
                    }
		} //�ж����
            } else if (selection == 1) {
                cm.sendOk("��ȷ��������Ա��\r\n\r\n#b1�����Ա����Ҫ" + minPartySize + "�����ϣ�" + maxPartySize + "�����¡�\r\n2�����Ա�ȼ�����Ҫ��" + minLevel + "�����ϡ�\r\n\r\n��#r�����Ȼ����, ��������,�ٵ�½ ������������ӡ�#k#b��");
                cm.dispose();
            } else if (selection == 2) {
            cm.openNpc(9310084, 25);
                //cm.sendOk("1");
                //cm.dispose();
            }
        }
		 } else {
        		cm.dispose();
        		cm.sendOk("ֻ����1,2,3Ƶ���ſ��ԲμӺ���������");
	}
    }
}