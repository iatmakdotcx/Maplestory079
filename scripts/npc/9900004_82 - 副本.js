/* global cm */
//var 爱心 = "#fEffect/CharacterEff/1003276/0/0#";
var 音符 = "#fEffect/CharacterEff/1003276/0/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
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
			if(cm.getJob() >= 0 && cm.getJob()<= 522 && cm.hasSkill(1017) == false){
			cm.teachSkill(1017,1,1);
			}else if(cm.getJob() >=1000 || cm.getJob() <= 2112 && cm.hasSkill(20001019) == false){
			cm.teachSkill(20001019,1,1);
			}
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
		    text += " \t\t\t  #e#r #v4000422#  赞助商店  #v4000422##k#n              \r\n"
            text += ""+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+音符+"\r\n"
            text += "#d角色名称：#b" + cm.getName() + "#k#n\r\n"	
		
		var tex2 = ""+cm.getHyPay(1)+"";
		
		    text += "#r注：#b赞助比例 1: 2#l  \r\n\r\n"//3
			
			text += "#r" + 蓝色角点 + "#k 联系群主购买~~ 金肝月卡 \r\n" + 蓝色角点 + " 每日领取#r 2000点券，3000抵用，混沌祝福卷轴各3张   #l \r\n\r\n"//3
			
            text += "#L1##r" + 蓝色角点 + "#b\t#v2614022# 超级宿命剪刀\t[需#v4310088# 28 个]#k  #l\r\n"//3
			
			text += "#L2##r" + 蓝色角点 + "#b\t#v2022428# 100R赞助箱子\t[需#v4310088# 100 个]#k  #l\r\n"//3
			
			text += "#L3##r" + 蓝色角点 + "#b\t#v2048088# 宠物攻击卷轴\t[需#v4310088# 48 个]#k  #l\r\n"//3
			
			// text += "#L4##r" + 蓝色角点 + "#b\t#v2614001# 10W破攻石\t    [需#v4310088# 598 个]#k  #l\r\n"//3
			
			// text += "#L8##r" + 蓝色角点 + "#b\t#v2614000# 1W破攻石\t    [需#v4310088# 88 个]#k  #l\r\n"//3
			
			text += "#L5##r" + 蓝色角点 + "#b\t#v2350002# 角色改名券\t     [需#v4310088# 58 个]#k  #l\r\n";//3
			
			text += "#L6##r" + 蓝色角点 + "#b\t#v2350000# 角色栏增加券   [需#v4310088# 198 个]#k  #l\r\n";//3
			
			text += "#L7##r" + 蓝色角点 + "#b\t#v4310025# 岛主银币\t    [需#v4310088# 30 个]#k  #l\r\n";//3
			
			text += "#L9##r" + 蓝色角点 + "#b\t#v5150038# 超级明星美发卡\t    [需#v4310088# 20 个]#k  #l\r\n";//3
			
			text += "\r\n";
            // text += "#L2##r" + 蓝色角点 + "#r 累计~~ 1000元礼包 #rNew     #l \r\n\r\n"//3

            // text += "#L3##r" + 蓝色角点 + "#r 累计~~ 2000元礼包 #rNew     #l \r\n\r\n"//3

            // text += "#L4##r" + 蓝色角点 + "#r 累计~~ 3000元礼包 #rNew     #l \r\n\r\n"//3

            // text += "#L5##r" + 蓝色角点 + "#r 累计~~ 4000元礼包 #rNew     #l \r\n\r\n"//3
			
			// text += "#L6##r" + 蓝色角点 + "#r 累计~~ 5000元礼包 #rNew       #l \r\n\r\n"//3
			
			// text += "#L7##r" + 蓝色角点 + "#r 累计~~ 8000元礼包 #rNew       #l \r\n\r\n"//3
			
			// text += "#L8##r" + 蓝色角点 + "#r 累计~~ 10000元礼包 #rNew       #l \r\n\r\n"//3
			
			// text += "#L9##r" + 蓝色角点 + "#r 累计~~ 15000元礼包 #rNew       #l \r\n\r\n"//3
			
			
		//	text += "#L11##r" + 蓝色角点 + "#r 累计充值~~ 300元技能礼包#rNew   #l \r\n\r\n"//3

text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"




