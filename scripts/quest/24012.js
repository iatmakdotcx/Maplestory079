/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;
function start(mode, type, selection) {
	end(mode,type,selection);
}

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
	qm.sendYesNo("�����Ѿ������˾������þ����������յģ����Ծ�����ʲô֮ǰ����ϸ���ǡ���ȷ�������Ϊ����?");
     } else if (status == 1) {
	qm.sendNext("�Ҹոճ���������壬ʹ�������ı��ۡ���������ø�ǿ��ʹ��ͳ�ƴ��ڣ�S�����������Ӧ��ͳ����Ϣ������㲻��ȷ��Ҫ���ʲô��ֻҪ���#b����#k.");
	if (qm.getJob() == 2310) {
	    qm.changeJob(2311);
	}
	qm.forceCompleteQuest();
    } else if (status == 2) {
	qm.sendNextPrev("��Ҳ��չ���Ŀ��ʱ϶����Ϊ�����豸�ȴ����ʹ����Щ������Ǻ���������뿹��������Ʒ����Я��.");
    } else if (status == 3) {
	qm.sendNextPrev("����...��ϣ����ȥ���������չʾ�˵����������.");
	qm.safeDispose();
    }
}