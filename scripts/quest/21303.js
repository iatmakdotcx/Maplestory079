
 var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
        status++;
    } else {
		
	}
	 if (status == 0) {
        qm.sendOk("该死的小偷偷走了我的宝石，去！干掉他！");
    } else if (status == 1) {
       	qm.forceStartQuest();//开始任务
        qm.dispose();
    }
}

function end(mode, type, selection) {
	qm.removeAll(4032339);
	qm.sendNextS("制作#v4032312#秘方。\r\n需要材料如下：1个\r\n1个#v4005004#\r\n3个#v4020007#\r\n3个#v4020000#。。。", 3);
	qm.forceCompleteQuest();//完成任务
	qm.dispose();
}