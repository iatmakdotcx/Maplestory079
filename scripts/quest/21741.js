/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.sendNextS("����ȥ#b#m250000000##k����˵��#m250000000#��#b#p2090004##k��������˽⵽��ϸ���������", 3);
	qm.forceStartQuest();//��ʼ����
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();//�������
	qm.dispose();
}