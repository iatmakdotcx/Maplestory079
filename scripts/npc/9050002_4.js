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
                
   cm.sendOk("感谢使用.");
   cm.dispose();
   return;                    
                }
                if (mode == 1) {
   status++;
  }
  else {
   status--;
  }
          if (status == 0) {
	var tex2 = "";	
	var text = "";
	for(i = 0; i < 10; i++){
		text += "";
	}				
	text += "#d#k每日任务4\r\n#r★奖励#v4000463#★需要收集以下物品:\r\n\r\n#v4031227##d#z4031227#\n\r\n"
	text += "\r\n#L1##d我收集了以上物品,领取奖励!";//
	text += "     \r\n"
        cm.sendSimple(text);
        } else if (selection == 1) {
                if(cm.getPlayer().getBossLog('task4') > 0)
{
cm.sendOk("你已经领取过1次奖励");
cm.dispose();
}else if(cm.getPlayer().getBossLog('task3') < 1)
{
cm.sendOk("你还没有完成第3阶段任务");
cm.dispose();
}
else if(cm.haveItem(4031227,1)){
				cm.gainItem(4031227,-1);
                               cm.gainItem(4000463,1);
cm.getPlayer().setBossLog('task4');
            cm.sendOk("领取成功！");
            cm.dispose();
            
cm.喇叭(3, "玩家：[" + cm.getPlayer().getName() + "]完成第 4 阶段每日任务！");
			}else{
            cm.sendOk("你还没有达到任务完成条件\r\n");
            cm.dispose();
			}
		}
    }
}




