
/*  
 
 NPC��Ȩ:                ǧѩ�ع�ð�յ� 	        
 NPC����: 		        �ۺ�NPC
 �����ˣ�����ؼ
 */

var status = -1;
var itemList = Array(
        Array(1002140, 500000, 200, "ά����ñ"),
        Array(1022152, 200000, 200, "ʢ������"),
        Array(1112932, 50000, 80, "�Ϲ����Ž�ָLV50"),
        Array(1003755, 50000, 80, "���ް�ѩ"),
        Array(1102689, 50000, 80, "�޷�����֮������"),
        Array(1102382, 50000, 80, "���桤��ҮĪ������"),
        Array(1102383, 50000, 80, "���桤���������"),
        Array(1102354, 50000, 80, "��������"),
        Array(1102163, 50000, 80, "��������"),
        Array(1102246, 50000, 80, "��ѩ����"),
        Array(1102489, 50000, 80, "��Ѫ������"),
        Array(1102601, 80000, 80, "�Ȳ���˫�ֽ�")

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
        var selStr = "���ã���ѡ������Ҫ�һ�����Ʒ                          ��#r��ȯ:#r" + cm.getNX(1) + "#k��\r\n";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "# #k��Ҫ #r" + itemList[i][1] + "#k��ȯ ʣ��"+ cm.getxg(itemList[i][0]) +"��#l";
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
                     if (cm.getxg(selectedItem)>0) {
           if (cm.canHold(selectedItem)) {
				cm.gainNX(-selequantity);
				cm.gainxg(selectedItem,-1);
                cm.gainItem(selectedItem, 1);
                cm.sendOk("�һ��ɹ�,��Ʒ#i" + selectedItem + ":# #b#t" + selectedItem + "##k������������");
                        cm.dispose();
						} else {
                cm.sendOk("����������Ŀ������һ�����ϵĿռ�ſ��Խ��жһ���");
						cm.dispose();
						}
						
            } else {
                cm.sendOk("�Ѿ�������");
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
