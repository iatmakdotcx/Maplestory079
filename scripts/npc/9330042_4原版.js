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
			//text += "#e#r    ��. ��ȡ��ȯ ֮ǰ�ǵ� #b#b�Ƚ������ڳ��ռ�  #k\r\n\r\n����������Ʒ! #b#b�ۿɲ������⳥��Ӵ!!!#k\r\n\r\n\r\n"
            text += "#L1##e#d#v4031561#��ȡ   < �ع�ð�յ����������� > ѫ�� #l\r\n\r\n"//3
            text += "#L2##d#v4170007#��ȡ   <�ع�ð�յ��ٷ���֤Ů��> ѫ��#l\r\n\r\n"//3
            text += "#L3##d#v4170014#��ȡ   <�ع�ð�յ�ʷʫ������> ѫ��#l\r\n\r\n"//3
            text += "#L4##d#v4170015#��ȡ   <�ع�ð�յ�������ʹ> ѫ��#l\r\n\r\n"//3
            text += "#L5##d#v4170016#��ȡ   <�ع�ð�յ������ʹ> ѫ��#l\r\n\r\n"//3
			text += "#L6##d#v4170017#��ȡ   <����һ��ƽ��> ѫ��#l\r\n\r\n"//3
			text += "#L7##d#v4170018#��ȡ   <��������> ѫ��#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9330042, 41);
        } else if (selection == 2) {
		cm.openNpc(9330042, 42);
        } else if (selection == 3) {
		cm.openNpc(9330042, 43);
        } else if (selection == 4) {
		cm.openNpc(9330042, 44);
		} else if (selection == 5) {
		cm.openNpc(9330042, 45);
		} else if (selection == 6) {
		cm.openNpc(9330042, 46);
		} else if (selection == 7) {
		cm.openNpc(9330042, 47);
	}
    }
}


