
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
		var a1 = "#L1#" + ������ͷ + "#r������ά+2 ˫��+1 ����+30 ˫��+10#v1022228##l\r\n\r\n��Ҫ20��#v4002000#��20��#v4002001#��40��#v4031456#��50��ð�ձ�����\r\n";
	    var a2 = "#L2#" + ������ͷ + "#r������ά+3 ˫��+2 ����+50 ˫��+20#v1022224##l\r\n\r\n��Ҫ50��#v4002000#��50��#v4002001#��10��#v4002002#��200��#v4031456#��500��ð�ձ�����\r\n";//1��#v1132243#��40��#v4002000#��40��#v4002001#��40��#v4002002#��1��#v4001084#��3��#v4000463#��8��#v4021010#��2000��ð�ձ�����
	    var a3 = "#L3#" + ������ͷ + "#r������ά+4 ˫��+3 ����+100 ˫��+50#r#v1022225##l\r\n\r\n��Ҫ100��#v4002000#��100��#v4002001#��30��#v4002002#��10��#v4002003#��500��#v4031456#��2000��ð�ձ�����\r\n";//1��#v1132244#��60��#v4002000#��60��#v4002001#��60��#v4002002#��1��#v4001083#��6��#v4000463#��12��#v4021010#��3000��ð�ձ�����
	    var a4 = "#L4#" + ������ͷ + "#r������ά+15 ˫��+10 ����+100 �ر�+50 ˫��+150 #r#v1022226##l\r\n\r\n��Ҫ300��#v4002000#��300��#v4002001#��60��#v4002002#��30��#v4002003#��1000��#v4031456#��5000��ð�ձ�����\r\n";//1��#v1132244#��60��#v4002000#��60��#v4002001#��60��#v4002002#��1��#v4001083#��6��#v4000463#��12��#v4021010#��3000��ð�ձ�����
	    

            cm.sendSimple("��������������������Ӵ����ѡ��\r\n" + a1 + ""+a2+""+a3+""+a4+"");
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b�뱣֤װ����λ������2���ո�,�����޷��ϳ�.");
                        cm.dispose();
          

	    } else if (selection == 1) {
		if (cm.haveItem(4002000,20)&&cm.haveItem(4002001,20)&&cm.haveItem(4031456,40)&&cm.getMeso()>=500000) {
			cm.gainItem(4002000, -20);
			cm.gainItem(4002001, -20);
			cm.gainItem(4031456, -40);
			cm.gainMeso(-500000);
			cm.gainItem(1022228,2,2,2,2,0,0,1,1,10,10,0,30,0,0);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,�ر���,������,�ƶ��ٶ�,��Ծ��
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"װ������" + " : " + cm.getPlayer().getName() +"��ҳɹ������˵ͼ����۾���֮�ۡ���ҸϽ�Χ��",true).getBytes());
			cm.sendOk("�Ͻ����ϳ����»ع�ð�յ���ȸ��۾��ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 2) {
		if (cm.haveItem(1022228,1)&&cm.haveItem(4002000,50)&&cm.haveItem(4002002,10)&&cm.haveItem(4002001,50)&&cm.haveItem(4031456,200)&&cm.getMeso()>=5000000) {
			cm.gainItem(1022228,-1);
			cm.gainItem(4002000, -50);
			cm.gainItem(4002001, -50);
			cm.gainItem(4002002, -10);
			cm.gainItem(4031456, -200);
			cm.gainMeso(-5000000);
			cm.gainItem(1022224,3,3,3,3,0,0,2,2,20,20,0,50,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"װ������" + " : " + cm.getPlayer().getName() +"��ҳɹ��������м����۾���֮�ۡ���ҸϽ�Χ��",true).getBytes());
			cm.sendOk("�Ͻ����ϳ����»ع�ð�յ���ȸ��۾��ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 3) {
		if (cm.haveItem(1022224,1)&&cm.haveItem(4002000,100)&&cm.haveItem(4002002,30)&&cm.haveItem(4002003,10)&&cm.haveItem(4002001,100)&&cm.haveItem(4031456,500)&&cm.getMeso()>=20000000) {
			cm.gainItem(1022224, -1);
			cm.gainItem(4002000, -100);
			cm.gainItem(4002001, -100);
			cm.gainItem(4002002, -30);
			cm.gainItem(4002003, -10);
			cm.gainItem(4031456, -500);
			cm.gainMeso(-5000000);
			cm.gainItem(1022225,4,4,4,4,0,0,3,3,50,50,0,100,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"װ������" + " : " + cm.getPlayer().getName() +"��ҳɹ��������˸߼����۾���֮�ۡ���ҸϽ�Χ��",true).getBytes());
			cm.sendOk("�Ͻ����ϳ����»ع�ð�յ���ȸ��۾��ɣ�");
			cm.dispose();
			return;
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
			return
		}
			    } else if (selection == 4) {
		if (cm.haveItem(1022225,1)&&cm.haveItem(4002000,300)&&cm.haveItem(4002002,60)&&cm.haveItem(4002003,30)&&cm.haveItem(4002001,300)&&cm.haveItem(4031456,1000)&&cm.getMeso()>=500000000) {
			cm.gainItem(1022225, -1);
			cm.gainItem(4002000, -300);
			cm.gainItem(4002001, -300);
			cm.gainItem(4002002, -60);
			cm.gainItem(4002003, -30);
			cm.gainItem(4031456, -1000);
			cm.gainMeso(-50000000);
			cm.gainItem(1022226,15,15,15,15,0,0,10,10,150,150,50,150,0,0);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"װ������" + " : " + cm.getPlayer().getName() +"��ҳɹ���������߼����۾���֮�ۡ���ҸϽ�Χ��",true).getBytes());
			cm.sendOk("�Ͻ����ϳ����»ع�ð�յ���ȸ��۾��ɣ�");
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
