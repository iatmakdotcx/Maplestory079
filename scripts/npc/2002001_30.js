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
			text += "          #r��ӭ��������ð�յ��ܳ�ֵ�������а�#k\r\n";
			text += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n";
			text += "          #r������ֻ��ʾǰ����(1000���²���ʾ)#l\r\n"
	        text += "     #r����             ��Ϸ��            ��ֵ����#l\r\n"
			text += "       #b1               ����                0   \r\n"
			text += "       #b2               ����                0   \r\n"
			text += "       #b3               ����                0   \r\n"
			text += "       #b4               ����                0   \r\n"
			text += "       #b5               ����                0   \r\n"
			
            cm.sendSimple(text);
        } else if (selection == 1) {

			if(cm.getzb() >= 500 && cm.haveItem(1112900,1) && cm.getPlayer().getBossLog("500������Ʒ���",1) == 0 ){
				cm.gainItem(1112900,-1);
				cm.gainItem(1112900,100,100,100,100,0,0,50,50,0,0,0,0,0,0);//������ָ
				cm.gainItem(1142210,30,30,30,30,0,0,10,10,0,0,0,0,0,0);//����ѫ��
				cm.gainItem(1122017,10,10,10,10,0,0,10,10,0,0,0,0,0,0);//�����׹
				cm.gainItem(4310057,10);//���̱�
				cm.gainItem(4310143,20);//BOSS��
				cm.gainItem(4310038,35);//SRʱװ��ħ��
				cm.gainItem(4251202,10);//����ˮ��
				cm.gainItem(2613000,1);//�ǻ���������ѡ��
				cm.gainItem(3992025,5000);//ʥ������
				cm.gainItem(4001165,500);//̫����Ĵ͸�
				cm.gainItem(2450000,3);//���˵�����
				cm.gainItem(4170012,2);//�سɾ�һ���
				cm.gainItem(2046913,2);//����������ѡ
				cm.gainMeso(30000000);//3000W
				
				cm.getPlayer().setBossLog("500������Ʒ���",1,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�ۼ�������Ʒ����" + " : " + "��ϲ" + cm.getChar().getName() + "�ɹ���ȡ��500���ۼ�������Ʒ����������ս���������ֽ�һ����ף����/���ɣ�"));
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�ۼ�������Ʒ����" + " : " + "��ϲ" + cm.getChar().getName() + "�ɹ���ȡ��500���ۼ�������Ʒ����������ս���������ֽ�һ����ף����/���ɣ�"));
				cm.sendOk("#r��ϲ�㣬��ȡ�ɹ�500������Ʒ������");
				cm.dispose();
			}else{
				cm.sendOk("#r�������������˺��Ѿ���ȡ���������");
				cm.dispose();
			}
		}
    }
}
