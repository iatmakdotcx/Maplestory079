
/*var status = 0;
var ��ˮ�� = 4021008;
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var ���� ="#fMap/MapHelper/weather/witch/3#";
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
		var a5 = "#L5##b����#r#v1132164##v1132165##v1132166##v1132167##v1132168#��ħ20-40����500��#l\r\n\r\n";
		var a0 = "#L0##b����#r#v1132164##z1132164##k��ȫ����50��ħ25��#l\r\n\r\n                     #r��Ҫ��������\r\n\r\n#v4000313#*150  #v4031227#*15   #v4002002#*20   #v4011007#*2   #v4031138#2500��\r\n";
		var a1 = "#L1##b����#r#v1132165##z1132165##k��ȫ����50��ħ25��#l\r\n\r\n                     #r��Ҫ��������\r\n\r\n#v4000313#*150  #v4031227#*15   #v4002002#*20   #v4011007#*2   #v4031138#2500��\r\n";
		var a2 = "#L2##b����#r#v1132166##z1132166##k��ȫ����50��ħ25��#l\r\n\r\n                     #r��Ҫ��������\r\n\r\n#v4000313#*150  #v4031227#*15   #v4002002#*20   #v4011007#*2   #v4031138#2500��\r\n";
		var a3 = "#L3##b����#r#v1132167##z1132167##k��ȫ����50��ħ25��#l\r\n\r\n                     #r��Ҫ��������\r\n\r\n#v4000313#*150  #v4031227#*15   #v4002002#*20   #v4011007#*2   #v4031138#2500��\r\n";
		var a4 = "#L4##b����#r#v1132168##z1132168##k��ȫ����50��ħ25��#l\r\n\r\n                     #r��Ҫ��������\r\n\r\n#v4000313#*150  #v4031227#*15   #v4002002#*20   #v4011007#*2   #v4031138#2500��\r\n";

	    
            cm.sendSimple(""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+"\r\n\t        "+ С�̻� +"#r��ӭ��������ϣ��ϵ������"+ С�̻� +"\r\n"+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+"\r\n"+a5+""+a0+""+a1+""+a2+""+a3+""+a4+"");

        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b�뱣֤װ����λ������2���ո�,�����޷��ϳ�.");
                        cm.dispose();
          

	    } else if (selection == 0) {
		if (cm.haveItem(4000313,150)&&cm.haveItem(4031227,15)&&cm.haveItem(4002002,20)&&cm.haveItem(4011007,2)&& cm.getMeso() >=25000000) {
			cm.gainItem(4000313,-150);
			cm.gainItem(4031227,-15);
			cm.gainItem(4002002,-20);
			cm.gainItem(4011007,-2);
			cm.gainMeso(-25000000);
			cm.gainItem(1132164,50,50,50,50,0,0,25,25,28,28,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"����ϣ��ϵ������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˺���ϣ������սʿ��������ҹ�ϲ��/����",true).getBytes());
			cm.sendOk("�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
	    } else if (selection == 1) {
		if (cm.haveItem(4000313,150)&&cm.haveItem(4031227,15)&&cm.haveItem(4002002,20)&&cm.haveItem(4011007,2)&& cm.getMeso() >=25000000) {
			cm.gainItem(4000313,-150);
			cm.gainItem(4031227,-15);
			cm.gainItem(4002002,-20);
			cm.gainItem(4011007,-2);
			cm.gainMeso(-25000000);
			cm.gainItem(1132165,50,50,50,50,0,0,25,25,28,28,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"����ϣ��ϵ������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˺���ϣ������ħ��ʦ��������ҹ�ϲ��/����",true).getBytes());
			cm.sendOk("�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
		} else if (selection == 2) {
		if (cm.haveItem(4000313,150)&&cm.haveItem(4031227,15)&&cm.haveItem(4002002,20)&&cm.haveItem(4011007,2)&& cm.getMeso() >=25000000) {
			cm.gainItem(4000313,-150);
			cm.gainItem(4031227,-15);
			cm.gainItem(4002002,-20);
			cm.gainItem(4011007,-2);
			cm.gainMeso(-25000000);
			cm.gainItem(1132166,50,50,50,50,0,0,25,25,28,28,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"����ϣ��ϵ������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˺���ϣ�����񹭼�����������ҹ�ϲ��/����",true).getBytes());
			cm.sendOk("�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
		} else if (selection == 3) {
		if (cm.haveItem(4000313,150)&&cm.haveItem(4031227,15)&&cm.haveItem(4002002,20)&&cm.haveItem(4011007,2)&& cm.getMeso() >=25000000) {
			cm.gainItem(4000313,-150);
			cm.gainItem(4031227,-15);
			cm.gainItem(4002002,-20);
			cm.gainItem(4011007,-2);
			cm.gainMeso(-25000000);
			cm.gainItem(1132167,50,50,50,50,0,0,25,25,28,28,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"����ϣ��ϵ������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˺���ϣ�����������������ҹ�ϲ��/����",true).getBytes());
			cm.sendOk("�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
		} else if (selection == 4) {
		if (cm.haveItem(4000313,150)&&cm.haveItem(4031227,15)&&cm.haveItem(4002002,20)&&cm.haveItem(4011007,2)&& cm.getMeso() >=25000000) {
			cm.gainItem(4000313,-150);
			cm.gainItem(4031227,-15);
			cm.gainItem(4002002,-20);
			cm.gainItem(4011007,-2);
			cm.gainMeso(-25000000);
			cm.gainItem(1132168,50,50,50,50,0,0,25,25,28,28,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"����ϣ��ϵ������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˺���ϣ�����񺣵���������ҹ�ϲ��/����",true).getBytes());
			cm.sendOk("�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
		} else if (selection == 5) {
			var a6 = "#L6##b����#r#v1132164##z1132164##k��ħ20-40#l\r\n\r\n";
			var a7 = "#L7##b����#r#v1132165##z1132165##k��ħ20-40#l\r\n\r\n";
			var a8 = "#L8##b����#r#v1132166##z1132166##k��ħ20-40#l\r\n\r\n";
			var a9 = "#L9##b����#r#v1132167##z1132167##k��ħ20-40#l\r\n\r\n";
			var a10 = "#L10##b����#r#v1132168##z1132168##k��ħ20-40#l\r\n\r\n";

	    
            cm.sendSimple(""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+"\r\n\t          "+ С�̻� +"#r��ӭ��������ϣ��ϵ������"+ С�̻� +"\r\n"+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+"\r\n"+a6+""+a7+""+a8+""+a9+""+a10+"");
		}
	}else if (status == 2) {
		if (selection == 6) {
			if (cm.haveItem(1132164,1)&&cm.getMeso()>=5000000) {
				var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(1132164, -1);
				cm.gainMeso(-5000000);
				cm.gainItem(1132164,50,50,50,50,0,0,r,r,28,28,0,0,0,0);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ϣ��ϵ������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˺���ϣ������սʿ��������ҹ�ϲ��/��",true).getBytes());
				cm.sendOk("#z1132164#�Ѿ����ú��ˣ�ȥ��һ�°�");
				cm.dispose();
				return;
			} else {
				cm.sendOk("��Ĳ��ϲ���!!!");
				cm.dispose();
				return
			}
        }else if (selection == 7) {
			if (cm.haveItem(1132165,1)&&cm.getMeso()>=5000000) {
				var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(1132165, -1);
				cm.gainMeso(-5000000);
				cm.gainItem(1132165,50,50,50,50,0,0,r,r,28,28,0,0,0,0);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ϣ��ϵ������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˺���ϣ������ħ��ʦ��������ҹ�ϲ��/��",true).getBytes());
				cm.sendOk("#z1132165#�Ѿ����ú��ˣ�ȥ��һ�°�");
				cm.dispose();
				return;
			} else {
				cm.sendOk("��Ĳ��ϲ���!!!");
				cm.dispose();
				return
			}
        }else if (selection == 8) {
			if (cm.haveItem(1132166,1)&&cm.getMeso()>=5000000) {
				var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(1132166, -1);
				cm.gainMeso(-5000000);
				cm.gainItem(1132166,50,50,50,50,0,0,r,r,28,28,0,0,0,0);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ϣ��ϵ������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˺���ϣ�����񹭼�����������ҹ�ϲ��/��",true).getBytes());
				cm.sendOk("#z1132166#�Ѿ����ú��ˣ�ȥ��һ�°�");
				cm.dispose();
				return;
			} else {
				cm.sendOk("��Ĳ��ϲ���!!!");
				cm.dispose();
				return
			}
        }else if (selection == 9) {
			if (cm.haveItem(1132167,1)&&cm.getMeso()>=5000000) {
				var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(1132167, -1);
				cm.gainMeso(-5000000);
				cm.gainItem(1132167,50,50,50,50,0,0,r,r,28,28,0,0,0,0);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ϣ��ϵ������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˺���ϣ�����������������ҹ�ϲ��/��",true).getBytes());
				cm.sendOk("#z1132167#�Ѿ����ú��ˣ�ȥ��һ�°�");
				cm.dispose();
				return;
			} else {
				cm.sendOk("��Ĳ��ϲ���!!!");
				cm.dispose();
				return
			}
        }else if (selection == 10) {
			if (cm.haveItem(1132168,1)&&cm.getMeso()>=5000000) {
				var r = Math.ceil(Math.random() * 20+20);
				cm.gainItem(1132168, -1);
				cm.gainMeso(-5000000);
				cm.gainItem(1132168,50,50,50,50,0,0,r,r,28,28,0,0,0,0);
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ϣ��ϵ������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˺���ϣ�����񺣵���������ҹ�ϲ��/��",true).getBytes());
				cm.sendOk("#z1132168#�Ѿ����ú��ˣ�ȥ��һ�°�");
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