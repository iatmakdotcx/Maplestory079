 
status = -1;
var itemList = Array(
Array(1003797, 40, 1, 1), //�߹�սʿͷ��
Array(1003798, 40, 1, 1), //�߹�����ά��ñ
Array(1003799, 40, 1, 1), //�߹���������ñ
Array(1003800, 40, 1, 1),//?????�߹�̿���ñ
Array(1003801, 40, 1, 1),//?????�߹�������ñ

Array(1062168, 40, 1, 1),//?????ħ��ʦ�̿Ͷ̿�
Array(1062169, 40, 1, 1),//?????ħ��ʦ�����߶̿�
Array(1062167, 40, 1, 1),//?????ħ��ʦ�����̿�
Array(1062166, 40, 1, 1),//?????ħ��ʦ��ά��̿�10��
Array(1062165, 40, 1, 1),//?????ħ��ʦսʿ�̿�

Array(1042258, 40, 1, 1),//?????ӥ������������
Array(1042257, 40, 1, 1),//?????ӥ�۴̿ͳ���
Array(1042256, 40, 1, 1),//?????ӥ����������
Array(1042254, 40, 1, 1),//?????ӥ��սʿ����
Array(1042255, 40, 1, 1),//?????ӥ�۵�ά�泤��

Array(4031504, 100, 1, 1),//?????��
Array(4031504, 100, 1, 1),//?????��
Array(4031504, 100, 1, 1),//?????��
Array(4031504, 100, 1, 1),//?????��
Array(4031505, 90, 1, 1),//?????��
Array(4031505, 90, 1, 1),//?????��
Array(4031505, 90, 1, 1),//?????��
Array(4031506, 90, 1, 1),//?????��
Array(4031506, 60, 1, 1),//?????��
Array(4031506, 60, 1, 1),//?????��
Array(3992025, 100, 100, 1),//?????ǿ��
Array(3992025, 50, 300, 1),//?????ǿ��
Array(3992025, 40, 500, 1),//?????ǿ��
Array(2049100, 100, 5, 1),//?????����
Array(2049100, 50, 10, 1),//?????����
Array(2022529, 90, 1, 1),//?????˫��
Array(2450000, 90, 1, 1),//?????˫��
Array(2070013, 80, 1, 1),//?????�ƽ��
Array(4005004, 100, 5, 1),//?????�ڰ�
Array(4005004, 50, 10, 1),//?????�ڰ�
Array(4000463, 90, 1, 1),//?????����
Array(4000463, 80, 3, 1),//?????����
Array(4000463, 60, 5, 1),//?????����
Array(4000463, 40, 10, 1),//?????����
Array(4251202, 100, 1, 1),//?????���
Array(4251202, 100, 3, 1),//?????���
Array(4251202, 100, 5, 1),//?????���
Array(4011008, 30, 1, 1),//?????�
Array(4011008, 5, 2, 1),//?????�
Array(4310012, 100, 1, 1),//�س�
Array(4310012, 60, 2, 1),//�س�
Array(4310012, 50, 3, 1)//�س�


);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("�ټ��ð��͡�");
            cm.dispose();
        }
        status--;
    }
		if (status == 0) {
			if(cm.haveItem(4031470,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("����1��#v4031470#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c4031470# ���� ������ȫ����Ʒ:" + str1);
			} else {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("����1��#v4031470#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c4031470# ���� ������ȫ����Ʒ:" + str1);
				cm.dispose();
			}
		} else if (status == 1){	
        var chance = Math.floor(Math.random() * 100);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "FFN", notice);
            if (item != -1) {
				//cm.setmoneyb(-5);
cm.gainItem(4031470, -1);//�����Ʒ
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("��ôû��ס�򰡣����˻��㱦ʯ�ɡ�");
           // cm.setmoneyb(-5);
//cm.gainItem(4170011, 5);//�����Ʒ
			//cm.gainNX(1000);	//�Ӽ���ȯ
            cm.safeDispose();
        }
    }
}
















