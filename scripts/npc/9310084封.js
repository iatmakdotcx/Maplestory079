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
                
   cm.sendOk("��л��Ĺ��٣�");
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
				var text = "���ã�����ǿ�����ܣ�ÿ��ѡ��ÿ��ֻ��ʹ��һ��\r\n#rǿ��װ�����ڵ�һ��װ����\r\n�����Ӵ�������������û�п�����������װ����\r\n\r\n";
				text += "#L0##b#e1��#v4251302#+500W��ҵ���+1��װ��ǿ������#l\r\n\r\n";
				text += "#L1##r1��#v4251302#+1500W��ҵ���+1��װ��ǿ������#l\r\n\r\n"
				text += "#L2##d1��#v4251302#+3000W��ҵ���+1��װ��ǿ������#l\r\n\r\n"
				text += "#L3##d2��#v4251302#+4000W��ҵ���+1��װ��ǿ������#l\r\n\r\n"
                cm.sendSimple(text);
            } else if (status == 1) {
					switch(selection){
						case 0://1.
						cm.openNpc(9310084,1);
						break;
						case 1://2.
						cm.openNpc(9310084,2);
						break;
						case 2://3.
						cm.openNpc(9310084,3);
						break;
						case 3://4.
						cm.openNpc(9310084,4);
						break;
				}
					
}
}
}


