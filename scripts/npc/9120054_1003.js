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
			text += "#L1##b#v2511000#����������ʽ˵���ϳ�#v1902401#����ȫ����600\r\n\r\n"//3��������
			text += "#L2##b#v2511001#����������ʽ˵���ϳ�#v1912401##r����ȫ����600\r\n\r\n"//3�������ﰰ��
			text += "#L3##b#v2511002#����������ʽ˵���ϳ�#v1902411#����ȫ����666\r\n\r\n"//3��è����
			text += "#L4##b#v2511003#����������ʽ˵���ϳ�#v1912411##r����ȫ����666\r\n\r\n"//3��è���ﰰ��
			//text += "#L5##k#v2510004#����������ʽ˵���ϳ�#v1053208#ȫ����50\r\n\r\n"//3�����
			//text += "#L6##k#v2510005#����������ʽ˵���ϳ�#v1702852#ȫ����50\r\n\r\n"//3�����Ǻ�ǹ
			//text += "#L7##k#v2510006#����������ʽ˵���ϳ�#v1053367#ȫ����50\r\n\r\n"//3�ξ�С���Ƕ���
			//text += "#L8##k#v2510007#����������ʽ˵���ϳ�#v1702874#ȫ����50\r\n\r\n"//3�ξ�С��������
			//text += "#L9##k#v2510008#����������ʽ˵���ϳ�#v1004776#ȫ����50\r\n\r\n"//3��������ñ
			//text += "#L10##k#v2510009#����������ʽ˵���ϳ�#v1053049#ȫ����50\r\n\r\n"//3����������
			//text += "#L11##k#v2510010#����������ʽ˵���ϳ�#v1702830#ȫ����50\r\n\r\n"//3��������͸��ɡ
			//text += "#L12##k#v2510011#����������ʽ˵���ϳ�#v1702977#ȫ����50\r\n\r\n"//3����������
			//text += "#L13##k#v2510012#����������ʽ˵���ϳ�#v1005318#ȫ����50\r\n\r\n"//3������ñ��
			//text += "#L14##k#v2510013#����������ʽ˵���ϳ�#v1053440#ȫ����50\r\n\r\n"//3�������·�
			//text += "#L15##k#v2510014#����������ʽ˵���ϳ�#v1702976#ȫ����50\r\n\r\n"//3ɯ������
			//text += "#L16##k#v2510015#����������ʽ˵���ϳ�#v1005320#ȫ����50\r\n\r\n"//3ɯ��ñ��
			//text += "#L17##k#v2510016#����������ʽ˵���ϳ�#v1053442#ȫ����50\r\n\r\n"//3ɯ���·�
			//text += "#L18##k#v2510017#����������ʽ˵���ϳ�#v1702975#ȫ����50\r\n\r\n"//3���������
			//text += "#L19##k#v2510018#����������ʽ˵���ϳ�#v1005319#ȫ����50\r\n\r\n"//3�����ñ��
			//text += "#L20##k#v2510019#����������ʽ˵���ϳ�#v1053441#ȫ����50\r\n\r\n"//3������·�
			//text += "#L21##k#v2510020#����������ʽ˵���ϳ�#v1005113#ȫ����50\r\n\r\n"//3�ܱ���ůñ
			//text += "#L22##k#v2510021#����������ʽ˵���ϳ�#v1053285#ȫ����50\r\n\r\n"//3�ܱ������޷�
			//text += "#L23##k#v2510022#����������ʽ˵���ϳ�#v1702365#ȫ����50\r\n\r\n"//3�ܱ�������
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
        } else if (selection == 1) { //��������
			if( cm.haveItem(2511000,1) &&cm.haveItem(1902336,1) && cm.haveItem(1902402,1)&& cm.haveItem(1902404,1)&& cm.haveItem(1902350,1)) {
            cm.gainItem(2511000,-1);//��������ϳɹ�ʽ
			cm.gainItem(1902336,-1);//̫��
			cm.gainItem(1902402,-1);//����
			cm.gainItem(1902404,-1);//�������
			cm.gainItem(1902350,-1);//������
			cm.getPlayer().setBossLog("��������",1,1)
			cm.gainItem(1902401,600,600,600,600,1000,1000,600,600,0,0,0,0,0,0);//��������
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"��������ϳɹ���" + " : " + cm.getPlayer().getName() +"��������ϳ� ȫ����600",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
        } else if (selection == 2) {  //�������ﰰ��
		
			if( cm.haveItem(2511001,1) && cm.haveItem(1912336,1)&& cm.haveItem(1912402,1)&& cm.haveItem(1912404,1) && cm.haveItem(1912350,1)) {
            cm.gainItem(2511001,-1);//�������ﰰ�Ӻϳɹ�ʽ
			cm.gainItem(1912336,-1);//̫������
			cm.gainItem(1912402,-1);//���㰰��
			cm.gainItem(1912404,-1);//���������
			cm.gainItem(1912350,-1);//�����ư���
			cm.getPlayer().setBossLog("�������ﰰ��",1,1)
			cm.gainItem(1912401,600,600,600,600,1000,1000,600,600,0,0,0,0,0,0);//�������ﰰ��
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�������ﰰ�Ӻϳɹ���" + " : " + cm.getPlayer().getName() +"�������ﰰ�Ӻϳ� ȫ����600",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
		  
        } else if (selection == 3) {  //��è����
		
			if( cm.haveItem(2511002,1) && cm.haveItem(1902311,1)&& cm.haveItem(1902403,1)&& cm.haveItem(1902407,1) && cm.haveItem(1902405,1)) {
            cm.gainItem(2511002,-1);//��è����ϳɹ�ʽ
			cm.gainItem(1902311,-1);//�����ϳ�
			cm.gainItem(1902403,-1);//�ǿվ���
			cm.gainItem(1902407,-1);//���ֻ���
			cm.gainItem(1902405,-1);//����ֽ��
			cm.getPlayer().setBossLog("��è����",1,1)
			cm.gainItem(1902411,666,666,666,666,1000,1000,666,666,0,0,0,0,0,0);//��è����
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"��è����ϳɹ���" + " : " + cm.getPlayer().getName() +"��è����ϳ� ȫ����666",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ʧ�� ���ϲ���");
			cm.dispose();
		   }
        } else if (selection == 4) {  //��è���ﰰ��
		
			if( cm.haveItem(2511003,1) && cm.haveItem(1912311,1)&& cm.haveItem(1912403,1)&& cm.haveItem(1912407,1) && cm.haveItem(1912405,1)) {
            cm.gainItem(2511003,-1);//��è���ﰰ�Ӻϳɹ�ʽ
			cm.gainItem(1912311,-1);//�����ϳ�����
			cm.gainItem(1912403,-1);//�ǿվ��㰰��
			cm.gainItem(1912407,-1);//���ֻ��䰰��
			cm.gainItem(1912405,-1);//����ֽ������
			cm.getPlayer().setBossLog("��è���ﰰ��",1,1)
			cm.gainItem(1912411,666,666,666,666,1000,1000,666,666,0,0,0,0,0,0);//��è���ﰰ��
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"��è���ﰰ�Ӻϳɹ���" + " : " + cm.getPlayer().getName() +"��è���ﰰ�Ӻϳ� ȫ����666",true).getBytes());
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
			cm.gainItem(1053208,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//�����
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
			cm.gainItem(1702852,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//�����Ǻ�ǹ
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
			cm.gainItem(1053367,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//�ξ�С���Ƕ���
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
			cm.gainItem(1702874,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//�ξ�С��������
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
			cm.gainItem(1004776,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//��������ñ
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
			cm.gainItem(1053049,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//����������
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
			cm.gainItem(1702830,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//��������͸��ɡ
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
			cm.gainItem(1702977,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//����������
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
			cm.gainItem(1005318,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//������ñ��
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
			cm.gainItem(1053440,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//�������·�
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
			cm.gainItem(4000109,-1000);//���СѼ
			cm.gainItem(4002000,-10);//��ţ��Ʊ
			cm.getPlayer().setBossLog("ɯ������",1,1)
			cm.gainItem(1702976,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//ɯ������
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
			cm.gainItem(1005320,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//ɯ��ñ��
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
			cm.gainItem(1053442,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//ɯ���·�
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
			cm.gainItem(1702975,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//���������
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
			cm.gainItem(1005319,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//�����ñ��
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
			cm.gainItem(1053441,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//������·�
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
			cm.gainItem(1005113,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//�ܱ���ůñ
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
			cm.gainItem(1053285,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//�ܱ������޷�
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
			cm.gainItem(1702365,50,50,50,50,0,0,50,50,0,0,0,0,0,0);//�ܱ�������
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


