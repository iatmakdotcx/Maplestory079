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

var װ��50�� = Array(1002981, 1012389, 1022233, 1102563, 1072018, 1032257);
var װ��85�� = Array(1003982, 1012309, 1022234, 1102507, 1072660, 1032230);
var װ��120�� = Array(1003627, 1012469, 1022235, 1102606, 1072666, 1032227);

var ����50�� = Array(
	Array(4000037, 100),
	Array(4000020, 100),
	Array(4000008, 100),
	Array(4000007, 100)
);

var ����85�� = Array(
	Array(4000014, 500),
	Array(4000027, 500),
	Array(4000177, 500),
	Array(4000379, 500),
	Array(4000025, 500),
	Array(4000082, 50)
);

var ����120�� = Array(
	Array(4000406, 50),
	Array(4000407, 50),
	Array(4000401, 50),
	Array(4000404, 50),
	Array(4000402, 50),
	Array(4000405, 50)
);

var check = 0;

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
            text += "#d\t��ɫ���ƣ�#b" + cm.getName() + "#k#n\t\t  #dʣ���ң�#b" + cm.getMeso() + "#k#n\r\n"	
		
		text += "#L1##b�һ� #r50��#b ����������#k#l\r\n\r\n";
		text += "#L2##b�һ� #r85��#b ����������#k#l\r\n\r\n";
		text += "#L3##b�һ� #r120��#b ����������#k#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			var text = "#b�ɶһ������ף�\r\n";
			for(var i = 0; i < װ��50��.length; i++){
				text += "#v" + װ��50��[i] + "#";
			}
			text += "��ȫ����+3 ˫��+3��\r\n";
			text += "#r��Ҫ���ߣ�\r\n";
			for(var i = 0; i < ����50��.length; i++){
				text += "#v" + ����50��[i][0] + "#x" + ����50��[i][1];
			}
			text += "\r\n";
			text += "#d�Ƿ�Ҫ�һ���\r\n";
			cm.sendYesNo(text);
			check = 1;
			
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			var text = "#b�ɶһ������ף�\r\n";
			for(var i = 0; i < װ��85��.length; i++){
				text += "#v" + װ��85��[i] + "#";
			}
			text += "��ȫ����+6 ˫��+6��\r\n";
			text += "#r��Ҫ���ߣ�\r\n";
			for(var i = 0; i < ����85��.length; i++){
				text += "#v" + ����85��[i][0] + "#x" + ����85��[i][1];
			}
			text += "\r\n";
			text += "#d�Ƿ�Ҫ�һ���\r\n";
			cm.sendYesNo(text);
			check = 2;
		} else if (selection == 3) {
			//�������дѡ��2Ҫ������
			var text = "#b�ɶһ������ף�\r\n";
			for(var i = 0; i < װ��120��.length; i++){
				text += "#v" + װ��120��[i] + "#";
			}
			text += "��ȫ����+9 ˫��+9��\r\n";
			text += "#r��Ҫ���ߣ�\r\n";
			for(var i = 0; i < ����120��.length; i++){
				text += "#v" + ����120��[i][0] + "#x" + ����120��[i][1];
			}
			text += "\r\n";
			text += "#d�Ƿ�Ҫ�һ���\r\n";
			cm.sendYesNo(text);
			check = 3;
		} 
		
	} else if(status == 2){
		switch(check){
			case 1:
				if(cm.�жϱ���װ����().isFull(5)){
					cm.sendOk("�뱣֤�㱳��װ���������� 6 ��ռ�");
					cm.dispose();
					return;
				}
				for(var i = 0; i < ����50��.length; i++){
					if(!cm.haveItem(����50��[i][0], ����50��[i][1])){
						cm.sendOk("���#v" + ����50��[i][0] + "#����������");
						cm.dispose();
						return;
					}
				}
				for(var i = 0; i < ����50��.length; i++){
					cm.gainItem(����50��[i][0], -����50��[i][1]);
				}
				var item;
				for(var i = 0; i < װ��50��.length; i++){
					//cm.gainItem(װ��50��[i]);
					item = cm.getNewEquip(װ��50��[i]);
					item.setStr(3);
					item.setInt(3);
					item.setLuk(3);
					item.setDex(3);
					item.setWatk(3);
					item.setMatk(3);
					item.setUpgradeSlots(0);
					item.setViciousHammer(2);
					item.setFlag(0x08);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				}
				var text = "#b��ϲ��ɹ��һ���\r\n";
				for(var i = 0; i < װ��50��.length; i++){
					text += "#v" + װ��50��[i] + "#";
				}
				text += "��ȫ����+3 ˫��+3��\r\n";
				cm.sendOk(text);
				//cm.ȫ�����߹���("[�����ɳ�װ��]", "��� "+cm.getPlayer().getName()+" �ɹ��һ��ˡ�", item);
				cm.dispose();
				return;
			case 2:
				if(cm.�жϱ���װ����().isFull(5)){
					cm.sendOk("�뱣֤�㱳��װ���������� 6 ��ռ�");
					cm.dispose();
					return;
				}
				for(var i = 0; i < ����85��.length; i++){
					if(!cm.haveItem(����85��[i][0], ����85��[i][1])){
						cm.sendOk("���#v" + ����85��[i][0] + "#����������");
						cm.dispose();
						return;
					}
				}
				for(var i = 0; i < ����85��.length; i++){
					cm.gainItem(����85��[i][0], -����85��[i][1]);
				}
				var item;
				for(var i = 0; i < װ��85��.length; i++){
					//cm.gainItem(װ��50��[i]);
					item = cm.getNewEquip(װ��85��[i]);
					item.setStr(6);
					item.setInt(6);
					item.setLuk(6);
					item.setDex(6);
					item.setWatk(6);
					item.setMatk(6);
					item.setUpgradeSlots(0);
					item.setViciousHammer(2);
					item.setFlag(0x08);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				}
				var text = "#b��ϲ��ɹ��һ���\r\n";
				for(var i = 0; i < װ��85��.length; i++){
					text += "#v" + װ��85��[i] + "#";
				}
				text += "��ȫ����+6 ˫��+6��\r\n";
				cm.sendOk(text);
				//cm.ȫ�����߹���("[�����ɳ�װ��]", "��� "+cm.getPlayer().getName()+" �ɹ��һ��ˡ�", item);
				cm.dispose();
				return;
			case 3:
				if(cm.�жϱ���װ����().isFull(5)){
					cm.sendOk("�뱣֤�㱳��װ���������� 6 ��ռ�");
					cm.dispose();
					return;
				}
				for(var i = 0; i < ����120��.length; i++){
					if(!cm.haveItem(����120��[i][0], ����120��[i][1])){
						cm.sendOk("���#v" + ����120��[i][0] + "#����������");
						cm.dispose();
						return;
					}
				}
				for(var i = 0; i < ����120��.length; i++){
					cm.gainItem(����120��[i][0], -����120��[i][1]);
				}
				var item;
				for(var i = 0; i < װ��120��.length; i++){
					//cm.gainItem(װ��50��[i]);
					item = cm.getNewEquip(װ��120��[i]);
					item.setStr(9);
					item.setInt(9);
					item.setLuk(9);
					item.setDex(9);
					item.setWatk(9);
					item.setMatk(9);
					item.setUpgradeSlots(0);
					item.setViciousHammer(2);
					item.setFlag(0x08);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				}
				var text = "#b��ϲ��ɹ��һ���\r\n";
				for(var i = 0; i < װ��120��.length; i++){
					text += "#v" + װ��120��[i] + "#";
				}
				text += "��ȫ����+9 ˫��+9��\r\n";
				cm.sendOk(text);
				//cm.ȫ�����߹���("[�����ɳ�װ��]", "��� "+cm.getPlayer().getName()+" �ɹ��һ��ˡ�", item);
				cm.dispose();
				return;
		}
		
	} else {
		cm.dispose();
		return;
	}
}

