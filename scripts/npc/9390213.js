var status = -1;
var isSecond = false;

//价格：发型，脸型（元宝）
var Cash = [[66, 5150088], [66, 5152085]];

//男发型
var mhair = [33060, 33140, 33150, 33160, 33180, 33240, 33250, 33260, 33280, 33290, 33300, 33310, 33320, 33330, 33380, 33400, 33440, 33460, 33500, 33510, 33520, 33530, 33550, 33580, 33600, 33620, 33630, 33640, 33660, 33680, 33670, 33690, 33700, 33710, 33730, 33740, 33750, 33760, 33810, 33930, 33970, 35000, 35010, 35050, 35060, 35070, 35090, 35100, 35130, 35170, 35180, 35190, 35210, 35260, 35270, 35290, 35300, 35310, 35330, 35340, 35350, 35400, 35430, 35440, 35450, 35510, 35530, 35550, 35560, 35600, 35630, 35650, 35660, 35690, 35700, 35710, 35720, 35770, 35790, 35830, 36000, 36010, 36030, 36050, 36070, 36100, 36120, 36180, 36190, 36230, 36240, 36250, 36260, 36280, 36290, 36300, 36310, 36370, 36380, 36410, 36430, 36450, 36460, 36470, 36480, 36510, 36520, 36570, 36580, 36590, 36620, 36630, 36680, 36700, 36750, 36770, 36840, 36860, 36880, 36890, 36900, 36940, 36980, 36990, 40030, 40040, 40260, 40280];

var mhair1 = [38660, 40360, 40020, 35200, 40430, 40350, 40340, 40250, 40060, 40050, 40010, 36160, 35960, 35680, 35420, 35210, 30650, 30660, 30730, 30840, 33960, 33990, 35030, 35040, 35150, 35240, 35280, 35750, 35800, 36110, 36140, 36200, 36320, 36540, 36720, 36730, 36740, 36800, 36810, 36810, 36820, 36830, 39260, 40000, 40020, 40030, 40040, 40050, 40060, 40100, 40250, 40260, 40280, 40340, 40350, 40360, 40370, 40390, 42060, 40430];

//女发型
var fhair = [37860, 37900, 37940, 37930, 37950, 37960, 37980, 37990, 37970, 37580, 37610, 37630, 37620, 37640, 37650, 37570, 37710, 37700, 37720, 37750, 37760, 37770, 37800, 37810, 37830, 37820, 37850, 37220, 37230, 37260, 37270, 37310, 37320, 37350, 37400, 37440, 37450, 37460, 37490, 37510, 37520, 37530, 34870, 34900, 34910, 34940, 34970, 37000, 37030, 37040, 37060, 37100, 37110, 37140, 37130, 37210, 34590, 34620, 34660, 34670, 34720, 34750, 34770, 34800, 34790, 34810, 34830, 34840, 34860, 34850, 34210, 34240, 34250, 34260, 34270, 34310, 34330, 34400, 34420, 34430, 34450, 34510, 31990, 32500, 34060, 31710, 31760, 31810, 31940, 31490, 31640, 31230, 38020, 38000, 38010, 38030, 38040, 38050, 38060, 38070, 38090, 38110, 38100, 38120, 38130, 38160, 38260, 38270, 38280, 38300, 38290, 38310, 38320, 38330, 38350, 38390, 38400, 38410, 38420, 38440, 38430, 38480, 38470, 38490, 38500, 38530, 38520];

var fhair1 = [38610, 38500, 38310, 38300, 38150, 37950, 38790, 38760, 38710, 38930, 42070, 41460, 41440, 41360, 41210, 41160, 41120, 41090, 38540, 38840, 38560, 38570, 38580, 38600, 38610, 38620, 38630, 38640, 38650, 38680, 38690, 38710, 38730, 38750, 38760, 38770, 38800, 38790, 38810, 38850, 38880, 38930, 38920, 38940, 39250, 41100, 41130, 41140, 41150, 41410, 41420, 41430, 41540, 41550];

