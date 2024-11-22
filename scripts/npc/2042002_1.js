/*
SnailMS�ű�������
*/

var target1 = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("�Ի�������");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		//�������д�ű���һ��Ҫ������
		var text = "#r��#b����#r�����ǹ�����껪����#b�����г�#r���Ҿ��ǻ�ܹ�\r\n#k��ѡ����Ҫ�μӵĻ��\r\n\r\n";
		//text += "#L1##bOX����#k#l\t\t#L2##b��Ҭ��#k#l\t\t#L3##b��ѩ��#k#l\r\n\r\n";
		//text += "#L4##bѰ��  #k#l\t\t#L5##b��ߵ�#k#l\t\t#L6##b��¥��¥#k#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			cm.sendYesNo("Ҫ���㴫�͵�#rOX����ı�������#kô��")
			target1 = 1;
		} else if (selection == 2) {
			//�������дѡ��2Ҫ������
			cm.sendYesNo("Ҫ���㴫�͵�#r��Ҭ�ӵı�������#kô��")
			target1 = 2;
		} else if (selection == 3) {
			//�������дѡ��3Ҫ������
			cm.sendYesNo("Ҫ���㴫�͵�#r��ѩ��ı�������#kô��")
			target1 = 3;
		} else if (selection == 4) {
			//�������дѡ��4Ҫ������
			cm.sendYesNo("Ҫ���㴫�͵�#rѰ���ı�������#kô��")
			target1 = 4;
		} else if (selection == 5) {
			//�������дѡ��5Ҫ������
			cm.sendYesNo("Ҫ���㴫�͵�#r��ߵصı�������#kô��")
			target1 = 5;
		} else if (selection == 6) {
			//�������дѡ��6Ҫ������
			cm.sendYesNo("Ҫ���㴫�͵�#r��¥��¥�ı�������#kô��")
			target1 = 6;
		} 
		
	} else if (status == 2){
		switch(target1){
			case 1:
			cm.warp(109020001);
			break;
			case 2:
			cm.warp(109080000);
			break;
			case 3:
			var cs = cm.getPlayer().getClient().getChannelServer();
			var myEvent =  cs.getEvent(Packages.server.events.MapleEventType.��ѩ�����);
			if(myEvent.isRunning()){
				cm.sendOk("��Ǹ����ѿ�ʼ��ͨ���ѹرգ��´��������~");
				cm.dispose();
				return;
			}else{
				cm.warp(109060000);
			}
			break;
			case 4:
			cm.warp(109010000);
			break;
			case 5:
			cm.warp(109040000);
			break;
			case 6:
			cm.warp(109030001);
			break;
		}
		cm.dispose();
	} else {
		cm.dispose();
		return;
	}
}

