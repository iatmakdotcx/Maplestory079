
var status = 0;
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

var �Ƿ��� = false;
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
			if(!�Ƿ���){
				cm.sendOk("��ð���ð�ռ�~");
				cm.dispose();
				return;
			}
			
		var a0 = "        #L0##b"+ С�̻� +"����#r#v1112435##z1112435##k"+ С�̻� +"#l\r\n\r\n                  ��ȫ����10��ħ10��\r\n                     #r��Ҫ��������\r\n\r\n   #v1112738#*1     #v4310025#*50     #v4000094#*5     #v4031138#500��\r\n";
		var a1 = "        #L1##b"+ С�̻� +"����#r#v1112436##z1112436##k"+ С�̻� +"#l\r\n\r\n                  ��ȫ����20��ħ20��\r\n                     #r��Ҫ��������\r\n\r\n   #v1112435#*1     #v4310025#*100     #v4000094#*10     #v4031138#1000��\r\n";
		var a2 = "        #L2##b"+ С�̻� +"����#r#v1112437##z1112437##k"+ С�̻� +"#l\r\n\r\n                  ��ȫ����30��ħ30��\r\n                     #r��Ҫ��������\r\n\r\n   #v1112436#*1     #v4310025#*200     #v4000094#*15     #v4031138#1500��\r\n";
		var a3 = "        #L3##b"+ С�̻� +"����#r#v1112438##z1112438##k"+ С�̻� +"#l\r\n\r\n                  ��ȫ����40��ħ40��\r\n                     #r��Ҫ��������\r\n\r\n   #v1112437#*1     #v4310025#*300     #v4000094#*20     #v4031138#2500��\r\n";
		var a4 = "        #L4##b"+ С�̻� +"����#r#v1112439##z1112439##k"+ С�̻� +"#l\r\n\r\n                  ��ȫ����50��ħ60��\r\n                     #r��Ҫ��������\r\n\r\n   #v1112438#*1     #v4310025#*450     #v4000094#*30     #v4031138#3500��\r\n";

	    
            cm.sendSimple(""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+"\t        "+ С�̻� +"#r��ӭ�������ױ�ҵ��ָ����"+ С�̻� +"\r\n"+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+"\r\n"+a0+""+a1+""+a2+""+a3+""+a4+"");

        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b�뱣֤װ����λ������2���ո�,�����޷��ϳ�.");
                        cm.dispose();
          

	    } else if (selection == 0) {
		if (cm.haveItem(1112738,1)&&cm.haveItem(4310025,50)&&cm.haveItem(4000094,5)&&cm.getMeso()>=5000000) {
			cm.gainItem(1112738,-1);
			cm.gainItem(4310025,-50);
			cm.gainItem(4000094,-5);
			cm.gainMeso(-5000000);
			cm.gainItem(1112435,10,10,10,10,0,0,10,10,0,0,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���ױ�ҵ��ָ����" + " : " + cm.getPlayer().getName() +"��ҳɹ�������һ������֮�ͽ�ָ����ҹ�ϲ��/����",true).getBytes());
			cm.sendOk("�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
	    } else if (selection == 1) {
		if (cm.haveItem(1112435,1)&&cm.haveItem(4310025,100)&&cm.haveItem(4000094,10)&&cm.getMeso()>=10000000) {
			cm.gainItem(1112435,-1);
			cm.gainItem(4310025,-100);
			cm.gainItem(4000094,-10);
			cm.gainMeso(-10000000);
			cm.gainItem(1112436,20,20,20,20,0,0,20,20,0,0,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���ױ�ҵ��ָ����" + " : " + cm.getPlayer().getName() +"��ҳɹ������˶�������֮�ͽ�ָ����ҹ�ϲ��/����",true).getBytes());
			cm.sendOk("�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
		} else if (selection == 2) {
		if (cm.haveItem(1112436,1)&&cm.haveItem(4310025,200)&&cm.haveItem(4000094,15)&&cm.getMeso()>=15000000) {
			cm.gainItem(1112436,-1);
			cm.gainItem(4310025,-200);
			cm.gainItem(4000094,-15);
			cm.gainMeso(-15000000);
			cm.gainItem(1112437,30,30,30,30,0,0,30,30,0,0,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���ױ�ҵ��ָ����" + " : " + cm.getPlayer().getName() +"��ҳɹ���������������֮�ͽ�ָ����ҹ�ϲ��/����",true).getBytes());
			cm.sendOk("�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		} 
		} else if (selection == 3) {
		if (cm.haveItem(1112437,1)&&cm.haveItem(4310025,300)&&cm.haveItem(4000094,20)&&cm.getMeso()>=25000000) {
			cm.gainItem(1112437,-1);
			cm.gainItem(4310025,-300);
			cm.gainItem(4000094,-20);
			cm.gainMeso(-25000000);
			cm.gainItem(1112438,40,40,40,40,0,0,40,40,0,0,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���ױ�ҵ��ָ����" + " : " + cm.getPlayer().getName() +"��ҳɹ�������ĩ������֮�ͽ�ָ����ҹ�ϲ��/����",true).getBytes());
			cm.sendOk("�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
		} else if (selection == 4) {
		if (cm.haveItem(1112438,1)&&cm.haveItem(4310025,450)&&cm.haveItem(4000094,30)&&cm.getMeso()>=35000000) {
			cm.gainItem(1112438,-1);
			cm.gainItem(4310025,-450);
			cm.gainItem(4000094,-30);
			cm.gainMeso(-35000000);
			cm.gainItem(1112439,50,50,50,50,0,0,60,60,0,0,0,0,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���ױ�ҵ��ָ����" + " : " + cm.getPlayer().getName() +"��ҳɹ�������������֮�ͽ�ָ����ҹ�ϲ��/����",true).getBytes());
			cm.sendOk("�Ѿ��������ˣ�ȥ��һ�°�");
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