
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE); //��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE); //��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1"; // ��ƷID,����
var x2;
var x3;
var x4;
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var �����Ʒ = "#v1302000#";
var add = "#fEffect/CharacterEff/1112903/0/0#"; //������
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#"; //��ɫ�Ҽ�ͷ
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#"; //��ɫ�Ҽ�ͷ
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#"; //ѡ�����
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��ɫ��ͷ = "#fEffect/CharacterEff/1112908/0/1#"; //�ʹ�3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#"; //����
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var �۰��� = "#fItem/Etc/0427/04270005/Icon8/1#"; //
var �ջ� = "#fUI/PredictHarmony/card/19#"; //��ƬЧ���ջ�
var Ц = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/0#"; //Ц��
var ���Ҷ = "#fMap/MapHelper/weather/maple/2#";
var ���Ҷ = "#fMap/MapHelper/weather/maple/1#";
var ��Ů = "#fMap/MapHelper/weather/witch/0#"; //��Ů
var ���� = "#fMap/MapHelper/weather/balloon/4#"; //����
var ��� = "#fMap/MapHelper/weather/LoveEffect2/4/0#"; //���
var õ�� = "#fMap/MapHelper/weather/rose/0#"; //õ�廨
var �̻� = "#fMap/MapHelper/weather/squib/squib1/3#"; //�̻�

var ��ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/4#"; //
var С�ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/5#"; //
var С���� = "#fItem/Etc/0427/04270001/Icon9/0#"; //
var ����� = "#fItem/Etc/0427/04270001/Icon9/1#"; //
var Сˮ�� = "#fItem/Etc/0427/04270001/Icon10/5#"; //
var ��ˮ�� = "#fItem/Etc/0427/04270001/Icon10/4#"; //
var tz = "#fEffect/CharacterEff/1082565/4/0#"; //������
var tz1 = "#fEffect/CharacterEff/1082565/0/0#"; //������
var tz2 = "#fEffect/CharacterEff/1082565/2/0#"; //������
var а��С�� = ""; //а��С�� ��С��
var а��С��2 = "#fEffect/CharacterEff/1112960/3/1#"; //а��С�� ����
var ���� = "#fEffect/SetEff/208/effect/walk2/4#";
var ����1 = "#fEffect/SetEff/208/effect/walk2/3#";
var С�� = "#fMap/MapHelper/weather/birthday/2#";
var �һ� = "#fMap/MapHelper/weather/rose/4#";
var ����Ҷ = "#fMap/MapHelper/weather/maple/3#";
var С�̻� = "#fMap/MapHelper/weather/squib/squib4/1#";
var ���� = "#fMap/MapHelper/weather/witch/3#";
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
        if (status == 0) 

{


            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
	    
            text += "#e#r" + ���� + "������������" + ���� + ".\r\n"//3     
         // text += "#L4##r�ٻ�����BOSS��BOSS��Ʊ�¿��������20�Ρ�\r\n\r\n"//3
            text += "#L3##d" + С�̻� + "�ٻ�������#v5252001#��ÿ��5��" + С�̻� + "\r\n\r\n"//3
		//	text += "  #d" + С�̻� + "ע:#r������ֵ����99.99%*ʹ�ÿ���̵����#v2022452#\r\n"
		//	text += "  #d" + С�̻� + "#r��Ȼ���ܲ�������" + С�̻� + "\r\n"//3
			
   
            cm.sendSimple(text);
}
        


