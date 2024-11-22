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
		var text = "";
		text += "\t\t\t\t#L1##b[ʱװ����ת��]#k#l\r\n\r\n";
		text += "\t\t\t  #L2##b[����װ������ת��]#k#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			cm.dispose();
			cm.openNpc(9062178, 1);
			return;
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			cm.dispose();
			cm.openNpc(9062178, 2);
			return;
		} 
		cm.dispose();
		
	} else {
		cm.dispose();
		return;
	}
}

