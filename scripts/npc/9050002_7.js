/*
By Njs
*/
var status = 0;

var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK); //�������
var whichweek = 0;

function start(){
	updateDate();
	status = -1;
	action(1,0,0);
}
var cal_xiari = java.util.Calendar.getInstance();
var weekday_xiari = cal_xiari.get(java.util.Calendar.DAY_OF_WEEK);
function updateDate() {
    ca = java.util.Calendar.getInstance();
    year = ca.get(java.util.Calendar.YEAR); //������
    month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
    day = ca.get(java.util.Calendar.DATE);//��ȡ��
    hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
    minute = ca.get(java.util.Calendar.MINUTE);//��÷���
    second = ca.get(java.util.Calendar.SECOND); //�����
	weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
}

		function weekdayC(weekday){
		switch(weekday){
		case 1:
			return "������";
		break;
		case 2:
			return "����һ";
		break;
		case 3:
			return "���ڶ�";
		break;
		case 4:
			return "������";
		break;
		case 5:
			return "������";
		break;
		case 6:
			return "������";
		break;
		case 7:
			return "������";
		break;
	} 
	
}
		
function action(mode ,type , selection){
	if(mode == 0 || mode == -1){
		cm.dispose();
		return;
	}
	if(mode == 1){
		status ++;
	}
	if(status == 0){
		var str = "";	
		
		
		str +="#e������,������һ�ܵ��ر����񷢲����ģ�֮�䶼�ᷢ����Ȥ���ر�����\r\n������#r#e"+weekdayC(weekday_xiari)+"#k#n ��������ռ�������Ҫ����Ʒ����ô�ҽ����Ը���һЩ��Ȥ�Ķ���Ŷ��~\r\n";
		str +="#e#r#L0#��ʼ���������#l\r\n";
		str +="#e#b#L1#�鿴����������#l\r\n";
		cm.sendSimple(str);
	}else if(status == 1){
		if(selection == 0){
			var str = "";
			if(weekday_xiari == 2){
				typed = 1;
				str +="#b��ҡ�#h #����ã������� #r���ȵ���һ #b����������ռ���������Ʒָ������������ô�ҽ�����һ��С��������Ŷ����\r\n";
				str +="#e#b#i"+4000039+":# #z"+4000039+"# x50��\r\n";
				str +="#e#b#i"+4000068+":# #z"+4000068+"# x50��\r\n";				
				str +="#e#b#i"+4000040+":# #z"+4000040+"# x1��\r\n";		
				//str +="�����û�ص㣺��С��1����С��2����ɭ�ֵ���㡿\r\n";
				str +="��ǰӵ��#i"+4000039+":#������"+cm.itemQuantity(4000039)+" / 50��\r\n";
				str +="��ǰӵ��#i"+4000068+":#������"+cm.itemQuantity(4000068)+" / 50��\r\n";				
				str +="��ǰӵ��#i"+4000040+":#������"+cm.itemQuantity(4000040)+" / 1��\r\n";						
				str +="#e#b���Ƿ�Ҫ�һ��أ�";
			}else if(weekday_xiari == 3){
				typed = 2;
				str +="#b��ҡ�#h #����ã������� #d���µ��ܶ� #b����������ռ���������Ʒָ������������ô�ҽ�����һ��С��������Ŷ����\r\n";
				str +="#e#b#i"+4000008+":# #z"+4000008+"# x50��\r\n";
				str +="#e#b#i"+4000015+":# #z"+4000015+"# x50��\r\n";				
				str +="#e#b#i"+4000176+":# #z"+4000176+"# x1��\r\n";			

				//str +="�����û�ص㣺��С��1����С��2����ɭ�ֵ���㡿\r\n";
				str +="��ǰӵ��#i"+4000008+":#������"+cm.itemQuantity(4000008)+" / 50��\r\n";
				str +="��ǰӵ��#i"+4000015+":#������"+cm.itemQuantity(4000015)+" / 50��\r\n";				
				str +="��ǰӵ��#i"+4000176+":#������"+cm.itemQuantity(4000176)+" / 1��\r\n";			
				str +="#e#b���Ƿ�Ҫ�һ��أ�";
			}else if(weekday_xiari == 4){
				typed = 3;
				str +="#b��ҡ�#h #����ã������� #g���Ե����� #b����������ռ���������Ʒָ������������ô�ҽ�����һ��С��������Ŷ����\r\n";
				str +="#e#b#i"+4000193+":# #z"+4000193+"# x50��\r\n";
				str +="#e#b#i"+4000190+":# #z"+4000190+"# x50��\r\n";				
				str +="#e#b#i"+4031227+":# #z"+4031227+"# x1��\r\n";		
				//str +="#e#rע�⣺��Ʒ�����ͨ��������Ӻ����ȡ��#k\r\n";
				//str +="�����û�ص㣺��С��1����С��2����ɭ�ֵ���㡿\r\n";
				str +="��ǰӵ��#i"+4000193+":#������"+cm.itemQuantity(4000193)+" / 50��\r\n";
				str +="��ǰӵ��#i"+4000190+":#������"+cm.itemQuantity(4000190)+" / 50��\r\n";				
				str +="��ǰӵ��#i"+4031227+":#������"+cm.itemQuantity(4031227)+" / 1��\r\n";		
				str +="#e#b���Ƿ�Ҫ�һ��أ�";
			}else if(weekday_xiari == 5){
				typed = 4;
				str +="#b��ҡ�#h #����ã������� #r���������� #b����������ռ���������Ʒָ������������ô�ҽ�����һ��С��������Ŷ����\r\n";
				str +="#e#b#i"+4000023+":# #z"+4000023+"# x50��\r\n";
				str +="#e#b#i"+4000027+":# #z"+4000027+"# x50��\r\n";				
		                str +="#e#b#i"+4001111+":# #z"+4001111+"# x1��\r\n";					
				//str +="#e#rע�⣺��Ʒ�����ͨ��������Ӻ����ȡ����BOSS��#k\r\n";
				//str +="����ľ�壺����Ѩɽ�壨��Ҫ��֮�� 65�����ϣ���\r\n";
				str +="��ǰӵ��#i"+4000023+":#������"+cm.itemQuantity(4000023)+" / 50��\r\n";
				str +="��ǰӵ��#i"+4000027+":#������"+cm.itemQuantity(4000027)+" / 50��\r\n";				
                                str +="��ǰӵ��#i"+4001111+":#������"+cm.itemQuantity(4001111)+" / 1��\r\n";				
				str +="#e#b���Ƿ�Ҫ�һ��أ�";
			}else if(weekday_xiari == 6){
				typed = 5;
				str +="#b��ҡ�#h #����ã������� #k��ɫ������ #b����������ռ���������Ʒָ������������ô�ҽ�����һ��С��������Ŷ����\r\n";
				str +="#e#b#i"+4000034+":# #z"+4000034+"# x50��\r\n";
				str +="#e#b#i"+4000032+":# #z"+4000032+"# x50��\r\n";				
				str +="#e#b#i"+4031164+":# #z"+4031164+"# x1��\r\n";						
				//str +="#e#rע�⣺��Ʒ�����ͨ��������Ӻ����ȡ����BOSS��#k\r\n";
				//str +="����ľ�壺����Ѩɽ�壨��Ҫ��֮�� 65�����ϣ���\r\n";
				str +="��ǰӵ��#i"+4000034+":#������"+cm.itemQuantity(4000034)+" / 50��\r\n";
				str +="��ǰӵ��#i"+4000032+":#������"+cm.itemQuantity(4000032)+" / 50��\r\n";				
				str +="��ǰӵ��#i"+4031164+":#������"+cm.itemQuantity(4031164)+" / 1��\r\n";			
				str +="#e#b���Ƿ�Ҫ�һ��أ�";
			}else if(weekday_xiari == 7){
				typed = 6;
				str +="#b��ҡ�#h #����ã������� #k��ˬ������ #b����������ռ���������Ʒָ������������ô�ҽ�����һ��С��������Ŷ����\r\n";
				str +="#e#b#i"+4000076+":# #z"+4000076+"# x50��\r\n";				
				str +="#e#b#i"+4000180+":# #z"+4000180+"# x50��\r\n";
				str +="#e#b#i"+4000175+":# #z"+4000175+"# x1��\r\n";						
				//str +="#e#rע�⣺��Ʒ�����ͨ��������Ӻ����ȡ����BOSS��#k\r\n";
				//str +="����ľ�壺����Ѩɽ�壨��Ҫ��֮�� 65�����ϣ���\r\n";
				str +="��ǰӵ��#i"+4000076+":#������"+cm.itemQuantity(4000076)+" / 50��\r\n";				
				str +="��ǰӵ��#i"+4000180+":#������"+cm.itemQuantity(4000180)+" / 50��\r\n";
				str +="��ǰӵ��#i"+4000175+":#������"+cm.itemQuantity(4000175)+" / 1��\r\n";
			}else if(weekday_xiari == 1){
				typed = 7;
				str +="#b��ҡ�#h #����ã������� #k���������� #b����������ռ���������Ʒָ������������ô�ҽ�����һ��С��������Ŷ����\r\n";
				str +="#e#b#i"+4000402+":# #z"+4000402+"# x50��\r\n";
				str +="#e#b#i"+4000406+":# #z"+4000406+"# x50��\r\n";				
				str +="#e#b#i"+4000403+":# #z"+4000403+"# x1��\r\n";					
				//str +="#e#rע�⣺��Ʒ�����ͨ��������Ӻ����ȡ����BOSS��#k\r\n";
				//str +="����ľ�壺����Ѩɽ�壨��Ҫ��֮�� 65�����ϣ���\r\n";
				str +="��ǰӵ��#i"+4000402+":#������"+cm.itemQuantity(4000402)+" / 50��\r\n";
				str +="��ǰӵ��#i"+4000406+":#������"+cm.itemQuantity(4000406)+" / 50��\r\n";				
				str +="��ǰӵ��#i"+4000403+":#������"+cm.itemQuantity(4000403)+" / 1��\r\n";					
				str +="#e#b���Ƿ�Ҫ�һ��أ�";
			}
				cm.sendYesNo(str);
		}else if(selection == 1){
			var str1 = "";
			switch (weekday){
				case 2://����1
					str1 +="#e#r����������һ��\r\n";
					str1 +="#e#b�ռ�ָ������Ʒ�������ͨ���һ����õ���\r\n";
					str1 +="#i"+4000463+":# #z"+4000463+"#x3��  #i"+4310028+":# #z"+4310028+"#x1��       #i"+4001226+":# #z"+4001226+"#x1��  #v2140000#ð�ձ�x1500W               #v4001102#��ȯ1000";
					break;
				case 3:
					str1 +="#e#r���������ܶ���\r\n";
					str1 +="#e#b�ռ�ָ������Ʒ�������ͨ���һ����õ���\r\n";
					str1 +="#i"+4310174+":# #z"+4310174+"#x2��  #i"+4251200+":# #z"+4251200+"#x3��       #i"+4001227+":# #z"+4001227+"#x1��   #i"+4310028+":# #z"+4310028+"#x1��  #v2140000#ð�ձ�x1500W               #v4001102#��ȯ1000";
					break;
				case 4:
					str1 +="#e#r��������������\r\n";
					str1 +="#e#b�ռ�ָ������Ʒ�������ͨ���һ����õ���\r\n";
					str1 +="#i"+4251201+":# #z"+4251201+"#x2��  #i"+4310028+":# #z"+4310028+"#x1��       #i"+4001228+":# #z"+4001228+"#x1��  #v2140000#ð�ձ�x1500W               #v4001102#��ȯ1000";
					break;
				case 5:
					str1 +="#e#r�����������ģ�\r\n";
					str1 +="#e#b�ռ�ָ������Ʒ�������ͨ���һ����õ���\r\n";
					str1 +="#i"+2022465+":# #z"+2022465+"#x1��  #i"+4310028+":# #z"+4310028+"#x1��       #i"+4001229+":# #z"+4001229+"#x1��  #v2140000#ð�ձ�x1500W               #v4001102#��ȯ1000";
					break;
				case 6:
					str1 +="#e#r�����������壩\r\n";
					str1 +="#e#b�ռ�ָ������Ʒ�������ͨ���һ����õ���\r\n";
					str1 +="#i"+4310028+":# #z"+4310028+"#x1��       #i"+4001230+":# #z"+4001230+"#x1��  #v2140000#ð�ձ�x1500W               #v4001102#��ȯ1000";;
					break;
				case 7:
					str1 +="#e#r��������������\r\n";
					str1 +="#i"+4000463+":# #z"+4000463+"#x2��        #i"+4310196+":# #z"+4310196+"#x1��            #i"+4310174+":# #z"+4310174+"#x1��        #i"+4000464+":# #z"+4000464+"#x1��";
					break;
				case 1://������
					str1 +="#e#r�����������գ�\r\n";
					str1 +="#i"+2022465+":# #z"+2022465+"#x2��         #i"+2140002+":# #z"+2140002+"#x1��        #i"+4310196+":# #z"+4310196+"#x2��            #i"+4310174+":# #z"+4310174+"#x2��";
					break;
			}
			cm.sendOk(str1);
			cm.dispose();
			return;
		}
	}else if(status == 2){
		if(cm.getLevel()<120){
			cm.sendOk("#e#bע�⣺��ĵȼ�����120������������������ύ����ɣ�����");
			cm.dispose();
}
 else if(cm.getPlayer().getGamePoints()< 60) {
					cm.sendOk("#k����#r60����#k���ϲſ��Խ��и�������.");
				cm.dispose();
			return;
		}
		if(cm.getPlayer().�жϻ�Ա () > 0){  //cm.getPlayer().getBossLog("yizhou") >= 1
			cm.sendOk("#e#bע�⣺������Ѿ���ɹ��������ˣ���");
			cm.dispose();
			return;
		}

		if(typed == 1){


		if(cm.haveItem(4000039,50)&&cm.haveItem(4000068,50) &&cm.haveItem(4000040,1) ){
				cm.gainItem(4000039,-50);
				cm.gainItem(4000068,-50);	
				cm.gainItem(4000040,-1);						
				cm.gainItem(4000463,5);
				cm.gainItem(4310196,5);
				cm.gainItem(4001226,1);								
                                cm.gainMeso(+10000000);				
				//cm.worldSpouseMessage(0x01, " ���� : ��ϲ���[ " + cm.getPlayer().getName() + " ]��ɡ����ȵ���һ�������ء�");
                cm.����(2, "��ң�[" + cm.getPlayer().getName() + "]��ɡ����ȵ���һ�������ء�");				
				}else{
				cm.sendOk("#e#bע�⣺�ռ�����Ʒ����������Ŷ������");
				cm.dispose();
				return;
				}

		}else if(typed == 2){
		if(cm.haveItem(4000008,50)&&cm.haveItem(4000015,50) &&cm.haveItem(4000176,1) ){
				cm.gainItem(4000008,-50);
				cm.gainItem(4000015,-50);	
				cm.gainItem(4000176,-1);					
				cm.gainItem(4000463,5);
				cm.gainItem(4310028,1);
				cm.gainItem(4001229,1);							
                                cm.gainMeso(+15000000);		
				//cm.worldSpouseMessage(0x01, " ���� : ��ϲ���[ " + cm.getPlayer().getName() + " ]��ɡ��������ܶ��������ء�");
                cm.����(2, "��ң�[" + cm.getPlayer().getName() + "]��ɡ��������ܶ��������ء�");						
			}else{
				cm.sendOk("#e#bע�⣺�ռ�����Ʒ����������Ŷ������");
				cm.dispose();
				return;
			}
		}else if(typed == 3){
		if(cm.haveItem(4000193,50)&&cm.haveItem(4000190,50) &&cm.haveItem(4031227,1) ){
				cm.gainItem(4000193,-50);	
				cm.gainItem(4000190,-50);	
				cm.gainItem(4031227,-1);
				cm.gainItem(4000463,5);
				cm.gainItem(4310196,5);
				cm.gainItem(4001227,1);						
                                cm.gainMeso(+20000000);	
			    cm.gainNX(+1000);					
				//cm.worldSpouseMessage(0x01, " ���� : ��ϲ���[ " + cm.getPlayer().getName() + " ]��ɡ����Ե������������ء�");
                cm.����(2, "��ң�[" + cm.getPlayer().getName() + "]��ɡ����Ե������������ء�");				
			}else{
				cm.sendOk("#e#bע�⣺�ռ�����Ʒ����������Ŷ������");
				cm.dispose();
				return;
			}
		}else if(typed == 4){
		if(cm.haveItem(4000023,50)&&cm.haveItem(4000027,50) &&cm.haveItem(4001111,1) ){
				cm.gainItem(4000023,-50);
                                cm.gainItem(4000027,-50);	
				cm.gainItem(4001111,-1);					
				cm.gainItem(4000463,5);	
				cm.gainItem(4310028,1);
				cm.gainItem(4001230,1);							
                                cm.gainMeso(+25000000);			
				//cm.worldSpouseMessage(0x01, " ���� : ��ϲ���[ " + cm.getPlayer().getName() + " ]��ɡ����������ġ������ء�");
                cm.����(2, "��ң�[" + cm.getPlayer().getName() + "]��ɡ����������ġ������ء�");				
			}else{
				cm.sendOk("#e#bע�⣺�ռ�����Ʒ����������Ŷ������");
				cm.dispose();
				return;
			}
		}else if(typed == 5){
		if(cm.haveItem(4000034,50)&&cm.haveItem(4000032,50) &&cm.haveItem(4031164,1) ){
				cm.gainItem(4000034,-50);
				cm.gainItem(4000032,-50);
				cm.gainItem(4031164,-1);					
				cm.gainItem(4000463,5);
				cm.gainItem(4310196,5);
				cm.gainItem(4001228,1);							
                                cm.gainMeso(+30000000);	
				//cm.worldSpouseMessage(0x01, " ���� : ��ϲ���[ " + cm.getPlayer().getName() + " ]��ɡ���ɫ�����塿�����ء�");
                cm.����(2, "��ң�[" + cm.getPlayer().getName() + "]��ɡ���ɫ�����塿�����ء�");			
			}else{
				cm.sendOk("#e#bע�⣺�ռ�����Ʒ����������Ŷ������");
				cm.dispose();
				return;
			}
		}else if(typed == 6){
		if(cm.haveItem(4000076,50)&&cm.haveItem(4000180,50) &&cm.haveItem(4000175,1) ){
				cm.gainItem(4000076,-50);
				cm.gainItem(4000180,-50);	
				cm.gainItem(4000175,-1);
				cm.gainItem(4310088,1);			
				cm.gainItem(4251202,1);
				cm.gainItem(4000463,10);	
                               cm.gainMeso(+35000000);	
				//cm.worldSpouseMessage(0x01, " ���� : ��ϲ���[ " + cm.getPlayer().getName() + " ]��ɡ���ˬ�������������ء�");
                cm.����(2, "��ң�[" + cm.getPlayer().getName() + "]��ɡ���ˬ�������������ء�");				
			}else{
				cm.sendOk("#e#bע�⣺�ռ�����Ʒ����������Ŷ������");
				cm.dispose();
				return;
				}
		}else if(typed == 7){
		if(cm.haveItem(4000402,50)&&cm.haveItem(4000406,50) &&cm.haveItem(4000403,1) ){
				cm.gainItem(4000402,-50);	
				cm.gainItem(4000406,-50);
				cm.gainItem(4000403,-1);
                                cm.gainMeso(+35000000);	
		                 cm.gainItem(4000463,10);
	                         cm.gainItem(4000186,3);
	                         cm.gainItem(4000464,1);			
				//cm.worldSpouseMessage(0x01, " ���� : ��ϲ���[ " + cm.getPlayer().getName() + " ]��ɡ����������ա������ء�");
                cm.����(2, "��ң�[" + cm.getPlayer().getName() + "]��ɡ����������ա������ء�");				
			}else{
				cm.sendOk("#e#bע�⣺�ռ�����Ʒ����������Ŷ������");
				cm.dispose();
				return;
			}
		}
cm.getChar().����Ա(1);
             //cm.setBossLog("yizhou");
		cm.dispose();
	}
}