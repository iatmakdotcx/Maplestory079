/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest(20401);//��ʼ����
	qm.forceCompleteQuest(20401);//�������
	qm.forceStartQuest(20402);//���迪ʼ����
	qm.gainExp(10000);
	qm.gainItem(4001207, 1);
	qm.sendNext("����#v4001207##z4001207#��ȥ��˹Ƥ���ɰɣ������;�����Ļ���ȥ��ʬ���#v4001207##z4001207#���������ڼ����ɣ�");
	qm.dispose();
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceStartQuest(20401);//��ʼ����
	qm.forceCompleteQuest(20401);//�������
	qm.forceStartQuest(20402);//���迪ʼ����
	qm.gainExp(10000);
	qm.gainItem(4001207, 1);
	qm.sendNext("����#v4001207##z4001207#��ȥ��˹Ƥ���ɰɣ������;�����Ļ���ȥ��ʬ���#v4001207##z4001207#���������ڼ����ɣ�");
	qm.dispose();
}