
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
		var a0 = "         #L0##b"+ С�̻� +"����#r#v1142076##z1142076##k"+ С�̻� +"#l\r\n\r\n                  ��ȫ����20��ħ5��\r\n                     #r��Ҫ��������\r\n\r\n   #v1142358#*1   #v4000017#*50  #v4000002#*100  #v4000012#*100  #v4000008#*100\r\n             #v2210006#*2              #v4001266#*2\r\n";
		var a1 = "      #L1##b"+ С�̻� +"����#r#v1142079##z1142079##k"+ С�̻� +"#l\r\n\r\n                  ��ȫ����40��ħ10��\r\n                     #r��Ҫ��������\r\n\r\n  #v1142076#*1   #v4003004#*150  #v4003005#*150  #v4000021#*150  #v4000040#*5\r\n             #v4000176#*5              #v4001266#*4\r\n";
		var a2 = "          #L2##b"+ С�̻� +"����#r#v1142140##z1142140##k"+ С�̻� +"#l\r\n\r\n                  ��ȫ����60��ħ20��\r\n                     #r��Ҫ��������\r\n\r\n  #v1142079#*1    #v4002000#*5     #v4002001#*5    #v4002002#*5    #v4002003#*5\r\n             #v4005004#*10              #v4001266#*4\r\n";
		var a3 = "          #L3##b"+ С�̻� +"����#r#v1142404##z1142404##k"+ С�̻� +"#l\r\n\r\n                  ��ȫ����80��ħ40��\r\n                     #r��Ҫ��������\r\n\r\n  #v1142140#*1    #v4005000#*15   #v4005001#*15  #v4005002#*15  #v4005003#*15\r\n             #v4000463#*5     #v4001266#*6     #v4031138#1000��\r\n";
		var a4 = "        #L4##b"+ С�̻� +"����#r#v1142384##z1142384##k"+ С�̻� +"#l\r\n\r\n                 ��ȫ����100��ħ60��\r\n                     #r��Ҫ��������\r\n\r\n  #v1142404#*1   #v4000243#*2    #v4000235#*2    #v4000175#*2    #v4001084#*1\r\n        #v4001085#*1    #v4001083#*1   #v4001266#*6    #v4031138#2000��\r\n";
		var a5 = "    #L5##b"+ С�̻� +"����#r#v1142788##z1142788##k"+ С�̻� +"#l\r\n\r\n                 ��ȫ����120��ħ80��\r\n                     #r��Ҫ��������\r\n\r\n  #v1142384#*1    #v4001080#*2    #v4001094#*2    #v4251202#*5    #v4000463#*5\r\n             #v4031456#*150  #v4001266#*8    #v4031138#4000��\r\n";

	    
            cm.sendSimple(""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+"\r\n\t          "+ С�̻� +"#r��ӭ������ҵѫ������"+ С�̻� +"\r\n"+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+"\r\n"+a0+""+a1+""+a2+""+a3+""+a4+""+a5+"");

        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b�뱣֤װ����λ������2���ո�,�����޷��ϳ�.");
                        cm.dispose();
          

	    } else if (selection == 0) {
		if (cm.haveItem(1142358,1)&&cm.haveItem(4000017,50)&&cm.haveItem(4000002,100)&&cm.haveItem(4000012,100)&&cm.haveItem(4000008,100)&&cm.haveItem(2210006,2)&&cm.haveItem(4001266,2)) {
			cm.gainItem(1142358,-1);
			cm.gainItem(4000017,-50);
			cm.gainItem(4000002,-100);
			cm.gainItem(4000012,-100);
			cm.gainItem(4000008,-100);
			cm.gainItem(2210006,-2);
			cm.gainItem(4001266,-2);
			cm.gainItem(1142076,20,20,20,20,0,0,5,5,50,50,10,10,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"��ҵѫ������" + " : " + cm.getPlayer().getName() +"��ҳɹ�����������ð����ѫ�£���ҹ�ϲ��/����",true).getBytes());
			cm.sendOk("�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
	    } else if (selection == 1) {
		if (cm.haveItem(1142076,1)&&cm.haveItem(4003004,150)&&cm.haveItem(4003005,150)&&cm.haveItem(4000021,150)&&cm.haveItem(4000040,5)&&cm.haveItem(4000176,5)&&cm.haveItem(4001266,4)) {
			cm.gainItem(1142076,-1);
			cm.gainItem(4003004,-150);
			cm.gainItem(4003005,-150);
			cm.gainItem(4000021,-150);
			cm.gainItem(4000040,-5);
			cm.gainItem(4000176,-5);
			cm.gainItem(4001266,-4);
			cm.gainItem(1142079,40,40,40,40,0,0,10,10,50,50,10,10,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"��ҵѫ������" + " : " + cm.getPlayer().getName() +"��ҳɹ�����������˹̹�Ӱ��˵�ѫ�£���ҹ�ϲ��/����",true).getBytes());
			cm.sendOk("�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
		} else if (selection == 2) {
		if (cm.haveItem(1142079,1)&&cm.haveItem(4002000,5)&&cm.haveItem(4002001,5)&&cm.haveItem(4002002,5)&&cm.haveItem(4002003,5)&&cm.haveItem(4005004,10)&&cm.haveItem(4001266,4)) {
			cm.gainItem(1142079,-1);
			cm.gainItem(4002000,-5);
			cm.gainItem(4002001,-5);
			cm.gainItem(4002002,-5);
			cm.gainItem(4002003,-5);
			cm.gainItem(4005004,-10);
			cm.gainItem(4001266,-4);
			cm.gainItem(1142140,60,60,60,60,0,0,20,20,50,50,10,10,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"��ҵѫ������" + " : " + cm.getPlayer().getName() +"��ҳɹ���������ʥ��ħѫ�£���ҹ�ϲ��/����",true).getBytes());
			cm.sendOk("�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
		} else if (selection == 3) {
		if (cm.haveItem(1142140,1)&&cm.haveItem(4005000,15)&&cm.haveItem(4005001,15)&&cm.haveItem(4005002,15)&&cm.haveItem(4005003,15)&&cm.haveItem(4000463,5)&&cm.haveItem(4001266,6)&&cm.getMeso()>=10000000) {
			cm.gainItem(1142140, -1);
			cm.gainItem(4005000, -15);
			cm.gainItem(4005001, -15);
			cm.gainItem(4005002, -15);
			cm.gainItem(4005003, -15);
			cm.gainItem(4000463, -5);
			cm.gainItem(4001266, -6);
			cm.gainMeso(-10000000);
			cm.gainItem(1142404,80,80,80,80,0,0,40,40,50,50,10,10,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"��ҵѫ������" + " : " + cm.getPlayer().getName() +"��ҳɹ�������Ӣ����־ѫ�£���ҹ�ϲ��/����",true).getBytes());
			cm.sendOk("�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
		} else if (selection == 4) {
		if (cm.haveItem(1142404,1)&&cm.haveItem(4000243,2)&&cm.haveItem(4000235,2)&&cm.haveItem(4000175,2)&&cm.haveItem(4001084,1)&&cm.haveItem(4001083,1)&&cm.haveItem(4001085,1)&&cm.haveItem(4001266,6)&&cm.getMeso()>=20000000) {
			cm.gainItem(1142404, -1);
			cm.gainItem(4000243, -2);
			cm.gainItem(4000235, -2);
			cm.gainItem(4000175, -2);
			cm.gainItem(4001084, -1);
			cm.gainItem(4001085, -1);
			cm.gainItem(4001083, -1);
			cm.gainItem(4001266, -6);
			cm.gainMeso(-20000000);
			cm.gainItem(1142384,100,100,100,100,0,0,60,60,50,50,10,10,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"��ҵѫ������" + " : " + cm.getPlayer().getName() +"��ҳɹ�����������ð�վ���ѫ�£���ҹ�ϲ��/����",true).getBytes());
			cm.sendOk("�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
				}
        }else if (selection == 5) {
		if (cm.haveItem(1142384,1)&&cm.haveItem(4001080,2)&&cm.haveItem(4001094,2)&&cm.haveItem(4251202,5)&&cm.haveItem(4000463,5)&&cm.haveItem(4031456,150)&&cm.haveItem(4001266,8)&&cm.getMeso()>=40000000) {
			cm.gainItem(1142384, -1);
			cm.gainItem(4001080, -2);
			cm.gainItem(4001094, -2);
			cm.gainItem(4251202, -5);
			cm.gainItem(4000463, -5);
			cm.gainItem(4031456, -150);
			cm.gainItem(4001266, -8);
			cm.gainMeso(-40000000);
			cm.gainItem(1142788,120,120,120,120,0,0,80,80,50,50,10,10,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"��ҵѫ������" + " : " + cm.getPlayer().getName() +"��ҳɹ�����������ð�յ��ٷ���֤���񣬴�ҹ�ϲ��/����",true).getBytes());
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