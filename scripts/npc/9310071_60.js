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
            text += "#e#r��Ҫ��սδ��֮��boss����֤�����ʵ�� �����ռ�\r\n#v4001085#1�� ÿ�տ�����ս���Ρ�boss�����ǳ��ߡ�\r\n"
            text += "#L2#�����в��� ��Ҫ��ȡ֤��.[bossѪ���Ƚϵ�]#l\r\n"//3
            text += "#L5#������boss��ͼ.[Ѫ̫�ٵĲ�������ս]#l\r\n"//3
            text += "#L4#boss�����һ�ȫ�����Ե�װ.#l"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
            cm.warp(240070100);
            cm.dispose();
        } else if (selection == 2) {
	if (cm.haveItem(4001085,1) && cm.getBossLog('PlayQuest11') < 3) {
		cm.gainItem(4001085,-1);
		cm.gainItem(4310012,1);
		cm.setBossLog('PlayQuest11');
		cm.sendOk("�������");
		cm.dispose();
	} else 
		cm.sendOk("�����Ƿ����㹻����Ʒ��\r\n#r(ע:������ÿ��ֻ���������)#k");
		cm.dispose();
        } else if (selection == 4) {
            cm.openNpc(9310071,58);
        } else if (selection == 5) {
            cm.openNpc(9310071,61);
}
}
}