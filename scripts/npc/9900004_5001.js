var head = "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/summary#\r\n";
var icon = "#fUI/UIWindow/Minigame/Common/mark#";
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
var sl1 = 0;//�һ�����

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
          if (status == 0) {

			var text = "#r \t\t\t\t" +  С����  + ""+ cm.getServerName() + "" +  С����  + "\r\n";
				text += "#e#d����Ϊ�����¹� ����2��  ���1��  ����2��\r\n";
				text += "#r�������ÿ����ɫֻ����ȡ1�Σ��޷��ظ���ȡ\r\n";
				text += "#k�����һ����ȡ�������!!!\r\n";
				text += "#k���ྫ��,�����ڴ�!\r\n\r\n";
			cm.sendSimple(text);
		cm.sendNextS(text, 1);



		} else if (status == 1) {

			 if(cm.getPlayerStat("LVL") < 256 && cm.getPlayer().getOneTimeLoga("���ּݵ�") == 0){
			cm.getPlayer().setOneTimeLoga('���ּݵ�');			
			cm.gainItem(2022452, 15);//�����Ӷ
			cm.gainItem(2022522, 1);//�����Ӷ
			cm.gainItem(2022670, -1);//�����Ӷ
			cm.gainItem(1332066,1);//���ֹκ���ʱ�䵥λ/Сʱ
			cm.������װ��(1142358, 0, 0, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);//����ѫ������ɰ�
			cm.������װ��(1002720, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);//ʥ��ñ��
			cm.������װ��(1072278, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);//ʥ��ñ��
			cm.������װ��(1051131, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);//ʥ��ñ��
			cm.������װ��(1050119, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);//ʥ��ñ��
            cm.gainItem(5150040, 3);//����- ���ִ�������߼���Ա�� - �����ִ������������һ�εĻ�Ա��.���԰ѷ��ͱ任��Ը�������
            cm.gainItem(5152001, 3);//����- ���ִ����������߼���Ա�� - �����ִ���������ҽԺ������һ�εĻ�Ա��.���԰����任����Ҫ������.
			cm.gainMeso(500000);
			cm.gainNX(5000);//������3000��
			cm.gainDY(5000);//������þ�66666��               
			cm.sendOk("��ȡ�ɹ���");
			cm.ȫ����ɫ����("[�������] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ���ȡ�˴���ð�յ����˴������")
			//cm.worldMessage(6,"[�������] : ��ϲ��ң�["+cm.getName()+"]��ȡ���˴������");
		//	cm.����(1,"[�������] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ���ȡ�����˴������");
			cm.ȫ������( "[��������] : ���һ�ӭ���� " + cm.getChar().getName() + " �����˴���ð�յ�.��ҿ�����ӭ��!");

            cm.dispose();
				
		} else {
            cm.sendOk("������ȡ����������˻������ĵȼ�����30�������������ˡ�");
            cm.dispose();



            }
        }

}
