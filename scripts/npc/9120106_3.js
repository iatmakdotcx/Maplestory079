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
            text += "#L1##d��ά +4  HP/MP +10  ˫�� +20 ����/�ر� +2 #v1032080##k#l\r\n";
            text += "#L2##d��ά +8  HP/MP +20  ˫�� +30 ����/�ر� +3 #v1032081##k#l\r\n";
            text += "#L3##d��ά +12 HP/MP +40  ˫�� +50 ����/�ر� +5 #v1032082##k#l\r\n";
            text += "#L4##d��ά +16 HP/MP +50  ˫�� +50 ����/�ر� +5 #v1032083##k#l\r\n";
            //text += "#L5##d��ά +10 HP/MP + 80 ˫�� +60 ���� +8 #v1032084##k#l\r\n";
            //text += "#L6##d��ά +15 HP/MP+ 150 ˫�� +90 ���� +12#v1032142##k#l\r\n";
			//text += "#L7##d��ά/��/ħ +25 HP/MP+ 150 ˫��+150 ���� +25#v1032191##k#l\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(4000313, 50) && cm.haveItem(4031560, 5) && cm.haveItem(4031561, 5) && cm.haveItem(4002000, 10) && cm.haveItem(4002001, 10) && cm.haveItem(4002002, 5) && cm.haveItem(4031456, 20) && cm.haveItem(2210006, 1) && cm.getMeso() >=100000) {
                cm.gainItem(4000313,-50);//���Ҷ
				//cm.gainItem(4031560,-5);//���³
                //cm.gainItem(4031561,-5);//������Ʊ
				cm.gainItem(4002000,-20);//����ţ
				cm.gainItem(4002001,-20);//����ţ
				cm.gainItem(4002002,-10);//ľ��
				cm.gainItem(4031456,-20);//��Ҷ��
				cm.gainItem(2210006,-1);//��ɫ����
                cm.gainMeso(-100000);
				cm.gainItem(1032080,4,4,4,4,10,10,0,0,20,20,2,2,0,0);
                cm.sendOk("�ϳ�#v1032080#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*50��  #v4031560#*5��  #v4031561#*5��  #v4002000#*10��  #v4002001#*10��  #v4002002#*5�� #v4031456#*20�� #v2210006#*1�� 20����");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.haveItem(4000313, 100) && cm.haveItem(4031560, 10) && cm.haveItem(1032080, 1) && cm.haveItem(4031561, 10) && cm.haveItem(4002000, 20) && cm.haveItem(4002001, 20) && cm.haveItem(4002002, 10) && cm.haveItem(4031456, 40) && cm.haveItem(4001000, 1) && cm.getMeso() >=200000) {
                cm.gainItem(4000313,-100);//���Ҷ
				cm.gainItem(1032080,-1);//1daibusuzhike
				cm.gainItem(4031560,-10);//���³
                cm.gainItem(4031561,-10);//������Ʊ
				cm.gainItem(4002000,-20);//����ţ
				cm.gainItem(4002001,-20);//����ţ
				cm.gainItem(4002002,-10);//ľ��
				cm.gainItem(4031456,-40);//��Ҷ��
				cm.gainItem(4001000,-1);//����Ь
                cm.gainMeso(-200000);
				cm.gainItem(1032081,2,2,2,2,20,20,2,2,30,30,3,3,0,0);
                cm.sendOk("�ϳ�#v1032081#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*100�� #v1032080#*1��  #v4031560#*10��  #v4031561#*10��  #v4002000#*20��  #v4002001#*20�� #v4002002#*10�� #v4031456#*40�� #v4001000#*1�� 20����");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.haveItem(4000313, 200) && cm.haveItem(1032081, 1) && cm.haveItem(4031560, 15) && cm.haveItem(4031561, 15) && cm.haveItem(4002000, 25) && cm.haveItem(4002001, 25) && cm.haveItem(4002002, 15) && cm.haveItem(4031456, 50) && cm.haveItem(4000384, 1) && cm.getMeso() >=400000) {
                cm.gainItem(4000313,-200);//���Ҷ
				cm.gainItem(1032081,-1);//2daibusuzhike
				cm.gainItem(4031560,-15);//���³
                cm.gainItem(4031561,-15);//������Ʊ
				cm.gainItem(4002000,-25);//����ţ
				cm.gainItem(4002001,-25);//����ţ
				cm.gainItem(4002002,-15);//ľ��
				cm.gainItem(4031456,-50);//��Ҷ��
				cm.gainItem(4000384,-1);//heise jinghua
                cm.gainMeso(-400000);
				cm.gainItem(1032082,3,3,3,3,40,40,3,3,50,50,5,5,0,0);
                cm.sendOk("�ϳ�#v1032082#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*200��  #v1032081#*1��  #v4031560#*15��  #v4031561#*15��  #v4002000#*25��  #v4002001#*25�� #v4002002#*15�� #v4031456#*50��  #v4000384#*1�� 40����");
                cm.dispose();
            }
        } else if (selection == 4) {
            if (cm.haveItem(4000313, 300) && cm.haveItem(1032082, 1) && cm.haveItem(4031560, 20) && cm.haveItem(4031561, 20) && cm.haveItem(4002000, 30) && cm.haveItem(4002001, 30) && cm.haveItem(4002002, 20) && cm.haveItem(4031456, 60) && cm.haveItem(4031942, 1) && cm.getMeso() >=800000) {
                cm.gainItem(4000313,-300);//���Ҷ
				cm.gainItem(1032082,-1);//busuzhike
				cm.gainItem(4031560,-20);//���³
                cm.gainItem(4031561,-20);//������Ʊ
				cm.gainItem(4002000,-30);//����ţ
				cm.gainItem(4002001,-30);//����ţ
				cm.gainItem(4002002,-20);//ľ��
				cm.gainItem(4031456,-60);//��Ҷ��
				cm.gainItem(4031942,-1);//����
                cm.gainMeso(-800000);
				cm.gainItem(1032083,4,4,4,4,50,50,4,4,50,50,5,5,0,0);
                cm.sendOk("�ϳ�#v1032083#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*300��  #v1032082#*1��  #v4031560#*20��  #v4031561#*20��  #v4002000#*30��  #v4002001#*30�� #v4002002#*20�� #v4031456#*60��  #v4031942#*1�� 80����");
                cm.dispose();
            }
        } else if (selection == 5) {
            if (cm.haveItem(4000313, 400) && cm.haveItem(1032083, 1) && cm.haveItem(4031560, 30) && cm.haveItem(4031561, 30) && cm.haveItem(4002000, 40) && cm.haveItem(4002001, 40) && cm.haveItem(4002002, 30) && cm.haveItem(4031456, 80) && cm.haveItem(4000244, 10) && cm.getMeso() >=2000000) {
                cm.gainItem(4000313,-400);//���Ҷ
				cm.gainItem(1032083,-1);//busuzhike
				cm.gainItem(4031560,-30);//���³
                cm.gainItem(4031561,-30);//������Ʊ
				cm.gainItem(4002000,-40);//����ţ
				cm.gainItem(4002001,-40);//����ţ
				cm.gainItem(4002002,-30);//ľ��
				cm.gainItem(4031456,-80);//��Ҷ��
				cm.gainItem(4000244,-10);//linghun
                cm.gainMeso(-2000000);
				cm.gainItem(1032084,10,10,10,10,80,80,10,10,60,60,8,8,0,0);
                cm.sendOk("�ϳ�#v1032084#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*400��  #v1032083#*1��  #v4031560#*30��  #v4031561#*30��  #v4002000#*40��  #v4002001#*40�� #v4002002#*30�� #v4031456#*80��  #v4000244#*10�� 200����");
                cm.dispose();
            }
        } else if (selection == 6) {
           if (cm.haveItem(4000313, 400) && cm.haveItem(1032084, 1) && cm.haveItem(4031560, 30) && cm.haveItem(4031561, 30) && cm.haveItem(4002000, 40) && cm.haveItem(4002001, 40) && cm.haveItem(4002002, 30) && cm.haveItem(4031456, 80) && cm.haveItem(4000244, 10) && cm.haveItem(4310143, 8) && cm.getMeso() >=2000000) {
                cm.gainItem(4000313,-400);//���Ҷ
				cm.gainItem(1032084,-1);//busuzhike
				cm.gainItem(4031560,-30);//���³
                cm.gainItem(4031561,-30);//������Ʊ
				cm.gainItem(4002000,-40);//����ţ
				cm.gainItem(4002001,-40);//����ţ
				cm.gainItem(4002002,-30);//ľ��
				cm.gainItem(4031456,-80);//��Ҷ��
				cm.gainItem(4000245,-10);//linghun
				cm.gainItem(4310143,-8);
                cm.gainMeso(-2000000);
				cm.gainItem(1032142,15,15,15,15,150,150,15,15,90,90,12,12,0,0);
                cm.sendOk("�ϳ�#v1032142#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*400��  #v1032084#*1��  #v4031560#*30��  #v4031561#*30��  #v4002000#*40��  #v4002001#*40�� #v4002002#*30�� #v4031456#*80��  #v4000245#*10�� #v4310143#*8�� 200����");
                cm.dispose();
            }
		} else if (selection == 7) {
           if (cm.haveItem(4000313, 800) && cm.haveItem(1032142, 1) && cm.haveItem(4031560, 60) && cm.haveItem(4031561, 60) && cm.haveItem(4002000, 80) && cm.haveItem(4002001, 80) && cm.haveItem(4002002, 60) && cm.haveItem(4031456, 160) && cm.haveItem(4021010, 5) && cm.haveItem(4000463, 10) && cm.getMeso() >=20000000) {
                cm.gainItem(4000313,-800);//���Ҷ
				cm.gainItem(1032142,-1);//busuzhike
				cm.gainItem(4031560,-60);//���³
                cm.gainItem(4031561,-60);//������Ʊ
				cm.gainItem(4002000,-80);//����ţ
				cm.gainItem(4002001,-80);//����ţ
				cm.gainItem(4002002,-60);//ľ��
				cm.gainItem(4031456,-160);//��Ҷ��
				cm.gainItem(4021010,-5);//linghun
				cm.gainItem(4000463,-10);
                cm.gainMeso(-20000000);
				cm.gainItem(1032191,25,25,25,25,150,150,25,25,150,150,25,25,0,0);
                cm.sendOk("�ϳ�#v1032191#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4000313#*800��  #v1032142#*1��  #v4031560#*60��  #v4031561#*60��  #v4002000#*80�� #v4002001#*80�� #v4002002#*60�� #v4031456#*160��  #v4021010#*5�� #v4000463#*10�� 2000����");
                cm.dispose();
            }
			}
		}
    }


