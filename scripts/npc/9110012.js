/*
 �ű����������˵�
 */
//ʱ������
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
//�ز�����
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var r = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";
var ����ͼ�� = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";
var ���� = "#fEffect/CharacterEff/1003276/0/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/4#";  //
var С�ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/5#";  //
var С���� = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var ����� = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var Сˮ�� = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var ��ˮ�� = "#fItem/Etc/0427/04270001/Icon10/4#";  //
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //������
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //������
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //������
var а��С�� = "#fEffect/CharacterEff/1112960/3/0#";  //а��С�� ��С��
var а��С��2 = "#fEffect/CharacterEff/1112960/3/1#";  //а��С�� ����
var ���� ="#fEffect/SetEff/208/effect/walk2/4#";
var ����1 ="#fEffect/SetEff/208/effect/walk2/3#";
var С�� ="#fMap/MapHelper/weather/birthday/2#";
var �һ� ="#fMap/MapHelper/weather/rose/4#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/2#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var ����Ҷ ="#fMap/MapHelper/weather/maple/3#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var ���� ="#fMap/MapHelper/weather/witch/3#";

var �齱ϵ�� = "����";
status = -1;
var itemList = Array(


Array(1002677, 300, 1, 1), //��߽���ñ

Array(1002699, 300, 1, 1), //�Ϲ�ñ��

//------����------
Array(1102040, 500, 1, 1), //��������(��)

Array(1102041, 50, 1, 1), //��������(��)

Array(1102042, 50, 1, 1), //��������(��)

Array(1102043, 500, 1, 1), //��������(��)

Array(1102140, 400, 1, 1), //������������

Array(1102147, 420, 1, 1), //��߽�������

Array(1102172, 400, 1, 1), //���㲻������

Array(1102174, 400, 1, 1), //������Ա����

Array(3010129,250,1,1), //��������
			Array(3010512,250,1,1), //���
			Array(3010589,250,1,1), //���
			Array(3010600,250,1,1), //����
			Array(3010601,250,1,1), //����
			Array(3010069,250,1,1), //��Ʒ�
			Array(3010147,250,1,1), //��������
			Array(3010149,250,1,1), //����
			Array(3010169,250,1,1), //����
			Array(3010110,250,1,1), //����
			Array(3010139,250,1,1), //˽�ܿռ�
			Array(3010149,250,1,1), //����
			Array(3010151,250,1,1), //�����ŷ�
			Array(3010169,250,1,1), //������
			Array(3010172,250,1,1), //�ǿ�����
			Array(3010175,250,1,1), //����������
			Array(3010193,250,1,1), //����ƿ
			Array(3010195,250,1,1), //����ԡ��
			Array(3010289,250,1,1), //�����̶�ͨ��
			Array(3010293,250,1,1), //��������
			Array(3010403,250,1,1), //���ֻ�
			Array(3010410,250,1,1), //����
			Array(1402047,100, 1, 1),//������ڤ��
			Array(1432049,100, 1, 1), //������ʥǹ
			Array(1442067,100, 1, 1), //��������
			Array(1452059,100, 1, 1), //�������繭
			Array(1462051,100, 1, 1), //����ڤ����
			Array(1472071,100, 1, 1), //�����󱯸�
			Array(1482024,100, 1, 1), //������ȸ��
			Array(1492025,100, 1, 1), //��������
			Array(1302086,100, 1, 1), //�����Ƽ׽�
			Array(1332075,100, 1, 1), //���������
			Array(1332076,100, 1, 1), //����������
			Array(1382059,100, 1, 1),//����������
			Array(3015304,10,1,1), //��ɡ����
			Array(3015406,10,1,1), //��ɡ����
			Array(3015407,10,1,1), //��ɡ����
			Array(3010070,10,1,1), //��ɡ����
			Array(3015051,10,1,1), //��ɡ����
			Array(3010416,10,1,1), //��ɡ����
			Array(3010044,150,1,1), //��ɡ����
			Array(3010036,150,1,1), //��ǧ


	Array(1012170, 150, 1, 1),//�ֲ�����

	Array(1012171, 100, 1, 1),//�ֲ�����

	Array(1012172, 100, 1, 1),//�ֲ�����

	Array(1012173, 50, 1, 1),//�ֲ�����

	Array(1012174, 20, 1, 1),//�ֲ�����

	Array(1302063, 10 , 1, 1), //����

	Array(1092048, 10, 1, 1), //����


	Array(1050100, 100, 1, 1), //������
	Array(1051098, 100, 1, 1), //����Ů
	Array(4001226, 100, 1, 1), //����֮��
	Array(4001227, 100, 1, 1), //�ǻ�֮��
	Array(4001228, 100, 1, 1), //��׼֮��
	Array(4001229, 100, 1, 1), //����֮��
	Array(4001230, 100, 1, 1), //����֮��

	Array(4000463, 20, 1, 1), //�����
	Array(4251202, 50, 1, 1), //�ߵ����ˮ��
	Array(1332242, 30, 1, 1),// ��ɫ�и���
	Array(1382226, 30, 1, 1),// ��ɫ����
	Array(1402214, 30, 1, 1),// ��ɫ˫�ֽ�

	Array(1422156, 30, 1, 1),// ��ɫ�޴�
	Array(1432182, 30, 1, 1),// ��ɫ֮ì
	Array(1452220, 30, 1, 1),// ��ɫ��
	Array(1462208, 30, 1, 1),// ��ɫ֮��
	Array(1472230, 30, 1, 1),// ��ɫȭ�ף�������
	Array(1482183, 30, 1, 1),// ��ɫȭ�ף�������
	Array(1492194, 30, 1, 1),// ��ɫ��ǹ
	Array(1132211, 100, 1, 1),//ð�յ�ǿ����־��ɫ����
	Array(1132212, 100, 1, 1),//ð�յ�ǿ����־��ɫ����
	Array(1132213, 100, 1, 1),//ð�յ�ǿ����־��ɫ����

	Array(1132214, 50, 1, 1),//ð�յ�ǿ����־��ɫ����
	Array(1132215, 20, 1, 1),//ð�յ�ǿ����־��ɫ����

	Array(1132246, 10, 1, 1),//��߼����յ¿�ӡ����
	Array(1003797, 50, 1, 1),//�߹�սʿͷ��
	Array(1003799, 50, 1, 1),//�߹���������ñ
	Array(1003801, 50, 1, 1),//�߹�������ñ
	Array(1003798, 50, 1, 1),//�߹�����ά��ñ

	Array(1003800, 50, 1, 1),//�߹�̿���ñ
	Array(1003621, 1 , 1, 1),//����Ʒ����ñ
	Array(1042254, 50, 1, 1),//ӥ��սʿ����

	Array(1042255, 50, 1, 1),//ӥ�۵�ά�泤��
	Array(1042256, 50, 1, 1),//ӥ����������
	Array(1042257, 50, 1, 1),//ӥ�۴̿ͳ���
	Array(1042258, 50, 1, 1),//ӥ������������
	Array(1062165, 50, 1, 1),//ħ��ʦսʿ�̿�

	Array(1062166, 50, 1, 1),//ħ��ʦ��ά��̿�
	Array(1062167, 50, 1, 1),//ħ��ʦ�����̿�
	Array(1062168, 50, 1, 1),//ħ��ʦ�̿Ͷ̿�
	Array(1062169, 50, 1, 1),//ħ��ʦ�����߶̿�

	Array(1082543, 20, 1, 1),//�������Ǵ�˹����
	Array(1082544, 20, 1, 1),//�����ն�÷˹����
	Array(1082545, 20, 1, 1),//������������

	Array(1082546, 20, 1, 1),//��������������
	Array(1082547, 20, 1, 1),//��������̩����
	Array(1132174, 20, 1, 1),//�������Ǵ�˹����
	Array(1132175, 20, 1, 1),//�������Ǵ�˹����

	Array(1132176, 20, 1, 1),//�������Ǵ�˹����
	Array(1132177, 20, 1, 1),//�������Ǵ�˹����
	Array(1132178, 20, 1, 1),//�������Ǵ�˹����
	Array(1102476, 20, 1, 1),//ŵ�����Ǵ�˹����

	Array(1102477, 20, 1, 1),//ŵ�����Ǵ�˹����
	Array(1102478, 20, 1, 1),//ŵ�����Ǵ�˹����
	Array(1102479, 20, 1, 1),//ŵ�����Ǵ�˹����
	Array(1102480, 20, 1, 1),//ŵ�����Ǵ�˹����
	Array(1022261, 10, 1, 1),//����Ʒ����ͫӡ


	Array(1032206, 100, 1, 1),//�񻰶�����ԭ��I�׶�
	Array(1032207, 50, 1, 1),//�񻰶�����ԭ��II�׶�
	Array(1032208, 10, 1, 1),//�񻰶�����ԭ��III�׶�
	Array(1032209, 5, 1, 1),//�񻰶�����ԭ��IV�׶�
	Array(1032219, 1, 1, 1),//����֮�񻰶���
	Array(1122267, 10, 1, 1),//��߼����յ¿�ӡ��׹
	Array(1122236, 30, 1, 1),//���ѵ���֮����
	Array(1122237, 30, 1, 1),//���ѵ���֮����
	Array(1122238, 30, 1, 1),//���ѵ���֮����

	Array(1122239, 30, 1, 1),//���ѵ���֮����
	Array(1122240, 30, 1, 1),//���ѵ���֮����
	
	Array(1112951, 10, 1, 1),//�����˹�ķ�ŭ

	Array(1112952, 10, 1, 1),//ϣ���ķ�ŭ
	Array(1112915, 10, 1, 1),//������ָ

	Array(1112444, 10, 1, 1),//6����ƽ��Ҷ��ָ
	Array(1112763, 50, 1, 1),//S������ʯ��ָ
	Array(1112775, 50, 1, 1),//S���ݱ�ʯ��ָ
	Array(1112771, 50, 1, 1),//S�ǻ۱�ʯ��ָ
	Array(1112767, 50, 1, 1),//S������ʯ��ָ
	Array(1112794, 100, 1, 1),//�ռ���ָ
	
	Array(1113077, 100, 1, 1),//����֮��
	Array(1113020, 100, 1, 1),//ս��ף����ָ
	Array(2460005, 10, 1, 1),//�����Ŵ󾵣���߼���
	Array(2614000, 10, 1, 1),//ͻ��һ��֮ʯ
	Array(4000464, 10, 1, 1),//�й���

	Array(1492073, 50, 1, 1),
	Array(1302142, 50, 1, 1),
	Array(1312056, 50, 1, 1),
	Array(1322084, 50, 1, 1),
	Array(1332114, 50, 1, 1),
	Array(1342028, 50, 1, 1),
	Array(1372071, 50, 1, 1),
	Array(1382093, 50, 1, 1),

	Array(1412055, 50, 1, 1),
	Array(1422057, 50, 1, 1),
	Array(1432075, 50, 1, 1),
	Array(1442104, 50, 1, 1),
	Array(1302021, 50, 1, 1),
	Array(1302024, 50, 1, 1),
	Array(1302036, 50, 1, 1),
	Array(1302049, 50, 1, 1),

	Array(1302080, 50, 1, 1),
	Array(1302084, 50, 1, 1),
	Array(1302085, 50, 1, 1),
	Array(1302087, 50, 1, 1),
	Array(1302106, 50, 1, 1),
	Array(1302128, 50, 1, 1),

	Array(1302129, 50, 1, 1),
	Array(1302132, 50, 1, 1),
	Array(1302138, 50, 1, 1),
	Array(1302173, 50, 1, 1),
	Array(1302332, 50, 1, 1),
	Array(1322202, 50, 1, 1),

	Array(1382173, 50, 1, 1),
	Array(1402029, 50, 1, 1),
	Array(1402044, 50, 1, 1),
	Array(1442039, 50, 1, 1),
	Array(1112738, 50, 1, 1),
	Array(1112683, 50, 1, 1),
	Array(1112794, 50, 1, 1),
	Array(1102040, 50, 1, 1),

	Array(1102041, 50, 1, 1),
	Array(1102042, 50, 1, 1),
	Array(1102043, 50, 1, 1),
	Array(1072737, 50, 1, 1),
	Array(1072738, 50, 1, 1),
	Array(1072739, 50, 1, 1),
	Array(1072740, 50, 1, 1),
	Array(1072741, 50, 1, 1),

	Array(1402037, 50, 1, 1),
	Array(1402014, 50, 1, 1),
Array(2000004, 900, 20, 1), //����ҩˮ
Array(2000005, 700, 20, 1), //����ҩˮ
Array(2000005, 900, 30, 1), //����ҩˮ
Array(2022245, 850, 5, 1), //����ֹͣ��
Array(1382013, 200, 1, 1), //����֮��
Array(1382015, 100, 1, 1), //��Ģ��
Array(1002914, 100, 1, 1), //�Ǹ���˹��ñ��(����)
Array(1002915, 100, 1, 1), //�Ǹ���˹��ñ��(����)
Array(1002916, 100, 1, 1), //�Ǹ���˹��ñ��(����)
Array(1002917, 100, 1, 1), //�Ǹ���˹��ñ��(����)
Array(1132000, 200, 1, 1), //��ɫ����
Array(1132001, 200, 1, 1), //��ɫ����
Array(1132002, 200, 1, 1), //��ɫ����
Array(1132003, 200, 1, 1), //��ɫ����
Array(1132004, 250, 1, 1), //�ں�����
Array(1132010, 200, 1, 1), //�ƽ���������
Array(1132011, 100, 1, 1), //�ƽ���������
Array(1132012, 100, 1, 1), //���ϵ�����
Array(1132013, 100, 1, 1), //����ķ�������
Array(1012011, 100, 1, 1), //ʥ��¹�ı���
Array(1012012, 100, 1, 1), //ʥ��¹�ı���
Array(1012013, 100, 1, 1), //ʥ��¹�ı���
Array(1012014, 100, 1, 1), //ʥ��¹�ı���
Array(1012015, 100, 1, 1), //ʥ��¹�ı���
Array(1012016, 100, 1, 1), //ʥ��¹�ı���
Array(1012017, 100, 1, 1), //ʥ��¹�ı���
Array(1012018, 100, 1, 1), //ʥ��¹�ı���
Array(1012019, 100, 1, 1), //ʥ��¹�ı���
Array(1012020, 100, 1, 1), //ʥ��¹�ı���
		    Array(1492179,100,1, 1),//FFN
			Array(1482168,100,1, 1),//FFN
			Array(1472214,100,1, 1),//FFN
			Array(1462193,100,1, 1),//FFN
			Array(1452205,100,1, 1),//FFN
			Array(1442223,100,1, 1),//FFN
			Array(1432167,100,1, 1),//FFN
			Array(1422140,100,1, 1),//FFN
			Array(1412135,100,1, 1),//FFN
			Array(1402196,100,1, 1),//FFN
			Array(1382208,100,1, 1),//FFN
			Array(1372177,100,1, 1),//FFN
		    Array(1492235,10,1, 1),//����
			Array(1482221,5,1, 1),//����
			Array(1472265,5,1, 1),//����
			Array(1462243,5,1, 1),//����
			Array(1452257,5,1, 1),//����
			Array(1442274,5,1, 1),//����
			Array(1432218,5,1, 1),//����
			Array(1422189,5,1, 1),//����
			Array(1412181,5,1, 1),//����
			Array(1402259,5,1, 1),//����
			Array(1382265,5,1, 1),//����
			Array(1372228,5,1, 1),//����
			Array(2022336,0,1, 1)//������ѡ��
		



);

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("����ʹ���𣿡��ٱ������и���#b�������λ���ᡢװ�����������#kŶ��\r\n\r\n");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		 
            var   text = "#rʹ��2000��ȯ�Ϳ��������ðٱ����������󲿷��������ԣ����ж��ɣ�\r\n#e#d" + С�̻� + "�ȴ������ֽ���ﰰ���ٴ�����ͨ���ﰰ��" + С�̻� + "#n#k\r\n\r\n";
        text += "#L1#" + С�̻� +  "ʹ��2000��ȯ��#r1#k��#l#L10"+"#" + С�̻� + "ʹ��20000��ȯ��#r10#k��\r\n\r\n";
        text += "#L101##r" + ���� + "�뿴�ٱ�������ʲô������" + ���� + "#l\r\n\r\n";
        cm.sendSimple(text);
    } else if (status == 1) {
        if (selection == 102) {
            cm.dispose();
            cm.openNpc(9310022, 102);
        }else if(selection == 106){
			cm.dispose();
			cm.openNpc(9900001, "�ٱ�ȯ�齱");
			//cm.openNpc(9310022,103 );
			return;
		}else if(selection == 104){
			cm.dispose();
			cm.openNpc(9310022, "װ�����ֶһ�");
			return;
		}else if(selection == 105){
			cm.dispose();
			cm.openNpc(9310022, 104);
			return;
		}
		else if (selection == 101) {
            var textItem = ""
            // for (var i = 0; i < itemList.length; i++) {
                // textItem += "#i" + itemList[i][0] + ":#"
            // }
			var rewardIDs = cm.��ȡ��ƷID(�齱ϵ��);
			var chances = cm.��ȡ��Ʒ����(�齱ϵ��);
			for(var i = 0; i < rewardIDs.size(); i++){
				textItem += "#i" + rewardIDs.get(i) + ":# ";
			}
			textItem += "\r\n";
            cm.sendOk("ʹ��2000��ȯ���������µ��ߣ����ж��ɣ�\r\n#e#r�κν��飬����ϵ����лл��#n#k\r\n" + textItem);
            status = -1;
            //cm.safeDispose();
        } else if (selection > 0 && selection <= 10) {
			//cm.getPlayer().getCSPoints(1) < 500
           if  (cm.getPlayer().getNX() < 2000 ){
                cm.sendOk("��ȯ���㣡");
                cm.dispose();
                return;
            }
			
			var message = "������:\r\n";
			for(var i = 1;  i <= selection; i++){
				if  (cm.getPlayer().getNX() < 2000 ){
						cm.sendOk("��ȯ���㣡");
						cm.dispose();
						return;
				}
				var itemid = cm.�齱(�齱ϵ��, "����ٱ���");
				var ���� = 1;
				if (itemid != -1) {
					cm.gainItem(itemid, ����, true);
					cm.gainNX(-2000);
					message += cm.��ʾ��Ʒ(itemid) + "\r\n";
					cm.getPlayer().dropMessage("������ " + cm.��ȡ��Ʒ����(�齱ϵ��, itemid) + "");
				} else {
					cm.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
					cm.dispose();
					break;
				}
			}
			cm.sendOk(message);
			cm.dispose();
			
        }

    }
}

