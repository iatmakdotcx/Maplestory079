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
			if(qm.getQuestStatus(4771)==2){
			qm.sendOk("��Ľ����Ѿ�ȫ����ȡ�ꡣ");
						qm.completeQuest();
			qm.dispose();
			}else{
			qm.sendNext("��ϲ�㵱ǰ�ȼ��Ѿ�����#b100#k����");
			}
		} else if (status == 1) {
			qm.sendOk("��ϲ����ϵͳ������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2340000# x 2�� #v2049100# 	x 2��");
			qm.gainItem(2340000, 2);
			qm.gainItem(2049100, 2);
			qm.completeQuest();
			qm.dispose();
		} 
	}
}