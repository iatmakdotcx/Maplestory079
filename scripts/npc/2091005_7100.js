var ��ͷ = "#fUI/Basic/icon/arrow#";
var status = 0;
//ע������
var weapens1 = [
    4002000,
    4002001,
    4002002,
    4002003,
    4031558,
    4031559,
    4031560,
    4031561,
    4001230
];

//ǿ��ͻ������
var weapens2 = [
    1302333,
    1312199,
    1322250,
    1332274,
    1342101,
    1372222,
    1382259,
    1402251,
    1412177,
    1422184,
    1432214,
    1442268,
    1452252,
    1462239,
    1472261,
    1482216,
    1492231
];

//����֮��
var weapSoul = [
    //����֮��id����ü��ʣ���������
    [4031868, 90,  5, "��Ʒ"],
    [4031868, 60, 10, "��Ʒ"],
    [4031868, 30, 15, "��Ʒ"],
    [4031868, 5,  20, "��Ʒ"]
];

//����ͻ��
var tupo = [
    //��ʼ������ͻ�ƺ��������ɹ��ʣ�ʧ���Ƿ�������㣬ʧ�ܺ󽵼����ʣ�ʧ�ܺ����������ʣ�����ͻ��ʯ�������ɹ��󹥻����ɹ���ȫ���ԣ����Ľ�ң����ķ�Ҷ
    ["��ͨ��������", "��Ʒ��������", 100, false, 0, 0, 1, 250, 50, 1000000, 100, "��Ʒ"],
    ["��Ʒ��������", "��Ʒ��������", 80, true, 0, 0, 1, 300, 100, 1000000, 100, "��Ʒ"],
    ["��Ʒ��������", "��Ʒ��������", 60, true, 20, 5, 1, 400, 200, 1000000, 100, "��Ʒ"],
    ["��Ʒ��������", "��Ʒ��������", 40, true, 40, 15, 1, 500, 300, 1000000, 100, "��Ʒ"],
    ["��Ʒ��������", "ʥ����������", 25, true, 60, 30, 1, 666, 888, 1000000, 100, "ʥ��"],
    ["ʥ����������", "�񼶰�������", 10, true, 80, 50, 1, 1111, 2222, 1000000, 100, "��"]
]

