
status = -1;
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var itemList = Array(
//Array(1012438, 2, 1, 1), //��������
//Array(1032224, 2, 1, 1), //���ж���
//Array(1022211, 2, 1, 1), //�����۾�
//Array(1122269, 2, 1, 1), //���е�׹
//Array(1132247, 2, 1, 1), //��������
//Array(1112794, 2, 1, 1), //�ռ���ָ
Array(1302297, 2, 1, 1), //�ռ���ָ
Array(1312173, 2, 1, 1), //�ռ���ָ
Array(1322223, 2, 1, 1), //�ռ���ָ
Array(1332247, 2, 1, 1), //�ռ���ָ
Array(1382231, 2, 1, 1), //�ռ���ָ
Array(1402220, 2, 1, 1), //�ռ���ָ
Array(1412152, 2, 1, 1), //�ռ���ָ
Array(1422158, 2, 1, 1), //�ռ���ָ
Array(1432187, 2, 1, 1), //�ռ���ָ
Array(1442242, 2, 1, 1), //�ռ���ָ
Array(1452226, 2, 1, 1), //�ռ���ָ
Array(1462213, 2, 1, 1), //�ռ���ָ
Array(1472235, 2, 1, 1), //�ռ���ָ
Array(1482189, 2, 1, 1), //�ռ���ָ
Array(1492199, 2, 1, 1), //�ռ���ָ

Array(4310100, 500, 1, 1), //���жһ���
Array(4310143, 500, 1, 1), //BOSS��
Array(2046913, 30, 1, 1), //�ǻ�
//Array(2046914, 30, 1, 1), //�ǻ�
//Array(2046173, 30, 1, 1), //�ǻ�
Array(2613000, 30, 1, 1), //����
//Array(2613001, 30, 1, 1), //����
//Array(2612010, 30, 1, 1), //����


Array(4310010, 10, 1, 1), //15�Ǳسɱ�
Array(2043030, 40, 1, 1), //���ֽ�
Array(2043125, 40, 1, 1), //���ָ�
Array(2043225, 40, 1, 1), //���ֶ���
Array(2043319, 40, 1, 1), //�̽�
Array(2043819, 40, 1, 1), //����
Array(2044033, 40, 1, 1),//˫�ֽ�
Array(2044125, 40, 1, 1),//˫�ָ�
Array(2044225, 40, 1, 1),//˫�ֶ���
Array(2044325, 40, 1, 1), //ǹ
Array(2044425, 40, 1, 1), //ì
Array(2044518, 40, 1, 1), //��
Array(2044618, 40, 1, 1), //��
Array(2044718, 40, 1, 1), //ȭ��
Array(2044825, 40, 1, 1), //ָ��
Array(2044918, 40, 1, 1), //��ǹ
Array(4011008, 10, 1, 1), //�
Array(4011007, 20, 1, 1), //��ʯ
Array(4250602, 500, 1, 1), //�ߵȻƾ�
Array(4002000, 350, 1, 1), //��Ʊ
Array(4002001, 350, 1, 1), //��Ʊ
Array(4002002, 350, 1, 1), //��Ʊ
Array(4002003, 350, 1, 1), //��Ʊ
Array(4000463, 100, 1, 1), //�н�
Array(3010718, 300, 1, 1), //�����ƶ�
Array(3010594, 300, 1, 1), //��ݮ����
Array(3010454, 300, 1, 1), //�����ƶ�
Array(3010511, 300, 1, 1), //è�乫԰
Array(3010206, 300, 1, 1), //���뻭��
Array(3010209, 300, 1, 1), //��ݱ����
Array(3010448, 300, 1, 1), //����ԡ
Array(3010591, 300, 1, 1), //������
Array(3010658, 300, 1, 1), //��������
Array(3010286, 300, 1, 1), //ŵ����˹
Array(3010660, 300, 1, 1), //�λù����Ǳ�
Array(3010661, 300, 1, 1), //�������
Array(3010417, 300, 1, 1), //���ް�
Array(3010416, 300, 1, 1), //���ް�
Array(3010070, 300, 1, 1), //���ް�
Array(3010643, 300, 1, 1), //10���군��
Array(3010608, 300, 1, 1), //����������
Array(2070011, 300, 1, 1), //ˮ����
Array(2070013, 100, 1, 1), //�ƽ���
Array(2340000, 500, 1, 1), //ף����
Array(2049100, 500, 1, 1), //�����
Array(4005000, 500, 1, 0), //ˮ��
Array(4005001, 500, 1, 0), //ˮ��
Array(4005002, 500, 1, 0), //ˮ��
Array(4005003, 500, 1, 0), //ˮ��
Array(4005004, 500, 1, 1), //ˮ��
Array(4251202, 80, 1, 1), //ˮ��
Array(2022530, 50, 1, 1),//˫������
Array(2450000, 40, 1, 0) //˫��BUFF



);

function start() {
	if (cm.canHold(1002677,1) == false || cm.canHold(2290017,1) == false || cm.canHold(4001126,1) == false){
	cm.sendOk("�뱣֤�г���ı����ռ�");
    cm.dispose();	
	}else{
    action(1, 0, 0);
}}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("�ټ��ð��͡�");
            cm.dispose();
        }
        status--;
    }
		if (status == 0) {
			if(cm.haveItem(2028170,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo(""+С�̻�+"#r��ӭ�����ϻ�BOSS����#v2028170#�齱!\r\n\r\n"+С�̻�+"#e�����ǽ������ݵ�ȫ����Ʒ:\r\n\r\n" + str1);
			} else {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk(""+С�̻�+"#r��ӭ�����ϻ�BOSS����#v2028170#�齱!\r\n\r\n"+С�̻�+"#e�����ǽ������ݵ�ȫ����Ʒ:\r\n\r\n" + str1);
				cm.dispose();
			}
		} else if (status == 1){	
        var chance = Math.floor(Math.random() * 500);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "�ϻ�BOSS���ӳ齱", notice);
            if (item != -500) {
			cm.gainItem(2028170, -1);//�����Ʒ
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("��ôû��ס�򰡣����˻��㱦ʯ�ɡ�");
            cm.safeDispose();
        }
    }
}
