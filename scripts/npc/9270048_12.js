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
var bossbi = 0;
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
            gsjb += "                  #r�㵱ǰӵ��#v4310143#*#c4310143#\r\n";
			gsjb += "     #L1##b"+С�̻� +"#v4310143#�һ�#v2049100##z2049100##r(����35��1)#l\r\n";
			gsjb += "     #L2##b"+С�̻� +"#v4310143#�һ�#v4000463##z4000463##r(����45��1)#l\r\n";
			gsjb += "     #L3##b"+С�̻� +"#v4310143#�һ�#v3992025##z3992025##r(����1��4)#l\r\n";
			gsjb += "     #L4##b"+С�̻� +"#v4310143#�һ�#v4170012##z4170012##r(����80��1)#l\r\n";
			gsjb += "     #L5##b"+С�̻� +"#v4310143#�һ�#v2022530##z2022530##r(����40��1)#l\r\n";
			gsjb += "     #L6##b"+С�̻� +"#v4310143#�һ�#v4031138##z4031138##r(����1��10W)#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4310143) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4310143#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bossbi = 1;
					cm.sendGetNumber("#r��������Ҫʹ��#v4310143#�һ���#v2049100#������:\r\n#b��ǰӵ��#v4310143#������Ϊ��#r#c4310143#\r\n", 1, 1, 2000);
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4310143) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4310143#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bossbi = 2;
					cm.sendGetNumber("#r��������Ҫʹ��#v4310143#�һ���#v4000463#������:\r\n#b��ǰӵ��#v4310143#������Ϊ��#r#c4310143#\r\n", 1, 1, 2000);
                }
            }  
			else if (selection == 3) {
                if (cm.haveItem(4310143) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4310143#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bossbi = 3;
					cm.sendGetNumber("#r������һ�#v3992025#��ʹ�õ�#v4310143#������:\r\n#b��ǰӵ��#v4310143#������Ϊ��#r#c4310143#\r\n", 1, 1, 2000);
                }
            }  
			else if (selection == 4) {
                if (cm.haveItem(4310143) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4310143#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bossbi = 4;
					cm.sendGetNumber("#r��������Ҫʹ��#v4310143#�һ���#v4170012#������:\r\n#b��ǰӵ��#v4310143#������Ϊ��#r#c4310143#\r\n", 1, 1, 2000);
                }
            }  
			else if (selection == 5) {
               if (cm.haveItem(4310143) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4310143#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bossbi = 5;
					cm.sendGetNumber("#r��������Ҫʹ��#v4310143#�һ���#v2022530#������:\r\n#b��ǰӵ��#v4310143#������Ϊ��#r#c4310143#\r\n", 1, 1, 2000);
                }
            }  
			else if (selection == 6) {
                if (cm.haveItem(4310143) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4310143#�����ܽ��жһ���");
                    status = -1;
                } else {
                    bossbi = 6;
					cm.sendGetNumber("#r������һ�#v4031138#��ʹ�õ�#v4310143#������:\r\n#b��ǰӵ��#v4310143#������Ϊ��#r#c4310143#\r\n", 1, 1, 2000);
                }
            }  
        } else if (status == 2) {
			if (bossbi == 1) {
                if (cm.haveItem(4310143, selection*35)) {
                    cm.gainItem(4310143, -selection*35);
					cm.gainItem(2049100, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310143#*"+selection*35+"�һ���#v2049100#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*35+"��BOSS�Ҷһ���"+selection+"��������ᣡ"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bossbi == 2) {
                if (cm.haveItem(4310143, selection*45)) {
                    cm.gainItem(4310143, -selection*45);
					cm.gainItem(4000463, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310143#*"+selection*45+"�һ���#v4000463#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*45+"��BOSS�Ҷһ���"+selection+"�������н�ң�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bossbi == 3) {
                if (cm.haveItem(4310143, selection)) {
                    cm.gainItem(4310143, -selection);
					cm.gainItem(3992025, selection*4);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310143#*"+selection+"�һ���#v3992025#*"+selection*4+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"��BOSS�Ҷһ���"+selection*4+"��ʥ�����ǣ�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bossbi == 4) {
                if (cm.haveItem(4310143, selection*80)) {
                    cm.gainItem(4310143, -selection*80);
					cm.gainItem(4170012, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310143#*"+selection*80+"�һ���#v4170012#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*80+"��BOSS�Ҷһ���"+selection+"���سɱҶһ�����"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bossbi == 5) {
                if (cm.haveItem(4310143, selection*40)) {
                    cm.gainItem(4310143, -selection*40);
					cm.gainItem(2022530, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310143#*"+selection*40+"�һ���#v2022530#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*40+"��BOSS�Ҷһ���"+selection+"��ӭ�������"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (bossbi == 6) {
                if (cm.haveItem(4310143, selection)) {
                    cm.gainItem(4310143, -selection);
					cm.gainMeso(selection*100000);
                    cm.sendOk("#r���ѳɹ�ʹ��#4310143#*"+selection+"�һ���#v4031138#*"+selection*1+"W��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection+"��BOSS�Ҷһ���"+selection*1+"W��ң�"));
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