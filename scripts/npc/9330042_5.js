/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����     
 ��ϵ��ʽ��2412614144
 =====================
 */
var ��ɫ��ͷ = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2# ";
var status = 0;
var zones = 0;
var ItemId = Array(
        //��Ʒ1         ��Ʒ2    ����    ����
    //Array(4000463,4031456,30, "1"),//��Ӱ
    //Array(2340000,4031456,120, "2"),//�һ� ף������
	//Array(1112404,4031456,150, "29"),//�һ� �����ָ
	//Array(1112405,4031456,200, "28"),//�һ� ���յĽ�ָ
    //Array(1082149,4031456,300, "3"),//�һ� ��������(�֣�
    Array(2340000,4031456,150, "4"),//�һ� ף��
    Array(2049100,4031456,100, "5"),//�һ� ����

		//Array(4310059,4031456,100,1),//������Ҷϵ��
		Array(5050000,4031456,12,1),//ϴ����
		Array(4000463,4031456,150,1),//�����
		Array(1302064,4031456,100, "22"),//�����Ҷ
		//Array(1302032,4031456,1200, "22"),
		Array(1402039,4031456,100, "22"),
		Array(1322054,4031456,100, "22"),
		Array(1322055,4031456,100, "22"),
		Array(1332055,4031456,100, "22"),
		Array(1332056,4031456,100, "22"),
        Array(1372034,4031456,100, "22"),
		Array(1382039,4031456,100, "22"),
		Array(1412027,4031456,100, "22"),
		Array(1422029,4031456,100, "22"),
		Array(1432040,4031456,100, "22"),
		Array(1442051,4031456,100, "22"),
		Array(1452045,4031456,100, "22"),
		//Array(1462014,4031456,100, "22"),
		Array(1462040,4031456,100, "22"),
		Array(1472055,4031456,100, "22"),
		Array(1492022,4031456,100, "22"),
		Array(1482022,4031456,100, "22")

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
            sl = cm.getPlayer().getItemQuantity(4031456, false);
            StringS = "#b#n   ��ɫʣ��:" + sl + " ��#v4031456#���뱣֤�����пռ䣬�������ʧ��";
            for (var i = 0; i < ItemId.length; i++) {
                StringS += "\r\n#L" + i + "##b" + ��ɫ��ͷ + "#b#v " + ItemId[i][1] + " #" + ItemId[i][2] + "#n��#k �һ� #r#v" + ItemId[i][0] + "##z" + ItemId[i][0] + "##k#l";
            }
            cm.sendSimple(StringS, 2);
            zones == 0;

        } else if (status == 1) {
            if (zones == 0) {
                    if (cm.getInventory(1).isFull(2)){
                        cm.sendOk("#b�뱣֤װ����λ������2���ո�,�����޷�����.");
                        cm.dispose();
                    } else if (cm.getInventory(2).isFull(2)){
                        cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷�����.");
                        cm.dispose();
                    } else if (cm.getInventory(3).isFull(2)){
                        cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷�����.");
                        cm.dispose();
                    } else if (cm.getInventory(4).isFull(2)){
                        cm.sendOk("#b�뱣֤������λ������2���ո�,�����޷�����.");
                        cm.dispose();
                } else if (cm.haveItem(ItemId[selection][1], ItemId[selection][2])) {
                    cm.gainItem(ItemId[selection][1], -ItemId[selection][2]);
                    cm.gainItem(ItemId[selection][0], 1);
                    cm.sendOk("�һ��ɹ�����챳��!"); 
                    cm.dispose();
                } else {
                    cm.sendOk("#v4031456#���㣡");
                    cm.dispose();
                }
            }
        }
    }
}	
