/*
 
 �ű�������ɭ��
 */

var ����ͨ�ؾ��� = 50000;
var �������� = 10;
var ����Ԥ�� = [[4031997, 1, 100]];

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (status <= 0 && mode <= 0) {
    cm.dispose();
    return;
  }
  if (mode == 1) {
    status++;
  } else {
    status--;
  }
  if (status <= 0) {
    var selStr = "\r\n";
    if (cm.getMapId() == 930000000) {
      selStr += "\t�������ȥ����ʼð�հɣ�\r\n";
    }
    if (cm.getMapId() == 930000100) {
      selStr += "\t�Ͷ��Ѻ�������յ�ǰ��ͼ���Ｔ��ͨ�ء�\r\n";
    }
    if (cm.getMapId() == 930000200) {
      selStr += "\t�Ѹ�Ⱦ�Ĺ������������ϻ�ɱ������һ�°ѡ�\r\n";
    }

    if (cm.getMapId() == 930000300) {
      selStr += "\r\n\r\n   #L2##b���ƹ����ˣ�#l\r\n";
    }
    if (cm.getMapId() == 930000600) {
      selStr +=
        "\t����#b#v4001163##t4001163##k���ұ�ʯ���ٻ����׶����ˣ�����սʤ���ɡ�\r\n";
    }

    if (cm.getMapId() == 930000700) {
      selStr += "\r\n\r\n   #L3##b��ʿ����������ͨ����#l\r\n";
    }

    if (cm.getMapId() != 930000700) {
      selStr += "\r\n\r\n   #L1##b�˳�����#l\r\n";
    }
    cm.sendSimple(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 1:
        cm.warp(300030100, 0);
        cm.dispose();
        break;
      case 2:
        cm.warpParty(930000500);
        cm.dispose();
        break;
      case 3:
        //����ʢ����Ʊ����
        //cm.gainItem(4002002, 1);
        if (cm.getBossLog("����ɭ��") < ��������) {
          //cm.gainItem(4031997, 1);
          for (var i = 0; i < ����Ԥ��.length; i++) {
            gainItemPro(����Ԥ��[i][0], ����Ԥ��[i][1], ����Ԥ��[i][2]);
          }
          //cm.�������(1);
          //��¼ͨ����Ϣ
          cm.gainExp(����ͨ�ؾ���);
          cm.gainExp(����ͨ�ؾ���);
          cm.gainExp(����ͨ�ؾ���);
          cm.gainExp(����ͨ�ؾ���);
          cm.gainExp(����ͨ�ؾ���);
        }
        cm.getPlayer().endPartyQuest(1206);
        cm.removeAll(4001161);
        cm.removeAll(4001162);
        cm.removeAll(4001163);
        cm.removeAll(4001164);
        cm.removeAll(4001169);
        cm.removeAll(2270004);
        cm.warp(930000800, 0);
        cm.setBossRankCount("����ɭ��", 1);
        cm.setBossLog("����ɭ��");
        cm.worldMessage(
          2,
          "[����-����ɭ��] : ��ϲ " +
            cm.getPlayer().getName() +
            " ��ɶ���ɭ�ָ�����"
        );
        cm.�����Ի�();
        break;
    }
  }
}

function gainItemPro(itemId, count, prop) {
  var number = Math.random() * 100;
  if (number <= prop) {
    cm.gainItem(itemId, count);
  }
}
