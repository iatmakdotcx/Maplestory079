/*
 
 �ű���������
 */
var ͼ��1 = "#fUI/UIWindow.img/FadeYesNo/icon7#";
var ͼ��2 = "#fUI/StatusBar.img/BtClaim/mouseOver/0#";
var �ر� = "#fUI/UIWindow.img/CashGachapon/BtOpen/mouseOver/0#";
var �� = "#fUI/UIWindow.img/CashGachapon/BtOpen/disabled/0#";
var JD = "#fUI/Basic/BtHide3/mouseOver/0#";
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
var װ��2 = "#fUI/CashShop.img/Base/Tab2/Enable/0#";
var ����2 = "#fUI/CashShop.img/Base/Tab2/Enable/1#";
var ����2 = "#fUI/CashShop.img/Base/Tab2/Enable/2#";
var ����2 = "#fUI/CashShop.img/Base/Tab2/Enable/3#";
var ����2 = "#fUI/CashShop.img/Base/Tab2/Enable/4#";
var a = "#fEffect/CharacterEff.img/1112926/0/1#";
function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (status <= 0 && mode <= 0) {
    cm.dispose();
    return;
  }
  if (mode == 1) {
    status++;
  } else {
    status--;
  }
  if (status <= 0) {
    var selStr =
      "\r\n   " +
      �� +
      " " +
      �� +
      "  " +
      �� +
      "  " +
      �� +
      " #r#e < ������ > #k#n " +
      �� +
      "  " +
      �� +
      "  " +
      �� +
      " " +
      �� +
      "\r\n\r\n";

    selStr +=
      "		Hi~#b#h ##k��ѡ����Ҫ�������Ʒ���Ͱɣ��ҿ��԰����������������ƷŶ��������Щ������������Ʒ��#k\r\n\r\n";
    selStr += "#L0##b����#l\r\n\r\n";
    selStr += "#d#e����ѡ��ɾ��(ͼ��);#k#n\r\n";
    selStr +=
      "#L1#" +
      װ��2 +
      "#l\t#L2#" +
      ����2 +
      "#l\t#L3#" +
      ����2 +
      "#l\t#L4#" +
      ����2 +
      "#l\t#L5#" +
      ����2 +
      "#l\r\n\r\n";
    selStr += "#d#e����ѡ��ɾ��(����);#k#n\r\n";
    selStr +=
      "#L11#" +
      װ��2 +
      "#l\t#L12#" +
      ����2 +
      "#l\t#L13#" +
      ����2 +
      "#l\t#L14#" +
      ����2 +
      "#l\t#L15#" +
      ����2 +
      "#l\r\n\r\n";
    selStr += "#d#eָ������ȫ��ɾ��;#k#n\r\n";
    selStr +=
      "#L21#" +
      װ��2 +
      "#l\t#L22#" +
      ����2 +
      "#l\t#L23#" +
      ����2 +
      "#l\t#L24#" +
      ����2 +
      "#l\t#L25#" +
      ����2 +
      "#l\r\n\r\n";
    selStr += "#d#eָ������λ��ɾ��;#k#n\r\n";
    selStr += "#L20##b����λ��ɾ��#l#k\r\n";

    cm.sendSimple(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 25:
        cm.dispose();
        cm.openNpc(9900004, 66);
        break;
      case 24:
        cm.dispose();
        cm.openNpc(9900004, 65);
        break;
      case 23:
        cm.dispose();
        cm.openNpc(9900004, 64);
        break;
      case 22:
        cm.dispose();
        cm.openNpc(9900004, 63);
        break;
      case 21:
        cm.dispose();
        cm.openNpc(9900004, 62);
        break;
      case 20:
        cm.dispose();
        cm.openNpc(9900004, 61);
        break;
      case 0:
        cm.dispose();
        cm.openNpc(9900004, 0);
        break;
      case 1:
        cm.dispose();
        cm.openNpc(9900004, 51);
        break;
      case 2:
        cm.dispose();
        cm.openNpc(9900004, 52);
        break;
      case 3:
        cm.dispose();
        cm.openNpc(9900004, 53);
        break;
      case 4:
        cm.dispose();
        cm.openNpc(9900004, 54);
        break;
      case 5:
        cm.dispose();
        cm.openNpc(9900004, 55);
        break;
      case 11:
        cm.dispose();
        cm.openNpc(9900004, 56);
        break;
      case 12:
        cm.dispose();
        cm.openNpc(9900004, 57);
        break;
      case 13:
        cm.dispose();
        cm.openNpc(9900004, 58);
        break;
      case 14:
        cm.dispose();
        cm.openNpc(9900004, 59);
        break;
      case 15:
        cm.dispose();
        cm.openNpc(9900004, 60);
        break;
    }
  }
}
