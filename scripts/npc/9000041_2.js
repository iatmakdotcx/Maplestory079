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
			text += "\t\t\t  #e��ӭ����#b�ع�ð�յ��ع�ð�յ� #k!#n\r\n"
			text += "\t#r�����һ�����ȯ!#n\r\n"
            text += "#L1##b300�������һ�600����ȯ#l\r\n\r\n"//3
            text += "#L2##b600�������һ�1400����ȯ#l\r\n\r\n"//3
            text += "#L3##b1200�������һ�2800����ȯ#l\r\n\r\n"//3
            text += "#L4##b2400�������һ�5600����ȯ#l\r\n\r\n"//3+ cm.getBeans() + "#k��
            cm.sendSimple(text);
        } else if (selection == 1) { 
		if (cm.getPlayer().getBeans() >= 300) {
	            cm.gainBeans(-300);
				cm.gainDY(600);
				cm.sendOk("300�������һ�600����ȯ�ɹ���");
			    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]300�������һ�600����ȯ�ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û��300�������޷��һ�600����ȯ��");
				cm.dispose();
			}
        } else if (selection == 2) {  
		if (cm.getPlayer().getBeans() >= 600) {
	            cm.gainBeans(-600);
				cm.gainDY(1400);
				cm.sendOk("600�������һ�1400����ȯ�ɹ���");
			    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]600�������һ�1400����ȯ�ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û��600�������޷��һ�1400����ȯ��");
				cm.dispose();
			}
        } else if (selection == 3) { 
		if (cm.getPlayer().getBeans() >= 1200) {
	            cm.gainBeans(-1200);
				cm.gainDY(2800);
				cm.sendOk("1200�������һ�2800����ȯ�ɹ���");
			    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]1200�������һ�2800����ȯ�ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û��1200�������޷��һ�2800����ȯ��");
				cm.dispose();
			}
        } else if (selection == 4) {
		if (cm.getPlayer().getBeans() >= 2400) {
	            cm.gainBeans(-2400);
				cm.gainDY(5600);
				cm.sendOk("2400�������һ�5600����ȯ�ɹ���");
			    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]2400�������һ�5600����ȯ�ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û��2400�������޷��һ�5600����ȯ��");
				cm.dispose();
			}
		}
    }
}


