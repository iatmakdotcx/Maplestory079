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
			text += "#r                  ����ʱװ��װ��������\r\n              #bÿ����һ�׶��⽱��100���Ե�\r\n                #b��װ�˺�������ʾ��ɫ����\r\n\r\n"
            //text += ""\r\n"
            //text += "#L1##r" + ��ɫ��ͷ + "��ս���߼�BOSS����ħŮ#g>>>>>>>>#b��Ҫ#v4000463#*1\r\n\r\n"//3
			//text += "#L2##r" + ��ɫ��ͷ + "��ս���߼�BOSS������#g>>>>>>>>>>#b��Ҫ#v4000463#*1\r\n\r\n"//3
            //text += "#L3##r" + ��ɫ��ͷ + "��ս���߼�BOSS������#g>>>>>>>>>>#b��Ҫ#v4001126#*200+500��\r\n\r\n"//3
			//text += "#L4##r" + ��ɫ��ͷ + "��ս������BOSS����������ħ#g>>>>#b��Ҫ#v4000463#*2\r\n\r\n"//3
            //text += "#L6##r" + ��ɫ��ͷ + "��ս������BOSS����������#g>>>>>>#b��Ҫ#v4000463#*1��\r\n\r\n"//3
			//text += "#L7##r" + ��ɫ��ͷ + "��ս���ռ�BOSS�������˹#g>>>>>>#b��Ҫ#v4000463#*5\r\n\r\n"//3
			//text += "#L8##r" + ��ɫ��ͷ + "��ս���ռ�BOSS��Ʒ����#g>>>>>>#b��Ҫ#v4000463#*5\r\n\r\n"//3
			text += " #L1##k������װ#r(�˺�5%)#k�ϳ�#v1003900##v1012289##v1022079#������ά100#l\r\n\r\n"//3͸��ñ��
			text += " #L2##k������װ#r(�˺�5%)#k�ϳ�#v1004974##v1053208##v1702852#������ά100#l\r\n\r\n"//3͸���۾�
			text += "   #L3##k������װ#r(�˺�4%)#k�ϳ�#v1053367##v1702874#������ά100#l\r\n\r\n"//3͸������
			text += " #L4##k������װ#r(�˺�5%)#k�ϳ�#v1004776##v1053049##v1702830#������ά100#l\r\n\r\n"//3����ñ��
			text += " #L5##k������װ#r(�˺�5%)#k�ϳ�#v1702977##v1005318##v1053440#������ά100#l\r\n\r\n"//3����ñ��
			text += " #L6##k������װ#r(�˺�5%)#k�ϳ�#v1702976##v1005320##v1053442#������ά100#l\r\n\r\n"//3����ñ��
			text += " #L7##k������װ#r(�˺�5%)#k�ϳ�#v1702975##v1005319##v1053441#������ά100#l\r\n\r\n"//3����ñ��
			text += " #L8##k������װ#r(�˺�5%)#k�ϳ�#v1005113##v1053285##v1702365#������ά100#l\r\n\r\n"//3����ñ��
			text += " #L9##k������װ#r(�˺�5%)#k�ϳ�#v1062068##v1082312##v1072658#������ά100#l\r\n\r\n"//3����ñ��
			text += " #L10##k������װ#r(�˺�5%)#k�ϳ�#v1062112##v1082231##v1072517#������ά100#l\r\n\r\n"//3����ñ��
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
        } else if (selection == 1) { //͸��
			if( cm.haveItem(1003900,1) &&cm.haveItem(1022079,1) && cm.haveItem(1012289,1)&& cm.getPlayer().getBossLog("͸��ñ��",1) == 1&& cm.getPlayer().getBossLog("͸���۾�",1) == 1&& cm.getPlayer().getBossLog("͸������",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1003900,-1);//͸��ñ��
			cm.gainItem(1022079,-1);//͸���۾�
			cm.gainItem(1012289,-1);//͸������
			cm.gainItem(1003900,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//͸��ñ��
			cm.gainItem(1022079,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//͸���۾�
			cm.gainItem(1012289,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//͸������
			cm.getPlayer().setBossLog("͸��ñ��",1,1)
			cm.getPlayer().setBossLog("͸���۾�",1,1)
			cm.getPlayer().setBossLog("͸������",1,1)
			cm.gainAp(100);//�����Ʒ
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"͸����װ�����" + " : " + cm.getPlayer().getName() +"͸����װ���� 3����ȫ����100. ������100���Ե�",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ��� ��Ϸ��5000��");
			cm.dispose();
		   }
        } else if (selection == 2) {  //����
		
			if( cm.haveItem(1004974,1) &&cm.haveItem(1053208,1) && cm.haveItem(1702852,1)&& cm.getPlayer().getBossLog("����ñ��",1) == 1&& cm.getPlayer().getBossLog("�����",1) == 1&& cm.getPlayer().getBossLog("�����Ǻ�ǹ",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1004974,-1);//����ñ��
			cm.gainItem(1053208,-1);//�����۾�
			cm.gainItem(1702852,-1);//��������
			cm.gainItem(1004974,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//����ñ��
			cm.gainItem(1053208,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//�����۾�
			cm.gainItem(1702852,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//��������
			cm.getPlayer().setBossLog("����ñ��",1,1)
			cm.getPlayer().setBossLog("�����",1,1)
			cm.getPlayer().setBossLog("�����Ǻ�ǹ",1,1)
			cm.gainAp(100);//�����Ʒ
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"������װ�����" + " : " + cm.getPlayer().getName() +"������װ���� 3����ȫ����100. ������100���Ե�",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ��� ��Ϸ��5000��");
			cm.dispose();
		   }
		  
        } else if (selection == 3) { //�ξ�С��
			if( cm.haveItem(1053367,1) &&cm.haveItem(1702874,1) && cm.getPlayer().getBossLog("�ξ�С���Ƕ���",1) == 1&& cm.getPlayer().getBossLog("�ξ�С��������",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1053367,-1);//�ξ�С���Ƕ���
			cm.gainItem(1702874,-1);//�ξ�С��������
			cm.gainItem(1053367,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//�ξ�С���Ƕ���
			cm.gainItem(1702874,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//�ξ�С��������
			cm.getPlayer().setBossLog("�ξ�С���Ƕ���",1,1)
			cm.getPlayer().setBossLog("�ξ�С��������",1,1)
			cm.gainAp(100);//�����Ʒ
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�ξ���װ�����" + " : " + cm.getPlayer().getName() +"�ξ���װ���� 2����ȫ����100. ������100���Ե�",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ��� ��Ϸ��5000��");
			cm.dispose();
		   }
        } else if (selection == 4) {//������
		if( cm.haveItem(1004776,1) &&cm.haveItem(1053049,1) && cm.haveItem(1702830,1)&& cm.getPlayer().getBossLog("��������ñ",1) == 1&& cm.getPlayer().getBossLog("��������͸��ɡ",1) == 1&& cm.getPlayer().getBossLog("����������",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1004776,-1);//��������ñ
			cm.gainItem(1053049,-1);//����������
			cm.gainItem(1702830,-1);//��������͸��ɡ
			cm.gainItem(1004776,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//��������ñ
			cm.gainItem(1053049,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//����������
			cm.gainItem(1702830,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//��������͸��ɡ
			cm.getPlayer().setBossLog("��������ñ",1,1)
			cm.getPlayer().setBossLog("����������",1,1)
			cm.getPlayer().setBossLog("��������͸��ɡ",1,1)
			cm.gainAp(100);//�����Ʒ
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"��������װ�����" + " : " + cm.getPlayer().getName() +"��������װ���� 3����ȫ����100. ������100���Ե�",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ��� ��Ϸ��5000��");
			cm.dispose();
		   }
        } else if (selection == 5) { //������
		if( cm.haveItem(1702977,1) &&cm.haveItem(1005318,1) && cm.haveItem(1053440,1)&& cm.getPlayer().getBossLog("����������",1) == 1&& cm.getPlayer().getBossLog("������ñ��",1) == 1&& cm.getPlayer().getBossLog("�������·�",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1702977,-1);//����������
			cm.gainItem(1005318,-1);//������ñ��
			cm.gainItem(1053440,-1);//�������·�
			cm.gainItem(1702977,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//����������
			cm.gainItem(1005318,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//������ñ��
			cm.gainItem(1053440,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//�������·�
			cm.getPlayer().setBossLog("����������",1,1)
			cm.getPlayer().setBossLog("������ñ��",1,1)
			cm.getPlayer().setBossLog("�������·�",1,1)
			cm.gainAp(100);//�����Ʒ
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"��������װ�����" + " : " + cm.getPlayer().getName() +"��������װ���� 3����ȫ����100. ������100���Ե�",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ��� ��Ϸ��5000��");
			cm.dispose();
		   }
        } else if (selection == 6) { //ɯ��
		if( cm.haveItem(1702976,1) &&cm.haveItem(1005320,1) && cm.haveItem(1053442,1)&& cm.getPlayer().getBossLog("ɯ������",1) == 1&& cm.getPlayer().getBossLog("ɯ���·�",1) == 1&& cm.getPlayer().getBossLog("ɯ��ñ��",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1702976,-1);//ɯ������
			cm.gainItem(1005320,-1);//ɯ��ñ��
			cm.gainItem(1053442,-1);//ɯ���·�
			cm.gainItem(1702976,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//ɯ������
			cm.gainItem(1005320,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//ɯ��ñ��
			cm.gainItem(1053442,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//ɯ���·�
			cm.getPlayer().setBossLog("ɯ������",1,1)
			cm.getPlayer().setBossLog("ɯ��ñ��",1,1)
			cm.getPlayer().setBossLog("ɯ���·�",1,1)
			cm.gainAp(100);//�����Ʒ
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"ɯ����װ�����" + " : " + cm.getPlayer().getName() +"ɯ����װ���� 3����ȫ����100. ������100���Ե�",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ��� ��Ϸ��5000��");
			cm.dispose();
		   }
        } else if (selection == 7) { //�����
		if( cm.haveItem(1702975,1) &&cm.haveItem(1005319,1) && cm.haveItem(1053441,1)&& cm.getPlayer().getBossLog("���������",1) == 1&& cm.getPlayer().getBossLog("�����ñ��",1) == 1&& cm.getPlayer().getBossLog("������·�",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1702975,-1);//���������
			cm.gainItem(1005319,-1);//�����ñ��
			cm.gainItem(1053441,-1);//������·�
			cm.gainItem(1702975,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//���������
			cm.gainItem(1005319,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//�����ñ��
			cm.gainItem(1053441,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//������·�
			cm.getPlayer().setBossLog("���������",1,1)
			cm.getPlayer().setBossLog("�����ñ��",1,1)
			cm.getPlayer().setBossLog("������·�",1,1)
			cm.gainAp(100);//�����Ʒ
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������װ�����" + " : " + cm.getPlayer().getName() +"�������װ���� 3����ȫ����100. ������100���Ե�",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ��� ��Ϸ��5000��");
			cm.dispose();
		   }
		} else if (selection == 8) { //�ܱ���
		if( cm.haveItem(1053285,1) &&cm.haveItem(1005113,1) && cm.haveItem(1702365,1)&& cm.getPlayer().getBossLog("�ܱ������޷�",1) == 1&& cm.getPlayer().getBossLog("�ܱ���ůñ",1) == 1&& cm.getPlayer().getBossLog("�ܱ�������",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1053285,-1);//�ܱ������޷�
			cm.gainItem(1005113,-1);//�ܱ���ůñ
			cm.gainItem(1702365,-1);//�ܱ�������
			cm.gainItem(1053285,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//�ܱ������޷�
			cm.gainItem(1005113,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//�ܱ���ůñ
			cm.gainItem(1702365,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//�ܱ�������
			cm.getPlayer().setBossLog("�ܱ������޷�",1,1)
			cm.getPlayer().setBossLog("�ܱ���ůñ",1,1)
			cm.getPlayer().setBossLog("�ܱ�������",1,1)
			cm.gainAp(100);//�����Ʒ
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�ܱ�����װ�����" + " : " + cm.getPlayer().getName() +"�ܱ�����װ���� 3����ȫ����100. ������100���Ե�",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ��� ��Ϸ��5000��");
			cm.dispose();
		   }
		   } else if (selection == 9) { //�ʺ���װ
		if( cm.haveItem(1062068,1) &&cm.haveItem(1082312,1) && cm.haveItem(1072658,1)&& cm.getPlayer().getBossLog("�ʺ����",1) == 1&& cm.getPlayer().getBossLog("�ʺ�����",1) == 1&& cm.getPlayer().getBossLog("�ʺ�Ь��",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1062068,-1);//�ʺ����
			cm.gainItem(1082312,-1);//�ʺ�����
			cm.gainItem(1072658,-1);//�ʺ�Ь��
			cm.gainItem(1062068,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//�ʺ����
			cm.gainItem(1082312,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//�ʺ�����
			cm.gainItem(1072658,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//�ʺ�Ь��
			cm.getPlayer().setBossLog("�ʺ����",1,1)
			cm.getPlayer().setBossLog("�ʺ�����",1,1)
			cm.getPlayer().setBossLog("�ʺ�Ь��",1,1)
			cm.gainAp(100);//�����Ʒ
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�ʺ���װ�����" + " : " + cm.getPlayer().getName() +"�ʺ���װ���� 3����ȫ����100. ������100���Ե�",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ��� ��Ϸ��5000��");
			cm.dispose();
		   }
		   } else if (selection == 10) { //�ڿ���װ
		if( cm.haveItem(1062112,1) &&cm.haveItem(1082231,1) && cm.haveItem(1072517,1)&& cm.getPlayer().getBossLog("�ڿ�",1) == 1&& cm.getPlayer().getBossLog("�ֱ�",1) == 1&& cm.getPlayer().getBossLog("��ëЬ",1) == 1 && cm.getMeso()>=50000000) {
            cm.gainItem(1062112,-1);//�ڿ�
			cm.gainItem(1082231,-1);//�ֱ�
			cm.gainItem(1072517,-1);//��ëЬ
			cm.gainItem(1062112,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//�ڿ�
			cm.gainItem(1082231,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//�ֱ�
			cm.gainItem(1072517,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//��ëЬ
			cm.getPlayer().setBossLog("�ڿ�",1,1)
			cm.getPlayer().setBossLog("�ֱ�",1,1)
			cm.getPlayer().setBossLog("��ëЬ",1,1)
			cm.gainAp(100);//�����Ʒ
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�ڿ���װ�����" + " : " + cm.getPlayer().getName() +"�ܱ�����װ���� 3����ȫ����100. ������100���Ե�",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ��� ��Ϸ��5000��");
			cm.dispose();
		   }
		   } else if (selection == 11) { //��������͸��ɡ
		if( cm.haveItem(2510010,1) && cm.haveItem(4000124,10)&& cm.haveItem(4000082,10)&& cm.haveItem(1302017,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510010,-1);//��������͸��ɡ��ʽ
			cm.gainItem(4000124,-10);//ս�״���������ڴ濨
			cm.gainItem(4000082,-10);//��ʬ��ʧ�Ľ��
			cm.gainItem(1302017,-1);//��ɫ��ɡ  
			cm.getPlayer().setBossLog("��������͸��ɡ",1,1)
			cm.gainItem(1702830,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//��������͸��ɡ
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"��������͸��ɡ����" + " : " + cm.getPlayer().getName() +"��������͸��ɡ�ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   } else if (selection == 12) { //����������
		if( cm.haveItem(2510011,1) && cm.haveItem(4000169,1000)&& cm.haveItem(4031561,10) && cm.getMeso()>=50000000) {
            cm.gainItem(2510011,-1);//������������ʽ
			cm.gainItem(4000169,-1000);//���װ�
			cm.gainItem(4031561,-10);//�����ȵ���Ʊ  
			cm.getPlayer().setBossLog("����������",1,1)
			cm.gainItem(1702977,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//����������
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"��������������" + " : " + cm.getPlayer().getName() +"�����������ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		      } else if (selection == 13) { //������ñ��
		if( cm.haveItem(2510012,1) && cm.haveItem(4000445,400)&& cm.haveItem(4000450,400)&& cm.haveItem(4000455,400) && cm.getMeso()>=50000000) {
            cm.gainItem(2510012,-1);//������ñ�ӹ�ʽ
			cm.gainItem(4000445,-400);//׷����ɫ��ñ
			cm.gainItem(4000450,-400);//�����ɫ��ñ 
			cm.gainItem(4000455,-400);//��ں�ɫ��ñ  
			cm.getPlayer().setBossLog("������ñ��",1,1)
			cm.gainItem(1005318,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//������ñ��
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"������ñ�ӹ���" + " : " + cm.getPlayer().getName() +"������ñ�Ӻϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   	      } else if (selection == 14) { //�������·�
		if( cm.haveItem(2510013,1) && cm.haveItem(4009113,10)&& cm.haveItem(4009123,10)&& cm.haveItem(4009118,10) && cm.getMeso()>=50000000) {
            cm.gainItem(2510013,-1);//�������·���ʽ
			cm.gainItem(4009113,-10);//���ͷ��
			cm.gainItem(4009123,-10);//�׿��Ľ�
			cm.gainItem(4009118,-10);//���������޵����  
			cm.getPlayer().setBossLog("�������·�",1,1)
			cm.gainItem(1053440,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//�������·�
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������·�����" + " : " + cm.getPlayer().getName() +"�������·��ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   	      } else if (selection == 15) { //ɯ������
		if( cm.haveItem(2510014,1) && cm.haveItem(4000109,1000)&& cm.haveItem(4002000,10) &&cm.getMeso()>=50000000) {
            cm.gainItem(2510014,-1);//ɯ��������ʽ
			cm.gainItem(4000109,-100);//���СѼ
			cm.gainItem(4002000,-10);//��ţ��Ʊ
			cm.getPlayer().setBossLog("ɯ������",1,1)
			cm.gainItem(1702976,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//ɯ������
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"ɯ����������" + " : " + cm.getPlayer().getName() +"ɯ�������ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		      	      } else if (selection == 16) { //ɯ��ñ��
		if( cm.haveItem(2510015,1) && cm.haveItem(4000445,400)&& cm.haveItem(4000450,400)&& cm.haveItem(4000455,400) && cm.getMeso()>=50000000) {
            cm.gainItem(2510015,-1);//ɯ��ñ�ӹ�ʽ
			cm.gainItem(4000445,-400);//׷����ɫ��ñ
			cm.gainItem(4000450,-400);//�����ɫ��ñ
			cm.gainItem(4000455,-400);//��ں�ɫ��ñ  
			cm.getPlayer().setBossLog("ɯ��ñ��",1,1)
			cm.gainItem(1005320,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//ɯ��ñ��
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"ɯ��ñ�ӹ���" + " : " + cm.getPlayer().getName() +"ɯ��ñ�Ӻϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		      	      } else if (selection == 17) { //ɯ���·�
		if( cm.haveItem(2510016,1) && cm.haveItem(4000040,20)&& cm.haveItem(4032966,20)&& cm.haveItem(4009118,10) && cm.getMeso()>=50000000) {
            cm.gainItem(2510016,-1);//ɯ���·���ʽ
			cm.gainItem(4000040,-20);//������ѿ��
			cm.gainItem(4032966,-20);//��ʬ������������
			  
			cm.getPlayer().setBossLog("ɯ���·�",1,1)
			cm.gainItem(1053440,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//ɯ���·�
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"ɯ���·�����" + " : " + cm.getPlayer().getName() +"ɯ���·��ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		           } else if (selection == 18) { //���������
		if( cm.haveItem(2510017,1) && cm.haveItem(4002000,10)&& cm.haveItem(4002001,10)&& cm.haveItem(4002002,10) &&cm.haveItem(4002003,10) && cm.getMeso()>=50000000) {
            cm.gainItem(2510017,-1);//�����������ʽ
			cm.gainItem(4002000,-10);//��ţ��Ʊ
			cm.gainItem(4002001,-10);//����ţ��Ʊ
			cm.gainItem(4002002,-10);//ľ����Ʊ  
			cm.gainItem(4002003,-10);//��ˮ����Ʊ
			cm.getPlayer().setBossLog("���������",1,1)
			cm.gainItem(1702975,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//���������
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������������" + " : " + cm.getPlayer().getName() +"����������ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   		      	      } else if (selection == 19) { //�����ñ��
		if( cm.haveItem(2510018,1) && cm.haveItem(4000247,500)&& cm.haveItem(4000041,500)&& cm.getMeso()>=50000000) {
            cm.gainItem(2510018,-1);//�����ñ�ӹ�ʽ
			cm.gainItem(4000247,-500);//���ܵĺ���
			cm.gainItem(4000041,-500);//���ŵ�����������  
			cm.getPlayer().setBossLog("�����ñ��",1,1)
			cm.gainItem(1053440,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//�����ñ��
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�����ñ�ӹ���" + " : " + cm.getPlayer().getName() +"�����ñ�Ӻϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   		      	      } else if (selection == 20) { //������·�
		if( cm.haveItem(2510019,1) && cm.haveItem(4000247,500)&& cm.haveItem(4000247,500)&& cm.getMeso()>=50000000) {
            cm.gainItem(2510019,-1);//������·���ʽ
			cm.gainItem(4000247,-500);//���ܵĺ���
			cm.gainItem(4000041,-500);//���ŵ����������� 
			cm.getPlayer().setBossLog("������·�",1,1)
			cm.gainItem(1053440,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//������·�
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"������·�����" + " : " + cm.getPlayer().getName() +"������·��ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   	   		      	      } else if (selection == 21) { //�ܱ���ůñ
		if( cm.haveItem(2510020,1) && cm.haveItem(4009080,500)&& cm.haveItem(4000283,500)&& cm.getMeso()>=50000000) {
            cm.gainItem(2510020,-1);//�ܱ���ůñ��ʽ
			cm.gainItem(4009080,-500);//�ɰ�����è����
			cm.gainItem(4000283,-500);//���� 
			cm.getPlayer().setBossLog("�ܱ���ůñ",1,1)
			cm.gainItem(1005113,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//�ܱ���ůñ
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�ܱ���ůñ����" + " : " + cm.getPlayer().getName() +"�ܱ���ůñ�ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		      	   		      	      } else if (selection == 22) { //�ܱ������޷�
		if( cm.haveItem(2510021,1) && cm.haveItem(4009080,500)&& cm.haveItem(4000283,500)&& cm.getMeso()>=50000000) {
            cm.gainItem(2510021,-1);//�ܱ������޷���ʽ
			cm.gainItem(4009080,-500);//�ɰ�����è����
			cm.gainItem(4000283,-500);//���� 
			cm.getPlayer().setBossLog("�ܱ������޷�",1,1)
			cm.gainItem(1053285,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//�ܱ������޷�
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�ܱ������޷�����" + " : " + cm.getPlayer().getName() +"�ܱ������޷��ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		      	   		      	      } else if (selection == 23) { //�ܱ�������
		if( cm.haveItem(2510022,1) && cm.haveItem(4001241,20)&& cm.haveItem(2591008,2)&& cm.getMeso()>=50000000) {
            cm.gainItem(2510022,-1);//�ܱ���������ʽ
			cm.gainItem(4001241,-20);//��������
			cm.gainItem(2591008,-2);//��걦��(�乫��è) 
			cm.getPlayer().setBossLog("�ܱ�������",1,1)
			cm.gainItem(1702365,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//�ܱ�������
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�ܱ�����������" + " : " + cm.getPlayer().getName() +"�ܱ��������ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		      	   		      	      } else if (selection == 24) { //�׷�
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
		        	   		      	      } else if (selection == 25) { //�׷�
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


