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
			text += "          #r��ӭ��������ð�յ��ۼ�������Ʒ����#k\r\n";
			text += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
	        text += "              #L1#"+С�̻�+"#r��ȡ10000������"+С�̻�+"#l\r\n\r\n"
			text += "    ��ȡǰ�뽫ԭ����������ָ���ڰ��ڣ�����������#l\r\n\r\n"
			text += "#b#v1112900##z1112900#*1����������ά1200����ħ600��\r\n"
			text += "#b#v2022662#����������ѡ*1\r\n"
			text += "#b#s4111006#2����*1\r\n"
			text += "#b#v4310108##z4310108#*10\r\n"
			text += "#b#v2049116##z2049116#*200\r\n"
			text += "#b#v4005004##z4005004#*600\r\n"
			text += "#b#v3992025##z3992025#*20000\r\n"
			text += "#b#v4001165##z4001165#*1250\r\n"
			text += "#b#v2028083##z2028083#*4\r\n"
			text += "#b#v4310010##z4310010#*3\r\n"
			text += "#b#v4032226##z4032226#*10\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {

			if(cm.getzb() >= 10000 && cm.haveItem(1112900,1) && cm.getPlayer().getBossLog("10000������Ʒ���",1) == 0 && cm.getPlayer().getBossLog("7000������Ʒ���",1) == 1){
				cm.gainItem(1112900,-1);
				cm.gainItem(1112900,1200,1200,1200,1200,0,0,600,600,0,0,0,0,0,0);//������ָ
				cm.gainItem(2022662,1);//����������ѡ
				cm.gainItem(3700040,1);//2��
				cm.gainItem(4310108,10);//URʱװ��ħ��
				cm.gainItem(2049116,200);//ǿ���������
				cm.gainItem(4005004,600);//�ڰ�ˮ��
				cm.gainItem(3992025,20000);//ʥ������
				cm.gainItem(4001165,1250);//̫����Ĵ͸�
				cm.gainItem(2028083,4);//�ǻ���������ѡ��
				cm.gainItem(4310010,3);//20�Ǳسɱ�
				cm.gainItem(4032226,10);//�ƽ�����
				
				cm.getPlayer().setBossLog("10000������Ʒ���",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�ۼ�������Ʒ����" + " : " + "��ϲ" + cm.getChar().getName() + "�ɹ���ȡ��10000���ۼ�������Ʒ����������ս���������ֽ�һ����ף����/���ɣ�"));
				//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�ۼ�������Ʒ����" + " : " + "��ϲ" + cm.getChar().getName() + "�ɹ���ȡ��10000���ۼ�������Ʒ����������ս���������ֽ�һ����ף����/���ɣ�"));
				cm.sendOk("#r��ϲ�㣬��ȡ�ɹ�10000������Ʒ������");
				cm.dispose();
			}else{
				cm.sendOk("#r�������������˺��Ѿ���ȡ���������");
				cm.dispose();
			}
		}
    }
}
