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
            text += "#L1##r��Ҫ����#z5220007#��������������һ��ʹ��Ȩ��#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
                if (cm.getPlayer().getCSPoints(1) >= 300) {
				cm.gainNX(-300);
				cm.gainItem(5220007, 1);//
            cm.sendOk("�����ɹ���");
            cm.dispose();
			}else{
            cm.sendOk("��ȯ���㣬�޷�����!");
            cm.dispose();
			}
		}
    }
}


