var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
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
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n"//3
			text += "          #r欢迎来到月月冒险岛第二阶段累计赞助物品奖励#k\r\n";
			text += ""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+""+红枫叶+"\r\n\r\n";
	        text += "              #L1#"+小烟花+"#r领取7000档奖励"+小烟花+"#l\r\n\r\n"
			text += "    领取前请将原本的赞助戒指放在包内，否则不能升级#l\r\n\r\n"
			text += "#b#v4310060##z4310060#*12\r\n"
			text += "#b#v2028158##z2028158#*1\r\n"
			text += "#b#v4310143##z4310143#*120\r\n"
			text += "#b#v4005004##z4005004#*200\r\n"
			text += "#b#v4251202##z4251202#*50\r\n"
			text += "#b#v2049100##z2049100#*100\r\n"
			text += "#b#v4310010##z4310010#*2\r\n"
			text += "#b#v4310108##z4310108#*25\r\n"
			text += "#b#v3992025##z3992025#*20000\r\n"
			text += "#b#v4001165##z4001165#*8000\r\n"
			text += "#b#v2450000##z2450000#*5\r\n"
			text += "#b#v2040903##z2040903#*10\r\n"
			text += "#b#v2613000##z2613000#*20\r\n"
			text += "#b#v2046913##z2046913#*15\r\n"
			text += "#b#v4001245##z4001245#*5\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {

			if(cm.getzb() >= 15000 && cm.getPlayer().getBossLog("7000赞助物品礼包2",1) == 0 ){
				cm.gainItem(4310060,12);//进化石
				cm.gainItem(2028158,1);//随机公式箱子
				cm.gainItem(4310143,120);//BOSS币
				cm.gainItem(4005004,200);//黑水晶
				cm.gainItem(4251202,50);//万能水晶
				cm.gainItem(2049100,100);//混沌
				cm.gainItem(4310010,2);//15星必成
				cm.gainItem(4310108,25);//UR时装附魔币
				cm.gainItem(3992025,20000);//圣诞大星
				cm.gainItem(4001165,8000);//太阳神的赐福
				cm.gainItem(2450000,5);//幸运的狩猎
				cm.gainItem(2040903,10);//盾牌卷
				cm.gainItem(2613000,20);//星火
				cm.gainItem(2046913,15);//宿命正义自选
				cm.gainItem(4001245,5);//金蛋
				
				cm.getPlayer().setBossLog("7000赞助物品礼包2",1,1);
				//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "累计赞助物品奖励" + " : " + "恭喜" + cm.getChar().getName() + "成功领取了7000档累计赞助物品奖励！距离战斗力飞升又进一步，祝福他/她吧！"));
				//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "累计赞助物品奖励" + " : " + "恭喜" + cm.getChar().getName() + "成功领取了7000档累计赞助物品奖励！距离战斗力飞升又进一步，祝福他/她吧！"));
				cm.sendOk("#r恭喜你，领取成功第二阶段7000赞助物品奖励！");
				cm.dispose();
			}else{
				cm.sendOk("#r赞助余额不足或你的账号已经领取过该礼包！");
				cm.dispose();
			}
		}
    }
}
