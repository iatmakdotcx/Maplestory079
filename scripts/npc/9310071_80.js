function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#e#rÿ�ո���boss��Ҫ�ռ��������߲����ٻ�\r\nÿ��ÿ�˿���ȡһ������ �������˲��Ͽ��ٻ�\r\n"
            text += "#L2#��Ҫ��ȡÿ���ٻ����ϡ���Ҫ120����#l\r\n"//3
            text += "#L5#������boss����.[�������]#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.warp(240070100);
            cm.dispose();
        } else if (selection == 2) {
	if (cm.getLevel()>= 120 && cm.getBossLog('PlayQuest110') < 1) {
		cm.gainItem(4000493,1,1);
		cm.setBossLog('PlayQuest110');
		cm.sendOk("�������");
		cm.dispose();
	} else 
		cm.sendOk("#r(ע:������ÿ��ֻ����ȡһ��)#k");
		cm.dispose();
        } else if (selection == 4) {
            cm.openNpc(9310071,58);
        } else if (selection == 5) {
            cm.openNpc(9310071,81);
}
}
}