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
	if (status == 3) {
	    qm.sendNext("*����*����ô�ܾܾ����������������Ű����ͯ!");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("�ϣ�˶ʿ�����ڣ����Ѿ�����չʾ������Щʲô���ֵ����ˡ�֤�����ҿ�......�����ҵ���ʳ� �Ҷ��ˡ����ڣ����������ҵ�������������Ҫ�չ���.");
    } else if (status == 1) {
	qm.forceStartQuest();
	qm.sendNextPrevS("�ţ��һ��ǲ�����������ô���£����Ҳ�����һ��������С�����������ɣ�ʳƷ����˵�أ� �����ʲô?", 2);
    } else if (status == 2) {
	qm.sendNextPrev("�ˣ��Ҹճ���������ǰ������ô֪���ҳ�ʲô������֪�����ǣ�������......������������������ҵ����ˡ���Ҫ���Һ�!");
    } else if (status == 3) {
	qm.askAcceptDecline("��������Ӧ�ù�ͬѧϰ�����ǣ��Ҷ��ˡ����ˣ���Ҫʳ����ס������һ��Ӥ�����ҽ��ܿ쿪ʼ���ˣ�");
    } else if (status == 4) {
	qm.forceStartQuest();
	qm.sendOkS("#b(�׶��������ڱ����Ƕ����ˡ������ι����Ҳ����ְֿ��Ը�������ʲô�Ҹ�.)", 2);
    }
}

function end(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	qm.sendNext("����ʲô����ʹ�ǣ�����֪������ʲô����Ϊʲô......�ף��㷢����һ����?");
    } else if (status == 1) {
	qm.sendNextS("#b(�������ض��ְ�.)#k", 2);
    } else if (status == 2) {
	qm.sendNextPrev("��......����һ��������ȷ������ֻ��һ�������棿���ˣ����е������Ǳ���ģ�������������԰���...");
    } else if (status == 3) {
	qm.sendNextS("#b(�ְ��ƺ���������������һλ�����ţ����Ƿǳ�С�ġ����ְ����ţ�����������׶�̸��?)", 2);
    } else if (status == 4) {
	qm.sendNextPrev("�������һ�������������Ǿ�̫Σ���˱��֡����������������Ĳ���Ϊ����һ��������Ҳ������Ӧ����һ��ð�ռ���ɱ�������Է���һ.");
    } else if (status == 5) {
	qm.sendNextS("#b(What?! Kill Mir?! But he didn't do anything wrong!!)", 2);
    } else if (status == 6) {
	qm.sendNextPrev("��Ȼ���Ҹҿ϶�������һ��������ֻ������Leafre��Ossyria��½.");
    } else if (status == 7) {
	qm.sendNextS("#b��...��...���Ǿ�����ȷ�ģ��һ�������һ������������ֻ��һֻ���棡����!#k", 2);
    } else if (status == 8) {
	qm.sendNextPrev("�ǰ����Ҹҿ϶�������һ����ֵ�ǰհ�����棬��������������Σ�ա��²�����԰���.");
    } else if (status == 9) {
	qm.sendNextS("#b(�������Լ��İ�ȫ������ò�Ҫ���κ���֪����������һ����.)#k", 2);
    } else if (status == 10) {
	qm.sendOk("Ŷ����˵��Ҫ�ҵĶ���ι���棿�Ҳ�֪��...����������һ���.");
    } else if (status == 11) {
	qm.gainExp(180);
	qm.forceCompleteQuest();
	qm.dispose();
    }
}