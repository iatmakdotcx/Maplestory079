/*�ϳ�NPC ����:bay ��*/
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

            cm.sendOk("��ӭ���٣�");
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
            for (i = 0; i < 60; i++) {
                text += "";
            }
            text +="    �ϳ�֮ǰ,���ȼ�� ���� ÿһ����Ŀ �Ƿ���������λ����? �ٽ��кϳ�, ����ϳɺ󲻼�,���Ŷ!\r\n";
            text += "#L1##d��ά/��/ħ +5   �ر�/���� +5  HP/MP +100   #v1142005##k#l\r\n";
            text += "#L2##d��ά/��/ħ +10  �ر�/���� +10  HP/MP +200  #v1142006##k#l\r\n";
            text += "#L3##d��ά/��/ħ +15  �ر�/���� +15  HP/MP +500  #v1142134##k#l\r\n";
            text += "#L4##d��ά/��/ħ +20  �ر�/���� +20  HP/MP +1000 #v1142135##k#l\r\n";
            text += "#L5##d��ά/��/ħ +25  �ر�/���� +25  HP/MP +1500 #v1142136##k#l\r\n";
            text += "#L6##d��ά/��/ħ +30  �ر�/���� +30  HP/MP +1500 #v1142216##k#l\r\n";
			text += "#L7##d��ά/��/ħ +30  �ر�/���� +30  HP/MP +2000 #v1142189##k#l\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(4000313, 10) && cm.haveItem(4000000, 50) && cm.haveItem(4000016, 50) && cm.haveItem(4000019, 50) && cm.haveItem(4000003, 50) && cm.haveItem(4000004, 100) && cm.haveItem(4001126, 100) && cm.getMeso() >=800000) {
                cm.gainItem(4000313,-10);//�ƽ��Ҷ
				cm.gainItem(4000000,-50);//����ţ��
                cm.gainItem(4000016,-50);//����ţ��
				cm.gainItem(4000019,-50);//����ţ��
				cm.gainItem(4000003,-50);//��֦
				cm.gainItem(4000004,-100);//��ˮ����
				cm.gainItem(4001126,-100);//��Ҷ
				//cm.gainItem(4005001,-1);
				//cm.gainItem(4005002,-1);
				//cm.gainItem(4005003,-1);
				//cm.gainItem(4000017,-10);
				//cm.gainItem(4001126,-500);
				//cm.gainItem(4002000,-10);
				//cm.gainItem(4031559,-10);
                cm.gainMeso(-800000);
				cm.gainItem(1142005,5,5,5,5,100,100,5,5,0,0,5,5,3,3);
                cm.sendOk("�ϳ�#v1142005#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*10��  #v4000000#*50��  #v4000016#*50��  #v4000019#*50��  #v4000003#*50��  #v4000004#*100�� #v4001126#*100�� 80����");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.haveItem(1142005, 1) && cm.haveItem(4000313, 100) && cm.haveItem(4000001, 100) && cm.haveItem(4000009, 100) && cm.haveItem(4000015, 100) && cm.haveItem(4000040, 1) && cm.haveItem(4000012, 100) && cm.haveItem(4000008, 100) && cm.haveItem(4001126, 300) && cm.getMeso() >=1000000) {
                cm.gainItem(1142005,-1);
				cm.gainItem(4000313,-100);//�Ʒ�Ҷ
				cm.gainItem(4000001,-100);//��Ģ��
                cm.gainItem(4000009,-100);//��Ģ��
				cm.gainItem(4000015,-100);//��Ģ��
				cm.gainItem(4000040,-1);//Ģ������
				cm.gainItem(4000012,-100);//��Ģ��
				cm.gainItem(4000008,-100);//��ʬĢ��
				cm.gainItem(4000176,-1);//��ʬĢ������
				//cm.gainItem(4005002,-3);
				//cm.gainItem(4005003,-3);
				//cm.gainItem(4005004,-3);
				//cm.gainItem(4000029,-100);
				cm.gainItem(4001126,-300);//��Ҷ
				//cm.gainItem(4002000,-30);
				//cm.gainItem(4002001,-10);
				//cm.gainItem(4031559,-15);
                cm.gainMeso(-1000000);
				cm.gainItem(1142006,10,10,10,10,200,200,10,10,0,0,10,10,5,5);
                cm.sendOk("�ϳ�#v1142006#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*100��  #v1142005#*1��  #v4000001#*100��  #v4000009#*100��  #v4000015#*100�� #v4000012#*100�� #v4000008#*100��    #v4000040#*1�� #v4000176#*1�� #v4001126#*300�� 100����");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.haveItem(1142006, 1) && cm.haveItem(4000313, 150) && cm.haveItem(4000059, 200) && cm.haveItem(4000060, 200) && cm.haveItem(4000061, 200) && cm.haveItem(4000027, 100) && cm.haveItem(4000036, 100) && cm.haveItem(4001126, 500) && cm.haveItem(4000463, 2) && cm.getMeso() >=3000000) {
                cm.gainItem(1142006,-1);
				cm.gainItem(4000313,-150);
				cm.gainItem(4000059,-200);
                cm.gainItem(4000060,-200);
				cm.gainItem(4000061,-200);
				//cm.gainItem(4021005,-5);
				//cm.gainItem(4021002,-5);
				//cm.gainItem(4251200,-1);
				//cm.gainItem(4000040,-20);
				//cm.gainItem(4000176,-20);
				cm.gainItem(4000027,-100);
				cm.gainItem(4000036,-100);
				cm.gainItem(4001126,-500);
				cm.gainItem(4000463,-2);
				//cm.gainItem(4002000,-60);
				//cm.gainItem(4002001,-15);
				//cm.gainItem(4002002,-1);
				//cm.gainItem(4031559,-20);
                cm.gainMeso(-3000000);
				cm.gainItem(1142134,15,15,15,15,500,500,15,15,0,0,15,15,8,8);
                cm.sendOk("�ϳ�#v1142134#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*150�� #v1142006#*1�� #v4000059#*200�� #v4000060#*200�� #v4000061#*200�� #v4000027#*100�� #v4000036#*100��     #v4001126#*500��  #v4000463#*2��  300����");
                cm.dispose();
            }
			
        } else if (selection == 4) {
            if (cm.haveItem(1142134, 1) && cm.haveItem(4000313, 200) && cm.haveItem(4000073, 200) && cm.haveItem(4000070, 200) && cm.haveItem(4000071, 200) && cm.haveItem(4000072, 200) && cm.haveItem(4000074, 100) && cm.haveItem(4000057, 100) && cm.haveItem(4001126, 1000) && cm.haveItem(4000463, 5) && cm.getMeso() >=15000000) {
                cm.gainItem(1142134,-1);
				cm.gainItem(4000313,-200);
				cm.gainItem(4000073,-200);
                cm.gainItem(4000070,-200);
				cm.gainItem(4000071,-200);
				cm.gainItem(4000072,-200);
				//cm.gainItem(4021002,-200);
				//cm.gainItem(4251201,-1);
				//cm.gainItem(4001111,-10);
				//cm.gainItem(4000152,-10);
				cm.gainItem(4000074,-100);
				cm.gainItem(4000057,-100);
				cm.gainItem(4001126,-1000);
				cm.gainItem(4000463,-5);
				//cm.gainItem(4002000,-80);
				//cm.gainItem(4002001,-10);
				//cm.gainItem(4002002,-3);
				//cm.gainItem(4002003,-15);
				//cm.gainItem(4031559,-25);
                cm.gainMeso(-15000000);
				cm.gainItem(1142135,20,20,20,20,1000,1000,20,20,0,0,20,20,10,10);
                cm.sendOk("�ϳ�#v1142135#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*200�� #v1142134#*1�� #v4000073#200��  #v4000070#200��  #v4000071#*200��  #v4000072#*200��  #v4000074#*100��   #v4000057#*100��  #v4001126#*1000�� #v4000463#*5�� 1500����");
                cm.dispose();
            }
                } else if (selection == 5) {
            if (cm.haveItem(1142135, 1) && cm.haveItem(4000313, 250) && cm.haveItem(4000232, 300) && cm.haveItem(4000233, 300) && cm.haveItem(4000234, 300) && cm.haveItem(4000053, 100) && cm.haveItem(4000054, 100) && cm.haveItem(2049000, 1) && cm.haveItem(4001083, 1) && cm.haveItem(4001084, 3) && cm.haveItem(4001085, 3) && cm.haveItem(4000175, 3) && cm.haveItem(4001126, 2500) && cm.haveItem(4000463, 10) && cm.getMeso() >=20000000) {
                cm.gainItem(1142135,-1);
				cm.gainItem(4000313,-250);
				cm.gainItem(4000232,-300);
                cm.gainItem(4000233,-300);
				cm.gainItem(4000234,-300);
				cm.gainItem(4000053,-100);
				cm.gainItem(4000054,-100);
				cm.gainItem(2049000,-1);
				cm.gainItem(4001083,-1);
				cm.gainItem(4001084,-3);
				cm.gainItem(4001085,-3);
				cm.gainItem(4000175,-3);
				cm.gainItem(4001126,-2500);
				cm.gainItem(4000463,-10);
				//cm.gainItem(4002000,-100);
				//cm.gainItem(4002001,-25);
				//cm.gainItem(4002002,-5);
				//cm.gainItem(4002003,-30);
				//cm.gainItem(4031559,-30);
                cm.gainMeso(-20000000);
				cm.gainItem(1142136,25,25,25,25,1500,1500,25,25,0,0,25,25,12,12);
                cm.sendOk("�ϳ�#v1142136#�ɹ���");
                cm.dispose();
            } else {
				cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*250�� #v1142135#*1�� #v4000232#*300�� #v4000233#*300�� #v4000234#*300�� #v4000053#*100�� #v4000054#*100��      #v2049000#1%*1�� #v4001083#*1�� #v4001084#*3�� #v4001085#*3�� #v4000175#*3�� #v4001126#*2500�� #v4000463#*10�� 3000����");
				cm.dispose();
            }
            
        } else if (selection == 6) {
			
            if (cm.haveItem(1142136, 3) && cm.haveItem(4000313, 1250) && cm.haveItem(4011004, 50) && cm.haveItem(4021007, 50) && cm.haveItem(4011006, 50) && cm.haveItem(4021005, 50) && cm.haveItem(4021002, 50) && cm.haveItem(4251202, 5) && cm.haveItem(4001083, 5) && cm.haveItem(4001084, 15) && cm.haveItem(4001085, 15) && cm.haveItem(4000175, 15) && cm.haveItem(4001126, 5000) && cm.haveItem(4000463, 100) && cm.haveItem(4002000, 500) && cm.haveItem(4002001, 75) && cm.haveItem(4002002, 25) && cm.haveItem(4002003, 90) && cm.haveItem(4031559, 50) && cm.getMeso() >=50000000) {
                cm.gainItem(1142136,-3);
				cm.gainItem(4000313,-1250);
				cm.gainItem(4011004,-50);
                cm.gainItem(4021007,-50);
				cm.gainItem(4011006,-50);
				cm.gainItem(4021005,-50);
				cm.gainItem(4021002,-50);
				cm.gainItem(4251202,-5);
				cm.gainItem(4001083,-5);
				cm.gainItem(4001084,-15);
				cm.gainItem(4001085,-15);
				cm.gainItem(4000175,-15);
				cm.gainItem(4001126,-5000);
				cm.gainItem(4000463,-10);
				cm.gainItem(4002000,-500);
				cm.gainItem(4002001,-100);
				cm.gainItem(4002002,-25);
				cm.gainItem(4002003,-90);
				cm.gainItem(4031559,-50);
                cm.gainMeso(-50000000);
				cm.gainItem(1142216,30,30,30,30,1500,1500,30,30,0,0,30,30,15,15);
                cm.sendOk("�ϳ�#v1142216#�ɹ���");
                cm.dispose();
            } else {
				cm.sendOk("��δ���ţ������ڴ���");
                //cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*1250�� #v1142136#*3�� #v4011004#*50��  #v4021007#*50��   #v4011006#*50��   #v4021005#*50��  #v4021002#*50��   #v4251202#*5�� #v4001083#*5�� #v4001084#*15�� #v4001085#*15�� #v4000175#*15��  #v4001126#*5000��   #v4000463#*10��  #v4002000#*500��  #v4002001#*100�� #v4002002#*25�� #v4002003#*90�� #v4031559#*50�� 5000����");
                cm.dispose();
            }
			        } else if (selection == 7) {
            if (cm.haveItem(1142136, 3) && cm.haveItem(4000313, 1250) && cm.haveItem(4011004, 50) && cm.haveItem(4021007, 50) && cm.haveItem(4011006, 50) && cm.haveItem(4021005, 50) && cm.haveItem(4021002, 50) && cm.haveItem(4251202, 5) && cm.haveItem(4001083, 5) && cm.haveItem(4001084, 15) && cm.haveItem(4001085, 15) && cm.haveItem(4000175, 15) && cm.haveItem(4001126, 5000) && cm.haveItem(4000463, 100) && cm.haveItem(4002000, 500) && cm.haveItem(4002001, 75) && cm.haveItem(4002002, 25) && cm.haveItem(4002003, 90) && cm.haveItem(4031559, 50) && cm.getMeso() >=50000000) {
                cm.gainItem(1142136,-3);
				cm.gainItem(4000313,-1250);
				cm.gainItem(4011004,-50);
                cm.gainItem(4021007,-50);
				cm.gainItem(4011006,-50);
				cm.gainItem(4021005,-50);
				cm.gainItem(4021002,-50);
				cm.gainItem(4251202,-5);
				cm.gainItem(4001083,-5);
				cm.gainItem(4001084,-15);
				cm.gainItem(4001085,-15);
				cm.gainItem(4000175,-15);
				cm.gainItem(4001126,-500);
				cm.gainItem(4000463,-10);
				cm.gainItem(4002000,-500);
				cm.gainItem(4002001,-100);
				cm.gainItem(4002002,-25);
				cm.gainItem(4002003,-90);
				cm.gainItem(4031559,-50);
                cm.gainMeso(-50000000);
				cm.gainItem(1142189,30,30,30,30,2000,2000,30,30,0,0,30,30,20,15);
                cm.sendOk("�ϳ�#v1142189#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("��δ���ţ������ڴ���");
				//cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*1250�� #v1142136#*3�� #v4011004#*50�� #v4021007#*50�� #v4011006#*50�� #v4021005#*50�� #v4021002#*50�� #v4251202#*5��  #v4001083#*5��   #v4001084#*15��   #v4001085#*15��   #v4000175#*15��  #v4001126#*500��  #v4000463#*10��  #v4002000#*500��  #v4002001#*10��  #v4002002#*25�� #v4002003#*90�� #v4031559#*50�� 5000����");
                cm.dispose();
            }
			}
		}
    }


