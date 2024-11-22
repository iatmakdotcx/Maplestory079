/*
SnailMS�ű�������
*/
importClass(Packages.tools.�����ַ���);

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
		var text = "��������Ҫ��ѯ�ĵ������ƣ�#r֧��ģ����ѯ#k����\r\n\r\n";
		
		cm.sendGetText(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		var itemName = cm.getText();
		var itemIdList = cm.findItemInfoByName(itemName);
		if(itemIdList.isEmpty()){
			cm.sendOk("��Ǹ�����Ҳ����õ��ߣ�");
			cm.dispose();
			return;
		}
		var text = "��Ϊ��������ѯ�����µ���,��ѡ��#b\r\n"
		var count = 0;
		for(var i in itemIdList){
			if(count % 2 == 0){
				text += "#L" + i + "#" + �����ַ���.formatString(22, " ", itemIdList[i]) + "#l"; 
			}else{
				text += "#L" + i + "#" + �����ַ���.formatString(22, " ", itemIdList[i]) + "#l\t\n"; 
			}
			count++;
		}
		text += "\r\n";
		cm.sendOk(text);
		
	} else if (status == 2) {
		var itemId = selection;
		if(itemId > 0){
			var mobIdList = cm.findMobByDrop(itemId);
			if(mobIdList.isEmpty()){
				cm.sendOk("��Ǹ����δ�鵽�õ��ߵı��ʣ�");
				cm.dispose();
				return;
			}
			var text = "��Ϊ����ѯ�����¹��������#i" + itemId + ":#����ѡ��鿴���飺#b\r\n";
			for(var i in mobIdList){
				if(mobIdList[i] == 0){
					text += "\t\t\t\t��ȫ�ֵ��䡿\r\n";
				}else{
					text += "\t\t\t#L" + mobIdList[i] + "##o" + mobIdList[i] + "##l\r\n";
				}
			}
			cm.sendOk(text);
		}else{
			cm.sendOk("�����ڿ�BUGô��");
			cm.dispose();
			return;
		}
	} else if (status == 3) {
		var mobId = selection;
		if(mobId > 0){
			cm.sendNext(cm.checkDrop(mobId));
		}
		cm.dispose();
	} else {
		cm.dispose();
		return;
	}
}

