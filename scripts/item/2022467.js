/*
 ZEVMSð�յ�(079)��Ϸ�����
 ��������
 */
var װ�� = [
    /*************
     ����
     *************/
1332242,
1492194,
1482183,
1472230,
1462208,
1452220,
1432182,
1422156,
1402214,
1382226,
1442290
    //
];
//˵������
var ˵������ = "   hi #b#h ##k ��ѡ����Ҫ�ĺ�ɫ������\r\n[#r����װ��ͼ�������Կ�����#k]��\r\nѡ����ǲ��ܷ��ڵ�Ŷ��#r�����ҳ�������ѡ��#k�������Ѿ������ġ�";


var sels;
var status = -1;

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
        for (var i = 0; i < װ��.length; i++) {
            �ı���Ϣ += "#b#L" + i + "#";
            �ı���Ϣ += "#i" + װ��[i] + "##z" + װ��[i] + "##l#k\r\n";
         
        }

        cm.sendSimple("" + ˵������ + "\r\n" + �ı���Ϣ + "");
    } else if (status == 1) {
        sels = selection;
        cm.gainItem(װ��[sels], 1);
        cm.gainItem(2022467, -1);
        cm.˵������("��ϲ���� " + cm.��ʾ��Ʒ(װ��[sels]) + "");
		cm.ȫ����ɫ����("[������ѡ] : ������� "+cm.getPlayer().getName()+" �Ӻ�����ѡ��ѡ��һ����ɫ����")
		//cm.�����¼("����һ���¼/������װ�һ���¼.txt",""+cm.ʱ��()+" : "+cm.getChar().getName()+" �һ��� "+cm.getItemName(װ��[sels])+" \r\n");
        cm.�Ի�����();
    } else {
        cm.˵������("#r��������: mode : " + mode + " �ű�ִ�� : " + status);
        cm.�Ի�����();
    }
}