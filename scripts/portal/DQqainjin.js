function enter(pi) {
    if (pi.isQuestActive(31149)) {
	pi.forceCompleteQuest(31149);
	pi.playerMessage("Quest complete");
    } else if (pi.haveItem(4033981)) {
	pi.warp(863010700,0);
	pi.gainItem(4033981, -1);
  } else {
	pi.playerMessage("����ʹ�����ķ���Կ�״򿪴���...");
    }
}