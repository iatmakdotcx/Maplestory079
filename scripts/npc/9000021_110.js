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
	text += "#d�ϳ�-- #r���м�ð�ռ�ѫ�¡���Ҫ������Ʒ��\r\n#v1142101##d#z1142101# * 1��\r\n#v4001266##d#z4001266# * 5��\r\n#v4002003##d#z4002003# * 10��\r\n#v4000009##d#z4000009# * 500��\r\n#v4003004##d#z4003004# * 500��\r\n#v4000021##d#z4000021# * 500��#v4002000##d#z4002000# * 10��\r\n#v4002001##d#z4002001# * 10��\r\n~\r\n"
	text += "\r\n#L1##d���ռ���������Ʒ��ȷ���м�ð�ռ�ѫ��";//����
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.haveItem(1142101,1)){
		cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4000021,500) && cm.haveItem(1142101,1)&& cm.haveItem(4002003,10)&& cm.haveItem(4001266,5) && cm.haveItem(4000009,500)  && cm.haveItem(4002000,10) && cm.haveItem(4002001,10) && cm.haveItem(4003004,20)){

				cm.gainItem(1142101, -1);
				cm.gainItem(4001266, -5);
				cm.gainItem(4002003, -10);
				cm.gainItem(4000009, -500);
				cm.gainItem(4003004, -500);
				cm.gainItem(4000021, -500);
				cm.gainItem(4002000, -10);
				cm.gainItem(4002001, -10);
				
				//cm.gainItem(4004003, -10);
cm.gainItem(1142108,20,20,20,20,100,100,10,10,10,10,10,10,10,10);
            cm.sendOk("�����ɹ���");
            cm.dispose();
cm.����(3,"�ɹ������м�ð�ռ�ѫ�£���ϲ����");
			}else{
            cm.sendOk("�޷�������������#v4000017#����50��\r\n#v1142101#����1��\r\n#v4000040#����10��\r\n#v4000176#����10��\r\n");
            cm.dispose();
			}
		}
    }
}




