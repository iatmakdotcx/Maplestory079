/*
@	Name: GMS-like Gachapon
	Showa Spa (F)
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	if (cm.haveItem(5220000)) {
	   cm.sendYesNo("你有一些 #bGachapon门票#k 那里.\r\n你想试试你的运气?");
	} else {
	    c cm.sendOk("你没有跟你一票。回来之前我买的，请在百货公司票. 谢谢.");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	var itemList = new Array(2000004, 2022113, 2040019, 2040020, 1072238, 1040081, 1382002, 1442021, 1072239, 1002096, 1322010, 1472005, 1002021, 1422007, 1082148, 1102081, 1040043, 1002117, 1302013, 1462024, 1382003, 1051001, 1472000, 1002088, 1472003, 1002048, 1002178, 1040007, 1002131, 1002288, 1002183, 1372006, 1442004, 1040082, 1322003, 2022195, 1412001, 1472009, 1060088, 1002035, 1322009, 1472016, 1332011, 1032027, 1002214, 1312014, 1002120, 1322023, 1452010, 1002034, 1060025, 1082147, 1002055, 1060019, 1002180, 1002154, 1060068, 1462013);
	var item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1);
	if (item != -1) {
	    cm.gainItem(5220000, -1);
	    cm.sendOk("您已获得 #b#t" + item + "##k.");
	} else {
	    cm.sendOk("请检查您的项目库存看你是否有票，或者如果库存已满.");
	}
	cm.safeDispose();
    }
}