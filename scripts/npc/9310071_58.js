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
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            text += "#r��ӭ������ʹð�յ�Ver.079������װ��Ϊȫ����10��\r\n "
            text += "#r#L1#ñ��#l#L2#��װ#l#L3#����#l#L4#����#l#L5#Ь��#l#L6#͸��#l#L7#����#l\r\n\r\n"
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		    cm.sendSimple(text);
       } else if (selection == 1) {//δ��֮��
            cm.openNpc(9310071, 71);
        
        } else if (selection == 2) {//130
            cm.openNpc(9310071, 72);
        
        } else if (selection == 3) {//140
            cm.openNpc(9310071, 73);
       
        } else if (selection == 4) {//Ѫ��
            cm.openNpc(9310071, 74);
        
        } else if (selection == 5) {//Ѫ��
            cm.openNpc(9310071, 75);
        
        } else if (selection == 6) {//Ѫ��
            cm.openNpc(9310071, 76);
        
        } else if (selection == 7) {//Ѫ��
            cm.openNpc(9310071, 78);

        } else if (selection == 8) {//Ѫ��
            cm.openNpc(9310071, 57);

        } else if (selection == 10) {//Ѫ��
            cm.openNpc(9330078, 98);

        } else if (selection == 11) {//Ѫ��
            cm.openNpc(9330078, 99);
        } else if (selection == 20) {//Ѫ��
            cm.openNpc(9310071, 66);
        
        } 

    }
}
