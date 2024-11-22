/*
	NPC Name: 		Adobis
	Map(s): 		El Nath : Entrance to pinkbeanum Altar
	Description: 		pinkbeanum battle starter
*/
var status = 0;
var cishuxianzhi = 5;//限制次数
var 重返次数 = 3;
function start() {
	status =0;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (cm.getPlayer().getMapId() == 240040700) {
        if (selection < 100) {
            cm.sendSimple("#r#L100#品克缤#l\r\n#L101#超级品克缤#l");
        } else {
            if (selection == 100) {
                cm.warp(240050400,0);
            } else if (selection == 101) {
                cm.warp(240050400,0);
            }
            cm.dispose();
        }
        return;
    } else if (cm.getPlayer().getMapId() == 240050400) {
        switch (status) {
            case 0:
                if (cm.getPlayer().getLevel() < 100) {
                    cm.sendOk("你的等级必须达到100级以上.");
                    cm.dispose();
                    return;
                }
/*                 if (cm.getPlayer().getClient().getChannel() != 2 && cm.getPlayer().getClient().getChannel() != 3) {
                    cm.sendOk("混乱品克缤只能试图在频道（2）（3）挑战.");
                    cm.dispose();
                    return;
                } */
                var em = cm.getEventManager("PinkBeanBattle");

                if (em == null) {
                    cm.sendOk("事件还没有开始，请联系一个通用汽车公司.");
                    cm.safeDispose();
                    return;
                }
                var prop = em.getProperty("state");
                var marr = cm.getQuestRecord(160102);
                var data = marr.getCustomData();
                if (data == null) {
                    marr.setCustomData("0");
                    data = "0";
                }
                var time = parseInt(data);
                if (prop == null || prop.equals("0")) {
                    var squadAvailability = cm.getSquadAvailability("pinkbean");
                    if (squadAvailability == -1) {
                        status = 1;
                        cm.sendYesNo("你有兴趣成为远征队的队长吗？");

                    } else if (squadAvailability == 1) {
                        // -1 = Cancelled, 0 = not, 1 = true
                        var type = cm.isSquadLeader("pinkbean");
                        if (type == -1) {
                            cm.sendOk("远征队已经结束，请重新注册.");
                            cm.safeDispose();
                        } else if (type == 0) {
							
                            var memberType = cm.isSquadMember("pinkbean");
                            if (memberType == 2) {
                                cm.sendOk("你被禁止参加远征队.");
                                cm.safeDispose();
                            } else if (memberType == 1) {
                                status = 5;
                                cm.sendSimple("你想做什么? \r\n#b#L0#检查成员#l \r\n#b#L1#加入远征队#l \r\n#b#L2#退出小队#l");
                            } else if (memberType == -1) {
                                cm.sendOk("队伍已经结束，请重新注册.");
                                cm.safeDispose();
                            } else {
                                status = 5;
                                cm.sendSimple("你想做什么? \r\n#b#L0#检查成员#l \r\n#b#L1#加入队伍#l \r\n#b#L2#退出小队#l");
                            }
                        } else { // Is leader
                            status = 10;
                            cm.sendSimple("你想做什么? \r\n#b#L0#检查成员#l \r\n#b#L1#删除成员#l \r\n#b#L2#编辑限制列表#l \r\n#r#L3#进入地图#l");
                        // TODO viewing!
                        }
                    } else {
                        var eim = cm.getDisconnected("PinkBeanBattle");
                        if (eim == null) {
                            var squd = cm.getSquad("pinkbean");
                            if (squd != null) {
                                cm.sendYesNo("队伍的对抗品克缤的战斗已经开始了.\r\n" + squd.getNextPlayer());
                                status = 3;
                            } else {
                                cm.sendOk("队伍的对抗品克缤的战斗已经开始了.");
                                cm.safeDispose();
                            }
                        } else {
                            cm.sendYesNo("啊，你回来了。你愿意加入你的队伍在战斗中吗?");
                            status = 2;
                        }
                    }
                } else {
                    var eim = cm.getDisconnected("PinkBeanBattle");
                    if (eim == null) {
                        var squd = cm.getSquad("pinkbean");
                        if (squd != null) {
                            cm.sendYesNo("队伍的对抗品克缤的战斗已经开始了.\r\n" + squd.getNextPlayer());
                            status = 3;
                        } else {
                            cm.sendOk("队伍的对抗品克缤的战斗已经开始了.");
                            cm.safeDispose();
                        }
                    } else {
                        cm.sendYesNo("啊，你回来了。你愿意加入你的队伍在战斗中吗?");
                        status = 2;
                    }
                }
                break;
            case 1:
                if (mode == 1) {
					if(cm.getMap(270050100).getCharactersSize() > 0){
						cm.sendOk("里面已经有人了~.");
						cm.dispose();
						return
						
					}
					var cishu = cm.查询当日BOSS记录("pinkbean");
                    if(cishu >= cishuxianzhi){
						cm.sendOk("抱歉，你今日已参加过 "  + cishu + " 次品克缤远征，当日的BOSS次数已达到上限。");
					}else{
						if (cm.registerSquad("pinkbean", 5, " 已被任命为团长。如果你想加入请在时间段内开启远征队.")) {
							cm.sendOk("你已经被任命为队伍的领袖。在接下来的5分钟，你可以加入远征队的成员.");
							cm.worldMessage( "[BOSS公告] " + cm.getPlayer().getName() + " 在 " + cm.getChannel() + " 频道创建了品克缤远征队，请各位玩家尽快备好弹药，来讨伐时间的宠儿品克缤吧！");
						} else {
							cm.sendOk("添加你的小队时发生了一个错误.");
						}
					}
					
                } else {
                    cm.sendOk("如果你想成为远征队的领队的话，跟我谈谈.")
                }
                cm.safeDispose();
                break;
            case 2:
				//BOSS重返
				if(cm.getBossLog("PB重返") >= 重返次数){
					cm.sendOk("抱歉，每个BOSS一天最多只能重返" + 重返次数 + "次。")
				}else{
					if (!cm.reAdd("PinkBeanBattle", "pinkbean")) {
						cm.sendOk("误差…请再试一次.");
					}else{
						cm.setBossLog("PB重返");
					}
				}
				// cm.sendOk
                cm.dispose();
                break;
            case 3:
                if (mode == 1) {
					// var party = cm.组队成员();
					var party = cm.组队成员();
			//cm.getPlayer().dropMessage(5, "队伍有"+cm.组队人数()+"人");
			cm.dispose();
            for (var i = 0; i < cm.组队人数(); i++) {
			//cm.getPlayer().dropMessage(5, "所在地图代码"+party.get(i).getMapid());
			cm.dispose();
            if (party.get(i).getMapid() == 270050100){//判断队长在不在这个地图,可以重返的地图
            cm.flytoID(party.get(i).getId());
			cm.dispose();
			return;
                } } }
                break;
            case 5:
                if (selection == 0) {
                    if (!cm.getSquadList("pinkbean", 0)) {
                        cm.sendOk("由于未知的错误，对队伍的要求被拒绝了.");
                        cm.safeDispose();
                    } else {
                        cm.dispose();
                    }
                } else if (selection == 1) { // join
					var cishu = cm.查询当日BOSS记录("pinkbean");
                    if(cishu >= cishuxianzhi){
						cm.sendOk("抱歉，你今日已参加过 "  + cishu + " 次品克缤远征，当日的BOSS次数已达到上限。");
						cm.safeDispose();
					}else{
						var ba = cm.addMember("pinkbean", true);
						if (ba == 2) {
							cm.sendOk("队伍目前已满，请稍后再试。");
							cm.safeDispose();
						} else if (ba == 1) {
							cm.sendOk("你已经成功加入了队伍");
							cm.worldMessage( "[BOSS公告] 玩家 " + cm.getPlayer().getName() + " 加入了 " + cm.getChannel() + "频道的品克缤讨伐远征队。");
							cm.safeDispose();
						} else {
							cm.sendOk("你已经是队伍的一部分了.");
							cm.safeDispose();
						}
					}
                    
                } else {// withdraw
                    var baa = cm.addMember("pinkbean", false);
                    if (baa == 1) {
                        cm.sendOk("你已经退出了队伍的成功");
                        cm.safeDispose();
                    } else {
                        cm.sendOk("你不是队伍的一部分.");
                        cm.safeDispose();
                    }
                }
                break;
            case 10:
                if (selection == 0) {
                    if (!cm.getSquadList("pinkbean", 0)) {
                        cm.sendOk("由于未知的错误，对队伍的要求被拒绝了.");
                    }
                    cm.safeDispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("pinkbean", 1)) {
                        cm.sendOk("由于未知的错误，对队伍的要求被拒绝了.");
                        cm.safeDispose();
                    }

                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("pinkbean", 2)) {
                        cm.sendOk("由于未知的错误，对队伍的要求被拒绝了.");
                        cm.safeDispose();
                    }

                } else if (selection == 3) { // get insode
                    if (cm.getSquad("pinkbean") != null) {
                        var dd = cm.getEventManager("PinkBeanBattle");
                        dd.startInstance(cm.getSquad("pinkbean"), cm.getMap(), 160102);
						if(cm.getPlayer().getMapId() == 270050100){
							//cm.getMap().clearOwnerList();
							//cm.getMap().addAllOwnerHere();
							//cm.getMap().给时钟(240, true, true);
							cm.worldMessage( "[BOSS公告] " + cm.getChannel() + " 频道的远征队长已经入场，品克缤的讨伐即将开始，请加入远征队伍的玩家尽快入场！");
							//cm.给团队每日("pinkbean");//给团队次数
							给地图每日a(cm.getPlayer().getMap(), "pinkbean");
						}
                        cm.dispose();
                    } else {
                        cm.sendOk("由于未知的错误，对队伍的要求被拒绝了.");
                        cm.safeDispose();
                    }
                }
                break;
            case 11:
                cm.banMember("pinkbean", selection);
                cm.dispose();
                break;
            case 12:
                if (selection != -1) {
                    cm.acceptMember("pinkbean", selection);
                }
                cm.dispose();
                break;
        }
    } else {
        switch (status) {
            case 0:
                if (cm.getPlayer().getLevel() < 50) {
                    cm.sendOk("有一个50级要求的尝试品克缤.");
                    cm.dispose();
                    return;
                }
                var em = cm.getEventManager("PinkBeanBattle");

                if (em == null) {
                    cm.sendOk("事件未启动，请联系GM.");
                    cm.safeDispose();
                    return;
                }
                var prop = em.getProperty("state");
                var marr = cm.getQuestRecord(160101);
                var data = marr.getCustomData();
                if (data == null) {
                    marr.setCustomData("0");
                    data = "0";
                }
                var time = parseInt(data);
                if (prop == null || prop.equals("0")) {
                    var squadAvailability = cm.getSquadAvailability("pinkbean");
                    if (squadAvailability == -1) {
                        status = 1;
                        cm.sendYesNo("你有兴趣成为远征队的领队吗?");

                    } else if (squadAvailability == 1) {

                        // -1 = Cancelled, 0 = not, 1 = true
                        var type = cm.isSquadLeader("pinkbean");
                        if (type == -1) {
                            cm.sendOk("队伍已经结束，请重新注册.");
                            cm.safeDispose();
                        } else if (type == 0) {
                            var memberType = cm.isSquadMember("pinkbean");
                            if (memberType == 2) {
                                cm.sendOk("你被禁止参加队伍.");
                                cm.safeDispose();
                            } else if (memberType == 1) {
                                status = 5;
                                cm.sendSimple("你想做什么? \r\n#b#L0#检查成员#l \r\n#b#L1#加入队伍#l \r\n#b#L2#退出小队#l");
                            } else if (memberType == -1) {
                                cm.sendOk("队伍已经结束，请重新注册.");
                                cm.safeDispose();
                            } else {
                                status = 5;
                                cm.sendSimple("你想做什么? \r\n#b#L0#检查成员#l \r\n#b#L1#加入队伍#l \r\n#b#L2#退出小队#l");
                            }
                        } else { // Is leader
                            status = 10;
                            cm.sendSimple("你想做什么啊啊啊啊? \r\n#b#L0#检查成员#l \r\n#b#L1#删除成员#l \r\n#b#L2#编辑限制列表#l \r\n#r#L3#进入地图#l");
                        // TODO viewing!
                        }
                    } else {
                        var eim = cm.getDisconnected("PinkBeanBattle");
                        if (eim == null) {
                            var squd = cm.getSquad("pinkbean");
                            if (squd != null) {
                                cm.sendYesNo("远征队对抗品克缤已经开始了.\r\n" + squd.getNextPlayer());
                                status = 3;
                            } else {
                                cm.sendOk("远征队对抗品克缤已经开始了.");
                                cm.safeDispose();
                            }
                        } else {
                            cm.sendYesNo("啊，你回来了。你愿意加入你的队伍在战斗中吗?");
                            status = 2;
                        }
                    }
                } else {
                    var eim = cm.getDisconnected("PinkBeanBattle");
                    if (eim == null) {
                        var squd = cm.getSquad("pinkbean");
                        if (squd != null) {
                            cm.sendYesNo("远征队对抗品克缤已经开始了.\r\n" + squd.getNextPlayer());
                            status = 3;
                        } else {
                            cm.sendOk("远征队对抗品克缤已经开始了.");
                            cm.safeDispose();
                        }
                    } else {
                        cm.sendYesNo("啊，你回来了。你愿意加入你的队伍在战斗中吗?");
                        status = 2;
                    }
                }
                break;
            case 1:
                if (mode == 1) {
					if(cm.getMap(270050100).getCharactersSize() > 0){
						cm.sendOk("里面已经有人了~.");
						cm.dispose();
						return
						
					}
					var cishu = cm.查询当日BOSS记录("pinkbean");
                    if(cishu >= cishuxianzhi){
						cm.sendOk("抱歉，你今日已参加过 "  + cishu + " 次品克缤远征，当日的BOSS次数已达到上限。");
					}else{
						if (cm.registerSquad("pinkbean", 5, " 已被任命为班长（定期）。如果你想加入请在时间段内注册的远征队.")) {
							cm.sendOk("你已经被任命为远征队领袖领袖。在接下来的5分钟，你可以加入远征队的成员。");
							cm.worldMessage( "[BOSS公告] " + cm.getPlayer().getName() + " 在 " + cm.getChannel() + " 频道创建了品克缤远征队，请各位玩家尽快备好弹药，来讨伐时间的宠儿品克缤吧！");
						} else {
							cm.sendOk("添加你的小队时发生了一个错误.");
						}
					}
                    
                } else {
                    cm.sendOk("如果你想成为远征队领队的话，跟我谈谈.")
                }
                cm.safeDispose();
                break;
            case 2:
				//BOSS重返
				if(cm.getBossLog("PB重返") >= 重返次数){
					cm.sendOk("抱歉，每个BOSS一天最多只能重返" + 重返次数 + "次。")
				}else{
					if (!cm.reAdd("PinkBeanBattle", "pinkbean")) {
						cm.sendOk("误差…请再试一次.");
					}else{
						cm.setBossLog("PB重返");
					}
				}
                cm.safeDispose();
                break;
            case 3:
                if (mode == 1) {
					var party = cm.组队成员();
			//cm.getPlayer().dropMessage(5, "队伍有"+cm.组队人数()+"人");
			cm.dispose();
            for (var i = 0; i < cm.组队人数(); i++) {
			//cm.getPlayer().dropMessage(5, "所在地图代码"+party.get(i).getMapid());
			cm.dispose();
            if (party.get(i).getMapid() == 270050100){//判断队长在不在这个地图,可以重返的地图
            cm.flytoID(party.get(i).getId());
			cm.dispose();
			return;
                } } }
               
                break;
            case 5:
                if (selection == 0) {
                    if (!cm.getSquadList("pinkbean", 0)) {
                        cm.sendOk("由于未知的错误，对队伍的要求被拒绝了.");
                        cm.safeDispose();
                    } else {
                        cm.dispose();
                    }
                } else if (selection == 1) { // join
					var cishu = cm.查询当日BOSS记录("pinkbean");
                    if(cishu >= cishuxianzhi){
						cm.sendOk("抱歉，你今日已参加过 "  + cishu + " 次品克缤远征，当日的BOSS次数已达到上限。");
						cm.safeDispose();
					}else{
						var ba = cm.addMember("pinkbean", true);
						if (ba == 2) {
							cm.sendOk("队伍目前已满，请稍后再试.");
							cm.safeDispose();
						} else if (ba == 1) {
							cm.sendOk("你已经成功加入了队伍");
							cm.worldMessage( "[BOSS公告] 玩家 " + cm.getPlayer().getName() + " 加入了 " + cm.getChannel() + "频道的品克缤讨伐远征队。");
							cm.safeDispose();
						} else {
							cm.sendOk("你已经是队伍的一部分了.");
							cm.safeDispose();
						}
					}
                    
                } else {// withdraw
                    var baa = cm.addMember("pinkbean", false);
                    if (baa == 1) {
                        cm.sendOk("你已经退出了队伍的成功");
                        cm.safeDispose();
                    } else {
                        cm.sendOk("你不是队伍的一部分.");
                        cm.safeDispose();
                    }
                }
                break;
            case 10:
                if (selection == 0) {
                    if (!cm.getSquadList("pinkbean", 0)) {
                        cm.sendOk("由于未知的错误，对队伍的要求被拒绝了。");
                    }
                    cm.safeDispose();
                } else if (selection == 1) {
                    status = 11;
                    if (!cm.getSquadList("pinkbean", 1)) {
                        cm.sendOk("由于未知的错误，对队伍的要求被拒绝了.");
                        cm.safeDispose();
                    }

                } else if (selection == 2) {
                    status = 12;
                    if (!cm.getSquadList("pinkbean", 2)) {
                        cm.sendOk("由于未知的错误，对队伍的要求被拒绝了.");
                        cm.safeDispose();
                    }

                } else if (selection == 3) { // get insode
                    if (cm.getSquad("pinkbean") != null) {
                        var dd = cm.getEventManager("PinkBeanBattle");//执行event事件
                        dd.startInstance(cm.getSquad("pinkbean"), cm.getMap(), 160101);
						if(cm.getPlayer().getMapId() == 270050100){
							//cm.getMap().clearOwnerList();
							//cm.getMap().addAllOwnerHere();
							//cm.getMap().给时钟(240, true, true);
							//cm.worldMessage( "[BOSS公告] " + cm.getChannel() + " 频道的远征队长已经入场，品克缤的讨伐即将开始，请加入远征队伍的玩家尽快入场！");
							//cm.给团队每日("pinkbean");//给团队次数
							给地图每日a(cm.getPlayer().getMap(), "pinkbean");
						}
						//cm.getPlayer().setBossLog('pinkbean');//给bosslog记录
                        cm.dispose();
                    } else {
                        cm.sendOk("由于未知的错误，对队伍的要求被拒绝了.");
                        cm.safeDispose();
                    }
                }
                break;
            case 11:
                cm.banMember("pinkbean", selection);
                cm.dispose();
                break;
            case 12:
                if (selection != -1) {
                    cm.acceptMember("pinkbean", selection);
                }
                cm.dispose();
                break;
        }
    }
}


function 给地图每日a(map, name){
	var chrs = map.getCharactersThreadsafe();
	if(chrs != null && !chrs.isEmpty()){
		var it = chrs.iterator();
		while(it.hasNext()){
			var chr = it.next();
			if (chr != null) {
				chr.setBossLoga(name);
			}
		}
	}
}