/*
 ZEVMSð�յ�(079)��Ϸ�����
 ��������
 */
var װ�� = [
    /*************
     ����
     *************/
1492245,
1482232,
1472275,
1462252,
1452266,
1442285,
1432227,
1422197,
1412189,
1402268,
1382274,
1332289,
1372237


    //
];
//˵������
var ˵������ = "   hi #b#h ##k ��ѡ����Ҫ�Ĵ���������\r\n";


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
        for (var i = 0; i < װ��.length; i++) {
            �ı���Ϣ += "#b#L" + i + "#";
            �ı���Ϣ += "#i" + װ��[i] + "##z" + װ��[i] + "##l#k\r\n";
         
        }

        cm.sendSimple("" + ˵������ + "\r\n" + �ı���Ϣ + "");
    } else if (status == 1) {
        sels = selection;
        cm.gainItem(װ��[sels], 1);
	//	cm.haveItem(2022466)
        cm.gainItem(2022336, -1);
        cm.˵������("��ϲ���� " + cm.��ʾ��Ʒ(װ��[sels]) + "");
		cm.ȫ����ɫ����("[������ѡ] : ����������� "+cm.getPlayer().getName()+" �Ӵ�����ѡ��ѡ����һ���ռ�����")
		//cm.�����¼("����һ���¼/������װ�һ���¼.txt",""+cm.ʱ��()+" : "+cm.getChar().getName()+" �һ��� "+cm.getItemName(װ��[sels])+" \r\n");
        cm.�Ի�����();
    } else {
        cm.˵������("#r��������: mode : " + mode + " �ű�ִ�� : " + status);
        cm.�Ի�����();
    }
}