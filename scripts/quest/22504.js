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
	    qm.sendNext("û������ͼ�ҵ����Լ��Ĵ𰸡��һ�Ϊ���ÿ�#b�곤���˱���������!#k");
	    qm.dispose();
	    return;
	}
	status--;
    }
    if (status == 0) {
	qm.sendNext("���������в�ͨ�ġ�����Ҫ��Ķ�����û��ֲ� û���⡣ʲô���㲻֪�������������ˣ�����Ҵ�̫�������֪��ʲô�˶��Һ�!");
    } else if (status == 1) {
	qm.sendNextPrevS("#b���Ҳ�֪�����ⲻ����������ʲô���...", 2);
    } else if (status == 2) {
	qm.askAcceptDecline("��Ȼ�㳤��������������ϸ��о����ˡ����е���ģ����֪���ı��ҶࡣŶ��ͦ�õġ��һ��ʱ���˭������ϣ���!");
    } else if (status == 3) {
	qm.forceStartQuest();
	qm.sendOkS("#b(���Ѿ����ϰ�һ�Σ�����û���κθ��õ��뷨��ʱ��������!)#k", 2);
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
	qm.sendOk("ʲô���㻹����ͼ�������棿�ţ�����������Ըɲݻ������һ�ѣ����޵�С�һ Ŷ��������Ȼ��һ��Ӥ��?");
    } else if (status == 1) {
	qm.gainExp(260);
	qm.forceCompleteQuest();
	qm.dispose();
    }
}