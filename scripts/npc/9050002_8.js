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
	text += "#d#k��ɽ���: #r#v4310174#X2 + #v4000186#X3  + #v4002003#X5 + #v4001028#X5 + #v2022336#X3(��� �س�) + #v2140002#5ǧ���� +    #v4310196#X3 +   #v4000463#X5 + #v3994192#X1���ɻ�ȡ���������ĵ��� \r\n#kÿ������������:\r\n\r\n��������: #r" + cm.getPlayer().getBossLog('MRFQ') + "#k/2\r\n�������:#r " + cm.getPlayer().getBossLog('MRWJ') + "#k/2\r\n�������:#r " + cm.getPlayer().getBossLog('MRTK') + "#k/2\r\n"
text += "#e#r(��ȡ����ǰ��������,ȷ�����㹻�ռ�!)";//	
text += "\r\n#L1##d���Ѿ�������и���,��ȡ����!";//
        cm.sendSimple(text);
        } else if (selection == 1) {
                if(cm.getBossLog('MRFB') > 0)
{
cm.sendOk("ÿ���˺�ÿ��ֻ����ȡ1�ν���");
cm.dispose();
}

else if(cm.getPlayer().getBossLog('MRFQ') > 1 && cm.getPlayer().getBossLog('MRWJ') > 1 && cm.getPlayer().getBossLog('MRTK') > 1){
   if(cm.canHold(4002003, 400) && cm.canHold(2022336, 200))
   {
                     cm.gainItem(4310174,3);
	             cm.gainItem(4000186,3);
                     cm.gainItem(4002003,5);
		     cm.gainItem(4001028,5);
		     cm.gainItem(2022336,3);
                     cm.gainItem(4310196,3); 
                     cm.gainItem(4000463,5);
                     cm.gainItem(3994192,1);
                     cm.gainMeso(50000000);

cm.setBossLog('MRFB');
            cm.sendOk("�ɹ���ȡ������");
            cm.dispose();           
cm.����(3, "��ң�[" + cm.getPlayer().getName() + "]�����ÿ�ո�������ȡ�˽�����");
   }
   else
   {
	     cm.sendOk("��������,ȷ�����㹻�ռ�!\r\n");
  cm.dispose(); 
	   
   }
			}


else{
            cm.sendOk("�㻹û���������ÿ�ո���\r\n");
            cm.dispose();
			}
		}
    }
}




