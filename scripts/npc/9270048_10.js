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
            gsjb += "                   #r�㵱ǰӵ��#v4170012#*#c4170012#\r\n";
			gsjb += "   #L1##b"+С�̻� +"#v4170012#�һ�#v2043003##z2043003##r(����1��1)#l\r\n";
			gsjb += "   #L2##b"+С�̻� +"#v4170012#�һ�#v2044003##z2044003##r(����1��1)#l\r\n";
			gsjb += "   #L3##b"+С�̻� +"#v4170012#�һ�#v2044303##z2044303##r(����1��1)#l\r\n";
			gsjb += "   #L4##b"+С�̻� +"#v4170012#�һ�#v2044503##z2044503##r(����1��1)#l\r\n";
			gsjb += "   #L5##b"+С�̻� +"#v4170012#�һ�#v2044603##z2044603##r(����1��1)#l\r\n";
			gsjb += "   #L6##b"+С�̻� +"#v4170012#�һ�#v2043303##z2043303##r(����1��1)#l\r\n";
			gsjb += "   #L7##b"+С�̻� +"#v4170012#�һ�#v2043703##z2043703##r(����1��1)#l\r\n";
			gsjb += "   #L8##b"+С�̻� +"#v4170012#�һ�#v2043803##z2043803##r(����1��1)#l\r\n";
			gsjb += "   #L9##b"+С�̻� +"#v4170012#�һ�#v2044703##z2044703##r(����1��1)#l\r\n";
			gsjb += "   #L10##b"+С�̻� +"#v4170012#�һ�#v2044908##z2044908##r(����1��1)#l\r\n";
			gsjb += "   #L11##b"+С�̻� +"#v4170012#�һ�#v2044815##z2044815##r(����1��1)#l\r\n";
			gsjb += "   #L12##b"+С�̻� +"#v4170012#�һ�#v2044403##z2044403##r(����1��1)#l\r\n";
			gsjb += "   #L13##b"+С�̻� +"#v4170012#�һ�#v2044203##z2044203##r(����1��1)#l\r\n";
			gsjb += "   #L14##b"+С�̻� +"#v4170012#�һ�#v2044103##z2044103##r(����1��1)#l\r\n";
			gsjb += "   #L15##b"+С�̻� +"#v4170012#�һ�#v2043203##z2043203##r(����1��1)#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4170012#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 1;
					cm.sendGetNumber("#r��������Ҫʹ��#v4170012#�һ���#v2043003#������:\r\n#b��ǰӵ��#v4170012#������Ϊ��#r#c4170012#\r\n", 1, 1, 200);
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4170012#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 2;
					cm.sendGetNumber("#r��������Ҫʹ��#v4170012#�һ���#v2044003#������:\r\n#b��ǰӵ��#v4170012#������Ϊ��#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 3) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4170012#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 3;
					cm.sendGetNumber("#r��������Ҫʹ��#v4170012#�һ���#v2044303#������:\r\n#b��ǰӵ��#v4170012#������Ϊ��#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 4) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4170012#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 4;
					cm.sendGetNumber("#r��������Ҫʹ��#v4170012#�һ���#v2044503#������:\r\n#b��ǰӵ��#v4170012#������Ϊ��#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 5) {
               if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4170012#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 5;
					cm.sendGetNumber("#r��������Ҫʹ��#v4170012#�һ���#v2044603#������:\r\n#b��ǰӵ��#v4170012#������Ϊ��#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 6) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4170012#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 6;
					cm.sendGetNumber("#r��������Ҫʹ��#v4170012#�һ���#v2043303#������:\r\n#b��ǰӵ��#v4170012#������Ϊ��#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 7) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4170012#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 7;
					cm.sendGetNumber("#r��������Ҫʹ��#v4170012#�һ���#v2043703#������:\r\n#b��ǰӵ��#v4170012#������Ϊ��#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 8) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4170012#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 8;
					cm.sendGetNumber("#r��������Ҫʹ��#v4170012#�һ���#v2043803#������:\r\n#b��ǰӵ��#v4170012#������Ϊ��#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 9) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4170012#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 9;
					cm.sendGetNumber("#r��������Ҫʹ��#v4170012#�һ���#v2044703#������:\r\n#b��ǰӵ��#v4170012#������Ϊ��#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 10) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4170012#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 10;
					cm.sendGetNumber("#r��������Ҫʹ��#v4170012#�һ���#v2044908#������:\r\n#b��ǰӵ��#v4170012#������Ϊ��#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 11) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4170012#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 11;
					cm.sendGetNumber("#r��������Ҫʹ��#v4170012#�һ���#v2044815#������:\r\n#b��ǰӵ��#v4170012#������Ϊ��#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 12) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4170012#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 12;
					cm.sendGetNumber("#r��������Ҫʹ��#v4170012#�һ���#v2044403#������:\r\n#b��ǰӵ��#v4170012#������Ϊ��#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 13) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4170012#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 13;
					cm.sendGetNumber("#r��������Ҫʹ��#v4170012#�һ���#v2044203#������:\r\n#b��ǰӵ��#v4170012#������Ϊ��#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 14) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4170012#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 14;
					cm.sendGetNumber("#r��������Ҫʹ��#v4170012#�һ���#v2044103#������:\r\n#b��ǰӵ��#v4170012#������Ϊ��#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
			else if (selection == 15) {
                if (cm.haveItem(4170012) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4170012#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bicheng = 15;
					cm.sendGetNumber("#r��������Ҫʹ��#v4170012#�һ���#v2043203#������:\r\n#b��ǰӵ��#v4170012#������Ϊ��#r#c4170012#\r\n", 1, 1, 200);
                }
            }  
        } else if (status == 2) {
			if (bicheng == 1) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2043003, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170012#*"+selection+"�һ���#v2043003#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"���سɱҶһ����һ���"+selection+"�����ֽ������سɾ�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 2) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044003, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170012#*"+selection+"�һ���#v2044003#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"���سɱҶһ����һ���"+selection+"��˫�ֽ������سɾ�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 3) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044303, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170012#*"+selection+"�һ���#v2044303#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"���سɱҶһ����һ���"+selection+"��ǹ�����سɾ�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 4) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044503, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170012#*"+selection+"�һ���#v2044503#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"���سɱҶһ����һ���"+selection+"�Ź������سɾ�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 5) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044603, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170012#*"+selection+"�һ���#v2044603#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"���سɱҶһ����һ���"+selection+"���󹥻��سɾ�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 6) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2043303, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170012#*"+selection+"�һ���#v2043303#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"���سɱҶһ����һ���"+selection+"�Ŷ̽������سɾ�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 7) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2043703, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170012#*"+selection+"�һ���#v2043703#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"���سɱҶһ����һ���"+selection+"�Ŷ��ȹ����سɾ�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 8) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2043803, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170012#*"+selection+"�һ���#v2043803#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"���سɱҶһ����һ���"+selection+"�ų��ȹ����سɾ�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 9) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044703, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170012#*"+selection+"�һ���#v2044703#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"���سɱҶһ����һ���"+selection+"��ȭ�׹����سɾ�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 10) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044908, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170012#*"+selection+"�һ���#v2044908#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"���سɱҶһ����һ���"+selection+"�Ŷ�ǹ�����سɾ�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 11) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044815, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170012#*"+selection+"�һ���#v2044815#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"���سɱҶһ����һ���"+selection+"��ָ�ڹ����سɾ�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 12) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044403, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170012#*"+selection+"�һ���#v2044403#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"���سɱҶһ����һ���"+selection+"��ì�����سɾ�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 13) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044203, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170012#*"+selection+"�һ���#v2044203#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"���سɱҶһ����һ���"+selection+"��˫�ֶ��������سɾ�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 14) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2044103, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170012#*"+selection+"�һ���#v2044103#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"���سɱҶһ����һ���"+selection+"��˫�ָ������سɾ�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bicheng == 15) {
                if (cm.haveItem(4170012, selection)) {
                    cm.gainItem(4170012, -selection);
					cm.gainItem(2043203, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170012#*"+selection+"�һ���#v2043203#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"���سɱҶһ����һ���"+selection+"�ŵ��ֶ��������سɾ�"));
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