var status = 0;
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var ���� ="#fMap/MapHelper/weather/witch/3#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";

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
		if (status == 0) {
			cm.sendNext(""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n            #r��ӭ��������ð�յ�������������#k\r\n"+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n������װ���Դ����������󣬿�����#v3992025#����һ����������\r\n    #e#rÿ��������Ҫ#v3992025#200����60%��������������+1\r\n\r\n       #b�뽫��Ҫ����������װ�����ڱ�����һ��\r\n\r\n           #rע��:ÿ��װ���������35�� \r\n          ÿ��ÿ��ֻ��ʹ��100�θù���\r\n");
		} else if (status == 1) {
			var cc = cm.getInventory(1).getItem(1);
			if (cm.haveItem(3992025,200)){
			} else {
				cm.sendOk("#r�㱳����û���㹻��#v3992025#������ϸȷ�ϣ�");
				cm.dispose();
				}
		    
				
			if(cc!= null ){
				cm.sendYesNo(""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n            #r��ӭ��������ð�յ�������������#k\r\n"+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n            #b��Ҫ��������������װ��Ϊ��#v"+cc.getItemId()+"#\r\n\r\n              #rȷ��Ҫ������������������");
			} else {
				cm.sendOk("#b�㱳����װ������1����û��װ��������ϸȷ�ϣ�");	
				cm.dispose();
			} 
		} else if (status == 2) {
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
            var item = cm.getInventory(1).getItem(1);
			var cishu = cm.getInventory(1).getItem(1).getUpgradeSlots() + cm.getInventory(1).getItem(1).getLevel();
			if (cm.getBossLog("qianghua1") == 5000){
				cm.sendOk("#b������Ѿ�ʹ�øù���#r100��#b������������ô�����");
				cm.dispose();
				
			} else if (cm.getInventory(1).getItem(1) == null)  {
				cm.sendOk("#b�㱳����װ������1����û��װ��������ϸȷ�ϣ�");
				cm.dispose();
				
			} else if (ii.isCash(item.getItemId()) == true) {
                cm.sendOk("#r��Ǹ��ʱװ���ܽ�����������������");
                cm.dispose();
				
            } else if(cm.getInventory(1).getItem(1).getExpiration() != -1) {
				cm.sendOk("#b��ʱ�޵�װ������ʹ�øù��ܣ�");
				cm.dispose();
				
			} else if(cishu >= 35) {
				cm.sendOk("#bװ�����������������Ѵﵽ#r35��#b������ϸȷ�ϣ�");
				cm.dispose();
				
			} else {
				var statup = new java.util.ArrayList();
				var sj = Math.floor(Math.random()*10);
				cm.gainItem(3992025,-200);
				if(sj >=3){
					var itemId1 = cm.getInventory(1).getItem(1).getItemId();
					var item = cm.getInventory(1).getItem(1).copy();
					var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var type =  ii.getInventoryType(itemId1);
					item.setUpgradeSlots(item.getUpgradeSlots()+1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1,false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(),item,false);
					cm.setBossLog('qianghua1');
					cm.sendOk("#b��ϲ�㣬�����ɹ���װ������������#r+1\r\n\r\n#b��ǰ������������#r"+item.getUpgradeSlots()+"");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"װ��������������" + " : " + " ��ϲ" + cm.getPlayer().getName() + "�ɹ�Ϊװ��������1�ο��������������ף����/���ɣ�",true).getBytes());
					//cm.dispose();
					status = -1;
				}else {
					cm.setBossLog('qianghua1');
					cm.sendOk("#b���ź�������ʧ�ܣ�װ����δ���κα仯�����ٽ�������");	 
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"װ��������������" + " : " + " ���ź���" + cm.getPlayer().getName() + "δ�ܸ�װ���������������������ٽ�������",true).getBytes());
					status = -1;
					//cm.dispose();
				}
			}
		}
	}
}	