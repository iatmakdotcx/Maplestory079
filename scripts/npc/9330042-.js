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
            //text += "#L1##r" + ��ɫ��ͷ + "��ս��ħ��#g>>>>>>>>>��Ҫ#b1��#v4000460#1��#v4000461#1��#v4000462#\r\n"//3
            //text += "#L10##r" + ��ɫ��ͷ + "��ս������#g>>>>>>>>>��Ҫ#b1��#v4000460#1��#v4000461#1��#v4000462#\r\n"//3
            //text += "#L2##r" + ��ɫ��ͷ + "��սѪ�潫��#g>>>>>>��Ҫ#b1��#v4000460#1��#v4000461#1��#v4000462#\r\n"//3
            //text += "#L4##r" + ��ɫ��ͷ + "��ս��֮ħŮ(����)#g>>>>>>��Ҫ#b1��#v4000460#1��#v4000461#1��#v4000462#\r\n"//3
            text += "#L3##r" + ��ɫ��ͷ + "��������(ÿ��100��)#g>>>>>>��Ҫ#b1��#v4000463#1��\r\n\r\n"//3
			//text += "#L6##r" + ��ɫ��ͷ + "������������֮�� ��Ҫ #v4001374#\r\n\r\n"//3
			//text += "#L7##r" + ��ɫ��ͷ + "�����׹�һ�.���� #v1122017# \r\n\r\n"//3
            text += "#L5##r" + ��ɫ��ͷ + "#v5160005#�Һú��� �����뿪#v5160005#\r\n\r\n"//3
			
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) { //������Ӹ���
				if (cm.getBossLog("��ħ��") >= 2) {
		cm.sendOk("һ��ֻ�ܴ�2����ħ��");
		return false;
	}
			if(cm.haveItem(4000460,1)&& cm.haveItem(4000461,1)&& cm.haveItem(4000462,1)){ //��Ʒ����
                            //cm.removeAll(4032398); 
                            cm.gainItem(4000460,-1);
                            cm.gainItem(4000461,-1);
							cm.gainItem(4000462,-1);
							cm.setBossLog("��ħ��");
			    cm.spawnMobOnMap(9400592,1,642,276,803001200);
		            //cm.summonMobter(9400633, 1);
                            //cm.summonMob(9400633,180000,5250,1);
			    cm.worldMessage(6,"��糺츱����["+cm.getName()+"]�ɹ��ٻ���糺�boss����ħ�ˡ�{���Ͽɺϳ���ʹ����}");
			   cm.dispose();
		   }else{
			   cm.sendOk("�ܱ�Ǹ�����Ĳ��ϲ���");
			   cm.dispose();
		   }
        } else if (selection == 2) {  //������Ӹ���
		if (cm.getBossLog("Ѫ�潫��") >= 50) {
		cm.sendOk("һ��ֻ�ܴ�50��Ѫ�潫��");
		return false;
	}
			if(cm.haveItem(4000460,1)&& cm.haveItem(4000461,1)&& cm.haveItem(4000462,1)){ //��Ʒ����
                            //cm.removeAll(4032398); 
                            cm.gainItem(4000460,-1);
                            cm.gainItem(4000461,-1);
							cm.gainItem(4000462,-1);
							cm.setBossLog("Ѫ�潫��");
			    cm.spawnMobOnMap(9400591,1,28,276,803001200);
		            //cm.summonMobter(9400633, 1);
                            //cm.summonMob(9400633,180000,5250,1);
			    cm.worldMessage(6,"��糺츱����["+cm.getName()+"]�ɹ��ٻ���糺�boss��Ѫ�潫����{���Ͽɺϳ���ʹ����}");
			   cm.dispose();
		   }else{
			   cm.sendOk("�ܱ�Ǹ�����Ĳ��ϲ���");
			   cm.dispose();
		   }
        } else if (selection == 3) { //�����Ӹ���
		if (cm.getBossLog("��������") >= 100) {
		cm.sendOk("һ��ֻ�ܴ�100�ε�������");
		return false;
	}
			if(cm.haveItem(4000463,1)&& cm.haveItem(4000463,1)&& cm.haveItem(4000463,1)){ //��Ʒ����
                            //cm.removeAll(4000463); 
                            cm.gainItem(4000463,-1);
                            //cm.gainItem(4000463,-1);
							//cm.gainItem(4000463,-1);
							cm.setBossLog("��������");
			    cm.spawnMobOnMap(9400589,1,-719,276,803001200);
		            //cm.summonMobter(9400633, 1);
                            //cm.summonMob(9400633,180000,5250,1);
			    cm.worldMessage(6,"��糺츱����["+cm.getName()+"]�ɹ��ٻ���糺�boss������������");
			   cm.dispose();
		   }else{
			   cm.sendOk("�ܱ�Ǹ�����Ĳ��ϲ���");
			   cm.dispose();
		   }
        } else if (selection == 4) {//�����Ӹ���
		if (cm.getBossLog("��֮ħŮ") >= 50) {
		cm.sendOk("һ��ֻ�ܴ�2�κ�֮ħŮ");
		return false;
	}
			if(cm.haveItem(4000460,1)&& cm.haveItem(4000461,1)&& cm.haveItem(4000462,1)){ //��Ʒ����
                            //cm.removeAll(4032398); 
                            cm.gainItem(4000460,-1);
                            cm.gainItem(4000461,-1);
							cm.gainItem(4000462,-1);
							cm.setBossLog("��֮ħŮ");
			    cm.spawnMobOnMap(9400590,1,-103,1,803001200);
		            //cm.summonMobter(9400633, 1);
                            //cm.summonMob(9400633,180000,5250,1);
			    cm.worldMessage(6,"��糺츱����["+cm.getName()+"]�ɹ��ٻ���糺�boss����֮ħŮ��{���Ͽɺϳ���ʹ����}");
			   cm.dispose();
		   }else{
			   cm.sendOk("�ܱ�Ǹ�����Ĳ��ϲ���");
			   cm.dispose();
		   }
        } else if (selection == 10) {//�����Ӹ���
		if (cm.getBossLog("������") >= 50) {
		cm.sendOk("һ��ֻ�ܴ�2��������");
		return false;
	}
			if(cm.haveItem(4000460,1)&& cm.haveItem(4000461,1)&& cm.haveItem(4000462,1)){ //��Ʒ����
                            //cm.removeAll(4032398); 
                            cm.gainItem(4000460,-1);
                            cm.gainItem(4000461,-1);
							cm.gainItem(4000462,-1);
							cm.setBossLog("������");
			    cm.spawnMobOnMap(9400593,1,72,1,803001200);
		            //cm.summonMobter(9400633, 1);
                            //cm.summonMob(9400633,180000,5250,1);
			    cm.worldMessage(6,"��糺츱����["+cm.getName()+"]�ɹ��ٻ���糺�boss����������{���Ͽɺϳ���ʹ����}");
			   cm.dispose();
		   }else{
			   cm.sendOk("�ܱ�Ǹ�����Ĳ��ϲ���");
			   cm.dispose();
		   }
        } else if (selection == 5) {//������Ӹ���
            cm.warp(910000000);
            cm.dispose();
        } else if (selection == 6) {//������Ӹ���
		if (cm.getBossLog("糺콱��") >= 4) {
		cm.sendOk("һ��ֻ��3��糺콱��");
		return false;
	}
		if(cm.haveItem(4001374,1)){ //��Ʒ����
                            cm.gainItem(4001374,-1);
                            cm.warp(803011300);
							cm.ˢ�µ�ͼ();
							cm.setBossLog("糺콱��");
			    cm.worldMessage(6,"��糺츱����["+cm.getName()+"]�ɹ�����糺콱��֮��}");
			   cm.dispose();
		   }else{
			   cm.sendOk("�ܱ�Ǹ�����Ĳ��ϲ���");
			   cm.dispose();
		   }
        } else if (selection == 7) {//����ŷ������Ҷ��Ӹ���
		
            cm.dispose();
            cm.openNpc(9030100);
            
        } else if (selection == 8) {//��ַ����Կ�ս
            if (!cm.canHold(4031497, 1)) {
                cm.sendOk("���İ����ռ䲻��.����������");
                cm.dispose();
            } else if (cm.haveItem(4000243, 3)) {
                cm.gainItem(4000243,-3);
                cm.gainItem(4031497,1);
                cm.sendOk("��ϲ��ɹ��һ�#v4031497#X1����");
                cm.dispose();
            } else {
                cm.sendOk("�һ�ʧ�ܣ���Ҫ#v4000243#X3����");
                cm.dispose();
            }
        } else if (selection == 9) {//Ӣ��ѧԺ����
            if (!cm.canHold(4031497, 1)) {
                cm.sendOk("���İ����ռ䲻��.����������");
                cm.dispose();
            } else if (cm.haveItem(4000243, 30)) {
                cm.gainItem(4000243,-30);
                cm.gainItem(4031497,10);
                cm.sendOk("��ϲ��ɹ��һ�#v4031497#X10����");
                cm.dispose();
            } else {
                cm.sendOk("�һ�ʧ�ܣ���Ҫ#v4000243#X30����");
                cm.dispose();
            }
        } else if (selection == 11) {//ǧ���������ż�
            cm.warp(541020700);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 12) {//��żʦBOSS��ս
            cm.warp(910510001);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        } else if (selection == 13) {//糺�
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("����ͼ���Ƶȼ�120������������û���ʸ���ս糺츱��");
                cm.dispose();
              }else{
			cm.warp(803001200);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 14) {//����
            if (cm.getLevel() < 140 ) {  
            cm.sendOk("����ͼ���Ƶȼ�140������������û���ʸ���ս���㸱��");
                cm.dispose();
              }else{
			cm.warp(803000505);  
                cm.dispose();
                return;
	      } 
        } else if (selection == 10) {//.������껪
            cm.warp(980000000);
            cm.dispose();
            //cm.openNpc(9310057, 0);
        }
    }
}


