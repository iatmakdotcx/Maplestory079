/*
 脚本：拍卖主菜单
 */
//时间引用
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
//素材引用
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var r = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";
var 闹钟图标 = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";
var 音符 = "#fEffect/CharacterEff/1003276/0/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 红色箭头 = "#fUI/UIWindow/Quest/icon6/7#";
var 蓝色角点 = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var 心 = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //获得年份
var month = ca.get(java.util.Calendar.MONTH) + 1; //获得月份
var day = ca.get(java.util.Calendar.DATE);//获取日
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //获得小时
var minute = ca.get(java.util.Calendar.MINUTE);//获得分钟
var second = ca.get(java.util.Calendar.SECOND); //获得秒
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var 正方箭头 = "#fUI/Basic/BtHide3/mouseOver/0#";
var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
var 大粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/4#";  //
var 小粉红爱心 = "#fItem/Etc/0427/04270001/Icon8/5#";  //
var 小黄星 = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var 大黄星 = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var 小水滴 = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var 大水滴 = "#fItem/Etc/0427/04270001/Icon10/4#";  //
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //粉兔子
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //橙兔子
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //蓝兔子
var 邪恶小兔 = "#fEffect/CharacterEff/1112960/3/0#";  //邪恶小兔 【小】
var 邪恶小兔2 = "#fEffect/CharacterEff/1112960/3/1#";  //邪恶小兔 【大】
var 花草 ="#fEffect/SetEff/208/effect/walk2/4#";
var 花草1 ="#fEffect/SetEff/208/effect/walk2/3#";
var 小花 ="#fMap/MapHelper/weather/birthday/2#";
var 桃花 ="#fMap/MapHelper/weather/rose/4#";
var 金枫叶 ="#fMap/MapHelper/weather/maple/2#";
var 红枫叶 ="#fMap/MapHelper/weather/maple/1#";
var 银杏叶 ="#fMap/MapHelper/weather/maple/3#";
var 小烟花 ="#fMap/MapHelper/weather/squib/squib4/1#";
var 星星 ="#fMap/MapHelper/weather/witch/3#";

var 抽奖系列 = "宠物装备";
var 开放 = true;


status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("不想使用吗？…百宝箱里有各类#b奇特座椅或卷轴、装备、新奇道具#k哦！\r\n\r\n");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		 
		 if(!开放){
			cm.sendOk("抱歉，维护中，暂不开放！\r\n\r\n");
            cm.dispose();
			return;
		 }	
		 
            var   text = "#r使用8888点券就可以随机获得百宝箱里的礼物，快行动吧！\r\n#e#d" + 小烟花 + "任何建议，请联系管理，谢谢！" + 小烟花 + "#n#k\r\n\r\n";
        text += "#L1#" + 小烟花 +  "使用8888点券抽#r1#k次#l#L10"+"#" + 小烟花 + "使用88880点券抽#r10#k次\r\n\r\n";
        text += "#L101##r" + 星星 + "想看百宝箱里有什么东西吗" + 星星 + "#l\r\n\r\n";
		if(cm.getPlayer().getGMLevel() >= 100){
			text += "\r\n";
			text += "#b---------------------以下为GM可见---------------------\r\n";
			text += "#L103##r" + 星星 + "批量添加抽奖物品" + 星星 + "#l\r\n\r\n";
		}
        cm.sendSimple(text);
    } else if (status == 1) {
        if (selection == 102) {
            cm.dispose();
            cm.openNpc(9310022, 102);
        }else if(selection == 106){
			cm.dispose();
			cm.openNpc(9900001, "百宝券抽奖");
			//cm.openNpc(9310022,103 );
			return;
		}else if(selection == 104){
			cm.dispose();
			cm.openNpc(9310022, "装备积分兑换");
			return;
		}else if(selection == 105){
			cm.dispose();
			cm.openNpc(9310022, 104);
			return;
		} else if (selection == 101) {
            var textItem = ""
            // for (var i = 0; i < itemList.length; i++) {
                // textItem += "#i" + itemList[i][0] + ":#"
            // }
			var rewardIDs = cm.读取奖品ID(抽奖系列);
			var chances = cm.读取奖品概率(抽奖系列);
			for(var i = 0; i < rewardIDs.size(); i++){
				textItem += "#i" + rewardIDs.get(i) + ":# ";
			}
			textItem += "\r\n";
            cm.sendOk("使用8888点券随机获得以下道具，快行动吧！\r\n#e#r任何建议，请联系管理，谢谢！#n#k\r\n" + textItem);
            status = -1;
            //cm.safeDispose();
        } else if (selection == 103) {
			if(cm.批量添加抽奖物品(抽奖系列, items, weight, announcement)){
				cm.sendOk("添加成功\r\n");
				cm.dispose();
				return;
			}
            cm.sendOk("添加失败\r\n");
			cm.dispose();
			return;
            status = -1;
            //cm.safeDispose();
        } else if (selection > 0 && selection <= 10) {
			//cm.getPlayer().getCSPoints(1) < 500
           if  (cm.getPlayer().getNX() < 8888 ){
                cm.sendOk("点券不足！");
                cm.dispose();
                return;
            }
			
			var message = "你获得了:\r\n";
			for(var i = 1;  i <= selection; i++){
				if  (cm.getPlayer().getNX() < 8888 ){
						cm.sendOk("点券不足！");
						cm.dispose();
						return;
				}
				var itemid = cm.抽奖(抽奖系列, "宠物装备百宝箱");
				var 数量 = 1;
				if (itemid != -1) {
					cm.gainItem(itemid, 数量);
					cm.gainNX(-8888);
					message += cm.显示物品(itemid) + "\r\n";
					cm.getPlayer().dropMessage("你获得了 " + cm.读取奖品名称(抽奖系列, itemid) + "");
				} else {
					cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
					cm.dispose();
					break;
				}
			}
			cm.sendOk(message);
			cm.dispose();
			
        }

    }
}

