/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 0 && status == 1) {
	qm.sendNext("�Ҳ��㻹û׼���á�");
	qm.dispose();
	return;
    } else if (mode == 0) {
	status--;
    } else {
	status++;
    }

    if (status == 0) {
	qm.sendNext("�����������ı�ʯ�����޵����ᣬ��ӵ�зǳ�ǿ����������������ĥ��ʦ�������ˣ�������ȫ��������Ҫ�������....");
    } else if (status == 1) {
	qm.sendYesNo("Ů��Ϊ�˱������Ŭ������������Ϊ�ʼ���ʿ�ŵ��ϼ���ʿ����׼�������");
    } else if (status == 2) {
	if (qm.getPlayerStat("RSP") > (qm.getPlayerStat("LVL") - 70) * 3) {
	    qm.sendNext("��ȷ����ļ��ܵ�������û��");
	} else {
	    if (qm.canHold(1142068)) {
		qm.removeAll(4032179);
		qm.gainItem(1142068, 1);
		qm.changeJob(1311);
		qm.gainAp(5);
		qm.sendOk("��Ϊ��һ�̣��������Ƿ���ʹ�ߡ�����һ�����������������Ϻ����صķ���ʹ�ߡ�");
	    } else {
		qm.sendOk("���Ȱѵ������ճ�һЩ�ռ�Ŷ��");
	    }
	}
	qm.dispose();
    }
}

function end(mode, type, selection) {
}