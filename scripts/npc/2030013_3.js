/*
 
 �ű�����������
 ���棺�����Ƶ����ս
 */

var status = -1;
var victim;

function start() {
  if (cm.�ж�ָ����ͼ�������(209000014) > 0) {
    cm.playerMessage(5, "�����Ѿ����˿�ʼ��ս�ˡ�");
    cm.dispose();
    return false;
  }

  var level = cm.getPlayerStat("LVL");

  if (!cm.haveItem(5252001) || level < 120) {
    cm.playerMessage(
      5,
      "������û����Ʊ�������ڿ���̵깺�򡣻�����ȼ�û�ﵽ120����"
    );
    cm.playerMessage(
      1,
      "������û����Ʊ�������ڿ���̵깺�򡣻�����ȼ�û�ﵽ120����"
    );
    cm.dispose();
  } else {
    if (cm.getPlayerCount(209000014) <= 0) {
      var FantMap = cm.getMap(209000014);
      cm.playerMessage(
        6,
        "��� [" + cm.getPlayer().getName() + "] ����������������"
      );
      FantMap.resetFully();
      cm.���������ػؼ�¼(cm.getPlayer().getClient().getChannel());
      cm.warp(209000014, 0);
    } else {
      cm.warp(209000014, 0);
    }
    cm.dispose();
  }
}

function action(mode, type, selection) {
  switch (status) {
    case 1:
      if (mode == 1) {
        cm.warp(910000000, 0);
      }
      cm.dispose();
      break;
  }
}
