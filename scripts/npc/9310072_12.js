
var status = 0;
var job;

var Equitype = [
    1112949
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
			cm.sendNext("#r��������ѡ�����#d[ʱװ��ָ����]װ���ŵ�һ��#v1112949##k#l\r\n#b�����ɹ���:#r100%#k\r\n#bȫ����:+30  #k\r\n#b��������:#v4310060##r*1#k\r\n#bPS��#r��������100�Σ��������У�\r\n");
		} else if (status == 1) {

			var cc = cm.getInventory(1).getItem(1);
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
		    var item = cm.getInventory(1).getItem(1);
			var statup = new java.util.ArrayList();
		//	var ���� = "#fEffect/CharacterEff/1022223/4/0#";
			if (cc == null) {
				cm.sendOk("#b��һ�����޶�����#k");
				status = -1;
			} else if (!cc.getItemId() == 1112949 || !cc.getItemId() == 1112949) {
				} else if (!ii.isCash(item.getItemId())==false) {
				cm.sendYesNo(""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n#d#eʣ��#v4310060#:[#c4310060#]�� �ѽ�����["+cm.getPlayer().getBossLog('ʱװ��ָ1',1) +"]��\r\n"+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n\r\n��Ҫ������װ��Ϊ:\r\n\r\n#v" + cc.getItemId() + " \r\n\r\n#b#e��Ҫ#v4310060#��#r 1 ��#k\r\n#r#eȷ��Ҫ��ʼ������?");
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
			if (!cm.haveItem(4310060,1)) {
				cm.sendOk("#b�Բ���,������������������:#r[1]����#k\r\n\t   #b��ǰ��ӵ��#v4310060#:#r [#c4310060#] ��!#l");
				status = -1;
			
			} else if (cm.getInventory(1).getItem(1) == null) {
				cm.sendOk("���Ҫ������װ�����ڵ�һ����ܽ���.");
				status = -1;
			} else if (cm.getInventory(1).getItem(1).getExpiration() != -1) {
				cm.sendOk("��ʱװ�����ܽ��н���.");
				status = -1;
		    } else if(cm.getInventory(1).getItem(1).getLevel() > 99) {
				cm.sendOk("�Ѵﵽ�������100�Σ��޷�������");
				cm.dispose();
			
			
			} else {
				var statup = new java.util.ArrayList();
				var sj =  Math.floor(Math.random() * 2);//1/3�ĳɹ����� 
				cm.gainItem(4310060,-1);
				
				if (sj == 0) {
					var id = cm.getInventory(1).getItem(1).getItemId();
					var item = cm.getInventory(1).getItem(1).copy();
					var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var type = ii.getInventoryType(id);
					var �������=30
                    var �������=30
                    var �������=30
                    var �������=30
				    //var �﹥���=0
                    var ħ�����=50
					var ���ͷ = "#fUI/Basic/icon/arrow#"; // �� ���ͷ
					item.setWatk(item.getWatk()*1+0);
				    item.setMatk(item.getMatk()*1+50);
				    item.setStr(item.getStr()*1+30);
				    item.setDex(item.getDex()*1+30);
				    item.setInt(item.getInt()*1+30);
				    item.setLuk(item.getLuk()*1+30);
				    item.setLevel( item.getLevel() + 1);
					item.setLocked(1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), type, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					
					cm.getPlayer().setBossLog("ʱװ��ָ1",1,1);
					cm.sendOk("#r#e�����ɹ�,ף����Ϸ���!#k \r\n     ������ " + ���ͷ + "#r + [" + ������� + "]#k\r\n     ���ݣ� " + ���ͷ + "#r + [" + ������� + "]#k\r\n     ������ " + ���ͷ + "#r + [" + ������� + "]#k\r\n     ������ " + ���ͷ + "#r + [" + ������� + "]#k\r\n     ");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "ʱװ��ָ����" + " : " + "��ϲ" + cm.getChar().getName() + "�ɹ���ʱװ��ָ��������["+cm.getPlayer().getBossLog('ʱװ��ָ1',1) +"]�ף�ս������������һ�����Σ�"));
					//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ѫ��Ǳ�ܹ���" + " : " + cm.getPlayer().getName() +"��ҳɹ�����ѫ��Ǳ�ܡ�O(��_��)O~",true).getBytes());
			        //Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�����������ṫ��" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ� ʹ���������������� 130����������������O(��_��)O~��"));
				
					//m.getC().getChannelServer().getWorldInterface().broadcastMessage(null,MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "�������г�-����NPC-�����ɹ������һ��ϲ���������ɣ�����",item, true).getBytes());
				//cm.laba(cm.getPlayer().getName() + "���������桻" + " : " + "������-�����ɹ������һ��ϲ���������ɣ�", 9);
					status = -1;
				} else {
					var id = cm.getInventory(1).getItem(1).getItemId();
					var item = cm.getInventory(1).getItem(1).copy();
					var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var type = ii.getInventoryType(id);
					var �������=30
                    var �������=30
                    var �������=30
                    var �������=30
				    //var �﹥���=0
                    var ħ�����=50
					var ���ͷ = "#fUI/Basic/icon/arrow#"; // �� ���ͷ
					item.setWatk(item.getWatk()*1+0);
				    item.setMatk(item.getMatk()*1+50);
				    item.setStr(item.getStr()*1+30);
				    item.setDex(item.getDex()*1+30);
				    item.setLuk(item.getLuk()*1+30);
				    item.setInt(item.getInt()*1+30);
				    item.setLevel( item.getLevel() + 1);
					item.setLocked(1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), type, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.getPlayer().setBossLog("ʱװ��ָ1",1,1);
					cm.sendOk("#r#e�����ɹ�,ף����Ϸ���!#k \r\n     ������ " + ���ͷ + "#r + [" + ������� + "]#k\r\n     ���ݣ� " + ���ͷ + "#r + [" + ������� + "]#k\r\n     ������ " + ���ͷ + "#r + [" + ������� + "]#k\r\n     ������ " + ���ͷ + "#r + [" + ������� + "]#k\r\n     ");
					//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"ѫ��Ǳ��ʧ�ܹ���" + " : " + cm.getPlayer().getName() +"���ѫ��Ǳ��ʧ�ܡ�O(��_��)O~",true).getBytes());
		            //Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "�����������ṫ��" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ� ʹ���������������� 130����������������O(��_��)O~��"));

					status = -1;
				}
			}
		}
	}
}	