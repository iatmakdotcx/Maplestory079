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
    //Array(4000463,4001126,30, "1"),//��Ӱ
    //Array(2340000,4001126,120, "2"),//�һ� ף������
	//Array(1112404,4001126,150, "29"),//�һ� �����ָ
	//Array(1112405,4001126,300, "28"),//�һ� ���յĽ�ָ
    //Array(1082149,4001126,300, "3"),//�һ� ��������(�֣�
    //Array(1102041,4001126,3000, "4"),//�һ� ��������(�� )
    //Array(1102042,4001126,3000, "5"),//�һ� ��������(��)
	
	    Array(1462019,4001126,2000,1),//��Ҷ��
		Array(1452022,4001126,2000,1),//��Ҷ��
		Array(1382012,4001126,2000,1),//��Ҷ��
		Array(1472032,4001126,2000,1),//��Ҷȭ
		Array(1332025,4001126,2000,1),//��Ҷ��
		Array(1492020,4001126,2000,1),//��Ҷ��ǹ
		Array(1482020,4001126,2000,1),//��Ҷָ��
		Array(1442024,4001126,2000,1),//��Ҷì
		Array(1302030,4001126,2000,1),//��Ҷ��
		Array(1412011,4001126,2000,1),//��Ҷ��
		Array(1422014,4001126,2000,1),//��Ҷ��	��Ҷǹ
		Array(1432012,4001126,2000,1)
		//Array(1482097,4001126,5000,1)

		//Array(1122110,4001126,3000,1),//������Ҷϵ��
		//Array(1082313,4001126,1000,1),
		//Array(1332143,4001126,5000,1),
		//Array(1342038,4001126,5000,1),
		//Array(1372095,4001126,5000,1),
		//Array(1382119,4001126,5000,1),
		//Array(1402105,4001126,5000,1),
		//Array(1432075,4001126,5000,1),
		//Array(1442131,4001126,5000,1),
		//Array(1452124,4001126,5000,1),
		//Array(1462112,4001126,5000,1),
		//Array(1472135,4001126,5000,1),
		//Array(1482097,4001126,5000,1),
		//Array(1492096,4001126,5000,1)

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
            sl = cm.getPlayer().getItemQuantity(4001126, false);
            StringS = "#b#n   ��ɫʣ��:" + sl + " ��#v4001126#���뱣֤�����пռ䣬�������ʧ��";
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
                    cm.sendOk("#v4001126#���㣡");
                    cm.dispose();
                }
            }
        }
    }
}	
