/* 
 * �ű�����: cm
 * �ű���;: ����н�
 * �ű�����: ����ؼ
 * ����ʱ��: 2014/12/18
 */

var status = -1;
var money1 = 0;
var tosend = 0;
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var ���� ="#fMap/MapHelper/weather/witch/3#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var sl;
var mats;
var dds;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("�����Ҫ����н�����������Ұɣ�");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {	
            var gsjb = "";
            gsjb += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n";		
			gsjb += "           "+С�̻� +"#r��ӭ��������ð�յ��н�ϵͳ#k"+С�̻� +"\r\n";
			gsjb += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
            gsjb += "           #r�㵱ǰӵ��#v4001126#*#c4001126#  #b"+cm.getPlayer().getCSPoints(1)+"#r��ȯ\r\n";
			gsjb += "          #L1##b"+С�̻� +"#v4001126#�һ����#r(����1��1)"+С�̻� +"#l\r\n\r\n";
			gsjb += "          #L2##b"+С�̻� +"���һ�#v4001126##r(����1��1)"+С�̻� +"#l\r\n\r\n";			
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4001126) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4001126#��1������1�򣬲��ܽ��жһ���");
                    status = -1;
                } else {
                    money1 = 1;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4001126#������:\r\n#b��ǰӵ��#v4001126#������Ϊ��#r#c4001126#\r\n", 1, 1, 10000);
                }
            }
			else if (selection == 2) {
                if (cm.getPlayer().getCSPoints(1) < 1) {
                    cm.sendNext("#r����˺�û���㹻�ĵ��1������1�򣬲��ܽ��жһ���");
                    status = -1;
                } else {
                    money1 = 2;
					cm.sendGetNumber("#r�����������軻ȡ��#v4001126#������:\r\n#b��ǰӵ�еĵ������Ϊ��#r"+cm.getPlayer().getCSPoints(1)+"\r\n", 1, 1, 10000);
                }
            }
															
        } else if (status == 2) {
           if (money1 == 1) {
                 if (cm.haveItem(4001126, selection)) {
                    cm.gainItem(4001126, -selection);
					cm.gainNX(1*selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4001126#*"+selection+"�һ���"+selection*1+"���");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�н�ϵͳ" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"����Ҷ�һ���"+selection*1+"���"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (money1 == 2) {
                 if (cm.getPlayer().getCSPoints(1) >= 1*selection) {
					cm.gainNX(-1*selection);
					cm.gainItem(4001126, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��"+selection*1+"���һ���#v4001126#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�н�ϵͳ" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*1+"���һ���"+selection+"����Ҷ��"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
        } else {
            cm.dispose();
        }
    }
}