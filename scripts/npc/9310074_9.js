
status = -1;
var itemList = Array(
			Array(1432182,200, 1, 1), //��ɫǹ
			Array(1382226,300, 1, 1), //��ɫ����  
			Array(1452220,100, 1, 1), //��ɫ��                           
			Array(1462208,100, 1, 1), //��ɫ֮��
			Array(1402214,300, 1, 1), //��ɫ˫�ֽ�
			Array(1332242,200, 1, 1), //��ɫ�и���
			Array(1472230,50, 1, 1), //��ɫȭ�� 
			Array(1482183,300, 1, 1), //��ɫȭ��  
			Array(1492194,50, 1, 1), //��ɫ��ǹ 
			Array(1302158,200, 1, 1), //��ϡ��ħ�� 
			//Array(1012135,200, 1, 1), //�쵶
			//Array(10920048,50, 1, 1), //������ 
			Array(1302070,200, 1, 1), //��¡��                           
			//Array(01002995,2000, 1, 1), //�ʼҺ���ñ 
			//Array(010522009,2000, 1, 1), //�ʼҺ����Ʒ�
			Array(1072360,300, 1, 1), //������ɳ̲Ь
			Array(1302156,300, 1, 1), //�ڵ�     
			Array(1402069,200, 1, 1), //��ɫ�¶ȼ�  
			//Array(13820038,2000, 1, 1), //���Ǻ�« 
			Array(1402067,300, 1, 1), //�غ�
			Array(1012513,100, 1, 1), //�̵�     
			Array(1402051,100, 1, 1), //�޴�����
			Array(2640011,500, 1, 1), //RED��
			Array(2640010,500, 1, 1), //��������˹��������װ
			Array(2615001,500, 1, 1), //��������˹������װ
			//Array(1012171   ,200, 1, 1),//�ֲ�����200G
			Array(1032219      ,50, 1, 1),//����֮�񻰶��� - (������)
			//Array(1052507,50, 1, 1), //��������˹ħ��ʦ��װ
			//Array(1052890,50, 1, 1), //��������˹������װ
			Array(1132215 ,50, 1, 1), //ð�յ�ǿ����־��ɫ����
			Array(1102481 ,200, 1, 1),//��������
		    Array(1102482 ,200, 1, 1),//��������
		    Array(1102483 ,200, 1, 1),//��������
		    Array(1102484 ,200, 1, 1),//��������
		    Array(1102485 ,200, 1, 1),//��������
			
		    Array(1072743  ,200, 1, 1),//����Ь
		    Array(1072744  ,200, 1, 1),//����Ь
		    Array(1072745  ,200, 1, 1),//����Ь
		    Array(1072746  ,200, 1, 1),//����Ь
		    Array(1072747  ,200, 1, 1),//����Ь
			
		    Array(1132174   ,200, 1, 1),//��������
		    Array(1132175   ,200, 1, 1),//��������
		    Array(1132176   ,200, 1, 1),//��������
		    Array(1132177   ,200, 1, 1),//��������
		    Array(1132178   ,200, 1, 1),//��������
			
			//Array(14020037,2000, 1, 1), //������
Array(1072769, 500, 1, 1)

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
			if (cm.haveItem(4310088)){
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("����#b1��#v4310088#��ȡ������Ʒ!\r\n#k��ǰӵ��:#c4310088# ���� ������ȫ����Ʒ:" + str1);
			} else {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("����#b1��#v4310088#�ɳ�ȡ������Ʒ.\r\n#k��ǰӵ��:#c4310088# ���� ������ȫ����Ʒ:" + str1);
				cm.dispose();
			}
		} else if (status == 1){	
        var chance = Math.floor(Math.random() * 500);
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
            item = cm.gainGachaponItem(itemId, quantity, "RED��", notice);
            if (item != -1) {
				cm.gainItem(4310088, -1);
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("�������������ʲô��û���õ���\r\n(����˰�ο����RED�ҡ�)");
            cm.gainItem(4310088, -1);
            cm.gainItem(4310088, 1);
            cm.safeDispose();
        }
    }
}
