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
			text += "\t\t\t\t#e#b  ����ϵͳ���� #k	#n\r\n"
            text += "#L1##rȷ�����׾͵��Ұɣ�#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("�ֽ������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4000464,500) && cm.haveItem(4251202,500) && cm.haveItem(1004811,1)){
				cm.gainItem(4170006, -500);
				cm.gainItem(4170006, -500);
				cm.gainItem(4170006, -500);
				cm.gainItem(1004811, -1);
				cm.setmoneyb(+0);
		        cm.������װ��(1004811,0, 0, 150, 150, 150, 150, 0, 0, 100, 100, 500, 500, 0, 0, 0, 0, 0);// ���ط���
          //      cm.sendOk("�һ��ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�ɹ����� �����ط��ߡ� ");
            cm.dispose();
			}else{
            cm.sendOk("�޷��һ�����鿴�����Ƿ�����������ϲ���");
            cm.dispose();
			}
		}
    }
}