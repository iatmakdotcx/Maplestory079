/*
SnailMS�ű�������
*/
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";

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
		var text = "��ð����ɰ���ð�ռң�������ð�յ������Ů�������#rѡ������ҵ�ף��#k���һὫ�����ڵ�����İ����︳���㣬����������ͷż��ܣ�������ͬԴ���Һ;�ð�յ�����Ů��İ�����ֻ��չ�ֳ�����#r��ʽ��ͬ#k����Ҫ#r�����������ջ���Ҫ�����Ŭ��#k����Ȼ����������ѡ��ǰ�������ȿ�����������������\r\n\r\n";
		text += "\t\t#L1#" + ������ͷ + "#d����Ҫ�ۿ����ܽ��ܡ�#l\r\n\r\n";
		text += "\t\t#L2#" + ������ͷ + "#d������ˣ���ѡ���ˡ�#l\r\n\r\n";
		text += "\t\t#L3#" + ������ͷ + "#d�һ�û���Ǻã����һ�ȥ�����롣#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			cm.openNpc(1540942, 1);
			cm.safeDispose();
			return;
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			cm.openNpc(1540942, 2);
			cm.safeDispose();
			return;
		} else if (selection == 3){
			//�������дѡ��3Ҫ������
			cm.openNpc(1540940);
			cm.safeDispose();
			return;
		}
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

