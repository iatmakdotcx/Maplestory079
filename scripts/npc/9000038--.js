importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);

var status = 0;
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	    var textz = "\r\n��ã����Ǵ�����ѡ������Ҫ���װ�� \r\n\r\n";
		
		//textz += "#r#L1#   �����׹ - �� ��(��Сʱ- 100���) #l\r\n\r\n";
		//textz += "#r#L2#   �����׹ - �� ��(12Сʱ - 1000���) #l\r\n\r\n";
		textz += "#r#L3#   �����׹ - �� ��(24Сʱ - 2000���) #l\r\n\r\n";
		textz += "#r#L4#   �����׹ - �� ��(3�� - 5000���) #l\r\n\r\n";
		textz += "#r#L5#   �����׹ - �� ��(7�� - 10000���) #l\r\n\r\n";
		textz += "#r#L6#   �����׹ - �� ��(һ��- 35000���) #l\r\n\r\n";

		cm.sendSimple (textz);  

	}else if (status == 1) {

	if (selection == 0) {
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r1��#k���#k");
      			cm.dispose();
		} else if (cm.getPlayer().getCSPoints(1)<300) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
        var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1122017); //���װ��������/////////////////////////////////////////////////////////////////////
		var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
		var temptime = (System.currentTimeMillis() + 24 * 60 * 60 * 1000); //ʱ��
		toDrop.setExpiration(temptime); 
		toDrop.setFlag(1);
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
		cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
		cm.getChar().saveToDB(false, false);
		cm.gainItem(5220007,-1);
		cm.sendOk("�һ��ɹ�!")
		cm.dispose();
		}
	} else if (selection == 1) {
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (cm.getPlayer().getCSPoints(1)<100) {
 			cm.sendOk("��û��100������ֵ��������#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
			var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1122017); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
            var temptime = (System.currentTimeMillis() + 3 * 60 * 60 * 1000); //ʱ��
			toDrop.setExpiration(temptime); 
			toDrop.setFlag(1);
			cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			cm.getChar().saveToDB(false, false);
			cm.gainNX(-100);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}

	}else if (selection == 2){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (cm.getPlayer().getCSPoints(1)<1000) {
 			cm.sendOk("��û��1000������ֵ��������#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
			var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1122017); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
            var temptime = (System.currentTimeMillis() +  12 * 60 * 60 * 1000); //ʱ��
toDrop.setExpiration(temptime); 
toDrop.setFlag(1);
cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
cm.getChar().saveToDB(false, false);
			cm.gainNX(-1000);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}

	}else if (selection == 3){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (cm.getPlayer().getCSPoints(1)<2000) {
 			cm.sendOk("��û��2000������ֵ��������#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1122017); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
            var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
			toDrop.setExpiration(temptime); 
			toDrop.setFlag(1);
			cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			cm.getChar().saveToDB(false, false);
			cm.gainNX(-2000);
			cm.sendOk("�һ��ɹ�!")
			cm.dispose();
			}

	}else if (selection == 4){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (cm.getPlayer().getCSPoints(1)<5000) {
 			cm.sendOk("��û��5000������ֵ��������#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1122017); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
            var temptime = (System.currentTimeMillis() + 3 * 24 * 60 * 60 * 1000); //ʱ��
			toDrop.setExpiration(temptime); 
			toDrop.setFlag(1);
			cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			cm.getChar().saveToDB(false, false);
			cm.gainNX(-5000);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}

	}else if (selection == 5){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (cm.getPlayer().getCSPoints(1)<10000) {
 			cm.sendOk("��û��10000������ֵ��������#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1122017); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
            var temptime = (System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000); //ʱ��
			toDrop.setExpiration(temptime); 
			toDrop.setFlag(1);
			cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			cm.getChar().saveToDB(false, false);
			cm.gainNX(-10000);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}

	}else if (selection == 6){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (cm.getPlayer().getCSPoints(1)<35000) {
 			cm.sendOk("��û��35000������ֵ��������#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else{
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1122017); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1122017)).copy(); // ����һ��Equip��
            var temptime = (System.currentTimeMillis() +  30*24 * 60 * 60 * 1000); //ʱ��
			toDrop.setExpiration(temptime);
            toDrop.setFlag(1);			
			cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			cm.getChar().saveToDB(false, false);
			cm.gainNX(-35000);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}
	}else if (selection == 7){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1492042); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1492042)).copy(); // ����һ��Equip��
            var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
			toDrop.setExpiration(temptime); 
			cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			cm.getChar().saveToDB(false, false);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
			}
   }else if (selection == 8){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1432012); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1432012)).copy(); // ����һ��Equip��
            var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
			toDrop.setExpiration(temptime); 
			cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			cm.getChar().saveToDB(false, false);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
	       }
	 }else if (selection == 9){
		if (cm.getMeso() < 0) {
 			cm.sendOk("�����#r5000W#k���#k");
      			cm.dispose();
		} else if (!cm.haveItem(5220007,1)) {
 			cm.sendOk("#v5220007##z5220007#��û�и���Ʒ ��Ҫ���̳ǹ����������#k");
      			cm.dispose();
		} else if (cm.getInventory(1).isFull(3)){
			cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
			cm.dispose();
		} else {
         var ii = MapleItemInformationProvider.getInstance();		                
            var type = ii.getInventoryType(1442024); //���װ��������/////////////////////////////////////////////////////////////////////
            var toDrop = ii.randomizeStats(ii.getEquipById(1442024)).copy(); // ����һ��Equip��
            var temptime = (System.currentTimeMillis() + 1 * 24 * 60 * 60 * 1000); //ʱ��
			toDrop.setExpiration(temptime); 
			cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); //ˢ�±���	
			cm.getChar().saveToDB(false, false);
			cm.gainItem(5220007,-1);
			cm.sendOk("�һ��ɹ�!")
      			cm.dispose();
}       }
}
}
}
