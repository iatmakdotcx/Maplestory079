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
	        text += "              #L1#"+С�̻�+"#r��ȡ1000������"+С�̻�+"#l\r\n\r\n"
			text += "    ��ȡǰ�뽫ԭ����������ָ���ڰ��ڣ�����������#l\r\n\r\n"
			//text += "#b#v1112900##z1112900#*1����������ά150����ħ75��\r\n"
			text += "#b#v4310060##z4310060#*5\r\n"
			text += "#b#v4310057##z4310057#*20\r\n"
			text += "#b#v4310143##z4310143#*20\r\n"
			text += "#b#v4310027##z4310027#*20\r\n"
			text += "#b#v4251202##z4251202#*10\r\n"
			text += "#b#v2613000##z2613000#*3\r\n"
			text += "#b#v3992025##z3992025#*5000\r\n"
			text += "#b#v4001165##z4001165#*800\r\n"
			text += "#b#v2450000##z2450000#*3\r\n"
			text += "#b#v4170012##z4170012#*3\r\n"
			text += "#b#v2046913##z2046913#*3\r\n"
			text += "#b#v4031138#���*5000W\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {

			if(cm.getzb() >= 1000 && cm.haveItem(1112949,1) && cm.getPlayer().getBossLog("1000������Ʒ���",1) == 0 ){
				//cm.gainItem(1112900,-1);
				//cm.gainItem(1112900,150,150,150,150,0,0,75,75,0,0,0,0,0,0);//������ָ
				cm.gainItem(4310060,5);//����ʯ
				cm.gainItem(4310057,20);//���̱�
				cm.gainItem(4310143,20);//BOSS��
				cm.gainItem(4310027,20);//SSRʱװ��ħ��
				cm.gainItem(4251202,10);//����ˮ��
				cm.gainItem(2613000,3);//�ǻ���������ѡ��
				cm.gainItem(3992025,5000);//ʥ������
				cm.gainItem(4001165,800);//̫����Ĵ͸�
				cm.gainItem(2450000,3);//���˵�����
				cm.gainItem(4170012,3);//�سɾ�һ���
				cm.gainItem(2046913,3);//����������ѡ
				cm.gainMeso(50000000);//5000W
				
				cm.getPlayer().setBossLog("1000������Ʒ���",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�ۼ�������Ʒ����" + " : " + "��ϲ" + cm.getChar().getName() + "�ɹ���ȡ��1000���ۼ�������Ʒ����������ս���������ֽ�һ����ף����/���ɣ�"));
				//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�ۼ�������Ʒ����" + " : " + "��ϲ" + cm.getChar().getName() + "�ɹ���ȡ��1000���ۼ�������Ʒ����������ս���������ֽ�һ����ף����/���ɣ�"));
				cm.sendOk("#r��ϲ�㣬��ȡ�ɹ�1000������Ʒ������");
				cm.dispose();
			}else{
				cm.sendOk("#r�������������˺��Ѿ���ȡ���������");
				cm.dispose();
			}
		}
    }
}
