var ���� = "#fEffect/CharacterEff/1114000/2/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
                        text += " #e����׬Ǯϵͳ#b�����ʱ����ı�ʯ ��Ӱ��� ֵǮ������ #k#n\r\n"
            text += "     "+ ��ɫ��ͷ +"#L21##rLv50.������򼸱��#l\r\n\r\n"//3
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
			text += "\t  #e����boss����#b ���Ѷ�Խ�� �������ϼ���Խ�ߡ�#k!#n\r\n"
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            text += "#L1##e#d" + ��ɫ��ͷ + "����ţ������#l#L2##d " + ��ɫ��ͷ + "ľ��������#l\r\n\r\n"//3
            text += "#L3##d" + ��ɫ��ͷ + "Ģ��������  #l#L4##d " + ��ɫ��ͷ + "�ľ�з����#l\r\n\r\n"//3
            text += "#L5##d" + ��ɫ��ͷ + "��ʬ��������#l#L6##d " + ��ɫ��ͷ + "�ϵ��ܸ���#l\r\n\r\n"//3
            text += "#L23##d" + ��ɫ��ͷ + "��Ģ��������#l#L24##d " + ��ɫ��ͷ + "��Ī����#l\r\n\r\n"//3
            text += "#L7##d" + ��ɫ��ͷ + "������ʦ����#l#L8##d " + ��ɫ��ͷ + "����������#l\r\n\r\n"//3
            text += "#L9##d" + ��ɫ��ͷ + "�����ܸ���  #l#L10##d " + ��ɫ��ͷ + "Ъ���򸱱�#l\r\n\r\n"//3
            text += "#L11##d" + ��ɫ��ͷ + "��β������  #l#L12##d " + ��ɫ��ͷ + "����ָ���#l\r\n\r\n"//3
            text += "#L13##d" + ��ɫ��ͷ + "����ֶั��#l#L14##d " + ��ɫ��ͷ + "���������#l\r\n\r\n"//3 
            text += "#L19##d" + ��ɫ��ͷ + "���޸���#l  #L20##d " + ��ɫ��ͷ + "�׿�����#l\r\n\r\n"//3
            text += "#L15##d" + ��ɫ��ͷ + "��ั��#l    #L16##d " + ��ɫ��ͷ + "���������޸���#l\r\n\r\n"//3
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {//����ţ��
            if (cm.getLevel() < 10 ) {  
            cm.sendOk("����ͼ���Ƶȼ�10������������û���ʸ���ս����ţ������");
                cm.dispose();
              }else{
			cm.warp(104000400);  
				cm.dispose();
                return;
	      } 
         } else if (selection == 2) {//ľ����
            if (cm.getLevel() < 20 ) {  
            cm.sendOk("����ͼ���Ƶȼ�20������������û���ʸ���սľ��������");
                cm.dispose();
              }else{
			cm.warp(101030404);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 3) {//Ģ����
            if (cm.getLevel() < 30 ) {  
            cm.sendOk("����ͼ���Ƶȼ�30������������û���ʸ���սĢ��������");
                cm.dispose();
              }else{
			cm.warp(100000005);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 4) {//�ľ�з
            if (cm.getLevel() < 30 ) {  
            cm.sendOk("����ͼ���Ƶȼ�30������������û���ʸ���ս�ľ�з����");
                cm.dispose();
              }else{
			cm.warp(110040000);  
				cm.dispose();
                return;
	      } 
       } else if (selection == 5) {//��ʬĢ����
            if (cm.getLevel() < 40 ) {  
            cm.sendOk("����ͼ���Ƶȼ�40������������û���ʸ���ս��ʬĢ��������");
                cm.dispose();
              }else{
			cm.warp(105070002);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 6) {//�ϵ���
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս�ϵ��ܸ���");
                cm.dispose();
              }else{
			cm.warp(250010304);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 7) {//������ʦ
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս������ʦ����");
                cm.dispose();
              }else{
			cm.warp(250010503);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 8) {//������
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս����������");
                cm.dispose();
              }else{
			cm.warp(107000300);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 9) {//������
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս�����ܸ���");
                cm.dispose();
              }else{
			cm.warp(200010300);  
				cm.dispose();
                return;
	      } 
       } else if (selection == 10) {//Ъ����
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���սЪ���򸱱�");
                cm.dispose();
              }else{
			cm.warp(230020100);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 11) {//��β��
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս��β������");
                cm.dispose();
              }else{
			cm.warp(222010310);  
				cm.dispose();
                return;
	      } 
       } else if (selection == 12) {//�����
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���ս����ָ���");
                cm.dispose();
              }else{
			cm.warp(105090900);  
				cm.dispose();
                return;
	      } 
         } else if (selection == 13) {//����ֶ�
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("����ͼ���Ƶȼ�120������������û���ʸ���ս����ֶั��");
                cm.dispose();
              }else{
			cm.warp(240020101);  
				cm.dispose();
                return;
	      } 
        } else if (selection == 14) {//�����
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("����ͼ���Ƶȼ�120������������û���ʸ���ս���������");
                cm.dispose();
              }else{
			cm.warp(240020402);  
				cm.dispose();
                return;
	      }
        } else if (selection == 15) {//���
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("����ͼ���Ƶȼ�120������������û���ʸ���ս��ั��");
                cm.dispose();
              }else{
			cm.warp(270010500);  
				cm.dispose();
                return;
	      }
        } else if (selection == 16) {//����������
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("����ͼ���Ƶȼ�120������������û���ʸ���ս���������޸���");
                cm.dispose();
              }else{
			cm.warp(270020500);  
				cm.dispose();
                return;
	      }  
        } else if (selection == 17) {//����
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("����ͼ���Ƶȼ�120������������û���ʸ���ս��������");
                cm.dispose();
              }else{
			cm.warp(230040420);  
				cm.dispose();
                return;
	      }
        } else if (selection == 18) {//����
            if (cm.getLevel() < 100 ) {  
            cm.sendOk("����ͼ���Ƶȼ�100������������û���ʸ����Ӹ���");
                cm.dispose();
              }else{
			cm.warp(220080001);  
				cm.dispose();
                return;
	      }  
        } else if (selection == 19) {//����
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("����ͼ���Ƶȼ�120������������û���ʸ���޸���");
                cm.dispose();
              }else{
			cm.warp(240040401);  
				cm.dispose();
                return;
	      }
        } else if (selection == 20) {//��������
            if (cm.getLevel() < 120 ) {  
            cm.sendOk("����ͼ���Ƶȼ�120������������û���ʸ��׿�����");
                cm.dispose();
              }else{
			cm.warp(270030500);  
				cm.dispose();
                return;
	      }  
        } else if (selection == 21) {//�������
            if (cm.getLevel() < 30 ) {  
            cm.sendOk("����ͼ���Ƶȼ�30������������û���ʸ������򼸱��");
                cm.dispose();
              }else{
			cm.warp(701010322);  
				cm.dispose();
                return;
	      }
              } else if (selection == 22) {//��������
            if (cm.getLevel() < 70 ) {  
            cm.sendOk("����ͼ���Ƶȼ�70������������û���ʸ��������Ǹ���");
                cm.dispose();
              }else{
			cm.warp(551030100);  
				cm.dispose();
                return;
 }
 } else if (selection == 23) {//��������
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���Ģ��������");
                cm.dispose();
              }else{
			cm.warp(800010100);  
				cm.dispose();
                return;
}
 } else if (selection == 24) {//���׺���
            if (cm.getLevel() < 50 ) {  
            cm.sendOk("����ͼ���Ƶȼ�50������������û���ʸ���Ī����");
                cm.dispose();
              }else{
			cm.warp(220050100);  
				cm.dispose();
                return;
	      }  
        }
    }
}