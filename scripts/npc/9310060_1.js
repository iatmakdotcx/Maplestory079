
var sj;
var itemSet = Array(2044908, 2044815, 2044703, 2044603, 2044503, 2044403, 2044303, 2044203, 2044103, 2044003,
    2043303, 2043203, 2043103, 2043003, 2041025, 2041024, 2040903, 2040806, 2040711, 2040710,
    2040709, 2040603, 2040507, 2040506, 2040303, 2040007, 2040006, 2040826, 2044908, 2044815,
    2044703, 2044603, 2044503, 2044403, 2044303, 2044203, 2044103, 2044003, 2043303, 2043203,
    2043103, 2043003, 2041025, 2041024, 2040903, 2040806, 2040711, 2040710, 2040709, 2040603,
    2040507, 2040506, 2040303, 2040007, 2040006, 2040826);
var itemSet1 = Array(2044908, 2044815, 2044703, 2044603, 2044503, 2044403, 2044303, 2044203, 2044103, 2044003,
    2043303, 2043203, 2043103, 2043003, 2041025, 2041024, 2040903, 2040806, 2040711, 2040710,
    2040709, 2040603, 2040507, 2040506, 2040303, 2040007, 2040006, 2040826, 2044908, 2044815,
    2044703, 2044603, 2044503, 2044403, 2044303, 2044203, 2044103, 2044003, 2043303, 2043203,
    2043103, 2043003, 2041025, 2041024, 2040903, 2040806, 2040711, 2040710, 2040709, 2040603,
    2040507, 2040506, 2040303, 2040007, 2040006, 2040826);
var sel = Math.floor(Math.random() * itemSet.length);
var sel1 = Math.floor(Math.random() * itemSet1.length);
var status = 0;
var �ܻ�;
var ����
function start() {
    �ܻ� = cm.getBossLog("ÿ���ܻ�_ʮ��");
    sj = �ܻ�
    ���� = sj + 1
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;


        if (status == 0) {
            var textz = "                 ÿ �� �� �� - �� " + ���� + " ��\r\n\r\n";
            if (�ܻ� == 0) {

                textz += " - ����������ߣ�#v4000019# x 30\r\n\r\n";

                textz += " - ����������ߣ�#v4000000# x 30\r\n\r\n";

                textz += " - ����������ߣ�#v4000016# x 30\r\n\r\n";

                textz += " - ������ң�20W\r\n\r\n";
				
				cm.sendYesNo(textz);
            } else if (�ܻ� == 1) {

                textz += " - ����������ߣ�#v4000040# x 1\r\n\r\n";

                textz += " - ������ң�30W\r\n\r\n";
               
				
				cm.sendYesNo(textz);

            } else if (�ܻ� == 2) {

                textz += " - ����������ߣ�#v4000176# x 1\r\n\r\n";

                textz += " - ������ȯ��30\r\n\r\n";

				
				cm.sendYesNo(textz);
            } else if (�ܻ� == 3) {

                textz += " - ����������ߣ�#v4000009# x 1\r\n\r\n";

                textz += " - ������ȯ��50\r\n\r\n";

				
				cm.sendYesNo(textz);
            } else if (�ܻ� == 4) {

                textz += " - ����������ߣ�#v4001111# x 1\r\n\r\n";

                textz += " - ������ң�50W\r\n\r\n";

				
				cm.sendYesNo(textz);
            } else if (�ܻ� == 5) {

                textz += " - ����������ߣ�#v4000083# x 30\r\n\r\n";
				
				textz += " - �������ߣ�#v1122017# һ��Ȩ\r\n\r\n";

                textz += " - ������ң�100W\r\n\r\n";

				
				cm.sendYesNo(textz);
            } else {
                cm.sendOk("�����ܻ���������ɣ�������������");
                cm.dispose();
            }

        } else if (status == 1) {
            if (sj == 0) {
                if (cm.haveItem(4000019, 30) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
                } else if (cm.haveItem(4000000, 30) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
                } else if (cm.haveItem(4000016, 30) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
                } else {
                    cm.gainItem(4000019, -30);
                    cm.gainItem(4000000, -30);
                    cm.gainItem(4000016, -30);
                    cm.setBossLog("ÿ���ܻ�_ʮ��");
                    cm.gainMeso(200000);
                    cm.sendOk("������ɡ�");
                    cm.ȫ������("��ϲ���["+cm.getName()+"]�����ÿ�������1�׶�");
					cm.dispose();
                }

            } else if (sj == 1) {//2��
                if (cm.haveItem(4000040, 1) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
                } else {
                    cm.gainItem(4000040, -1);
                    cm.setBossLog("ÿ���ܻ�_ʮ��");
                    cm.gainMeso(300000);
                    cm.sendOk("������ɡ�");
                     cm.ȫ������("��ϲ���["+cm.getName()+"]�����ÿ�������2�׶�");
					cm.dispose();
                }

            } else if (sj == 2) {//3��
                if (cm.haveItem(4000176, 1) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
                } else {
                    cm.gainItem(4000176, -1);
                    cm.setBossLog("ÿ���ܻ�_ʮ��");
                    cm.gainNX(30);
                    cm.sendOk("������ɡ�");
                    cm.ȫ������("��ϲ���["+cm.getName()+"]�����ÿ�������3�׶�");
				    cm.dispose();
                }

            } else if (sj == 3) {//4��
                if (cm.haveItem(4000009, 1) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
                } else {
                    cm.gainItem(4000009, -1);
                    cm.setBossLog("ÿ���ܻ�_ʮ��");
                    cm.gainNX(50);
                    cm.sendOk("������ɡ�");
                     cm.ȫ������("��ϲ���["+cm.getName()+"]�����ÿ�������4�׶�");
					cm.dispose();
                }

            } else if (sj == 4) {//5��
                if (cm.haveItem(4001111, 1) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
                } else {
                    cm.gainItem(4001111, -1);
                    cm.setBossLog("ÿ���ܻ�_ʮ��");
                    cm.gainItem(4032246,2);
                    cm.sendOk("������ɡ�");
                     cm.ȫ������("��ϲ���["+cm.getName()+"]�����ÿ�������5�׶�");
					cm.dispose();
                }

            } else if (sj == 5) {//6��
                if (cm.haveItem(4000083, 30) == false) {
                    cm.sendOk("���������������㡣");
                    cm.dispose();
                } else {
                    cm.gainItem(4000083, -30);
                    cm.setBossLog("ÿ���ܻ�_ʮ��");
                    cm.gainMeso(1000000);
                    cm.������װ��(1122017, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0, 0, 0, 0, 0, 0, 24); 
                    cm.sendOk("������ɡ�");
                     cm.ȫ������("��ϲ���["+cm.getName()+"]�����ÿ�������6�׶�");
					cm.dispose();
                }

            

            }
        }
    }
}