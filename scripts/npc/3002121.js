/*
��ħ��ʦ�볡
*/
var status = 0;
var cishuxianzhi = 5;//���ƴ���
var �Ƿ񿪷� = true;
function start() {
	status =0;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getPlayer().getMapId() == 100000000) {
        if (selection < 100) {
            cm.sendSimple("#r#L100#��ħ��ʦ#l\r\n#L101#��ħ��ʦ#l");
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
				if(!�Ƿ񿪷�){
					cm.sendOk("��Ǹ����δ���š�");
                    cm.dispose();
                    return;
				}
                if (cm.getPlayer().getLevel() < 200) {
                    cm.sendOk("��ĵȼ�����ﵽ200������.");
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
                    cm.sendOk("�¼���û�п�ʼ������ϵһ��ͨ��������˾.");
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
                        cm.sendYesNo("������Ȥ��ΪԶ���ӵĶӳ���#r����BOSS����̫���Ӵ����ױ��ڴ滨��������սǰ�ؿ��ͻ��ˣ��������ڱ�����ģʽ��");

                    } else if (squadAvailability == 1) {
                        // -1 = Cancelled, 0 = not, 1 = true
                        var type = cm.isSquadLeader("blackmage");
                        if (type == -1) {
                            cm.sendOk("Զ�����Ѿ�������������ע��.");
                            cm.safeDispose();
                        } else if (type == 0) {
							
                            var memberType = cm.isSquadMember("blackmage");
                            if (memberType == 2) {
                                cm.sendOk("�㱻��ֹ�μ�Զ����.");
                                cm.safeDispose();
                            } else if (memberType == 1) {
                                status = 5;
                                cm.sendSimple("������ʲô? \r\n#b#L0#����Ա#l \r\n#b#L1#����Զ����#l \r\n#b#L2#�˳�С��#l");
                            } else if (memberType == -1) {
                                cm.sendOk("�����Ѿ�������������ע��.");
                                cm.safeDispose();
                            } else {
                                status = 5;
                                cm.sendSimple("������ʲô? \r\n#b#L0#����Ա#l \r\n#b#L1#�������#l \r\n#b#L2#�˳�С��#l");
                            }
                        } else { // Is leader
                            status = 10;
                            cm.sendSimple("������ʲô? \r\n#b#L0#����Ա#l \r\n#b#L1#ɾ����Ա#l \r\n#b#L2#�༭�����б�#l \r\n#r#L3#�����ͼ#l");
                        // TODO viewing!
                        }
                    } else {
                        var eim = cm.getDisconnected("BlackMageBattle");
                        if (eim == null) {
                            var squd = cm.getSquad("blackmage");
                            if (squd != null) {
                                cm.sendYesNo("����ĶԿ���ħ��ʦ��ս���Ѿ���ʼ��.\r\n" + squd.getNextPlayer());
                                status = 3;
                            } else {
                                cm.sendOk("����ĶԿ���ħ��ʦ��ս���Ѿ���ʼ��.");
                                cm.safeDispose();
                            }
                        } else {
                            cm.sendYesNo("����������ˡ���Ը�������Ķ�����ս������?");
                            status = 2;
                        }
                    }
                } else {
                    var eim = cm.getDisconnected("BlackMageBattle");
                    if (eim == null) {
                        var squd = cm.getSquad("blackmage");
                        if (squd != null) {
                            cm.sendYesNo("����ĶԿ���ħ��ʦ��ս���Ѿ���ʼ��.\r\n" + squd.getNextPlayer());
                            status = 3;
                        } else {
                            cm.sendOk("����ĶԿ���ħ��ʦ��ս���Ѿ���ʼ��.");
                            cm.safeDispose();
                        }
                    } else {
                        cm.sendYesNo("����������ˡ���Ը�������Ķ�����ս������?");
                        status = 2;
                    }
                }
                break;
            case 1:
                if (mode == 1) {
					if(cm.getMap(450013100).getCharactersSize() > 0 || cm.getMap(450013300).getCharactersSize() || cm.getMap(450013500).getCharactersSize() || cm.getMap(450013700).getCharactersSize()){
						cm.sendOk("�����Ѿ�������~.");
						cm.dispose();
						return
						
					}
					var cishu = cm.��ѯ����BOSS��¼("blackmage");
                    if(cishu >= cishuxianzhi){
						cm.sendOk("��Ǹ��������Ѳμӹ� "  + cishu + " �κ�ħ��ʦԶ�������յ�BOSS�����Ѵﵽ���ޡ�");
					}else{
						if (cm.registerSquad("blackmage", 5, " �ѱ�����Ϊ�ų�����������������ʱ����ڿ���Զ����.")) {
							cm.sendOk("���Ѿ�������Ϊ��������䡣�ڽ�������5���ӣ�����Լ���Զ���ӵĳ�Ա.");
							cm.ȫ������(6, "[BOSS����] " + cm.getPlayer().getName() + " �� " + cm.getChannel() + " Ƶ�������˺�ħ��ʦԶ���ӣ����λ��Ҿ��챸�õ�ҩ�����ַ�а��ĺ�ħ��ʦ�ɣ�");
						} else {
							cm.sendOk("������С��ʱ������һ������.");
						}
					}
					
                } else {
                    cm.sendOk("��������ΪԶ���ӵ���ӵĻ�������̸̸.");
                }
                cm.safeDispose();
                break;
            case 2:
                //BOSS�ط�
				if(cm.getBossLog("��ħ��ʦ�ط�") >= 3){
					cm.sendOk("��Ǹ��ÿ��BOSSһ�����ֻ���ط�3�Ρ�");
				}else{
					if (!cm.reAdd("BlackMageBattle", "blackmage")) {
						cm.sendOk("��������һ��.");
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
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.");
                        cm.safeDispose();
                    } else {
                        cm.dispose();
                    }
                } else if (selection == 1) { // join
					var cishu = cm.��ѯ����BOSS��¼("blackmage");
                    if(cishu >= cishuxianzhi){
						cm.sendOk("��Ǹ��������Ѳμӹ� "  + cishu + " �κ�ħ��ʦԶ�������յ�BOSS�����Ѵﵽ���ޡ�");
						cm.safeDispose();
					}else{
						var ba = cm.addMember("blackmage", true);
						if (ba == 2) {
							cm.sendOk("����Ŀǰ���������Ժ����ԡ�");
							cm.safeDispose();
						} else if (ba == 1) {
							cm.sendOk("���Ѿ��ɹ������˶���");
							cm.ȫ������(6, "[BOSS����] ��� " + cm.getPlayer().getName() + " ������ " + cm.getChannel() + "Ƶ���ĺ�ħ��ʦ�ַ�Զ���ӡ�");
							cm.safeDispose();
						} else {
							cm.sendOk("���Ѿ��Ƕ����һ������.");
							cm.safeDispose();
						}
					}
                    
                } else {// withdraw
                    var baa = cm.addMember("blackmage", false);
                    if (baa == 1) {
                        cm.sendOk("���Ѿ��˳��˶���ĳɹ�");
                        cm.safeDispose();
                    } else {
                        cm.sendOk("�㲻�Ƕ����һ����.");
                        cm.safeDispose();
                    }
                }
                break;
            case 10:
                if (selection == 0) {
                    if (!cm.getSquadList("blackmage", 0)) {
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.");
                    }
                    cm.safeDispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("blackmage", 1)) {
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.");
                        cm.safeDispose();
                    }

                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("blackmage", 2)) {
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.");
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
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.");
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
                    cm.sendOk("��һ��50��Ҫ��ĳ��Ժ�ħ��ʦ.");
                    cm.dispose();
                    return;
                }
                var em = cm.getEventManager("BlackMageBattle");

                if (em == null) {
                    cm.sendOk("�¼�δ����������ϵGM.");
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
                        cm.sendYesNo("������Ȥ��ΪԶ���ӵ������?");

                    } else if (squadAvailability == 1) {

                        // -1 = Cancelled, 0 = not, 1 = true
                        var type = cm.isSquadLeader("blackmage");
                        if (type == -1) {
                            cm.sendOk("�����Ѿ�������������ע��.");
                            cm.safeDispose();
                        } else if (type == 0) {
                            var memberType = cm.isSquadMember("blackmage");
                            if (memberType == 2) {
                                cm.sendOk("�㱻��ֹ�μӶ���.");
                                cm.safeDispose();
                            } else if (memberType == 1) {
                                status = 5;
                                cm.sendSimple("������ʲô? \r\n#b#L0#����Ա#l \r\n#b#L1#�������#l \r\n#b#L2#�˳�С��#l");
                            } else if (memberType == -1) {
                                cm.sendOk("�����Ѿ�������������ע��.");
                                cm.safeDispose();
                            } else {
                                status = 5;
                                cm.sendSimple("������ʲô? \r\n#b#L0#����Ա#l \r\n#b#L1#�������#l \r\n#b#L2#�˳�С��#l");
                            }
                        } else { // Is leader
                            status = 10;
                            cm.sendSimple("������ʲô��������? \r\n#b#L0#����Ա#l \r\n#b#L1#ɾ����Ա#l \r\n#b#L2#�༭�����б�#l \r\n#r#L3#�����ͼ#l");
                        // TODO viewing!
                        }
                    } else {
                        var eim = cm.getDisconnected("BlackMageBattle");
                        if (eim == null) {
                            var squd = cm.getSquad("blackmage");
                            if (squd != null) {
                                cm.sendYesNo("Զ���ӶԿ���ħ��ʦ�Ѿ���ʼ��.\r\n" + squd.getNextPlayer());
                                status = 3;
                            } else {
                                cm.sendOk("Զ���ӶԿ���ħ��ʦ�Ѿ���ʼ��.");
                                cm.safeDispose();
                            }
                        } else {
                            cm.sendYesNo("����������ˡ���Ը�������Ķ�����ս������?");
                            status = 2;
                        }
                    }
                } else {
                    var eim = cm.getDisconnected("BlackMageBattle");
                    if (eim == null) {
                        var squd = cm.getSquad("blackmage");
                        if (squd != null) {
                            cm.sendYesNo("Զ���ӶԿ���ħ��ʦ�Ѿ���ʼ��.\r\n" + squd.getNextPlayer());
                            status = 3;
                        } else {
                            cm.sendOk("Զ���ӶԿ���ħ��ʦ�Ѿ���ʼ��.");
                            cm.safeDispose();
                        }
                    } else {
                        cm.sendYesNo("����������ˡ���Ը�������Ķ�����ս������?");
                        status = 2;
                    }
                }
                break;
            case 1:
                if (mode == 1) {
					if(cm.getMap(450013100).getCharactersSize() > 0 || cm.getMap(450013300).getCharactersSize() || cm.getMap(450013500).getCharactersSize() || cm.getMap(450013700).getCharactersSize()){
						cm.sendOk("�����Ѿ�������~.");
						cm.dispose();
						return
						
					}
					var cishu = cm.��ѯ����BOSS��¼("blackmage");
                    if(cishu >= cishuxianzhi){
						cm.sendOk("��Ǹ��������Ѳμӹ� "  + cishu + " �κ�ħ��ʦԶ�������յ�BOSS�����Ѵﵽ���ޡ�");
					}else{
						if (cm.registerSquad("blackmage", 5, " �ѱ�����Ϊ�೤�����ڣ�����������������ʱ�����ע���Զ����.")) {
							cm.sendOk("���Ѿ�������ΪԶ�����������䡣�ڽ�������5���ӣ�����Լ���Զ���ӵĳ�Ա��");
							cm.ȫ������(6, "[BOSS����] " + cm.getPlayer().getName() + " �� " + cm.getChannel() + " Ƶ�������˺�ħ��ʦԶ���ӣ����λ��Ҿ��챸�õ�ҩ�����ַ�а��ĺ�ħ��ʦ�ɣ�");
						} else {
							cm.sendOk("������С��ʱ������һ������.");
						}
					}
                    
                } else {
                    cm.sendOk("��������ΪԶ������ӵĻ�������̸̸.");
                }
                cm.safeDispose();
                break;
            case 2:
				//BOSS�ط�
				if(cm.getBossLog("��ħ��ʦ�ط�") >= 3){
					cm.sendOk("��Ǹ��ÿ��BOSSһ�����ֻ���ط�3�Ρ�");
				}else{
					if (!cm.reAdd("BlackMageBattle", "blackmage")) {
						cm.sendOk("��������һ��.");
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
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.");
                        cm.safeDispose();
                    } else {
                        cm.dispose();
                    }
                } else if (selection == 1) { // join
					var cishu = cm.��ѯ����BOSS��¼("blackmage");
                    if(cishu >= cishuxianzhi){
						cm.sendOk("��Ǹ��������Ѳμӹ� "  + cishu + " �κ�ħ��ʦԶ�������յ�BOSS�����Ѵﵽ���ޡ�");
						cm.safeDispose();
					}else{
						var ba = cm.addMember("blackmage", true);
						if (ba == 2) {
							cm.sendOk("����Ŀǰ���������Ժ�����.");
							cm.safeDispose();
						} else if (ba == 1) {
							cm.sendOk("���Ѿ��ɹ������˶���");
							cm.ȫ������(6, "[BOSS����] ��� " + cm.getPlayer().getName() + " ������ " + cm.getChannel() + "Ƶ���ĺ�ħ��ʦ�ַ�Զ���ӡ�");
							cm.safeDispose();
						} else {
							cm.sendOk("���Ѿ��Ƕ����һ������.");
							cm.safeDispose();
						}
					}
                    
                } else {// withdraw
                    var baa = cm.addMember("blackmage", false);
                    if (baa == 1) {
                        cm.sendOk("���Ѿ��˳��˶���ĳɹ�");
                        cm.safeDispose();
                    } else {
                        cm.sendOk("�㲻�Ƕ����һ����.");
                        cm.safeDispose();
                    }
                }
                break;
            case 10:
                if (selection == 0) {
                    if (!cm.getSquadList("blackmage", 0)) {
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ��ˡ�");
                    }
                    cm.safeDispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("blackmage", 1)) {
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.");
                        cm.safeDispose();
                    }

                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("blackmage", 2)) {
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.");
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
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.");
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