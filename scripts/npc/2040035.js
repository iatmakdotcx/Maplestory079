/*
 
 �ű��������������ȡ
 */

var ͨ�ؾ��� = 15000;
var �������� = 10;
var status;
var ����Ԥ�� = [[4031997, 1, 100]];

function start() {
  status = -1;
  action(1, 0, 0);
}
//����ͨ�ؽ�������
/*
cm.���ʸ���Ʒ(��Ʒ���룬�̶�����������,��ע)��
cm.���ʸ���Ʒ2(��Ʒ���룬�������������,��ע)��
*/
function action(mode, type, selection) {
  if (mode == -1) {
    cm.dispose();
  }
  if (mode == 1) status++;
  else status--;
  if (status == 0) {
    cm.sendNext("��ȷ����ĵ�������û����,�����첻������ม�");
  } else if (status == 1) {
    //���ʢ����������
    if (cm.getBossLog("�����") < ��������) {
      cm.gainMeso(100000);
      for (var i = 0; i < ����Ԥ��.length; i++) {
        gainItemPro(����Ԥ��[i][0], ����Ԥ��[i][1], ����Ԥ��[i][2]);
      }
      //cm.�������(1);
      cm.gainExp(ͨ�ؾ���);
    }

    //cm.���ʸ���Ʒ2[4170007,1,100,"�۾�"]

    //��¼ͨ����Ϣ
    cm.getPlayer().endPartyQuest(1202);
    cm.setBossRankCount("�����", 1);
    cm.setBossLog("�����");
    cm.worldMessage(
      2,
      "[����-�����] : ��ϲ " + cm.getPlayer().getName() + " ��������������"
    );
    cm.warp(221024500);
    cm.dispose();
  }
}

function gainItemPro(itemId, count, prop) {
  var number = Math.random() * 100;
  if (number <= prop) {
    cm.gainItem(itemId, count);
  }
}
