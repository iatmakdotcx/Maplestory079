var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var nx;
var ���Ҷ = "#fMap/MapHelper/weather/maple/1#";
var ����Ҷ = "#fMap/MapHelper/weather/maple/3#";
var С�̻� = "#fMap/MapHelper/weather/squib/squib4/1#";
var status;
var selstatus = -1;
var inventoryType;
var saveSlot;
var saveQuantity;

var itemlist = Array(//������ӵ���  xxxx, ��ʽ��
        4021000,
        4021001,
        4021002,
        4021003,
        4021004,
        4021005,
        4021006,
        4021007,
        4021008,
        4011006,
        4011005,
        4011004,
        4011003,
        4011002,
        4011001,
        4011000);
var itemlist1 = Array(
        4004000,
        4004001,
        4004002,
        4004003,
        4004004,
        4010000,
        4010001,
        4010002,
        4010003,
        4010004,
        4010005,
        4010006,
        4020000,
        4020001,
        4020002,
        4020003,
        4020004,
        4020005,
        4020006,
        4020007,
        4020008);
var bagitemlist = Array();
var stones = Array();
function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
            text = "                     ��ʯ�ֿ�ϵͳ\r\n";
            text += "       #L0#��ų�Ʒ��ʯ#l	    #L1#ȡ�س�Ʒ��ʯ#l\r\n\r\n";
            text += "       #L3##k���ɢװĸ��#l	    #L4#ȡ��ɢװĸ��#l\r\n\r\n";
            text += "     #L2##rһ����ų�Ʒ��ʯ#l    #L5##rһ�����ɢװĸ��#l\r\n\r\n";
            cm.sendSimple(text);
        } else if (a == 1) {
            if (selection == 0) {
                nx = 0;
                text = "��ѡ����Ҫ��ŵĿ�ʯ��\r\n";
                for (var i = 0; i < itemlist.length; i++) {
                    text += "#L" + i + "##k��ţ�#b#v" + itemlist[i] + "##z" + itemlist[i] + "##l\r\n\r\n";
                    text += " #d- ��ǰ������ӵ�У�#r#c" + itemlist[i] + "##d ����\r\n";
                    if (i != 0 && (i + 1) % 99 == 0) {
                        text += "\r\n";
                    }
                }
                cm.sendSimple(text);
            } else if (selection == 1) {
                nx = 1;
                text = "��ѡ����Ҫȡ�صĿ�ʯ��\r\n";
                for (var i = 0; i < itemlist.length; i++) {
                    text += "#L" + i + "##kȡ�أ�#b#v" + itemlist[i] + "##z" + itemlist[i] + "##l\r\n\r\n";
                    text += " #d- ��ǰ�ֿ���ӵ�У�#r" + cm.getPlayer().getBossLog("" + itemlist[i] + "", 1) + "#d ����\r\n";
                    if (i != 0 && (i + 1) % 99 == 0) {
                        text += "\r\n";
                    }
                }
                cm.sendSimple(text);
            } else if (selection == 2) {
                nx = 2;
                text = "��ȷ����Ҫ��ŵĿ�ʯ��\r\n";
                var havestone = 0;
                //text += cm.getPlayer().getItemQuantity(itemlist[0], false);
                for (var i = 0; i < itemlist.length; i++) {
                    stones[i] = cm.getPlayer().getItemQuantity(itemlist[i], false);
                    if (stones[i] != 0) {
                        //cm.getPlayer().setBossLog("" + itemlist[i] + "", 1, stones[i]);
                        text += " #v" + itemlist[i] + "# X " + stones[i] + "  ";
                        havestone++;
                    }
                }
                if (havestone == 0) {
                    cm.sendOk("��ı�����û���κ�ĸ��.");
                    cm.dispose();
                }
                cm.sendYesNo(text);
                a++;
                if (selstatus == -1) {
                    selstatus = selection;
                }
            } else if (selection == 3) {
                nx = 3;
                text = "��ѡ����Ҫ��ŵ�ĸ��\r\n";
                for (var i = 0; i < itemlist1.length; i++) {
                    text += "#L" + i + "##k��ţ�#b#v" + itemlist1[i] + "##z" + itemlist1[i] + "##l\r\n\r\n";
                    text += " #d- ��ǰ������ӵ�У�#r#c" + itemlist1[i] + "##d ����\r\n";
                    if (i != 0 && (i + 1) % 99 == 0) {
                        text += "\r\n";
                    }
                }
                cm.sendSimple(text);
                if (selstatus == -1) {
                    selstatus = selection;
                }
            } else if (selection == 4) {
                nx = 4;
                text = "��ѡ����Ҫȡ�ص�ĸ��\r\n";
                for (var i = 0; i < itemlist1.length; i++) {
                    text += "#L" + i + "##kȡ�أ�#b#v" + itemlist1[i] + "##z" + itemlist1[i] + "##l\r\n\r\n";
                    text += " #d- ��ǰ�ֿ���ӵ�У�#r" + cm.getPlayer().getBossLog("" + itemlist1[i] + "", 1) + "#d ����\r\n";
                    if (i != 0 && (i + 1) % 99 == 0) {
                        text += "\r\n";
                    }
                }
                cm.sendSimple(text);
                if (selstatus == -1) {
                    selstatus = selection;
                }
            } else if (selection == 5) {
                nx = 5;
                text = "��ȷ����Ҫ��ŵ�ĸ��\r\n";
                var havestone = 0;
                for (var i = 0; i < itemlist1.length; i++) {
                    stones[i] = cm.getPlayer().getItemQuantity(itemlist1[i], false);
                    if (stones[i] != 0) {
                        text += " #v" + itemlist1[i] + "# X " + stones[i] + "  ";
                        havestone++;
                    }

                }
                if (havestone == 0) {
                    cm.sendOk("��ı�����û���κ�ĸ��.");
                    cm.dispose();
                }
                cm.sendYesNo(text);
                a++;
                if (selstatus == -1) {
                    selstatus = selection;
                }
            }
        } else if (a == 2) {
            if (nx == 0) {
                selects = selection;
                nx = 0;
                var txt = " - ��ǰ��ſ�ʯ��#r#i" + itemlist[selects] + "\r\n\r\n"
                    txt += " #d- ��ǰ������ӵ�У�#r#c" + itemlist[selects] + "##d ����\r\n"
                    txt += " #k- �������ŵ��ߵ���ֵ��\r\n\r\n"
                    cm.sendGetNumber(txt, cm.itemQuantity(itemlist[selects]), 1, cm.itemQuantity(itemlist[selects]));
            } else if (nx == 1) {
                nx = 1;
                selects = selection;
                var txt = " - ��ǰȡ����ʯ��#r#i" + itemlist[selects] + "\r\n\r\n"
                    txt += " #d- ��ǰ�ֿ���ӵ�У�#r" + cm.getPlayer().getBossLog("" + itemlist[selects] + "", 1) + "#d ����\r\n"
                    txt += " #k- ������ȡ�����ߵ���ֵ��\r\n\r\n"
                    cm.sendGetNumber(txt, cm.getPlayer().getBossLog("" + itemlist[selects] + "", 1), 1, cm.getPlayer().getBossLog("" + itemlist[selects] + "", 1));
            } else if (nx == 3) {
                nx = 3;
                selects = selection;
                var txt = " - ��ǰ���ĸ��#r#i" + itemlist1[selects] + "\r\n\r\n"
                    txt += " #d- ��ǰ������ӵ�У�#r#c" + itemlist1[selects] + "##d ����\r\n"
                    txt += " #k- ��������ĸ�����ֵ��\r\n\r\n"
                    cm.sendGetNumber(txt, cm.itemQuantity(itemlist1[selects]), 1, cm.itemQuantity(itemlist1[selects]));
            } else if (nx == 4) {
                nx = 4;
                selects = selection;
                var txt = " - ��ǰȡ����ʯ��#r#i" + itemlist1[selects] + "\r\n\r\n"
                    txt += " #d- ��ǰ�ֿ���ӵ�У�#r" + cm.getPlayer().getBossLog("" + itemlist1[selects] + "", 1) + "#d ����\r\n"
                    txt += " #k- ������ȡ��ĸ�����ֵ��\r\n\r\n"
                    cm.sendGetNumber(txt, cm.getPlayer().getBossLog("" + itemlist1[selects] + "", 1), 1, cm.getPlayer().getBossLog("" + itemlist1[selects] + "", 1));
            }

        } else if (a == 3) {
            if (nx == 0) {
                jg = selection
                    if ((cm.getPlayer().getBossLog("" + itemlist[selects] + "", 1) + jg) > 30000) {
                        cm.sendOk("�洢�������ܴ���3W��");
                        cm.dispose();
                        return;
                    }
                    cm.getPlayer().setBossLog("" + itemlist[selects] + "", 1, jg);
                cm.gainItem(itemlist[selects], -jg);
                cm.sendOk("���� #z" + itemlist[selects] + "# x " + jg + " �ɹ���");
                a = -1;
            } else if (nx == 1) {
                jg = selection
                    
                    cm.getPlayer().setBossLog("" + itemlist[selects] + "", 1, -jg);
                cm.gainItem(itemlist[selects], jg);
                cm.sendOk("ȡ�� #z" + itemlist[selects] + "# x " + jg + " �ɹ���");
                a = -1;
            } else if (nx == 2) {
                var havestone = 0;
                var text1 = "�ɹ�����\r\n";
                for (var i = 0; i < itemlist.length; i++) {
                    stones[i] = cm.getPlayer().getItemQuantity(itemlist[i], false);
                    if (stones[i] != 0) {
						
						if ((cm.getPlayer().getBossLog("" + itemlist[i] + "", 1) + stones[i]) > 30000) {
							continue;//�洢����Ҫ�����ģ�ֱ�Ӳ��档
						}
					
                        cm.gainItem(itemlist[i], -stones[i]);
                        cm.getPlayer().setBossLog("" + itemlist[i] + "", 1, stones[i]);
                        text1 += "#v" + itemlist[i] + "# X " + stones[i] + "  ";
                        havestone++;
                    }
                }
                if (havestone != 0) {
                    cm.sendOk(text1);
                    cm.dispose();
                } else {
                    cm.sendOk("��ı�����û���κ�ĸ��.");
                    cm.dispose();
                }
            } else if (nx == 3) {
                jg = selection
                    if ((cm.getPlayer().getBossLog("" + itemlist[selects] + "", 1) + jg) > 30000) {
                        cm.sendOk("�洢�������ܴ���3W��");
                        cm.dispose();
                        return;
                    }
                    cm.getPlayer().setBossLog("" + itemlist1[selects] + "", 1, jg);
                cm.gainItem(itemlist1[selects], -jg);
                cm.sendOk("���� #v" + itemlist1[selects] + "# x " + jg + " �ɹ���");
                a = -1;
            } else if (nx == 4) {
                jg = selection
                    
                    cm.getPlayer().setBossLog("" + itemlist1[selects] + "", 1, -jg);
                cm.gainItem(itemlist1[selects], jg);
                cm.sendOk("ȡ�� #v" + itemlist1[selects] + "# x " + jg + " �ɹ���");
                a = -1;
            } else if (nx == 5) {
                var havestone = 0;
                var text1 = "�ɹ�����\r\n";
                for (var i = 0; i < itemlist1.length; i++) {
                    stones[i] = cm.getPlayer().getItemQuantity(itemlist1[i], false);
                    if (stones[i] != 0) {
						
						if ((cm.getPlayer().getBossLog("" + itemlist1[i] + "", 1) + stones[i]) > 30000) {
							continue;//�洢����Ҫ�����ģ�ֱ�Ӳ��档
						}
						
                        cm.gainItem(itemlist1[i], -stones[i]);
                        cm.getPlayer().setBossLog("" + itemlist1[i] + "", 1, stones[i]);
                        text1 += "#v" + itemlist1[i] + "# X " + stones[i] + "  ";
                        havestone++;
                    }
                }
                if (havestone != 0) {
                    cm.sendOk(text1);
                    cm.dispose();
                } else {
                    cm.sendOk("��ı�����û���κ�ĸ��.");
                    cm.dispose();
                }
            }
        } else if (a == 4) {
            cm.sendOk("ף����Ϸ���~");
            a = 0;
            cm.dispose();
        }
    }
}

// function action(mode, type, selection) {
// if (mode <= 0) {
// cm.dispose();
// return;
// } else {
// if (mode == 1) {
// status++;
// } else {
// status--;
// }
// switch (selstatus) {
// case 0:
// deleteItemBySlot(selection);
// break;
// case 1:
// cm.openNpc(cm.getNpc(), 501);
// }
// }
// }
// }