/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
    status++;
    if (mode != 1) {
        if (type == 1 && mode == 0) {
            status -= 2;
        } else {
            qm.sendNext("�㣬��Ը��ȥ�����뿴������ұ���ҧ�𣿿����º���˵������������");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendNext("һ�����������Ц��������������˵�ˣ���ȥ��#p1013102#ι���ɡ�");
    } else if (status == 1) {
        qm.PlayerToNpc("#b�ţ��ǲ���#p1013101#��������");
    } else if (status == 2) {
        qm.sendAcceptDecline("����һ��ȥιѽ���� #p1013102#�ж������ң���Ҳ֪���������ȥ�Ļ�����һ����ҧ�ҵġ���Ȯϲ���㣬��ȥ�����ͷ���");
    } else if (status == 3) {
        qm.gainItem(4032447, 1);
        qm.sendNext("��쵽#b���#kȥ�� #b#p1013102##k ι���ϡ��Ǹ��һ������Ӷ��ˣ��Ӹղſ�ʼ��һֱ�ڽС�");
        qm.forceStartQuest();
    } else if (status == 4) {
        qm.sendPrev("��#p1013102#ι��ʳ֮�󣬸Ͽ������");
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
        qm.sendNext("#b(���ʳ��ţͷȮ��.)#k");
    } else if (status == 1) {
        qm.sendOk("#b(��ţȮ��ȫ����ġ�����������һ��ų��.)#k\r\n\r\n#fUI/UIWindow.img/QuestIcon/8/0# 35 ����");
    } else if (status == 2) {
        qm.forceCompleteQuest();
        qm.gainItem(4032447, -1);
        qm.gainExp(35);
        qm.sendOk("#b(��������ţȮ�Ѿ������ˡ��ص�����������֪��.)#k");
        qm.dispose();
    }
}