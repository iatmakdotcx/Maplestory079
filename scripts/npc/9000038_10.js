/*
SnailMS�ű�������
*/
var ���� = "#fEffect/CharacterEff/1003276/0/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

/*������������������������������������������������������������������������������������������������������������������*/
var װ���б� = Array(//ID��ǰ׺��������ħ�������������ݡ������������������ħ�������С��رܡ��ٶȡ���Ծ������������
	Array(1072447, "һ�׶�", 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 5),
	Array(1072455, "���׶�", 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 5),
	Array(1072463, "���׶�", 6, 6, 6, 6, 6, 6, 0, 0, 0, 0, 0, 0, 5),
	Array(1072660, "���׶�", 10, 10, 10, 10, 10, 10, 0, 0, 0, 0, 0, 0, 5),
	Array(1072768, "ʷʫ", 15, 15, 15, 15, 15, 15, 0, 0, 0, 0, 0, 0, 5),
	Array(1073057, "��˵", 23, 23, 23, 23, 23, 23, 0, 0, 0, 0, 30, 30, 5)
);

var �����б� = Array(
	Array(//һ�׶�
		Array(0, 20000000),//����ID��0Ϊ��ң�1Ϊ��ȯ��2Ϊ���ã�������
		Array(4000012, 9999),
		Array(4000041, 9999),
		Array(4000031, 9999),
		Array(4031456, 100),
		Array(4005003, 200),
		Array(4002000, 100),
		Array(4011007, 20),
		Array(4021009, 20)
	),
	Array(//���׶�
		Array(0, 40000000),//����ID��0Ϊ��ң�1Ϊ��ȯ��2Ϊ���ã�������
		Array(4000171, 9999),
		Array(4000112, 9999),
		Array(4000115, 9999),
		Array(4031456, 100),
		Array(4005002, 200),
		Array(4002003, 100),
		Array(4011007, 40),
		Array(4021009, 40)
	),
	Array(//���׶�
		Array(0, 60000000),//����ID��0Ϊ��ң�1Ϊ��ȯ��2Ϊ���ã�������
		Array(4000180, 9999),
		Array(4000184, 9999),
		Array(4000183, 9999),
		Array(4031456, 100),
		Array(4005000, 200),
		Array(4002002, 100),
		Array(4011007, 60),
		Array(4021009, 60)
	),
	Array(//���׶�
		Array(0, 80000000),//����ID��0Ϊ��ң�1Ϊ��ȯ��2Ϊ���ã�������
		Array(4000061, 9999),
		Array(4000060, 9999),
		Array(4000059, 9999),
		Array(4002001, 100),
		Array(4005001, 200),
		Array(4031456, 100),
		Array(4011007, 80),
		Array(4021009, 80),
		Array(4002001, 100)
	),
	Array(//ʷʫ
		Array(0, 100000000),//����ID��0Ϊ��ң�1Ϊ��ȯ��2Ϊ���ã�������
		Array(4000074, 9999),
		Array(4000071, 9999),
		Array(4000072, 9999),
		Array(4000070, 9999),
		Array(4031456, 100),
		Array(4031561, 100),
		Array(4031559, 100),
		Array(4011007, 100),
		Array(4021009, 100),
		Array(4031997, 500)
	),
	Array(//��˵
		Array(0, 200000000),//����ID��0Ϊ��ң�1Ϊ��ȯ��2Ϊ���ã�������
		Array(4251100, 10),
		Array(4251000, 10),
		Array(4250900, 10),
		Array(4250800, 10),
		Array(4310081, 200)
	)
);
/*����������������������������������������������������������������������������������������������������������������������������������*/


