/*
 
 �ű����ƹ�ϵͳ
 */
var ��ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
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
  var MC = cm.getServerName();
  var �ƹ㿪�� = cm.GetPiot("�ƹ㿪��", "1");
  if (status <= 0) {
    var selStr =
      "\t\t " +
      �� +
      "  " +
      �� +
      "  " +
      �� +
      " #r��Ϸ�ƹ�Ա#k " +
      �� +
      "  " +
      �� +
      "  " +
      �� +
      "\r\n\r\n";
    selStr += "\t\t#d �ƹ�Ⱥ��3��˫������30���ҹ�����ȡ������#k\r\n\r\n";
    selStr += "\t\t\t\t����ƹ���Ϊ:#r" + cm.getPlayer().id + "#k#n\r\n";
    if (cm.getBossRank("�ƹ�Ա", 2) > 0) {
      selStr +=
        "\t\t\t\t����ƹ�Ա��:#r" +
        cm.��ɫIDȡ����(cm.getBossRank("�ƹ�Ա", 2)) +
        "#k#n\r\n";
    }
    selStr += "\t\t\t#L0#" + ��ͷ + "#b����ҳ��#l#k\r\n";
    selStr += "\t\t\t#L1#" + ��ͷ + "#b�����ƹ���#l#k\r\n";
    selStr += "\t\t\t#L2#" + ��ͷ + "#b���ƹ�����Ⱥ#l#k\r\n";
    if (cm.getBossRank("�ƹ�Ա", 2) > 0) {
      if (cm.getQuestStatus(9941303) == 0) {
        //     selStr += "\t\t\t#L3#" + ��ͷ + "#b��3�������ƹ���˫��30���ҹ�����ȡ����#l#k\r\n";
      }
    }

    cm.sendSimple(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 0:
        cm.dispose();
        cm.openNpc(9900004, 0);
        break;
      case 1:
        cm.dispose();
        cm.openNpc(9900004, 81);
        break;

      case 2:
        var text =
          "\t#r" + cm.getChar().getName() + "#k �ƹ����ң�#n\r\n\r\n";

        var rankinfo_list = cm.getBossRankCountTop("" + cm.getPlayer().id + "");
        if (rankinfo_list != null) {
          for (var i = 0; i < rankinfo_list.size(); i++) {
            if (i == 20) {
              break;
            }
            var info = rankinfo_list.get(i);

            text += i == 0 ? "#b" : i == 1 ? "#b" : i == 2 ? "#b" : "";
            text += "\t #r" + (i + 1) + "#k#n.[ ";
            // ������ֿո�
            text += info.getCname() + " ]";
            for (var j = 16 - info.getCname().getBytes().length; j > 0; j--) {
              text += " ";
            }
            text += "\t#bLv." + cm.��ɫ����ȡ�ȼ�(info.getCname()) + "";
            text += "#k";

            text += "\r\n";
          }
        }
        cm.sendOkS(text, 3);
        cm.dispose();
        break;
    }
  }
}
