/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Cody
-- By --------------------------------------------------------------------------------------------------
	xQuasar
Note by Tykian: Minor fixes/additions
**/


var status = -1;
var oldWepName;
var oldWepId;
var newWepId;
var newWepName;
var leaves;
var Stimulator;
var cost;
var getNewWep;
var sel;

function start() {
    cm.sendSimple("������ô�� ? \r\n\r\n#b#L0#ʹ35������#l \r\n\r\n#L1#ʹ42������#l*\r\n\r\n#L2#ʹ��64������#l\r\n\r\n#L4#ʹ��77������#l\r\n\r\n#L3#ó�׵ľ���#l#k");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.dispose();
	return;
    } else {
	status++;
    }
    if (status == 0) {
	sel = selection;
	if (sel == 0) {
	    cm.sendSimple("���ԣ����������? \r\n#b#L0#�㽣#l \r\n#b#L1#�㻪����#l \r\n#b#L2#��Ա��#l \r\n#b#L3#��Ҷ��#l \r\n#b#L4#����ѻ#l \r\n#b#L5#��צ#l \r\n#b#L6#��ǹ#l \r\n#b#L7#��ת���#l \r\n#b#L8#��Ҷ֮��#l \r\n#b#L9#�㿨����#l");
	} else if (sel == 2) {
	    cm.sendSimple("���ԣ����������? \r\n\r\n#b#L0#����ҫ֮�� �����ֽ���#l\r\n#L1#���Rohen��˫�ֽ���#l\r\n#L2#������� �����ָ���#l\r\n#L3#���ħ֮�� (Two-Handed Axe)#l\r\n#L4#��ƽٴ� (One-Handed Mace)#l\r\n#L5#�㱴���� (�����ִ�)#l\r\n#L6#��Ҷ�� (Bow)#l\r\n#L7#��Nishada (��)#l\r\n#L8#��Τ�� (צ)#l\r\n#L9#�㰢����ذ�� (ذ��)#l\r\n#L10#��ڰ����� (ذ��)#l\r\n#L11#���ì (ì)#l\r\n#L12#��Karstan (����)#l\r\n#L13#����ҫħ�� (����)#l\r\n#L14#��Ա�����ǻ� (Ա��)#l\r\n#L15#��Ҷ��צ (Knuckler)#l\r\n#L16#����������Ϸ��ǹ��#l\r\n#L17#��սʿ�ܣ�սʿ�ܣ�#l\r\n#L18#��ħ��ʦ֮�ܣ�ħ��ʦ�ܣ�#l\r\n#L19#����֮�ܣ������ܣ�#l\r\n#L20#��а忨����#l");
	} else if (sel == 1) {
	    cm.sendSimple("���ԣ����������? \r\n#b#L0#��������#l \r\n#b#L1#������Ա��#l \r\n#b#L2#��Ҷ��#l \r\n#b#L3#��ĩ�ո���#l \r\n#b#L4#��Impaler#l \r\n#b#L5#����Ы��#l \r\n#b#L6#���������#l \r\n#b#L7#��Ҷ��#l \r\n#b#L8#��Kandayo#l \r\n#b#L9#��籩��ǹ#l \r\n#b#L10#��籩��ָ#l \r\n#b#L11#��ſ˿�����#l");
	} else if (sel == 4) {
	    cm.sendSimple("���ԣ����������? \r\n#b#L0#��Ҷ����ʯ��#l \r\n#b#L1#��Ҷ����ʯ��#l \r\n#b#L2#��Ҷ����ʯ��#l \r\n#b#L3#��Ҷ����ʯ�°�#l \r\n#b#L4#Maple Pyrope ����#l \r\n#b#L5#��Ҷ����ʯԱ��#l \r\n#b#L6#��Ҷ����ʯRohen#l \r\n#b#L7#��Ҷ����ʯս��#l \r\n#b#L8#��Ҷ����ʯ�#l \r\n#b#L9#��Ҷ����ʯì#l \r\n#b#L10#��Ҷ����ʯ����ɱ��#l \r\n#b#L11#��Ҷ����ʯ��#l \r\n#b#L12#��Ҷ����ʯ��ѻ#l \r\n#b#L13#��Ҷ����ʯΤ��#l \r\n#b#L14#��Ҷ����ʯת���#l \r\n#b#L15#��Ҷ����ʯ����#l \r\n#b#L16#��Ҷ����ʯ������#l");
	} else if (sel == 3) {
		if (!cm.haveItem(4001126, 1)) {
			cm.sendOk("������Ҫ����һ��Ҷ���վ���!");
			cm.dispose();
			return;
		}
		cm.sendGetNumber("���ж���Ҷ��ϲ������?", 0, 0, 32767);
		status = 9;
	}
    } else if (status == 1) {
	if (sel == 0) {
	    if (selection == 0) {
		newWepName = "�㽣";
		newWepId = 1302020;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 1) {
		newWepName = "�㻪����";
		newWepId = 1332025;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 2) {
		newWepName = "��Ա��";
		newWepId = 1382009;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 3) {
		newWepName = "��Ҷ��";
		newWepId = 1452016;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 4) {
		newWepName = "����ѻ";
		newWepId = 1462014;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 5) {
		newWepName = "��צ";
		newWepId = 1472030;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 6) {
		newWepName = "��ǹ";
		newWepId = 1492020;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 7) {
		newWepName = "��ת���";
		newWepId = 1482020;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 8) {
		newWepName = "��Ҷ֮��";
		newWepId = 1092030;
		leaves = 100;
		cost = 50000;
	    } else if (selection == 9) {
		newWepName = "�㿨����";
		newWepId = 1342025;
		leaves = 100;
		cost = 50000;
	    }
	    cm.sendYesNo("��ȷ������ʹһ�� #b" + newWepName + "#k? ������Ʒ�Ͳ��Ͻ���Ҫ��...\r\n\#i4001126# x" + leaves + "#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/7/0# " + cost);
	// 1482020
	} else if (sel == 2) {
	    if (selection == 0) {
		oldWepName = "��������";
		oldWepId = 1302030;
		newWepName = "����ҫ֮��";
		newWepId = 1302064;
		leaves = 100;
		cost = 300000;
		Stimulator = 4130002;
	    } else if (selection == 1) {
		oldWepName = "��������";
		oldWepId = 1302030;
		newWepName = "���Rohen";
		newWepId = 1402039;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130005;
	    } else if (selection == 2) {
		oldWepName = "��Ҷ��";
		oldWepId = 1412011;
		newWepName = "�������";
		newWepId = 1312032;
		leaves = 100;
		cost = 300000;
		Stimulator = 4130003;
	    } else if (selection == 3) {
		oldWepName = "��Ҷ��";
		oldWepId = 1412011;
		newWepName = "���ħ֮��";
		newWepId = 1412027;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130006;
	    } else if (selection == 4) {
		oldWepName = "��ĩ�ո���";
		oldWepId = 1422014;
		newWepName = "��ƽٴ�";
		newWepId = 1322054;
		leaves = 100;
		cost = 300000;
		Stimulator = 4130004;
	    } else if (selection == 5) {
		oldWepName = "��ĩ�ո���";
		oldWepId = 1422014;
		newWepName = "�㱴����";
		newWepId = 1422029;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130007;
	    } else if (selection == 6) {
		oldWepName = "���������";
		oldWepId = 1452022;
		newWepName = "��Ҷ��";
		newWepId = 1452045;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130012;
	    } else if (selection == 7) {
		oldWepName = "��Ҷ��";
		oldWepId = 1462019;
		newWepName = "��Nishada";
		newWepId = 1462040;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130013;
	    } else if (selection == 8) {
		oldWepName = "��Kandayo";
		oldWepId = 1472032;
		newWepName = "��Τ��";
		newWepId = 1472055;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130015;
	    } else if (selection == 9 || selection == 10) {
		oldWepName = "�㻪����";
		oldWepId = 1332025;
		if (selection == 9) {
		    newWepName = "�㰢����ذ��";
		    newWepId = 1332056;
		} else {
		    newWepName = "��ڰ�����";
		    newWepId = 1332055;
		}
		leaves = 200;
		cost = 500000;
		Stimulator = 4130014;
	    } else if (selection == 11) {
		oldWepName = "��Impaler";
		oldWepId = 1432012;
		newWepName = "���ì";
		newWepId = 1432040;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130008;
	    } else if (selection == 12) {
		oldWepName = "����Ы��";
		oldWepId = 1442024;
		newWepName = "��Karstan";
		newWepId = 1442051;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130009;
	    } else if (selection == 13) {
		oldWepName = "������Ա��";
		oldWepId = 1382012;
		newWepName = "����ҫħ��";
		newWepId = 1372034;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130010;
	    } else if (selection == 14) {
		oldWepName = "������Ա��";
		oldWepId = 1382012;
		newWepName = "��Ա�����ǻ�";
		newWepId = 1382039;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130011;
	    } else if (selection == 15){
		oldWepName = "��籩��ָ";
		oldWepId = 1482021;
		newWepName = "��Ҷ��צ";
		newWepId = 1482022;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130016;
	    } else if (selection == 16) {
		oldWepName = "��籩��ǹ";
		oldWepId = 1492021;
		newWepName = "��������";
		newWepId = 1492022;
		leaves = 200;
		cost = 500000;
		Stimulator = 4130017;
	    } else if (selection == 17) {
		oldWepName = "��Ҷ֮��";
		oldWepId = 1092030;
		newWepName = "��սʿ��";
		newWepId = 1092046;
		leaves = 200;
		cost = 500000;
	    } else if (selection == 18) {
		oldWepName = "��Ҷ֮��";
		oldWepId = 1092030;
		newWepName = "��ħ��ʦ��";
		newWepId = 1092045;
		leaves = 200;
		cost = 500000;
	    } else if (selection == 19) {
		oldWepName = "��Ҷ֮��";
		oldWepId = 1092030;
		newWepName = "������";
		newWepId = 1092047;
		leaves = 200;
		cost = 500000;
	    } else if (selection == 20) {
		oldWepName = "��ſ˿�����";
		oldWepId = 1342026;
		newWepName = "��а忨����";
		newWepId = 1342027;
		leaves = 200;
		cost = 500000;
	    }
	    cm.sendYesNo("��ȷ������ʹһ�� #b" + newWepName + "#k? ������Ʒ�Ͳ��Ͻ���Ҫ��...\r\n\r\n#i" + oldWepId + "# x 1\r\n#i4001126# x" + leaves + "\r\n A Stimulator can also be used if you have the required one! #r(Optional)#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/7/0# " + cost);
	} else if (sel == 1) {
	    if (selection == 0) {
		newWepName = "��������";
		newWepId = 1302030;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 1) {
		newWepName = "������Ա��";
		newWepId = 1382012;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 2) {
		newWepName = "��Ҷ��";
		newWepId = 1412011;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 3) {
		newWepName = "��ĩ�ո���";
		newWepId = 1422014;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 4) {
		newWepName = "��Impaler";
		newWepId = 1432012;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 5) {
		newWepName = "����Ы��";
		newWepId = 1442024;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 6) {
		newWepName = "���������";
		newWepId = 1452022;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 7) {
		newWepName = "��Ҷ��";
		newWepId = 1462019;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 8) {
		newWepName = "��Kandayo";
		newWepId = 1472032;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 9) {
		newWepName = "��籩��ǹ";
		newWepId = 1492021;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 10) {
		newWepName = "��籩��ָ";
		newWepId = 1482021;
		leaves = 200;
		cost = 50000;
	    } else if (selection == 11) {
		newWepName = "��ſ˿�����";
		newWepId = 1342026;
		leaves = 200;
		cost = 50000;
	    }
	    cm.sendYesNo("��ȷ������ʹһ�� #b" + newWepName + "#k? ������Ʒ�Ͳ��Ͻ���Ҫ��...\r\n\#i4001126# x" + leaves + "#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/7/0# " + cost);
	} else if (sel == 4) {
	    if (selection == 0) {
		oldWepName = "����ҫ֮��";
		oldWepId = 1302064;
		newWepName = "��Ҷ����ʯ��";
		newWepId = 1302142;
		leaves = 250;
		cost = 3000000;
		Stimulator = 4130002;
	    } else if (selection == 6) {
		oldWepName = "���Rohen";
		oldWepId = 1402039;
		newWepName = "��Ҷ����ʯRohen";
		newWepId = 1402085;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130005;
	    } else if (selection == 1) {
		oldWepName = "�������";
		oldWepId = 1312032;
		newWepName = "��Ҷ����ʯ��";
		newWepId = 1312056;
		leaves = 250;
		cost = 3000000;
		Stimulator = 4130003;
	    } else if (selection == 7) {
		oldWepName = "���ħ֮��";
		oldWepId = 1412027;
		newWepName = "��Ҷ����ʯս��";
		newWepId = 1412055;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130006;
	    } else if (selection == 2) {
		oldWepName = "��ƽٴ�";
		oldWepId = 1322054;
		newWepName = "��Ҷ����ʯ��";
		newWepId = 1322084;
		leaves = 250;
		cost = 3000000;
		Stimulator = 4130004;
	    } else if (selection == 8) {
		oldWepName = "�㱴����";
		oldWepId = 1422029;
		newWepName = "��Ҷ����ʯ�";
		newWepId = 1422057;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130007;
	    } else if (selection == 11) {
		oldWepName = "��Ҷ��";
		oldWepId = 1452045;
		newWepName = "��Ҷ����ʯ��";
		newWepId = 1452100;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130012;
	    } else if (selection == 12) {
		oldWepName = "��Nishada";
		oldWepId = 1462040;
		newWepName = "��Ҷ����ʯ��ѻ";
		newWepId = 1462085;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130013;
	    } else if (selection == 13) {
		oldWepName = "��Τ��";
		oldWepId = 1472055;
		newWepName = "Maple PyropeSkanda";
		newWepId = 1472111;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130015;
	    } else if (selection == 3) {
		oldWepName = "��ڰ�����";
		oldWepId = 1332055;
		newWepName = "��Ҷ����ʯ�°�";
		newWepId = 1332114;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130014;
	    } else if (selection == 9) {
		oldWepName = "���ì";
		oldWepId = 1432040;
		newWepName = "��Ҷ����ʯì";
		newWepId = 1432075;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130008;
	    } else if (selection == 10) {
		oldWepName = "��Karstan";
		oldWepId = 1442051;
		newWepName = "��Ҷ����ʯ����ɱ��";
		newWepId = 1442104;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130009;
	    } else if (selection == 4) {
		oldWepName = "����ҫħ��";
		oldWepId = 1372034;
		newWepName = "Maple Pyrope ����";
		newWepId = 1372071;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130010;
	    } else if (selection == 5) {
		oldWepName = "��Ա�����ǻ�";
		oldWepId = 1382039;
		newWepName = "��Ҷ����ʯԱ��";
		newWepId = 1382093;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130011;
	    } else if (selection == 14){
		oldWepName = "��Ҷ��צ";
		oldWepId = 1482022;
		newWepName = "��Ҷ����ʯת���";
		newWepId = 1482073;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130016;
	    } else if (selection == 15) {
		oldWepName = "��������";
		oldWepId = 1492022;
		newWepName = "��Ҷ����ʯ����";
		newWepId = 1492073;
		leaves = 500;
		cost = 5000000;
		Stimulator = 4130017;
	    } else if (selection == 16) {
		oldWepName = "��а忨����";
		oldWepId = 1342027;
		newWepName = "��Ҷ����ʯ������";
		newWepId = 1342028;
		leaves = 500;
		cost = 5000000;
	    }
	    cm.sendYesNo("��ȷ������ʹһ�� #b" + newWepName + "#k? ������Ʒ�Ͳ��Ͻ���Ҫ��...\r\n\r\n#i" + oldWepId + "# x 1\r\n#i4001126# x" + leaves + "\r\n A Stimulator can also be used if you have the required one! #r(Optional)#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/7/0# " + cost);
	}
    } else if (status == 2) {
	if (sel == 2 || sel == 4) {
	    if (mode != 1) {
		cm.sendOk("û�У�Ҳ����Ӧ�õõ�����Ҫ�ĵ�һ����Ŀ������������ġ��һ�������ȴ�.");
		cm.dispose();
	    } else {
		if ((cm.getMeso() < cost) || (!cm.haveItem(oldWepId,1)) || (!cm.haveItem(4001126,leaves))) {
		    cm.sendOk("Sorry, but you don't seem to have all the items. Please get them all, and try again.");
		    cm.dispose();
		} else if (Stimulator == null || !cm.haveItem(Stimulator)) {
		    if (cm.canHold(newWepId)) {
			cm.gainItem(oldWepId, -1);
			cm.gainItem(4001126, -leaves);
			cm.gainMeso(-cost);
			cm.gainItem(newWepId,1);
			cm.sendOk("�����ȫ����ɣ����ǿ죬�������������Ҫ�κθ������Ŀ���һ��������.");
		    } else {
			cm.sendOk("�����ӣ�����Ŀǰ��ȫ���嵥������.");
		    }
		    cm.dispose();
		} else {
		    status = 2;
		    cm.sendSimple("����������һ��#�̼�#kΪ���⼶����. ���봴�����������л򲻾���#r�̼�#k? ���������#r�̼�#k, ����� #bƽ��#k. ��������Ĵ��� #rStimulator#k,����Ŀ����������Ļ���#b����#kҪô#b����#k ����ƽ��ˮƽ.\r\n#b#L20#���������� WITH �̼�#l\r\n#L21#���������� WITHOUT �̼�#l#k");
		}
	    }
	} else if (sel == 0 || sel == 1) {
	    if ((cm.getMeso() < cost) || !cm.haveItem(4001126,leaves)) {
		cm.sendOk("�ܱ�Ǹ�������ƺ���û�а����е���Ŀ�������������У�Ȼ������һ��.");
	    } else {
		if (cm.canHold(newWepId)) {
		    cm.gainItem(4001126, -leaves);
		    cm.gainMeso(-cost);
		    cm.gainItem(newWepId, 1);
		    cm.sendOk("�����ȫ����ɣ����ǿ죬�������������Ҫ�κθ������Ŀ���һ��������.");
		} else {
		    cm.sendOk("�����ӣ�����Ŀǰ��ȫ���嵥������.");
		}
	    }
	    cm.dispose();
	}
    } else if (status == 3) {
	if (sel == 2 || sel == 4) {
	    if (cm.canHold(newWepId)) {
		if (selection == 21) {
		    cm.gainItem(oldWepId,-1);
		    cm.gainItem(4001126,-leaves);
		    cm.gainMeso(-cost);
		    cm.gainItem(newWepId, 1);
		    cm.sendOk("�����ȫ����ɣ����ǿ죬�������������Ҫ�κθ������Ŀ���һ��������.");
		} else {
		    cm.gainItem(oldWepId,-1);
		    cm.gainItem(4001126,-leaves);
		    cm.gainItem(Stimulator,-1);
		    cm.gainMeso(-cost);
		    cm.gainItem(newWepId,1,true);
		    cm.sendOk("�����ȫ����ɣ����ǿ죬�������������Ҫ�κθ������Ŀ���һ��������.");
		}
	    } else {
		cm.sendOk("�����ӣ�����Ŀǰ��ȫ���嵥������.");
	    }
	    cm.dispose();
	}
	} else if (status == 10) {
		if (selection == 0) {
			cm.sendOk("����㲻ϣ�����׵�Ҷ�ӣ���ô��Ͳ���õ������.");
			cm.dispose();
			return;
		}
		if (!cm.haveItem(4001126, selection)) {
			cm.sendOk("��û����ô���Ҷ��.");
			cm.dispose();
			return;
		}
		if (cm.getPlayerStat("EXP") >= (Integer.MAX_VALUE - 200 * selection)) {
			cm.sendOk("�����ڳ��Խ�����̫���Ҷ��!");
			cm.dispose();
			return;
		}
		cm.gainItem(4001126, -selection);
		cm.gainExpR(200 * selection);
		cm.sendOk("��ȥ����!");
		cm.dispose();
    }
}