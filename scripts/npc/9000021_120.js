function start() {
status = -1;

action(1, 0, 0);
}
function action(mode, type, selection) {
            if (mode == -1) {
                cm.dispose();
            }
            else {
                if (status >= 0 && mode == 0) {
                
   cm.sendOk("��лʹ��.");
   cm.dispose();
   return;                    
                }
                if (mode == 1) {
   status++;
  }
  else {
   status--;
  }
          if (status == 0) {
	var tex2 = "";	
	var text = "";
	for(i = 0; i < 10; i++){
		text += "";
	}				
	text += "#d�ϳ�-- #r��߼�ð�ռ�ѫ�¡���Ҫ������Ʒ��\r\n#v1142108##d#z1142108# * 1��\r\n#v4001266##d#z4001266# * 6��\r\n#v4000463##d#z4000463# * 5��\r\n#v4021000##d#z4021000# * 30��\r\n#v4021001##d#z4021001# * 30��\r\n#v4021002##d#z4021002# * 30��\r\n\r\n#v4002001##d#z4002001# * 20��\r\n#v4002000##d#z4002000# * 20��~\r\n"
	text += "\r\n#L1##d���ռ���������Ʒ��ȷ���߼�ð�ռ�ѫ��";//����
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.haveItem(1142108,1)){
		cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4021000,30) && cm.haveItem(4000463,5)  && cm.haveItem(4001266,6)  && cm.haveItem(1142108,1) && cm.haveItem(4021001,30) && cm.haveItem(4002000,20) && cm.haveItem(4002001,20) && cm.haveItem(4021002,30)){
				cm.gainItem(4021000, -30);
				cm.gainItem(1142108, -1);
				cm.gainItem(4002000, -20);
				cm.gainItem(4000463, -5);
				cm.gainItem(4001266, -6);
				cm.gainItem(4002001, -20);
				cm.gainItem(4021001, -30);
				cm.gainItem(4021002, -30);
cm.gainItem(1142109,30,30,30,30,150,150,20,20,15,15,15,15,15,15);
            cm.sendOk("�����ɹ���");
            cm.dispose();
cm.����(3,"�ɹ������߼�ð�ռ�ѫ�£���ϲ����");
			}else{
            cm.sendOk("�޷�������������#v4011002#����20��\r\n#v1142108#����1��\r\n#v4011003#����10��\r\n#v4004003#����20��\r\n");
            cm.dispose();
			}
		}
    }
}




