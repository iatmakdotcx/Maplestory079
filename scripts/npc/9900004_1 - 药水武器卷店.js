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
            text += "                    #n#d��ӭ����������\r\n\r\n\r\n#r��ǰ��ң�     Ԫ\r\n\r\n"//3
            text += "#L2##e#dҩˮ����#l       #L3##e#dװ������#l       #L4##e#d�������#l\r\n\r\n"//3
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
				cm.openShop(81);
				cm.dispose();//ҩˮ����
        } else if (selection == 3) {
				cm.openShop(79);
				cm.dispose();//װ������
        } else if (selection == 4) {
				cm.openShop(77);
				cm.dispose();//�������
	}
    }
}


