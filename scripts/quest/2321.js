/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */

importPackage(Packages.client);

var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0) {
            status -= 2;
        } else {
            qm.sendOk("���ƺ�������ѭָʾ���á����������ң�����׼����.");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendAcceptDecline("���ڣ������ܹ���͸Ģ��ɭ�ֵĴ��̵������ϰ������ڴ�֮ǰ��#b�������񲿳�#kϣ����һ�����㡣������ȥ����.");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("Good luck.");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0) {
            status -= 2;
        } else {
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendOk("��һֱ������񻰰�Ĺ������ϡ���֪�������Ѿ��ɹ�������#bɱ���߹�#k, ������ɭ�ֵ�������Խ���ϰ���ף��!");
    } else if (status == 1) {
        qm.gainExp(2500);
        qm.sendOk("���ڵ�������ҪŪ�����ν���Ǳ�.");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}