var status = -1;

function action(mode, type, selection) {
           //cm.gainPlayerEnergy(10);
	   cm.gainItem(5062002, 1);
           cm.worldSpouseMessage(0x20,"[�ճ��] ��ϲ��� "+ cm.getChar().getName() +" ��ɨ���ػ����л�� 1 ���߼�����ħ�� ��");
	   cm.setEventCount("����");
	   cm.setPartyEventCount("����1");
	   cm.warp(101050000);
	   cm.dispose();
}