/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����  
/* 
 * �ű�����: cm
 * �ű���;: ����н�
 * �ű�����: ����ؼ
 * ����ʱ��: 2014/12/18
 */

var status = -1;
var zhenbang = 0;
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
			gsjb += "           "+С�̻� +"#r��ӭ��������ð�յ����߶һ�#k"+С�̻� +"\r\n";
			gsjb += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
            gsjb += "                  #r�㵱ǰӵ��#v4310149#*#c4310149#\r\n";
			gsjb += "        #L1##b"+С�̻� +"#v4310149#�һ����#r(����1��300W)#l\r\n";
			gsjb += "        #L2##b"+С�̻� +"#v4310149#�һ�����#r(����1��1000W)#l\r\n";
			gsjb += "        #L3##b"+С�̻� +"#v4310149#�һ����#r(����1��1000)#l\r\n";
			gsjb += "        #L4##b"+С�̻� +"#v4310149#�һ��������#r(����1��1)#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4310149) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4310149#�����ܽ��жһ���");
                    status = -1;
                } else {
                    zhenbang = 1;
					cm.sendGetNumber("#r��������Ҫʹ��#v4310149#������:\r\n#b��ǰӵ��#v4310149#������Ϊ��#r#c4310149#\r\n", 1, 1, 2000);
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4310149) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4310149#�����ܽ��жһ���");
                    status = -1;
                } else {
                    zhenbang = 2;
					cm.sendGetNumber("#r��������Ҫʹ��#v4310149#������:\r\n#b��ǰӵ��#v4310149#������Ϊ��#r#c4310149#\r\n", 1, 1, 2000);
                }
            }  
			else if (selection == 3) {
                if (cm.haveItem(4310149) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4310149#�����ܽ��жһ���");
                    status = -1;
                } else {
                    zhenbang = 3;
					cm.sendGetNumber("#r��������Ҫʹ��#v4310149#������:\r\n#b��ǰӵ��#v4310149#������Ϊ��#r#c4310149#\r\n", 1, 1, 2000);
                }
            }  
			else if (selection == 4) {
                if (cm.haveItem(4310149) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4310149#�����ܽ��жһ���");
                    status = -1;
                } else {
                    zhenbang = 4;
					cm.sendGetNumber("#r��������Ҫʹ��#v4310149#������:\r\n#b��ǰӵ��#v4310149#������Ϊ��#r#c4310149#\r\n", 1, 1, 2000);
                }
            } 
        } else if (status == 2) {
			if (zhenbang == 1) {
                if (cm.haveItem(4310149, selection)) {
                    cm.gainItem(4310149, -selection);
					cm.gainMeso(selection*3000000);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310149#*"+selection+"�һ��˽��*"+selection*150+"W��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"������һ���"+selection*150+"W��ң�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (zhenbang == 2) {
                if (cm.haveItem(4310149, selection)) {
                    cm.gainItem(4310149, -selection);
					cm.gainExpR(selection*10000000);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310149#*"+selection+"�һ��˾���*"+selection*1000+"W��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"������һ���"+selection*1000+"W���飡"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (zhenbang == 3) {
                if (cm.haveItem(4310149, selection)) {
                    cm.gainItem(4310149, -selection);
					cm.gainNX(+selection*1000);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310149#*"+selection+"�һ��˵��*"+selection*1000+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"������һ���"+selection*1000+"���"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (zhenbang == 4) {
                if (cm.haveItem(4310149, selection)) {
                    cm.gainItem(4310149, -selection);
					cm.setmoneyb(+selection*1)
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310149#*"+selection+"�һ���"+selection+"��������");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"������һ���"+selection+"������"));
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