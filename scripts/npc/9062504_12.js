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

var �齱ϵ�� = "ʱװñ��";



status = -1;

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
		 
            var   text = "#rʹ��2500��ȯ�Ϳ��������ðٱ������������ж��ɣ�\r\n#e#d" + С�̻� + "�κν��飬����ϵ����лл��" + С�̻� + "#n#k\r\n\r\n";
        text += "#L1#" + С�̻� +  "ʹ��2500��ȯ��#r1#k��#l#L10"+"#" + С�̻� + "ʹ��25000��ȯ��#r10#k��\r\n\r\n";
        text += "#L101##r" + ���� + "�뿴�ٱ�������ʲô������" + ���� + "#l\r\n\r\n";
		if(cm.getPlayer().getGMLevel() >= 100){
			text += "\r\n";
			text += "#b---------------------����ΪGM�ɼ�---------------------\r\n";
			text += "#L103##r" + ���� + "������ӳ齱��Ʒ" + ���� + "#l\r\n\r\n";
		}
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
		} else if (selection == 101) {
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
            cm.sendOk("ʹ��2500��ȯ���������µ��ߣ����ж��ɣ�\r\n#e#r�κν��飬����ϵ����лл��#n#k\r\n" + textItem);
            status = -1;
            //cm.safeDispose();
        } else if (selection == 103) {
			if(cm.������ӳ齱��Ʒ(�齱ϵ��, items, weight, announcement)){
				cm.sendOk("��ӳɹ�\r\n");
				cm.dispose();
				return;
			}
            cm.sendOk("���ʧ��\r\n");
			cm.dispose();
			return;
            status = -1;
            //cm.safeDispose();
        } else if (selection > 0 && selection <= 10) {
			//cm.getPlayer().getCSPoints(1) < 500
           if  (cm.getPlayer().getNX() < 2500 ){
                cm.sendOk("��ȯ���㣡");
                cm.dispose();
                return;
            }
			
			var message = "������:\r\n";
			for(var i = 1;  i <= selection; i++){
				if  (cm.getPlayer().getNX() < 2500 ){
						cm.sendOk("��ȯ���㣡");
						cm.dispose();
						return;
				}
				var itemid = cm.�齱(�齱ϵ��, "�����ٱ���");
				var ���� = 1;
				if (itemid != -1) {
					cm.gainItem(itemid, ����);
					cm.gainNX(-2500);
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

/* var items = new Array(1005607,1005605,1005588,1005587,1005586,1005585,1005584,1005583,1005581,1005578,1005577,1005576,1005574,1005573,1005572,1005559,1005558,1005555,1005547,1005537,1005536,1005535,1005534,1005533,1005532,1005531,1005530,1005529,1005528,1005527,1005526,1005525,1005524,1005523,1005522,1005521,1005514,1005513,1005511,1005510,1005509,1005508,1005507,1005506,1005505,1005504,1005502,1005501,1005500,1005499,1005492,1005483,1005482,1005480,1005479,1005478,1005477,1005476,1005475,1005474,1005473,1005472,1005471,1005459,1005456,1005455,1005445,1005444,1005443,1005442,1005441,1005440,1005434,1005436,1005432,1005431,1005430,1005423,1005422,1005421,1005420,1005419,1005417,1005416,1005412,1005411,1005408,1005407,1005406,1005405,1005404,1005403,1005402,1005401,1005400,1005399,1005398,1005397,1005395,1005394,1005393,1005388,1005387,1005386,1005375,1005369,1005368,1005364,1005354,1005353,1005352);

var weight = new Array(10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10);

var announcement = new Array(1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1); */
