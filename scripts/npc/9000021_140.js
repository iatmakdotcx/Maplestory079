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
	text += "#d�ϳ�-- #r������ľ���ѫ�¡���Ҫ������Ʒ��\r\n#v1142178##d#z1142178# * 1��\r\n#v4251202##d#z4251202# * 2��\r\n#v4001266##d#z4001266# * 10��\r\n#v4000463##d#z4000463# * 10��\r\n#v4000243##d#z4000243# * 1��\r\n#v4001084##d#z4001084# * 1��\r\n#v4000235##d#z4000235# * 1��\r\n#v4001085##d#z4001085# * 1��\r\n#v4000175##d#z4000175# * 1��\r\n#v4031891#2000W\r\n~\r\n"
	text += "\r\n#L1##d���ռ���������Ʒ��ȷ�������ľ���ѫ��";//����
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                      if(!cm.haveItem(1142178,1)){
		cm.sendOk("��������ı��������ٿճ�2��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4251202,2) && cm.haveItem(1142178,1) && cm.haveItem(4001084,1) && cm.haveItem(4000463,10)  && cm.haveItem(4001266,10) && cm.haveItem(4001085,1)&& cm.haveItem(4000243,1) && cm.haveItem(4000235,1) && cm.haveItem(4000175,1) && cm.getMeso() > 20000000){
			
				cm.gainItem(1142178, -1);
				cm.gainItem(4251202, -2);
				cm.gainItem(4000463, -10);
				cm.gainItem(4001266, -10);
				cm.gainMeso(-20000000);
				cm.gainItem(4001085, -1);
				cm.gainItem(4000175, -1);
				cm.gainItem(4000235, -1);
				cm.gainItem(4000243, -1);
				cm.gainItem(4001084, -1);
cm.gainItem(1142177,50,50,50,50,250,250,50,50,20,20,20,20,20,20);
            cm.sendOk("�����ɹ���");
            cm.dispose();
cm.����(3,"�ɹ����������ľ���ѫ�£���ϲ����");
			}else{
            cm.sendOk("�޷�������������#v4251202#����5��\r\n#v1142178#����1��\r\n#v4001084#����1��\r\n#v4001085#����1��\r\n");
            cm.dispose();
			}
		}
    }
}




