var status = -1;

function start() {
	var level = cm.getPlayerStat("LVL");
    if (!cm.haveItem(4001374,1)&&!cm.haveItem(5252006,1)||level < 90) {
		cm.playerMessage(5, "��û������Կ�׻�������ĵȼ���δ�ﵽ90��");
		cm.dispose();
    } else {
		cm.gainItem(4001374,-1);
		cm.gainItem(5252006,-1);
		cm.warp(803000500,1);
		cm.dispose();
    }
}