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
			text += "\r\n"
            //text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            //text += "#L1##r" + ��ɫ��ͷ + "��ս���߼�BOSS����ħŮ#g>>>>>>>>#b��Ҫ#v4000463#*1\r\n\r\n"//3
			//text += "#L2##r" + ��ɫ��ͷ + "��ս���߼�BOSS������#g>>>>>>>>>>#b��Ҫ#v4000463#*1\r\n\r\n"//3
            //text += "#L3##r" + ��ɫ��ͷ + "��ս���߼�BOSS������#g>>>>>>>>>>#b��Ҫ#v4001126#*200+500��\r\n\r\n"//3
			//text += "#L4##r" + ��ɫ��ͷ + "��ս������BOSS����������ħ#g>>>>#b��Ҫ#v4000463#*2\r\n\r\n"//3
            //text += "#L6##r" + ��ɫ��ͷ + "��ս������BOSS����������#g>>>>>>#b��Ҫ#v4000463#*1��\r\n\r\n"//3
			//text += "#L7##r" + ��ɫ��ͷ + "��ս���ռ�BOSS�������˹#g>>>>>>#b��Ҫ#v4000463#*5\r\n\r\n"//3
			//text += "#L8##r" + ��ɫ��ͷ + "��ս���ռ�BOSS��Ʒ����#g>>>>>>#b��Ҫ#v4000463#*5\r\n\r\n"//3
			text += "#L1##k#v2510000#����������ʽ˵���ϳ�#v1003900#��ά50\r\n\r\n"//3͸��ñ��
			text += "#L2##k#v2510001#����������ʽ˵���ϳ�#v1022079#��ά50\r\n\r\n"//3͸���۾�
			text += "#L3##k#v2510002#����������ʽ˵���ϳ�#v1012289#��ά50\r\n\r\n"//3͸������
			text += "#L4##k#v2510003#����������ʽ˵���ϳ�#v1004974#��ά50\r\n\r\n"//3����ñ��
			text += "#L5##k#v2510004#����������ʽ˵���ϳ�#v1053208#��ά50\r\n\r\n"//3�����
			text += "#L6##k#v2510005#����������ʽ˵���ϳ�#v1702852#��ά50\r\n\r\n"//3�����Ǻ�ǹ
			text += "#L7##k#v2510006#����������ʽ˵���ϳ�#v1053367#��ά50\r\n\r\n"//3�ξ�С���Ƕ���
			text += "#L8##k#v2510007#����������ʽ˵���ϳ�#v1702874#��ά50\r\n\r\n"//3�ξ�С��������
			text += "#L9##k#v2510008#����������ʽ˵���ϳ�#v1004776#��ά50\r\n\r\n"//3��������ñ
			text += "#L10##k#v2510009#����������ʽ˵���ϳ�#v1053049#��ά50\r\n\r\n"//3����������
			text += "#L11##k#v2510010#����������ʽ˵���ϳ�#v1702830#��ά50\r\n\r\n"//3��������͸��ɡ
			text += "#L12##k#v2510011#����������ʽ˵���ϳ�#v1702977#��ά50\r\n\r\n"//3����������
			text += "#L13##k#v2510012#����������ʽ˵���ϳ�#v1005318#��ά50\r\n\r\n"//3������ñ��
			text += "#L14##k#v2510013#����������ʽ˵���ϳ�#v1053440#��ά50\r\n\r\n"//3�������·�
			text += "#L15##k#v2510014#����������ʽ˵���ϳ�#v1702976#��ά50\r\n\r\n"//3ɯ������
			text += "#L16##k#v2510015#����������ʽ˵���ϳ�#v1005320#��ά50\r\n\r\n"//3ɯ��ñ��
			text += "#L17##k#v2510016#����������ʽ˵���ϳ�#v1053442#��ά50\r\n\r\n"//3ɯ���·�
			text += "#L18##k#v2510017#����������ʽ˵���ϳ�#v1702975#��ά50\r\n\r\n"//3���������
			text += "#L19##k#v2510018#����������ʽ˵���ϳ�#v1005319#��ά50\r\n\r\n"//3�����ñ��
			text += "#L20##k#v2510019#����������ʽ˵���ϳ�#v1053441#��ά50\r\n\r\n"//3������·�
			text += "#L21##k#v2510020#����������ʽ˵���ϳ�#v1005113#��ά50\r\n\r\n"//3�ܱ���ůñ
			text += "#L22##k#v2510021#����������ʽ˵���ϳ�#v1053285#��ά50\r\n\r\n"//3�ܱ������޷�
			text += "#L23##k#v2510022#����������ʽ˵���ϳ�#v1702365#��ά50\r\n\r\n"//3�ܱ�������
			
			text += "#L24##k#v2510060#����������ʽ˵���ϳ�#v1062068#��ά50\r\n\r\n"//3�ܱ�������
			text += "#L25##k#v2510061#����������ʽ˵���ϳ�#v1082312#��ά50\r\n\r\n"//3�ܱ�������
			text += "#L26##k#v2510062#����������ʽ˵���ϳ�#v1072658#��ά50\r\n\r\n"//3�ܱ�������
			
			//text += "#L27##k#v2510063#����������ʽ˵���ϳ�#v1062112#��ά50\r\n\r\n"//3�ܱ�������
			//text += "#L28##k#v2510064#����������ʽ˵���ϳ�#v1082231#��ά50\r\n\r\n"//3�ܱ�������
			//text += "#L29##k#v2510065#����������ʽ˵���ϳ�#v1072517#��ά50\r\n\r\n"//3�ܱ�������
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
        } else if (selection == 1) { //͸��ñ��
			if( cm.haveItem(2510000,1) &&cm.haveItem(2210006,10) && cm.haveItem(4000040,10)&& cm.haveItem(4000176,10)&& cm.haveItem(1002019,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510000,-1);//͸��ñ�Ӻϳɹ�ʽ
			cm.gainItem(2210006,-10);//����ɫ��ţ�Ƕ�
			cm.gainItem(4000040,-10);//Ģ����ѿ��
			cm.gainItem(4000176,-10);//��ʬĢ����������
			cm.gainItem(1002019,-1);//��ɫͷ��
			cm.getPlayer().setBossLog("͸��ñ��",1,1)
			cm.gainItem(1003900,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//͸��ñ��
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"͸��ñ�Ӻϳɹ���" + " : " + cm.getPlayer().getName() +"͸��ñ�Ӻϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
        } else if (selection == 2) {  //͸���۾�
		
			if( cm.haveItem(2510001,1) && cm.haveItem(4000082,10)&& cm.haveItem(4000124,10)&& cm.haveItem(1022060,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510001,-1);//͸���۾��ϳɹ�ʽ
			cm.gainItem(4000082,-10);//��ʬ��ʧ�Ľ��
			cm.gainItem(4000124,-10);//ս�״���������ڴ濨
			cm.gainItem(1022060,-1);//����
			cm.getPlayer().setBossLog("͸���۾�",1,1)
			cm.gainItem(1022079,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//͸���۾�
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"͸���۾��ϳɹ���" + " : " + cm.getPlayer().getName() +"͸���۾��ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		  
        } else if (selection == 3) { //͸������
			if( cm.haveItem(2510002,1) && cm.haveItem(4000460,10)&& cm.haveItem(4000461,10)&& cm.haveItem(4000462,10)&& cm.haveItem(1012307,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510002,-1);//͸�����κϳɹ�ʽ
			cm.gainItem(4000460,-10);//����ͷ��
			cm.gainItem(4000461,-10);//�׿��Ľ�
			cm.gainItem(4000462,-10);//���������޵����
			cm.gainItem(1012307,-1);//��������  
			cm.getPlayer().setBossLog("͸������",1,1)
			cm.gainItem(1012289,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//͸������
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"͸�����κϳɹ���" + " : " + cm.getPlayer().getName() +"͸�����κϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
        } else if (selection == 4) {//����ñ��
		if( cm.haveItem(2510003,1) && cm.haveItem(4011007,1)&& cm.haveItem(4011008,1)&& cm.haveItem(1002357,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510003,-1);//����ñ�Ӻϳɹ�ʽ
			cm.gainItem(4011007,-1);//��ʯ
			cm.gainItem(4011008,-1);//�
			cm.gainItem(1002357,-1);//����ͷ��  
			cm.getPlayer().setBossLog("����ñ��",1,1)
			cm.gainItem(1004974,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//����ñ��
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"����ñ�Ӻϳɹ���" + " : " + cm.getPlayer().getName() +"����ñ�Ӻϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
        } else if (selection == 5) { //�����
		if( cm.haveItem(2510004,1) && cm.haveItem(4000082,5)&& cm.haveItem(4000021,200)&& cm.haveItem(1042027,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510004,-1);//����ñ�Ӻϳɹ�ʽ
			cm.gainItem(4000082,-1);//��ʬ��ʧ�Ľ�� 
			cm.gainItem(4000021,-200);//����Ƥ
			cm.gainItem(1042027,-1);//��ɫ������   
			cm.getPlayer().setBossLog("�����",1,1)
			cm.gainItem(1053208,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//�����
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"������ϳɹ���" + " : " + cm.getPlayer().getName() +"������ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
        } else if (selection == 6) { //�����Ǻ�ǹ
		if( cm.haveItem(2510005,1) && cm.haveItem(4000040,20)&& cm.haveItem(4000176,20)&& cm.haveItem(1492012,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510005,-1);//�����Ǻ�ǹ�ϳɹ�ʽ
			cm.gainItem(4000040,-20);//Ģ����ѿ��
			cm.gainItem(4000176,-20);//��ʬĢ����������
			cm.gainItem(1492012,-1);//��ǹ  
			cm.getPlayer().setBossLog("�����Ǻ�ǹ",1,1)
			cm.gainItem(1702852,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//�����Ǻ�ǹ
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�����Ǻ�ǹ�ϳɹ���" + " : " + cm.getPlayer().getName() +"�����Ǻ�ǹ�ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
        } else if (selection == 7) { //�ξ�С���Ƕ���
		if( cm.haveItem(2510006,1) && cm.haveItem(2210006,10)&& cm.haveItem(4000067,10)&& cm.haveItem(1042027,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510006,-1);//�ξ�С���Ƕ���ϳɹ�ʽ
			cm.gainItem(2210006,-10);//����ɫ��ţ�Ƕ�
			cm.gainItem(4000067,-10);//��ħ����Ľ�
			cm.gainItem(1042027,-1);//��ɫ������  
			cm.getPlayer().setBossLog("�ξ�С���Ƕ���",1,1)
			cm.gainItem(1053367,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//�ξ�С���Ƕ���
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�ξ�����ϳɹ���" + " : " + cm.getPlayer().getName() +"�ξ�С���Ƕ���ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		} else if (selection == 8) { //�ξ�С��������
		if( cm.haveItem(2510007,1) && cm.haveItem(4000067,10)&& cm.haveItem(4000124,10)&& cm.haveItem(1402016,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510007,-1);//�ξ�С����������ʽ
			cm.gainItem(4000067,-10);//ħ����Ľ�
			cm.gainItem(4000124,-10);//ս�״���������ڴ濨
			cm.gainItem(1402016,-1);//������  
			cm.getPlayer().setBossLog("�ξ�С��������",1,1)
			cm.gainItem(1702874,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//�ξ�С��������
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�ξ������ϳɹ���" + " : " + cm.getPlayer().getName() +"�ξ�С���������ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   } else if (selection == 9) { //��������ñ
		if( cm.haveItem(2510008,1) && cm.haveItem(4000123,100)&& cm.haveItem(4000128,100)&& cm.haveItem(1002357,1) && cm.getMeso()>=50000000) {
            cm.gainItem(2510008,-1);//��������ñ��ʽ
			cm.gainItem(4000123,-10);//���˶��۾�
			cm.gainItem(4000128,-10);//��С�����ñ��
			cm.gainItem(1002357,-1);//������  
			cm.getPlayer().setBossLog("��������ñ",1,1)
			cm.gainItem(1004776,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//��������ñ
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"��������ñ�ϳɹ���" + " : " + cm.getPlayer().getName() +"��������ñ�ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   } else if (selection == 10) { //����������
		if( cm.haveItem(2510009,1) && cm.haveItem(4000444,200)&& cm.haveItem(4000449,200)&& cm.haveItem(4000454,200) && cm.getMeso()>=50000000) {
            cm.gainItem(2510009,-1);//���������¹�ʽ
			cm.gainItem(4000444,-200);//��ɫ�½�
			cm.gainItem(4000449,-200);//��ɫ�½�
			cm.gainItem(4000454,-200);//��ɫ�½�
			 
			cm.getPlayer().setBossLog("����������",1,1)
			cm.gainItem(1053049,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//����������
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"���������ºϳɹ���" + " : " + cm.getPlayer().getName() +"���������ºϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
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
		if( cm.haveItem(2510013,1) && cm.haveItem(4000460,10)&& cm.haveItem(4000461,10)&& cm.haveItem(4000462,10) && cm.getMeso()>=50000000) {
            cm.gainItem(2510013,-1);//�������·���ʽ
			cm.gainItem(4000460,-10);//���ͷ��
			cm.gainItem(4000461,-10);//�׿��Ľ�
			cm.gainItem(4000462,-10);//���������޵����  
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
		if( cm.haveItem(2510016,1) && cm.haveItem(4000040,20)&& cm.haveItem(4000176,20) && cm.getMeso()>=50000000) {
            cm.gainItem(2510016,-1);//ɯ���·���ʽ
			cm.gainItem(4000040,-20);//Ģ����ѿ��
			cm.gainItem(4000176,-20);//��ʬĢ����������
			  
			cm.getPlayer().setBossLog("ɯ���·�",1,1)
			cm.gainItem(1053442,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//ɯ���·�
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
			cm.gainItem(1005319,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//�����ñ��
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
			cm.gainItem(1053441,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//������·�
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"������·�����" + " : " + cm.getPlayer().getName() +"������·��ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		   	   		      	      } else if (selection == 21) { //�ܱ���ůñ
		if( cm.haveItem(2510020,1) && cm.haveItem(4000108,500)&& cm.haveItem(4000283,500)&& cm.getMeso()>=50000000) {
            cm.gainItem(2510020,-1);//�ܱ���ůñ��ʽ
			cm.gainItem(4000108,-500);//�ɰ�����è����
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
		if( cm.haveItem(2510021,1) && cm.haveItem(4000108,500)&& cm.haveItem(4000283,500)&& cm.getMeso()>=50000000) {
            cm.gainItem(2510021,-1);//�ܱ������޷���ʽ
			cm.gainItem(4000108,-500);//�ɰ�����è����
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
		if( cm.haveItem(2510022,1) && cm.haveItem(4001241,20)&& cm.haveItem(2210006,20)&& cm.getMeso()>=50000000) {
            cm.gainItem(2510022,-1);//�ܱ���������ʽ
			cm.gainItem(4001241,-20);//��������
			cm.gainItem(2210006,-20);//��ɫ��ţ��
			cm.getPlayer().setBossLog("�ܱ�������",1,1)
			cm.gainItem(1702365,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//�ܱ�������
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�ܱ�����������" + " : " + cm.getPlayer().getName() +"�ܱ��������ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		      	   		      	      } else if (selection == 24) { //�ʺ����
		if( cm.haveItem(2510060,1) && cm.haveItem(4000233,500)&& cm.haveItem(4000234,500)&& cm.haveItem(4000232,500)&& cm.haveItem(1060007,1)&& cm.haveItem(4002001,20)&& cm.haveItem(4000463,50)&& cm.haveItem(2210006,10)) {
            cm.gainItem(2510060,-1);//�ʺ���ӹ�ʽ
			cm.gainItem(4000233,-500);//������ˮ
			cm.gainItem(4000234,-500);//������Ĺ�ͷ
			cm.gainItem(4000232,-500);//������Ļ�
			cm.gainItem(1060007,-1);//�����
			cm.gainItem(4002001,-20);//����ţƱ
			cm.gainItem(4000463,-50);//�н��
			cm.gainItem(2210006,-10);//��ɫ��ţ��
			cm.getPlayer().setBossLog("�ʺ����",1,1)
			cm.gainItem(1062068,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//�ʺ����
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�ʺ���ӹ���" + " : " + cm.getPlayer().getName() +"�ʺ���Ӻϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		        	   		      	      } else if (selection == 25) { //�ʺ�����
		if( cm.haveItem(2510061,1) && cm.haveItem(4000233,500)&& cm.haveItem(4000234,500)&& cm.haveItem(4000232,500)&& cm.haveItem(4002001,20)&& cm.haveItem(4000463,50)&& cm.haveItem(2210006,20)) {
            cm.gainItem(2510061,-1);//�ʺ����׹�ʽ
			cm.gainItem(4000233,-500);//������ˮ
			cm.gainItem(4000234,-500);//������Ĺ�ͷ
			cm.gainItem(4000232,-500);//������Ļ�
			cm.gainItem(4002001,-20);//����ţƱ
			cm.gainItem(4000463,-50);//�н��
			cm.gainItem(2210006,-20);//��ɫ��ţ��
			cm.getPlayer().setBossLog("�ʺ�����",1,1)
			cm.gainItem(1082312,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//�ʺ����
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�ʺ����׹���" + " : " + cm.getPlayer().getName() +"�ʺ����׺ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
			}
		        	   		      	      } else if (selection == 26) { //�ʺ�Ь��
		if( cm.haveItem(2510062,1) && cm.haveItem(4000233,500)&& cm.haveItem(4000234,500)&& cm.haveItem(4000232,500)&& cm.haveItem(4002001,20)&& cm.haveItem(4000463,50)&& cm.haveItem(1072005,1)&& cm.haveItem(2210006,10)) {
            cm.gainItem(2510062,-1);//�ʺ�Ь�ӹ�ʽ
			cm.gainItem(4000233,-500);//������ˮ
			cm.gainItem(4000234,-500);//������Ĺ�ͷ
			cm.gainItem(4000232,-500);//������Ļ�
			cm.gainItem(4002001,-20);//����ţƱ
			cm.gainItem(4000463,-50);//�н��
			cm.gainItem(2210006,-10);//��ɫ��ţ��
			cm.getPlayer().setBossLog("�ʺ�Ь��",1,1)
			cm.gainItem(1072658,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//�ʺ�Ь��
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�ʺ�Ь�ӹ���" + " : " + cm.getPlayer().getName() +"�ʺ�Ь�Ӻϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
			}
			        	   		      	      } else if (selection == 27) { //�ڿ�
		if( cm.haveItem(2510063,1) && cm.haveItem(4002001,20)&& cm.haveItem(4000463,50)&& cm.haveItem(1060007,1)&& cm.haveItem(4000205,300)&& cm.haveItem(4000106,500)&& cm.haveItem(4000171,100)) {
            cm.gainItem(2510063,-1);//�ڿ㹫ʽ
			cm.gainItem(4002001,-20);//����ţƱ
			cm.gainItem(4000463,-50);//�н��
			cm.gainItem(1060007,-1);//�����
			cm.gainItem(4000205,-300);// ����
			cm.gainItem(4000106,-500);//�����è���޻���
			cm.gainItem(4000171,-100);//��Ƥ
			cm.getPlayer().setBossLog("�ڿ�",1,1)
			cm.gainItem(1062112,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//�ڿ�
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�ڿ㹫��" + " : " + cm.getPlayer().getName() +"�ڿ�ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
			}
				        	   		      	      } else if (selection == 28) { //�ֱ� 
		if( cm.haveItem(2510064,1) && cm.haveItem(4002001,20)&& cm.haveItem(4000463,50)&& cm.haveItem(4000115,200)&& cm.haveItem(4000111,200)&& cm.haveItem(4000435,10)&& cm.haveItem(4000114,200)) {
            cm.gainItem(2510064,-1);//�ֱ�ʽ
			cm.gainItem(4002001,-20);//����ţƱ
			cm.gainItem(4000463,-50);//�н��
			cm.gainItem(4000115,-200);//����
			cm.gainItem(4000111,-200);//���˵ĵ��
			cm.gainItem(4000435,-10);//���˵�Կ��
			cm.gainItem(4000114,-200);//С����
			cm.getPlayer().setBossLog("�ֱ�",1,1)
			cm.gainItem(1082231,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//�ֱ�
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�ֱ���" + " : " + cm.getPlayer().getName() +"�ֱ�ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
			}
							        	   		      	      } else if (selection == 29) { //��ëЬ 
		if( cm.haveItem(2510065,1) && cm.haveItem(4002001,20)&& cm.haveItem(4000463,50)&& cm.haveItem(4003004,300)&& cm.haveItem(4000269,100)&& cm.haveItem(4000268,200)&& cm.haveItem(1072005,1)) {
            cm.gainItem(2510065,-1);//��ëЬ��ʽ
			cm.gainItem(4002001,-20);//����ţƱ
			cm.gainItem(4000463,-50);//�н��
			cm.gainItem(4003004,-300);//����ë
			cm.gainItem(4000269,-100);//����������
			cm.gainItem(4000268,-200);//������ĳ��
			cm.gainItem(1072005,-1);//Ƥ����Ь
			cm.getPlayer().setBossLog("��ëЬ",1,1)
			cm.gainItem(1072517,50,50,50,50,0,0,0,0,0,0,0,0,0,0);//��ëЬ
			cm.gainMeso(-50000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�ֱ���" + " : " + cm.getPlayer().getName() +"�ֱ�ϳ� ȫ����50. �ռ���װ����������",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
			}
        }
    }
}


