﻿status = -1;
var itemList = Array(
        Array(4001137, 911, 1, 0), //乖宝宝印章
        Array(4001137, 1, 1, 0), //乖宝宝印章
        Array(2022251, 830, 4, 0), //枫叶棒棒糖
        Array(2022245, 900, 4, 0), //心跳停止糖
        Array(2022220, 900, 1, 0), //拉图斯的御守
        Array(2022216, 900, 1, 0), //菇菇宝贝的御守
        Array(2022217, 900, 1, 0), //残暴炎魔的御守	
        Array(1102033, 850, 1, 0), //红龙纹披风
        Array(1102034, 850, 1, 0), //蓝龙纹披风
        Array(1102035, 850, 1, 0), //黑龙纹披风
        Array(1002871, 400, 1, 0), //麋鹿角
        Array(1002872, 400, 1, 0), //麋鹿角
        Array(1002873, 400, 1, 0), //麋鹿角
        Array(1002874, 400, 1, 0), //麋鹿角
        Array(1082145, 550, 1, 0), //黄色工作手套
        Array(1082146, 550, 1, 0), //红色工作手套
        Array(1082147, 550, 1, 0), //蓝色工作手套
        Array(1082148, 500, 1, 0), //紫色工作手套
        Array(1002602, 500, 1, 0), //蓝色枫叶头带
        Array(1332053, 400, 1, 0), //野外烧烤串
        Array(1322051, 400, 1, 0), //七夕彩竹
        Array(1302110, 400, 1, 0), //火柴
        Array(1302111, 400, 1, 0), //叉子
        Array(1382015, 400, 1, 0), //毒之菇
        Array(1382038, 400, 1, 0), //糖葫芦
        Array(1472054, 400, 1, 0), //信玄
        Array(1372017, 400, 1, 0), //路灯
        Array(1302031, 400, 1, 0), //七星剑
        Array(1102040, 400, 1, 0), //黄色冒险家披风
        Array(1032017, 500, 1, 0), //玫瑰耳环
        Array(1032023, 500, 1, 0), //草莓耳环
        Array(1072262, 500, 1, 0), //黑色桃乐斯皮鞋
        Array(1322001, 100, 1, 1), //槌子
        Array(1322006, 100, 1, 1), //钢管
        Array(1142374, 110, 1, 1), //圣诞奇蹟
        Array(1032128, 120, 1, 1), //许愿树金耳环
        Array(1132103, 120, 1, 1), //黄金腰带
        Array(1022162, 110, 1, 1), //旅行者的翅膀造型眼镜
        Array(1112596, 110, 1, 1), //拉尔孙的挑战型戒指
        Array(1004579, 100, 1, 1), //乖巧羊帽子
        Array(1012310, 200, 1, 1), //情人甜美巧克力
        Array(1082514, 110, 1, 1), //情人节手环<下级>
        Array(1142681, 120, 1, 1), //守护情侣的单身
        Array(1142713, 120, 1, 1), //非自发性的单身主义者
        Array(1012164, 200, 1, 1), //鬼娃恰吉的伤口
        Array(1012167, 140, 1, 1), //鬼娃恰吉的伤口
        Array(1012168, 80, 1, 1), //鬼娃恰吉的伤口
        Array(1012169, 30, 1, 1), //鬼娃恰吉的伤口
        Array(1402044, 100, 1, 1), //南瓜灯笼
        Array(1003439, 140, 1, 1), //情人节氢气球
        Array(1002596, 100, 1, 1), //小狗帽子
        Array(1002723, 100, 1, 1), //年糕帽
        Array(1032028, 200, 1, 1), //红祖母绿耳环
        Array(1032194, 160, 1, 1), //里贝卡的葡萄耳环
        Array(1122109, 160, 1, 1), //葡萄项坠
        Array(1052350, 140, 1, 1), //小丘运动服
        Array(1082533, 140, 1, 1), //爱里涅的手镯
        Array(1102590, 100, 1, 1), //爱里捏的翅膀
        Array(1092035, 100, 1, 1), //可乐战盾
        Array(1102370, 160, 1, 1), //西格诺斯粉丝俱乐部气球
        Array(1102371, 160, 1, 1), //巴雷利粉丝俱乐部气球
        Array(1102372, 150, 1, 1), //莉琳粉丝俱乐部气球
        Array(1302145, 160, 1, 1), //3rd 不速之客 单手剑
        Array(1332123, 160, 1, 1), //3rd 不速之客 短剑
        Array(1372076, 160, 1, 1), //3rd 不速之客 杖
        Array(1382097, 160, 1, 1), //3rd 不速之客 长杖
        Array(1402088, 160, 1, 1), //3rd 不速之客 双手剑
        Array(1432079, 160, 1, 1), //3rd 不速之客枪
        Array(1442109, 160, 1, 1), //3rd 不速之客 矛
        Array(1452104, 160, 1, 1), //3rd 不速之客 弓
        Array(1462089, 160, 1, 1), //3rd 不速之客 弩
        Array(1472115, 160, 1, 1), //3rd 不速之客 拳套
        Array(1482077, 160, 1, 1), //3rd 不速之客 指虎
        Array(1492077, 160, 1, 1), //3rd 不速之客 火枪
        Array(1382045, 80, 1, 1), //火云长杖
        Array(1382046, 120, 1, 1), //毒龙长杖
        Array(1382047, 80, 1, 1), //冰魄长杖
        Array(1382048, 120, 1, 1), //朱雀长杖
        Array(1132049, 150, 1, 1), //力气褐色锁扣腰带
        Array(1132059, 150, 1, 1), //智慧褐色锁扣腰带
        Array(1132069, 150, 1, 1), //锋利褐色锁扣腰带
        Array(1132079, 150, 1, 1), //幸运褐色锁扣腰带
        Array(1122297, 120, 1, 1), //橘子项炼
        Array(1142260, 100, 1, 1), //新手枫叶转蛋券勋章
        Array(1002931, 140, 1, 1), //蕃茄帽子(力量)
        Array(1002932, 140, 1, 1), //蕃茄帽子(敏捷)
        Array(1002933, 140, 1, 1), //蕃茄帽子(智力)
        Array(1002934, 140, 1, 1), //蕃茄帽子(幸运)
        Array(1052191, 140, 1, 1), //蕃茄服装
        Array(1142073, 120, 1, 1), //和我做朋友勋章
        Array(1142376, 120, 1, 1), //神出鬼没
        Array(1012056, 120, 1, 1), //狗鼻
        Array(1102234, 120, 1, 1), //奇多豹掌气球
        Array(1002799, 120, 1, 1), //桂冠
        Array(1302087, 140, 1, 1), //奖杯武器
        Array(1032127, 150, 1, 1), //许愿树银耳环
        Array(1112915, 150, 1, 1), //欢乐指环
        Array(1022047, 120, 1, 1), //猫头鹰
        Array(1102042, 150, 1, 1), //紫色冒险家披风
        Array(1142207, 160, 1, 1), //春花胸针
        Array(1092022, 120, 1, 1), //调色盘
        Array(1302061, 120, 1, 1), //树藤鞭子
        Array(1332101, 120, 1, 1), //奇多豹掌武器
        Array(1422068, 120, 1, 1), //奇多豹掌棍
        Array(2043305, 160, 1, 1), //短剑攻击诅咒卷轴30%
        Array(2044804, 160, 1, 1), //指虎攻击诅咒卷轴30%
        Array(1112922, 150, 1, 1), //奇多豹掌戒指
        Array(1082149, 140, 1, 1), //褐色工作手套
        Array(1072798, 140, 1, 1), //妖精的红色帆布鞋
        Array(1082179, 140, 1, 1), //黄击中手套
        Array(1004379, 170, 1, 1), //橘子帽子
        Array(1004380, 170, 1, 1), //橘子帽子
        Array(1004381, 170, 1, 1), //橘子帽子
        Array(1004382, 170, 1, 1), //橘子帽子
        Array(1102041, 140, 1, 1), //粉红冒险家披风
        Array(1302024, 100, 1, 1), //纸剑
        Array(1302021, 100, 1, 1), //橡皮榔头
        Array(2043005, 130, 1, 1), //单手剑攻击诅咒卷轴30%
        Array(2043205, 160, 1, 1), //单手棍攻击诅咒卷轴30%
        Array(2044405, 130, 1, 1), //矛攻击诅咒卷轴30%
        Array(2044505, 130, 1, 1), //弓攻击诅咒卷轴30%
        Array(2044705, 130, 1, 1), //拳套攻击诅咒卷轴30%
        Array(2043805, 130, 1, 1), //长杖魔力诅咒卷轴30%
        Array(2043705, 130, 1, 1), //短杖魔力诅咒卷轴30%
        Array(2044904, 130, 1, 1), //火枪攻击诅咒卷轴30%
        Array(2040509, 140, 1, 1), //套服敏捷诅咒卷轴30%
        Array(2040521, 140, 1, 1), //套服幸运诅咒卷轴30%		
        Array(2044305, 160, 1, 1), //枪攻击诅咒卷轴30%		
        Array(2044605, 160, 1, 1), //弩攻击诅咒卷轴30%		
        Array(1132088, 140, 1, 1), //葡萄腰带
        Array(1122019, 130, 1, 1), //枫叶之心
        Array(1012484, 100, 1, 1), //双十纪念喇叭
        Array(1122209, 120, 1, 1), //黄金月饼项炼
        Array(1012070, 160, 1, 1), //草莓冰棒
        Array(2040519, 120, 1, 1), //套服智力诅咒卷轴30%
        Array(2040533, 120, 1, 1), //套服力量诅咒卷轴30%
        Array(1372035, 140, 1, 1), //旋火短杖
        Array(1372036, 200, 1, 1), //五毒短杖
        Array(1372037, 140, 1, 1), //极冻短杖
        Array(1372038, 200, 1, 1), //雷鸣短杖
        Array(1302001, 100, 1, 1), //锯
        Array(1302037, 100, 1, 1), //喇叭
        Array(1302080, 100, 1, 1), //枫叶小电灯
        Array(1302105, 120, 1, 1), //圣诞节天使
        Array(1302132, 100, 1, 1), //打猪棒
        Array(1302150, 100, 1, 1), //魔女扫把
        Array(1302201, 100, 1, 1), //福袋
        Array(1322070, 100, 1, 1), //西班牙火腿
        Array(1322225, 100, 1, 1), //冲击波来福
        Array(1332030, 100, 1, 1), //扇子
        Array(1322023, 140, 1, 1), //蓝花纹游泳圈
        Array(1322024, 140, 1, 1), //紫游泳圈
        Array(1322025, 140, 1, 1), //救生圈
        Array(1302293, 140, 1, 1), //粉红色游泳圈
        Array(3010298, 140, 1, 1), //北极熊椅子
        Array(3010048, 140, 1, 1), //耶诞树椅子
        Array(3010049, 140, 1, 1), //冰窖椅
        Array(3010061, 100, 1, 1), //枫树下
        Array(3010135, 100, 1, 1), //独角狮椅子
        Array(3010140, 100, 1, 1), //病床
        Array(3010223, 100, 1, 1), //柯基犬椅子
        Array(3010224, 100, 1, 1), //麻糬冰淇淋椅
        Array(3010433, 100, 1, 1), //魔法皮卡啾
        Array(3010447, 100, 1, 1), //好困啊鸟椅子
        Array(3010449, 100, 1, 1), //治好要10周椅子
        Array(3010453, 100, 1, 1), //乘著暴风的兔子椅
        Array(3010454, 140, 1, 1), //爱心云朵椅
        Array(3010584, 140, 1, 1), //圣诞幽灵
        Array(1113076, 160, 1, 1), //最初的戒指
        Array(1072447, 160, 1, 1), //雪冰的鞋
        Array(1082276, 160, 1, 1), //雪冰的手套
        Array(1102246, 160, 1, 1), //雪冰的披风
        Array(1132140, 160, 1, 1), //温暖的腹带
        Array(3010024, 120, 1, 1), //粉红发条熊椅子
        Array(3010038, 120, 1, 1), //透明椅
        Array(3010170, 120, 1, 1), //飘雪的夜晚
        Array(3010174, 120, 1, 1), //魔女椅子
        Array(3010175, 120, 1, 1), //小画家椅
        Array(3010298, 120, 1, 1), //北极熊椅子
        Array(3010288, 120, 1, 1), //珍珠蚌椅子
        Array(3010107, 120, 1, 1), //龙蛋		
        Array(3010032, 100, 1, 1), //黄色五环椅
        Array(3010033, 100, 1, 1), //绿色五环椅
        Array(3010002, 100, 1, 1), //绿色设计师椅
        Array(3010026, 100, 1, 1), //幽魂发条熊椅
        Array(3010094, 100, 1, 1), //缎带肥肥椅
        Array(3010095, 100, 1, 1), //石巨人座椅
        Array(3010075, 100, 1, 1), //留声机椅
        Array(3010077, 100, 1, 1), //猫头鹰椅
        Array(3010149, 100, 1, 1), //凉夏猫咪椅
        Array(3010096, 120, 1, 1), //恐龙化石宝座
        Array(3010068, 120, 1, 1), //荷叶下椅子
        Array(3010010, 120, 1, 1), //白色海豹抱枕椅		
        Array(3010016, 120, 1, 1), //黑色海豹抱枕
        Array(3010196, 120, 1, 1), //泡泡浴缸椅
        Array(3010007, 120, 1, 1), //粉红海豹抱枕椅
        Array(3010003, 120, 1, 1), //红色设计师椅
        Array(3010006, 120, 1, 1), //设计师椅(黄色)
        Array(3010013, 120, 1, 1), //遮阳椅
        Array(3010020, 120, 1, 1), //澎澎桧木桶
        Array(3010021, 120, 1, 1), //暖暖桌
        Array(3010025, 120, 1, 1), //枫树下
        Array(3010027, 120, 1, 1), //奇多元气加倍椅		
        Array(3010017, 120, 1, 1), //金色海豹抱枕
        Array(3010031, 100, 1, 1), //红色五环椅
        Array(3010045, 100, 1, 1), //冰椅
        Array(3010051, 100, 1, 1), //公砂兔椅
        Array(3010046, 100, 1, 1), //赤龙椅
        Array(3010047, 100, 1, 1), //蓝龙椅
        Array(3010120, 100, 1, 1), //兔子篮子椅子		
        Array(3010052, 100, 1, 1), //母砂兔椅
        Array(3010029, 100, 1, 1), //蓝色五环椅
        Array(3010030, 100, 1, 1), //黑色五环椅		
        Array(3010802, 100, 1, 1), //国中生月妙磕头椅子
        Array(3010804, 100, 1, 1), //军人月妙磕头椅子
        Array(3010600, 100, 1, 1), //福宝月妙椅子
        Array(3010316, 100, 1, 1), //走吊钢丝的月妙方椅
        Array(3010210, 100, 1, 1), //草莓冰淇淋月饼椅子
        Array(3010440, 100, 1, 1), //找到故乡的月妙椅子
        Array(3010705, 100, 1, 1), //月妙和绿水灵椅
        Array(3010172, 100, 1, 1), //星空夜晚
        Array(3010043, 100, 1, 1), //女巫扫把
        Array(3010717, 100, 1, 1), //一克拉婚戒戒指	
        Array(3015378, 60, 1, 1), //大家的圣诞节
        Array(3015379, 60, 1, 1), //大家的圣诞节
        Array(3010070, 30, 1, 1), //皮卡啾椅子
        Array(3010014, 30, 1, 1)//弯弯月亮
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
        if (cm.getPlayer().getLevel() < 50) {
            cm.sendOk("\t\t #i3994014##i3994018##i3994070##i3994061##i3994005##i3991038##i3991004#\r\n" +
                    "\t  #i3994060##i3994079##i3994060##i3994060##i3994070##i3994063#  #i3994071##i3994077#\r\n" +
                    "        #r此为泡泡谷转蛋机，需要50等才能抽奖。");
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
        if (chance > 911) {
            chance = 911;
        }
        if (chance < 1) {
            chance = 911;
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
