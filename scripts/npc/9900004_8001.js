/* global cm */
//var ���� = "#fEffect/CharacterEff/1003276/0/0#";
var ���� = "#fEffect/CharacterEff/1003276/0/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

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
			}else if(cm.getJob() >=1000 || cm.getJob() <= 2112 && cm.hasSkill(20001019) == false){
			cm.teachSkill(20001019,1,1);
			}
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		   text += " \t\t\t  #e#r #v4030000# #r�һ�ϵͳ #v4030000##k#n              \r\n"
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            text += "#d��ɫ���ƣ�#b" + cm.getName() + "#k#n\t\t  #dʣ���ң�#b" + cm.getMeso() + "#k#n\r\n"	
		
		var tex2 = ""+cm.getHyPay(1)+"";
            text += "#rע�ͣ�#k��ȫ����150 G100�� #r����ӵ����ͬ�����ط���#l\r\n\r\n"//3
            text += "#L1##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b����#i1102944##l#l\r\n\r\n"//3
            text += "#L2##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b����#v1102943# #l#l\r\n\r\n"//3
			text += "#L3##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b������#v1102942# #l#l\r\n\r\n"//3
			text += "#L4##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b��ʦ#v1102941# #l#l\r\n\r\n"//3
			text += "#L5##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #bսʿ#v1102940# #l#l\r\n\r\n"//3
			text += "#L6##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b����#v1082699# #l#l\r\n\r\n"//3
			text += "#L7##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b����#v1082698# #l#l\r\n\r\n"//3
			text += "#L8##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b������#v1082697# #l#l\r\n\r\n"//3
			text += "#L9##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b��ʦ#v1082696# #l#l\r\n\r\n"//3
			text += "#L10##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #bսʿ#v1082695# #l#l\r\n\r\n"//3
			text += "#L11##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b����#v1073162# #l#l\r\n\r\n"//3
			text += "#L12##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b����#v1073161# #l#l\r\n\r\n"//3
			text += "#L13##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b������#v1073160# #l#l\r\n\r\n"//3
			text += "#L14##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b��ʦ#v1073159# #l#l\r\n\r\n"//3
			text += "#L15##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #bսʿ#v1073158# #l#l\r\n\r\n"//3
			text += "#L16##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b����#v1053067# #l#l\r\n\r\n"//3
			text += "#L17##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b����#v1053066# #l#l\r\n\r\n"//3
			text += "#L18##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b������#v1053065# #l#l\r\n\r\n"//3
			text += "#L19##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b��ʦ#v1053064# #l#l\r\n\r\n"//3
			text += "#L20##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #bսʿ#v1053063# #l#l\r\n\r\n"//3
			text += "#L21##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b����#v1004812# #l#l\r\n\r\n"//3
			text += "#L22##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b����#v1004811# #l#l\r\n\r\n"//3
			text += "#L23##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b������#v1004810# #l#l\r\n\r\n"//3
			text += "#L24##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #b��ʦ#v1004809# #l#l\r\n\r\n"//3
			text += "#L25##r" + ��ɫ�ǵ� + "#v4000464# X 500 + #v4251202# X 500#r  �һ� #bսʿ#v1004808# #l#l\r\n\r\n"//3
			
