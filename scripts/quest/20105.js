/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	if (qm.getPlayer().getLevel() >= 10) {
	    qm.getPlayer().gainSP((qm.getPlayer().getLevel()-10)*3);//תְ�����ܵ�
	    }
    qm.forceStartQuest();
	    qm.gainItem(1482014, 1);
	    qm.gainItem(1142066, 1);
		//qm.resetStats(4, 4, 4, 4);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(4, 4);
	    qm.changeJob(1500);
    qm.forceCompleteQuest();
    qm.dispose();
}

function end(mode, type, selection) {
	if (qm.getPlayer().getLevel() >= 10) {
	    qm.getPlayer().gainSP((qm.getPlayer().getLevel()-10)*3);//תְ�����ܵ�
	    }
    qm.forceStartQuest();
	    qm.gainItem(1482014, 1);
	    qm.gainItem(1142066, 1);
		//qm.resetStats(4, 4, 4, 4);
	    qm.expandInventory(1, 4);
	    qm.expandInventory(4, 4);
	    qm.changeJob(1500);
    qm.forceCompleteQuest();
    qm.dispose();
}