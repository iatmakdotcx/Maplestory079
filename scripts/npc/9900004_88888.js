function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += " \t\t\t#e#d��ӭ����#r����ϵͳ#k#n\r\n"

            text += "\t\t\t#e#d��ǰ����ʱ�䣺" + cm.getGamePoints() + "����#k#n\r\n\r\n"
                 
			 				   
            text += " #b#L3##b��ʯ����#l #b#L344##r�������#l #b#L33##bװ������#l #b#L34##rװ������2#l \r\n"            //#L10#��ֵ���#l #L12#����Ч��#l
			//text += " #l\r\n"//#L11#���Ե�װ#l  #L10#ϡ�з���#l
			
		//	text += " #L3#ÿ������#l\r\n\r\n"
			//text += " #L4#��������#l\r\n\r\n"
			//text += " #L6#ÿ�մ���#l\r\n\r\n"

        //    text += " #L5#��ȡǩ������#l \r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.openNpc(9900004, 1009);
			
			} else if (selection == 33) {
            cm.openNpc(9900004, 8888888);
			
		} else if (selection == 34) {
            cm.openNpc(9900004, 88888888);	
			
			} else if (selection == 344) {
            cm.openNpc(2010000, 0);	
			
		} else if (selection == 11) {
            cm.openNpc(9900004, 1011);	

		} else if (selection == 12) {
            cm.openNpc(9900004, 1012);

		} else if (selection == 13) {
            cm.openNpc(9900004, 1013);

		} else if (selection == 14) {
            cm.openNpc(9900004, 1023);		

        } else if (selection == 2) {
            if (cm.getBossLog("vipqiandao") == 0 && cm.haveItem(3700148, 1)) {//��ȡ���ǩ��״̬
                cm.setBossLog('vipqiandao');//����ǩ������
                cm.getPlayer().gainqiandao(1);
                cm.sendOk("��ϲǩ���ɹ���");
				cm.gainDY(300)
                cm.����(1, "[ÿ��ǩ��]��" + cm.getPlayer().getName() + "�������ѳɹ�ǩ��������+300.��ǰ��ǩ������Ϊ��" + cm.getPlayer().getqiandao() + "��.");
                cm.dispose();
            } else {
                cm.sendOk("��������ǩ�����ˣ�");
                cm.dispose();
            }
            // cm.openNpc(9900004, 1112);

        } else if (selection == 3) {
            cm.openNpc(9900004, 888888);

        } else if (selection == 4) {
            cm.openNpc(9900004, 1114);

        } else if (selection == 5) {
            cm.openNpc(9900004, 1112);
			
        } else if (selection == 6) {
            cm.openNpc(9900004, 1113);
        }
    }
}
