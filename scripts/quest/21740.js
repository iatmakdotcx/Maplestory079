/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();//��ʼ����
	qm.sendNextS("��#p1002104#˵����#m200000000#��������������֮��#p1002104#˵��ð���Щ�������#b#p1201000##k����", 3);
	qm.dispose();
}

function end(mode, type, selection) {
	qm.teachSkill(21100004, qm.getPlayer().getSkillLevel(21100004), 20);   // Combo Ability 
	qm.forceCompleteQuest();//�������
	qm.sendNextS("#r��������#k���ܾͽ�������!", 3);
	qm.dispose();
}