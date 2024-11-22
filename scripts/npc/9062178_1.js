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
		var text = "��ã�������ʱװ����ת�����ģ����������������#v4310088#ת��ʱװ���ԣ��������¼���Ҫ����ע�⣺\r\n";
		text += "1��#r��������ͬ��λ���ܽ���ת��#k;\r\n";
		text += "2��#r��ʱ�޵�ʱװ�޷�����ת��#k;\r\n";
		text += "3��#r�뽫��ת�Ƶ�#b��ʱװ#r�ŵ���Ʒ���� #b1#r ��#k��\r\n";
		text += "4��#r�뽫Ҫת�ƹ�ȥ��#b��ʱװ#r�ŵ���Ʒ���� #b2#r ��#k��\r\n";
		text += "5��#r����ʱװ�����Իụ�ཻ��#k;\r\n";
		text += "6��#rÿ��ת����Ҫ#v4310088##bx20#k��\r\n";
		text += "\r\n";
		text += "\t\t\t\t#L1##b[��ʼת��]#l#k\r\n\r\n";
		//text += "#L2#ѡ��2����\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
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
				cm.sendOk("�뱣֤װ������1��2���Ϊʱװ!");	
				cm.dispose();
				return;
			}
			if((item1.getExpiration() >= 0 && item1.getExpiration() < 4700000000000) || (item2.getExpiration() >= 0 && item2.getExpiration() < 4700000000000)) {
				//cm.getPlayer().dropMessage("item1:" + item1.getExpiration());//����
				//cm.getPlayer().dropMessage("item2:" + item2.getExpiration());//����
				cm.sendOk("�뱣֤����ʱװ��û��ʱ������!");	
				cm.dispose();
				return;
			}
			if(itemId1 < 1200000){
				var itemId1S = itemId1 + "";
				var itemId2S = itemId2 + "";
				itemId1S = itemId1S.substr(0, 3) + "";
				itemId2S = itemId2S.substr(0, 3) + "";
				// cm.getPlayer().dropMessage("itemId1S:" + itemId1S);//����
				// cm.getPlayer().dropMessage("itemId2S:" + itemId2S);//����
				if(!itemId1S.equals(itemId2S)){
					cm.sendOk("�뱣֤����ʱװΪͬһ��λ!");	
					cm.dispose();
					return;
				}
				cm.gainItem(4310088, -20);
				var item3 = cm.getNewEquip(itemId1);//�м���
				item3.setStr(item1.getStr());
				item3.setInt(item1.getInt());
				item3.setLuk(item1.getLuk());
				item3.setDex(item1.getDex());
				item3.setWatk(item1.getWatk());
				item3.setMatk(item1.getMatk());
				item3.setWdef(item1.getWdef());
				item3.setMdef(item1.getMdef());
				item3.setAcc(item1.getAcc());
				item3.setAvoid(item1.getAvoid());
				item3.setSpeed(item1.getSpeed());
				item3.setJump(item1.getJump());
				item3.setHp(item1.getHp());
				item3.setMp(item1.getMp());
				item3.setUpgradeSlots(item1.getUpgradeSlots());
				item3.setLevel(item1.getLevel());
				item3.setViciousHammer(item1.getViciousHammer());
				item3.setOwner(item1.getOwner());
				
				item1.setStr(item2.getStr());
				item1.setInt(item2.getInt());
				item1.setLuk(item2.getLuk());
				item1.setDex(item2.getDex());
				item1.setWatk(item2.getWatk());
				item1.setMatk(item2.getMatk());
				item1.setWdef(item2.getWdef());
				item1.setMdef(item2.getMdef());
				item1.setAcc(item2.getAcc());
				item1.setAvoid(item2.getAvoid());
				item1.setSpeed(item2.getSpeed());
				item1.setJump(item2.getJump());
				item1.setHp(item2.getHp());
				item1.setMp(item2.getMp());
				item1.setUpgradeSlots(item2.getUpgradeSlots());
				item1.setLevel(item2.getLevel());
				item1.setViciousHammer(item2.getViciousHammer());
				item1.setOwner(item2.getOwner());
				
				item2.setStr(item3.getStr());
				item2.setInt(item3.getInt());
				item2.setLuk(item3.getLuk());
				item2.setDex(item3.getDex());
				item2.setWatk(item3.getWatk());
				item2.setMatk(item3.getMatk());
				item2.setWdef(item3.getWdef());
				item2.setMdef(item3.getMdef());
				item2.setAcc(item3.getAcc());
				item2.setAvoid(item3.getAvoid());
				item2.setSpeed(item3.getSpeed());
				item2.setJump(item3.getJump());
				item2.setHp(item3.getHp());
				item2.setMp(item3.getMp());
				item2.setUpgradeSlots(item3.getUpgradeSlots());
				item2.setLevel(item3.getLevel());
				item2.setViciousHammer(item3.getViciousHammer());
				item2.setOwner(item3.getOwner());
				
				item1 = item1.copy();
				item2 = item2.copy();
				
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 2, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item2, false);
				
				cm.sendOk("�ѳɹ�������ʱװת��������!");	
				cm.ȫ�����߹���("[ʱװ����ת��]", "��� "+cm.getPlayer().getName()+" ����ʱװ������ת�Ƶ�����ʱװ�ϡ�", item2);
				cm.dispose();
				return;
			}else if(itemId1 >= 1200000 && itemId1 < 1800000){
				if(itemId2 >= 1200000 && itemId2 < 1800000){
					cm.gainItem(4310088, -20);
					var item3 = cm.getNewEquip(itemId1);//�м���
					item3.setStr(item1.getStr());
					item3.setInt(item1.getInt());
					item3.setLuk(item1.getLuk());
					item3.setDex(item1.getDex());
					item3.setWatk(item1.getWatk());
					item3.setMatk(item1.getMatk());
					item3.setWdef(item1.getWdef());
					item3.setMdef(item1.getMdef());
					item3.setAcc(item1.getAcc());
					item3.setAvoid(item1.getAvoid());
					item3.setSpeed(item1.getSpeed());
					item3.setJump(item1.getJump());
					item3.setHp(item1.getHp());
					item3.setMp(item1.getMp());
					item3.setUpgradeSlots(item1.getUpgradeSlots());
					item3.setLevel(item1.getLevel());
					item3.setViciousHammer(item1.getViciousHammer());
					item3.setOwner(item1.getOwner());
					
					item1.setStr(item2.getStr());
					item1.setInt(item2.getInt());
					item1.setLuk(item2.getLuk());
					item1.setDex(item2.getDex());
					item1.setWatk(item2.getWatk());
					item1.setMatk(item2.getMatk());
					item1.setWdef(item2.getWdef());
					item1.setMdef(item2.getMdef());
					item1.setAcc(item2.getAcc());
					item1.setAvoid(item2.getAvoid());
					item1.setSpeed(item2.getSpeed());
					item1.setJump(item2.getJump());
					item1.setHp(item2.getHp());
					item1.setMp(item2.getMp());
					item1.setUpgradeSlots(item2.getUpgradeSlots());
					item1.setLevel(item2.getLevel());
					item1.setViciousHammer(item2.getViciousHammer());
					item1.setOwner(item2.getOwner());
					
					item2.setStr(item3.getStr());
					item2.setInt(item3.getInt());
					item2.setLuk(item3.getLuk());
					item2.setDex(item3.getDex());
					item2.setWatk(item3.getWatk());
					item2.setMatk(item3.getMatk());
					item2.setWdef(item3.getWdef());
					item2.setMdef(item3.getMdef());
					item2.setAcc(item3.getAcc());
					item2.setAvoid(item3.getAvoid());
					item2.setSpeed(item3.getSpeed());
					item2.setJump(item3.getJump());
					item2.setHp(item3.getHp());
					item2.setMp(item3.getMp());
					item2.setUpgradeSlots(item3.getUpgradeSlots());
					item2.setLevel(item3.getLevel());
					item2.setViciousHammer(item3.getViciousHammer());
					item2.setOwner(item3.getOwner());
					
					item1 = item1.copy();
					item2 = item2.copy();
					
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 2, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item2, false);
					
					cm.sendOk("�ѳɹ�������ʱװת��������!");	
					cm.ȫ�����߹���("[ʱװ����ת��]", "��� "+cm.getPlayer().getName()+" ����ʱװ������ת�Ƶ�����ʱװ�ϡ�", item2);
					cm.dispose();
					return;
				}else{
					cm.sendOk("�뱣֤����ʱװΪͬһ��λ!");	
					cm.dispose();
					return;
				}
			}/* else if(itemId1 >= 1800000 && itemId1 < 1900000){
				var itemId1S = itemId1 + "";
				var itemId2S = itemId2 + "";
				itemId1S = itemId1S.substr(0, 3) + "";
				itemId2S = itemId2S.substr(0, 3) + "";
				// cm.getPlayer().dropMessage("itemId1S:" + itemId1S);//����
				// cm.getPlayer().dropMessage("itemId2S:" + itemId2S);//����
				if(!itemId1S.equals(itemId2S)){
					cm.sendOk("�뱣֤����ʱװΪͬһ��λ!");	
					cm.dispose();
					return;
				}
				cm.gainItem(4310088, -20);
				var item3 = cm.getNewEquip(itemId1);//�м���
				item3.setStr(item1.getStr());
				item3.setInt(item1.getInt());
				item3.setLuk(item1.getLuk());
				item3.setDex(item1.getDex());
				item3.setWatk(item1.getWatk());
				item3.setMatk(item1.getMatk());
				item3.setWdef(item1.getWdef());
				item3.setMdef(item1.getMdef());
				item3.setAcc(item1.getAcc());
				item3.setAvoid(item1.getAvoid());
				item3.setSpeed(item1.getSpeed());
				item3.setJump(item1.getJump());
				item3.setHp(item1.getHp());
				item3.setMp(item1.getMp());
				item3.setUpgradeSlots(item1.getUpgradeSlots());
				item3.setLevel(item1.getLevel());
				item3.setViciousHammer(item1.getViciousHammer());
				//item3.setOwner(item1.getOwner());
				
				item1.setStr(item2.getStr());
				item1.setInt(item2.getInt());
				item1.setLuk(item2.getLuk());
				item1.setDex(item2.getDex());
				item1.setWatk(item2.getWatk());
				item1.setMatk(item2.getMatk());
				item1.setWdef(item2.getWdef());
				item1.setMdef(item2.getMdef());
				item1.setAcc(item2.getAcc());
				item1.setAvoid(item2.getAvoid());
				item1.setSpeed(item2.getSpeed());
				item1.setJump(item2.getJump());
				item1.setHp(item2.getHp());
				item1.setMp(item2.getMp());
				item1.setUpgradeSlots(item2.getUpgradeSlots());
				item1.setLevel(item2.getLevel());
				item1.setViciousHammer(item2.getViciousHammer());
				//item1.setOwner(item2.getOwner());
				
				item2.setStr(item3.getStr());
				item2.setInt(item3.getInt());
				item2.setLuk(item3.getLuk());
				item2.setDex(item3.getDex());
				item2.setWatk(item3.getWatk());
				item2.setMatk(item3.getMatk());
				item2.setWdef(item3.getWdef());
				item2.setMdef(item3.getMdef());
				item2.setAcc(item3.getAcc());
				item2.setAvoid(item3.getAvoid());
				item2.setSpeed(item3.getSpeed());
				item2.setJump(item3.getJump());
				item2.setHp(item3.getHp());
				item2.setMp(item3.getMp());
				item2.setUpgradeSlots(item3.getUpgradeSlots());
				item2.setLevel(item3.getLevel());
				item2.setViciousHammer(item3.getViciousHammer());
				//item2.setOwner(item3.getOwner());
				
				item1 = item1.copy();
				item2 = item2.copy();
				
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
				Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 2, 1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item1, false);
				Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item2, false);
				
				cm.sendOk("�ѳɹ�������ʱװת��������!");	
				cm.ȫ�����߹���("[ʱװ����ת��]", "��� "+cm.getPlayer().getName()+" ����ʱװ������ת�Ƶ�����ʱװ�ϡ�", item2);
				cm.dispose();
				return;
			}  */else {
				cm.sendOk("���ʱװ����֧�ַ�Χ��!");	
				cm.dispose();
				return;
			}
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			
		} 
		
	} else {
		cm.dispose();
		return;
	}
}

