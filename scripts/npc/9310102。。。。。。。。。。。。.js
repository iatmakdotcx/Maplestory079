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
            text += "#e#r����������԰���������ǿ��������Ҫ�ĵ��ߣ��������ҿ���Ϊ������ĵ����б�.\r\n\r\n#b��ѡ����Ҫ������ǿ����װ��\r\n\r\n"//3
            text += "#L1##e#d#v1003946#����ñ��[��ά+7] [��ħ+5] [HP/MP+200] \r\n"//3
            text += "#L2##e#d#v1082540#��������[��ά+7] [��ħ+3] [HP/MP+50]#l\r\n"//3
            text += "#L3##e#d#v1072853#����Ь��[��ά+7] [��ħ+3] [HP/MP+50]#l\r\n"//3
            text += "#L4##e#d#v1102612#��������[��ά+10] [��ħ+10] [HP/MP+200]#l\r\n"//3
            text += "#L5##e#d#v1132242#��������[��ά+15] [��ħ+8] [HP/MP+200]#l\r\n"//3
            text += "#L6##e#d#v1052647#����ս����[��ά+25] [��ħ+15] [HP/MP+300]#l\r\n"//3
            //text += "#L7##e#d#v1452100#�ƽ��Ҷ��#l\r\n"//3
            //text += "#L8##e#d#v1462085#�ƽ��Ҷ��#l\r\n"//3
            //text += "#L9##e#d#v1472111#�ƽ��Ҷȭ��#l\r\n"//3
            //text += "#L10##e#d#v1482073#�ƽ��Ҷָ��#l\r\n"//3
            //text += "#L11##e#d#v1492073#�ƽ��Ҷ��ǹ#l\r\n"//3
            //text += "#L12##e#d#v1372071#�ƽ��Ҷ����#l\r\n"//3
            //text += "#L13##e#d#v1412055##z1412055#�ƽ��Ҷ˫�ָ�����#l\r\n"//3
            //text += "#L14##e#d#v1422057##z1422057#�ƽ��Ҷ˫�ִ�����#l\r\n"//3
            //text += "#L15##e#d#v1482073#�ƽ��Ҷָ������#l\r\n"//3
            //text += "#L16##e#d#v1492073##z1492073#�ƽ��Ҷ��ǹ����#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9310073, 560);
        } else if (selection == 2) {
		cm.openNpc(9310073, 561);
        } else if (selection == 3) {
		cm.openNpc(9310073, 562);
        } else if (selection == 4) {
		cm.openNpc(9310073, 563);
        } else if (selection == 5) {
		cm.openNpc(9310073, 564);
        } else if (selection == 6) {
		cm.openNpc(9310073, 565);
        } else if (selection == 7) {
		cm.openNpc(9310073, 567);
        } else if (selection == 8) {
		cm.openNpc(9310073, 568);
        } else if (selection == 9) {
		cm.openNpc(9310073, 538);
        } else if (selection == 10) {
		cm.openNpc(9310073, 539);
        } else if (selection == 11) {
		cm.openNpc(9900004, 540);
        } else if (selection == 12) {
		cm.openNpc(9900004, 541);
        } else if (selection == 13) {
		cm.openNpc(9900004, 542);
        } else if (selection == 14) {
		cm.openNpc(9900004, 314);
        } else if (selection == 15) {
		cm.openNpc(9900004, 315);
        } else if (selection == 16) {
		cm.openNpc(9900004, 316);
	}
    }
}


