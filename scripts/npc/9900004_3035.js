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
		cm.sendYesNo("���Ƿ�����#v4310027#x 300 #v4000487#x 300 #v4310088#x 400 #v2041200#x 300 �����һ�#v5570000#��ȷ���������ճ��ٵ�ȷ��");	
	} else if (status == 1)  {

                 if (cm.getPlayer().getMeso() < 20*10000){
						 cm.sendOk("��Ҳ��㡣");
						 cm.dispose();
				 }else{
							for (var i = 0; i < 100; i++) {
							if(cm.haveItem(4310027,300) && cm.haveItem(4000487,300) && cm.haveItem(4310088,300) && cm.haveItem(2041200,300)){
							 if (cm.getPlayer().getMeso() < 10*10000){
								cm.sendOk("��Ҳ��㡣");
								cm.dispose();
								return;
								}
								cm.gainMeso(-100000); //�Ӽ����
							 cm.gainItem(4310027, -300);
							 cm.gainItem(4000487, -300);
							 cm.gainItem(4310088, -300);
							 cm.gainItem(2041200, -300);
							 //cm.gainItem(4251202, -200);
							 cm.gainItem(5570000, 1);

							}
							}
							
								
						 cm.sendOk("�һ��ɹ���");
						 cm.dispose();	
            }

}
}
}