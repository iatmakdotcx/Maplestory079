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
			text += "\t\t\t\t#e#b  ��һð�յ�300Ԫ������� #k	#n\r\n"
            text += "#b\t#v1142742# ȫ��+#r15#k HP+#r1000#k #l#b\t#v2022468#[ϴѪ����] x10#l\r\n"//3
			text += "#b\t#v4310014# ѩ����װ������x500#l#b\t#v1122017#�������� #l\r\n"//3
			text += "#b\t#v1912303# ȫ��#r5  #b����x1 #l#b\t#v2340000#[ף������] x20#l\r\n"//3
			text += "#b\t#v2049100#[�������] x20#l#b\tʢ���ȯ #r 15000 ��ȯ#l\r\n"//3
            text += "#b\t\�������ͽ��#r 800W  #l#b\t\��ȡ#s4111006#������(����6)��\r\n\r\n"
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
			}else if (cm.getmoneyb()>=300 && cm.getPlayer().getOneTimeLog('chongzhi21')  ) { 
			    cm.setmoneyb(-300);
				cm.getPlayer().dropMessage(5,"��ֵ���� - 300");
				cm.gainItem(4310014, 1000);//ѩ����
				cm.������װ��(1142742, 0, 0, 15, 15, 15, 15, 1000, 1000, 15, 15, 15, 15, 15, 15, 15, 15);//V2ѫ��
				cm.������װ��(1912303, 0, 0, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5);//����
				cm.������װ��(1902303, 0, 0, 5, 5, 5, 5, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5);//����
				cm.gainItem(2340000, 20);//ף��
				cm.gainItem(2049100, 20);//����
				cm.gainItem(2022468,10);//ϴѪ����
				cm.gainItem(1122017,1);//�����׹
				cm.teachSkill(4111006,30);
                cm.getPlayer().changeKeybinding(7,1,4111006);
			    cm.sendOk("������#s4111006#��ȡ�ɹ���#b�뻻��Ƶ������鿴������6��");
				
				cm.gainMeso(8000000);
				cm.gainNX(15000);
				
		cm.sendOk("��ȡ�ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��300���������");
			cm.getPlayer().setOneTimeLog('chongzhi21');
            cm.dispose();
			}else{
            cm.sendOk("�޷���������ϵGM");
            cm.dispose();
			}
		}
    }
}