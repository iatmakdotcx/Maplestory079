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
		var text = "��ȷ��Ҫѡ������ҵ�ף����\r\n#rע��:һ�����ܣ����޷�������ѡ����������ǿ���л���ֻ�ܽ���ǿ��ĵ��߲ſ�ʵ�֡�\r\n";
		cm.sendYesNo(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		cm.getPlayer().setSkillSkinAll(2);
		cm.getPlayer().setOneTimeLog("��������Ƥ��");
		cm.sendOk("��л���ѡ��������ҵ�ף���ɣ������Ŭ��������ǿ��������������֮�յ����������ս�սʤа�񣬷�ӡ��ħ��ʦ��\r\n\r\n#bps��������һ�����ع�â��������������������壬��е����ڵ������ڲ��Ϸ�ӿ������𽥳�����������\r\n")
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

