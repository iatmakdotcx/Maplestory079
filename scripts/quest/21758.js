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
	qm.gainExp(1000);
	qm.teachSkill(21110002, qm.getPlayer().getSkillLevel(21110002), 20);   // ȫ���һӻ�
	//qm.teachSkill(21110007, qm.getPlayer().getSkillLevel(21110007), 20);   // ȫ���һӻ�
	//qm.teachSkill(21110007, qm.getPlayer().getSkillLevel(21110008), 20);   // ȫ���һӻ�
	//\r\n���ˣ�#rȫ���һӻ�#k�ͽ������
	qm.sendNextS("�һ���ŵ����ݽ������ص����ۺ��о�����ô����ȥ�е㲻̫�ɿ�����", 3);
	qm.forceCompleteQuest();//�������
	qm.dispose();
}