importClass(java.util.regex.Pattern);
importClass(java.util.ArrayList);
importClass(java.lang.Integer);
// importClass(java.lang.String);
importClass(Packages.database.DBConPool);
importPackage(java.util.regex);
importClass(Packages.tools.�����ַ���);

var status = -1;

var ��ʦ�ȼ� = 70;
var ͽ���������� = 100;
var ʦ���ƺ� = Array("Ϊ��ʦ��", "ѭѭ����", "��������", "��������", "��������", "��������", "��������");
var ʦ���ɾ�ÿ��ͽ������ = 10;
var ʦ���ɾ����� = 300;
var ʦ���ɾ͵�ȯ = 30000;
var ʦ���ɾ͵��� = Array(4310250, 10);
var ʦ���ɾ�APֵ = 10;
var mark = 0;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    
    if (mode == 1) {
        status++;
    } else if (mode == 0 && status != 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
			var ʦ������ = ���ʦ������(cm.getPlayer().getId());
			var ��ʦ = �Ƿ��ʦ(cm.getPlayer().getId());
		    var text = "\t\t\t#e��ӭ����#r" + cm.��������() + "ʦͽϵͳ#k#n\r\n";
			if(!ʦ������.isEmpty()){
				if(��ʦ){
					text += "\t\t���ʦ���� #b" + ʦ������ + "#k\t\t#g�ѳ�ʦ#k\r\n";
				}else{
					text += "\t\t���ʦ���� #b" + ʦ������ + "#k\t\t#rδ��ʦ#k\r\n";
				}
				
			}
			if(cm.getOneTimeLog("ʦ��") > 0){
				var mount = ��ó�ʦͽ������(cm.getPlayer().getId());
				var level = parseInt(mount / ʦ���ɾ�ÿ��ͽ������);
				//cm.getPlayer().dropMessage("mount:" + mount);//����
				//cm.getPlayer().dropMessage("level:" + level);//����
				if(level > 0 && level < ʦ���ƺ�.length){
					text += "\t\t\t\t��ͽ�ɾͣ� #b" + ʦ���ƺ�[level - 1] + "#k\r\n";
				}else if(level >= ʦ���ƺ�.length){
					text += "\t\t\t\t��ͽ�ɾͣ� #b" + ʦ���ƺ�[ʦ���ƺ�.length - 1] + "#k\r\n";
				}
			}
            for (i = 0; i < 10; i++) {
                text += "";
            }
			
			text += "����Ҫ����ʦ����#r(��ͽ�󲻿�������ţ��������ͽ)#k\r\n";
			text += "#L1#��Ҫ����ʦ��#l			#L6##bʦͽϵͳ˵��#k\r\n";
			text += "#L2##r��ͽ����#k(PS��#dʦͽ�����#k)#l	\r\n";
            text += "#L3##r��ͽ��ʦ#k(PS��#dʦͽ�����#k)#l\r\n";
			text += "#L4##rͽ���б�#k(PS��#dֻ�н���ʦ�Ų��ܲ鿴#k)#l\r\n";
			text += "#L8##r��������#k(PS��#d����ͽ�ܿ�������#k)#l\r\n";
			text += "#L5##r����������#k(PS��#d��ȡ��ͽ�ɾ�#k)#l\r\n"
			// text += "#L11##r�ɳ�����#k(PS��#dͽ�ܳɳ������и��׶εĽ���#k)#l\r\n";
            // text += "#L7#��ͽ�ܰ�ʦ�����#r(����󲻿��˳����������ʦ)#l\r\n";
			text += "#L9##r���ʦ��#k#l\r\n";
			text += "#L10##r����ʦ��#k#l\r\n";
			
			if(cm.getPlayer().getGMLevel() >= 100){
				text += "\r\n#L12##b��ʦ�һ��루GMר����#k#l\r\n";
			}
			
            cm.sendSimple(text);
    } else if (status == 1){
		if (selection == 1){
			var id = cm.getPlayer().getId();
			if (cm.getPlayer().getLevel() < 55){
				cm.sendOk("��ĵȼ�����55��");
				cm.dispose();
				return;
			}else if(cm.getPlayer().getOneTimeLog("ʦ��") < 1){
				cm.getPlayer().setOneTimeLog("ʦ��");
				//cm.ʦ�ų�ʦ();
				cm.sendOk("��ɹ�������ʦ�ţ��Ͻ�ȥ��ͽ�ɣ�");
				cm.worldMessage(6,"��ʦͽϵͳ��[" + cm.getChar().getName() + "]�ɹ�������ʦ�ţ�Ҫ��ʦ���ĸϽ��ˣ�");
				cm.dispose();
			} else {
				cm.sendOk("���Ѿ�������ʦ���ˣ�ȥ��ͽ�ɣ�");
				cm.dispose();
			}
		} else if (selection == 5){
			var mount = ��ó�ʦͽ������(cm.getPlayer().getId());
			var level = parseInt(mount / ʦ���ɾ�ÿ��ͽ������);
			for(var i = 1; i <= level; i++){
				//cm.getPlayer().dropMessage("��ʦ�ɾ�:" + cm.getOneTimeLog("��ʦ�ɾ�" + i));//����
				if(cm.getOneTimeLog("��ʦ�ɾ�" + i) < 1){
					if(i > ʦ���ƺ�.length){
						cm.sendOk("���Ѿ���ȡ����߳ɾ��ˣ��޷��ټ�����ȡ�ˣ�");
						cm.dispose();
						return;
					}
					cm.setOneTimeLog("��ʦ�ɾ�" + i);
					cm.�����������(ʦ���ɾ�����);
					cm.getPlayer().dropMessage(5, "������� " + ʦ���ɾ����� + " �ۼ�����");
					cm.����ȯ(ʦ���ɾ͵�ȯ);
					cm.gainItem(ʦ���ɾ͵���[0], ʦ���ɾ͵���[1]);
					cm.��������(ʦ���ɾ�APֵ);
					cm.getPlayer().dropMessage(5, "������� " + ʦ���ɾ�APֵ + " ��APֵ��");
					cm.sendOk("��ϲ��ɹ���ȡ#b " + ʦ���ƺ�[i - 1] + " #k�ɾͽ�����");
					cm.dispose();
					return;
				}
			}
			if(level <= 0){
				var message = "����1���ɾͶ�û�У���ɶ�������Ͻ���ͽȥ�ɡ�\r\n";
				message += "\r\n#rps��ÿ��#b" + ʦ���ɾ�ÿ��ͽ������ + "#r��ͽ�ܣ��Ϳ��Ի��#b�ۼ�����x" + ʦ���ɾ����� + "#r��#b��ȯx" + ʦ���ɾ͵�ȯ + "#r��#bAP����ֵx" + ʦ���ɾ�APֵ + "#r��#b#v" + ʦ���ɾ͵���[0] + "#x" + ʦ���ɾ͵���[1] + "#r���Լ�#b��Ӧ�ƺ�#r��\r\n";
				cm.sendOk(message);
				cm.dispose();
				return;
			}else{
				var message ="���Ѿ����#b " + ʦ���ƺ�[level - 1] + " #k�ɾͽ����ˡ�\r\n";
				if(level < ʦ���ƺ�.length){
					message += "#d��һ���ƺ�:#b" + ʦ���ƺ�[level - 1] + "\r\n";
				}else{
					message += "#d��һ���ƺ�:#b" + ʦ���ƺ�[ʦ���ƺ�.length - 1] + "\r\n";
				}
				var upNeed = mount % ʦ���ɾ�ÿ��ͽ������;
				message += "#d�����ʦͽ������:#b" + upNeed + "\r\n";
				cm.sendOk(message);
				cm.dispose();
				return;
			}
			
			/* switch(level){
				case 1:
					if(cm.getOneTimeLog("��ʦ�ɾ�" + level) > 0){
						cm.sendOk("���Ѿ����#b " + ʦ���ƺ�[level - 1] + " #k�ɾͽ����ˡ�");
						cm.dispose();
						return;
					}else{
						cm.setOneTimeLog("��ʦ�ɾ�" + level);
						cm.�����������(ʦ���ɾ�����);
						cm.����ȯ(ʦ���ɾ͵�ȯ);
						cm.gainItem(ʦ���ɾ͵���[0], ʦ���ɾ͵���[1]);
						cm.sendOk("��ϲ��ɹ���ȡ#b " + ʦ���ƺ�[level - 1] + " #k�ɾͽ�����");
						cm.dispose();
						return;
					}
			} */
        } else if (selection == 2){
			if (cm.getParty() == null) {
                cm.sendNext("����Ӻ��������ң�");
                cm.dispose();
                return;
            } else if (cm.allMembersHere() == false){
				cm.sendOk("ͽ�ܻ���ʦ�����������ͼ����");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getOneTimeLog("ʦ��") < 1) {
                cm.sendNext("����ʦ�����ҶԻ���");
                cm.dispose();
                return;
			} else if (cm.getBossLog("��ͽ") > 5) {
							cm.sendNext("ÿ����ɫÿ��ֻ����5��ͽ�ܣ���������Ŷ��");
							cm.dispose();
							return;
			}else if (cm.�����ͽ������() >= ͽ����������) {
				cm.sendNext("���չ���ͽ����������#r" + ͽ���������� + "#kλ,��ʱ��ѻ����ø���������");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getOneTimeLog("ʦ��") < 1){
				cm.sendOk("�㻹û����ʦ����");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getParty().getMembers().size() > 2){
				cm.sendOk("ÿ��ֻ�ܴ�1��ͽ�����ţ���2����ӣ�");
				cm.dispose();
				return;
			} else if (cm.�����ͽ������() >= ͽ����������){
				cm.sendOk("���ʦ���Ѿ���#r" + ͽ���������� + "#k��ͽ����");
				cm.dispose();
				return;
			} 
			var next = true;
			var mapId = cm.getPlayer().getMapId();
			var party = cm.getPlayer().getParty().getMembers();
			var it = party.iterator();
			var student;
			while(it.hasNext()){
				var cPlayer = it.next();
				var victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());//ͽ��
				if(victim.getId() != cm.getPlayer().getId()){
					student = victim;
					break;
				}
			}
			if(student == null){
				cm.sendNext("�Ҳ���ͽ�ܣ���ȷ��ͽ�ܺ����������һ�ŵ�ͼ��");
                cm.dispose();
                return;
			}else if(student.getBossLog(ʦ��) > 0){
				cm.sendNext("�����ͽ���Ѿ�����ʦ���ˣ����ո����ӣ�������������ɡ�");
                cm.dispose();
                return;
			}
			
			var TDid = student.getId();
			var a1_1 = cm.getOneTimeLog(TDid);//�Լ�����ͽ��¼ID
			var shoutu = student.getOneTimeLog(TDid);
			var chushi = student.getOneTimeLog("��ʦ");
			var id = cm.getPlayer().getId();
			var tcsm = student.getOneTimeLog("�˳�ʦ��");
			var jrsm = student.getOneTimeLog(TDid);
			if (student.getLevel() > 50){
				cm.sendOk("ͽ�ܵȼ��Ƿ��Ѿ�����50���ˣ�(��Ҫͽ����ʦ��������ӣ�)");
				cm.dispose();
				return;
			} else {
					// cm.getPlayer().setOneTimeLog("��ͽ");
					if(!cm.��ͽ(student.getId())){
						cm.sendOk("���Ѿ��չ����ͽ���˻��߸�ͽ������ʦ��");
						cm.dispose();
						return;
					}
                                        // cm.getPlayer().setOneTimeLog("daitu");
                                        // cm.setBossLog('shoutu');
					// cm.givePartyBossLog("��ͽ");
					cm.setOneTimeLog(TDid);
					cm.sendOk("��ɹ�����"+student.getName()+"Ϊͽ�ܣ�");
					 
					//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ʦͽϵͳ" + " : ["+ cm.getPlayer().getName() +"]����["+victim.getName()+"]Ϊͽ�ܣ���ͽ�ܽ���ȷ�ϣ�",true).getBytes());

				//cm.worldMessage(6,"��ʦͽϵͳ��[" + cm.getChar().getName() + "] ���� ["+victim.getName()+"]Ϊͽ�ܣ���ͽ�ܽ���ȷ�ϣ�");

 cm.ȫ����ɫ����("��ʦͽϵͳ�� : ��� "+cm.getPlayer().getName()+"  ���� ["+student.getName()+"] Ϊͽ�ܣ�")
 
					cm.dispose();
					return;
					}
			
		} else if (selection == 3){
			if (cm.getParty() == null) {
				cm.sendNext("��Ӻ���������");
				cm.dispose();
				return;
			}else if (cm.getPlayer().getOneTimeLog("ʦ��") < 1){
				cm.sendOk("�㻹û����ʦ����");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getParty().getMembers().size() > 2){
				cm.sendOk("ÿ��ֻ�ܴ�1��ͽ�ܳ�ʦ����2����ӣ�");
				cm.dispose();
				return;
			} else if (cm.allMembersHere() == false){
				cm.sendOk("ͽ�ܻ���ʦ�����������ͼ����");
				cm.dispose();
				return;
			}
			var text = "��������ĳ�ʦ�һ��루#r����ϵ����Ա��ȡ#k����\r\n"
			cm.sendGetText(text);
			mark = 3;
		} else if (selection == 4){
			// var sss = Ǩ��ͽ���б�(cm.getPlayer().getId());
			// if(cm.getPlayer().isGM()){
				// Ǩ�����н�ɫ();
			// }
			
			var message = ��ȡͽ���б�();
			cm.sendOk(message);
			cm.dispose();
				//cm.openNpc(9900004,153);
	

			} else if (selection == 5){
			var id = cm.getPlayer().getId();
			var tcsm = cm.getOneTimeLog("�˳�ʦ��");
			var jrsm = cm.getOneTimeLog(id);
			if (jrsm == 0){;
				cm.sendOk("�˳�ʦ��ʧ�ܣ�\r\n��û��û�м����ʦ��!��ע��ʦ��������ȡ��ʦ�ţ�");
				cm.dispose();
			} else if (jrsm - tcsm == 0){
				cm.sendOk("���Ѿ�û��ʦ�ſ����˳��� �������ٴ��˳���");
				cm.dispose();
			} else {
				cm.setOneTimeLog("�˳�ʦ��");
				cm.sendOk("�˳�ʦ�ųɹ�!");
				cm.dispose();
			}
		} else if (selection == 6){
			cm.sendOk("ʦ��ϵͳ���ܣ�\r\nͽ�ܵȼ�������С��#r50#k��\r\nʦ���ȼ����������#r55#k��\r\n\r\nͽ�ܴﵽ#r" + ��ʦ�ȼ� + "#k�����ɳ�ʦ\r\n\r\nͽ�ܻ��:20000��ȯ#v2340000# x2 #v2049100# x1\r\n\r\n\r\nʦ����ã�6000��ȯ #v2340000# x4 #v2049100# x2");
			cm.dispose();
		} else if (selection == 7){
			var party = cm.getPlayer().getParty().getMembers();
			var it = party.iterator();
			var cPlayer = it.next();
			var cPlayer = it.next();
			var ʦ�� = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			var id = ʦ��.getId();
			if (cm.getPlayer().getLevel() > 80){
				cm.sendOk("ʦ������Ҫȷ�ϣ�");
				cm.dispose();
				return;
			} else if (cm.getBossLog("��ͽ") >= 1 && cm.getPlayer().getOneTimeLog(id) == 0){
				cm.getPlayer().setOneTimeLog(id);
				cm.sendOk("ʦͽ��ϵȷ�ϳɹ���");
				  cm.ȫ����ɫ����("��ʦͽϵͳ��" + " : " + "[" + cm.getChar().getName() + "]ʦͽ��ϵȷ�ϳɹ�!");
			      
				cm.dispose();
			} else {
				cm.sendOk("���Ѿ�ȷ�Ϲ��ˡ�����\r\n");
				cm.dispose();
			}
			} else if (selection == 9){//���ʦ��
				cm.openNpc(9900004,10007);
				cm.safeDispose();
			
		} else if (selection == 8){
				cm.openNpc(9900004,10009);
				cm.safeDispose();
		} else if (selection == 10){//����ʦ��
			cm.openNpc(9900004,10008);
			cm.safeDispose();
			
		} else if (selection == 11){//�׶ν���
			cm.openNpc(9900004,10089);
			cm.safeDispose();
		} else if (selection == 12){//��ʦ�һ���
			cm.openNpc(9900004,10093);
			cm.safeDispose();
		}
		
		
    }else if(status == 2){
		switch(mark){
			case 3:
				var code = cm.getText();
				
				if (cm.getParty() == null) {
					cm.sendNext("��Ӻ���������");
					cm.dispose();
					return;
				}else if (cm.getPlayer().getOneTimeLog("ʦ��") < 1){
					cm.sendOk("�㻹û����ʦ����");
					cm.dispose();
					return;
				} else if (cm.getPlayer().getParty().getMembers().size() > 2){
					cm.sendOk("ÿ��ֻ�ܴ�1��ͽ�ܳ�ʦ����2����ӣ�");
					cm.dispose();
					return;
				} else if (cm.allMembersHere() == false){
					cm.sendOk("ͽ�ܻ���ʦ�����������ͼ����");
					cm.dispose();
					return;
				} else if(!Packages.snail.RedeemCodeUtils.checkCode("��ʦ", code)){
					cm.sendOk("�һ�����Ч����ȷ�ϡ�\r\n");
					cm.dispose();
					return;
				}
				
				var next = true;
				var gender = cm.getPlayer().getGender();
				var mapId = cm.getPlayer().getMapId();
				var party = cm.getPlayer().getParty().getMembers();
				var it = party.iterator();
				var student;
				while(it.hasNext()){
					var cPlayer = it.next();
					var victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());//ͽ��
					if(victim.getId() != cm.getPlayer().getId()){
						student = victim;
						break;
					}
				}

				var TDid = student.getId();
				
				var ͽ����id = cm.�������ͽ��id();
				var �Ƿ�ͽ�� = false;
				if(ͽ����id.isEmpty()){
					cm.sendOk("��û��ͽ�ܰ���");
					cm.dispose();
					return;
				}
				for(var i = 0; i < ͽ����id.size(); i++){
					if(student.getId() == ͽ����id.get(i)){
						�Ƿ�ͽ�� = true;
						break;
					}
				}
				
				
				if (student.getLevel() < ��ʦ�ȼ�){
					cm.sendOk("���ͽ�ܵȼ�����#r" + ��ʦ�ȼ� + "#k�������ܳ�ʦ��");
					cm.dispose();
				} else if (cm.getPlayer().getOneTimeLog("ʦ��") < 1){
					cm.sendOk("�㻹û����ʦ����");
					cm.dispose();
					return;
				} else if (!�Ƿ�ͽ��){
					cm.sendOk("��ȷ��������ͽ���𣿣���");
					cm.dispose();
					return;
				} else if (�Ƿ��ʦ(student.getId())){
					cm.sendOk("���ͽ���Ѿ���ʦ�ˣ�");
					cm.dispose();
					return;
				} else {
					// cm.getPlayer().setOneTimeLog("��ʦ");
					
					if(!cm.��ʦ(student.getId())){
						cm.sendOk("��ʦʧ�ܣ���ȷ�����Ƿ��и�ͽ�ܻ��߸�ͽ���Ƿ��ѳ�ʦ������");
						cm.dispose();
						return;
					}
					Packages.snail.RedeemCodeUtils.useCode("��ʦ", code);
					student.setOneTimeLog("��ʦ");
					// cm.getPlayer().setOneTimeLog(-TDid);			
					cm.gainItem(2049100,2);//ʦ�����
					cm.gainNX(+6000);//ʦ�����
					cm.gainItem(2340000,4);//ʦ�����
					student.modifyCSPoints(1, 20000, true);//ͽ�ܻ��
					// student.gainItem(2340000,1);
					cm.gainItem(2340000, 2, false, 0, -1, "", student.getClient());//ͽ�ܻ��
					// student.gainItem(2049100,1);
					cm.gainItem(2049100, 1, false, 0, -1, "", student.getClient());//ͽ�ܻ��
					cm.sendOk("���ͽ"+student.getName()+"��ʦ�ɹ�!\r\nͽ�ܻ��:20000��ȯ#v2340000# x2 #v2049100# x1 ʦ����ã�6000��ȯ #v2340000# x4 #v2049100# x2");
					//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ʦͽϵͳ" + " : ["+ cm.getPlayer().getName() +"]��ҳɹ���ͽ��ʦ["+student.getName()+"]����ذ������",true).getBytes());
					cm.ȫ������(6,"��ʦͽϵͳ�� : ��� "+cm.getPlayer().getName()+"  ��ҳɹ���ͽ��ʦ ["+student.getName()+"] ����ذ������")
	 
					cm.dispose();
				}
				break;
		}
	}
	
}

