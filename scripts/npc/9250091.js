var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1";// ��ƷID,����
var x2;
var x3;
var x4;
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

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
            text += "#r��ӭ������ʹð�յ�Ver.079����л������Խ��ҵ������� "
            text += "#r\r\n��ѡ�������������������ƽ������ͬ������ \r\n"
            text += "#L0#  #v4032521#66ԪVIP�������������#l\r\n #L1# #v4031546#һ��Ԫ�������#l\r\n #L2##v4031547#����Ԫ�������#l\r\n #L3##v4031548#���Ԫ�������#l\r\n #L4##v4031549#һǧԪ�������#l\r\n #L5##v4300000#��ǧԪ�������#l\r\n #L6##v4301000#��ǧԪ�������#l\r\n\r\n"


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
        
        } 

    }
}

