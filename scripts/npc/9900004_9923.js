

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
			
			cm.sendSimple("\t\t\t\t\t#e#r��ӭ������ȯ����ϵͳ����#n\r\n#d====================================================\r\n#dĿǰ�˻�ʣ����:"+ cm.getPlayer().getMeso() + "\r\n====================================================#b#n\r\n#L2##b#r#v4031138# 2ǧ7����       �һ�#v4000463#�����1��\r\n#L3##b#r#v4031138# 2��7ǧ��       �һ�#v4000463#�����10��\r\n#L4##b#r#v4031138# 13��5ǧ��      �һ�#v4000463#�����50��\r\n    ");
			} else if (status == 1) {
                  if (selection == 1) {
		  cm.sendOk("\t\t\t#e#b��ȯ�Ļ�ȡ���������˱ؿ���#n#d\r\n====================================================#k\r\n����һ��װ�������Կ�Ŭ����ã����ͣ�#k#d\r\n====================================================#k\r\n��Ҫ��ø�����Ϣ��ѯ����������ǵĽ���Ⱥһ������#r#d\r\n");
	          cm.dispose();
                  }else if(selection == 2){ 	
if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }				  
			    if(cm.getPlayer().getMeso() > 27000000){
                cm.sendOk("#b#e��ϲ�����#r#e��1������ҡ�");
                cm.gainItem(4000463,1);
				cm.gainMeso(-27000000);
                cm.ȫ������("��ϲ���[" + cm.getChar().getName() + "]�ڻ��������ý�ҹ�����1������ң���");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ľ�ҽ��й���,��Ŭ����.");
                cm.dispose();
                  }
                  }else if(selection == 3){ 	
if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }				  
			    if(cm.getPlayer().getMeso() > 270000000){
                cm.sendOk("#b#e��ϲ�����#r#e��10������ҡ�.");
                cm.gainItem(4000463,10);
                cm.gainMeso(-270000000);
                cm.ȫ������("��ϲ���[" + cm.getChar().getName() + "]�ڻ��������ý�ҹ�����10������ң���");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�Ľ�ҽ��й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 4){ 	
if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }				  
			    if(cm.getPlayer().getMeso() > 1350000000){
                cm.sendOk("#b#e��ϲ�����#r#e��50������ҡ�.");
                cm.gainItem(4000463,50);
                cm.gainMeso(-1350000000);
                cm.ȫ������("��ϲ���[" + cm.getChar().getName() + "]�ڻ��������ý�ҹ�����50������ң���");
                cm.dispose();		
                }else{ 
                cm.sendOk("#b��û���㹻�ĵ�ȯ���й���,��Ŭ���ռ���.");
                cm.dispose();
                  }
                  }else if(selection == 5){ 	
if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }				  
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
			   if(cm.haveItem(4000463,1)){
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
if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }				
					if(cm.haveItem(4000463,1)){
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
