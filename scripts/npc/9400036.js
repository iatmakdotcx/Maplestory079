﻿status = -1;
var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow2.img/QuestAlarm/BtQ/normal/0#";
var Star = "#fEffect/CharacterEff/1112904/2/1#";
/***************************************/
var cost = 5;  //每次消耗的元宝
var itemList = Array(
    Array(1003797, 10, 1, 3), //高贵战士头盔 - (无描述)
    Array(1003798, 10, 1, 3), //高贵流丹维奇帽 - (无描述)
    Array(1003799, 10, 1, 3), //高贵游侠贝雷帽 - (无描述)
    Array(1003800, 10, 1, 3), //高贵刺客软帽 - (无描述)
    Array(1003801, 10, 1, 3), //高贵流浪者帽 - (无描述)
    Array(1042254, 10, 1, 3), //鹰眼战士盔甲 - (无描述)
    Array(1042255, 10, 1, 3), //鹰眼丹维奇长袍 - (无描述)
    Array(1042256, 10, 1, 3), //鹰眼游侠斗篷 - (无描述)
    Array(1042257, 10, 1, 3), //鹰眼刺客衬衣 - (无描述)
    Array(1042258, 10, 1, 3), //鹰眼流浪者外衣 - (无描述)
    Array(1062165, 10, 1, 3), //魔术师战士短裤 - (无描述)
    Array(1062166, 10, 1, 3), //魔术师丹维奇短裤 - (无描述)
    Array(1002845, 10, 1, 3), //魔术师丹维奇短裤 - (无描述)
    Array(1062167, 10, 1, 3), //魔术师游侠短裤 - (无描述)
    Array(1062168, 10, 1, 3), //魔术师刺客短裤 - (无描述)
    Array(1062169, 10, 1, 3),  //魔术师流浪者短裤 - (无描述)
    Array(1102481, 3, 1, 3), // 暴君西亚戴斯披风 // (无描述)
    Array(1102482, 3, 1, 3), // 暴君赫尔梅斯披风 // (无描述)
    Array(1102483, 3, 1, 3), // 暴君凯伦披风 // (无描述)
    Array(1102484, 3, 1, 3), // 暴君利卡昂披风 // (无描述)
    Array(1102485, 3, 1, 3), // 暴君阿尔泰披风 // (无描述)
    Array(1072743, 3, 1, 3), // 暴君西亚戴斯靴 // (无描述)
    Array(1702457, 3, 1, 3), // 暴君西亚戴斯靴 // (无描述)
    Array(1702459, 3, 1, 3), // 暴君西亚戴斯靴 // (无描述)
    Array(1702508, 3, 1, 3), // 暴君西亚戴斯靴 // (无描述)
    Array(1072744, 3, 1, 3), // 暴君赫尔梅斯靴 // (无描述)
    Array(1702352, 3, 1, 3), // 暴君西亚戴斯靴 // (无描述)
    Array(1702303, 3, 1, 3), // 暴君西亚戴斯靴 // (无描述)
    Array(1112260, 20, 1, 3), // 暴君西亚戴斯靴 // (无描述)
    Array(1112261, 20, 1, 3), // 暴君西亚戴斯靴 // (无描述)
    Array(112266, 30, 1, 3), // 暴君西亚戴斯靴 // (无描述)
    Array(1112267, 30, 1, 3), // 暴君西亚戴斯靴 // (无描述)
    Array(1112268, 30, 1, 3), // 暴君西亚戴斯靴 // (无描述)
    Array(1112277, 30, 1, 3), // 暴君西亚戴斯靴 // (无描述)
    Array(1112291, 30, 1, 3), // 暴君西亚戴斯靴 // (无描述)
    Array(1112284, 30, 1, 3), // 暴君西亚戴斯靴 // (无描述)
    /*极真装备*/
    Array(1032223, 5, 1, 3), // 最高级贝勒德耳环 // (无描述)
    Array(1032222, 5, 1, 3), // 最高级贝勒德耳环 // (无描述)
    Array(1402037, 5, 1, 3), // 最高级贝勒德耳环 // (无描述)
    Array(1113075, 5, 1, 3), // 最高级贝勒德戒指 // (无描述)
    Array(1113074, 5, 1, 3), // 最高级贝勒德戒指 // (无描述)
    Array(1122267, 5, 1, 3), // 最高级贝勒德刻印吊坠 // (无描述)
    Array(1132246, 5, 1, 3), // 最高级贝勒德刻印腰带 // (无描述)
    Array(1102476, 25, 1, 3), // 诺巴西亚戴斯披风 // (无描述)
    Array(1102477, 25, 1, 3), // 诺巴赫尔梅斯披风 // (无描述)
    Array(1102478, 25, 1, 3), // 诺巴凯伦披风 // (无描述)
    Array(1102479, 25, 1, 3), // 诺巴利卡昂披风 // (无描述)
    Array(1102455, 25, 1, 3), // 诺巴阿尔泰披风 // (无描述)
    Array(1072737, 25, 1, 3), // 诺巴西亚戴斯靴 // (无描述)
    Array(1072738, 25, 1, 3), // 诺巴赫尔梅斯靴 // (无描述)
    Array(1072739, 25, 1, 3), // 诺巴凯伦靴 // (无描述)
    Array(1072740, 25, 1, 3), // 诺巴利卡昂靴 // (无描述)
    Array(1072741, 25, 1, 3), // 诺巴阿尔泰靴 // (无描述)
    Array(1132169, 25, 1, 3), // 诺巴西亚戴斯腰带 // (无描述)
    Array(1132170, 25, 1, 3), // 诺巴赫尔梅斯腰带 // (无描述)
    Array(1132171, 25, 1, 3), // 诺巴凯伦腰带 // (无描述)
    Array(1132172, 25, 1, 3), // 诺巴利卡昂腰带 // (无描述)
    Array(1132173, 25, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1702202, 25, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1702403, 25, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1012134, 25, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1102755, 25, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1004126, 25, 1, 3), // 法弗纳天使手铳 // (无描述)
    Array(1004597, 25, 1, 3), // 法弗纳死亡使者 // (无描述)
    Array(1102359, 25, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1082685, 20, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1062074, 20, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1702601, 20, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    /*绝版椅子*/
    Array(3015006, 30, 1, 3),
    Array(3015001, 30, 1, 3),
    Array(3010520, 30, 1, 3),
    Array(3015401, 30, 1, 3),
    Array(3015405, 30, 1, 3),
    Array(3010681, 30, 1, 3),
    Array(3015419, 30, 1, 3),
    Array(3010788, 30, 1, 3),
    Array(3010783, 30, 1, 3),
    Array(3015000, 30, 1, 3),
    Array(3015006, 20, 1, 3),
    Array(3015234, 20, 1, 3),
    Array(3015236, 20, 1, 3),
    Array(3015060, 20, 1, 3),
    Array(3015058, 20, 1, 3),
    Array(3012031, 20, 1, 3),
    Array(3012027, 25, 1, 3),
    Array(3015112, 25, 1, 3),
    Array(3015227, 25, 1, 3),
    Array(3015439, 25, 1, 3),
    Array(3015659, 25, 1, 3),
    Array(3015564, 25, 1, 3),
    Array(3015565, 25, 1, 3),
    Array(3015566, 25, 1, 3),
    Array(3015567, 25, 1, 3),
    Array(1004126, 20, 1, 3), // 法弗纳天使手铳 // (无描述)
    Array(1004597, 25, 1, 3), // 法弗纳死亡使者 // (无描述)
    Array(1004598, 25, 1, 3), // 法弗纳精神之刃 // (无描述)
    Array(1102841, 25, 1, 3), // 法弗纳精神之刃 // (无描述)
    Array(1051452, 25, 1, 3), // 法弗纳精神之刃 // (无描述)
    Array(1042036, 20, 1, 3), // 法弗纳精神之刃 // (无描述)
    Array(1042037, 20, 1, 3), // 法弗纳精神之刃 // (无描述)
    Array(1102964, 20, 1, 3), // 法弗纳精神之刃 // (无描述)
    Array(1003919, 25, 1, 3), // 法弗纳精神之刃 // (无描述)
    Array(3015971, 20, 1, 3), // 法弗纳精神之刃 // (无描述)
    Array(3015568, 25, 1, 3),
    Array(1322051, 25, 1, 3),
    Array(1402044, 20, 1, 3),
    Array(3015569, 20, 1, 3),
    Array(3015570, 20, 1, 3),
    Array(3015571, 20, 1, 3),
    Array(3016101, 20, 1, 3),
    Array(3010680, 25, 1, 3),
    Array(3010689, 35, 1, 3),
    Array(3010738, 35, 1, 3),
    Array(3010736, 35, 1, 3),
    Array(3010737, 35, 1, 3),
    Array(3010735, 30, 1, 3),
    Array(1051152, 30, 1, 3),
    Array(3010747, 30, 1, 3),
    Array(3010748, 30, 1, 3),
    Array(3010717, 30, 1, 3),
    Array(3010718, 30, 1, 3),
    Array(3010700, 30, 1, 3),
    Array(3010761, 20, 1, 3),
    Array(3010070, 20, 1, 3),
    Array(3010760, 20, 1, 3),
    Array(3010767, 20, 1, 3),
    Array(3015845, 20, 1, 3),
    //Array(3015847, 20, 1, 3),
    Array(3015858, 20, 1, 3),
    Array(3015857, 20, 1, 3),
    Array(3015859, 20, 1, 3),
    Array(3015860, 20, 1, 3),
    Array(3015861, 20, 1, 3),
    Array(3015865, 20, 1, 3),
    Array(3015898, 20, 1, 3),
    Array(3015901, 20, 1, 3),
    Array(3010795, 30, 1, 3),
    Array(3010794, 20, 1, 3),
    Array(3010799, 20, 1, 3),
    Array(3010806, 30, 1, 3),
    Array(3010811, 20, 1, 3),
    Array(3010814, 20, 1, 3),
    Array(3010821, 20, 1, 3),
    Array(3010822, 20, 1, 3),
    Array(3010823, 20, 1, 3),
    Array(3010836, 20, 1, 3),
    Array(3010838, 20, 1, 3),
    Array(3010845, 20, 1, 3),
    Array(3010848, 20, 1, 3),
    Array(3010849, 20, 1, 3),
    Array(3010877, 20, 1, 3),
    Array(3010935, 20, 1, 3),
    Array(3010946, 20, 1, 3),
    Array(3010955, 20, 1, 3),
    Array(3010980, 20, 1, 3),
    Array(3012027, 20, 1, 3),
    Array(3012020, 20, 1, 3),
    Array(3015009, 20, 1, 3),
    Array(3015037, 20, 1, 3),
    Array(3015032, 20, 1, 3),
    Array(3015029, 20, 1, 3),
    Array(3015091, 20, 1, 3),
    Array(3015092, 20, 1, 3),
    Array(3015089, 20, 1, 3),
    Array(3015197, 20, 1, 3),
    Array(3015211, 20, 1, 3),
    Array(3015257, 30, 1, 3),
    Array(3015258, 30, 1, 3),
    Array(3015303, 30, 1, 3),
    Array(3015302, 30, 1, 3),
    Array(3015332, 20, 1, 3),
    Array(3015330, 20, 1, 3),
    Array(3015339, 20, 1, 3),
    Array(3015342, 20, 1, 3),
    Array(3015370, 20, 1, 3),
    Array(3015369, 20, 1, 3),
    Array(3015376, 20, 1, 3),
    Array(3015521, 20, 1, 3),
    Array(3015518, 20, 1, 3),
    Array(3012010, 20, 1, 3),
    Array(3015597, 20, 1, 3),
    Array(3015587, 20, 1, 3),
    Array(3015586, 20, 1, 3),
    Array(3015665, 20, 1, 3),
    Array(3015675, 20, 1, 3),
    Array(3015691, 20, 1, 3),
    Array(3015693, 20, 1, 3),
    Array(3015712, 20, 1, 3),
    Array(3015716, 20, 1, 3),
    Array(3015725, 20, 1, 3)
);

var itemList3 = Array(
    Array(3015778, 20, 1, 3),
    Array(3012032, 20, 1, 3),
    Array(3013009, 20, 1, 3),
    Array(3015001, 20, 1, 3),
    Array(3015007, 20, 1, 3),
    Array(3015430, 20, 1, 3),
    Array(3014011, 15, 1, 3),
    Array(1004203, 20, 1, 3),
    Array(3015571, 20, 1, 3),
    Array(3015447, 20, 1, 3),
    Array(3015235, 20, 1, 3),
    Array(3015234, 20, 1, 3),
    Array(3015236, 20, 1, 3),
    Array(3015263, 20, 1, 3),
    Array(3015111, 20, 1, 3),
    Array(3015156, 20, 1, 3),
    Array(3015058, 20, 1, 3),
    Array(3015225, 25, 1, 3),
    Array(3015517, 25, 1, 3),
    Array(3015443, 25, 1, 3),
    Array(3015235, 20, 1, 3),
    Array(1702303, 25, 1, 3),
    Array(1702352, 35, 1, 3),
    Array(1702508, 25, 1, 3),
    Array(1702534, 25, 1, 3),
    Array(3015272, 20, 1, 3),
    Array(1112964, 20, 1, 3),
    Array(3015811, 20, 1, 3),
    Array(2430888, 5, 1, 3),
    Array(2436162, 25, 1, 3), // 漩涡手套 // (无描述)
    Array(2435712, 10, 1, 3), // 漩涡手套 // (无描述)
    Array(1702603, 40, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1702602, 40, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1702605, 40, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1072531, 40, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1702600, 40, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1072808, 40, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1042202, 40, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1702209, 40, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1702208, 50, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1702212, 50, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1702352, 50, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1702341, 50, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1702459, 50, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1702305, 50, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(3015526, 50, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(3010690, 50, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(3015599, 50, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(3015837, 50, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1012131, 50, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1072779, 50, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1702616, 50, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(1702606, 50, 1, 3), // 诺巴阿尔泰腰带 // (无描述)
    Array(3015788, 55, 1, 3),
    Array(3015797, 55, 1, 3),
    Array(3015800, 55, 1, 3),
    Array(1202208, 50, 1, 3),
    Array(1202207, 50, 1, 3),
    Array(1202206, 50, 1, 3),
    Array(1202214, 40, 1, 3),
    Array(1202209, 40, 1, 3),
    Array(1202211, 40, 1, 3),
    Array(1202160, 20, 1, 3),
    Array(1202161, 20, 1, 3),
    Array(1202162, 20, 1, 3),
    Array(1202163, 20, 1, 3),
    Array(1202164, 20, 1, 3),
    Array(1202212, 40, 1, 3),
    Array(1202213, 40, 1, 3),
    Array(1202210, 40, 1, 3),
    Array(3015804, 35, 1, 3),
    Array(1672064, 10, 1, 3),
    Array(1672065, 10, 1, 3),
    Array(1672067, 10, 1, 3),
    Array(2614001, 60, 1, 3),
    Array(1672069, 5, 1, 3),
    Array(1004203, 20, 1, 3),
    Array(1672073, 20, 1, 3),
    Array(1672076, 20, 1, 3),
    Array(1672077, 20, 1, 3),
    Array(1672078, 20, 1, 3),
    Array(1102910, 25, 1, 3),
    Array(1672080, 30, 1, 3),
    Array(1672058, 30, 1, 3),
    Array(1102968, 30, 1, 3),
    Array(3015813, 30, 1, 3),
    Array(1115023, 30, 1, 3),
    Array(1115112, 30, 1, 3),
    Array(1051151, 35, 1, 3),
    Array(1112915, 55, 1, 3),
    Array(1073241, 35, 1, 3),
    Array(1004709, 35, 1, 3),
    Array(1353505, 30, 1, 3),
    Array(1353306, 30, 1, 3),
    Array(1073240, 30, 1, 3),
    Array(1051152, 25, 1, 3),
    Array(1702778, 20, 1, 3),
    Array(2433830, 20, 1, 3),
    Array(1103034, 20, 1, 3),
    Array(1115011, 30, 1, 3),
    Array(1112198, 30, 1, 3),
    Array(1002663, 30, 1, 3),
    Array(1112120, 30, 1, 3),
    Array(1112118, 30, 1, 3),
    Array(1112119, 30, 1, 3),
    Array(1702692, 30, 1, 3),
    Array(1702702, 30, 1, 3),
    Array(1702703, 30, 1, 3),
    Array(1702704, 30, 1, 3),
    Array(1702705, 30, 1, 3),
    Array(1702706, 30, 1, 3),
    Array(1702711, 30, 1, 3),
    Array(1702686, 30, 1, 3),
    Array(1702687, 30, 1, 3),
    Array(1702688, 30, 1, 3),
    Array(1702714, 30, 1, 3),
    Array(1702713, 30, 1, 3),
    Array(1702715, 30, 1, 3),
    Array(1032034, 20, 1, 3),
    Array(1112228, 20, 1, 3),
    Array(1112183, 20, 1, 3),
    Array(2430683, 30, 3, 3),
    Array(1702787, 30, 1, 3),
    Array(1702801, 30, 1, 3),
    Array(1702779, 30, 1, 3),
    Array(1702802, 30, 1, 3),
    Array(1702803, 30, 1, 3),
    Array(4001839, 50, 200, 3),
    Array(1702813, 30, 1, 3),
    Array(1702814, 30, 1, 3),
    Array(1702694, 30, 1, 3),
    Array(1702799, 30, 1, 3),
    Array(1702776, 30, 1, 3),
    Array(1702768, 30, 1, 3),
    Array(1702773, 30, 1, 3),
    Array(1702770, 30, 1, 3),
    Array(1112296, 30, 1, 3),
    Array(1002663, 30, 1, 3),
    Array(1112120, 30, 1, 3),
    Array(1112118, 30, 1, 3),
    Array(1112119, 30, 1, 3),
    Array(1032034, 20, 1, 3),
    Array(1112228, 20, 1, 3),
    Array(1702718, 30, 1, 3),
    Array(1702719, 30, 1, 3),
    Array(1702720, 30, 1, 3),
    Array(2614011, 35, 1, 3),
    Array(2614024, 40, 1, 3),
    Array(1702726, 30, 1, 3),
    Array(1702679, 30, 1, 3),
    Array(1702684, 30, 1, 3),
    Array(1702721, 30, 1, 3),
    Array(1702722, 30, 1, 3),
    Array(1702725, 30, 1, 3),
    Array(1702723, 30, 1, 3),
    Array(1702728, 30, 1, 3),
    Array(1702727, 30, 1, 3),
    Array(1112229, 20, 1, 3),
    Array(1112230, 20, 1, 3),
    Array(1073144, 20, 1, 3),
    Array(3010010, 50, 1, 3),
    Array(3010011, 50, 1, 3),
    Array(3010012, 50, 1, 3),
    Array(3010013, 50, 1, 3),
    Array(3010014, 50, 1, 3),
    Array(3010021, 50, 1, 3),
    Array(3010016, 50, 1, 3),
    Array(3010017, 50, 1, 3),
    Array(3010018, 50, 1, 3),
    Array(3010019, 50, 1, 3),
    Array(3010025, 50, 1, 3),
    Array(2614011, 50, 1, 3),
    Array(2614014, 50, 1, 3),
    Array(1112229, 20, 1, 3),
    Array(1112230, 20, 1, 3),
    Array(1004511, 30, 1, 3),
    Array(2591008, 20, 1, 3),
    Array(1702579, 30, 1, 3),
    Array(1073144, 30, 1, 3),
    Array(1102926, 30, 1, 3),
    Array(1053040, 20, 1, 3),
    Array(2614001, 50, 1, 3),
    Array(2435048, 30, 1, 3),
    Array(1050128, 20, 1, 3),
    Array(4033248, 60, 100, 3),
    Array(1702709, 30, 1, 3),
    Array(1702713, 30, 1, 3),
    Array(1702714, 30, 1, 3),
    Array(1702715, 30, 1, 3),
    Array(1702716, 30, 1, 3),
    Array(1702717, 30, 1, 3),
    Array(1112238, 20, 1, 3),
    Array(1112135, 20, 1, 3),
    Array(1115025, 20, 1, 3),
    Array(1115114, 20, 1, 3),
    Array(1051153, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3015238, 30, 1, 3),
    Array(1102807, 30, 1, 3),
    Array(2432971, 55, 1, 3), // 漩涡手套 // (无描述)
    Array(2614001, 65, 3, 3), // 漩涡手套 // (无描述)
    Array(1004724, 30, 1, 3),
    Array(1112238, 20, 1, 3),
    Array(1112135, 20, 1, 3),
    Array(1012438, 20, 1, 3) // 漩涡文身 // (无描述)
);

var itemList2 = Array(
    Array(1022211, 25, 1, 3), // 漩涡眼镜 // (无描述)
    Array(1032224, 25, 1, 3), // 漩涡耳环 // (无描述)
    Array(1122269, 25, 1, 3), // 漩涡吊坠 // (无描述)
    Array(1132247, 25, 1, 3), // 漩涡腰带 // (无描述)
    Array(1152160, 25, 1, 3), // 漩涡护肩 // (无描述)
    Array(1003976, 25, 1, 3), // 漩涡帽子 // (无描述)
    Array(1102623, 25, 1, 3), // 漩涡披风 // (无描述)
    Array(1082556, 25, 1, 3), // 漩涡手套 // (无描述)
    Array(1702261, 25, 1, 3), // 漩涡眼镜 // (无描述)
    Array(1402014, 25, 1, 3), // 漩涡耳环 // (无描述)
    Array(1302080, 25, 1, 3), // 漩涡吊坠 // (无描述)
    Array(2436114, 2, 1, 3), // 漩涡吊坠 // (无描述)
    Array(2435824, 5, 1, 3), // 漩涡吊坠 // (无描述)
    Array(1002863, 25, 1, 3), // 漩涡腰带 // (无描述)
    Array(1003141, 25, 1, 3), // 漩涡护肩 // (无描述)
    Array(1003269, 25, 1, 3), // 漩涡帽子 // (无描述)
    Array(1103268, 25, 1, 3), // 漩涡披风 // (无描述)
    Array(1082220, 20, 1, 3), // 漩涡手套 // (无描述)
    Array(1003392, 20, 1, 3), // 漩涡眼镜 // (无描述)
    Array(1002839, 20, 1, 3), // 漩涡耳环 // (无描述)
    Array(1003588, 30, 1, 3), // 漩涡吊坠 // (无描述)
    Array(1003597, 30, 1, 3), // 漩涡腰带 // (无描述)
    Array(1115102, 20, 1, 3), // 暴君赫尔梅斯手套 // (无描述)
    Array(1115104, 20, 1, 3), // 暴君凯伦手套 // (无描述)
    Array(1702712, 20, 1, 3),// 暴君利卡昂手套 // (无描述)
    Array(1003760, 20, 1, 3), // 漩涡护肩 // (无描述)
    Array(1003758, 30, 1, 3), // 漩涡帽子 // (无描述)
    Array(1103910, 20, 1, 3), // 漩涡披风 // (无描述)
    Array(1004029, 20, 1, 3), // 漩涡手套 // (无描述)
    Array(1004038, 20, 1, 3), // 漩涡眼镜 // (无描述)
    Array(1004027, 20, 1, 3), // 漩涡耳环 // (无描述)
    Array(1302080, 20, 1, 3), // 漩涡吊坠 // (无描述)
    Array(1004028, 20, 1, 3), // 漩涡腰带 // (无描述)
    Array(1003141, 20, 1, 3), // 漩涡护肩 // (无描述)
    Array(1040194, 25, 1, 3), // 漩涡手套 // (无描述)
    Array(1042118, 25, 1, 3), // 漩涡眼镜 // (无描述)
    Array(1042164, 25, 1, 3), // 漩涡耳环 // (无描述)
    Array(1042182, 25, 1, 3), // 漩涡吊坠 // (无描述)
    Array(1042173, 25, 1, 3), // 漩涡腰带 // (无描述)
    Array(3015694, 35, 1, 3), // 漩涡腰带 // (无描述)
    Array(3015695, 25, 1, 3), // 漩涡腰带 // (无描述)
    Array(1042120, 25, 1, 3), // 漩涡护肩 // (无描述)
    Array(1042121, 25, 1, 3), // 漩涡帽子 // (无描述)
    Array(1042172, 25, 1, 3), // 漩涡披风 // (无描述)
    Array(1042183, 25, 1, 3), // 漩涡手套 // (无描述)
    Array(1042208, 25, 1, 3), // 漩涡披风 // (无描述)
    Array(1042315, 25, 1, 3), // 漩涡手套 // (无描述)
    Array(1042316, 25, 1, 3), // 漩涡披风 // (无描述)
    Array(1042350, 20, 1, 3), // 漩涡手套 // (无描述)
    Array(1004027, 20, 1, 3), // 漩涡耳环 // (无描述)
    Array(1302080, 20, 1, 3), // 漩涡吊坠 // (无描述)
    Array(1004028, 20, 1, 3), // 漩涡腰带 // (无描述)
    Array(1003141, 20, 1, 3), // 漩涡护肩 // (无描述)
    Array(1004038, 20, 1, 3), // 漩涡眼镜 // (无描述)
    Array(1004027, 20, 1, 3), // 漩涡耳环 // (无描述)
    Array(1302080, 20, 1, 3), // 漩涡吊坠 // (无描述)
    Array(1004028, 20, 1, 3), // 漩涡腰带 // (无描述)
    Array(1003141, 20, 1, 3), // 漩涡护肩 // (无描述)
    Array(1052669, 20, 1, 3), // 漩涡皇家外套 // (无描述)
    Array(1072870, 30, 1, 3), // 漩涡鞋 // (无描述)
    Array(1212089, 30, 1, 3), // 漩涡双头杖 // (无描述)
    Array(1222084, 30, 1, 3), // 漩涡灵魂手铳 // (无描述)
    Array(1232084, 30, 1, 3), // 漩涡恶魔剑 // (无描述)
    Array(1242090, 30, 1, 3), // 漩涡锁链剑 // (无描述)
    Array(1252033, 20, 1, 3), // 漩涡虎梳魔法棒 // (无描述)
    Array(1302297, 20, 1, 3), // 漩涡剑 // (无描述)
    Array(1312173, 20, 1, 3), // 漩涡斧 // (无描述)
    Array(1322223, 20, 1, 3), // 漩涡锤 // (无描述)
    Array(1332247, 20, 1, 3), // 漩涡匕首 // (无描述)
    Array(1342090, 20, 1, 3), // 漩涡刀  // (无描述)
    Array(1362109, 20, 1, 3), // 漩涡手杖 // (无描述)
    Array(1372195, 20, 1, 3), // 漩涡短杖 // (无描述
    Array(2614005, 20, 1, 3), // 漩涡短杖 // (无描述)
    Array(1382231, 20, 1, 3), // 漩涡长杖 // (无描述)
    Array(1402220, 20, 1, 3), // 漩涡双手剑 // (无描述)
    Array(1412153, 20, 1, 3), // 漩涡双手战斧 // (无描述)
    Array(1422158, 20, 1, 3), // 漩涡巨锤 // (无描述)
    Array(1432187, 20, 1, 3), // 漩涡矛 // (无描述)
    Array(1442242, 20, 1, 3), // 漩涡戟 // (无描述)
    Array(1452226, 20, 1, 3), // 漩涡弓 // (无描述)
    Array(1462213, 20, 1, 3), // 漩涡弩 // (无描述)
    Array(1472235, 20, 1, 3), // 漩涡拳甲 // (无描述)
    Array(1482189, 20, 1, 3), // 漩涡冲拳 // (无描述)
    Array(1492199, 20, 1, 3), // 漩涡手铳 // (无描述)
    Array(1522113, 20, 1, 3), // 漩涡双翼弩 // (无描述)
    Array(1532118, 20, 1, 3), // 漩涡手炮 // (无描述)
    Array(1542072, 20, 1, 3), // 漩涡武士之剑 // (无描述)
    Array(1552072, 20, 1, 3), // 漩涡之风 // (无描述)
    Array(1052537, 20, 1, 3), // 漩涡拳甲 // (无描述)
    Array(1052201, 20, 1, 3), // 漩涡冲拳 // (无描述)
    Array(1052200, 10, 1, 3), // 漩涡手铳 // (无描述)
    Array(1051424, 10, 1, 3), // 漩涡双翼弩 // (无描述)
    Array(1072337, 20, 1, 3), // 漩涡手炮 // (无描述)
    Array(1073090, 20, 1, 3), // 漩涡武士之剑 // (无描述)
    Array(1073091, 30, 1, 3), // 漩涡之风 // (无描述)
    Array(1073091, 20, 1, 3), // 漩涡之风 // (无描述)
    Array(1073092, 20, 1, 3), // 漩涡之风 // (无描述)
    Array(1052846, 25, 1, 3), // 漩涡之风 // (无描述)
    Array(2434007, 5, 1, 3), // 漩涡之风 // (无描述)
    Array(2435712, 20, 1, 3), // 漩涡之风 // (无描述)
    Array(2435153, 10, 1, 3), // 漩涡之风 // (无描述)
    Array(1072278, 50, 1, 3), // 漩涡之风 // (无描述)
    Array(3015059, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3015014, 10, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1702302, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3015972, 2, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1073109, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1702357, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1005045, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1005046, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1053247, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1053242, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1053155, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1004878, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1053116, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1102975, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3010879, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1702750, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1102818, 25, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1112196, 25, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1004756, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1112956, 25, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1102842, 25, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1004332, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1004386, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1052911, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3015973, 10, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3994075, 30, 5, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2048821, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2048822, 25, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1050418, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1051487, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2613000, 40, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2613001, 35, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2612010, 35, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1051150, 30, 1, 3),
    Array(3015705, 5, 1, 3),
    Array(1442039, 55, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2434996, 25, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1004156, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1004157, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1004211, 35, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3010813, 15, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1702675, 50, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2047818, 50, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2612010, 50, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2047818, 50, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2613000, 35, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2613001, 35, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2612010, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3015378, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1002721, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3010894, 40, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3015788, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3015787, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3015075, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3015912, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3015036, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3010843, 40, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3015873, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1004403, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(1702736, 10, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3015600, 40, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3010820, 40, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3014019, 40, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3010842, 40, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3015873, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3015408, 40, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3015642, 40, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(3010690, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2613050, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2613051, 20, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2612061, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2612062, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2616061, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2616062, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2615031, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2613050, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2613051, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2612061, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2612062, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2616061, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2616062, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2615031, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2615032, 30, 1, 3), // 咆哮老虎情景喇叭// (无描述)
    Array(2049376, 10, 1, 3), // 星之力20星强化券// (无描述)
    Array(1082656, 20, 1, 3), // 法弗纳魔力源泉杖 // (无描述)
    Array(2048721, 40, 2, 3), // 法弗纳魔力源泉杖 // (无描述)
    Array(3015970, 20, 1, 3), // 法弗纳精神之刃 // (无描述)
    Array(1004599, 20, 1, 3), // 法弗纳精神之刃 // (无描述)
    Array(1212063, 20, 1, 3), // 法弗纳魔力源泉杖 // (无描述)
    Array(1222058, 20, 1, 3), // 法弗纳天使手铳 // (无描述)
    Array(1232057, 20, 1, 3), // 法弗纳死亡使者 // (无描述)
    Array(1242060, 20, 1, 3), // 法弗纳精神之刃 // (无描述)
    Array(1702520, 20, 1, 3), // 法弗纳急速之刃 // (无描述)
    Array(1102749, 20, 1, 3), // 法弗纳急速之刃 // (无描述)
    Array(1242061, 20, 1, 3), // 法弗纳精神之刃 // (无描述)
    Array(1103033, 20, 1, 3), // 法弗纳天使手铳 // (无描述)
    Array(1052910, 20, 1, 3), // 法弗纳天使手铳 // (无描述)
    Array(1103013, 20, 1, 3), // 法弗纳死亡使者 // (无描述)
    Array(1103007, 20, 1, 3), // 法弗纳精神之刃 // (无描述)
    Array(1702302, 20, 1, 3), // 法弗纳精神之刃 // (无描述)
    Array(1103027, 20, 1, 3), // 法弗纳精神之刃 // (无描述)
    Array(1002863, 20, 1, 3), // 法弗纳精神之刃 // (无描述)
    Array(1252015, 20, 1, 3), // 法弗纳北极星魔法棒 // (无描述)
    Array(1262016, 20, 1, 3), // 法弗纳ESP限制器 // (无描述)
    Array(1302275, 20, 1, 3), // 法弗纳银槲之剑 // (无描述)
    Array(1312153, 20, 1, 3), // 法弗纳双刃切肉斧 // (无描述)
    Array(1322203, 20, 1, 3), // 法弗纳戈耳迪锤 // (无描述)
    Array(1332225, 20, 1, 3), // 法弗纳大马士革剑 // (无描述)
    Array(1342082, 20, 1, 3), // 法弗纳急速之刃 // (无描述)
    Array(1102916, 20, 1, 3), // 法弗纳银槲之剑 // (无描述)
    Array(1102919, 20, 1, 3), // 法弗纳双刃切肉斧 // (无描述)
    Array(1102938, 20, 1, 3), // 法弗纳戈耳迪锤 // (无描述)
    Array(1102860, 20, 1, 3), // 法弗纳大马士革剑 // (无描述)
    Array(1102861, 20, 1, 3), // 法弗纳急速之刃 // (无描述)
    Array(1362090, 10, 1, 3), // 法弗纳洞察手杖 // (无描述)
    Array(1372177, 10, 1, 3), // 法弗纳魔力夺取者 // (无描述)
    Array(1382208, 10, 1, 3), // 法弗纳魔冠之杖 // (无描述)
    Array(1302196, 10, 1, 3), // 法弗纳忏悔之剑 // (无描述)
    Array(1412135, 10, 1, 3), // 法弗纳战斗切肉斧 // (无描述)
    Array(1422140, 10, 1, 3), // 法弗纳闪电锤 // (无描述)
    Array(1432167, 10, 1, 3), // 法弗纳贯雷枪 // (无描述)
    Array(1442223, 10, 1, 3), // 法弗纳半月宽刃斧 // (无描述)
    Array(1452205, 10, 1, 3), // 法弗纳追风者 // (无描述)
    Array(1462193, 10, 1, 3), // 法弗纳风翼弩 // (无描述)
    Array(2430640, 10, 1, 3), // 法弗纳风翼弩 // (无描述)
    Array(1472214, 10, 1, 3), // 法弗纳危险之手 // (无描述)
    Array(1482168, 10, 1, 3), // 法弗纳巨狼之爪 // (无描述)
    Array(1492179, 10, 1, 3), // 法弗纳左轮枪 // (无描述)
    Array(2432206, 10, 1, 3), // 法弗纳左轮枪 // (无描述)
    Array(2612076, 10, 3, 3), // 法弗纳左轮枪 // (无描述)
    Array(1112199, 10, 1, 3), // 法弗纳左轮枪 // (无描述)
    Array(1115015, 10, 3, 3), // 法弗纳左轮枪 // (无描述)
    Array(1522094, 10, 1, 3), // 法弗纳双风翼弩 // (无描述)
    Array(1532098, 10, 1, 3), // 法弗纳荣耀炮 // (无描述)
    Array(1542063, 10, 1, 3), // 法弗纳皇刀正宗 // (无描述))
    Array(1552063, 10, 1, 3), // 法弗纳煌扇蓝姬 // (无描述)
    Array(2614002, 60, 1, 3) // 百万破功石头
);

extraItems = [
    3062280,
    3062281,
    3062250,
    3062210,
    3062240,    //以上全是B级星岩
    2430210,    //新年红包  1000W
    2430210,    //新年红包  1000W
    4001785,    //定居金500万金币
    4001785,    //定居金500万金币
    2614002,    //突破百万之石
    2614002,    //突破百万之石
];

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("不想使用吗？…我的肚子里有各类#b奇特座椅或卷轴、装备、新奇道具#k哦！");
            cm.dispose();
        }
        status--;

    }
    if (status == 0) {
        var txt = Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + "\r\n";
        txt += "#d想抽奖吗？精品道具入谁家？我这里有150-160不等高级道具（不抽中扣3个铜币）\r\n";
        txt += "魔方 卷轴 奇特座椅 限量时装 等新奇道具 [ #r还在等待吗#d ]\r\n\r\n#k";
        txt += "#d[ #r#h ##d ] 玩家春节铜币：#d" + cm.getItemQuantity(2430207) + " #k个　#b[ 5个 春节铜币抽一回 ]\r\n#k";
        txt += "#b#L0#开始抽奖 [ 可抽 #r" + parseInt(cm.getItemQuantity(2430207) / cost) + "#b 次 ]\r\n" +
            "#L1##r☆查看奖品图鉴☆#l#k\r\n";
        cm.sendSimple(txt);
    } else if (status == 1) {
        if (selection == 0) {
            if (!cm.haveItem(2430207, 5)) {
                cm.sendOk("你好像没有5个春节铜币");
                cm.dispose();
                return;
            }
            var chance = Math.floor(Math.random() * 100);
            var chance2 = Math.floor(Math.random() * 5);
            var finalitem = Array();
            for (var i = 0; i < itemList.length; i++) {
                if (itemList[i][1] >= chance) {
                    finalitem.push(itemList[i]);
                }
            }
            for (var i = 0; i < itemList2.length; i++) {
                if (itemList2[i][1] >= chance) {
                    finalitem.push(itemList2[i]);
                }
            }
            for (var i = 0; i < itemList3.length; i++) {
                if (itemList3[i][1] >= chance) {
                    finalitem.push(itemList3[i]);
                }
            }
            if (finalitem.length != 0) {
                var item;
                var random = new java.util.Random();
                var finalchance = random.nextInt(finalitem.length);
                var itemId = finalitem[finalchance][0];
                var quantity = finalitem[finalchance][2];
                var notice = finalitem[finalchance][3];

                if (random.nextInt(100) > 60) {
                    itemId = extraItems[random.nextInt(extraItems.length)];
                    quantity = 1;
                }

                item = cm.gainGachaponItem(itemId, quantity, "春节铜币元宝抽奖", notice);
                if (item != -1) {
                    cm.gainItem(2430207, -5);
                    cm.sendOk("你获得了 #b#z" + item + "##k " + quantity + "个。");
                } else {
                    cm.sendOk("请你确认在背包的装备，消耗，其他窗口中是否有一格以上的空间。");
                }
                cm.safeDispose();
            } else {
                cm.gainItem(2430207, -3);
                cm.sendOk("今天的运气可真差，什么都没有拿到");
                cm.safeDispose();
            }
        } else if (selection == 1) {
            var txt = "";
            txt += Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + Star + "\r\n";
            txt += "展示太卡了，不展示了。反正全是好东西";
            cm.sendOk(txt);
            cm.safeDispose();
        }
    }
}