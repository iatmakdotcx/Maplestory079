/* Author: Xterminator
	NPC Name: 		Pison
	Map(s): 		Victoria Road : Lith Harbor (104000000)
	Description: 		Florina Beach Tour Guide
*/
var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status <= 1) {
	    cm.sendNext("��Ҫȥ�������Ұ�!");
	    cm.dispose();
	    return;

	}
	status--;
    }
    if (status == 0) {
    cm.sendSimple("�����ѡ�������ս,�ط�ս�������뿪..\r\n\r\n#L1##b ����ȥ�ط�������ս.#l\r\n#L0# �����뿪��.#l\r\n");
    } else if (status == 1) {
	if (selection == 0) {
	    cm.sendYesNo("�õģ��������������뿪���");
	} else if (selection == 1) {
	    status = 2;
	    cm.sendNext("��ע�������ط���������������Ͳ�����ʹ���ط��ˣ�");
            
	} else if (selection == 2) {
	    status = 4;
	    cm.sendNext("��.");
	}
    } else if (status == 2) {
	if (cm.getMeso() < 1) {
	    cm.sendNext("��û���㹻�Ľ��!");
	    cm.dispose();
	} else {

            cm.removeAll(2432262);

	    cm.warp(350060300, 0);


	    cm.dispose();
	}
    } else if (status == 3) {
    if (cm.getPlayer().getClient().getChannel() != 4 ) {
        cm.sendOk("˹�ڽ�����4Ƶ���ٻ�,��ǰƵ�������ط���ս,�����µ�½ѡ��4Ƶ����Ϸ.");
        cm.dispose();
	 } else if (cm.haveItem(2432262)) {

	    cm.warp(350060600, 0);
            cm.gainItem(2432262, -1);
	    cm.dispose();
	} else {
	    cm.sendOk("�㱾����ս�ط������Ѿ����꣡ ����ʹ���ط���....");
	    cm.dispose();
	}
    } else if (status == 4) {
	cm.sendNext("����һ���ѵõ���Ŀ.");
    } else if (status == 5) {
	cm.sendNextPrev("�һ���û�������Ҿ;��ÿ���û������");
    } else if (status == 6) {
	cm.dispose();
    }
}
