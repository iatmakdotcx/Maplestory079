/* ===========================================================
			ע�� itemQuantity()
	�ű�����: 		NPC
	���ڵ�ͼ:		
	�ű�����:		
=============================================================
���ű�Դ��������������Ϊ��������֮�á�����Ȩ������ϵ���ǣ����ǽ��ڵ�һʱ��ɾ����
*/

var a = 0;

function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
			if (a == -1){
				cm.dispose();
			}else if (a == 0) {
					cm.sendSimple("#e#r�������󸱱�����Ա����ȷ�����㹻ǿ�󣡣�������ʮ�ַḻ��\r\n����Ҫ������б�����5���ˣ����б�����һ��������\r\n\r\n#L0#��Ҫǰ��#l\r\n\r\n#L1#���˲���ȥ#l");
	}//status
else if (a == 1) {
if (selection == 0) {




if (cm.getParty() == null) { // No Party
                    cm.sendOk("���㿪��һ�����");
                    cm.dispose();
                    return;
                } else if (!cm.isLeader()) { // Not Party Leader
                    cm.sendOk("��жӳ�����˵��.");
                    cm.dispose();
                    return;
                } else if (cm.getMap(401060100).getCharactersSize() > 0) { // Not Party Leader
                    cm.sendOk("�Ѿ���������ս�˸��������źܿ�ͻ�����ģ�������û���ܴ������ģ���.");
                    cm.dispose();
                    return;
                } else {
                    var party = cm.getParty().getMembers();
                    if ((party.size() < 3) && cm.getPlayer().getName() != "������" && cm.getPlayer().getName() != "xuxuxuxu") {
                        cm.sendOk("#r�Բ���,Ϊ�˱�֤��İ�ȫ����ȷ�����������4����.");
                        cm.dispose();
                        return;
                    }

var party = cm.getParty().getMembers().iterator();
            var next = false;
	var jianceditu = true;
            while (party.hasNext()) {
                var cPlayer = party.next();
                if (cPlayer.getJobId() != 232 || cm.getJobId() != 232) {
                    next = true;
                }
}
var party2 = cm.getParty().getMembers().iterator();
            while (party2.hasNext()) {
                var bPlayer = party2.next();
                if (bPlayer.getMapid() != cm.getMapId() || bPlayer.getChannel() != cm.getChannelNumber() ) {
                    jianceditu = false;
                }
}
if (jianceditu == false) {
cm.sendOk("#r��ȷ����Ķ��Ѷ�������ͬһ��ͼ.");
                        cm.dispose();
                        return;


}
if (next == false) {
cm.sendOk("#r�Բ���,Ϊ�˱�֤��İ�ȫ����ȷ�������������һ����ʦ.");
                        cm.dispose();
                        return;
}
                    var em = cm.getEventManager("yfgdsd");//����Ʒ����
                    if (em == null) {
                        cm.sendOk("�˸���������,����ϵ�ܹ��޸���.");
                        cm.dispose();
                        return;
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null) {
                            cm.sendOk("�Ѿ���������ս�˸��������źܿ�ͻ�����ģ�������û���ܴ������ģ���");
                            cm.dispose();
                            return;
                        }
                    }
                    
                           //cm.getC().getChannelServer().broadcastPacket(Packages.tools.MaplePacketCreator.serverNotice(0x09, cm.getC().getChannel(), "������ȥ�ˡ�" + " : " + "�����Ӷӳ�" + cm.getChar().getName() + "������һ�������ȥ�����������ˣ�����"));
                            em.startInstance(cm.getParty(), cm.getPlayer().getMap());
                       
                }
                cm.dispose();
                return;





} else if (selection == 1) {
cm.sendOk("#e#r�����㹻ǿ��������");
cm.dispose();
}



}//
}
}