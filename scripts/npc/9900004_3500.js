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
		    if(cm.haveItem(4310088,28)){
				//cm.getPlayer().setOneTimeLog("100Ԫ�ۼ��������");
				cm.gainItem(2614022, 1);//������������
				cm.gainItem(4310088, -28);
		    cm.sendOk("����ɹ���");
			cm.ȫ����ɫ����("[�����̵�] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ������˳�������������")
            cm.dispose();
			}else{
            cm.sendOk("#r��������Ҳ���");
            cm.dispose();
			}
      }  else if (status == 1) {
                     
		}
    }
}