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
			text += "#e#b���� �ڲ�BOSS�ٻ�ʦ�����ٻ���ϵBOSS\r\n��ѡ����Ҫ��ս��BOSS\r\n"
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            //text += "#L1##r" + ��ɫ��ͷ + "��ս���߼�BOSS����ħŮ#g>>>>>>>>#b��Ҫ#v4000463#*1\r\n\r\n"//3
			//text += "#L2##r" + ��ɫ��ͷ + "��ս���߼�BOSS������#g>>>>>>>>>>#b��Ҫ#v4000463#*1\r\n\r\n"//3
            text += "#L3##r" + ��ɫ��ͷ + "��ս���߼�BOSS������#g>#b��Ҫ#v4001126#*200+500�� ÿ��3��\r\n\r\n"//3
			//text += "#L4##r" + ��ɫ��ͷ + "��ս������BOSS����������ħ#g>>>>#b��Ҫ#v4000463#*2\r\n\r\n"//3
            text += "#L6##r" + ��ɫ��ͷ + "��ս������BOSS����������#g>>>>>>#b��Ҫ#v4000463#*1��\r\n\r\n"//3
			//text += "#L7##r" + ��ɫ��ͷ + "��ս���ռ�BOSS�������˹#g>>>>>>#b��Ҫ#v4000463#*5\r\n\r\n"//3
			text += "#L8##r" + ��ɫ��ͷ + "��ս���ռ�BOSS��Ʒ����#g>#b��Ҫ#v4000463#*3 ÿ��3�� \r\n\r\n"//3
			//text += "#L9##r" + ��ɫ��ͷ + "��ս����BOSS���װ�#g>>>>>>#b��Ҫ#v4000463#*50\r\n\r\n"//3
			//text += "#L7##r" + ��ɫ��ͷ + "��ս������BOSS��������ɮ#g>>>>>#b��Ҫ#v4000463#*2\r\n\r\n"//3
            //text += "#L5##r" + ��ɫ��ͷ + "�����뿪\r\n\r\n"//3
            //text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            //text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            //text += "#L21##d" + ��ɫ��ͷ + "����#v3700228#1��\t��Ҫ��#v4000000#100��\r\n\r\n"//3
            //text += "#L22##d" + ��ɫ��ͷ + "����#v3700229#1��\t��Ҫ��#v4000016#100��\r\n\r\n"//3
            //text += "#L23##d" + ��ɫ��ͷ + "����#v3700230#1��\t��Ҫ��#v4000001#100��\r\n\r\n"//3
            //text += "#L24##d" + ��ɫ��ͷ + "����#v3700231#1��\t��Ҫ��#v4000012#100��\r\n\r\n"//3
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { //��ħŮ
		if (cm.getBossLog("heimonv") >= 50) {
		cm.sendOk("һ��ֻ�ܴ�50�κ�ħŮ");
		return false;
	}
			if(cm.getLevel() >= 120 && cm.haveItem(4000463,1) && cm.getMap().getAllMonstersThreadsafe().size() == 0){ //��Ʒ����
                cm.gainItem(4000463,-1);
				cm.setBossLog("heimonv");
			    cm.spawnMobOnMap(9001010,1,651, 94,910000021);
                Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"BOSS����" + " : " + cm.getPlayer().getName() +"���г�20���ٻ��ˡ��߼�BOSS-��ħŮ��,�������ܲ���սʤа���أ�����",true).getBytes());
			    cm.dispose();
		   }else{
			   cm.sendOk("�ٻ�ʧ�ܣ�\r\n1.��ͼ�ϻ��й���δ��ɱ\r\n2.#v4000463#����.\r\n3.�ȼ�����LV.120�޷��ٻ�BOSS");
			   cm.dispose();
		   }
        } else if (selection == 2) {  //����
		if (cm.getBossLog("tianqiu") >= 50) {
		cm.sendOk("һ��ֻ�ܴ�50������");
		return false;
	}
			if(cm.getLevel() >= 120 && cm.haveItem(4000463,21)&&cm.haveItem(4002002,10)&&cm.getMeso()>=5000000) {
            cm.gainItem(4000463,-20);
			cm.gainMeso(-5000000);
			cm.setBossLog("tianqiu");
			cm.spawnMobOnMap(9400014,1,651, 94,1910000020,199999999999);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"BOSS����" + " : " + cm.getPlayer().getName() +"���г�20���ٻ��ˡ��߼�BOSS-����,�������ܲ���սʤа���أ�����",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("�ٻ�ʧ�ܣ�\r\n1.��ͼ�ϻ��й���δ��ɱ\r\n2.#v4000463#����.\r\n3.�ȼ�����LV.120�޷��ٻ�BOSS");
			cm.dispose();
		   }
        } else if (selection == 3) { //����
				if (cm.getBossLog("zakun") >= 30) {
		cm.sendOk("�ڲ�һ��ֻ�ܴ�30������");
		return false;
	}
			if(cm.haveItem(4001126,200)&&cm.getMeso()>=5000000) {
            cm.gainItem(4001126,-200);
			cm.setBossLog("zakun");
			cm.gainMeso(-5000000);
			cm.getMap().spawnZakum(651, 94);
            //Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"BOSS����" + " : " + cm.getPlayer().getName() +"���г�20���ٻ��ˡ��߼�BOSS-������,�������ܲ���սʤа���أ�����",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "��BOSS���桻" + " : " + "[" + cm.getChar().getName() + "]���г�20���ٻ��ˡ��߼�BOSS-������,�������ܲ���սʤа���أ�����"));
            
			cm.dispose();
		   }else{
			cm.sendOk("����ϲ���Ŷ�� �� û��ɱ��BOSS");
			cm.dispose();
		   }
        } else if (selection == 4) {//����ħ
		if (cm.getBossLog("bianfumo") >= 3) {
		cm.sendOk("һ��ֻ�ܴ�3������ħ");
		return false;
	}
			if(cm.haveItem(4000463,30)&& cm.getMap().getAllMonstersThreadsafe().size() == 0){ //��Ʒ����
            cm.gainItem(4000463,-10);
			cm.setBossLog("bianfumo");
			cm.spawnMobOnMap(8830007,1,650,-215,910000020);
			cm.spawnMobOnMap(8830008,1,650,-215,910000020);
			cm.spawnMobOnMap(8830009,1,650,-215,910000020);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"BOSS����" + " : " + cm.getPlayer().getName() +"���г�20���ٻ��ˡ�����BOSS-��������ħ��,ΰ�����ʿ,ף�����ˣ�����",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("����ϲ���Ŷ�� �� û��ɱ��BOSS");
			cm.dispose();
		   }
        } else if (selection == 6) { //����
		if (cm.getBossLog("heilong") >= 30) {
		cm.sendOk("�ڲ�һ��ֻ�ܴ�30�κ���");
		return false;
	}
			if(cm.getLevel() >= 160 && cm.haveItem(4000463,1)&& cm.getMap().getAllMonstersThreadsafe().size() == 0){ //��Ʒ����
            cm.gainItem(4000463,-1);
			cm.setBossLog("heilong");
			cm.spawnMobOnMap(8810026, 1, 651,94,910000020);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"BOSS����" + " : " + cm.getPlayer().getName() +"���г�20���ٻ��ˡ�����BOSS-����������,ΰ�����ʿ,ף�����ˣ�����",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("�ٻ�ʧ�ܣ�\r\n1.��ͼ�ϻ��й���δ��ɱ\r\n2.#v4000463#����.\r\n3.�ȼ�����LV.160�޷��ٻ�BOSS");
			cm.dispose();
		   }
        } else if (selection == 7) { //�����˹
		if (cm.getBossLog("algs") >= 5) {
		cm.sendOk("�ڲ�һ��ֻ�ܴ�50�ΰ����˹");
		return false;
	}
			if(cm.getLevel() >= 180 && cm.haveItem(4000463,1)&& cm.getMap().getAllMonstersThreadsafe().size() == 0){ //��Ʒ����
            cm.gainItem(4000463,-1);
			cm.setBossLog("algs");
			cm.spawnMobOnMap(9300028,1,547, 94,910000021);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"[BOSS����]" + " : ��η����ʿ[" + cm.getPlayer().getName() +"]��Ȼ�����˳�˯�еİ����˹... ����������ͷ��!",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("�ٻ�ʧ�ܣ�\r\n1.��ͼ�ϻ��й���δ��ɱ\r\n2.#v4000463#����.\r\n3.�ȼ�����LV.180�޷��ٻ�BOSS");
			cm.dispose();
		   }
        } else if (selection == 8) { //Ʒ����
		if (cm.getBossLog("pkb") >= 30) {
		cm.sendOk("�ڲ�һ��ֻ�ܴ�30��Ʒ����");
		return false;
	}
			if(cm.getLevel() >= 180 && cm.haveItem(4000463,3)&& cm.getMap().getAllMonstersThreadsafe().size() == 0){ //��Ʒ����
            cm.gainItem(4000463,-3);
			cm.setBossLog("pkb");
			cm.spawnMobOnMap(8820001,1,547, 94,910000020,2100000000);
            //Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"[BOSS����]" + " : ��ʿ[" + cm.getPlayer().getName() +"]��С������һ�����Ʒ����.  ����Ʒ���ͷ�ŭ��!",true).getBytes());
			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "��BOSS���桻" + " : " + "[" + cm.getChar().getName() + "]��С������һ�����Ʒ����.  ����Ʒ���ͷ�ŭ��!������"));
            
			cm.dispose();
		   }else{
			cm.sendOk("�ٻ�ʧ�ܣ�\r\n1.��ͼ�ϻ��й���δ��ɱ\r\n2.#v4000463#����.\r\n3.�ȼ�����LV.180�޷��ٻ�BOSS");
			cm.dispose();
		   }
		} else if (selection == 9) { //�װ�
		if (cm.getBossLog("lr") >= 2) {
		cm.sendOk("һ��ֻ����ս2���װ�");
		return false;
	}
			if(cm.getLevel() >= 150 && cm.haveItem(4000463,30)&& cm.getMap().getAllMonstersThreadsafe().size() == 0){ //��Ʒ����
            cm.gainItem(4000463,-30);
			cm.setBossLog("lr");
			cm.spawnMobOnMap(9700001,1,547, 94,910000020,3000000000);
            Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"[BOSS����]" + " : Сƨ�� [" + cm.getPlayer().getName() +"] ��Ȼ������ͱ�����װ��ľջ�...!",true).getBytes());
			cm.dispose();
		   }else{
			cm.sendOk("�ٻ�ʧ�ܣ�\r\n1.��ͼ�ϻ��й���δ��ɱ\r\n2.#v4000463#����.\r\n3.�ȼ�����LV.200�޷��ٻ�BOSS");
			cm.dispose();
		   }
        }
    }
}


