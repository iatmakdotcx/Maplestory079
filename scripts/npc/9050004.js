/*�ϳ�NPC ����:bay ��*/
//function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��ӭ���٣�");
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
            for (i = 0; i < 60; i++) {
                text += "";
            }
            text +="    �ϳ�֮ǰ,���ȼ�� ���� ÿһ����Ŀ �Ƿ���������λ����? �ٽ��кϳ�, ����ϳɺ󲻼�,���Ŷ!\r\n";
            text += "#L1##d#z1072743##v1072743#��ħ���20-40#k#l\r\n";
            text += "#L2##d#z1072744##v1072744#��ħ���20-40#k#l\r\n";
            text += "#L3##d#z1072745##v1072745#��ħ���20-40#k#l\r\n";
            text += "#L4##d#z1072746##v1072746#��ħ���20-40#k#l\r\n";
            text += "#L5##d#z1072747##v1072747#��ħ���20-40#k#l\r\n";
            //text += "#L6##d��ά +15 HP/MP+ 150 ˫�� +90 ���� +12#v1032142##k#l\r\n";
			//text += "#L7##d��ά/��/ħ +25 HP/MP+ 150 ˫��+150 ���� +25#v1032191##k#l\r\n";
            cm.sendSimple(text);
			var r = Math.ceil(Math.random() * 1000);
        } else if (selection == 1) {
            if (cm.haveItem(4001341, 100) && cm.haveItem(4011007, 1)&& cm.haveItem(1072369, 1)&& cm.haveItem(1072732, 1)&& cm.getMeso() >=20000000) {
                var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(4001341,-100);//��Ƭ
				cm.gainItem(4011007,-1);//��ʯ
				cm.gainItem(1072369,-1);//Ь��
				cm.gainItem(1072732,-1);//Ь��
                cm.gainMeso(-20000000);
				cm.gainItem(1072743,0,0,0,0,0,0,r,r,0,0,0,0,0,0);
                cm.sendOk("�ϳ�#v1072737#�ɹ���");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˲���֮�Ͷ�����O(��_��)O~",true).getBytes());
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4001341#*100��#v4011007#*1��#v1072369#*1��#v1072732#*1��2000����");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.haveItem(4001341, 100) && cm.haveItem(4011007, 1)&& cm.haveItem(1072369, 1)&& cm.haveItem(1072733, 1)&& cm.getMeso() >=20000000) {
                var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(4001341,-100);//��Ƭ
				cm.gainItem(4011007,-1);//��ʯ
				cm.gainItem(1072369,-1);//Ь��
				cm.gainItem(1072733,-1);//Ь��
                cm.gainMeso(-20000000);
				cm.gainItem(1072744,0,0,0,0,0,0,r,r,0,0,0,0,0,0);
                cm.sendOk("�ϳ�#v1072744#�ɹ���");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˲���֮�Ͷ�����O(��_��)O~",true).getBytes());
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4001341#*100��#v4011007#*1��#v1072369#*1��#v1072733#*1��2000����");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.haveItem(4001341, 100) && cm.haveItem(4011007, 1)&& cm.haveItem(1072369, 1)&& cm.haveItem(1072734, 1)&& cm.getMeso() >=20000000) {
                var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(4001341,-100);//��Ƭ
				cm.gainItem(4011007,-1);//��ʯ
				cm.gainItem(1072369,-1);//Ь��
				cm.gainItem(1072734,-1);//Ь��
                cm.gainMeso(-20000000);
				cm.gainItem(1072745,0,0,0,0,0,0,r,r,0,0,0,0,0,0);
                cm.sendOk("�ϳ�#v1072745#�ɹ���");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˲���֮�Ͷ�����O(��_��)O~",true).getBytes());
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4001341#*100��#v4011007#*1��#v1072369#*1��#v1072734#*1��2000����");
                cm.dispose();
            }
        } else if (selection == 4) {
            if (cm.haveItem(4001341, 100) && cm.haveItem(4011007, 1)&& cm.haveItem(1072369, 1)&& cm.haveItem(1072735, 1)&& cm.getMeso() >=20000000) {
                var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(4001341,-100);//��Ƭ
				cm.gainItem(4011007,-1);//��ʯ
				cm.gainItem(1072369,-1);//Ь��
				cm.gainItem(1072735,-1);//Ь��
                cm.gainMeso(-20000000);
				cm.gainItem(1072746,0,0,0,0,0,0,r,r,0,0,0,0,0,0);
                cm.sendOk("�ϳ�#v1072746#�ɹ���");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˲���֮�Ͷ�����O(��_��)O~",true).getBytes());
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4001341#*100��#v4011007#*1��#v1072369#*1��#v1072735#*1��2000����");
                cm.dispose();
            }
        } else if (selection == 5) {
            if (cm.haveItem(4001341, 100) && cm.haveItem(4011007, 1)&& cm.haveItem(1072369, 1)&& cm.haveItem(1072736, 1)&& cm.getMeso() >=20000000) {
                var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(4001341,-100);//��Ƭ
				cm.gainItem(4011007,-1);//��ʯ
				cm.gainItem(1072369,-1);//Ь��
				cm.gainItem(1072736,-1);//Ь��
                cm.gainMeso(-20000000);
				cm.gainItem(1072747,0,0,0,0,0,0,r,r,0,0,0,0,0,0);
                cm.sendOk("�ϳ�#v1072747#�ɹ���");
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˲���֮�Ͷ�����O(��_��)O~",true).getBytes());
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4001341#*100��#v4011007#*1��#v1072369#*1��#v1072736#*1��2000����");
                cm.dispose();
            }
        } else if (selection == 6) {
           if (cm.haveItem(4000313, 400) && cm.haveItem(1032084, 1) && cm.haveItem(4031560, 30) && cm.haveItem(4031561, 30) && cm.haveItem(4002000, 40) && cm.haveItem(4002001, 40) && cm.haveItem(4002002, 30) && cm.haveItem(4031456, 80) && cm.haveItem(4000244, 10) && cm.haveItem(4310143, 8) && cm.getMeso() >=2000000) {
                cm.gainItem(4000313,-400);//���Ҷ
				cm.gainItem(1032084,-1);//busuzhike
				cm.gainItem(4031560,-30);//���³
                cm.gainItem(4031561,-30);//������Ʊ
				cm.gainItem(4002000,-40);//����ţ
				cm.gainItem(4002001,-40);//����ţ
				cm.gainItem(4002002,-30);//ľ��
				cm.gainItem(4031456,-80);//��Ҷ��
				cm.gainItem(4000245,-10);//linghun
				cm.gainItem(4310143,-8);
                cm.gainMeso(-2000000);
				cm.gainItem(1032142,15,15,15,15,150,150,15,15,90,90,12,12,0,0);
                cm.sendOk("�ϳ�#v1032142#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*400�� #v4011007#*1�� #v1032084#*1��  #v4031560#*30��  #v4031561#*30��  #v4002000#*40��  #v4002001#*40�� #v4002002#*30�� #v4031456#*80��  #v4000245#*10�� #v4310143#*8�� 200����");
                cm.dispose();
            }
		} else if (selection == 7) {
           if (cm.haveItem(4000313, 800) && cm.haveItem(1032142, 1) && cm.haveItem(4031560, 60) && cm.haveItem(4031561, 60) && cm.haveItem(4002000, 80) && cm.haveItem(4002001, 80) && cm.haveItem(4002002, 60) && cm.haveItem(4031456, 160) && cm.haveItem(4021010, 5) && cm.haveItem(4000463, 10) && cm.getMeso() >=20000000) {
                cm.gainItem(4000313,-800);//���Ҷ
				cm.gainItem(1032142,-1);//busuzhike
				cm.gainItem(4031560,-60);//���³
                cm.gainItem(4031561,-60);//������Ʊ
				cm.gainItem(4002000,-80);//����ţ
				cm.gainItem(4002001,-80);//����ţ
				cm.gainItem(4002002,-60);//ľ��
				cm.gainItem(4031456,-160);//��Ҷ��
				cm.gainItem(4021010,-5);//linghun
				cm.gainItem(4000463,-10);
                cm.gainMeso(-20000000);
				cm.gainItem(1032191,25,25,25,25,150,150,25,25,150,150,25,25,0,0);
                cm.sendOk("�ϳ�#v1032191#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*800��  #v4011007#*1�� #v1032142#*1��  #v4031560#*60��  #v4031561#*60��  #v4002000#*80�� #v4002001#*80�� #v4002002#*60�� #v4031456#*160��  #v4021010#*5�� #v4000463#*10�� 2000����");
                cm.dispose();
            }
			}
		}
    }


