var status = 0;
var itemList = 
Array(     
			Array(2340000,100,1,1), //ף��
			Array(2000005,800,10,1), //����ҩˮ
			Array(1051255,200,1,1), //��ɫ�����--Ů��
			Array(1050209,250,1,1), //��ɫ�����--�п�
			Array(1302021,300,1,1), //��Ƥ��ͷ
			Array(1432009,300,1,1), //ľ����ǹ
			Array(1402044,50,1,1), //�Ϲϵ���
			Array(1402014,10,1,1), //�¶ȼ�
			Array(1372035,100,1,1), //��
			Array(1372036,100,1,1), //��
			Array(2044901,500,1,1), //��ǹ������60
Array(2044902,400,1,1), //��ǹ������10
Array(2044903,500,1,1), //��ǹ������70
Array(2044904,500,1,1), //��ǹ������30
Array(2044906,500,1,1), //��ǹ������65
Array(2044907,500,1,1), //��ǹ������15


			Array(1372037,100,1,1), //��
			Array(1372038,100,1,1), //��
			Array(1382045,70,1,1), //��
			Array(1382046,70,1,1), //��
			Array(1382047,70,1,1), //��
			Array(1382048,70,1,1), //��
			Array(1372032,100,1,1), //��̫��
			Array(1432010,120,1,1), //�¶�
			Array(1452017,400,1,1), //ħ�鹭
			Array(2070006,80,1,1), //����
			Array(3012001,100,1,1), //����
			Array(5150040,300,1,1), //�ʼҿ�
			Array(3010582,80,1,1), //����������
			Array(2022178,800,10,1), //����ҩ
			Array(4001126,600,200,1), //��Ҷ
			Array(2022118,800,2,1), //����Ա��ף��
			Array(5122000,800,3,1), //�ܱ���
			Array(1302013,400,1,1), //��ɫ����
			Array(1302061,300,1,1), //���ٱ���
			Array(1302049,80,1,1), //���߱���
			Array(2049100,100,1,1) //����
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
        if (cm.haveItem(2022468, 1)) {
				var str1 = "";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("�����ǿ��Գ�ȡ���ö���Ŷ��\r\n\r\n�������н�Ʒ����#r[��ʵ,����ƭ!]:" + str1);
			} else {
            var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk("�����ǿ��Գ�ȡ���ö���Ŷ��\r\n\r\n�������н�Ʒ����#r[��ʵ,����ƭ!]:" + str1);
				cm.dispose();
			}
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * +900);
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
                cm.gainItem(2022468, -1);
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("��ȷʵ��#b#t2022428##k������ǣ�����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("�������������ʲô��û���õ���������Ϊ�������͸���5��#v4001322#��Ϊ����.");
            cm.gainItem(2022468, -1);
            cm.gainItem(4001322, 5);
            cm.safeDispose();
        }
    }
}