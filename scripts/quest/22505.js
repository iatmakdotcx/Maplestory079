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
	    qm.sendOk("��......�����������Ӷ���һ���ġ�����ɣ�����ı������⣬��֪����.");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.askAcceptDecline("������ô���Ҳ�֪������һ��Ӥ�������ܿ����޷��������ء��ҵĲ²��ǣ�����#b������Ҫţ��#k ��һ");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.sendNext("����Դ�һ��ʼţ��#b��ţ#k�� #b�޴��·��#k.��Ϊʲô��ȥ��������һЩ?");
    } else if (status == 2) {
	qm.sendPrev("Ŷ��һ�������ι�����棬���ܻص�����ߣ����л�Ҫ����̸.");
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
	qm.sendOk("Mooo!");
    } else if (status == 1) {
	qm.gainExp(1150);
	qm.forceCompleteQuest();
	qm.dispose();
    }
}