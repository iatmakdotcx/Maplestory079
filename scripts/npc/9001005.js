var Equitype = [
    1142574,
    1142541,
    1142573
];
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

var xnew1="����ǿ��1��";
var xnew2="����ǿ��2��";
var xnew3="����ǿ��3��";
var xnew4="����ǿ��4��";
var xnew5="����ǿ��5��";
var xnew6="�������";
var xnew7="7��";
var xnew8="8��";
var xnew9="9��";
var xnew10="10��";
var xold1="����ǿ��1��";
var xold2="����ǿ��2��";
var xold3="����ǿ��3��";
var xold4="����ǿ��4��";
var xold5="����ǿ��5��";
var xold6="�������";
var xold7="7��";
var xold8="8��";
var xold9="9��";
var xold0="";

var rand=Math.floor(Math.random()*100);
//////////////////////////////////////////////////////////
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
var textz = "\r\n"
textz += "   \t\t\t   #e#d��ӭ����#r��������ϵͳ#k#r#n \r\n"
textz += "   #b   ���¼ǵúúÿ�˵��Ŷ���ں�����ϵͳ��ϸ����#k#n\r\n"
textz += "  #k         �мǱ�ҵװ����Ҫʹ�øù���#k#n\r\n"
textz += "  #k         �мǱ�ҵװ����Ҫʹ�øù���#k#n\r\n"
textz += "  #k         �мǱ�ҵװ����Ҫʹ�øù���#k#n\r\n"
textz += "#L0##b" + ��ɫ��ͷ + "����ϵͳ˵��\r\n";
textz += "#L1##b" + ��ɫ��ͷ + "����#e#b��#n#r����ǿ���������#e#b��" + ��ɫ�ǵ� + "  ��Ҫ#v3992025#��10��#l\r\n";
textz += "#L2##b" + ��ɫ��ͷ + "����#e#b��#n#r����ǿ��������#e#b��" + ��ɫ�ǵ� + "  ��Ҫ#v3992025#��20��#l\r\n";
textz += "#L3##b" + ��ɫ��ͷ + "����#e#b��#n#r����ǿ�������#e#b��" + ��ɫ�ǵ� + "  ��Ҫ#v3992025#��30��#l\r\n";
textz += "#L4##b" + ��ɫ��ͷ + "����#e#b��#n#r����ǿ������#e#b��" + ��ɫ�ǵ� + "  ��Ҫ#v3992025#��40��#l\r\n";
textz += "#L5##b" + ��ɫ��ͷ + "����#e#b��#n#r����ǿ��������#e#b��" + ��ɫ�ǵ� + "  ��Ҫ#v3992025#��50��#l\r\n";
//textz += "#L6##b" + ��ɫ��ͷ + "����#e#b��#n#r�������#e#b��" + ��ɫ�ǵ� + "  ��Ҫ#v3992025#��500��#l\r\n";
//textz += "#L7##b" + ��ɫ��ͷ + "����#e#b��#n#r7��#e#b��" + ��ɫ�ǵ� + "  ��Ҫ#v3992025#��600��#l\r\n";
//textz += "#L8##b" + ��ɫ��ͷ + "����#e#b��#n#r8��#e#b��" + ��ɫ�ǵ� + "  ��Ҫ#v3992025#��700��#l\r\n";
//textz += "#L9##b" + ��ɫ��ͷ + "����#e#b��#n#r9��#e#b��" + ��ɫ�ǵ� + "  ��Ҫ#v3992025#��800��#l\r\n";
//textz += "#L10##b" + ��ɫ��ͷ + "����#e#b��#n#r10��#e#b��" + ��ɫ�ǵ� + "  ��Ҫ#v3992025#��900��#l\r\n";
cm.sendSimple (textz);   


				
}else if (status == 1) {

var ii = Packages.server.MapleItemInformationProvider.getInstance();
var item = cm.getInventory(1).getItem(1);
 if (selection == 0) {
cm.sendOk("ȫ���ԣ�����ϵͳ���뵽#r10��#k����ʹ��~\r\n\r\n�����Ҫ���ǵ�װ������#b������һ�񣡣���\r\n\r\nװ��������������#r��#k���ɼ�����#r���#k���޷���Ծʽ����.#k#n\r\n\r\n�ɹ���90%#r��#kȫ���ԣ���˫G��+2\r\n�ɹ���80%#r���#kȫ���ԣ���˫G��+3\r\n�ɹ���70%#r����#kȫ���ԣ���˫G��+5\r\n�ɹ���60%#r�����#kȫ���ԣ���˫G��+8\r\n�ɹ���50%#r������#kȫ���ԣ���˫G��+10\r\n\n");
            cm.dispose();
}else if (selection == 1) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("���װ������һ��û��װ��������Ϊ�̳���Ʒ�����ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold0){//����Ƿ���������Ʒ
cm.sendOk("#e#d����װ��#r�Ǽ�#dΪ#k��#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k��#d����ǿ������");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 10)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew1);
//item.setLocked(1);
cm.gainItem(3992025,-10);
			if(rand>5){
				var hwchancess= 2;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻����ϲ��"+ cm.getChar().getName() +"����װ����Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս�������������");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#������#r "+xnew1+"");
        cm.dispose();
			}else{
		cm.sendOk("��һ��������ʧ��");
        cm.dispose();
			}
     }else{
        cm.sendOk("û���㹻��#v3992025#");
        cm.dispose();
}


}else if (selection == 2) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("���װ������һ��û��װ��������Ϊ�̳���Ʒ�����ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold1){//����Ƿ���������Ʒ
cm.sendOk("#e#d����װ��#r�Ǽ�#dΪ#k��#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k��#dδ����ǿ��Ҫ�󣡣�");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 20)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew2);
cm.gainItem(3992025,-20);
		if(rand>5){
				var hwchancess= 3;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻����ϲ��"+ cm.getChar().getName() +"����װ����Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս�������������");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#������#r "+xnew2+"");
        cm.dispose();
		}else{
			cm.sendOk("�ڶ���������ʧ��");
			
        cm.dispose();
		}
     }else{
        cm.sendOk("û���㹻��#v3992025#");
        cm.dispose();
}


}else if (selection == 3) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("���װ������һ��û��װ��������Ϊ�̳���Ʒ�����ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold2){//����Ƿ���������Ʒ
cm.sendOk("#e#d����װ��#r�Ǽ�#dΪ#k��#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k��#dδ����ǿ��Ҫ�󣡣�");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 30)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew3);
cm.gainItem(3992025,-30);
			if(rand>5){
				var hwchancess= 5;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻����ϲ��"+ cm.getChar().getName() +"����װ����Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս�������������");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#������#r "+xnew3+"");
        cm.dispose();
			}else{
		cm.sendOk("������������ʧ��");
        cm.dispose();
			}
     }else{
        cm.sendOk("û���㹻��#v3992025#");
        cm.dispose();
}

}else if (selection == 4) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("���װ������һ��û��װ��������Ϊ�̳���Ʒ�����ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold3){//����Ƿ���������Ʒ
cm.sendOk("#e#d����װ��#r�Ǽ�#dΪ#k��#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k��#dδ����ǿ��Ҫ�󣡣�");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 40)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew4);
cm.gainItem(3992025,-40);
			if(rand>5){
				var hwchancess= 8;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻����ϲ��"+ cm.getChar().getName() +"����װ����Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս�������������");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#������#r "+xnew4+"");
        cm.dispose();
						}else{
		cm.sendOk("���Ŀ�������ʧ��");
        cm.dispose();
			}
     }else{
        cm.sendOk("û���㹻��#v3992025#");
        cm.dispose();
}


}else if (selection == 5) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("���װ������һ��û��װ��������Ϊ�̳���Ʒ�����ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold4){
cm.sendOk("#e#d����װ��#r�Ǽ�#dΪ#k��#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k��#dδ����ǿ��Ҫ�󣡣�");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 50)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew5);
cm.gainItem(3992025,-50);
			if(rand>5){
				var hwchancess= 10;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻����ϲ��"+ cm.getChar().getName() +"����װ����Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս�������������");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#������#r "+xnew5+"");
        cm.dispose();
						}else{
		cm.sendOk("�����������ʧ��");
        cm.dispose();
			}
     }else{
        cm.sendOk("û���㹻��#v3992025#");
        cm.dispose();
}
}else if (selection == 6) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("���װ������һ��û��װ��������Ϊ�̳���Ʒ�����ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold5){
cm.sendOk("#e#d����װ��#r�Ǽ�#dΪ#k��#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k��#dδ����ǿ��Ҫ�󣡣�");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 500)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew6);
cm.gainItem(3992025,-500);
			if(rand>5){
				var hwchancess= 12;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻����ϲ��"+ cm.getChar().getName() +"����װ����Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս�������������");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#������#r "+xnew6+"");
        cm.dispose();
			}else{
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew4);

				var hwchancess= 10;
					item.setStr(item.getStr()*1-hwchancess);
					item.setDex(item.getDex()*1-hwchancess);
					item.setInt(item.getInt()*1-hwchancess);
					item.setLuk(item.getLuk()*1-hwchancess);
					item.setWdef(item.getWdef()*1-hwchancess);
					item.setMdef(item.getMdef()*1-hwchancess);
					item.setMatk(item.getMatk()*1-hwchancess);
					item.setWatk(item.getWatk()*1-hwchancess);
					item.setHp(item.getHp()*1-hwchancess);
					item.setMp(item.getMp()*1-hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻�����ź���"+ cm.getChar().getName() +"����װ������ʧ�ܽ�Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս����������ͣ�");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#��Ϊ��#r "+xnew4+"");
				//cm.sendOk("������������ʧ��");
        cm.dispose();
			}
     }else{
        cm.sendOk("û���㹻��#v3992025#");
        cm.dispose();
}
}else if (selection == 7) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("���װ������һ��û��װ��������Ϊ�̳���Ʒ�����ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold6){ 
cm.sendOk("#e#d����װ��#r�Ǽ�#dΪ#k��#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k��#dδ����ǿ��Ҫ�󣡣�");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 600)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew7);
cm.gainItem(3992025,-600);
			if(rand>70){
				var hwchancess= 14;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻����ϲ��"+ cm.getChar().getName() +"����װ����Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս�������������");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#������#r "+xnew7+"");
        cm.dispose();
			}else{
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew5);

				var hwchancess= 12;
					item.setStr(item.getStr()*1-hwchancess);
					item.setDex(item.getDex()*1-hwchancess);
					item.setInt(item.getInt()*1-hwchancess);
					item.setLuk(item.getLuk()*1-hwchancess);
					item.setWdef(item.getWdef()*1-hwchancess);
					item.setMdef(item.getMdef()*1-hwchancess);
					item.setMatk(item.getMatk()*1-hwchancess);
					item.setWatk(item.getWatk()*1-hwchancess);
					item.setHp(item.getHp()*1-hwchancess);
					item.setMp(item.getMp()*1-hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻�����ź���"+ cm.getChar().getName() +"����װ������ʧ�ܽ�Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս����������ͣ�");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#��Ϊ��#r "+xnew5+"");
				//cm.sendOk("���߿�������ʧ��");
        cm.dispose();
			}
     }else{
        cm.sendOk("û���㹻��#v3992025#");
        cm.dispose();
}
}else if (selection == 8) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("���װ������һ��û��װ��������Ϊ�̳���Ʒ�����ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold7){ 
cm.sendOk("#e#d����װ��#r�Ǽ�#dΪ#k��#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k��#dδ����ǿ��Ҫ�󣡣�");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 700)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew8);
cm.gainItem(3992025,-700);
			if(rand>75){
				var hwchancess= 16;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻����ϲ��"+ cm.getChar().getName() +"����װ����Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս�������������");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#������#r "+xnew8+"");
        cm.dispose();
			}else{
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew6);

				var hwchancess= 14;
					item.setStr(item.getStr()*1-hwchancess);
					item.setDex(item.getDex()*1-hwchancess);
					item.setInt(item.getInt()*1-hwchancess);
					item.setLuk(item.getLuk()*1-hwchancess);
					item.setWdef(item.getWdef()*1-hwchancess);
					item.setMdef(item.getMdef()*1-hwchancess);
					item.setMatk(item.getMatk()*1-hwchancess);
					item.setWatk(item.getWatk()*1-hwchancess);
					item.setHp(item.getHp()*1-hwchancess);
					item.setMp(item.getMp()*1-hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻�����ź���"+ cm.getChar().getName() +"����װ������ʧ�ܽ�Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս����������ͣ�");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#��Ϊ��#r "+xnew6+"");
				//cm.sendOk("�ڰ˿�������ʧ��");
        cm.dispose();
			}
     }else{
        cm.sendOk("û���㹻��#v3992025#");
        cm.dispose();
}
}else if (selection == 9) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("���װ������һ��û��װ��������Ϊ�̳���Ʒ�����ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold8){ 
cm.sendOk("#e#d����װ��#r�Ǽ�#dΪ#k��#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k��#dδ����ǿ��Ҫ�󣡣�");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 800)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew9);
cm.gainItem(3992025,-800);
			if(rand>80){
				var hwchancess= 18;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻����ϲ��"+ cm.getChar().getName() +"����װ����Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս�������������");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#������#r "+xnew9+"");
        cm.dispose();
			}else{
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew7);

				var hwchancess= 16;
					item.setStr(item.getStr()*1-hwchancess);
					item.setDex(item.getDex()*1-hwchancess);
					item.setInt(item.getInt()*1-hwchancess);
					item.setLuk(item.getLuk()*1-hwchancess);
					item.setWdef(item.getWdef()*1-hwchancess);
					item.setMdef(item.getMdef()*1-hwchancess);
					item.setMatk(item.getMatk()*1-hwchancess);
					item.setWatk(item.getWatk()*1-hwchancess);
					item.setHp(item.getHp()*1-hwchancess);
					item.setMp(item.getMp()*1-hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻�����ź���"+ cm.getChar().getName() +"����װ������ʧ�ܽ�Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս����������ͣ�");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#��Ϊ��#r "+xnew7+"");
				//cm.sendOk("�ھſ�������ʧ��");
        cm.dispose();
			}
     }else{
        cm.sendOk("û���㹻��#v3992025#");
        cm.dispose();
}
}else if (selection == 10) {
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
cm.sendOk("���װ������һ��û��װ��������Ϊ�̳���Ʒ�����ܽ��д˲���!..");
cm.dispose();
return;
}
if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xold9){ 
cm.sendOk("#e#d����װ��#r�Ǽ�#dΪ#k��#b"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"#k��#dδ����ǿ��Ҫ�󣡣�");
cm.dispose();
return;
}
if(cm.haveItem(3992025, 900)) { 
var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew10);
cm.gainItem(3992025,-900);
			if(rand>85){
				var hwchancess= 20;
					item.setStr(item.getStr()*1+hwchancess);
					item.setDex(item.getDex()*1+hwchancess);
					item.setInt(item.getInt()*1+hwchancess);
					item.setLuk(item.getLuk()*1+hwchancess);
					item.setWdef(item.getWdef()*1+hwchancess);
					item.setMdef(item.getMdef()*1+hwchancess);
					item.setMatk(item.getMatk()*1+hwchancess);
					item.setWatk(item.getWatk()*1+hwchancess);
					item.setHp(item.getHp()*1+hwchancess);
					item.setMp(item.getMp()*1+hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻����ϲ��"+ cm.getChar().getName() +"����װ����Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս�������������");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#������#r "+xnew10+"");
        cm.dispose();
			}else{
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
var statup = new java.util.ArrayList();
item.setOwner(xnew8);

				var hwchancess= 18;
					item.setStr(item.getStr()*1-hwchancess);
					item.setDex(item.getDex()*1-hwchancess);
					item.setInt(item.getInt()*1-hwchancess);
					item.setLuk(item.getLuk()*1-hwchancess);
					item.setWdef(item.getWdef()*1-hwchancess);
					item.setMdef(item.getMdef()*1-hwchancess);
					item.setMatk(item.getMatk()*1-hwchancess);
					item.setWatk(item.getWatk()*1-hwchancess);
					item.setHp(item.getHp()*1-hwchancess);
					item.setMp(item.getMp()*1-hwchancess);
Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
var a=item.getItemId();
cm.serverNotice("�����ǹ��桻�����ź���"+ cm.getChar().getName() +"����װ������ʧ�ܽ�Ϊ��"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�� ս����������ͣ�");
        cm.sendOk("#e#b�ɹ��Ľ�  #v"+a+"#��Ϊ��#r "+xnew8+"");
				//cm.sendOk("��ʮ��������ʧ��");
        cm.dispose();
			}
     }else{
        cm.sendOk("û���㹻��#v3992025#");
        cm.dispose();
}

  }
    }
      }
        }


