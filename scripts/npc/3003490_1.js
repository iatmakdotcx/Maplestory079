/*
SnailMS�ű�������
*/
var ����Ƥ���������� = true;

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
		var text = "��ӭ�������ذٱ��䣬���ѿ�ͨ�Ĺ������£�\r\n\r\n";
		var ��ͨ = false;
		if(cm.getOneTimeLog("�˺�Ƥ���л�") > 0){
			text += "#L1##b�˺�Ƥ���л�#k\r\n\r\n";
			��ͨ = true;
		}
		if(cm.getOneTimeLog("��������Ƥ���л�") > 0){
			text += "#L2##b����Ƥ���л�#k\r\n\r\n";
			��ͨ = true;
		}else if(����Ƥ����������){
			text += "#L2##b����Ƥ���л�(��ʱ�����У�#k\r\n\r\n";
			��ͨ = true;
		}

		if(cm.getOneTimeLog("����ҩˮ�����ȡ") > 0){
			text += "#L3##b����ҩˮ�����ȡ#k\r\n\r\n";
			��ͨ = true;
		}
		if(��ͨ){
			cm.sendSimple(text);
		}else{
			cm.sendOk("��Ǹ���㲢û�п�ͨ���ذٱ���Ĺ��ܣ���ȥ��Ʒ���̵깺���Ӧ���ܺ�����ʹ�á�\r\n");
			cm.dispose();
			return;
		}
		
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			cm.safeDispose();
			cm.openNpc(3003490, 2);
			return;
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			cm.safeDispose();
			cm.openNpc(3003490, 3);
			return;
		} else if (selection == 3) {
			//�������дѡ��2Ҫ������
			cm.safeDispose();
			cm.openNpc(3003490, 4);
			return;
		} 
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

