importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ��ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }

            text += "#L1##v1402196##l #L2##v1472214##l #L3##v1452205##l #L4##v1432167##l #L5##v1462193##l #L6##v1492179##l #L7##v1482168##l #L8##v1332225##l  #L10##v1422140##l #L11##v1382208##l #L13##v1302275##l #L14##v1402309##l #L38#���ֽ�#l #L37#�ֻ�#L22#��ʱ\r\n#L15#����Lv.50#L16#����#L17#��ʹ����#L35#����#L36#��Ƭ#L0#ѫ��\r\n#L18#������������#L19#��������#L20#����Ь��#L21#��������\r\n#L23#սʿ��������#L24#��������#L25#����Ь��#L26#��������\r\n#L27#������������#L28#��������#L29#����Ь��#L30#��������\r\n#L31#���ֱ�������#L32#��������#L33#����Ь��#L34#��������\r\n#L40#����+�س�#L41#100�Ľ�ָ#L42#300#L43#500"
            cm.sendSimple(text);

        } else if (selection == 37) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1112585,1);//ð�յ��ղؼ�
				cm.gainItem(1112586,1);//ð�յ��ղؼ�
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 22) {
			if(cm.haveItem(1402214,0) ){

				cm.gainItem(1432214,1);//ð�յ��ղؼ�
				cm.gainItem(1001108,0);//ð�յ��ղؼ�
				cm.gainItem(1002900,0);//ð�յ��ղؼ�
				cm.gainItem(1041198,0);//ð�յ��ղؼ�
				cm.gainItem(1003759,0);//ð�յ��ղؼ�
				cm.gainItem(1040196,0);//ð�յ��ղؼ�
				cm.gainItem(1061213,0);//ð�յ��ղؼ�
				cm.gainItem(1061211,0);//ð�յ��ղؼ�
				cm.gainItem(1051406,0);//ð�յ��ղؼ�
				cm.gainItem(1051487,0);//ð�յ��ղؼ�
				cm.gainItem(2044003,0);//ð�յ��ղؼ�
				cm.gainNX(0);
				cm.gainMeso(0);
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 38) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1302275);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1302275)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("�����ɹ���");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 0) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1142654);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1142654)).copy();
				toDrop.setFlag(8)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setStr(138);//����*
				toDrop.setDex(138);//����
				toDrop.setInt(138);//����
				toDrop.setLuk(138);//����
				toDrop.setWatk(138);//������
				toDrop.setMatk(138);//ħ������
				toDrop.setWdef(999);//�������
				toDrop.setMdef(999);//ħ������
				toDrop.setSpeed(999);//�ƶ��ٶ�
				toDrop.setAcc(999);//����
				toDrop.setAvoid(999);//����
				toDrop.setJump(999);//��Ծ
				toDrop.setHp(2000);//����
				toDrop.setMp(2000);//ħ��
				toDrop.setOwner("��");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("������ɣ���鿴������");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 1) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1402196);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1402196)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("�����ɹ���");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 2) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1472214);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1472214)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("�����ɹ���");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 3) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1452205);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1452205)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("�����ɹ���");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 4) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1432167);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1432167)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("�����ɹ���");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 5) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1462193);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1462193)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("�����ɹ���");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 6) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1492179);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1492179)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("�����ɹ���");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 7) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1482168);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1482168)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("�����ɹ���");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 8) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1332225);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1332225)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("�����ɹ���");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 10) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1422140);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1422140)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("�����ɹ���");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 11) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1422140);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1422140)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("�����ɹ���");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 13) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1302275);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1302275)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("�����ɹ���");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 14) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1402309);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1402309)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
          			cm.sendOk("�����ɹ���");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 15) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1112495);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1112495)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setStr(80);//����*
				toDrop.setDex(80);//����
				toDrop.setInt(80);//����
				toDrop.setLuk(80);//����
				toDrop.setWatk(30);//������
				toDrop.setMatk(30);//ħ������
				toDrop.setWdef(0);//�������
				toDrop.setMdef(0);//ħ������
				toDrop.setSpeed(10);//�ƶ��ٶ�
				toDrop.setAcc(0);//����
				toDrop.setAvoid(0);//����
				toDrop.setJump(10);//��Ծ
				toDrop.setHp(500);//����
				toDrop.setMp(500);//ħ��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("������ɣ���鿴������");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 16) {
			if(cm.haveItem(1402214,0) ){
			var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1122076);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1122076)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setStr(150);//����*
				toDrop.setDex(150);//����
				toDrop.setInt(150);//����
				toDrop.setLuk(150);//����
				toDrop.setWatk(40);//������
				toDrop.setMatk(40);//ħ������
				toDrop.setWdef(0);//�������
				toDrop.setMdef(0);//ħ������
				toDrop.setSpeed(0);//�ƶ��ٶ�
				toDrop.setAcc(0);//����
				toDrop.setAvoid(0);//����
				toDrop.setJump(0);//��Ծ
				toDrop.setHp(2000);//����
				toDrop.setMp(2000);//ħ��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("������ɣ���鿴������");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 17) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1032219);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1032219)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setStr(150);//����*
				toDrop.setDex(150);//����
				toDrop.setInt(150);//����
				toDrop.setLuk(150);//����
				toDrop.setWatk(40);//������
				toDrop.setMatk(40);//ħ������
				toDrop.setWdef(0);//�������
				toDrop.setMdef(0);//ħ������
				toDrop.setSpeed(0);//�ƶ��ٶ�
				toDrop.setAcc(0);//����
				toDrop.setAvoid(0);//����
				toDrop.setJump(0);//��Ծ
				toDrop.setHp(2000);//����
				toDrop.setMp(2000);//ħ��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("������ɣ���鿴������");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 18) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1102485,1);//ð�յ��ղؼ�
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 19) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1082547,1);//ð�յ��ղؼ�
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 20) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1072747,1);//ð�յ��ղؼ�
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}1482216
        } else if (selection == 21) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1132178,1);//ð�յ��ղؼ�
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}

        } else if (selection == 23) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1102481,1);//ð�յ��ղؼ�
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 24) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1082543,1);//ð�յ��ղؼ�
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 25) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1072743,1);//ð�յ��ղؼ�
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 26) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1132174,1);//ð�յ��ղؼ�
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 27) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1102484,1);//ð�յ��ղؼ�
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 28) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1082546,1);//ð�յ��ղؼ�
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 29) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1072746,1);//ð�յ��ղؼ�
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 30) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1132177,1);//ð�յ��ղؼ�
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 31) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1102483,1);//ð�յ��ղؼ�
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 32) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1082545,1);//ð�յ��ղؼ�
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 33) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1072745,1);//ð�յ��ղؼ�
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 34) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1132176,1);//ð�յ��ղؼ�
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 35) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1022226);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1022226)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setStr(60);//����*
				toDrop.setDex(60);//����
				toDrop.setInt(60);//����
				toDrop.setLuk(60);//����
				toDrop.setWatk(30);//������
				toDrop.setMatk(30);//ħ������
				toDrop.setWdef(0);//�������
				toDrop.setMdef(0);//ħ������
				toDrop.setSpeed(0);//�ƶ��ٶ�
				toDrop.setAcc(0);//����
				toDrop.setAvoid(0);//����
				toDrop.setJump(0);//��Ծ
				toDrop.setHp(3000);//����
				toDrop.setMp(3000);//ħ��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 36) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1112138,60,60,60,60,5000,5000,60,60,0,0,0,0,30,30);
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 40) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(2041200,25);//ð�յ��ղؼ�
				cm.gainItem(4310038,10);//ð�յ��ղؼ�
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 41) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1112422);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1112422)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setStr(15);//����*
				toDrop.setDex(15);//����
				toDrop.setInt(15);//����
				toDrop.setLuk(15);//����
				toDrop.setWatk(15);//������
				toDrop.setMatk(15);//ħ������
				toDrop.setWdef(0);//�������
				toDrop.setMdef(0);//ħ������
				toDrop.setSpeed(0);//�ƶ��ٶ�
				toDrop.setAcc(0);//����
				toDrop.setAvoid(0);//����
				toDrop.setJump(0);//��Ծ
				toDrop.setHp(0);//����
				toDrop.setMp(0);//ħ��
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("������ɣ���鿴������");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 42) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1112434);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1112434)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setStr(30);//����*
				toDrop.setDex(30);//����
				toDrop.setInt(30);//����
				toDrop.setLuk(30);//����
				toDrop.setWatk(30);//������
				toDrop.setMatk(30);//ħ������
				toDrop.setWdef(0);//�������
				toDrop.setMdef(0);//ħ������
				toDrop.setSpeed(0);//�ƶ��ٶ�
				toDrop.setAcc(0);//����
				toDrop.setAvoid(0);//����
				toDrop.setJump(0);//��Ծ
				toDrop.setHp(0);//����
				toDrop.setMp(0);//ħ��
				toDrop.setOwner("");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("������ɣ���鿴������");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 43) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1112727);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1112727)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setStr(66);//����*
				toDrop.setDex(66);//����
				toDrop.setInt(66);//����
				toDrop.setLuk(66);//����
				toDrop.setWatk(66);//������
				toDrop.setMatk(66);//ħ������
				toDrop.setWdef(0);//�������
				toDrop.setMdef(0);//ħ������
				toDrop.setSpeed(0);//�ƶ��ٶ�
				toDrop.setAcc(0);//����
				toDrop.setAvoid(0);//����
				toDrop.setJump(0);//��Ծ
				toDrop.setHp(0);//����
				toDrop.setMp(0);//ħ��
				toDrop.setOwner("");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("������ɣ���鿴������");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
		}
 	
    }
}


