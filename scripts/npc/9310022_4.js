
var status = -1;
var itemList = Array(
         Array(5211047, 300, 1000, "˫�����鿨"),
		  Array(5360014, 500, 1000, "˫��")
        );
var selectedItem = -1;
var selequantity = -1;
var selectedCos = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "���ã���ѡ������Ҫ�һ�����Ʒ,����Ʒ������軻�߲ſ���Ч!\r\n��#r��ȯ:#r" + cm.getNX(1) + "#k��\r\n";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "# #k��Ҫ #r" + itemList[i][1] + "#k��ȯ#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selequantity = item[1];
            cm.sendYesNo("�һ� #i" + selectedItem + "# ��Ҫ #r" + selequantity + "#k��ȯ����ȷ���һ���?");//��������� �ǵû� 40000000������ţ��
        } else {
            cm.sendOk("�һ�����,����ϵ����Ա��");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selequantity <= 0 || selectedItem <= 0) {
            cm.sendOk("�һ�����,����ϵ����Ա��");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >=selequantity) {//��������� �ǵû�
            if (cm.canHold(selectedItem)) {
				cm.gainNX(-selequantity);
		var ii = MapleItemInformationProvider.getInstance();
        var type = ii.getInventoryType(selectedItem);
        var toDrop = ii.randomizeStats(ii.getEquipById(selectedItem)).copy();
        var temptime = cm.setzbsj(3*60*60*1000); 
        toDrop.setExpiration(temptime);
		MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop,false);
        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); 
                //cm.gainItem(selectedItem, 1);
                cm.sendOk("�һ��ɹ�,��Ʒ#i" + selectedItem + ":# #b#t" + selectedItem + "##k������������");
                        cm.dispose();
						} else {
                cm.sendOk("����������Ŀ������һ�����ϵĿռ�ſ��Խ��жһ���");
				cm.dispose();
            }

        } else {
            cm.sendOk("��û���㹻�ĵ�ȯ�һ���");
			            cm.dispose();
						            return;
        }
        status = -1;
    }
}
