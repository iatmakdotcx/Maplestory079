/* ==================
�ű�����: NPC	    
�ű����ߣ��þ�    
��ϵ��ʽ��121418194
=====================
 */
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		if(cm.getPlayer().getParty() == null || !cm.isLeader()){
			cm.sendOk("����Ӻ��öӳ������ң�");
			cm.dispose();
			return;
		}
		if(!cm.getPlayerCount(674030200) <= 0){
			cm.sendOk("���������ˣ�");
			cm.dispose();
			return;
		}
		cm.sendNext("��ã�������ج���˻����޲����ǹ��﹫԰��Ŀǰ���Խ׶���ѿ��ţ�\r\n������һ��������﹫԰֮�޾���ս��");
	}else if (status == 1){
		var em = cm.getEventManager("MobBattle");
			cm.getMap(674030200).resetFully();
			cm.warpParty(674030200);
		if (cm.getPlayer().getMapId()==674030200){
			em.startInstance(cm.getParty(), cm.getPlayer().getMap());
			cm.playerMessage(5, "[���﹫԰] ��ǰΪ��1�ֹ���");
		}else{
			cm.sendOk("�����ļ���������ϵ����Ա�����");
		}
        cm.dispose();
    }
}


