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
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.");
            cm.dispose();
        }  
    else if (status == 0) {
        var selStr = ""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+"\r\n";		
			selStr += "           "+С�̻�+"#r��ӭ��������ð�յ����ܶһ�#k"+С�̻�+"\r\n";
			selStr += ""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+"\r\n\r\n";
			selStr += "     ��ȯ��#r"+cm.getPlayer().getCSPoints(1)+"#d\t����ȯ��#r"+cm.getPlayer().getCSPoints(2)+"#d\t��ֵ���:#r"+cm.getmoneyb()+"#k\r\n\r\n#e#d             ����ǰʱ��"+hour+":"+minute+":"+second+"��#k\r\n";
			selStr += "   #r#L0#"+ С�̻� +"�����һ�#l#k         #r#L1#"+ С�̻� +"������һ�#l#k\r\n\r\n";
			//selStr += "   #r#L0#"+ С�̻� +"����ҵ��һ�#l#k #r#L1#"+ С�̻� +"���Ͻ�Ҷһ�#l\r\n\r\n";
			//selStr += "   #L3#"+ С�̻� +"��Ҷ���һ�#l#k   #r#L4#"+ С�̻� +"�齱��������һ�#l#k \r\n\r\n";
			selStr += "   #d#L2#"+ С�̻� +"�����һ�#l#k         #d#L3#"+ С�̻� +"������һ�#l#k\r\n\r\n";
			//selStr += "   #r#L20#"+ С�̻� +"���þ���һ�#l #r#L21#"+ С�̻� +"����ˮ���һ��ڰ�ˮ��#l#k \r\n";
			//selStr += "   #L9#"+ С�̻� +"���￨�һ�����#l #L10#"+ С�̻� +"������϶һ�����#l\r\n\r\n";
			//selStr += "   #L15#"+ �һ� +" ���϶һ�#l#k #L11# ���Ӷһ�#l ";
			selStr += "               #b#L4#"+ С�̻� +"Ѫ���һ�#l#k\r\n"; 
			//selStr += "   #b#L14# ���ֶһ�#l #b#L2# Ѫ���һ�#l #b#L18# �����ܶһ�����#l #k ";
			cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
            cm.openNpc(9000041,110);
            break;
		case 1:
            cm.dispose();
            cm.openNpc(9000041,111);
            break;
        case 2:
            cm.dispose();
			cm.openNpc(9000041,112);
            break;
		case 30:
            cm.dispose();
            cm.openNpc(9900004,4844);
            break;
        case 3:
            cm.dispose();
            cm.openNpc(9000041,113);
            break;
        case 4:
            cm.dispose();
			cm.openNpc(9900001,1);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9900004,6);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9900004,9);
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9900004,8);
            break;
        case 8:
            cm.dispose();
           cm.openShop(6);
            break;
        case 9:
            cm.dispose();
            cm.openNpc(9310071,50);
            break;
        case 10:
            cm.dispose();
            cm.openNpc(9300001,0);
            break;
        case 11:
            cm.dispose();
            cm.openNpc(9000017,2);
            break;
		case 14:
            cm.dispose();
            cm.openNpc(9330042,0);
			break;
	    case 12:
            cm.dispose();
            cm.openNpc(9900004,20);
			 break;
		case 13:
            cm.dispose();
            cm.openWeb("http://www.shikongmxd.top/");
			 break;
		case 15:
            cm.dispose();
            cm.openNpc(2020000,0);
            break;
		case 16:
            cm.dispose();
            cm.openNpc(9310054,0);
            break;
        case 17:
            cm.dispose();
            cm.openNpc(9000036,0);
            break;
		case 18:
            cm.dispose();
            cm.openNpc(9201124,0);
            break;
		case 20:
            cm.dispose();
            cm.openNpc(9900004,1234);
            break;
		case 21:
            cm.dispose();
            cm.openNpc(9900004,1235);
            break;
		}
    }
}