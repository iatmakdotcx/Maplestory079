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
			text += "\t\t\t\t#e#b  ��һð�յ�10000Ԫ������� #k	#n\r\n"
            text += "#b\t#v2022336# ��ѡ������ҵ����#k  #l\r\n"//3
			text += "#b\t#v1912338# ȫ��+#r100  #l\r\n"//3
            text += "#b\t#v1902338# ȫ��+#r100  #l\r\n"//3
			text += "#b\t#v1113211# ȫ��+#r150  #l\r\n"//3
			text += "#b\t#v1032205# ȫ��+#r150  #l\r\n"//3
			text += "#b\t#v2022466# ����������ѡ x4#l\r\n"//3
			text += "#b\t#v2022465#[�سɾ���ѡ] x150#l\r\n"//3
			text += "#b\t#v5570000# [��������] x50 #l\r\n"//3
            text += "#b\t#v4000463# ����� x1500#l\r\n"//3
          //  text += "#b\t\�������ͽ��#r 200W  #l\r\n\r\n"//3
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
		    if(cm.getzb()>=10000 && cm.getPlayer().getOneTimeLog("10000Ԫ�ۼ��������") == 0){
				//cm.getPlayer().setOneTimeLog("20000Ԫ�ۼ��������");
				cm.������װ��(1032205, 0, 0, 150, 150, 150, 150, 0, 0, 150, 150, 150, 150, 150, 150, 150, 150);//V2ѫ��
				cm.������װ��(1912338, 0, 0, 100, 100, 100, 100, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100);//V2ѫ��
				cm.������װ��(1902338, 0, 0, 100, 100, 100, 100, 0, 0, 100, 100, 100, 100, 100, 100, 100, 100);//V2ѫ��
				cm.������װ��(1113211, 0, 0, 150, 150, 150, 150, 0, 0, 150, 150, 150, 150, 150, 150, 150, 150);//V2ѫ��
				cm.gainItem(2022336, 1);//ף��
			//	cm.gainItem(1132215, 1);//ף��
				//cm.gainItem(1113211, 1);//ף��
				cm.gainItem(4000463,1500);
				cm.gainItem(2022466,4);//�����׹
				cm.gainItem(2022465,150);//����
				cm.gainItem(5570000,50);//����
				cm.sendOk("��ȡ�ɹ���");
			cm.ȫ����ɫ����("[��ֵ] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ���ȡ��10000Ԫ�۳������")
			cm.getPlayer().setOneTimeLog('20000Ԫ�ۼ��������');
            cm.dispose();
			}else{
            cm.sendOk("#rֻ����ȡһ�Σ����������������");
            cm.dispose();
			}
		}
    }
}
   