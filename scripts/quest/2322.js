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
            qm.sendNext("������Ҫ��İ�����");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendYesNo("�����ҸղŸ������һ�����ոմ��Ƶ��ϰ���ֵ����ף��������Ϊ���������ֹ�������˽���Ǳ����š������ҳ�����һ��Ǳ�뷽ʽ��");
    } else if (status == 1) {
        qm.sendNext("·��Ģ��ɭ�֣����㵽���ϵ�ʱ�򣬾Ϳ����߽���ǽ�ˣ�ף����ˡ�");
    } else if (status == 2) {
        qm.forceStartQuest();
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
        qm.sendOk("�š������������Ѿ��رմ��š�");
    } else if (status == 1) {
        qm.gainExp(11000);
        qm.sendOk("�ɵúã�̫лл���ˡ�");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}