/* �ű����ͣ�NPC
   �ű����ߣ�ά������
   ��ϵ�ۿۣ�297870163
*/
var status = -1;

function start(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	
	if (status == 0) {
	    qm.sendNext("��, ��ô����? �����޽ܣ����Խ���һЩ���õ�֪ʶ");
	} else if (status == 1) {
		qm.sendNextPrev("������Ϊʲô������? ������!\r����Ҫ�̵���Щ�ս�ð�յ���ð�����ǡ�");
	} else if (status == 2) {
	qm.sendAcceptDecline("����..... �������������Ȥ��~!");
	} else if (status == 3) {
	    if (!qm.haveItem(2010007)) {
		qm.gainItem(2010007, 1);
	    }
	    qm.sendNext("���������Ȼ��\r\n�ҵȵȻ����#r����С����#k�� ��������°��� ʹ�ú�����ø�ǿ׳�� ����������˫��һ��ƻ�� �ܼ򵥵ģ���һ�¼��̵� #bI#k������ร�");
	} else if (status == 4) {
		qm.ShowWZEffect("UI/tutorial.img/28");//��ʾ��Ч��
		qm.addHP(-(qm.getPlayerStat("HP") - 1));
	    qm.forceStartQuest();
	    qm.dispose();
	}
    }
}
        
function end(mode, type, selection) {
    if (mode == -1) {
	qm.dispose();
    } else {
	if (mode == 1)
	    status++;
	else
	    status--;
	if (status == 0) {
	    if (qm.getPlayerStat("HP") < 30) {
		qm.sendNext("�������㻹û���Ҹ����ƻ���Ե������Ͽ�����������Ұɡ�");
		qm.dispose();
	    } else {
		qm.sendNext("�㿴���ǲ��Ǻܼ򵥣� ��������Ҳ����λ�趨#b�ȼ�#k�� ���������������԰ɣ� ร�ÿ��һ��ʱ�䣬Ѫ���ͻ�ָ��ˡ� ��Ȼ�ܻ�ʱ�䣬���ú����õĻ����԰������ٵġ�");
	    }
	} else if (status == 1) {
	    qm.gainExp(10);
	    qm.gainItem(2010000, 3);
	    qm.gainItem(2010009, 3);
	    qm.forceCompleteQuest();
	    qm.dispose();
	}
    }
}