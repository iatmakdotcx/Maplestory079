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
            for (i = 0; i < 60; i++) {
                text += "";
            }
            text +="��ӵ�н�ָ��?������������ϳ�Ŷ!\r\n";
            text += "#L1##d�µ����ˮ��#v4251200##k#l\r\n";
            text += "#L2##d�е����ˮ��#v4251201##k#l\r\n";
            text += "#L3##d�ߵ����ˮ��#v4251202##k#l\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
            if (cm.haveItem(4005000, 5) && cm.haveItem(4005001, 5) && cm.haveItem(4005002, 5) && cm.haveItem(4005003, 5) && cm.haveItem(4005004, 5) && cm.getMeso() >=1000000) {
                cm.gainItem(4005000,-5);
                cm.gainItem(4005001,-5);
				cm.gainItem(4005002,-5);
				cm.gainItem(4005003,-5);
				cm.gainItem(4005004,-5);
                cm.gainMeso(-1000000);
				cm.gainItem(4251200,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                cm.sendOk("�ϳ�#v4251200#�ɹ���");
                cm.dispsoe();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4005000#*5�� #v4005001#*5�� #v4005002#*5�� #v4005003#*5�� #v4005004#*5�� 100����");
                cm.dispsoe();
            }
			} else if (selection == 2) {
            if (cm.haveItem(4251200, 5) && cm.getMeso() >=1000000) {
                cm.gainItem(4251200,-5);
                cm.gainMeso(-1000000);
				cm.gainItem(4251201,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                cm.sendOk("�ϳ�#v4251201#�ɹ���");
                cm.dispsoe();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4251200# * 5�� 100����");
                cm.dispsoe();
			}
			} else if (selection == 3) {
            if (cm.haveItem(4251201, 3) && cm.getMeso() >=1000000) {
                cm.gainItem(4251201,-3);
                cm.gainMeso(-1000000);
				cm.gainItem(4251202,0,0,0,0,0,0,0,0,0,0,0,0,0,0);
                cm.sendOk("�ϳ�#v4251202#�ɹ���");
                cm.dispsoe();
            } else {
                cm.sendOk("�ϳ�ʧ�ܣ����ϲ��㣡#v4251201# * 3�� 100����");
                cm.dispsoe()
			}
			}
		}
    }


