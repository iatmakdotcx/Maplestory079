var SelText = Array(
        Array("游戏、经验、爆率设置？", 0),
        Array("在所有冒险岛中有什么优势？", 1),
        Array("目前开放了组队副本？", 2),
        Array("在哪里可以进行转职操作？", 3),
        Array("金卷如何获得、如何使用？", 4)
);
var SeleTexts;
function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (a >= 2 && mode != 1) {
        cm.sendOk("如果你有什么需要帮助的，可以点击“市场NPC”处查询。");
        cm.dispose();
    } else {
        if (mode == -1) {
            cm.sendOk("如果你有什么需要帮助的，可以点击“市场NPC”处查询。");
            cm.dispose();
        } else {
            if (mode == 1)
                a++;
            else
                a--;
            if (a == -1) {
                cm.sendOk("如果你有什么需要帮助的，可以点击“市场NPC”处查询。");
                cm.dispose();
            } else
            if (a == 0) {
                var selStr = "#e<#v3991051# #v3991050# #v3991038# #v3991044#-质询中心>#n\r\n#b#h0##k在开始冒险之前还有什么疑问可以到我这里来查询,你想了解什么呢?#b";
                for (var i = 0; i < SelText.length; i++) {
                    selStr += "\r\n#L" + i + "# " + SelText[i][0] + "#l";
                }
                cm.sendSimple(selStr);
            } else if (a == 1) {
                SeleTexts = selection;
                var Text = SelText[SeleTexts][0];
                var Texts = "目前所在位置：\r\n#e#v3991051# #v3991050# #v3991038# #v3991044#-质询中心#n >> " + Text + "#k\r\n";
                a = -1;
                if (selection == 0) {
                    Texts += "追忆MS致力主打游戏耐玩性为目的、为玩家打造一个真正怀旧的冒险岛,游戏经验设置根据自身等级变化。详情如下：\r\n1-100级经验:100倍 \r\n100-250经验：10倍\r\n经典设置、每周六、周日服务器开启双倍经验。游戏难度大大提升、长久耐玩期待您的加入。";
                } else if (selection == 1) {
                    Texts += "追忆MS主打游戏乐趣为目的，在游戏中您可以：\r\n1、挑战游戏副本。\r\n2、活动最多，内容最丰富。\r\n3、同步官方版本，游戏内容一网打尽。\r\n4、新职业：狂龙战士、暴利天使、骑士团、尖兵、恶魔复仇者、神之子、林之灵已全面修复完善。\r\n5、游戏玩家提交的精华内容，整合成游戏内容，游戏内容更亲近。\r\n6、独家创作理念,专业运营团队为您打造一个好玩的冒险岛。\r\n7、拥有国内高端千兆双线服务器,保证游戏流畅。";
                } else if (selection == 2) {
                    Texts += "目前可进行挑战的副本:\r\n1、工作人员强化训练场。\r\n2、大王蜈蚣迷宫。\r\n3、藏经阁武陵妖僧。\r\n4、城市英雄。\r\n5、武陵道场32关。\r\n6、废弃读书组队任务。\r\n7、玩具城组队任务。\r\n8、天空之城组队任务。 \r\n9、扎昆远征队。（副混沌版）\r\n10、黑暗龙神远征队。（副混沌版）\r\n11、逆奥之城 - 未来东京挑战。\r\n12、魔女塔趣味副本。\r\n13、钻石王老五的藏宝库。\r\n14、探索藏宝城。\r\n更多的游戏内容等待你的发现，或者你有更好的建议，可以联系管理员发表你的想法。";
                } else if (selection == 3) {
                    Texts += "点击 #b拍卖(快速转职)#k >> 进行转职。。\r\n#e<转职说明>#n \r\n#k除#b冒险家,反抗者,冒险骑士团#k之外,所有#b职业转职#k为#b系统自动转#k。#b冒险家1.2转 反抗者1转 骑士团1转#k后#b系统自动转。";
                } else if (selection == 4) {
                    Texts += "金卷获得最快途径可以选择在官方网站上面#b赞助充值#k，也可以参加#b活动#k获得。 \r\n#e<金卷使用说明>#n\r\n金卷是#b追忆MS#k游戏货币,它的用处\r\n1、可以兑换点卷 点卷比例：1=1000 \r\n2、可以在市场NPC处购买现金商城的物品 \r\n3、可以上追忆MS赞助值排行榜(获得名次有丰富的奖励)";


                }
                cm.sendNext(Texts);
            }
        }
    }
}