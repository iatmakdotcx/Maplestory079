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
	    qm.sendNext("ʲô������Ϊ�ǵ�Ӱ�г�����С���κ������ˡ�����˼.");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("��ʲô #p1032112# ˵?", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("#b(������� #p1032112# �۲쵽��.)#k", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("��ľż�ĺ��������ƺ��ܿ��ɡ������ţ���������ɫĢ��ͻȻ�ݱ�ɱ�����ͻ��ԭ��.");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.sendNextS("��ô����С����Ű�Ϸ�ɭ�֡�˭֪������Ҫ�೤ʱ�����ָ�ɭ��......�����Ͷ���Ҵ󲿷ֵ�ʱ��������̯��.", 2);
    } else if (status == 4) {
	qm.sendPrevS("#b(�����ҳ�������Ģ���ı仯����Ӧ�ñ���#p1002104#���ṩ�����ռ�����Ϣ.)#k", 2);
    } else if (status == 5) {
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}