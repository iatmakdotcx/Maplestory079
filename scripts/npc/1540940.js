/*
SnailMS�ű�������
*/
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";

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
		var text = "��ð���ð�ռң���ӭ����ð�յ���½�������ܵ���ħ��ʦ��Ӱ�죬������������������ң���������ƽ��ʱ�յ�ð�յ������ںϵ���һ�����ڣ�����Ҫ��#r��ð�յ�����#k��ð�ռ���ݣ���������һ��ʱ�յ�#r��ð�յ�����#k�������չ�����ð���ó��أ�����Էֱ�����������#rð�յ�Ů��#k�Ի����˽����ߵĲ�ͬ#r��������#k��\r\n#bע�⣺���ϵ����ļ���Ƥ���Ǹ��Ż���ȫ�£������Ƿ�ǿ�����#r���޹���#k��\r\n#rһ������ѡ�񣬱��޺���֮·����������ǿ�иı䣬��Ҫ����ǿ��ĵ���#k��\r\n\r\n";
		text += "\t\t\t#L1#" + ������ͷ + "#d��#b������ð�յ�Ů��#d�Ի���#l\r\n\r\n";
		text += "\t\t\t#L2#" + ������ͷ + "#d��#b������ð�յ�Ů��#d�Ի���#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			cm.openNpc(1541942);
			cm.safeDispose();
			return;
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			cm.openNpc(1540942);
			cm.safeDispose();
			return;
		} 
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

