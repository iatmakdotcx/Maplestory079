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
			text += "\t#e#r  10000�ۼƳ�ֵ���� #k	#n\r\n\r\n"
            text += "#b\t#s9001006##d ����Χ ��Ч�� (��ȡ������Ч����8)#l\r\n"//3
            text += "#L1##rȷ����ȡ������͵��Ұɣ�#l\r\n\r\n"//3
            cm.sendSimple(text);
      } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
		   if (cm.getzb()>=9999 && cm.getPlayer()){
			//	cm.getPlayer().setOneTimeLog("10000Ԫ�ۼƼ������");
				cm.getPlayer().changeKeybinding(9,1,9001006);
				//cm.getPlayer().changeKeybinding(10,1,9001006);
			//	cm.teachSkill(9001006,1,1);
				cm.sendOk("������ǹ#s9001006#��ȡ�ɹ���#b�뻻��Ƶ������鿴������8��");
			//	cm.gainMeso(2000000);
			//	cm.gainNX(5000);
				
	     	cm.sendOk("��ȡ�ɹ���");
			cm.ȫ����ɫ����("[�ۼƳ�ֵ] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ���ȡ��10000Ԫ�۳似�������")
			cm.getPlayer().setOneTimeLog('10000Ԫ�ۼƼ������');
            cm.dispose();
			}else{
            cm.sendOk("#r�����������");
            cm.dispose();
			}
		}
    }
}