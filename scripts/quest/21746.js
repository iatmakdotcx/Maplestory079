/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	map = qm.getPlayer().getMap();
	if (qm.getPlayerCount(925040001) <= 0) {
	qm.getMap(925040001).resetFully();//��ͼˢ��
	qm.warp(925040001, 1);
	qm.getPlayer().startMapTimeLimitTask(1200, map);
	//qm.removeAll(4220151);
	//qm.gainItem(4220151, 1);
	qm.forceStartQuest(21746);//��ʼ����
	qm.dispose();
	} else{
	qm.sendNextS("����������ʱ�޷�����,���Ժ󡣡�", 3);
	qm.dispose();
}}

function end(mode, type, selection) {
	qm.forceCompleteQuest(21746);//�������
	qm.dispose();
}