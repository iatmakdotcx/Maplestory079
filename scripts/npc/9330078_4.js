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
          //  text += "#b#v4031344##v4031344##v4031344##v3994075##v3994066##v3994071##v3994077##v4031344##v4031344##v4031344##k\r\n";
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n\r\n"


            text += "#r ��������Ҫ�ϳ�ʲô���Ե�Ѫ�£�"
            text += "\r\n\r\n#l#L1##b2000HP/MP#l   #L2##b4000HP/MP#l   #L3##b6000HP/MP#l\r\n \r\n\r\n"


            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		    cm.sendSimple(text);
        } else if (selection == 1) {//ˮ���ϳ�
            cm.openNpc(9330078, 41);
        
        } else if (selection == 2) {//130
            cm.openNpc(9330078, 42);
        
        } else if (selection == 3) {//140
            cm.openNpc(9330078, 43);
        } 
    }
}


