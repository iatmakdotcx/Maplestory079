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
	qm.teachSkill(21100000, qm.getPlayer().getSkillLevel(21100000), 20);
	qm.sendNextS("��л���������!�����ھͰѾ�׼ì���ڸ��㣡", 3);
	qm.gainExp(3900);
	qm.forceCompleteQuest();//�������
	qm.dispose();
}