var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
	}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else if (mode == 0) {
		cm.sendOk("��Ҫ��ʱ���������ҡ�");
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;		
	if (status == 0) {		
		cm.sendYesNo("���Ƿ��������һ�#v2613050#��ȷ���������ճ��ٵ�ȷ��");	
	} else if (status == 1)  {

                 if (cm.getPlayer().getMeso() < 20*10000){
						 cm.sendOk("��Ҳ��㡣");
						 cm.dispose();
				 }else{
							for (var i = 0; i < 100; i++) {
							if (cm.haveItem(2043003, 5)){
							 if (cm.getPlayer().getMeso() < 10*10000){
								cm.sendOk("��Ҳ��㡣");
								cm.dispose();
								return;
								}
								cm.gainMeso(-100000); //�Ӽ����
							 cm.gainItem(2043003, -5);
							 cm.gainItem(2613050, 1);

							
							}
							}
								
						 cm.sendOk("�һ��ɹ���");
						 cm.dispose();	
            }

}
}
}