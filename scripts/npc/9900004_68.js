var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1";// ��ƷID,����
var x2;
var x3;
var x4;
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var ��ɫ����� = "#fMap/MapHelper.img/weather/lovelypartybear/6#";
var ��ɫЦ������ = "#fMap/MapHelper.img/weather/birthday/0#";
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
            text += "#r��ӭ����ð�յ�Ver.079����л������Խ��ҵ�������\r\n��ע ������������ȹ������ ��������ȹ�����������ӡ� \r\n#v4001465#����һ���������ѫ��#v4001465#������������Ϊ��#r"+cm.getzb()+"#k#n#d\r\n"
            text += " #L7##v4033613#���������̵�#l#L0#  #v4032521#����88���ֹ���ֵ���#l\r\n #L1##v4031547#����100���ֹ��������#l#L2#����200���ֹ����#l\r\n #L3##v4031548#����300���ֹ��������#l#L4#����400���ֹ����#l\r\n #L5##v4031549#����1000���ֹ��������#l#L6#����2000���ֹ����#l\r\n\r\n"


            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		    cm.sendSimple(text);
        } else if (selection == 0) {//��
            cm.openNpc(9900004,107);
        } else if (selection == 1) {//��
            cm.openNpc(9900004,101);
        
        } else if (selection == 2) {//��
            cm.openNpc(9900004,102);
        
        } else if (selection == 3) {//����
            cm.openNpc(9900004,103);
       
        } else if (selection == 4) {//ǹ
            cm.openNpc(9900004,104);
        
        } else if (selection == 5) {//ì
            cm.openNpc(9900004,105);
        
        } else if (selection == 6) {//��
            cm.openNpc(9900004,106);
             } else if (selection == 7) {//��
            cm.openNpc(9900004,100);
             } else if (selection == 8) {//��
            cm.openNpc(9900004,109);     
        } 

    }
}

