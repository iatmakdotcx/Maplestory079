/*
		射手村整形NPC 加入换眼晴颜色
*/
var status = 0;
var beauty = 0;
var price = 5000000;
var aaa = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var bbb = "#fUI/UIWindow.img/Shop/meso#";
var vvv = "#fUI/UIWindow2.img/ValuePack/button/complete/0#";//领取完成
var mhair = Array(30900, 30910, 30920, 30930, 30940, 30950, 30990, 30800, 30810, 30820, 30830, 30840, 30850, 30860, 30870, 30880, 30890, 30700, 30710, 30720, 30730,  30750, 30760, 30770, 30780, 30790, 30600, 30610, 30620, 30630, 30640, 30650, 30660, 30670, 30680, 30510, 30520, 30530, 30540, 30550, 30560, 30400, 30410, 30420,  30440, 30450, 30460, 30470, 30480, 30490, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30000, 30010, 30020,  30040, 30050, 30060, 30080, 30090, 30100, 30110, 30120, 30130, 30140, 30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 33000, 33030, 33040, 33050, 30610, 33190, 33220, 33230, 33100, 33130, 33210, 33320, 33260, 33310, 33440, 33350, 33150, 32120, 33250, 30910, 33400, 33410, 32140, 33000, 33030, 33040, 33050, 33060, 33070, 33080, 33090);
var mhair2 = Array(35290,35710,35720,35770,35800,35440,35430,35500,35350,35340,35600,35630,35690,35750,35730,35721,35712,35705,35693,35550,35084,35063,35211,35360,35330,35460,35440,35430,35560,35602,36340,35090,35080,35160,35150,35130,35120,35110,35100,35190,35240,35230,35220,35350,36130,36160,36140,36170,36480,36470,36460,36450,36620,36630,36640,36650,36670,36690,36710,36730,36740,36750,36760,36770,36800,36820,36840,36860,36890,36900,36920,36930,36980,36940,36990,33380,33750,33790,34370,34940,35000,35010,35020,35030,35040,35050,35070,37690,37890,31870,32470,32490,33645,35060,35180,35200,35210,35260,35340,36230,36680,36490,36810,36830,36880,36950,37120,36700);
var mhair1 = Array(33100, 33110, 33120, 33140, 33150, 33160, 33170, 33180, 33190, 33200, 33210, 33220, 33230, 33250, 33260, 33270, 33280, 33290, 33300, 33310, 33320, 33330, 33340, 33350, 33360, 33370, 33400, 33410, 33450, 33460, 33470, 33480, 33500, 33510, 33520, 33530, 33550, 33580, 33590, 33600, 33610, 33620, 33650, 33710, 33720, 33660, 33670, 33680, 33690, 33970, 33980, 33990, 33810, 33960, 33730, 33740, 33760, 33770, 33800, 36020, 33960, 36300, 36290, 36220, 37280, 37020, 36030, 33950, 33830, 33930, 33940, 33820, 33800, 33760, 33690, 33700, 33670, 36410, 36360, 36440, 36430, 36190, 36150, 36330, 36110, 36100, 36560, 36550, 36540, 36520, 36590, 36370, 32500, 32440, 36530);
var fhair1 = Array(34940, 34110, 34120, 34130, 34140, 34150, 34160, 34170, 34180, 34190, 34200, 34210, 34220, 34230, 34240, 34250, 34260, 34270, 34280, 34290, 34300, 34310, 34320, 34330, 34340, 34350, 34360, 34370, 34380, 34400, 34410, 34420, 34430, 34440, 34470, 34480, 34490, 34510, 34560, 34590, 34600, 34610, 34620, 34630, 34640, 34650, 34670, 34710, 34720, 34750, 34760, 31990, 34880, 34890, 34900, 34910, 34680, 34690, 34660, 34790, 34800, 34860, 34540, 34700, 34730, 34740, 34770, 34830, 34990, 37000, 36110, 37290, 36360, 34970, 36180, 37200, 37190, 37180, 36310, 34820, 37050, 34810, 33810, 34850, 34840, 34610, 33730, 34760, 34640, 37230, 37100, 37350, 37430, 37420, 37410, 37220, 37260, 37250, 37240, 37560, 37540, 37440, 37380, 37400);
var fhair2 = Array(38520,34450,37530,38700,38680,38660,38640,38600,38560,38460,38410,37890,37910,37950,38620,38710,38730,38740,38760,38790,38800,38810,38850,38930,38940,32150,34950,34940,34960,37310,37320,37330,37340,37350,37361,37370,37400,37410,37420,37430,37440,37450,37460,37490,37500,37510,37520,37530,37540,37550,37560,37570,37580,37610,37620,37630,37640,37650,37660,37670,37680,37690,37700,37710,37720,37730,37740,37750,37760,37770,37780,37790,37800,37810,37820,37830,37840,37850,37860,37880,37900,37920,37930,37940,37950,37960,37970,37980,37990,38000,38010,38020,38030,38040,38050,38060,38070,38080,38090,38100,38110,38120,38130,38150,38160,38220,38240,38250,38260,38270,38280,38290,38300,38310,38320,38330,38340,38350,38360,38370,38380,38390,38470,38500,38480);
var fhair = Array(34000, 34010, 34040, 34050, 34060, 31910, 31920, 31930, 31940, 31950, 31800, 31810, 31820, 31830, 31840, 31850, 31860, 31870, 31880, 31890, 31740, 31700, 31710, 31720, 31730, 31750, 31760, 31770, 31780, 31790, 31110, 31120, 31130, 31140, 31150, 31300, 31310, 31320, 31330, 31340, 31350, 31160, 31170, 31180, 31190, 31050, 31610, 31620, 31630, 31640, 31650, 31660, 31670, 31680, 31690, 31100, 31510, 31520, 31530, 31540, 31550, 31560, 31400, 31410, 31420, 31440, 31450, 31460, 31470, 31480, 31490, 31030, 31080, 31000, 31010, 31020, 31040, 31060, 31090, 31070, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 34160, 34110, 34120, 34130, 34170, 31180, 34220, 34290, 34300, 34100, 34140, 31990, 34200, 34150, 34210, 34260, 34230, 34240, 31990, 32130, 34250, 32140, 34000, 34010, 34040, 34050, 34060, 34070, 34080, 34090, 34100);
var hairnew = Array();
var mface = Array(20035,20147,20462,20377,23071,20092,20091,23043,23042,23041,24016,20044,20038,20035, 20047, 20098, 23059, 24057, 23053,  23057,  23033, 23034, 24025,  23014, 23024, 23017, 23015, 23110, 23021, 24011, 20099, 24001,  21092, 20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029, 20036, 20045, 20037,  20048,20050, 20051, 20052, 20053, 20055, 20056, 20058, 20059, 20060, 20062, 20063, 20064, 20065, 20066, 20068, 20067, 20069);
var fface = Array(24071,24050,24057,23053,23054,23064,23060,24058,24020,24013,23831,24126,23028,24070,24168,24059,23060,23064,23153,23059,23753,23056,23057,24056,24052,24035,24041,24040,24039,24038,24036,23034,23040,24032,24031,21036,24028,23808,24025,23030,23029,24722,23032,21131,21033,21145,21175,21180,21179,21177,21178,21193,21065,21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21015, 21016, 21017, 21018, 21019, 21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21034, 21043, 21029, 21030,21046, 21048, 21049, 21050, 21052, 21053, 21054, 21055, 21056, 21057, 21058, 21059, 21060, 21061, 21062, 21064);
var facenew = Array();
var skin = Array(1, 2, 3, 4, 9, 10);
var mmhair = Array(30900, 30910, 30920, 30930, 30940, 30950, 30990, 30800, 30810, 30820, 30830, 30840, 30850, 30860, 30870, 30880, 30890, 30700, 30710, 30720, 30730, 30750, 30760, 30770, 30780, 30790, 30600, 30610, 30620, 30630, 30640, 30650, 30660, 30670, 30680, 30510, 30520, 30530, 30540, 30550,  30400, 30410, 30420, 30440, 30450, 30460, 30470, 30480, 30490, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 30000, 30020, 30040, 30050, 30060, 30080, 30090, 30100, 30110, 30120, 30130,  30150, 30160, 30170, 30180, 30190, 30200, 30210, 30220, 30230, 30240, 30250, 30260, 30270, 30280, 30290, 30300, 30310, 30320, 30330, 30340, 30350, 30360, 30370, 33000, 33030, 33040, 33050, 30610, 33190, 33220, 33230, 33100, 33130, 33210, 33320, 33260, 33310);
var mfhair = Array(41660,34000, 34010, 34040, 34050, 34060, 31910, 31920, 31930, 31940, 31950, 31800, 31810, 31820, 31830, 31840, 31850, 31860, 31870, 31880, 31890, 31740, 31700, 31710, 31720, 31730, 31750, 31760, 31770, 31780, 31790, 31110, 31120, 31130, 31140, 31150, 31300, 31310, 31320, 31330, 31340, 31350, 31160, 31170, 31180, 31190, 31050, 31610, 31620, 31630, 31640, 31650, 31660, 31670, 31680, 31690, 31100, 31510, 31520, 31530, 31540, 31550, 31560, 31400, 31410, 31420,  31440, 31450, 31460, 31470, 31480, 31490, 31030, 31080, 31000, 31010, 31020, 31040, 31060, 31090, 31070, 31200, 31210, 31220, 31230, 31240, 31250, 31260, 31270, 31280, 31290, 34160, 34110, 34120, 34130, 34170, 31180, 34220, 34290, 34300, 34100, 34140, 31990, 34200, 34150, 34210, 34260, 34230, 34240);
var hairnew = Array();

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
        if (mode == 1) status++;
        else status--;
		if (cm.getMapId() == 101050000) {
            cm.sendOk("防止美容美发BUG导致掉线。禁止在自由市场使用.")
            cm.dispose();
        } 
    else if (status == 0) {
            cm.sendSimple("你现在选择的是 #r美容美发#k 还能什么开始打造自己吧!\r\n已经更新#rver126#k所有脸型和发型,普通没有的,都在皇家里面\r\n" + bbb + " 账号目前 (#k赞助金额： #r"+cm.getHyPay(3)+"元#k)\r\n" + bbb + " 你有: #r" + cm.itemQuantity(5150040) + " #k张#b<#z5150040#>#k" + bbb + " 你有: #r" + cm.itemQuantity(5152053) + " #k张#b<#z5152053#>#k\r\n#L4#" + aaa + " #b皮肤染色（普通玩家会员专用免费）#l\r\n#L2#" + aaa + " 发型染色（普通玩家会员专用免费）#l\r\n#L0#" + aaa + " 改变脸型（#r#e请将眼睛颜色换成黑色,以免掉线！#b#n）#l\r\n#L1#" + aaa + " 眼睛染色（#e#r请注意某些脸型会导致大退#n#b）#l\r\n#L3#" + aaa + " 普通发型一（普通玩家会员专用免费）#l\r\n#L5#" + aaa + " 普通发型二（普通玩家会员专用免费）#l\r\n#L8#" + aaa + " #d皇家130发型#e（#r请将头发颜色换成黑色,以免掉线）#n#l\r\n#L18#" + aaa + " 机器人整容#k（永不变心的陪伴你#n）#l"); //#L18#" + aaa + " 机器人整容#k（永不变心的陪伴你#n）#l  #L8#" + aaa + " #r贵族130最新发型（永久免费）#l\r\n    #L0#" + aaa + " 改变脸型（普通玩家会员专用免费）#l\r\n
        } else if (status == 1) {
            if (selection == 0) {
                facenew = Array();
                if (cm.getChar().getGender() == 0) {
                    for (var i = 0; i < mface.length; i++) {
                        facenew.push(mface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
                    }
                }
                if (cm.getChar().getGender() == 1) {
                    for (var i = 0; i < fface.length; i++) {
                        facenew.push(fface[i] + cm.getChar().getFace() % 1000 - (cm.getChar().getFace() % 100));
                    }
                }
                cm.sendStyle("我可以改变你的脸型,让它比现在看起来漂亮. 你为什么不试着改变它下? ,我将会帮你改变你的脸型,那么选择一个你想要的新脸型吧!", facenew, 5152001,false);
            } else if (selection == 1) {
                beauty = 1;
                if (cm.getChar().getGender() == 0) {
                    var current = cm.getChar().getFace() % 100 + 20000;
                } else {
                    var current = cm.getChar().getFace() % 100 + 21000;
                }
                colors = Array();
                colors = Array(current, current + 100, current + 200, current + 300, current + 400, current + 500, current + 600, current + 700, current + 800);
                cm.sendStyle("请选择你喜欢的颜色.", colors, 5152001,false);
            } else if (selection == 2) {
                beauty = 2;
                haircolor = Array();
                var current = parseInt(cm.getChar().getHair() / 10) * 10;
                for (var i = 0; i < 8; i++) {
                    haircolor.push(current + i);
                }
                cm.sendStyle("我可以改变你的发色,让它比现在看起来漂亮. 你为什么不试着改变它下? 我将会帮你改变你的发色,那么选择一个你想要的新发色吧!", haircolor, 5151001,false);

            } else if (selection == 3) {
                beauty = 3;
                facenew = Array();
                hairnew = Array();
                if (cm.getChar().getGender() == 0) {
                    for (var i = 0; i < mhair.length; i++) {
                        hairnew.push(mhair[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                }
                if (cm.getChar().getGender() == 1) {
                    for (var i = 0; i < fhair.length; i++) {
                        hairnew.push(fhair[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                }
                cm.sendStyle("我可以改变你的发型,让它比现在看起来漂亮.你为什么不试着改变它下? 我将会帮你改变你的发型,那么选择一个你想要的新发型吧!", hairnew, 5150001,false);
            } else if (selection == 4) {
                beauty = 4;
                cm.sendStyle("用我们特殊开发的机器可查看护肤后的效果噢,想换成什么样的皮肤呢？请选择～~", skin, 5153000,false);
            } else if (selection == 6) {
                    cm.dispose();
                    cm.openNpc(1012117);
            } else if (selection == 7) {
                    cm.dispose();
                    cm.openNpc(9201148);
            } else if (selection == 18) {
                    cm.dispose();
                    cm.openNpc(9201148,"jiqiren");
            } else if (selection == 5) {
                beauty = 5;
                facenew = Array();
                hairnew = Array();
                if (cm.getChar().getGender() == 0) {
                    for (var i = 0; i < mhair1.length; i++) {
                        hairnew.push(mhair1[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                }
                if (cm.getChar().getGender() == 1) {
                    for (var i = 0; i < fhair1.length; i++) {
                        hairnew.push(fhair1[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                }
                cm.sendStyle("我可以改变你的发型,让它比现在看起来漂亮.你为什么不试着改变它下? 我将会帮你改变你的发型,那么选择一个你想要的新发型吧!", hairnew, 5150001,false);
            } else if (selection == 8) {
                beauty = 8;
                facenew = Array();
                hairnew = Array();
                if (cm.getChar().getGender() == 0) {
                    for (var i = 0; i < mhair2.length; i++) {
                        hairnew.push(mhair2[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                }
                if (cm.getChar().getGender() == 1) {
                    for (var i = 0; i < fhair2.length; i++) {
                        hairnew.push(fhair2[i] + parseInt(cm.getChar().getHair() % 10));
                    }
                }
                cm.sendStyle("我可以改变你的发型,让它比现在看起来漂亮.你为什么不试着改变它下? 我将会帮你改变你的发型,那么选择一个你想要的新发型吧!", hairnew, 5150001,false);
            }
        } else if (status == 2) {
            cm.dispose();
            if (beauty == 0) {
                if (cm.haveItem(5152001) == 1) {
                    cm.gainItem(5152001, -0);
                    cm.setFace(facenew[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else if (cm.getPlayer().getCSPoints(1) >= 0) {
                    cm.getPlayer().modifyCSPoints(1, -0);
                    cm.setFace(facenew[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else {
                    cm.sendOk("看起来你并没有我们的高级会员卡,我恐怕不能给你进行整形手术,我很抱歉.请你先购买吧.");
                }
            } else if (beauty == 1) {
                if (cm.haveItem(5152001) == 0) {
                    cm.gainItem(5152001, -0);
                    cm.setFace(colors[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else if (cm.getPlayer().getCSPoints(1) >= 0) {
                    cm.getPlayer().modifyCSPoints(1, -0);
                    cm.getPlayer().UpdateCash();
                    cm.setFace(colors[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else {
                    cm.sendOk("看起来你并没有我们的高级会员卡,我恐怕不能给你进行整形手术,我很抱歉.请你先购买吧.");
                }
            } else if (beauty == 2) {
                if (cm.haveItem(5151001) == 0) {
                    cm.gainItem(5151001, -0);
                    cm.setHair(haircolor[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else if (cm.getPlayer().getCSPoints(1) >= 0) {
                    cm.getPlayer().modifyCSPoints(1, -0);
                    cm.getPlayer().UpdateCash();
                    cm.setHair(haircolor[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else {
                    cm.sendOk("看起来你并没有我们的高级会员卡,我恐怕不能给你进行整形手术,我很抱歉.请你先购买吧.");
                }
            } else if (beauty == 3) {
                if (cm.haveItem(5150001) == 0) {
                    cm.gainItem(5150001, -0);
                    cm.setHair(hairnew[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else if (cm.getPlayer().getCSPoints(1) >= 0) {
                    cm.getPlayer().modifyCSPoints(1, -0);
                    cm.getPlayer().UpdateCash();
                    cm.setHair(hairnew[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else {
                    cm.sendOk("看起来你并没有我们的高级会员卡,我恐怕不能给你进行整形手术,我很抱歉.请你先购买吧.");
                }
            } else if (beauty == 4) {
                if (cm.haveItem(5153000) == 0) {
                    cm.gainItem(5153000, -0);
                    cm.setSkin(skin[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else if (cm.getPlayer().getCSPoints(1) >= 0) {
                    cm.getPlayer().modifyCSPoints(1, -0);
                    cm.getPlayer().UpdateCash();
                    cm.setSkin(skin[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else {
                    cm.sendOk("看起来你并没有我们的高级会员卡,我恐怕不能给你进行整形手术,我很抱歉.请你先购买吧.");
                }
            } else if (beauty == 8) {
                if (cm.haveItem(5150001) == 0) {
                    cm.gainItem(5150001, -0);
                    cm.setHair(hairnew[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else if (cm.getPlayer().getCSPoints(1) >= 0) {
                    cm.getPlayer().modifyCSPoints(1, -0);
                    cm.getPlayer().UpdateCash();
                    cm.setHair(hairnew[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else {
                    cm.sendOk("看起来你并没有我们的高级会员卡,我恐怕不能给你进行整形手术,我很抱歉.请你先购买吧.");
                }
            } else if (beauty == 5) {
                if (cm.haveItem(5150001) == 0) {
                    cm.gainItem(5150001, -0);
                    cm.setHair(hairnew[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else if (cm.getPlayer().getCSPoints(1) >= 0) {
                    cm.getPlayer().modifyCSPoints(1, -0);
                    cm.getPlayer().UpdateCash();
                    cm.setHair(hairnew[selection]);
                    cm.sendOk("好了,你的朋友们一定认不出来是你了!");
                } else {
                    cm.sendOk("看起来你并没有我们的高级会员卡,我恐怕不能给你进行整形手术,我很抱歉.请你先购买吧.");
                }
            }
        }
    }
}