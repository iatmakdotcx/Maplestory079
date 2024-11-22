/*
SnailMS�ű�������
*/
importClass(Packages.server.MapleItemInformationProvider);

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
		var text = "��ã������ǳ���װ������ת�����ģ����������������#v4310088#ת�Ƴ���װ�����ԣ��������¼���Ҫ����ע�⣺\r\n";
		text += "1��#r��ʱ�޵ĳ���װ���޷�����ת��#k;\r\n";
		text += "2��#r�뽫��ת�Ƶ�#b�ɳ���װ��#r�ŵ���Ʒ���� #b1#r ��#k��\r\n";
		text += "3��#r�뽫Ҫת�ƹ�ȥ��#b�³���װ��#r�ŵ���Ʒ���� #b2#r ��#k��\r\n";
		text += "4��#r�ɵĳ���װ������ʧ���µĳ���װ����������¼�������ǣ��ҽ��̳оɳ���װ����������������������#k;\r\n";
		text += "5��#rת�ƺ��³�װ���������� = �³�װ��Ȼ�������� - �ɳ�װ����������#k;\r\n";
		text += "6��#rÿ��ת����Ҫ#v4310088##bx20#k��\r\n";
		text += "\r\n";
		text += "\t\t\t\t#L1##b[��ʼת��]#l#k\r\n\r\n";
		//text += "#L2#ѡ��2����\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			var item1 = cm.getInventory(1).getItem(1);
			var item2 = cm.getInventory(1).getItem(2);
			var itemId1 = item1.getItemId();
			var itemId2 = item2.getItemId();
				if(!MapleItemInformationProvider.getInstance().isCash(itemId1) || !MapleItemInformationProvider.getInstance().isCash(itemId2) ) {
				cm.sendOk("�뱣֤װ������1��2���Ϊ����װ��!");	
				cm.dispose();
				return;
			}
			if((item1.getExpiration() >= 0 && item1.getExpiration() < 4700000000000) || (item2.getExpiration() >= 0 && item2.getExpiration() < 4700000000000)) {
				//cm.getPlayer().dropMessage("item1:" + item1.getExpiration());//����
				//cm.getPlayer().dropMessage("item2:" + item2.getExpiration());//����
				cm.sendOk("�뱣֤��������װ����û��ʱ������!");	
				cm.dispose();
				return;
			}
			if(itemId1 < 1800000 || itemId1 >= 1900000 || itemId2 < 1800000 || itemId2 >= 1900000){
				cm.sendOk("���װ������֧�ַ�Χ��!");	
				cm.dispose();
				return;
			}
			var text = "ȷ��Ҫ��#v" + itemId1 + "#������ת�Ƶ�#v" + itemId2 + "#��\r\n#rת�ƹ���#v" + itemId1 + "#������ʧ����һ���̲����档\r\n������Ȼ���Դ��ڡ�1~2�Ĳ��������ת�ƺ������Ҳ���Ӧ���֡�1~2�Ĳ�����������������\r\n";
			cm.sendYesNo(text);
		}else{
			cm.sendOk("��ӭ�´�����");
			cm.dispose();
			return;
		}
		
	} else if (status == 2){
		if(!cm.haveItem(4310088, 20)){
			cm.sendOk("���#v4310088#��������");
			cm.dispose();
			return;
		}
		if(cm.getInventory(1).getItem(1) == null){
			cm.sendOk("�㱳����һ��û��װ������");
			cm.dispose();
			return;
		}
		if(cm.getInventory(1).getItem(2) == null){
			cm.sendOk("�㱳���ڶ���û��װ������");
			cm.dispose();
			return;
		}
		var item1 = cm.getInventory(1).getItem(1);
		var item2 = cm.getInventory(1).getItem(2);
		var itemId1 = item1.getItemId();
		var itemId2 = item2.getItemId();
		if(!MapleItemInformationProvider.getInstance().isCash(itemId1) || !MapleItemInformationProvider.getInstance().isCash(itemId2) ) {
			cm.sendOk("�뱣֤װ������1��2���Ϊ����װ��!");	
			cm.dispose();
			return;
		}
		if((item1.getExpiration() >= 0 && item1.getExpiration() < 4700000000000) || (item2.getExpiration() >= 0 && item2.getExpiration() < 4700000000000)) {
			//cm.getPlayer().dropMessage("item1:" + item1.getExpiration());//����
			//cm.getPlayer().dropMessage("item2:" + item2.getExpiration());//����
			cm.sendOk("�뱣֤��������װ����û��ʱ������!");	
			cm.dispose();
			return;
		}
		if(itemId1 >= 1800000 && itemId1 < 1900000 && itemId2 >= 1800000 && itemId2 < 1900000){
			/* var itemId1S = itemId1 + "";
			var itemId2S = itemId2 + "";
			itemId1S = itemId1S.substr(0, 3) + "";
			itemId2S = itemId2S.substr(0, 3) + "";
			// cm.getPlayer().dropMessage("itemId1S:" + itemId1S);//����
			// cm.getPlayer().dropMessage("itemId2S:" + itemId2S);//����
			if(!itemId1S.equals(itemId2S)){
				cm.sendOk("�뱣֤��������װ��Ϊͬһ��λ!");	
				cm.dispose();
				return;
			} */
			cm.gainItem(4310088, -20);
			var item3 = cm.getNewEquip(itemId1);//�м���1
			var item4 = cm.getNewEquip(itemId2);//�м���2
			
			
			
			item2.setStr(item4.getStr() + item1.getStr() - item3.getStr());
			item2.setInt(item4.getInt() + item1.getInt() - item3.getInt());
			item2.setLuk(item4.getLuk() + item1.getLuk() - item3.getLuk());
			item2.setDex(item4.getDex() + item1.getDex() - item3.getDex());
			item2.setWatk(item4.getWatk() + item1.getWatk() - item3.getWatk());
			// cm.playerMessage(6, "item4.getWatk()" + item4.getWatk());//����
			// cm.playerMessage(6, "item1.getWatk()" + item1.getWatk());//����
			// cm.playerMessage(6, "item3.getWatk()" + item3.getWatk());//����
			// cm.playerMessage(6, "item2.getWatk()" + item2.getWatk());//����
			item2.setMatk(item4.getMatk() + item1.getMatk() - item3.getMatk());
			item2.setWdef(item4.getWdef() + item1.getWdef() - item3.getWdef());
			item2.setMdef(item4.getMdef() + item1.getMdef() - item3.getMdef());
			item2.setAcc(item4.getAcc() + item1.getAcc() - item3.getAcc());
			item2.setAvoid(item4.getAvoid() + item1.getAvoid() - item3.getAvoid());
			item2.setSpeed(item4.getSpeed() + item1.getSpeed() - item3.getSpeed());
			item2.setJump(item4.getJump() + item1.getJump() - item3.getJump());
			item2.setHp(item4.getHp() + item1.getHp() - item3.getHp());
			item2.setMp(item4.getMp() + item1.getMp() - item3.getMp());
			var upgrade = item4.getUpgradeSlots() - item1.getLevel();
			if(upgrade < 0){
				upgrade = 0;
			}
			item2.setUpgradeSlots(upgrade);
			// cm.playerMessage(6, "item2.getUpgradeSlots()" + item2.getUpgradeSlots());//����
			item2.setLevel(item1.getLevel());
			//item2.setViciousHammer(item3.getViciousHammer());
			//item2.setOwner(item3.getOwner());
			
			//item1 = item1.copy();
			item2 = item2.copy();
			
			Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
			Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 2, 1, false);
			//Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item1, false);
			Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item2, false);
			
			cm.sendOk("�ѳɹ���#v" + itemId1 + "#������ת�Ƶ���#v" + itemId2 + "#!");	
			cm.ȫ�����߹���("[����װ������ת��]", "��� "+cm.getPlayer().getName()+" ���ɳ���װ��������ת�Ƶ����³���װ���ϡ�", item2);
			cm.dispose();
			return;
		} else {
			cm.sendOk("���װ������֧�ַ�Χ��!");	
			cm.dispose();
			return;
		}
	} else {
		cm.dispose();
		return;
	}
}

