/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;
//this quest is DELIVER LETTER
function start(mode, type, selection) {
	if (qm.canHold(4032455,1)) {
		qm.sendNext("ȥʵ����Henesys��ϯ˹̹.");
		qm.gainItem(4032455,1);
		qm.forceStartQuest();
	} else {
		qm.sendNext("����һЩ�ռ�.");
	}
	qm.dispose();
}

function end(mode, type, selection) {
	if (qm.haveItem(4032455,1)) {
		qm.sendNext("лл.");
		qm.getPlayer().gainSP(1, 0);
		qm.gainExp(450);
		qm.gainItem(4032455, -1);
		qm.forceCompleteQuest();
	} else {
		qm.sendNext("����ҵ���.");
	}
	qm.dispose();
}