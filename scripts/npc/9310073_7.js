/* 
 * �ű�����: cm
 * �ű���;: ����н�
 * �ű�����: ����ؼ
 * ����ʱ��: 2014/12/18
 */

var status = -1;
var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var ����Ҷ ="#fMap/MapHelper/weather/maple/3#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var beauty = 0;
var tosend = 0;
var sl;
var mats;
var dds;
function start() {
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
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendNext("�����Ҫ����н�����������Ұɡ�");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {	
            var gsjb = "";
				gsjb = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n";
				gsjb += "              #r��ӭ��������ð�յ�ϴѪϴ��#k\r\n";
				gsjb += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
				gsjb += "   #rע�⣺HP��MP���޲��ɳ���3W�������ɫ�����ߵ���BUG#k\r\n";
				gsjb += "         #L1#"+С�̻�+"#b���ϴѪ#r������25000��1��"+С�̻�+"#l\r\n\r\          #L2#"+С�̻�+"#b���ϴ��#r������20000��1��"+С�̻�+"#l\r\n\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 5 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 1) {
                if (cm.getMeso() < 24000) {
                    cm.sendNext("����ӵ�еĽ�Ҳ��㣡");
                    status = -1;
                } else {
                    beauty = 1;
					cm.sendGetNumber("�������������õ�#rHP����ֵ#k:\r\n#b��ǰӵ�н��������#r"+cm.getMeso()+"\r\n", 1, 1, 10000);
                }
            }
			else if (selection == 2) {
                if (cm.getMeso() < 20000) {
                    cm.sendNext("����ӵ�еĽ�Ҳ��㣡");
                    status = -1;
                } else {
                    beauty = 2;
					cm.sendGetNumber("�������������õ�#rMP����ֵ#k:\r\n#b��ǰӵ�н��������#r"+cm.getMeso()+"\r\n", 1, 1, 10000);
                }
            }
        } else if (status == 2) {
			if (beauty == 1) {
				var HP = cm.getPlayer().getStat().getMaxHp()
                 if (cm.getMeso() >= 25000*selection) {
                    cm.gainMeso(-25000*selection);
					cm.getPlayer().getStat().setMaxHp(HP+selection);
				    cm.getPlayer().fakeRelog();
                    cm.sendOk("��ɹ�����#r���*"+selection*25000+"#k���#r"+selection+"HP���ޣ�#k#n");
                } else {
                    cm.sendNext("��ӵ�еĽ�Ҳ�����֧��������ã�");
                    cm.dispose();
                }
            }
			else if (beauty == 2) {
				var MP = cm.getPlayer().getStat().getMaxMp()
                 if (cm.getMeso() >= 20000*selection) {
                    cm.gainMeso(-20000*selection);
					cm.getPlayer().getStat().setMaxMp(MP+selection);
				    cm.getPlayer().fakeRelog();
                    cm.sendOk("��ɹ�����#r���*"+selection*20000+"#k���#r"+selection+"MP���ޣ�#k#n");
                } else {
                    cm.sendNext("��ӵ�еĽ�Ҳ�����֧��������ã�");
                    cm.dispose();
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}
