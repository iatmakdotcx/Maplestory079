
var status = 0;
var job;
var DJ="10";//�۳��ĵ�ȯ
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
			cm.sendNext("��ӭ����#r" + cm.getChannelServer().getServerName() + "\r\n\�����������ʹ����Ʒǿ��װ��!\r\n#e#r������ӿ�ǿ��һ�ν���#v4251302##z4251302# #b1#r ��+500W���\r\n\r\n#bǿ������#r+1#k\r\n");
		} else if (status == 1) {
						var cc = cm.getInventory(1).getItem(1);
			if(cc!= null ){
			 cm.sendYesNo("��Ҫǿ����װ��Ϊ:\r\n\r\n#v"+cc.getItemId()+"#\r\n\r\n#r#eȷ��Ҫ��ʼǿ����?");
			} else{
			cm.sendOk("#b��һ�����޶�����#k");	
			cm.dispose();
			} 
			
		} else if (status == 2) {
		       if (!cm.haveItem(4251302, 1) || cm.getMeso() <= 5000000)  {
		            cm.sendOk("#v4251302#���Ҳ���500��!");
				    cm.dispose();
          } else if (cm.getBossLog("qianghua1") == 1){//ÿ��һ��
                cm.sendOk("������Ѿ�ǿ������,������������!");
                cm.dispose();
} else if (cm.getInventory(1).getItem(1) == null)  {
		            cm.sendOk("���Ҫǿ����װ�����ڵ�һ����ܽ���.");
				    cm.dispose();
} else if(cm.getInventory(1).getItem(1).getExpiration() != -1) {
		            cm.sendOk("��ʱװ�����ܽ���ǿ��.");
				    cm.dispose();
			
		} else {
			
var statup = new java.util.ArrayList();
var sj = Math.floor(Math.random()*2);
		 cm.gainItem(4251302,-1);
		 cm.gainMeso(-5000000);//�۳����ٽ��
		 
		 if(sj ==1){
                    var itemId1 = cm.getInventory(1).getItem(1).getItemId();
		 var item = cm.getInventory(1).getItem(1).copy();
		 var ii = MapleItemInformationProvider.getInstance();
					var type =  ii.getInventoryType(itemId1);
item.setUpgradeSlots(item.getUpgradeSlots()+1);
item.setLocked(1);
		 
		 MapleInventoryManipulator.removeFromSlot(cm.getC(),type,1,1, false);
		 MapleInventoryManipulator.addFromDrop(cm.getC(), item,false);
                cm.setBossLog('qianghua1');
				cm.sendOk("#r#eǿ���ɹ�,ף����Ϸ���!#k \r\nװ����������+1\r\n��ǰǿ������#g"+item.getUpgradeSlots());
//cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null,MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "�������г�-ǿ��NPC-ǿ���ɹ������һ��ϲ���������ɣ�����",item, true).getBytes());
				cm.laba(cm.getPlayer().getName() + "��ǿ�����桻" + " : " + "������-ǿ���ɹ������һ��ϲ���������ɣ�",9);
				cm.dispose();
				 }else {
				cm.setBossLog('qianghua1');
				cm.sendOk("#r#eǿ��ʧ�ܣ�,ף����Ϸ���!#kװ����δ���κα仯!");	 
				cm.laba(cm.getPlayer().getName() + "��ǿ�����桻" + " : " + "������-ǿ��ʧ�ܣ����һ��Ϊ�����������ɣ�",9);
				cm.dispose();
				 }

		}
		}
	}
}	
