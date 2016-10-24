var status = 0;
var grade = Array(
	"★普通★",
	"★精致★",
	"★无暇★",
	"★灵动★",
	"★纯洁★",
	"★完美★",
	"★神圣★"
);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
			cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			cm.sendSimple("年轻人，你想提升你的装备品级吗？\r\n\r\n           #b#L1#什么是装备品级？#l\r\n           #r#L2#我要进行强化合成#l");
		} else if (status == 1) {
			if (selection == 1) {
				var text="";
				text+="#e#d什么是装备合成：#k#n\r\n";
				text+="\t- 利用多余的装备来为现有的主要装备提升品级，从而提高装备的能力。\r\n";
				text+="\t- #b品级#k是评判装备能力的一个标准，品级越高，装备能力越强\r\n";
				text+="\t- 装备的品级分为#b“普通的、精致的、无暇的、灵动的、纯洁的、完美的、神圣的”#k。\r\n";
				text+="\t- 默认装备的品级均为普通品级，合成成功后将提升一个品级，从而得到更好的属性。\r\n";
				text+="\t- 提升的品级越高，获得的属性加成越高。\r\n";
				text+="\t- 不同等级的装备所提升的属性加成各不相同，等级越高的装备提升的属性越高。\r\n";
				text+="\t- 无论合成成功与否，主装备都会保留，其余副装备有#r50%#k的几率消失。\r\n";
				text+="\t- 合成成功与否都不会降低主装备的原有属性，即便强化过的装备也可以放心行合成。\r\n";
				text+="#e#d装备合成的条件：#k#n\r\n";
				text+="\t- 主装备的穿戴等级不能低于#r50#k级。\r\n";
				text+="\t- 副装备与主装备的穿戴等级差不能超过#r10#k级。\r\n";
				text+="\t- 副装备的品级必须等于或者大于主装备的品级。\r\n";
				text+="\t- 至少需要一件满足合成条件的副装备，副装备的数量越多成功率越大，并且费用越高。\r\n";
				text+="\t- 目前可以合成的部位有：#b武器、副武器、帽子、披风、上衣、裤子、长袍、手套、鞋子#k。\r\n";
				text+="#e#d如何合成装备：#k#n\r\n";
				text+="\t- 开始合成时，会要求选择主副装备，必须先选择主装备，才能进行副装备的选择。\r\n";
				text+="\t- 选择装备页面将会过滤掉点装以及不可参与合成的部位，以装备在背包中的顺序进行排列显示。\r\n";
				text+="\t- 确定完主装备，装备选择页将会过滤掉所有不满足合成条件的副装备。\r\n";
				text+="\t- #r选择装备时一定要慎重，一旦合成，无法复原。#k\r\n";
				text+="\t- 穿戴在身上的装备不会显示在装备列表中，如果希望提升穿戴在身上的装备，请先将装备卸下放在背包内。\r\n";
				cm.sendOk(text);
				cm.dispose();
			} else if (selection == 2) {
				cm.dispose();
				cm.openNpc(1022003, 1);
			}
		}
    }
}