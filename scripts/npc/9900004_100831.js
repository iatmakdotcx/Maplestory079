

var a = 0;
var text;
var selects; //记录玩家的选项
var buynum = 0;
var 几率 = Math.floor(Math.random() * 55);
var B = Math.floor(Math.random() * 5)+5;
var A = Math.floor(Math.random() * 5)+15;
var S = Math.floor(Math.random() * 10)+20;
var SS = Math.floor(Math.random() * 10)+40;
var SSS = Math.floor(Math.random() * 30)+70;
var SSSR = Math.floor(Math.random() * 40)+160;
var xnew1="★";
var xnew2="★★";
var xnew3="★★★";
var xnew4="★★★★";
var xnew5="★★★★★";
var xold1="★";
var xold2="★★";
var xold3="★★★";
var xold4="★★★★";
var xold5="★★★★★";
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
				if(cm.getInventory(1).getItem(1) == null){
					cm.sendOk("你背包第一格没有装备啊！");
					cm.dispose();
					return;
				}
				if(cm.getPlayer().getOneTimeLoga("透明" + cm.getInventory(1).getItem(1).getItemId() + "史诗") > 0){
					cm.sendOk("一个账号只允许进阶1次!");
					cm.dispose();
					return;
				}
				
				var dmID = cm.getInventory(1).getItem(1).getItemId();
				if(dmID!=1012057 && dmID!=1022048 && dmID!=1032024 && dmID!=1702224 && dmID!=1072153 && dmID!=1082102) {
					cm.sendOk("把需要强化的透明装备放在第一格!");
					cm.dispose();
				} else if (cm.haveItem(4310129, 30) && cm.haveItem(4031997, 60) && cm.getPlayer().getCSPoints(1) >= 25000 && cm.getPlayer().getCSPoints(2) >= 5000 && cm.getPlayer().getMeso() >= 50000000 && cm.getInventory(1).getItem(1).getOwner() == "满阶") {
					cm.getPlayer().setOneTimeLoga("透明" + cm.getInventory(1).getItem(1).getItemId() + "史诗");
                    var item = cm.getInventory(1).getItem(1).copy();
                    item.setStr(item.getStr() + 5);
					item.setInt(item.getInt() + 5);
					item.setLuk(item.getLuk() + 5);
					item.setDex(item.getDex() + 5);
					item.setWatk(item.getWatk() + 4);
					item.setMatk(item.getMatk() + 4);
					item.setOwner("史诗");
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.gainItem(4310129, -30);
					cm.gainItem(4031997, -60);
					cm.gainMeso(-50000000);
					cm.getPlayer().modifyCSPoints(1, -25000, true);
					cm.getPlayer().modifyCSPoints(2, -5000, true);
					cm.sendOk("强化成功，当前装备等级为 “#r史诗#k”。\r\n #r#e全属性增加[5]点 攻击力增加[4]点 魔法力增加[4]点");
					
					//cm.全服道具公告("【透明强化】", "玩家 ["+cm.getName()+"]成功将透明装备强化为史诗！恭喜恭喜！", item);
					cm.dispose();
				} else {
					cm.sendOk("当前装备无法参与强化。或者材料不足");
					cm.dispose();
				
				}
			}
		}
	}
}