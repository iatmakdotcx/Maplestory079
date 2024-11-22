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
		var text = "��ð�������������Խ���#v1602009#�ĺϳɣ���ѡ��\r\n\r\n";
		text += "\t\t\t\t   #L1##b#i1602009:#�ϳ�#k#l\r\n\r\n";
		text += "\t\t\t\t   #L2##b#i1602010:#�ϳ�#k#l\r\n\r\n";
		text += "\t\t\t\t   #L3##b#i1602011:#�ϳ�#k#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			cm.safeDispose();
			cm.openNpc(9071006, 1);
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			cm.safeDispose();
			cm.openNpc(9071006, 2);
		}else if (selection == 3) {
			//�������дѡ��2Ҫ������
			cm.safeDispose();
			cm.openNpc(9071006, 3);
		} 
		
	} else {
		cm.dispose();
		return;
	}
}

