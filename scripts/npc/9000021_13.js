var MapleInventoryManipulator = Java.type('server.MapleInventoryManipulator');
var MapleItemInformationProvider = Java.type('server.MapleItemInformationProvider');
var status = 0;
var job;

var Equitype = [
    1032101
    
];

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if ((mode == 0 && status == 2) || (mode == 0 && status == 13)) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		var ���� = "#fEffect/CharacterEff/1022223/4/0#";
		if (status == 0) {
			cm.sendNext("#r��������ѡ�����#d[���������Ƭǿ��]#v1032101##k#l\r\n#d[���������Ƭǿ��]#bǿ���ɹ���:#r100%#k\r\n#b���Է���:#r-2~+4#k\r\n#bǿ������:#v4001198##r*1#k\r\n#d��������:ÿ������ #r[10] #k��#l\r\n#bPS��#d������֮����ħ�������˲��������ı���,���Ը�ǿ��ϵͳ����ǿ���ɹ���ʧ��,������۳�ǿ������!\r\n");
		} else if (status == 1) {

			var cc = cm.getInventory(1).getItem(1);
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
		    var item = cm.getInventory(1).getItem(1);
			var statup = new java.util.ArrayList();
		//	var ���� = "#fEffect/CharacterEff/1022223/4/0#";
			if (cc == null) {
				cm.sendOk("#b��һ�����޶�����#k");
				status = -1;
			} else if (!cc.getItemId() == 1902000 || !cc.getItemId() == 1902005) {
				} else if (!ii.isCash(item.getItemId())==true) {
				cm.sendYesNo(""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n#d#e��Ʊʣ��:[#c4001198#]�� ������ǿ����["+cm.getPlayer().getBossLog('����') +"]��\r\n"+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n\r\n��Ҫǿ����װ��Ϊ:\r\n\r\n#v" + cc.getItemId() + " \r\n\r\n#b#e��Ҫ��Ʊ��#r 1 ��#k\r\n#r#eȷ��Ҫ��ʼǿ����?");
			} else {
				cm.sendOk("�̳���Ʒ�ݲ�֧��." );
				status = -1;
			}
			var bur = 0
            for (var i = 0; i < Equitype.length; i++) {
                if ( item.getItemId() == Equitype[i]){
                	bur = 1
            	}
			} 
			if ( bur == 0 ){
				cm.sendOk("��һ����Ʒ������Ҫ��." );
				status = -1;
			}
		} else if (status == 2) {
			if (!cm.haveItem(4001198,1)&&cm.getMeso()>=500000) {
				cm.sendOk("#b�Բ���,��Ʊ��������:#r[1]�ţ�#k\r\n\t   #b��ǰ��ӵ��#v4001198#:#r [#c4001198#] ��!#l");
				status = -1;
			} else if (cm.getBossLog("����") >= 10) {
				cm.setBossLog("����");
				cm.sendOk("������Ѿ�10��ǿ������,������������!");
				status = -1;
			} else if (cm.getInventory(1).getItem(1) == null) {
				cm.sendOk("���Ҫǿ����װ�����ڵ�һ����ܽ���.");
				status = -1;
			} else if (cm.getInventory(1).getItem(1).getExpiration() != -1) {
				cm.sendOk("��ʱװ�����ܽ���ǿ��.");
				status = -1;
			} else {
				var statup = new java.util.ArrayList();
				var sj =  Math.floor(Math.random() * 2);//1/3�ĳɹ����� 
				cm.gainItem(4001198,-1);
				cm.gainMeso(-500000);
				
				if (sj == 0) {
					var id = cm.getInventory(1).getItem(1).getItemId();
					var item = cm.getInventory(1).getItem(1).copy();
					var ii = MapleItemInformationProvider.getInstance();
					var type = ii.getInventoryType(id);
					var �������=Math.floor(Math.random()*4);
                    var �������=Math.floor(Math.random()*4);
                    var �������=Math.floor(Math.random()*4);
                    var �������=Math.floor(Math.random()*4);
				    var �﹥���=Math.floor(Math.random()*4);
                    var ħ�����=Math.floor(Math.random()*4);
					var ���ͷ = "#fUI/Basic/icon/arrow#"; // �� ���ͷ
					item.setWatk(item.getWatk()*1+�﹥���);
				    item.setMatk(item.getMatk()*1+ħ�����);
				    item.setStr(item.getStr()*1+�������);
				    item.setDex(item.getDex()*1+�������);
				    item.setInt(item.getInt()*1+�������);
				    item.setLuk(item.getLuk()*1+�������);
					//item.setDex(item.getDex()*1+lvsj);
					item.setLocked(1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), type, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.setBossLog('����');
					cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k \r\n     ������ " + ���ͷ + "#r + [" + ������� + "]#k\r\n     ���ݣ� " + ���ͷ + "#r + [" + ������� + "]#k\r\n     ������ " + ���ͷ + "#r + [" + ������� + "]#k\r\n     ������ " + ���ͷ + "#r + [" + ������� + "]#k\r\n     ������ " + ���ͷ + "#r + [" + �﹥��� + "]#k\r\n     ħ���� " + ���ͷ + "#r + [" + ħ����� + "]#k\r\n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���������Ƭ����" + " : " + cm.getPlayer().getName() +"��ҳɹ� ����������� ����������O(��_��)O~",true).getBytes());
			
					//m.getC().getChannelServer().getWorldInterface().broadcastMessage(null,MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "�������г�-ǿ��NPC-ǿ���ɹ������һ��ϲ���������ɣ�����",item, true).getBytes());
				//cm.laba(cm.getPlayer().getName() + "��ǿ�����桻" + " : " + "������-ǿ���ɹ������һ��ϲ���������ɣ�", 9);
					status = -1;
				} else {
					var id = cm.getInventory(1).getItem(1).getItemId();
					var item = cm.getInventory(1).getItem(1).copy();
					var ii = MapleItemInformationProvider.getInstance();
					var type = ii.getInventoryType(id);
					var �������=Math.floor(Math.random()*2);
                    var �������=Math.floor(Math.random()*2);
                    var �������=Math.floor(Math.random()*2);
                    var �������=Math.floor(Math.random()*2);
				    var �﹥���=Math.floor(Math.random()*2);
                    var ħ�����=Math.floor(Math.random()*2);
					var ���ͷ = "#fUI/Basic/icon/arrow#"; // �� ���ͷ
					item.setWatk(item.getWatk()*1-�﹥���);
				    item.setMatk(item.getMatk()*1-ħ�����);
				    item.setStr(item.getStr()*1-�������);
				    item.setDex(item.getDex()*1-�������);
				    item.setInt(item.getInt()*1-�������);
				    item.setLuk(item.getLuk()*1-�������);
					//item.setDex(item.getDex()*1+lvsj);
					item.setLocked(1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), type, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.setBossLog('����');
					cm.sendOk("#r#e���ź�,ǿ��ʧ��!#k \r\n     ������ " + ���ͷ + "#r - [" + ������� + "]#k\r\n     ���ݣ� " + ���ͷ + "#r - [" + ������� + "]#k\r\n     ������ " + ���ͷ + "#r - [" + ������� + "]#k\r\n     ������ " + ���ͷ + "#r - [" + ������� + "]#k\r\n     ������ " + ���ͷ + "#r - [" + �﹥��� + "]#k\r\n     ħ���� " + ���ͷ + "#r - [" + ħ����� + "]#k\r\n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"���������Ƭ����" + " : " + cm.getPlayer().getName() +"���ʧ�� ����������� ���Լ��١�O(��_��)O~",true).getBytes());
			
					status = -1;
				}
			}
		}
	}
}	