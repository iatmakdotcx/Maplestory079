/*
 
 */

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == -1) {
    cm.dispose();
  } else {
    if (mode == 1) status++;
    else status--;
  }
  if (status == 0) {
    if (cm.isQuestActive(2314)) {
      cm.PlayerToNpc("����һ��#b�޴��ħ������#k ...");
    } else if (cm.isQuestActive(2322)) {
      cm.PlayerToNpc("����ط������ȱ���� #b#p1300003##k ֪���ɣ�");
    } else {
      cm.PlayerToNpc("���Ƿ��ʹ�� #b#v2430014# #t2430014#����");
    }
  } else if (status == 1) {
    if (cm.isQuestActive(2314)) {
      cm.forceCompleteQuest(2314);
      cm.dispose();
    } else {
      if (cm.haveItem(2430014, 1)) {
        cm.gainItem(2430014, -1);
        cm.��ʼ����(2314);
        cm.playerMessage("����Խ�ȥ�ˡ�");
      } else {
        cm.sendOk(
          "��û��#v2430014##r#z2430014##k���޷����룬��֪���������õĻ�������ͨ������̵깺��"
        );
        cm.dispose();
      }
    }
  }
}
