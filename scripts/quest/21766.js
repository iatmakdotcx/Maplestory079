/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	status++;
	if (status == 0) {
		qm.sendNext("��! ����԰��Ҹ�æ��#p20000#�ƺ��е�֣���Щ��...");
	} else if (status == 1) {
		qm.sendNext("������ü������Թ���Ĺؽ���ֱ�������������ͻȻ��Ϊ���п��ֺ�Ц��!!");
	} else if (status == 2) {
		qm.sendNext("����һ�ָо��б���ľ�����ܡ���������ĵؿ���ľ����#p20000#?");
	} else {
		qm.sendNext("��֪�������� #p20000#�ǶԵģ������ұߡ�ֻҪ������ȥ��ֱ���㿴�������ǣ�����ͷ��ȥ��������������㣬�����������Լ�����������Ӧ�������Ա�.");
		qm.forceStartQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.gainExp(200);
	qm.forceCompleteQuest();
	qm.dispose();
}
