/*
SnailMS�ű�������
*/

var �ϳ��� = 1602009;

var ���ĵ��� = Array(
	Array(4310020, 1000),
	Array(0, 30000000)
);

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
		var text = "�ϳ�#i" + �ϳ��� + ":##b#z" + �ϳ��� + "##k ��Ҫ��\r\n";
		for(var i = 0; i < ���ĵ���.length; i++){
			if(���ĵ���[i][0] == 0){
				text += "#b���x#r" + ���ĵ���[i][1] + " ";
			}else if(���ĵ���[i][0] == 1){
				text += "#b��ȯx#r" + ���ĵ���[i][1] + " ";
			}else if(���ĵ���[i][0] == 2){
				text += "#b����ȯx#r" + ���ĵ���[i][1] + " ";
			}else{
				text += "#b#i" + ���ĵ���[i][0] + ":#x#r" + ���ĵ���[i][1] + " ";
			}
		}
		text += "\r\n\r\n";
		text += "#kȷ��Ҫ�ϳ�ô��\r\n";
		
		cm.sendYesNo(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(cm.�жϱ���װ����().isFull()){
			cm.sendOk("��ȷ����ı���װ���������� 1 ��ռ䡣");
			cm.dispose();
			return;
		}
		for(var i = 0; i < ���ĵ���.length; i++){
			if(���ĵ���[i][0] == 0){
				if(cm.�жϽ��() < ���ĵ���[i][1]){
					cm.sendOk("��Ľ�Ҳ�����");
					cm.dispose();
					return;
				}
			}else if(���ĵ���[i][0] == 1){
				if(cm.�жϵ�ȯ() < ���ĵ���[i][1]){
					cm.sendOk("��ĵ�ȯ������");
					cm.dispose();
					return;
				}
			}else if(���ĵ���[i][0] == 2){
				if(cm.�жϵ���ȯ() < ���ĵ���[i][1]){
					cm.sendOk("��ĵ���ȯ������");
					cm.dispose();
					return;
				}
			}else{
				if(!cm.haveItem(���ĵ���[i][0], ���ĵ���[i][1])){
					cm.sendOk("��û���㹻��#i" + ���ĵ���[i][0] + "#��");
					cm.dispose();
					return;
				}
			}
		}
		
		for(var i = 0; i < ���ĵ���.length; i++){
			if(���ĵ���[i][0] == 0){
				cm.�ս��(���ĵ���[i][1]);
			}else if(���ĵ���[i][0] == 1){
				cm.�յ�ȯ(���ĵ���[i][1]);
			}else if(���ĵ���[i][0] == 2){
				cm.�յ���ȯ(���ĵ���[i][1]);
			}else{
				cm.gainItem(���ĵ���[i][0], -���ĵ���[i][1]);
			}
		}
		var item = cm.getNewEquip(�ϳ���);
		if(item != null){
			Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, true);
			cm.sendOk("��ϲ��ɹ�������#v" + �ϳ��� + "#\r\n");
			cm.ȫ�����߹���("[���﹫԰����]", "��� "+cm.getPlayer().getName()+" �����ռ����ϣ�������иŬ��������������ǿ���װ����", item);
		}
		
		
	} else {
		cm.dispose();
		return;
	}
}

