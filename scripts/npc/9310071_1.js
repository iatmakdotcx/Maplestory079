
var status = 0;
var fee;//�Լ��¶��ٵ�ȯѡ��
var chance = Math.floor(Math.random()*5);
var mingzi = "��ȯ����ϵͳ";
var zuidi = "300";//��͵�ȯ
var zuididianjuan = 300;//��͵�ȯ
var zuigao = "500";//��ߵ�ȯ
var zuigaodianjuan = 500;//��ߵ�ȯ

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("��ӭ�´ι���,�ټ�!");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendYesNo("\t\t#e��ӭ����#r" + cm.getChannelServer().getServerName() + "#k-#d" + mingzi + "#n#k\r\n\r\n��עҪ��:���" + zuidi + "��ȯ-------���" + zuigao + "��ȯ");
        } else if (status == 1) {
            cm.sendGetText("������ע���ٵ�ȯ��?���Ӯ�˵Ļ����Ի��3��������,�Ǻ�,������˵��!����������Ҫ���ʵĵ�ȯ��!���˱���!");
        } else if (status == 2) {
			
            fee = cm.getText();
            cm.sendYesNo("��ȷ��Ҫ��ע #r" + fee + "#k ��ȯ��?���ȼ������û����ô���ȯŶ!");
        } else if (status == 3) {
            if (cm.getPlayer().getCSPoints(1) < fee) {
                cm.sendOk("Ŷ�ǣ�������˼��û��ô���ȯ�ˣ�ȥ׬���ȯ�����ɣ���ɲ�����ѵ�!");
                cm.dispose();
			} else if (cm.getPlayer().getCSPoints(1) < zuididianjuan) {
                cm.sendOk("�Բ���,�����˺Ų���#r" + zuidi + "��ȯ#k,���Բ��ܲ��ڴ˴���ע");
                cm.dispose();
            } else if (cm.getText() < zuididianjuan) {
                cm.sendOk("�Բ���,�����ע:#r" + zuidi + "��ȯ#k,���Բ��ܲ��ڴ˴���ע!");
                cm.dispose();
            } else if (cm.getText() > zuigaodianjuan) {
                cm.sendOk("�Բ���,�����ע:#r" + zuigao + "��ȯ#k,���Բ��ܲ��ڴ˴���ע!");
                cm.dispose();
            } else {
                 if (chance <= 1) { 
	                    cm.gainNX(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����"); 
                        //cm.laba(cm.getPlayer().getName() + "���ĳ����桻" + " : " + "�ڵ�ȯ�ĳ����ˣ���Ұ�οһ�°�",9);
	                    cm.dispose(); 
	                } 
	                else if (chance == 2) { 
	                    cm.gainNX(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����"); 
                        //cm.laba(cm.getPlayer().getName() + "���ĳ����桻" + " : " + "�ڵ�ȯ�ĳ����ˣ���Ұ�οһ�°�",9);
	                    cm.dispose(); 
	                } 
	                else if (chance == 3) { 
	                    cm.gainNX(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����"); 
                        //cm.laba(cm.getPlayer().getName() + "���ĳ����桻" + " : " + "�ڵ�ȯ�ĳ����ˣ���Ұ�οһ�°�",9);
	                    cm.dispose(); 
	                } 
					else if (chance == 4) { 
	                    cm.gainNX(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����"); 
                        //cm.laba(cm.getPlayer().getName() + "���ĳ����桻" + " : " + "�ڵ�ȯ�ĳ����ˣ���Ұ�οһ�°�",9);
	                    cm.dispose(); 
	                } 
					else if (chance >= 5) {
						cm.gainNX(-fee); 
						cm.gainNX(fee * 3);                   
						cm.sendNext("#r��������ϲ��#k! ��Ӯ��! ���3���ĵ�ȯ�⳥");
						cm.laba(cm.getPlayer().getName() + "���ĳ����桻" + " : " + "�ڵ�ȯ�ĳ�Ӯ��3���ĵ�ȯ�����һ��ף������",9);
						cm.dispose();
                }
            }
        }
    }
}
