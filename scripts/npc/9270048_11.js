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
var bicheng = 0;
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
            gsjb += "                  #r�㵱ǰӵ��#v4032398#*#c4032398#\r\n";
			gsjb += "     #L1##b"+С�̻� +"#v4032398#�һ�#v4251202##z4251202##r(����1��1)#l\r\n";
			gsjb += "     #L2##b"+С�̻� +"#v4032398#�һ�#v4170012##z4170012##r(����2��1)#l\r\n";
			gsjb += "     #L3##b"+С�̻� +"#v4032398#�һ�#v2049116##z2049116##r(����3��1)#l\r\n";
			gsjb += "     #L4##b"+С�̻� +"#v4032398#�һ�#v2450000##z2450000##r(����4��1)#l\r\n";
			gsjb += "     #L5##b"+С�̻� +"#v4032398#�һ�#v4011007##z4011007##r(����5��1)#l\r\n";
			gsjb += "     #L6##b"+С�̻� +"#v4032398#�һ�#v4011008##z4011008##r(����6��1)#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4032398) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4032398#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 1;
					cm.sendGetNumber("#r��������Ҫʹ��#v4032398#�һ���#v4251202#������:\r\n#b��ǰӵ��#v4032398#������Ϊ��#r#c4032398#\r\n", 1, 1, 200);
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4032398) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4032398#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 2;
					cm.sendGetNumber("#r��������Ҫʹ��#v4032398#�һ���#v4170012#������:\r\n#b��ǰӵ��#v4032398#������Ϊ��#r#c4032398#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 3) {
                if (cm.haveItem(4032398) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4032398#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 3;
					cm.sendGetNumber("#r��������Ҫʹ��#v4032398#�һ���#v2049116#������:\r\n#b��ǰӵ��#v4032398#������Ϊ��#r#c4032398#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 4) {
                if (cm.haveItem(4032398) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4032398#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 4;
					cm.sendGetNumber("#r��������Ҫʹ��#v4032398#�һ���#v2450000#������:\r\n#b��ǰӵ��#v4032398#������Ϊ��#r#c4032398#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 5) {
               if (cm.haveItem(4032398) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4032398#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 5;
					cm.sendGetNumber("#r��������Ҫʹ��#v4032398#�һ���#v4011007#������:\r\n#b��ǰӵ��#v4032398#������Ϊ��#r#c4032398#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 6) {
                if (cm.haveItem(4032398) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4032398#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 6;
					cm.sendGetNumber("#r��������Ҫʹ��#v4032398#�һ���#v4011008#������:\r\n#b��ǰӵ��#v4032398#������Ϊ��#r#c4032398#\r\n", 1, 1, 200);
                }
            }  
        } else if (status == 2) {
			if (bicheng == 1) {
                if (cm.haveItem(4032398, selection)) {
                    cm.gainItem(4032398, -selection);
					cm.gainItem(4251202, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4032398#*"+selection+"�һ���#v4251202#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"����ϯͼ�¶һ���"+selection+"������ˮ����"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 2) {
                if (cm.haveItem(4032398, selection*2)) {
                    cm.gainItem(4032398, -selection*2);
					cm.gainItem(4170012, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4032398#*"+selection*2+"�һ���#v4170012#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*2+"����ϯͼ�¶һ���"+selection+"���سɾ�һ�����"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 3) {
                if (cm.haveItem(4032398, selection*3)) {
                    cm.gainItem(4032398, -selection*3);
					cm.gainItem(2049116, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4032398#*"+selection*3+"�һ���#v2049116#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*3+"����ϯͼ�¶һ���"+selection+"��ǿ��������ᣡ"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 4) {
                if (cm.haveItem(4032398, selection*4)) {
                    cm.gainItem(4032398, -selection*4);
					cm.gainItem(2450000, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4032398#*"+selection*4+"�һ���#v2450000#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*4+"����ϯͼ�¶һ���"+selection+"�����˵����ԣ�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 5) {
                if (cm.haveItem(4032398, selection*5)) {
                    cm.gainItem(4032398, -selection*5);
					cm.gainItem(4011007, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4032398#*"+selection*5+"�һ���#v4011007#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*5+"����ϯͼ�¶һ���"+selection+"����ʯ��"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 6) {
                if (cm.haveItem(4032398, selection*6)) {
                    cm.gainItem(4032398, -selection*6);
					cm.gainItem(4011008, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4032398#*"+selection*6+"�һ���#v4011008#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*6+"����ϯͼ�¶һ���"+selection+"��ﮣ�"));
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