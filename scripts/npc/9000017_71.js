
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
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
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
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#e#d#l������[��ʹ����]���촦���������������á�\r\n"//3
            text += "" + ��ɫ��ͷ + "#L1##e#d����#v1082175#��4ά+5������+2�� ��Ҫ��  #v4001325#x10��#l\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L2##e#d#v4001325#x20 + #v1082175# ������ #v1082176#��4ά+10������+4��#l\r\n"//3
            text += "" + ��ɫ��ͷ + "#L3##e#d#v4001325#x30 + #v1082176# ������ #v1082177#��4ά+15������+6��#l\r\n"//3
            text += "" + ��ɫ��ͷ + "#L4##e#d#v4001325#x66 + #v1082177# ������ #v1082178#��4ά+22������+15��#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		         if(cm.haveItem(4001325,10)){
				cm.gainItem(4001325, -10);
				cm.gainItem(1082175,5,5,5,5,0,0,2,4,0,0,0,0,0,0);

            cm.sendOk("�����ɹ���");
			cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"]������[������ʹ����]���������ͽ������쵽���°ɣ�");
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡������Ҫ\r\n#v4001325#x10��");
            cm.dispose();
			}
        } else if (selection == 2) {
                     if(cm.haveItem(4001325,20)&& cm.haveItem(1082175,1)){
				cm.gainItem(4001325, -20);
				cm.gainItem(1082175, -1);
				cm.gainItem(1082176,10,10,10,10,0,0,4,6,0,0,0,0,0,0);

            cm.sendOk("�����ɹ���");
			cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"]������[�м���ʹ����]���������ͽ������쵽���°ɣ�");
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡������Ҫ\r\n#v4001325#x20��");
            cm.dispose();
			}
        } else if (selection == 3) {
		         if(cm.haveItem(4001325,30)&& cm.haveItem(1082176,1)){
				cm.gainItem(4001325, -30);
				cm.gainItem(1082176, -1);
				cm.gainItem(1082177,15,15,15,15,0,0,6,8,0,0,0,0,0,0);

            cm.sendOk("�����ɹ���");
			cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"]������[�߼���ʹ����]���������ͽ������쵽���°ɣ�");
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡������Ҫ\r\n#v4001325#x30��");
            cm.dispose();
			}
        } else if (selection == 4) {
		         if(cm.haveItem(4001325,66)&& cm.haveItem(1082177,1)){
				cm.gainItem(4001325, -66);
				cm.gainItem(1082177, -1);


				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1082178);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1082178)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setStr(22);//����*
				toDrop.setDex(22);//����
				toDrop.setInt(22);//����
				toDrop.setLuk(22);//����
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
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("������ɣ���鿴������");
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "��װ��������" + " : " + "[" + cm.getChar().getName() + "]�ɹ��ϳ��ˡ�������ʹ����"));
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡������Ҫ\r\n#v4001325#x66��");
            cm.dispose();
			}
        } else if (selection == 5) {
		cm.openNpc(9000017, 33);
        } else if (selection == 6) {
		cm.openNpc(9270045, 8);
	}
    }
}


