/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function end(mode, type, selection) {
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
	qm.sendNext("�Ҹոճ���������壬ʹ��������ս����ʦ����������ø�ǿ��ʹ��ͳ�ƴ��ڣ�S�����������Ӧ��ͳ����Ϣ�������arn'tһ��Ҫ���ʲô��ֻҪ���#b����#k.");	if (qm.getJob() == 3300) {
	if (qm.getJob() == 3310) {
	    qm.changeJob(3311);
	}
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendNextPrev("����...��ϣ����ȥ���������չʾ�˵����������.");
	qm.safeDispose();
    }
}