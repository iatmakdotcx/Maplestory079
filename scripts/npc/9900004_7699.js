/*
*   �����̵꣬��ǿ��  NPC
*   By: ZreHy_MS               �����Ҫ�Ķ����������޸ģ����˿����õ�~
*/

var status = 0;
var ���ַ� = "#fEffect/CharacterEff/1032063/0/0#";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			 var text = "";
			text +="#e#d��ӭ����#r����ð�յ�#d     #k#n#l\r\n\r\n"
			text +="#L12#��ȡ �ڲ�8000�������� #k#n#l\r\n\r\n"
			text +="#L9#��ȡ �����ܲ��� #k#n#l\r\n\r\n"
			text +="#L0#��ȡ5E���#k#n#l\r\n\r\n"
			text +="#L1#��ȡ100W��ȯ#k#n#l\r\n\r\n"
			//text +="#L2#��ȡ1000�ƽ��Ҷ#k#n#l\r\n\r\n"
			text +="#L3#��ȡ1000�����#k#n#l\r\n\r\n"
			text +="#L4#��ȡ100��ϯѫ��#k#n#l\r\n\r\n"
			text +="#L5#��ȡ1000ˮ�� ��Ʊ #k#n#l\r\n\r\n"
			text +="#L6#��ȡ50���س�#k#n#l\r\n\r\n"
			text +="#L7#��ȡ500�������#k#n#l\r\n\r\n"
			text +="#L8#��ȡ ���� 500����Ҷ��#k#n#l\r\n\r\n"
			//text +="#L9#��ȡ �����ܲ��� #k#n#l\r\n\r\n"
			text +="#L10#��ȡ ���������ɷ������������ܶһ���#k#n#l\r\n\r\n"
			//text +="#L11#��ȡ ������100�� #k#n#l\r\n\r\n"
			//text +="#L13#��ȡ �������� #k#n#l\r\n\r\n"
			//text +="#L14#��ȡ100��������Ʊ#k#n#l\r\n\r\n"
			//text +="#L15#��ȡ20����ʯ���#k#n#l\r\n\r\n"
			//text +="#L16#��ȡ100���Ͷ�����#k#n#l\r\n\r\n"
			//text +="#L17#��ȡ100��װ��ǿ��ˮ��#k#n#l\r\n\r\n"
			
			
            cm.sendSimple (text);
        } else if (status == 1) {
            switch(selection) {

			case 0:
				cm.gainMeso(500000000);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����ð�յ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ���ȡ����5E��ң�"));
				cm.dispose();
				break;
			case 1: 
				cm.gainNX(1000000);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����ð�յ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ���ȡ����100W��ȯ��"));
				cm.dispose();
				break;
			case 2: 
				cm.gainItem(4000313,1000);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����ð�յ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ���ȡ����1000�ƽ��Ҷ��"));
				cm.dispose();
            break;
            case 3: 
				cm.gainItem(4000487,1000);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����ð�յ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ���ȡ����1000��Ӱ�ң�"));
				cm.dispose();
				break;
            case 4: 
				cm.gainItem(4032398,100);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����ð�յ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ���ȡ����100��ϯͼ�£�"));
				cm.dispose();
				break;
			case 15: 
				cm.gainItem(4011007,20);
				cm.gainItem(4011008,20);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����ð�յ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ���ȡ����20��ʯ��ﮣ�"));
				cm.dispose();
				break;
			case 16: 
				cm.gainItem(4001266,100);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����ð�յ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ���ȡ����100�Ͷ����£�"));
				cm.dispose();
				break;
			case 17: 
				cm.gainItem(4251202,100);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����ð�յ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ���ȡ����100װ��ǿ��ˮ����"));
				cm.dispose();
				break;
				case 5: 
				cm.gainItem(4251202,1000);
				cm.gainItem(4002000,1000);
				cm.gainItem(4002001,1000);
				cm.gainItem(4002002,1000);
				cm.gainItem(4002003,1000);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����ð�յ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ���ȡ����ˮ����Ʊ��"));
				cm.dispose();
				break;
				case 6: 
				cm.gainItem(4310012,50);
				cm.gainItem(2044003,50);
				cm.gainItem(2044303,50);
				cm.gainItem(2044503,50);
				cm.gainItem(2044603,50);
				cm.gainItem(2043303,50);
				cm.gainItem(2043703,50);
				cm.gainItem(2043803,50);
				cm.gainItem(2044703,50);
				cm.gainItem(2044908,50);
				cm.gainItem(2044815,50);
				cm.gainItem(2044403,50);
				cm.gainItem(2044203,50);
				cm.gainItem(2044103,50);
				cm.gainItem(2043203,50);
				
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����ð�յ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ���ȡ����50�سɱң�"));
				cm.dispose();
				break;
				case 7: 
				cm.gainItem(2049100,500);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����ð�յ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ���ȡ����500������ᣡ"));
				cm.dispose();
				break;
				case 8: 
				cm.gainItem(4031456,500);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����ð�յ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ���ȡ����500������Ҷ�飡"));
				cm.dispose();
				break;
				case 9: 
				cm.gainItem(4000011, 50);
			    cm.gainItem(4000009, 50);
			    cm.gainItem(4000002, 50);
				cm.gainItem(4000034, 50);
				cm.gainItem(4000017, 50);
				cm.gainMeso(10000000);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����ð�յ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ���ȡ���������ܲ��ϣ�"));
				cm.dispose();
				break;
				case 10: 
				cm.gainItem(3700040,1);
				cm.gainItem(3700048,1);
				cm.gainItem(3700051,1);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����ð�յ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ���ȡ���� �������������ܶһ��飡"));
				cm.dispose();
				break;
				case 11: 
				cm.gainItem(2370000,100);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����ð�յ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ���ȡ����  ������100����"));
				cm.dispose();
				break;
				case 12: 
				//cm.setmonezb(+8000)
				cm.setzb(+8000)
				cm.setmoneyb(+8000)
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����ð�յ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ���ȡ����  �������֣�"));
				cm.dispose();
				break;
				case 13: 
				
				cm.gainItem(1402016, 3);
				cm.gainItem(1432030, 3);
				cm.gainItem(1472053, 3);
				cm.gainItem(1382035, 3);
				cm.gainItem(1452019, 3);
				cm.gainItem(1462015, 3);
				cm.gainItem(1492012, 3);
				cm.gainItem(1332052, 3);
				cm.gainItem(1442044, 3);
				cm.gainItem(1482012, 3);
				//cm.gainItem(4011007, 1);
				//cm.setmoneyb(+100000)
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����ð�յ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ���ȡ����  ����������"));
				cm.dispose();
				break;
				case 14: 
				
				cm.gainItem(4002000, 100);
				cm.gainItem(4002001, 100);
				cm.gainItem(4002002, 100);
				cm.gainItem(4002003, 100);
				//cm.gainItem(4011007, 1);
				//cm.setmoneyb(+100000)
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����ð�յ�" + " : " + "��ϲ��" + cm.getChar().getName() + "���ɹ���ȡ����100������Ʊ��"));
				cm.dispose();
				break;
            }
        }
    }
}