/* var items = new Array(01930000,01930001,01932000,01932001,01932002,01932003,01932004,01932005,01932006,01932007,01932008,01932009,01932010,01932011,01932012,01932013,01932014,01932015,01932016,01932017,01932018,01932020,01932021,01932022,01932023,01932025,01932026,01932027,01932028,01932029,01932030,01932031,01932032,01932033,01932034,01932035,01932036,01932038,01932041,01932043,01932044,01932045,01932046,01932047,01932048,01932049,01932050,01932051,01932052,01932053,01932054,01932055,01932056,01932057,01932058,01932059,01932060,01932061,01932062,01932063,01932064,01932065,01932066,01932071,01932072,01932078,01932080,01932081,01932083,01932084,01932085,01932086,01932087,01932088,01932089,01932090,01932091,01932092,01932093,01932094,01932095,01932096,01932097,01932098,01932099,01932100,01932102,01932103,01932105,01932106,01932107,01932108,01932109,01932110,01932112,01932113,01932114,01932115,01932116,01932117,01932118,01932119,01932120,01932121,01932122,01932123,01932124,01932126,01932127,01932128,01932129,01932130,01932131,01932132,01932133,01932134,01932135,01932136,01932137,01932138,01932139,01932140,01932141,01932142,01932143,01932144,01932145,01932146,01932147,01932148,01932149,01932150,01932151,01932152,01932153,01932154,01932155,01932156,01932157,01932158,01932159,01932161,01932162,01932163,01932164,01932165,01932166,01932167,01932168,01932169,01932170,01932171,01932172,01932173,01932174,01932175,01932176,01932177,01932178,01932179,01932180,01932181,01932182,01932183,01932184,01932185,01932186,01932187,01932188,01932189,01932190,01932191,01932192,01932193,01932194,01932195,01932196,01932197,01932198,01932199,01932200,01932201,01932202,01932203,01932204,01932205,01932206,01932207,01932208,01932211,01932212,01932213,01932214,01932215,01932216,01932217,01932218,01932219,01932220,01932221,01932222,01932223,01932224,01932225,01932226,01932227,01932228,01932230,01932231,01932232,01932234,01932235,01932236,01932237,01932238,01932239,01932240,01932241,01932242,01932243,01932244,01932245,01932246,01932247,01932248,01932249,01932250,01932251,01932252,01932253,01932254,01932255,01932256,01932258,01932259,01932260,01932261,01932262,01932263,01932264,01932265,01932266,01932267,01932268,01932269,01932270,01932271,01932272,01932273,01932274,01932275,01932276,01932277,01932279,01932280,01932281,01932282,01932286,01932287,01932288,01932289,01932290,01932291,01932292,01932293,01932294,01932295,01932296,01932297,01932298,01932299,01932300,01932301,01932302,01932303,01932304,01932305,01932306,01932307,01932308,01932310,01932311,01932313,01932314,01932315,01932316,01932317,01932318,01932319,01932320,01932321,01932322,01932323,01932324,01932325,01932326,01932327,01932329,01932330,01932332,01932333,01932334,01932335,01932336,01932337,01932338,01932339,01932341,01932342,01932343,01932344,01932345,01932346,01932347,01932348,01932349,01932350,01932351,01932352,01932353,01932354,01932355,01932361,01932366,01932374,01932376,01932378,01932379,01932382,01932385,01932387,01932388,01932389,01932391,01932392,01932393,01932400,01932403,01932404,01932405,01932407,01932408,01932409,01932411,01932414,01932416,01932419,01932420,01932433,01932435,01932437,01933379,01933380,01933381,01933382,01933383,01933384,01933385,01933386,01933387,01933388,01933389,01933390,01933391,01933392,01933393,01933394,01933395,01933396,01933397,01933398,01933399,01933400,01933401,01933402,01933403,01933404,01933405,01933406,01933407,01933408,01933409,01933410,01933411,01933412,01933413,01933414,01933415,01933416,01933417,01933418,01933419,01933420,01933421,01933422,01933423,01933424,01933425,01933426,01933427,01933428,01933429,01933430,01933431,01933432,01933433,01933434,01933435,01933436,01933437,01933438,01933439,01933440,01933441,01933442,01933443,01933444,01933445,01933446,01933447,01933448,01933449,01933450,01933451,01933452,01933453,01933454,01933455,01933456,01933457,01933458,01933459,01933460,01933461,01933462,01933463,01933464,01933465,01933466,01933467,01933468,01933469,01933470,01933471,01933472,01933473,01933474,01933475,01933476,01933477,01933478,01933479,01933480,01933481,01933482,01933483,01933484,01933485,01933486,01933487,01933488,01933489,01933490,01933491,01933492,01933493,01933494,01933495,01933496,01933497,01933498,01933499,01933500,01933501,01933502,01933503,01933504,01933505,01933506,01933507,01933508,01933509,01933510,01933511,01933512,01933513,01933514,01933515,01933516,01933517,01933518,01933519,01933520,01933521,01933522,01933523,01933524,01933525,01933526,01933527,01933528,01933529,01933530,01933531,01933532,01933533,01933534,01933535,01933536,01933537,01933538,01933539,01933540,01933541,01933542,01933543,01933544,01933545,01933546,01933547,01933548,01933549,01933550,01933551,01933552,01933553,01933554,01933555,01939000,01939001,01939002,01939003,01939004,01939005,01939006);

var weight = new Array(10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10);

var announcement = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1); */
