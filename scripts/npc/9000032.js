var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var ���� = Math.floor(Math.random() * 55);
var B = Math.floor(Math.random() * 5)+5;
var A = Math.floor(Math.random() * 10)+10;
var S = Math.floor(Math.random() * 15)+15;
var SS = Math.floor(Math.random() * 25)+25;
var SSS = Math.floor(Math.random() * 50)+50;
var SSSR = Math.floor(Math.random() * 10)+190;
var xnew1="��";
var xnew2="���";
var xnew3="����";
var xnew4="�����";
var xnew5="������";
var xold1="��";
var xold2="���";
var xold3="����";
var xold4="�����";
var xold5="������";
var xold0="";
function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
		if (a == -1) {
			cm.dispose();
		} else if (a == 0) {
			text = "#bװ��Ǳ��������#v2460005##rʧ�����ɿ۲���1,2,3,5,10,20,30#k\r\n";
			text += "#e#k��ͨװ������ΪC��ȫ�������+5#l\r\n"//3
			text += "#e#kC��װ��100%����ΪB�����������#r10#k��ȫ����#l\r\n"//3
			text += "#e#kB��װ��90%����ΪA�����������#r20#k��ȫ����#l\r\n"//3
			text += "#e#kA��װ��80%����ΪS�����������#r30#k��ȫ����#l\r\n"//3
            text += "#e#kS��װ��30%����ΪSS�����������#r50#k��ȫ����#l\r\n"//3
            text += "#e#kSS��װ��10%����ΪSSS�����������#r100#k��ȫ����#l\r\n"//3
			text += "#e#kSSS��װ��8%����ΪSSSR�����������#r200#k��ȫ����#l\r\n"//3
			text += "#rǱ�ܳɹ�֮�󣬻���װ������ʾװ��Ǳ�ܵȼ�\r\n";
			text += "#L0##d��ʼǱ��(#r�뽫װ���ŵ�������һ��#d)#l\r\n";
			//text += "#L1#�һ�#v2460005#��Ҫ��#v4251202#10�� - #v3994731#2�� - #v4000464#10��#l\r\n"

			cm.sendSimple(text);
		} else if (a == 1) {
			if (selection == 0) {
				if (cm.getInventory(1).getItem(1) == null) {
					cm.sendOk("�뽫Ǳ�ܵ�װ�����õ�һ��~");
					cm.dispose();
				} else if (cm.haveItem(2460005, 1) == false) {
					cm.sendOk("#v2460005#���߲��㡣");
					cm.dispose();
				} else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId()) == true) {
					cm.sendOk("��ǰװ�� #b#t" + cm.getInventory(1).getItem(1).getItemId() + "##k ����#r��װ��#k���޷�Ǳ�ܡ�");
					cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getOwner() == "") {
                    var item = cm.getInventory(1).getItem(1).copy();
                    item.setStr(item.getStr() + 5);
					item.setInt(item.getInt() + 5);
					item.setLuk(item.getLuk() + 5);
					item.setDex(item.getDex() + 5);
					item.setWatk(item.getWatk() + 5);
					item.setMatk(item.getMatk() + 5);
					item.setOwner("C");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(2460005, -1);
					cm.sendOk("Ǳ�ܳɹ�����ǰװ��Ǳ�ܵȼ�Ϊ ��#rC��#k����\r\n #r#eȫ��������[5]��");
					cm.ȫ������("��ң�["+cm.getName()+"]�ɹ�������C��װ������ϲ��ϲ��");
					cm.dispose();
					} else if (cm.haveItem(2460005, 2) == false) {
					cm.sendOk("#v2460005#���߲��㡣");
					cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getOwner() == "C") {
					var item = cm.getInventory(1).getItem(1).copy();
					item.setStr(item.getStr() + B);
					item.setInt(item.getInt() + B);
					item.setLuk(item.getLuk() + B);
					item.setDex(item.getDex() + B);
					item.setWatk(item.getWatk() + B);
					item.setMatk(item.getMatk() + B);
					item.setOwner("B");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(2460005, -2);
					cm.sendOk("Ǳ�ܳɹ�����ǰװ��Ǳ�ܵȼ�Ϊ ��#rB��#k����\r\n #r#eȫ��������["+B+"]��");
					cm.ȫ������("��ң�["+cm.getName()+"]�ɹ�������B��װ������ϲ��ϲ��");
					cm.dispose();
					} else if (cm.haveItem(2460005, 3) == false) {
					cm.sendOk("#v2460005#���߲��㡣");
					cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getOwner() == "B") {
					if (���� < 85) {
					var item = cm.getInventory(1).getItem(1).copy();
					item.setStr(item.getStr() + A);
					item.setInt(item.getInt() + A);
					item.setLuk(item.getLuk() + A);
					item.setDex(item.getDex() + A);
					item.setWatk(item.getWatk() + A);
					item.setMatk(item.getMatk() + A);
					item.setOwner("A");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(2460005, -3);
					cm.sendOk("Ǳ�ܳɹ�����ǰװ��Ǳ�ܵȼ�Ϊ ��#rA��#k����\r\n #r#eȫ��������["+A+"]��");
					cm.ȫ������("��ң�["+cm.getName()+"]�ɹ�������A��װ������ϲ��ϲ��");
					cm.dispose();
					} else {
						cm.gainItem(2460005, -3);
						cm.sendOk("ǿ��ʧ��");
						cm.dispose();
					}
					} else if (cm.haveItem(2460005, 5) == false) {
					cm.sendOk("#v2460005#���߲��㡣");
					cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getOwner() == "A") {
					if (���� < 65) {
					var item = cm.getInventory(1).getItem(1).copy();
					item.setStr(item.getStr() + S);
					item.setInt(item.getInt() + S);
					item.setLuk(item.getLuk() + S);
					item.setDex(item.getDex() + S);
					item.setWatk(item.getWatk() + S);
					item.setMatk(item.getMatk() + S);
					item.setOwner("S");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(2460005, -5);
					cm.sendOk("Ǳ�ܳɹ�����ǰװ��Ǳ�ܵȼ�Ϊ ��#rS��#k����\r\n #r#eȫ��������["+S+"]��");
					cm.ȫ������("��ң�["+cm.getName()+"]�ɹ�������S��װ������ϲ��ϲ��");
					cm.dispose();
					} else {
						cm.gainItem(2460005, -5);
						cm.sendOk("ǿ��ʧ��");
						cm.dispose();
					}
					} else if (cm.haveItem(2460005, 10) == false) {
					cm.sendOk("#v2460005#���߲��㡣");
					cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getOwner() == "S") {
					if (���� < 15) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + SS);
						item.setInt(item.getInt() + SS);
						item.setLuk(item.getLuk() + SS);
						item.setDex(item.getDex() + SS);
						item.setWatk(item.getWatk() + SS);
						item.setMatk(item.getMatk() + SS);
						item.setOwner("SS");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2460005, -10);
						cm.sendOk("Ǳ�ܳɹ�����ǰװ��Ǳ�ܵȼ�Ϊ ��#rSS��#k����\r\n #r#eȫ��������["+SS+"]��");
						cm.ȫ������("��ң�["+cm.getName()+"]�ɹ�������SS��װ������ϲ��ϲ��");
						cm.dispose();
					} else {
						cm.gainItem(2460005, -10);
						cm.sendOk("ǿ��ʧ��");
						cm.dispose();
					}
				} else if (cm.haveItem(2460005, 20) == false) {
					cm.sendOk("#v2460005#���߲��㡣");
					cm.dispose();
				} else if (cm.getInventory(1).getItem(1).getOwner() == "SS") {
					if (���� < 10) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + SSS);
						item.setInt(item.getInt() + SSS);
						item.setLuk(item.getLuk() + SSS);
						item.setDex(item.getDex() + SSS);
						item.setWatk(item.getWatk() + SSS);
						item.setMatk(item.getMatk() + SSS);
						item.setOwner("SSS");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2460005, -20);
						cm.sendOk("Ǳ�ܳɹ�����ǰװ��Ǳ�ܵȼ�Ϊ ��#rSSS��#k����\r\n #r#eȫ��������["+SSS+"]��");
						cm.ȫ������("��ң�["+cm.getName()+"]�ɹ�������SSS��װ������ϲ��ϲ��");
						cm.dispose();
					} else {
						cm.gainItem(2460005, -20);
						cm.sendOk("ǿ��ʧ��");
						cm.dispose();
					}
					} else if (cm.getInventory(1).getItem(1).getOwner() == "SSS") {
					if (���� < 8) {
						var item = cm.getInventory(1).getItem(1).copy();
						item.setStr(item.getStr() + SSSR);
						item.setInt(item.getInt() + SSSR);
						item.setLuk(item.getLuk() + SSSR);
						item.setDex(item.getDex() + SSSR);
						item.setWatk(item.getWatk() + SSSR);
						item.setMatk(item.getMatk() + SSSR);
						item.setOwner("SSSR");
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.gainItem(2460005, -30);
						cm.sendOk("Ǳ�ܳɹ�����ǰװ��Ǳ�ܵȼ�Ϊ ��#rSSSR��#k����\r\n #r#eȫ��������["+SSSR+"]��");
						cm.ȫ����ɫ����("������ҡ������["+cm.getName()+"]�ɹ�������SSSR��װ������ϲ��ϲ��");
						cm.dispose();
					} else {
						cm.gainItem(2460005, -30);
						cm.sendOk("ǿ��ʧ��");
						cm.dispose();
					}
				
				} else {
					cm.sendOk("��ǰװ���޷�����ǿ����");
					cm.dispose();
				}
			} else if(selection == 1) {
				if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
				if (cm.haveItem(3994731,5) == false) {
					cm.sendOk("��Ǹ,#v3994731#�����������㡣");
					cm.dispose();
				} else if (cm.haveItem(4000464,10) == false){
					cm.sendOk("��Ǹ��#v4000464#������������");
					cm.dispose();
				} else if (cm.haveItem(4251202,10) == false){
					cm.sendOk("��Ǹ��#v4251202#������������");
					cm.dispose();
				} else {
					if (cm.getInventory(1).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(2).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(3).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(4).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
                    if (cm.getInventory(5).isFull(0)) {
                        cm.sendNext("�����ռ䲻������޷��һ���������");
                        cm.�Ի�����();
                        return;
                    }
					cm.gainItem(4251202, -10);
					cm.gainItem(3994731, -2);
					cm.gainItem(4000464,-10);
					cm.gainItem(2460005, 1);
					cm.sendOk("�һ��ɹ���")
					cm.setBossLog("�Ŵ�")
					cm.dispose();
				}
			}
		}
	}
}