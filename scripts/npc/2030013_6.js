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
		
		var text = "��ѡ����Ҫ��ս��BOSS��\r\n\r\n";
		text += "#L1#��ͨ������#r100��#k��\r\n\r\n";
		text += "#L2#����������#r140��#k��\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		
		if(selection == 1){
			cm.warp(cm.getPlayer().getMapId() + 100, "west00");
		}else if (selection == 2) {
			cm.warp(cm.getPlayer().getMapId() + 101, "west00");
		} 
		cm.dispose();
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

