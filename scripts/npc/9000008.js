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
			text += "\t\t\t\t#e#b  ������԰������������� #k	#n\r\n"
            text += "#L1##r����#v4005004#x1 200W��� ����#v4032312#x1#l\r\n\r\n"//3
            cm.sendSimple(text);
      }  else if (status == 1) {
                     if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
		    if(cm.haveItem(4005004,1)&&cm.getPlayer().getMeso() > 2000000){
				cm.gainItem(4005004,-1);//ף��
				cm.gainMeso(-2000000);//ף��
				cm.gainItem(4032312,1);
		    cm.sendOk("�����ɹ�");
            cm.dispose();
			}else{
            cm.sendOk("���ϲ���");
            cm.dispose();
			}
		}
    }
}