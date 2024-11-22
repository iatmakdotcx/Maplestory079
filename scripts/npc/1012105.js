/* Ms. Tan 
	Henesys Skin Change.
*/
var status = 0;
var skin = Array(0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11);
var ct = -1;
var selectedColor = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendNext("你好！欢迎光临射手村护肤中心。你想获得和我一样健康紧绷的皮肤吗？只要有#v5153000##b会员卡#k的话，我就可以按照你的要求为你护理皮肤。你想尝试一下吗？");
    } else if (status == 1) {
        cm.sendStyle("用我们护肤中心开放的机械，可以查看护肤后的效果。你想要什么样的皮肤呢？请挑选一下～", 5153000, skin);
    } else if (status == 2) {
        if (cm.setAvatar(5153000, skin[selection]) == 1) {
            cm.sendOk("完成了,让朋友们赞叹你的新肤色吧!");
			cm.dispose();
        } else {
            //cm.sendOk("嗯……你好像没有护肤券啊。对不起，没有护肤券的话，我就不能帮你护理皮肤。");			
			cm.sendYesNo("您没有#v"+5153000+"#。是否想消耗480抵用券或商城点券直接使用？");
			selectedColor = selection
        }
    }else if (status == 3) {
		ct = -1
		if (cm.getChar().getCSPoints(2) >= 480)
		{
			ct = 2;
		}
		else if (cm.getChar().getCSPoints(1) >= 480)
		{
			ct = 1;
		}
		
		if (ct != -1) {
			cm.gainNX(ct, -480);
			cm.gainItem(5153000, 1);
			status = 1;
			action(mode, type, selectedColor);
		} else 
		{
			cm.sendOk("你的抵用券好像不够啊！");
			cm.safeDispose();
		}
	}
}