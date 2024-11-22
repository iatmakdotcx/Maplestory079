/*
SnailMS�ű�������
*/
var mark = -1;

function start() {
	status = -1;
	action(1, 0, 0);
}

var �����������ȯ = true;
var �����������ȯ���� = 200;

var �ۼ����������ȯ = true;
var �ۼ����������ȯ���� = 200; 

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
		var text = "���ã�������CDK�һ����ģ���ѡ����Ҫ�һ������\r\n\r\n";
		text += "#L1##b�һ��¿�#k#l\r\n\r\n";
		text += "#L2##b�һ�������#k#l\r\n\r\n";
		text += "#L3##b�һ��ۼ�����#k#l\r\n\r\n";
		
		if(cm.getPlayer().getGMLevel() >= 100){
			text += "\r\n#r-----------����ֻ��GM�ܿ���------------\r\n";
			text += "#L999##bCDK��������#k#l\r\n\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			if(cm.�жϱ���������().isFull()){
				cm.dispose();
				cm.sendOk("�뱣֤���������������1��ռ䣡");
				return;
			}
			
			var text = "����������¿��һ��룺\r\n"
			cm.sendGetText(text);
			mark = 1;
			
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			if(cm.�жϱ���������().isFull()){
				cm.dispose();
				cm.sendOk("�뱣֤���������������1��ռ䣡");
				return;
			}
			
			var text = "��������������Ҷһ��룺\r\n"
			cm.sendGetText(text);
			mark = 2;
		} else if (selection == 3) {
			//�������дѡ��2Ҫ������
			/* if(cm.�жϱ���������().isFull()){
				cm.dispose();
				cm.sendOk("�뱣֤���������������1��ռ䣡");
				return;
			} */
			
			var text = "��������������Ҷһ��룺\r\n"
			cm.sendGetText(text);
			mark = 3;
		} else if (selection == 999) {
			//�������дѡ��2Ҫ������
			cm.dispose();
			cm.openNpc(9900004, 47);
			return;
		} 

	} else if (status == 2){
		if(mark == 1){
			var code = cm.getText();
			if(!Packages.snail.RedeemCodeUtils.checkCode("�¿�", code)){
				cm.sendOk("�һ�����Ч����ȷ�ϡ�\r\n");
				cm.dispose();
				return;
			}
			Packages.snail.RedeemCodeUtils.useCode("�¿�", code);
			var itemId = Packages.snail.RedeemCodeUtils.getItemId("�¿�", code);
			var quantity = Packages.snail.RedeemCodeUtils.getItemMount("�¿�", code);
			cm.gainItem(itemId, quantity);
			cm.sendOk("��ϲ������#b#i" + itemId + ":##z" + itemId + "#x" + quantity + "");
			var item = cm.getNewEquip(itemId);
			cm.ȫ�����߹���("�¿��һ�", " " + cm.getPlayer().getName() + " �һ����¿�x" + quantity + "��", item);
			cm.dispose();
		}else if(mark == 2){
			var code = cm.getText();
			if(!Packages.snail.RedeemCodeUtils.checkCode("������", code)){
				cm.sendOk("�һ�����Ч����ȷ�ϡ�\r\n");
				cm.dispose();
				return;
			}
			Packages.snail.RedeemCodeUtils.useCode("������", code);
			var itemId = Packages.snail.RedeemCodeUtils.getItemId("������", code);
			var quantity = Packages.snail.RedeemCodeUtils.getItemMount("������", code);
			cm.gainItem(itemId, quantity);
			var text = "��ϲ������#b#i" + itemId + ":##z" + itemId + "#x" + quantity + " ";
			if(�����������ȯ){
				text += " ��ȯx" + quantity * �����������ȯ����;
				cm.����ȯ(quantity * �����������ȯ����);
			}
			cm.sendOk(text);
			var item = cm.getNewEquip(itemId);
			text = " " + cm.getPlayer().getName() + " �һ���������x" + quantity + "";
			if(�����������ȯ){
				text += "������õ�ȯx" + quantity * �����������ȯ����;
			}
			text += "!";
			cm.ȫ�����߹���("�����Ҷһ�", text, item);
			cm.dispose();
		}else if(mark == 3){
			var code = cm.getText();
			if(!Packages.snail.RedeemCodeUtils.checkCode("�ۼ�����", code)){
				cm.sendOk("�һ�����Ч����ȷ�ϡ�\r\n");
				cm.dispose();
				return;
			}
			Packages.snail.RedeemCodeUtils.useCode("�ۼ�����", code);
			var itemId = Packages.snail.RedeemCodeUtils.getItemId("�ۼ�����", code);
			var quantity = Packages.snail.RedeemCodeUtils.getItemMount("�ۼ�����", code);
			cm.�����������(quantity);
			var text = "��ϲ������ #b�ۼ�����x" + quantity + " ";
			if(�ۼ����������ȯ){
				text += " ��ȯx" + quantity * �ۼ����������ȯ����;
				cm.����ȯ(quantity * �ۼ����������ȯ����);
			}
			cm.sendOk(text);
			text = " " + cm.getPlayer().getName() + " �һ����ۼ�����x" + quantity + "";
			if(�ۼ����������ȯ){
				text += "������õ�ȯx" + quantity * �ۼ����������ȯ����;
			}
			text += "!";
			
			cm.ȫ������(9, text);
			cm.dispose();
		}
	} else {
		cm.dispose();
		return;
	}
}

