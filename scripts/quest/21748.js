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
	qm.teachSkill(21100002, qm.getPlayer().getSkillLevel(21100002), 30);   // Combo Ability 
	qm.forceCompleteQuest();//�������
	qm.sendNextS("�úõĽ��#bս��ͻ��#k���ܰɣ�", 3);
	qm.dispose();
}