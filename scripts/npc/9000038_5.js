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


var finishedCards = 0;
var stage = -1;
var ���� = Array("��ȸ", "����", "����", "�׻�", "����", "����", "����", "����", "����");
var ���Ľ�� = 10000000;
var Ҫ��Ƭ�ȼ� = 1;

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
		finishedCards = cm.getPlayer().getMonsterBook().getFinishQuantity(0, Ҫ��Ƭ�ȼ�);
		// cm.getPlayer().dropMessage("totalCards:" +  cm.getPlayer().getMonsterBook().getTotalCards());//����
		var text = "";
		for (i = 0; i < 10; i++) {
			text += "";
		}
		text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
	   text += " \t\t\t  #e#r #v4000005#  ����С��  #v4000005##k#n              \r\n"
		text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		text += "#d\t\t��ɫ���ƣ�#b" + cm.getName() + "#k\t\t��#r" + Ҫ��Ƭ�ȼ� + "#k����Ƭ����:#b" + finishedCards + "#k\r\n";
	
		text += "#rǿ���ɹ�֮�󣬻���װ������ʾװ���ȼ���ÿ����ȡ����ǿ������Ҫ#b����1000����#r��\r\n";
		text += "#b#L0##v2388006#��Ƭ�̵�#l\r\n";//3
		
		text += "#r#L1##d��ȡ#r" + ����[0] + "#b#b#v1115400##z1115400##d��Ҫ��ɫ���￨Ƭȫ��" + Ҫ��Ƭ�ȼ� + "���ռ�";//3
		if(cm.getPlayer().getMonsterBook().isFinished(1, Ҫ��Ƭ�ȼ�)){
			text += "��#g �Ѵ��Ŀ�꣬�ɶһ���#k";
		}else{
			var cards = cm.getPlayer().getMonsterBook().getFinishQuantity(1, Ҫ��Ƭ�ȼ�);
			text += "���ռ������#r" + cards + "#k/#b20#k";
		}
		text += "#l\r\n\r\n";
		text += "#r#L2##r" + ����[0] + "#d#v1115400#��Ϊ#r" + ����[1] + "#d��#bȫ����+2��������+2��ħ����+2#d����Ҫ��ɫ���￨Ƭȫ��" + Ҫ��Ƭ�ȼ� + "���ռ�";//3
		if(cm.getPlayer().getMonsterBook().isFinished(2, Ҫ��Ƭ�ȼ�)){
			text += "��#g �Ѵ��Ŀ�꣬�ɶһ���#k";
		}else{
			var cards = cm.getPlayer().getMonsterBook().getFinishQuantity(2, Ҫ��Ƭ�ȼ�);
			text += "���ռ������#r" + cards + "#k/#b74#k";
		}
		text += "#l\r\n\r\n";
		text += "#r#L3##r" + ����[1] + "#d#v1115400#��Ϊ#r" + ����[2] + "#d��#bȫ����+2��������+2��ħ����+2#d����Ҫǳ�̹��￨Ƭȫ��" + Ҫ��Ƭ�ȼ� + "���ռ�";//3
		if(cm.getPlayer().getMonsterBook().isFinished(3, Ҫ��Ƭ�ȼ�)){
			text += "��#g �Ѵ��Ŀ�꣬�ɶһ���#k";
		}else{
			var cards = cm.getPlayer().getMonsterBook().getFinishQuantity(3, Ҫ��Ƭ�ȼ�);
			text += "���ռ������#r" + cards + "#k/#b86#k";
		}
		text += "#l\r\n\r\n";
		text += "#r#L4##r" + ����[2] + "#d#v1115400#��Ϊ#r" + ����[3] + "#d��#bȫ����+2��������+2��ħ����+2#d����Ҫ���̹��￨Ƭȫ��" + Ҫ��Ƭ�ȼ� + "���ռ�";//3
		if(cm.getPlayer().getMonsterBook().isFinished(4, Ҫ��Ƭ�ȼ�)){
			text += "��#g �Ѵ��Ŀ�꣬�ɶһ���#k";
		}else{
			var cards = cm.getPlayer().getMonsterBook().getFinishQuantity(4, Ҫ��Ƭ�ȼ�);
			text += "���ռ������#r" + cards + "#k/#b58#k";
		}
		text += "#l\r\n\r\n";
		text += "#r#L5##r" + ����[3] + "#d#v1115400#��Ϊ#r" + ����[4] + "#d��#bȫ����+2��������+2��ħ����+2#d����Ҫ�������￨Ƭȫ��" + Ҫ��Ƭ�ȼ� + "���ռ�";//3
		if(cm.getPlayer().getMonsterBook().isFinished(5, Ҫ��Ƭ�ȼ�)){
			text += "��#g �Ѵ��Ŀ�꣬�ɶһ���#k";
		}else{
			var cards = cm.getPlayer().getMonsterBook().getFinishQuantity(5, Ҫ��Ƭ�ȼ�);
			text += "���ռ������#r" + cards + "#k/#b44#k";
		}
		text += "#l\r\n\r\n";
		text += "#r#L6##r" + ����[4] + "#d#v1115400#��Ϊ#r" + ����[5] + "#d��#bȫ����+2��������+2��ħ����+2#d����Ҫ�������￨Ƭȫ��" + Ҫ��Ƭ�ȼ� + "���ռ�";//3
		if(cm.getPlayer().getMonsterBook().isFinished(6, Ҫ��Ƭ�ȼ�)){
			text += "��#g �Ѵ��Ŀ�꣬�ɶһ���#k";
		}else{
			var cards = cm.getPlayer().getMonsterBook().getFinishQuantity(6, Ҫ��Ƭ�ȼ�);
			text += "���ռ������#r" + cards + "#k/#b27#k";
		}
		text += "#l\r\n\r\n";
		text += "#r#L7##r" + ����[5] + "#d#v1115400#��Ϊ#r" + ����[6] + "#d��#bȫ����+2��������+2��ħ����+2#d����Ҫ���ٹ��￨Ƭȫ��" + Ҫ��Ƭ�ȼ� + "���ռ�";//3
		if(cm.getPlayer().getMonsterBook().isFinished(7, Ҫ��Ƭ�ȼ�)){
			text += "��#g �Ѵ��Ŀ�꣬�ɶһ���#k";
		}else{
			var cards = cm.getPlayer().getMonsterBook().getFinishQuantity(7, Ҫ��Ƭ�ȼ�);
			text += "���ռ������#r" + cards + "#k/#b29#k";
		}
		text += "#l\r\n\r\n";
		text += "#r#L8##r" + ����[6] + "#d#v1115400#��Ϊ#r" + ����[7] + "#d��#bȫ����+2��������+2��ħ����+2#d����Ҫ���ڹ��￨Ƭȫ��" + Ҫ��Ƭ�ȼ� + "���ռ�";//3
		if(cm.getPlayer().getMonsterBook().isFinished(8, Ҫ��Ƭ�ȼ�)){
			text += "��#g �Ѵ��Ŀ�꣬�ɶһ���#k";
		}else{
			var cards = cm.getPlayer().getMonsterBook().getFinishQuantity(8, Ҫ��Ƭ�ȼ�);
			text += "���ռ������#r" + cards + "#k/#b20#k";
		}
		text += "#l\r\n\r\n";
		text += "#r#L9##r" + ����[7] + "#d#v1115400#��Ϊ#r" + ����[8] + "#d��#bȫ����+2��������+2��ħ����+2#d����Ҫ������￨Ƭȫ��" + Ҫ��Ƭ�ȼ� + "���ռ�";//3
		if(cm.getPlayer().getMonsterBook().isFinished(9, Ҫ��Ƭ�ȼ�)){
			text += "��#g �Ѵ��Ŀ�꣬�ɶһ���#k";
		}else{
			var cards = cm.getPlayer().getMonsterBook().getFinishQuantity(9, Ҫ��Ƭ�ȼ�);
			text += "���ռ������#r" + cards + "#k/#b53#k";
		}
		text += "#l\r\n\r\n";
		text += "\r\n"+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n\r\n"
		if(cm.getPlayer().getGMLevel() >= 100){
			text += "#L10##r���ÿ�Ƭ�ȼ���GMר����#l\r\n\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 0){
			cm.safeDispose();
			cm.openNpc(9000038, 7);
			return;
		}else if(selection == 1){
			//�������дѡ��1Ҫ������
			if(cm.�жϱ���װ����().isFull(0)){
				cm.sendOk("�뱣֤��ı���װ���������� 1 ��ռ䣡");
				cm.dispose();
				return;
			}else if(cm.getPlayer().getOneTimeLoga("���￨Ƭ��ָ") > 0){
				cm.sendOk("#r��Ǹ������˺��Ѿ����������￨Ƭ��ָ�ˣ�һ���������Ͳ�������ȡ�ˣ�����ָ��ʧ����ϵ����Ա��\r\n");
				cm.dispose();
				return;
			}else if(cm.haveItem(1115400, 1, true, true)){
				cm.sendOk("#r��Ǹ���������Ѿ���#v1115400#�ˣ�ֻ�ܳ���һ����\r\n");
				cm.dispose();
				return;
			}else if(cm.�жϽ��() < ���Ľ��){
				cm.sendOk("#r��Ǹ�������ϵĽ�Ҳ���" + ���Ľ�� + "��\r\n");
				cm.dispose();
				return;
			}
			if(cm.getPlayer().getMonsterBook().isFinished(1, Ҫ��Ƭ�ȼ�)){
				//cm.gainItem(1115400, 1);
				cm.gainMeso(-���Ľ��);
				var item = cm.getNewEquip(1115400);
				item.setOwner(����[selection - 1]);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.sendOk("��ϲ��ɹ�������#b#v1115400##z1115400#\r\n");
				cm.ȫ�����߹���("[װ������]", "��� "+cm.getPlayer().getName()+" ����˹��￨Ƭ�ռ����ɹ�������" + ����[selection - 1] + "���￨Ƭ��ָ��", item);
				cm.dispose();
				return;
			}else{
				cm.sendOk("#r��Ŀ�Ƭ��������\r\n");
				cm.dispose();
				return;
			}
			
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("�㱳����һ��û��װ������");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1115400) {
				cm.sendOk("��#v1115400#���ڵ�һ��!");		
				cm.dispose();
				return;
			} else if(!cm.getPlayer().getMonsterBook().isFinished(selection, Ҫ��Ƭ�ȼ�)){
				cm.sendOk("#r��Ŀ�Ƭ��������\r\n");
				cm.dispose();
				return;
			} else if(cm.getPlayer().getOneTimeLoga("���￨Ƭ��ָ" + selection) > 0){
				cm.sendOk("#r���˺ŵ��µĽ�ɫ�Ѿ�������һ������ȼ��ˣ��޷��ٴ�������\r\n");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getMeso() > ���Ľ�� && cm.getInventory(1).getItem(1).getOwner() == ����[selection - 2]) {
				cm.getPlayer().setOneTimeLoga("���￨Ƭ��ָ");
				cm.getPlayer().setOneTimeLoga("���￨Ƭ��ָ" + selection);
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1115400);
				item.setStr(item0.getStr() + 2);
				item.setInt(item0.getInt() + 2);
				item.setLuk(item0.getLuk() + 2);
				item.setDex(item0.getDex() + 2);
				item.setWatk(item0.getWatk() + 2);
				item.setMatk(item0.getMatk() + 2);
				item.setWdef(item0.getWdef() + 2);
				item.setMdef(item0.getMdef() + 2);
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				//item.setOwner(item0.getOwner());
				item.setOwner(����[selection - 1]);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainMeso(-���Ľ��);
				cm.sendOk("ǿ���ɹ�����ǰװ���ȼ�Ϊ ��#r" + ����[selection - 1] + "#k����\r\n #r#eȫ����#b+2#r��������#b+2#r��ħ����#b+2#r\r\n");
				cm.ȫ�����߹���("[��Ƭ��ָǿ��]", "��� "+cm.getPlayer().getName()+" �����￨Ƭ��ָǿ������" + ����[selection - 1] + "��", item);
				cm.dispose();
					
			} else {
				cm.sendOk("��ǰװ��ǰ׺���ԡ����߽�Ҳ���");
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
			if(dmID!=1115400) {
				cm.sendOk("��#v1115400#���ڵ�һ��!");		
				cm.dispose();
				return;
			} else if(!cm.getPlayer().getMonsterBook().isFinished(selection, Ҫ��Ƭ�ȼ�)){
				cm.sendOk("#r��Ŀ�Ƭ��������\r\n");
				cm.dispose();
				return;
			} else if(cm.getPlayer().getOneTimeLoga("���￨Ƭ��ָ" + selection) > 0){
				cm.sendOk("#r���˺ŵ��µĽ�ɫ�Ѿ�������һ������ȼ��ˣ��޷��ٴ�������\r\n");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getMeso() > ���Ľ�� && cm.getInventory(1).getItem(1).getOwner() == ����[selection - 2]) {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1115400);
				cm.getPlayer().setOneTimeLoga("���￨Ƭ��ָ" + selection);
				item.setStr(item0.getStr() + 2);
				item.setInt(item0.getInt() + 2);
				item.setLuk(item0.getLuk() + 2);
				item.setDex(item0.getDex() + 2);
				item.setWatk(item0.getWatk() + 2);
				item.setMatk(item0.getMatk() + 2);
				item.setWdef(item0.getWdef() + 2);
				item.setMdef(item0.getMdef() + 2);
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				//item.setOwner(item0.getOwner());
				item.setOwner(����[selection - 1]);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainMeso(-���Ľ��);
				cm.sendOk("ǿ���ɹ�����ǰװ���ȼ�Ϊ ��#r" + ����[selection - 1] + "#k����\r\n #r#eȫ����#b+2#r��������#b+2#r��ħ����#b+2#r\r\n");
				cm.ȫ�����߹���("[��Ƭ��ָǿ��]", "��� "+cm.getPlayer().getName()+" �����￨Ƭ��ָǿ������" + ����[selection - 1] + "��", item);
				cm.dispose();
					
			} else {
				cm.sendOk("��ǰװ��ǰ׺���ԡ����߽�Ҳ���");
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
			if(dmID!=1115400) {
				cm.sendOk("��#v1115400#���ڵ�һ��!");		
				cm.dispose();
				return;
			} else if(!cm.getPlayer().getMonsterBook().isFinished(selection, Ҫ��Ƭ�ȼ�)){
				cm.sendOk("#r��Ŀ�Ƭ��������\r\n");
				cm.dispose();
				return;
			} else if(cm.getPlayer().getOneTimeLoga("���￨Ƭ��ָ" + selection) > 0){
				cm.sendOk("#r���˺ŵ��µĽ�ɫ�Ѿ�������һ������ȼ��ˣ��޷��ٴ�������\r\n");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getMeso() > ���Ľ�� && cm.getInventory(1).getItem(1).getOwner() == ����[selection - 2]) {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1115400);
				cm.getPlayer().setOneTimeLoga("���￨Ƭ��ָ" + selection);
				item.setStr(item0.getStr() + 2);
				item.setInt(item0.getInt() + 2);
				item.setLuk(item0.getLuk() + 2);
				item.setDex(item0.getDex() + 2);
				item.setWatk(item0.getWatk() + 2);
				item.setMatk(item0.getMatk() + 2);
				item.setWdef(item0.getWdef() + 2);
				item.setMdef(item0.getMdef() + 2);
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				//item.setOwner(item0.getOwner());
				item.setOwner(����[selection - 1]);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainMeso(-���Ľ��);
				cm.sendOk("ǿ���ɹ�����ǰװ���ȼ�Ϊ ��#r" + ����[selection - 1] + "#k����\r\n #r#eȫ����#b+2#r��������#b+2#r��ħ����#b+2#r\r\n");
				cm.ȫ�����߹���("[��Ƭ��ָǿ��]", "��� "+cm.getPlayer().getName()+" �����￨Ƭ��ָǿ������" + ����[selection - 1] + "��", item);
				cm.dispose();
					
			} else {
				cm.sendOk("��ǰװ��ǰ׺���ԡ����߽�Ҳ���");
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
			if(dmID!=1115400) {
				cm.sendOk("��#v1115400#���ڵ�һ��!");		
				cm.dispose();
				return;
			} else if(!cm.getPlayer().getMonsterBook().isFinished(selection, Ҫ��Ƭ�ȼ�)){
				cm.sendOk("#r��Ŀ�Ƭ��������\r\n");
				cm.dispose();
				return;
			} else if(cm.getPlayer().getOneTimeLoga("���￨Ƭ��ָ" + selection) > 0){
				cm.sendOk("#r���˺ŵ��µĽ�ɫ�Ѿ�������һ������ȼ��ˣ��޷��ٴ�������\r\n");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getMeso() > ���Ľ�� && cm.getInventory(1).getItem(1).getOwner() == ����[selection - 2]) {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1115400);
				cm.getPlayer().setOneTimeLoga("���￨Ƭ��ָ" + selection);
				item.setStr(item0.getStr() + 2);
				item.setInt(item0.getInt() + 2);
				item.setLuk(item0.getLuk() + 2);
				item.setDex(item0.getDex() + 2);
				item.setWatk(item0.getWatk() + 2);
				item.setMatk(item0.getMatk() + 2);
				item.setWdef(item0.getWdef() + 2);
				item.setMdef(item0.getMdef() + 2);
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				//item.setOwner(item0.getOwner());
				item.setOwner(����[selection - 1]);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainMeso(-���Ľ��);
				cm.sendOk("ǿ���ɹ�����ǰװ���ȼ�Ϊ ��#r" + ����[selection - 1] + "#k����\r\n #r#eȫ����#b+2#r��������#b+2#r��ħ����#b+2#r\r\n");
				cm.ȫ�����߹���("[��Ƭ��ָǿ��]", "��� "+cm.getPlayer().getName()+" �����￨Ƭ��ָǿ������" + ����[selection - 1] + "��", item);
				cm.dispose();
					
			} else {
				cm.sendOk("��ǰװ��ǰ׺���ԡ����߽�Ҳ���");
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
			if(dmID!=1115400) {
				cm.sendOk("��#v1115400#���ڵ�һ��!");		
				cm.dispose();
				return;
			} else if(!cm.getPlayer().getMonsterBook().isFinished(selection, Ҫ��Ƭ�ȼ�)){
				cm.sendOk("#r��Ŀ�Ƭ��������\r\n");
				cm.dispose();
				return;
			} else if(cm.getPlayer().getOneTimeLoga("���￨Ƭ��ָ" + selection) > 0){
				cm.sendOk("#r���˺ŵ��µĽ�ɫ�Ѿ�������һ������ȼ��ˣ��޷��ٴ�������\r\n");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getMeso() > ���Ľ�� && cm.getInventory(1).getItem(1).getOwner() == ����[selection - 2]) {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1115400);
				cm.getPlayer().setOneTimeLoga("���￨Ƭ��ָ" + selection);
				item.setStr(item0.getStr() + 2);
				item.setInt(item0.getInt() + 2);
				item.setLuk(item0.getLuk() + 2);
				item.setDex(item0.getDex() + 2);
				item.setWatk(item0.getWatk() + 2);
				item.setMatk(item0.getMatk() + 2);
				item.setWdef(item0.getWdef() + 2);
				item.setMdef(item0.getMdef() + 2);
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				//item.setOwner(item0.getOwner());
				item.setOwner(����[selection - 1]);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainMeso(-���Ľ��);
				cm.sendOk("ǿ���ɹ�����ǰװ���ȼ�Ϊ ��#r" + ����[selection - 1] + "#k����\r\n #r#eȫ����#b+2#r��������#b+2#r��ħ����#b+2#r\r\n");
				cm.ȫ�����߹���("[��Ƭ��ָǿ��]", "��� "+cm.getPlayer().getName()+" �����￨Ƭ��ָǿ������" + ����[selection - 1] + "��", item);
				cm.dispose();
					
			} else {
				cm.sendOk("��ǰװ��ǰ׺���ԡ����߽�Ҳ���");
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
			if(dmID!=1115400) {
				cm.sendOk("��#v1115400#���ڵ�һ��!");		
				cm.dispose();
				return;
			} else if(!cm.getPlayer().getMonsterBook().isFinished(selection, Ҫ��Ƭ�ȼ�)){
				cm.sendOk("#r��Ŀ�Ƭ��������\r\n");
				cm.dispose();
				return;
			} else if(cm.getPlayer().getOneTimeLoga("���￨Ƭ��ָ" + selection) > 0){
				cm.sendOk("#r���˺ŵ��µĽ�ɫ�Ѿ�������һ������ȼ��ˣ��޷��ٴ�������\r\n");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getMeso() > ���Ľ�� && cm.getInventory(1).getItem(1).getOwner() == ����[selection - 2]) {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1115400);
				cm.getPlayer().setOneTimeLoga("���￨Ƭ��ָ" + selection);
				item.setStr(item0.getStr() + 2);
				item.setInt(item0.getInt() + 2);
				item.setLuk(item0.getLuk() + 2);
				item.setDex(item0.getDex() + 2);
				item.setWatk(item0.getWatk() + 2);
				item.setMatk(item0.getMatk() + 2);
				item.setWdef(item0.getWdef() + 2);
				item.setMdef(item0.getMdef() + 2);
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				//item.setOwner(item0.getOwner());
				item.setOwner(����[selection - 1]);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainMeso(-���Ľ��);
				cm.sendOk("ǿ���ɹ�����ǰװ���ȼ�Ϊ ��#r" + ����[selection - 1] + "#k����\r\n #r#eȫ����#b+2#r��������#b+2#r��ħ����#b+2#r\r\n");
				cm.ȫ�����߹���("[��Ƭ��ָǿ��]", "��� "+cm.getPlayer().getName()+" �����￨Ƭ��ָǿ������" + ����[selection - 1] + "��", item);
				cm.dispose();
					
			} else {
				cm.sendOk("��ǰװ��ǰ׺���ԡ����߽�Ҳ���");
				cm.dispose();
			}
		} else if (selection == 8) {
			//�������дѡ��7Ҫ������
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("�㱳����һ��û��װ������");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1115400) {
				cm.sendOk("��#v1115400#���ڵ�һ��!");		
				cm.dispose();
				return;
			} else if(!cm.getPlayer().getMonsterBook().isFinished(selection, Ҫ��Ƭ�ȼ�)){
				cm.sendOk("#r��Ŀ�Ƭ��������\r\n");
				cm.dispose();
				return;
			} else if(cm.getPlayer().getOneTimeLoga("���￨Ƭ��ָ" + selection) > 0){
				cm.sendOk("#r���˺ŵ��µĽ�ɫ�Ѿ�������һ������ȼ��ˣ��޷��ٴ�������\r\n");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getMeso() > ���Ľ�� && cm.getInventory(1).getItem(1).getOwner() == ����[selection - 2]) {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1115400);
				cm.getPlayer().setOneTimeLoga("���￨Ƭ��ָ" + selection);
				item.setStr(item0.getStr() + 2);
				item.setInt(item0.getInt() + 2);
				item.setLuk(item0.getLuk() + 2);
				item.setDex(item0.getDex() + 2);
				item.setWatk(item0.getWatk() + 2);
				item.setMatk(item0.getMatk() + 2);
				item.setWdef(item0.getWdef() + 2);
				item.setMdef(item0.getMdef() + 2);
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				//item.setOwner(item0.getOwner());
				item.setOwner(����[selection - 1]);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainMeso(-���Ľ��);
				cm.sendOk("ǿ���ɹ�����ǰװ���ȼ�Ϊ ��#r" + ����[selection - 1] + "#k����\r\n #r#eȫ����#b+2#r��������#b+2#r��ħ����#b+2#r\r\n");
				cm.ȫ�����߹���("[��Ƭ��ָǿ��]", "��� "+cm.getPlayer().getName()+" �����￨Ƭ��ָǿ������" + ����[selection - 1] + "��", item);
				cm.dispose();
					
			} else {
				cm.sendOk("��ǰװ��ǰ׺���ԡ����߽�Ҳ���");
				cm.dispose();
			}
		} else if (selection == 9) {
			//�������дѡ��7Ҫ������
			if(cm.getInventory(1).getItem(1) == null){
				cm.sendOk("�㱳����һ��û��װ������");
				cm.dispose();
				return;
			}
			var dmID = cm.getInventory(1).getItem(1).getItemId();
			if(dmID!=1115400) {
				cm.sendOk("��#v1115400#���ڵ�һ��!");		
				cm.dispose();
				return;
			} else if(!cm.getPlayer().getMonsterBook().isFinished(selection, Ҫ��Ƭ�ȼ�)){
				cm.sendOk("#r��Ŀ�Ƭ��������\r\n");
				cm.dispose();
				return;
			} else if(cm.getPlayer().getOneTimeLoga("���￨Ƭ��ָ" + selection) > 0){
				cm.sendOk("#r���˺ŵ��µĽ�ɫ�Ѿ�������һ������ȼ��ˣ��޷��ٴ�������\r\n");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getMeso() > ���Ľ�� && cm.getInventory(1).getItem(1).getOwner() == ����[selection - 2]) {
				var item0 = cm.getInventory(1).getItem(1);
				var item = cm.getNewEquip(1115400);
				cm.getPlayer().setOneTimeLoga("���￨Ƭ��ָ" + selection);
				item.setStr(item0.getStr() + 2);
				item.setInt(item0.getInt() + 2);
				item.setLuk(item0.getLuk() + 2);
				item.setDex(item0.getDex() + 2);
				item.setWatk(item0.getWatk() + 2);
				item.setMatk(item0.getMatk() + 2);
				item.setWdef(item0.getWdef() + 2);
				item.setMdef(item0.getMdef() + 2);
				item.setAcc(item0.getAcc());
				item.setAvoid(item0.getAvoid());
				item.setSpeed(item0.getSpeed());
				item.setJump(item0.getJump());
				item.setHp(item0.getHp());
				item.setMp(item0.getMp());
				item.setUpgradeSlots(item0.getUpgradeSlots());
				item.setLevel(item0.getLevel());
				item.setViciousHammer(item0.getViciousHammer());
				//item.setOwner(item0.getOwner());
				item.setOwner(����[selection - 1]);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
				cm.gainMeso(-���Ľ��);
				cm.sendOk("ǿ���ɹ�����ǰװ���ȼ�Ϊ ��#r" + ����[selection - 1] + "#k����\r\n #r#eȫ����#b+2#r��������#b+2#r��ħ����#b+2#r\r\n");
				cm.ȫ�����߹���("[��Ƭ��ָǿ��]", "��� "+cm.getPlayer().getName()+" �����￨Ƭ��ָǿ������" + ����[selection - 1] + "��", item);
				cm.dispose();
					
			} else {
				cm.sendOk("��ǰװ��ǰ׺���ԡ����߽�Ҳ���");
				cm.dispose();
			}
		} else if(selection == 10){
			var text = "��ѡ������Ҫ���õĽ׶Σ�\r\n";
			for(var i = 0; i < 10; i ++){
				if(i == 0){
					text += "#r#L" + i + "#���н׶�#l\r\n";
				}else{
					text += "#b#L" + i + "#�׶�" + i + "#l   "; 
				}
			}
			text += "#k\r\n";
			cm.sendSimple(text);
		}
		
	} else if(status == 2){
		if(selection >= 0){
			stage = selection;
			var text = "������Ҫ���õĵȼ���\r\n";
			cm.sendGetNumber(text, 0, 0, 5);
		}
		
	}  else if(status == 3){
		if(selection >= 0){
			if(selection > 5){
				selection = 5;
			}
			cm.getPlayer().getMonsterBook().setCardsByStage(cm.getC(), stage, selection);
			if(stage == 0){
				cm.sendOk("�Գɹ���ȫ�׶εĹ��￨Ƭ�ȼ�����Ϊ " + selection + " ����\r\n");
			}else{
				cm.sendOk("�Գɹ����׶� " + stage + " �����й��￨Ƭ�ȼ�����Ϊ " + selection + " ����\r\n");
			}
			cm.dispose();
			return;
		}
		
	} else {
		cm.dispose();
		return;
	}
}

