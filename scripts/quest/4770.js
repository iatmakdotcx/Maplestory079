var status = -1;

function start(mode, type, selection) {
	if (mode == -1) {
		qm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if(qm.getQuestStatus(4770)==2){
			qm.sendOk("你已经领取过奖励，继续努力到100级可以获得更多奖励喔");
			qm.completeQuest();
			qm.dispose();
			}else{
			qm.sendNext("恭喜你当前等级已经到达#b90#k级。");
			}
		} else if (status == 1) {
			qm.sendOk("恭喜你获得系统奖励！\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n3000点券 3000抵用券");
			qm.gainDY(3000);
			qm.gainNX(3000);
			qm.completeQuest();
			qm.dispose();
		} 
	}
}