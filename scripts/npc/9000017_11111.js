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
		selStr = "��ӭ����[����ʮ�����ɾ���������]\r\n";
		selStr += "#L1#���ռ�#v4000016##v4000019##v4000000#����ʮ��\r\nף��λ��ʹ���� Ԫ������ �󼪴����� #l\r\n\r\n"
		selStr += "#L1##r����#v1115111#��ʱ������Ƭ��ָ\r\nף��λ��ʹ���� Ԫ������ �󼪴����� #l\r\n\r\n"


		   
	

        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
		 case 1:
		 if(cm.haveItem(4000016,50)&& cm.haveItem(4000019,50)&& cm.haveItem(4000000,50)&& cm.getBossLog('PlayQuest100') < 1){
				cm.gainItem(4000016, -50);
				cm.gainItem(4000019, -50);
                                cm.gainItem(4000000, -50);
		cm.setBossLog('PlayQuest100');
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1115111);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1115111)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setStr(10);//����*
				toDrop.setDex(10);//����
				toDrop.setInt(10);//����
				toDrop.setLuk(10);//����
				toDrop.setWatk(10);//������
				toDrop.setMatk(10);//ħ������
				toDrop.setWdef(0);//�������
				toDrop.setMdef(0);//ħ������
				toDrop.setSpeed(0);//�ƶ��ٶ�
				toDrop.setAcc(0);//����
				toDrop.setAvoid(0);//����
				toDrop.setJump(0);//��Ծ
				toDrop.setHp(500);//����
				toDrop.setMp(0);//ħ��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("������ɣ���鿴������");
				cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ�������[��ʱ������Ƭ��ָ]``ף����λԪ�����֣�");
				cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ�������Ѿ�������һ�Σ�");
            cm.dispose();
			}
         break;
		 case 2:
		cm.openNpc(9310085,0);
        }
    }
}
