/*
 �ű���������սű�
 */
 var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
 var ���� ="#fMap/MapHelper/weather/witch/3#";
 var ������Ʒ = 2430253;
 var �����б� = Array(
 1070031,
 1112745,
 1004042,
 1003544,
 1102653,
 1004044,
 1003545,
 1112734,
 1113021,
 1102555,
 1102659
 
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
             cm.sendOk("��������𣿡����ҿ��԰ѱ��������г齱��õ�ʱװ�ֽ��õ�ȯ#kŶ��\r\n\r\n");
            cm.�����Ի�();
        }
        status--;
    }
    if (status == 0) {
		 
        var text = "#r���ҿ��԰ѱ��������г齱��õ�ʱװ�ֽ�ÿ��10000��ȯ��\r\n#e#d" + С�̻� + "���յ�����ʧ���貹����" + С�̻� + "#n#k\r\n\r\n";
		text += "�ɻ�������װ��\r\n#v1070031##v1112745##v1004042##v1003544##v1102653##v1004044##v1003545##v1112734##v1113021##v1102555##v1102659##Ll\r\n\r\n"
        text += "#L1##r" + С�̻� +  "ȷ�Ϸֽ�" + С�̻� + "\r\n\r\n";
		//text += "#L104##b" + С�̻� + "��Ƭ�̵�" + С�̻� + "#l\r\n\r\n";
        text += "#L101##b" + С�̻� + "���ٿ��ǿ���" + С�̻� + "#l\r\n\r\n";
		
        cm.sendSimple(text);
    } else if (status == 1) {
		if(selection == 1){
			if(cm.�жϱ���������().isFull()){
				cm.sendOk("#r����������������������������һ��λ��\r\n");
				cm.�����Ի�();
			}else{
				var �Ƿ��о��� = false;
				var �һ����� = 0;
				for (var i = 0; i < �����б�.length; i++) {
					var mount = 0;
					while(cm.haveItem(�����б�[i], mount + 1)){
						mount += 1;
						�һ����� += 1;
					}
					if(mount > 0){
						cm.gainItem(�����б�[i], -mount);
						cm.gainNX(10000*mount);
						�Ƿ��о��� = true;
					}
				}
				if(�Ƿ��о���){
					cm.sendOk("������ϣ�#b���ƻ����� #r" + �һ����� + " #b��װ������� #r" + 10000*�һ����� + "��ȯ\r\n");
					cm.getPlayer().setOneTimeLoga("����1");
				}else{
					cm.sendOk("#r����ʧ�ܣ��㱳���ﲢû�п��Ի��յ�װ������\r\n");
				}
				cm.�����Ի�();
			}
		}else if (selection == 101) {
			cm.sendOk("��������𣿡����ҿ��԰ѱ��������г齱��õ�ʱװ�ֽ�ÿ��10000��ȯ��\r\n\r\n");
			cm.�����Ի�();
		
		}else if (selection == 104) {
			cm.�����Ի�();
			cm.openNpc(9900004,9904);
		} 
		
		
        
	} else {
		cm.�����Ի�();
	}
        

}


 
 