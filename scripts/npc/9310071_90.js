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
            text += "#e#r��Ҫ��ս��ʿ�Ÿ�������֤�����ʵ�� �����ռ�\r\n#v4001083#1�� ÿ�տ�����ս��Ρ�boss�����ǳ��ߡ�\r\n"
            text += "#L2#�����в��� ��Ҫ��ȡ֤��.[��ɺ����#v4001083#]#l\r\n"//3
            text += "#L5#������boss��ͼ.[�Ѷ�����]#l\r\n"//3
            text += "#L4#boss�����һ�ȫ������[���������].#l"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.warp(240070100);
            cm.dispose();
        } else if (selection == 2) {
	if (cm.haveItem(4001083,1) && cm.getBossLog('qst1') < 5) {
		cm.gainItem(4001083,-1);
                cm.removeAll(4001083);
		cm.gainItem(3990000,1);
		cm.setBossLog('qst1');
		cm.sendOk("�������");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ��������)#k");
		cm.dispose();
        } else if (selection == 4) {
            cm.openNpc(9310071,92);
        } else if (selection == 5) {
            cm.openNpc(9310071,91);
}
}
}