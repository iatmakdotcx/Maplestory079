function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("感谢你的光临！");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("背包空间不足或你无法兑换奖励或购买！");
                        cm.dispose();
                        return;
                    }
		    if(cm.haveItem(4310088,198)){
				//cm.getPlayer().setOneTimeLog("10W破功石");
				cm.gainItem(2350000, 1);//角色栏增加券
				cm.gainItem(4310088, -198);
		    cm.sendOk("购买成功！");
			cm.全服黄色喇叭("[赞助商店] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功购买了 角色栏增加券。")
            cm.dispose();
			}else{
            cm.sendOk("#r你的赞助币不足");
            cm.dispose();
			}
      }  else if (status == 1) {
                     
		}
    }
}