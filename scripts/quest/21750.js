/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest(21750);//��ʼ����
	//qm.forceStartQuest(21750);//��ʼ����
	qm.dispose();
}

function end(mode, type, selection) {
	//qm.forceStartQuest(21750);//��ʼ����
	qm.forceCompleteQuest(21750);//�������
	qm.dispose();
}