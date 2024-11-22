/*  This is mada by Kent    
 *  This source is made by Funms Team
 *  ���ܣ��ȼ�����
 *  @Author Kent
 */

var A1 = "#fUI/UIWindow/Quest/icon2/7#";
var A2 = "#fUI/UIWindow/Quest/icon2/7#";
var TX = A1;
var tx1 = "#fUI/UIWindow/Quest/icon2/7#";
var tx2 = "#fUI/UIWindow/Quest/icon2/7#";

var status = 0;
var bossid = "�ȼ����";
var giftLevel = Array(10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120);
var giftContent = Array(

//10
Array(5000066, 1, 0), //������ﰡ�ذ���
Array(5180000, 1, 0), //����ˮ

//20
Array(1022233, 1, 1), //�����ͽ�����̫���۾�

//30
Array(1032242, 1, 2), //�����ͽ����˶���

//40
Array(1113164, 1, 3), //�����ͽ����˽�ָ

//50
Array(1102612, 1, 4), //��������

//60
Array(1072853, 1, 5), //����Ь��

//70
Array(1082540, 1, 6), //��������

//80
Array(1003946, 1, 7), //����ñ��

//90
Array(1142404, 1, 8), //Ӣ����־ѫ��+
Array(1132242, 1, 8), //��������

//100
Array(1052647, 1, 9), //����ս����

//110
Array(1113034, 1, 10), //10�����ɫ��Ҷ��ָ

//120
Array(2290096, 1, 11), //ð�յ���ʿ
Array(5050000, 100, 11) //ϴ���������


);
var giftId = -1;
var giftToken = Array();
var gifts = null;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status == 0 && mode == 0) {
		cm.dispose();
		cm.openNpc(0, "��������");
		return;
	}
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		var text = "    " + tx1 + "\r\n";
		text += "#e#d-  �ȼ���������:#n#k\r\n����ȡ�ȼ�Ϊ��#e#dÿ10��һ��#n#k\r\n";
		for (var key in giftLevel) {

			//���ȼ��Ƿ�����
			if (cm.getChar().getLevel() < giftLevel[key]) {
				TX = A2;
			} else {
				TX = A1;
			}

			var tips = "";
			giftToken[key] = false;
			if (cm.getChar().getLevel() >= giftLevel[key]) {
				if (cm.getPQLog(bossid + key, 1) == 0) {
					tips = 0; //δ��ȡ
					giftToken[key] = true;
				} else {
					tips = 1; //����ȡ
				}
			}
			if (tips == 0) {
				text += "#b#L" + (parseInt(key)) + "#��ȡ#r#e" + giftLevel[key] + "#n#b���ȼ���� " + "#l#k\r\n";
			}
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		giftId = parseInt(selection);
		var text = "#r#e" + giftLevel[giftId] + "#n#b��������ݣ�\r\n";
		gifts = getGift(giftId);
		for (var key in gifts) {
			var itemId = gifts[key][0];
			var itemQuantity = gifts[key][1];
			text += "#v" + itemId + "##b#z" + itemId + "##k #rx " + itemQuantity + "#k\r\n";
		}
		text += "\r\n#d�Ƿ����ھ���ȡ�������#k";
		cm.sendYesNo(text);
	} else if (status == 2) {
		if (giftId != -1 && gifts != null) {
			if (cm.getSpace(1) < 8 || cm.getSpace(2) < 8 || cm.getSpace(3) < 8 || cm.getSpace(4) < 8 || cm.getSpace(5) < 8) {
				cm.sendOk("���ı����ռ䲻�㣬�뱣֤ÿ����λ����8��Ŀռ䣬�Ա�����ȡʧ�ܡ�");
				cm.dispose();
				return;
			}
			var job = cm.getChar().getJob();
			if ((job == 10000 || job == 10100 || job == 10110 || job == 10111 || job == 10112) && cm.getChar().getLevel() < 140) {
				cm.sendOk("��֮����Ҫ��140������ȡ��");
				cm.dispose();
				return;
			}
			if (giftToken[giftId] && cm.getPQLog(bossid + key, 1) == 0) {
				cm.setPQLog(bossid + (giftId), 1, 1);
				for (var key in gifts) {
					var itemId = gifts[key][0];
					var itemQuantity = gifts[key][1];
					cm.gainItem(itemId, itemQuantity);
				}
				cm.sendOk("��ϲ������ȡ�ɹ�����򿪰��������ɣ�");
				cm.dispose();
			} else {
				status = -1;
				cm.playerMessage(-1, "��ȡʧ��!�ȼ�δ�ﵽҪ��!!");
				cm.sendNextS(" #e#b��ѽ,�ҵĵȼ����񲻹���!!#n#k", 3);
			}
		} else {
			cm.sendOk("��ȡ��������ϵ����Ա��");
			cm.dispose();
		}
	}
}

function getGift(id) {
	var lastGiftContent = Array();
	for (var key in giftContent) {
		if (giftContent[key][2] == id) lastGiftContent.push(giftContent[key]);
	}
	return lastGiftContent;
}