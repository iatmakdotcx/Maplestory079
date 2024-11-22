
var status = -1;

function start() {
    if (cm.getBossLog("��ս����1") > 1) {
        cm.sendOk("ÿ����ս2�� ��Ҫ190��~");
        cm.dispose();
    } else if (cm.getMeso() <= 25000000) {
        cm.sendOk("��Ҳ���2500ǧ��");
        cm.dispose();
    } else if (!cm.isLeader()) { // Not Party Leader
        cm.sendOk("������Ķӳ�����˵��~");
        cm.dispose();
    } else if (cm.getLevel() < 190) { // Not Party Leader
        cm.sendOk("ÿ����ս2�� ��Ҫ190��~");
        cm.dispose();
} else if (cm.getPlayerCount(209000001) > 0 && cm.getBossLog('��ս������1') < 2|| cm.getPlayerCount(209000001) > 0) {
        cm.sendNext("#r��ǰ��������������ս���Ժ����ԣ�");
        cm.dispose();
    } else {
		var party = cm.getPlayer().getParty().getMembers();
		var it = party.iterator();
		var noOkList = [];
		while (it.hasNext()) {
			var cPlayer = it.next();
			var cc = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
			if(cc.getBossLog("��ս����1") > 1){
				noOkList.push(cc.getName());
			}
		}
		
		if (noOkList.length > 0) {
			var say = "";
			say += "#b�����У�����������޿���ս������#r\r\n";
			for(var i = 0;i<noOkList.length;i++){
				say += noOkList[i]+"\r\n";
			}
			cm.sendOk(say);
			cm.dispose();
			return;
		}
		
        action(1, 0, 0);
    }
}

function action(mode, type, selection) {
    var em = cm.getEventManager("Xiaojl");
    if (em == null) {
        cm.sendOk("����δ֪����,���Ժ�����....");
    } else {
        var prop = em.getProperty("state");
        if (cm.getMeso() > 25000000) {
            em.startInstance(cm.getParty(), cm.getMap());
			//cm.ˢ��״̬();
            cm.gainMeso(-25000000);
            cm.setBossLog("��ս����1");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����BOSS" + " : " + "��ϲ��" + cm.getChar().getName() + "���������Ķ�����ս������ΰ�����ʿ��ף�����ˣ�"));
								
            cm.dispose();
        } else {
            cm.sendSimple("���������Ѿ���������,�볢�Ի�Ƶ�����ߵ�����������ɡ�");
            cm.dispose();
        }
    }
}
