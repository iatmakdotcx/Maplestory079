/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();//��ʼ����
	qm.sendNextS("#p1002104#˵�յ��˺ͺ�ɫ֮���йص��鱨������ȥ����#b#m200000000##k��#b����#p2012012##k����#p2012012#���Ӧ�ÿ����˽⵽��ϸ�������", 3);
	qm.dispose();
}

function end(mode, type, selection) {
	//qm.teachSkill(21100005, qm.getPlayer().getSkillLevel(21100005), 10);   // Combo Ability 
	qm.forceCompleteQuest();//�������
	qm.dispose();
}