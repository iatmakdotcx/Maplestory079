1var status = 0;
var fstype = 0;
var itemid = 4251202; //���ǵİ��ļ�֤
var itemnum = 2; //���ǵİ��ļ�֤������
var types = new Array("װ����", "������", "������", "������", "�ֽ���");
var ���� = "#fEffect/CharacterEff/1022223/4/0#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) status++;
        if (status == 0) {

            cm.sendNext("ΰ���#b#h ##k,�ҵ�ID�ǣ�" + cm.getNpc() + ".\r\n#b�������#v4251202#*2 �ҿ��԰�������һ��װ��ǿ������");

        } else if (status == 1) {
            cm.sendSimple("���Ǳ���Ψһ��װ��ǿ���������NPC���뽫��Ҫǿ����װ�����õ�һ��#r���������125�Σ���#e\r\n#b#L0#����װ���Ҿ����#l");
        } else if (status == 2) {
            if (selection == 0) {
                fstype = 1;
                cm.sendNext("��Ŀǰѡ�����#r����װ���Ҿ����#k,�����Ŀǰ��Ҫ" + itemnum + "��#z" + itemid + "#,#b#k,%100�ɹ�,.");
            } else if (selection == 1) {
                var a = "���,������Ҫ�����һ����,Ŀǰ������ѵ�Ӵ��\r\n#b"
                for (var i = 0; i < types.length; i++) {
                    a += "\r\n#L" + i + "#" + types[i] + "";
                }
                cm.sendSimple(a);
                fstype = 2;
            }

        } else if (status == 3) {
            if (fstype == 1) {
                fstype = 3;
                var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("�Բ���,��װ������һ��û��װ��!");
                    cm.dispose();
                } else {
                    cm.sendNext("���װװ������װ�����ڵĵ�һ�񣬷����㽫���ܳɹ�.\r\n��ȷ��һ����Ҫ�ҵ�װ���ǣ�#v" + item.getItemId() + "#��\r\n #rps:������Ǿͼ��������һ������..");
                }

            }
        } else if (status == 4) {
            if (fstype == 3) {
                var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
                if (item.getUpgradeSlots() >= 125) {
                    cm.sendOk("�Բ���,���ֻ������125��!");
                    cm.dispose();
                } else {
                    if (cm.haveItem(itemid, itemnum)) {
                        var statup = new java.util.ArrayList();
                        item.setUpgradeSlots((item.getUpgradeSlots() + 1));
                        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
                        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
                        cm.gainItem(itemid, -itemnum);
                    cm.worldMessage("[װ������]����ϲ[" + cm.getChar().getName() + "]ʹ��ǿ��ˮ��Ϊװ��������1���Ҿ����");
                        cm.sendOk("#b��ϲ��ɹ���!��쿴��İ�����!#k");
                        cm.dispose();
                    } else {
                        cm.sendOk("�Բ���,��û���㹻��#z" + itemid + "#..");
                        cm.dispose();
                    }
                }

            }
        }
    }
}