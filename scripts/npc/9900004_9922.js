//odinms_MS

var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0 && status == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			
			cm.sendSimple("\t\t\t\t\t#e#r��ӭ������ȯ����ϵͳ����#n\r\n#d====================================================\r\n#dĿǰ�˻�ʣ���ȯ:"+ cm.getPlayer().getNX() + "\r\n====================================================#b#n\r\n#L5##b#e#v4000463#�����1��       �һ�#r950��ȯ\n#b#n\r\n#L6##b#e#v4000463#�����10��      �һ�#r9500��ȯ\n#b#n\r\n#L7##b#e#v4000463#�����50��      �һ�#r47500��ȯ\r\n\r\n    ");
			} else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b��ȯ�Ļ�ȡ���������˱ؿ���#n#d\r\n====================================================#k\r\n����һ��װ�������Կ�Ŭ����ã����ͣ�#k#d\r\n====================================================#k\r\n��Ҫ��ø�����Ϣ��ѯ����������ǵĽ���Ⱥһ������#r#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	           
			    if(cm.getPlayer().getNX() > 1000){
                cm.sendOk("#b#e��ϲ�����#r#e��1������ҡ�");
                cm.gainItem(4000463,1);
				cm.gainNX(-1000);
                cm.ȫ������("��ϲ���[" + cm.getChar().getName() + "]�һ�1������ҳɹ�����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ����.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	           
			    if(cm.getPlayer().getNX() > 10000){
                cm.sendOk("#b#e��ϲ�����#r#e��10������ҡ�.");
                cm.gainItem(4000463,10);
                cm.gainNX(-10000);
                cm.ȫ������("��ϲ���[" + cm.getChar().getName() + "]�һ�10������ҳɹ�����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 4){ 	           
			    if(cm.getPlayer().getNX() > 50000){
                cm.sendOk("#b#e��ϲ�����#r#e��50������ҡ�.");
                cm.gainItem(4000463,15);
                cm.gainNX(-50000);
                cm.ȫ������("��ϲ���[" + cm.getChar().getName() + "]�һ�50������ҳɹ�����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 5){ 	           
			   if(cm.haveItem(4000463,1)){
                cm.sendOk("#b#e��ϲ�����#r#e��950��ȯ��.");
                cm.gainItem(4000463,-1);
				cm.gainNX(950);
                cm.ȫ������("���[" + cm.getChar().getName() + "]�ڻ������Ķһ�950��ȯ����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ĺ���ҽ��жһ�,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 6){ 	           
			   if(cm.haveItem(4000463,10)){
                cm.sendOk("#b#e��ϲ�����#r#e��9500��ȯ��.");
                cm.gainItem(4000463,-10);
                cm.gainNX(9500);
                cm.ȫ������("���[" + cm.getChar().getName() + "]�ڻ������Ķһ�9500��ȯ����");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ���ռ���.");
                cm.dispose();
                }
                }else if(selection == 7){ 	           
					if(cm.haveItem(4000463,50)){
						cm.sendOk("#r#e��ϲ�������47500��ȯ.");
						cm.gainItem(4000463,-50);
						cm.gainNX(47500);
						cm.ȫ������("���[" + cm.getChar().getName() + "]�ڻ������Ķһ�47500��ȯ����");
						cm.dispose();		
					}else{ 
						cm.sendOk("#b��û���㹻�Ĺ���ҽ��жһ�,��Ŭ���ռ���.");
						cm.dispose();
					}
				}
	}
    }
}
