/* 
 * �ű�����: cm
 * �ű���;: ��ȯ�н�
 * �ű�����: ����ؼ
 * ����ʱ��: 2014/12/18
 */
 
var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var mats;
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
                cm.sendNext("�����Ҫ��ȯ�н�����������Ұɡ�");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            var gsjb = "";
            gsjb ="  #e�˴��һ� #b- ��Ҷ - #r1��1�һ���\r\n  #r��Ҷ��÷�ʽ: #v4001126#\r\n  ���κι����м��ʱ�\r\n";
            gsjb +="  ��ǰ��ȯ:#r" + cm.getPlayer().getCSPoints(1) + "#k\r\n\r\n#d";
            gsjb +="#L3##b#z4001126#�һ���ȯ #fUI/Basic/BtHide3/mouseOver/0# #b���� - (#r1 = 1#b)#l\r\n\r\n\r\n";
            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 0) {
                if (cm.getPlayer().getCSPoints(1) / 100 == 0) {
                    cm.sendNext("�����ʻ���ȯ�����޷��һ��������ҡ�");
                    status = -1;
                } else {
                    beauty = 1;
                    cm.sendGetNumber("������#r��ȯ#k�һ�#b#z4000463##k������:\r\n#b���� - (#r100 = 1#b)\r\n����˻���Ϣ -  ��ȯ����: #r" +
                            cm.getPlayer().getCSPoints(1) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(1) / 100);

                }

            
            } else if (selection == 1) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4000463).iterator();
                if (cm.haveItem(4000463) == 0) {
                    cm.sendNext("�����ʻ�#z4000463#��������һ���ȯ��");
                    status = -1;
                } else {
                    beauty = 2;
                    cm.sendGetNumber("������#b#z4000463##k�һ�#r��ȯ#k������:\r\n#b���� - (#r1 = 100#b)\r\n����˻���Ϣ - \r\n    ��ȯ����: #r" +
                            cm.getPlayer().getCSPoints(1) + "    \r\n", 1, 1, iter.next().getQuantity());

                }
            } else if (selection == 3) {
                var iter = cm.getChar().getInventory(MapleInventoryType.ETC).listById(4001126).iterator();
                if (cm.haveItem(4001126) == 0) {
                    cm.sendNext("�����ʻ�#v4001126#��������һ���ȯ��");
                    status = -1;
                } else {
                    beauty = 3;
                    cm.sendGetNumber("������#b#z4001126##k�һ�#r��ȯ#k������:\r\n#b���� - (#r1 = 1#b)\r\n����˻���Ϣ - \r\n    ��ȯ����: #r" +
                            cm.getPlayer().getCSPoints(1) + "   \r\n", 1, 1, iter.next().getQuantity());

                }

            }


        } else if (status == 2) {
            if (beauty == 1) {
                if (selection <= 0) {
                    cm.sendOk("����Ķһ����ִ���");
                    cm.dispose();
                } else if (cm.getPlayer().getCSPoints(1) >= selection * 100) {
                    cm.gainD(-selection * 100);
                    cm.gainItem(4000463, selection);
                    cm.sendOk("���ɹ��� #r " + (selection * 100) + " #k��ȯ �һ��� ��������#v4000463# x #r" + selection + " #k")
                } else {
                    cm.sendNext("�һ�" + selection + "��#z4000463##v4000463# ��Ҫ#r " + (selection * 100) + "#k��ȯ����û���㹻�ĵ�ȯ��");
                    cm.dispose();
                }
            } else if (beauty == 2) {
                if (cm.haveItem(4000463, selection)) {
                    cm.gainItem(4000463, -selection);
                    cm.gainD(+100 * selection);
                    cm.sendOk("���ɹ���#z4000463##v4000463# x #r" + selection + " #k��Ϊ#r " + (100 * selection) + " #k��ȯ��");
                } else {
                    cm.sendNext("������������������޷��һ���ȯ��");
                    cm.dispose();
                }

            } else if (beauty == 3) {
                if (cm.haveItem(4001126, selection)) {
                    cm.gainItem(4001126, -selection);
                    cm.gainNX(+Math.floor(1 * selection));
                    cm.sendOk("���ɹ���#z4001126##v4001126# x #r" + selection + " #k��Ϊ#r " + Math.floor(1 * selection) + " #k��ȯ��");
                } else {
                    cm.sendNext("������������������޷��һ���ȯ��");
                    cm.dispose();
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}
