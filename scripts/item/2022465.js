/*
 ZEVMSð�յ�(079)��Ϸ�����
 ��������
 */
var ���� = [
    /*************
     ����
     *************/
2044908,
2044815,
2044703,
2044603,
2044503,
2044403,
2044303,
2044203,
2044103,
2044003,
2043803,
2043703,
2043303,
2043203,
2043103,
2043003,


    //
];
//˵������
var ˵������ = "   hi #b#h ##k ��ѡ����Ҫ�ľ����\r\nѡ����ǲ��ܷ��ڵ�Ŷ��#r�����ҳ�������ѡ��#k�������Ѿ������ġ�";


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
        for (var i = 0; i < ����.length; i++) {
            �ı���Ϣ += "#b#L" + i + "#";
            �ı���Ϣ += "#i" + ����[i] + "##z" + ����[i] + "##l#k\r\n";
         
        }

        cm.sendSimple("" + ˵������ + "\r\n" + �ı���Ϣ + "");
    } else if (status == 1) {
        sels = selection;
        cm.gainItem(����[sels], 1);
	//	cm.haveItem(2022466)
        cm.gainItem(2022465, -1);
        cm.˵������("��ϲ���� " + cm.��ʾ��Ʒ(����[sels]) + "");
		cm.ȫ����ɫ����("[�����̵�] : ������� "+cm.getPlayer().getName()+" ����ѡ�سɾ�����ѡ��һ���͸�С����")
		//cm.�����¼("����һ���¼/������װ�һ���¼.txt",""+cm.ʱ��()+" : "+cm.getChar().getName()+" �һ��� "+cm.getItemName(װ��[sels])+" \r\n");
        cm.�Ի�����();
    } else {
        cm.˵������("#r��������: mode : " + mode + " �ű�ִ�� : " + status);
        cm.�Ի�����();
    }
}