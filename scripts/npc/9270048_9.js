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
var kuangshi = 0;
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
            gsjb += "                   #r�㵱ǰӵ��#v4000487#*#c4000487#\r\n";
			gsjb += "        #L1##b"+С�̻� +"#v4000487#�һ�#v4011000##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L2##b"+С�̻� +"#v4000487#�һ�#v4011001##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L3##b"+С�̻� +"#v4000487#�һ�#v4011002##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L4##b"+С�̻� +"#v4000487#�һ�#v4011003##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L5##b"+С�̻� +"#v4000487#�һ�#v4011004##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L6##b"+С�̻� +"#v4000487#�һ�#v4011005##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L7##b"+С�̻� +"#v4000487#�һ�#v4011006##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L8##b"+С�̻� +"#v4000487#�һ�#v4021000##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L9##b"+С�̻� +"#v4000487#�һ�#v4021001##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L10##b"+С�̻� +"#v4000487#�һ�#v4021002##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L11##b"+С�̻� +"#v4000487#�һ�#v4021003##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L12##b"+С�̻� +"#v4000487#�һ�#v4021004##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L13##b"+С�̻� +"#v4000487#�һ�#v4021005##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L14##b"+С�̻� +"#v4000487#�һ�#v4021006##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L15##b"+С�̻� +"#v4000487#�һ�#v4021007##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L16##b"+С�̻� +"#v4000487#�һ�#v4021008##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L17##b"+С�̻� +"#v4000487#�һ�#v4005000##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L18##b"+С�̻� +"#v4000487#�һ�#v4005001##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L19##b"+С�̻� +"#v4000487#�һ�#v4005002##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L20##b"+С�̻� +"#v4000487#�һ�#v4005003##r(����50��1)"+С�̻� +"#l\r\n";
			gsjb += "        #L21##b"+С�̻� +"#v4000487#�һ�#v4005004##r(����75��1)"+С�̻� +"#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 1;
					cm.sendGetNumber("#r��������Ҫ�һ���#v4011000#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 2;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4011001#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 3) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 3;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4011002#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 4) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 4;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4011003#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 5) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 5;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4011004#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 6) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 6;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4011005#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 7) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 7;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4011006#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 8) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 8;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4021000#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 9) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 9;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4021001#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 10) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 10;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4021002#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 11) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 11;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4021003#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 12) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 12;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4021004#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 13) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 13;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4021005#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 14) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 14;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4021006#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 15) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 15;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4021007#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 16) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 16;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4021008#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 17) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 17;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4005000#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 18) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 18;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4005001#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 19) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 19;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4005002#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 20) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 20;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4005003#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
			else if (selection == 21) {
                if (cm.haveItem(4000487) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4000487#�����ܽ��жһ���");
                    status = -1;
                } else {
                    kuangshi = 21;
					cm.sendGetNumber("#r������һ������Ҫʹ��#v4005004#������:\r\n#b��ǰӵ��#v4000487#������Ϊ��#r#c4000487#\r\n", 1, 1, 200);
                }
            }
        } else if (status == 2) {
			if (kuangshi == 1) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4011000, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4011000#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"����ͭ��"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 2) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4011001, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4011001#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"��������"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 3) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4011002, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4011002#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"��﮿�ʯ��"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 4) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4011003, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4011003#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"�����ʯ��"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 5) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4011004, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4011004#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"������"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 6) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4011005, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4011005#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"���Ͽ�ʯ��"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 7) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4011006, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4011006#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"���ƽ�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 8) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4021000, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4021000#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"��ʯ��ʯ��"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 9) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4021001, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4021001#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"����ˮ����"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 10) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4021002, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4021002#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"��������ʯ��"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 11) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4021003, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4021003#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"����ĸ�̣�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 12) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4021004, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4021004#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"������ʯ��"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 13) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4021005, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4021005#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"������ʯ��"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 14) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4021006, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4021006#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"���ƾ���"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 15) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4021007, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4021007#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"����ʯ��"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 16) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4021008, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4021008#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"����ˮ����"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 17) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4005000, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4005000#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"������ˮ����"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 18) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4005001, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4005001#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"���ǻ�ˮ����"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 19) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4005002, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4005002#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"������ˮ����"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 20) {
                if (cm.haveItem(4000487, selection*50)) {
                    cm.gainItem(4000487, -selection*50);
					cm.gainItem(4005003, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*50+"�һ���#v4005003#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"������һ��Ҷһ���"+selection+"������ˮ����"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (kuangshi == 21) {
                if (cm.haveItem(4000487, selection*75)) {
                    cm.gainItem(4000487, -selection*75);
					cm.gainItem(4005004, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4000487#*"+selection*75+"�һ���#v4005004#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*75+"������һ��Ҷһ���"+selection+"���ڰ�ˮ����"));
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