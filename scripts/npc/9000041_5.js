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
        1if (status == 0) {
            v1ar tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t\t\t#e��ӭ����#b�ع�ð�յ��ع�ð�յ� #k!#n\r\n"
			text += "\t#r����һ���Ʒ!#n\r\n"
            text += "#L1##b1������#v4032226#�һ�888�����#l\r\n\r\n"//3
            text += "#L2##b2������#v4032226#�һ�1��#v2049100##l\r\n\r\n"//3
            text += "#L3##b3������#v4032226#�һ�1��#v2340000##l\r\n\r\n"//3
			text += "#L5##b5������#v4032226#�һ�1��#v1002939##z1002939#\r\n\r\n"//3
			text += "#L6##b6������#v4032226#�һ�1��#v4310059##z4310059#\r\n\r\n"
            text += "#L4##b����һ��������ڴ�#l\r\n\r\n"//3+ cm.getBeans() + "#k��
            cm.sendSimple(text);
        } else if (selection == 1) { 
		if (cm.haveItem(4032226,1)) {
	            cm.gainItem(4032226,-1);
				cm.gainDY(888);
				cm.sendOk("�һ��ɹ���");
			    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]����һ��ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û���㹻�Ľ���");
				cm.dispose();
			}
        } else if (selection == 2) { 
		if (cm.haveItem(4032226,2)) {
	            cm.gainItem(4032226,-2);
				cm.gainItem(2049100,1);
				cm.sendOk("�һ��ɹ���");
			    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]����һ��ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û���㹻�Ľ���");
				cm.dispose();
			}        
		} else if (selection == 3) { 
		if (cm.haveItem(4032226,3)) {
	            cm.gainItem(4032226,-3);
				cm.gainItem(2340000,1);
				cm.sendOk("�һ��ɹ���");
			    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]����һ��ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û���㹻�Ľ���");
				cm.dispose();
			}
		} else if (selection == 5) { 
		if (cm.haveItem(4032226,5)) {
	            cm.gainItem(4032226,-5);
				cm.gainItem(1002939,1);
				cm.sendOk("�һ��ɹ���");
			    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]����һ��ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û���㹻�Ľ���");
				cm.dispose();
			}
		} else if (selection == 6) { 
		if (cm.haveItem(4032226,6)) {
	            cm.gainItem(4032226,-6);
				cm.gainItem(4310059,1);
				cm.sendOk("�һ��ɹ���");
			    cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]����һ��ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û���㹻�Ľ���");
				cm.dispose();
			}
       	} else if (selection == 4) { 
				cm.sendOk("��û������");
				cm.dispose();
		}
    }
}


