//cherry_MS
importPackage(net.sf.cherry.client);

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
		if(cm.getLevel() < 30 || cm.getBossLog("wugong") == 10){
        cm.sendOk("��ս��������Ҫ������\r\n��͵ȼ� ��30��\t\t��ĵȼ���#r"+cm.getLevel()+"��#k\r\nÿ����������12��\t���Ѿ����룺#r"+cm.getBossLog("wugong")+"#k�� !");
		cm.dispose();
		return;
		}else{
		cm.warp(701010321, 0);
		cm.setBossLog('wugong');
		cm.sendNext("ÿ����������12�Σ�\t���Ѿ����룺#r"+cm.getBossLog("wugong")+"��#k,��������ִ����������ף�������������");
		cm.dispose();
			}
	}
}}	
