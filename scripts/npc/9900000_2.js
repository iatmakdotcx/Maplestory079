/*
SnailMS�ű�������
*/

var ����� = Array("OX����", "��Ҭ��", "��ѩ��", "Ѱ��", "��ߵ�", "��¥��¥");
var choosed = 0;

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
		var text = "��ѡ����Ҫ����Ļ��\r\n\r\n";
		for(var i = 0; i < �����.length; i++){
			text += "\t\t#L" + i + "##b" + �����[i] + "#k#l";
			if(i % 2 == 0){
				text += "\t";
			}else{
				text += "\r\n";
			}
		}
		text += "\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		choosed = selection;
		var text = "��ѡ����#r" + �����[choosed] + "#k����ѡ�� #g����#k ���� #r�ر�#k:\r\n\r\n"
		text += "\t\t#b#L1#��������#k#l\t#b#L2#���رա�#k#l";
		cm.sendSimple(text);
		
	} else if(status == 2){
		switch(choosed){
			case 0:
				if(selection == 1){
					cm.startOxQuiz(cm.getChannel());
					break;
				}else if(selection == 2){
					var cs = cm.getPlayer().getClient().getChannelServer();
					var myEvent =  cs.getEvent(Packages.server.events.MapleEventType.OX�������);
					myEvent.unreset();
					break;
				}
			case 1:
				if(selection == 1){
					cm.startCoconut(cm.getChannel());
					break;
				}else if(selection == 2){
					var cs = cm.getPlayer().getClient().getChannelServer();
					var myEvent =  cs.getEvent(Packages.server.events.MapleEventType.��Ҭ�ӱ���);
					myEvent.unreset();
					break;
				}
			case 2:
				if(selection == 1){
					var chrList = cm.getPlayer().getMap().getAllPlayersThreadsafe();
					if(chrList != null){
						var it = chrList.iterator();
						var i = 1;
						while(it.hasNext()){
							var chr = it.next();
							if(chr != null){
								/* chr.changeMap(910000000);
								while(chr.getMapId() == 910000000){
									if(i % 2 == 0){
										chr.changeMap(109060000, 0);
									}else{
										chr.changeMap(109060000, 1);
									}
								} */
								if(i % 2 == 0){
										chr.changeMap(109060000, 0);
									}else{
										chr.changeMap(109060000, 1);
									}
								i++;
							}
						}
						cm.startSnowBall(cm.getChannel());
					}
					break;
				}else if(selection == 2){
					var cs = cm.getPlayer().getClient().getChannelServer();
					var myEvent =  cs.getEvent(Packages.server.events.MapleEventType.��ѩ�����);
					myEvent.unreset();
					break;
				}
			case 3:
				if(selection == 1){
					cm.startJewel(cm.getChannel());
					break;
				}else if(selection == 2){
					var cs = cm.getPlayer().getClient().getChannelServer();
					var myEvent =  cs.getEvent(Packages.server.events.MapleEventType.Ѱ��);
					myEvent.unreset();
					break;
				}
			case 4:
				if(selection == 1){
					cm.startFitness(cm.getChannel());
					break;
				}else if(selection == 2){
					var cs = cm.getPlayer().getClient().getChannelServer();
					var myEvent =  cs.getEvent(Packages.server.events.MapleEventType.��ߵر���);
					myEvent.unreset();
					break;
				}
			case 5:
				if(selection == 1){
					cm.startOla(cm.getChannel());
					break;
				}else if(selection == 2){
					var cs = cm.getPlayer().getClient().getChannelServer();
					var myEvent =  cs.getEvent(Packages.server.events.MapleEventType.��¥��¥);
					myEvent.unreset();
					break;
				}
				
		}
		if(selection == 1){
			cm.ȫ������(6, "[�����] ����Ա������ " + �����[choosed] + " ���")
			cm.sendOk("���ѿ������");
			cm.dispose();
			return;
		}else if(selection == 2){
			cm.ȫ������(6, "[�����] ����Ա�ر��� " + �����[choosed] + " ���")
			cm.sendOk("���ѹرջ��");
			cm.dispose();
			return
		}
		
	} else {
		cm.dispose();
		return;
	}
}

