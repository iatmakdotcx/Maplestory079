/*
 
 �ű�������ɭ��
 */
var �������� = 1;
var ������� = 6;
var ��͵ȼ� = 21;
var ��ߵȼ� = 256;
var �������� = 10;
//����ɭ�ֽ���Ԥ��
/*
 ��Ʒ������������
 */
var ����Ԥ�� = [[4031997, 1, 100]];
var status = 0;

function action(mode, type, selection) {
  if (mode == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.dispose();
    }
    status--;
  }
  if (status == 1) {
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
      "\r\n     ����ɭ�֡�������Ҫ���������#b" +
        �������� +
        " - " +
        ������� +
        "#k���ȼ�Ҫ��#b" +
        ��͵ȼ� +
        " - " +
        ��ߵȼ� +
        "#k����Ҫ�μӸ���#b����ɭ��#k��\r\n\r\n   �������: #r" +
        cm.getBossLog("����ɭ��") +
        "\r\n\r\n#k#e��������Ԥ��:#n\r\n\r\n" +
        �ı���Ϣ +
        ""
    );
  } else if (status == 2) {
    if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
      cm.sendOk("�����Ķӳ�������̸����");
    } else {
      var party = cm.getPlayer().getParty().getMembers();
      var mapId = cm.getPlayer().getMapId();
      var next = true;
      var size = 0;
      var it = party.iterator();
      while (it.hasNext()) {
        var cPlayer = it.next();
        var ccPlayer = cm
          .getPlayer()
          .getMap()
          .getCharacterById(cPlayer.getId());
        if (
          ccPlayer == null ||
          ccPlayer.getLevel() > ��ߵȼ� ||
          ccPlayer.getLevel() < ��͵ȼ�
        ) {
          next = false;
          break;
        }
      }
      if (party.size() > ������� || party.size() < ��������) {
        next = false;
      }
      /* 			if(cm.�ж��Ŷ�ÿ��("����ɭ��", ��������) == 0){
				cm.sendOk("��Ǹ��������Ķ����������Ѿ����� " + �������� + " ���ˣ�");
				cm.dispose();
				return;
			} */
      if (next) {
        var em = cm.getEventManager("Ellin");
        if (em == null) {
          cm.sendOk("��ǰ���������⣬���������Ա....");
        } else {
          var prop = em.getProperty("state");
          if (prop.equals("0") || prop == null) {
            em.startInstance(cm.getParty(), cm.getMap());
            cm.dispose();
            return;
          } else {
            cm.sendOk("�����Ѿ�������,�����Ժ��ڽ��뿴��,�����ǻ�Ƶ");
          }
        }
      } else {
        cm.sendOk(
          "����: #b����ɭ��#k\r\n����: #b" +
            �������� +
            " - " +
            ������� +
            "#k\r\n�ȼ�: #b" +
            ��͵ȼ� +
            " - " +
            ��ߵȼ� +
            "#k"
        );
      }
    }

    cm.dispose();
  }
}
