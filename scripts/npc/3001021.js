/*
 ���� 
 */


var status = 0;


function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status >= 1 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        if (cm.getPlayer().getMapId() == 401060100 || cm.getPlayer().getMapId() == 401060200 || cm.getPlayer().getMapId() == 401060300) { //����
            cm.sendSimple("#e<Boss - ����>#n\r\n������ȷ����������,�������ȥ?\r\n#L2##b�ǵ�,���ھͳ�ȥ#l");
        }
    } else if (status == 1) {
        if (selection == 2) {
            cm.warp(401060000, 0);
        }
        cm.dispose();
    } else if (mode == 0) {
        cm.dispose();
    }
}
