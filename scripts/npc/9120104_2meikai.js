
/*
 * 
 * ��Ʒ�Ի���Ʒ  ����:bay ��
 */
/* 
 */
//---------������-------


importPackage(net.sf.MS079.client);
var status = 0;
var zones = 0;
//4000425
var ItemId = Array(
    Array(4001254,4031456,500, "1"),//��ҫ�Ļع�ð�յ������
    Array(2340000,4031456,500, "2"),//�һ� ף������
    Array(1082149,4031456,300, "3"),//�һ� ��������(�֣�
    Array(1102041,4031456,300, "4"),//�һ� ��������(�� )
    Array(1102042,4031456,300, "5"),//�һ� ��������(��)
    Array(2040025,4031456,200, "6"),//ͷ����������60%
    Array(2040024,4031456,200, "7"),//ͷ����������10%
    Array(2040804,4031456,200, "8"),//���׹�������60%
    Array(2040805,4031456,200, "9"),//���׹�������10%
    Array(2040817,4031456,200, "10"),//����ħ������60%
    Array(2040816,4031456,200, "11"),//����ħ������10%
    Array(2040914,4031456,200, "12"),//���ƹ�������60%
    Array(2040915,4031456,200, "13"),//���ƹ�������10%
    Array(2040919,4031456,200, "14"),//����ħ������60%
    Array(2040920,4031456,200, "15"),//����ħ������10%
    Array(2041307,4031456,200, "16"),//�������ݾ���60%
    Array(2041308,4031456,200, "17"),//�������ݾ���10%
    Array(2041301,4031456,200, "18"),//������������60%
    Array(2041302,4031456,200, "19"),//������������10%
    Array(2041310,4031456,200, "20"),//������������60%
    Array(2041311,4031456,200, "21"),//������������10%
    Array(2041304,4031456,200, "22"),//������������60%
    Array(2041305,4031456,200, "23"),//������������10%
    Array(2040301,4031456,200, "24"),//������������60%
    Array(2040302,4031456,200, "25"),//������������10%
    Array(2040317,4031456,200, "26"),//�������ݾ���60%
    Array(2040318,4031456,200, "27")//�������ݾ���10%   ���һ����βȥ��,
        //�����������߶һ����밴�մ˸�ʽ�������á�
        //����,�۸�,����
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
            StringS = "���ã���ѡ������Ҫ�һ���������";
            for (var i = 0; i < ItemId.length; i++) {
                StringS += "\r\n#L" + i + "##b#z" + ItemId[i][0] + "##k (��Ҫ#r#z " + ItemId[i][1] + " ##kX" + ItemId[i][2] + "��.)";
            }
            cm.sendSimple(StringS);
            zones == 0;

        } else if (status == 1) {
            if (zones == 1) {
                cm.sendNext("�����Ұ�����ʲô�أ�", 2);
                zones = 2;
            } else if (zones == 0) {
                if (cm.getPlayer().getInventory(net.sf.MS079.client.MapleInventoryType.getByType(1)).isFull())
                {
                    cm.sendOk("������Ӧ����װ�����ճ�һ��");
                    cm.dispose();
                    return;
                } else if (cm.haveItem(ItemId[selection][1],ItemId[selection][2])) {
                    cm.gainItem(ItemId[selection][0], +1);
                    cm.gainItem((ItemId[selection][1]),-(ItemId[selection][2]));
                    cm.sendOk("�һ��ɹ�����챳��!");
                    cm.dispose();
                } else {
                    cm.sendOk("���㣡��");
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
