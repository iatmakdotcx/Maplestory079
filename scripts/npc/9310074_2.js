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
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			var selStr = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n";
				selStr += "              #r��ӭ����ð�յ�װ������#k\r\n";
				selStr += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n";
				selStr += "#r#L0#"+С�̻�+"#v1302070#������������#l  #L1#"+С�̻�+"#v1003112#��������ͷ��#l\r\n";
				selStr += "#b#L2#"+С�̻�+"#v1012173#�ֲ����޵��˿�#l #L3#"+С�̻�+"#v1022232#��������ͫӡ#l\r\n";
				selStr += "#r#L4#"+С�̻�+"#v1122076#���׺�������#l   #L5#"+С�̻�+"#v1052929#ð�յ�Ѱ����װ#l\r\n";
				selStr += "#b#L6#"+С�̻�+"#v1102828#ð�յ�Ѱ������#l #L7#"+С�̻�+"#v1082647#ð�յ�Ѱ������#l\r\n";
				selStr += "#r#L8#"+С�̻�+"#v1073057#ð�յ�Ѱ��Ь��#l #L9#"+С�̻�+"#v1032186#���ð���̩����#l\r\n";
				selStr += "#b#L16#"+С�̻�+"#v1132287#ð�յ�Ѱ������#l  #L17#"+С�̻�+"#v1092109#������֮��#l\r\n";
				selStr += "#r#L10#"+С�̻�+"#v1142358##v1142210##v1142574#����#l  #L11#"+С�̻�+"#v1113170#�����ڰ���ָ#l\r\n";
				selStr += "#b#L12#"+С�̻�+"#v1113089#�����֮��ָ#l  #L13#"+С�̻�+"#v1113084#������˵ָ��#l\r\n";
				selStr += "#r#L14#"+С�̻�+"#v1112738#������֮��ָ#l  #L15#"+С�̻�+"#v1113162#���������ָ#l\r\n";
				cm.sendSimple(selStr);
		} 
		else if (status == 1) {
			switch (selection) {
				case 0:
					cm.dispose();
					cm.openNpc(9310074,201);
					break;
				case 1:
					cm.dispose();
					cm.openNpc(9310074,202);
					break;
				case 2:
					cm.dispose();
					cm.openNpc(9310074,203);
					break;
				case 3:
					cm.dispose();
					cm.openNpc(9310074,204);
					break;
				case 4:
					cm.dispose();
					cm.openNpc(9310074,205);
					break;
				case 5:
					cm.dispose();
					cm.openNpc(9310074,206);
					break;
				case 6:
					cm.dispose();
					cm.openNpc(9310074,207);
					break;
				case 7:
					cm.dispose();
					cm.openNpc(9310074,208);
					break;
				case 8:
					cm.dispose();
					cm.openNpc(9310074,209);
					break;
				case 9:
					cm.dispose();
					cm.openNpc(9310074,210);
					break;
				case 10:
					cm.dispose();
					cm.openNpc(9310074,211);
					break;
				case 11:
					cm.dispose();
					cm.openNpc(9310074,212);
					break;
				case 12:
					cm.dispose();
					cm.openNpc(9310074,213);
					break;
				case 13:
					cm.dispose();
					cm.openNpc(9310074,214);
					break;
				case 14:
					cm.dispose();
					cm.openNpc(9310074,215);
					break;
				case 15:
					cm.dispose();
					cm.openNpc(9310074,216);
					break;
				case 16:
					cm.dispose();
					cm.openNpc(9310074,217);
					break;
				case 17:
					cm.dispose();
					cm.openNpc(9310074,218);
					break;	
			}
		}
    }
}