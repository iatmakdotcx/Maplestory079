importPackage(java.lang);
importPackage(Packages.client);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.constants);
importPackage(Packages.net.channel);
importPackage(Packages.tools);
importPackage(Packages.scripting);
importPackage(Packages.tools.packet);
importPackage(Packages.tools.data);
importPackage(Packages.tools);
var status = 0;
var itemList =
	Array(

	Array(1402014, 500, 1, 1), //�¶ȼ�
Array(1302063, 500, 1, 1), //ȼ�յĻ��浶
Array(1302106, 500, 1, 1), //ȼ�յı��浶
Array(1402037, 300, 1, 1), //����
Array(1102085, 1000, 1, 1), //��ɫ��������	
Array(1102086, 1000, 1, 1), //��ɫ��������
Array(1102040, 1000, 1, 1), //��������(��)	
Array(1102043, 1000, 1, 1), //��������(��)	
Array(1102042, 1000, 1, 1), //��������(��)
Array(1102084, 100, 1, 1), //�ۺ��������
Array(1102041, 100, 1, 1), //��������(��)	
Array(1402063, 1000, 1, 1),  //ӣ��ɡ 
Array(1302026, 1000, 1, 1), //����ɡ
Array(1442122, 1000, 1, 1), //�ֲ�սʿ��õ��
Array(1442123, 1000, 1, 1), //��ŭսʿ��õ��
Array(1092022, 1000, 1, 1), //��ɫ�����
Array(1432018, 1000, 1, 1), //��ɫ��ѩ��	
Array(1442030, 1000, 1, 1), //��֮ѩ��
Array(1432048, 1000, 1, 1), //����
Array(1442046, 1000, 1, 1), //������ѩ��
Array(1442039, 1000, 1, 1), //������
Array(1082149, 500, 1, 1), //��������(��)
Array(1082179, 500, 1, 1), //���ܶ�����(��)
Array(1050100, 100, 1, 1), //��ɫԡ��	
Array(1051098, 100, 1, 1), //��ɫԡ��
Array(1051140, 100, 1, 1), //��ɫԡ��
Array(1082145, 1000, 1, 1), //��������(��)
Array(1082146, 1000, 1, 1), //��������(��)
Array(1082147, 1000, 1, 1), //��������(��)
Array(1082148, 1000, 1, 1), //��������(��)
Array(1082150, 1000, 1, 1), //��������(��)
Array(1082002, 1000, 1, 1), //��������(��)
Array(1382016, 1000, 1, 1), //�㹽 ����--�߼���
Array(1302017, 1000, 1, 1), //��ɫ��ɡ	
Array(1302016, 1000, 1, 1), //��ɫ��ɡ
Array(1002508, 1000, 1, 1), //��Ҷͷ��
Array(1002509, 1000, 1, 1), //��Ҷͷ��
Array(1002510, 1000, 1, 1), //��Ҷͷ��
Array(1002511, 1000, 1, 1), //��Ҷͷ��
Array(1002391, 1000, 1, 1), //����ͷ��(��)

Array(1402013, 1000, 1, 1), //���ս�
//------����------

Array(1012056, 500, 1, 1), //������
Array(1022047, 500, 1, 1), //èͷӥ
Array(1012058, 300, 1, 1), //ƥŵ�ܵı���
Array(1012059, 300, 1, 1), //ƥŵ�ܵı���
Array(1012060, 300, 1, 1), //ƥŵ�ܵı���
Array(1012061, 300, 1, 1), //ƥŵ�ܵı���
Array(1472054, 50, 1, 1), //����
Array(1372035, 1000, 1, 1), //���������
Array(1372036, 1000, 1, 1), //���������
Array(1372037, 1000, 1, 1), //���������
Array(1372038, 1000, 1, 1), //
Array(1012070, 1000, 1, 1), //���������

//------����-----
Array(1102163, 1000, 1, 1), //��������

//-----����-----
Array(1032026, 1000, 1, 1), //��ˮ������
Array(1032040, 1000, 1, 1), //��Ҷ�Ͷ���
Array(1032041, 1000, 1, 1), //��Ҷ�Ͷ���
Array(1032042, 1000, 1, 1), //��Ҷ�Ͷ���
//-----Ь-----
Array(1072238, 1000, 1, 1), //��ɫ��Ь
Array(1072239, 1000, 1, 1), //��ɫ��Ь
//-----����-----
Array(2040810, 1000, 1, 1), //���׹����������70
Array(2040811, 1000, 1, 1), //���׹����������30
Array(2040814, 1000, 1, 1), //����ħ���������70
Array(2040815, 1000, 1, 1), //����ħ���������30
Array(2040916, 1000, 1, 1), //���ƹ����������70
Array(4000244, 1000, 1, 1), //��ɫ˫���������
Array(4000245, 1000, 1, 1), //��ɫ˫��������Ƭ
Array(4020009, 2000, 1, 1), //ʱ����Ƭ
Array(2070007, 100, 1, 1), //���׹����������70
Array(2070006, 100, 1, 1), //���׹����������30
Array(1092050, 100, 1, 1), //����ħ���������70
Array(4260007, 100, 1, 1), //����ħ���������30
Array(4260008, 100, 1, 1), //���ƹ����������70
Array(4021010, 100, 1, 1),//��ɫ˫���������
Array(1132036, 100, 1, 1), //����ħ���������30
Array(1022153, 100, 1, 1), //���ƹ����������70
Array(1132103, 100, 1, 1),//��ɫ˫���������
Array(1113040, 100, 1, 1), //������������60%
Array(1032182, 100, 1, 1) //��ɫ˫���������
	);

