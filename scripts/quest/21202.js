
var status = -1;
var skills = Array(21100000, 21100001, 21100002, 21101003, 21100004, 21100005);

function start(mode, type, selection) {
	qm.sendNext("你想要一个长枪？ 哈哈！ 你看起来还不够强。 如果你想要一个长枪，必须通过狩猎证明自己。 \r\n到这里的西边，击败#r#o9001012##k 找到 30 个 #b#t4032311##k!");
	qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		status--;
	}
	if (status == 0) {
		qm.sendNext("哈哈！ 你已经证明了你的价值，你会得到你想要的; 最好的长枪可能!");
	} else if (status == 1) {
	// if (qm.getPlayerStat("RSP") > (qm.getPlayerStat("LVL") - 30) * 3) {
	    // qm.sendNext("你还有太多了#b技能点#k。我强烈敦促你使用更多的技能点在你的一级和二级技能.");
	    // qm.dispose();
	    // return;
	// }
		qm.sendNextS("我的记忆回来了...", 2);
		qm.changeJob(2110);
		qm.removeAll(4032311);
		qm.completeQuest();
		qm.gainItem(1142130,1);
		for (var i = 0; i < skills.length; i++) {
			qm.teachSkill(skills[i], 0);
		}
	    //qm.forceCompleteQuest(21201);
		qm.forceCompleteQuest(21203);
	} else if (status == 2) {
		qm.sendOk("哈哈！ 你得到了你想要的，现在离开吧!");
		qm.dispose();
	}
}