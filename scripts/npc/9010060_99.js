/* 删除道具 */

var status = -1;
var itemList = Array(
Array(1002846, 114000), //华尔兹丝带贝雷帽
Array(1050152, 99000), //水兵服(男)
Array(1051180, 99000), //水兵服(女)
Array(1042104, 114000), //小绿叶T恤
Array(1042105, 114000), //小红叶T恤
Array(1002845, 114000), //粉红兔耳帽
Array(1052224, 99000), //草莓baby装
Array(1702228, 114000), //可可香蕉
Array(1002721, 114000), //狸毛护耳
Array(1002568, 158400), //手工编织发夹
Array(1702155, 99000), //绚丽淘居
Array(1042142, 99000), //淘居条背心
Array(1062093, 99000), //嫩绿休闲短裤
Array(1112904, 99000), //淘居星环绕戒指
Array(1041142, 99000), //巨星蛋糕吊带
Array(1061148, 99000), //巨星粉色短裙
Array(1702182, 99000), //洛丽波板糖
Array(1002888, 114000), //丝带发箍(红色)
Array(1002890, 114000), //丝带发箍(蓝色)
Array(1052200, 99000), //罗丽粉色娃娃套服
Array(1702208, 99000), //搞怪鳄鱼
Array(1002863, 99000), //小熊熊可爱帽
Array(1052061, 66500), //巴西足球服No.9
Array(1052059, 66500), //法国足球服No.14
Array(1003207, 79200), //胡萝卜兔爆炸头
Array(1702285, 74000), //蓝色蝴蝶结手提包
Array(1012131, 74000), //好白的牙
Array(1702302, 158400), //杯具
Array(1072337, 99000), //喜洋洋拖鞋
Array(1112238, 99000), //水墨花聊天戒指
Array(1112135, 114000), //水墨花名片戒指
Array(1702261, 99000), //樱花棒
Array(1702091, 79200), //网球拍
Array(1702168, 99000), //闪亮圣诞树
Array(1003051, 79200), //小狐狸
Array(1003048, 79200), //圣诞装饰帽
Array(1002995, 100000), //皇家海军帽
Array(1003012, 79200), //嫦娥发式
Array(1002876, 99000), //圣诞红发夹
Array(1002839, 79200), //南瓜棒球帽
Array(1001048, 79200), //鬼娃娃帽
Array(1102225, 99000), //嫦娥披风
Array(1102217, 79200), //九尾披风
Array(1102157, 79200), //傀儡枷锁
Array(1051131, 99000), //圣诞女孩子服
Array(1112916, 114000), //寂寞单身戒指
Array(1012179, 79200), //鹿鼻子
Array(1051152, 114000), //玫瑰红晚宴裙
Array(1112118, 114000), //可乐名片戒指
Array(1112119, 114000), //可乐(Red) 名片戒指
Array(1112120, 114000), //可乐(White) 名片戒指
Array(1112228, 114000), //可乐聊天戒指
Array(1112229, 114000), //可乐(Red)聊天戒指
Array(1112230, 114000),  //可乐(White)聊天戒指
Array(1112103, 114000),
Array(1050210, 114000),
Array(1112141, 114000),
Array(1112252, 114000),
Array(1112253, 114000),
Array(1112142, 114000),
//
Array(1051280, 114000),
Array(1052426, 114000),
Array(1051278, 114000),
Array(1050229, 114000),
Array(1050227, 114000),
Array(1051235, 114000),
Array(1052201, 114000),
Array(1050232, 114000),
Array(1051282, 114000),
Array(1052425, 114000),
Array(1052412, 114000),
Array(1102503, 114000),
Array(1052455, 114000),
Array(1052503, 114000),
Array(1051261, 114000),
Array(1050230, 114000),
Array(1050231, 114000),
Array(1051149, 114000),
Array(1051192, 114000),
Array(1051255, 114000),
Array(1051256, 114000),
Array(1112422, 114000),
Array(1112424, 114000),
Array(1112930, 114000),
Array(1112136, 114000),
Array(1112920, 114000),
Array(1702367, 114000),
Array(1702341, 114000),
Array(1322102, 114000),
Array(1702366, 114000),
Array(1702352, 114000),
Array(1302037, 114000),
Array(1302061, 114000),
Array(1302063, 114000),
Array(1302080, 114000),
Array(1302084, 114000),
Array(1302085, 114000),
Array(1302087, 114000),
Array(1302169, 114000),
Array(1322051, 114000),
Array(1332032, 114000),
Array(1332053, 114000),
Array(1372017, 114000),
Array(1372031, 114000),
Array(1402037, 114000),
Array(1402049, 114000),
Array(1402063, 114000),
Array(1422011, 114000),
Array(1432039, 114000),
Array(1432046, 114000),
Array(1442026, 114000),
Array(1442065, 114000),
Array(1442088, 114000),
Array(1472063, 114000),
Array(1702342, 114000),
Array(1702337, 114000),
Array(1702335, 114000),
Array(1702330, 114000),
Array(1702346, 114000),
Array(1702341, 114000),
Array(1702340, 114000),
Array(1702324, 114000),
Array(1322102, 114000),
Array(1412056, 114000),
Array(1402110, 114000),
Array(1702310, 114000),
Array(1702329, 114000),
Array(1702316, 114000),
Array(1702309, 114000),
Array(1102380, 114000),
Array(1102385, 114000),
Array(1102386, 114000),
Array(1102238, 114000),
Array(1102241, 114000),
Array(1102248, 114000),
Array(1102245, 114000),
Array(1102265, 114000),
Array(1102285, 114000),
Array(1102286, 114000),
Array(1102287, 114000),
Array(1102270, 114000),
Array(1102273, 114000),
Array(1102288, 114000),
Array(1102253, 114000),
Array(1102298, 114000),
Array(1102299, 114000),
Array(1102297, 114000),
Array(1102310, 114000),
Array(1102319, 114000),
Array(1102272, 114000),
Array(1102323, 114000),
Array(1102324, 114000),
Array(1102349, 114000),
Array(1102325, 114000),
Array(1102326, 114000),
Array(1102338, 114000),
Array(1102350, 114000),
Array(1102374, 114000),
Array(1102353, 114000),
Array(1102357, 114000),
Array(1102382, 114000),
Array(1102383, 114000),
Array(1003214, 114000),
Array(1003141, 114000),
Array(1003269, 114000),
Array(1003268, 114000),
Array(1003492, 114000),
Array(1003493, 114000),
Array(1003494, 114000),
Array(1003495, 114000),
Array(1003496, 114000),
Array(1003519, 114000),
Array(1003520, 114000),
Array(1002726, 114000),
Array(1002524, 114000),
Array(1002714, 114000),
Array(1002841, 114000),
Array(1003220, 114000),
Array(1003219, 114000),
Array(1003170, 114000),
Array(1003226, 114000),
Array(1003227, 114000),
Array(1000050, 114000),
Array(1003232, 114000),
Array(1001064, 114000),
Array(1001075, 114000),
Array(1003252, 114000),
Array(1003249, 114000),
Array(1001036, 114000),
Array(1002425, 114000),
Array(1002677, 114000),
Array(1002702, 114000),
Array(1002707, 114000),
Array(1002728, 114000),
Array(1002743, 114000),
Array(1002749, 114000),
Array(1002758, 114000),
Array(1002788, 114000),
Array(1002812, 114000),
Array(1002850, 114000),
Array(1002851, 114000),
Array(1002858, 114000),
Array(1002867, 114000),
Array(1002939, 114000),
Array(1002971, 114000),
Array(1002972, 114000),
Array(1002980, 114000),
Array(1002997, 114000),
Array(1002998, 114000),
Array(1003091, 114000),
Array(1003114, 114000),
Array(1003075, 114000),
Array(1000043, 114000),
Array(1003149, 114000),
Array(1002988, 114000),
Array(1003154, 114000),
Array(1003159, 114000),
Array(1003169, 114000),
Array(1003209, 114000),
Array(1003193, 114000),
Array(1003194, 114000),
Array(1003195, 114000),
Array(1003196, 114000),
Array(1003271, 114000),
Array(1003360, 114000),
Array(1003359, 114000),
Array(1003417, 114000),
Array(1112204, 114000),
Array(1003581, 400),
Array(1042263, 400),
Array(1062173, 88000),
Array(1072820, 88000),
Array(1702422, 152000),
Array(1112101, 90000),
Array(1112937, 400),
Array(1012134, 85000),
Array(5010080,1),
Array(1352304,10000),
Array(1050119, 110000)
//
);
var selectedItem = -1;
var selectedCost = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status >= 0) {
            cm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        var selStr = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#亲爱的#r#h ##k您好，请选择您希望删除的道具：";
        for (var i = 0; i < itemList.length; i++) {
            selStr += "\r\n#L" + i + "##i" + itemList[i][0] + ":# #b#t" + itemList[i][0] + "##k#l";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
        var item = itemList[selection];
        if (item != null) {
            selectedItem = item[0];
            selectedCost = item[1];
            cm.sendYesNo("您是否删除#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r1000#k 点卷？");
        } else {
            cm.sendOk("出现错误...");
            cm.dispose();
        }
    } else if (status == 2) {
        if (selectedCost <= 0 || selectedItem <= 0) {
            cm.sendOk("删除道具出现错误...");
            cm.dispose();
            return;
        }
        if (cm.getPlayer().getCSPoints(1) >= 1000) {
            if (cm.haveItem(selectedItem)) {
		cm.gainItem(selectedItem, -1)
                cm.gainNX( - 1000);
                cm.sendOk("恭喜您成功删除#i" + selectedItem + ":# #b#t" + selectedItem + "##k。");
            } else {
                cm.sendOk("删除失败，请您确认在背包所有栏目窗口中是否有#i"+selectedItem+":# 该道具!。");
            }
        } else {
            cm.sendOk("您没有那么多点卷。\r\n\r\n删除#i" + selectedItem + ":# #b#t" + selectedItem + "##k 需要 #r1000#k 点卷。");
        }
        cm.dispose();
    }
}
