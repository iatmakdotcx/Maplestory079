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
var ����1 = "#fEffect/CharacterEff/1032063/0/0#";
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
        var selStr = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n       "+С�̻�+"#r��ӭ��������ð�յ�ÿ����ʱ�����"+С�̻�+"\r\n";
			selStr += "                #L0##b���ֳ齱��δ������#l  \r\n\r\n";//#L3#
			//selStr += "                #L1##b�����ƣ��ѿ�����#l  \r\n\r\n";//#L3#
			selStr += "                #L2##b��ʱ����Ѹ��£�#l  \r\n\r\n";//#L2#
			selStr += ""+С�̻�+""+С�̻�+""+С�̻�+""+С�̻�+""+С�̻�+""+С�̻�+""+С�̻�+""+С�̻�+""+С�̻�+""+С�̻�+""+С�̻�+""+С�̻�+""+С�̻�+""+С�̻�+""+С�̻�+""+С�̻�+""+С�̻�+""+С�̻�+"\r\n";
			selStr += "#r�˵����\r\n#v5200002#���ֳ齱 ÿ����20��-22�㿪��\r\n#v4031138#������ #l\r\n\r\n";
			cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.dispose();
			cm.openNpc(9310073,54);//���ֳ齱
            break;
		case 1:
            cm.dispose();
			cm.openNpc(2090104,201);//������
            break;
		case 2:
            cm.dispose();
			cm.openNpc(9010010,0);//��ʱ�
            break;			
}
	}
    }
}