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
			//text += "\t\t\t          #e#b�һ�����#k!#n\r\n"
			text += "#n#k    ��ǰ��ȯ��#r" + cm.getNX(1) + "��#k\t ��ǰ����ȯ��#r"+cm.getNX(2)+"��#k\r\n\r\n"//3
			text += "     �һ�֮ǰ�������������Ŀ�Ƿ���2�����ϵĿ�λ\r\n"
			text += "  #e#b��û2�����Ͽ�λ,��������ٶһ� ������ʧˡ������#k#n\r\n"
            text += "#L1##b�����һ�����ȯ#l         #L2##b��Ҷ�һ�����ȯ#l\r\n\r\n"//3
            text += "#L3##b1000��ȯ�һ�#v4000463#1��#l     #L4##b1��#v4000463#�һ�900��ȯ#l\r\n\r\n"//3
			text += "#L5##b10000��ȯ�һ�#v4000463#10��#l   #L6##b10��#v4000463#�һ�9500��ȯ#l\r\n\r\n"//3
			//text += "#L7##b30W��Ҷһ�#v4031456##l      #L8##b50��#v4031456#�һ�#v4000463##l\r\n\r\n"//3
			text += "#L10##b200��#v4000313#�һ�#v4000463##l       #L8##v4310143##b1��#�һ�#v4000463#1��\r\n\r\n"//3
			text += "#L11##b10000�������һ�120W����#l  #L12#1500�������һ�10W����#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) { 
        cm.openNpc(9000041, 2);
        } else if (selection == 2) {  
        cm.openNpc(9000041, 3);
        } else if (selection == 3) { 
		if (cm.getPlayer().getCSPoints(1) >= 1000) {
	    cm.gainNX(-1000);
		cm.gainItem(4000463,1);
		cm.sendOk("��ϲ��һ��ɹ���һ��#v4000463#");
		cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]�ɹ��һ������1����");
        cm.dispose();
		 } else {
        cm.sendOk("��ĵ�ȯ����1000�㡣");
        cm.dispose();
		}
        } else if (selection == 4) {
        if (cm.haveItem(4000463, 1)) {
		cm.gainItem(4000463,-1);
	    cm.gainNX(+900);
		cm.sendOk("��ϲ��ɹ��һ���900��");
		cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]�ɹ��һ�900��ȯ��");
        cm.dispose();
		 } else {
        cm.sendOk("���û��#v4000463#");
        cm.dispose();
				}
        } else if (selection == 5) {
        if (cm.getPlayer().getCSPoints(1) >= 10000) {
		cm.gainNX(-10000);
		cm.gainItem(4000463,10);
		cm.sendOk("��ϲ��ɹ��һ���#v4000463#");
		cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]�ɹ��һ������10����");
        cm.dispose();
		 } else {
        cm.sendOk("��ĵ�ȯ����10000��");
        cm.dispose();
				}
        } else if (selection == 6) {
        if (cm.haveItem(4000463, 10)) {
		cm.gainNX(+9500);
		cm.gainItem(4000463,-10);
		cm.sendOk("��ϲ��ɹ��һ���9500��ȯ");
		cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]�ɹ��һ�9500��ȯ��");
        cm.dispose();
		 } else {
        cm.sendOk("���#v4000463#����10��");
        cm.dispose();			
				}
		} else if (selection == 7) {
        if (cm.getMeso() >= 300000){//�ж϶��ٽ��
        cm.gainMeso(- 300000 );//�۳����ٽ��
	    cm.gainItem(4031456, 1);
		cm.sendOk("��ϲ��ɹ��һ���#v4031456#");
        cm.dispose();
		 } else {
        cm.sendOk("��û��3000000���");
        cm.dispose();
		        }
        } else if (selection == 8) {
        if (cm.haveItem(4310143, 1)) {
		cm.gainItem(4310143,-1);
	    cm.gainItem(4000463, 1);
		cm.sendOk("��ϲ��ɹ��һ���#v4000463#");
        cm.dispose();
		 } else {
        cm.sendOk("���û��1��#v4310143#");
        cm.dispose();
				}
		} else if (selection == 9) {
        if (cm.getBeans() >= 200) {//�ж϶���
        cm.gainBeans(-200);//�۳�����
	    cm.gainItem(4031456, 1);
		cm.sendOk("��ϲ��ɹ��һ���#v4031456#");
        cm.dispose();
		 } else {
        cm.sendOk("��û��200����");
        cm.dispose();
		        }
        } else if (selection == 10) {
        if (cm.haveItem(4000313, 200)) {//�ƽ��Ҷ
		cm.gainItem(4000313,-200);//�ƽ��Ҷ
		cm.gainItem(4000463,1);
		cm.sendOk("��ϲ��ɹ��һ���#v4000463#");
		cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]�ɹ��һ������1����(���Ҷ�һ�)");
        cm.dispose();
		 } else {
        cm.sendOk("��Ļƽ��Ҷ����200��");
        cm.dispose();
		        }
		} else if (selection == 12) { 
		if (cm.getPlayer().getBeans() >= 1500) {
	            cm.gainBeans(-1500);
				cm.gainExpR(100000);
				cm.sendOk("1500�������һ�100000����ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û��1000�������޷��һ�100000���飡");
				cm.dispose();
		        }			
		} else if (selection == 11) { 
		if (cm.getPlayer().getBeans() >= 10000) {
	            cm.gainBeans(-10000);
				cm.gainExpR(1200000);
				cm.sendOk("10000�������һ�1200000����ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��û��10000�������޷��һ�1200000���飡");
				cm.dispose();
			     }
		}
		}}
