/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.forceStartQuest();//��ʼ����
	qm.sendNextS("#p1061019#˵��Ȼ��֪�����ţ����ǿ�������żʦ��#p1061006#��д���֣���֪���ǲ��ǰ��š�ȥ#b#p1061006##k�ҵ����ź󣬸���#b#p1002104##k��", 3);
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest();//�������
	qm.dispose();
}