//ͻ�����ĵ���Ʒ
var useItemid = 4031348;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        var txt = "\t\t\t\t #b��ӭ����-��������ϵͳ#n#k\r\n";
        txt += "  ������������������������\r\n";
        txt += "��������������������������������������������������\r\n\r\n\r\n";
        txt += "\t\t\t  #L10##r#e��������ϵͳ˵��#l#k\r\n\r\n"
        txt += "  #L1##b#e��ʯע��#l\t#L2##b#e����ǿ��#l\t#L3##b#e����ͻ��#l#k\r\n\r\n\r\n\r\n"
        txt += "����������������������������������������������\r\n"
        txt += "  ����������������������\r\n";
        cm.sendSimple(txt);
    } else if (status == 1) {
        switch (selection) {
            case 1:
                weap = cm.getInventory(4).getItem(1);
                if (weap == null) {
                    cm.dispose();
                    cm.sendOk("��������һ���ǿյ�\r\n�뽫 #b�� #rע�����ĵĵ��� #b�� #k������������һ��");
                    return;
                }
                var eq = cm.getInventory(4).getItem(2);
                if (!checkContians(weap.getItemId(), weapens1)) {
                    cm.dispose();
                    cm.sendOk("��������һ���ǿ�������ע��ĵ���Ŷ����ȷ��");
                    return;
                } else if (eq == null) {
                    cm.dispose();
                    cm.sendOk("�������ڶ����ǿյģ��뽫#v4031466#�ŵ���������һ��");
                    return;
                } else if (eq.getItemId() != 4031466) {
                    cm.dispose();
                    cm.sendOk("�������ڶ�����#v4031466#���뽫#v4031466#�ŵ��������ڶ���");
                    return;
                }
                var eq2 = eq.copy();
                eq2.setRate((eq2.getRate() + 10)>100?100:(eq2.getRate() + 10));
                eq2.setQuantity(1);
                eq2.setOwner("����" + eq2.getRate());
                cm.removeSlot(4, 1, 1);
                cm.removeSlot(4, 2, 1);
                if (eq2.getRate() >= 100) {
                    var ran = Math.floor(Math.random() * 100);
                    var finalGift = new Array();
                    var owner = "";
                    for (var i in weapSoul) {
                        if (ran < weapSoul[i][1]) {
                            finalGift.push(weapSoul[i])
                        }
                    }
                    var finalItemid = 0;
                    if (finalGift.length > 0) {
                        var ran2 = Math.floor(Math.random() * finalGift.length);
                        finalItemid = finalGift[ran2][0];
                        owner = finalGift[ran2][3]
                    } else {
                        //���״�Ʒ
                        finalItemid = weapSoul[0][0];
                        owner = weapSoul[0][3];
                    }
                    cm.gainItem(finalItemid, 1, false, 0, -1, owner);
                    cm.sendOk(owner+"ע��ɹ�����ϲ����#v"+finalItemid+"#");
                } else {
                    cm.addFromDrop(eq2);
                    cm.sendOk("ע��ɹ�����ǰ���ȣ�#B" + eq2.getRate() + "#��"+eq2.getRate()+"/100��");
                }
                cm.dispose();
                return;
            case 2:
                weap = cm.getInventory(1).getItem(1);
                if (weap == null) {
                    cm.dispose();
                    cm.sendOk("װ������һ���ǿյ�\r\n�뽫 #b�� #rע�����ĵĵ��� #b�� #k����װ������һ��");
                    return;
                }
                if (!checkContians(weap.getItemId(), weapens2)) {
                    cm.dispose();
                    cm.sendOk("װ������һ���ǿ�������ǿ��������Ŷ����ȷ��");
                    return;
                }
                if (weap.getRate() >= 100) {
                    cm.dispose();
                    cm.sendOk("��ǰǿ����������100%���Ͽ�ȥͻ�ưɣ�");
                    return;
                }
                var eq = cm.getInventory(4).getItem(1);
                if (eq == null) {
                    cm.dispose();
                    cm.sendOk("��������һ���ǿյģ��뽫Ҫ���ĵ�����֮��ŵ���������һ��");
                    return;
                }
                var list = checkContians2(eq, weapSoul);
                if (list == null) {
                    cm.dispose();
                    cm.sendOk("��������һ���ǿ�����ǿ��������֮�꣬�뽫Ҫ���ĵ�����֮��ŵ���������һ��");
                    return;
                }
                var weap2 = weap.copy();
                weap2.setRate((weap2.getRate() + list[2])>100?100:(weap2.getRate() + list[2]));
                var ow = "";
                if (weap2.getGrade() > 0) {
                    ow = tupo[weap2.getGrade() - 1][11]
                }
                weap2.setOwner(ow+"����"+weap2.getRate());
                cm.removeSlot(1, 1, 1);
                cm.removeSlot(4, 1, 1);
                cm.addFromDrop(weap2);
                cm.sendOk("����ǿ���ɹ���ǿ�����ȣ�#B" + weap2.getRate() + "#��"+weap2.getRate()+"/100��");
                cm.���ȹ���(5076000, "��ϲ ��/�� ����ǿ���ɹ�", weap2);
                cm.dispose();
                break;
            case 3:
                weap = cm.getInventory(1).getItem(1);
                if (weap == null) {
                    cm.dispose();
                    cm.sendOk("װ������һ���ǿյ�\r\n�뽫 #b�� #rע�����ĵĵ��� #b�� #k����װ������һ��");
                    return;
                }
                if (!checkContians(weap.getItemId(), weapens2)) {
                    cm.dispose();
                    cm.sendOk("װ������һ���ǿ�������ͻ�Ƶ�����Ŷ����ȷ��");
                    return;
                }
                if (weap.getRate() < 100) {
                    cm.dispose();
                    cm.sendOk("��ǰǿ������δ��100%���޷�Ϊ��ͻ��Ŷ��");
                    return;
                }
                grade = weap.getGrade();
                if (grade < 0 || grade >= tupo.length) {
                    cm.dispose();
                    cm.sendOk("��ǰ�����޷�ͻ�ƻ���ͻ������߼���");
                    return;
                }
                var txt = "\t\t\t\t\t- #e#r����ͻ��#n#k -\r\n";
                txt += "\t\t#b" + tupo[grade][0] + " #k"+��ͷ+��ͷ+��ͷ+��ͷ+"#b " + tupo[grade][1] + "#k\r\n";
                txt += "ͻ�Ƴɹ���#r������" + tupo[grade][7] + "��ȫ���ԣ�" + tupo[grade][8] + "#k\r\n";
                txt += "ͻ�Ƴɹ��ʣ�#r" + tupo[grade][2] + "%#k\r\n";
                txt += "ͻ��ʧ���Ƿ�������㣺#r" + (tupo[grade][3]?"��":"��") + "#k\r\n";
                txt += "ͻ��ʧ�ܽ������ʣ�#r" + tupo[grade][4] + "%#k\r\n";
                txt += "ͻ��ʧ�����������ʣ�#r" + tupo[grade][5] + "%#k\r\n";
                txt += "ͻ������#v"+useItemid+"#������#r" + tupo[grade][6] + "#k\r\n";
                txt += "ͻ������#v4000313#������#r" + tupo[grade][10] + "#k\r\n";
                txt += "ͻ�����Ľ��������#r" + tupo[grade][9] + "#k\r\n";
                cm.sendYesNo(txt);
                break;
			case 10:
				cm.dispose();
				var txt = "";
				txt += "#r1��#kΪ#v4031466#����ע�꣬ע������У�\r\n";
				for (var i in weapens1) {
					txt += "#v"+weapens1[i]+"#";
				}
				txt += "\r\n#g2��#kע����ȵ���100ʱ�����������Ʒ����#v4031868#������Ʒ����Ϊ��������ǿ����ǿ���������£�\r\n";
				for (var i in weapSoul) {
					txt += weapSoul[i][3]+"#v"+weapSoul[i][0]+"#���Ӱ����������� #r"+weapSoul[i][2]+"%#k\r\n";
				}
				txt += "\r\n#b3��#k���������ȵ���100ʱ���ɶ԰�����������ͻ�ƣ�ÿ��ͻ�ƶ���һ�δ�������\r\n#r#eע�⣺ͻ�Ƴɹ���İ������������ǹ̶��ģ�"
				cm.sendOk(txt);
				/*var map = cm.getPlayer().getMap();
				var ii = Packages.server.MapleItemInformationProvider.getInstance();
				var eq = ii.randomizeStats(ii.getEquipById(1082003));
				var mob = map.getAllMonster().get(0);
				
				map.spawnMobDrop(eq, cm.getPlayer().getPosition(), mob, cm.getPlayer(), 1, 0);*/
				break;
        }
    } else if (status == 2) {
        if (!cm.haveItem(useItemid, tupo[grade][6])) {
            cm.sendOk("#v"+useItemid+"#��������"+tupo[grade][6]+"��");
            cm.dispose();
            return;
        } else if (!cm.haveItem(4000313, tupo[grade][10])) {
            cm.sendOk("#v4000313#��������"+tupo[grade][10]+"��");
            cm.dispose();
            return;
        } else if (cm.getPlayer().getMeso() < tupo[grade][9]) {
            cm.sendOk("��Ҳ��㣡");
            cm.dispose();
            return;
        }
        cm.sendSimple("#r#e�Ƿ�ʹ��#v5220008# * 1 ��ֹ����������\r\n\t\t#L1##b��#l\t#L2#��#l");
    } else if (status == 3) {
        if (!cm.haveItem(5220008, 1) && selection == 1) {
            cm.sendOk("#v5220008#�������㣡");
            cm.dispose();
            return;
        }
        sel_1 = selection;
        cm.sendSimple("#r#e�Ƿ�ʹ��#v5310000# * 1 ��ֹ�����𻵣�\r\n\t\t#L1##b��#l\t#L2#��#l");
    } else if (status == 4) {
        if (!cm.haveItem(5310000, 1) && selection == 1) {
            cm.sendOk("#v5310000#�������㣡");
            cm.dispose();
            return;
        }
        sel_2 = selection;
        //�ɹ���
        var success = Math.floor(Math.random() * 100);
        var weap2 = weap.copy();
        weap2.setRate(0);
        cm.gainItem(useItemid, -tupo[grade][6]);
        cm.gainItem(4000313, -tupo[grade][10]);
        cm.gainMeso(-tupo[grade][9]);
        if (sel_1 == 1) {
            cm.gainItem(5220008, -1);
        }
        if (sel_2 == 1) {
            cm.gainItem(5310000, -1);
        }
        if (success < tupo[grade][2]) {
            //�ɹ�
            weap2.setGrade(weap2.getGrade() + 1);
            weap2.setWatk(tupo[grade][7]);
            weap2.setMatk(tupo[grade][7]);
            weap2.setStr(tupo[grade][8]);
            weap2.setDex(tupo[grade][8]);
            weap2.setInt(tupo[grade][8]);
            weap2.setLuk(tupo[grade][8]);
            weap2.setOwner(tupo[grade][11]);
            cm.removeSlot(1, 1, 1);
            cm.addFromDrop(weap2);
            cm.sendOk("��ϲ������ͻ�Ƴɹ���");
            cm.���ȹ���(5076000, "��ϲ ��/�� ����ͻ�Ƴɹ�", weap2);
            cm.dispose();
        } else {
            //ʧ��
            var txt = "";
            var ran1 = Math.floor(Math.random() * 100);
            //�����Ƿ������
            var b = false;
            if (ran1 < tupo[grade][5] && sel_2 != 1) {
                //������
                cm.removeSlot(1, 1, 1);
                txt += "\r\n#r���������ͻ�ƹ���������ˣ�";
                b = true;
            }
            if (!b) {
                //����û����
                var ran2 = Math.floor(Math.random() * 100);
                if (ran2 < tupo[grade][4] && sel_1 != 1) {
                    //����
                    weap2.setGrade(weap2.getGrade() - 1);
                    grade = weap2.getGrade() - 1;
                    weap2.setWatk(tupo[grade][7]);
                    weap2.setMatk(tupo[grade][7]);
                    weap2.setStr(tupo[grade][8]);
                    weap2.setDex(tupo[grade][8]);
                    weap2.setInt(tupo[grade][8]);
                    weap2.setLuk(tupo[grade][8]);
                    weap2.setOwner(tupo[grade][11]);
                    txt += "\r\n#r���������ͻ�ƹ����н����ˣ�"
                }
                cm.removeSlot(1, 1, 1);
                cm.addFromDrop(weap2);
            }
            cm.sendOk("���ź�ͻ��ʧ��" + txt);
            cm.���ȹ���(5076000, "���ź� ��/�� ����ͻ��ʧ��", weap2);
            cm.dispose();
        }
    }
}

function checkContians(itemid, list) {
    for (var i in list) {
        if (itemid == list[i]) {
            return true
        }
    }
    return false;
}

function checkContians2(item, list) {
    for (var i in list) {
        if (item.getItemId() == list[i][0] && item.getOwner() == list[i][3]) {
            return list[i]
        }
    }
    return null;
}
