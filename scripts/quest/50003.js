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
        qm.sendNext("...����ʲô�������ҿ������ĵ����ǳ��ӽ�!");
        qm.dispose();
        return;
    }
    if (status == 0) {
        qm.askAcceptDecline("���ģ���Ϊ���ƺ�......����ǰ����ǿ�󡣲�Ҫ�͹���!");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.dispose();
    }
}

function end(mode, type, selection) {
    qm.forceCompleteQuest();
    qm.dispose();
}