function �Ƿ��ʦ(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var result = 0;
	ps = con.prepareStatement("SELECT * FROM ͽ���б� WHERE student_id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		result = rs.getInt("graduate");
	}
	if(result > 0){
		return true;
	}else{
		return false;
	}
}

function �뿪ʦ��(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var result = 0;
	ps = con.prepareStatement("SELECT * FROM ͽ���б� WHERE student_id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		var ps0 = con.prepareStatement("Delete FROM ͽ���б� WHERE student_id = ?");
		ps0.setInt(1, chrid);
		ps0.executeUpdate();
		result = 1;
	}
	if(result > 0){
		return true;
	}else{
		return false;
	}
}

function ���ͽ���б�(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var name = "";
	ps = con.prepareStatement("SELECT * FROM characters WHERE id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		name = rs.getString("name");
	}
	return name;
}

function ��ó�ʦͽ������(chrid){
	var con = DBConPool.getConnection();
	var ps;
	ps = con.prepareStatement("SELECT count(*) FROM ͽ���б� WHERE chrid = ? and graduate = 1");
	//cm.getPlayer().dropMessage(cm.getPlayer().getId() + "");//����
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	var i = 0;
	if(rs.next()){
		i = rs.getInt(1);
	}
	return i;
}

function ���ʦ������(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var name = "";
	ps = con.prepareStatement("SELECT * FROM ͽ���б� WHERE student_id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		name = rs.getString("chrname");
	}
	return name;
}


