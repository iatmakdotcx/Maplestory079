
status = -1;
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var itemList = Array(
Array(1032191, 20, 1, 1), //������Ƭ����
Array(1113038, 20, 1, 1), //������Ƭ��ָ
Array(1122256, 20, 1, 1), //������Ƭ����
Array(1012319, 10, 1, 1), //8�������
Array(1022226, 30, 1, 1), //���۾���֮��Lv.3

Array(4310009, 10, 1, 1), //15�Ǳسɱ�

Array(2046913, 30, 1, 1), //�ǻ�
Array(2046914, 30, 1, 1), //�ǻ�
Array(2046173, 30, 1, 1), //�ǻ�
Array(2613000, 30, 1, 1), //����
Array(2613001, 30, 1, 1), //����
Array(2612010, 30, 1, 1), //����

Array(4310143, 500, 1, 1), //BOSS��
//Array(1012170, 10, 1, 1), //�ֲ�����
Array(2041136, 300, 1, 1), //��ָ
Array(2041139, 300, 1, 1), //��ָ
Array(2041142, 300, 1, 1), //��ָ
Array(2041145, 300, 1, 1), //��ָ
Array(4031504, 300, 1, 1),//��ɫ
Array(4031505, 150, 1, 1),//��ɫ
Array(4031506, 50, 1, 1),//��ɫ
Array(4002000, 400, 1, 1), //��Ʊ
Array(4002001, 400, 1, 1), //��Ʊ
Array(4002002, 400, 1, 1), //��Ʊ
Array(4002003, 400, 1, 1), //��Ʊ
//Array(4001129, 500, 2, 1), //ð�ռ����
Array(4011008, 30, 1, 1), //�
Array(4011007, 40, 1, 1), //��ʯ
Array(4250602, 500, 1, 1), //�ߵȻƾ�
Array(4170012, 100, 1, 1), //�سɱ�
Array(1003622, 400, 1, 1), //��������ñ��
Array(1052527, 400, 1, 1), //�������ʹ���
Array(3010142, 300, 1, 1), //ˮ���
Array(3012010, 300, 1, 1), //�ɿ�������
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
Array(3010640, 300, 1, 1), //��ɺ����֮��
Array(2070011, 400, 1, 1), //ˮ����
Array(2070013, 150, 1, 1), //�ƽ���
Array(2049100, 500, 1, 1), //�����
Array(4005000, 500, 1, 1), //ˮ��
Array(4005001, 500, 1, 1), //ˮ��
Array(4005002, 500, 1, 1), //ˮ��
Array(4005003, 500, 1, 1), //ˮ��
Array(4005004, 500, 1, 1), //ˮ��
Array(4251202, 100, 1, 1), //ˮ��
Array(2450000, 40, 1, 1) //˫��BUFF



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
			if(cm.haveItem(2028093,1)) {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendYesNo(""+С�̻�+"#r��ӭ����#v2028093#�齱!\r\n\r\n"+С�̻�+"#e�����ǽ������ݵ�ȫ����Ʒ:\r\n\r\n" + str1);
			} else {
var str1 = "\r\n";	
           for (var i = 0; i < itemList.length; i++){
                   str1 += "#v"+itemList[i][0]+"#";
            }
				cm.sendOk(""+С�̻�+"#r��ӭ����#v2028093#�齱!\r\n\r\n"+С�̻�+"#e�����ǽ������ݵ�ȫ����Ʒ:\r\n\r\n" + str1);
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
            item = cm.gainGachaponItem(itemId, quantity, "���BOSS����", notice);
            if (item != -500) {
			cm.gainItem(2028093, -1);//�����Ʒ
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
