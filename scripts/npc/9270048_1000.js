
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
		//var a1 = "#L1#" + ������ͷ + "#b����ȫ����30��ħ30#r#v1142574##l\r\n\r\n��Ҫ1��#z4140103#��100��ð�ձ�����\r\n";
	    var a2 = "#L2#" + ������ͷ + "#b����ȫ����40��ħ40#r#v1142574##l\r\n\r\n��Ҫ10��#z4000463#��3000��ð�ձ�����\r\n";
	    var a3 = "#L3#" + ������ͷ + "#b����ȫ����50��ħ50#r#v1142574##l\r\n\r\n��Ҫ30��#z4000463#��5000��ð�ձ�����\r\n";
	    var a4 = "#L4#" + ������ͷ + "#b����ȫ����100��ħ70#r#v1142574##l\r\n\r\n��Ҫ50��#z4000463#��7000��ð�ձ�����\r\n";
	    //var a5 = "#L5#" + ������ͷ + "";
	    

            cm.sendSimple("����������ѫ�¡�����Ӵ����ѡ��\r\n"+a2+""+a3+""+a4+"");
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b�뱣֤װ����λ������2���ո�,�����޷��ϳ�.");
                        cm.dispose();
          

	    } else if (selection == 1) {
		if (cm.haveItem(4140103,1)&&cm.getMeso()>=10) {
			cm.getPlayer().setBossLog("ѫ��1",1,1)
			cm.gainNX(+50000);
			cm.gainDY(+100000);
			cm.gainItem(4140103, -1);
			//cm.gainItem(3700050, 1);
			//cm.gainMeso(-1000000);
			cm.gainItem(1142574,30,30,30,30,100,100,30,30,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���ѫ����������" + " : " + cm.getPlayer().getName() +"��ҳɹ�������Ů��ѫ�¡�O(��_��)O~",true).getBytes());
			cm.sendOk("#z1142574#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 2) {
		if (cm.haveItem(1142574,1)&&cm.haveItem(4000463,10)&&cm.getMeso()>=30000000) {
			cm.getPlayer().setBossLog("ѫ��2",1,1)
			cm.gainItem(1142574, -1);
			//cm.gainItem(3700050, -1);
			//cm.gainItem(3700051, 1);
		    cm.gainItem(4000463, -10);
			cm.gainMeso(-30000000);
			cm.gainItem(1142574,40,40,40,40,200,200,40,40,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���ѫ����������" + " : " + cm.getPlayer().getName() +"��ҳɹ�������Ů��ѫ�¡�O(��_��)O~",true).getBytes());
			cm.sendOk("#z1142574#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 3) {
		if (cm.haveItem(1142574,1)&&cm.getPlayer().getBossLog("ѫ��2",1) == 1&&cm.haveItem(4000463,30)&&cm.getMeso()>=50000000) {
			cm.getPlayer().setBossLog("ѫ��3",1,1)
			cm.gainItem(1142574, -1);
			//cm.gainItem(3700051, -1);
			//cm.gainItem(3700052, 1);
			cm.gainItem(4000463, -30);
			cm.gainMeso(-50000000);
			cm.gainItem(1142574,50,50,50,50,300,300,50,50,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���ѫ����������" + " : " + cm.getPlayer().getName() +"��ҳɹ�������Ů��ѫ�¡�O(��_��)O~",true).getBytes());
			cm.sendOk("#z1142210#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 4) {
		if (cm.haveItem(1142574,1)&&cm.getPlayer().getBossLog("ѫ��3",1) == 1&&cm.haveItem(4000463,50)&&cm.getMeso()>=70000000) {
			cm.getPlayer().setBossLog("ѫ��4",1,1)
			cm.gainItem(1142574, -1);
			cm.gainItem(3700052, -1);
			cm.gainItem(3700053, 1);
			cm.gainItem(4000463, -50);
			cm.gainMeso(-70000000);
			cm.gainItem(1142574,100,100,100,100,400,400,70,70,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���ѫ����������" + " : " + cm.getPlayer().getName() +"��ҳɹ�������Ů��ѫ�¡�O(��_��)O~",true).getBytes());
			cm.sendOk("#z1142210#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
			}
			    } else if (selection == 5) {
		if (cm.haveItem(1142574,1)&&cm.haveItem(4000463,60)&&cm.getPlayer().getBossLog("ѫ��3",1) == 1&&cm.getMeso()>=100000000) {
			cm.getPlayer().setBossLog("ѫ��5",1,1)
			cm.gainItem(1142574, -1);
			
			
			cm.gainItem(4000463, -60);
			cm.gainMeso(-100000000);
			cm.gainItem(1142574,150,150,150,150,500,500,80,80,10,10,10,10,10,10);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���ѫ����������" + " : " + cm.getPlayer().getName() +"��ҳɹ�������Ů��ѫ�¡�O(��_��)O~",true).getBytes());
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