function Ǩ��ͽ���б�(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var log = "";
	var graduates_id = new ArrayList();
	var students_id = new ArrayList();
	var students_name = new ArrayList();
	var chrname = "";
	var str = "";

	ps = con.prepareStatement("SELECT * FROM characters WHERE id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		chrname = rs.getString("name");
	}else{
		return "";
	}
	ps.close();
	rs.close();
	
	var ps0 = con.prepareStatement("SELECT * FROM onetimelog WHERE characterid = ?");
	ps0.setInt(1, chrid);
	var rs0 = ps0.executeQuery();
	var is_teacher = false;
	while(rs0.next()){
		if(rs0.getString("log").equals("ʦ��")){
			is_teacher = true;
			break;
		}
	}
	if(!is_teacher){
		cm.getPlayer().dropMessage("��ɫ " + chrid + " ����ʦ��");
		return "�ý�ɫ����ʦ��";
	}
	
	var ps1 = con.prepareStatement("SELECT * FROM onetimelog WHERE characterid = ?");
	ps1.setInt(1, chrid);
	var rs1 = ps1.executeQuery();
	while(rs1.next()){
		log = rs1.getString("log");
		if(Pattern.compile("^-?[1-9]\\d*$").matcher(log).find()){
			if(Integer.parseInt(log) > 0){
				var ps2 = con.prepareStatement("SELECT * FROM characters WHERE id = ?");
				ps2.setInt(1, Integer.parseInt(log));
				var rs2 = ps2.executeQuery();
				while(rs2.next()){
					if(rs2.getInt("id") == null){
						break;
					}
					students_id.add(rs2.getInt("id"));
					students_name.add(rs2.getString("name"));
				}
				ps2.close();
				rs2.close();
			}else{
				graduates_id.add(-Integer.parseInt(log));
				str += graduates_id.get(0);
			}
			
		}
	}
	ps1.close();
	rs1.close();
	
	if(!students_id.isEmpty()){
		var ps3 = con.prepareStatement("Delete FROM ͽ���б� WHERE chrid = ?");
		ps3.setInt(1, chrid);
		ps3.executeUpdate();
		ps3.close();
		
		for(var i = 0; i < students_id.size(); i++){
			var ps4 = con.prepareStatement("INSERT INTO ͽ���б� (chrid, chrname, student_id, student_name, graduate) VALUES (?, ?, ?, ?, ?)");
			// ps4.setInt(1, i + 1);
			// ps4.setInt(1, chrid);
			// ps4.setString(2, �����ַ���.removeSpecialCharacters2(chrname));
			// ps4.setInt(3, students_id.get(i));
			// ps4.setString(4, �����ַ���.removeSpecialCharacters2(students_name.get(i)));
			
			ps4.setInt(1, chrid);
			ps4.setString(2, chrname);
			ps4.setInt(3, students_id.get(i));
			ps4.setString(4, students_name.get(i));

			if(is_contain(graduates_id, students_id.get(i))){
				ps4.setInt(5, 1);
			}else{
				ps4.setInt(5, 0);
			}
			ps4.executeUpdate();
			ps4.close();
		}
	}
	
	
	
	return str;
}

