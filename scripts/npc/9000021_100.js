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
	text += "#d�ϳ�-- #r���Ȱ�ð�յ�ѫ�¡���Ҫ������Ʒ��\r\n#v4000017##d#z4000017# * 50��\r\n#v4002003##d#z4002003# * 5��\r\n#v1142358##d#z1142358# * 1��\r\n#v4001266##d#z4001266# * 2��\r\n#v4000019##d#z4000019# * 200��\r\n#v4000000##d#z4000000# * 200��\r\n#v4000016##d#z4000016# * 200��\r\n#v4000040##d#z4000040# * 2��\r\n#v4000176##d#z4000176# * 2��\r\n~\r\n"
	text += "\r\n#L1##d���ռ���������Ʒ��ȷ���Ȱ�ð�յ�ѫ��";//����
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.canHold(1142101,1)){
			cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4000017,50) && cm.haveItem(1142358,1)&& cm.haveItem(4002003,1) && cm.haveItem(4000019,200)&& cm.haveItem(4001266,2) && cm.haveItem(4000000,200) && cm.haveItem(4000016,200) && cm.haveItem(4000040,2) && cm.haveItem(4000176,2)){
				cm.gainItem(4000017, -50);
				cm.gainItem(4002003, -5);
				cm.gainItem(1142358, -1);
				cm.gainItem(4000040, -2);
	     		cm.gainItem(4001266, -2);
				cm.gainItem(4000000, -200);
				cm.gainItem(4000019, -200);
				cm.gainItem(4000016, -200);
				cm.gainItem(4000176, -2);
cm.gainItem(1142101,10,10,10,10,50,50,5,5,10,10,10,10,10,10);
            cm.sendOk("�����ɹ���");
            cm.dispose();
cm.����(3,"�ɹ������Ȱ�ð�յ�ѫ�£���ϲ����");
			}else{
            cm.sendOk("�޷�������������#v4000017#����2��\r\n#v1142358#����1��\r\n#v4000040#����2��\r\n#v4000176#����2��\r\n");
            cm.dispose();
			}
		}
    }
}