var choosed = -1;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("�Ի�������");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		//�������д�ű���һ��Ҫ������
		var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		   text += " \t\t\t  #e#r #v4000005#  ����С��  #v4000005##k#n              \r\n"
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            text += "#d��ɫ���ƣ�#b" + cm.getName() + "#k#n\t\t  #dʣ���ң�#b" + cm.getMeso() + "#k#n\r\n"	
			for(var i = 0; i < װ���б�.length; i++){
				text += "#L" + i + "##b[#r" + װ���б�[i][1] + "#b]#v" + װ���б�[i][0] + "##d#z" +  + װ���б�[i][0] + "##bx1\r\n";
				if(װ���б�[i][2] > 0){
					text += " #r" + װ���б�[i][2] + "#b��";
				}
				if(װ���б�[i][3] > 0){
					text += " #r" + װ���б�[i][3] + "#bħ";
				}
				if(װ���б�[i][4] > 0){
					text += " #r" + װ���б�[i][4] + "#b��";
				}
				if(װ���б�[i][5] > 0){
					text += " #r" + װ���б�[i][5] + "#b��";
				}
				if(װ���б�[i][6] > 0){
					text += " #r" + װ���б�[i][6] + "#b��";
				}
				if(װ���б�[i][7] > 0){
					text += " #r" + װ���б�[i][7] + "#b��";
				}
				if(װ���б�[i][8] > 0){
					text += " #r" + װ���б�[i][8] + "#b���";
				}
				if(װ���б�[i][9] > 0){
					text += " #r" + װ���б�[i][9] + "#bħ��";
				}
				if(װ���б�[i][10] > 0){
					text += " #r" + װ���б�[i][10] + "#b��";
				}
				if(װ���б�[i][11] > 0){
					text += " #r" + װ���б�[i][11] + "#b��";
				}
				if(װ���б�[i][12] > 0){
					text += " #r" + װ���б�[i][12] + "#b��";
				}
				if(װ���б�[i][13] > 0){
					text += " #r" + װ���б�[i][13] + "#b��";
				}
				if(װ���б�[i][14] > 0){
					text += " #r" + װ���б�[i][14] + "#b����������";
				}
				text += "#l\r\n\r\n"
			}
		text += "\r\n"+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n\r\n"
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		choosed = selection;
		var text = "Ҫ����#b[#r" + װ���б�[choosed][1] + "#b]#v" + װ���б�[choosed][0] + "##d#z" +  + װ���б�[choosed][0] + "##bx1\r\n";

		if(װ���б�[choosed][2] > 0){
			text += " #r" + װ���б�[choosed][2] + "#b��";
		}
		if(װ���б�[choosed][3] > 0){
			text += " #r" + װ���б�[choosed][3] + "#bħ";
		}
		if(װ���б�[choosed][4] > 0){
			text += " #r" + װ���б�[choosed][4] + "#b��";
		}
		if(װ���б�[choosed][5] > 0){
			text += " #r" + װ���б�[choosed][5] + "#b��";
		}
		if(װ���б�[choosed][6] > 0){
			text += " #r" + װ���б�[choosed][6] + "#b��";
		}
		if(װ���б�[choosed][7] > 0){
			text += " #r" + װ���б�[choosed][7] + "#b��";
		}
		if(װ���б�[choosed][8] > 0){
			text += " #r" + װ���б�[choosed][8] + "#b���";
		}
		if(װ���б�[choosed][9] > 0){
			text += " #r" + װ���б�[choosed][9] + "#bħ��";
		}
		if(װ���б�[choosed][10] > 0){
			text += " #r" + װ���б�[choosed][10] + "#b��";
		}
		if(װ���б�[choosed][11] > 0){
			text += " #r" + װ���б�[choosed][11] + "#b��";
		}
		if(װ���б�[choosed][12] > 0){
			text += " #r" + װ���б�[choosed][12] + "#b��";
		}
		if(װ���б�[choosed][13] > 0){
			text += " #r" + װ���б�[choosed][13] + "#b��";
		}
		if(װ���б�[choosed][14] > 0){
			text += " #r" + װ���б�[choosed][14] + "#b����������";
		}
		
		text += "\r\n\r\n#r��Ҫ��#b";
		for(var i = 0; i < �����б�[choosed].length; i++){
			if(�����б�[choosed][i][0] == 0){
				text += "#b���#rx" + �����б�[choosed][i][1] + " ";
			}else if(�����б�[choosed][i][0] == 1){
				text += "#b��ȯ#rx" + �����б�[choosed][i][1] + " ";
			}else if(�����б�[choosed][i][0] == 2){
				text += "#b����ȯ#rx" + �����б�[choosed][i][1] + " ";
			}else{
				text += "#r#v" + �����б�[choosed][i][0] + "#x" + �����б�[choosed][i][1] + " ";
			}
			
		}
		if(choosed > 0){
			text += "\r\n\t#k�Լ� #b[#r" + װ���б�[choosed - 1][1] + "#b]#v" + װ���б�[choosed - 1][0] + "##d#z" +  + װ���б�[choosed - 1][0] + "##bx1\r\n";
		}
		text += "\r\n";
		text += "��ȷ��Ҫ����ô��\r\n";
		cm.sendYesNo(text);
		
	} else if(status == 2){
		for(var i = 0; i < �����б�[choosed].length; i++){
			if(�����б�[choosed][i][0] == 0){
				if(cm.�жϽ��() < �����б�[choosed][i][1]){
					cm.sendOk("�����ϵĽ�Ҳ���!");
					cm.dispose();
					return;
				}
			}else if(�����б�[choosed][i][0] == 1){
				if(cm.�жϵ�ȯ() < �����б�[choosed][i][1]){
					cm.sendOk("�����ϵĵ�ȯ����!");
					cm.dispose();
					return;
				}
			}else if(�����б�[choosed][i][0] == 2){
				if(cm.�жϵ���ȯ() < �����б�[choosed][i][1]){
					cm.sendOk("�����ϵĵ���ȯ����!");
					cm.dispose();
					return;
				}
			}else{
				if(!cm.haveItem(�����б�[choosed][i][0], �����б�[choosed][i][1])){
					cm.sendOk("�����ϵ�#i" + �����б�[choosed][i][0] + "#����!");
					cm.dispose();
					return;
				}
			}
		}
		if(choosed > 0){
			var item0 = cm.getInventory(1).getItem(1);
			if(item0.getItemId() != װ���б�[choosed - 1][0]){
				cm.sendOk("�뱣֤���װ������ #r1#k ���װ��Ϊ#v" + װ���б�[choosed - 1][0] + " #!");
				cm.dispose();
				return;
			}else if(!item0.getOwner().equals(װ���б�[choosed - 1][1])){
				cm.sendOk("�뱣֤���װ������ #r1#k ���װ��ǰ׺Ϊ[#r" + װ���б�[choosed - 1][1] + "#k]!");
				cm.dispose();
				return;
			}
		}
		if(cm.�жϱ���װ����().isFull()){
			cm.sendOk("�뱣֤���װ���������� #r1#k ���λ!");
			cm.dispose();
			return;
		}
		
		for(var i = 0; i < �����б�[choosed].length; i++){
			if(�����б�[choosed][i][0] == 0){
				if(cm.�жϽ��() < �����б�[choosed][i][1]){
					cm.sendOk("�����ϵĽ�Ҳ���!");
					cm.dispose();
					return;
				}
				cm.�ս��(�����б�[choosed][i][1]);
			}else if(�����б�[choosed][i][0] == 1){
				if(cm.�жϵ�ȯ() < �����б�[choosed][i][1]){
					cm.sendOk("�����ϵĵ�ȯ����!");
					cm.dispose();
					return;
				}
				cm.�յ�ȯ(�����б�[choosed][i][1]);
			}else if(�����б�[choosed][i][0] == 2){
				if(cm.�жϵ���ȯ() < �����б�[choosed][i][1]){
					cm.sendOk("�����ϵĵ���ȯ����!");
					cm.dispose();
					return;
				}
				cm.�յ���ȯ(�����б�[choosed][i][1]);
			}else{
				if(!cm.haveItem(�����б�[choosed][i][0], �����б�[choosed][i][1])){
					cm.sendOk("�����ϵ�#i" + �����б�[choosed][i][0] + "#����!");
					cm.dispose();
					return;
				}
				cm.gainItem(�����б�[choosed][i][0], -�����б�[choosed][i][1]);
			}
		}
		if(choosed > 0){
			var item0 = cm.getInventory(1).getItem(1);
			if(item0.getItemId() != װ���б�[choosed - 1][0]){
				cm.sendOk("�뱣֤���װ������ #r1#k ���װ��Ϊ#v" + װ���б�[choosed - 1][0] + " #!");
				cm.dispose();
				return;
			}else if(!item0.getOwner().equals(װ���б�[choosed - 1][1])){
				cm.sendOk("�뱣֤���װ������ #r1#k ���װ��ǰ׺Ϊ[#r" + װ���б�[choosed - 1][1] + "#k]!");
				cm.dispose();
				return;
			}
			Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
		}
		var item = cm.getNewEquip(װ���б�[choosed][0]);
		item.setOwner(װ���б�[choosed][1]);
		item.setWatk(װ���б�[choosed][2]);
		item.setMatk(װ���б�[choosed][3]);
		item.setStr(װ���б�[choosed][4]);
		item.setDex(װ���б�[choosed][5]);
		item.setInt(װ���б�[choosed][6]);
		item.setLuk(װ���б�[choosed][7]);
		item.setWdef(װ���б�[choosed][8]);
		item.setMdef(װ���б�[choosed][9]);
		item.setAcc(װ���б�[choosed][10]);
		item.setAvoid(װ���б�[choosed][11]);
		item.setSpeed(װ���б�[choosed][12]);
		item.setJump(װ���б�[choosed][13]);
		// item.setHp(item0.getHp());
		// item.setMp(item0.getMp());
		item.setUpgradeSlots(װ���б�[choosed][14]);
		//item.setLevel(item0.getLevel());
		//item.setViciousHammer(item0.getViciousHammer());
		//item.setOwner(item0.getOwner());
		Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
		cm.sendOk("��ϲ��ɹ�������#v" + װ���б�[choosed][0] + "#\r\n");
		cm.ȫ�����߹���("[װ������]", "��� "+cm.getPlayer().getName()+" �����ռ����ϣ�������иŬ��������������ǿ���װ����", item);
		cm.dispose();
		
	} else {
		cm.dispose();
		return;
	}
}

