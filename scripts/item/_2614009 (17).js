/*
SnailMS�ű�������
*/

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("�Ի�������");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		//�������д�ű���һ��Ҫ������
		/* var text = "��������Ҫ˵�Ŀ�ͷ��\r\n\r\n";
		text += "#L1#ѡ��1����\r\n\r\n";
		text += "#L2#ѡ��2����\r\n\r\n";
		cm.sendSimple(text); */
		cm.gainItem(2614102, -1);
		cm.getPlayer().setMorph(2614102, 5, 1200000, true);
		cm.dispose();
		return;
		
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			
		} 
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

