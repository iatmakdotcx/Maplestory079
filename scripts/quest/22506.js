/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 1) {
	    qm.sendOk("#b(�㲻�ҽӽ��������Ժ��ţ��.)");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("#b(���ʵ���ţ����һЩţ��.");
    } else if (status == 1) {
	qm.askAcceptDecline("����...");
    } else if (status == 2) {
	qm.sendOk("#b(��ţ����һЩţ�̡�ȥιţ���ض�.)#k");
	qm.gainItem(4032454, 1);
	qm.forceStartQuest();
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	qm.sendOk("��̫���ˣ����Ѿ�û������......ʦ������̫���ˣ��ҿ��ܿ�ή������Ϊһ�����������档 ����ʲô�� ˮ����Ҫ�����ҵĶ������ˮ���������ô˵����...\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#fUI/UIWindow.img/QuestIcon/10/0# 1 sp\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0#1420 exp");
    } else if (status == 1) {
	qm.forceCompleteQuest();
	qm.gainExp(1420);
	qm.getPlayer().gainSP(1, 0);
	qm.gainItem(4032454, -1);
	qm.sendNext("(��ཹ��һ��������һ������)");
    } else if (status == 2) {
	qm.sendNextPrev("�ۣ�������ô�ã�ʲô����ˮ�� ţ�̣���ʤ���Ҿ���������ôǿ!");
    } else if (status == 3) {
	qm.sendPrev("�٣����������������ø�ǿ��˶ʿ�����HP��MP�ȣ����ҵ�һ�μ�����ߵö�.");
	qm.dispose();
    }
}