/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("这是一个重要的决定.");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    if (status == 0) {
	qm.sendYesNo("你做出了决定吗？ 决定将是最终的，所以在决定做什么之前仔细思考。 您确定要成为Cannoneer?");
    } else if (status == 1) {
	qm.sendNext("我刚刚成型你的身体，使其完美的炮兵。如果你想变得更强大，使用统计窗口（S），以提高相应的统计信息。如果您arn't一定要提高什么，只要点击 #b汽车#k.");
	if (qm.getJob() == 1 || qm.getJob() == 0) {
	    qm.gainItem(1532000,1);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(2, 4);
	    qm.expandInventory(4, 4);
	    qm.changeJob(501);
	}
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendNextPrev("因此，我已扩大您的库存插槽数为您的设备和库存等。使用这些插槽明智，并填写他们与携带所需的资源管理器中的项目。");
    } else if (status == 3) {
	qm.sendNextPrev("现在...我希望你去那里，向世界展示了探险家如何运作.");
	qm.safeDispose();
    }
}