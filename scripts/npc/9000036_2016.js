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
			text += "          #r��ӭ��������ð�յ��ڶ��׶��ۼ�������Ʒ����#k\r\n";
			text += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
	        text += "              #L1#"+С�̻�+"#r��ȡ4000������"+С�̻�+"#l\r\n\r\n"
			text += "    ��ȡǰ�뽫ԭ����������ָ���ڰ��ڣ�����������#l\r\n\r\n"
			text += "#b#v4310060##z4310060#*10\r\n"
			text += "#b#v2028158##z2028158#*1\r\n"
			text += "#b#v4310143##z4310143#*120\r\n"
			text += "#b#v4005004##z4005004#*200\r\n"
			text += "#b#v4251202##z4251202#*50\r\n"
			text += "#b#v2049100##z2049100#*100\r\n"
			text += "#b#v4310010##z4310010#*2\r\n"
			text += "#b#v4310108##z4310108#*20\r\n"
			text += "#b#v3992025##z3992025#*10000\r\n"
			text += "#b#v4001165##z4001165#*5000\r\n"
			text += "#b#v2450000##z2450000#*5\r\n"
			text += "#b#v2040815##z2040815#*10\r\n"
			text += "#b#v2613000##z2613000#*15\r\n"
			text += "#b#v2046913##z2046913#*10\r\n"
			text += "#b#v4001245##z4001245#*3\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {

			if(cm.getzb() >= 12000 && cm.getPlayer().getBossLog("4000������Ʒ���2",1) == 0 ){
				cm.gainItem(4310060,10);//����ʯ
				cm.gainItem(2028158,1);//�����ʽ����
				cm.gainItem(4310143,120);//BOSS��
				cm.gainItem(4005004,200);//��ˮ��
				cm.gainItem(4251202,50);//����ˮ��
				cm.gainItem(2049100,100);//����
				cm.gainItem(4310010,2);//15�Ǳس�
				cm.gainItem(4310108,20);//URʱװ��ħ��
				cm.gainItem(3992025,10000);//ʥ������
				cm.gainItem(4001165,5000);//̫����Ĵ͸�
				cm.gainItem(2450000,5);//���˵�����
				cm.gainItem(2040815,10);//���׾�
				cm.gainItem(2613000,15);//�ǻ�
				cm.gainItem(2046913,10);//����������ѡ
				cm.gainItem(4001245,3);//��
				
				cm.getPlayer().setBossLog("4000������Ʒ���2",1,1);
				//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�ۼ�������Ʒ����" + " : " + "��ϲ" + cm.getChar().getName() + "�ɹ���ȡ��4000���ۼ�������Ʒ����������ս���������ֽ�һ����ף����/���ɣ�"));
				//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�ۼ�������Ʒ����" + " : " + "��ϲ" + cm.getChar().getName() + "�ɹ���ȡ��4000���ۼ�������Ʒ����������ս���������ֽ�һ����ף����/���ɣ�"));
				cm.sendOk("#r��ϲ�㣬��ȡ�ɹ��ڶ��׶�4000������Ʒ������");
				cm.dispose();
			}else{
				cm.sendOk("#r�������������˺��Ѿ���ȡ���������");
				cm.dispose();
			}
		}
    }
}
