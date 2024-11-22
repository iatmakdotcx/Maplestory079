/*
	NPC Name: 		Adobis
	Map(s): 		El Nath : Entrance to Zakum Altar
	Description: 		Zakum battle starter
*/
var status = 0;
var cishuxianzhi = 5;//���ƴ���
var �Ƿ񿪷� = true;
var �ط����� = 3;

function start() {
    status =0;
    action(1, 0, 0);
}

function action(mode, type, selection) {
	
    if (cm.getPlayer().getMapId() == 211042200) {
        if (selection < 100) {
            cm.sendSimple("#r#L100#����#l\r\n#L101#��������#l");
        } else {
            if (selection == 100) {
                cm.warp(211042300,0);
            } else if (selection == 101) {
                cm.warp(211042301,0);
            }
            cm.dispose();
        }
        return;
    } else if (cm.getPlayer().getMapId() == 211042401) {
		if(!�Ƿ񿪷�){
			cm.sendOk("����������Ҫ�������ݲ����ţ�");
			cm.dispose();
			return;
		}
        switch (status) {
            case 0:
                if (cm.getPlayer().getLevel() < 140) {
                    cm.sendOk("��ĵȼ�����ﵽ140������.");
                    cm.dispose();
                    return;
                }
				
/*                 if (cm.getPlayer().getClient().getChannel() != 2 && cm.getPlayer().getClient().getChannel() != 3) {
                    cm.sendOk("��������ֻ����ͼ��Ƶ����2����3����ս.");
                    cm.dispose();
                    return;
                } */
                var em = cm.getEventManager("ChaosZakum");

                if (em == null) {
                    cm.sendOk("�¼���û�п�ʼ������ϵ����.");
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
                    var squadAvailability = cm.getSquadAvailability("ChaosZak");
                    if (squadAvailability == -1) {
                        status = 1;
                        cm.sendYesNo("������Ȥ��ΪԶ���ӵĶӳ���");

                    } else if (squadAvailability == 1) {
                        // -1 = Cancelled, 0 = not, 1 = true
                        var type = cm.isSquadLeader("ChaosZak");
                        if (type == -1) {
                            cm.sendOk("Զ�����Ѿ�������������ע��.");
                            cm.safeDispose();
                        } else if (type == 0) {
                            var memberType = cm.isSquadMember("ChaosZak");
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
                        var eim = cm.getDisconnected("ChaosZakum");
                        if (eim == null) {
                            var squd = cm.getSquad("ChaosZak");
                            if (squd != null) {
                                cm.sendYesNo("����ĶԿ�����������ս���Ѿ���ʼ��.\r\n" + squd.getNextPlayer());
                                status = 3;
                            } else {
                                cm.sendOk("����ĶԿ�����������ս���Ѿ���ʼ��.");
                                cm.safeDispose();
                            }
                        } else {
                            cm.sendYesNo("����������ˡ���Ը�������Ķ�����ս������?");
                            status = 2;
                        }
                    }
                } else {
                    var eim = cm.getDisconnected("ChaosZakum");
                    if (eim == null) {
                        var squd = cm.getSquad("ChaosZak");
                        if (squd != null) {
                            cm.sendYesNo("����ĶԿ�����������ս���Ѿ���ʼ��.\r\n" + squd.getNextPlayer());
                            status = 3;
                        } else {
                            cm.sendOk("����ĶԿ�����������ս���Ѿ���ʼ��.");
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
					if(cm.getMap(280030000).getCharactersSize() > 0){
						cm.sendOk("�����Ѿ�������~.");
						cm.dispose();
						return
						
					}
                    var cishu = cm.getBossLog("Chaoszhakun");
                    if(cishu >= cishuxianzhi){
						cm.sendOk("��Ǹ��������Ѳμӹ� "  + cishu + " ������Զ�������յ�BOSS�����Ѵﵽ���ޡ�");
					}else{
						if (cm.registerSquad("ChaosZak", 5, " �ѱ�����Ϊ�ų�����������������ʱ����ڿ���Զ����.")) {
							cm.sendOk("���Ѿ�������Ϊ��������䡣�ڽ�������5���ӣ�����Լ���Զ���ӵĳ�Ա.");
							cm.worldMessage( "[BOSS����] " + cm.getPlayer().getName() + " �� " + cm.getChannel() + " Ƶ�������˽�������Զ���ӣ����λ��Ҿ��챸�õ�ҩ�����ַ����������ɣ�");
						} else {
							cm.sendOk("������С��ʱ������һ������.");
						}	
					}
					
					
                } else {
                    cm.sendOk("��������ΪԶ���ӵ���ӵĻ�������̸̸.")
                }
                cm.safeDispose();
                break;
            case 2:
                //BOSS�ط�
				if(cm.getBossLog("���������ط�") >= �ط�����){
					cm.sendOk("��Ǹ��ÿ��BOSSһ�����ֻ���ط�" + �ط����� + "�Ρ�")
				}else{
					if (!cm.reAdd("ChaosZakum", "ChaosZak")) {
						cm.sendOk("��������һ��.");
					}else{
						cm.setBossLoga("���������ط�");
					}
				}
                
				// cm.sendOk("��Ǹ��BOSS�ط����ܴ��ڹر�״̬��")
                cm.dispose();
                break;
            case 3:
            /*     if (mode == 1) {
					var party = cm.��ӳ�Ա();
			//cm.getPlayer().dropMessage(5, "������"+cm.�������()+"��");
			cm.dispose();
            for (var i = 0; i < cm.�������(); i++) {
			//cm.getPlayer().dropMessage(5, "���ڵ�ͼ����"+party.get(i).getMapid());
			cm.dispose();
            if (party.get(i).getMapid() == 280030000){//�ж϶ӳ��ڲ��������ͼ,�����ط��ĵ�ͼ
            cm.flytoID(party.get(i).getId());
			cm.dispose();
			return;
                } } } */
				cm.dispose();
                break;
            case 5:
                if (selection == 0) {
                    if (!cm.getSquadList("ChaosZak", 0)) {
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.");
                        cm.safeDispose();
                    } else {
                        cm.dispose();
                    }
                } else if (selection == 1) { // join
					var cishu = cm.getBossLog("ChaosZakum");
                    if(cishu >= cishuxianzhi){
						cm.sendOk("��Ǹ��������Ѳμӹ� "  + cishu + " �ν�������Զ�������յ�BOSS�����Ѵﵽ���ޡ�");
						cm.safeDispose();
					}else{
						var ba = cm.addMember("ChaosZak", true);
						if (ba == 2) {
							cm.sendOk("����Ŀǰ���������Ժ����ԡ�");
							cm.safeDispose();
						} else if (ba == 1) {
							cm.sendOk("���Ѿ��ɹ������˶���");
							cm.worldMessage( "[BOSS����] ��� " + cm.getPlayer().getName() + " ������ " + cm.getChannel() + "Ƶ���Ľ��������ַ�Զ���ӡ�");
							cm.safeDispose();
						} else {
							cm.sendOk("���Ѿ��Ƕ����һ������.");
							cm.safeDispose();
						}
					}
                    
                } else {// withdraw
                    var baa = cm.addMember("ChaosZak", false);
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
                    if (!cm.getSquadList("ChaosZak", 0)) {
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.");
                    }
                    cm.safeDispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("ChaosZak", 1)) {
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.");
                        cm.safeDispose();
                    }

                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("ChaosZak", 2)) {
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.");
                        cm.safeDispose();
                    }

                } else if (selection == 3) { // get insode
                    if (cm.getSquad("ChaosZak") != null) {
                        var dd = cm.getEventManager("ChaosZakum");
                        dd.startInstance(cm.getSquad("ChaosZak"), cm.getMap(), 160102);
						if(cm.getPlayer().getMapId() == 280030002){
							//cm.getMap().clearOwnerList();
							//cm.getMap().addAllOwnerHere();
							//cm.getMap().��ʱ��(360, true, true);
							cm.worldMessage( "[BOSS����] " + cm.getChannel() + " Ƶ����Զ���ӳ��Ѿ��볡�������������ַ�������ʼ�������Զ���������Ҿ����볡��");
							//���Ŷ�ÿ��a("ChaosZakum");//���ŶӴ���
							����ͼÿ��a(cm.getPlayer().getMap(), "ChaosZakum"
							);
						}
                        cm.dispose();
                    } else {
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.");
                        cm.safeDispose();
                    }
                }
                break;
            case 11:
                cm.banMember("ChaosZak", selection);
                cm.dispose();
                break;
            case 12:
                if (selection != -1) {
                    cm.acceptMember("ChaosZak", selection);
                }
                cm.dispose();
                break;
        }
    } else {
        switch (status) {
            case 0:
                if (cm.getPlayer().getLevel() < 50) {
                    cm.sendOk("��һ��50��Ҫ��ĳ�������.");
                    cm.dispose();
                    return;
                }
                var em = cm.getEventManager("ZakumBattle");

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
                    var squadAvailability = cm.getSquadAvailability("ZAK");
                    if (squadAvailability == -1) {
                        status = 1;
                        cm.sendYesNo("������Ȥ��ΪԶ���ӵ������?");

                    } else if (squadAvailability == 1) {

                        // -1 = Cancelled, 0 = not, 1 = true
                        var type = cm.isSquadLeader("ZAK");
                        if (type == -1) {
                            cm.sendOk("�����Ѿ�������������ע��.");
                            cm.safeDispose();
                        } else if (type == 0) {
                            var memberType = cm.isSquadMember("ZAK");
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
                        var eim = cm.getDisconnected("ZakumBattle");
                        if (eim == null) {
                            var squd = cm.getSquad("ZAK");
                            if (squd != null) {
                                cm.sendYesNo("Զ���ӶԿ������Ѿ���ʼ��.\r\n" + squd.getNextPlayer());
                                status = 3;
                            } else {
                                cm.sendOk("Զ���ӶԿ������Ѿ���ʼ��.");
                                cm.safeDispose();
                            }
                        } else {
                            cm.sendYesNo("����������ˡ���Ը�������Ķ�����ս������?");
                            status = 2;
                        }
                    }
                } else {
                    var eim = cm.getDisconnected("ZakumBattle");
                    if (eim == null) {
                        var squd = cm.getSquad("ZAK");
                        if (squd != null) {
                            cm.sendYesNo("Զ���ӶԿ������Ѿ���ʼ��.\r\n" + squd.getNextPlayer());
                            status = 3;
                        } else {
                            cm.sendOk("Զ���ӶԿ������Ѿ���ʼ��.");
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
					if(cm.getMap(280030000).getCharactersSize() > 0){
						cm.sendOk("�����Ѿ�������~.");
						cm.dispose();
						return
						
					}
					var cishu = cm.getBossLog("zhakun");
                    if(cishu >= cishuxianzhi){
						cm.sendOk("��Ǹ��������Ѳμӹ� "  + cishu + " ������Զ�������յ�BOSS�����Ѵﵽ���ޡ�");
					}else{
						if (cm.registerSquad("ZAK", 5, " �ѱ�����Ϊ�೤�����ڣ�����������������ʱ�����ע���Զ����.")) {
							cm.sendOk("���Ѿ�������ΪԶ�����������䡣�ڽ�������5���ӣ�����Լ���Զ���ӵĳ�Ա��");
							cm.worldMessage("[BOSS����] " + cm.getPlayer().getName() + " �� " + cm.getChannel() + " Ƶ������������Զ���ӣ����λ��Ҿ��챸�õ�ҩ�����ַ������ɣ�");
						} else {
							cm.sendOk("������С��ʱ������һ������.");
						}
					}
                    
                } else {
                    cm.sendOk("��������ΪԶ������ӵĻ�������̸̸.")
                }
                cm.safeDispose();
                break;
            case 2:
				//BOSS�ط�
				if(cm.getBossLog("�����ط�") >= �ط�����){
					cm.sendOk("��Ǹ��ÿ��BOSSһ�����ֻ���ط�" + �ط����� + "�Ρ�")
				}else{
					if (!cm.reAdd("ZakumBattle", "ZAK")) {
						cm.sendOk("��������һ��.");
					}else{
						cm.setBossLoga("�����ط�");
					}
				}
				// cm.sendOk("��Ǹ��BOSS�ط����ܴ��ڹر�״̬��")
                cm.safeDispose();
                break;
            case 3:
            /*     if (mode == 1) {
					var party = cm.��ӳ�Ա();
			//cm.getPlayer().dropMessage(5, "������"+cm.�������()+"��");
			cm.dispose();
            for (var i = 0; i < cm.�������(); i++) {
			//cm.getPlayer().dropMessage(5, "���ڵ�ͼ����"+party.get(i).getMapid());
			cm.dispose();
            if (party.get(i).getMapid() == 280030000){//�ж϶ӳ��ڲ��������ͼ,�����ط��ĵ�ͼ
            cm.flytoID(party.get(i).getId());
			cm.dispose();
			return;
                } } } */
                cm.dispose();
                break;
            case 5:
                if (selection == 0) {
                    if (!cm.getSquadList("ZAK", 0)) {
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.");
                        cm.safeDispose();
                    } else {
                        cm.dispose();
                    }
                } else if (selection == 1) { // join
					var cishu = cm.getBossLog("zhakun");
                    if(cishu >= cishuxianzhi){
						cm.sendOk("��Ǹ��������Ѳμӹ� "  + cishu + " ������Զ�������յ�BOSS�����Ѵﵽ���ޡ�");
						cm.safeDispose();
					}else{
						var ba = cm.addMember("ZAK", true);
						if (ba == 2) {
							cm.sendOk("����Ŀǰ���������Ժ�����.");
							cm.safeDispose();
						} else if (ba == 1) {
							cm.sendOk("���Ѿ��ɹ������˶���");
							cm.worldMessage( "[BOSS����] ��� " + cm.getPlayer().getName() + " ������ " + cm.getChannel() + "Ƶ���������ַ�Զ���ӡ�");
							cm.safeDispose();
						} else {
							cm.sendOk("���Ѿ��Ƕ����һ������.");
							cm.safeDispose();
						}
					}
                    
                } else {// withdraw
                    var baa = cm.addMember("ZAK", false);
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
                    if (!cm.getSquadList("ZAK", 0)) {
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ��ˡ�");
                    }
                    cm.safeDispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("ZAK", 1)) {
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.");
                        cm.safeDispose();
                    }

                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("ZAK", 2)) {
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.");
                        cm.safeDispose();
                    }

                } else if (selection == 3) { // get insode
                    if (cm.getSquad("ZAK") != null) {
                        var dd = cm.getEventManager("ZakumBattle");//ִ��event�¼�
                        dd.startInstance(cm.getSquad("ZAK"), cm.getMap(), 160101);
						//cm.getPlayer().setBossLog('zhakun');//��bosslog��¼
						if(cm.getPlayer().getMapId() == 280030000){
							//cm.getMap().clearOwnerList();
							//cm.getMap().addAllOwnerHere();
							//cm.getMap().��ʱ��(180, true, true);
							cm.worldMessage( "[BOSS����] Զ���ӳ��Ѿ��볡���������ַ�������ʼ�������Զ���������Ҿ����볡��");
							//���Ŷ�ÿ��a("zhakun");//���ŶӴ���
							����ͼÿ��a(cm.getPlayer().getMap(), "zhakun");
						}
						
                        cm.dispose();
                    } else {
                        cm.sendOk("����δ֪�Ĵ��󣬶Զ����Ҫ�󱻾ܾ���.");
                        cm.safeDispose();
                    }
                }
                break;
            case 11:
                cm.banMember("ZAK", selection);
                cm.dispose();
                break;
            case 12:
                if (selection != -1) {
                    cm.acceptMember("ZAK", selection);
                }
                cm.dispose();
                break;
        }
    }
}

function ���Ŷ�ÿ��a(name){
	if(cm.getPlayer().getParty() != null && cm.getPlayer().getParty().getMembers().size() > 1){
		var chrs = cm.getPlayer().getParty().getMembers();
		var it = chrs.iterator();
		while(it.hasNext()){
			var chr = it.next();
			var curChar = cm.getPlayer().getMap().getCharacterById(chr.getId());
			if (curChar != null) {
				curChar.setBossLoga(name);
			}
		}
	}else{
		cm.setBossLoga(name);
	}
	
}

function ����ͼÿ��a(map, name){
	var chrs = map.getCharactersThreadsafe();
	if(chrs != null && !chrs.isEmpty()){
		var it = chrs.iterator();
		while(it.hasNext()){
			var chr = it.next();
			if (chr != null) {
				chr.setBossLoga(name);
			}
		}
	}
}