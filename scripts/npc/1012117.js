/* 
	
*/
var hair_Colo_new;
var status = -1;
var beauty = -1;
var hairCard = 5150040;
var types = -1;
var ct = -1;
var selectedHair = -1;

function action(mode, type, selection) {
    if (mode == 0) {
		if (status != 1) {
			if (beauty == 0 || beauty == 2 || beauty == 4) {
				cm.sendOk("你还没做好心理准备吗？决定好了之后，请你再来和我说话。");
			} else if (beauty == 1 || beauty == 3) {
				cm.sendOk("怎么样？喜欢新换的发型么?哇～真是既高雅又美丽。哈哈哈，我的手艺还能差到那里去～需要更换发型的话，可以随时来找我，呵呵。");
			}
		}
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendSimple("你好。我是大头国的#b#p1012117##k。如果你有#b#t05150040##k，我可以为你设计一个发型。怎么样？\r\n#b#L0#更换第一组发型(使用皇家理发券)#l \r\n#b#L1#更换第二组发型(使用皇家理发券)#l");
    } else if (status == 1) {
		var hair = cm.getPlayerStat("HAIR");
		hair_Colo_new = [];
        if (selection == 0) {
            beauty = 0;
            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [30000, 30010, 30020, 30030, 30040, 30050, 30060, 30070, 30080, 30090, 30100, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30380, 30400, 30410, 30420, 30430, 30440, 30450, 30460, 30470, 30480, 30490, 30510, 30520, 30530, 30540, 30550, 30560, 30570, 30590, 30600, 30610, 30620, 30630, 30640, 30650, 30660, 30670, 30680, 30700, 30710, 30720, 30730, 30740, 30750, 30760, 30770, 30780, 30790, 30800, 30810, 30820, 30830, 30840, 30850, 30860, 30870, 30880, 30890, 30900, 30910, 30920, 30930, 30940, 30950, 30990, 32160, 32440, 32470, 32490, 32500, 33000, 33040, 33050, 33060, 33070, 33080, 33090, 33100, 33110, 33120, 33130, 33140, 33150, 33170, 33180, 33190, 33200, 33210, 33220, 33230, 33240, 33250, 33260, 33270, 33280, 33290, 33300, 33310, 33320];
            } else {
                hair_Colo_new = [31000, 31010, 31020, 31030, 31040, 31050, 31060, 31070, 31080, 31090, 31100, 31110, 31120, 31130, 31140, 31150, 31160, 31170, 31180, 31190, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 31300, 31310, 31320, 31330, 31340, 31350, 31360, 31370, 31380, 31400, 31410, 31420, 31430, 31440, 31450, 31460, 31470, 31480, 31490, 31510, 31520, 31530, 31540, 31550, 31560, 31590, 31610, 31620, 31630, 31640, 31650, 31660, 31670, 31680, 31690, 31700, 31710, 31720, 31730, 31740, 31750, 31760, 31770, 31780, 31790, 31800, 31810, 31820, 31830, 31840, 31850, 31860, 31870, 31880, 31890, 31900, 31910, 31920, 31930, 31940, 31950, 31990, 32120, 32130, 32140, 32150, 33030, 33160, 33590, 34000, 34010, 34040, 34050, 34060, 34070, 34080, 34090, 34100, 34110, 34120, 34130, 34140, 34150, 34160, 34170, 34180, 34190, 34200, 34210, 34220, 34230, 34240, 34250, 34260, 34270, 34280, 34290];
            }
        } else if (selection == 1) {
            beauty = 1;
            if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = [33000, 33030, 33040, 33050];
            } else {
                hair_Colo_new = [34000,34010,34040,34050,34060];
            }
        }
		var iNow = 0;
		var hairTypeNow = [];
		for (var i = 0; i < hair_Colo_new.length; i++) {
			if (hair_Colo_new[i] != hair-hair%10) {
				hairTypeNow[iNow++] = hair_Colo_new[i] + (hair % 10);
			}
		}
		hair_Colo_new = cm.getCanHair(hairTypeNow);
		cm.sendSimple("那么你想...\r\n#b#L0#看看这个皇家有什么发型#l\r\n#b#L1#更换发型#l");
    } else if (status == 2) {
        if (selection == 0) {
			types = 0;
			if (hair_Colo_new.length == 0)
				cm.sendOk("出现未知错误。");
			else
				cm.sendStyle("随便看", hairCard, hair_Colo_new);
        } else if (selection == 1) {
			types = 1;
			if (beauty == 0 || beauty == 1) {
				cm.sendYesNo("使用皇家理发券，可以随机更换发型。你真的要使用#b#t0" + hairCard + "##k，更换发型吗？");
			} else {
				cm.sendOk("出现未知错误");
				cm.dispose();
			}
		}
    } else if (status == 3) {
		if(!cm.haveItem(hairCard))
		{
			cm.sendYesNo("您没有#v"+hairCard+"#。是否想消耗980抵用券或商城点券直接使用？");
			selectedHair = selection
		}else{
			if (types == 0) {
				if (cm.setAvatar(hairCard, hair_Colo_new[selection])){
					cm.sendOk("好了,让朋友们赞叹你的新发型吧!");
					cm.safeDispose();
				} else {
					cm.sendYesNo("出错了");
				}
			} else {
				
				if (cm.setRandomAvatar(hairCard, hair_Colo_new) == 1) {
					cm.sendOk("好了,让朋友们赞叹你的新发型吧!");
					cm.safeDispose();
				} else {
					cm.sendYesNo("出错了");
				}
			}
		}
    } else if (status == 4) {
		ct = -1
		if (cm.getChar().getCSPoints(2) >= 980)
		{
			ct = 2;
		}
		else if (cm.getChar().getCSPoints(1) >= 980)
		{
			ct = 1;
		}
		
		if (ct != -1) {
			cm.gainNX(ct, -980);
			cm.gainItem(hairCard, 1);
			status = 2;
			action(mode, type, selectedHair);
		} else 
		{
			cm.sendOk("你的抵用券好像不够啊！");
			cm.safeDispose();
		}
		
    }
}