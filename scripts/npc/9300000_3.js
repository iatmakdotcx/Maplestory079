var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var С�̻�2 = "#fUI/Basic/BtHide3/mouseOver/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/4#";  //
var С�ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/5#";  //
var С���� = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var ����� = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var Сˮ�� = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var ��ˮ�� = "#fItem/Etc/0427/04270001/Icon10/4#";  //
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //������
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //������
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //������
var С�̻�2 = "#fEffect/CharacterEff/1112960/3/0#";  //С�̻�2 ��С��
var С�̻�22 = "#fEffect/CharacterEff/1112960/3/1#";  //С�̻�2 ����
var ���� ="#fEffect/SetEff/208/effect/walk2/4#";
var ����1 ="#fEffect/SetEff/208/effect/walk2/3#";
var С�� ="#fMap/MapHelper/weather/birthday/2#";
var �һ� ="#fMap/MapHelper/weather/rose/4#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/2#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var ����Ҷ ="#fMap/MapHelper/weather/maple/3#";
var С�̻�2 ="#fMap/MapHelper/weather/squib/squib4/1#";
var ���� ="#fMap/MapHelper/weather/witch/3#";
//var tz = "#fEffect/CharacterEff/1082565/4/0#";  //���ӷ�
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
		var a1 = "#L1#" + ��ˮ�� + "#r��30-69������#l" +��ˮ��+ " \r\n\r\n��Ҫ100��#v4000000#��50��#v4000016#��1��#v4002000#��1��#v4002001#��������\r\n";
        var a2 = "#L2#" + ��ˮ�� + "#r��70-119������#l" +��ˮ��+ " \r\n\r\n��Ҫ200��#v4000000#��100��#v4000016#��2��#v4002000#��2��#v4002001#��2��#v4002002#��������\r\n";
        var a3 = "#L3#" + ��ˮ�� + "#r��120-200������#l" +��ˮ��+ " \r\n\r\n��Ҫ300��#v4000000#��150��#v4000016#��3��#v4002000#��3��#v4002001#��3��#v4002002#��1��#v4002003#��������\r\n";
	    

            cm.sendSimple("#e#dʩ����#k ��ѡ���������ȼ��򿨣�����ò��� ��� ��Ϸ�� ѩ���� Ӱ���ű� \r\n" + a1 + ""+a2+""+a3+"");
        } else if (status == 1) {
		if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull() && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
			cm.sendOk("#b�뱣֤ÿ����λ�����пո�,�����޷���ȡ.");
			cm.dispose();
			return;
	    } else if (selection == 1) {
		if (cm.haveItem(4000000,100)&&cm.haveItem(4000016,50)&&cm.haveItem(4002000,1)&&cm.haveItem(4002001,1)&&cm.getLevel()<70&&cm.getBossLog("�򿨽���")==0) {
			if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull() && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
			cm.sendOk("#b�뱣֤ÿ����λ���㹻�ռ�,�����޷���ȡ.");
			cm.dispose();
			return;
	    }
			cm.gainItem(4000000, -100);
			cm.gainItem(4000016, -50);
			cm.gainItem(4002000, -1);
			cm.gainItem(4002001, -1);
			cm.gainNX(1000);
			cm.gainMeso(1000000);//�����
			//cm.gainItem(5050000,1,3);//����
			//cm.gainItem(2340000,1);//ף��
			//cm.gainItem(2049100,1);//����
			cm.gainItem(4310014,5);//��������
			cm.gainItem(5150040,1);//�ʼ�
			cm.gainItem(4000487,100);//�ʼ�
			cm.gainItem(4001266,1);//�Ͷ�ѫ��
			cm.gainItem(5041000,1);//�߼�˲��֮ʯ
			cm.gainItem(2370000,1);
					//cm.getPlayer().modifyCSPoints(2,200);
			cm.setBossLog("�򿨽���");
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"[�򿨽���]" + " : " + " [" + cm.getPlayer().getName() + "]�ɹ���ȡ�˷���30-69�򿨽�����",true).getBytes());
            cm.sendOk("��ϲ�����˴򿨽�����");
			cm.dispose();
		} else {
			cm.sendOk("���ϻ��߽�Ҳ���!���߽����Ѿ��һ���1����ȷ�ϣ�");
			cm.dispose();
		}
			    } else if (selection == 2) {
		if (cm.haveItem(4000000,200)&&cm.haveItem(4000016,100)&&cm.haveItem(4002000,2)&&cm.haveItem(4002001,2)&&cm.haveItem(4002002,2)&&cm.getLevel()>=70&&cm.getLevel()<120&&cm.getBossLog("�򿨽���")==0) {
			if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull(4) && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
			cm.sendOk("#b�뱣֤ÿ����λ���㹻�ռ�,�����޷���ȡ.");
			cm.dispose();
			return;
	    }
			cm.gainItem(4000000, -200);
			cm.gainItem(4000016, -100);
			cm.gainItem(4002000, -2);
			cm.gainItem(4002001, -2);
			cm.gainItem(4002002, -2);
			cm.gainNX(3000);
			cm.gainMeso(2000000);//�����
			//cm.gainItem(2340000,1);//ף��
			//cm.gainItem(2049100,1);//����
			cm.gainItem(4310014,15);//��������
			cm.gainItem(4310059,1);//�ʼ�
			cm.gainItem(4001266,1);//�Ͷ�ѫ��
			cm.gainItem(2300000,100);//����ҩˮ
			cm.gainItem(2370000,1);
			cm.gainItem(2370004,15);
			cm.gainItem(4000487,50);//�ʼ�
			cm.gainItem(2370005,20);
			cm.gainItem(5040000,2);//�߼�˲��֮ʯ
			//cm.getPlayer().modifyCSPoints(2,500);
			cm.setBossLog("�򿨽���");
			 Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"[�򿨽���]" + " : " + " [" + cm.getPlayer().getName() + "]�ɹ���ȡ�˷���70-119�򿨽�����",true).getBytes());
        	cm.sendOk("��ϲ�����˴򿨽���#��");
			cm.dispose();
		} else {
			cm.sendOk("���ϻ��߽�Ҳ���!���߽����Ѿ��һ���1����ȷ�ϣ�");
			cm.dispose();
		}
			    } else if (selection == 3) {
		if (cm.haveItem(4000000,300)&&cm.haveItem(4000016,200)&&cm.haveItem(4002000,3)&&cm.haveItem(4002001,3)&&cm.haveItem(4002002,3)&&cm.haveItem(4002003,3)&&cm.getLevel()>119&&cm.getBossLog("�򿨽���")==0) {
			if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull(4) && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
			cm.sendOk("#b�뱣֤ÿ����λ���㹻�ռ�,�����޷���ȡ.");
			cm.dispose();
			return;
	    }
			cm.gainItem(4000000, -300);
			cm.gainItem(4000016, -200);
			cm.gainItem(4002000, -3);
			cm.gainItem(4002001, -3);
			cm.gainItem(4002002, -3);
			cm.gainItem(4002003, -3);
			cm.gainNX(5000);
			cm.gainMeso(5000000);//�����
			cm.gainItem(2340000,1);//ף��
			cm.gainItem(2049100,1);//����
			cm.gainItem(4310014,20);//��������
			cm.gainItem(4310059,3);//�ʼ�
			cm.gainItem(4001266,1);//�Ͷ�ѫ��
			cm.gainItem(2300000,80);//����ҩˮ
			cm.gainItem(5041000,3);//�߼�˲��֮ʯ
			cm.gainItem(2370003,10);
			cm.gainItem(2370004,15);
			cm.gainItem(4000487,150);//�ʼ�
			cm.gainItem(2370005,20);
			cm.gainItem(5350000,1);
			//cm.getPlayer().modifyCSPoints(2,800);
			cm.setBossLog("�򿨽���");
			 Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"[�򿨽���]" + " : " + " [" + cm.getPlayer().getName() + "]�ɹ���ȡ�˷���120-200�򿨽�����",true).getBytes());
        	cm.sendOk("��ϲ�����˴򿨽���#��");
			cm.dispose();
		} else {
			cm.sendOk("���ϻ��߽�Ҳ���!���߽����Ѿ��һ���1����ȷ�ϣ�");
			cm.dispose();
		}
			    } else if (selection == 4) {
		if (cm.haveItem(4002000,80)&&cm.haveItem(4002002,80)&&cm.haveItem(1113074,1)&&cm.haveItem(4002001,80)&&cm.haveItem(4000244,100)&&cm.haveItem(4000245,100)&&cm.haveItem(4000463,10)&&cm.getMeso()>=50000000) {
			cm.gainItem(4002000, -80);
			cm.gainItem(4002001, -80);
			cm.gainItem(4002002, -80);
			cm.gainItem(4000244, -100);
			cm.gainItem(4000245, -100);
			cm.gainItem(4000463, -10);
			cm.gainItem(1113074, -1);
			cm.gainMeso(-50000000);
			cm.gainItem(1113075, +1);
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"��ָ��������" + " : " + cm.getPlayer().getName() +"��ҳɹ���������߼����յ½�ָ��O(��_��)O~",true).getBytes());
			cm.sendOk("#z1113075#�Ѿ��������ˣ�ȥ��һ�°�");
			cm.dispose();
		} else {
			cm.sendOk("��Ĳ��ϲ���!!!");
			cm.dispose();
				}
            }
        }
    }
}
