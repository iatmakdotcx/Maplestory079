
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
	
    action(1, 0, 0)
}

function action(mode, type, selection) {
    if (status <= 0 && mode <= 0) {
        cm.dispose();
        return
    }
    if (mode == 1) {
        status++
    } else {
        status--
    }	
		if (cm.getMapId() == 108010101 ) {
            cm.dispose();
            return;
		 
    } else if (status <= 0) {
        var 
		selStr = "#b��ӭ���� �������������ʹ��ָ��Ҫ׼�����ϣ�\r\n#v1112427#1��#v4170001#40��#v4170009#80��\r\nע�⡾����ȼ�Ϊ210��������ͨ��ָֻ��ӵ��һ������������ʹ��ָ������������ͨ��ָ\r\n";

		selStr += "#L1##r������ʹ��ָ#v1113056#[ȫ����40����20]#l\r\n\r\n"
		   
	

        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
		 case 1:
		 if(cm.haveItem(1112427,1)&& cm.haveItem(4170001,40)&& cm.haveItem(4170009,80)){
				cm.gainItem(1112427, -1);
				cm.gainItem(4170009, -80);
				cm.gainItem(4170001, -40);
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1113056);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1113056)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setStr(40);//����*
				toDrop.setDex(40);//����
				toDrop.setInt(40);//����
				toDrop.setLuk(40);//����
				toDrop.setWatk(20);//������
				toDrop.setMatk(25);//ħ������
				toDrop.setWdef(9999);//�������
				toDrop.setMdef(9999);//ħ������
				toDrop.setSpeed(0);//�ƶ��ٶ�
				toDrop.setAcc(0);//����
				toDrop.setAvoid(0);//����
				toDrop.setJump(0);//��Ծ
				toDrop.setHp(0);//����
				toDrop.setMp(0);//ħ��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("������ɣ���鿴������");
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "��װ��������" + " : " + "[" + cm.getChar().getName() + "]�ɹ���������ʹ��ָ��ʵ�������������"));
				cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
         break;
		
        }
    }
}
