var status = -1;

function action(mode, type, selection) {
	var iz = cm.getPlayer().getshitub().iterator();
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
		
		 if (cm.getPlayer().getOneTimeLog("ʦ��") < 1) {
                cm.sendOk("�㲻��ʦ��");
                cm.dispose();
		 return;
		 }

        var selStr = "��ѡ��Ҫ���ʦ�ŵ�ͽ��:\r\n\r\n#b";
       
		var I=0;
        while (iz.hasNext()) {
			I++;
            var zz = iz.next();
            selStr += "#L" + I + "#" +zz+ "#l\r\n";
			
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
		var I=0;
		  while (iz.hasNext()) {
			I++;
            var zz = iz.next();

			if(I==selection){
			
			cm.getPlayer().killshituLogbyname(zz);
			cm.worldMessage(6,"��"+cm.getPlayer().getName()+"��:������ ����������֮����.");
			cm.sendOk("���ѽ��������ǽ");
			}
        }
		
		
		
		   //cm.getPlayer().killshituLogbyname(tudi);
       //cm.flytoID(selection);
        cm.dispose();
    }
}