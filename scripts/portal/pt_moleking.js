var ��ս���� = 1;

function enter(pi) {
    if (pi.getPlayerCount(101073300) <= 0) { // krex. Map
        var krexMap = pi.getMap(101073300);
        krexMap.resetFully();
        pi.playPortalSE();
     
    } 
	if (pi.getBossLog("dishu") >= ��ս����) {
		pi.playerMessage(5, "һ���˺�һ��ֻ����ս" + ��ս���� + "�ε��������");
	
        return true;
    } else {
        if (pi.getMap(101073300).getSpeedRunStart() == 0 && pi.getPlayerCount(101073300) <= 0) {
            pi.playPortalSE();
            pi.warp(101073300, "sp");
            pi.setBossLog("dishu");
			//pi.getMap(101073300).��ʱ��(15, true, true);
	
            return true;
        } else {
            pi.playerMessage(5, "�Կ�BOSS����ս�Ѿ���ʼ�ˣ��㲻�ܽ��뵽���档");
            return false;
        }
    }
}