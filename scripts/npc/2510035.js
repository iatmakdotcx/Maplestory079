/*
��ħ��ʦ�볡
*/
var status = 0;
var cishuxianzhi = 5;//���ƴ���
function start() {
	status =0;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getPlayer().getMapId() == 100000000) {
        if (selection < 100) {
            cm.sendSimpleS("#r#L100#��ħ��ʦ#l\r\n#L101#��ħ��ʦ#l", 0, 3002121);
        } else {
            if (selection == 100) {
                cm.warp(450012500,0);
            } else if (selection == 101) {
                cm.warp(450012500,0);
            }
            cm.dispose();
        }
        return;
    } else if (cm.getPlayer().getMapId() == 450012500) {
        switch (status) {
            case 0:
                if (cm.getPlayer().getLevel() < 200) {
                    cm.sendOkS("��ĵȼ�����ﵽ200������.", 0, 3002121);
                    cm.dispose();
                    return;
                }
/*                 if (cm.getPlayer().getClient().getChannel() != 2 && cm.getPlayer().getClient().getChannel() != 3) {
                    cm.sendOk("���Һ�ħ��ʦֻ����ͼ��Ƶ����2����3����ս.");
                    cm.dispose();
                    return;
                } */
                var em = cm.getEventManager("BlackMageBattle");

                if (em == null) {
                    cm.sendOkS("�¼���û�п�ʼ������ϵһ��ͨ��������˾.", 0, 3002121);
                    cm.safeDispose();
                    return;
                }
                var prop = em.getProperty("state");
                var marr = cm.getQuestRecord(160102);
                var data = marr.getCustomData();
                if (data == null) {
                    marr.setCustomData("0");
                    data = "0";
                }
                var time = parseInt(data);
                if (prop == null || prop.equals("0")) {
                    var squadAvailability = cm.getSquadAvailability("blackmage");
                    if (squadAvailability == -1) {
                        status = 1;
                        cm.sendYesNoS("������Ȥ��ΪԶ���ӵĶӳ���", 0, 3002121);

                    } else if (squadAvailability == 1) {
                        // -1 = Cancelled, 0 = not, 1 = true
                        var type = cm.isSquadLeader("blackmage");
                        if (type == -1) {
                            cm.sendOkS("Զ�����Ѿ�������������ע��.", 0, 3002121);
                            cm.safeDispose();
                        } else if (type == 0) {
							
                            var memberType = cm.isSquadMember("blackmage");
                            if (memberType == 2) {
                                cm.sendOkS("�㱻��ֹ�μ�Զ����.", 0, 3002121);
                                cm.safeDispose();
                            } else if (memberType == 1) {
                                status = 5;
                                cm.sendSimpleS("������ʲô? \r\n#b#L0#����Ա#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�˳�С��#l", 0, 3002121);
                            } else if (memberType == -1) {
                                cm.sendOkS("�����Ѿ�������������ע��.", 0, 3002121);
                                cm.safeDispose();
                            } else {
                                status = 5;
                                cm.sendSimpleS("������ʲô? \r\n#b#L0#����Ա#l \r\n#b#L1#�������#l \r\n#b#L2#�˳�С��#l", 0, 3002121);
                            }
                        } else { // Is leader
                            status = 10;
                            cm.sendSimpleS("������ʲô? \r\n#b#L0#����Ա#l \r\n#b#L1#ɾ����Ա#l \r\n#b#L2#�༭�����б�#l \r\n#r#L3#�����ͼ#l", 0, 3002121);
                        // TODO viewing!
                        }
                    } else {
                        var eim = cm.getDisconnected("BlackMageBattle");
                        if (eim == null) {
                            var squd = cm.getSquad("blackmage");
                            if (squd != null) {
                                cm.sendYesNoS("����ĶԿ���ħ��ʦ��ս���Ѿ���ʼ��.\r\n" + squd.getNextPlayer(), 0, 3002121);
                                status = 3;
                            } else {
                                cm.sendOkS("����ĶԿ���ħ��ʦ��ս���Ѿ���ʼ��.", 0, 3002121);
                                cm.safeDispose();
                            }
                        } else {
                            cm.sendYesNoS("����������ˡ���Ը�������Ķ�����ս������?", 0, 3002121);
                            status = 2;
                        }
                    }
                } else {
                    var eim = cm.getDisconnected("BlackMageBattle");
                    if (eim == null) {
                        var squd = cm.getSquad("blackmage");
                        if (squd != null) {
                            cm.sendYesNoS("����ĶԿ���ħ��ʦ��ս���Ѿ���ʼ��.\r\n" + squd.getNextPlayer(), 0, 3002121);
                            status = 3;
                        } else {
                            cm.sendOkS("����ĶԿ���ħ��ʦ��ս���Ѿ���ʼ��.", 0, 3002121);
                            cm.safeDispose();
                        }
                    } else {
                        cm.sendYesNoS("����������ˡ���Ը�������Ķ�����ս������?", 0, 3002121);
                        status = 2;
                    }
                }
                break;
            case 1:
                if (mode == 1) {
					var cishu = cm.��ѯ����BOSS��¼("blackmage");
                    if(cishu >= cishuxianzhi){
						cm.sendOkS("��Ǹ��������Ѳμӹ� "  + cishu + " �κ�ħ��ʦԶ�������յ�BOSS�����Ѵﵽ���ޡ�", 0, 3002121);
					}else{
						if (cm.registerSquad("blackmage", 5, " �ѱ�����Ϊ�ų�����������������ʱ����ڿ���Զ����.")) {
							cm.sendOkS("���Ѿ�������Ϊ��������䡣�ڽ�������5���ӣ�����Լ���Զ���ӵĳ�Ա.", 0, 3002121);
							cm.ȫ������(6, "[BOSS����] " + cm.getPlayer().getName() + " �� " + cm.getChannel() + " Ƶ�������˺�ħ��ʦԶ���ӣ����λ��Ҿ��챸�õ�ҩ�����ַ�а��ĺ�ħ��ʦ�ɣ�");
						} else {
							cm.sendOkS("������С��ʱ������һ������.", 0, 3002121);
						}
					}
					
                } else {
                    cm.sendOkS("��������ΪԶ���ӵ���ӵĻ�������̸̸.", 0, 3002121);
                }
                cm.safeDispose();
                break;
            case 2:
                //BOSS�ط�
				if(cm.getBossLog("��ħ��ʦ�ط�") >= 3){
					cm.sendOkS("��Ǹ��ÿ��BOSSһ�����ֻ���ط�3�Ρ�", 0, 3002121);
				}else{
					if (!cm.reAdd("BlackMageBattle", "blackmage")) {
						cm.sendOkS("��������һ��.", 0, 3002121);
					}else{
						cm.setBossLog("��ħ��ʦ�ط�");
					}
				}
				// cm.sendOk("��Ǹ��BOSS�ط����ܴ��ڹر�״̬��")
                cm.dispose();
                break;
            case 3:
                /* if (mode == 1) {
					// var party = cm.��ӳ�Ա();
					var party = cm.��ӳ�Ա();
			//cm.getPlayer().dropMessage(5, "������"+cm.�������()+"��");
			cm.dispose();
            for (var i = 0; i < cm.�������(); i++) {
			//cm.getPlayer().dropMessage(5, "���ڵ�ͼ����"+party.get(i).getMapid());
			cm.dispose();
            if (party.get(i).getMapid() == 450013100){//�ж϶ӳ��ڲ��������ͼ,�����ط��ĵ�ͼ
            cm.flytoID(party.get(i).getId());
			cm.dispose();
			return;
                } } } */
				cm.dispose();
                break;
            case 5:
                if (selection == 0) {
                    if (!cm.getSquadList("blackmage", 0)) {
                        cm.sendOkS("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.", 0, 3002121);
                        cm.safeDispose();
                    } else {
                        cm.dispose();
                    }
                } else if (selection == 1) { // join
					var cishu = cm.��ѯ����BOSS��¼("blackmage");
                    if(cishu >= cishuxianzhi){
						cm.sendOkS("��Ǹ��������Ѳμӹ� "  + cishu + " �κ�ħ��ʦԶ�������յ�BOSS�����Ѵﵽ���ޡ�", 0, 3002121);
						cm.safeDispose();
					}else{
						var ba = cm.addMember("blackmage", true);
						if (ba == 2) {
							cm.sendOkS("����Ŀǰ���������Ժ����ԡ�", 0, 3002121);
							cm.safeDispose();
						} else if (ba == 1) {
							cm.sendOkS("���Ѿ��ɹ������˶���", 0, 3002121);
							cm.ȫ������(6, "[BOSS����] ��� " + cm.getPlayer().getName() + " ������ " + cm.getChannel() + "Ƶ���ĺ�ħ��ʦ�ַ�Զ���ӡ�");
							cm.safeDispose();
						} else {
							cm.sendOkS("���Ѿ��Ƕ����һ������.", 0, 3002121);
							cm.safeDispose();
						}
					}
                    
                } else {// withdraw
                    var baa = cm.addMember("blackmage", false);
                    if (baa == 1) {
                        cm.sendOkS("���Ѿ��˳��˶���ĳɹ�", 0, 3002121);
                        cm.safeDispose();
                    } else {
                        cm.sendOkS("�㲻�Ƕ����һ����.", 0, 3002121);
                        cm.safeDispose();
                    }
                }
                break;
            case 10:
                if (selection == 0) {
                    if (!cm.getSquadList("blackmage", 0)) {
                        cm.sendOkS("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.", 0, 3002121);
                    }
                    cm.safeDispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("blackmage", 1)) {
                        cm.sendOkS("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.", 0, 3002121);
                        cm.safeDispose();
                    }

                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("blackmage", 2)) {
                        cm.sendOkS("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.", 0, 3002121);
                        cm.safeDispose();
                    }

                } else if (selection == 3) { // get insode
                    if (cm.getSquad("blackmage") != null) {
                        var dd = cm.getEventManager("BlackMageBattle");
                        dd.startInstance(cm.getSquad("blackmage"), cm.getMap(), 160102);
						if(cm.getPlayer().getMapId() == 450013100){
							cm.ȫ������(6, "[BOSS����] " + cm.getChannel() + " Ƶ����Զ���ӳ��Ѿ��볡����ħ��ʦ���ַ�������ʼ�������Զ���������Ҿ����볡��");
							cm.���Ŷ�ÿ��("blackmage");//���ŶӴ���
						}
                        cm.dispose();
                    } else {
                        cm.sendOkS("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.", 0, 3002121);
                        cm.safeDispose();
                    }
                }
                break;
            case 11:
                cm.banMember("blackmage", selection);
                cm.dispose();
                break;
            case 12:
                if (selection != -1) {
                    cm.acceptMember("blackmage", selection);
                }
                cm.dispose();
                break;
        }
    } else {
        switch (status) {
            case 0:
                if (cm.getPlayer().getLevel() < 50) {
                    cm.sendOkS("��һ��50��Ҫ��ĳ��Ժ�ħ��ʦ.", 0, 3002121);
                    cm.dispose();
                    return;
                }
                var em = cm.getEventManager("BlackMageBattle");

                if (em == null) {
                    cm.sendOkS("�¼�δ����������ϵGM.", 0, 3002121);
                    cm.safeDispose();
                    return;
                }
                var prop = em.getProperty("state");
                var marr = cm.getQuestRecord(160101);
                var data = marr.getCustomData();
                if (data == null) {
                    marr.setCustomData("0");
                    data = "0";
                }
                var time = parseInt(data);
                if (prop == null || prop.equals("0")) {
                    var squadAvailability = cm.getSquadAvailability("blackmage");
                    if (squadAvailability == -1) {
                        status = 1;
                        cm.sendYesNoS("������Ȥ��ΪԶ���ӵ������?", 0, 3002121);

                    } else if (squadAvailability == 1) {

                        // -1 = Cancelled, 0 = not, 1 = true
                        var type = cm.isSquadLeader("blackmage");
                        if (type == -1) {
                            cm.sendOkS("�����Ѿ�������������ע��.", 0, 3002121);
                            cm.safeDispose();
                        } else if (type == 0) {
                            var memberType = cm.isSquadMember("blackmage");
                            if (memberType == 2) {
                                cm.sendOkS("�㱻��ֹ�μӶ���.", 0, 3002121);
                                cm.safeDispose();
                            } else if (memberType == 1) {
                                status = 5;
                                cm.sendSimpleS("������ʲô? \r\n#b#L0#����Ա#l \r\n#b#L1#�������#l \r\n#b#L2#�˳�С��#l", 0, 3002121);
                            } else if (memberType == -1) {
                                cm.sendOkS("�����Ѿ�������������ע��.", 0, 3002121);
                                cm.safeDispose();
                            } else {
                                status = 5;
                                cm.sendSimpleS("������ʲô? \r\n#b#L0#����Ա#l \r\n#b#L1#�������#l \r\n#b#L2#�˳�С��#l", 0, 3002121);
                            }
                        } else { // Is leader
                            status = 10;
                            cm.sendSimpleS("������ʲô��������? \r\n#b#L0#����Ա#l \r\n#b#L1#ɾ����Ա#l \r\n#b#L2#�༭�����б�#l \r\n#r#L3#�����ͼ#l", 0, 3002121);
                        // TODO viewing!
                        }
                    } else {
                        var eim = cm.getDisconnected("BlackMageBattle");
                        if (eim == null) {
                            var squd = cm.getSquad("blackmage");
                            if (squd != null) {
                                cm.sendYesNoS("Զ���ӶԿ���ħ��ʦ�Ѿ���ʼ��.\r\n" + squd.getNextPlayer(), 0, 3002121);
                                status = 3;
                            } else {
                                cm.sendOkS("Զ���ӶԿ���ħ��ʦ�Ѿ���ʼ��.", 0, 3002121);
                                cm.safeDispose();
                            }
                        } else {
                            cm.sendYesNoS("����������ˡ���Ը�������Ķ�����ս������?", 0, 3002121);
                            status = 2;
                        }
                    }
                } else {
                    var eim = cm.getDisconnected("BlackMageBattle");
                    if (eim == null) {
                        var squd = cm.getSquad("blackmage");
                        if (squd != null) {
                            cm.sendYesNoS("Զ���ӶԿ���ħ��ʦ�Ѿ���ʼ��.\r\n" + squd.getNextPlayer(), 0, 3002121);
                            status = 3;
                        } else {
                            cm.sendOkS("Զ���ӶԿ���ħ��ʦ�Ѿ���ʼ��.", 0, 3002121);
                            cm.safeDispose();
                        }
                    } else {
                        cm.sendYesNoS("����������ˡ���Ը�������Ķ�����ս������?", 0, 3002121);
                        status = 2;
                    }
                }
                break;
            case 1:
                if (mode == 1) {
					var cishu = cm.��ѯ����BOSS��¼("blackmage");
                    if(cishu >= cishuxianzhi){
						cm.sendOkS("��Ǹ��������Ѳμӹ� "  + cishu + " �κ�ħ��ʦԶ�������յ�BOSS�����Ѵﵽ���ޡ�", 0, 3002121);
					}else{
						if (cm.registerSquad("blackmage", 5, " �ѱ�����Ϊ�೤�����ڣ�����������������ʱ�����ע���Զ����.")) {
							cm.sendOkS("���Ѿ�������ΪԶ�����������䡣�ڽ�������5���ӣ�����Լ���Զ���ӵĳ�Ա��", 0, 3002121);
							cm.ȫ������(6, "[BOSS����] " + cm.getPlayer().getName() + " �� " + cm.getChannel() + " Ƶ�������˺�ħ��ʦԶ���ӣ����λ��Ҿ��챸�õ�ҩ�����ַ�а��ĺ�ħ��ʦ�ɣ�");
						} else {
							cm.sendOkS("������С��ʱ������һ������.", 0, 3002121);
						}
					}
                    
                } else {
                    cm.sendOkS("��������ΪԶ������ӵĻ�������̸̸.", 0, 3002121);
                }
                cm.safeDispose();
                break;
            case 2:
				//BOSS�ط�
				if(cm.getBossLog("��ħ��ʦ�ط�") >= 3){
					cm.sendOkS("��Ǹ��ÿ��BOSSһ�����ֻ���ط�3�Ρ�", 0, 3002121);
				}else{
					if (!cm.reAdd("BlackMageBattle", "blackmage")) {
						cm.sendOkS("��������һ��.", 0, 3002121);
					}else{
						cm.setBossLog("��ħ��ʦ�ط�");
					}
				}
				// cm.sendOk("��Ǹ��BOSS�ط����ܴ��ڹر�״̬��")
                cm.safeDispose();
                break;
            case 3:
                /* if (mode == 1) {
					var party = cm.��ӳ�Ա();
			//cm.getPlayer().dropMessage(5, "������"+cm.�������()+"��");
			cm.dispose();
            for (var i = 0; i < cm.�������(); i++) {
			//cm.getPlayer().dropMessage(5, "���ڵ�ͼ����"+party.get(i).getMapid());
			cm.dispose();
            if (party.get(i).getMapid() == 450013100){//�ж϶ӳ��ڲ��������ͼ,�����ط��ĵ�ͼ
            cm.flytoID(party.get(i).getId());
			cm.dispose();
			return;
                } } } */
                cm.dispose();
                break;
            case 5:
                if (selection == 0) {
                    if (!cm.getSquadList("blackmage", 0)) {
                        cm.sendOkS("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.", 0, 3002121);
                        cm.safeDispose();
                    } else {
                        cm.dispose();
                    }
                } else if (selection == 1) { // join
					var cishu = cm.��ѯ����BOSS��¼("blackmage");
                    if(cishu >= cishuxianzhi){
						cm.sendOkS("��Ǹ��������Ѳμӹ� "  + cishu + " �κ�ħ��ʦԶ�������յ�BOSS�����Ѵﵽ���ޡ�", 0, 3002121);
						cm.safeDispose();
					}else{
						var ba = cm.addMember("blackmage", true);
						if (ba == 2) {
							cm.sendOkS("����Ŀǰ���������Ժ�����.", 0, 3002121);
							cm.safeDispose();
						} else if (ba == 1) {
							cm.sendOkS("���Ѿ��ɹ������˶���", 0, 3002121);
							cm.ȫ������(6, "[BOSS����] ��� " + cm.getPlayer().getName() + " ������ " + cm.getChannel() + "Ƶ���ĺ�ħ��ʦ�ַ�Զ���ӡ�");
							cm.safeDispose();
						} else {
							cm.sendOkS("���Ѿ��Ƕ����һ������.", 0, 3002121);
							cm.safeDispose();
						}
					}
                    
                } else {// withdraw
                    var baa = cm.addMember("blackmage", false);
                    if (baa == 1) {
                        cm.sendOkS("���Ѿ��˳��˶���ĳɹ�", 0, 3002121);
                        cm.safeDispose();
                    } else {
                        cm.sendOkS("�㲻�Ƕ����һ����.", 0, 3002121);
                        cm.safeDispose();
                    }
                }
                break;
            case 10:
                if (selection == 0) {
                    if (!cm.getSquadList("blackmage", 0)) {
                        cm.sendOkS("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ��ˡ�", 0, 3002121);
                    }
                    cm.safeDispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("blackmage", 1)) {
                        cm.sendOkS("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.", 0, 3002121);
                        cm.safeDispose();
                    }

                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("blackmage", 2)) {
                        cm.sendOkS("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.", 0, 3002121);
                        cm.safeDispose();
                    }

                } else if (selection == 3) { // get insode
                    if (cm.getSquad("blackmage") != null) {
                        var dd = cm.getEventManager("BlackMageBattle");//ִ��event�¼�
                        dd.startInstance(cm.getSquad("blackmage"), cm.getMap(), 160101);
						if(cm.getPlayer().getMapId() == 450013100){
							cm.ȫ������(6, "[BOSS����] " + cm.getChannel() + " Ƶ����Զ���ӳ��Ѿ��볡����ħ��ʦ���ַ�������ʼ�������Զ���������Ҿ����볡��");
							cm.���Ŷ�ÿ��("blackmage");//���ŶӴ���
						}
						//cm.getPlayer().setBossLog('blackmage');//��bosslog��¼
                        cm.dispose();
                    } else {
                        cm.sendOkS("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.", 0, 3002121);
                        cm.safeDispose();
                    }
                }
                break;
            case 11:
                cm.banMember("blackmage", selection);
                cm.dispose();
                break;
            case 12:
                if (selection != -1) {
                    cm.acceptMember("blackmage", selection);
                }
                cm.dispose();
                break;
        }
    }
}