/*
SnailMS�ű�������
*/
var �齱ϵ�� = "��������";
function start() {
	status = -1;
	action(1, 0, 0);
}
var �ű����� = true;
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
		if(!�ű�����){
			cm.sendOkS("�һ���δ����", 1, 3002121);
			cm.dispose();
			return;
		}
		if(!cm.haveItem(2438675, 1)){
			cm.dispose();
			return;
		}
		var itemid = cm.�齱(�齱ϵ��, "������������");
		var ���� = 1;
		if (itemid != -1) {
			cm.gainItem(2438675, -1, true);
			cm.gainItem(itemid, ����, true);
			var message = "������:\r\n" + cm.��ʾ��Ʒ(itemid) + "\r\n";
			cm.getPlayer().dropMessage("������ " + cm.��ȡ��Ʒ����(�齱ϵ��, itemid) + "");
			cm.sendOkS(message, 1, 3002121);
			cm.dispose();
		} else {
			cm.sendOkS("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣", 1, 3002121);
			cm.dispose();
		}
	}else {
		cm.dispose();
		return;
	}
}

