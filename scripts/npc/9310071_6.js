/*
 �ű�������QQ 121418194
 �۸������ӭ����
 ˵����������poss=10���Ǹ��ʣ�10����1/10��1����1/1������100%
 */

var status;
var text;
var selstatus = -1;
var itemList = new Array();
var inventoryType;
var deleteSlot;
var deleteQuantity;
var poss=5;//���ʣ�10����1/10��1����1/1������100%

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode <= 0) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }

        if (status == 0) {
			text = "\t	#e��ӭ����#b�ع˻���ð�յ� #k#r���߲�������!#n\r\n";
			text += "\r\n\t#r�淨���� ��#k һ����עһ����Ʒ���жĲ�,�м��ʻ��˫����Ʒ�Ľ���,ʧ������ʧ��Ʒ.";
			text += "\r\n#L0##e#d��Ҫʹ��ָ��������ע#l\r\n";
            text += "\r\n\r\n\r\n\r\n";
            cm.sendSimple(text);
        } else {
            if (selstatus == -1) {
                selstatus = selection;
            }
            switch (selstatus) {
                case 0:
                    deleteItemBySlot(selection);
                    break;
                case 1:
                    cm.openNpc(cm.getNpc(), 501);
            }
        }
    }
}

function deleteItemBySlot(selection) {
    if (status == 1) {
        text = "#e ��ѡ��Ҫ��ע�ĵ������� #n\r\n#d#e";
        text += "\t#L1#װ����#l\r\n";
        text += "\t#L2#������#l\r\n";
        text += "\t#L4#������#l\r\n";
        text += "\t#L3#������#l\r\n";
        text += "\t#L5#������#l\r\n";
        cm.sendSimple(text);
    } else if (status == 2) {
        inventoryType = selection;
        itemList = cm.getInventory(inventoryType).list().iterator();
        text = "#e ��ѡ����Ҫ��ע�ĵ��� #n\r\n\r\n#b";
        var indexof = 1;
        while (itemList.hasNext()) {
            var item = itemList.next();
            text += "#L" + item.getPosition() + "##v" + item.getItemId() + "#";
            if (indexof > 1 && indexof % 5 == 0) {
                text += "\r\n";
            }
            indexof++;
        }
        cm.sendSimple(text);
    } else if (status == 3) {
		daoju = selection
		if(cm.getInventory(inventoryType).getItem(daoju).getExpiration() != -1) {
			cm.sendOk("��ʱװ������������ע.");
			cm.dispose();
			return;
		}
		if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull() && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
			cm.sendOk("#b�뱣֤ÿ����λ�����пո�,�����޷���ȡ.");
			cm.dispose();
			return;
		}
        var item = cm.getInventory(inventoryType).getItem(daoju);
        text = "#eȷ��Ҫʹ��#r#v" + item.getItemId() + "##z" + item.getItemId() + "# 1��#k������ע��";
        cm.sendNextPrev(text);
    } else if (status == 4) {
		var item = cm.getInventory(inventoryType).getItem(daoju);
		var sj = Math.floor(Math.random()*poss);
		if(item.getItemId()>=2070000&&item.getItemId()<=2070020){
			cm.sendOk("������߲��ܽ��иò�����");
			cm.dispose();
			return;
		}
		if(sj==1){
		cm.gainItem(item.getItemId(),1);
		cm.gainItem(item.getItemId(),1);
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�����ʹ��桻" + " : " + cm.getPlayer().getName() +" ��ϲ���ڵ��߲����У������˫���ĵ��߻�����",true).getBytes());
		cm.dispose();
		}else {
        cm.removeSlot(inventoryType, daoju, 1);
        cm.sendOk("���ź�����ʧ���ˣ����߸���˵�ݰ��ˣ�����һ�ΰɣ�");
        status = 0;
		cm.dispose();
		}
		cm.dispose();
    }
}
