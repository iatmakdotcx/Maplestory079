var status = 0;
var itemList = 
Array(     
			Array(2043303,700,1,1), //�̽�
			Array(2043703,700,1,1), //����
			Array(2043803,700,1,1), //����
			Array(2044003,700,1,1), //˫�ֽ�
			Array(2044303,700,1,1), //ǹ 
			Array(2044403,700,1,1), //ì
			Array(2044503,700,1,1), //��
			Array(2044603,700,1,1), //��
			Array(2044703,700,1,1), //ȭ��
			Array(2044815,700,1,1), //ָ��
			Array(2044908,700,1,1), //��ǹ
			Array(2043003,700,1,1), //���ֽ�
			Array(2043103,700,1,1), //���ָ� 
			Array(2043203,700,1,1), //���ֶ���
			Array(2044103,700,1,1), //˫�ָ�
			Array(2044203,700,1,1), //˫�ֶ���
			Array(2044019,700,1,1), //˫��ħ��
			Array(2040303,700,1,1), //�������� 
			Array(2040506,700,1,1), //ȫ������
			Array(2040710,700,1,1), //Ь����Ծ
			Array(2040007,700,1,1), //ͷ������ 
			Array(2040006,700,1,1), //ͷ������   
			Array(2040403,700,1,1), //���·���  
			Array(2040507,700,1,1), //ȫ�����
			Array(2040603,700,1,1), //��ȹ����
			Array(2040709,700,1,1), //Ь������
			Array(2040806,700,1,1), //�������� 
			Array(2040711,700,1,1), //Ь���ٶ�
			Array(2040903,700,1,1), //���Ʒ���
			Array(2041024,700,1,1), //����ħ��
			Array(2041025,700,1,1), //�������  
			Array(2040807,100,1,1) //���׹���
			//-------��һ������ƷID���ڶ����ǳ齱���ʣ��������ǳ齱����,���ĸ����Ƿ���ʾ�齱�㲥(����1�ͻ�㲥)
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
            cm.sendOk("���ӳ齱��#v2049100#�������/#v2340000#ף������/#v2000005#����ҩˮx50.�����ȡ��һ.");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(2022465, 1)) {
				var str1 = "";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("�����ǿ��Գ�ȡ���ö���Ŷ��.\r\n\r\n�������н�Ʒ����#r[��ʵ,����ƭ!]:" + str1);
			} else {
            var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("�����ǿ��Գ�ȡ���ö���Ŷ��\r\n\r\n�������н�Ʒ����#r[��ʵ,����ƭ!]:" + str1);
				cm.dispose();
			}
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * +700);
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
            item = cm.gainGachaponItem(itemId, quantity, "���Ӹ����齱", notice);
            if (item != -1) {
                cm.gainItem(2022465, -1);
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("��ȷʵ��#b#t2022428##k������ǣ�����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("�������������ʲô��û���õ���������Ϊ�������͸���5��#v4001322#��Ϊ����.");
            cm.gainItem(2022465, -1);
            cm.gainItem(4001322, 5);
            cm.safeDispose();
        }
    }
}