//男脸型
var mface = [23028,23678,20000, 20001, 20002, 20003, 20004, 20005, 20006, 20007, 20008, 20009, 20010, 20011, 20012, 20013, 20014, 20015, 20016, 20017, 20018, 20019, 20020, 20021, 20022, 20023, 20024, 20025, 20026, 20027, 20028, 20029, 20030, 20031, 20032, 20033, 20035, 20036, 20037, 20038, 20040, 20141, 20142, 20043, 20044, 20045, 20046, 20047, 20048, 20049, 20050, 20051, 20052, 20053, 20054, 20055, 20056, 20057, 20058, 20059, 20060, 20061, 20062, 20063, 20064, 20065, 20066, 20067, 20068, 20069, 20070, 20073, 20074, 20075, 20076, 20077, 20078, 20080, 20081, 20082, 20083, 20084, 20085, 20086, 20087, 20088, 20089, 20090, 20091, 20092, 20093, 20094, 20095, 20096, 20097, 20098, 20099, 23000, 23001, 23002, 23003, 23004, 23005, 23006, 23008, 23010, 23011, 23012, 23013, 23014, 23015, 23016, 23017, 23018, 23019, 23020, 23021, 23023, 23024, 23025, 23026, 23027, 23029, 23030, 23031, 23032, 23033, 23034, 23035, 23038];

var mface1 = [23039, 23040, 23041, 23042, 23043, 23044, 23053, 23054, 23055, 23056, 23057, 23058, 23059, 23060, 23061, 23062, 23063, 23064, 23065, 23066, 23067, 23068, 23069, 23070, 23071, 23072, 23074, 23075, 23076, 23077, 23078, 23081, 23083, 23084, 23086, 23092, 23094, 23099];

//女脸型
var fface = [21000, 21001, 21002, 21003, 21004, 21005, 21006, 21007, 21008, 21009, 21010, 21011, 21012, 21013, 21014, 21015, 21016, 21017, 21018, 21019, 21020, 21021, 21022, 21023, 21024, 21025, 21026, 21027, 21028, 21029, 21030, 21031, 21033, 21034, 21035, 21036, 21038, 21139, 21140, 21041, 21042, 21043, 21044, 21045, 21046, 21047, 21048, 21049, 21050, 21052, 21053, 21054, 21055, 21056, 21057, 21058, 21059, 21060, 21061, 21062, 21063, 21064, 21065, 21068, 21069, 21070, 21071, 21072, 21073, 21074, 21075, 21076, 21077, 21078, 21079, 21080, 21081, 21082, 21083, 21084, 21085, 21086, 21087, 21088, 21089, 21090, 21091, 21092, 21093, 21094, 21095, 21096, 21097, 21098, 21099, 24001, 24002, 24003, 24004, 24007, 24008, 24009, 24010, 24011, 24012, 24013, 24014, 24015, 24016, 24018, 24019, 24020, 24021, 24022, 24023, 24024, 24025, 24026, 24027, 24028, 24029, 24031, 24032, 24035, 24036, 24037, 24038];

var fface1 = [24039, 24040, 24041, 24050, 24051, 24052, 24053, 24054, 24055, 24056, 24057, 24058, 24059, 24060, 24061, 24062, 24063, 24064, 24066, 24067, 24068, 24069, 24070, 24071, 24072, 24074, 24077, 24078, 24079, 24081, 24082, 24088, 24090, 24097, 24098];

//皮肤代码
var skin = [0, 1, 2, 3, 4];

var beauty = 0;
var hair_Colo_new;
var face_Colo_new;
var one = "#fUI/UIPVP.img/UserRanking/NumRank/Survival/1#";
var two = "#fUI/UIPVP.img/UserRanking/NumRank/Survival/2#";
var three = "#fUI/UIPVP.img/UserRanking/NumRank/Survival/3#";

