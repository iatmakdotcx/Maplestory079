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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "\t#e#r  500累计充值技能 #k	#n\r\n\r\n"
            text += "#b\t#s2201002##d 快速移动  (领取后换线生效键码5)#l\r\n"//3
            text += "#L1##r确定领取大礼包就点我吧！#l\r\n\r\n"//3
            cm.sendSimple(text);
      } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
		   if (cm.getInventory(1).isFull() || cm.getInventory(5).isFull() || cm.getInventory(4).isFull()) {
                cm.sendSimple("您的装备栏和其他栏和现金栏空间不足。");
		     cm.dispose();
			}else if (cm.getzb()>=499 && cm.getPlayer()){
				cm.getPlayer().changeKeybinding(6,1,2201002);
				cm.sendOk("快速移动#s2201002#领取成功，#b请换【频道】后查看【键码5】");
			//	cm.gainMeso(2000000);
			//	cm.gainNX(5000);
				
		cm.sendOk("领取成功！");
			cm.全服黄色喇叭("[累计充值] : 恭喜玩家 "+cm.getPlayer().getName()+" 成功领取了500元累充技能礼包。")
			cm.getPlayer().setOneTimeLog('500元累计赞助礼包');
            cm.dispose();
			}else{
            cm.sendOk("#r你的赞助余额不足");
            cm.dispose();
			}
		}
    }
}