function start() {
	status = -1;
	action(1, 0, 0);
}
function ���ν�(a) {
	cm.getQuestRecord(744441).gainCustomData(+a);
	var �齱���� = Number(cm.getQuestRecord(744441).getCustomData()); //��ȡ�齱����
	var �齱����a = Number(cm.getQuestRecord(744442).getCustomData()); //��ȡ�齱����
	cm.getPlayer().dropMessage(5,"�齱������"+�齱����);
	if (�齱���� >= 1200000000 && �齱����a==0) {
		cm.getPlayer().MapEffectlaba("��ϲ��� " + cm.getPlayer().getName() + " �齱12�� ��ü����*2");
		cm.gainItem(5220000, 2);
		cm.getQuestRecord(744442).gainCustomData(+1);
	}
	if (�齱���� >= 1200000000 && �齱����a==1) {
		cm.getPlayer().MapEffectlaba("��ϲ��� " + cm.getPlayer().getName() + " �齱120�� ��ü����*12");
		cm.gainItem(5220000, 12);
		cm.getQuestRecord(744442).gainCustomData(+1);
		cm.getPlayer().dropMessage(5,"������"+�齱����a);
	}
	if (�齱���� >= 12120000000 && �齱����a==2) {
		cm.getPlayer().MapEffectlaba("��ϲ��� " + cm.getPlayer().getName() + " �齱1212�� ��ü����*120");	
		cm.gainItem(5220000, 120);
		cm.getQuestRecord(744441).gainCustomData(-�齱����);
		cm.getPlayer().dropMessage(5,"���ó齱�����ɹ�");
		cm.getQuestRecord(744442).gainCustomData(-�齱����a);
	}
}
function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
        if (status >= 0) {
			var selStrs = "\r\n";
		for (i = 0; i < itemList.length; i++) {
			selStrs += "#d#v" + itemList[i][0] + "#";

		}
			cm.sendOk("  #v1102163#v1012070#v4000424##v3994077##v3994079##v3994076##v3994074##v3994076##v3994067##v3994077##v3994063##v4000424#\r\n#b          ��Ʒȫ��� �û�ȫ���� �齱������ \r\n#r �������¶�����" + selStrs);
            cm.dispose();
            return;
        }
		status--;
	}
	if (status == 0) {
		selStr = "\r\n";
		for (i = 0; i < itemList.length; i++) {
			selStr += "#d#v" + itemList[i][0] + "#";
		}

		 if (cm.haveItem(5220000, 1)) {//�ж���Ʒ
			//cm.sendYesNo("  #v4000424##v3994077##v3994079##v3994076##v3994074##v3994076##v3994067##v3994077##v3994063##v4000424#\r\n#b          ��Ʒȫ��� �û�ȫ���� �齱������ \r\n#r          ��ʮ���顿           ȷ�ϳ�ȡ?"+selStr);
			cm.sendGetNumber("������齱���� #r#v5220000#/��\r\n��ǰӵ������: #r" +
				cm.getPlayer().getItemQuantity(5220000, false) + " \r\n", 1, 1, cm.getPlayer().getItemQuantity(5220000, false) / 1 > 10 ? 10 : cm.getPlayer().getItemQuantity(5220000, false) / 1);

		} else {
			cm.sendOk("  #v4000424##v3994077##v3994079##v3994076##v3994074##v3994076##v3994067##v3994077##v3994063##v4000424#\r\n#b          ��Ʒȫ��� �û�ȫ���� �齱������ \r\n#r             ��ʮ���顿        ���ĵ����500" + selStr);
			cm.dispose();
		}
	} else if (status == 1) {
		if (cm.getInventory(1).isFull(selection - 1)) { //�жϵ�һ��Ҳ����װ������װ�����Ƿ���һ���ո�
			cm.sendOk("#b�뱣֤װ����λ������" + (selection) + "���ո�,�����޷��齱.");
			cm.dispose();
		} else if (cm.getInventory(2).isFull(selection - 1)) { //�жϵڶ���Ҳ������������װ�����Ƿ���һ���ո�
			cm.sendOk("#b�뱣֤������λ������" + (selection) + "���ո�,�����޷��齱.");
			cm.dispose();
		} else if (cm.getInventory(3).isFull(selection - 1)) { //�жϵ�����Ҳ������������װ�����Ƿ���һ���ո�
			cm.sendOk("#b�뱣֤������λ������" + (selection) + "���ո�,�����޷��齱.");
			cm.dispose();
		} else if (cm.getInventory(4).isFull(selection - 1)) { //�жϵ��ĸ�Ҳ������������װ�����Ƿ���һ���ո�
			cm.sendOk("#b�뱣֤������λ������" + (selection) + "���ո�,�����޷��齱.");
			cm.dispose();
		} else if (cm.getInventory(5).isFull(selection - 1)) { //�жϵ����Ҳ�����ֽ�����װ�����Ƿ���һ���ո�
			cm.sendOk("#b�뱣֤�ֽ���λ������" + (selection) + "���ո�,�����޷��齱.");
			cm.dispose();
		} else if (!cm.haveItem(5220000, selection)) {//�ж���Ʒ
		    cm.sendOk("#b��û��" + selection + "��#v5220000#.");
			cm.dispose();
		} else {
			var ʧ�� = 0;
			cm.gainItem(5220000,-selection);
			for (var ai = 0; ai < selection; ai++) {

				var ii = MapleItemInformationProvider.getInstance();
				var chance = Math.floor(Math.random() * 500);
				var finalitem = Array();
				for (var i = 0; i < itemList.length; i++) {
					if (itemList[i][1] >= chance) {
						finalitem.push(itemList[i]);
					}
				}

				if (finalitem.length != 0) {

					var random = new java.util.Random();
					var finalchance = random.nextInt(finalitem.length);
					var itemId = finalitem[finalchance][0];
					var quantity = finalitem[finalchance][2];
					//var notice = finalitem[finalchance][3];
					// item = cm.gainGachaponItem(itemId, quantity,);//, notice
					var Laba = finalitem[finalchance][3];

					if (ii.getInventoryType(itemId).getType() == 1) {
						var toDrop = ii.randomizeStats(ii.getEquipById(itemId)).copy();
						MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, false);
					} else {
						var toDrop = new Equip(itemId, 0).copy();
						cm.gainItem(itemId, quantity);
					}

					if (Laba == 1) {

						cm.ȫ����ɫ����(" ��" + ai + "�������齱����ã����һ��ϲ��/����!", toDrop)
						//cm.gainItem(-500);//�۳���ȯ
						//cm.sendOk("������ #b#t" + itemId + "##k " + quantity + "����");
					} else { //������
						//cm.sendOk("������ #b#t" + itemId + "##k " + quantity + "����");
					}

				} else {
					//cm.sendOk("�������������ʲô��û���õ�.");
					//cm.gainItem(-500);//�۳���ȯ
					//cm.gainItem(5220000,1);
					ʧ��++;

				}
			}
			//cm.gainItem(5220000, ʧ��);
			cm.dispose();
		}
	}
}
