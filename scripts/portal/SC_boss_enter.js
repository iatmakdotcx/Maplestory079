var ��ս���� = 1;

function enter(pi) {
    //pi.openNpc(2081005);
	
	if (pi.getPlayerCount(231050000) <= 0) { // krex. Map
        var krexMap = pi.getMap(231050000);
        krexMap.resetFully();
        pi.playPortalSE();
     
    } 
	if (pi.getBossLoga("�������") >= ��ս����) {
		pi.playerMessage(5, "һ���˺�һ��ֻ����ս " + ��ս���� + " �����������");
		return true;
	}else if(pi.getPlayerCount(211061100) > 0){
		pi.playerMessage(5, "�Կ�BOSS����ս�Ѿ���ʼ�ˣ��㲻�ܽ��뵽���档");
		return false;
	}
    if (pi.haveItem(4031582)) {
        pi.gainItem(4031582, -1);
        pi.warp(231050000);
		pi.setBossLoga("�������");
		pi.getMap(231050000).��ʱ��(30, true, true);
    } else {
       
        pi.mapMessage(6, "��û�й������֤!")
    }
}




