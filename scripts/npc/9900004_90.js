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
			text += "\t\t\t\t#e#b  ��һð�յ�100Ԫ������� #k	#n\r\n"
            text += "#b\t#v1002186# ȫ��+#r20#k  #l\r\n"//3
			text += "#b\t#v1142796# ȫ��+#r20#k HP+#r500#k #l\r\n"//3
           // text += "#b\t#v2022468#[ϴѪ����] x10#l\r\n"//3
			text += "#b\t#v2340000#[ף������] x5#l\r\n"//3
		//	text += "#b\t#v4310014# ѩ����x500#l\r\n"//3
			text += "#b\t#v2049100# [�������] x5#l\r\n"//3
			text += "#b\t#v1122017# [�����׹] x1 #l\r\n"//3
            text += "#b\t#v4000463# ����� x10#l\r\n"//3
          //  text += "#b\t\�������ͽ��#r 200W  #l\r\n\r\n"//3
            text += "#L1##rȷ����ȡ������͵��Ұɣ�#l\r\n\r\n"//3
            cm.sendSimple(text);
      } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
		    if(cm.getmoneyb()>100 && cm.getPlayer().getOneTimeLog("100Ԫ�ۼ��������") == 0){
				cm.getPlayer().setOneTimeLog("100Ԫ�ۼ��������");
				cm.������װ��(1142796, 0, 0, 20, 20, 20, 20, 500, 500, 20, 20, 20, 20, 20, 20, 20, 20);//V2ѫ��
				cm.������װ��(1002186, 0, 0, 20, 20, 20, 20, 0, 0, 20, 20, 20, 20, 20, 20, 20, 20);//V2ѫ��
				cm.gainItem(2340000, 5);//ף��
				cm.gainItem(4000463,10);
				cm.gainItem(1122017,1);//�����׹
				cm.gainItem(2049100,5);//����
			//	cm.gainMeso(2000000);
			//	cm.gainNX(5000);
				
		cm.sendOk("��ȡ�ɹ���");
			cm.ȫ����ɫ����("[��ֵ] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ���ȡ��100Ԫ�۳������")
			cm.getPlayer().setOneTimeLog('chongzhi21');
            cm.dispose();
			}else{
            cm.sendOk("#rֻ����ȡһ�Σ����������������");
            cm.dispose();
			}
		}
    }
}