
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
	    var a2 = "#L2#" + ������ͷ + "#r#z1122022##l\r\n\r\n"+Բ��+"300��#v4001126#��100��ð�ձ�����\r\n";
	    var a3 = "#L3#" + ������ͷ + "#r#z1122134##l\r\n\r\n"+Բ��+"800��#v4001126#+500��ð�ձ�+#v1122022#����\r\n";
	    var a4 = "#L4#" + ������ͷ + "#r#z1122139##l\r\n\r\n"+Բ��+"1500��#v4001126#+2000��ð�ձ�+#v1122134#+20��#v4005001#����\r\n";
	    var a5 = "#L5#" + ������ͷ + "#r#z1122035##l\r\n\r\n"+Բ��+"3000��#v4001126#+5000��ð�ձ�+#v1122139#+30��#v4005001#����\r\n";
		var a6 = "#L6#" + ������ͷ + "#rΪ#v1122035#����50������(ֻ������1�Σ�)#l\r\n\r\n"+Բ��+"#v1122035#+10��#v4250902##z4250902#����\r\n";
	 

            cm.sendSimple("#d��һ����ʿ��һ����������ʿ���͸��������Լ���װ�����ҿ��԰�������#rװ��#dֻҪ���в���!!!\r\n��ȯ�����: #r" + cm.getChar().getNX() + "\r\n"+a2+""+a3+""+a4+""+a5+""+a6+"");

	    } else if (selection == 2) {
		if (cm.haveItem(4001126, 300)&&cm.getMeso()>=1000000) {
			cm.gainItem(4001126, -300);
			cm.gainMeso(-1000000);
			cm.gainItem(1122022, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ð��֮�Ĺ���" + " : " + cm.getPlayer().getName() +"��ҳɹ�������ð��֮�ġ�O(��_��)O~",true).getBytes());
			cm.sendOk("#z1122022#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return;
		}
	    } else if (selection == 3) {//��װ
		if (cm.haveItem(4001126, 800)&&cm.getMeso()>=5000000&&cm.haveItem(1122022, 1)) {
			cm.gainItem(4001126, -800);
			cm.gainMeso(-5000000);
			cm.gainItem(1122022, -1);
			cm.gainItem(1122134, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ð��֮�Ĺ���" + " : " + cm.getPlayer().getName() +"��ҳɹ������˷�ӡ��ð��֮�ġ�O(��_��)O~",true).getBytes());
			cm.sendOk("#z1122134#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return;
		}
	    } else if (selection == 4) {//����
		if (cm.haveItem(4001126, 1500)&&cm.getMeso()>=20000000&&cm.haveItem(1122134, 1)&&cm.haveItem(4005001, 20)) {
			cm.gainItem(4001126, -1500);
			cm.gainMeso(-20000000);
			cm.gainItem(1122134, -1);
			cm.gainItem(4005001, -20);
			cm.gainItem(1122139, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ð��֮�Ĺ���" + " : " + cm.getPlayer().getName() +"��ҳɹ����������ѵ�ð��֮�ġ�O(��_��)O~",true).getBytes());
			cm.sendOk("#z1122139#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return;
		}
	    } else if (selection == 5) {//Ь��
		if (cm.haveItem(4001126, 3000)&&cm.getMeso()>=50000000&&cm.haveItem(1122139, 1)&&cm.haveItem(4005001, 30)) {
			cm.gainItem(4001126, -3000);
			cm.gainMeso(-50000000);
			cm.gainItem(1122139, -1);
			cm.gainItem(4005001, -30);
			cm.gainItem(1122035, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ð��֮�Ĺ���" + " : " + cm.getPlayer().getName() +"��ҳɹ������˾��ѵ�ð��֮�ġ�O(��_��)O~",true).getBytes());
			cm.sendOk("#z1122035#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return;
		}
	    } else if (selection == 6) {//
		if (cm.haveItem(1122035, 1)&&cm.haveItem(4250902, 10)) {
			cm.gainItem(1122035, -1);
			cm.gainItem(4250902, -10);
			cm.gainItem(1122035,0,0,0,50,0,0,0,0,0,0,0,0,0,0);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ð��֮�Ĺ���" + " : " + cm.getPlayer().getName() +"��ҳɹ����������ѵ�ð��֮�ġ�O(��_��)O~",true).getBytes());
			cm.sendOk("#v1122035#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return;
		}
    }
}
}
