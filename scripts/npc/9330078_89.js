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
            text += "#L1##rȷ������#l\r\n"//3
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
			}else */if(cm.haveItem(4000000,200) && cm.haveItem(4000016,200)&& cm.haveItem(4000010,200)&& cm.haveItem(4000037,200)&& cm.haveItem(4001126,500)&& cm.haveItem(4000040,1)&& cm.haveItem(4000176,1)&&  cm.getMeso()>=12000000 ){
				cm.gainMeso(-12000000);
				cm.gainItem(4000000,-200);
				cm.gainItem(4000016,-200);
				cm.gainItem(4000010,-200);
				cm.gainItem(4000037,-200);
				cm.gainItem(4001126,-500);
				cm.gainItem(4000040,-1);
				cm.gainItem(4000176,-1);
				cm.gainItem(1442133,1);
          			cm.sendOk("�����ɹ���");
cm.worldMessage(5, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ������˺�ɫ����һ��");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
		}
 	
    }
}
