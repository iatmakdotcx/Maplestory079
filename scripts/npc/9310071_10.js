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
            text += "#r��ӭ����ð�յ�Ver.079 \r\n���һ���ע�ⱳ���ռ� ������ʧ��\r\n "
            text += "#r#L1#�һ�����#l     #L2#�һ����#l  #L20#����˫������\r\n #L3#�һ����#l     #L4#�һ�����#l\r\n #L5#�������#l     #L10#�һ�����#l\r\n #L7#�һ���ɫ����#l #L6#�һ��سɾ�#l \r\n #L9#�һ���ʯ����#l #L8#�һ����ų��#l  \r\n #L11#���ձ���װ��#l #L12#���ձس�С����#l  \r\n\r\n "
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		    cm.sendSimple(text);
       } else if (selection == 20) {//ˮ���ϳ�
            cm.openNpc(9310071, 777);
       } else if (selection == 11) {//ˮ���ϳ�
            cm.openNpc(9310071, 200);
       } else if (selection == 12) {//ˮ���ϳ�
            cm.openNpc(9310071, 201);
       } else if (selection == 1) {//ˮ���ϳ�
            cm.openNpc(9310071, 50);
        
        } else if (selection == 2) {//130
            cm.openNpc(9310071, 51);
        
        } else if (selection == 3) {//140
            cm.openNpc(9310071, 52);
       
        } else if (selection == 4) {//Ѫ��
            cm.openNpc(9310071, 53);
        
        } else if (selection == 5) {//Ѫ��
            cm.openNpc(9310071, 54);
        
        } else if (selection == 6) {//Ѫ��
            cm.openNpc(9310071, 55);
        
        } else if (selection == 7) {//Ѫ��
            cm.openNpc(9310071, 56);

        } else if (selection == 8) {//Ѫ��
            cm.openNpc(9310071, 57);

        } else if (selection == 10) {//Ѫ��
            cm.openNpc(9310071, 53);

        } else if (selection == 9) {//Ѫ��
            cm.openNpc(9310071, 77);
        } else if (selection == 13) {//Ѫ��
            cm.openNpc(9310071, 88);
        } else if (selection == 20) {//Ѫ��
            cm.openNpc(9310071, 66);
        
        } 

    }
}