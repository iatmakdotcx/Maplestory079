/* ==================
 脚本类型:  任务	    
 脚本版权：游戏盒团队
 联系扣扣：297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
    qm.sendOk("任务暂时性完成.");
    qm.forceStartQuest();
    qm.forceCompleteQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    qm.sendOk("任务暂时性完成.");
    qm.forceStartQuest();
    qm.forceCompleteQuest();
    qm.dispose();
}