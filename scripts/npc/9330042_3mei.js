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

            cm.sendOk("�´λ���<ף����> ��Ԥ����2017�����ڿ�����");
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
            text +="    ����֮ǰ,���ȼ�� ���� ÿһ����Ŀ �Ƿ���������λ����? �ٽ��л���, ���򻻹����ֻ����Ķ�������,���Ŷ!������\r\n";
            text += "#L1##dף���� * 1��  #v2340000##k#l\r\n";
            //text += "#L2##dף���� * 10�� #v1112793##k#l\r\n";
            //text += "#L3##dף���� * 100�� #v1112677##k#l\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(4001126, 200) && cm.haveItem(4000313, 50) && cm.haveItem(4031456, 10) && cm.haveItem(4002000, 30) && cm.haveItem(4002001, 5) && cm.haveItem(4002002, 1)  && cm.getMeso() >=15000000) {
                cm.gainItem(4001126,-200);
				cm.gainItem(4000313,-50);
                cm.gainItem(4031456,-10);
				cm.gainItem(4002000,-30);
				cm.gainItem(4002001,-5);
				cm.gainItem(4002002,-1);
                cm.gainMeso(-15000000);
				cm.gainItem(2340000,1);
                cm.sendOk("����#v2340000#�ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("����  #v2340000# ʧ�ܣ�#v4001126#*200��  #v4000313#*50��  #v4031456#*10��  #v4002000#*30��  #v4002001#*5��  #v4002002#*1��  1500����");
                cm.dispose();
            }
        } else if (selection == 2) {
            if (cm.haveItem(1112915, 1) && cm.haveItem(4000313, 100) && cm.haveItem(4011004, 3) && cm.haveItem(4021007, 3) && cm.haveItem(4011006, 3) && cm.haveItem(4021005, 3) && cm.haveItem(4021002, 3) && cm.haveItem(4005000, 3) && cm.haveItem(4005001, 3) && cm.haveItem(4005002, 3) && cm.haveItem(4005003, 3) && cm.haveItem(4011004, 3) && cm.haveItem(4000029, 100) && cm.haveItem(4001126, 1000) && cm.haveItem(4002000, 30) && cm.haveItem(4002001, 10) && cm.haveItem(4031559, 15) && cm.getMeso() >=10000000) {
                cm.gainItem(1112915,-1);
				cm.gainItem(4000313,-100);
				cm.gainItem(4011004,-3);
                cm.gainItem(4021007,-3);
				cm.gainItem(4011006,-3);
				cm.gainItem(4021005,-3);
				cm.gainItem(4021002,-3);
				cm.gainItem(4005000,-3);
				cm.gainItem(4005001,-3);
				cm.gainItem(4005002,-3);
				cm.gainItem(4005003,-3);
				cm.gainItem(4005004,-3);
				cm.gainItem(4000029,-100);
				cm.gainItem(4001126,-1000);
				cm.gainItem(4002000,-30);
				cm.gainItem(4002001,-10);
				cm.gainItem(4031559,-15);
                cm.gainMeso(-5000000);
				cm.gainItem(2340000,10);
                cm.sendOk("����#v1112793# * 10 �� �ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("����#v1112677# * 10 �� ʧ�ܣ�#v4000313#*100��  #v1112915#*1��  #v4011004#*3��  #v4021007#*3��  #v4011006#*3�� #v4021005#*3�� #v4021002#*3�� #v4005000#*3�� #v4005001#*3�� #v4005002#*3�� #v4005003#*3�� #v4005004#*3�� #v4000029#*100�� #v4001126#*1000�� #v4002000#*30�� #v4002001#*10�� #v4031559#*15�� 1000����");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.haveItem(1112793, 1) && cm.haveItem(4000313, 150) && cm.haveItem(4011004, 5) && cm.haveItem(4021007, 5) && cm.haveItem(4011006, 5) && cm.haveItem(4021005, 5) && cm.haveItem(4021002, 5) && cm.haveItem(4251200, 1) && cm.haveItem(4000040, 20) && cm.haveItem(4000176, 20) && cm.haveItem(4000027, 100) && cm.haveItem(4000036, 100) && cm.haveItem(4001126, 1500) && cm.haveItem(4000463, 10) && cm.haveItem(4002000, 60) && cm.haveItem(4002001, 15) && cm.haveItem(4002002 , 1) && cm.haveItem(4031559, 20) && cm.getMeso() >=10000000) {
                cm.gainItem(1112793,-1);
				cm.gainItem(4000313,-150);
				cm.gainItem(4011004,-5);
                cm.gainItem(4021007,-5);
				cm.gainItem(4011006,-5);
				cm.gainItem(4021005,-5);
				cm.gainItem(4021002,-5);
				cm.gainItem(4251200,-1);
				cm.gainItem(4000040,-20);
				cm.gainItem(4000176,-20);
				cm.gainItem(4000027,-100);
				cm.gainItem(4000036,-100);
				cm.gainItem(4001126,-1500);
				cm.gainItem(4000463,-10);
				cm.gainItem(4002000,-60);
				cm.gainItem(4002001,-15);
				cm.gainItem(4002002,-1);
				cm.gainItem(4031559,-20);
                cm.gainMeso(-10000000);
				cm.gainItem(2340000,100);
                cm.sendOk("����#v1112677# * 100 �� �ɹ���");
                cm.dispose();
            } else {
                cm.sendOk("����#v1112677# * 100 �� ʧ�ܣ����ϲ��㣡#v4000313#*150�� #v1112793#*1�� #v4011004#*5�� #v4021007#*5�� #v4011006#*5�� #v4021005#*5�� #v4021002#*5�� #v4251200#*1�� #v4000040#*20   #v4000176#*20�� #v4000027#*100�� #v4000036#*100�� #v4001126#*1500��     #v4000463#*10�� #v4002000#*60�� #v4002001#*15�� #v4002002#*1�� #v4031559#*20��         1000����");
                cm.dispose();
            }
			}
		}
    }