else if (selection == 1) {
  //  cm.ˢ�µ�ͼ();//��Ȼ�޷��ٻ�����
    cm.warpParty(211042400);//�������
    cm.dispose();
} else if (selection == 5) {
    cm.warp(910000000);//�س�����
    cm.dispose();
} else if (selection == 2) {
    cm.warpParty(209000014);//Ⱥ�崫��
    cm.dispose();
        
} else if (selection == 3) {
			
    if (cm.getParty() == null) 
                { // û�����
                       cm.sendOk("����Ӻ����̸����");
                       cm.dispose();
                  } 
    else if (!cm.isLeader()) { // Not Party Leader
               cm.sendOk("������Ķӳ�����˵��~");
               cm.dispose();
           }
		   
   else if (cm.getBossLog("zhakun") >= 5)//�ٻ�20��
   {
    cm.sendOk("�����Ѿ��ٻ���5���ˣ�");
    cm.dispose();
   }
   else if(cm.getMonsterCount(209000014) > 100)
   {
     cm.sendOk("����������õ�ͼ�Ѿ��ٻ�����BOSS!");
      cm.dispose();
   }
               //5
           else if(cm.haveItem(5252001,1)){//�жϻ���
                   cm.gainItem(5252001, -1);//��ȥ����
//cm.changeMusic("Bgm06/FinalFight");//�ı䱳������
   // cm.spawnMonster(8800000, 1);
   // cm.spawnMonster(8800003, 1);
   // cm.spawnMonster(8800004, 1);
   // cm.spawnMonster(8800005, 1);
   // cm.spawnMonster(8800006, 1);
   // cm.spawnMonster(8800007, 1);
   // cm.spawnMonster(8800008, 1);
   // cm.spawnMonster(8800009, 1);
   // cm.spawnMonster(8800010, 1);

    cm.spawnMobOnMap(9500143,1,-284,154,209000014);//����λ��զ�� 
	cm.spawnMobOnMap(9500143,1,-365,154,209000014);//����λ��զ��	
   // cm.spawnMobOnMap(9500143,1,-6,-230,209000014);//����λ��զ�� 
    

   //cm.spawnMonster(4230107, 3);
    //cm.gainMeso(20000);
    cm.givePartyBossLog("zhakun");
    cm.sendOk("�ٻ��ɹ���");	
	cm.worldMessage(6,"[������] : ��� "+cm.getPlayer().getName()+"  ���������ٻ����˿�����")
	cm.worldMessage(6,"[������] : ��� "+cm.getPlayer().getName()+"  ���������ٻ����˿�����")
	
    cm.dispose();
}else{
    cm.sendOk("��Ҫ��#v5252001#���ܰ����ٻ�������Ŷ~��");
    cm.dispose();
    }
	} else if (selection == 6) {
		if (cm.getLevel() < 0 ) {
			cm.sendOk("ֻ�� #r200��#k �ſ����ٻ���BOSS��");
			cm.dispose();
			 }
			
    if (cm.getParty() == null) 
                { // û�����
                       cm.sendOk("����Ӻ����̸����");
                       cm.dispose();
                  } 
    else if (!cm.isLeader()) { // Not Party Leader
               cm.sendOk("������Ķӳ�����˵��~");
               cm.dispose();
           }
   else if (cm.getBossLog("zhakun") >= 999)//�ٻ�20��
   {
    cm.sendOk("�����Ѿ���ս��20��BOSS�ˣ�");
    cm.dispose();
   }
   else if(cm.getMonsterCount(280030000) > 0)
   {
     cm.sendOk("����������õ�ͼ�Ѿ��ٻ�����BOSS!");
      cm.dispose();
   }
               //5
           else if(cm.haveItem(4001248,1)){//�жϻ���
                   cm.gainItem(4001248, -1);//��ȥ����


    cm.spawnMobOnMap(9601013,1,-364,-154,280030000);//����λ��զ�� 
   

   //cm.spawnMonster(4230107, 3);
    //cm.gainMeso(20000);
    cm.givePartyBossLog("zhakun");
    cm.sendOk("�ٻ��ɹ���");	
	cm.ȫ����ɫ����("[BOSS�ٻ�] : ��� "+cm.getPlayer().getName()+"  ��������̳ �ٻ����߼�BOSS����")
    cm.dispose();
}else{
    cm.sendOk("��Ҫ��#v4001248#���ܰ����ٻ�����Ŷ~��");
    cm.dispose();
    }
	} else if (selection == 7) {
		if (cm.getLevel() < 0 ) {
			cm.sendOk("ֻ�� #r200��#k �ſ����ٻ���BOSS��");
			cm.dispose();
			 }
			
    if (cm.getParty() == null) 
                { // û�����
                       cm.sendOk("����Ӻ����̸����");
                       cm.dispose();
                  } 
    else if (!cm.isLeader()) { // Not Party Leader
               cm.sendOk("������Ķӳ�����˵��~");
               cm.dispose();
           }
   else if (cm.getBossLog("zhakun") >= 999)//�ٻ�20��
   {
    cm.sendOk("�����Ѿ���ս��20��BOSS�ˣ�");
    cm.dispose();
   }
   else if(cm.getMonsterCount(280030000) > 0)
   {
     cm.sendOk("����������õ�ͼ�Ѿ��ٻ�����BOSS!");
      cm.dispose();
   }
               //5
           else if(cm.haveItem(4001248,1)){//�жϻ���
                   cm.gainItem(4001248, -1);//��ȥ����


    cm.spawnMobOnMap(9601014,1,-6,-230,280030000);//����λ��զ�� 
   

   //cm.spawnMonster(4230107, 3);
    //cm.gainMeso(20000);
    cm.givePartyBossLog("zhakun");
    cm.sendOk("�ٻ��ɹ���");	
	cm.ȫ����ɫ����("[BOSS�ٻ�] : ��� "+cm.getPlayer().getName()+"  ��������̳ �ٻ����߼�BOSS�໢")
    cm.dispose();
}else{
    cm.sendOk("��Ҫ��#v4001248#���ܰ����ٻ��໢Ŷ~��");
    cm.dispose();
    }
	} else if (selection == 8) {
		if (cm.getLevel() < 0 ) {
			cm.sendOk("ֻ�� #r200��#k �ſ����ٻ���BOSS��");
			cm.dispose();
			 }
			
    if (cm.getParty() == null) 
                { // û�����
                       cm.sendOk("����Ӻ����̸����");
                       cm.dispose();
                  } 
    else if (!cm.isLeader()) { // Not Party Leader
               cm.sendOk("������Ķӳ�����˵��~");
               cm.dispose();
           }
   else if (cm.getBossLog("zhakun") >= 999)//�ٻ�20��
   {
    cm.sendOk("�����Ѿ���ս��20��BOSS�ˣ�");
    cm.dispose();
   }
   else if(cm.getMonsterCount(280030000) > 0)
   {
     cm.sendOk("����������õ�ͼ�Ѿ��ٻ�����BOSS!");
      cm.dispose();
   }
               //5
           else if(cm.haveItem(4001248,1)){//�жϻ���
                   cm.gainItem(4001248, -1);//��ȥ����


    cm.spawnMobOnMap(9601015,1,-6,-230,280030000);//����λ��զ�� 
   

   //cm.spawnMonster(4230107, 3);
    //cm.gainMeso(20000);
    cm.givePartyBossLog("zhakun");
    cm.sendOk("�ٻ��ɹ���");	
	cm.ȫ����ɫ����("[BOSS�ٻ�] : ��� "+cm.getPlayer().getName()+"  ��������̳ �ٻ����߼�BOSSа��˫�ֵ�")
    cm.dispose();
}else{
    cm.sendOk("��Ҫ��#v4001248#���ܰ���а��˫�ֵ�Ŷ~��");
    cm.dispose();
    }
	} else if (selection == 9) {
		if (cm.getLevel() < 0 ) {
			cm.sendOk("ֻ�� #r200��#k �ſ����ٻ���BOSS��");
			cm.dispose();
			 }
			
    if (cm.getParty() == null) 
                { // û�����
                       cm.sendOk("����Ӻ����̸����");
                       cm.dispose();
                  } 
    else if (!cm.isLeader()) { // Not Party Leader
               cm.sendOk("������Ķӳ�����˵��~");
               cm.dispose();
           }
   else if (cm.getBossLog("zhakun") >= 999)//�ٻ�20��
   {
    cm.sendOk("�����Ѿ���ս��20��BOSS�ˣ�");
    cm.dispose();
   }
   else if(cm.getMonsterCount(280030000) > 0)
   {
     cm.sendOk("����������õ�ͼ�Ѿ��ٻ�����BOSS!");
      cm.dispose();
   }
               //5
           else if(cm.haveItem(4001248,1)){//�жϻ���
                   cm.gainItem(4001248, -1);//��ȥ����


    cm.spawnMobOnMap(8840000,1,-6,-230,280030000);//����λ��զ�� 
   

   //cm.spawnMonster(4230107, 3);
    //cm.gainMeso(20000);
    cm.givePartyBossLog("zhakun");
    cm.sendOk("�ٻ��ɹ���");	
	cm.ȫ����ɫ����("[BOSS�ٻ�] : ��� "+cm.getPlayer().getName()+"  ��������̳ �ٻ����߼�BOSS �װ�ʨ")
    cm.dispose();
}else{
    cm.sendOk("��Ҫ��#v4001248#���ܰ����ٻ��ࡤ�װ�Ŷ~��");
    cm.dispose();
    }
	} else if (selection == 10) {
		if (cm.getLevel() < 0 ) {
			cm.sendOk("ֻ�� #r200��#k �ſ����ٻ���BOSS��");
			cm.dispose();
			 }
			
    if (cm.getParty() == null) 
                { // û�����
                       cm.sendOk("����Ӻ����̸����");
                       cm.dispose();
                  } 
    else if (!cm.isLeader()) { // Not Party Leader
               cm.sendOk("������Ķӳ�����˵��~");
               cm.dispose();
           }
   else if (cm.getBossLog("zhakun") >= 999)//�ٻ�20��
   {
    cm.sendOk("�����Ѿ���ս��20��BOSS�ˣ�");
    cm.dispose();
   }
   else if(cm.getMonsterCount(280030000) > 0)
   {
     cm.sendOk("����������õ�ͼ�Ѿ��ٻ�����BOSS!");
      cm.dispose();
   }
               //5
           else if(cm.haveItem(4001248,1)){//�жϻ���
                   cm.gainItem(4001248, -1);//��ȥ����


    cm.spawnMobOnMap(9410224,1,-6,-230,280030000);//����λ��զ�� 
   

   //cm.spawnMonster(4230107, 3);
    //cm.gainMeso(20000);
    cm.givePartyBossLog("zhakun");
    cm.sendOk("�ٻ��ɹ���");	
	cm.ȫ����ɫ����("[BOSS�ٻ�] : ��� "+cm.getPlayer().getName()+"  ��������̳ �ٻ����߼�BOSS ��ʼ��")
    cm.dispose();
}else{
    cm.sendOk("��Ҫ��#v4001248#���ܰ����ٻ��ࡤ�װ�Ŷ~��");
    cm.dispose();
   }
   } else if (selection == 11) {
		if (cm.getLevel() < 0 ) {
			cm.sendOk("ֻ�� #r200��#k �ſ����ٻ���BOSS��");
			cm.dispose();
			 }
			
    if (cm.getParty() == null) 
                { // û�����
                       cm.sendOk("����Ӻ����̸����");
                       cm.dispose();
                  } 
    else if (!cm.isLeader()) { // Not Party Leader
               cm.sendOk("������Ķӳ�����˵��~");
               cm.dispose();
           }
   else if (cm.getBossLog("zhakun") >= 999)//�ٻ�20��
   {
    cm.sendOk("�����Ѿ���ս��20��BOSS�ˣ�");
    cm.dispose();
   }
   else if(cm.getMonsterCount(280030000) > 0)
   {
     cm.sendOk("����������õ�ͼ�Ѿ��ٻ�����BOSS!");
      cm.dispose();
   }
               //5
           else if(cm.haveItem(4001248,1)){//�жϻ���
                   cm.gainItem(4001248, -1);//��ȥ����


    cm.spawnMobOnMap(9300028,1,-6,-230,280030000);//����λ��զ�� 
   

   //cm.spawnMonster(4230107, 3);
    //cm.gainMeso(20000);
    cm.givePartyBossLog("zhakun");
    cm.sendOk("�ٻ��ɹ���");	
	cm.ȫ����ɫ����("[BOSS�ٻ�] : ��� "+cm.getPlayer().getName()+"  ��������̳ �ٻ����߼�BOSS ��ħ��ʦ")
    cm.dispose();
}else{
    cm.sendOk("��Ҫ��#v4001248#���ܰ����ٻ��ࡤ�װ�Ŷ~��");
    cm.dispose();
   }


} else if (selection == 4) {//BOSS��Ʊ�¿�
			
    if (cm.getParty() == null) 
                { // û�����
                       cm.sendOk("����Ӻ����̸����");
                       cm.dispose();
                  } 
    else if (!cm.isLeader()) { // Not Party Leader
               cm.sendOk("������Ķӳ�����˵��~");
               cm.dispose();
           }
   else if (cm.getBossLog("zhakun") >= 20)//�ٻ�20��
   {
    cm.sendOk("�����Ѿ���ս��20��������������ٻ������û����ٻ���");
    cm.dispose();
   }
//   else if(cm.getMonsterCount(910000022) > 0)
//   {
//     cm.sendOk("����������õ�ͼ�Ѿ��ٻ�����BOSS!");
//      cm.dispose();
//   }
               //5
           else if(cm.haveItem(3994713,1)){//�ж�ʯ��

            cm.spawnMobOnMap(8800000,1,-6,-230,280030000);//����λ��զ�� 
            cm.spawnMobOnMap(8800003,1,-6,-230,280030000);//����λ��զ�� 
            cm.spawnMobOnMap(8800004,1,-6,-230,280030000);//����λ��զ�� 
            cm.spawnMobOnMap(8800005,1,-6,-230,280030000);//����λ��զ�� 
            cm.spawnMobOnMap(8800006,1,-6,-230,280030000);//����λ��զ�� 
            cm.spawnMobOnMap(8800007,1,-6,-230,280030000);//����λ��զ�� 
            cm.spawnMobOnMap(8800008,1,-6,-230,280030000);//����λ��զ�� 
            cm.spawnMobOnMap(8800009,1,-6,-230,280030000);//����λ��զ�� 
            cm.spawnMobOnMap(8800010,1,-6,-230,280030000);//����λ��զ�� 

     cm.givePartyBossLog("zhakun");
               cm.sendOk("�ٻ��ɹ���");	
               cm.dispose();
               }else{
               cm.sendOk("��Ҫ��#v3994713#���ܰ����ٻ�BOSSŶ~��");
               cm.dispose();
               }


        }  
    }
}


