/*
 �ű����������˵�
 */
//ʱ������
importClass(Packages.handling.channel.ChannelServer);

var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
//�ز�����
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var r = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";
var ����ͼ�� = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";
var ���� = "#fEffect/CharacterEff/1003276/0/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
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
var а��С�� = "#fEffect/CharacterEff/1112960/3/0#";  //а��С�� ��С��
var а��С��2 = "#fEffect/CharacterEff/1112960/3/1#";  //а��С�� ����
var ���� ="#fEffect/SetEff/208/effect/walk2/4#";
var ����1 ="#fEffect/SetEff/208/effect/walk2/3#";
var С�� ="#fMap/MapHelper/weather/birthday/2#";
var �һ� ="#fMap/MapHelper/weather/rose/4#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/2#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var ����Ҷ ="#fMap/MapHelper/weather/maple/3#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var ���� ="#fMap/MapHelper/weather/witch/3#";
var ��͵ȼ� = 1;
var ��ߵȼ� = 255;


function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.�Ի�����();
        return;
    }
     if (mode == 1) {
        status++;
    } else {
        status--;
    }
	if(cm.getPlayer().�Ĳ�����>0){
		cm.�Ի�����();
		cm.��NPC(9900004,303);
		return;
	}

	var ƣ��ֵ = cm.getPlayer().�ж�ƣ��ֵ();
	//��ʾ�Ľ��ȣ���Ҫ�ĳɺͿ���̨1�ŵ�ʱ��һ��������
	var ƣ��ֵ���� = 600;
	var ���� = ƣ��ֵ/ƣ��ֵ����*100;
	if(ƣ��ֵ>ƣ��ֵ����){
		����=100;
	}
	//��ʾ
    if (status == 0) {
		if(cm.haveItem(2022552,1)==false){
			cm.gainItem(2022552,1)
			if (cm.getOneTimeLog("���ּݵ�") < 9999 && cm.getPlayerStat("LVL") < 31) 
			if(cm.haveItem(2022670,1)==false)
			cm.gainItem(2022670,1)
		}
		var time = cm.getGamePoints()
		if(cm.getPlayer().getOneTimeLog("��ο�") > 0){
			time = 1440
		}
		/* if(cm.getPlayer().getOneTimeLog("�����˺�Ƥ��") <= 0){
			cm.getPlayer().dropMessage(1,"[MapleHD] [DmgSkin] #fEffect/BasicEff.img/NoRed0/0#");//ԭʼ�˺�Ƥ��
			cm.setOneTimeLog("�����˺�Ƥ��");
		} */
		if(cm.getPlayer().getOneTimeLog("��������Ƥ��") <= 0){
			cm.openNpc(1540940);
			cm.safeDispose();
			return;
		}
		
		/* if(cm.getPlayer().getOneTimeLog("��������Ȩ��") <= 0){
			cm.setOneTimeLog("��������Ȩ��");
		} */
		
		if(cm.getPlayer().getOneTimeLog("��ʱ����Ƥ����Ч") <= 0){
			if(!cm.haveItem(2614101)){
				cm.gainItemPeriod(2614101, 1, 15);
			}
			cm.setOneTimeLog("��ʱ����Ƥ����Ч");
			cm.sendOk("����Ƥ����Ч����Ȩ����ʱ��ѿ������飬���׼���Ƥ���������л���������Ƥ����������#i2614101:#");
			cm.dispose();
			return;
		}
		
var selStr = " \t\t\t\t#k" + ����ͼ�� + "����ʱ��:#r" + hour + "#k#b:#r" + minute + "#k#b:#r" + second + "#k #d#r#n#l\r\n";
	selStr += "  \t\t#k" + ���� + "�װ���[#r#e#h ##n#k#r]#d,��ӭ����#r"+ cm.��������() +"" + ���� + "\r\n";
    // selStr += "\t\#d"+ а��С�� + "��ǰս��:#r" + cm.��ȡ��ɫս����() + "   " + а��С�� + "�ۼ�����:#r" + cm.��ȡ�ۼ�����() + "#d\r\n"; //"а��С�� + "��ʯ:#r" + cm.getzb() +"#l\r\n";
	// selStr += "\t\#d" + а��С�� + "������:#r" + cm.getPlayer().getCSPoints(1) + " #d" + а��С�� + "�������:#r" + cm.getPlayer().getCSPoints(2) + "#k#n\r\n"
	selStr += "\t\t\t  #L1#" + ���� + "��������" + ���� + "#l\t\r\n\r\n";
  //selStr += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + �� + һ + ð + �� + �� + ӭ + �� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "";

	//selStr += "ƣ��:#B"+(100-����)+"# ["+(100-����).toFixed(2)+"%]\r\n\r\n";
	//selStr += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n";
		//selStr += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n";

		//selStr += "#L9999##r�����޵�ȯ/��ҡ�#k#l \r\n\r\n#L1000##rGM��ͼ����#l #L1001##d����#n#k#r(��ʼ����ɫ)#l\r\n";
		//selStr += "#L9991##r#e��#d�߼�װ��#r��#k#l #L9992##r#e��#d�ʼ�����#r��#k#l\r\n";
		//selStr += "#L1010##r#e��ָ����ͼNPC�ٻ����� -#k��ȥ���ڵ㿪�ٻ�-#r�߼�#r#e��#l#n\r\n";
		//selStr += "#L1011##r#e��ָ����ͼNPC�ٻ����� -#k��ȥ���ڵ㿪�ٻ�-#b��ͨ#r#e��#l#n\r\n";
	
		if(cm.getPlayer().getJob() == 2110 || cm.getPlayer().getJob() == 2111 || cm.getPlayer().getJob() == 2112){
			selStr += "\t\t\t\t#k#r#L3003#ս���λ����#l\r\n\r\n"
		}
		selStr += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n";
		//selStr += "   \t\t\t#r#L1009#�ڲ⸣������������#l\r\n"
		//selStr += "   \t\t\t\t#b#L1012#����ÿ��#l\r\n"
		
		selStr += " #k#L8#����̵�#l\t\t\t\t\t\t#k#L9##r����̵�#k#l\r\n"
        selStr += " #L2##b���ٴ���#k#l \t\t\t\t\t\t#L3##b����װ��#k#l \r\n #L6##bÿ������#k#l \t\t\t\t\t\t#L11##b��������#k#l\r\n #L105##r�ۼ�����#k#l  \t\t\t\t\t\t#L201##r���߽���#k#l\r\n #L4455##bʦͽ����#l \t\t\t\t\t\t#L9000031##b�������#k#l\r\n"
		selStr += " #L3001##r���ʲ�ѯ#l \t\t\t\t\t\t#L3002##rBOSS�ط�#k#l\r\n"
		// selStr += "\t\t\t\t#L9000031#   �������#l \r\n\r\n";
		if (cm.getPlayer().isGM()) {
			selStr += "\r\n" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n";
			selStr += " \r\n\t\t#r���¹��ܣ�������Ա�ɼ�����ͨ��ҿ�����\r\n"
			selStr += "#L1234#�������"
			if(cm.getPlayer().getGMLevel() == 100){
				selStr += "#l#L9999#ˢ�����#l#L1000#GM��ͼ#l#L592868#������#l#L5#������#l#L553#���תְ#l";
				selStr += " #L1002##d����#n#k#r(��ʼ����ɫ)#l#L1003##d���õ�ǰ��ͼ#l\r\n";
				selStr += " #L1008##d����#l\t#L1013##d�����#l\t#L1014##d�ٻ�����#l\t#L1015##d�ٻ���ĸ#l\r\n";
				selStr += "#L1004##d��¡#k#l\t#L1005##dȡ����¡#k#l\t#L1006##d���ӽ�ɫλ#k#l\t#L1007##d����תְ#k#l\r\n#L1020##dɾ���������ָ������#k#l  #L1021##d�����תְ#k#l  #L1022##d������ָ���ұ���#k#l\r\n\r\n";
			}
		}
		if (cm.getPlayer().getName() == "������ܽ"){//��ָ����ҷ�����
			selStr += "#L10000##d�����ƶ�#k#l\r\n\r\n";
		}
        cm.�Ƿ�˵������(selStr);
               // cm.gainItem(5211047, -1000);
               // cm.gainItem(5360014, -1000);
    } else if (status == 1) {
        switch (selection) {
            case 1010:
				if(cm.�жϵ�ͼ()>=910000018 && cm.�жϵ�ͼ()<=910000022){
					cm.�Ի�����();
					cm.��NPC(9900004, 5000);
				}else{
              cm.warp(910000018, 0);
					cm.˵������("�����г�18-22����ʹ�ø��ٻ����﹦�ܡ�");
					cm.�Ի�����();

				}
			break;
            case 1011:
                if(cm.�жϵ�ͼ()>=910000007 && cm.�жϵ�ͼ()<=910000012){
					cm.�Ի�����();
					cm.��NPC(9900004, 6000);
				}else{
              cm.warp(910000007, 0);
					cm.˵������("�����г�7-12����ʹ�ø��ٻ����﹦�ܡ�");
					cm.�Ի�����();

				}
			break;
            case 1:
                cm.�Ի�����();
                cm.openNpc(9900004, 1);
			break;
			case 9000031:
                cm.�Ի�����();
                cm.openNpc(9000031, 0);
                break;
			case 109:
                cm.�Ի�����();
                cm.openNpc(1204033,2022564 );
                break;
			 case 1238:
                cm.�Ի�����();
                cm.openNpc(2000, 3);
                break;
			 case 1234:
                cm.�Ի�����();
                cm.openNpc(9900004, 71447500);
                break;
			case 204:
                cm.�Ի�����();
                cm.openNpc(1102002, 0);
                break;
				case 205:
                cm.�Ի�����();
                cm.openNpc(9900004, 26);
                break;
       case 9992:
                cm.�Ի�����();
                cm.openNpc(9900004, 5009);
                break;
            case 9902:
                cm.�Ի�����();
                cm.openNpc(9900004, 5010);
                break;
            case 9991:
                cm.�Ի�����();
                cm.openNpc(9900004, 5008);
                break;
            case 990:
                cm.�Ի�����();
cm.openWeb("https://jq.qq.com/?_wv=1027&k=oz3M16xW");
                break;
            case 999:
                cm.�Ի�����();
                cm.openNpc(9900004, 9888);
                break;
            case 88:
                cm.�Ի�����();
                cm.openNpc(9900004, 553);
                break;
            case 998:
                cm.�Ի�����();
                //cm.����ҳ(zm8au.cn);
                cm.����ǰƵ�������(1,2);
                break;
           case 9999:
                cm.�Ի�����();
                //cm.����ҳ(zm8au.cn);
  cm.�����(1000000000);
  cm.����ȯ(10000000);
  cm.������ȯ(10000000);
  cm.setzb(15000);
        cm.sendOk("\r\n\r\n\t\t\t#e#r��ϲ������1ǧ����,\r\n���10E,\r\n���þ�1ǧ��!\r\n15000����");
                break;
            case 2:
            cm.�Ի�����();
                cm.��NPC(9900004, 2);
 //cm.gainItem(5211047, -1000);
             //cm.gainItem(5360014, -1000);
                break;
			//��������
			case 100:
				if(cm.�жϵ�ͼ()>=910000000 && cm.�жϵ�ͼ()<=910000024){
					cm.�Ի�����();
					cm.��NPC(9900004, 100);
				}else{
					cm.˵������("�����г���ʹ�øù��ܡ�");
					cm.�Ի�����();
				}
                break;
			//�������
            case 3:
              cm.�Ի�����();
                cm.openNpc(9000039);
                break;
            case 111:
              cm.�Ի�����();
                cm.openNpc(2030013, 100);
                break;
            case 112:
              cm.�Ի�����();
                cm.openNpc(9900004, 555);
                break;
			case 3001:
			  cm.�Ի�����();
                cm.openNpc(9900004, 8002);
				break;
			case 3002:
			  cm.�Ի�����();
                cm.openNpc(9900004, 8003);
				break;
			case 3003:
				cm.�Ի�����();
				cm.openNpc(9900004, 8004);
				break;
			case 3010:
			  cm.�Ի�����();
                cm.openNpc(9900004, 3010);
				break;
			case 592868:
			  cm.�Ի�����();
                cm.openNpc(9900004, 592868);
				break;
			case 7758521:
			  cm.�Ի�����();
                cm.openNpc(9900004, 7758521);
				break;
			case 4455:
			  cm.�Ի�����();
                cm.openNpc(9900004, 4455);
				break;
            case 113:
              cm.�Ի�����();
                cm.openNpc(9900004, 502);
                break;
            case 115:
              cm.�Ի�����();
                cm.openNpc(9900004, 9892);
                break;
            case 116:
              cm.�Ի�����();
                cm.openNpc(9900004, 9889);
                break;
            case 117:
              cm.�Ի�����();
                cm.openNpc(9900004, 505);
                break;
            case 118:
            cm.�Ի�����();
                cm.openNpc(9900004, 506);

                break;
            case 101:
                cm.�Ի�����();
                cm.openNpc(9900004, 99);
                break;
            case 102:
                cm.�Ի�����();
                cm.openNpc(9900004, 9906);
                break;
            case 103:
                cm.�Ի�����();
                cm.openNpc(9900004, 97);
                break;
            case 104:
                cm.�Ի�����();
                cm.openNpc(9900004, 9904);
                break;
           case 105:
                 cm.�Ի�����();
		   cm.openNpc(9900004, 93);
                break;
           case 106:
                 cm.�Ի�����();
		   cm.openNpc(9000008);
                break;
            case 1000:
              cm.�Ի�����();
              cm.warp(180000000, 0);
                break;
            case 1001:
              cm.�Ի�����();
               cm.openNpc(9900004, 3010);
                break;
			case 1002:
              cm.�Ի�����();
               cm.openNpc(9900004, 3100);
                break;
			case 1003:
				var mapid = cm.getPlayer().getMapId();
				cm.����Ŀ���ͼ(mapid);
                cm.�Ի�����();
                break;
			case 1004:
				cm.��¡();
				cm.sendOk("��¡�ɹ�");
                cm.�Ի�����();
                break;
			case 1005:
				cm.ȡ����¡();
				cm.sendOk("ȡ����¡�ɹ�");
                cm.�Ի�����();
                break;
			case 1006:
				if(cm.��ȡ��ɫλ() >= 15){
					cm.sendOk("��Ǹ����Ľ�ɫ�����Ѵﵽ����ӵ�����ֵ");
					cm.dispose();
					return;
				}else{
					cm.���ӽ�ɫλ(1);
					cm.sendOk("��ϲ�����ӳɹ�����ǰ��ɫλ����Ϊ #b" + cm.��ȡ��ɫλ() + "#k ���������µ�½ȷ�ϡ�");
					cm.�Ի�����();
					break;
				}
			case 1007:
				// cm.getPlayer().getMap().startMapEffect("ͨ������ڰ����ҵ��Լ��ķ�ʽ", 5120021);
				cm.safeDispose();
				cm.openNpc(9900004,2501);
                break;
			case 1008:
				// cm.getPlayer().getMap().startMapEffect("ͨ������ڰ����ҵ��Լ��ķ�ʽ", 5120021);
				 //cm.getPlayer().setMorph(2210015, 110, 10000, true);
				// cm.getPlayer().sendItemEffect(2022108);
				 //cm.getPlayer().sendSkillEffect(5121004, 1);
				//cm.�ٻ�����(29);
				
				//cm.getPlayer().giveBuff(2438000, 30000, 10000, 800, 800, 999, 999, 999, 999, 60, 60, 10000, true);
				
				// cm.sendMobSkill(117, 1);1
				// cm.playPortalSE();
				// cm.ָ����ͼ�ٻ�����(9300344, 910510001, 355, 400);
				// cm.getPlayer().sendCenterMessage("����", 5120021, 5000);
				 // cm.getPlayer().setSkillSkinAll(2);
				 //cm.getPlayer().dropMessage(cm.getItemName(4000000));
				 //cm.getPlayer().cloneLook_extra(cm.getPlayer().getPosition());
				 //cm.getPlayer().setShowChair(false);
				 //cm.�������(7999);
				 // cm.showEffect(true, "quest/party/clear");
				 // cm.playSound(true, "Coconut/Failed");
				//cm.startOxQuiz(cm.getChannel());
				//cm.startCoconut(cm.getChannel());
				//cm.startSnowBall(cm.getChannel());
				//cm.startOla(cm.getChannel());
				// var count = ɾ��������ҵ���(3018378);
				// cm.sendOk("��ɾ���� " + count + " ����ҵĵ���");
				/* var point = cm.getPlayer().getPosition();//�ٻ�����
				cm.getPlayer().getMap().spawnZakum(point.x, point.y);//�ٻ����� */
				
				//��ָ�����BUFF("��ţ", 2438000, 30000, 30000, 100, 100, 9999, 9999, 9999, 9999, 60, 60, 600 * 1000, true);
				//����ǰ��ͼ���BUFF(2438000, 30000, 30000, 100, 100, 9999, 9999, 30000, 9999, 60, 60, 600 * 1000, true);
				//cm.saveChrSkillMapToDB();
				
				//cm.sendBlueDamageToAllMobs(10086, true);
				//cm.sendBlueDamageToAllMobs(2147483647, cm.getPlayer());
				
				//cm.sendYellowDamageToAllMobs(1000000, true);
				//cm.sendYellowDamageToAllMobs(1000000000, cm.getPlayer());
				
				//Packages.snail.SkillSkin.saveChrSkillMapToDB();
				//cm.getPlayer().setShowEquip(false);
				//cm.teachSkill(1013, 0, 0);
				
				// var mob = Packages.server.life.MapleLifeFactory.getMonster(8850011);
				// mob.setPosition(cm.getPlayer().getPosition());
				// mob.setFake(true);
				// cm.getPlayer().getMap().spawnFakeMonster(mob);
				
				//var mob = cm.getPlayer().getMap().getMonsterById(8850011);
				// mob.sendAttack(cm.getPlayer(), 2, 10086, 0, 1, 0, false, 0, 0, true);
				// mob.sendSkill(cm.getPlayer(), 44, 220201604);
				//mob.sendSkillResPose(cm.getPlayer(), 1000, 132, 2, true, true);
				//cm.getPlayer().setMountId(1932132);
				
				//cm.changeJob("��ţ", 112);
				cm.dispose();
				return;
                break;
			case 1009:
				if(cm.getBossLoga("�ڲ⸣��") < 1){
					cm.�����(1000000000);
					cm.����ȯ(10000000);
					cm.������ȯ(10000000);
					cm.�����������(30000);
					cm.setBossLoga("�ڲ⸣��");
					cm.sendOk("��ϲ����ȡ�ɹ���");
					cm.ȫ������(9, "��ϲ " + cm.getPlayer().getName() + " �ɹ���ȡ���ڲ⸣����10E��ҡ�1000W��ȯ��1000W���á�30000�ۼ�������");
				}else{
					cm.sendOk("��ȡʧ�ܣ�����˺��Ѿ���ȡ���ڲ⸣���ˣ�");
				}
				cm.dispose();
				return;
                break;
			case 1012:
				var ��ɫÿ�� = cm.���ý�ɫÿ��();
				var �˺�ÿ�� = cm.�����˺�ÿ��();
				if(��ɫÿ�� && �˺�ÿ��){
					cm.sendOk("��ɫÿ�ռ�¼���˺�ÿ�ռ�¼���ѳɹ����ã�");
				}else{
					if(��ɫÿ�� && !�˺�ÿ��){
						cm.sendOk("��ɫÿ�ռ�¼���óɹ����˺�ÿ�ռ�¼����ʧ�ܣ�");
					}else if (!��ɫÿ�� && �˺�ÿ��){
						cm.sendOk("�˺�ÿ�ռ�¼���óɹ�����ɫÿ�ռ�¼����ʧ�ܣ�");
					}else{
						cm.sendOk("ÿ�ռ�¼����ʧ�ܣ�");
					}
					
				}
				cm.dispose();
				return;
                break;
			case 1013:
				/* cm.startOxQuiz(cm.getChannel());
				cm.sendOk("�����ɹ������ʼ��");
				cm.dispose(); */
				cm.safeDispose();
				cm.openNpc(9900000, 2);
				return;
			case 1014:
				var point = cm.getPlayer().getPosition();//�ٻ�����
				cm.getPlayer().getMap().spawnZakum(point.x, point.y);//�ٻ�����
				cm.sendOk("�������ٻ���");
				cm.dispose();
				return;
			case 1015:
				cm.safeDispose();
				cm.openNpc(9900000, 3);
				return;
			case 1020:
				cm.safeDispose();
				cm.openNpc(9900000, 1);
				return;
			case 1021:
				cm.safeDispose();
				cm.openNpc(9900000, 4);
				return;
			case 1022:
				cm.safeDispose();
				cm.openNpc(9900000, 5);
				return;
            case 4:
                cm.�Ի�����();
                cm.openNpc(9900004, 4);
                break;
            case 5:
                cm.�Ի�����();
                cm.openNpc(9062509);
                break;
			case 99:
			//	cm.getPlayer().���˼���=0;
				cm.˵������("\t\t���촰������  #r*ָ���ȫ#k   ���ɲ鿴����ָ�\r\n\r\n#d\t\t���ָ��: @����");
                cm.�Ի�����();
			    //cm.��NPC(9900004, 99999);
                break;
            case 6:
     			cm.�Ի�����();
                //cm.��NPC(9900004, 22);
				cm.��NPC(9330042, 0);
                break;
            case 7:
                cm.�Ի�����();
                cm.openNpc(9900004, 7);
                break;
            case 8:
                cm.�Ի�����();
            cm.���̵�(94);
                break;
			case 9:
                cm.�Ի�����();
                cm.openNpc(9900004, 9);
                break;
			case 10:
                cm.�Ի�����();
                cm.openNpc(9900007, 0);
                break;
			case 11:
                cm.�Ի�����();
           cm.openNpc(9900004, 11);
          
                break;
			case 26:
                cm.�Ի�����();
           cm.openNpc(9900004, 94);
          
                break;
			case 53:
                cm.�Ի�����();
			    cm.��NPC(2000, 1);
                break;
			case 553:
                cm.�Ի�����();
			    cm.��NPC(9900004, 553);
                break;
			case 12:
                cm.�Ի�����();
                cm.openNpc(9900004, 12);
                break;
			case 13:
                cm.�Ի�����();
                cm.openNpc(2007, 11);
                break;
			case 14:
                cm.�Ի�����();
                cm.openNpc(9900004, 14);
                break;
			case 15:
                cm.�Ի�����();
                cm.openNpc(9900004, 9905);
                break;
			case 54:
                cm.�Ի�����();
			    cm.openNpc(9900004, 21);
                break;
			case 25:
                cm.�Ի�����();
                cm.��NPC(9900004, 25);
                break;
            case 30:
                cm.�Ի�����();
                cm.��NPC(1204033, 2022564);
                break;
			case 31:
				if(cm.�жϵ�ͼ()>=910000000 && cm.�жϵ�ͼ()<=910000024){
					cm.�Ի�����();
					cm.��NPC(9900004, 30);
				}else{
					cm.˵������("�����г���ʹ�øù��ܡ�");
					cm.�Ի�����();
				}
                break;
			case 100:
				if(cm.�жϵ�ͼ()>=910000000 && cm.�жϵ�ͼ()<=910000024){
					cm.�Ի�����();
					cm.��NPC(9900004, 100);
				}else{
					cm.˵������("�����г���ʹ�øù��ܡ�");
					cm.�Ի�����();
				}
                break;
				case 1235:
                cm.�Ի�����();
                cm.openNpc(9900004, 71447501);
                break;
			case 1236:
                cm.�Ի�����();
                cm.openNpc(1204033, 2022564);
                break;
			case 1237:
                cm.�Ի�����();
                cm.openNpc(9900004, 1237);
                break;
			case 16:
                cm.�Ի�����();
                cm.openNpc(9900004, 5002);
                break;
			case 200:
                cm.�Ի�����();
                cm.openNpc(9900004, 9908);
                break;
			case 201:
                cm.�Ի�����();
                cm.openNpc(9900004, 9911);
				break;
			case 202:
                cm.�Ի�����();
                cm.openNpc(9900004, 9916);
				break;
			case 203:
                cm.�Ի�����();
                cm.openNpc(9900004, 9918);
				break;
			case 10000:
                cm.teachSkill(2301001, 20, 20);
				cm.sendOk("����ѧϰ�����ƶ���");
				cm.dispose();
				break;
			default:
                cm.�Ի�����();
                break;
        }
    }
}