function start() {
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
		text = "#b欢迎来到#r猫叔沙龙中心#b。请选择你要享受的服务：\r\n";
		text+= "#b#L0#发型设计#d（收费，使用#r#z"+ Cash[0][1] +"##b可以免单～）#l\r\n";
		text+= "#b#L1#脸部护理#d（收费，使用#r#z"+ Cash[1][1] +"##b可以免单～）#l\r\n";
		text+= "#b#L2#发型染色#d（免费使用）#l\r\n";
		text+= "#b#L3#皮肤改色#d（免费使用）#l\r\n"
        cm.sendSimple(text);
    } else if (status == 1) {
        if (selection == 0) {
            beauty = 1;
			text = "#b#e请选择分类：#n（每享受一次发型更换需要 #r"+ Cash[0][0] +" #b个猫币）#k\r\n\r\n";
			text+= "\t  #L0##r发型分类 "+ one +"#l\t\t#L1##d发型分类 "+ two +"#l\r\n\r\n\r\n";
			text+= "#d温馨提示：背包里有#v"+ Cash[0][1] +"##b#z"+ Cash[0][1] +"##d会优先被消耗#k";
			cm.sendSimple(text);
		} else if (selection == 1) {
			beauty = 2;
			text = "#b#e请选择分类：#n（每享受一次发型更换需要 #r"+ Cash[1][0] +" #b个猫币）#k\r\n\r\n";
			text+= "\t  #L0##r脸型分类 "+ one +"#l\t\t#L1##d脸型分类 "+ two +"#l\r\n\r\n\r\n";
			text+= "#d温馨提示：背包里有#v"+ Cash[1][1] +"##b#z"+ Cash[1][1] +"##d会优先被消耗#k";
			cm.sendSimple(text);
        } else if (selection == 2) {
            var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
            hair_Colo_new = [];
            beauty = 3;
            for (var i = 0; i < 8; i++) {
                hair_Colo_new[i] = currenthaircolo + i;
            }
            cm.askAvatar("本服务免费～", hair_Colo_new, Cash, isSecond != 0);
        } else if (selection == 3) {
			beauty = 4;
			cm.sendStyle("本服务免费～", skin, Cash, isSecond != 0);
		}
    } else if (status == 2) {
        if (beauty == 1) {
			var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
			switch (selection) {
		  case 0:
			if (cm.getPlayerStat("GENDER") == 0) {
                hair_Colo_new = mhair;
			} else {
				hair_Colo_new = fhair;
			}
			break;
		  case 1:
			if (cm.getPlayerStat("GENDER") == 0) {
			    hair_Colo_new = mhair1;
			} else {
				hair_Colo_new = fhair1;
			}
			break;
			}
            /*for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }*/
            cm.askAvatar("亲爱的#b#h ##k，欢迎来到#r美发中心#k。洗剪吹一次需要 #r"+ Cash[0][0] +"#k 个猫币喔。\r\n如果你有#v"+ Cash[0][1] +"##b#z"+ Cash[0][1] +"##k的话，我可以考虑给您免单喔！", hair_Colo_new, Cash, isSecond != 0);
	  } else if (beauty == 2) {
		    var face = cm.getPlayerStat("FACE");
            switch (selection) {
		  case 0:
			if (cm.getPlayerStat("GENDER") == 0) {
                face_Colo_new = mface;
			} else {
				face_Colo_new = fface;
			}
			break;
		  case 1:
			if (cm.getPlayerStat("GENDER") == 0) {
			    face_Colo_new = mface1;
			} else {
				face_Colo_new = fface1;
			}
			break;
			}
            /*for (var i = 0; i < face_Colo_new.length; i++) {
            face_Colo_new[i] = face_Colo_new[i] + face % 1000 - (face % 100);
            }*/
            cm.askAvatar("亲爱的#b#h ##k，欢迎来到#r滋养中心#k。脸部护理一次需要 #r"+ Cash[1][0] +"#k 个猫币喔。\r\n如果你有#v"+ Cash[1][1] +"##b#z"+ Cash[1][1] +"##k的话，我可以考虑给您免单喔！", face_Colo_new, Cash, isSecond != 0);
      } else if (beauty == 3) {
			cm.setHair(hair_Colo_new[selection]);
            cm.playerMessage(1,"使用成功");
			cm.dispose();
      } else if (beauty == 4) {
			cm.setSkin(skin[selection]);
            cm.playerMessage(1,"使用成功");
			cm.dispose();
            }
    } else if (status == 3) {
		if (beauty == 1) {
			if (cm.getPlayerStat("GM") == 1) {   //Gm免单检测
                cm.setHair(hair_Colo_new[selection]);
                cm.sendOk("#d您是尊敬的Gm，本店为您免单，祝您使用愉快～");
		  } else if (cm.setAvatar(Cash[0][1], hair_Colo_new[selection], isSecond != 0) == 1) {  //免单理发卡检测
                cm.sendOk("#b您使用#v"+ Cash[0][1] +"##d#z"+ Cash[0][1] +"##b成功设计好了造型～");
				cm.worldSpouseMessage(0x13,"『造型沙龙』：恭喜 "+ cm.getChar().getName() +" 造型设计成功，他/她变得更有型了～");
		  } else if (cm.getHyPay(1) >= Cash[0][0]) {  //元宝检测
			    cm.addHyPay(Cash[0][0]);
                cm.setHair(hair_Colo_new[selection]);
				cm.playerMessage(- 1,"消耗 "+ Cash[0][0] +" 个猫币");
				cm.worldSpouseMessage(0x13,"『造型沙龙』：恭喜 "+ cm.getChar().getName() +" 造型设计成功，他/她变得更有型了～");
                cm.sendOk("#b您花费了 #r"+ Cash[1][0] +" #b个猫币成功设计好了造型～");			
          } else {
                cm.sendOk("#r对不起，您无法使用此功能：\r\n\r\n#b1)：猫币不足 #r"+ Cash[0][0] +" #b个.\r\n2)：没有 #v"+ Cash[0][1] +"##d#z"+ Cash[0][1] +"##k.");
            }
			cm.dispose();
	 } else if (beauty == 2) {
		    if (cm.getPlayerStat("GM") == 1) {   //Gm免单检测
                cm.setFace(face_Colo_new[selection]);
                cm.sendOk("#d您是尊敬的Gm，本店为您免单，祝您使用愉快～");
		  } else if (cm.setAvatar(Cash[1][1], face_Colo_new[selection], isSecond != 0) == 1) {  //免单脸型卡检测
                cm.sendOk("#b您使用#v"+ Cash[1][1] +"##d#z"+ Cash[1][1] +"##b成功滋润了脸部肌肤～");
				cm.worldSpouseMessage(0x13,"『造型沙龙』：恭喜 "+ cm.getChar().getName() +" 滋养皮肤成功，他/她变得更焕发光彩了～");
		  } else if (cm.getHyPay(1) >= Cash[1][0]) {  //元宝检测
			    cm.addHyPay(Cash[1][0]);
                cm.setFace(face_Colo_new[selection]);
				cm.playerMessage(- 1,"消耗 "+ Cash[1][0] +" 个猫币");
				cm.worldSpouseMessage(0x13,"『造型沙龙』：恭喜 "+ cm.getChar().getName() +" 滋养皮肤成功，他/她变得更焕发光彩了～");
                cm.sendOk("#b您花费了 #r"+ Cash[1][0] +" #b个猫币成功滋润了脸部肌肤～");				
          } else {
                cm.sendOk("#r对不起，您无法使用此功能：\r\n\r\n#b1)：猫币不足 #r"+ Cash[1][0] +" #b个.\r\n2)：没有 #v"+ Cash[1][1] +"##d#z"+ Cash[1][1] +"##k.");
            }
			cm.dispose();
	    }
	}
}