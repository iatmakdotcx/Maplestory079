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
			text += "\t#e#r  �ɹ���ȡ��100Ԫ�۳似����� #k	#n\r\n\r\n"
            text += "#b\t#s4111006##d ������  (��ȡ������Ч����3)#l\r\n"//3
            text += "#L1##rȷ����ȡ������͵��Ұɣ�#l\r\n\r\n"//3
            cm.sendSimple(text);
      } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
		   if (cm.getInventory(1).isFull() || cm.getInventory(5).isFull() || cm.getInventory(4).isFull()) {
                cm.sendSimple("����װ���������������ֽ����ռ䲻�㡣");
		     cm.dispose();
			}else if (cm.getzb()>=99 && cm.getPlayer()){
				cm.getPlayer().changeKeybinding(4,1,4111006);
				cm.sendOk("������#s4111006#��ȡ�ɹ���#b�뻻��Ƶ������鿴������3��");
			//	cm.gainMeso(2000000);
			//	cm.gainNX(5000);
				
		cm.sendOk("��ȡ�ɹ���");
			cm.ȫ����ɫ����("[�ۼƳ�ֵ] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ���ȡ��100Ԫ�۳似�������")
			cm.getPlayer().setOneTimeLog('100Ԫ�ۼ��������');
            cm.dispose();
			}else{
            cm.sendOk("#r�����������");
            cm.dispose();
			}
		}
    }
}