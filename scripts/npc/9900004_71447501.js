/*
 
 ��  �ߣ�Сz
 ��  ϵ��71447500
 */

importPackage(net.sf.odinms.client);
var status = 0;
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var �������;
var ħ������;
var fee;
var fee1;
var fee2;
var �ٷֱ�;
function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == -1) {
    cm.�Ի�����();
  } else {
    if (mode == 0) {
      cm.˵������("��û�п��ţ�");
      cm.�Ի�����();
      return;
    }
    if (mode == 1) {
      status++;
    } else {
      status--;
    }
    var �����Ƽ� =
      cm.getPlayer().��ȡ��ɫǱ�ܻ���ֵ(100) +
      cm.getPlayer().��ȡ��ħ����ֵ(12);
    var ħ���Ƽ� =
      cm.getPlayer().��ȡ��ɫǱ�ܻ���ֵ(101) +
      cm.getPlayer().��ȡ��ħ����ֵ(11);
    var �������� = cm.getPlayer().�жϸ�������(1111007);
    var ħ����Ч = cm.getPlayer().�жϸ�������(1211009);
    var �ٷֱ� = 0;
    var ����ٷֱ� = 0;
    var ħ���ٷֱ� = 0;
    var �������2 = 0;
    var ħ������2 = 0;
    if (status == 0) {
      cm.sendGetText(
        "    Hi~#b#h ##k��������#b" +
          cm.��������() +
          "#k�Ƽ׼���ϵͳ��������Ŀ�����ֵ���һ������������������������ɶ��������#k\r\n\r\n���������ֵ��"
      );
    } else if (status == 1) {
      fee = cm.getText();
      ������� = fee;
      ħ������ = fee;
      if (fee > 0 && fee < 100000) {
        if (cm.getPlayer().��ȡ��ħ����ֵ(13) > 0) {
          �����Ƽ� += (�����Ƽ� / 100) * cm.getPlayer().��ȡ��ħ����ֵ(13);
          ħ���Ƽ� += (ħ���Ƽ� / 100) * cm.getPlayer().��ȡ��ħ����ֵ(13);
        }
        var �ı� =
          "     Hi~#b#h ##k������Ŀ������󣬻���ʾ�����Ŀ����ɵ��˺�ռ�ȣ������Ƽ�ֵ������������ȣ��Ƽ׻����ȼ���ٷֱ��Ƽף��ټ���̶��Ƽ�ֵ��\r\n\r\n";
        �ı� += "     #d��ǰ��״̬ : ";
        if (ð�յ���ʿ() == 1) {
          �ٷֱ� += (ð�յ���ʿ�ȼ�() * 3) / 10;
          �ı� += "#s1121000#";
        }
        if (�������� > 0) {
          ����ٷֱ� += �������� * 1;
          �ı� += "#s1111007#";
        }
        if (ħ����Ч > 0) {
          ħ���ٷֱ� += ħ����Ч * 1;
          �ı� += "#s1211009#";
        }
        �������2 = ������� * ((100 - (�ٷֱ� + ����ٷֱ�)) / 100);
        ħ������2 = ħ������ * ((100 - (�ٷֱ� + ħ���ٷֱ�)) / 100);
        �ı� += "\r\n\r\n     #dĿ�����ֵ : #d" + fee + "#k";
        //if(fee1 > 0){
        �ı� += " (#r-" + (fee - �������2).toFixed(0) + "#k)";
        �ı� += " (#b-" + (fee - ħ������2).toFixed(0) + "#k)";
        //}
        �ı� += "\r\n";
        �ı� += "     #d�����Ƽ�ֵ : #r" + �����Ƽ� + "#k\r\n";
        �ı� +=
          "     #d��������� : #d" +
          (100 - cm.��������(�������2 - �����Ƽ�)).toFixed(2) +
          "%#k\r\n";
        �ı� += "     #dħ���Ƽ�ֵ : #b" + ħ���Ƽ� + "#k\r\n";
        �ı� +=
          "     #dħ������� : #d" +
          (100 - cm.��������(ħ������2 - ħ���Ƽ�)).toFixed(2) +
          "%#k\r\n";
        cm.˵������(�ı�);
        cm.�Ի�����();
      } else {
        cm.�Ի�����();
      }
    }
  }
}

function ð�յ���ʿ�ȼ�() {
  var Level = 0;
  if (cm.�ж�ְҵ() == 112) {
    var Level = cm.�жϼ��ܵȼ�(1121000);
  } else if (cm.�ж�ְҵ() == 122) {
    var Level = cm.�жϼ��ܵȼ�(1221000);
  } else if (cm.�ж�ְҵ() == 123) {
    var Level = cm.�жϼ��ܵȼ�(1321000);
  } else if (cm.�ж�ְҵ() == 212) {
    var Level = cm.�жϼ��ܵȼ�(2121000);
  } else if (cm.�ж�ְҵ() == 222) {
    var Level = cm.�жϼ��ܵȼ�(2221000);
  } else if (cm.�ж�ְҵ() == 232) {
    var Level = cm.�жϼ��ܵȼ�(2321000);
  } else if (cm.�ж�ְҵ() == 312) {
    var Level = cm.�жϼ��ܵȼ�(3121000);
  } else if (cm.�ж�ְҵ() == 322) {
    var Level = cm.�жϼ��ܵȼ�(3221000);
  } else if (cm.�ж�ְҵ() == 412) {
    var Level = cm.�жϼ��ܵȼ�(4121000);
  } else if (cm.�ж�ְҵ() == 422) {
    var Level = cm.�жϼ��ܵȼ�(4221000);
  } else if (cm.�ж�ְҵ() == 512) {
    var Level = cm.�жϼ��ܵȼ�(5121000);
  } else if (cm.�ж�ְҵ() == 522) {
    var Level = cm.�жϼ��ܵȼ�(5221000);
  } else if (cm.�ж�ְҵ() == 2112) {
    var Level = cm.�жϼ��ܵȼ�(21121000);
  }
  return Level;
}

function ð�յ���ʿ() {
  if (
    cm.getPlayer().isActiveBuffedValue(1121000) ||
    cm.getPlayer().isActiveBuffedValue(1221000) ||
    cm.getPlayer().isActiveBuffedValue(1321000) ||
    cm.getPlayer().isActiveBuffedValue(2121000) ||
    cm.getPlayer().isActiveBuffedValue(2221000) ||
    cm.getPlayer().isActiveBuffedValue(2321000) ||
    cm.getPlayer().isActiveBuffedValue(3121000) ||
    cm.getPlayer().isActiveBuffedValue(3221000) ||
    cm.getPlayer().isActiveBuffedValue(4121000) ||
    cm.getPlayer().isActiveBuffedValue(4221000) ||
    cm.getPlayer().isActiveBuffedValue(5121000) ||
    cm.getPlayer().isActiveBuffedValue(5221000) ||
    cm.getPlayer().isActiveBuffedValue(21121000)
  ) {
    return 1;
  } else {
    return 0;
  }
}
