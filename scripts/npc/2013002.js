/*
 
 �ű���Ů��������
 */
var status;
var �������� = 10;
var ����Ԥ�� = [[4031997, 1, 100]];

function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  var em = cm.getEventManager("OrbisPQ");
  if (em == null) {
    cm.dispose();
    return;
  }
  for (var i = 4001044; i < 4001064; i++) {
    cm.removeAll(i);
  }
  switch (cm.getMapId()) {
    case 920010100:
      cm.showEffect(false, "quest/party/clear");
      cm.playSound(false, "Party1/Clear");
      cm.gainExp(16500);
      cm.getPlayer().endPartyQuest(1203);
      cm.warp(920011300);
      cm.dispose();
      break;
    default:
      if (mode == -1) {
        cm.dispose();
      }
      if (mode == 1) status++;
      else status--;
      if (status == 0) {
        cm.sendNext(
          "��ȷ�������������û�п�����,������λ��һ��ͺ�,ȷ�϶��п��������ҶԻ�"
        );
      } else if (status == 1) {
        //Ů����ʢ����ĩ����
        if (cm.getPlayer().getMapId() != 920011300) {
          cm.sendOk("��ð���ð�ռң�");
          cm.dispose();
          return;
        }
        if (cm.getBossLog("Ů����") < ��������) {
          cm.gainMeso(100000);
          for (var i = 0; i < ����Ԥ��.length; i++) {
            gainItemPro(����Ԥ��[i][0], ����Ԥ��[i][1], ����Ԥ��[i][2]);
          }
          //cm.gainItem(4002001,1);
          //cm.�������(2);
        }

        //��¼ͨ����Ϣ
        cm.setBossRankCount("Ů����", 1);
        cm.setBossLog("Ů����");
        cm.worldMessage(
          2,
          "[����-Ů����] : ��ϲ " +
            cm.getPlayer().getName() +
            " �����Ů����������"
        );
        //  cm.gainItem(randItem, qty);
        cm.warp(200080101);
        cm.dispose();
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
