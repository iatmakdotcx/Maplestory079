/*
 
 �ű�����������
 ���棺�����Ƶ����ս
 */

var status = -1;
var victim;

function start() {
  if (cm.�ж�ָ����ͼ�������(271040100) > 1) {
    cm.playerMessage(5, "�����Ѿ����˿�ʼ��ս�ˡ�");
    cm.dispose();
    return false;
  }

  var level = cm.getPlayerStat("LVL");

  if (!cm.haveItem(4001017) || level < 50) {
    cm.playerMessage(5, "������û�л���֮�ۡ�������ȼ�û�ﵽ50����");
    cm.dispose();
  } else {
    if (cm.getPlayerCount(271040100) <= 0) {
      var FantMap = cm.getMap(271040100);
      FantMap.resetFully();
      cm.���������ػؼ�¼(cm.getPlayer().getClient().getChannel());
      cm.warp(271040100, 0);
    } else {
      cm.warp(271040100, 0);
    }
    cm.dispose();
  }
}

function action(mode, type, selection) {
  switch (status) {
    case 1:
      if (mode == 1) {
        cm.warp(211042300, 0);
      }
      cm.dispose();
      break;
  }
}
