var Equitype = [
    1142574,
    1142541,
    1142573
];
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var ����Ҷ ="#fMap/MapHelper/weather/maple/3#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var ���� ="#fMap/MapHelper/weather/witch/3#";
var sd = 0;

var xnew0="";
var xnew1="1��";
var xnew2="2��";
var xnew3="3��";
var xnew4="4��";
var xnew5="5��";
var xnew6="6��";
var xnew7="7��";
var xnew8="8��";
var xnew9="9��";
var xnew10="10��";
var xnew11="11��";
var xnew12="12��";
var xnew13="13��";
var xnew14="14��";
var xnew15="15��";
var xnew16="16��";
var xnew17="17��";
var xnew18="18��";
var xnew19="19��";
var xnew20="20��";
var xnew21="21��";
var xnew22="22��";
var xnew23="23��";
var xnew24="24��";
var xnew25="25��";

var rand=Math.floor(Math.random()*100);
var rand1=Math.floor(Math.random()*100);

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
			var textz = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n";
				textz += "             #r��ӭ��������ð�յ���֮��ǿ��#k\r\n";
				textz += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n";
				textz += "#L0##r"+С�̻� +"��֮��ǿ��˵��"+С�̻� +"#l      #L1##r"+С�̻� +"�Ǽ��سɱ�ǿ��"+С�̻� +"#l\r\n\r\n\r\n";
				textz += "#r      �Ǽ���       �ɹ���  ʧ��ʱ������    ����\r\n";
				textz += "#L2#"+С�̻� +"#e#r1��#bǿ��     100%      0%      #v3992025#*100#l\r\n";
				textz += "#L3#"+С�̻� +"#r2��#bǿ��     100%      0%      #v3992025#*200#l\r\n";
				textz += "#L4#"+С�̻� +"#r3��#bǿ��     100%      0%      #v3992025#*300#l\r\n";
				textz += "#L5#"+С�̻� +"#r4��#bǿ��     100%      0%      #v3992025#*400#l\r\n";
				textz += "#L6#"+С�̻� +"#r5��#bǿ��     100%      0%      #v3992025#*500#l\r\n";
				textz += "#L7#"+С�̻� +"#r6��#bǿ��     100%      0%      #v3992025#*600#l\r\n";
				textz += "#L8#"+С�̻� +"#r7��#bǿ��     100%      0%      #v3992025#*700#l\r\n";
				textz += "#L9#"+С�̻� +"#r8��#bǿ��     90%       0%      #v3992025#*800#l\r\n";
				textz += "#L10#"+С�̻� +"#r9��#bǿ��     80%       0%      #v3992025#*900#l\r\n";
				textz += "#L11#"+С�̻� +"#r10��#bǿ��    70%       0%      #v3992025#*1000#l\r\n";
				textz += "#L12#"+С�̻� +"#r11��#bǿ��    60%       0%      #v3992025#*1100#l\r\n";
				textz += "#L13#"+С�̻� +"#r12��#bǿ��    55%       10%     #v3992025#*1200#l\r\n";
				textz += "#L14#"+С�̻� +"#r13��#bǿ��    50%       15%     #v3992025#*1300#l\r\n";
				textz += "#L15#"+С�̻� +"#r14��#bǿ��    45%       20%     #v3992025#*1400#l\r\n";
				textz += "#L16#"+С�̻� +"#r15��#bǿ��    40%       25%     #v3992025#*1500#l\r\n";
				//textz += "#L17#"+С�̻� +"#r16��#bǿ��    40%       25%      #v3992025#*3000#l\r\n";
				//textz += "#L18#"+С�̻� +"#r17��#bǿ��    40%       20%     #v3992025#*3000#l\r\n";
				//textz += "#L19#"+С�̻� +"#r18��#bǿ��    35%       25%     #v3992025#*3000#l\r\n";
				//textz += "#L20#"+С�̻� +"#r19��#bǿ��    35%       30%     #v3992025#*3000#l\r\n";
				//textz += "#L21#"+С�̻� +"#r20��#bǿ��    30%       30%     #v3992025#*3000#l\r\n";
				//textz += "#L22#"+С�̻� +"#r21��#bǿ��    30%       30%      #v3992025#*3500#l\r\n";
				//textz += "#L23#"+С�̻� +"#r22��#bǿ��    30%       30%     #v3992025#*3500#l\r\n";
				//textz += "#L24#"+С�̻� +"#r23��#bǿ��    25%       35%     #v3992025#*3500#l\r\n";				
				//textz += "#L25#"+С�̻� +"#r24��#bǿ��    20%       40%     #v3992025#*3500#l\r\n";
				//textz += "#L26#"+С�̻� +"#r25��#bǿ��    15%       45%     #v3992025#*3500#l\r\n";
			cm.sendSimple (textz);   
		}
		else if (status == 1) {
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
			var item = cm.getInventory(1).getItem(1);
			if (selection == 0) {
				var texts = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n";
				texts += "           #r��ӭ��������ð�յ���֮��ǿ��˵��#k\r\n";
				texts += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
				texts += "     #r��Ҫ��֮��ǿ����װ��������ڱ���װ������һ��\r\n\r\n";
				texts += " #b����ǿ���轫װ��ǿ����#r1��#b��ſɼ���ǿ��#r2��#b����������\r\n\r\n";
				texts += "     #b�Ǽ��سɱ�ǿ���ɽ�װ����#r0��#bֱ��ǿ������Ӧ�Ǽ�\r\n\r\n";
				texts += " #r1��#b��#r7��#b100%�ɹ���#r7��#b����ʧ���ʣ�ʧ��ʱС���ʽ���#r1��\r\n\r\n";
				texts += " #bÿ�ɹ�ǿ��#r1��#b��װ����������Ӧ��������������������\r\n\r\n";
				texts += "      #rǿ����#b15��#rһ���ɻ�����ԣ���ά120����ħ120\r\n\r\n";
				texts += "#r1��#bǿ������ά1����ħ1����#r2��#bǿ������ά2����ħ2��\r\n\r\n";
				texts += "#r3��#bǿ������ά3����ħ3����#r4��#bǿ������ά4����ħ4��\r\n\r\n";
				texts += "#r5��#bǿ������ά5����ħ5����#r6��#bǿ������ά6����ħ6��\r\n\r\n";
				texts += "#r7��#bǿ������ά7����ħ7����#r8��#bǿ������ά8����ħ8��\r\n\r\n";
				texts += "#r9��#bǿ������ά9����ħ9����#r10��#bǿ������ά10����ħ10��\r\n\r\n";
				texts += "#r11��#bǿ������ά11����ħ1����#r12��#bǿ������ά12����ħ12��\r\n\r\n";
				texts += "#r13��#bǿ������ά13����ħ13����#r14��#bǿ������ά14����ħ14��\r\n\r\n";
				texts += "#r15��#bǿ������ά15����ħ15��\r\n\r\n";
				//texts += "#r17��#bǿ������ά23����ħ14����#r18��#bǿ������ά26����ħ16��\r\n\r\n";
				//texts += "#r19��#bǿ������ά29����ħ18����#r20��#bǿ������ά32����ħ20��\r\n\r\n";
				//texts += "#r21��#bǿ������ά36����ħ24����#r22��#bǿ������ά40����ħ28��\r\n\r\n";
				//texts += "#r23��#bǿ������ά44����ħ32����#r24��#bǿ������ά48����ħ36��\r\n\r\n";
				//texts += "#r25��#bǿ������ά52����ħ40��\r\n\r\n";
				cm.sendOk(texts);
				cm.dispose();
			}
			else if (selection == 1){
				cm.openNpc(9310072,11);		
			}
			else if (selection == 2) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew0){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r1��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 100)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew1);
					cm.gainItem(3992025,-100);
					if(rand>=0){
							item.setStr(item.getStr()*1+1);
							item.setDex(item.getDex()*1+1);
							item.setInt(item.getInt()*1+1);
							item.setLuk(item.getLuk()*1+1);
							item.setMatk(item.getMatk()*1+1);
							item.setWatk(item.getWatk()*1+1);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew1+"��");
						cm.dispose();
					}else{
						cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection == 3) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew1){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r2��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 200)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew2);
					cm.gainItem(3992025,-200);
					if(rand>=0){
							item.setStr(item.getStr()*1+2);
							item.setDex(item.getDex()*1+2);
							item.setInt(item.getInt()*1+2);
							item.setLuk(item.getLuk()*1+2);
							item.setMatk(item.getMatk()*1+2);
							item.setWatk(item.getWatk()*1+2);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew2+"��");
						cm.dispose();
					}else{
						cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection == 4) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew2){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r3��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 300)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew3);
					cm.gainItem(3992025,-300);
					if(rand>=0){
							item.setStr(item.getStr()*1+3);
							item.setDex(item.getDex()*1+3);
							item.setInt(item.getInt()*1+3);
							item.setLuk(item.getLuk()*1+3);
							item.setMatk(item.getMatk()*1+3);
							item.setWatk(item.getWatk()*1+3);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew3+"��");
						cm.dispose();
					}else{
						cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection == 5) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew3){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r4��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 400)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew4);
					cm.gainItem(3992025,-400);
					if(rand>=0){
							item.setStr(item.getStr()*1+4);
							item.setDex(item.getDex()*1+4);
							item.setInt(item.getInt()*1+4);
							item.setLuk(item.getLuk()*1+4);
							item.setMatk(item.getMatk()*1+4);
							item.setWatk(item.getWatk()*1+4);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew4+"��");
						cm.dispose();
					}else{
						cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection == 6) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew4){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r5��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 500)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew5);
					cm.gainItem(3992025,-500);
					if(rand>=0){
							item.setStr(item.getStr()*1+5);
							item.setDex(item.getDex()*1+5);
							item.setInt(item.getInt()*1+5);
							item.setLuk(item.getLuk()*1+5);
							item.setMatk(item.getMatk()*1+5);
							item.setWatk(item.getWatk()*1+5);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew5+"��");
						cm.dispose();
					}else{
						cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection == 7) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew5){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r6��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 600)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew6);
					cm.gainItem(3992025,-600);
					if(rand>=0){
							item.setStr(item.getStr()*1+6);
							item.setDex(item.getDex()*1+6);
							item.setInt(item.getInt()*1+6);
							item.setLuk(item.getLuk()*1+6);
							item.setMatk(item.getMatk()*1+6);
							item.setWatk(item.getWatk()*1+6);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew6+"��");
						cm.dispose();
					}else{
						cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection == 8) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew6){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r7��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 700)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew7);
					cm.gainItem(3992025,-700);
					if(rand>=0){
							item.setStr(item.getStr()*1+7);
							item.setDex(item.getDex()*1+7);
							item.setInt(item.getInt()*1+7);
							item.setLuk(item.getLuk()*1+7);
							item.setMatk(item.getMatk()*1+7);
							item.setWatk(item.getWatk()*1+7);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew7+"��");
						cm.dispose();
					}else{
						cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection == 9) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew7){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r8��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 800)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew8);
					cm.gainItem(3992025,-800);
					if(rand>=30){
							item.setStr(item.getStr()*1+8);
							item.setDex(item.getDex()*1+8);
							item.setInt(item.getInt()*1+8);
							item.setLuk(item.getLuk()*1+8);
							item.setMatk(item.getMatk()*1+8);
							item.setWatk(item.getWatk()*1+8);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew8+"��");
						cm.dispose();
					}else{
						item.setOwner(xnew7);
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���"+ cm.getChar().getName() +"ʹ����֮��ǿ��ʧ�ܣ����������װ����֮������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
						cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection == 10) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew8){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r9��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 900)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew9);
					cm.gainItem(3992025,-900);
					if(rand>=40){
							item.setStr(item.getStr()*1+9);
							item.setDex(item.getDex()*1+9);
							item.setInt(item.getInt()*1+9);
							item.setLuk(item.getLuk()*1+9);
							item.setMatk(item.getMatk()*1+9);
							item.setWatk(item.getWatk()*1+9);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew9+"��");
						cm.dispose();
					}else{
						item.setOwner(xnew8);
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���"+ cm.getChar().getName() +"ʹ����֮��ǿ��ʧ�ܣ����������װ����֮������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
						cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection ==11) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew9){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r10��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 1000)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew10);
					cm.gainItem(3992025,-1000);
					if(rand>=35){
							item.setStr(item.getStr()*1+10);
							item.setDex(item.getDex()*1+10);
							item.setInt(item.getInt()*1+10);
							item.setLuk(item.getLuk()*1+10);
							item.setMatk(item.getMatk()*1+10);
							item.setWatk(item.getWatk()*1+10);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew10+"��");
						cm.dispose();
					}else{
						item.setOwner(xnew9);
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���"+ cm.getChar().getName() +"ʹ����֮��ǿ��ʧ�ܣ����������װ����֮������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
						cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection ==12) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew10){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r11��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 1100)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew11);
					cm.gainItem(3992025,-1100);
					if(rand>=45){
							item.setStr(item.getStr()*1+11);
							item.setDex(item.getDex()*1+11);
							item.setInt(item.getInt()*1+11);
							item.setLuk(item.getLuk()*1+11);
							item.setMatk(item.getMatk()*1+11);
							item.setWatk(item.getWatk()*1+11);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew11+"��");
						cm.dispose();
					}else{
						item.setOwner(xnew10);
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���"+ cm.getChar().getName() +"ʹ����֮��ǿ��ʧ�ܣ����������װ����֮������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
						cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
						cm.dispose();
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection ==13) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew11){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r12��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 1200)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew12);
					cm.gainItem(3992025,-1200);
					if(rand>=50){
							item.setStr(item.getStr()*1+12);
							item.setDex(item.getDex()*1+12);
							item.setInt(item.getInt()*1+12);
							item.setLuk(item.getLuk()*1+12);
							item.setMatk(item.getMatk()*1+12);
							item.setWatk(item.getWatk()*1+12);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew12+"��");
						cm.dispose();
					}else{
						if(rand1>=90){
							item.setOwner(xnew10);
							item.setStr(item.getStr()*1-11);
							item.setDex(item.getDex()*1-11);
							item.setInt(item.getInt()*1-11);
							item.setLuk(item.getLuk()*1-11);
							item.setMatk(item.getMatk()*1-11);
							item.setWatk(item.getWatk()*1-11);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���������֮��ǿ��ʧ�ܣ�"+ cm.getChar().getName() +"��װ����֮��������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b���ź���������֮��ǿ��ʧ�ܣ�#v"+a+"##r#z"+a+"##b����֮��������#r"+xnew10+"��");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew11);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���"+ cm.getChar().getName() +"ʹ����֮��ǿ��ʧ�ܣ����������װ����֮������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection ==14) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew12){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r13��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 1300)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew13);
					cm.gainItem(3992025,-1300);
					if(rand>=55){
							item.setStr(item.getStr()*1+13);
							item.setDex(item.getDex()*1+13);
							item.setInt(item.getInt()*1+13);
							item.setLuk(item.getLuk()*1+13);
							item.setMatk(item.getMatk()*1+13);
							item.setWatk(item.getWatk()*1+13);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew13+"��");
						cm.dispose();
					}else{
						if(rand1>=65){
							item.setOwner(xnew11);
							item.setStr(item.getStr()*1-12);
							item.setDex(item.getDex()*1-12);
							item.setInt(item.getInt()*1-12);
							item.setLuk(item.getLuk()*1-12);
							item.setMatk(item.getMatk()*1-12);
							item.setWatk(item.getWatk()*1-12);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���������֮��ǿ��ʧ�ܣ�"+ cm.getChar().getName() +"��װ����֮��������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b���ź���������֮��ǿ��ʧ�ܣ�#v"+a+"##r#z"+a+"##b����֮��������#r"+xnew11+"��");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew12);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���"+ cm.getChar().getName() +"ʹ����֮��ǿ��ʧ�ܣ����������װ����֮������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection ==15) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew13){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r14��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 1400)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew14);
					cm.gainItem(3992025,-1400);
					if(rand>=60){
							item.setStr(item.getStr()*1+14);
							item.setDex(item.getDex()*1+14);
							item.setInt(item.getInt()*1+14);
							item.setLuk(item.getLuk()*1+14);
							item.setMatk(item.getMatk()*1+14);
							item.setWatk(item.getWatk()*1+14);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew14+"��");
						cm.dispose();
					}else{
						if(rand1>=40){
							item.setOwner(xnew12);
							item.setStr(item.getStr()*1-13);
							item.setDex(item.getDex()*1-13);
							item.setInt(item.getInt()*1-13);
							item.setLuk(item.getLuk()*1-13);
							item.setMatk(item.getMatk()*1-13);
							item.setWatk(item.getWatk()*1-13);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���������֮��ǿ��ʧ�ܣ�"+ cm.getChar().getName() +"��װ����֮��������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b���ź���������֮��ǿ��ʧ�ܣ�#v"+a+"##r#z"+a+"##b����֮��������#r"+xnew12+"��");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew13);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���"+ cm.getChar().getName() +"ʹ����֮��ǿ��ʧ�ܣ����������װ����֮������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}else if (selection ==16) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew14){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r15��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 1500)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew15);
					cm.gainItem(3992025,-1500);
					if(rand>=65){
							item.setStr(item.getStr()*1+15);
							item.setDex(item.getDex()*1+15);
							item.setInt(item.getInt()*1+15);
							item.setLuk(item.getLuk()*1+15);
							item.setMatk(item.getMatk()*1+15);
							item.setWatk(item.getWatk()*1+15);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew15+"��");
						cm.dispose();
					}else{
						if(rand1>=60){
							item.setOwner(xnew13);
							item.setStr(item.getStr()*1-14);
							item.setDex(item.getDex()*1-14);
							item.setInt(item.getInt()*1-14);
							item.setLuk(item.getLuk()*1-14);
							item.setMatk(item.getMatk()*1-14);
							item.setWatk(item.getWatk()*1-14);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���������֮��ǿ��ʧ�ܣ�"+ cm.getChar().getName() +"��װ����֮��������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b���ź���������֮��ǿ��ʧ�ܣ�#v"+a+"##r#z"+a+"##b����֮��������#r"+xnew13+"��");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew14);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���"+ cm.getChar().getName() +"ʹ����֮��ǿ��ʧ�ܣ����������װ����֮������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection ==17) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew15){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r16��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3000)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew16);
					cm.gainItem(3992025,-3000);
					if(rand>=85){
							item.setStr(item.getStr()*1+16);
							item.setDex(item.getDex()*1+16);
							item.setInt(item.getInt()*1+16);
							item.setLuk(item.getLuk()*1+16);
							item.setMatk(item.getMatk()*1+16);
							item.setWatk(item.getWatk()*1+16);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew16+"��");
						cm.dispose();
					}else{
						if(rand1>=70){
							item.setOwner(xnew14);
							item.setStr(item.getStr()*1-15);
							item.setDex(item.getDex()*1-15);
							item.setInt(item.getInt()*1-15);
							item.setLuk(item.getLuk()*1-15);
							item.setMatk(item.getMatk()*1-15);
							item.setWatk(item.getWatk()*1-15);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���������֮��ǿ��ʧ�ܣ�"+ cm.getChar().getName() +"��װ����֮��������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b���ź���������֮��ǿ��ʧ�ܣ�#v"+a+"##r#z"+a+"##b����֮��������#r"+xnew14+"��");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew15);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���"+ cm.getChar().getName() +"ʹ����֮��ǿ��ʧ�ܣ����������װ����֮������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection ==18) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew16){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r17��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3000)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew17);
					cm.gainItem(3992025,-3000);
					if(rand>=85){
							item.setStr(item.getStr()*1+17);
							item.setDex(item.getDex()*1+17);
							item.setInt(item.getInt()*1+17);
							item.setLuk(item.getLuk()*1+17);
							item.setMatk(item.getMatk()*1+17);
							item.setWatk(item.getWatk()*1+17);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew17+"��");
						cm.dispose();
					}else{
						if(rand1>=70){
							item.setOwner(xnew15);
							item.setStr(item.getStr()*1-16);
							item.setDex(item.getDex()*1-16);
							item.setInt(item.getInt()*1-16);
							item.setLuk(item.getLuk()*1-16);
							item.setMatk(item.getMatk()*1-16);
							item.setWatk(item.getWatk()*1-16);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���������֮��ǿ��ʧ�ܣ�"+ cm.getChar().getName() +"��װ����֮��������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b���ź���������֮��ǿ��ʧ�ܣ�#v"+a+"##r#z"+a+"##b����֮��������#r"+xnew15+"��");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew16);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���"+ cm.getChar().getName() +"ʹ����֮��ǿ��ʧ�ܣ����������װ����֮������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection ==19) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew17){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r18��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3000)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew18);
					cm.gainItem(3992025,-3000);
					if(rand>=90){
							item.setStr(item.getStr()*1+18);
							item.setDex(item.getDex()*1+18);
							item.setInt(item.getInt()*1+18);
							item.setLuk(item.getLuk()*1+18);
							item.setMatk(item.getMatk()*1+18);
							item.setWatk(item.getWatk()*1+18);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew18+"��");
						cm.dispose();
					}else{
						if(rand1>=70){
							item.setOwner(xnew16);
							item.setStr(item.getStr()*1-17);
							item.setDex(item.getDex()*1-17);
							item.setInt(item.getInt()*1-17);
							item.setLuk(item.getLuk()*1-17);
							item.setMatk(item.getMatk()*1-17);
							item.setWatk(item.getWatk()*1-17);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���������֮��ǿ��ʧ�ܣ�"+ cm.getChar().getName() +"��װ����֮��������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b���ź���������֮��ǿ��ʧ�ܣ�#v"+a+"##r#z"+a+"##b����֮��������#r"+xnew16+"��");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew17);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���"+ cm.getChar().getName() +"ʹ����֮��ǿ��ʧ�ܣ����������װ����֮������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection ==20) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew18){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r19��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3000)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew19);
					cm.gainItem(3992025,-3000);
					if(rand>=90){
							item.setStr(item.getStr()*1+19);
							item.setDex(item.getDex()*1+19);
							item.setInt(item.getInt()*1+19);
							item.setLuk(item.getLuk()*1+19);
							item.setMatk(item.getMatk()*1+19);
							item.setWatk(item.getWatk()*1+19);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew19+"��");
						cm.dispose();
					}else{
						if(rand1>=70){
							item.setOwner(xnew17);
							item.setStr(item.getStr()*1-18);
							item.setDex(item.getDex()*1-18);
							item.setInt(item.getInt()*1-18);
							item.setLuk(item.getLuk()*1-18);
							item.setMatk(item.getMatk()*1-18);
							item.setWatk(item.getWatk()*1-18);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���������֮��ǿ��ʧ�ܣ�"+ cm.getChar().getName() +"��װ����֮��������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b���ź���������֮��ǿ��ʧ�ܣ�#v"+a+"##r#z"+a+"##b����֮��������#r"+xnew17+"��");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew18);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���"+ cm.getChar().getName() +"ʹ����֮��ǿ��ʧ�ܣ����������װ����֮������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection ==21) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew19){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r20��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3000)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew20);
					cm.gainItem(3992025,-3000);
					if(rand>=95){
							item.setStr(item.getStr()*1+20);
							item.setDex(item.getDex()*1+20);
							item.setInt(item.getInt()*1+20);
							item.setLuk(item.getLuk()*1+20);
							item.setMatk(item.getMatk()*1+20);
							item.setWatk(item.getWatk()*1+20);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew20+"��");
						cm.dispose();
					}else{
						if(rand1>=60){
							item.setOwner(xnew18);
							item.setStr(item.getStr()*1-19);
							item.setDex(item.getDex()*1-19);
							item.setInt(item.getInt()*1-19);
							item.setLuk(item.getLuk()*1-19);
							item.setMatk(item.getMatk()*1-19);
							item.setWatk(item.getWatk()*1-19);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���������֮��ǿ��ʧ�ܣ�"+ cm.getChar().getName() +"��װ����֮��������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b���ź���������֮��ǿ��ʧ�ܣ�#v"+a+"##r#z"+a+"##b����֮��������#r"+xnew18+"��");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew19);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���"+ cm.getChar().getName() +"ʹ����֮��ǿ��ʧ�ܣ����������װ����֮������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection ==22) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew20){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r21��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3500)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew21);
					cm.gainItem(3992025,-3500);
					if(rand>=80){
							item.setStr(item.getStr()*1+21);
							item.setDex(item.getDex()*1+21);
							item.setInt(item.getInt()*1+21);
							item.setLuk(item.getLuk()*1+21);
							item.setMatk(item.getMatk()*1+21);
							item.setWatk(item.getWatk()*1+21);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew21+"��");
						cm.dispose();
					}else{
						if(rand1>=75){
							item.setOwner(xnew19);
							item.setStr(item.getStr()*1-20);
							item.setDex(item.getDex()*1-20);
							item.setInt(item.getInt()*1-20);
							item.setLuk(item.getLuk()*1-20);
							item.setMatk(item.getMatk()*1-20);
							item.setWatk(item.getWatk()*1-20);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���������֮��ǿ��ʧ�ܣ�"+ cm.getChar().getName() +"��װ����֮��������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b���ź���������֮��ǿ��ʧ�ܣ�#v"+a+"##r#z"+a+"##b����֮��������#r"+xnew19+"��");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew20);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���"+ cm.getChar().getName() +"ʹ����֮��ǿ��ʧ�ܣ����������װ����֮������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection ==23) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew21){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r22��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3500)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew22);
					cm.gainItem(3992025,-3500);
					if(rand>=90){
							item.setStr(item.getStr()*1+22);
							item.setDex(item.getDex()*1+22);
							item.setInt(item.getInt()*1+22);
							item.setLuk(item.getLuk()*1+22);
							item.setMatk(item.getMatk()*1+22);
							item.setWatk(item.getWatk()*1+22);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew22+"��");
						cm.dispose();
					}else{
						if(rand1>=70){
							item.setOwner(xnew20);
							item.setStr(item.getStr()*1-21);
							item.setDex(item.getDex()*1-21);
							item.setInt(item.getInt()*1-21);
							item.setLuk(item.getLuk()*1-21);
							item.setMatk(item.getMatk()*1-21);
							item.setWatk(item.getWatk()*1-21);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���������֮��ǿ��ʧ�ܣ�"+ cm.getChar().getName() +"��װ����֮��������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b���ź���������֮��ǿ��ʧ�ܣ�#v"+a+"##r#z"+a+"##b����֮��������#r"+xnew20+"��");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew21);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���"+ cm.getChar().getName() +"ʹ����֮��ǿ��ʧ�ܣ����������װ����֮������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection ==24) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew22){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r23��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3500)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew23);
					cm.gainItem(3992025,-3500);
					if(rand>=80){
							item.setStr(item.getStr()*1+23);
							item.setDex(item.getDex()*1+23);
							item.setInt(item.getInt()*1+23);
							item.setLuk(item.getLuk()*1+23);
							item.setMatk(item.getMatk()*1+23);
							item.setWatk(item.getWatk()*1+23);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew23+"��");
						cm.dispose();
					}else{
						if(rand1>=65){
							item.setOwner(xnew21);
							item.setStr(item.getStr()*1-22);
							item.setDex(item.getDex()*1-22);
							item.setInt(item.getInt()*1-22);
							item.setLuk(item.getLuk()*1-22);
							item.setMatk(item.getMatk()*1-22);
							item.setWatk(item.getWatk()*1-22);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���������֮��ǿ��ʧ�ܣ�"+ cm.getChar().getName() +"��װ����֮��������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b���ź���������֮��ǿ��ʧ�ܣ�#v"+a+"##r#z"+a+"##b����֮��������#r"+xnew21+"��");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew22);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���"+ cm.getChar().getName() +"ʹ����֮��ǿ��ʧ�ܣ����������װ����֮������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection ==25) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew23){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r24��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3500)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew24);
					cm.gainItem(3992025,-3500);
					if(rand>=90){
							item.setStr(item.getStr()*1+24);
							item.setDex(item.getDex()*1+24);
							item.setInt(item.getInt()*1+24);
							item.setLuk(item.getLuk()*1+24);
							item.setMatk(item.getMatk()*1+24);
							item.setWatk(item.getWatk()*1+24);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew24+"��");
						cm.dispose();
					}else{
						if(rand1>=60){
							item.setOwner(xnew22);
							item.setStr(item.getStr()*1-23);
							item.setDex(item.getDex()*1-23);
							item.setInt(item.getInt()*1-23);
							item.setLuk(item.getLuk()*1-23);
							item.setMatk(item.getMatk()*1-23);
							item.setWatk(item.getWatk()*1-23);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���������֮��ǿ��ʧ�ܣ�"+ cm.getChar().getName() +"��װ����֮��������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b���ź���������֮��ǿ��ʧ�ܣ�#v"+a+"##r#z"+a+"##b����֮��������#r"+xnew22+"��");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew23);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���"+ cm.getChar().getName() +"ʹ����֮��ǿ��ʧ�ܣ����������װ����֮������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
			else if (selection ==26) {
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1)==null || ii.isCash(item.getItemId()) == true){
					cm.sendOk("#e#bװ��#r��1��#bû��װ������װ����#r��1��#bΪ#rʱװ#b�����ܽ�����֮��ǿ����");
					cm.dispose();
					return;
				}
				if(cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() != xnew24){//�����Ʒ���Ǽ�
					cm.sendOk("#e#b���#v"+item.getItemId()+"##r#z"+item.getItemId()+"##b����֮������Ϊ#r"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"\r\n\r\n#b��˲��ܽ���#r25��#bǿ����");
					cm.dispose();
					return;
				}
				if(cm.haveItem(3992025, 3500)) { 
					var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
					var statup = new java.util.ArrayList();
					item.setOwner(xnew25);
					cm.gainItem(3992025,-3500);
					if(rand>=95){
							item.setStr(item.getStr()*1+25);
							item.setDex(item.getDex()*1+25);
							item.setInt(item.getInt()*1+25);
							item.setLuk(item.getLuk()*1+25);
							item.setMatk(item.getMatk()*1+25);
							item.setWatk(item.getWatk()*1+25);
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
						var a=item.getItemId();
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "��ϲ"+ cm.getChar().getName() +"�ɹ���װ����֮��ǿ����"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"����/����ս������ô��������"));
						cm.sendOk("#b��ϲ�㣬�ɹ���#v"+a+"##r#z"+a+"##b����֮��ǿ����#r"+xnew25+"��");
						cm.dispose();
					}else{
						if(rand1>=55){
							item.setOwner(xnew23);
							item.setStr(item.getStr()*1-24);
							item.setDex(item.getDex()*1-24);
							item.setInt(item.getInt()*1-24);
							item.setLuk(item.getLuk()*1-24);
							item.setMatk(item.getMatk()*1-24);
							item.setWatk(item.getWatk()*1-24);
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, true);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
							var a=item.getItemId();
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���������֮��ǿ��ʧ�ܣ�"+ cm.getChar().getName() +"��װ����֮��������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b���ź���������֮��ǿ��ʧ�ܣ�#v"+a+"##r#z"+a+"##b����֮��������#r"+xnew23+"��");
							cm.dispose();
						}	
						else{
							item.setOwner(xnew24);
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "��֮��ǿ��" + " : " + "���ź���"+ cm.getChar().getName() +"ʹ����֮��ǿ��ʧ�ܣ����������װ����֮������"+ cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).getOwner() +"�����ף��/���ٽ�������"));
							cm.sendOk("#b��Ȼǿ��ʧ�ܣ���������������ή�ǣ�");
							cm.dispose();
						}	
					}
				}else{
					cm.sendOk("#b��ı�����û���㹻��#v3992025##r#z3992025##b�����ܽ�����֮��ǿ����");
					cm.dispose();
				}
			}
		}	
    }
}