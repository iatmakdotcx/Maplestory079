

/*
 * 
 * @type�ƽ��Ҷװ���һ�
 * @npcID9310101
 * @����Ϊ��ñ��
 */
/* 
 case 1002695://����ñ
 case 1002609://�ö�ħ��ñ
 case 1002665://������ñ
 case 1002985://����ñ��
 case 1002986://��������
 case 1002761://��Ҷ���
 case 1002760://����ñ
 case 1002583://�����ͷ��
 case 1002543://����ñ
 case 1002448://��ɫͷ��
 */
var ʱ��֮ʯ = 4021010;
var status = 0;
var zones = 0;
var ItemId = Array(

		Array(1102042, 20, "��������(��)"),
		Array(1102041, 20, "��������(��)"),
		Array(1082149, 30, "��������(��)"),
		Array(2049100, 30, "�������60%"),
		Array(2340000, 40, "ף������"),
		Array(2070005, 120, "��Ǯ��"),
		Array(2070006, 250, "������")
		//Array(4310059, 100, "�سɶһ���")
		/*Array(2040709, 80, "Ь�����ݱسɾ�"),
		Array(2040710, 80, "Ь����Ծ�سɾ�"),
		Array(2040711, 80, "Ь���ٶȱسɾ�"),
		Array(2040806, 80, "�������ݱسɾ�"),
		Array(2040903, 80, "���Ʒ����سɾ�"),
		Array(2041024, 80, "����ħ�������سɾ�"),
		Array(2041025, 80, "������������سɾ�"),
		Array(2043003, 80, "���ֽ������سɾ�"),
		Array(2043103, 80, "���ָ������سɾ�"),
		Array(2043203, 80, "���ֶ��������سɾ�"),
		Array(2043303, 80, "�̽������سɾ�"),
		Array(2043703, 80, "���ȹ����سɾ�"),
		Array(2043803, 80, "���ȹ����سɾ�"),
		Array(2044003, 80, "˫�ֽ������سɾ�"),
		Array(2044019, 80, "˫�ֽ�ħ���سɾ�"),
		Array(2044103, 80, "˫�ָ������سɾ�"),
		Array(2044203, 80, "˫�ֶ��������سɾ�"),
		Array(2044303, 80, "ǹ�����سɾ�"),
		Array(2044403, 80, "ì�����سɾ�"),
		Array(2044503, 80, "�������سɾ�"),
		Array(2044603, 80, "�󹥻��سɾ�"),
		Array(2044703, 80, "ȭ�׹����سɾ�"),
		Array(2044815, 80, "ָ�ڹ����سɾ�"),
		Array(2044908, 80, "��ǹ�����سɾ�"),
        Array(2040807, 80, "���׹����سɾ�")*/
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
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            if (cm.getLevel < 10) {
                cm.sendOK("��ĵȼ�����10�������򿪸��", 2);
                cm.dispose();
            } else {3
                selStr = "\t\t#e#r����Ҫ��ѩ���ҹ���ʲô��Ʒ�أ�����\r\nĿǰӵ��#b��#c4310014#��#v4310014##z4310014#����#n#k\r\n";
                for (var i = 0; i < ItemId.length; i++) {
                    selStr += "\r\n#L" + i + "##b#z" + ItemId[i][0] + "##k (��Ҫ#r " + ItemId[i][1] + " #k�� ѩ���ң�)";
                }
                cm.sendSimple(selStr);
                zones == 0;
            }
        } else if (status == 1) {
            if (zones == 1) {
                cm.sendNext("�����Ұ�����ʲô�أ�", 2);
                zones = 2;
            } else if (zones == 0) {
if (cm.itemQuantity(4310014) >= ItemId[selection][1]) {
cm.gainItem(4310014,-(ItemId[selection][1]));
                        cm.gainItem(ItemId[selection][0], 1);
                       Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"���������̵꡿" + " : [" + cm.getPlayer().getName() +"]�����ѩ�����̵�������һ������~",true).getBytes());
                        cm.sendOk("�һ��ɹ�����챳��!");
                        cm.dispose();
                    } else {
                        cm.sendOk("ѩ���Ҳ��㣡");
                        cm.dispose();
                    }
                }
            } else if (status == 2) {
                if (zones == 2) {
                    cm.sendNext("������������ħ����ʱ��֮ʯ��һȺĢ����͵����,���ܰ�ȥ��������");
                    zones = 3;
                }
            } else if (status == 3) {
                if (zones == 3) {
                    cm.sendNext("��,���û���⣿���������Щ͵����ʱ��֮ʯ��Ģ����������ʲô�ط���?", 2);
                    zones = 4;
                }
            } else if (status == 4) {
                if (zones == 4) {
                    cm.sendNext("�����Ʒ��#bȫ�������#k�ġ�������������ϵ�#b�κ�һ������#k�ϻ�ȡ��");
                    zones = 5;
                }
            } else if (status == 5) {
                if (zones == 5) {
                    cm.sendYesNo("������ܰ��������æ�Ļ�,�һ����һЩ���Ľ����ģ����Ƿ�Ը����ң�");
                }
            } else if (status == 6) {
                cm.setBossLog('MogoQuest');
                cm.gainItem(5220001, 1);
                cm.sendOk("�ǳ���л����ú����˵�������ܻ�����Ʒ�ˣ�");
                cm.dispose();
            }
        }
}	
