/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����     
 ��ϵ��ʽ��2412614144
 =====================
 */
 importPackage(net.sf.sunms.client);

var status = 0;
var fee;//�Լ��¶��ٽ��ѡ��
var chance = Math.floor(Math.random()*4+1);
var mingzi = "��Ҳ���ϵͳ";
var zuidi = "10��";//��ͽ��
var zuidijinbi = 100000;//��ͽ��
var zuigao = "3��";//��߽��
var zuigaojinbi = 300000000;//��߽��
var beibaojb = "12��";//�������ܳ������
var beibaojinbi = 1500000000;//�������ܳ������

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
            cm.sendYesNo("\t\t#e��ӭ����#r" + cm.getChannelServer().getServerName() + "#k-#d" + mingzi + "#n#k\r\n\r\n��עҪ��:���" + zuidi + "���-------���" + zuigao + "���\r\n�������:���ó���" + beibaojb + "");
        } else if (status == 1) {
            cm.sendGetText("������ע���ٽ����?���Ӯ�˵Ļ����Ի��3��������,�Ǻ�,������˵��!����������Ҫ���ʵĽ���!���˱���!");
        } else if (status == 2) {
			
            fee = cm.getText();
            cm.sendYesNo("��ȷ��Ҫ��ע #r" + fee + "#k �����?���ȼ������û����ô��ǮŶ!");
        } else if (status == 3) {
            if (cm.getMeso() < fee) {
                cm.sendOk("Ŷ�ǣ�������˼��û��ô��Ǯ�ˣ�ȥ׬��Ǯ�����ɣ���ɲ�����ѵ�,��ȥ����һЩ����������!");
                cm.dispose();
			} else if (cm.getMeso() < zuidijinbi) {
                cm.sendOk("�Բ���,����������#r" + zuidi + "���#k,���Բ��ܲ��ڴ˴���ע");
                cm.dispose();
            } else if (cm.getMeso() > beibaojinbi) {
                cm.sendOk("�Բ���,������������#r" + beibaojb + "���#k,���Բ��ܲ��ڴ˴���ע!");
                cm.dispose();
            } else if (cm.getText() < zuidijinbi) {
                cm.sendOk("�Բ���,�����ע:#r" + zuidi + "���#k,���Բ��ܲ��ڴ˴���ע!");
                cm.dispose();
            } else if (cm.getText() > zuigaojinbi) {
                cm.sendOk("�Բ���,�����ע:#r" + zuigao + "���#k,���Բ��ܲ��ڴ˴���ע!");
                cm.dispose();
            } else {
                 if (chance <= 1) { 
	                    cm.gainMeso(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����"); 
                        cm.laba(cm.getPlayer().getName() + "���ĳ����桻" + " : " + "�ڶĳ����ˣ���Ұ�οһ�°�",9);
	                    cm.dispose(); 
	                } 
	                else if (chance == 2) { 
	                    cm.gainMeso(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����"); 
                        cm.laba(cm.getPlayer().getName() + "���ĳ����桻" + " : " + "�ڶĳ����ˣ���Ұ�οһ�°�",9);
	                    cm.dispose(); 
	                } 
	                else if (chance == 3) { 
	                    cm.gainMeso(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����"); 
                        cm.laba(cm.getPlayer().getName() + "���ĳ����桻" + " : " + "�ڶĳ����ˣ���Ұ�οһ�°�",9);
	                    cm.dispose(); 
	                } 
                else if (chance >= 4) {
                    cm.gainMeso(fee * 2);                   
                    cm.sendNext("#r��������ϲ��#k! ��Ӯ��! ���2���Ľ���⳥");
                    cm.laba(cm.getPlayer().getName() + "���ĳ����桻" + " : " + "�ڶĳ�Ӯ��2���Ľ�ң����һ��ף������",9);
                    cm.dispose();
                }
            }
        }
    }
}
