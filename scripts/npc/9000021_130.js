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
	text += "#d�ϳ�-- #r�������ʹѫ�¡���Ҫ������Ʒ��\r\n#v1142109##d#z1142109# * 1��\r\n#v4001266##d#z4001266# * 8��\r\n#v4000463##d#z4000463# * 5��\r\n#v4021003##d#z4021003# * 30��\r\n#v4021004##d#z4021004# * 30��\r\n#v4021005##d#z4021005# * 30��\r\n#v4021007##d#z4021007# * 30��\r\n#v4031891#1000W\r\n~\r\n"
	text += "\r\n#L1##d���ռ���������Ʒ��ȷ�������ʹѫ��";//����
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.haveItem(1142109,1)){
		cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4021003,30) && cm.haveItem(1142109,1) && cm.haveItem(4021007,30)  && cm.haveItem(4001266,8) && cm.haveItem(4021004,30) && cm.haveItem(4021005,30) && cm.haveItem(4000463,5) && cm.getMeso() > 10000000){
				cm.gainItem(1142109, -1);
				cm.gainItem(4001266, -8);
				cm.gainItem(4000463, -5);
				cm.gainItem(4021003, -30);
				cm.gainItem(4021004, -30);
				cm.gainItem(4021005, -30);
				cm.gainItem(4021007, -30);
				cm.gainMeso(-10000000);
cm.gainItem(1142178,40,40,40,40,200,200,30,30,20,20,20,20,20,20);
            cm.sendOk("�����ɹ���");
            cm.dispose();
cm.����(3,"�ɹ����������ʹѫ�£���ϲ����");
			}else{
            cm.sendOk("�޷�������������#v4021000#����10��\r\n#v1142109#����1��\r\n#v4021002#����10��\r\n#v4021004#����10��\r\n");
            cm.dispose();
			}
		}
    }
}




