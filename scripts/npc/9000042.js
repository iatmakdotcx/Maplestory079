var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1";// ��ƷID,����
var x2;
var x3;
var x4;
var add = "#fEffect/CharacterEff/1022223/4/0#";
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";
var add = "#fEffect/CharacterEff/1112905/0/1#";//������
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";//��ɫ�Ҽ�ͷ
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";//��ɫ�Ҽ�ͷ
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";//ѡ�����
var ���� = "#fEffect/CharacterEff/1003276/0/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
//var add = "#fUI/Basic/BtHide3/mouseOver/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var �ٷ� = "#fEffect/CharacterEff/1003252/0/0#";
var ���� = "#fEffect/CharacterEff/1032063/0/0#";
var �� = "#fUI/UIWindow.img/AriantMatch/characterIcon/0#";
var s = "#fUI/StatusBar/BtClaim/normal/0#";
var h = "#fUI/CashShop/CSEffect/effect/1#";
var Сѩ�� = "#fEffect/CharacterEff/1003393/0/0#";


function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
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
			if(cm.getJob() >= 0 && cm.getJob()<= 522 && cm.hasSkill(1017) == false){
			cm.teachSkill(1017,1,1);
			}else if(cm.getJob() >=1000 || cm.getJob() <= 2112 && cm.hasSkill(2311003) == false){
			cm.teachSkill(2311003,30,30);
			}
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
   text += "             "+����+"#e#r���ð�յ�#k#n"+����+       "\r\n"
//   text += "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + " [������Ϣ] " + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + " \r\n";
   text += "" + ��ɫ��ͷ + "����:" + cm.getGamePoints() + " " + ��ɫ��ͷ + "���:" + cm.getPlayer().getCSPoints(1) + " " + ��ɫ��ͷ + "��ֵ:" + cm.getmoneyb() + " " + ��ɫ��ͷ + "����:" + cm.getzb() + "#k#n\r\n"
    
   text += "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + " #L100##r[�����г�]#l " + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + " \r\n";
 
   text +="#L1##k"+������ͷ+"���ٴ���#l#L2##k" +������ͷ+"����̵�#l#L3##r" +������ͷ+"���߽���#l#L4##r"+������ͷ+"��ֵ����#l\r\n"//3

   text +="#L13##k"+������ͷ+"Ǳ��ǿ��#l#L14##k"+������ͷ+"#rÿ������#K#l#L7##k" +������ͷ+"�����һ�#l#L8##r" +������ͷ+"��Ա����#l\r\n"

   text +="#L17##k"+������ͷ+"ƽ���ש#l#L10##k" +������ͷ+"����н�#l#L11##k" +������ͷ+"����̳�#l#L12##r" +������ͷ+"����ר��#l\r\n"

   text +="#L5##k"+������ͷ+"����תְ#l#L26##k" +������ͷ+"���ʲ�ѯ#l#L23##k" +������ͷ+"������#l#L21##r"+������ͷ+"���а�#l\r\n\r\n"

   text += "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + " #L101##r[����ֿ�]#l " + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + " \r\n";

   text +="#L9##r"+������ͷ+"һ������#l#L18##r" +������ͷ+"ʦͽϵͳ#l#L19##r" +������ͷ+"���ϵͳ#l#L20##k" +������ͷ+"�س��̵�#l\r\n"
 
   text +="#L16##k" +������ͷ+"����һ�#l#L22##k" +������ͷ+"��Ҷ����#l#L15##k" +������ͷ+"#rѪ������#K#l#L24##k" +������ͷ+"������#l\n\r\r\n"

   text +="#L25##k"+������ͷ+"��Ӱ��ͼ#l#L33##r" +������ͷ+"���ϵͳ#l#L30##r" +������ͷ+"����תְ#l#L32##r" +������ͷ+"��ļ���#l\r\n\r\n"
 
   text += "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + " [����ģʽ] " + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + "" + ���� + " \r\n";
 
