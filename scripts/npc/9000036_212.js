var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var ����Ҷ ="#fMap/MapHelper/weather/maple/3#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
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
			text += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n"//3
			text += "          #r��ӭ��������ð�յ��ۼ��������ｱ��#k\r\n";
			text += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
	        text += "               #L1#"+С�̻�+"#r��ȡ100������"+С�̻�+"#l\r\n\r\n"
			text += "      #r��ȡ�ý���ǰ������ȡ��Ӧ���ۼ��������ｱ��#l\r\n\r\n"
			text += "         #b#v1902346##z1902346#*1����ά38����ħ38��\r\n"
			text += "         #b#v1912346##z1912346#*1����ά38����ħ38��\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {

			if(cm.getzb() >= 100 && cm.getPlayer().getBossLog("100�����������",1) == 0 ){
				cm.gainItem(1902346,38,38,38,38,1000,1000,38,38,0,0,0,0,0,0);//��������
				cm.gainItem(1912346,38,38,38,38,1000,1000,38,38,0,0,0,0,0,0);//���԰���
				cm.getPlayer().setBossLog("100�����������",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�ۼ��������ｱ��" + " : " + "��ϲ" + cm.getChar().getName() + "�ɹ���ȡ��100���ۼ��������ｱ����ս���������������ף����/���ɣ�"));
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�ۼ��������ｱ��" + " : " + "��ϲ" + cm.getChar().getName() + "�ɹ���ȡ��100���ۼ��������ｱ����ս���������������ף����/���ɣ�"));
				cm.sendOk("#r��ϲ�㣬��ȡ�ɹ�100�������ｱ����");
				cm.dispose();
			}else{
				cm.sendOk("#r�ۼƶ�Ȳ��������˺��Ѿ���ȡ���������");
				cm.dispose();
			}
		}
    }
}