text += ""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n"
 if (cm.getPlayer().isGM()) {
               // text += " \t\t#r以下功能，仅管理员可见，普通玩家看不见\r\n"
              //  text += "#L1000#快捷传送#l\t#L1001#快速转职#l\t#L1002#刷物品#l\t#L1003#满技能#l\r\n#L1004#刷点卷金币#l\r\n"

            
  }
		    cm.sendSimple(text);
        } else if (selection == 1) {//枫叶合成
			cm.dispose();
            cm.openNpc(9900004, 3500);
        } else if (selection == 2) {//皇家班
          cm.dispose();
			cm.openNpc(9900004, 3501);
        } else if (selection == 3) { //巨匠
           cm.dispose();
			cm.openNpc(9900004, 3502);
	    } else if (selection == 4) {//法服呐
		cm.dispose();
            cm.openNpc(9900004, 3503);
        } else if (selection == 5) {//旋涡
		cm.dispose();
            cm.openNpc(9900004, 3504);
        } else if (selection == 6) {//埃苏
		cm.dispose();
            cm.openNpc(9900004, 3505);
        } else if (selection == 7) {//神器
		cm.dispose();
            cm.openNpc(9900004, 3506);
        } else if (selection == 8) {//发型脸型
		 cm.dispose();
           cm.openNpc(9900004, 3507);
        } else if (selection == 9) {//快速升级
		cm.dispose();
            cm.openNpc(9900004, 3508);
	    } else if (selection == 11) {//技能
		cm.dispose();
            cm.openNpc(9900004, 3011);
        } else if (selection == 919) {//跑商送货 
		cm.dispose();
            cm.openNpc(9900004, 4000);
        } else if (selection == 10) {//免费点装
		cm.dispose();
            cm.openNpc(9900004, 77);
        } else if (selection == 11) {//坐骑补给
		cm.dispose();
            cm.openNpc(9900004, 68);
        } else if (selection == 12) {//豆豆兑换
		cm.dispose();
            cm.openNpc(2000, 22);
        } else if (selection == 13) {//勋章领取
		cm.dispose();
            cm.openNpc(9900004, 7);
        } else if (selection == 14) {//本服介绍
		cm.dispose();
            cm.openNpc(9310033, 0);
        } else if (selection == 10) {//充值介绍
		cm.dispose();
            cm.openNpc(9900004, 77);
        } else if (selection == 2999) {//每日任务
		cm.dispose();
            cm.openNpc(9900004, 2);
        } else if (selection == 3999) {//每日签到
		cm.dispose();
            cm.openNpc(9010010, 0);
        } else if (selection == 4999) {//流浪商人
		cm.dispose();
            cm.openNpc(9310057, 0);
        } else if (selection == 5999) {//血衣制作
		cm.dispose();
            cm.openNpc(2100007, 0);
        } else if (selection == 6999) {//抽奖
		cm.dispose();
            cm.openNpc(9050007, 0);
        } else if (selection == 7999) {//觉醒
		cm.dispose();
            cm.openNpc(9000021, 0);
        } else if (selection == 999) {//21点
		cm.dispose();
            cm.openNpc(9900004, 932);
        } else if (selection == 9999) {//开锁
		cm.dispose();
            cm.openNpc(9000008, 0);
        } else if (selection == 10999) {//
		cm.dispose();
            cm.openNpc(2000, 0);
        } else if (selection == 1000) {//
	    cm.dispose();
            cm.openNpc(9900004, 1004);
        } else if (selection == 6666) {//cm.dispose();
		cm.dispose();
            cm.openNpc(9900004, 16);
        } else if (selection == 7777) {//
		cm.dispose();
            cm.openNpc(9900004, 7);
        } else if (selection == 8888) {//
		cm.dispose();
            cm.openNpc(9900004, 6);
        } else if (selection == 1002) {//
           cm.openNpc(9900004, 1002);
            cm.dispose();
        } else if (selection == 1003) {//
            cm.dispose();
          cm.openNpc(9100200, 0);
        } else if (selection == 111999) {//
            cm.dispose();
          cm.openNpc(9270050, 0);
        } else if (selection == 1111999) {//
            cm.dispose();
          cm.openNpc(9310071, 0);
        } else if (selection == 1004) {//
            cm.gainNX(999999);;
            cm.gainMeso(210000000);
              cm.sendOk("\r\n\r\n\t\t\t#e#r恭喜你获得了99999点卷!\r\n\r\n\t\t\t#e#r恭喜你获得了2E金币!");
            cm.dispose();
        } else if (selection == 9999) {//
		if(cm.getBossLog("2016活动") <= 0 && cm.canHold(4001215,3) && cm.getLevel() >= 8){
			cm.setBossLog("2016活动");
            cm.gainItem(4001215, 3);
			cm.worldMessage(6,"玩家：["+cm.getName()+"]领取了2016-04-10晚上活动集体奖励坐骑卷x3！");
            cm.sendOk("领取成功！");
            cm.dispose();
		}else{
            cm.sendOk("你已经领取过了！\r\n或者请留出背包空间");
            cm.dispose();
		}
		}
    }
}


