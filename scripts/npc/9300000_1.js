/*
 
 �ű����������˵�
 */
//ʱ������
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
//�ز�����
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var r = "#fUI/UIWindow.img/Quest/TimeQuest/AlarmClock/default/0/0#";

function start() {
  status = -1;
  action(1, 0, 0);
}
function ���Ǳ��() {
  var ��� = cm.�����(180);
  if (��� > 0 && ��� <= 45) {
    var ֵ = 0;
    if (cm.�ٷ���(90)) {
      var ֵ = cm.�����(50);
    } else {
      var ֵ = cm.�����(100);
    }
    cm.getPlayer().����Ǳ��(100, ֵ);
    cm.˵������("��ϲ���ȡǱ�ܣ����� #b" + ֵ + "#k �̶������˺��Ƽ�ֵ��");
    //cm.ȫ������("[��ɫǱ��] : ��ϲ " + cm.getChar().getName() + " ��ȡǱ�� ���� " + ֵ + " �̶������˺��Ƽ�ֵ��");
  } else if (��� > 45 && ��� <= 90) {
    var ֵ = 0;
    if (cm.�ٷ���(90)) {
      var ֵ = cm.�����(50);
    } else {
      var ֵ = cm.�����(100);
    }
    cm.getPlayer().����Ǳ��(101, ֵ);
    cm.˵������("��ϲ���ȡǱ�ܣ����� #b" + ֵ + "#k �̶�ħ���˺��Ƽ�ֵ��");
    //cm.ȫ������("[��ɫǱ��] : ��ϲ " + cm.getChar().getName() + " ��ȡǱ�� ���� " + ֵ + " �̶�ħ���˺��Ƽ�ֵ��");
  } else if (��� > 90 && ��� <= 150) {
    var ֵ = 0;
    if (cm.�ٷ���(90)) {
      var ֵ = cm.�����(10000);
    } else {
      var ֵ = cm.�����(50000);
    }
    cm.getPlayer().����Ǳ��(1, ֵ);
    cm.˵������("��ϲ���ȡǱ�ܣ����� #b" + ֵ + "#k �̶������˺���");
    //cm.ȫ������("[��ɫǱ��] : ��ϲ " + cm.getChar().getName() + " ��ȡǱ�� ���� " + ֵ + " �̶������˺���");
  } else if (��� > 150 && ��� <= 180) {
    var ֵ = 0;
    if (cm.�ٷ���(90)) {
      var ֵ = cm.�����(30000);
    } else {
      var ֵ = cm.�����(10000);
    }
    cm.getPlayer().����Ǳ��(1, ֵ);
    cm.˵������("��ϲ���ȡǱ�ܣ����� #b" + ֵ + "#k �̶������˺���");
    //cm.ȫ������("[��ɫǱ��] : ��ϲ " + cm.getChar().getName() + " ��ȡǱ�� ���� " + ֵ + " �̶������˺���");
  }
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

  /*if(day!=2 && day!=3){
     cm.˵������("���ڻʱ���ڡ�");
     cm.�Ի�����();
     return;
     }
     if(day==2 && hour<20){
     cm.˵������("���ڻʱ���ڡ�");
     cm.�Ի�����();
     return;
     }*/
  if (cm.getBossLog("paoshang") >= 10) {
    var ÿ���ռ� = 10;
  } else {
    var ÿ���ռ� = cm.getBossLog("paoshang");
  } //10

  if (cm.getBossLog("����") >= 10) {
    var ÿ�յ��� = 10;
  } else {
    var ÿ�յ��� = cm.getBossLog("����");
  } //10

  if (cm.��ѯ��������ʱ��() >= 300) {
    var ÿ������ = 300;
  } else {
    var ÿ������ = cm.��ѯ��������ʱ��();
  } //10

  if (cm.getBossLog("������������ȡ") >= 1) {
    var ÿ������ = 1;
  } else {
    var ÿ������ = cm.getBossLog("������������ȡ");
  } //5

  if (ÿ�ո���() >= 5) {
    var ÿ�ո���2 = 5;
  } else {
    var ÿ�ո���2 = ÿ�ո���();
  } //5

  if (cm.getBossLog("�ճ��̳ǹ���") >= 1) {
    var �̳ǹ��� = 1;
  } else {
    var �̳ǹ��� = cm.getBossLog("�ճ��̳ǹ���");
  } //1

  if (cm.getBossLog("ÿ���ͻ�") >= 2) {
    var ÿ���ͻ� = 2;
  } else {
    var ÿ���ͻ� = cm.getBossLog("ÿ���ͻ�");
  } //2

  if (cm.getBossLog("ÿ�մ���") >= 5) {
    var ÿ�մ��� = 5;
  } else {
    var ÿ�մ��� = cm.getBossLog("ÿ�մ���");
  } //5

  if (cm.getBossLog("ÿ�ո�ħ") >= 2) {
    var ÿ�ո�ħ = 2;
  } else {
    var ÿ�ո�ħ = cm.getBossLog("ÿ�ո�ħ");
  } //2

  if (cm.getBossLog("ÿ�մ��") >= 1) {
    var ÿ�մ�� = 1;
  } else {
    var ÿ�մ�� = cm.getBossLog("ÿ�մ��");
  } //1

  if (cm.getBossLog("ÿ�շֽ�") >= 1) {
    var ÿ�շֽ� = 1;
  } else {
    var ÿ�շֽ� = cm.getBossLog("ÿ�շֽ�");
  } //1
  if (cm.getBossLog("�鿴�ٿ�") >= 1) {
    var �鿴�ٿ� = 1;
  } else {
    var �鿴�ٿ� = cm.getBossLog("�鿴�ٿ�");
  } //1
  if (cm.getBossLog("ÿ��ͨ��") >= 2) {
    var ÿ��ͨ�� = 2;
  } else {
    var ÿ��ͨ�� = cm.getBossLog("ÿ��ͨ��");
  } //1

  if (cm.getBossLog("��ɱ�߼�����") >= 2) {
    var ��ɱ�߼����� = 2;
  } else {
    var ��ɱ�߼����� = cm.getBossLog("��ɱ�߼�����");
  } //2
  if (cm.getBossLog("ʹ�ú��") >= 1) {
    var ʹ�ú�� = 1;
  } else {
    var ʹ�ú�� = cm.getBossLog("ʹ�ú��");
  }
  if (cm.getBossLog("���ֶ���") >= 5) {
    var ���ֶ��� = 5;
  } else {
    var ���ֶ��� = cm.getBossLog("���ֶ���");
  }
  if (cm.getBossLog("�ڿ�") >= 4) {
    var ÿ���ڿ� = 4;
  } else {
    var ÿ���ڿ� = cm.getBossLog("�ڿ�");
  }

  //var ÿ�ջ�Ծ = (ÿ���ڿ� + ���ֶ��� + ʹ�ú�� + ÿ���ͻ� * 5 + �̳ǹ��� + ÿ�ո���2 + ÿ������ * 5 + (ÿ������ / 30) + ÿ�յ��� + ÿ���ռ� + ÿ�մ��� + ÿ�մ�� + ÿ�շֽ� + ÿ�ո�ħ + �鿴�ٿ� + ÿ��ͨ�� + ��ɱ�߼�����).toFixed(0);
  var ÿ�ջ�Ծ = 0;
  var ����Ǳ�� = cm.getPlayer().��ȡ��ɫ�ɸ�Ǳ����();
  var Ǳ�ܲ��� = cm.getPlayer().��ȡ��ɫǱ�ܿ���();
  var ��� = 100 * 10000;

  var ������� = 4032226;
  var ����������� = 1;

  var ָ����ϴ���� = 4001013;
  var ָ����ϴ�������� = 2;
  var ȫ����ϴ���� = 4001014;
  var ȫ����ϴ�������� = 3;
  if (status == 0) {
    var �ı� =
      "	Hi~#b#h ##k������Ҫ����Ǳ�ܣ�������ϴǱ���أ������ﶼ��һ�������Ǳ�ܣ����������ط����Ի�ȡϡ�е�Ǳ��Ч��Ŷ��\r\n\r\n";
    �ı� += "\t\t\t   #d��Ծ��#k:( #b" + ÿ�ջ�Ծ + "#k )\r\n";
    if (ÿ�ջ�Ծ >= 45) {
      �ı� += "\t\t\t   #r[�]#k��Ծ��50���ϣ�Ǳ��������\r\n";
    }
    if (ÿ�ջ�Ծ >= 55) {
      �ı� += "\t\t\t   #r[�]#k��Ծ��60���ϣ�Ǳ��ȫ����ϴ���\r\n";
    }
    if (ÿ�ջ�Ծ >= 65) {
      �ı� += "\t\t\t   #r[�]#k��Ծ��70���ϣ�Ǳ��ָ����ϴ���\r\n";
    }
    �ı� +=
      "\t\t\t   #dǱ�ܲ�λ/����#k:( #r" +
      Ǳ�ܲ��� +
      " #k/ #b" +
      ����Ǳ�� +
      "#k )\r\n";
    �ı� += "\t\t\t   #d����(���): #b" + ��� + "#k\r\n";
    �ı� +=
      "\t\t\t   #d����Ǳ��(#z" + ������� + "#): #b" + ����������� + "#k\r\n";
    �ı� +=
      "\t\t\t   #dָ����ϴ(#z" +
      ָ����ϴ���� +
      "#): #b" +
      ָ����ϴ�������� +
      "#k\r\n";
    �ı� +=
      "\t\t\t   #dȫ����ϴ(#z" +
      ȫ����ϴ���� +
      "#): #b" +
      ȫ����ϴ�������� +
      "#k\r\n";
    �ı� += "\t\t\t\t#b#L0#����#k#l\r\n";
    �ı� += "\t\t\t\t#b#L1#��ʼ����Ǳ��#k#l\r\n\r\n\r\n";
    �ı� += "\t\t\t   #r��ϴǱ������������ �� �� ��#k\r\n";
    �ı� +=
      "\t\t\t\t#b#L2#��ϴ #r" +
      cm.getPlayer().��ϴ��() +
      "#k #b��λ�ܲ�#k#l\r\n";
    �ı� += "\t\t\t\t#L11##b�Ӳ�λ#l #L12#����λ#l#k\r\n\r\n";

    �ı� += "\t\t\t\t#b#L3#Ǳ��ȫ����ϴ#k#l\r\n";
    cm.�Ƿ�˵������(�ı�);
  } else if (status == 1) {
    switch (selection) {
      //Ǳ��
      case 1:
        if (����Ǳ�� == 0) {
          cm.˵������("��û��Ǳ�ܲ�λ�ˡ�");
          cm.�Ի�����();
          return;
        }
        //if(ÿ�ջ�Ծ < 45){
        if (cm.�жϽ��() < ���) {
          cm.˵������("��Ҫ #b" + ��� + "#k ��Ҳ�����");
          cm.�Ի�����();
          return;
        }
        if (!cm.�ж���Ʒ����(�������, �����������)) {
          cm.˵������(
            "��Ҫ " +
              cm.��ʾ��Ʒ(�������) +
              " x #b" +
              ����������� +
              "#k �Ĳ��ϲ�����"
          );
          cm.�Ի�����();
          return;
        }

        cm.�ս��(���);
        cm.����Ʒ(�������, �����������);
        //}
        ���Ǳ��();
        cm.�Ի�����();
        break;
      //ָ����ϴ
      case 2:
        if (cm.getPlayer().��ϴ��() == 0) {
          cm.˵������("ѡ����ϴ��λ�á�");
          cm.�Ի�����();
          return;
        }
        //if(ÿ�ջ�Ծ < 65){
        if (cm.�жϽ��() < ���) {
          cm.˵������("��Ҫ #b" + ��� + "#k ��Ҳ�����");
          cm.�Ի�����();
          return;
        }
        if (!cm.�ж���Ʒ����(ָ����ϴ����, ָ����ϴ��������)) {
          cm.˵������(
            "��Ҫ " +
              cm.��ʾ��Ʒ(ָ����ϴ����) +
              " x #b" +
              ָ����ϴ�������� +
              "#k �Ĳ��ϲ�����"
          );
          cm.�Ի�����();
          return;
        }

        cm.�ս��(���);
        cm.����Ʒ(ָ����ϴ����, ָ����ϴ��������);
        // }
        cm.getPlayer().��ϴָ��Ǳ��(cm.getPlayer().��ϴ��());
        cm.˵������(
          "��ϲ�㣬��ϴ #b" + cm.getPlayer().��ϴ��() + "#k ��λ��Ǳ�ܳɹ���"
        );
        cm.�Ի�����();
        break;
      //��ϴ����
      case 3:
        //if(ÿ�ջ�Ծ < 55){
        if (cm.�жϽ��() < ���) {
          cm.˵������("��Ҫ #b" + ��� + "#k ��Ҳ�����");
          cm.�Ի�����();
          return;
        }
        if (!cm.�ж���Ʒ����(ȫ����ϴ����, ȫ����ϴ��������)) {
          cm.˵������(
            "��Ҫ " +
              cm.��ʾ��Ʒ(ȫ����ϴ����) +
              " x #b" +
              ȫ����ϴ�������� +
              "#k �Ĳ��ϲ�����"
          );
          cm.�Ի�����();
          return;
        }

        cm.�ս��(���);
        cm.����Ʒ(ȫ����ϴ����, ȫ����ϴ��������);
        //}
        cm.getPlayer().��ϴ����Ǳ��();
        cm.˵������("��ϲ�㣬��ϴ����Ǳ�ܳɹ���");
        cm.�Ի�����();
        break;
      case 0:
        cm.�Ի�����();
        cm.��NPC(9300000, 0);
        break;
      case 11:
        if (cm.getPlayer().��ϴ��() < Ǳ�ܲ���) {
          cm.getPlayer().����ϴ��();
        }
        cm.�Ի�����();
        cm.��NPC(9300000, 1);
        break;
      case 12:
        if (cm.getPlayer().��ϴ��() >= 1) {
          cm.getPlayer().����ϴ��();
        }
        cm.�Ի�����();
        cm.��NPC(9300000, 1);
        break;
      default:
        cm.�Ի�����();
        break;
    }
  }
}
function ÿ�ո���() {
  var result = 0;
  result += cm.getBossLog("��������");
  result += cm.getBossLog("����ɭ��");
  result += cm.getBossLog("����");
  result += cm.getBossLog("�����");
  result += cm.getBossLog("Ů����");
  result += cm.getBossLog("������");
  return result;
}
