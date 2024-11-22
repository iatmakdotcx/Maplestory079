/*
SnailMS�ű�������
*/
importClass(Packages.snail.RedeemCodeUtils);

var mark = 0;

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
		var text = "�����ǳ�ʦ�һ���������\r\n\r\n";
		text += "#L1##b�����¶һ���#k#l\r\n\r\n";
		text += "#L2##b��ȡ�һ���#k#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			var text = "����������Ҫ#r����#k�Ķһ���������";
			cm.sendGetNumber(text, 1, 1, 100);
			mark = 1;
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			var count = RedeemCodeUtils.getCodeQuantity("��ʦ", false, false);
			if(count > 0){
				var text = "Ŀǰ�� #b" + count + "#k ���һ�����ã�����������Ҫ#r��ȡ#k�Ķһ���������";
				cm.sendGetNumber(text, 1, 1, count);
				mark = 2;
			}else{
				cm.sendOk("Ŀǰû�п��õĶһ��룬���������µĶһ��롣");
				cm.dispose();
				return;
			}
		} 
		
	} else if(status == 2){
		switch(mark){
			case 1:
				if(RedeemCodeUtils.newCode(5, "��ʦ", 0, 1, selection)){
					cm.sendOk("�ѳɹ�����#b" + selection + "#k���һ���");
				}else{
					cm.sendOk("���ɶһ���ʧ�ܣ����������Ƿ���ȷ��");
					cm.dispose();
					return;
				}
				break;
			case 2:
				var codeList = RedeemCodeUtils.getCode("��ʦ", selection);
				if(codeList != null && !codeList.isEmpty()){
					var text = "�ѽ����ɵĶһ����ļ�������#b����˸�Ŀ¼---codes#k�ļ����У����ɵĶһ������£�\r\n";
					for(var i = 0; i < codeList.size(); i++){
						text += codeList.get(i) + "\r\n";
					}
					cm.sendSimple(text);
				}else{
					cm.sendOk("Ŀǰû�п��õĶһ��룬���������µĶһ��롣");
					cm.dispose();
					return;
				}
			default:
				cm.dispose();
				return;
				
		}
	} else {
		cm.openNpc(9900004, 10093);
		cm.safeDispose();
		return;
	}
}

