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
            text += "#e#r#v4001126#����������Ϸ ��Ҫռ�û�������Ʒ#v4001126#\r\n"
            text += "#L1##v3010832#������ս#v3010832#.#l\r\n"//3
            text += "\t\t#L2##v3010832#˫����ս#v3010832#.#l\r\n"//3
            text += "\t\t\t\t#L3##v3010832#�Ŷ���ս#v3010832#.#l"//3
            cm.sendSimple(text);
        } else if (selection == 0) {
            cm.warp(240050400);
            cm.dispose();
        } else if (selection == 1) {
            cm.openNpc(9900004,2324);
        } else if (selection == 2) {
            cm.openNpc(9900004,2325);
        } else if (selection == 3) {
            cm.openNpc(9900004,2326);
        } else if (selection == 5) {
            cm.openNpc(9310071,61);
}
}
}