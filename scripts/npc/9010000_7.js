/*
���ã�����һ��
���ߣ�ӥ��
QQ:79675420
 */

var С��ʹ = "#fItem/Cash/0501/05010006/effect/default/2#";
var ��1 = "#fUI/GuildMark/Mark/Animal/00002011/1#";
var ��2 = "#fUI/GuildMark/Mark/Animal/00002011/2#";
var ��3 = "#fUI/GuildMark/Mark/Animal/00002011/3#";
var ��4 = "#fUI/GuildMark/Mark/Animal/00002011/4#";
var ��5 = "#fUI/GuildMark/Mark/Animal/00002011/5#";
var ��6 = "#fUI/GuildMark/Mark/Animal/00002011/6#";
var ���� = "#fItem/Etc/0403/04031039/info/iconRaw#";
var ��ȯ = "#fItem/Etc/0403/04031040/info/iconRaw#";
var ��� = "#fItem/Etc/0403/04031041/info/iconRaw#";
var ca = java.util.Calendar.getInstance();
var �� = ca.get(java.util.Calendar.YEAR);
var �� = ca.get(java.util.Calendar.MONTH) + 1;
var �� = ca.get(java.util.Calendar.DATE);
var ʱ = ca.get(java.util.Calendar.HOUR_OF_DAY);
var �� = ca.get(java.util.Calendar.MINUTE);
var �� = ca.get(java.util.Calendar.SECOND);
var �� = ca.get(java.util.Calendar.DAY_OF_WEEK) - 1;
var Ƥ���� = 4000001;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
	var c = cm.getPlayer();
    // cm.getPlayer().setBossLog("feiqi");
    // cm.getPlayer().setBossLog("wanju");
    // cm.getPlayer().setBossLog("Ellin");
    // cm.getPlayer().setBossLog("nvsheng");
    
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
        if (status == 0) {
            var text = "";
            text += "#w";
            text += "\t\t\t  #r#e"+С��ʹ+"��ӭ����" + "#k������ս"+С��ʹ+"\r\n"
            text += "#n----------  ������ÿ�ո���һ��������˵��  ---------\r\n";
            text += "\t#n--#bע�⣺#rϵͳ����0������ˢ��ÿ����������--\r\n";
            text += "\t#n--#r����ʱ�������������ȡ����������ǰ���--\r\n";
            text += "\t#b������#v2022468#2�� #v2049100# 1�� "+"#v2340000# 1�� #d���:#b5��#k\r\n";
            //text += "\t\t#v"+2022811+"##z"+2022811+"# * 3\t#v"+2049100+"#������� * 1\r\n";
            //text += "\t\t#v"+3994701+"##z"+3994701+"# * 5\t"+���+"��� * 300000\r\n";
            text += "\t\t#r������#k[#b" + cm.getBossLog("��������") + "#k/#r2#k]��#l";
			text += "\t\t#r  ��ߣ�#k[#b" + cm.getBossLog("�����") + "#k/#r2#k]��#l\r\n";
			text += "\t\t#r���#k[#b" + cm.getBossLog("����ɭ��") + "#k/#r2#k]��#l";
			text += "\t\t#r  ������#k[#b" + cm.getBossLog("������") + "#k/#r2#k]��#l\r\n";
			text += "\t\t#r��գ�#k[#b" + cm.getBossLog("Ů����") + "#k/#r2#k]��#l";
			text += "\t\t#r����ŷ��#k[#b"+cm.getBossLog("����ŷ������Ҷ") + "#k/#r2#k]��#l\r\n";
			text += "\t\t���Ѵ�����������������Ҫ�콱\r\n";
			
            cm.sendYesNo(text);
        } else if (status == 1) {
            if (c.getBossLog("��������") < 2) {
                cm.sendOk("��������δ��ɣ���ǰ����ˣ�" + cm.getBossLog("��������") + "�Ρ�");
                cm.dispose();
				return;
			}
			if (c.getBossLog("�����") < 2) {
                cm.sendOk("��ߴ���δ��ɣ���ǰ����ˣ�" + cm.getBossLog("�����") + "�Ρ�");
                cm.dispose();
				return;
			}
			if (c.getBossLog("����ɭ��") < 2) {
                cm.sendOk("�������δ��ɣ���ǰ����ˣ�" + cm.getBossLog("����ɭ��") + "�Ρ�");
                cm.dispose();
				return;
			}
			if (c.getBossLog("������") < 2) {
                cm.sendOk("�������δ��ɣ���ǰ����ˣ�" + cm.getBossLog("������") + "�Ρ�");
                cm.dispose();
				return;
			}
		    if (c.getBossLog("����ŷ������Ҷ") < 2) {
                cm.sendOk("�������δ��ɣ���ǰ����ˣ�" + cm.getBossLog("����ŷ������Ҷ") + "�Ρ�");
                cm.dispose();
				return;
			}
			 if (c.getBossLog("Ů����") < 2) {
                cm.sendOk("Ů��������δ��ɣ���ǰ����ˣ�" + cm.getBossLog("Ů����") + "�Ρ�");
                cm.dispose();
				return;
			}
            if (cm.getPlayer().getBossLog("һ������") >= 1) {
                cm.sendOk("������Ѿ���ȡ���˱�������");
                cm.dispose();
				return;
			}
            if (cm.getInventory(2).isFull(1)) {
                cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷����в���.");
                cm.dispose();
                return;
            }
            if (cm.getInventory(4).isFull(0)) {
                cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷����в���.");
                cm.dispose();
                return;
            }
            if (cm.getInventory(3).isFull(0)) {
                cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷����в���.");
                cm.dispose();
                return;
            }
            else {
                //cm.gainItem(2022811, 3);
				cm.gainItem(2022468, 2);
                cm.gainItem(2340000, 1);
				cm.gainItem(2049100, 1);
				//cm.�������(5);
                //cm.gainMeso(300000);
                //cm.gainNX(2000);

				cm.getPlayer().modifyCSPoints(1,10000,true);
				//cm.getPlayer().modifyCSPoints(2,4000,true);
                c.setBossLog("һ������");
                cm.sendOk("�����Է����������ڣ���ȷ�ϡ�");
				cm.ȫ����ɫ����("[��������] : ��ϲ��� "+cm.getPlayer().getName()+" �ɹ���ȡ�˸���һ�������Ľ�����")
                cm.dispose();
			}
            
				
		}
	}
}