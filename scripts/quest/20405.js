/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();//��ʼ����
	qm.gainExp(10000);
	qm.forceCompleteQuest();//�������
	qm.sendNext("ȥʥ�����Ϲ��ذ�");
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceStartQuest();//��ʼ����
	qm.gainExp(10000);
	qm.forceCompleteQuest();//�������
	qm.sendNext("ȥʥ�����Ϲ��ذ�");
	qm.dispose();
}