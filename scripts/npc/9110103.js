var a = 0;
var db;
var time;
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var ���� ="#fMap/MapHelper/weather/witch/3#";
var Equitype = [
    1032255
];

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
			if (a == -1){
				cm.dispose();
			}else if (a == 0) {
				a = 0;
				var Text = "";
					Text += "             "+С�̻� +"#e#rʥ��Ԫ���ر���ʱ�#k"+С�̻� +"\r\n";
					Text += "              #r#e�һ�ʱ��12.25-1.3\r\n";
					Text += "           �������й�С���ʳ��ռ���ĸ\r\n\r\n              #v3991007##v3991000##v3991015##v3991015##v3991024##l\r\n\r\n";
					Text += "      #v3991002##v3991007##v3991017##v3991008##v3991018##v3991019##v3991012##v3991000##v3991018#\r\n";
					Text += " #L1##k�ռ�һ�׶һ�#g#z1032255##k#v1032255#ȫ����10-88#l\r\n";
				
				cm.sendSimple(Text);		
			}else if (a == 1){
				if (selection == 1) {
					if ( cm.itemQuantity(3991007) >=2 &&cm.itemQuantity(3991000) >=2 &&cm.itemQuantity(3991015) >=2 &&cm.itemQuantity(3991024) >=1&&cm.itemQuantity(3991018) >=1 &&cm.itemQuantity(3991002) >=1 &&cm.itemQuantity(3991017) >=1 &&cm.itemQuantity(3991008) >=1 &&cm.itemQuantity(3991019) >=1 &&cm.itemQuantity(3991012) >=1  &&cm.itemQuantity(3991018) >=1 && cm.getMeso()>=1000000){
var r = Math.ceil(Math.random() * 70+10);
cm.gainItem(3991007,-2);
cm.gainItem(3991000,-2);
cm.gainItem(3991015,-2);
cm.gainItem(3991024,-1);
cm.gainItem(3991002,-1);
cm.gainItem(3991017,-1);
cm.gainItem(3991008,-1);
cm.gainItem(3991018,-1);
cm.gainItem(3991019,-1);
cm.gainItem(3991012,-1);
cm.gainItem(3991018,-1);
cm.gainItem(1032255,r,r,r,r,1000,1000,r,r,0,0,0,0,0,0);
cm.gainMeso(-1000000);
						cm.sendOk("�����ɹ���");
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "˫����ʱ�" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��һ���ʱ�������"));

						cm.dispose();
					}else{
						cm.sendOk("���ϲ��㣡");
						cm.dispose();
					}
				}else if (selection == 2){
					var xianjin = 0
					var cc = cm.getInventory(1).getItem(1);
					var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var item = cm.getInventory(1).getItem(1);
					var statup = new java.util.ArrayList();
					var bur = 0
            for (var i = 0; i < Equitype.length; i++) {
                if ( item.getItemId() == Equitype[i]){
                	bur = 1
            	}
			} 
			if ( bur == 0 ){
				cm.sendOk("��һ����Ʒ������Ҫ��." );
				cm.dispose()
				
			} else
					if (!cm.haveItem(4001244,1) || !cm.haveItem(1032255,1) )  {
						cm.sendOk("��û���㹻��ǿ�����ϣ������㻹û��#v1032234#");
						cm.dispose();
					
					} else if(cm.getInventory(1).getItem(1).getLevel() > 6) {
				        cm.sendOk("�Ѵﵽ�������7�Σ��޷�������");
				        cm.dispose();
					
					} else {
						var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						var �������=Math.floor(Math.random()*20+1);
						var �������=Math.floor(Math.random()*20+1);
						var �������=Math.floor(Math.random()*20+1);
						var �������=Math.floor(Math.random()*20+1);
						var �﹥���=Math.floor(Math.random()*20+1);
						var ħ�����=Math.floor(Math.random()*20+1);
						item.setStr(item.getStr() + �������);
						item.setDex(item.getDex() + �������);
						item.setInt(item.getInt() + �������);
						item.setLuk(item.getLuk() + �������);
						item.setWatk(item.getWatk() + �﹥���);
						item.setMatk(item.getMatk() + ħ�����);
						item.setLevel( item.getLevel() + 1);
					    item.setLocked(1);
						cm.gainItem(4001244,-1);
						cm.sendOk("#r#e���ָǿ���ɹ���ף����Ϸ��죡#k");
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"����Ϧ�ǿ����" + " : " + " ��� [" + cm.getPlayer().getName() + "]�ɹ���ǿ����Ϧ����������ף����/���ɣ�",true).getBytes());
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.dispose();
					}		
				}if (selection == 3) {
					var xianjin = 0
					var cc = cm.getInventory(1).getItem(1);
					var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var item = cm.getInventory(1).getItem(1);
					var statup = new java.util.ArrayList();
					var bur = 0
            for (var i = 0; i < Equitype.length; i++) {
                if ( item.getItemId() == Equitype[i]){
                	bur = 1
            	}
			} 
			if ( bur == 0 ){
				cm.sendOk("��һ����Ʒ������Ҫ��." );
				cm.dispose()
				
			} else
					if (!cm.haveItem(1032255,1) )  {
						cm.sendOk("��û���㹻��ǿ�����ϣ������㻹û��#v1032234#");
						cm.dispose();
					
					
					} else {
						var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						var �������=Math.floor(Math.random()*0+0);
						var �������=Math.floor(Math.random()*0+0);
						var �������=Math.floor(Math.random()*0+0);
						var �������=Math.floor(Math.random()*0+0);
						var �﹥���=Math.floor(Math.random()*0+0);
						var ħ�����=Math.floor(Math.random()*0+0);
						item.setStr(item.getStr() + �������);
						item.setDex(item.getDex() + �������);
						item.setInt(item.getInt() + �������);
						item.setLuk(item.getLuk() + �������);
						item.setWatk(item.getWatk() + �﹥���);
						item.setMatk(item.getMatk() + ħ�����);
						//item.setLevel( item.getLevel() + 1);
					    item.setLocked(0);
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"��520�ǿ����" + " : " + " ��� [" + cm.getPlayer().getName() + "]�ɹ���ǿ��520����������ף����/���ɣ�",true).getBytes());
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.dispose();
					}
				}else if (selection == 4){
					cm.dispose();
                    cm.openNpc(9900004,3222);
					
				}else if (selection == 6){
					var xianjin = 0
					var cc = cm.getInventory(1).getItem(1);
					var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var item = cm.getInventory(1).getItem(1);
					var statup = new java.util.ArrayList();
					if (!cm.haveItem(4170001,5) || !cm.haveItem(1112956,1))  {
						cm.sendOk("��û���㹻��ǿ�����ϣ������㻹û��#v1112956#");
						cm.dispose();
					} else if (cm.getPlayer().getBossLog("����ǿ��",1) > 4) {
						cm.sendOk("�Ѿ�û��ǿ�����ᣬ���ֻ��ǿ��5�Σ�");
						cm.dispose();
					} else if (!ii.isCash(item.getItemId())==true) {
						cm.sendOk("��һ���װ��������Ҫ��");
						cm.dispose();
					} else {
						var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
						var statup = new java.util.ArrayList();
						var �������=Math.floor(Math.random()*2+1);
						var �������=Math.floor(Math.random()*2+1);
						var �������=Math.floor(Math.random()*2+1);
						var �������=Math.floor(Math.random()*2+1);
						var �﹥���=Math.floor(Math.random()*2+1);
						var ħ�����=Math.floor(Math.random()*2+1);
						item.setStr(item.getStr() + �������);
						item.setDex(item.getDex() + �������);
						item.setInt(item.getInt() + �������);
						item.setLuk(item.getLuk() + �������);
						item.setWatk(item.getWatk() + �﹥���);
						item.setMatk(item.getMatk() + ħ�����);
						cm.gainItem(4170001,-5);
						cm.getPlayer().setBossLog("����ǿ��",1,1)
						cm.sendOk("#r#e���ָǿ���ɹ���ף����Ϸ��죡#k");
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"�����ָǿ����" + " : " + " ��� [" + cm.getPlayer().getName() + "]�ɹ���ǿ���˻��ָ�����ף����/���ɣ�",true).getBytes());
						Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						cm.dispose();
					}		
				}else if (selection == 30){
					if (cm.itemQuantity(4031111) >=2777 && cm.itemQuantity(4031110) >=277&& cm.itemQuantity(1112301) >=1&& cm.getMeso()>=7000000){
						cm.gainItem(1112302,27,27,27,27,27,27,27,27,27,27,27,27,27,27);
						cm.gainItem(4031111,-2777);
						cm.gainItem(4031110,-277);
						cm.gainItem(1112301,-1);
						cm.gainMeso(-7000000);
						cm.sendNext("#b������ʾ:#r\r\n��Ϧ��ʯ��ָ3�����ˣ���ϲ�㣡")
						cm.dispose();
					}else{
						var text = "�����ɿ��� * 1\r\n"
							text += "��Ҫ#v4031111# * 2777\r\n"
							text += "��Ҫ#v4031110# * 277\r\n"
							text += "��Ҫ#v1112301# * 1\r\n"
							text += "��Ҫ��Ϸ��# * 700��\r\n"
						cm.sendOk(text)
						cm.dispose();
					}
				}else if (selection == 40){
					if (cm.itemQuantity(1112475) >=1 && cm.itemQuantity(4032398) >=10  && cm.itemQuantity(4000175) >=1 && cm.itemQuantity(4000054) >=100&& cm.itemQuantity(4000053) >=100&& cm.itemQuantity(4000050) >=1000 && cm.itemQuantity(4000052) >=1000 && cm.itemQuantity(4000051) >=1000 && cm.itemQuantity(4000055) >=200  && cm.itemQuantity(4000048) >=200 ){
						cm.gainItem(1112485,20,20,20,20,200,200,15,15,10,10,10,10,10,10);
						cm.gainItem(1112475,-1);
						cm.gainItem(4032398,-10);
						cm.gainItem(4000050,-1000);
						cm.gainItem(4000052,-1000);
						cm.gainItem(4000051,-1000);
						cm.gainItem(4000055,-200);
						cm.gainItem(4000048,-200);
						cm.gainItem(4000053,-100);
						cm.gainItem(4000054,-100);
						cm.gainItem(4000175,-1);
						cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV40�ˣ���ϲ�㣡")
						cm.dispose();
					}else{
						var text = "����Ⱥ�� * 1\r\n"
						cm.sendOk(text)
						cm.dispose();
					}
				}else if (selection == 50){
					if (cm.itemQuantity(1112485) >=1 && cm.itemQuantity(4032398) >=15&& cm.itemQuantity(4000313) >=500 && cm.itemQuantity(4000270) >=1000 && cm.itemQuantity(4000272) >=1000 && cm.itemQuantity(4001084) >=1 && cm.itemQuantity(4000175) >=1 && cm.itemQuantity(4000151) >=200 && cm.itemQuantity(4000152) >=200 && cm.itemQuantity(4000244) >=20&& cm.itemQuantity(4000245) >=20){
						cm.gainItem(1112495,30,30,30,30,300,300,20,20,20,20,20,20,20,20);
						cm.gainItem(1112485,-1);
						cm.gainItem(4032398,-15);
						cm.gainItem(4000313,-500);
						cm.gainItem(4000270,-1000);
						cm.gainItem(4000272,-1000);
						cm.gainItem(4001084,-1);
						cm.gainItem(4000175,-1);
						cm.gainItem(4000151,-200);
						cm.gainItem(4000152,-200);
						cm.gainItem(4000244,-20);
						cm.gainItem(4000245,-20);
						cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV50�ˣ���ϲ�㣡")
						cm.dispose();
					}else{
						var text = "�Ϲ����Ž�ָLV40 * 1\r\n"
							text += "��Ҫ#v4032398# * 15\r\n"
							text += "��Ҫ#v4000313# * 1000\r\n"
							text += "��Ҫ#v4000270# * 1000\r\n"
							text += "��Ҫ#v4000272# * 500\r\n"
							text += "��Ҫ#v4000151# * 200\r\n"
							text += "��Ҫ#v4000152# * 200\r\n"
							text += "��Ҫ#v4000244# * 20\r\n"
							text += "��Ҫ#v4000245# * 20\r\n"
							text += "��Ҫ#v4001084# * 1\r\n"
							text += "��Ҫ#v4000175# * 1\r\n"
						cm.sendOk(text)
						cm.dispose();
					}
				}
        } 
    } 
}