
var status;
			
function start() {
	if (cm.getBossLog("��ս����2") > 1){
	    cm.sendOk("ÿ����ս2�� ��Ҫ190��~");
		cm.dispose();
	} else if (cm.getMeso()<=15000000) {
		cm.sendOk("��Ҳ���1ǧ5����");
		cm.dispose();
   } else if (!cm.isLeader()) { // Not Party Leader
            cm.sendOk("������Ķӳ�����˵��~");
            cm.dispose();
   } else if (cm.getLevel() < 190) { // Not Party Leader
            cm.sendOk("ÿ����ս2�� ��Ҫ190��~");
            cm.dispose();
	} else if (cm.getPlayerCount(108010101) > 0 && cm.getBossLog('��ս������2') < 2|| cm.getPlayerCount(108010101) > 0) {
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
			if (cm.getMeso() > 10000000) {
				em.startInstance(cm.getParty(),cm.getMap());
				cm.gainMeso(-15000000);
				cm.givePartyBossLog("��ս����2");
				//em.startInstance
				//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"FFN����˫BOSS��ս" + " : " + cm.getPlayer().getName() +"FFN����˫BOSS��ս,ΰ�����ʿ,ף�����ˣ�����",true).getBytes());
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�籩ϵ��װ��" + " : " + "��ϲ��" + cm.getChar().getName() + "����ս�籩ϵ��װ��BOSS,ΰ�����ʿ,ף�����ˣ�"));
				
				cm.dispose();
			}else{
				cm.sendSimple("���������Ѿ���������,�볢�Ի�Ƶ�����ߵ�����������ɡ�");
				cm.dispose();
			}
		}
}