var a = 0;
var text;
var selects; //��¼��ҵ�ѡ��
var buynum = 0;
var ���� = Math.floor(Math.random() * 55);
var B = Math.floor(Math.random() * 5)+5;
var A = Math.floor(Math.random() * 5)+15;
var S = Math.floor(Math.random() * 10)+20;
var SS = Math.floor(Math.random() * 10)+40;
var SSS = Math.floor(Math.random() * 30)+70;
var SSSR = Math.floor(Math.random() * 40)+160;
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
		
			if (selection == 0) {
				var dmID = cm.getInventory(1).getItem(1).getItemId();
		        if(dmID!=1142358) {
		        cm.sendOk("��#v1142358#���ڵ�һ��!");		
				}
			 else	if (cm.haveItem(4000019, 3000) && cm.haveItem(4000016, 3000) && cm.haveItem(4000000, 3000) && cm.getPlayer().getNX() > 100000 && cm.getPlayer().getCSPoints(2) > 100000 && cm.getPlayer().getMeso() > 10000000 && cm.getInventory(1).getItem(1).getOwner() == "����") {
					var item = cm.getInventory(1).getItem(1).copy();
					item.setStr(item.getStr() + 20);
					item.setInt(item.getInt() + 20);
					item.setLuk(item.getLuk() + 20);
					item.setDex(item.getDex() + 20);
					item.setWatk(item.getWatk() + 0);
					item.setMatk(item.getMatk() + 0);
					item.setOwner("����");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(4000019, -3000);
					cm.gainItem(4000016, -3000);
					cm.gainItem(4000000, -3000);
					cm.gainNX(-100000);
					cm.gainDY(-100000);
					cm.gainMeso(-10000000)
					cm.sendOk("ǿ���ɹ�����ǰװ���ȼ�Ϊ ��#r����#k����\r\n #r#eȫ��������[20]��");
					cm.ȫ������("��ң�["+cm.getName()+"]�ɹ�ǿ������ѫ��Ϊ���񻰣���ϲ��ϲ��");
					cm.dispose();
				} else {
					cm.sendOk("��ǰװ���޷�����ǿ�������߲��ϲ���");
					cm.dispose();
				
				}
			}
		}
	}
}