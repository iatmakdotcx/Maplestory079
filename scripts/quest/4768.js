var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if(qm.getQuestStatus(4768)==2){
			qm.sendOk("���Ѿ���ȡ������������Ŭ����80�����Ի�ø��ཱ���");
			qm.completeQuest();
			qm.dispose();
			}else{
			qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ�����#b70#k����");
			}
		} else if (status == 1) {
			qm.sendOk("��ϲ����ϵͳ������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n2000��ȯ 2000����ȯ");
			qm.gainDY(2000);
			qm.gainNX(2000);
			qm.completeQuest();
			qm.dispose();
		} 
	}
}