/*
SnailMS�ű�������
*/
var ÿ�մ��� = 5;
var ����ҩˮID = 2614102;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("�Ի�������");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		//�������д�ű���һ��Ҫ������
		var text = "�������������ȡ����ҩˮ��ÿ��������ȡ #r" + ÿ�մ��� + " #k��,��Ŀǰ����ȡ�� #b" + cm.getBossLog("����ҩˮ��ȡ") + "#k �Ρ�\r\n\r\n";
		text += "#L1##b��ȡ#k#l\r\n\r\n";
		text += "#L2##b����#k#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			if(cm.getBossLog("����ҩˮ��ȡ") >= ÿ�մ���){
				cm.sendOk("��Ǹ�������յ���ȡ�����Ѵﵽ���ޡ�\r\n");
				cm.dispose();
				return;
			}else{
				if (cm.getInventory(2).isFull(0)) {
					cm.sendOk("�뱣֤������������ #r1#k ��ռ䣡");
					cm.dispose();
					return;
				}
				cm.setBossLog("����ҩˮ��ȡ");
				cm.gainItem(����ҩˮID, 1);
				cm.sendOk("��ȡ�ɹ���\r\n");
			}
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			cm.safeDispose();
			cm.openNpc(3003490, 1);
			return;
		} 
		
	} else if (status == 2) {
		cm.safeDispose();
		cm.openNpc(3003490, 4);
		return;
	} else {
		cm.dispose();
		return;
	}
}

