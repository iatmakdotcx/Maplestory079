
var status = 0;
var ��ˮ�� = 4021008;
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var �Ҹ� = "#k��ܰ��ʾ���κηǷ��������ҷ�Ŵ���.��ɱ��������.";
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
		var a1 = "#L1#" + ������ͷ + "#b�һ�#d#v1402210##z1402210##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
	    var a2 = "#L2#" + ������ͷ + "#b�һ�#d#v1302289##z1302289##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
	    var a3 = "#L3#" + ������ͷ + "#b�һ�#d#v1312165##z1312165##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
	    var a4 = "#L4#" + ������ͷ + "#b�һ�#d#v1322215##z1322215##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a5 = "#L5#" + ������ͷ + "#b�һ�#d#v1332238##z1332238##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a6 = "#L6#" + ������ͷ + "#b�һ�#d#v1372188##z1372188##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a7 = "#L7#" + ������ͷ + "#b�һ�#d#v1382222##z1382222##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a8 = "#L8#" + ������ͷ + "#b�һ�#d#v1412147##z1412147##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a9 = "#L9#" + ������ͷ + "#b�һ�#d#v1422152##z1422152##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a10 = "#L10#" + ������ͷ + "#b�һ�#d#v1432178##z1432178##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a11 = "#L11#" + ������ͷ + "#b�һ�#d#v1442234##z1442234##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a12 = "#L12#" + ������ͷ + "#b�һ�#d#v1452216##z1452216##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a13 = "#L13#" + ������ͷ + "#b�һ�#d#v1462204##z1462204##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a14 = "#L14#" + ������ͷ + "#b�һ�#d#v1472226##z1472226##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a15 = "#L15#" + ������ͷ + "#b�һ�#d#v1482179##z1482179##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a16 = "#L16#" + ������ͷ + "#b�һ�#d#v1492190##z1492190##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a17 = "#L17#" + ������ͷ + "#b�һ�#d#v1102612##z1102612##l\r\n\r\n��Ҫ#rRED��#k#v4310088#10��Ŷ��\r\n";
		var a18 = "#L18#" + ������ͷ + "#b�һ�#d#v2640010##z2640010##l\r\n\r\n��Ҫ#rRED��#k#v4310088#80��Ŷ��\r\n";
		var a19 = "#L19#" + ������ͷ + "#b�һ�#d#v2640011##z2640011##l\r\n\r\n��Ҫ#rRED��#k#v4310088#80��Ŷ��\r\n";
		var a20 = "#L20#" + ������ͷ + "#b��#d#v2640011#��#v2640010#��ѻ��໻��#l\r\n";
		//var a21 = "#L21#" + ������ͷ + "#b�һ�#d#v4310059##z4310059##l\r\n\r\n��Ҫ#rRED��#k#v4310088#1��Ŷ��\r\n";
		/*var a22 = "#L22#" + ������ͷ + "#b�һ�#d#v2040403##z2040403##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a23 = "#L23#" + ������ͷ + "#b�һ�#d#v2040710##z2040710##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a24 = "#L24#" + ������ͷ + "#b�һ�#d#v2040711##z2040711##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a25 = "#L25#" + ������ͷ + "#b�һ�#d#v2040709##z2040709##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a26 = "#L26#" + ������ͷ + "#b�һ�#d#v2040603##z2040603##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a27 = "#L27#" + ������ͷ + "#b�һ�#d#v2040006##z2040006##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a28 = "#L28#" + ������ͷ + "#b�һ�#d#v2040007##z2040007##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a29 = "#L29#" + ������ͷ + "#b�һ�#d#v2040303##z2040303##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a30 = "#L30#" + ������ͷ + "#b�һ�#d#v2041025##z2041025##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a31 = "#L31#" + ������ͷ + "#b�һ�#d#v2041024##z2041024##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";
		var a32 = "#L32#" + ������ͷ + "#b�һ�#d#v2040807##z2040807##l\r\n\r\n��Ҫ#rRED��#k#v4310088#20��Ŷ��\r\n";*/

	    

         cm.sendSimple("ɧ�꣬������RED�ر��̵꣬������Ҫ��#v4310088#�һ�ʲôRED�����أ�\r\n"+a18+""+a19+""+a20+""+a1+""+a2+""+a3+""+a4+""+a5+""+a6+""+a7+""+a8+""+a9+""+a10+""+a11+""+a12+""+a13+""+a14+""+a15+""+a16+""+a17+"");//
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
                        cm.dispose();

	    } else if (selection == 1) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1402210, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 2) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1302289, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 3) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1312165, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z1312165#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 4) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1322215, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z1322215#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 5) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1332238, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z1332238#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 6) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1372188, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z1372188#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 7) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1382222, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z1382222#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 8) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1412147, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z1412147#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 9) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1422152, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z1422152#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 10) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1432178, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z1432178#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 11) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1442234, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z1442234#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 12) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1452216, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z1452216#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 13) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1462204, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z1462204#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 14) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1472226, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z1472226#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 15) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1482179, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z1482179#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 16) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1492190, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z1492190#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 17) {
		if (cm.haveItem(4310088,10)) {
			cm.gainItem(4310088, -10);
			cm.gainItem(1102612, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z1102612#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 18) {
		if (cm.haveItem(4310088,40)) {
			cm.gainItem(4310088, -40);
			cm.gainItem(2640010, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z2640010#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 19) {
		if (cm.haveItem(4310088,40)) {
			cm.gainItem(4310088, -40);
			cm.gainItem(2640011, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z2640011#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 20) {
		if (cm.haveItem(2640011,1)) {
			cm.gainItem(2640011, -1);
			cm.gainItem(2640010, +1);
			cm.sendOk("�����ɹ�");
			cm.dispose();
			return;
		}else if (cm.haveItem(2640010,1)){
			cm.gainItem(2640011, 1);
			cm.gainItem(2640010, -1);
			cm.sendOk("�����ɹ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 21) {
		if (cm.haveItem(4310088,1)) {
			cm.gainItem(4310088, -1);
			cm.gainItem(4310059, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ��˱سɱ�һ��������",true).getBytes());
			cm.sendOk("�һ��ɹ���");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 22) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2040403, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z2040403#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 23) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2040710, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z2040710#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 24) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2040711, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z2040711#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 25) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2040709, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z2040709#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 26) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2040603, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z2040603#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 27) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2040006, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z2040006#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 28) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(1113072, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z2040007#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 29) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2040303, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z2040303#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 30) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2041025, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z2041025#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 31) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2041024, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z2041024#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
	    } else if (selection == 32) {
		if (cm.haveItem(4310088,20)) {
			cm.gainItem(4310088, -20);
			cm.gainItem(2040807, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"RED�����һ�" + " : " + cm.getPlayer().getName() +"��ҳɹ��һ���RED����һ��������",true).getBytes());
			cm.sendOk("#z2040807#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��ȷ�����㹻��RED����");
			cm.dispose();
			return
		}
            }
        }
    }
}
