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

            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		   text += " \t\t\t  #e#r #v4000005#  ����С��  #v4000005##k#n              \r\n"
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            text += "#d\t��ɫ���ƣ�#b" + cm.getName() + "#k#n\t\t  #dʣ���ң�#b" + cm.getMeso() + "#k#n\r\n"	
		

		    // text += "\t#k��ǿ����װ�����ڵ�һ�����ǿ��������(5��)\r\n"//3\r\n"//3
            text += "#L14##r#v1003982#�����ɳ�װ��#r#l\t #L6##r#v1142358#ѫ��ǿ��#l\r\n"//3\r\n"//3
            text += "#L2##r#v1113090#��ʯ��ָ#r#l\t\t#L3##r#v1112444#��Ҷ��ָ#r#l\r\n"//3
			text += "#L4##r#v1114303#��Ʊ��ָ#r#l\t\t#L5##r#v1114226#��ʯ��ָ#r#l\r\n"//3
			text += "#L1##r#v1112907#С���ָ#r#l\t\t#L8##r#v1113219#�ɳ���ָ#r#l\r\n"//3
			text += "#L12##r#v1114401#�ڰ�֮����ָ#r#l\t#L10##r#v1114403#�����ָ#r#l\r\n"//3
			text += "#L9##r#v1142788#ѫ�ºϳ�#r#l\t\t#L13##r#v1115400#���￨Ƭ��ָ#r#l\r\n"//3
			text += "#L15##r#v1102109#��������#r#l\t\t#L16##r#v1052202#�׷�����#r#l\r\n"//3
			text += "#L17##r#v1072447#Ь������#r#l\t\t#L18##r#v1132298#��������#r#l\r\n"//3
			// text += "#L11##r#v2070024#���ڶһ�#r#l\r\n"//3
			// text += "#L7#\t\t\t#r#v1102039#��������#r#l\r\n"//3

