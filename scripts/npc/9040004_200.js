var ������ = "#fUI/UIWindow/QuestIcon/6/0#";
function start() {
	cm.sendSimple("                  #k#eÿ�ܳ�ֵ���н��� #l\r\n\r\n#r��ֵ����ÿ����24:00��ֹ�������㣬����ǰ����Ⱥ���ý�������ֵ1000�Ż��ϰ�\r\n               #L3##b��ֵ����#l \r\n\r\n  #rÿ�ܳ�ֵ������һ����������ֵ����15% #v4310060#*5\r\n\r\n  #dÿ�ܳ�ֵ�����ڶ�����������ֵ����10% #v4310060#*3\r\n\r\n  #gÿ�ܳ�ֵ������������������ֵ����5% #v4310060#*2\r\n\r\n");//\r\n#L2##b�������#l
}

function action(mode, type, selection) {
	cm.dispose();
	/if (selection == 0) {	
	cm.displayGuildRanks();
	cm.dispose();
	}
	else if (selection == 1) {
	cm.showlvl();
	cm.dispose();
	}
	else if (selection == 2) {
	cm.showmeso();
	cm.dispose();
	}
	else if (selection == 3) {
	cm.openNpc(2002001,30);
	}
	else if (selection == 4) {
	cm.openNpc(2002001,20);

	}
}