function �������() {
	var �ı� = "�������";
	if(cm.�жϵ�ͼ()>=910000000 && cm.�жϵ�ͼ()<=910000024){
		var result = "#b"+�ı�+"#k";
	}else{
		var result = "#d"+�ı�+"#k";
	}
	return result;
}

function ��ȯ����() {
	var �ı� = "��ȯ����";
	if(cm.�жϵ�ͼ()>=910000000 && cm.�жϵ�ͼ()<=910000024){
		var result = "#b"+�ı�+"#k";
	}else{
		var result = "#d"+�ı�+"#k";
	}
	return result;
}

function ��������() {
	var �ı� = "��������";
	if(cm.�жϵ�ͼ()>=910000000 && cm.�жϵ�ͼ()<=910000024){
		var result = "#b"+�ı�+"#k";
	}else{
		var result = "#d"+�ı�+"#k";
	}
	return result;
}

function ɾ��������ҵ���(itemId){
	var csList = ChannelServer.getAllInstances();
	var csIt = csList.iterator();
	var i = 0;
	while (csIt.hasNext()){
		var cs = csIt.next();
		var chrIt = cs.getPlayerStorage().getAllCharacters().iterator();
		while (chrIt.hasNext()){
			chrIt.next().removeAll(itemId);
			i++;
		}
	}
	return i;
	
}

function ����ǰ��ͼ���BUFF(itemId, hp, mp, watk, matk, wdef, mdef, acc, avoid, speed, jump, duration, isCanCancel){
	var chrList = cm.getPlayer().getMap().getAllPlayersThreadsafe();
	var chrIt = chrList.iterator();
	var i = 0;
	while (chrIt.hasNext()){
		var chr = chrIt.next();
		chr.giveBuff(itemId, hp, mp, watk, matk, wdef, mdef, acc, avoid, speed, jump, duration, isCanCancel);
		i++;
	}
	return i;
	
}

function ��ָ�����BUFF(name, itemId, hp, mp, watk, matk, wdef, mdef, acc, avoid, speed, jump, duration, isCanCancel){
	var csList = ChannelServer.getAllInstances();
	var csIt = csList.iterator();
	while (csIt.hasNext()){
		var cs = csIt.next();
		var chrIt = cs.getPlayerStorage().getAllCharacters().iterator();
		while (chrIt.hasNext()){
			var chr = chrIt.next();
			if(chr.getName().equals(name)){
				chr.giveBuff(itemId, hp, mp, watk, matk, wdef, mdef, acc, avoid, speed, jump, duration, isCanCancel);
				return;
			}
		}
	}
	
}