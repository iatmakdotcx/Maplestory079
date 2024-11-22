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
	    cm.sendOk("你没有跟你一票。回来之前我买的，请在百货公司票. 谢谢.");
	    cm.safeDispose();
	}
    } else if (status == 1) {
	var item;
	if (Math.floor(Math.random() * 300) == 0) {
	    item = cm.gainGachaponItem(1102042, 1);
	} else {
	    var itemList = new Array(2040317, 3010013, 2000005, 2022113, 2043201, 2044001, 2041038, 2041039, 2041036, 2041037, 2041040, 2041041, 2041026, 2041027, 2044600, 2043301, 2040308, 2040309, 2040304, 2040305, 2040810, 2040811, 2040812, 2040813, 2040814, 2040815, 2040008, 2040009, 2040010, 2040011, 2040012, 2040013, 2040510, 2040511, 2040508, 2040509, 2040518, 2040519, 2040520, 2040521, 2044401, 2040900, 2040902, 2040908, 2040909, 2044301, 2040406, 2040407,1302026, 1061054, 1061054, 1452003, 145003, 1382037, 1302063, 1041067, 1372008, 1432006, 1332053, 1432016, 1302021, 1002393, 1051009, 1082148, 1102082, 143015, 1061043, 1452005, 1051016, 1442012, 1372017, 1332000, 1050026, 1041062);
	    item = cm.gainGachaponItem(itemList[Math.floor(Math.random() * itemList.length)], 1);
	}

	if (item != -1) {
	    cm.gainItem(5220000, -1);
	    cm.sendOk("您已获得 #b#t" + item + "##k.");
	} else {
	    cm.sendOk("请检查您的项目库存看你是否有票，或者如果库存已满.");
	}
	cm.safeDispose();
    }
}