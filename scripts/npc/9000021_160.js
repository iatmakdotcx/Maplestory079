
var status = 0;
var ��ˮ�� = 4021008;
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var �Ҹ� = "#k��ܰ��ʾ���κηǷ�������ҷ�Ŵ���.��ɱ��������.";
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
		var a1 = "#L1#" + ������ͷ + "#b����ȫ����40��ħ10#r#v1142515##v1142515##l\r\n\r\n��Ҫ20��#z4000463#��2000��ð�ձ�����\r\n";
	    var a2 = "#L2#" + ������ͷ + "#b����ȫ����50��ħ15#r#v1142480##v1142480##l\r\n\r\n��Ҫ30��#z4000463#��3000��ð�ձ�����\r\n";
	    var a3 = "#L3#" + ������ͷ + "#b����ȫ����70��ħ30#r#v1142349##v1142349##l\r\n\r\n��Ҫ40��#z4000463#��5000��ð�ձ�����\r\n";
	    var a4 = "#L4#" + ������ͷ + "#b����ȫ����100��ħ50#r#v1142498##v1142498##l\r\n\r\n��Ҫ50��#z4000463#��7000��ð�ձ�����\r\n";
	    var a5 = "#L5#" + ������ͷ + "#b����ȫ����150��ħ80#r#v1142541##v1142541##l\r\n\r\n��Ҫ60��#z4000463#��1��ð�ձ�����\r\n";
	    

            cm.sendSimple("����������ѫ��#v1142210#������Ӵ����ѡ��\r\n" + a1 + ""+a2+""+a3+""+a4+""+a5+"");
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b�뱣֤װ����λ������2���ո�,�����޷��ϳ�.");
                        cm.dispose();
          

	    } else if (selection == 1) {
		if (cm.haveItem(1142210,1)&&cm.haveItem(4000463,20)&&cm.getMeso()>=10000000) {
			cm.gainItem(1142210, -1);
			cm.gainItem(4000463, -20);
			cm.gainMeso(-20000000);
			cm.gainItem(1142515,40,40,40,40,100,40,10,10,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���ѫ����������" + " : " + cm.getPlayer().getName() +"��ҳɹ�����������籩���ˡ�O(��_��)O~",true).getBytes());
			cm.sendOk("#z1142515#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 2) {
		if (cm.haveItem(1142515,1)&&cm.haveItem(4000463,30)&&cm.getMeso()>=30000000) {
			cm.gainItem(1142515, -1);
			cm.gainItem(4000463, -30);
			cm.gainMeso(-30000000);
			cm.gainItem(1142480,50,50,50,50,200,200,15,15,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���ѫ����������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˵��Ｋ����ˡ�O(��_��)O~",true).getBytes());
			cm.sendOk("#z1142210#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 3) {
		if (cm.haveItem(1142480,1)&&cm.haveItem(4000463,40)&&cm.getMeso()>=50000000) {
			cm.gainItem(1142480, -1);
			cm.gainItem(4000463, -40);
			cm.gainMeso(-50000000);
			cm.gainItem(1142349,70,70,70,70,300,300,30,30,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���ѫ����������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˴�˵���ˡ�O(��_��)O~",true).getBytes());
			cm.sendOk("#z1142210#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 4) {
		if (cm.haveItem(1142349,1)&&cm.haveItem(4000463,50)&&cm.getMeso()>=70000000) {
			cm.gainItem(1142349, -1);
			cm.gainItem(4000463, -50);
			cm.gainMeso(-70000000);
			cm.gainItem(1142498,100,100,100,100,400,400,50,50,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���ѫ����������" + " : " + cm.getPlayer().getName() +"��ҳɹ�������ս��֮�ǡ�O(��_��)O~",true).getBytes());
			cm.sendOk("#z1142210#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
			}
			    } else if (selection == 5) {
		if (cm.haveItem(1142498,1)&&cm.haveItem(4000463,60)&&cm.getMeso()>=100000000) {
			cm.gainItem(1142498, -1);
			cm.gainItem(4000463, -60);
			cm.gainMeso(-100000000);
			cm.gainItem(1142541,150,150,150,150,500,500,80,80,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���ѫ����������" + " : " + cm.getPlayer().getName() +"��ҳɹ���������ǿѫ�¡�O(��_��)O~",true).getBytes());
			cm.sendOk("#z1142541#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
            }
        }
    }
}
