function enter(pi) {
    if (pi.getMap().getAllMonstersThreadsafe().size() == 0) {
 pi.warpParty(882100003,0); //next
    } else {
	pi.playerMessage(5, "�������ͼ�ϵ����е���.");
    }
}