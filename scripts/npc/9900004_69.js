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
            text += "#b#L0#��ս����boss[���ظ� ˢǮ~]\r\n#b#L2#��սǧ������[��Ʒ���γ���]  #b#L3#�����ط�����#l\r\n#b#L5#120����սÿ�ս�Ҹ�������[�����˲ſ���ս]#l\r\n#L4#150����ս糺����boss[��Ʒ��������]     #l\r\n#b#L1#150����սδ��֮������boss[�������Ե�װ]#l\r\n#b#L6#200����սð����ʿ�Ÿ���[�����ſ�����]#l\r\n\r\n"
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		    cm.sendSimple(text);
        } else if (selection == 0) {//���
             cm.dispose();
             cm.openNpc(9900004, 2130);
       } else if (selection == 1) {//δ��֮��
            cm.openNpc(9310071, 60);
                                cm.removeAll(3991026);
                                cm.removeAll(3991027); 
                                cm.removeAll(3991028); 
        } else if (selection == 2) {//130
            cm.warp(541020700);
        
        } else if (selection == 3) {//140
            cm.warp(541020800);
       
        } else if (selection == 4) {//Ѫ��
            cm.openNpc(9900004, 2320);
        
        } else if (selection == 5) {//Ѫ��
            cm.openNpc(9310071, 80);
        
        } else if (selection == 6) {//Ѫ��
            cm.openNpc(9310071, 90);
        
        } else if (selection == 7) {//Ѫ��
            cm.openNpc(9310071, 56);

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