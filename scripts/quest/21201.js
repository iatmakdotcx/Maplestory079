var status = -1;

function start(mode, type, selection) {
	
	qm.forceStartQuest(21203, "0");
	qm.forceStartQuest();
	//qm.warp(140030000, 0);
	qm.dispose();
}

function end(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	
	if (status == 0) {
		qm.sendNext("原来是这样啊...");
	} else if (status == 1) {
		qm.completeQuest();
		qm.dispose();
	}else{
		qm.dispose();
	}
}