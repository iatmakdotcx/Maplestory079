/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();//��ʼ����
	qm.removeAll(4032330);
	qm.gainItem(4032330, 1);	
	//qm.sendNextS("�Լ�������һ��д��������ӡʯ���鱨���ţ���˵���԰��Ž����ҡ�������ȴû�취�õ��Ƿ��š���#b��Ϊ�Һ�#p2131000#������������ͬʱ������#k��\n\n#p2131000#˵�Լ��ǿ��Ի�ܳ�ʱ���������˵�������Ǹ�ʱ�����Ž����ҡ�ֻҪ�뿪����ɭ�֣�#b��ԭ����ʱ�����ҵ�#p2131000#����#k��#p2131000#���Ķ��أ�ȥ����#b#p1002104##k�ɡ���", 3);
	//qm.forceStartQuest(21765, "2");//�������Կ���ʼ���������
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();//�������
	qm.removeAll(4032330);
	qm.gainExp(1000);
	qm.teachSkill(21110002, qm.getPlayer().getSkillLevel(21110002), 20);   // ȫ���һӻ�
	//qm.teachSkill(21110007, qm.getPlayer().getSkillLevel(21110007), 20);   // ȫ���һӻ�
	//qm.teachSkill(21110008, qm.getPlayer().getSkillLevel(21110008), 20);   // ȫ���һӻ�
	//\r\n���ˣ�#rȫ���һӻ�#k�ͽ������
	//cm.forceStartQuest(100112); //��ʼ����
	qm.forceCompleteQuest(21758); //�������
	qm.sendNextS("�һ���ŵ����ݽ������ص����ۺ��о�����ô����ȥ�е㲻̫�ɿ�����", 3);
	qm.dispose();
}