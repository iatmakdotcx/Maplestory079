/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.sendNext("ȥ��ԭѩ����#b�ܵ�#k �����������ϸ�����");
	qm.forceStartQuest();//��ʼ����
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();//�������
	qm.gainExp(10000);
	qm.forceStartQuest(20401);//���迪ʼ����
	qm.dispose();
}