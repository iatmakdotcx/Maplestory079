var status = 0;
var itemList =   
Array(   		
                        Array(1102382,150,1,1), //���桤��ҮĪ������
                        Array(1102383,50,1,1), //���桤���������
                Array(1302138,30,1,1), //����֮��
                Array(1302137,30,1,1), //����֮��
                Array(1302136,30,1,1), //����֮��
                Array(1302140,30,1,1), //����֮��
                Array(1302173,30,1,1), //����֮��
                Array(1092048,20,1,1), //С����
                Array(1402300,30,1,1), //����֮��
                Array(1302139,2,1,1), //����֮��
                Array(1302156,2,1,1), //����֮��
                Array(1302158,2,1,1), //����֮��9
                Array(1402301,2,1,1), //С����
                Array(1402302,2,1,1), //С����
                Array(1402311,5,1,1), //����֮��
                Array(1402329,30,1,1), //����֮��
                Array(1402330,5,1,1), //����֮��
                Array(1402331,5,1,1), //����֮��
                Array(1432154,30,1,1), //����֮��
                Array(1432153,30,1,1), //����֮��
                Array(1432037,50,1,1), //��Ҷ
                Array(1432060,30,1,1), //����֮��
                Array(1442100,50,1,1), //������
                Array(1442112,50,1,1), //ì
                Array(1452302,5,1,1), //ì
	                Array(1432045,100,1,1),//
	                Array(1372008,100,1,1),//
	                Array(1302022,100,1,1),//
	                Array(1322102,100,1,1),//
	                Array(1322027,100,1,1),//
	                Array(1322003,100,1,1),//
	                Array(1102163,100,1,1),//
	                Array(1102248,100,1,1),//
	                Array(1402037,80,1,1),//����
                        Array(1382173,50,1,1),//����֮��	
                        Array(1112444,100,1,1), //6����ƽ��Ҷ��ָ
                        Array(1112915,100,1,1), //������ָ 
                        Array(1112720,100,1,1), //��ʹð�յ��ս��߽�ָ+��					 		 
			Array(1102042,100,1,1),//��������(��) 
			Array(1102041,50,1),//��������(��)				
			Array(1012070,100,1,1),//ѩ��+��
			Array(1022067,100,1,1),//�ں���		  
			Array(1402063,100,1,1),//ӣ��ɡ
			Array(1302058,100,1,1),//��Ҷɡ			
			Array(1092022,100,1,1),//��ɫ�����					
			Array(1302063,100,1,1),//ȼ�յĻ��浶
			Array(1302106,100,1,1),//ȼ�յı��浶
			Array(1302080,150,1,1),//ð�յ�С����
			Array(1302085,150,1,1),//����
			Array(1302087,150,1,1),//���
			Array(1402044,150,1,1),//�Ϲϵ���
			Array(1302061,220,1,1),//���ٱ���
			Array(1432046,150,1,1),//ʥ��������
        	        Array(1302024,100,1,1),//�ϱ�ֽ����
        	        Array(1322051,150,1,1),//��Ϧ
        	        Array(1402014,30,1,1),//�¶ȼ�
        	        Array(1402029,100,1,1),//����������
        	        Array(1332053,150,1,1),//Ұ���տ�
        	        Array(1372017,150,1,1),//��·��
		        Array(1442039,50,1,1),//������
        	        Array(1332021,100,1,1),//������
			Array(1302036,150,1,1),//��ҶС�� 
                         Array(1092049,100,1,1),//���齣��
			Array(1302049,100,1,1),//���߱�
        	Array(3010734,200,1,1),//è������
        	Array(3010738,220,1,1),//��������������
        	Array(3010740,200,1,1),//ʥ��������
        	Array(3010365,200,1,1),//�ݱ˵����ĹŴ�ʯ������
        	Array(3010301,220,1,1),//�߼�HPҩˮ����
        	Array(3010188,200,1,1),//�ࡤ�װ�����
        	Array(3010186,200,1,1),//��������
        	Array(3010184,220,1,1),//��������
         	Array(3010173,220,1,1),//��ʥ����������
        	Array(3010175,220,1,1),//����������
        	Array(3010210,200,1,1),//��ݮ������±�����--------------
        	Array(3010224,220,1,1),//�����������
        	Array(3010036,220,1,1),//������ǧ
        	Array(3010044,220,1,1),//ͬһ��ɡ��
        	Array(3010111,200,1,1),//��������
        	Array(3010115,200,1,1),//�ܱ�����
        	Array(3010144,200,1,1),//��Ϧ����
        	Array(3015430,200,1,1),//��������
        	Array(3010117,200,1,1),//ħ��������
        	Array(3015424,200,1,1),//������������
        	Array(3015428,200,1,1),//�ͺ���һ����̻�����
        	Array(3010804,200,1,1),//���������������
        	Array(3015045,300,1,1),//������������--------------
        	Array(3010375,300,1,1),//����ĳ���ҩˮ����
        	Array(3015057,300,1,1),//�̻���������
        	Array(3010373,300,1,1),//�ƶ�ϴ�ּ�����
        	Array(3010799,300,1,1),//��Ĺ��������
        	Array(3010737,300,1,1),//����Ӣ��������

        	Array(3010126,300,1,1),//����ħ����
        	Array(3010313,300,1,1),//�ۺ���������
        	Array(3010128,300,1,1),//��������
        	Array(3010133,300,1,1),//������
        	Array(3010152,200,1,1),//������������
        	Array(3010291,300,1,1),//���տ�����
        	Array(3010172,200,1,1),//�ǿ�����
        	Array(3010168,200,1,1),//������������
        	Array(3010185,200,1,1),//С���Ʒ����
        	Array(3010531,300,1,1),//С���ϳ���
        	Array(3010565,300,1,1),//�ҵ�Ů������
        	Array(3010587,300,1,1),//ʱ�佺��
        	Array(3010609,300,1,1),//����������
        	Array(3010608,300,1,1),//��������������
        	Array(3010661,300,1,1),//�����������
        	Array(3010458,200,1,1),//������������
        	Array(3010446,200,1,1),//Ƥ���ʺ�����
        	Array(3010739,100,1,1),//ѩ���㲨����
            Array(3010493,200,1,1),//�Ǿ���
            Array(3010531,200,1,1),//С���ϳ���
            Array(3010306,200,1,1),//�����Ļ�����
            Array(3010195,200,1,1),//�޼�֮������
            Array(3010453,150,1,1),//���ӳ˷���
        	Array(3010151,200,1,1),//���˵�����
		Array(3010043,200,1,1),//ħŮ�ķ�ɨ��
		Array(3010028,200,1,1),//�Ϻ�������
        	Array(3010018,300,1,1),//Ҭ����ɳ̲��
        	Array(3010025,300,1,1),//��Ҷ�����
        	Array(3010898,200,1,1),//������������
        	Array(3010465,200,1,1),//�ɰ���������
        	Array(3010450,200,1,1),//����������
        	Array(3010863,300,1,1),//��ŭ������ʦ����
        	Array(3010447,200,1,1),//˯��С������

        	Array(3010448,200,1,1),//����ԡ����
        	
        	Array(3010428,200,1,1),//ˮ������
        	Array(3010409,200,1,1),//��������
      	    Array(3010094,200,1,1),//ƯƯ������-----------------------
        	Array(3010411,200,1,1),//��βʨ����
        	Array(3010085,300,1,1),//����������
        	Array(3010077,200,1,1),//èͷӥ����
        	Array(3010053,200,1,1),//���Ӽ��������
        	Array(3010678,10,1,1),//���Ӷ�֮��Ϣ
            Array(3015096,50,1,1),//����������������
	    Array(3015183,50,1,1),//��ˮ�鱳������						
	    Array(3010622,50,1,1),//�ҵĺ��ѵ���֮��	

            Array(3010795,200,1,1),//ɭ������Ϣ��
        	Array(3010744,150,1,1),//ð�յ���שͷ������
        	Array(3010752,150,1,1),//õ������
        	Array(3010756,150,1,1),//�����в�è����
        	Array(3010767,150,1,1),//ѩ������
        	Array(3010760,50,1,1),//�Ŵ�ԡ������
        	Array(3010806,80,1,1),//��ӣ������
        	Array(3010848,50,1,1),//���̺���˹�����
        	Array(3010456,80,1,1),//�ž黨����
		   Array(3010043,200,1,1),//ħŮ�ķ�ɨ��

		    Array(3010028,100,1,1),//�Ϻ�������
        	Array(3010018,300,1,1),//Ҭ����ɳ̲��
        	Array(3010025,300,1,1),//��Ҷ�����
        	Array(3010898,200,1,1),//������������
        	Array(3010465,200,1,1),//�ɰ���������
        	Array(3010460,200,1,1),//��������
        	Array(3010450,200,1,1),//����������
        	Array(3010863,300,1,1),//��ŭ������ʦ����
        	Array(3010447,200,1,1),//˯��С������
        	Array(3010448,200,1,1),//����ԡ����
        	Array(3010428,200,1,1),//ˮ������
        	Array(3010409,200,1,1),//��������
      	    Array(3010094,100,1,1),//ƯƯ������-----------------------
        	Array(3010411,200,1,1),//��βʨ����
        	Array(3010085,300,1,1),//����������
        	Array(3010077,200,1,1),//èͷӥ����
        	Array(3010053,300,1,1),//���Ӽ��������
        	Array(3015415,300,1,1),//��������


        	Array(3012024,30,1,1)//ɳ̲��������

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
           selStr = "#e#r���������Ի��������Ʒ��100%���\r\n\#b�Ƿ����� #g1#r��#b#v4000487##n#k\r\n";
		   for (i = 0; i < itemList.length; i++) {
                selStr += "#d#v" + itemList[i][0] + "#";
            }
			
			cm.sendOk(selStr);
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		selStr = "\r\n";
		   for (i = 0; i < itemList.length; i++) {
                selStr += "#d#v" + itemList[i][0] + "#";
            }
        if (cm.haveItem(4000487, 1)) {
            cm.sendYesNo("��ӭ����ð�յ���߳齱~\r\n#rÿ�γ�ȡ��Ҫ#r1��#v4000487#��boss��ӻ�á�"+selStr);
        } else {
            cm.sendOk("��ӭ����ð�յ���߳齱~\r\n#rÿ�γ�ȡ��Ҫ#r1��#v4000487#��boss��ӻ�á�"+selStr);
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 200);
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
            item = cm.gainGachaponItem(itemId, quantity, "��߳齱", notice);
            if (item != -1) {
                cm.gainItem(4000487, -1);
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("��ȷʵ��#b#v4000487##k������ǣ�����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            cm.safeDispose();
        }
    }
}
