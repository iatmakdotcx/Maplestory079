
var status;
			
function start() {
	if (cm.getBossLog("fb") > 1) {
	    cm.sendOk("ÿ����ս2��");
		cm.dispose();
	} else if (cm.getMeso()<=20000000) {
		cm.sendOk("��Ҳ���2ǧ��");
		cm.dispose();
    } else if (!cm.isLeader()) { // Not Party Leader
            cm.sendOk("������Ķӳ�����˵��~");
            cm.dispose();
	} else if (cm.getLevel() < 200) { // Not Party Leader
            cm.sendOk("��Ҫ200~");
            cm.dispose();		
	} else if (cm.getPlayerCount(108010301) > 0 && cm.getBossLog('��ս������1') < 2|| cm.getPlayerCount(108010301) > 0) {
        cm.sendNext("��ǰ��������������ս���Ժ�����");
        cm.dispose();
	}else{
    status = -1;
    action(1, 0, 0);
}}

function action(mode, type, selection) {
		var em = cm.getEventManager("XuejinglingQP");
		if (em == null) {
			cm.sendOk("����δ֪����,���Ժ�����....");
		}else{
			var prop = em.getProperty("state");
			if (prop.equals("0") || prop == null) {
				em.startInstance(cm.getParty(),cm.getMap());
				cm.gainMeso(-20000000);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"FFN����BOSS��ս" + " : " + cm.getPlayer().getName() +"FFN����BOSS��ս,ΰ�����ʿ,ף�����ˣ�����",true).getBytes());
				//em.startInstance
				cm.setBossLog("fb");
				cm.dispose();
				
			}else{
				cm.sendSimple("���������Ѿ���������,�볢�Ի�Ƶ�����ߵ�����������ɡ�");
				cm.dispose();
			}
		}
}