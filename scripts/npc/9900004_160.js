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
            text += "#e#r�� ��� ����ð�յ��Ĳ���!������Ǯ���ֵ���Ϸ�𣿹��� ��һ��������Ħ�� ��ע��! .\r\n\r\n"//3
            text += "#L0##e#d  ����21��.\r\n\r\n"//3
            text += "#L1##e#d  ���������100W��.\r\n\r\n"//3
            text += "#L2##e#d  С��С�ġ�1000W��.#l\r\n\r\n"//3
            text += "#L3##e#d  �������֡�10000W��.#l\r\n"//3
            //text += "#L4##e#d#v4031227#����һ�#l\r\n"//3
            //text += "#L5##e#d#v1402046#������ڤ������#l\r\n"//3
            //text += "#L6##e#d#v1432047#������ʥǹ����#l\r\n"//3
            //text += "#L7##e#d#v1442063#������������#l\r\n"//3
            //text += "#L8##e#d#v1452057#���㾪�繭����#l\r\n"//3
            //text += "#L9##e#d#v1462050#����ڤ��������#l\r\n"//3
            //text += "#L10##e#d#v1472068#����󱯸�����#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 0) {
		cm.openNpc(9310084, 400);
        } else if (selection == 1) {
		cm.openNpc(9310084, 100);
        } else if (selection == 2) {
		cm.openNpc(9310084, 200);
        } else if (selection == 3) {
		cm.openNpc(9310084, 300);
        } else if (selection == 4) {
		cm.openNpc(9000018, 64);
        } else if (selection == 5) {
		cm.openNpc(9000018, 65);
        } else if (selection == 6) {
		cm.openNpc(9000018, 66);
        } else if (selection == 7) {
		cm.openNpc(9000018, 67);
        } else if (selection == 8) {
		cm.openNpc(9000018, 68);
        } else if (selection == 9) {
		cm.openNpc(9000018, 69);
        } else if (selection == 10) {
		cm.openNpc(9000018, 610);
	}
    }
}


