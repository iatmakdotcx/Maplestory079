/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����     
 ��ϵ��ʽ��2412614144
 =====================
 */

var status = 0;
var fee;//�Լ��¶��ٶ���ѡ��
var chance = Math.floor(Math.random()*4+1);
var mingzi = "��������ϵͳ";
var zuidi = "500";//��Ͷ���
var zuididoudou = 500;//��Ͷ���
var zuigao = "1000";//��߶���
var zuigaodoudou = 1000;//��߶���

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
            cm.sendYesNo("\t\t#e��ӭ����#r" + cm.getChannelServer().getServerName() + "#k-#d" + mingzi + "#n#k\r\n\r\n��עҪ��:���" + zuidi + "����-------���" + zuigao + "����");
        } else if (status == 1) {
            cm.sendGetText("������ע���ٶ�����?���Ӯ�˵Ļ����Ի��3��������,�Ǻ�,������˵��!����������Ҫ���ʵĶ�����!���˱���!");
        } else if (status == 2) {
			
            fee = cm.getText();
            cm.sendYesNo("��ȷ��Ҫ��ע #r" + fee + "#k ������?���ȼ������û����ô�ඹ��Ŷ!");
        } else if (status == 3) {
            if (cm.getBeans() < fee) {
                cm.sendOk("Ŷ�ǣ�������˼��û��ô�ඹ���ˣ�ȥ׬�㶹�������ɣ���ɲ�����ѵ�!");
                cm.dispose();
			} else if (cm.getBeans() < zuididoudou) {
                cm.sendOk("�Բ���,�����˺Ų���#r" + zuidi + "����#k,���Բ��ܲ��ڴ˴���ע");
                cm.dispose();
            } else if (cm.getText() < zuididoudou) {
                cm.sendOk("�Բ���,�����ע:#r" + zuidi + "����#k,���Բ��ܲ��ڴ˴���ע!");
                cm.dispose();
            } else if (cm.getText() > zuigaodoudou) {
                cm.sendOk("�Բ���,�����ע:#r" + zuigao + "����#k,���Բ��ܲ��ڴ˴���ע!");
                cm.dispose();
            } else {
                 if (chance <= 1) { 
	                    cm.gainBeans(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����"); 
                        //cm.laba(cm.getPlayer().getName() + "���ĳ����桻" + " : " + "�ڶ����ĳ����ˣ���Ұ�οһ�°�",9);
	                    cm.dispose(); 
	                } 
	                else if (chance == 2) { 
	                    cm.gainBeans(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����"); 
                        //cm.laba(cm.getPlayer().getName() + "���ĳ����桻" + " : " + "�ڶ����ĳ����ˣ���Ұ�οһ�°�",9);
	                    cm.dispose(); 
	                } 
	                else if (chance == 3) { 
	                    cm.gainBeans(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����"); 
                        //cm.laba(cm.getPlayer().getName() + "���ĳ����桻" + " : " + "�ڶ����ĳ����ˣ���Ұ�οһ�°�",9);
	                    cm.dispose(); 
	                } 
                else if (chance >= 4) {
					cm.gainBeans(-fee); 
                    cm.gainBeans(fee * 3);                   
                    cm.sendNext("#r��������ϲ��#k! ��Ӯ��! ���3���Ķ����⳥");
                    cm.laba(cm.getPlayer().getName() + "���ĳ����桻" + " : " + "�ڶ����ĳ�Ӯ��3���Ķ��������һ��ף������",9);
                    cm.dispose();
                }
            }
        }
    }
}
