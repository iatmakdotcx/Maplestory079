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
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNextS("�ǲ�������������һ��#m101000000# ֱ��������ǰ�� �������ҵ����ˣ���֪��֪�����˶೤ʱ�䣬�������ҵ��㣿", 8);
    } else if (status == 1) {
	qm.sendNextPrevS("����˭?", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("�ң��������֪���ģ�ֹͣ�ҵ�ɽ�����������������㷢�����롣��ֻҪ�����ֱ�ӷ��͵��ҵ�ɽ�����ڴ��������.");
    } else if (status == 3) {
	qm.forceStartQuest(21719); //��ʼ����
	qm.warp(910510200, 0);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.dispose();
}

