var ���� = "#fEffect/CharacterEff/1114000/2/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += "#e����һ�����\r\n"
           // text += "#v1702378##v1702378##v1702378##v1702378##v1702378##v1702378##v1702378##v1702378##v1702378##v1702378#\r\n"
            //text += "#L1##r" + ��ɫ��ͷ + "��ս���߼�BOSS����ħŮ#g>>>>>>>>#b��Ҫ#v4000463#*1\r\n\r\n"//3
			//text += "#L2##r" + ��ɫ��ͷ + "��ս���߼�BOSS������#g>>>>>>>>>>#b��Ҫ#v4000463#*1\r\n\r\n"//3
            //text += "#L3##r" + ��ɫ��ͷ + "��ս���߼�BOSS������#g>>>>>>>>>>#b��Ҫ#v4001126#*200+500��\r\n\r\n"//3
			//text += "#L4##r" + ��ɫ��ͷ + "��ս������BOSS����������ħ#g>>>>#b��Ҫ#v4000463#*2\r\n\r\n"//3
            //text += "#L6##r" + ��ɫ��ͷ + "��ս������BOSS����������#g>>>>>>#b��Ҫ#v4000463#*1��\r\n\r\n"//3
			//text += "#L7##r" + ��ɫ��ͷ + "��ս���ռ�BOSS�������˹#g>>>>>>#b��Ҫ#v4000463#*5\r\n\r\n"//3
			//text += "#L8##r" + ��ɫ��ͷ + "��ս���ռ�BOSS��Ʒ����#g>>>>>>#b��Ҫ#v4000463#*5\r\n\r\n"//3
			//text += "#L1##r" + ��ɫ��ͷ + "#v1112915#�һ� ȫ����88  #v1112915#\r\n\r\n"//3
			text += "#L2##r" + ��ɫ��ͷ + "#v2430209#*1�һ� 10����\r\n\r\n"//3
            text += "#L3##r" + ��ɫ��ͷ + "#v2430209#*3�һ� 30����\r\n\r\n"//3
			text += "#L4##r" + ��ɫ��ͷ + "#v2430209#*10�һ� 100����\r\n\r\n"//3
			//text += "#L5##r" + ��ɫ��ͷ + "#v1912339#�һ� һ��#v1912339##v1902339#\r\n\r\n"//3
			//text += "#L6##r" + ��ɫ��ͷ + "#v1912340#�һ� һ��#v1912340##v1902340#\r\n\r\n"//3
			//text += "#L7##r" + ��ɫ��ͷ + "#v1912341#�һ� һ��#v1912341##v1902341#\r\n\r\n"//3
			//text += "#L8##r" + ��ɫ��ͷ + "#v1912342#�һ� һ��#v1912342##v1902342#\r\n\r\n"//3
			//text += "#L9##r" + ��ɫ��ͷ + "#v1912343#�һ� һ��#v1912343##v1902343#\r\n\r\n"//3
			//text += "#L10##r" + ��ɫ��ͷ + "#v1912344#�һ� һ��#v1912344##v1902344#\r\n\r\n"//3
			//text += "#L11##r" + ��ɫ��ͷ + "#v1912345#�һ� һ��#v1912345##v1902345#\r\n\r\n"//3
			//text += "#L12##r" + ��ɫ��ͷ + "#v1912346#�һ� һ��#v1912346##v1902346#\r\n\r\n"//3
			//text += "#L13##r" + ��ɫ��ͷ + "#v1902401#�һ� һ��ȫ����50#v1902401##v1912401#\r\n\r\n"//3
			//text += "#L14##r" + ��ɫ��ͷ + "#v1902402#�һ� һ��ȫ����50#v1902402##v1912402#\r\n\r\n"//3
			//text += "#L15##r" + ��ɫ��ͷ + "#v1902403#�һ� һ��ȫ����50#v1902403##v1912403#\r\n\r\n"//3
			//text += "#L16##r" + ��ɫ��ͷ + "#v1902405#�һ� һ��ȫ����50#v1902405##v1912405#\r\n\r\n"//3
			//text += "#L17##r" + ��ɫ��ͷ + "#v1902311#�һ� һ��ȫ����50#v1902311##v1912311#\r\n\r\n"//3
			//text += "#L18##r" + ��ɫ��ͷ + "#v1902350#�һ� һ��ȫ����50#v1902350##v1902350#\r\n\r\n"//3
			//text += "#L19##r" + ��ɫ��ͷ + "#v1902407#�һ� һ��ȫ����50#v1902407##v1902407#\r\n\r\n"//3
			//text += "#L20##r" + ��ɫ��ͷ + "#v1902404#�һ� һ��ȫ����50#v1902404##v1902404#\r\n\r\n"//3
			//text += "#L21##r" + ��ɫ��ͷ + "#v1902411#�һ� һ��ȫ����188#v1902411##v1902411#\r\n\r\n"//3
            //text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            //text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            //text += "#L21##d" + ��ɫ��ͷ + "����#v3700228#1��\t��Ҫ��#v4000000#100��\r\n\r\n"//3
            //text += "#L22##d" + ��ɫ��ͷ + "����#v3700229#1��\t��Ҫ��#v4000016#100��\r\n\r\n"//3
            //text += "#L23##d" + ��ɫ��ͷ + "����#v3700230#1��\t��Ҫ��#v4000001#100��\r\n\r\n"//3
            //text += "#L24##d" + ��ɫ��ͷ + "����#v3700231#1��\t��Ҫ��#v4000012#100��\r\n\r\n"//3
            //text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { //��ħŮ
			if(cm.getLevel() >= 10 && cm.haveItem(1112915,1) && cm.getMeso()>=500000) {
            cm.gainItem(1112915,-1);
			cm.gainItem(1112915,88,88,88,88,0,0,88,88,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"������ָ����" + " : " + cm.getPlayer().getName() +"������ָ�һ��ɹ� ȫ����88.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
        } else if (selection == 2) {  //1
		
			if(cm.getLevel() >= 10 && cm.haveItem(2430209,1)) {
            cm.gainItem(2430209,-1);
			cm.setmoneyb(+10)
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������" + " : " + cm.getPlayer().getName() +"����һ�10���ֳɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("�һ�ʧ�� #v2430209#�������1��");
			cm.dispose();
		   }
		  
        } else if (selection == 3) { //3
				if(cm.getLevel() >= 10 && cm.haveItem(2430209,3)) {
            cm.gainItem(2430209,-3);
			cm.setmoneyb(+30)
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������" + " : " + cm.getPlayer().getName() +"����һ�30���ֳɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("�һ�ʧ�� #v2430209#�������3��");
			cm.dispose();
		   }
        } else if (selection == 4) {//10
		if(cm.getLevel() >= 10 && cm.haveItem(2430209,10)) {
            cm.gainItem(2430209,-10);
			cm.setmoneyb(+100)
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������" + " : " + cm.getPlayer().getName() +"����һ�100���ֳɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("�һ�ʧ�� #v2430209#�������10��");
			cm.dispose();
		   }
        } else if (selection == 5) { //����
		if(cm.getLevel() >= 10 && cm.haveItem(1912339,1) && cm.getMeso()>=500000) {
            cm.gainItem(1912339,-1);
			cm.gainItem(1912339,1);
			cm.gainItem(1902339,1);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������ӹ���" + " : " + cm.getPlayer().getName() +"�������Ӷһ��ɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
        } else if (selection == 6) { //����
		if(cm.getLevel() >= 10 && cm.haveItem(1912340,1) && cm.getMeso()>=500000) {
            cm.gainItem(1912340,-1);
			cm.gainItem(1912340,1);
			cm.gainItem(1902340,1);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������ӹ���" + " : " + cm.getPlayer().getName() +"�������Ӷһ��ɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
        } else if (selection == 7) { //ñ��
		if(cm.getLevel() >= 10 && cm.haveItem(1912341,1) && cm.getMeso()>=500000) {
            cm.gainItem(1912341,-1);
			cm.gainItem(1912341,1);
			cm.gainItem(1902341,1);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������ӹ���" + " : " + cm.getPlayer().getName() +"�������Ӷһ��ɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		} else if (selection == 8) { //�׷�
		if(cm.getLevel() >= 10 && cm.haveItem(1912342,1) && cm.getMeso()>=500000) {
            cm.gainItem(1912342,-1);
			cm.gainItem(1912342,1);
			cm.gainItem(1902342,1);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������ӹ���" + " : " + cm.getPlayer().getName() +"�������Ӷһ��ɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   } else if (selection == 9) { //�׷�
		if(cm.getLevel() >= 10 && cm.haveItem(1912343,1) && cm.getMeso()>=500000) {
            cm.gainItem(1912343,-1);
			cm.gainItem(1912343,1);
			cm.gainItem(1902343,1);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������ӹ���" + " : " + cm.getPlayer().getName() +"�������Ӷһ��ɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   } else if (selection == 10) { //�׷�
		if(cm.getLevel() >= 10 && cm.haveItem(1912344,1) && cm.getMeso()>=500000) {
            cm.gainItem(1912344,-1);
			cm.gainItem(1912344,1);
			cm.gainItem(1902344,1);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������ӹ���" + " : " + cm.getPlayer().getName() +"�������Ӷһ��ɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   } else if (selection == 11) { //�׷�
		if(cm.getLevel() >= 10 && cm.haveItem(1912345,1) && cm.getMeso()>=500000) {
            cm.gainItem(1912345,-1);
			cm.gainItem(1912345,1);
			cm.gainItem(1902345,1);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������ӹ���" + " : " + cm.getPlayer().getName() +"�������Ӷһ��ɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   } else if (selection == 12) { //�׷�
		if(cm.getLevel() >= 10 && cm.haveItem(1912346,1) && cm.getMeso()>=500000) {
            cm.gainItem(1912346,-1);
			cm.gainItem(1912346,1);
			cm.gainItem(1902346,1);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������ӹ���" + " : " + cm.getPlayer().getName() +"�������Ӷһ��ɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		      } else if (selection == 13) { //�׷�
		if(cm.getLevel() >= 10 && cm.haveItem(1902401,1) && cm.getMeso()>=500000) {
            cm.gainItem(1902401,-1);
			cm.gainItem(1902401,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainItem(1912401,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������ӹ���" + " : " + cm.getPlayer().getName() +"�������Ӷһ��ɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   	      } else if (selection == 14) { //�׷�
		if(cm.getLevel() >= 10 && cm.haveItem(1902402,1) && cm.getMeso()>=500000) {
            cm.gainItem(1902402,-1);
			cm.gainItem(1902402,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainItem(1912402,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������ӹ���" + " : " + cm.getPlayer().getName() +"�������Ӷһ��ɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   	      } else if (selection == 15) { //�׷�
		if(cm.getLevel() >= 10 && cm.haveItem(1902403,1) && cm.getMeso()>=500000) {
            cm.gainItem(1902403,-1);
			cm.gainItem(1902403,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainItem(1912403,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������ӹ���" + " : " + cm.getPlayer().getName() +"�������Ӷһ��ɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		      	      } else if (selection == 16) { //�׷�
		if(cm.getLevel() >= 10 && cm.haveItem(1902405,1) && cm.getMeso()>=500000) {
            cm.gainItem(1902405,-1);
			cm.gainItem(1902405,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainItem(1912405,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������ӹ���" + " : " + cm.getPlayer().getName() +"�������Ӷһ��ɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		      	      } else if (selection == 17) { //�׷�
		if(cm.getLevel() >= 10 && cm.haveItem(1902311,1) && cm.getMeso()>=500000) {
            cm.gainItem(1902311,-1);
			cm.gainItem(1902311,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainItem(1912311,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������ӹ���" + " : " + cm.getPlayer().getName() +"�������Ӷһ��ɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   		      	      } else if (selection == 18) { //�׷�
		if(cm.getLevel() >= 10 && cm.haveItem(1902350,1) && cm.getMeso()>=500000) {
            cm.gainItem(1902350,-1);
			cm.gainItem(1902350,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainItem(1912350,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������ӹ���" + " : " + cm.getPlayer().getName() +"�������Ӷһ��ɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   		      	      } else if (selection == 19) { //�׷�
		if(cm.getLevel() >= 10 && cm.haveItem(1902407,1) && cm.getMeso()>=500000) {
            cm.gainItem(1902407,-1);
			cm.gainItem(1902407,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainItem(1912407,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������ӹ���" + " : " + cm.getPlayer().getName() +"�������Ӷһ��ɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   		      	      } else if (selection == 20) { //�׷�
		if(cm.getLevel() >= 10 && cm.haveItem(1902404,1) && cm.getMeso()>=500000) {
            cm.gainItem(1902404,-1);
			cm.gainItem(1902404,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainItem(1912404,50,50,50,50,5000,5000,50,50,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������ӹ���" + " : " + cm.getPlayer().getName() +"�������Ӷһ��ɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   	   		      	      } else if (selection == 21) { //�׷�
		if(cm.getLevel() >= 10 && cm.haveItem(1902411,1) && cm.getMeso()>=500000) {
            cm.gainItem(1902411,-1);
			cm.gainItem(1902411,188,188,188,188,5000,5000,188,188,0,0,0,0,0,0);
			cm.gainItem(1912411,0,0,0,0,5000,5000,0,0,0,0,0,0,0,0);
			cm.gainMeso(-500000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������ӹ���" + " : " + cm.getPlayer().getName() +"�������Ӷһ��ɹ�.",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
        }
    }
}


