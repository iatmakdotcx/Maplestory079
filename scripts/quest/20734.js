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
	qm.dispose();
	return;
    }
    if (status == 0) {
	qm.sendNext("��ã���ϯ��ʿ��Ŀǰ��������Ǿ޴��Σ�ա�������Ҫһ������ľ�������������ط��Ӻڷ�ʦ��������һ����ǿ��ľ��ӣ��Ҿ�����Explorer������ˡ����Ǵ������ռ�����������ǵ�Ȩ������.");
    } else if (status == 1) {
	qm.sendYesNo("�ռ��������ʼ������ 50�ͳ���ʱ�����⼼�ܡ���������Ϊһ�����յ���Դ������?");
    } else if (status == 2) {
	if (!qm.getClient().canMakeCharacter(qm.getPlayer().getWorld())) {
	    qm.sendOk("�㲻����һ������û���Ը���.");
	} else {
	    qm.sendUltimateExplorer();
	}
	qm.dispose();
    }
}

function end(mode, type, selection) {
}