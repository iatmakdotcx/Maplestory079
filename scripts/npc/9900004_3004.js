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
			text += "\t\t\t\t#e#b  " + cm.��������() + "4000Ԫ������� #k	#n\r\n"
            text += "#b\t#v1022048# ȫ��˫�� +10  #l\r\n"//3
			text += "#b\t#v2340000#[ף������] x40#l\r\n"//3
			text += "#b\t#v2049100# [�������] x40#l\r\n"//3
            text += "#L1##rȷ����ȡ������͵��Ұɣ�#l\r\n\r\n"//3
            cm.sendSimple(text);
      } else if (selection == 1) {
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
			//1
			//2
			//3
			//4
			//5
		    if(cm.��ȡ�ۼ�����()>= 4000 && cm.getPlayer().getOneTimeLoga("4000Ԫ�ۼ��������") == 0){
				cm.������װ��(1022048, 0, 0, 10, 10, 10, 10, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0);//V2ѫ��
				cm.gainItem(2340000, 40);//ף��
				cm.gainItem(2049100,40);
				
		cm.sendOk("��ȡ�ɹ���");
			cm.ȫ����ɫ����("[��ֵ] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ���ȡ��4000Ԫ�۳������")
			cm.getPlayer().setOneTimeLoga('4000Ԫ�ۼ��������');
            cm.dispose();
			}else{
            cm.sendOk("#rֻ����ȡһ�Σ����������������");
            cm.dispose();
			}
		}
    }
}