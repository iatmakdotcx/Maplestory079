﻿status = -1;
var itemList = Array(
        Array(4001137, 931, 1, 0), //乖宝宝印章
        Array(4001137, 1, 1, 0), //乖宝宝印章
        Array(2022233, 930, 1, 0), //叶子口味番茄汁
        Array(2022235, 930, 1, 0), //蓝水灵口味番茄汁
        Array(4200002, 930, 1, 0), //拉图斯的御守
        Array(2022216, 930, 1, 0), //菇菇宝贝的御守
        Array(4200000, 930, 1, 0), //残暴炎魔的御守	
        Array(1082146, 930, 1, 0), //红色工作手套
        Array(1082147, 930, 1, 0), //蓝色工作手套
        Array(1082148, 930, 1, 0), //紫色工作手套
        Array(1082150, 930, 1, 0), //灰色工作手套
        Array(1082145, 930, 1, 0), //黄色工作手套
        Array(1002600, 930, 1, 0), //红色枫叶头带
        Array(1002601, 930, 1, 0), //黄色枫叶头带
        Array(1102079, 800, 1, 0), //破旧的红色披风
        Array(1102081, 800, 1, 0), //破旧的黄色披风
        Array(1102082, 800, 1, 0), //破旧的黑色披风
        Array(1002602, 800, 1, 0), //蓝色枫叶头带
        Array(1332053, 600, 1, 0), //野外烧烤串
        Array(1322051, 600, 1, 0), //七夕彩竹
        Array(1302110, 600, 1, 0), //火柴
        Array(1302111, 600, 1, 0), //叉子
        Array(1382015, 600, 1, 0), //毒之菇
        Array(1382038, 400, 1, 0), //糖葫芦
        Array(1472054, 400, 1, 0), //信玄
        Array(1372017, 400, 1, 0), //路灯
        Array(1302031, 400, 1, 0), //七星剑
        Array(2044105, 170, 1, 1), //双手斧攻击诅咒卷轴30%
        Array(2044205, 170, 1, 1), //双手棍攻击诅咒卷轴30%
        Array(1012072, 170, 1, 1), //哈密瓜冰棒
        Array(1012073, 170, 1, 1), //西瓜冰棒
        Array(1142606, 170, 1, 1), //枫之谷天生单身
        Array(1142607, 170, 1, 1), //枫之谷心碎者
        Array(1142204, 170, 1, 1), //金达莱胸针
        Array(1142205, 170, 1, 1), //连翘花胸针
        Array(1142206, 170, 1, 1), //幸运草胸针
        Array(1012056, 170, 1, 1), //狗鼻
        Array(1102234, 170, 1, 1), //奇多豹掌气球
        Array(1002799, 170, 1, 1), //桂冠
        Array(1302087, 170, 1, 1), //奖杯武器
        Array(3010032, 170, 1, 1), //黄色五环椅
        Array(3010033, 170, 1, 1), //绿色五环椅
        Array(3010002, 170, 1, 1), //绿色设计师椅
        Array(3010026, 170, 1, 1), //幽魂发条熊椅
        Array(3010094, 170, 1, 1), //缎带肥肥椅
        Array(3010095, 170, 1, 1), //石巨人座椅
        Array(3010075, 170, 1, 1), //留声机椅
        Array(3010077, 170, 1, 1), //猫头鹰椅
        Array(3010154, 170, 1, 1), //机械式椅子
        Array(3010096, 170, 1, 1), //恐龙化石宝座
        Array(3010068, 170, 1, 1), //荷叶下椅子
        Array(3010010, 170, 1, 1), //白色海豹抱枕椅
        Array(2043105, 170, 1, 1), //单手斧攻击诅咒卷轴30%
        Array(2043205, 170, 1, 1), //单手棍攻击诅咒卷轴30%
        Array(1032127, 120, 1, 1), //许愿树银耳环
        Array(1112915, 120, 1, 1), //欢乐指环
        Array(1022047, 120, 1, 1), //猫头鹰
        Array(1102042, 120, 1, 1), //紫色冒险家披风
        Array(1142207, 120, 1, 1), //春花胸针
        Array(1012071, 120, 1, 1), //巧克力冰棒
        Array(1092022, 120, 1, 1), //调色盘
        Array(1302061, 120, 1, 1), //树藤鞭子
        Array(1332101, 120, 1, 1), //奇多豹掌武器
        Array(1422068, 120, 1, 1), //奇多豹掌棍
        Array(3010016, 120, 1, 1), //黑色海豹抱枕
        Array(3010007, 120, 1, 1), //粉红海豹抱枕椅
        Array(3010003, 120, 1, 1), //红色设计师椅
        Array(3010006, 120, 1, 1), //设计师椅(黄色)
        Array(3010013, 120, 1, 1), //遮阳椅
        Array(3010020, 120, 1, 1), //澎澎桧木桶
        Array(3010021, 120, 1, 1), //暖暖桌
        Array(3010025, 120, 1, 1), //枫树下
        Array(3010027, 120, 1, 1), //奇多元气加倍椅
        Array(2043305, 120, 1, 1), //短剑攻击诅咒卷轴30%
        Array(2044804, 120, 1, 1), //指虎攻击诅咒卷轴30%
        Array(1112922, 120, 1, 1), //奇多豹掌戒指
        Array(1082149, 90, 1, 1), //褐色工作手套
        Array(1004379, 90, 1, 1), //橘子帽子
        Array(1004380, 90, 1, 1), //橘子帽子
        Array(1004381, 90, 1, 1), //橘子帽子
        Array(1004382, 90, 1, 1), //橘子帽子
        Array(1102041, 90, 1, 1), //粉红冒险家披风
        Array(1302024, 90, 1, 1), //纸剑
        Array(1302021, 90, 1, 1), //橡皮榔头
        Array(3010017, 90, 1, 1), //金色海豹抱枕
        Array(3010031, 90, 1, 1), //红色五环椅
        Array(3010045, 90, 1, 1), //冰椅
        Array(3010051, 90, 1, 1), //公砂兔椅
        Array(3010046, 90, 1, 1), //赤龙椅
        Array(3010047, 90, 1, 1), //蓝龙椅
        Array(3010120, 90, 1, 1), //兔子篮子椅子
        Array(2043005, 90, 1, 1), //单手剑攻击诅咒卷轴30%
        Array(2044405, 90, 1, 1), //矛攻击诅咒卷轴30%
        Array(2044505, 90, 1, 1), //弓攻击诅咒卷轴30%
        Array(2044705, 90, 1, 1), //拳套攻击诅咒卷轴30%
        Array(2044904, 90, 1, 1), //火枪攻击诅咒卷轴30%
        Array(2040509, 90, 1, 1), //套服敏捷诅咒卷轴30%
        Array(2040521, 90, 1, 1), //套服幸运诅咒卷轴30%		
        Array(3010052, 90, 1, 1), //母砂兔椅
        Array(3010029, 90, 1, 1), //蓝色五环椅
        Array(3010030, 90, 1, 1), //黑色五环椅
        Array(1132088, 90, 1, 1), //葡萄腰带
        Array(1122019, 90, 1, 1), //枫叶之心
        Array(1012070, 90, 1, 1), //草莓冰棒
        Array(2040519, 90, 1, 1), //套服智力诅咒卷轴30%
        Array(2040533, 90, 1, 1), //套服力量诅咒卷轴30%
        Array(3010070, 50, 1, 1), //皮卡啾椅子
        Array(3010014, 50, 1, 1)//弯弯月亮
        );

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
                    "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063#  #i3994071##i3994077#\r\n" +
                    "        #r此为泡泡谷转蛋机，您不想转蛋吗？");
            cm.dispose();
        }
        status--;
    }

    if (status == 0) {
        if (cm.getPlayer().getLevel() < 30) {
            cm.sendOk("\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
                    "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063#  #i3994071##i3994077#\r\n" +
                    "        #r此为泡泡谷转蛋机，需要30等才能抽奖。");
            cm.dispose();
        } else if (cm.haveItem(5220000)) {
            cm.sendYesNo("\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
                    "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063#  #i3994071##i3994077#\r\n" +
                    "           #r此为泡泡谷转蛋机，你要转蛋吗?#k\r\n");
        } else {
            cm.sendOk("\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
                    "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063#  #i3994071##i3994077#\r\n" +
                    "       #r此为泡泡谷转蛋机，请到商城购买转蛋卷。#k\r\n");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 1000);
        if (chance > 931) {
            chance = 931;
        }
        if (chance < 1) {
            chance = 931;
        }
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            if (cm.haveItem(5220000) && cm.canHold()) {
                cm.gainItem(5220000, -1);
                if (notice == 1) {
                    cm.gainGachaponItem(itemId, quantity, "潮流转蛋机");
                } else {
                    cm.gainItem(itemId, quantity);
                }
                cm.getItemLog("潮流转蛋机", " 抽到 " + itemId + "(" + cm.getItemName(itemId) + ") " + quantity + "个。");
                cm.sendOk("\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
                    "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063#  #i3994071##i3994077#\r\n" +
                    " #r此为泡泡谷转蛋机，恭喜你得到了#k #b#t" + itemId + "##k #r" + quantity + "个。#k");
            } else {
                cm.sendOk("请确认背包是否已经满了以及是否有转蛋卷唷。");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("出现未知问题，请稍后再试。");
            cm.safeDispose();
        }
    } else {
        cm.dispose();
    }
}
