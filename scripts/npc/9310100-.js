

var status = -1;



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
        var avail = "����Ҫ����ʦ����\r\n";
    avail += "#L1#����ʦ��#l\r\n";
	avail += "#L2#��ͽ����(PS��ʦ��һ�������Ƕӳ�)#l\r\n";
	avail += "#L3#��ͽ��ʦ(PS��ʦ��һ�������Ƕӳ�)#l\r\n";
	avail += "#L4#��ͽ��ʦ#l\r\n";
	avail += "#L5#�˳�ʦ��#l\r\n";
	avail += "#L6#ʦ��ϵͳ����#l\r\n";
	
        
        cm.sendSimple(avail);
    } else if (status == 1){
		if (selection == 1){
			if (cm.getPlayer().getLevel() < 150){
				cm.sendOk("��ĵȼ�����");
				cm.dispose();
				return;
			}
			if(cm.jianlishimen() < 1){
				cm.jianlishimen2();
				cm.ʦ�ų�ʦ();
				cm.sendOk("��ɹ�����ʦ��");
				cm.dispose();
			} else {
				cm.sendOk("���Ѿ�������ʦ����");
				cm.dispose();
			}
        } else if (selection == 2){

			
			if (cm.getParty() == null) {
                		cm.sendNext("��Ӻ���������");
                		cm.dispose();
                		return;
            } 
var next = true;
var gender = cm.getPlayer().getGender();
var mapId = cm.getPlayer().getMapId();
//var next = true;
var party = cm.getPlayer().getParty().getMembers();
var it = party.iterator();
var cPlayer = it.next();
var victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
var TDid = victim.getId();
			if (cm.getPlayer().getLevel() < 150){
				cm.sendOk("ʦ���ȼ�����150��");
				cm.dispose();
				return;
			} 
			if (victim.getLevel() >= 80){
				cm.sendOk("ͽ�ܵȼ��Ѿ�����80����");
				cm.dispose();
				return;
			}
			if (cm.isLeader()) {
                		cm.sendNext("����ʦ�����ҶԻ�(PS��ʦ��һ��Ҫ�Ƕ�Ա)");
                		cm.dispose();
                		return;
			} else if (!(victim.jianlishimen() < 1)){
				cm.sendOk("��ͽ���Ѿ���ʦ����");
				cm.dispose();
			} else if (cm.jianlishimen() < 1){
				cm.sendOk("�㻹û����ʦ����");
				cm.dispose();
				return;
           	} else if (cm.��ͽ��ʦ(TDid) != 0 ){
				cm.sendOk("�����ͽ���Ѿ��չ���");
				cm.dispose();
				return;
			} else if (cm.get��ʦ(TDid) > 0){
				cm.sendOk("���յ����ͽ���Ѿ���ʦ��");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getParty().getMembers().size() > 2){
				cm.sendOk("ÿ��ֻ�ܴ�һ��ͽ������");
				cm.dispose();
				return;
			} else if (cm.shoutu == 0){
				cm.sendOk("���ʦ���Ѿ���3��ͽ���ˣ���ͽ�ܳ�ʦ������");
				cm.dispose();
				return;
			} else {
				var a1_1 = cm.��ͽ���_0(TDid);
				var a2_2 = cm.��ͽ���_1(TDid);
				var a3_3 = cm.��ͽ���_2(TDid);
					if (a1_1 - TDid == 0){
						cm.sendOk("���Ҫ��ͽ���Ѿ���ʦ����");
						cm.dispose();
						
					} else if (a2_2 - TDid == 0){
						cm.sendOk("���Ҫ��ͽ���Ѿ���ʦ����");
						cm.dispose();
						
					} else if (a3_3 - TDid == 0){
						cm.sendOk("���Ҫ��ͽ���Ѿ���ʦ����");
						cm.dispose();
						
					} else {
						cm.is��ͽ����(TDid);
						cm.sendOk("��ɹ�����"+victim.getName()+"Ϊͽ��");
						//cm.worldMessage(11, "��ʦ��ϵͳ��" + " : " + "[" + cm.getChar().getName() + "]�ͳɹ�����["+victim.getName()+"]Ϊͽ�ܡ�");
						cm.dispose();
						return;
					}
				
			}
		} else if (selection == 3){

			if (cm.getParty() == null) {
                		cm.sendNext("��Ӻ���������");
                		cm.dispose();
                		return;
            }
			var next = true;
			var gender = cm.getPlayer().getGender();
			var mapId = cm.getPlayer().getMapId();
//var next = true;
			var party = cm.getPlayer().getParty().getMembers();
			var it = party.iterator();
			var cPlayer = it.next();
			var victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			var TDid = victim.getId();
			if (cm.isLeader()) {
                		cm.sendNext("����ʦ�����ҶԻ�(PS��ʦ��һ��Ҫ�Ƕ�Ա)");
                		cm.dispose();
                		return;
			} else if (victim.getLevel() < 160){
				cm.sendOk("���ͽ�ܵȼ�����");
				cm.dispose();
			} else if (cm.jianlishimen < 1){
				cm.sendOk("�㻹û����ʦ����");
				cm.dispose();
				return;
           	} else if (cm.��ͽ��ʦ(TDid) == 0){
				cm.sendOk("��ȷ��������ͽ���𣿣���");
				cm.dispose();
				return;
			} else {
				cm.is��ͽ��ʦ(TDid);
				cm.set��ʦ(TDid);
				cm.getPlayer().modifyCSPoints(2,5000);
				cm.gainMeso(10000000);
				cm.gainItem(2210003,20);
				victim.modifyCSPoints(2,20000);
				cm.sendOk("���ͽ"+victim.getName()+"��ʦ�ɹ�!\r\nͽ�ܻ�ã�2W���þ�\r\nʦ����ã�20ƿ#z2210003# + 5000���� + 1000W���");
				cm.dispose();
			}
		} else if (selection == 4){
			cm.dispose();
			cm.openNpc(9900004,153);
			
		} else if (selection == 5){
			var a = cm.hqid();
			var a1_1 = cm.�˳�ʦ��();
			var a2_2 = cm.�˳�ʦ��1();
			var a3_3 = cm.�˳�ʦ��2();
			var SFid;
			if (a1_1 - a == 0){
				SFid = cm.�˳�ʦ��_0();
				cm.is�˳�ʦ��(SFid,1);
				cm.sendOk("�˳�ʦ�ųɹ�");
				cm.dispose();
			} else if (a2_2 - a == 0){
				SFid = cm.�˳�ʦ��_1();
				cm.is�˳�ʦ��(SFid,2);
				cm.sendOk("�˳�ʦ�ųɹ�");
				cm.dispose();
			} else if (a3_3 - a == 0){
				SFid = cm.�˳�ʦ��_2();
				cm.is�˳�ʦ��(SFid,3);
				cm.sendOk("�˳�ʦ�ųɹ�");
				cm.dispose();
			} else {
				cm.sendOk("�˳�ʦ��ʧ�ܣ���û��ʦ��");
				cm.dispose();
			}
		} else if (selection == 6ge1ku){
			cm.sendOk("ʦ��ϵͳ���ܣ�\r\nͽ�ܵȼ�������С��80��\r\nʦ�����ڣ��������150��\r\n\r\n\r\n160����ʦ\r\n\r\nͽ�ܳ�ʦ��� 2W���þ�\r\n\r\nʦ����ʦ��� 20ƿ#z2210003# + 5000���� + 1000W���\r\n\r\n\r\n");
			cm.dispose();
		}
    }
	
}