/* ==================
 �ű�����: NPC	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
		map = cm.getPlayer().getMap();
		if ((cm.haveItem(4031059))) {
			cm.sendNext("��ò���Ѿ�����#t4031059#����");
		cm.dispose();
		
		}
		}
	if (cm.getMapId() == 105070001) { //սʿ
	if ((!cm.getPlayerCount(108010301) <= 0)) {
		cm.sendNext("��������");
		cm.dispose();
      } else if ((cm.getJob()==110 || cm.getJob()==120 || cm.getJob()==130)) {
		cm.getMap(108010301).resetFully();
		cm.removeAll(4031059);
        cm.warp(108010301, 0);
		cm.getPlayer().startMapTimeLimitTask(1200, map);
		cm.dispose();
		}else{
		cm.sendNext("���Ҵ����˰�!");
		cm.dispose();
		}
} else 	if (cm.getMapId() == 100040106) { //��ʦ
	if ((!cm.getPlayerCount(108010201) <= 0)) {
		cm.sendNext("��������");
		cm.dispose();
      } else if ((cm.getJob()==210 || cm.getJob()==220 || cm.getJob()==230)) {
		cm.getMap(108010201).resetFully();
		cm.removeAll(4031059);
        cm.warp(108010201, 0);
		cm.getPlayer().startMapTimeLimitTask(1200, map);
		cm.dispose();
		}else{
		cm.sendNext("���Ҵ����˰�!");
		cm.dispose();
		}
} else 	if (cm.getMapId() == 105040305) { //����
	if ((!cm.getPlayerCount(108010101) <= 0)) {
		cm.sendNext("��������");
		cm.dispose();
      } else if ((cm.getJob()==310 || cm.getJob()==320)) {
		cm.getMap(108010101).resetFully();
		cm.removeAll(4031059);
        cm.warp(108010101, 0);
		cm.getPlayer().startMapTimeLimitTask(1200, map);
		cm.dispose();
		}else{
		cm.sendNext("���Ҵ����˰�!");
		cm.dispose();
		}
} else 	if (cm.getMapId() == 107000402) { //����
    if ((!cm.getPlayerCount(108010401) <= 0)) {
		cm.sendNext("��������");
		cm.dispose();
      } else if ((cm.getJob()==410 || cm.getJob()==420)) {
		cm.getMap(108010401).resetFully();
		cm.removeAll(4031059);
        cm.warp(108010401, 0);
		cm.getPlayer().startMapTimeLimitTask(1200, map);
		cm.dispose();
		}else{
		cm.sendNext("���Ҵ����˰�!");
		cm.dispose();
		}
} else 	if (cm.getMapId() == 105070200) { //����
	if ((!cm.getPlayerCount(108010501) <= 0)) {
		cm.sendNext("��������");
		cm.dispose();
      } else if ((cm.getJob()==510 || cm.getJob()==520)) {
		cm.getMap(108010501).resetFully();
		cm.removeAll(4031059);
        cm.warp(108010501, 0);
		cm.getPlayer().startMapTimeLimitTask(1200, map);
		cm.dispose();
		}else{
		cm.sendNext("���Ҵ����˰�!");
		cm.dispose();
		}}}}