text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n\r\n"
 if (cm.getPlayer().isGM()) {
                text += " \t\t#r���¹��ܣ�������Ա�ɼ�����ͨ��ҿ�����\r\n"
                text += "#L1000#��ݴ���#l\t#L1001#����תְ#l\t#L1002#ˢ��Ʒ#l\t#L1003#������#l\r\n#L1004#ˢ�����#l\r\n"

            
  }
		    cm.sendSimple(text);
        } else if (selection == 1) {//��Ҷ�ϳ�
            cm.openNpc(9900004, 7710);
        } else if (selection == 2) {//�ʼҰ�
            cm.openNpc(9900004, 7711);
        } else if (selection == 3) {//�ʼҰ�
            cm.openNpc(9900004, 7712);
        } else if (selection == 4) { //�޽�
            cm.openNpc(9900004, 7713);
	    } else if (selection == 5) {//������
            cm.openNpc(9900004, 7714);
	    } else if (selection == 6) {//��Ҷ�ϳ�
            cm.openNpc(9900004, 7715);
        } else if (selection == 7) {//�ʼҰ�
            cm.openNpc(9900004, 7716);
        } else if (selection == 8) {//�ʼҰ�
            cm.openNpc(9900004, 7717);
        } else if (selection == 9) { //�޽�
            cm.openNpc(9900004, 7718);
	    } else if (selection == 10) {//������
            cm.openNpc(9900004, 7719);
		} else if (selection == 11) {//��Ҷ�ϳ�
            cm.openNpc(9900004, 7720);
        } else if (selection == 12) {//�ʼҰ�
            cm.openNpc(9900004, 7721);
        } else if (selection == 13) {//�ʼҰ�
            cm.openNpc(9900004, 7722);
        } else if (selection == 14) { //�޽�
            cm.openNpc(9900004, 7723);
	    } else if (selection == 15) {//������
            cm.openNpc(9900004, 7724);
	    } else if (selection == 16) {//��Ҷ�ϳ�
            cm.openNpc(9900004, 7725);
        } else if (selection == 17) {//�ʼҰ�
            cm.openNpc(9900004, 7726);
        } else if (selection == 18) {//�ʼҰ�
            cm.openNpc(9900004, 7727);
        } else if (selection == 19) { //�޽�
            cm.openNpc(9900004, 7728);
	    } else if (selection == 20) {//������
            cm.openNpc(9900004, 7729);
		} else if (selection == 21) {//��Ҷ�ϳ�
            cm.openNpc(9900004, 7730);
        } else if (selection == 22) {//�ʼҰ�
            cm.openNpc(9900004, 7731);
        } else if (selection == 23) {//�ʼҰ�
            cm.openNpc(9900004, 7732);
        } else if (selection == 2) { //�޽�
            cm.openNpc(9900004, 7733);
	    } else if (selection == 25) {//������
            cm.openNpc(9900004, 7734);
        } else if (selection == 5) {//����
            cm.openNpc(9900004, 7735);
        } else if (selection == 6) {//����
            cm.openNpc(9900004, 2005);
        } else if (selection == 7) {//����
            cm.openNpc(9900004, 2006);
        } else if (selection == 1) {//��������
           cm.openNpc(9900004, 7734);
        } else if (selection == 10) {//��������
            cm.openNpc(9900004, 78);
        } else if (selection == 9) {//�����ͻ�
            cm.openNpc(9010009, 0);
        } else if (selection == 10) {//��ѵ�װ
            cm.openNpc(9310071, 0);
        } else if (selection == 11) {//���ﲹ��
            cm.openNpc(9900004, 68);
        } else if (selection == 12) {//�����һ�
            cm.openNpc(2000, 22);
        } else if (selection == 13) {//ѫ����ȡ
            cm.openNpc(9900004, 7);
        } else if (selection == 14) {//��������
            cm.openNpc(9310033, 0);
        } else if (selection == 15) {//��ֵ����
            cm.openNpc(9900004, 81);
        } else if (selection == 2999) {//ÿ������
            cm.openNpc(9900004, 2);
        } else if (selection == 3999) {//ÿ��ǩ��
            cm.openNpc(9010010, 0);
        } else if (selection == 4999) {//��������
            cm.openNpc(9310057, 0);
        } else if (selection == 5999) {//Ѫ������
            cm.openNpc(2100007, 0);
        } else if (selection == 6999) {//�齱
            cm.openNpc(9050007, 0);
        } else if (selection == 7999) {//����
            cm.openNpc(9000021, 0);
        } else if (selection == 999) {//21��
            cm.openNpc(9900004, 932);
        } else if (selection == 9999) {//����
            cm.openNpc(9000008, 0);
        } else if (selection == 10999) {//
            cm.openNpc(2000, 0);
     } else if (selection == 1000) {//
            cm.openNpc(9900004, 1004);
        } else if (selection == 6666) {//
            cm.openNpc(9900004, 16);
        } else if (selection == 7777) {//
            cm.openNpc(9900004, 7);
        } else if (selection == 8888) {//
            cm.openNpc(9900004, 6);
        } else if (selection == 1002) {//
           cm.openNpc(9900004, 1002);
            cm.dispose();
        } else if (selection == 1003) {//
            cm.dispose();
          cm.openNpc(9100200, 0);
        } else if (selection == 111999) {//
            cm.dispose();
          cm.openNpc(9270050, 0);
        } else if (selection == 1111999) {//
            cm.dispose();
          cm.openNpc(9310071, 0);
        } else if (selection == 1004) {//
            cm.gainNX(999999);;
            cm.gainMeso(210000000);
              cm.sendOk("\r\n\r\n\t\t\t#e#r��ϲ������99999���!\r\n\r\n\t\t\t#e#r��ϲ������2E���!");
            cm.dispose();
        } else if (selection == 9999) {//
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


