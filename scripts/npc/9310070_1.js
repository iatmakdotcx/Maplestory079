load("nashorn:mozilla_compat.js");

var status = 0;
var job;
var DJ = "0"; //�۳��ĵ��
var DJ = "0"; //�۳��ĵ��
var �ߵ����ˮ�� = "4251202"; //�۳��ĵ��

var ttt = "#fUI/UIWindow.img/Quest/icon9/0#";
var xxx = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";



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

            var textz = "#b��ӭ���ٱ����������Լ�����ǿ���û�������Ƴ���ɫǿ��ϵͳ��ô��ϸ������� : \r\n#r1.����Ϊ������Ȥ��������װ��ǿ������ \r\n#r2.���Ұٷְٳɹ��������ӵ����ʣ�����\r\n3.����ǿ����Ʒ�����ռ�����ɿ�ݶ���\r\n";

            textz += "#r#L2# ���#v4251202#�����+1��\r\n";

           // textz += "#d#L3# �� #v4250602# �+ 50Hp ��";
           //textz += "#d#L4# �� #v4002002# �+ 20Mp ��\r\n";

            //textz += "#b#L0# ����#v4251201#�����+2�� ";
           // textz += "#b#L1# ����#v4251201#�ħ��+2��\r\n";


           // textz += "#b#L5# ����#v4251201#� ����+3��";
           // textz += "#b#L6# ����#v4251201#� ����+3��\r\n";
           // textz += "#b#L7# ����#v4251201#� ����+3��";
           // textz += "#b#L8# ����#v4251201#� ����+3��\r\n";


            //     textz += "#r#L1#���װ�������� #k+1��Ҫ#r1#b��#z4251200#\r\n";
            cm.sendSimple(textz);


        } else if (status == 1) {

            if (selection == 0) { //����ǿ����װ����
                if (!cm.haveItem(4251201, 1)) {
                    cm.sendOk("��Ҫ#r 1 #k��#z4251201##v4251201#");
                    cm.dispose();
} else if (!cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() !=0) {
cm.sendOk("���װ��ǿ����������");
cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("���Ҫǿ����װ�����ڵ�һ����ܽ���.");
                    cm.dispose();

                } else {

                    var statup = new java.util.ArrayList();
                    cm.gainItem(4251201, -1)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();

                    item.setUpgradeSlots(item.getUpgradeSlots() - 1);

                 item.setStr(item.getStr()+0);//����
		 item.setDex(item.getDex()+0);//����
		 item.setInt(item.getInt()+0);//����
                 item.setLuk(item.getLuk()+0);//����
                 item.setWatk(item.getWatk()+2);//������
                 item.setMatk(item.getMatk()+0);//ħ����
                 item.setHp(item.getHp() + 0); //Ѫ��
                 item.setMp(item.getMp() + 0); //����

                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
                    cm.����(4, "" + cm.getPlayer().getName() + ":     ���װ���ɹ�������+��������-�����>");

                    //	cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                    cm.dispose();
                }

            } else if (selection == 1) {
                if (!cm.haveItem(4251201, 1)) {
                    cm.sendOk("��Ҫ#r 1 #k��#z4251201##v4251201#");
                    cm.dispose();
} else if (!cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() !=0) {
cm.sendOk("���װ��ǿ����������");
cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("���Ҫǿ����װ�����ڵ�һ����ܽ���.");
                    cm.dispose();

                } else {

                    var statup = new java.util.ArrayList();
                    cm.gainItem(4251201, -1)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    item.setUpgradeSlots(item.getUpgradeSlots() - 1);

                 item.setStr(item.getStr()+0);//����
		 item.setDex(item.getDex()+0);//����
		 item.setInt(item.getInt()+0);//����
                 item.setLuk(item.getLuk()+0);//����
                 item.setWatk(item.getWatk()+0);//������
                 item.setMatk(item.getMatk()+2);//ħ����
                 item.setHp(item.getHp() + 0); //Ѫ��
                 item.setMp(item.getMp() + 0); //����

                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
                    cm.����(4, "" + cm.getPlayer().getName() + ":     ���װ���ɹ�ħ��������+��������-�����>");
                    //cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                    cm.dispose();
                }


            } else if (selection == 3) {//��Ʊ
                if (!cm.haveItem(4250602, 1)) {
                    cm.sendOk("��Ҫ#r 1 #k��#z4250602##v4250602#");
                    cm.dispose();
} else if (!cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() !=0) {
cm.sendOk("���װ��ǿ����������");
cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("���Ҫǿ����װ�����ڵ�һ����ܽ���.");
                    cm.dispose();

                } else {

                    var statup = new java.util.ArrayList();
                    cm.gainItem(4250602, -1)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    item.setUpgradeSlots(item.getUpgradeSlots() - 1);


                 item.setStr(item.getStr()+0);//����
		 item.setDex(item.getDex()+0);//����
		 item.setInt(item.getInt()+0);//����
                 item.setLuk(item.getLuk()+0);//����
                 item.setWatk(item.getWatk()+0);//������
                 item.setMatk(item.getMatk()+0);//ħ����
                 item.setHp(item.getHp() + 50); //Ѫ��
                 item.setMp(item.getMp() + 0); //����

                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
                    cm.����(4, "" + cm.getPlayer().getName() + ":     ���װ���ɹ�Hp+��0������-�����>");
                    //cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                    cm.dispose();
                }
            } else if (selection == 4) {//��Ʊ
                if (!cm.haveItem(4002002, 1)) {
                    cm.sendOk("��Ҫ#r 1 #k��#z4002002##v4002002#");
                    cm.dispose();
} else if (!cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() !=0) {
cm.sendOk("���װ��ǿ����������");
cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("���Ҫǿ����װ�����ڵ�һ����ܽ���.");
                    cm.dispose();

                } else {

                    var statup = new java.util.ArrayList();
                    cm.gainItem(4002002, -1)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    item.setUpgradeSlots(item.getUpgradeSlots() - 1);

                 item.setStr(item.getStr()+0);//����
		 item.setDex(item.getDex()+0);//����
		 item.setInt(item.getInt()+0);//����
                 item.setLuk(item.getLuk()+0);//����
                 item.setWatk(item.getWatk()+0);//������
                 item.setMatk(item.getMatk()+0);//ħ����
                 item.setHp(item.getHp() + 0); //Ѫ��
                 item.setMp(item.getMp() + 20); //����

                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
                    cm.����(4, "" + cm.getPlayer().getName() + ":     ���װ���ɹ�Mp+��0������-�����>");
                    //cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                    cm.dispose();
                }

            } else if (selection == 5) {//���
                if (!cm.haveItem(4251201, 1)) {
                    cm.sendOk("��Ҫ#r 1 #k��#z4251201##v4251201#");
                    cm.dispose();
} else if (!cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() !=0) {
cm.sendOk("���װ��ǿ����������");
cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("���Ҫǿ����װ�����ڵ�һ����ܽ���.");
                    cm.dispose();

                } else {

                    var statup = new java.util.ArrayList();
                    cm.gainItem(4251201, -1)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    item.setUpgradeSlots(item.getUpgradeSlots() - 1);

                 item.setStr(item.getStr()+3);//����
		 item.setDex(item.getDex()+0);//����
		 item.setInt(item.getInt()+0);//����
                 item.setLuk(item.getLuk()+0);//����
                 item.setWatk(item.getWatk()+0);//������
                 item.setMatk(item.getMatk()+0);//ħ����

                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
                    cm.����(4, "" + cm.getPlayer().getName() + ":     ���װ���ɹ�����+3������-�����>");
                    //cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                    cm.dispose();
                }

            } else if (selection == 6) {//���
                if (!cm.haveItem(4251201, 1)) {
                    cm.sendOk("��Ҫ#r 1 #k��#z4251201##v4251201#");
                    cm.dispose();
} else if (!cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() !=0) {
cm.sendOk("���װ��ǿ����������");
cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("���Ҫǿ����װ�����ڵ�һ����ܽ���.");
                    cm.dispose();

                } else {

                    var statup = new java.util.ArrayList();
                    cm.gainItem(4251201, -1)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    item.setUpgradeSlots(item.getUpgradeSlots() - 1);

                 item.setStr(item.getStr()+0);//����
		 item.setDex(item.getDex()+3);//����
		 item.setInt(item.getInt()+0);//����
                 item.setLuk(item.getLuk()+0);//����
                 item.setWatk(item.getWatk()+0);//������
                 item.setMatk(item.getMatk()+0);//ħ����

                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
                    cm.����(4, "" + cm.getPlayer().getName() + ":     ���װ���ɹ�����+3������-�����>");
                    //cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                    cm.dispose();
                }

            } else if (selection == 7) {//���
                if (!cm.haveItem(4251201, 1)) {
                    cm.sendOk("��Ҫ#r 1 #k��#z4251201##v4251201#");
                    cm.dispose();
} else if (!cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() !=0) {
cm.sendOk("���װ��ǿ����������");
cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("���Ҫǿ����װ�����ڵ�һ����ܽ���.");
                    cm.dispose();

                } else {

                    var statup = new java.util.ArrayList();
                    cm.gainItem(4251201, -1)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    item.setUpgradeSlots(item.getUpgradeSlots() - 1);

                 item.setStr(item.getStr()+0);//����
		 item.setDex(item.getDex()+0);//����
		 item.setInt(item.getInt()+0);//����
                 item.setLuk(item.getLuk()+3);//����
                 item.setWatk(item.getWatk()+0);//������
                 item.setMatk(item.getMatk()+0);//ħ����

                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
                    cm.����(4, "" + cm.getPlayer().getName() + ":     ���װ���ɹ�����+3������-�����>");
                    //cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                    cm.dispose();
                }

            } else if (selection == 8) {//���
                if (!cm.haveItem(4251201, 1)) {
                    cm.sendOk("��Ҫ#r 1 #k��#z4251201##v4251201#");
                    cm.dispose();
} else if (!cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() !=0) {
cm.sendOk("���װ��ǿ����������");
cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("���Ҫǿ����װ�����ڵ�һ����ܽ���.");
                    cm.dispose();

                } else {

                    var statup = new java.util.ArrayList();
                    cm.gainItem(4251201, -1)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    item.setUpgradeSlots(item.getUpgradeSlots() - 1);

                 item.setStr(item.getStr()+0);//����
		 item.setDex(item.getDex()+0);//����
		 item.setInt(item.getInt()+3);//����
                 item.setLuk(item.getLuk()+0);//����
                 item.setWatk(item.getWatk()+0);//������
                 item.setMatk(item.getMatk()+0);//ħ����

                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");
                    cm.����(4, "" + cm.getPlayer().getName() + ":     ���װ���ɹ�����+3������-�����>");
                    //cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                    cm.dispose();
                }


            } else if (selection == 2) {
                if (!cm.haveItem(�ߵ����ˮ��, 1)) {
                    cm.sendOk("��Ҫ#r 1 #k��#z4251202##v4251202#");
                    cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("��һ��û��װ��,�޷�ʹ��.");
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() == 1) {
                    cm.sendOk("��ʱװ������ʹ�øù���.");
                    cm.dispose();
                    cm.dispose();
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getLevel() >= 200) {
                    cm.sendOk("#r#e��װ��ǿ����������200�Ρ��㲻���ټ���ǿ����.");
                    cm.dispose();

                } else {
	
                    var statup = new java.util.ArrayList();
                    cm.gainItem(�ߵ����ˮ��, -1)
                    cm.gainNX(-DJ)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    var ii = MapleItemInformationProvider.getInstance();

                    item.setLocked(1);
                    //item.setLevel((item.getLevel() + 1));
                    item.setUpgradeSlots(item.getUpgradeSlots() + 1);
                    MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                    MapleInventoryManipulator.addFromDrop(cm.getChar().getClient(), item, "Edit by Kevin");

                    cm.����(4, "  ������  ǿ������ +1 �ɹ�  �����");


                    cm.sendOk("#r#eװ��ǿ��+1�ɹ�,ף����Ϸ���!#k");

                    cm.dispose();

                }



            }
        }
    }
}
