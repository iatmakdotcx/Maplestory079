 
status = -1;
var itemList = Array(
		                  
		                        Array(2510060,10,1,1),//�ʺ���ӹ�ʽ
                                Array(2510061,10,1,1),//�ʺ����׹�ʽ
                                Array(2510062,10,1,1),//�ʺ�Ь�ӹ�ʽ
                                Array(2510063,10,1,1),//�ڿ㹫ʽ
                                Array(2510064,10,1,1),//�ֱ�ʽ
                                Array(2510065,10,1,1),//��ëЬ��ʽ
								Array(2510000,50,1,1),//����
		                        Array(2510001,50,1,1),//����
								Array(2510002,50,1,1),//�·�
								Array(2510003,100,1,1),//��
								Array(2510004,100,1,1),//��
								Array(2510005,100,1,1),//��
							    Array(2510006,100,1,1),//��
								Array(2510007,100,1,1),//�·�
								Array(2510008,100,1,1),//��
								Array(2510009,100,1,1),//��
								Array(2510010,100,1,1),//��
							    Array(2510011,100,1,1),//��
								Array(2510012,100,1,1),//��
							    Array(2510013,100,1,1),//��
								Array(2510014,100,1,1),//��
								Array(2510015,100,1,1),//��
								Array(2510016,100,1,1),//��
								Array(2510017,100,1,1),//��
								Array(2510018,100,1,1),//��
								Array(2510019,100,1,1),//��
								Array(2510020,100,1,1),//��
								Array(2510021,100,1,1),//��
								Array(2510022,100,1,1),//��
								Array(2511000,20,1,1),//����
                                Array(2511001,20,1,1),
                                Array(2511002,20,1,1),
                                Array(2511003,20,1,1)
								

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
			if(cm.haveItem(2028158,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo("���漴��ʽ���ӿɻ�����µ���֮һ:" + str1);
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
            item = cm.gainGachaponItem(itemId, quantity, "��ʽ�������", notice);
            if (item != -1) {
                cm.gainItem(2028158, -1);//�����Ʒ
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
















