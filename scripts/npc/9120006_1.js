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
//var tz = "#fEffect/CharacterEff/1082565/4/0#";  //���ӷ�
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
        var selStr = "\r\t       "+ С�̻� +"�װ��Ļ�ӭ������������װ����������"+ С�̻� +"\r\n";
        //selStr += "             #r#L30##v1142358##v1142210##v1142840#ѫ������#l#k\r\n\r\n";
		selStr += "   #r#L1#����������#v1302070#����#l    #r#L2#������ͷ#v1003112#����#l#k \r\n";
        selStr += "   #r#L3#Ѱ����װ#v1052929#����#l       #r#L4#Ѱ������#v1102828#����#l#k\r\n";
		selStr += "   #r#L5#Ѱ������#v1082647#����#l      #r#L6#Ѱ��Ь��#v1073057#����#l#k\r\n";
		selStr += "   #r#L7#Ѱ������#v1132287#����#l      #r#L8#���޵��˿�#v1012173#����#l#k\r\n";
		selStr += "   #r#L9#������ӡ#v1022232#����#l       #r#L10#����̩����#v1032186#����#l#k \r\n";
		//selStr += "    #r#L24##v1082543#��������#l#k       #r#L1##v1102481#��������#l#k  \r\n ";//#r#L22##v1402196#FFN��������#l#k 
		//selStr += "    #r#L21##v1022144#Ʒ����ͫӡ#l#k      #r#L22##v1102039#ʱװ���#l#k \r\n ";
		//selStr += "    #r#L31##v1122017#�����׹#l#k       #r#L32##v2510000#ʱװ�ϳ�#l#k ";
		//selStr += "      #r#L22##v1402196#FFN��������#l   #r#L8##v1052669#��ҵ�·�����#l\r\n    ";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.openNpc(9310060,1);
            //cm.dispose();
            break;
		case 1:
            cm.dispose();
			cm.openNpc(2040021,1);
            break;
        case 2:
		    cm.dispose();
			cm.openNpc(2040021,2);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(2040021,3);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(2040021,4);
            break;
		case 5:
            cm.dispose();
            cm.openNpc(2040021,5);
            break;
		case 6:
            cm.dispose();
            cm.openNpc(2040021,6);
            break;
		case 7:
            cm.dispose();
            cm.openNpc(2040021,7);
            break;
		case 8:
            cm.dispose();
            cm.openNpc(2040021,8);
            break;
		case 9:
            cm.dispose();
            cm.openNpc(2040021,9);
            break;
		case 10:
            cm.dispose();
            cm.openNpc(2040021,10);
            break;
		case 11:
            cm.dispose();
            cm.openNpc(9000008,0);
            break;
					case 20:
            cm.dispose();
            cm.openNpc(9310060,2);
            break;
								case 21:
            cm.dispose();
            cm.openNpc(9310102,0);
            break;
							case 22:
            cm.dispose();
			cm.openNpc(2110000,0);
            //cm.openNpc(9201123,0);
            break;
							case 23:
            cm.dispose();
            cm.openNpc(9270025,0);
            break;
							case 24:
            cm.dispose();
            cm.openNpc(2080000,0);
            break;
							case 26:
            cm.dispose();
            cm.openNpc(9120054,10);
            break;
							case 27:
            cm.dispose();
            cm.openNpc(1093000,1);
            break;
							case 28:
            cm.dispose();
            cm.openNpc(9310074,0);
            break;
							case 29:
            cm.dispose();
            cm.openNpc(9120006,0);
            break;
							case 30:
            cm.dispose();
            cm.openNpc(9050010,0);
            break;
							case 31:
            cm.dispose();
            cm.openNpc(9120054,0);
            break;
							case 32:
            cm.dispose();
            cm.openNpc(9120054,1000);
            break;
}
	}
    }
}
