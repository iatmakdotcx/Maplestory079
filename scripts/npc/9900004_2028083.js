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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += ""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+"\r\n";
			text += "\t          "+ С�̻� +"#r�ǻ���������ѡ��"+ С�̻� +"\r\n";
			text += ""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+"\r\n\r\n";
			text += "#r��ȡǰ���鱳���������Ƿ���2�����Ͽ�λ,�������Ը�!#k#n\r\n"
			text += "#L1##b"+ С�̻� +"��ȡһ��#v2613000##z2613000#"+ С�̻� +"#l\r\n\r\n"
			text += "#L2##b"+ С�̻� +"��ȡһ��#v2613001##z2613001#"+ С�̻� +"#l\r\n\r\n"
			text += "#L3##b"+ С�̻� +"��ȡһ��#v2612010##z2612010#"+ С�̻� +"#l\r\n\r\n"
            cm.sendSimple(text);
		} else if (cm.getInventory(4).isFull()||cm.getInventory(2).isFull()){
            cm.sendOk("#b�뱣֤����/���ĵĿռ䣡�����޷���ȡ.");
            cm.dispose();
			return;
		} else if (selection == 1){
			if (cm.haveItem(2028083,1)){
				cm.gainItem(2613000,1);
				cm.gainItem(2028083,-1);
				cm.sendOk("�Ѿ��������ı���,��鿴!");
				cm.dispose();
			}else {
				cm.sendOk("������ѡ�����������㣡");
				cm.dispose();
			}
		} else if (selection == 2){
			if (cm.haveItem(2028083,1)){
				cm.gainItem(2613001,1);
				cm.gainItem(2028083,-1);
				cm.sendOk("�Ѿ��������ı���,��鿴!");
				cm.dispose();
			}else {
				cm.sendOk("������ѡ�����������㣡");
				cm.dispose();
			}
		} else if (selection == 3){
			if (cm.haveItem(2028083,1)){
				cm.gainItem(2612010,1);
				cm.gainItem(2028083,-1);
				cm.sendOk("�Ѿ��������ı���,��鿴!");
				cm.dispose();
			}else {
				cm.sendOk("������ѡ�����������㣡");
				cm.dispose();
			}
        } 
	}
}