text += "\r\n"+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n\r\n"
		    cm.sendSimple(text);
        } else if (selection == 1) {//С���ָ
            cm.dispose();
            cm.openNpc(9900004, 10011);
		} else if (selection == 2) {//��ʯ��ָ
            cm.dispose();
            cm.openNpc(9900004, 10014);
		} else if (selection == 3) {//��Ҷ��ָ
            cm.dispose();
            cm.openNpc(9900004, 10017);
		} else if (selection == 4) {//��Ʊ��ָ
            cm.dispose();
            cm.openNpc(9900004, 10020);
        } else if (selection == 5) {//��ʯ��ָ
            cm.dispose();
            cm.openNpc(9900004, 10023);
	    } else if (selection == 6) {//ѫ��ǿ��
            cm.dispose();
            cm.openNpc(9000038, 4);
        } else if (selection == 7) {//��������
            cm.dispose();
            cm.openNpc(9900004, 10028);
        } else if (selection == 8) {//�ɳ���ָ
            cm.dispose();
            cm.openNpc(9900004, 10075);
		} else if (selection == 9) {//ѫ�ºϳ�
            cm.dispose();
            cm.openNpc(9900004, 10090);
		} else if (selection == 10) {//�����ָ
            cm.dispose();
            cm.openNpc(9000038, 1);
		} else if (selection == 11) {//���ڶһ�
            cm.dispose();
            cm.openNpc(9000038, 2);
		} else if (selection == 12) {//���ڶһ�
            cm.dispose();
            cm.openNpc(9000038, 3);
		} else if (selection == 13) {//���ڶһ�
            cm.dispose();
            cm.openNpc(9000038, 5);
		} else if (selection == 14) {//�����ɳ�װ��
            cm.dispose();
            cm.openNpc(9000038, 6);
		} else if (selection == 15) {//�����ɳ�װ��
            cm.dispose();
            cm.openNpc(9000038, 8);
		} else if (selection == 16) {//�����ɳ�װ��
            cm.dispose();
            cm.openNpc(9000038, 9);
		} else if (selection == 17) {//�����ɳ�װ��
            cm.dispose();
            cm.openNpc(9000038, 10);
		} else if (selection == 18) {//�����ɳ�װ��
            cm.dispose();
            cm.openNpc(9000038, 11);
		}
        // else if (selection == 76) {//��Ҷ�ϳ�
            // cm.openNpc(2000, 4);
        // } else if (selection == 2) {//�𻨽�ָ
            // cm.openNpc(9900004, 9893);
        // } else if (selection == 8) {//�ʼҰ�
            // cm.openNpc(9900004, 10075);
        // } else if (selection == 3) { //ʮ���Ž�ָ
            // cm.openNpc(9900004, 9894);
		// } else if (selection == 4) {//������
            // cm.openNpc(9900004, 2003);
        // } else if (selection == 5) {//������
            // cm.openNpc(9900004, 2004);
        // } else if (selection == 6) {//����
            // cm.openNpc(9000037, 0);
        // } else if (selection == 6) {//����
            // cm.openNpc(9900004, 2005);
        // } else if (selection == 7) {//����
            // cm.openNpc(9900004, 2006);
        // } else if (selection == 77) {//��������
           // cm.openNpc(9900004, 3045);
        // } else if (selection == 10) {//��������
            // cm.openNpc(9900004, 78);
        // } else if (selection == 9) {//�����ͻ�
            // cm.openNpc(9010009, 0);
        // } else if (selection == 10) {//��ѵ�װ
            // cm.openNpc(9310071, 0);
        // } else if (selection == 11) {//���ﲹ��
            // cm.openNpc(9900004, 68);
        // } else if (selection == 12) {//�����һ�
            // cm.openNpc(2000, 22);
        // } else if (selection == 13) {//ѫ����ȡ
            // cm.openNpc(9900004, 7);
        // } else if (selection == 14) {//��������
            // cm.openNpc(9310033, 0);
        // } else if (selection == 15) {//��ֵ����
            // cm.openNpc(9900004, 81);
        // } else if (selection == 2999) {//ÿ������
            // cm.openNpc(9900004, 2);
        // } else if (selection == 3999) {//ÿ��ǩ��
            // cm.openNpc(9010010, 0);
        // } else if (selection == 4999) {//��������
            // cm.openNpc(9310057, 0);
        // } else if (selection == 5999) {//Ѫ������
            // cm.openNpc(2100007, 0);
        // } else if (selection == 6999) {//�齱
            // cm.openNpc(9050007, 0);
        // } else if (selection == 7999) {//����
            // cm.openNpc(9000021, 0);
        // } else if (selection == 999) {//21��
            // cm.openNpc(9900004, 932);
        // } else if (selection == 9999) {//����
            // cm.openNpc(9000008, 0);
        // } else if (selection == 10999) {//
            // cm.openNpc(2000, 0);
     // } else if (selection == 1000) {//
            // cm.openNpc(9900004, 1004);
        // } else if (selection == 6666) {//
            // cm.openNpc(9900004, 16);
        // } else if (selection == 7777) {//
            // cm.openNpc(9900004, 7);
        // } else if (selection == 8888) {//
            // cm.openNpc(9900004, 6);
        // } else if (selection == 1002) {//
           // cm.openNpc(9900004, 1002);
            // cm.dispose();
        // } else if (selection == 1003) {//
            // cm.dispose();
          // cm.openNpc(9100200, 0);
        // } else if (selection == 111999) {//
            // cm.dispose();
          // cm.openNpc(9270050, 0);
        // } else if (selection == 1111999) {//
            // cm.dispose();
          // cm.openNpc(9310071, 0);
        // } else if (selection == 1004) {//
            // cm.gainNX(999999);;
            // cm.gainMeso(210000000);
              // cm.sendOk("\r\n\r\n\t\t\t#e#r��ϲ������99999���!\r\n\r\n\t\t\t#e#r��ϲ������2E���!");
            // cm.dispose();
        // } else if (selection == 9999) {//
		// if(cm.getBossLog("2016�") <= 0 && cm.canHold(4001215,3) && cm.getLevel() >= 8){
			// cm.setBossLog("2016�");
            // cm.gainItem(4001215, 3);
			// cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��2016-04-10���ϻ���影�������x3��");
            // cm.sendOk("��ȡ�ɹ���");
            // cm.dispose();
		// }else{
            // cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���������������ռ�");
            // cm.dispose();
		// }
		// }
    }
}


