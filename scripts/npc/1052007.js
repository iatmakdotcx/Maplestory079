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
		
		var text = "��Ҫȥ�϶��㳡����Ҫ#r30000#k��ҡ�\r\n\r\n";
		cm.sendYesNo(text);
	} else if (status == 1) {
		if(cm.�жϽ��() < 30000){
			cm.sendOk("�Բ��������ϵĽ�Ҳ�����");
			cm.dispose();
			return;
		}else{
			cm.�ս��(30000);
			cm.warp(103020020);
			cm.dispose();
		}
		
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

