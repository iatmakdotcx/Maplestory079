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
            if (cm.getPlayer().getOneTimeLog("VIP") == 0) {
                var vip = "��ͨ���"
                vip1�۸� = 400;
                vip2�۸� = 300;
                vip3�۸� = 300;
            } else if (cm.getPlayer().getOneTimeLog("VIP") == 1) {
                vip = "#r������Ա";
                vip1�۸� = 0;
                vip2�۸� = 100;
                vip3�۸� = 300;
            //} else if (cm.getPlayer().getOneTimeLog("VIP") == 2) {
                vip = "#r��#r��#d��#rԱ";
                vip1�۸� = 0;
                vip2�۸� = 0;
                vip3�۸� = 400;
            } else if (cm.getPlayer().getOneTimeLog("VIP") == 3) {
                vip = "#r��#dʯ#r��#bԱ"
                vip1�۸� = 400;
                vip2�۸� = 0;
                vip3�۸� = 300;
            }
            var text = "#r���~#b������"+cm.getChannelServer().getServerName()+"#r��#d��#r��#b#kVIP#b��������\r\n\r\n";
            text += "\t\t��Ա�ȼ���" + vip + " || Ԫ����" + cm.getmoneyb() + "\r\n\r\n";
            //text += "#L0##b����#r������Ա#b��" + vip1�۸� + "Ԫ����#l\r\n\r\n"
            //text += "#L1#����#r�ƽ��Ա#k#b��" + vip2�۸� + "Ԫ��#l\r\n\r\n";
            text += "#L2#����#r��ʯ��Ա#k#b��" + vip3�۸� + "Ԫ����#l\r\n\r\n";
            text += "#L3#VIP#r����#k#b#l\r\n\r\n";
            cm.sendSimple(text)
        } else if (status == 1) {
            if (selection == 0) {//����VIP1
			if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
			cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷�����.");	
			cm.dispose();	
			} else if (cm.getInventory(2).isFull(1)){//�жϵڶ���Ҳ������������װ�����Ƿ���һ���ո�	
			cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷�����.");	
			cm.dispose();	
			} else if (cm.getInventory(3).isFull(1)){//�жϵ�����Ҳ������������װ�����Ƿ���һ���ո�	
			cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷�����.");	
			cm.dispose();
			} else if (cm.getInventory(4).isFull(2)){//�жϵ��ĸ�Ҳ������������װ�����Ƿ���һ���ո�
			cm.sendOk("#b�뱣֤������λ������3���ո�,�����޷�����.");	
			cm.dispose();	
			} else if (cm.getInventory(5).isFull(2)){//�жϵ����Ҳ�����ֽ�����װ�����Ƿ���һ���ո�	
			cm.sendOk("#b�뱣֤�ֽ���λ������3���ո�,�����޷�����.");		
			cm.dispose();
           } else if (cm.getPlayer().getOneTimeLog("VIP") == 0 && cm.getmoneyb() >= 400) {
                    cm.setmoneyb(-400);
                    cm.sendOk("��ϲ�㹺��ɹ���");
                    cm.getPlayer().setOneTimeLog("VIP");
					//cm.gainItem(1112907,20,20,20,20,800,800,15,15,0,0,0,0,0,0);//
                    cm.laba("��VIPף�ء�" + " : " + " [" + cm.getPlayer().getName() + "]�ɹ���Ϊ�˰�����Ա�����ף�����ѣ�",11);
                    cm.dispose();
                } else {
                    cm.sendOk("���������ѡ��");
                    cm.dispose();
                }

            } else if (selection == 1) {//����VIP2
                if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
			cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷�����.");	
			cm.dispose();	
			} else if (cm.getInventory(2).isFull(1)){//�жϵڶ���Ҳ������������װ�����Ƿ���һ���ո�	
			cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷�����.");	
			cm.dispose();	
			} else if (cm.getInventory(3).isFull(1)){//�жϵ�����Ҳ������������װ�����Ƿ���һ���ո�	
			cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷�����.");	
			cm.dispose();
			} else if (cm.getInventory(4).isFull(2)){//�жϵ��ĸ�Ҳ������������װ�����Ƿ���һ���ո�
			cm.sendOk("#b�뱣֤������λ������3���ո�,�����޷�����.");	
			cm.dispose();	
			} else if (cm.getInventory(5).isFull(2)){//�жϵ����Ҳ�����ֽ�����װ�����Ƿ���һ���ո�	
			cm.sendOk("#b�뱣֤�ֽ���λ������3���ո�,�����޷�����.");		
			cm.dispose();
           } else if (cm.getPlayer().getOneTimeLog("VIP") == 0 && cm.getmoneyb() >= 300) {//ֱ�ӹ���VIP2 
                    cm.setmoneyb(-300);
                    cm.getPlayer().setOneTimeLog("VIP");
					cm.getPlayer().setOneTimeLog("VIP");
					//cm.gainItem(1112907,20,20,20,20,800,800,15,15,0,0,0,0,0,0);//
					//cm.gainItem(1112907,40,40,40,40,1300,1300,30,30,0,0,0,0,0,0);//
					cm.laba("��VIPף�ء�" + " : " + " [" + cm.getPlayer().getName() + "]�ɹ���Ϊ�˻ƽ��Ա�����ף�����ѣ�",11);
					 cm.sendOk("��ϲ�㹺��ɹ���");
                  cm.dispose();
                } else if (cm.getPlayer().getOneTimeLog("VIP") == 1 && cm.getmoneyb() >= 400) {//VIP1����VIP2
                    cm.setmoneyb(-400);
					cm.getPlayer().setOneTimeLog("VIP");
					//cm.gainItem(1112907,40,40,40,40,1300,1300,30,30,0,0,0,0,0,0);//
					cm.laba("��VIPף�ء�" + " : " + " [" + cm.getPlayer().getName() + "]�ɹ���Ϊ�˻ƽ��Ա�����ף�����ѣ�",11);
					 cm.sendOk("��ϲ�㹺��ɹ���");
                    cm.dispose();

                } else {
                    cm.sendOk("���������ѡ��");
                    cm.dispose();
                }
            } else if (selection == 2) {//��ʯ��Ա
                if (cm.getInventory(1).isFull(0)){//�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
			cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷�����.");	
			cm.dispose();	
			} else if (cm.getInventory(2).isFull(1)){//�жϵڶ���Ҳ������������װ�����Ƿ���һ���ո�	
			cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷�����.");	
			cm.dispose();	
			} else if (cm.getInventory(3).isFull(1)){//�жϵ�����Ҳ������������װ�����Ƿ���һ���ո�	
			cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷�����.");	
			cm.dispose();
			} else if (cm.getInventory(4).isFull(2)){//�жϵ��ĸ�Ҳ������������װ�����Ƿ���һ���ո�
			cm.sendOk("#b�뱣֤������λ������3���ո�,�����޷�����.");	
			cm.dispose();	
			} else if (cm.getInventory(5).isFull(2)){//�жϵ����Ҳ�����ֽ�����װ�����Ƿ���һ���ո�	
			cm.sendOk("#b�뱣֤�ֽ���λ������3���ո�,�����޷�����.");		
			cm.dispose();
           } else if (cm.getPlayer().getOneTimeLog("VIP") == 0 && cm.getmoneyb() >= 300) {//ֱ�ӹ���VIP3 
                    cm.setmoneyb(-300);
                    cm.sendOk("��ϲ�㹺��ɹ���");
                    cm.getPlayer().setOneTimeLog("VIP");
					cm.getPlayer().setOneTimeLog("VIP");
					cm.getPlayer().setOneTimeLog("VIP");
					//cm.gainItem(1112907,20,20,20,20,800,800,15,15,0,0,0,0,0,0);//
					//cm.gainItem(1112907,40,40,40,40,1300,1300,30,30,0,0,0,0,0,0);//
					//cm.gainItem(1112907,60,60,60,60,3000,3000,40,40,0,0,0,0,0,0);//
		       cm.laba("��VIPף�ء�" + " : " + " [" + cm.getPlayer().getName() + "]�ɹ���Ϊ����ʯ��Ա�����ף�����ѣ�",11);
               cm.dispose();
                } else if (cm.getPlayer().getOneTimeLog("VIP") == 1 && cm.getmoneyb() >= 300) {//VIP1����VIP3
                    cm.setmoneyb(-300);
                    cm.getPlayer().setOneTimeLog("VIP");
					cm.getPlayer().setOneTimeLog("VIP");
		            //cm.gainItem(1112907,40,40,40,40,1300,1300,30,30,0,0,0,0,0,0);//
					//cm.gainItem(1112907,60,60,60,60,3000,3000,40,40,0,0,0,0,0,0);//
		            cm.sendOk("��ϲ�㹺��ɹ���");
					cm.laba("��VIPף�ء�" + " : " + " [" + cm.getPlayer().getName() + "]�ɹ���Ϊ����ʯ��Ա�����ף�����ѣ�",11);
                  cm.dispose();

                } else if (cm.getPlayer().getOneTimeLog("VIP") == 2 && cm.getmoneyb() >= 300) {//vip2����VIP3
                    cm.setmoneyb(-300);
					cm.getPlayer().setOneTimeLog("VIP");
					//cm.gainItem(1112907,60,60,60,60,3000,3000,40,40,0,0,0,0,0,0);//
                    cm.sendOk("��ϲ�㹺��ɹ���");
					cm.laba("��VIPף�ء�" + " : " + " [" + cm.getPlayer().getName() + "]�ɹ���Ϊ����ʯ��Ա�����ף�����ѣ�",11);
                    cm.dispose();

                } else {
                    cm.sendOk("���������ѡ��");
                    cm.dispose();
                }
			}else if  (selection == 3) {//������Ϣ#l
			cm.sendOk("#r------------------------------------------------------#b#k#b#r#k#b#r����ʯ��Ա��300��ֵ�ȣ�#k#b\r\n  ÿ����ȡ 500���� ף������ 10�� ����� 20�� �ߵ���ˮ��3�� �ߵ���� 1�� � 1�� �� 1�� �Ŷ��� 1�� ʥ��10�� �������� 10�� 1#b");
                cm.dispose();
                }
            }
        }
    }



