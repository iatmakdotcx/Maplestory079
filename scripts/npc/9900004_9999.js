/*
   �ű���������ϵQQ:540328414
                              */ 
var status = 0;
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var ���� ="#fMap/MapHelper/weather/witch/3#";

	function start() {
		status = -1;
		action(1, 0, 0);
		}

	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {
	    var 
        textz = ""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+"\r\n";		
		textz += "           "+С�̻� +"#r��ӭ��������ð�յ���������#k"+С�̻� +"\r\n";
		textz += ""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+"\r\n\r\n";
		textz += "               #d���ѿ���12����������NPC#k\r\n\r\n";
		textz += "                 #b�������񴥷���������#k\r\n\r\n";
		textz += "      #r�����ͼ���ҵ��������������NPC������Ի�#k\r\n\r\n";
		
		textz += "                 ��ǰ����ɾ�ֵ��#r"+cm.getPlayer().getBossLog("��������ɾ�ֵ",1)+"#k ��\r\n\r\n";
           
		textz += "               #L0#��ȡ #b10#k �γɾͽ���#l\r\n\r\n";
		textz += "            #v4251202#*20��#v4250602#*20��#v4005004#*100\r\n\r\n";
		textz += "        #v3992025#*2500��#v2022452#*5000��#v4031138#*3000��\r\n\r\n";

		//textz += "               #L1#��ȡ #b20#k �γɾͽ���\r\n\r\n";
		
		cm.sendSimple (textz);  


             } else if (status == 1) {	
           if (selection == 0) {			 
		   if (cm.getPlayer().getBossLog("��������ɾ�ֵ",1) <= 10) {
		            cm.sendOk("��ǰ�ɾ�ֵ���㣬��ȷ�ϡ�");
				    cm.dispose();					
    } else if (cm.getPlayer().getBossLog("��������_10�ν���",1) > 0) {
                    cm.sendOk("�˽�������ȡ�����޷��ٴ���ȡ��");					
				    cm.dispose();
                    } else{
                    cm.gainItem(4251202,20);//��������ID������
					cm.gainItem(4005004,100);//��������ID������
					cm.gainItem(4250602,20);//��������ID������
					cm.gainItem(3992025,2500);//��������ID������
					cm.gainExp(50000000);
					cm.gainMeso(30000000);
					cm.getPlayer().setBossLog("��������_10�ν���",1,1);
		 		    cm.sendOk("������ȡ��ϡ�");
		 		    cm.dispose();
					}
					
			} else if (selection == 1) {			 
		   if (cm.getPlayer().getBossLog("��������ɾ�ֵ",1) <= 20) {
		            cm.sendOk("��ǰ�ɾ�ֵ���㣬��ȷ�ϡ�");
				    cm.dispose();					
    } else if (cm.getPlayer().getBossLog("��������_20�ν���",1) > 0) {
                    cm.sendOk("�˽�������ȡ�����޷��ٴ���ȡ��");					
				    cm.dispose();
                    } else{
                    cm.gainItem(4000463,1);//��������ID������
					cm.gainItem(4251202,5);//��������ID������
					cm.gainItem(4011008,5);//��������ID������
					cm.gainExp(30000000);
					cm.gainMeso(Meso);
					cm.getPlayer().setBossLog("��������_20�ν���",1,1);
		 		    cm.sendOk("������ȡ��ϡ�");
		 		    cm.dispose();
					}

    }
   
}
}}