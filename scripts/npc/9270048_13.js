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
var choujiang = 0;
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
            gsjb += "                   #r�㵱ǰӵ��#v4170018#*#c4170018#\r\n";
			gsjb += "     #L1##b"+С�̻� +"#v4170018#�һ�#v4000463##z4000463##r(����50��1)#l\r\n";
			gsjb += "     #L2##b"+С�̻� +"#v4170018#�һ�#v4170012##z4170012##r(����100��1)#l\r\n";
			gsjb += "     #L15##b"+С�̻� +"#v4170018#�һ�#v4310108##z4310108##r(����100��1)#l\r\n";
			gsjb += "     #L3##b"+С�̻� +"#v4170018#�һ�#v1102042##z1102042##r(����500��1)#l\r\n";
			gsjb += "     #L4##b"+С�̻� +"#v4170018#�һ�#v1102041##z1102041##r(����500��1)#l\r\n";
			//gsjb += "     #L5##b"+С�̻� +"#v4170018#�һ�#v1382037##z1382037##r(����150��1)#l\r\n";
			//gsjb += "     #L6##b"+С�̻� +"#v4170018#�һ�#v1382049##z1382049##r(����165��1)#l\r\n";
			//gsjb += "     #L7##b"+С�̻� +"#v4170018#�һ�#v1382050##z1382050##r(����165��1)#l\r\n";
			//gsjb += "     #L8##b"+С�̻� +"#v4170018#�һ�#v1382051##z1382051##r(����165��1)#l\r\n";
			//gsjb += "     #L9##b"+С�̻� +"#v4170018#�һ�#v1382052##z1382052##r(����165��1)#l\r\n";
			//gsjb += "     #L10##b"+С�̻� +"#v4170018#�һ�#v1402037##z1402037##r(����200��1)#l\r\n";
			gsjb += "     #L11##b"+С�̻� +"#v4170018#�һ�#v1012319##z1012319##r(����1000��1)#l\r\n";
			gsjb += "     #L12##b"+С�̻� +"#v4170018#�һ�#v1113149##z1113149##r(����1000��1)#l\r\n";
			gsjb += "     #L13##b"+С�̻� +"#v4170018#�һ�#v4310009##z4310009##r(����500��1)#l\r\n";
			gsjb += "     #L14##b"+С�̻� +"#v4170018#�һ�#v4001255##z4001255##r(����2000��1)#l\r\n";
			gsjb += "     #L10##b"+С�̻� +"#v4170018#�һ�#v1112915##z1112915##r(����3000��1)#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4170018) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4170018#�����ܽ��жһ���");
                    status = -1;
                } else {
                    choujiang = 1;
					cm.sendGetNumber("#r��������Ҫʹ��#v4170018#�һ���#v4000463#������:\r\n#b��ǰӵ��#v4170018#������Ϊ��#r#c4170018#\r\n", 1, 1, 2000);
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4170018) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4170018#�����ܽ��жһ���");
                    status = -1;
                } else {
                    choujiang = 2;
					cm.sendGetNumber("#r��������Ҫʹ��#v4170018#�һ���#v4170012#������:\r\n#b��ǰӵ��#v4170018#������Ϊ��#r#c4170018#\r\n", 1, 1, 2000);
                }
            }  
			else if (selection == 3) {
                if (cm.haveItem(4170018,500)) {
                    cm.gainItem(4170018,-500);
					cm.gainItem(1102042,1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170018#*125�һ���#v1102042##z1102042#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��500�����齱�������һ����������磨�ϣ���"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4170018#�����ܽ��жһ���");
                    cm.dispose();
                }
            } 
			else if (selection == 4) {
                if (cm.haveItem(4170018,500)) {
                    cm.gainItem(4170018,-500);
					cm.gainItem(1102041,1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170018#*130�һ���#v1102041##z1102041#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��500�����齱�������һ����������磨�ۣ���"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4170018#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 5) {
                if (cm.haveItem(4170018,150)) {
                    cm.gainItem(4170018,-150);
					cm.gainItem(1382037,1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170018#*150�һ���#v1382037##z1382037#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��150�����齱�������һ�������֮�ȣ�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4170018#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 6) {
                if (cm.haveItem(4170018,165)) {
                    cm.gainItem(4170018,-165);
					cm.gainItem(1382049,1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170018#*165�һ���#v1382049##z1382049#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��165�����齱�������һ�����ȸ���ȣ�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4170018#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 7) {
                if (cm.haveItem(4170018,165)) {
                    cm.gainItem(4170018,-165);
					cm.gainItem(1382050,1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170018#*165�һ���#v1382050##z1382050#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��165�����齱�������һ������䳤�ȣ�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4170018#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 8) {
                if (cm.haveItem(4170018,165)) {
                    cm.gainItem(4170018,-165);
					cm.gainItem(1382051,1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170018#*165�һ���#v1382051##z1382051#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��165�����齱�������һ��˰׻����ȣ�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4170018#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 9) {
                if (cm.haveItem(4170018,165)) {
                    cm.gainItem(4170018,-165);
					cm.gainItem(1382052,1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170018#*165�һ���#v1382052##z1382052#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��165�����齱�������һ����������ȣ�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4170018#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 10) {
                if (cm.haveItem(4170018,3000)) {
                    cm.gainItem(4170018,-3000);
					cm.gainItem(1112915,288,288,288,288,1000,1000,288,288,0,0,0,0,0,0);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170018#*200�һ���#v1112915##z1112915#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��3000�����齱�������һ���288ȫ����������ָ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4170018#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 11) {
                if (cm.haveItem(4170018,1000)) {
                    cm.gainItem(4170018,-1000);
					cm.gainItem(1012319,1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170018#*21000�һ���#v1012319##z1012319#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��1000�����齱�������һ���8������죡"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4170018#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 12) {
                if (cm.haveItem(4170018,1000)) {
                    cm.gainItem(4170018,-1000);
					cm.gainItem(1113149,1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170018#*1000�һ���#v1113149##z1113149#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��1000�����齱�������һ���������ָ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4170018#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 13) {
                if (cm.haveItem(4170018,500)) {
                    cm.gainItem(4170018,-500);
					cm.gainItem(4310009,1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170018#*500�һ���#v4310148##z4310009#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��500�����齱�������һ���10�Ǳسɱң�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4170018#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 14) {
                if (cm.haveItem(4170018,2000)) {
                    cm.gainItem(4170018,-2000);
					cm.gainItem(4001255,1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170018#*2000�һ���#v4001255##z4001255#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��2000�����齱�������һ���15�Ǳسɱң�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4170018#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 15) {
                if (cm.haveItem(4170018,100)) {
                    cm.gainItem(4170018,-100);
					cm.gainItem(4310108,1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170018#*100�һ���#v4310108##z4310108#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��100�����齱�������һ���URʱװ��ħ�ң�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4170018#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			

        } else if (status == 2) {
			if (choujiang == 1) {
                if (cm.haveItem(4170018, selection*50)) {
                    cm.gainItem(4170018, -selection*50);
					cm.gainItem(4000463, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170018#*"+selection*50+"�һ���#v4000463#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*50+"�����齱�������һ���"+selection+"�������н�ң�"));
                } else {
                    cm.sendNext("#r�����������������ӵ�е������������²�����");
                    cm.dispose();
                }
            }
			else if (choujiang == 2) {
                if (cm.haveItem(4170018, selection*100)) {
                    cm.gainItem(4170018, -selection*100);
					cm.gainItem(4170012, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4170018#*"+selection*100+"�һ���#v4170012#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���߶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*100+"�����齱�������һ���"+selection+"���سɾ�һ�����"));
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