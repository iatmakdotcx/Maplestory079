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
	if (status == 2) {
	    qm.sendNext("����ô�ܶ�����������ӡ���ֻ��һ�����ӡ����Ǵ����!");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("���������ⲻ��������Ҫ�ġ�����Ҫ����Ķ�����Ӫ������!");
    } else if (status == 1) {
	qm.sendNextPrevS("#b��......�����㲻��ʳ�ݶ���������һ��ʳ�⶯����������Ͼ��������һЩ��������?#k", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("ʲô��...���⣿����û����˵�����������������ζ���ҽ��ܣ�ֻ���ҵĶ����óԡ�ʲô����ֲ��!");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.sendOkS("#b(���Ÿ���һЩ���⡣�������ũ�����Լ�ͷ��ʮӦ���г���...)#k", 2);
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
	qm.sendOk("�Ǻǣ����������ҳԣ���ˣ���������̸�۵����⣿ ���ҳ���.");
    } else if (status == 1) {
	qm.gainExp(1850);
	qm.gainItem(4032453, -10);
	qm.sendNext("(��񣬸��һ������...)");
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendPrev("��......�ⲻ�ó�̫����ˣ����Ҳ���Ϊ�������������ⲻ�ʺ���...");
	qm.dispose();
    }
}