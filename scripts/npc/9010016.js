var status = -1;
var job = 0;
var type = -1;

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 0 && status == 0) {
		status--;
	} else if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}

	if (status == 0) {
		cm.sendYesNo("����ȼ�30������������԰���һ��ѧϰ Ⱥ��#s8#������#s1004# ");
	} else if (status == 1) {
		if (cm.getPlayer().getLevel() < 1) {
			cm.sendNext("��ĵȼ�û�дﵽ1��");
			cm.dispose();
			return;
		} else if (cm.getPlayer().getOneTimeLog("��Ⱥ�輼��") >= 1) { //�ж����ü�¼
			cm.sendNext("���Ѿ�ѧ���ˣ�");
			cm.dispose();

		} else {
			if(cm.�ж�ְҵ() >= 2000 && cm.�ж�ְҵ() < 2200){
				cm.teachSkill(20001007, 3); //����
				cm.teachSkill(20000024, 1); //Ⱥ��
				cm.teachSkill(20001004, 1); //����
			} else if(cm.�ж�ְҵ() >= 1000 && cm.�ж�ְҵ() < 2000){
				cm.teachSkill(10001007, 3); //����
				cm.teachSkill(10000018, 1); //Ⱥ��
				cm.teachSkill(10001004, 1); //����
			} else {
				cm.teachSkill(1007, 3); //����
				cm.teachSkill(8, 1); //Ⱥ��
				cm.teachSkill(1004, 1); //����
			}
			//cm.getPlayer().setOneTimeLog("��Ⱥ�輼��"); //�����ü�¼
			cm.sendNext("�����Ѿ�ѧϰ�ɹ�");
			cm.dispose();

		}
	}
}