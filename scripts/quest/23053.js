/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("����Ϊ��һ����Ҫ�ľ���.");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    if (status == 0) {
	qm.sendYesNo("�����Ѿ������˾������þ����������յģ����Ծ�����ʲô֮ǰ����ϸ����.");
    } else if (status == 1) {
	qm.sendNext("�Ҹոճ���������壬ʹ֮���ơ���������ø�ǿ��ʹ��ͳ�ƴ��ڣ�S�����������Ӧ��ͳ����Ϣ������㲻��ȷ��Ҫ���ʲô��ֻҪ��� #b����#k.");
	if (qm.getJob() == 3311) {
	    qm.changeJob(3312);
	    qm.forceCompleteQuest();
	}
    } else if (status == 2) {
	qm.sendNextPrev("Now... I want you to go out there and show the world how the Resistance operate.");
	qm.safeDispose();
    }
}

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	qm.sendNextPrev("����...��ϣ����ȥ���������չʾ�˵����������.");
	    qm.safeDispose();
	    return;
	}
	status--;
    } else {
	status++;
    }
    if (status == 0) {
	qm.sendYesNo("�����Ѿ������˾������þ����������յģ����Ծ�����ʲô֮ǰ����ϸ����.");
    } else if (status == 1) {
	qm.sendNext("�Ҹոճ���������壬ʹ֮���ơ���������ø�ǿ��ʹ��ͳ�ƴ��ڣ�S�����������Ӧ��ͳ����Ϣ������㲻��ȷ��Ҫ���ʲô��ֻҪ��� #b����#k.");
	if (qm.getJob() == 3311) {
	    qm.changeJob(3312);
	    qm.forceCompleteQuest();
	}
    } else if (status == 2) {
	qm.sendNextPrev("����...��ϣ����ȥ���������չʾ�˵����������.");
	qm.safeDispose();
    }
}