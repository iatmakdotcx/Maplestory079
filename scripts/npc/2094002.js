/*
 
 �ű���������
 */

var ����ͨ�ؾ��� = 25000;
var �������� = 10;
var ����Ԥ�� = [[4031997, 1, 100]];

var ��ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (status == 0 && mode == 0) {
    cm.dispose();
    return;
  }
  if (mode == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    var selStr = "��Ҫ��������򲻹���?#k\r\n";
    if (cm.getMapId() == 925100000) {
      selStr =
        "#r������������һ��#k\r\n\r\n��Ҫ�ռ� #b6 #k�� #v4001117#�ſ���ͨ��\r\n\r\n";
    }
    if (cm.getMapId() == 925100100) {
      selStr =
        "#r�����������ڶ���#k\r\n\r\n��Ҫ�ռ� #b50#k�� #v4001120# #v4001121# #v4001122#�ſ���ͨ��\r\n";
    }

    if (cm.getMapId() == 925100300) {
      selStr =
        "#r����������������#k\r\n\r\n����Ҫɱ���������еĹ���ſ���ͨ��\r\n";
    }
    if (cm.getMapId() == 925100500) {
      selStr = "#r�������������Ĺ�#k\r\n\r\n����ս��BOSS��û����\r\n";
      if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
        selStr += "#L2##b��ȡ����#l#k\r\n";
      }
    }
    selStr += "#L1##b�������˳�����#l#k\r\n";
    cm.sendSimple(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 10:
        var FantMap = cm.getMap(925100000);
        FantMap.resetFully();
        cm.warpParty(925100000, 0);
        cm.dispose();
        break;
      case 1:
        cm.warpParty(251010404, 0);
        cm.dispose();
        break;
      case 2:
        if (cm.getMap().getAllMonstersThreadsafe().size() == 0) {
          //������ʢ����Ƥ������
          //cm.gainItem(4031559, 1);
          if (cm.getBossLog("������") < ��������) {
            for (var i = 0; i < ����Ԥ��.length; i++) {
              gainItemPro(����Ԥ��[i][0], ����Ԥ��[i][1], ����Ԥ��[i][2]);
            }
            //cm.�������(1);
            cm.gainExp(����ͨ�ؾ���);
          }
          //��¼��Ϣ
          cm.setBossRankCount("������", 1);
          cm.setBossLog("������");
          cm.worldMessage(
            2,
            "[����-������] : ��ϲ " +
              cm.getPlayer().getName() +
              " ��ɺ�����������"
          );
          cm.warp(251010404, 0);
          cm.dispose();
        } else {
          cm.sendOk("����ǰ��ͼ����");
          cm.dispose();
        }
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
