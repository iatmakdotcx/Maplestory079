/*
 
 �ű���Ѳ�����
 */

var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var xx;
var xxx;
function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (status == 0 && mode == 0) {
    cm.�Ի�����();
    return;
  }
  if (mode == 1) {
    status++;
  } else {
    status--;
  }
  //��ʼ
  if (status == 0) {
    var selStr =
      "    " +
      �� +
      " " +
      �� +
      "  " +
      �� +
      "  " +
      �� +
      " #r#e < ������� > #k#n " +
      �� +
      "  " +
      �� +
      "  " +
      �� +
      " " +
      �� +
      "\r\n\r\n";
    selStr += "" + cm.��ʾ�������() + " ";
    cm.�Ƿ�˵������(selStr);
  } else if (status == 1) {
    xx = selection;
    var selStr2 =
      "    " +
      �� +
      " " +
      �� +
      "  " +
      �� +
      "  " +
      �� +
      " #r#e < ������� > #k#n " +
      �� +
      "  " +
      �� +
      "  " +
      �� +
      " " +
      �� +
      "\r\n\r\n";
    selStr2 += "" + cm.��ʾ���������ϸ(xx) + " ";
    cm.�Ƿ�˵������(selStr2);
  } else if (status == 2) {
    xxx = selection;
    if (xxx >= 0 && xxx < 1000000) {
      cm.�����Ի�();
      cm.����ID�������(xxx);
    } else if (xxx < 0) {
      cm.�����Ի�();
    } else {
      cm.�����Ի�();
      cm.����ID������(xxx - 1000000);
    }
  }
}
