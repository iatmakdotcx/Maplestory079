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
	if (status == 0) {
	    qm.sendNext("�ţ�����Զ����֪�������������ԡ��������Ǵ����Գ�Ϊ�������Ų������㡣�����ܳԸɲ�");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("�᲻����������#b�ɲ���ָ����#k,��ţ�� �кܶ��#b�ɲݶ�#k ���������Ծ���ι������.");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.evanTutorial("UI/tutorial/evan/12/0", 1);
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
	qm.sendNext("Ŷ����̫���ˣ�����û���ҵ��ö������ҳԣ����ˣ���...�⿴������......�ݡ�����Ŀ��Գ��𣿺����ˣ���������.");
    } else if (status == 1) {
	qm.sendOk("Okay, here goes!");
    } else if (status == 2) {
	qm.gainExp(800);
	qm.gainItem(4032452, -3);
	qm.sendOk("�ޣ� ����ʲô�������ֿ���ǿ������ȷ�����ǿ���ʳ�ã�ʦ��������ˣ��Ҳ��ܳ���������ұ�Ķ���!");
	qm.forceCompleteQuest();
	qm.dispose();
    }
}