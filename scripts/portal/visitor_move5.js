function enter(pi) {
	if (pi.getPlayer().getParty() != null && pi.getMap().getAllMonstersThreadsafe().size() == 0 && pi.isLeader()) {
		pi.warpParty(pi.getPlayer().getMapId() - 450);
		pi.playPortalSE();
	} else {
		pi.playerMessage(5,"����ܵ�ͼ�ڵ����е���.");
	}
}