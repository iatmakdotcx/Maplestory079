/*
 
 �ű����ղ��ֲ�ҳ��
 */
//�ز�����
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var r = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";

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
      "\r\n  " +
      �� +
      " " +
      �� +
      "  " +
      �� +
      "  " +
      �� +
      " #r#e < �����ֲ� > #k#n " +
      �� +
      "  " +
      �� +
      "  " +
      �� +
      " " +
      �� +
      "\r\n\r\n";
    selStr +=
      "		Hi~#b#h ##k���㱳���ǲ����кܶ���ᰡ���������෱��̫ռ�ռ��ˣ�����԰����Ƿ��ھ����ֲ�Ŷ��#k\r\n\r\n";
    selStr += "\t\t\t\t#b#L0#����#l#k\r\n";
    selStr += "\t\t\t\t#b#L1#ȡ������#l#k\r\n";
    selStr += "\t\t\t\t#b#L2#�������[ѡ��]#l#k\r\n";
    selStr += "\t\t\t\t#b#L3#�������[����]#l#k\r\n";
    cm.�Ƿ�˵������(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 0:
        cm.�Ի�����();
        cm.openNpc(9900004, 0);
        break;
      case 1:
        cm.�Ի�����();
        cm.openNpc(9900004, 2001);
        break;
      case 2:
        cm.�Ի�����();
        cm.openNpc(9900004, 2002);
        break;
      case 3:
        for (var i = 0; i <= 96; i++) {
          if (cm.getInventory(2).getItem(i) != null) {
            if (
              cm.getInventory(2).getItem(i).getItemId() >= 2040000 &&
              cm.getInventory(2).getItem(i).getItemId() < 2050000
            ) {
              cm.�����ֲ��ղ�(
                cm.getInventory(2).getItem(i).getItemId(),
                cm
                  .getPlayer()
                  .�ж���Ʒ����(cm.getInventory(2).getItem(i).getItemId()),
                cm.getPlayer().id
              );
              cm.����Ʒ(
                cm.getInventory(2).getItem(i).getItemId(),
                cm
                  .getPlayer()
                  .�ж���Ʒ����(cm.getInventory(2).getItem(i).getItemId())
              );
            }
          }
        }
        cm.getPlayer().���ߴ浵();
        cm.˵������("һ���������о���ɹ���");
        cm.�Ի�����();
        break;
    }
  }
}
