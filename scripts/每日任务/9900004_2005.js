//װ�α�����
var ��Ծ�� = "#fUI/UIWindow.img/AriantMatch/characterIcon/0#";
var ��Ծ�ȿ� = "#fUI/GuildMark.img/BackGround/00001010/1#";
var ��Ծ��2 = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/AriantMatch/characterIcon/0#";
var �� = "#fUI/UIWindow.img/AriantMatch/characterIcon/0#";
var meso = "#fUI/UIWindow.img/Item/BtCoin/normal/0#";
var pvp = "#fUI/UIWindow.img/PvP/btWrite/mouseOver/0#";
var s = "#fUI/StatusBar/BtClaim/normal/0#";
var name = "�λ�";
var h = "#fUI/CashShop/CSEffect/effect/1#";
var t = 0;
//���ñ����� ��������Ҫ����Ʒ
var ItemId = Array(
        //��ƷID,����,��ע
		Array(1432008, 1, "����� - Ұ�����"),
        Array(1382004, 1, "�������� - Ұ�����"),
		Array(4001126, 100, "��Ҷ - Ұ�����"),
		Array(1302017, 1, "��ɫ��ɡ - Ұ�����"),
		Array(1322023, 1, "��������ӾȦ - Ұ�����"),
		Array(1442012, 1, "���ѩ�� - Ұ�����"),
		Array(1442013, 1, "�׺�ѩ�� - Ұ�����"),
		Array(1302016, 1, "��ɫ��ɡ - Ұ�����"),
		Array(4000383, 100, "��ɫ���� - Ұ�����"),
		Array(1302013, 1, "��ɫ���� - Ұ�����"),
		Array(1302030, 1, "��Ҷ�� - Ұ�����"),
		Array(2070004, 1, "��ɫ�� - Ұ�����"),
		Array(2070007, 1, "������ - Ұ�����"),
		Array(1092030, 1, "��Ҷ�� - Ұ�����"),
		Array(1092029, 1, "��Ź�� - Ұ�����"),
		Array(1092008, 1, "���� - Ұ�����"),
		Array(1402005, 1, "նħ�� - Ұ�����"),
		Array(1432011, 1, "������ħǹ - Ұ�����"),
		Array(1382010, 1, "���鷨�� - Ұ�����"),
        Array(4000233, 100, "������ľ�ˮ - Ұ�����")

        //�����������߶һ����밴�մ˸�ʽ�������á�
        );

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
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

            text = "<ÿ���ܻ�����>\r\n";
            text += "�����ÿ���ܻ���ֻ��Ҫ�Ѽ��㹻����Ʒ���Ҿ���������ɴ���Խ�ཱ��Խ���\r\n"
            text += "#r#bPS��ÿ�տ������20��,ÿ�տ�������3������!\r\n#k";
            text += "��ǰ�����" + cm.getBossLog("�ܻ�") + "��\r\n";
            text += "#r������Ϣ:#e\r\n";
            if ((2) != 999) {
                text += "#b#n��Ҫ�Ѽ���Ʒ\r\n#z" +ItemId[cm.getPlayer().getPH(2)][0]+"##v" +ItemId[cm.getPlayer().getPH(2)][0]+"# ����:"+ItemId[cm.getPlayer().getPH(2)][1]+"  #r��ע:"+ItemId[cm.getPlayer().getPH(2)][2]+"#d\r\n";
                text += "#L2#�������#l\r\n";
            } else {
                text += "�����������Ƚ�������!\r\n";
                text += "#L1#��������#l\r\n";
            }
            cs = 3 - cm.getBossLog("�ܻ�cs");
            text += "\r\n#L3#������ǰ.ֱ�ӽ�����һ��(ʣ�����:" + cs + ")#l\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {//��������
            //�������
            var item = Math.floor(Math.random() * ItemId.length + 0);
            cm.getPlayer().ÿ���ܻ�����(1,item);
            cm.sendOk("#b----------------��������----------------\r\n\r\n\r\n�Ѽ���Ʒ��#v" + ItemId[item][0] + "##r#e#z" + ItemId[item][0] + "##b#n ����:#r#e" + ItemId[item][1] + "#n#b��");
            cm.dispose();
        } else if (selection == 2) {//�������
            //�������
            if (cm.haveItem(ItemId[cm.getPlayer().getPH(2)][0],ItemId[cm.getPlayer().getPH(2)][1])) {
                cm.sendOk("��ϲ���������");
                cm.setBossLog("�ܻ�");
				cm.gainItem(ItemId[cm.getPlayer().getPH(2)][0],-ItemId[cm.getPlayer().getPH(2)][1]);
                 cm.getPlayer().ÿ���ܻ�����(1,999);
                cm.����(4, "��ϲ������ܻ���" + cm.getBossLog("�ܻ�") + "����Ӯ���˷��Ľ�����");
                switch (cm.getBossLog("�ܻ�")) {
                    case 1://��һ������
                        cm.gainItem(4000463, +1);
                        break;
                    case 2://��2������
                        cm.gainItem(4000463, +2);
                        break;
                    case 3://��3������
                        cm.gainItem(4000463, +2);
                        break;
                    case 4://��4������
                        cm.gainItem(4000463, +4);
                        break;
                    case 5://��5������
                        cm.gainItem(4000463, +4);
                        break;
                    case 6://��6������
                        cm.gainItem(4000463, +6);
                        break;
                    case 7://��7������
                        cm.gainItem(4000463, +6);
                        break;
                    case 8://��8������
                        cm.gainItem(4000463, +8);
                        break;
                    case 9://��9������
                        cm.gainItem(4000463, +8);
                        break;
                    case 10://��10������
                        cm.gainItem(1472230, +1);
                        break;
					case 11://��11������
                        cm.gainItem(4000463, +10);
                        break;
					case 12://��12������
                        cm.gainItem(4000463, +10);
                        break;
					case 13://��13������
                        cm.gainItem(4000463, +20);
                        break;
					case 14://��14������
                        cm.gainItem(4000463, +20);
                        break;
					case 15://��15������
                        cm.gainItem(1442251, +1);
                        break;
					case 16://��16������
                        cm.gainItem(4000463, +30);
                        break;
					case 17://��17������
                        cm.gainItem(4000463, +40);
                        break;
					case 18://��18������
                        cm.gainItem(4000463, +40);
                        break;
					case 19://��19������
                        cm.gainItem(4000463, +50);
                        break;
					case 20://��20������
                        cm.gainItem(1382057, +1);
                        break;
                }
                cm.setBossLog("�ܻ�");
                cm.dispose();
            } else {
                cm.sendOk("��û�������������ϸ�鿴��������");
                cm.dispose();
            }
        } else if (selection == 3) {
            if (cm.getBossLog("�ܻ�cs") == 3) {
                cm.sendOk("ÿ��ֻ���Է���3�Σ�");
                cm.dispose();
            } else {
                cm.����(2, "�����˵�ǰ�ܻ�������ֱ�ӽ�������һ�����ڣ�");
                cm.setBossLog("�ܻ�");
                cm.sendOk("OK���ٴ����ҶԻ���ʼ��һ���ѣ�");
                cm.setBossLog("�ܻ�cs");
                cm.getPlayer().ÿ���ܻ�����(1,999);
                cm.dispose();
            }
        }
    }
}