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
		cm.safeDispose();
		cm.openNpc(3003490, 1);
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

