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
			text += "#L71##r" + ��ɫ�ǵ� + "#v1102944#	����֮Ӱ��������	#r #l\r\n" //3
			text += "#L72##r" + ��ɫ�ǵ� + "#v1102943#	����֮Ӱ��������#r #l\r\n" //3
			text += "#L73##r" + ��ɫ�ǵ� + "#v1102942#	����֮Ӱ����������	#r #l\r\n" //3
			text += "#L74##r" + ��ɫ�ǵ� + "#v1102941#  ����֮Ӱ��ʦ����	#r #l\r\n" //3
			text += "#L75##r" + ��ɫ�ǵ� + "#v1102940#	����֮Ӱսʿ����	#r #l\r\n" //3
			text += "#L76##r" + ��ɫ�ǵ� + "#v1082699#  ����֮Ӱ��������	#r #l\r\n" //3
			text += "#L77##r" + ��ɫ�ǵ� + "#v1082698#  ����֮Ӱ��������	#r #l\r\n" //3
			text += "#L78##r" + ��ɫ�ǵ� + "#v1082697#  ����֮Ӱ����������#r #l\r\n" //3
			text += "#L79##r" + ��ɫ�ǵ� + "#v1082696#  ����֮Ӱ��ʦ����#r #l\r\n" //3
			text += "#L80##r" + ��ɫ�ǵ� + "#v1082695#  ����֮Ӱսʿ����	#r #l\r\n" //3
			text += "#L81##r" + ��ɫ�ǵ� + "#v1073162#  ����֮Ӱ����Ь	#r #l\r\n" //3
			text += "#L82##r" + ��ɫ�ǵ� + "#v1073161#  ����֮Ӱ����Ь	#r #l\r\n" //3
			text += "#L83##r" + ��ɫ�ǵ� + "#v1073160#  ����֮Ӱ������Ь	#r #l\r\n" //3
			text += "#L84##r" + ��ɫ�ǵ� + "#v1073159#	����֮Ӱ��ʦЬ	#r #l\r\n" //3
			text += "#L85##r" + ��ɫ�ǵ� + "#v1073158#	����֮ӰսʿЬ	#r #l\r\n" //3
			text += "#L86##r" + ��ɫ�ǵ� + "#v1053067#  ����֮Ӱ������װ	#r #l\r\n" //3
			text += "#L87##r" + ��ɫ�ǵ� + "#v1053066#  ����֮Ӱ������װ	#r #l\r\n" //3
			text += "#L88##r" + ��ɫ�ǵ� + "#v1053065#  ����֮Ӱ��������װ	#r #l\r\n" //3
			text += "#L89##r" + ��ɫ�ǵ� + "#v1053064#  ����֮Ӱ��ʦ��װ	#r #l\r\n" //3
			text += "#L90##r" + ��ɫ�ǵ� + "#v1053063#  ����֮Ӱսʿ��װ	#r #l\r\n" //3
			text += "#L91##r" + ��ɫ�ǵ� + "#v1004812#  ����֮Ӱ����ñ	#r #l\r\n" //3
			text += "#L92##r" + ��ɫ�ǵ� + "#v1004811#  ����֮Ӱ����ñ	#r #l\r\n" //3
			text += "#L93##r" + ��ɫ�ǵ� + "#v1004810#  ����֮Ӱ������ñ#r #l\r\n" //3
			text += "#L94##r" + ��ɫ�ǵ� + "#v1004809#	����֮Ӱ��ʦñ	#r #l\r\n" //3
			text += "#L95##r" + ��ɫ�ǵ� + "#v1004808#	����֮Ӱսʿñ	#r #l\r\n" //3
           
                //text += "#L6##r" + ��ɫ�ǵ� + "#r ������ ~~ ��#r New    #v1452252##z1452252#      #v1052882##z1052882##l#l\r\n\r\n"//3
                //  text += "#L7##r" + ��ɫ�ǵ� + "   ~����~  #r  New     #v01452302##z01452302##l#l\r\n\r\n"//3

            text += "\r\n" + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + ���� + "\r\n\r\n"
            if (cm.getPlayer().isGM()) {
                text += " \t\t#r���¹��ܣ�������Ա�ɼ�����ͨ��ҿ�����\r\n"
                text += "#L1000#��ݴ���#l\t#L1001#����תְ#l\t#L1002#ˢ��Ʒ#l\t#L1003#������#l\r\n#L1004#ˢ�����#l\r\n"


            }
            cm.sendSimple(text);
        } else if (selection == 71) { //��������
            cm.openNpc(9900004, 3017);
        } else if (selection == 72) { //��������
            cm.openNpc(9900004, 3018);
        } else if (selection == 73) { //��������
            cm.openNpc(9900004, 3019);
        } else if (selection == 74) { //��ָ����
            cm.openNpc(9900004, 3020);
        } else if (selection == 75) { //��������
            cm.openNpc(9900004, 3021);
        } else if (selection == 9) { //��Ҷ�ϳ�
            cm.openNpc(9900004, 1822);
        } else if (selection == 2) { //�𻨽�ָ
            cm.openNpc(9900004, 9893);
        } else if (selection == 8) { //�ʼҰ�
            cm.openNpc(9900004, 3026);
        } else if (selection == 3) { //ʮ���Ž�ָ
            cm.openNpc(9900004, 9894);
        } else if (selection == 4) { //������
            cm.openNpc(9900004, 2003);
        } else if (selection == 5) { //������
            cm.openNpc(9900004, 2004);
        } else if (selection == 6) { //����
            cm.openNpc(9900004, 3031);
            // } else if (selection == 6) {//����
            //   cm.openNpc(9900004, 2005);
        } else if (selection == 7) { //����
            cm.openNpc(9310032, 0);
        } else if (selection == 9) { //��������
            cm.openNpc(9900004, 77);
        } else if (selection == 10) { //��������
            cm.openNpc(9900004, 78);
        } else if (selection == 9) { //�����ͻ�
            cm.openNpc(9010009, 0);
        } else if (selection == 10) { //��ѵ�װ
            cm.openNpc(9310071, 0);
        } else if (selection == 11) { //���ﲹ��
            cm.openNpc(9900004, 68);
        } else if (selection == 12) { //�����һ�
            cm.openNpc(2000, 22);
        } else if (selection == 13) { //ѫ����ȡ
            cm.openNpc(9900004, 7);
        } else if (selection == 14) { //��������
            cm.openNpc(9310033, 0);
        } else if (selection == 15) { //��ֵ����
            cm.openNpc(9900004, 81);
        } else if (selection == 2999) { //ÿ������
            cm.openNpc(9900004, 2);
        } else if (selection == 3999) { //ÿ��ǩ��
            cm.openNpc(9010010, 0);
        } else if (selection == 4999) { //��������
            cm.openNpc(9310057, 0);
        } else if (selection == 5999) { //Ѫ������
            cm.openNpc(2100007, 0);
        } else if (selection == 6999) { //�齱
            cm.openNpc(9050007, 0);
        } else if (selection == 7999) { //����
            cm.openNpc(9000021, 0);
        } else if (selection == 999) { //21��
            cm.openNpc(9900004, 932);
        } else if (selection == 9999) { //����
            cm.openNpc(9000008, 0);
        } else if (selection == 10999) { //
            cm.openNpc(2000, 0);
        } else if (selection == 1000) { //
            cm.openNpc(9330078, 100);
        } else if (selection == 6666) { //
            cm.openNpc(9900004, 16);
        } else if (selection == 7777) { //
            cm.openNpc(9900004, 7);
        } else if (selection == 8888) { //
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