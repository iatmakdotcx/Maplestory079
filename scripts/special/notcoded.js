/*
 ZEVMSð�յ�(079)��Ϸ�����
 ��������
 */

//˵������
var ˵������ = "   hi #b#h ##k ��Ǹ���ýű���δͶ��ʹ�ã��������Ϊ�б�Ҫ������ϵ����Ա��ӡ�";


var status = -1;
var sels;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.�Ի�����();
        return;
    }
    if (status == 0) {
        var �ı���Ϣ = "";

        cm.sendSimple("" + ˵������ + "\r\n" + �ı���Ϣ + "");
    } else {
        cm.�Ի�����();
    }
}