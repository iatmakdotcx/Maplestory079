var status = 0;
var itemList = 
Array(     
Array(3992013, 100, 1, 1), //���������֮��
Array(3992013, 50, 1, 1), //���������֮��
Array(3992013, 10, 1, 1), //���������֮��
Array(3992014, 50, 1, 1), //�����ɹ���ǹ
Array(3992014, 30, 1, 1), //�����ɹ���ǹ
Array(3992015, 20, 1, 1), //������Σ��֮��
Array(3992015, 5, 1, 1), //������Σ��֮��
Array(4011000, 50, 2, 1),//?????������ħ��֮��
Array(4011001, 50, 2, 1),//?????������׷����

Array(4011002, 50, 2, 1),//?????�����ɷ�����
Array(4011003, 50, 2, 1),//?????����������ǹ
Array(4011004, 50, 2, 1),//?????�����ɴ���ʿ�｣
Array(4011005, 50, 2, 1),//?????�����ɰ��¿��и�
Array(4011006, 50, 2, 1),//?????����������֮��


Array(4031504, 100, 1, 1),//?????��
Array(4031504, 80, 1, 1),//?????��
Array(4031504, 30, 1, 1),//?????��
Array(4031505, 20, 1, 1),//?????��
Array(4031505, 90, 1, 1),//?????��
Array(4031505, 30, 1, 1),//?????��
Array(4031506, 50, 1, 1),//?????��
Array(4031506, 10, 1, 1),//?????��
Array(3992025, 100, 100, 1),//?????ǿ��
Array(3992025, 50, 200, 1),//?????ǿ��
Array(2049100, 50, 5, 1),//?????����
Array(2022529, 50, 1, 1),//?????˫��
Array(2450000, 20, 1, 1),//?????˫��
Array(2070013, 20, 1, 1),//?????�ƽ��
Array(4005004, 50, 5, 1),//?????�ڰ�
Array(4000463, 20, 3, 1),//?????����
Array(4000463, 10, 5, 1),//?????����
Array(4251202, 30, 1, 1),//?????���
Array(4251202, 20, 3, 1),//?????���
Array(4011008, 5, 1, 1),//?????�
Array(4310012, 70, 1, 1),//�س�
Array(4310012, 20, 2, 1)//�س�
);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("���ֹ����ָǿ�����ϳ齱");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(4170001, 5)) {
            cm.sendYesNo("���ֹ����ָǿ�����ϳ齱");
        } else {
            cm.sendOk("ȷ���㱳������5��#b#v4170001##k��?");
            cm.safeDispose();
        }
    } else if (status == 1) {
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
            item = cm.gainGachaponItem(itemId, quantity, "���ֹ����ָǿ�����ϳ齱", notice);
            if (item != -1) {
                cm.gainItem(4170001, -5);
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("��ȷʵ��#b#t4170001##k������ǣ�����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            cm.safeDispose();

        }
    }
}