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
		cm.sendYesNo("���Ƿ��������һ�#v4000464#��ȷ���������ճ��ٵ�ȷ��");	
	} else if (status == 1)  {

                 if (cm.getPlayer().getMeso() < 20*10000){
						 cm.sendOk("��Ҳ��㡣");
						 cm.dispose();
				 }else{
							for (var i = 0; i < 100; i++) {
							if(cm.haveItem(4001230,1) && cm.haveItem(4001229,1) && cm.haveItem(4001228,1) && cm.haveItem(4001227,1)&& cm.haveItem(4001226,1)){
							 if (cm.getPlayer().getMeso() < 10*10000){
								cm.sendOk("��Ҳ��㡣");
								cm.dispose();
								return;
								}
								cm.gainMeso(-100000); //�Ӽ����
							 cm.gainItem(4001230, -1);
							 cm.gainItem(4001229, -1);
							 cm.gainItem(4001228, -1);
							 cm.gainItem(4001227, -1);
							 cm.gainItem(4001226, -1);
							 cm.gainItem(4000464, 1);

							}
							}
							for (i = 0; i < 300; i++) {
							if (cm.haveItem(4251201, 5)){
							if (cm.getPlayer().getMeso() < 20*10000){
								cm.sendOk("��Ҳ��㡣");
								cm.dispose();
								return;
								}
								cm.gainMeso(-0); //�Ӽ����
							 cm.gainItem(4251201, -0);
							 cm.gainItem(4251202, 0);
							}
							}
								
						 cm.sendOk("�һ��ɹ���");
						 cm.dispose();	
            }

}
}
}