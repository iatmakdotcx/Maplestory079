/*
SnailMS�ű�������
*/
var ���� = "#fEffect/CharacterEff/1003276/0/0#";
importClass(java.util.regex.Pattern);
importClass(java.util.ArrayList);
importClass(java.lang.Integer);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("�Ի�������");
			cm.dispose();
			return;
		}
		status--;
	}
	
	if (status == 0) {
		
		// var level = item.getLevel();
		// var upgradeSlots = item.getUpgradeSlots();
		var text = ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n";
		text += "\t\t#v1114404#\t\t#v1114404#\t\t#v1114404#\t\t\r\n";
		text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n\r\n";
		text += "�ϳ���Ҫ��"
		text += "#r#v1113084#x1\t#v1112952#x1\t#v1112951#x1\t\r\n"
		text += "\t\t#r#v4001126#x100000\t #b��ȯ#rx100000\t #b���#rx300000000\r\n"
		text += "#k#v1114404#��Ʒ����: #b#v1114404# #v1113084# #v1112952# #v1112951#����֮��\r\n";
		text += "\t\t\t\t\t#L1##d[�ϳ�]\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		if(selection == 1){

			if(cm.�жϽ��() < 300000000){
				cm.sendOk("��Ľ�Ҳ�������");
				cm.dispose();
				return;
			}else if(!cm.haveItem(4001126, 100000)){
				cm.sendOk("���#v4001126#��������");
				cm.dispose();
				return;
			}else if(cm.�жϵ�ȯ() < 100000){
				cm.sendOk("��ĵ�ȯ��������");
				cm.dispose();
				return;
			}
			
			var rings1 = new ArrayList(); //1113084
			var rings2 = new ArrayList(); //1112952
			var rings3 = new ArrayList(); //1112951
			
			var ring1 = null;
			var ring2 = null;
			var ring3 = null;
			
			var ��ָ�������� = false;
			for (var i = 0; i < 96; i++) {
				var item = cm.getInventory(1).getItem(i);
				if(item != null){
					switch(item.getItemId()){
						case 1113084:
							rings1.add(item);
							break;
						case 1112952:
							rings2.add(item);
							break;
						case 1112951:
							rings3.add(item);
							break;
					}
				}
			}
			
			if(rings1.size() > 0 && rings2.size() > 0 && rings3.size() > 0 ){
				var it = rings1.iterator();
				while(it.hasNext()){
					var ring = it.next();
					ring1 = ring;
					break;
				}
				it = rings2.iterator();
				while(it.hasNext()){
					var ring = it.next();
					ring2 = ring;
					break;
				}
				it = rings3.iterator();
				while(it.hasNext()){
					var ring = it.next();
					ring3 = ring;
					break;
				}


				if(ring1 != null && ring2 != null && ring3 != null ){
					if(!ɾװ��(ring1)){
						cm.sendOk("����,������û�з���������#v" + ring1.getItemId() + "#");
						cm.dispose();
						return;
					}
					if(!ɾװ��(ring2)){
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), ring1, false);
						cm.sendOk("����,������û�з���������#v" + ring2.getItemId() + "#");
						cm.dispose();
						return;
					}
					if(!ɾװ��(ring3)){
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), ring1, false);
						Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), ring2, false);
						cm.sendOk("����,������û�з���������#v" + ring3.getItemId() + "#");
						cm.dispose();
						return;
					}
					cm.gainItem(4001126, -30000);
					cm.gainItem(4001126, -30000);
					cm.gainItem(4001126, -30000);
					cm.gainItem(4001126, -10000);
					cm.�յ�ȯ(100000);
					cm.�ս��(300000000);
					
					
					var level = ring1.getLevel() + ring2.getLevel() + ring3.getLevel();
					var upgradeSlot = ring1.getUpgradeSlots() + ring2.getUpgradeSlots() + ring3.getUpgradeSlots();
					var str = ring1.getStr() + ring2.getStr() + ring3.getStr();
					var dex = ring1.getDex() + ring2.getDex() + ring3.getDex();
					var _int = ring1.getInt() + ring2.getInt() + ring3.getInt();
					var luk = ring1.getLuk() + ring2.getLuk() + ring3.getLuk();
					var hp = ring1.getHp() + ring2.getHp() + ring3.getHp();
					var mp = ring1.getMp() + ring2.getMp() + ring3.getMp();
					var watk = ring1.getWatk() + ring2.getWatk() + ring3.getWatk();
					var matk = ring1.getMatk() + ring2.getMatk() + ring3.getMatk();
					var wdef = ring1.getWdef() + ring2.getWdef() + ring3.getWdef();
					var mdef = ring1.getMdef() + ring2.getMdef() + ring3.getMdef();
					var avoid = ring1.getAvoid() + ring2.getAvoid() + ring3.getAvoid();
					var acc = ring1.getAcc() + ring2.getAcc() + ring3.getAcc();
					var jump = ring1.getJump() + ring2.getJump() + ring3.getJump();
					var speed = ring1.getSpeed() + ring2.getSpeed() + ring3.getSpeed();
					var ring_s = cm.getNewEquip(1114404);
					ring_s.setLevel(ring_s.getLevel() + level);
					ring_s.setUpgradeSlots(ring_s.getUpgradeSlots() + upgradeSlot);
					ring_s.setStr(ring_s.getStr() + str);
					ring_s.setInt(ring_s.getInt() + _int);
					ring_s.setLuk(ring_s.getLuk() + luk);
					ring_s.setDex(ring_s.getDex() + dex);
					ring_s.setWatk(ring_s.getWatk() + watk);
					ring_s.setMatk(ring_s.getMatk() + matk);
					ring_s.setHp(ring_s.getHp() + hp);
					ring_s.setMp(ring_s.getMp() + mp);
					ring_s.setWdef(ring_s.getWdef() + wdef);
					ring_s.setMdef(ring_s.getMdef() + mdef);
					ring_s.setAvoid(ring_s.getAvoid() + avoid);
					ring_s.setAcc(ring_s.getAcc() + acc);
					ring_s.setJump(ring_s.getJump() + jump);
					ring_s.setSpeed(ring_s.getSpeed() + speed);
					
					// Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), ring_s, false);
					cm.ȫ�����߹���("[װ������]", "��ϲ " + cm.getPlayer().getName() + " �����˺ڰ�֮����ָ~", ring_s);
					cm.sendOk("��ϲ��ϳ���#v1114404#");
					cm.dispose();
					return;
				}else{
					cm.sendOk("��Ľ�ָ��������������");
					cm.dispose();
					return;
				}
			}else{
				cm.sendOk("��Ľ�ָ��������");
				cm.dispose();
				return;
			}
			
		}
		return;
		
	} else if(status == 2){
		cm.safeDispose();
		cm.openNpc(9000038, 1);
		return;
	} else {
		cm.safeDispose();
		return;
	}
}

function ɾװ��(item0){
	for (var i = 0; i < 96; i++) {
		var item = cm.getInventory(1).getItem(i);
		if(item != null){
			if(item.getItemId() == item0.getItemId()){
				if(item.getStr() == item0.getStr() && item.getInt() == item0.getInt() && item.getLuk() == item0.getLuk() && item.getDex() == item0.getDex() && item.getLevel() == item0.getLevel() && item.getUpgradeSlots() == item0.getUpgradeSlots() && item.getWatk() == item0.getWatk() && item.getMatk() == item0.getMatk() && item.getHp() == item0.getHp() && item.getMp() == item0.getMp() && item.getWdef() == item0.getWdef() && item.getMdef() == item0.getMdef() && item.getAvoid() == item0.getAvoid() && item.getAcc() == item0.getAcc() && item.getJump() == item0.getJump() && item.getSpeed() == item0.getSpeed()){
					// cm.getPlayer().dropMessage("�ҵ��ˣ�" + item0.getItemId() + " i= " + i);//������
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, i, 1, false);
					return true;
				}
			}
		}
	}
	return false;
}