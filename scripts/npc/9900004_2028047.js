 
status = -1;
var itemList = Array(
		                  
		                        Array(1012474,5,1,1),//����
		                        Array(1022225,5,1,1),//����2022766
								Array(2022766,5,1,1),
								Array(4310003,10,1,1),
								Array(2041136,60,1,1),//��
								Array(2041139,60,1,1),//��
								Array(2041142,60,1,1),//��
							    Array(2041145,60,1,1),//��
								
								Array(2041232,60,1,1),//��
								Array(2041233,60,1,1),//��
								Array(2041234,60,1,1),//��
								Array(2041235,60,1,1),//��
								
								
								Array(1402016,100,1,1),//��������
		                        Array(1432030,100,1,1),//��������
								Array(1472053,100,1,1),//��������
								Array(1382035,100,1,1),//��������
		                        Array(1452019,5,1,1),//��������
								Array(1462015,5,1,1),//��������
								Array(1492012,20,1,1),//��������
								Array(1332052,20,1,1),//��������
								Array(1442044,10,1,1),//��������
		                        Array(1482012,10,1,1),//��������
								
								
								
								Array(4002000,90,1,1),//��Ʊ
								Array(4002001,90,1,1),//��Ʊ
								Array(4002002,90,1,1),//��Ʊ
								Array(4002003,90,1,1),//��Ʊ
								
								Array(5222000,60,1,1),//1000
								Array(5222004,20,1,1),//2000
								Array(5222005,5,1,1),//3000
								
								Array(2040915,40,1,1),//�ܾ�
								Array(2040914,40,1,1),//�ܾ�
								Array(2040919,40,1,1),//�ܾ�
							    Array(2040920,40,1,1),//�ܾ�
								Array(1092049,55,1,1),//��
								Array(1092109,55,1,1),//��
								Array(1092110,10,1,1),//��
								Array(1092111,5,1,1),//��
								
								Array(5150038,90,1,1),//��
								Array(5570000,80,1,1),//����
								Array(5520000,100,1,1),//����
								
		                        Array(4011008,15,1,1),//�
								Array(4011007,15,1,1),//��ʯ
								Array(4310012,100,1,1),//�س�
								
								Array(2022530,35,1,1),//˫��
								Array(2450000,10,1,1),//˫��
								Array(4250602,100,1,1),//�ƽ�
								//Array(4310002,5,1,1),//7
		                        Array(4000463,100,1,1)//����

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
			if(cm.haveItem(2028047,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("�򿪵���BOSS���ӿɻ�����µ���֮һ:" + str1);
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
            item = cm.gainGachaponItem(itemId, quantity, "��ħ��ʬ����", notice);
            if (item != -1) {
                cm.gainItem(2028047, -1);//�����Ʒ
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            cm.safeDispose();
        } else {
            cm.safeDispose();
        }
    }
}
















