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
            text += "#e#d����#v1012289#x1{50ȫ����4000HP/MP}��Ҫ#v1012083#x1��   #v4001126#x3000���Ѽ��õ����ҾͿ���Ϊ��������.#l\r\n\r\n"//3
            text += "#L1##r������50ȫ����Ѫװ��#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4001126,3000)&& cm.haveItem(1012083,1)){
				cm.gainItem(4001126, -3000);
				cm.gainItem(1012083, -1);
				cm.gainItem(1012289,50,50,50,50,4000,4000,10,10,40,40,40,40,40,40);
          			cm.sendOk("��ϲ�������ɹ���");
           		        cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣬��ȷ�ϱ�����");
            cm.dispose();
			}
	
		}
    }
}


