importPackage(Packages.client);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.tools);
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE); //��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE); //��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1"; // ��ƷID,����
var x2;
var x3;
var x4;
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var �����Ʒ = "#v1302000#";
var add = "#fEffect/CharacterEff/1112903/0/0#"; //������
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#"; //��ɫ�Ҽ�ͷ
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#"; //��ɫ�Ҽ�ͷ
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#"; //ѡ�����
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��ɫ��ͷ = "#fEffect/CharacterEff/1112908/0/1#"; //�ʹ�3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#"; //����
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var �۰��� = "#fItem/Etc/0427/04270005/Icon8/1#"; //
var �ջ� = "#fUI/PredictHarmony/card/19#"; //��ƬЧ���ջ�
var Ц = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/0#"; //Ц��
var ���Ҷ = "#fMap/MapHelper/weather/maple/2#";
var ���Ҷ = "#fMap/MapHelper/weather/maple/1#";
var ��Ů = "#fMap/MapHelper/weather/witch/0#"; //��Ů
var ���� = "#fMap/MapHelper/weather/balloon/4#"; //����
var ��� = "#fMap/MapHelper/weather/LoveEffect2/4/0#"; //���
var õ�� = "#fMap/MapHelper/weather/rose/0#"; //õ�廨
var �̻� = "#fMap/MapHelper/weather/squib/squib1/3#"; //�̻�

var ��ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/4#"; //
var С�ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/5#"; //
var С���� = "#fItem/Etc/0427/04270001/Icon9/0#"; //
var ����� = "#fItem/Etc/0427/04270001/Icon9/1#"; //
var Сˮ�� = "#fItem/Etc/0427/04270001/Icon10/5#"; //
var ��ˮ�� = "#fItem/Etc/0427/04270001/Icon10/4#"; //
var tz = "#fEffect/CharacterEff/1082565/4/0#"; //������
var tz1 = "#fEffect/CharacterEff/1082565/0/0#"; //������
var tz2 = "#fEffect/CharacterEff/1082565/2/0#"; //������
var а��С�� = ""; //а��С�� ��С��
var а��С��2 = "#fEffect/CharacterEff/1112960/3/1#"; //а��С�� ����
var ���� = "#fEffect/SetEff/208/effect/walk2/4#";
var ����1 = "#fEffect/SetEff/208/effect/walk2/3#";
var С�� = "#fMap/MapHelper/weather/birthday/2#";
var �һ� = "#fMap/MapHelper/weather/rose/4#";
var ����Ҷ = "#fMap/MapHelper/weather/maple/3#";
var С�̻� = "#fMap/MapHelper/weather/squib/squib4/1#";
var ���� = "#fMap/MapHelper/weather/witch/3#";


var �Ƿ񿪷� = false;
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
			if(!�Ƿ񿪷�){
				cm.sendOk("δ����");
				cm.dispose();
				return;
			}

            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
	    
            text += "#e#r" + ���� + "���������ȡ�����˹��ս����" + ���� + ".\r\n"//3     
            text += "#d" + С�̻� + "�˳���ͼ��Υ��������ӽ�����ʧ" + С�̻� + "\r\n"//3
            text += "#L1##d" + С�̻� + "ǰ����ȡ��Ʒ��ͼ" + С�̻� + "\r\n"//3
			
            cm.sendSimple(text);
}
        


else if (selection == 1) {
	 cm.warpParty(401060301);
	 cm.gainItem(2022615,-1);
	 cm.ȫ������(6,"�������˹��" + " : " + "[" + cm.getChar().getName() + "] ���뽱����ͼ!");
                cm.�����Ի�();

	
        }  
    }
}