function Ǩ�����н�ɫ(){
	var con = DBConPool.getConnection();
	var ps;
	ps = con.prepareStatement("SELECT * FROM characters");
	var rs = ps.executeQuery();
	var i = 0;
	while(rs.next()){
		var chridi = rs.getInt("id");
		cm.getPlayer().dropMessage("Ǩ���У��� " + i + " ����chrid�� " + chridi);
		Ǩ��ͽ���б�(chridi);
		i = i + 1;
		
	}
	cm.getPlayer().dropMessage("Ǩ�Ƴɹ�");
}


function ��ȡͽ���б�(){
	var con = DBConPool.getConnection();
	var ps;
	var message = "#d���ͽ���б����£�\r\n";
	message += "\t   ���\t\t����\t\t  �ȼ�\t   �Ƿ��ʦ\r\n";
	ps = con.prepareStatement("SELECT * FROM ͽ���б� WHERE chrid = ?");
	//cm.getPlayer().dropMessage(cm.getPlayer().getId() + "");//����
	ps.setInt(1, cm.getPlayer().getId());
	var rs = ps.executeQuery();
	var i = 1;
	while(rs.next()){
		var ps0 = con.prepareStatement("SELECT * FROM Characters WHERE id = ?");
		ps0.setInt(1, rs.getInt("student_id"));
		var rs0 = ps0.executeQuery();
		var level = 0;
		if(rs0.next()){
			level = rs0.getInt("level");
		}
		
		message += "\t\t" + i + "\t\t#b" + �����ַ���.formatString(15, " ", rs.getString("student_name")) + �����ַ���.formatString(3, " ", level + "");
		if(rs.getInt("graduate") > 0){
			message += "\t\t#g�ѳ�ʦ#d\r\n";
		}else{
			message += "\t\t#rδ��ʦ#d\r\n";
		}
		i++;
	}
	return message;
}

