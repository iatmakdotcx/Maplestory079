var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ttt = "#fUI/UIWindow.img/Quest/icon9/0#";
var xxx = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var ��ɫ = "#fEffect/CharacterEff/1114000/2/0#";
var status = 0;
var fstype = 0;

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

            var textz = "#rʹ��ˮ��������������ǿ��װ��.�м���ʧ��.ף������! #k\r\nע��:װ����ŵ�һ��#rǿ���ɹ���۳���������!#k\r\n#r�����Ƿ�ɹ��������� 1 ��#v2049100#\r\n";

            textz += "------------------------------------------------------\r\n";
			textz += "#b#L4#" + ��ɫ + "ʹ��10��#z4005004##v4005004#����3��ȫ����2�㹥��/ħ��\r\n";
			
            textz += "#b#L0#" + ��ɫ + "ʹ��6��#z4005000##v4005000#����װ��3������2�㹥��\r\n";

            textz += "#b#L1#" + ��ɫ + "ʹ��6��#z4005001##v4005001#����װ��3������2��ħ��\r\n";

            textz += "#b#L2#" + ��ɫ + "ʹ��6��#z4005002##v4005002#����װ��3������2�㹥��\r\n";

            textz += "#b#L3#" + ��ɫ + "ʹ��6��#z4005003##v4005003#����װ��3������2�㹥��\r\n";

            

            //textz += "#r#L5#" + ��ɫ + "ʹ��#v4031891#��Һ�#v4001126#��Ҷ���װ����ǿ������\r\n           #r����ʧ�ܻ�۳�����������!\r\n\r\n";

            //textz += "#r#L6#" + ��ɫ + "ʹ��#v4031891#��Һ�#v4000463#��������װ����ǿ������\r\n           #r��ѡ��100%�ɹ�!\r\n";

            //textz += "#r#L5#" + ��ɫ�ǵ� + "��1��������������װ��100HP��100%�ɹ��������غϣ�\r\n";

            //textz += "#r#L6#" + ��ɫ�ǵ� + "��1��������������װ��200HP��100%�ɹ��������غϣ�\r\n";

            //textz += "#r#L7#" + ��ɫ�ǵ� + "��1������֮������װ����ά10��100%�ɹ����۳��غϣ�\r\n";

            //textz += "#r#L8#" + ��ɫ�ǵ� + "��1��ʱ��֮������װ������10��100%�ɹ����۳��غϣ�\r\n";


            cm.sendSimple(textz);

            //----------------------------------------------------------------------------------------------------------------------------------------------
            //----------------------------------------------------------------------------------------------------------------------------------------------
        } else if (status == 1) {

            if (selection == 0) { //����ˮ��
                fstype = 0;
                cm.sendNext("��Ŀǰѡ�����������ˮ������װ��3������2�㹥�����м���ʧ�ܣ�ʧ���˻�3�����ɹ��˻غϼ�1��\r\n#rǿ����װ��Ϊװ������һ������ϸȷ�ϣ�ǿ����װ���Ų�����");

            } else if (selection == 1) { //�ǻ�ˮ��
                fstype = 1;
                cm.sendNext("��Ŀǰѡ��������ǻ�ˮ������װ��3������2��ħ�����м���ʧ�ܣ�ʧ���˻�һ�룬�ɹ��˻غϼ�1��\r\n#rǿ����װ��Ϊװ������һ������ϸȷ�ϣ�ǿ����װ���Ų�����");

            } else if (selection == 2) { //����ˮ��
                fstype = 2;
                cm.sendNext("��Ŀǰѡ�����������ˮ������װ��3������2�㹥�����м���ʧ�ܣ�ʧ���˻�һ�룬�ɹ��˻غϼ�1��\r\n#rǿ����װ��Ϊװ������һ������ϸȷ�ϣ�ǿ����װ���Ų�����");

            } else if (selection == 3) { //����ˮ��
                fstype = 3;
                cm.sendNext("��Ŀǰѡ�����������ˮ������װ��3������2�㹥�����м���ʧ�ܣ�ʧ���˻�һ�룬�ɹ��˻غϼ�1��\r\n#rǿ����װ��Ϊװ������һ������ϸȷ�ϣ�ǿ����װ���Ų�����");

            } else if (selection == 4) { //�ڰ�ˮ��
                fstype = 4;
                cm.sendNext("��Ŀǰѡ������úڰ�ˮ������װ��3��ȫ����2�㹥��/ħ�����м���ʧ�ܣ�ʧ���˻�һ�룬�ɹ��˻غϼ�1��\r\n#rǿ����װ��Ϊװ������һ������ϸȷ�ϣ�ǿ����װ���Ų�����");

            } else if (selection == 5) { //����
                cm.dispose();
                //cm.openNpc(2131006,101);
            } else if (selection == 6) { //����
                cm.dispose();
                //cm.openNpc(2131006,102);
            } else if (selection == 7) { //������
                fstype = 7;
                cm.sendNext("��Ŀǰѡ������ú���֮������װ����ά��10.�ӹ���2000���100%�ɹ����غϼ�1��");

            } else if (selection == 8) { //������
                fstype = 8;
                cm.sendNext("��Ŀǰѡ�������ʱ��֮ʯ����װ��������ħ����10.�ӹ���2000���100%�ɹ����غϼ�1��");
            }

            //----------------------------------------------------------------------------------------------------------------------------------------------
            //----------------------------------------------------------------------------------------------------------------------------------------------

        } else if (status == 2) {

            if (fstype == 0) { //����ĸ��
                fstype = 0;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();

                }
            }

            if (fstype == 1) { //�ǻ�ĸ��
                fstype = 1;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();
                }
            }

            if (fstype == 2) { //����ĸ��
                fstype = 2;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();
                }
            }

            if (fstype == 3) { //����ĸ��
                fstype = 3;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();
                }
            }
            if (fstype == 9) { //����ĸ��
                fstype = 9;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();
                }
            }

            if (fstype == 4) {
                fstype = 4;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();
                }
            }

            if (fstype == 5) { //����ĸ��
                fstype = 5;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();
                }
            }

            if (fstype == 6) { //����ĸ��
                fstype = 6;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();
                }
            }

            if (fstype == 7) { //����ĸ��
                fstype = 7;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();
                }
            }

            if (fstype == 8) { //����ĸ��
                fstype = 8;
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();
                }
            }

            //----------------------------------------------------------------------------------------------------------------------------------------------
            //----------------------------------------------------------------------------------------------------------------------------------------------
            if (fstype == 0) {
                if (!cm.haveItem(4005000, 6) || !cm.haveItem(2049100, 1)) {
                    cm.sendOk("�����#r 6 #k��#z4005000##v4005000# �� 1 #k��#z2049100##v2049100#");
                    cm.dispose();
                } else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <= 0) {
                    cm.sendOk("��������û�ˣ��޷�ǿ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();
                } else {
                    var chance = Math.floor(Math.random() * 5);
                    if (chance <= 2) {
                        var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                        var statup = new java.util.ArrayList();
                        item.setStr(item.getStr() + 3);
                        item.setWatk(item.getWatk() + 2);
                        item.setUpgradeSlots((item.getUpgradeSlots() - 1));
                        item.setLevel(item.getLevel() + 1);
                        cm.gainItem(4005000, -6);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                        cm.serverNotice("��ˮ��ǿ��������ϲ" + cm.getChar().getName() + "        ʹ��6������ˮ��Ϊװ������3������2�㹥��");
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    } else {
                        cm.gainItem(4005000, -6);
                        cm.gainItem(4005000, 3);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("ǿ��ʧ�ܣ��˻���3������ˮ��");
                    }
					status = -1;
                }

            } else if (fstype == 1) {
                if (!cm.haveItem(4005001, 6) || !cm.haveItem(2049100, 1)) {
                    cm.sendOk("�����#r 6 #k��#z4005001##v4005001# �� 1 #k��#z2049100##v2049100#");
                    cm.dispose();
                } else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <= 0) {
                    cm.sendOk("��������û�ˣ��޷�ǿ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();

                } else {

                    var chance = Math.floor(Math.random() * 5);
                    if (chance <= 1) {
                        var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                        var statup = new java.util.ArrayList();
                        item.setInt(item.getInt() + 3);
                        item.setMatk(item.getMatk() + 2);
                        item.setUpgradeSlots((item.getUpgradeSlots() - 1));
                        item.setLevel(item.getLevel() + 1);
                        cm.gainItem(4005001, -6);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                        cm.serverNotice("��ˮ��ǿ��װ��������ϲ" + cm.getChar().getName() + "        ʹ��6���ǻ�ˮ��Ϊװ������3������2��ħ��");
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    } else {
                        cm.gainItem(4005001, -6);
                        cm.gainItem(4005001, 3);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("ǿ��ʧ�ܣ��˻���3���ǻ�ˮ��");
                    }
					status = -1;
                }

            } else if (fstype == 2) {
                if (!cm.haveItem(4005002, 6) || !cm.haveItem(2049100, 1)) {
                    cm.sendOk("�����#r 6 #k��#z4005002##v4005002# �� 1 #k��#z2049100##v2049100#");
                    cm.dispose();
                } else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <= 0) {
                    cm.sendOk("��������û�ˣ��޷�ǿ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();

                } else {

                    var chance = Math.floor(Math.random() * 5);
                    if (chance <= 2) {
                        var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                        var statup = new java.util.ArrayList();
                        item.setDex(item.getDex() + 3);
                        item.setWatk(item.getWatk() + 2);
                        item.setUpgradeSlots((item.getUpgradeSlots() - 1));
                        item.setLevel(item.getLevel() + 1);
                        cm.gainItem(4005002, -6);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                        cm.serverNotice("��ˮ��ǿ��װ��������ϲ" + cm.getChar().getName() + "        ʹ��6������ˮ��Ϊװ������3������2�㹥��");
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    } else {
                        cm.gainItem(4005002, -6);
                        cm.gainItem(4005002, 3);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("ǿ��ʧ�ܣ��˻���3������ˮ��");
                    }
					status = -1;
                }

            } else if (fstype == 3) {
                if (!cm.haveItem(4005003, 6) || !cm.haveItem(2049100, 1)) {
                    cm.sendOk("�����#r 6 #k��#z4005003##v4005003# �� 1 #k��#z2049100##v2049100#");
                    cm.dispose();
                } else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <= 0) {
                    cm.sendOk("��������û�ˣ��޷�ǿ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();

                } else {

                    var chance = Math.floor(Math.random() * 5);
                    if (chance <= 2) {
                        var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                        var statup = new java.util.ArrayList();
                        item.setLuk(item.getLuk() + 3);
                        item.setWatk(item.getWatk() + 2);
                        item.setUpgradeSlots((item.getUpgradeSlots() - 1));
                        item.setLevel(item.getLevel() + 1);
                        cm.gainItem(4005003, -6);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                        cm.serverNotice("��ˮ��ǿ��װ��������ϲ" + cm.getChar().getName() + "        ʹ��6������ˮ��Ϊװ������3������2�㹥��");
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    } else {
                        cm.gainItem(4005003, -6);
                        cm.gainItem(4005003, 3);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("ǿ��ʧ�ܣ��˻���3������ˮ��");
                    }
					status = -1;
                }

            } else if (fstype == 4) {
                if (!cm.haveItem(4005004, 10) || !cm.haveItem(2049100, 1)) {
                    cm.sendOk("�����#r 10 #k��#z4005004##v4005004# �� 1 #k��#z2049100##v2049100#");
                    cm.dispose();
                } else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <= 0) {
                    cm.sendOk("��������û�ˣ��޷�ǿ��!");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("�̳ǵ����Ʒ�ݲ�֧��.");
                    cm.dispose();
                } else {
                    var chance = Math.floor(Math.random() * 5);
                    if (chance <= 1) {
                        var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                        var statup = new java.util.ArrayList();
                        item.setStr(item.getStr() + 3);
                        item.setDex(item.getDex() + 3);
                        item.setInt(item.getInt() + 3);
                        item.setLuk(item.getLuk() + 3);
                        item.setWatk(item.getWatk() + 2);
                        item.setMatk(item.getMatk() + 2);
                        item.setUpgradeSlots((item.getUpgradeSlots() - 1));
                        item.setLevel(item.getLevel() + 1);
                        cm.gainItem(4005004, -10);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                        cm.serverNotice("��ˮ��ǿ��װ��������ϲ" + cm.getChar().getName() + "        ʹ��10���ڰ�ˮ��Ϊװ������3��ȫ����2�㹥��");
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    } else {
                        cm.gainItem(4005004, -10);
                        cm.gainItem(4005004, 5);
                        cm.gainItem(2049100, -1);
                        cm.sendOk("ǿ��ʧ�ܣ��˻���5���ڰ�ˮ��");
                    }
					status = -1;
                }

            } else if (fstype == 5) {
                if (!cm.haveItem(4001085, 1)) {
                    cm.sendOk("�����#r 1 #k��#z4001085##v4001085#");
                    cm.dispose();
                } else if (cm.getMeso() <= 5000000) {
                    cm.sendOk("�����500��ӹ���");
                    cm.dispose();
                    //}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    // cm.sendOk("��������û�ˣ��޷�ǿ��!");
                    //cm.dispose();

                } else {

                    //var chance = Math.floor(Math.random() * 3);
                    // if (chance <= 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setHp(item.getHp() + 100);
                    //item.setUpgradeSlots((item.getUpgradeSlots() - 1));
                    cm.gainItem(4001085, -1);
                    cm.gainMeso(-5000000);
                    cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                    cm.serverNotice("������ǿ��װ��������ϲ" + cm.getChar().getName() + "        ʹ��1����������Ϊװ������100HP");
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    //} else {
                    //cm.gainItem(4004003,-5);
                    //cm.sendOk("ǿ��ʧ�ܣ��˻���5������ĸ��");
                    //}
					status = -1;
                    //cm.dispose();
                }

            } else if (fstype == 6) {
                if (!cm.haveItem(4001083, 1)) {
                    cm.sendOk("�����#r 1 #k��#z4001083##v4001083#");
                    cm.dispose();
                } else if (cm.getMeso() <= 5000000) {
                    cm.sendOk("�����500��ӹ���");
                    cm.dispose();
                    //}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    // cm.sendOk("��������û�ˣ��޷�ǿ��!");
                    //cm.dispose();

                } else {

                    //var chance = Math.floor(Math.random() * 3);
                    // if (chance <= 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setHp(item.getHp() + 200);
                    //item.setUpgradeSlots((item.getUpgradeSlots() - 1));
                    cm.gainItem(4001083, -1);
                    cm.gainMeso(-10000000);
                    cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                    cm.serverNotice("������ǿ��װ��������ϲ" + cm.getChar().getName() + "        ʹ��1����������Ϊװ������200HP");
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    //} else {
                    //cm.gainItem(4004003,-5);
                    //cm.sendOk("ǿ��ʧ�ܣ��˻���5������ĸ��");
                    //}
					status = -1;
                    //cm.dispose();
                }

            } else if (fstype == 7) {
                if (!cm.haveItem(4001430, 1)) {
                    cm.sendOk("�����#r 1 #k��#z4001430##v4001430#");
                    cm.dispose();
                } else if (cm.getPlayer().getNX() <= 2000) {
                    cm.sendOk("�����2000���");
                    cm.dispose();
                    //}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    // cm.sendOk("��������û�ˣ��޷�ǿ��!");
                    //cm.dispose();

                } else {

                    //var chance = Math.floor(Math.random() * 3);
                    // if (chance <= 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setUpgradeSlots((item.getUpgradeSlots() - 1));
                    item.setStr(item.getStr() + 10); //����װ��10����
                    item.setDex(item.getDex() + 10); //����װ��10����
                    item.setInt(item.getInt() + 10); //����װ��10����
                    item.setLuk(item.getLuk() + 10); //����װ��10����
                    cm.gainItem(4001430, -1);
                    cm.gainNX(-2000);
                    cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                    cm.serverNotice("������֮��ǿ��װ��������ϲ" + cm.getChar().getName() + "        ʹ��1������֮��Ϊװ��������ά��10");
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    //} else {
                    //cm.gainItem(4004003,-5);
                    //cm.sendOk("ǿ��ʧ�ܣ��˻���5������ĸ��");
                    //}
					status = -1;
                    //cm.dispose();
                }

            } else if (fstype == 8) {
                if (!cm.haveItem(4021010, 1)) {
                    cm.sendOk("�����#r 1 #k��#z4021010##v4021010#");
                    cm.dispose();
                } else if (cm.getPlayer().getNX() <= 2000) {
                    cm.sendOk("�����2000���");
                    cm.dispose();
                    //}else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    // cm.sendOk("��������û�ˣ��޷�ǿ��!");
                    //cm.dispose();

                } else {

                    //var chance = Math.floor(Math.random() * 3);
                    // if (chance <= 1) {
                    var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                    var statup = new java.util.ArrayList();
                    item.setUpgradeSlots((item.getUpgradeSlots() - 1));
                    item.setWatk(item.getWatk() + 10);
                    item.setMatk(item.getMatk() + 10);
                    cm.gainItem(4021010, -1);
                    cm.gainNX(-2000);
                    cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k");
                    cm.serverNotice("������֮��ǿ��װ��������ϲ" + cm.getChar().getName() + "        ʹ��1��ʱ��֮ʯΪװ�����ӹ���10");
                    Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                    Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                    //} else {
                    //cm.gainItem(4004003,-5);
                    //cm.sendOk("ǿ��ʧ�ܣ��˻���5������ĸ��");
                    //}
					status = -1;
                    //cm.dispose();
                }

            }
        }
    }
}