
/*

NPC��Ȩ:��Ϸ���Ŷ�
�����ˣ�����
 */
var ȫ�־��鱶�� = 500; // ���ջ�þ�����  ����  * ȫ�־��鱶��  =��þ���
var ȫ�ֽ�ұ��� = 500; // ���ջ�ý����  ����  * ȫ�ֽ�ұ���  =��ý��
var status = -1;
var ����������� = [4000037,4001126,4000000,4000016,4000019,4000020,4000024,4000010,4000017,2022215,2022214,2022211,2022210,2022209,2022208,2022207,2022206,2022205,2022204,2022203,2022480,2022479,2022478,2022477,2022476,2010003,2010004,2020028,2043700,2043800,2044600,2044500,2040300,2040700,2040600,2040400,2040000,2022003,2020002,2020005,2020003,2020004,2260000,2050000,2002000,2050002,2050001,2010002,2010000,2000002,2000001,2022000,2000019,4000193,4000407,4000171,4000046,4000295,4000036,4000177,4000072,4000122,4000293,4000169,4000170,4000051,4000073,4000087,4000204,4000086,4000095,4000013,4000111,4000276,4000153,4000167,4000006,4000197,4000020,4000007,4000003,4000018,4000247,4000005,4000012,4031192,4000002, 4000058, 4000105, 2000006, 4000186, 4000017, 4001126, 4000404, 4000126, 4000027, 4000257, 4000265, 4001129, 4000040, 4000176, 4000044, 4001084, 4003005, 4000049, 4000011, 4030001, 4000107, 4000106, 4000061, 4006001, 2050004, 2020001, 2190000, 4000053, 4000054, 4000156, 4000154, 4000022, 4000079, 4000024, 4000092, 4000026, 4000159, 4000029, 4000030, 4000129, 4000150, 4000034, 4000039, 4000042, 4000067, 4000100, 4000053, 4000059, 4000117, 4000069, 4000070, 4000077, 4000082, 4000089, 4000115, 4000120, 4000128, 4000134, 4000136, 4000187, 4000188, 4000191, 4000152, 4000194, 4000205, 4000215, 4000232, 4000294, 4000329, 4000377, 4001083, 4001085, 4001242, 4031227, 4000189, 4000194, 4000000, 4000016, 4000019, 4000436, 4000001, 4000009, 4000011, 4000015, 4000042, 4000035, 4000010, 4000037];
var �̶���Ʒ���� = Array(
		// (��Ʒid, �̶�����)

		//�������Ʒid  ������ �����������  �������Ʒ����Ч
		//Array(2022215, 1),
		Array(4001126, 100),
		Array(4000000, 100),
		Array(4000016, 100),
		Array(4000019, 100),
		Array(4000020, 100),
		Array(4000024, 100),
		Array(4000010, 100),
		Array(4000017, 1),
		Array(4000037, 100),
		Array(4031192, 1),
		Array(4001085, 1),
		Array(4001242, 1),
		Array(4031227, 1),
		Array(4001083, 1),
		Array(4000053, 20),
		Array(4000054, 20),
		Array(4030001, 10),
		Array(4001084, 1),
		Array(4001129, 1),
		Array(4000176, 1),
		Array(4000040, 1),
		Array(4000002, 10),
		Array(4000017, 10),
		Array(4000186, 1)
		);
var ��ǰ���� = 0;
var ��ǰ����״̬ = 0;
var ������Ʒ = 0;
var ������Ʒ���� = 0;
var ��Ʒ���� = 0;
var ��Ʒid = 0;
var ��ö��⾭��ٷֱ� = 0;
var itemList = Array(//��������
		//Array(��Ʒid,1��Ʒ����,�������ٻ�),

		//��Ʒid  0  ��������Ŷ���
		//��Ʒid  1  ������⾭��  �ٷֱ�
		//������ȡ�ȼ���Ӧ�����


           //����� 20w
		Array(1, 20, 1),
		Array(1, 20, 2),
		Array(1, 20, 3),
		Array(1, 20, 4),
		Array(1, 20, 5)//����� 20w
		//----------------------------------20

		
	);

function start() {
	action(1, 0, 0);
}
function ��ȡ������Ϣ() {
	��Ʒid = Number(cm.getQuestRecord(444443).getCustomData()); //��ȡ������Ʒ
	��Ʒ���� = Number(cm.getQuestRecord(444444).getCustomData()); //��ȡ�������
	//cm.getPlayer().dropMessage(������Ʒid + "���Ѿ�ʧȥ�ط���ս���ʸ�" + ������Ʒ����);

}


