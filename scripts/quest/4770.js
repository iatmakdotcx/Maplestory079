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
			if(qm.getQuestStatus(4770)==2){
			qm.sendOk("���Ѿ���ȡ������������Ŭ����100�����Ի�ø��ཱ���");
			qm.completeQuest();
			qm.dispose();
			}else{
			qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ�����#b90#k����");
			}
		} else if (status == 1) {
			qm.sendOk("��ϲ����ϵͳ������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n3000��ȯ 3000����ȯ");
			qm.gainDY(3000);
			qm.gainNX(3000);
			qm.completeQuest();
			qm.dispose();
		} 
	}
}