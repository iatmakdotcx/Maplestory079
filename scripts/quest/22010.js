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
            qm.sendOk("�ף��㺦�µ�������������ȥ������Ƶģ����㲻Ӧ�ú�������...");
            qm.dispose();
            return;
        }
        status--;
    }
    if (status == 0) {
        qm.askAcceptDecline("�����ƻ��ĺ��ꡣ��Ȼ����������ٴΰ�����������ƽϢ���Ψһ;����ͨ���ܽ����ǡ���Ϊʲô���߻������ӵĻ���#r��#k?");
    } else if (status == 1) {
        qm.forceStartQuest();
        qm.sendOk("���������Է�����#b�޴��·����#k. ͷ���ϣ�����ȡֻ����#r20#k ���ǵġ��٣����֣���������ҵ�һ���޴�İ���.");
        qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        qm.sendOk("Ŷ����ļ����� ���úã� лл.\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#i2022621# Declicious Milk 30\r\n#i2022622#Declicious Juice 30\r\n#fUI/UIWindow.img/QuestIcon/8/0#980 exp");
    } else if (status == 1) {
        qm.gainExp(980);
        qm.gainItem(2022621, 30);
        qm.gainItem(2022622, 30);
        qm.sendOk("���ڣ��Ҿͻ�ȥ����");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}