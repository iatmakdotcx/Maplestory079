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
		var a1 = "#L1#" + ������ͷ + "#r#v1402185#����������� 130-160 ��Ҫ1000���#r#v1402016#\r\n";
	    var a2 = "#L2#" + ������ͷ + "#r#v1432158#����������� 130-160 ��Ҫ1000���#r#v1432030#\r\n";
	    var a3 = "#L3#" + ������ͷ + "#r#v1472205#����������� 90-120   ��Ҫ1000���#r#v1472053#\r\n";
	    var a4 = "#L4#" + ������ͷ + "#r#v1382199#�����ħ���� 160-190 ��Ҫ1000���#r#v1382035#\r\n";
	    var a5 = "#L5#" + ������ͷ + "#r#v1452196#����������� 130-160 ��Ҫ1000���#r#v1452019#\r\n";
        var a6 = "#L6#" + ������ͷ + "#r#v1462184#����������� 130-160 ��Ҫ1000���#r#v1462015#\r\n";
		var a7 = "#L7#" + ������ͷ + "#r#v1492170#����������� 120-150 ��Ҫ1000���#r#v1492012#\r\n";
		var a8 = "#L8#" + ������ͷ + "#r#v1332214#����������� 120-150 ��Ҫ1000���#r#v1332052#\r\n";
		var a9 = "#L9#" + ������ͷ + "#r#v1442209#����������� 130-160 ��Ҫ1000���#r#v1442044#\r\n";
		var a10 = "#L10#" + ������ͷ + "#r#v1482159#����������� 130-160 ��Ҫ1000���#r#v1482012#\r\n";
		var a11 = "#L11#" + ������ͷ + "#r#v1302070#����������� 130-160 ��Ҫ1000���#r#v1302056#\r\n";
        var a12 = "#L12#" + ������ͷ + "#r#v1312142#����������� 130-160 ��Ҫ1000���#r#v1312015#\r\n";
		var a13 = "#L13#" + ������ͷ + "#r#v1322100#����������� 130-160 ��Ҫ1000���#r#v1322045#\r\n";		
		var a14 = "#L14#" + ������ͷ + "#r#v1422129#����������� 130-160 ��Ҫ1000���#r#v1422027#\r\n";
		var a15 = "#L15#" + ������ͷ + "#r#v1412126#����������� 130-160 ��Ҫ1000���#r#v1412021#\r\n";

		var r = Math.ceil(Math.random() * 1000);

            cm.sendSimple("�����������������������ѡ��\r\n" + a1 + ""+a2+""+a3+""+a4+""+a5+""+a6+""+a7+""+a8+""+a9+""+a10+""+a11+""+a12+""+a13+""+a14+""+a15+"");
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b�뱣֤װ����λ������2���ո�,�����޷��һ�.");
                        cm.dispose();
          

	    } else if (selection == 1) {
		if (cm.haveItem(1402185,1)&&cm.haveItem(1402016,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+130);
			cm.gainItem(1402016, -1);
			cm.gainItem(1402185, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1402185,50,50,50,50,0,0,r,0,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1402185#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 2) {
		if (cm.haveItem(1432158,1)&&cm.haveItem(1432030,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+130);
			cm.gainItem(1432030, -1);
			cm.gainItem(1432158, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1432158,50,50,50,50,0,0,r,0,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			cm.sendOk("#z1432158#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 3) {
		if (cm.haveItem(1472205,1)&&cm.haveItem(1472053,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+90);
			cm.gainItem(1472053, -1);
			cm.gainItem(1472205, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1472205,50,50,50,50,0,0,r,0,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1472205#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 4) {
		if (cm.haveItem(1382199,1)&&cm.haveItem(1382035,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+160);
			cm.gainItem(1382035, -1);
			cm.gainItem(1382199, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1382199,50,50,50,50,0,0,0,r,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1382199#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
			}
			    } else if (selection == 5) {
		if (cm.haveItem(1452196,1)&&cm.haveItem(1452019,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+130);
			cm.gainItem(1452019, -1);
			cm.gainItem(1452196, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1452196,50,50,50,50,0,0,r,0,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1452196#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
				 } else if (selection == 6) {
		if (cm.haveItem(1462184,1)&&cm.haveItem(1462015,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+130);
			cm.gainItem(1462015, -1);
			cm.gainItem(1462184, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1462184,50,50,50,50,0,0,r,0,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1462184#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
				 } else if (selection == 7) {
		if (cm.haveItem(1492170,1)&&cm.haveItem(1492012,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+120);
			cm.gainItem(1492012, -1);
			cm.gainItem(1492170, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1492170,50,50,50,50,0,0,r,0,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1492211#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
				 } else if (selection == 8) {
		if (cm.haveItem(1332214,1)&&cm.haveItem(1332052,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+120);
			cm.gainItem(1332052, -1);
			cm.gainItem(1332214, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1332214,50,50,50,50,0,0,r,0,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1332214#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
				 } else if (selection == 9) {
		if (cm.haveItem(1442209,1)&&cm.haveItem(1442044,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+130);
			cm.gainItem(1442044, -1);
			cm.gainItem(1442209, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1442209,50,50,50,50,0,0,r,0,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1442209#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
				 } else if (selection == 10) {
		if (cm.haveItem(1482159,1)&&cm.haveItem(1482012,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+130);
			cm.gainItem(1482012, -1);
			cm.gainItem(1482159, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1482159,50,50,50,50,0,0,r,0,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1482159#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
				 } else if (selection == 11) {
		if (cm.haveItem(1302070,1)&&cm.haveItem(1302056,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+130);
			cm.gainItem(1302056, -1);
			cm.gainItem(1302070, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1302070,50,50,50,50,0,0,r,0,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1302070#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
				} else if (selection == 12) {
		if (cm.haveItem(1312142,1)&&cm.haveItem(1312015,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+120);
			cm.gainItem(1312015, -1);
			cm.gainItem(1312142, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1312142,50,50,50,50,0,0,r,0,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1312142#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
				} else if (selection == 13) {
		if (cm.haveItem(1322100,1)&&cm.haveItem(1322045,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+130);
			cm.gainItem(1322045, -1);
			cm.gainItem(1322100, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1322100,50,50,50,50,0,0,r,0,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1322100#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
				
			} else if (selection == 14) {
		if (cm.haveItem(1422129,1)&&cm.haveItem(1422027,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+130);
			cm.gainItem(1422129, -1);
			cm.gainItem(1422027, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1422129,50,50,50,50,0,0,r,0,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1422129#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
				} else if (selection == 15) {
		if (cm.haveItem(1412126,1)&&cm.haveItem(1412021,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+130);
			cm.gainItem(1412126, -1);
			cm.gainItem(1412021, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1412126,50,50,50,50,0,0,r,0,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1412126#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
				} else if (selection == 16) {
		if (cm.haveItem(1382051,1)&&cm.haveItem(1382035,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+170);
			cm.gainItem(1382035, -1);
			cm.gainItem(1382051, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1382051,50,50,50,50,0,0,0,r,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1382051#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
				} else if (selection == 17) {
		if (cm.haveItem(1382052,1)&&cm.haveItem(1382035,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+170);
			cm.gainItem(1382035, -1);
			cm.gainItem(1382052, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1382052,50,50,50,50,0,0,0,r,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1492103#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
				} else if (selection == 18) {
		if (cm.haveItem(1422011,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 100+400);
			cm.gainItem(1422011, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1422011,100,100,100,100,1000,1000,r,r,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1422011#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
		} else if (selection == 19) {
		if (cm.haveItem(1442018,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 100+400);
			cm.gainItem(1442018, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1442018,100,100,100,100,1000,1000,r,r,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1442018#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
			}
		} else if (selection == 20) {
		if (cm.haveItem(1382037,1)&&cm.haveItem(1382035,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+160);
			cm.gainItem(1382037, -1);
			cm.gainItem(1382035, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1382037,100,100,100,100,1000,1000,0,r,0,0,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			cm.sendOk("#z1382037#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
			}
			} else if (selection == 21) {
		if (cm.haveItem(1422170,1)&&cm.haveItem(1422027,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+130);
			cm.gainItem(1422170, -1);
			cm.gainItem(1422027, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1422170,50,50,50,50,0,0,r,0,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1422170#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
			}
				} else if (selection == 22) {
		if (cm.haveItem(1412163,1)&&cm.haveItem(1412021,1)&&cm.getMeso()>=10000000) {
			var r = Math.ceil(Math.random() * 30+130);
			cm.gainItem(1412163, -1);
			cm.gainItem(1412021, -1);
			cm.gainMeso(-10000000);
			cm.gainItem(1412163,50,50,50,50,0,0,r,0,0,0,0,0,0,0);
			//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"������֮����������" + " : " + cm.getPlayer().getName() +"����Ѿ�����������������ˡ�O(��_��)O~",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����������������" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��Ѳ������������������á�O(��_��)O����~"));
			
			cm.sendOk("#z1412163#�Ѿ�����������������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
			}
				
            }
        }
    }
}
