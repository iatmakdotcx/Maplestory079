
/*  
 
 NPC��Ȩ:                ǧѩ�ع�ð�յ� 	        
 NPC����: 		        �ۺ�NPC
 �����ˣ�����ؼ
 */

var status = -1;
var itemList = Array(
        Array(1302275, 10000, 180, "����������֮��"),
        Array(1402196, 10000, 180, "���������֮��"),
        Array(1312153, 10000, 180, "������˫�����⸫"),
        Array(1412135, 10000, 180, "������ս�����⸫"),
        Array(1322203, 10000, 180, "�����ɸ���ϴ�"),
        Array(1422140, 10000, 180, "���������紸��ǹ"),
        Array(1432167, 10000, 180, "�����ɹ���ǹì"),
        Array(1442223, 10000, 180, "�����ɹ���ǹì"),
        Array(1432167, 10000, 180, "�����ɰ��¿��и���"),
        Array(1452205, 10000, 180, "������׷������"),
        Array(1462193, 10000, 180, "�����ɷ�����"),
        Array(1332225, 10000, 180, "�����ɴ���ʿ�｣ì"),
        Array(1472214, 10000, 180, "������Σ��֮��"),
        Array(1482168, 10000, 180, "�����ɾ���֮צ"),
        Array(1492179, 10000, 180, "����������ǹ"),
        Array(1372177, 10000, 180, "������ħ����ȡ��"),
        Array(1382208, 10000, 180, "������ħ��֮��"),
        Array(1302333, 12000, 200, "��������˹����"),
        Array(1402251, 12000, 200, "��������˹���"),
        Array(1312199, 12000, 200, "��������˹ս��"),
        Array(1412177, 12000, 200, "��������˹��"),
        Array(1322250, 12000, 200, "��������˹ս��"),
        Array(1422184, 12000, 200, "��������˹��"),
        Array(1432214, 12000, 200, "��������˹��͸ì"),
        Array(1442268, 12000, 200, "��������˹���鿪ɽ��"),
        Array(1452252, 12000, 200, "��������˹��"),
        Array(1462239, 12000, 200, "��������˹��"),
        Array(1332274, 12000, 200, "��������˹����ն"),
        Array(1472261, 12000, 200, "��������˹����ȭ"),
        Array(1492231, 12000, 200, "��������˹ǹ"),
        Array(1482216, 12000, 200, "��������˹ȭ��"),
        Array(1372222, 12000, 200, "��������˹����"),
        Array(1382259, 12000, 200, "��������˹����")

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
                cm.gainItem(selectedItem, 1);
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
