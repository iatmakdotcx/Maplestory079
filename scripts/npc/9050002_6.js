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
	text += "#d#kÿ������6\r\n#r�ｱ��#v4310028# ����Ҫ�ռ�������Ʒ:\r\n\r\n#v4001084##d#z4001084#\n\r\n"
	text += "\r\n#L1##d���ռ���������Ʒ,��ȡ����!";//
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                if(cm.getPlayer().getBossLog('task6') > 0)
{
cm.sendOk("ͬһ�ʺ�һ��ֻ����ȡ1�θý���");
cm.dispose();
}else if(cm.getPlayer().getBossLog('task5') < 1)
{
cm.sendOk("�㻹û����ɵ�5�׶�����");
cm.dispose();
}
else if(cm.haveItem(4001084,1)){
				cm.gainItem(4001084,-1);
                               cm.gainItem(4310028,1);

cm.getPlayer().setBossLog('task6');
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
            
cm.����(3, "��ң�[" + cm.getPlayer().getName() + "]��ɵ� 6 �׶�ÿ������");
			}else{
            cm.sendOk("�㻹û�дﵽ�����������\r\n");
            cm.dispose();
			}
		}
    }
}