function ArrayList(arr) {
    this._elementData = arr || [];
}
 
var arrayListPrototype = {
 
    '_arrayPrototype': Array.prototype,
 
    '_getData': function () {
        return this._elementData;
    },
 
    'size': function () {
        return this._getData().length;
    },
 
    'isEmpty': function () {
        return this.size() === 0;
    },
 
    'contains': function (obj) {
		var i, data = this._getData(), length = data.length;
		for (i = 0; i < length; i++) {
            if (obj === data[i]) {
                return true;
            }
        }
        return false;
    },
 
    'indexOf': function (obj) {
        var i , data = this._getData(), length = data.length;
        for (i = 0; i < length; i++) {
            if (obj === data[i]) {
                return i;
            }
        }
        return -1;
    },
 
    'lastIndexOf': function (obj) {
        var i , data = this._getData(), length = data.length;
        for (i = length - 1; i > -1; i--) {
            if (obj === data[i]) {
                return i;
            }
        }
        return -1;
    },
 
    'get': function (index) {
        return this._getData()[index];
    },
 
    'set': function (index, element) {
        this._getData()[index] = element;
    },
 
    'add': function (index, element) {
        if (element) {
            this.set(index, element);
        } else {
            return this._getData().push(index);
        }
    },
 
    'remove': function (index) {
        var oldValue = this._getData()[index];
        this._getData()[index] = null;
        return oldValue;
    },
 
    'clear': function () {
        this._getData().length = 0;
    },
 
    'addAll': function (index, array) {
        if (array) {
            this._getData().splice(index, 0, array);
        } else {
            this._arrayPrototype.push.apply(this._getData(), index);
        }
    }
 
};
 
ArrayList.prototype = arrayListPrototype;

function is_contain(datas, data){
	for(var i = 0; i < datas.size(); i++){
		if(data == datas.get(i)){
			return true;
		}
	}
	return false;
}
