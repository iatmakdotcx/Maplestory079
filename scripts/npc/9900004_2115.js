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
			text += "\t#e#r  5000�ۼƳ�ֵ���� #k	#n\r\n\r\n"
            text += "#b\t#s4111002##d Ӱ����#s4121007# ǿ���� 15�� �����������       #rע����ȡ������ʹ�������еļ���ȫ��  ������Ϊ��ͨ���� (��ȡ������Ч����7)#l\r\n"//3
            text += "#L1##rȷ����ȡ������͵��Ұɣ�#l\r\n\r\n"//3
            cm.sendSimple(text);
      } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
		   if (cm.getzb()>=4999 && cm.getPlayer()){
				cm.getPlayer().changeKeybinding(9,1,4111002);
				cm.getPlayer().changeKeybinding(10,1,4121007);
				cm.teachSkill(4121007,31,31);
				cm.sendOk("Ӱ����#s4111002#�����������#s4121007#��ȡ�ɹ���#b�뻻��Ƶ������鿴������8��9��");
			//	cm.gainMeso(2000000);
			//	cm.gainNX(5000);
				
		cm.sendOk("��ȡ�ɹ���");
			cm.ȫ����ɫ����("[�ۼƳ�ֵ] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ���ȡ��5000Ԫ�۳似�������")
			cm.getPlayer().setOneTimeLog('chongzhi22');
            cm.dispose();
			}else{
            cm.sendOk("#r�����������");
            cm.dispose();
			}
		}
    }
}