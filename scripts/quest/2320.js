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
            qm.sendOk("�����������Ը�������Ϣ#b��³˹#k, �������ף�������æ.");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendAcceptDecline("�Ҷ���ֻ��һ��Ҫ����ࡣ��������?");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.gainItem(4032389, 1);
        qm.sendOk("˵ʵ������Щ#bɱ���߹�#k����ȫ�����Լ��Ĺ����� �㻹�ǵ���#b��³˹#k ��#bHenesys#k? ��С��һֱ���������ѣ��� #bɱ���߹�#k��ɺ��������������о����������һ����һ�ж��鹦����������������������������.");
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
        qm.sendOk("Ŷ!�����������#bScarrs#k? \r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0# \r\n#fUI/UIWindow.img/QuestIcon/8/0# 8800 exp");
    } else if (status == 1) {
        qm.gainExp(8800);
        qm.gainItem(4032389, -1);
        qm.sendOk("������������#bɱ���߹�#k���ڹ�ȥ�Ĺ���������һ�����ѵ�ʱ����ʰ�ĳɷ֣������Ұ���ֻ�����ۣ������ܹ����������������ʾΪ�á�����������Һ��������ĳ�ɫ����.");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}