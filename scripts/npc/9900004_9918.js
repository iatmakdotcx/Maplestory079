/*
 
 �ű�����������ϵͳ
 */

importPackage(net.sf.odinms.client);
var status = 0;
var fee;
var youjian = 0;
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == -1) {
    cm.�Ի�����();
  } else {
    if (mode == 0) {
      status == 0;
    }
    if (mode == 1) {
      status++;
    } else {
      status--;
    }
    //��ȡ��ɫID
    var ��ɫID = cm.getPlayer().id;
    //��ʾ�б�
    if (status == 0) {
      cm.sendYesNo(
        "  \t\t   " +
          �� +
          "  " +
          �� +
          " #r#e < �����б� > #k#n " +
          �� +
          "  " +
          �� +
          "\r\n\r\n      Hi~ #b#h ##k������ʾ��Ϸ�����м��壬û�м������ҿ��������������塣����������ҵ�С����ļ���һ����ˣŶ��\r\n" +
          cm.��ʾ���м���() +
          ""
      );
    } else if (status == 1) {
      cm.sendYesNo(
        "��ȷ��Ҫ���� #r" + cm.��ȡ��������(selection) + "#k ������"
      );
      fee = selection;
    } else if (status == 2) {
      if (cm.Getguildsl("" + fee + "", 1) > 0) {
        cm.˵������("�ü����ֹ������롣");
        cm.�Ի�����();
        return;
      }
      if (cm.getPlayer().getGuildId() == 0) {
        cm.˵������("�ɹ�������塣");
        cm.�������(fee, ��ɫID);
      } else {
        cm.˵������("���Ѿ��м����ˣ������ظ����룬");
        cm.�Ի�����();
        return;
      }
    }
  }
}
