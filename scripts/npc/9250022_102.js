/**
 * @��������������������
 * @ÿ��ǩ������ȡ��Ʒ npc
 * @npcName���ع�ð�յ���ӪԱ
 * @npcID��   9900004
 **/
//importPackage(net.sf.cherry.client);
var status = 0;
var ��ˮ�� = 4021008;
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var �Ҹ� = "#k��ܰ��ʾ���κηǷ��������ҷ�Ŵ���.��ɱ��������.";
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
	    var a1 = "#L1#" + ������ͷ + "#r������սʿð��֮�ġ�#l\r\n\r\n";
	    var a2 = "#L2#" + ������ͷ + "#r����������ð��֮�ġ�#l\r\n\r\n";
	    var a3 = "#L4#" + ������ͷ + "#r����������ð��֮�ġ�#l\r\n\r\n";
	    var a4 = "#L3#" + ������ͷ + "#r��������ʦð��֮�ġ�#l\r\n\r\n";
	    var a5 = "#L5#" + ������ͷ + "#r����������ð��֮�ġ�#l\r\n\r\n";

            cm.sendSimple("#d��һ����ʿ��һ����������ʿ���͸��������Լ���װ�����ҿ��԰�������#rװ��#dֻҪ���в���!!!\r\n��ȯ�����: #r" + cm.getChar().getNX() + "\r\n"+a1+""+a2+""+a3+""+a4+""+a5+"");

	    } else if (selection == 1) {//սʿ
		cm.openNpc(9250022, 36);
	    } else if (selection == 2) {//����
		cm.openNpc(9250022, 37);
	    } else if (selection == 3) {//��ʦ
		cm.openNpc(9250022, 39);
	    } else if (selection == 4) {//����
		cm.openNpc(9250022, 38);
	    } else if (selection == 5) {//����
		cm.openNpc(9250022, 40);
	    }
        
    }
}
