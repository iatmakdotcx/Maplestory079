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
			text = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n";
			text += "               #r��ӭ��������������������#k\r\n";
			text += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n";
            text += "        #L1#"+С�̻�+"#r��Ҫ����#v1332214#�������Ͷ̵�"+С�̻�+"#l\r\n\r\n\r\n";
			text += "#b��Ҫ���ϣ�#v1332207#*1��#v4000270#*200��#v4000082#*10��#v4310057#*10\r\n          #v4000268#*200��#v4011007#*2��#v4011008#*2�� #v4310143#*10\r\n\r\n         ���*1E\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
			if (cm.getInventory(1).isFull()){
                cm.sendOk("#b��ı���װ�����ռ䲻��1����ȷ�Ϻ��ٽ���������");
                cm.dispose();
			} 
			else if(cm.haveItem(1332207,1) && cm.haveItem(4000270,200) && cm.haveItem(4000082,10) && cm.haveItem(4310057,10) && cm.haveItem(4000268,200) && cm.haveItem(4011007,2) && cm.haveItem(4011008,2)  && cm.haveItem(4310143,10)&& cm.getMeso() >= 100000000){
				cm.gainItem(1332207, -1);
				cm.gainItem(4000270, -200);
				cm.gainItem(4000082, -10);
				cm.gainItem(4310057, -10);
				cm.gainItem(4000268, -200);
				cm.gainItem(4250802, -5);
				cm.gainItem(4011007, -2);
				cm.gainItem(4011008, -2);
				cm.gainItem(4310143, -10);
				cm.gainMeso(-100000000);
				cm.gainItem(1332214,0,30,50,0,0,0,150,0,0,0,0,0,0,0);
				cm.sendOk("#b��ϲ�㣬�ɹ�������#v1332214#����ȥ������ȫ�������ɣ�");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ" + cm.getChar().getName() + "�ɹ������˲������Ͷ̵���ս�����ֻ���˽�һ����������ҹ�ϲ��/���ɣ�"));
				cm.dispose();
			}
			else{
				cm.sendOk("#b���ź�����Ĳ��ϲ����Խ�����������ȷ�ϣ�");
				cm.dispose();
			}
		}
    }
}


