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
var beilede = 0;
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
			gsjb += "          "+С�̻� +"#r��ӭ��������ð�յ����յ¶һ�#k"+С�̻� +"\r\n";
			gsjb += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
            gsjb += "                      #r�㵱ǰӵ��\r\n                #v4310098#*#c4310098#      #v4310097#*#c4310097#\r\n";
			gsjb += "#L1##b"+С�̻� +"#v4310098#*10�һ�#v4310097##z4310097##r#l\r\n";
			gsjb += "#L2##b"+С�̻� +"#v4310098#*40�һ�#v1032220##z1032220##r#l\r\n";
			//gsjb += "#L3##b"+С�̻� +"#v4310098#*40�һ�#v1113072##z1113072##r#l\r\n";
			gsjb += "#L4##b"+С�̻� +"#v4310098#*40�һ�#v1122264##z1122264##r#l\r\n";
			gsjb += "#L5##b"+С�̻� +"#v4310098#*40�һ�#v1132243##z1132243##r#l\r\n";
			gsjb += "#L6##b"+С�̻� +"#v4310098#*60+#v1032220#�һ�#v1032221##z1032221##r#l\r\n";
			//gsjb += "#L7##b"+С�̻� +"#v4310098#*60+#v1113072#�һ�#v1113073##z1113073##r#l\r\n";
			gsjb += "#L8##b"+С�̻� +"#v4310098#*60+#v1122264#�һ�#v1122265##z1122265##r#l\r\n";
			gsjb += "#L9##b"+С�̻� +"#v4310098#*60+#v1132243#�һ�#v1132244##z1132244##r#l\r\n";
			gsjb += "#L10##b"+С�̻� +"#v4310098#*90+#v1032221#�һ�#v1032222##z1032222##r#l\r\n";
			//gsjb += "#L11##b"+С�̻� +"#v4310098#*90+#v1113073#�һ�#v1113074##z1113074##r#l\r\n";
			gsjb += "#L12##b"+С�̻� +"#v4310098#*90+#v1122265#�һ�#v1122266##z1122266##r#l\r\n";
			gsjb += "#L13##b"+С�̻� +"#v4310098#*90+#v1132244#�һ�#v1132245##z1132245##r#l\r\n";
			gsjb += "#L14##b"+С�̻� +"#v4310097#*50+#v1032222#�һ�#v1032223##z1032223##r#l\r\n";
			//gsjb += "#L15##b"+С�̻� +"#v4310097#*50+#v1113074#�һ�#v1113075##z1113075##r#l\r\n";
			gsjb += "#L16##b"+С�̻� +"#v4310097#*50+#v1122266#�һ�#v1122267##z1122267##r#l\r\n";
			gsjb += "#L17##b"+С�̻� +"#v4310097#*50+#v1132245#�һ�#v1132246##z1132246##r#l\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.haveItem(4310098) == 0) {
                    cm.sendNext("#r��ı�����û���㹻��#v4310098#�����ܽ��жһ���");
                    status = -1;
                } else {
                    beilede = 1;
					cm.sendGetNumber("#r��������Ҫ�һ�#v4310097#������:\r\n#b��ǰӵ��#v4310098#������Ϊ��#r#c4310098#\r\n", 1, 1, 2000);
                }
            }               
			else if (selection == 2) {
                if (cm.haveItem(4310098, 40)) {
                    cm.gainItem(4310098, -40);
					cm.gainItem(1032220, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310098#*40�һ���#v1032220##z1032220#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���յ¶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��40���ͼ����յ±Ҷһ��˵ͼ����յ¶�����"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310098#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 3) {
                if (cm.haveItem(4310098, 40)) {
                    cm.gainItem(4310098, -40);
					cm.gainItem(1113072, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310100#*40�һ���#v1113072##z1113072#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���յ¶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��40���ͼ����յ±Ҷһ��˵ͼ����յ½�ָ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310098#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 4) {
                if (cm.haveItem(4310098, 40)) {
                    cm.gainItem(4310098, -40);
					cm.gainItem(1122264, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310100#*40�һ���#v1122264##z1122264#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���յ¶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��40���ͼ����յ±Ҷһ��˵ͼ����յ¿�ӡ��׹��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310098#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 5) {
                if (cm.haveItem(4310098, 40)) {
                    cm.gainItem(4310098, -40);
					cm.gainItem(1132243, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310098#*40�һ���#v1132243##z1132243#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���յ¶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��40���ͼ����յ±Ҷһ��˵ͼ����յ¿�ӡ������"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310098#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 6) {
                if (cm.haveItem(4310098, 60) && cm.haveItem(1032220,1)) {
                    cm.gainItem(4310098, -60);
					cm.gainItem(1032220, -1);
					cm.gainItem(1032221, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310098#*60+#v1032220#�һ���#v1032221##z1032221#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���յ¶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60���ͼ����յ±�+�ͼ����յ¶����һ����м����յ¶�����"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310098#��#v1032220#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 7) {
                if (cm.haveItem(4310098, 60) && cm.haveItem(1113072,1)) {
                    cm.gainItem(4310098, -60);
					cm.gainItem(1113072, -1);
					cm.gainItem(1113073, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310098#*60+#v1113072#�һ���#v1113073##z1113073#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���յ¶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60���ͼ����յ±�+�ͼ����յ½�ָ�һ����м����յ½�ָ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310098#��#v1113072#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 8) {
                if (cm.haveItem(4310098, 60) && cm.haveItem(1122264,1)) {
                    cm.gainItem(4310098, -60);
					cm.gainItem(1122264, -1);
					cm.gainItem(1122265, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310098#*60+#v1122264#�һ���#v1122265##z1122265#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���յ¶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60���ͼ����յ±�+�ͼ����յ¿�ӡ��׹�һ����м����յ¿�ӡ��׹��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310098#��#v1122264#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 9) {
                if (cm.haveItem(4310098, 60) && cm.haveItem(1132243,1)) {
                    cm.gainItem(4310098, -60);
					cm.gainItem(1132243, -1);
					cm.gainItem(1132244, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310098#*60+#v1132243#�һ���#v1132244##z1132244#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���յ¶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��60���ͼ����յ±�+�ͼ����յ¿�ӡ�����һ����м����յ¿�ӡ������"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310098#��#v1132243#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 10) {
                if (cm.haveItem(4310098, 90) && cm.haveItem(1032221,1)) {
                    cm.gainItem(4310098, -90);
					cm.gainItem(1032221, -1);
					cm.gainItem(1032222, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310098#*90+#v1032221#�һ���#v1032222##z1032222#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���յ¶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��90���ͼ����յ±�+�м����յ¶����һ��˸߼����յ¶�����"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310098#��#v1032221#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 11) {
                if (cm.haveItem(4310098, 90) && cm.haveItem(1113073,1)) {
                    cm.gainItem(4310098, -90);
					cm.gainItem(1113073, -1);
					cm.gainItem(1113074, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310098#*90+#v1113073#�һ���#v1113074##z1113074#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���յ¶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��90���ͼ����յ±�+�м����յ½�ָ�һ��˸߼����յ½�ָ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310098#��#v1113073#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 12) {
                if (cm.haveItem(4310098, 90) && cm.haveItem(1122265,1)) {
                    cm.gainItem(4310098, -90);
					cm.gainItem(1122265, -1);
					cm.gainItem(1122266, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310098#*90+#v1122265#�һ���#v1122266##z1122266#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���յ¶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��90���ͼ����յ±�+�м����յ¿�ӡ��׹�һ��˸߼����յ¿�ӡ��׹��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310098#��#v1122265#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 13) {
                if (cm.haveItem(4310098, 90) && cm.haveItem(1132244,1)) {
                    cm.gainItem(4310098, -90);
					cm.gainItem(1132244, -1);
					cm.gainItem(1132245, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310098#*90+#v1132244#�һ���#v1132245##z1132245#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���յ¶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��90���ͼ����յ±�+�м����յ¿�ӡ�����һ��˸߼����յ¿�ӡ������"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310098#��#v1132244#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 14) {
                if (cm.haveItem(4310097, 50) && cm.haveItem(1032222,1)) {
                    cm.gainItem(4310097, -50);
					cm.gainItem(1032222, -1);
					cm.gainItem(1032223, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310097#*50+#v1032222#�һ���#v1032223##z1032223#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���յ¶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��50�����յ±�+�߼����յ¶����һ�����߼����յ¶�����"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310097#��#v1032222#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 15) {
                if (cm.haveItem(4310097, 50) && cm.haveItem(1113074,1)) {
                    cm.gainItem(4310097, -50);
					cm.gainItem(1113074, -1);
					cm.gainItem(1113075, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310097#*50+#v1113074#�һ���#v1113075##z1113075#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���յ¶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��50�����յ±�+�߼����յ½�ָ�һ�����߼����յ½�ָ��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310097#��#v1113074#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 16) {
                if (cm.haveItem(4310097, 50) && cm.haveItem(1122266,1)) {
                    cm.gainItem(4310097, -50);
					cm.gainItem(1122266, -1);
					cm.gainItem(1122267, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310097#*50+#v1122266#�һ���#v1122267##z1122267#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���յ¶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��50�����յ±�+�߼����յ¿�ӡ��׹�һ�����߼����յ¿�ӡ��׹��"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310097#��#v1122266#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
			else if (selection == 17) {
                if (cm.haveItem(4310097, 50) && cm.haveItem(1132245,1)) {
                    cm.gainItem(4310097, -50);
					cm.gainItem(1132245, -1);
					cm.gainItem(1132246, 1);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310097#*50+#v1132245#�һ���#v1132246##z1132246#��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���յ¶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��50�����յ±�+�߼����յ¿�ӡ�����һ�����߼����յ¿�ӡ������"));
                } else {
                    cm.sendNext("#r��ı�����û���㹻��#v4310097#��#v1132245#�����ܽ��жһ���");
                    cm.dispose();
                }
            }
		} else if (status == 2) {
			if (beilede == 1) {
                if (cm.haveItem(4310098, selection*10)) {
                    cm.gainItem(4310098, -selection*10);
					cm.gainItem(4310097, selection);
                    cm.sendOk("#r���ѳɹ�ʹ��#v4310098#*"+selection*10+"�һ���#v4310097#*"+selection+"��");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "���յ¶һ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ�ʹ��"+selection*10+"���ͼ����յ±Ҷһ���"+selection+"�����յ±ң�"));
                } else {
                    cm.sendNext("#rӵ�е�#v4310098#��������һ������#v4310097#�����������²�����");
                    cm.dispose();
                }
            }
        } else {
            cm.dispose();
        }
    }
}