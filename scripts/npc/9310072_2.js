
var status = 0;
var job;

var Equitype = [
    1142574,
    1142541,
    1142788
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
		var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
		if (status == 0) {
			cm.sendNext("#r您现在所选择的是#d[勋章强化]#v1142574##v1142541##v1142788##k#l\r\n#d[勋章强化]#b强化成功率:#r50%（失败不会减少属性）#k\r\n#b属性幅度:#r-1~+8#k\r\n#b强化消耗:#v4251202##r*5#k\r\n#d次数限制:每天上限 #r[10] #k次#l\r\n#bPS：#d由于星之力的魔化产生了不可描述的变异,所以该强化系统无论强化成功或失败,均不会扣除强化次数!\r\n");
		} else if (status == 1) {

			var cc = cm.getInventory(1).getItem(1);
			var ii = Packages.server.MapleItemInformationProvider.getInstance();
		    var item = cm.getInventory(1).getItem(1);
			var statup = new java.util.ArrayList();
		//	var 爱心 = "#fEffect/CharacterEff/1022223/4/0#";
			if (cc == null) {
				cm.sendOk("#b第一格子无东西！#k");
				status = -1;
			} else if (!cc.getItemId() == 1902000 || !cc.getItemId() == 1902005) {
				} else if (!ii.isCash(item.getItemId())==true) {
				cm.sendYesNo(""+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n#d#e五彩剩余:[#c4251202#]颗 今日已强化：["+cm.getPlayer().getBossLog('勋章') +"]次\r\n"+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+爱心+"\r\n\r\n你要强化的装备为:\r\n\r\n#v" + cc.getItemId() + " \r\n\r\n#b#e需要五彩：#r 5 颗#k\r\n#r#e确定要开始强化吗?");
			} else {
				cm.sendOk("商城物品暂不支持." );
				status = -1;
			}
			var bur = 0
            for (var i = 0; i < Equitype.length; i++) {
                if ( item.getItemId() == Equitype[i]){
                	bur = 1
            	}
			} 
			if ( bur == 0 ){
				cm.sendOk("第一个物品不符合要求." );
				status = -1;
			}
			if (!cm.haveItem(4251202,5)) {
				cm.sendOk("#b对不起,您五彩水晶数量不足:#r[5]颗！#k\r\n\t   #b当前所拥有#v4251202#:#r [#c4251202#] 颗!#l");
				status = -1;
			}
		} else if (status == 2) {
			if (!cm.haveItem(4251202,5)) {
				cm.sendOk("#b对不起,您五彩水晶数量不足:#r[5]颗！#k\r\n\t   #b当前所拥有#v4251202#:#r [#c4251202#] 颗!#l");
				status = -1;
			} else if (cm.getBossLog("勋章") >= 10) {
				cm.setBossLog("勋章");
				cm.sendOk("你今天已经10次强化过了,请明天在来吧!");
				status = -1;
			} else if (cm.getInventory(1).getItem(1) == null) {
				cm.sendOk("请把要强化的装备放在第一格才能进行.");
				status = -1;
			} else if (cm.getInventory(1).getItem(1).getExpiration() != -1) {
				cm.sendOk("限时装备不能进行强化.");
				status = -1;
		
			} else {
				var statup = new java.util.ArrayList();
				var sj =  Math.floor(Math.random() * 2);//1/3的成功概率 
				cm.gainItem(4251202,-5);
				cm.gainMeso(-1000000);
				
				if (sj == 0) {
					var id = cm.getInventory(1).getItem(1).getItemId();
					var item = cm.getInventory(1).getItem(1).copy();
					var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var type = ii.getInventoryType(id);
					var 力量随机=Math.floor(Math.random()*8);
                    var 敏捷随机=Math.floor(Math.random()*8);
                    var 运气随机=Math.floor(Math.random()*8);
                    var 智力随机=Math.floor(Math.random()*8);
				    
					var 大箭头 = "#fUI/Basic/icon/arrow#"; // → 大箭头
					
				    item.setStr(item.getStr()*1+力量随机);
				    item.setDex(item.getDex()*1+敏捷随机);
				    
				    item.setLuk(item.getLuk()*1+运气随机);
					item.setInt(item.getInt()*1+智力随机);
					//item.setDex(item.getDex()*1+lvsj);
				
					item.setLocked(1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), type, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.setBossLog('勋章');
					cm.sendOk("#r#e强化成功,祝您游戏愉快!#k \r\n     力量： " + 大箭头 + "#r + [" + 力量随机 + "]#k\r\n     敏捷： " + 大箭头 + "#r + [" + 敏捷随机 + "]#k\r\n     运气： " + 大箭头 + "#r + [" + 运气随机 + "]#k\r\n     智力： " + 大箭头 + "#r + [" + 智力随机 + "]#k\r\n");
				  Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"勋章强化成功公告" + " : " + cm.getPlayer().getName() +"玩家成功勋章强化。O(∩_∩)O~",true).getBytes());
			
					//m.getC().getChannelServer().getWorldInterface().broadcastMessage(null,MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "在自由市场-强化NPC-强化成功！大家一起恭喜他（她）吧！！！",item, true).getBytes());
				//cm.laba(cm.getPlayer().getName() + "『强化公告』" + " : " + "在拍卖-强化成功！大家一起恭喜他（她）吧！", 9);
					status = -1;
				} else {
					var id = cm.getInventory(1).getItem(1).getItemId();
					var item = cm.getInventory(1).getItem(1).copy();
					var ii = Packages.server.MapleItemInformationProvider.getInstance();
					var type = ii.getInventoryType(id);
					var 力量随机=Math.floor(Math.random()*1);
                    var 敏捷随机=Math.floor(Math.random()*1);
                    var 运气随机=Math.floor(Math.random()*1);
                    var 智力随机=Math.floor(Math.random()*1);
				    
					var 大箭头 = "#fUI/Basic/icon/arrow#"; // → 大箭头
					
				    item.setStr(item.getStr()*1-力量随机);
				    item.setDex(item.getDex()*1-敏捷随机);
					item.setLuk(item.getLuk()*1-运气随机);
				    item.setInt(item.getInt()*1-智力随机);
				    
					//item.setDex(item.getDex()*1+lvsj);
				
					item.setLocked(1);
					Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), type, 1, 1, false);
					Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);
					cm.setBossLog('勋章');
					cm.sendOk("#r#e很遗憾,强化失败!#k \r\n     力量： " + 大箭头 + "#r - [" + 力量随机 + "]#k\r\n     敏捷： " + 大箭头 + "#r - [" + 敏捷随机 + "]#k\r\n     运气： " + 大箭头 + "#r - [" + 运气随机 + "]#k\r\n     智力： " + 大箭头 + "#r - [" + 智力随机 + "]#k\r\n");
					Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"勋章强化失败公告" + " : " + cm.getPlayer().getName() +"玩家勋章强化失败。O(∩_∩)O~",true).getBytes());
			
					status = -1;
				}
			}
		}
	}
}	