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
        } else {
            status--;
        }
        if (status == 0) {
            if (cm.getJob() >= 0 && cm.getJob() <= 522 && cm.hasSkill(1017) == false) {
                cm.teachSkill(1017, 1, 1);
            } else if (cm.getJob() >= 1000 || cm.getJob() <= 2112 && cm.hasSkill(20001019) == false) {
                cm.teachSkill(20001019, 1, 1);
            }
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n"
            text += " \t\t\t  #e#r #v4000005#  ����С��  #v4000005##k#n              \r\n"
            text += "" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n"
            text += "#d��ɫ���ƣ�#b" + cm.getName() + "#k#n\t\t  #dʣ���ң�#b" + cm.getMeso() + "#k#n\r\n"

            var tex2 = "" + cm.getHyPay(1) + "";
            // text += "#L72##r" + ��ɫ�ǵ� + "���Ϻϳ�#r New     #v4251202##z4251202##l#l\r\n\r\n"//3
			text += "#L1##r" + ��ɫ�ǵ� + "�����#v1122365##r New#l\r\n" //3
            text += "#L2##r" + ��ɫ�ǵ� + "��������#v1072369##r New#l\r\n" //3
			text += "#L3##r" + ��ɫ�ǵ� + "��߸���#v1022160##r New#l#l\r\n" //3
            text += "#L5##r" + ��ɫ�ǵ� + "��ո���#v1082232##r New#l\r\n" //3
			text += "#L4##r" + ��ɫ�ǵ� + "��������#v1002571##r New #l\r\n" //3
            text += "#L6##r" + ��ɫ�ǵ� + "������#v1032252##r New#l#l\r\n" //3
			text += "#L7##r" + ��ɫ�ǵ� + "����ŷ������Ҷ����#v1102082##r New#l#l\r\n" //3
                //text += "#L1##r" + ��ɫ�ǵ� + "����װ��~ǰ�ڱر�#r New     #v1302081##v1052155##l#l\r\n"//3
                //text += "#L8##r" + ��ɫ�ǵ� + " ����~~ ��װ#r New     #v1052358##z1052358##l#l\r\n\r\n"//3
                // text += "#L2##r" + ��ɫ�ǵ� + "#r�𻨽�ָ~ŷ������#r New     #v1113226#���1-100��ά#l#l\r\n"//3
                // text += "#L3##r" + ��ɫ�ǵ� + "#rʮ���Ž�ָ~�ռ�����#r New     #v1112613#160��ά#l#l\r\n"//3

                //text += "#L6##r" + ��ɫ�ǵ� + "#r ������ ~~ ��#r New    #v1452252##z1452252#      #v1052882##z1052882##l#l\r\n\r\n"//3
                //  text += "#L7##r" + ��ɫ�ǵ� + "   ~����~  #r  New     #v01452302##z01452302##l#l\r\n\r\n"//3

            text += "\r\n" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n\r\n"
           
            cm.sendSimple(text);
       
        } else if (selection == 1) { //��Ҷ�ϳ�
		cm.�����Ի�();
            cm.openNpc(9900004, 3036);
		} else if (selection == 2) { //��Ҷ�ϳ�
		cm.�����Ի�();
            cm.openNpc(9900004, 3037);
		} else if (selection == 3) { //��Ҷ�ϳ�
		cm.�����Ի�();
            cm.openNpc(9900004, 3038);
		} else if (selection == 4) { //��Ҷ�ϳ�
		cm.�����Ի�();
            cm.openNpc(9900004, 3039);
	    } else if (selection == 5) { //��Ҷ�ϳ�
		cm.�����Ի�();
            cm.openNpc(9900004, 3054);
		} else if (selection == 6) { //��Ҷ�ϳ�
		cm.�����Ի�();
            cm.openNpc(9900004, 3055);
		} else if (selection == 7) { //��Ҷ�ϳ�
		cm.�����Ի�();
            cm.openNpc(9900004, 3056);
        } else if (selection == 8) { //�𻨽�ָ
		cm.�����Ի�();
            cm.openNpc(9900004, 3051);
        } else if (selection == 8) { //�ʼҰ�
		cm.�����Ի�();
            cm.openNpc(9900004, 3026);
        } else if (selection == 3) { //ʮ���Ž�ָ
		cm.�����Ի�();
            cm.openNpc(9900004, 9894);
        } else if (selection == 4) { //������
		cm.�����Ի�();
            cm.openNpc(9900004, 2003);
        } else if (selection == 5) { //������
		cm.�����Ի�();
            cm.openNpc(9900004, 2004);
        } else if (selection == 6) { //����
		cm.�����Ի�();
            cm.openNpc(9900004, 3031);
        } else if (selection == 74) { //����
		cm.�����Ի�();
            cm.openNpc(9900004, 3032);
        } else if (selection == 9) { //��������
		cm.�����Ի�();
            cm.openNpc(9900004, 77);
        } else if (selection == 10) { //��������
		cm.�����Ի�();
            cm.openNpc(9900004, 78);
        } else if (selection == 9) { //�����ͻ�
		cm.�����Ի�();
            cm.openNpc(9010009, 0);
        } else if (selection == 10) { //��ѵ�װ
		cm.�����Ի�();
            cm.openNpc(9310071, 0);
        } else if (selection == 11) { //���ﲹ��
		cm.�����Ի�();
            cm.openNpc(9900004, 68);
        } else if (selection == 12) { //�����һ�
		cm.�����Ի�();
            cm.openNpc(2000, 22);
        } else if (selection == 75) { //ѫ����ȡ
		cm.�����Ի�();
            cm.openNpc(9900004, 3053);
        } else if (selection == 14) { //��������
		cm.�����Ի�();
            cm.openNpc(9310033, 0);
        } else if (selection == 15) { //��ֵ����
		cm.�����Ի�();
            cm.openNpc(9900004, 81);
        } else if (selection == 2999) { //ÿ������
		cm.�����Ի�();
            cm.openNpc(9900004, 2);
        } else if (selection == 3999) { //ÿ��ǩ��
		cm.�����Ի�();
            cm.openNpc(9010010, 0);
        } else if (selection == 4999) { //��������
		cm.�����Ի�();
            cm.openNpc(9310057, 0);
        } else if (selection == 5999) { //Ѫ������
		cm.�����Ի�();
            cm.openNpc(2100007, 0);
        } else if (selection == 6999) { //�齱
		cm.�����Ի�();
            cm.openNpc(9050007, 0);
        } else if (selection == 7999) { //����
		cm.�����Ի�();
            cm.openNpc(9000021, 0);
        } else if (selection == 999) { //21��
		cm.�����Ի�();
            cm.openNpc(9900004, 932);
        } else if (selection == 9999) { //����
		cm.�����Ի�();
            cm.openNpc(9000008, 0);
        } else if (selection == 10999) { //
		cm.�����Ի�();
            cm.openNpc(2000, 0);
        } else if (selection == 1000) { //
		cm.�����Ի�();
            cm.openNpc(9330078, 100);
        } else if (selection == 6666) { //
		cm.�����Ի�();
            cm.openNpc(9900004, 16);
        } else if (selection == 7777) { //
		cm.�����Ի�();
            cm.openNpc(9900004, 7);
        } else if (selection == 8888) { //
		cm.�����Ի�();
            cm.openNpc(9900004, 6);
        } else if (selection == 1002) { //
            cm.openNpc(9900004, 1002);
            cm.dispose();
        } else if (selection == 1003) { //
            cm.dispose();
            cm.openNpc(9100200, 0);
        } else if (selection == 111999) { //
            cm.dispose();
            cm.openNpc(9270050, 0);
        } else if (selection == 1111999) { //
            cm.dispose();
            cm.openNpc(9310071, 0);
        } else if (selection == 1004) { //
            cm.gainNX(999999);;
            cm.gainMeso(210000000);
            cm.sendOk("\r\n\r\n\t\t\t#e#r��ϲ������99999���!\r\n\r\n\t\t\t#e#r��ϲ������2E���!");
            cm.dispose();
        } else if (selection == 9999) { //
            if (cm.getBossLog("2016�") <= 0 && cm.canHold(4001215, 3) && cm.getLevel() >= 8) {
                cm.setBossLog("2016�");
                cm.gainItem(4001215, 3);
                cm.worldMessage(6, "��ң�[" + cm.getName() + "]��ȡ��2016-04-10���ϻ���影�������x3��");
                cm.sendOk("��ȡ�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���������������ռ�");
                cm.dispose();
            }
        }
    }
}