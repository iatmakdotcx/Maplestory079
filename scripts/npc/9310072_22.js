var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ttt ="#fUI/UIWindow.img/Quest/icon9/0#";
var xxx ="#fUI/UIWindow.img/Quest/icon8/0#";
var sss ="#fUI/UIWindow.img/QuestIcon/3/0#";
var ��ɫ = "#fEffect/CharacterEff/1114000/2/0#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var ���� ="#fMap/MapHelper/weather/witch/3#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var status = 0;
var fstype = 0;


function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} 
	else {
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
				textz += "            #r��ӭ��������ð�յ�ǿ������ǿ��#k\r\n";
				textz += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
				textz += "     #b����ǿ����װ������װ������1��#rʱװ����ǿ��#b��\r\n\r\n";
				textz += "    #b�ɹ���60%���ɹ�ʱ��۳�1������������ʧ�ܲ��۳�#k\r\n\r\n";
				textz += "             #rǿ��ʧ�ܻ��˻�30%���ĵ�ˮ��#k\r\n";
				textz += " #b#L0#"+С�̻�+"ѡ��#v4005000#*10��#v2049116#*1��������4��5������3"+С�̻�+"#l\r\n\r\n";
				textz += " #b#L1#"+С�̻�+"ѡ��#v4005001#*10��#v2049116#*1��������4��5��ħ��3"+С�̻�+"#l\r\n\r\n";
				textz += " #b#L2#"+С�̻�+"ѡ��#v4005002#*10��#v2049116#*1��������4��5������3"+С�̻�+"#l\r\n\r\n";
				textz += " #b#L3#"+С�̻�+"ѡ��#v4005003#*10��#v2049116#*1��������4��5������3"+С�̻�+"#l\r\n\r\n";
				textz += " #b#L4#"+С�̻�+"ѡ��#v4005004#*10��#v2049116#*1������ά4��5����ħ3"+С�̻�+"#l\r\n";

			cm.sendSimple (textz);  

		} else if (status == 1) {

            if (selection == 0) { //����
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("#r��Ǹ���㱳����װ������1��û����Ʒ��������ȷ�ϣ�");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r��Ǹ��ʱװ���ܽ��и���ǿ����");
                    cm.dispose();
                } else {
					fstype = 0;
					cm.sendNext("#b��ѡ�������������4��5������3\r\n\r\n#rע��ȷ�ϣ�ǿ�����������и���");
				}
            }


            if (selection == 1) { //�ǻ�
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("#r��Ǹ���㱳����װ������1��û����Ʒ��������ȷ�ϣ�");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r��Ǹ��ʱװ���ܽ��и���ǿ����");
                    cm.dispose();
                } else {
					fstype = 1;
					cm.sendNext("#b��ѡ�������������4��5��ħ��3\r\n\r\n#rע��ȷ�ϣ�ǿ�����������и���");
				}
            }

            if (selection == 2) { //����
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("#r��Ǹ���㱳����װ������1��û����Ʒ��������ȷ�ϣ�");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r��Ǹ��ʱװ���ܽ��и���ǿ����");
                    cm.dispose();
                } else {
					fstype = 2;
					cm.sendNext("#b��ѡ�������������4��5������3\r\n\r\n#rע��ȷ�ϣ�ǿ�����������и���");
				}
            }

            if (selection == 3) { //����
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("#r��Ǹ���㱳����װ������1��û����Ʒ��������ȷ�ϣ�");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r��Ǹ��ʱװ���ܽ��и���ǿ����");
                    cm.dispose();
                } else {
					fstype = 3;
					cm.sendNext("#b��ѡ�������������4��5������3\r\n\r\n#rע��ȷ�ϣ�ǿ�����������и���");
				}
            }

            if (selection == 4) { //��ά
                var ii = Packages.server.MapleItemInformationProvider.getInstance();
                var item = cm.getInventory(1).getItem(1);
                var statup = new java.util.ArrayList();
                if (item == null) {
                    cm.sendOk("#r��Ǹ���㱳����װ������1��û����Ʒ��������ȷ�ϣ�");
                    cm.dispose();
                } else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r��Ǹ��ʱװ���ܽ��и���ǿ����");
                    cm.dispose();
                } else {
					fstype = 4;
					cm.sendNext("#b��ѡ�����������ά4��5����ħ3\r\n\r\n#rע��ȷ�ϣ�ǿ�����������и���");
				}
            }

		} else if (status == 2) {
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var item = cm.getInventory(1).getItem(1);
			if (fstype == 0) {
				if (!cm.haveItem(4005000,10) || !cm.haveItem(2049116,1))  {
                    cm.sendOk("#r��ı�����û���㹻��#v4005000#����#v2049116#������ϸȷ�ϣ�");
                    cm.dispose();
				} else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("#r���װ���Ѿ�û�����������ˣ���ǰȥ�������������������޷�����ǿ����");
                    cm.dispose();
				} else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r��Ǹ��ʱװ���ܽ��и���ǿ����");
                    cm.dispose();
				} else {
					var chance = Math.floor(Math.random() * 3);
					var tisheng = Math.floor(Math.random() * 1 + 4);
						if (chance >= 2) {
							var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
							var statup = new java.util.ArrayList();
							item.setStr(item.getStr() + tisheng);
							item.setWatk(item.getWatk() + 3);
							item.setUpgradeSlots((item.getUpgradeSlots() - 1));
							item.setLevel(item.getLevel() + 1);
							cm.gainItem(4005000,-10);
							cm.gainItem(2049116,-1);
							cm.sendOk("#r��ϲ�㣬ǿ���ɹ���ս�����ֻ����������");
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"ǿ������ǿ��" + " : " + " ��ϲ" + cm.getPlayer().getName() + "��ǿ������ǿ���У��ɹ�������װ������" + tisheng + "������3�����ף����/���ɣ�",true).getBytes());
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						} else {
							cm.gainItem(4005000,-10);
							cm.gainItem(4005000,3);
							cm.gainItem(2049116,-1);
							cm.sendOk("#b���ź���ǿ��ʧ�ܣ���Ϊ��������#v4005000#*3��");	
						}
					cm.dispose();
				}
			} else if (fstype == 1) {
				if (!cm.haveItem(4005001,10) || !cm.haveItem(2049116,1))  {
                    cm.sendOk("#r��ı�����û���㹻��#v4005001#����#v2049116#������ϸȷ�ϣ�");
                    cm.dispose();
				} else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("#r���װ���Ѿ�û�����������ˣ���ǰȥ�������������������޷�����ǿ����");
                    cm.dispose();
				} else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r��Ǹ��ʱװ���ܽ��и���ǿ����");
                    cm.dispose();
				} else {
					var chance = Math.floor(Math.random() * 3);
					var tisheng = Math.floor(Math.random() * 1 + 4);
						if (chance >= 2) {
							var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
							var statup = new java.util.ArrayList();
							item.setInt(item.getInt() + tisheng);
							item.setMatk(item.getMatk() + 3);
							item.setUpgradeSlots((item.getUpgradeSlots() - 1));
							item.setLevel(item.getLevel() + 1);
							cm.gainItem(4005001,-10);
							cm.gainItem(2049116,-1);
							cm.sendOk("#r��ϲ�㣬ǿ���ɹ���ս�����ֻ����������");
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"ǿ������ǿ��" + " : " + " ��ϲ" + cm.getPlayer().getName() + "��ǿ������ǿ���У��ɹ�������װ������" + tisheng + "��ħ��3�����ף����/���ɣ�",true).getBytes());
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						} else {
							cm.gainItem(4005001,-10);
							cm.gainItem(4005001,3);
							cm.gainItem(2049116,-1);
							cm.sendOk("#b���ź���ǿ��ʧ�ܣ���Ϊ��������#v4005001#*3��");	
						}
					cm.dispose();
				}
			} else if (fstype == 2) {
				if (!cm.haveItem(4005002,10) || !cm.haveItem(2049116,1))  {
                    cm.sendOk("#r��ı�����û���㹻��#v4005002#����#v2049116#������ϸȷ�ϣ�");
                    cm.dispose();
				} else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("#r���װ���Ѿ�û�����������ˣ���ǰȥ�������������������޷�����ǿ����");
                    cm.dispose();
				} else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r��Ǹ��ʱװ���ܽ��и���ǿ����");
                    cm.dispose();
				} else {
					var chance = Math.floor(Math.random() * 3);
					var tisheng = Math.floor(Math.random() * 1 + 4);
						if (chance >= 2) {
							var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
							var statup = new java.util.ArrayList();
							item.setDex(item.getDex() + tisheng);
							item.setWatk(item.getWatk() + 3);
							item.setUpgradeSlots((item.getUpgradeSlots() - 1));
							item.setLevel(item.getLevel() + 1);
							cm.gainItem(4005002,-10);
							cm.gainItem(2049116,-1);
							cm.sendOk("#r��ϲ�㣬ǿ���ɹ���ս�����ֻ����������");
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"ǿ������ǿ��" + " : " + " ��ϲ" + cm.getPlayer().getName() + "��ǿ������ǿ���У��ɹ�������װ������" + tisheng + "������3�����ף����/���ɣ�",true).getBytes());
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						} else {
							cm.gainItem(4005002,-10);
							cm.gainItem(4005002,3);
							cm.gainItem(2049116,-1);
							cm.sendOk("#b���ź���ǿ��ʧ�ܣ���Ϊ��������#v4005002#*3��");	
						}
					cm.dispose();
				}
			} else if (fstype == 3) {
				if (!cm.haveItem(4005003,10) || !cm.haveItem(2049116,1))  {
                    cm.sendOk("#r��ı�����û���㹻��#v4005003#����#v2049116#������ϸȷ�ϣ�");
                    cm.dispose();
				} else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("#r���װ���Ѿ�û�����������ˣ���ǰȥ�������������������޷�����ǿ����");
                    cm.dispose();
				} else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r��Ǹ��ʱװ���ܽ��и���ǿ����");
                    cm.dispose();
				} else {
					var chance = Math.floor(Math.random() * 3);
					var tisheng = Math.floor(Math.random() * 1 + 4);
						if (chance >= 2) {
							var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
							var statup = new java.util.ArrayList();
							item.setLuk(item.getLuk() + tisheng);
							item.setWatk(item.getWatk() + 3);
							item.setUpgradeSlots((item.getUpgradeSlots() - 1));
							item.setLevel(item.getLevel() + 1);
							cm.gainItem(4005003,-10);
							cm.gainItem(2049116,-1);
							cm.sendOk("#r��ϲ�㣬ǿ���ɹ���ս�����ֻ����������");
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"ǿ������ǿ��" + " : " + " ��ϲ" + cm.getPlayer().getName() + "��ǿ������ǿ���У��ɹ�������װ������" + tisheng + "������3�����ף����/���ɣ�",true).getBytes());
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						} else {
							cm.gainItem(4005003,-10);
							cm.gainItem(4005003,3);
							cm.gainItem(2049116,-1);
							cm.sendOk("#b���ź���ǿ��ʧ�ܣ���Ϊ��������#v4005003#*3��");	
						}
					cm.dispose();
				}
			} else if (fstype == 4) {
				if (!cm.haveItem(4005004,10) || !cm.haveItem(2049116,1))  {
                    cm.sendOk("#r��ı�����û���㹻��#v4005004#����#v2049116#������ϸȷ�ϣ�");
                    cm.dispose();
				} else if (cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy().getUpgradeSlots() <=0) {
                    cm.sendOk("#r���װ���Ѿ�û�����������ˣ���ǰȥ�������������������޷�����ǿ����");
                    cm.dispose();
				} else if (ii.isCash(item.getItemId()) == true) {
                    cm.sendOk("#r��Ǹ��ʱװ���ܽ��и���ǿ����");
                    cm.dispose();
				} else {
					var chance = Math.floor(Math.random() * 3);
					var tisheng = Math.floor(Math.random() * 1 + 4);
						if (chance >= 2) {
							var item = cm.getChar().getInventory(Packages.client.inventory.MapleInventoryType.EQUIP).getItem(1).copy();
							var statup = new java.util.ArrayList();
							item.setStr(item.getStr() + tisheng);
							item.setDex(item.getDex() + tisheng);
							item.setInt(item.getInt() + tisheng);
							item.setLuk(item.getLuk() + tisheng);
							item.setWatk(item.getWatk() + 3);
							item.setMatk(item.getMatk() + 3);
							item.setUpgradeSlots((item.getUpgradeSlots() - 1));
							item.setLevel(item.getLevel() + 1);
							cm.gainItem(4005004,-10);
							cm.gainItem(2049116,-1);
							cm.sendOk("#r��ϲ�㣬ǿ���ɹ���ս�����ֻ����������");
							Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"ǿ������ǿ��" + " : " + " ��ϲ" + cm.getPlayer().getName() + "��ǿ������ǿ���У��ɹ�������װ����ά" + tisheng + "����ħ3�����ף����/���ɣ�",true).getBytes());
							Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
							Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
						} else {
							cm.gainItem(4005004,-10);
							cm.gainItem(4005004,3);
							cm.gainItem(2049116,-1);
							cm.sendOk("#b���ź���ǿ��ʧ�ܣ���Ϊ��������#v4005004#*3��");	
						}
					cm.dispose();
				}
			}										
		}
	}
}
