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
			gsjb += "           "+С�̻� +"#r��ӭ��������ð�յ����նһ�#k"+С�̻� +"\r\n";
			gsjb += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
            gsjb += "                   #r�㵱ǰӵ��#v4310156#*#c4310156#\r\n";
			gsjb += "    #L1##b"+С�̻� +"#v4310156#*80�һ�#v1302333##z1302333##r#l\r\n";
			gsjb += "    #L2##b"+С�̻� +"#v4310156#*80�һ�#v1312199##z1312199##r#l\r\n";
			gsjb += "    #L3##b"+С�̻� +"#v4310156#*80�һ�#v1322250##z1322250##r#l\r\n";
			gsjb += "    #L4##b"+С�̻� +"#v4310156#*80�һ�#v1332274##z1332274##r#l\r\n";
			gsjb += "    #L5##b"+С�̻� +"#v4310156#*80�һ�#v1372222##z1372222##r#l\r\n";
			gsjb += "    #L6##b"+С�̻� +"#v4310156#*80�һ�#v1382259##z1382259##r#l\r\n";
			gsjb += "    #L7##b"+С�̻� +"#v4310156#*80�һ�#v1402251##z1402251##r#l\r\n";
			gsjb += "    #L8##b"+С�̻� +"#v4310156#*80�һ�#v1412177##z1412177##r#l\r\n";
			gsjb += "    #L9##b"+С�̻� +"#v4310156#*80�һ�#v1422184##z1422184##r#l\r\n";
			gsjb += "    #L10##b"+С�̻� +"#v4310156#*80�һ�#v1432214##z1432214##r#l\r\n";
			gsjb += "    #L11##b"+С�̻� +"#v4310156#*80�һ�#v1442268##z1442268##r#l\r\n";
			gsjb += "    #L12##b"+С�̻� +"#v4310156#*80�һ�#v1452252##z1452252##r#l\r\n";
			gsjb += "    #L13##b"+С�̻� +"#v4310156#*80�һ�#v1462239##z1462239##r#l\r\n";
			gsjb += "    #L14##b"+С�̻� +"#v4310156#*80�һ�#v1472261##z1472261##r#l\r\n";
			gsjb += "    #L15##b"+С�̻� +"#v4310156#*80�һ�#v1482216##z1482216##r#l\r\n";
			gsjb += "    #L16##b"+С�̻� +"#v4310156#*80�һ�#v1492231##z1492231##r#l\r\n";
			gsjb += "    #L17##b"+С�̻� +"#v4310156#*70�һ�#v1004422##z1004422##r#l\r\n";
			gsjb += "    #L18##b"+С�̻� +"#v4310156#*70�һ�#v1004423##z1004423##r#l\r\n";
			gsjb += "    #L19##b"+С�̻� +"#v4310156#*70�һ�#v1004424##z1004424##r#l\r\n";
			gsjb += "    #L20##b"+С�̻� +"#v4310156#*70�һ�#v1004425##z1004425##r#l\r\n";
			gsjb += "    #L21##b"+С�̻� +"#v4310156#*70�һ�#v1004426##z1004426##r#l\r\n";
			gsjb += "    #L22##b"+С�̻� +"#v4310156#*70�һ�#v1052882##z1052882##r#l\r\n";
			gsjb += "    #L23##b"+С�̻� +"#v4310156#*70�һ�#v1052887##z1052887##r#l\r\n";
			gsjb += "    #L24##b"+С�̻� +"#v4310156#*70�һ�#v1052888##z1052888##r#l\r\n";
			gsjb += "    #L25##b"+С�̻� +"#v4310156#*70�һ�#v1052889##z1052889##r#l\r\n";
			gsjb += "    #L26##b"+С�̻� +"#v4310156#*70�һ�#v1052890##z1052890##r#l\r\n";
			gsjb += "    #L27##b"+С�̻� +"#v4310156#*60�һ�#v1073030##z1073030##r#l\r\n";
			gsjb += "    #L28##b"+С�̻� +"#v4310156#*60�һ�#v1073032##z1073032##r#l\r\n";
			gsjb += "    #L29##b"+С�̻� +"#v4310156#*60�һ�#v1073033##z1073033##r#l\r\n";
			gsjb += "    #L30##b"+С�̻� +"#v4310156#*60�һ�#v1073034##z1073034##r#l\r\n";
			gsjb += "    #L31##b"+С�̻� +"#v4310156#*60�һ�#v1073035##z1073035##r#l\r\n";
			gsjb += "    #L32##b"+С�̻� +"#v4310156#*60�һ�#v1082636##z1082636##r#l\r\n";
			gsjb += "    #L33##b"+С�̻� +"#v4310156#*60�һ�#v1082637##z1082637##r#l\r\n";
			gsjb += "    #L34##b"+С�̻� +"#v4310156#*60�һ�#v1082638##z1082638##r#l\r\n";
			gsjb += "    #L35##b"+С�̻� +"#v4310156#*60�һ�#v1082639##z1082639##r#l\r\n";
			gsjb += "    #L36##b"+С�̻� +"#v4310156#*60�һ�#v1082640##z1082640##r#l\r\n";
			gsjb += "    #L37##b"+С�̻� +"#v4310156#*60�һ�#v1102775##z1102775##r#l\r\n";
			gsjb += "    #L38##b"+С�̻� +"#v4310156#*60�һ�#v1102794##z1102794##r#l\r\n";
			gsjb += "    #L39##b"+С�̻� +"#v4310156#*60�һ�#v1102795##z1102795##r#l\r\n";
			gsjb += "    #L40##b"+С�̻� +"#v4310156#*60�һ�#v1102796##z1102796##r#l\r\n";
			gsjb += "    #L41##b"+С�̻� +"#v4310156#*60�һ�#v1102797##z1102797##r#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4310156, 80)) {
                    cm.gainItem(4310156, -80);
					cm.gainItem(1302333, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*80�һ���#v1302333##z1302333#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��80����������˹�Ҷһ��˰�������˹������"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4310156, 80)) {
                    cm.gainItem(4310156, -80);
					cm.gainItem(1312199, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*80�һ���#v1312199##z1312199#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��80����������˹�Ҷһ��˰�������˹ս����"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 3) {
                if (cm.haveItem(4310156, 80)) {
                    cm.gainItem(4310156, -80);
					cm.gainItem(1322250, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*80�һ���#v1322250##z1322250#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��80����������˹�Ҷһ��˰�������˹ս����"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 4) {
                if (cm.haveItem(4310156, 80)) {
                    cm.gainItem(4310156, -80);
					cm.gainItem(1332274, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*80�һ���#v1332274##z1332274#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��80����������˹�Ҷһ��˰�������˹����ն��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 5) {
                if (cm.haveItem(4310156, 80)) {
                    cm.gainItem(4310156, -80);
					cm.gainItem(1372222, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*80�һ���#v1372222##z1372222#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��80����������˹�Ҷһ��˰�������˹���ȣ�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 6) {
                if (cm.haveItem(4310156, 80)) {
                    cm.gainItem(4310156, -80);
					cm.gainItem(1382259, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*80�һ���#v1382259##z1382259#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��80����������˹�Ҷһ��˰�������˹���ȣ�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 7) {
                if (cm.haveItem(4310156, 80)) {
                    cm.gainItem(4310156, -80);
					cm.gainItem(1402251, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*80�һ���#v1402251##z1402251#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��80����������˹�Ҷһ��˰�������˹��󵶣�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 8) {
                if (cm.haveItem(4310156, 80)) {
                    cm.gainItem(4310156, -80);
					cm.gainItem(1412177, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*80�һ���#v1412177##z1412177#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��80����������˹�Ҷһ��˰�������˹�󸫣�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 9) {
                if (cm.haveItem(4310156, 80)) {
                    cm.gainItem(4310156, -80);
					cm.gainItem(1422184, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*80�һ���#v1422184##z1422184#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��80����������˹�Ҷһ��˰�������˹�󴸣�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 10) {
                if (cm.haveItem(4310156, 80)) {
                    cm.gainItem(4310156, -80);
					cm.gainItem(1432214, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*80�һ���#v1432214##z1432214#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��80����������˹�Ҷһ��˰�������˹��͸ǹ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 11) {
                if (cm.haveItem(4310156, 80)) {
                    cm.gainItem(4310156, -80);
					cm.gainItem(1442268, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*80�һ���#v1442268##z1442268#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��80����������˹�Ҷһ��˰�������˹���鿪ɽꪣ�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 12) {
                if (cm.haveItem(4310156, 80)) {
                    cm.gainItem(4310156, -80);
					cm.gainItem(1452252, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*80�һ���#v1452252##z1452252#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��80����������˹�Ҷһ��˰�������˹����"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 13) {
                if (cm.haveItem(4310156, 80)) {
                    cm.gainItem(4310156, -80);
					cm.gainItem(1462239, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*80�һ���#v1462239##z1462239#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��80����������˹�Ҷһ��˰�������˹��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 14) {
                if (cm.haveItem(4310156, 80)) {
                    cm.gainItem(4310156, -80);
					cm.gainItem(1472261, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*80�һ���#v1472261##z1472261#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��80����������˹�Ҷһ��˰�������˹����ȭ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 15) {
                if (cm.haveItem(4310156, 80)) {
                    cm.gainItem(4310156, -80);
					cm.gainItem(1482216, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*80�һ���#v1482216##z1482216#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��80����������˹�Ҷһ��˰�������˹ȭ�ף�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 16) {
                if (cm.haveItem(4310156, 80)) {
                    cm.gainItem(4310156, -80);
					cm.gainItem(1492231, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*80�һ���#v1492231##z1492231#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��80����������˹�Ҷһ��˰�������˹ǹ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 17) {
                if (cm.haveItem(4310156, 70)) {
                    cm.gainItem(4310156, -70);
					cm.gainItem(1004422, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*70�һ���#v1004422##z1004422#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��70����������˹�Ҷһ��˰�������˹��ʿͷ����"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 18) {
                if (cm.haveItem(4310156, 70)) {
                    cm.gainItem(4310156, -70);
					cm.gainItem(1004423, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*70�һ���#v1004423##z1004423#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��70����������˹�Ҷһ��˰�������˹��ʦñ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 19) {
                if (cm.haveItem(4310156, 70)) {
                    cm.gainItem(4310156, -70);
					cm.gainItem(1004424, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*70�һ���#v1004424##z1004424#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��70����������˹�Ҷһ��˰�������˹������ñ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 20) {
                if (cm.haveItem(4310156, 70)) {
                    cm.gainItem(4310156, -70);
					cm.gainItem(1004425, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*70�һ���#v1004425##z1004425#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��70����������˹�Ҷһ��˰�������˹����ñ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 21) {
                if (cm.haveItem(4310156, 70)) {
                    cm.gainItem(4310156, -70);
					cm.gainItem(1004426, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*70�һ���#v1004426##z1004426#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��70����������˹�Ҷһ��˰�������˹����ñ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 22) {
                if (cm.haveItem(4310156, 70)) {
                    cm.gainItem(4310156, -70);
					cm.gainItem(1052882, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*70�һ���#v1052882##z1052882#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��70����������˹�Ҷһ��˰�������˹��ʿ��װ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 23) {
                if (cm.haveItem(4310156, 70)) {
                    cm.gainItem(4310156, -70);
					cm.gainItem(1052887, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*70�һ���#v1052887##z1052887#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��70����������˹�Ҷһ��˰�������˹ħ��ʦ��װ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 24) {
                if (cm.haveItem(4310156, 70)) {
                    cm.gainItem(4310156, -70);
					cm.gainItem(1052888, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*70�һ���#v1052888##z1052888#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��70����������˹�Ҷһ��˰�������˹��������װ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 25) {
                if (cm.haveItem(4310156, 70)) {
                    cm.gainItem(4310156, -70);
					cm.gainItem(1052889, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*70�һ���#v1052889##z1052889#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��70����������˹�Ҷһ��˰�������˹������װ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 26) {
                if (cm.haveItem(4310156, 70)) {
                    cm.gainItem(4310156, -70);
					cm.gainItem(1052890, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*70�һ���#v1052890##z1052890#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��70����������˹�Ҷһ��˰�������˹������װ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 27) {
                if (cm.haveItem(4310156, 60)) {
                    cm.gainItem(4310156, -60);
					cm.gainItem(1073030, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*60�һ���#v1073030##z1073030#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60����������˹�Ҷһ��˰�������˹��ʿЬ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 28) {
                if (cm.haveItem(4310156, 60)) {
                    cm.gainItem(4310156, -60);
					cm.gainItem(1073032, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*60�һ���#v1073032##z1073032#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60����������˹�Ҷһ��˰�������˹��ʦЬ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 29) {
                if (cm.haveItem(4310156, 60)) {
                    cm.gainItem(4310156, -60);
					cm.gainItem(1073033, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*60�һ���#v1073033##z1073033#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60����������˹�Ҷһ��˰�������˹������Ь��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 30) {
                if (cm.haveItem(4310156, 60)) {
                    cm.gainItem(4310156, -60);
					cm.gainItem(1073034, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*60�һ���#v1073034##z1073034#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60����������˹�Ҷһ��˰�������˹����Ь��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 31) {
                if (cm.haveItem(4310156, 60)) {
                    cm.gainItem(4310156, -60);
					cm.gainItem(1073035, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*60�һ���#v1073035##z1073035#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60����������˹�Ҷһ��˰�������˹����Ь��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 32) {
                if (cm.haveItem(4310156, 60)) {
                    cm.gainItem(4310156, -60);
					cm.gainItem(1082636, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*60�һ���#v1082636##z1082636#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60����������˹�Ҷһ��˰�������˹��ʿ���ף�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 33) {
                if (cm.haveItem(4310156, 60)) {
                    cm.gainItem(4310156, -60);
					cm.gainItem(1082637, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*60�һ���#v1082637##z1082637#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60����������˹�Ҷһ��˰�������˹��ʦ���ף�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 34) {
                if (cm.haveItem(4310156, 60)) {
                    cm.gainItem(4310156, -60);
					cm.gainItem(1082638, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*60�һ���#v1082638##z1082638#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60����������˹�Ҷһ��˰�������˹���������ף�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 35) {
                if (cm.haveItem(4310156, 60)) {
                    cm.gainItem(4310156, -60);
					cm.gainItem(1082639, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*60�һ���#v1082639##z1082639#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60����������˹�Ҷһ��˰�������˹�������ף�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 36) {
                if (cm.haveItem(4310156, 60)) {
                    cm.gainItem(4310156, -60);
					cm.gainItem(1082640, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*60�һ���#v1082640##z1082640#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60����������˹�Ҷһ��˰�������˹�������ף�"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 37) {
                if (cm.haveItem(4310156, 60)) {
                    cm.gainItem(4310156, -60);
					cm.gainItem(1102775, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*60�һ���#v1102775##z1102775#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60����������˹�Ҷһ��˰�������˹��ʿ���磡"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 38) {
                if (cm.haveItem(4310156, 60)) {
                    cm.gainItem(4310156, -60);
					cm.gainItem(1102794, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*60�һ���#v1102794##z1102794#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60����������˹�Ҷһ��˰�������˹ħ��ʦ���磡"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 39) {
                if (cm.haveItem(4310156, 60)) {
                    cm.gainItem(4310156, -60);
					cm.gainItem(1102795, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*60�һ���#v1102795##z1102795#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60����������˹�Ҷһ��˰�������˹���������磡"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 40) {
                if (cm.haveItem(4310156, 60)) {
                    cm.gainItem(4310156, -60);
					cm.gainItem(1102796, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*60�һ���#v1102796##z1102796#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60����������˹�Ҷһ��˰�������˹�������磡"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 41) {
                if (cm.haveItem(4310156, 60)) {
                    cm.gainItem(4310156, -60);
					cm.gainItem(1102797, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310156#*60�һ���#v1102797##z1102797#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���նһ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60����������˹�Ҷһ��˰�������˹�������磡"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310156#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
        } else {
            cm.dispose();
        }
    }
}