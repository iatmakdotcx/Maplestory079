function enter(pi) {
	if (!pi.isQuestFinished(21014))
	{
	  pi.playerMessage("Ҫ����ȥ��ׯ�￴����");
	  return false;
	}else{
	  pi.warp(140010100, 2);
	  return true;
	}
}