/*
 
 �ű������������
 */

var ��С�ȼ� = 35;
var ��ߵȼ� = 255;
var �������� = 1;
var ������� = 6;
var �������� = 10;
//���������Ԥ��
/*


 ��Ʒ������
 */
var ����Ԥ�� = [[4031997, 1, 100]];
var status = -1;
function action(mode, type, selection) {
  if (mode == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.dispose();
      return;
    }
    status--;
  }
  if (status == 0) {
    var �ı���Ϣ = "";
    �ı���Ϣ += "        #b���x1#k\r\n";
    for (var i = 0; i < ����Ԥ��.length; i++) {
      �ı���Ϣ +=
        "   " +
        cm.��ʾ��Ʒ(����Ԥ��[i][0]) +
        "x" +
        ����Ԥ��[i][1] +
        " " +
        ����Ԥ��[i][2] +
        " % #k\r\n";
    }
    cm.sendYesNo(
      "\r\n     �����101�㸱������Ҫ�������Э����ϣ�����ͨ�أ��������ǻ��������Ķ���������Ҫ�� #b" +
        �������� +
        " - " +
        ������� +
        "#k���ȼ�Ҫ��#b" +
        ��С�ȼ� +
        " - " +
        ��ߵȼ� +
        "#k����Ҫ�μӸ���#b�����#k��������ʢ��#r��Ʊ#kŶ��\r\n\r\n   �������: #r" +
        cm.getBossLog("�����") +
        "\r\n\r\n#k#e��������Ԥ��:#n\r\n\r\n" +
        �ı���Ϣ +
        ""
    );
  } else if (status == 1) {
    cm.removeAll(4001022);
    cm.removeAll(4001023);
    if (cm.getParty() == null) {
      cm.sendOk("������������ң������öӳ����ҡ�");
    } else if (cm.getParty() == null) {
      cm.˵������(
        "��Ķ���û�дﵽҪ��:\r\n\r\n����: #b�����#k\r\n����: #b" +
          �������� +
          " - " +
          ������� +
          "#k\r\n�ȼ�: #b" +
          ��С�ȼ� +
          " - " +
          ��ߵȼ� +
          "#k"
      );
    } else if (!cm.isLeader()) {
      cm.sendSimple("��������������� #b�ӳ�#k ����̸.#b\r\n");
    } else {
      var party = cm.getParty().getMembers();
      var mapId = cm.getMapId();
      var next = true;
      var levelValid = 0;
      var inMap = 0;
      var it = party.iterator();

      while (it.hasNext()) {
        var cPlayer = it.next();
        if (cPlayer.getLevel() >= ��С�ȼ� && cPlayer.getLevel() <= ��ߵȼ�) {
          levelValid += 1;
        } else {
          next = false;
        }
        if (cPlayer.getMapid() == mapId) {
          inMap += cPlayer.getJobId() == 900 ? 6 : 1;
        }
      }
      if (party.size() > ������� || inMap < ��������) {
        next = false;
      }
      // if(cm.�ж��Ŷ�ÿ��("�����", ��������) == 0){
      // cm.sendOk("��Ǹ��������Ķ����������Ѿ����� " + �������� + " ���ˣ�");
      // cm.dispose();
      // return;
      // }
      if (next) {
        var em = cm.getEventManager("LudiPQ");
        if (em == null) {
          cm.sendSimple("�Ҳ����ű�������GM#b\r\n");
        } else {
          var prop = em.getProperty("state");
          if (prop.equals("0") || prop == null) {
            em.startInstance(cm.getParty(), cm.getMap());
            cm.removeAll(4001022);
            cm.removeAll(4001023);
            cm.dispose();
            return;
          } else {
            cm.sendSimple(
              "���������Ѿ��������� #r���������#k �볢�Ի�Ƶ�����ߵ�����������ɡ�#b\r\n"
            );
          }
        }
      } else {
        cm.sendSimple(
          "��Ķ���ò��û�дﵽҪ��...:\r\n\r\n#rҪ��: " +
            �������� +
            " ��ҳ�Ա, ÿ���˵ĵȼ������� " +
            ��С�ȼ� +
            " �� �ȼ� " +
            ��ߵȼ� +
            ".#b\r\n#L0#��Ҫ�һ����Ѻ۵��۾�#l"
        );
      }
    }
    cm.�Ի�����();
  }
}
