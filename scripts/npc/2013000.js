/*
 
 �ű���Ů����
 */

var ��͵ȼ� = 49;
var ��ߵȼ� = 256;
var �������� = 1;
var ������� = 6;
var ��һ�ؾ��� = 20000;
var �������� = 10;
var ����Ԥ�� = [[4031997, 1, 100]];

var status = -1;
function action(mode, type, selection) {
  if (mode == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.�Ի�����();
      return;
    }
    status--;
  }
  if (cm.getPlayer().getMapId() == 920010000 && cm.isLeader()) {
    if (cm.getPlayer().haveItem(4001063, 15)) {
      cm.givePartyExp(��һ�ؾ���);
      cm.gainItem(4001063, -15);
      cm.warpParty(920010100);
      cm.�����Ի�();
      return;
    } else {
      cm.sendNext("�ұ�Զ�ž������������������ռ�15Ƭ�ƶ����ҳ�ȥ��");
      cm.�����Ի�();
      return;
    }
  }
  if (status == 0) {
    var �ı���Ϣ = "";
    �ı���Ϣ += "        #b���x2#k\r\n";
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
      "\r\n     ��������Ů��ɡ�������Ҫ���������#b" +
        �������� +
        " - " +
        ������� +
        "#k���ȼ�Ҫ��#b" +
        ��͵ȼ� +
        " - " +
        ��ߵȼ� +
        "#k����Ҫ�μӸ���#bŮ����#k��\r\n\r\n #k   �������: #r" +
        cm.getBossLog("Ů����") +
        "\r\n\r\n#k#e��������Ԥ��:#n\r\n\r\n" +
        �ı���Ϣ +
        ""
    );
  } else if (status == 1) {
    if (cm.getParty() == null) {
      cm.sendSimple("������������ң������öӳ����ҡ�");
    } else {
      var party = cm.getParty().getMembers();
      var mapId = cm.getMapId();
      var next = true;
      var levelValid = 0;
      var inMap = 0;
      var it = party.iterator();
      while (it.hasNext()) {
        var cPlayer = it.next();
        if (cPlayer.getLevel() >= ��͵ȼ� && cPlayer.getLevel() <= ��ߵȼ�) {
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
      // if(cm.�ж��Ŷ�ÿ��("Ů����", ��������) == 0){
      // cm.sendOk("��Ǹ��������Ķ����������Ѿ����� " + �������� + " ���ˣ�");
      // cm.dispose();
      // return;
      // }
      if (next) {
        var em = cm.getEventManager("OrbisPQ");
        if (em == null) {
          cm.sendSimple("�Ҳ����ű�������GM");
        } else {
          var prop = em.getProperty("state");
          if (prop.equals("0") || prop == null) {
            removeItemOfParty(cm.getParty(), 4001050);
            removeItemOfParty(cm.getParty(), 4001051);
            removeItemOfParty(cm.getParty(), 4001052);
            em.startInstance(cm.getParty(), cm.getMap());
            cm.�����Ի�();
            return;
          } else {
            cm.sendSimple(
              "���������Ѿ��������� #r���������#k �볢�Ի�Ƶ�����ߵ�����������ɡ�"
            );
          }
        }
      } else {
        cm.sendSimple(
          "��Ķ���ò��û�дﵽҪ��...:\r\n\r\n#rҪ��: " +
            �������� +
            " ��ҳ�Ա, ÿ���˵ĵȼ������� " +
            ��͵ȼ� +
            " �� �ȼ� " +
            ��ߵȼ� +
            "."
        );
      }
    }
  } else {
    cm.�����Ի�();
  }
}

function removeItemOfParty(party, itemId) {
  var pChrList = party.getMembers();
  if (pChrList == null || pChrList.isEmpty()) {
    return false;
  }
  var it = pChrList.iterator();
  while (it.hasNext()) {
    var pChr = it.next();
    if (pChr == null) {
      continue;
    }
    var chr = cm.getPlayer().getMap().getCharacterById(pChr.getId()); //ͽ��
    if (chr != null) {
      chr.removeAll(itemId);
    }
  }
}
