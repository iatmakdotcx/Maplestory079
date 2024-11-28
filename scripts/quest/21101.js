var status = -1;
var skills = Array(21000000, 21001001, 21000002, 21001003);

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("#b(再考虑一下好了...)#k");
	    qm.dispose();
	    return;
	} else if (status == 2) {
	    qm.MovieClipIntroUI(true);
	    qm.warp(914090100, 0);
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendYesNo("#b(我自己确信是使用过 #p1201001#的英雄吗？ 确定的话就拿出力量抓住 #p1201001#吧 一定会有什么反应。)#k");
    } else if (status == 1) {
	if (qm.getJob() == 2000) {
	    qm.changeJob(2100);
	    qm.gainItem(1142129, 1);
		qm.gainItem(1442077, 1);
		qm.forceCompleteQuest();

		for (var i = 0; i < skills.length; i++) {
			qm.teachSkill(skills[i], 0);
		}
	    qm.sendNextS("#b(好像想起什么了...)#k", 3);
	}
    } else if (status == 2) {
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
