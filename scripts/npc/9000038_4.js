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
	
		text += "#rǿ���ɹ�֮�󣬻���װ������ʾװ���ȼ�\r\n";
		text += "#r#L1##v1142767#��Ϊѧͽȫ����+3��Ҫ\r\n#k#v1142358#x1#v4000019#x150#v4000016#x150#v4000000#x150+2000��ȯ+4000����ȯ+20W���#l\r\n\r\n"//3
		text += "#r#L2##v1142823#��Ϊѧʿȫ����+3��Ҫ\r\n#k#v1142767#x1#v4000019#x300#v4000016#x300#v4000000#x300+4000��ȯ+6000����ȯ+50W���#l\r\n\r\n"//3
		text += "#r#L3##v1142891#��Ϊ��ʦȫ����+3��Ҫ\r\n#k#v1142823#x1#v4000019#x450#v4000016#x450#v4000000#x450+6000��ȯ+8000����ȯ+70W���#l\r\n\r\n"//3
		text += "#r#L4##v1142839#��Ϊ��ʦȫ����+3��Ҫ\r\n#k#v1142891#x1#v4000019#x600#v4000016#x600#v4000000#x600+8000��ȯ+10000����ȯ+100W���#l\r\n\r\n"//3
		text += "#r#L5##v1142908#��Ϊ��ʿȫ����+5��Ҫ\r\n#k#v1142839#x1#v4000176#x30#v4000040#x30#v4001111#x15+10000��ȯ+20000����ȯ+2500W���#l\r\n\r\n"//3
		text += "#r#L6##v1142714#��Ϊ��ʦȫ����+6��Ҫ\r\n#k#v1142908#x1#v4001085#x1#v4001084#x1#v3994072#x50#v3994060#x50+15000��ȯ+20000����ȯ+5000W���#l\r\n\r\n"//3
		text += "#r#L7##v1142789#��Ϊ����ȫ����+7��Ҫ\r\n#k#v1142714#x1#v4001083#x1#v4000175#x20#v4000235#x30#v4000243#x30+20000��ȯ+20000����ȯ+1E���#l\r\n\r\n"//3

		text += "\r\n"+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n\r\n"
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("�㱳����һ��û��װ������");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1142358) {
				cm.sendOk("��#v1142358#���ڵ�һ��!");		
				cm.dispose();
			} else if (cm.haveItem(4000019, 150) && cm.haveItem(4000016, 150) && cm.haveItem(4000000, 150) && cm.getPlayer().getNX() > 2000  && cm.getPlayer().getCSPoints(2) > 4000  && cm.getPlayer().getMeso() > 200000 &&cm.getInventory(1).getItem(1).getOwner() == "") {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1142767);
				item.setStr(item0.getStr() + 3);
				item.setInt(item0.getInt() + 3);
				item.setLuk(item0.getLuk() + 3);
				item.setDex(item0.getDex() + 3);
				item.setWatk(item0.getWatk());
				item.setMatk(item0.getMatk());
				item.setWdef(item0.getWdef());
				item.setMdef(item0.getMdef());
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				item.setOwner(item0.getOwner());
				//item.setOwner("�ڶ��׶�");
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainItem(4000019, -150);
				cm.gainItem(4000016, -150);
				cm.gainItem(4000000, -150);
				cm.gainNX(-2000);
				cm.gainDY(-4000);
				cm.gainMeso(-200000);
				cm.sendOk("ǿ���ɹ�����ǰװ���ȼ�Ϊ ��#rѧͽ#k����\r\n #r#eȫ��������[3]��");
				cm.ȫ�����߹���("[ѫ������]", "��� "+cm.getPlayer().getName()+" �ɹ�������ѧͽѫ�¡�", item);
				cm.dispose();
					
			} else {
				cm.sendOk("��ǰװ���޷�����ǿ�������߲��ϲ���");
				cm.dispose();
			}
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("�㱳����һ��û��װ������");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1142767) {
				cm.sendOk("��#v1142767#���ڵ�һ��!");		
				cm.dispose();
			} else if (cm.haveItem(4000019, 300) && cm.haveItem(4000016, 300) && cm.haveItem(4000000, 300) && cm.getPlayer().getNX() > 4000  && cm.getPlayer().getCSPoints(2) > 6000  && cm.getPlayer().getMeso() > 500000 &&cm.getInventory(1).getItem(1).getOwner() == "") {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1142823);
				item.setStr(item0.getStr() + 3);
				item.setInt(item0.getInt() + 3);
				item.setLuk(item0.getLuk() + 3);
				item.setDex(item0.getDex() + 3);
				item.setWatk(item0.getWatk());
				item.setMatk(item0.getMatk());
				item.setWdef(item0.getWdef());
				item.setMdef(item0.getMdef());
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				item.setOwner(item0.getOwner());
				//item.setOwner("�ڶ��׶�");
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainItem(4000019, -300);
				cm.gainItem(4000016, -300);
				cm.gainItem(4000000, -300);
				cm.gainNX(-4000);
				cm.gainDY(-6000);
				cm.gainMeso(-500000);
				cm.sendOk("ǿ���ɹ�����ǰװ���ȼ�Ϊ ��#rѧʿ#k����\r\n #r#eȫ��������[3]��");
				cm.ȫ�����߹���("[ѫ������]", "��� "+cm.getPlayer().getName()+" �ɹ�������ѧʿѫ�¡�", item);
				cm.dispose();
					
			} else {
				cm.sendOk("��ǰװ���޷�����ǿ�������߲��ϲ���");
				cm.dispose();
			}
		}else if (selection == 3) {
			//�������дѡ��3Ҫ������
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("�㱳����һ��û��װ������");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1142823) {
				cm.sendOk("��#v1142823#���ڵ�һ��!");		
				cm.dispose();
			} else if (cm.haveItem(4000019, 450) && cm.haveItem(4000016, 450) && cm.haveItem(4000000, 450) && cm.getPlayer().getNX() > 6000  && cm.getPlayer().getCSPoints(2) > 8000  && cm.getPlayer().getMeso() > 700000 &&cm.getInventory(1).getItem(1).getOwner() == "") {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1142891);
				item.setStr(item0.getStr() + 3);
				item.setInt(item0.getInt() + 3);
				item.setLuk(item0.getLuk() + 3);
				item.setDex(item0.getDex() + 3);
				item.setWatk(item0.getWatk());
				item.setMatk(item0.getMatk());
				item.setWdef(item0.getWdef());
				item.setMdef(item0.getMdef());
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				item.setOwner(item0.getOwner());
				//item.setOwner("�ڶ��׶�");
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainItem(4000019, -450);
				cm.gainItem(4000016, -450);
				cm.gainItem(4000000, -450);
				cm.gainNX(-6000);
				cm.gainDY(-8000);
				cm.gainMeso(-700000);
				cm.sendOk("ǿ���ɹ�����ǰװ���ȼ�Ϊ ��#r��ʦ#k����\r\n #r#eȫ��������[3]��");
				cm.ȫ�����߹���("[ѫ������]", "��� "+cm.getPlayer().getName()+" �ɹ������˴�ʦѫ�¡�", item);
				cm.dispose();
					
			} else {
				cm.sendOk("��ǰװ���޷�����ǿ�������߲��ϲ���");
				cm.dispose();
			}
		} else if (selection == 4) {
			//�������дѡ��4Ҫ������
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("�㱳����һ��û��װ������");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1142891) {
				cm.sendOk("��#v1142891#���ڵ�һ��!");		
				cm.dispose();
			} else if (cm.haveItem(4000019, 600) && cm.haveItem(4000016, 600) && cm.haveItem(4000000, 600) && cm.getPlayer().getNX() > 8000  && cm.getPlayer().getCSPoints(2) > 10000  && cm.getPlayer().getMeso() > 1000000 &&cm.getInventory(1).getItem(1).getOwner() == "") {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1142839);
				item.setStr(item0.getStr() + 3);
				item.setInt(item0.getInt() + 3);
				item.setLuk(item0.getLuk() + 3);
				item.setDex(item0.getDex() + 3);
				item.setWatk(item0.getWatk());
				item.setMatk(item0.getMatk());
				item.setWdef(item0.getWdef());
				item.setMdef(item0.getMdef());
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				item.setOwner(item0.getOwner());
				//item.setOwner("�ڶ��׶�");
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainItem(4000019, -600);
				cm.gainItem(4000016, -600);
				cm.gainItem(4000000, -600);
				cm.gainNX(-8000);
				cm.gainDY(-10000);
				cm.gainMeso(-1000000);
				cm.sendOk("ǿ���ɹ�����ǰװ���ȼ�Ϊ ��#r��ʦ#k����\r\n #r#eȫ��������[3]��");
				cm.ȫ�����߹���("[ѫ������]", "��� "+cm.getPlayer().getName()+" �ɹ���������ʦѫ�¡�", item);
				cm.dispose();
					
			} else {
				cm.sendOk("��ǰװ���޷�����ǿ�������߲��ϲ���");
				cm.dispose();
			}
		} else if (selection == 5) {
			//�������дѡ��5Ҫ������
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("�㱳����һ��û��װ������");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1142839) {
				cm.sendOk("��#v1142839#���ڵ�һ��!");		
				cm.dispose();
			} else if (cm.haveItem(4000176, 30) && cm.haveItem(4000040, 30) && cm.haveItem(4001111, 15) && cm.getPlayer().getNX() > 10000  && cm.getPlayer().getCSPoints(2) > 20000  && cm.getPlayer().getMeso() > 25000000 &&cm.getInventory(1).getItem(1).getOwner() == "") {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1142908);
				item.setStr(item0.getStr() + 5);
				item.setInt(item0.getInt() + 5);
				item.setLuk(item0.getLuk() + 5);
				item.setDex(item0.getDex() + 5);
				item.setWatk(item0.getWatk());
				item.setMatk(item0.getMatk());
				item.setWdef(item0.getWdef());
				item.setMdef(item0.getMdef());
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				item.setOwner(item0.getOwner());
				//item.setOwner("�ڶ��׶�");
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainItem(4000176, -30);
				cm.gainItem(4000040, -30);
				cm.gainItem(4001111, -15);
				cm.gainNX(-10000);
				cm.gainDY(-20000);
				cm.gainMeso(-25000000);
				cm.sendOk("ǿ���ɹ�����ǰװ���ȼ�Ϊ ��#r��ʿ#k����\r\n #r#eȫ��������[5]��");
				cm.ȫ�����߹���("[ѫ������]", "��� "+cm.getPlayer().getName()+" �ɹ���������ʿѫ�¡�", item);
				cm.dispose();
					
			} else {
				cm.sendOk("��ǰװ���޷�����ǿ�������߲��ϲ���");
				cm.dispose();
			}
		} else if (selection == 6) {
			//�������дѡ��6Ҫ������
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("�㱳����һ��û��װ������");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1142908) {
				cm.sendOk("��#v1142908#���ڵ�һ��!");		
				cm.dispose();
			} else if (cm.haveItem(4001085, 1) && cm.haveItem(4001084, 1) && cm.haveItem(3994072, 50) && cm.haveItem(3994060, 50) && cm.getPlayer().getNX() > 15000  && cm.getPlayer().getCSPoints(2) > 20000  && cm.getPlayer().getMeso() > 50000000 &&cm.getInventory(1).getItem(1).getOwner() == "") {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1142714);
				item.setStr(item0.getStr() + 6);
				item.setInt(item0.getInt() + 6);
				item.setLuk(item0.getLuk() + 6);
				item.setDex(item0.getDex() + 6);
				item.setWatk(item0.getWatk());
				item.setMatk(item0.getMatk());
				item.setWdef(item0.getWdef());
				item.setMdef(item0.getMdef());
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				item.setOwner(item0.getOwner());
				//item.setOwner("�ڶ��׶�");
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainItem(4001085, -1);
				cm.gainItem(4001084, -1);
				cm.gainItem(3994072, -50);
				cm.gainItem(3994060, -50);
				cm.gainNX(-15000);
				cm.gainDY(-20000);
				cm.gainMeso(-50000000);
				cm.sendOk("ǿ���ɹ�����ǰװ���ȼ�Ϊ ��#r��ʦ#k����\r\n #r#eȫ��������[6]��");
				cm.ȫ�����߹���("[ѫ������]", "��� "+cm.getPlayer().getName()+" �ɹ���������ʦѫ�¡�", item);
				cm.dispose();
					
			} else {
				cm.sendOk("��ǰװ���޷�����ǿ�������߲��ϲ���");
				cm.dispose();
			}
		} else if (selection == 7) {
			//�������дѡ��7Ҫ������
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("�㱳����һ��û��װ������");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1142714) {
				cm.sendOk("��#v1142714#���ڵ�һ��!");		
				cm.dispose();
			} else if (cm.haveItem(4001083, 1) && cm.haveItem(4000175, 20) && cm.haveItem(4000235, 30) && cm.haveItem(4000243, 30) && cm.getPlayer().getNX() > 20000  && cm.getPlayer().getCSPoints(2) > 20000  && cm.getPlayer().getMeso() > 100000000 &&cm.getInventory(1).getItem(1).getOwner() == "") {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1142789);
				item.setStr(item0.getStr() + 7);
				item.setInt(item0.getInt() + 7);
				item.setLuk(item0.getLuk() + 7);
				item.setDex(item0.getDex() + 7);
				item.setWatk(item0.getWatk());
				item.setMatk(item0.getMatk());
				item.setWdef(item0.getWdef());
				item.setMdef(item0.getMdef());
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				item.setOwner(item0.getOwner());
				//item.setOwner("�ڶ��׶�");
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainItem(4001083, -1);
				cm.gainItem(4000175, -20);
				cm.gainItem(4000235, -30);
				cm.gainItem(4000243, -30);
				cm.gainNX(-20000);
				cm.gainDY(-20000);
				cm.gainMeso(-100000000);
				cm.sendOk("ǿ���ɹ�����ǰװ���ȼ�Ϊ ��#r����#k����\r\n #r#eȫ��������[7]��");
				cm.ȫ�����߹���("[ѫ������]", "��� "+cm.getPlayer().getName()+" �ɹ�����������ѫ�¡�", item);
				cm.dispose();
					
			} else {
				cm.sendOk("��ǰװ���޷�����ǿ�������߲��ϲ���");
				cm.dispose();
			}
		}  
		cm.dispose();
		
	} else {
		cm.dispose();
		return;
	}
}

