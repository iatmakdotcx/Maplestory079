/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest(20406);//��ʼ����
	qm.forceCompleteQuest(20406);//�������
	qm.forceStartQuest(20407);//��ʼ����
	qm.forceCompleteQuest(20407);//�������
	qm.sendNext("������ȥ��Ů�ʱ��°ѡ�");
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceStartQuest(20406);//��ʼ����
	qm.forceCompleteQuest(20406);//�������
	qm.forceStartQuest(20407);//��ʼ����
	qm.forceCompleteQuest(20407);//�������
	qm.sendNext("������ȥ��Ů�ʱ��°ѡ�");
	qm.dispose();
}