function ������(a, b) {

	cm.getQuestRecord(444443).setCustomData(a); //��¼������Ʒ
	cm.getQuestRecord(444444).setCustomData(b); //��¼�������
	cm.getPlayer().setBossLog("�ܻ�״̬a");
	cm.getPlayer().saveToDB(false, false);

}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status >= 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		��ǰ���� = cm.getPlayer().getBossLog("�����ܻ�a");
		��ǰ����״̬ = cm.getPlayer().getBossLog("�ܻ�״̬a");
		var selStr = "���ã�ÿ���ܻ���1-99��\r\n";
		if (��ǰ���� > 10) {
			cm.sendOk("#b��������,����12��ˢ��");
			cm.dispose();
			return;
		}
		if (cm.getLevel() > 200) { //�жϵȼ�
			cm.sendOk("#b�㵱ǰ�ȼ��Ѿ�������200���޷��ڽ�����");
			cm.dispose();
			return;
		}

		if (��ǰ����״̬ <= 0) { //δ������

			��Ʒ���� = Math.floor(Math.random() * 50) + 50;
			��Ʒid = �����������[Math.floor(Math.random() * �����������.length)];

			for (var jqa = 0; jqa < �̶���Ʒ����.length; jqa++) {
				if (�̶���Ʒ����[jqa][0] == ��Ʒid) {
					��Ʒ���� = �̶���Ʒ����[jqa][1];

				}

			}

			selStr += "#r��ȡ �� " + ��ǰ���� + " ��#l#k\r\n\r\n"
			selStr += "��Ҫ��\r\n"
			selStr += "#v" + ��Ʒid + "# X " + ��Ʒ���� + "\r\n"
			������(��Ʒid, ��Ʒ����)
		} else { //����
			��ȡ������Ϣ();

			if (��Ʒid == 0) {
				/* for (var jb = 0; jb < ��ǰ����״̬; jb++) {
				cm.killbossloga("�ܻ�״̬a");
				} */

				cm.sendOk("#b�����쳣��,�����½������b");
				cm.dispose();
				return;
			}

			selStr += "#r#L" + ��ǰ���� + "#�ύ �� " + ��ǰ���� + " ��#l#k\r\n\r\n"
			selStr += "--------------------------------------------------\r\n\r\n\r\n\r\n��Ҫ��#v" + ��Ʒid + "#  [#r" + cm.getPlayer().getItemQuantity(��Ʒid, false) + "#k/" + ��Ʒ���� + "]\r\n--------------------------------------------------\r\n"
		}
		selStr += "������\r\n"
		selStr += "�̶����飺" + ȫ�־��鱶�� * ��ǰ���� + "\r\n"
		selStr += "�̶���ң�" + ȫ�ֽ�ұ��� * ��ǰ���� + "\r\n"
		for (var j = 0; j < itemList.length; j++) {

			if (itemList[j][2] == ��ǰ����) { //�ж���Ʒ��ʶ

				if (itemList[j][0] == 0) { //���
					selStr += "#r�����ң�" + itemList[j][1] + "\r\n"
				} else if (itemList[j][0] == 1) {
					��ö��⾭��ٷֱ� = (cm.getPlayer().getNeededExp() / 100) * itemList[j][1];
					selStr += "#r����ٷֱȾ��飺" + ��ö��⾭��ٷֱ� + "\r\n"

				} else { //���ǽ��
					selStr += "#v" + itemList[j][0] + "# X " + itemList[j][1] + "\r\n"
				}

			}

		}
       // selStr += "#b#L99999995#��û���Ʒ����#l\r\n";
		selStr += "#b#L99999999#�鿴���л�����#l\r\n";
		selStr += "#b#L99999997#���û�����#l\r\n";
		//selStr += "#b#L99999996#����������#l\r\n";
		if (cm.getPlayer().isGM()) {
			selStr += "#b#L99999998#�鿴���л���Ҫ����#l\r\n";
		}
		cm.sendSimple(selStr);

	} else if (status == 1) {
		if (selection == 99999999) {
			var txt = "";
			for (var j = 0; j < itemList.length; j++) {

				if (itemList[j][0] == 0) { //���
					txt += itemList[j][2] + "�� ��ң�" + itemList[j][1] + "\r\n"
				} else if (itemList[j][0] == 1) {

					txt += itemList[j][2] + "��  ��ǰ�ȼ��ٷֱȾ��飺" + itemList[j][1] + "%\r\n"
				} else { //���ǽ��
					txt += itemList[j][2] + "��  #v" + itemList[j][0] + "# X " + itemList[j][1] + "\r\n"
				}

			}

			cm.sendOk(txt);
			cm.dispose();
			return;
        } else if (selection == 99999995) {
	//		cm.sendOk(cm.checkDropper(��Ʒid));
			cm.dispose();
			return;
		} else if (selection == 99999998) {

			var txt2 = "";
			for (var jg = 0; jg < �����������.length; jg++) {

				txt2 += "#v" + �����������[jg] + "##z" + �����������[jg] + "#  "

			}

			cm.sendOk(txt2);
			cm.dispose();
			return;
		} else if (selection == 99999997) {
			if (cm.haveItem(4001126, 333) == false) {
				cm.sendOk("��Ҷ����333�޷��ؽ�ȡ");
				cm.dispose();
				return;
			} else {
				cm.killbossloga("�ܻ�״̬a");
				//cm.getPlayer().setBossLog("�����ܻ�a");
				cm.gainItem(4001126, -333);
				cm.sendOk("�ɹ�");
				cm.dispose();
				return;
			}
		} else if (selection == 99999996) {
			if (cm.haveItem(4001126, 1000) == false) {
				cm.sendOk("��Ҷ����1000�޷��ؽ�ȡ");
				cm.dispose();
				return;
			} else {
				cm.killbossloga("�ܻ�״̬a");
				cm.getPlayer().setBossLog("�����ܻ�a");
				cm.gainItem(4001126, -1000)
				cm.sendOk("�ɹ�");
				cm.dispose();
				return;
			}
		} else {

			��ǰ���� = selection;
			if (cm.getInventory(1).isFull(0)) { //�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
				cm.sendOk("#b�뱣֤װ����λ������1���ո�,�����޷��һ�.");
				cm.dispose();
			} else if (cm.getInventory(2).isFull(0)) { //�жϵڶ���Ҳ������������װ�����Ƿ���һ���ո�
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�.");
				cm.dispose();
			} else if (cm.getInventory(3).isFull(0)) { //�жϵ�����Ҳ������������װ�����Ƿ���һ���ո�
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�.");
				cm.dispose();
			} else if (cm.getInventory(4).isFull(0)) { //�жϵ��ĸ�Ҳ������������װ�����Ƿ���һ���ո�
				cm.sendOk("#b�뱣֤������λ������1���ո�,�����޷��һ�.");
				cm.dispose();
			} else if (cm.getInventory(5).isFull(0)) { //�жϵ����Ҳ�����ֽ�����װ�����Ƿ���һ���ո�
				cm.sendOk("#b�뱣֤�ֽ���λ������1���ո�,�����޷��һ�.");
				cm.dispose();

			} else if (cm.haveItem(��Ʒid, ��Ʒ����) == false) { //�ж��Ƿ����
				cm.sendOk("#b��Ʒ���㣡");
				cm.dispose();
			} else {
				cm.gainItem(��Ʒid, -��Ʒ����);
				cm.gainMeso(��ǰ���� * ȫ�ֽ�ұ���); //�����ȫ�־��鱶��
				cm.gainExp(��ǰ���� * ȫ�־��鱶��); //������

				for (var j = 0; j < itemList.length; j++) {

					if (itemList[j][2] == ��ǰ����) { //�ж���Ʒ��ʶ

						if (itemList[j][0] == 0) { //���

							cm.gainMeso(itemList[j][1]); //�����
						} else if (itemList[j][0] == 1) {

							cm.gainExp(��ö��⾭��ٷֱ�); //������
						} else { //���ǽ��

							cm.gainItem(itemList[j][0], itemList[j][1]);
						}

					}

				}
			//	cm.killbossloga("�ܻ�״̬a"); //ɾ�����ݿ�onetimelog�� ��������ı�
				cm.getPlayer().setBossLog("�����ܻ�a");
				cm.sendOk("#b�ɹ���ȡ��");
				cm.dispose();

			}

		}
	}
}
