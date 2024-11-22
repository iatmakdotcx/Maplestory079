/*
SnailMS�ű�������
*/
importClass(Packages.snail.RedeemCodeUtils);

var mark = 0;
var quantity = -1;
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
		var text = "������CDK�һ���������\r\n\r\n";
		text += "#L1##b���ɲ���ȡ�¿��һ���#k#l\r\n\r\n";
		text += "#L2##b���ɲ���ȡ�����Ҷһ���#k#l\r\n\r\n";
		text += "#L3##b���ɲ���ȡ�ۼ������һ���#k#l\r\n\r\n";
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
			var text = "������ÿ���һ���ɶһ������ҵ�������";
			cm.sendGetNumber(text, 1, 1, 9999);
			mark = 2;
		} else if (selection == 3) {
			//�������дѡ��2Ҫ������
			var text = "������ÿ���һ���ɶһ��ۼ�������������";
			cm.sendGetNumber(text, 1, 1, 9999);
			mark = 3;
		} 
		
	} else if(status == 2){
		switch(mark){
			case 1:
				if(RedeemCodeUtils.newCode(5, "�¿�", 2022521, 1, selection)){
					var codeList = RedeemCodeUtils.getCode("�¿�", selection);
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
				}else{
					cm.sendOk("���ɶһ���ʧ�ܣ����������Ƿ���ȷ��");
					cm.dispose();
					return;
				}
				break;
			case 2:
				quantity = selection;
				var text = "����������Ҫ#r����#k�Ķһ���������";
				cm.sendGetNumber(text, 1, 1, 100);
				break;
			case 3:
				quantity = selection;
				var text = "����������Ҫ#r����#k�Ķһ���������";
				cm.sendGetNumber(text, 1, 1, 100);
				break;
			default:
				cm.dispose();
				return;
				
		}
	} else if(status == 3){
		switch(mark){
			case 2:
				if(RedeemCodeUtils.newCode(5, "������", 4310088, quantity, selection)){
					var codeList = RedeemCodeUtils.getCode("������", selection);
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
				}else{
					cm.sendOk("���ɶһ���ʧ�ܣ����������Ƿ���ȷ��");
					cm.dispose();
					return;
				}
				break;
			case 3:
				if(RedeemCodeUtils.newCode(5, "�ۼ�����", 0, quantity, selection)){
					var codeList = RedeemCodeUtils.getCode("�ۼ�����", selection);
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
				}else{
					cm.sendOk("���ɶһ���ʧ�ܣ����������Ƿ���ȷ��");
					cm.dispose();
					return;
				}
				break;
			default:
				cm.dispose();
				return;
		}
	} else {
		cm.openNpc(9900004, 47);
		cm.safeDispose();
		return;
	}
}

