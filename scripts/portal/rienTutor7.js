function enter(pi) {
    if (pi.getQuestStatus(21014) == 2 || pi.getPlayer().getJob() != 2000) {
	pi.playPortalSE();
	pi.warp(140010100, 2);
    } else {
	pi.playerMessage(5, "里恩村在右边. 前往里恩村找利琳.");
    }
}