/* ==================
 脚本类型: NPC	    
 脚本作者：维多   
 联系方式：297870163
 =====================
 */

importPackage(java.util);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools);
importPackage(Packages.tools.packet);

var 概率 = Math.floor(Math.random()*100);
var 强化次数 = 1;
var 枫叶 = 2041200;
var 枫叶数量 = 1;
var 力量 = Math.floor(Math.random()*1);+15
var 敏捷 = Math.floor(Math.random()*1);+15
var 运气 = Math.floor(Math.random()*1);+15
var 智力 = Math.floor(Math.random()*1);+15
var 攻击 = Math.floor(Math.random()*1);+15
var 魔攻 = Math.floor(Math.random()*1);+15

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
			cm.sendNext("欢迎来到#r" + cm.getChannelServer().getServerName() + "#b无限金锤升级中心把装备放在第一格!\r\n\r\n#k#d50%概率增加1次装备可升级次数#r每次消耗#v5570000# x 1");	
		} else if (status == 1) {	
		   if(cm.getPlayer().getBossLog("qianghua") >= 999){//判断bosslog记录
		    cm.sendOk("#e每天只能强化#r"+强化次数+"次#k哦!");		
			cm.dispose();
		   } else if(cm.getInventory(1).getItem(1).getLevel()>= 127){
			cm.sendOk("#e你的已经强化次数为127次,无法在继续强化!");		
			cm.dispose();	
		
	  } else if(cm.getInventory(1).getItem(1).getExpiration() != -1) {
		    cm.sendOk("限时装备不能进行强化.");
			cm.dispose();
      } //else if (cm.getInventory(1).getItem(1).getUniqueId() > -2) {
           // cm.sendOk("现金装备无法强化。");
            //cm.dispose();
		//	}
		 else{
			cm.sendYesNo("你要强化的装备为:\r\n\r\n装备#v"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n#r#e成功概率为：50%确定要升级次数吗?\r\n");
			} 
		} else if (status == 2) {
		if (!cm.haveItem(枫叶, 枫叶数量)) {
			cm.sendOk("#b你没有"+枫叶数量+"个#v"+枫叶+"#.");
		    cm.dispose();					
		} else {
			cm.getPlayer().setBossLog('qianghua');//给bosslog记录
			if (概率 <= 35) {
			cm.gainItem(枫叶,-枫叶数量);//扣除物品
			cm.ShowWZEffect("Effect/BasicEff.img/SkillBook/Failure/0"); //卷轴失败效果
			cm.sendOk("#b强化失败.");
			cm.playerMessage(5, "发出一道暗光，升级次数失败!");	 
		//	cm.全服公告(cm.getPlayer().getName() + "『装备强化』" + " : " + "使用随机强化失败,撒花庆贺！");
		    cm.dispose();
			} else {
		 cm.gainItem(枫叶,-枫叶数量);	//扣除物品
		 var statup = new java.util.ArrayList();
		 var itemId1 = cm.getInventory(1).getItem(1).getItemId();
		 var citem = cm.getInventory(1).getItem(1).copy();
		 var cii = MapleItemInformationProvider.getInstance();
		 var stype =  cii.getInventoryType(itemId1);
		citem.setFlag(1);//上锁
		citem.setStr(citem.getStr()+力量);//给力量
		citem.setDex(citem.getDex()+敏捷);//给敏捷 
		citem.setInt(citem.getInt()+智力);//给智力
		citem.setLuk(citem.getLuk()+运气);//给运气
		//citem.setHp(citem.getHp()+100);//给HP
		//citem.setMp(citem.getMp()+100);//给MP
		citem.setMatk(citem.getMatk()+攻击);//攻击
		citem.setWatk(citem.getWatk()+魔攻);//魔法力
		citem.setLevel(citem.getLevel()+1);//加升级次数
		citem.setMdef(citem.getMdef()+1);//魔法防御
		//citem.setAcc(citem.getAcc()+1);//命中
		citem.setAvoid(citem.getAvoid()+1);//回避
		//citem.setHands(citem.getHands()+1);//手技
	    //citem.setSpeed(citem.getSpeed()+1);//移动
		//citem.setJump(citem.getJump()+1);//跳跃
		citem.setUpgradeSlots(citem.getUpgradeSlots()-1);//减少可升级次数
		MapleInventoryManipulator.removeFromSlot(cm.getC(),stype,1,1, false);//背包第一个装备栏目第一个装备
		MapleInventoryManipulator.addFromDrop(cm.getC(), citem,false);//背包第一个装备栏目第一个装备
		cm.playerMessage(5, "发出一道闪光，成功强化黑龙项链!");	 
		cm.全服公告(cm.getPlayer().getName() + "『强化系统』" + " : " + "使用暗黑龙王石成功强化黑龙项链!");
		cm.ShowWZEffect("Effect/BasicEff.img/SkillBook/Success/0"); //成功效果
		cm.dispose();
		}
		}
	}
}}	
