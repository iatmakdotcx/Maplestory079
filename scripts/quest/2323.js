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
            qm.sendOk("�⽫�������Ǳ���Ψһ;�����������");
            qm.dispose();
            return;
        }
    }
    if (status == 0) {
        qm.sendNext("��!�п�����һ�ַ�ʽ......�����������ã������Ѿ��ɳ�Ϊ���ǵĳǱ��ı�����׵�٣���ô��Ҳ���ܹ������ǰ��!");
    } else if (status == 1) {
        qm.sendAcceptDecline("���������ĳ�ַ�ʽ������׵�ٴ̣�Ȼ����Ϳ��Է�Խʹ���ٳ�ǽ����Ȼ����Ҳ����Ҫһ����жױ...");
    } else if (status == 2) {
        qm.sendOk("��#b����ȥ��#k �������߶���˹�ĸ�ԭ����������������صĲ�ҩ��ȡ�����������Щ��ҩ���������ӹ�Ģ��ɭ��. #b����β��#k ��������ᷢ��ҩ����ȡ����ռ����� #b100����β��#k��������ȥ�� #bħ��������.#k");
    } else if (status == 3) {
        //qm.forceStartQuest();
        //qm.forceStartQuest(2324, "1");
        qm.gainExp(11000);
        qm.sendOk("�ɵú�ͨ���õ�������.");
        qm.forceCompleteQuest();
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
        qm.sendOk("����֪����...����������ȫ�ر���ں�һ��.");
    } else if (status == 1) {
        qm.gainExp(11000);
        qm.sendOk("�ɵú�ͨ���õ�������.");
        qm.forceCompleteQuest();
        qm.dispose();
    }
}