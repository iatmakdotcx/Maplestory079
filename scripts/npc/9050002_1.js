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
	text += "#d#kÿ������1\r\n#r�ｱ��1000W��Ϸ�ҡ���Ҫ�ռ�������Ʒ:\r\n#v4000019##d#z4000019# * 30��\r\n#v4000000##d#z4000000# * 30��\r\n#v4000016##d#z4000016# * 30��\r\n"
	text += "\r\n#L1##d���ռ���������Ʒ,��ȡ����!";//����
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                if(cm.getPlayer().getBossLog('task1') > 0)
{
cm.sendOk("���Ѿ���ȡ��1�ν���");
cm.dispose();

}else if(cm.haveItem(4000019,30) && cm.haveItem(4000000,30) && cm.haveItem(4000016,30)){
				cm.gainItem(4000019,-30);
				cm.gainItem(4000000,-30);
				cm.gainItem(4000016,-30);
                                cm.gainMeso(+10000000);
cm.getPlayer().setBossLog('task1');
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
            
cm.����(3, "��ң�[" + cm.getPlayer().getName() + "]��ɵ� 1 �׶�ÿ������");
			}else{
            cm.sendOk("�㻹û�дﵽ�����������\r\n");
            cm.dispose();
			}
		}
    }
}




