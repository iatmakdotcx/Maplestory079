/*
 
 �ű����
 */
var status = 0;

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == -1 || mode == 0) {
    cm.dispose();
  } else {
    status++;
    if (status == 0) {
      var text =
        "��ʲô���԰����ģ���#b\r\n#L0#�����뿪����#l\r\n#L1#��һ�ѻ����#l#k\r\n\r\n";
      if (cm.getPlayer().getGMLevel() >= 30) {
        text += "------------------����ΪGM����------------------\r\n";
        text += "#r#L2#�����#l\r\n";
      }
      cm.sendSimple(text);
    } else if (status == 1) {
      if (selection == 0) {
        cm.sendYesNo("�����Ҫ�뿪����");
      } else if (selection == 1) {
        if (cm.getPlayer().getMeso() < 1 || !cm.canHold(1322005)) {
          cm.sendOk("�ܱ�Ǹ����û���㹻�Ľ�һ���װ�������ˣ�");
        } else {
          cm.gainItem(1322005, 1);
          cm.gainMeso(-1);
        }
        cm.dispose();
      } else if (selection == 2) {
        cm.startCoconut(cm.getChannel());
        cm.ȫ������(6, "[��Ҭ�ӱ���]��Ҭ�ӱ����Ѿ���ʼ��");
        cm.sendOk("��ѿ�����");
        cm.dispose();
        return;
      }
    } else if (status == 2) {
      var map = cm.getSavedLocation("EVENT");
      if (map > -1) {
        cm.warp(map, 0);
      } else {
        cm.warp(910000000, 0);
      }
      cm.dispose();
    }
  }
}

function getEimForGuild(em, id) {
  var stringId = "" + id;
  return em.getInstance(stringId);
}
