var status = 0;
var ��ˮ�� = 4021008;
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var ���� ="#fMap/MapHelper/weather/witch/3#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var �Ҹ� = "#k��ܰ��ʾ���κηǷ��������ҷ�Ŵ���.��ɱ��������.";
var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) { 
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
		var a1 = "#L1#"+С�̻�+"#b#v4310025#*500�һ�#d#v1052460##l  #L10#"+С�̻�+"#b#v4310025#*500�һ�#d#v1122197##l\r\n\r\n";
	    var a2 = "#L3#"+С�̻�+"#b#v4310025#*60�һ�#d#v4005000#*10#l#L4#"+С�̻�+"#b#v4310025#*60�һ�#d#v4005001#*10#l\r\n\r\n";
		var a10 = "#L5#"+С�̻�+"#b#v4310025#*60�һ�#d#v4005002#*10#l#L6#"+С�̻�+"#b#v4310025#*60�һ�#d#v4005003#*10#l\r\n\r\n";
	    var a3 = "#L7#"+С�̻�+"#b#v4310025#*100�һ�#d#v4005004#*10#l#L8#"+С�̻�+"#b#v4310025#*100�һ�#d#v2049100#*1#l\r\n\r\n";
	    var a4 = "#L9#"+С�̻�+"#v4310025#*200#b�һ�#d#v3992025#*100#l\r\n\r\n";

	    

         cm.sendSimple(""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\t     "+ С�̻� +"#r��ӭ�����´����ؼ���Ҷһ�����"+ С�̻� +"\r\n"+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n" + a1 + ""+a2+""+a10+""+a3+""+a4+"");//"+a6+""+a7+""+a8+""+a9+""+a10+""+a11+""+a12+""+a13+""+a14+""+a15+""+a16+"
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
                        cm.dispose();

	    } else if (selection == 1) {
		if (cm.haveItem(4310025,500)) {
			cm.gainItem(4310025, -500);
			cm.gainItem(1052460, 1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�´����ؼ���Ҷһ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���������֮��װ������",true).getBytes());
			cm.sendOk("��ϲ�㣬�Ѿ��һ��ɹ���");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻���´����ؼ������");
			cm.dispose();
			return
		}
	    } else if (selection == 2) {
		if (cm.haveItem(4310025,500)) {
			cm.gainItem(4310025, -500);
			cm.gainItem(1112738, 1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�´����ؼ���Ҷһ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���������֮��ָ������",true).getBytes());
			cm.sendOk("��ϲ�㣬�Ѿ��һ��ɹ���");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻���´����ؼ������");
			cm.dispose();
			return
		}
	    } else if (selection == 3) {
		if (cm.haveItem(4310025,60)) {
			cm.gainItem(4310025, -60);
			cm.gainItem(4005000, +10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�´����ؼ���Ҷһ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���10������ˮ��������",true).getBytes());
			cm.sendOk("��ϲ�㣬�Ѿ��һ��ɹ���");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻���´����ؼ������");
			cm.dispose();
			return
		}
	    } else if (selection == 4) {
		if (cm.haveItem(4310025,60)) {
			cm.gainItem(4310025, -60);
			cm.gainItem(4005001, +10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�´����ؼ���Ҷһ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���10���ǻ�ˮ��������",true).getBytes());
			cm.sendOk("��ϲ�㣬�Ѿ��һ��ɹ���");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻���´����ؼ������");
			cm.dispose();
			return
		}
	    } else if (selection == 5) {
		if (cm.haveItem(4310025,60)) {
			cm.gainItem(4310025, -60);
			cm.gainItem(4005002, +10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�´����ؼ���Ҷһ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���10������ˮ��������",true).getBytes());
			cm.sendOk("��ϲ�㣬�Ѿ��һ��ɹ���");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻���´����ؼ������");
			cm.dispose();
			return
		}
	    } else if (selection == 6) {
		if (cm.haveItem(4310025,60)) {
			cm.gainItem(4310025, -60);
			cm.gainItem(4005003, +10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�´����ؼ���Ҷһ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���10������ˮ��������",true).getBytes());
			cm.sendOk("��ϲ�㣬�Ѿ��һ��ɹ���");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻���´����ؼ������");
			cm.dispose();
			return
		}
	    } else if (selection == 7) {
		if (cm.haveItem(4310025,100)) {
			cm.gainItem(4310025, -100);
			cm.gainItem(4005004, +10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�´����ؼ���Ҷһ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���10���ڰ�ˮ��������",true).getBytes());
			cm.sendOk("��ϲ�㣬�Ѿ��һ��ɹ���");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻���´����ؼ������");
			cm.dispose();
			return
		}
	    } else if (selection == 8) {
		if (cm.haveItem(4310025,100)) {
			cm.gainItem(4310025, -100);
			cm.gainItem(2049100, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�´����ؼ���Ҷһ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���1��������ᣡ����",true).getBytes());
			cm.sendOk("��ϲ�㣬�Ѿ��һ��ɹ���");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻���´����ؼ������");
			cm.dispose();
			return
		}
	    } else if (selection == 9) {
		if (cm.haveItem(4310025,200)) {
			cm.gainItem(4310025, -200);
			cm.gainItem(3992025, +100);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�´����ؼ���Ҷһ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���100��ʥ�����ǣ�����",true).getBytes());
			cm.sendOk("��ϲ�㣬�Ѿ��һ��ɹ���");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻���´����ؼ������");
			cm.dispose();
			return
		}
	    } else if (selection == 10) {
		if (cm.haveItem(4310025,500)) {
			cm.gainItem(4310025,-500);
			cm.gainItem(1122197,1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�´����ؼ���Ҷһ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���������֮��׹������",true).getBytes());
			cm.sendOk("��ϲ�㣬�Ѿ��һ��ɹ���");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻���´����ؼ������");
			cm.dispose();
			return
		}
	    } else if (selection == 11) {
		if (cm.haveItem(4310025,500)) {
			cm.gainItem(4310025, -500);
			cm.gainItem(1122197, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z1122197#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 12) {
		if (cm.haveItem(4310025,500)) {
			cm.gainItem(4310025, -500);
			cm.gainItem(1032142, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z1032142#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 13) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(1462204, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2044403#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 14) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(1472226, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2043703#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 15) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(1482179, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2044703#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 16) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(1492190, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2044603#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 17) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2044019, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2044019#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 18) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040903, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2040903#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 19) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040806, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2040806#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 2000) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040507, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2040507#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 21) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040506, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2040506#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 22) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040403, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2040403#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 23) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040710, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2040710#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 24) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040711, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2040711#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 25) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040709, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2040709#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 26) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040603, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2040603#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 27) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040006, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2040006#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 28) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(1113072, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2040007#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 29) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040303, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2040303#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 30) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2041025, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2041025#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 31) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2041024, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2041024#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
	    } else if (selection == 32) {
		if (cm.haveItem(4310049,2000)) {
			cm.gainItem(4310049, -2000);
			cm.gainItem(2040807, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"�ر��̵�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���һ��������װ��������",true).getBytes());
			cm.sendOk("#z2040807#����ɹ���ȥ��һ�°ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻�������˽����");
			cm.dispose();
			return
		}
            }
        }
    }
}
