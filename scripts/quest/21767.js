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
		qm.sendNext("#b�ţ���һ���ڿ��е�ҩ�����ʡ��ǻ���ʲô������ý��Լ������������ʲô.#k");
	} else {
		qm.gainItem(4032423,1);
		qm.forceCompleteQuest();
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.dispose();
}
