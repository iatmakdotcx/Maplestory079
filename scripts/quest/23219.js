/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function end(mode, type, selection) {
	start(mode,type,selection);
}

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("����Ϊ��һ����Ҫ�ľ���.");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    if (status == 0) {
	qm.sendYesNo("�����Ѿ������˾������þ����������յģ����Ծ�����ʲô֮ǰ����ϸ���ǡ���ȷ�������Ϊһ��ն����ħ?");
    } else if (status == 1) {
	qm.sendNext("�Ҹո�������������壬ʹ����Ϊ��ħɱ�ֵ�����֮ѡ�� �����ϣ����ø�ǿ����ʹ��Stat Window��S���������Ӧ��ͳ�����ݡ� �������ȷ��Ҫ����ʲô������ #b�Զ�#k.");
	if (qm.getJob() == 3111) {
		qm.teachSkill(31120011, qm.getPlayer().getSkillLevel(31120011), 1);
	    qm.changeJob(3112);
		qm.teachSkill(30011159, qm.getPlayer().getSkillLevel(30011159), 1);
	}
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendNextPrev("��Ҳ��չ���Ŀ��ʱ϶����Ϊ�����豸�ȴ����ʹ����Щ������Ǻ���������뿹��������Ʒ����Я��.");
    } else if (status == 3) {
	qm.sendNextPrev("����...��ϣ����ȥ���������չʾ�˵����������.");
	qm.safeDispose();
    }
}