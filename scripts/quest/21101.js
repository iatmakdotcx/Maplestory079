var status = -1;
var skills = Array(21000000, 21001001, 21000002, 21001003);

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    qm.sendNext("#b(�ٿ���һ�º���...)#k");
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
	qm.sendYesNo("#b(���Լ�ȷ����ʹ�ù� #p1201001#��Ӣ���� ȷ���Ļ����ó�����ץס #p1201001#�� һ������ʲô��Ӧ��)#k");
    } else if (status == 1) {
	if (qm.getJob() == 2000) {
	    qm.changeJob(2100);
	    qm.gainItem(1142129, 1);
		qm.gainItem(1442077, 1);
		qm.forceCompleteQuest();

		for (var i = 0; i < skills.length; i++) {
			qm.teachSkill(skills[i], 0);
		}
	    qm.sendNextS("#b(��������ʲô��...)#k", 3);
	}
    } else if (status == 2) {
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}