if (cm.getPlayer().isGM()) {

   text += "#L1004#"+������ͷ+"Ҫˢ���#l#L1005#"+������ͷ+"Ҫˢ���#l#L27##k" +������ͷ+"ˢ�µ�ͼ#l#L28##k" +������ͷ+"ˢ��״̬#l\r\n"
   text += "#L29##k"+������ͷ+"�����ط�#l#L50##k"+������ͷ+"�BOSS#l#L51##k"+������ͷ+"���﹥��#l\r\n"


  }
		    cm.sendSimple(text);
        } else if (selection == 2000) {//�����
	var job = cm.getJob();
				var job1 = Math.floor(job/10);
				var job2 = Math.floor(job/100);
				var i = 0;
				while ( i <=12 ){
					var skill4ת1 = job*10000+i;
					var skill4ת2 = job*10000+1000+i;
					var skill3ת1 = job1*100000+10000+i;
					var skill3ת2 = job1*100000+10000+1000+i;
					var skill2ת1 = job1*100000+i;
					var skill2ת2 = job1*100000+1000+i;
					var skill1ת1 = job2*1000000+i;
					var skill1ת2 = job2*1000000+1000+i;

					cm.teachSkill(skill4ת1,30,30);
					cm.teachSkill(skill4ת2,30,30);

					cm.teachSkill(skill3ת1,30,30);
					cm.teachSkill(skill3ת2,30,30);
					cm.teachSkill(skill2ת1,30,30);
					cm.teachSkill(skill2ת2,30,30);
					cm.teachSkill(skill1ת1,20,20);
					cm.teachSkill(skill1ת2,20,20);
					i++;
            				cm.sendOk("����������ף���������!");
            				cm.dispose();
				}

        } else if (selection == 1) {//�����
            cm.teachSkill(14101006,0,0);
            cm.openNpc(9900004, 1);
  } else if (selection == 2) {//����̵�2
            cm.openShop(1);
            cm.dispose();
//        } else if (selection == 2) {//����̵�105
//            cm.openShop(105);
//			cm.dispose();

        } else if (selection == 3) { //���߽���
            cm.openNpc(9900004, 13);


        } else if (selection == 4) {//�س��̵�
		    cm.dispose();
            cm.openNpc(9310043, 0);
        } else if (selection == 5) {//����תְ
            cm.openNpc(9900004, 2);
        } else if (selection == 6) {//װ���һ�
            cm.openNpc(9100200, 0);
        } else if (selection == 7) {//�����һ�
            cm.openNpc(9310084, 0);
        } else if (selection == 8) {//VIP������
            cm.openNpc(9900004, 666);

        } else if (selection == 9) {//һ������
	var job = cm.getJob();
				var job1 = Math.floor(job/10);
				var job2 = Math.floor(job/100);
				var i = 0;
				while ( i <=12 ){
					var skill4ת1 = job*10000+i;
					var skill4ת2 = job*10000+1000+i;
					var skill3ת1 = job1*100000+10000+i;
					var skill3ת2 = job1*100000+10000+1000+i;
					var skill2ת1 = job1*100000+i;
					var skill2ת2 = job1*100000+1000+i;
					var skill1ת1 = job2*1000000+i;
					var skill1ת2 = job2*1000000+1000+i;

					cm.teachSkill(skill4ת1,30,30);
					cm.teachSkill(skill4ת2,30,30);

					cm.teachSkill(skill3ת1,30,30);
					cm.teachSkill(skill3ת2,30,30);
					cm.teachSkill(skill2ת1,30,30);
					cm.teachSkill(skill2ת2,30,30);
					cm.teachSkill(skill1ת1,20,20);
					cm.teachSkill(skill1ת2,20,20);
					i++;
            				cm.sendOk("����������ף���������!");
            				cm.dispose();};

        } else if (selection == 10) {//����н�
            cm.openNpc(9900004, 900);
        } else if (selection == 11) {//����̳�
            cm.openNpc(9310085, 0);
        } else if (selection == 12) {//����ר��
            //cm.openNpc(9900004, 799);
            cm.openNpc(9120017, 0);

        } else if (selection == 13) {//Ǳ��ǿ��
            cm.openNpc(1200004, 0);
        } else if (selection == 14) {//ÿ������
            cm.openNpc(9050002, 0);
        } else if (selection == 15) {//Ѫ������  
            cm.openNpc(1002006, 0);
        } else if (selection == 16) {//��ʯ����
            cm.openNpc(9900004, 400);

        } else if (selection == 17) {//ƽ���ש
            cm.openNpc(9050003, 0);
        } else if (selection == 18) {//ʦͽϵͳ
            cm.openNpc(9900004, 1992);
        } else if (selection == 19) {//���ϵͳ
            cm.openNpc(9900004, 9);
        } else if (selection == 20) {//��ֵ����
            cm.dispose();
			cm.openNpc(9310059);	


        } else if (selection == 21) {//���а�
            cm.openNpc(9040004, 0);
        } else if (selection == 22) {//��Ҷ����
            cm.openNpc(9900004, 81);
        } else if (selection == 23) {//������
            cm.openNpc(9900004, 77);
        } else if (selection == 24) {//������
            cm.openNpc(9900004, 444);	
        } else if (selection == 25) {//��Ӱ��ͼ
            cm.warp(970000000, 0);
            cm.dispose();	
        } else if (selection == 26) {//���ʲ�ѯ
            cm.openNpc(2000, 0);
        } else if (selection == 27) {//ˢ�µ�ͼ
            cm.ˢ�µ�ͼ();
            cm.dispose();
        } else if (selection == 28) {//ˢ��״̬
            cm.ˢ��״̬();
            cm.dispose();
        } else if (selection == 29) {//�����ط�
            cm.openNpc(9900004,16);
        } else if (selection == 32) {//��ӹ㲥
            cm.openNpc(9000037,10);
        } else if (selection == 33) {//���ϵͳ
            cm.openNpc(9900003,1);
        } else if (selection == 30) {//����תְ
            cm.openNpc(9900004,10222);
        } else if (selection == 50) {//�BOSS
            cm.openNpc(9010000,50);
        } else if (selection == 51) {//���﹥��
            cm.openNpc(9010000,51);
        } else if (selection == 100) {//�����г�
            cm.warp(910000000, 0);
            cm.dispose();
        } else if (selection == 101) {//����ֿ�
            cm.openNpc(9100004, 0);

        } else if (selection == 0) {//
            cm.openNpc(9310002, 0);
     } else if (selection == 1000) {//
            cm.openNpc(9900004, 1004);
        } else if (selection == 1001) {//
            cm.openNpc(9900004, 2);
        } else if (selection == 1002) {//
           cm.gainItem(1072153,300,300,300,300,300,300,80,80,100,100,10,10,10,10);
        } else if (selection == 1003) {//
            cm.dispose();
          cm.openNpc(9100200, 0);

        } else if (selection == 291) {//
            cm.gainItem(1072153,300,300,300,300,300,300,80,80,100,100,10,10,10,10);

        } else if (selection == 1004) {//ˢ���
            cm.gainNX(10000000);
            cm.dispose();
        } else if (selection == 1005) {//ˢ���
            cm.gainMeso(+1000000000);
            cm.dispose();


cm.setBossLog('MRYM') ; 
 cm.setBossLog('MRFQ');
 cm.setBossLog('MRWJ');
 cm.setBossLog('MRTK');
            cm.dispose();
        } else if (selection == 999) {//
		if(cm.getBossLog("2016�") <= 0 && cm.canHold(4001215,3) && cm.getLevel() >= 8){
			cm.setBossLog("2016�");
            cm.gainItem(4001215, 3);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��2016-04-10���ϻ���影�������x3��");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���������������ռ�");
            cm.dispose();
		}
		}
    }
}


