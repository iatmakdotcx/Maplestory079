/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
        qm.dispose();
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            qm.sendOk("��λ�µ������߰ɣ�����İ���ɣ����������ǣ���(��ݼ�W)�Ϳ��Բ鿴����ð�յ���������е�ͼ");
            qm.gainExp(11);
	        qm.forceCompleteQuest();
            qm.dispose();
        }
    }
}