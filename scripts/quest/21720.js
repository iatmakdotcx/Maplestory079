/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();//��ʼ����
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();//�������
	qm.teachSkill(21001003, qm.getPlayer().getSkillLevel(21001003), 20);
	qm.gainExp(3900);
	qm.sendNextPrevS("�ܺã������ھͰѿ���ì���ڸ��㣡", 2);
	qm.dispose();
}