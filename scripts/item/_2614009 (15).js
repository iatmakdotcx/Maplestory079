/*
SnailMS�ű�������
*/
����� = Array(145,146,147,148,149,150,151,152,153,154,155,156,157,74,75,87,95,97,100,103,104,105,110,111,114,115,116,125,128,130,131,139,140,143,144,160,161,162,178,196,197,198,199,207,208,209,212,213,221);

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
		var text = "\r\n��ã��������ɱ��������ڼ䣬���ҽ���Ŀ�ĵص��ͻ�Ա���Ϳ�����ɱ�����Ŷ��ǧ�������ӵ�����Ȼ��Ͱ�������\r\n#rps������Ҫ���ֱ�������������������ɱ��������������ʧ�ˣ��������һָ�����Ŷ��\r\n\r\n";
		text += "#L1#��Ҫ����\r\n\r\n";
		text += "#L2#��������\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			var i = parseInt(Math.random() * �����.length);
			cm.getPlayer().setMorph(2614103, �����[i], 3600000, false);
			cm.getPlayer().giveBuff(2438001, 30000, 10000, -9999, 9999, -9999, 9999, -9999, -9999, 60, 60, 3600000, false);
			cm.sendOk("���ѻָ���������������ɣ����ͣ���\r\n");
			cm.dispose();
			return;
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			
		} 
		cm.dispose();
		
	} else {
		cm.dispose();
		return;
	}
}

