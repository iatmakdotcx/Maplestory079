/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	qm.dispose();
}
function end(mode, type, selection) {
	status++;
	if (status == 0) {
		qm.sendNext("�ҽ����޷�Ҫ��ʲô��������#p2154009#''��������������ܻ���鷳��������ۼ�����צ�����������������ˡ�ʹ�õ��»���#t4032740# �Ҽ����� һ����!");
	} else {
		qm.warp(310010000);
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
