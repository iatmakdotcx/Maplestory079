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
		
	
			//if(cm.getPlayer().getMapId() == 10000){
	//cm.sendOk("�����Աߵ�npc��ȡ���ֽ�������ʹ������");
//cm.dispose();
//return;
//}		
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            //text += "                    #n#d��ӭ�����ع�ð�յ�\r\n               #v3994071##v3994071##v3994071##v3994082##v3994062#\r\n"//1
            text += "                 #n#d#r��������ʱ����" +cm.getGamePoints()+" ����\r\n"//2
			text += "#n#kԪ����#r " + cm.getHyPay(1) + "Ԫ#k\t\t�����㣺#r" + cm.getDojoPoints() + " ��#k\t\t������#r��#k\r\n"//3
			text += "#n#k��ȯ��#r" + cm.getNX(1) + "��#k\t ���þ�#r"+cm.getNX(2)+"��#k\r\n"//3
			text += "#L1##e#d�ص�����#l       #L2##e#d����ҩˮ#l       #L3##e#dתְת��#l\r\n\r\n"//3
            text += "#L4##e#d���ͷ���#l       #L5##e#d���ù���#l       #L6##e#d��������#l\r\n\r\n"//3
            text += "#L7##e#d�� �� ��#l       #L8##e#d���߽���#l       #L9##e#d#r��ֵ��ȡ#l\r\n\r\n\r\n"//3
            //text += "#L4##e#d#�ص������������������#l\r\n"//3
            //text += "#L5##e#d#v1402046#������ڤ������#l\r\n"//3
            //text += "#L6##e#d#v1432047#������ʥǹ����#l\r\n"//3
            //text += "#L7##e#d#v1442063#������������#l\r\n"//3
            //text += "#L8##e#d#v1452057#���㾪�繭����#l\r\n"//3
            //text += "#L9##e#d#v1462050#����ڤ��������#l\r\n"//3
            //text += "#L10##e#d#v1472068#����󱯸�����#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
						if(cm.getPlayer().getMapId() == 910000000){
	cm.sendOk("���Ѿ����г��ˣ����˺���?");
cm.dispose();
return;
}		
		cm.warp(910000000);
		cm.dispose();
        } else if (selection == 2) {
		cm.openNpc(9900004, 1);//����ҩˮ
        } else if (selection == 3) {
		cm.openNpc(9900005, 0);//תְת��
        } else if (selection == 4) {
		cm.openNpc(9900006, 0);//���ͷ���
        } else if (selection == 5) {
		cm.openNpc(9900007, 0);//���ù���
        } else if (selection == 6) {
		cm.warp(100000104);
		cm.dispose();//��������
        } else if (selection == 7) {
		cm.openNpc(9900004, 6);//�� �� ��
        } else if (selection == 8) {
		cm.openNpc(9900004, 7);//���߽���
        } else if (selection == 9) {
		cm.openNpc(9900004, 8);//��ֵ��ȡ
        } else if (selection == 10) {
		cm.openNpc(9900004, 9);//
	}
    }
}


