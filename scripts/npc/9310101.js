/*
 
 �ű�����Ե
 */
var JT = "#fUI/Basic/BtHide3/mouseOver/0#";
var �� = "#fUI/GuildMark.img/Mark/Etc/00009001/14#";
function start() {
  status = -1;
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (status == 0 && mode == 0) {
    cm.dispose();
    return;
  }
  if (mode == 1) {
    status++;
  } else {
    status--;
  }
  if (cm.getInventory(1).isFull()) {
    cm.˵������("�뱣֤ #bװ����#k ������2��λ�á�");
    cm.�Ի�����();
    return;
  } else if (cm.getInventory(2).isFull()) {
    cm.˵������("�뱣֤ #b������#k ������2��λ�á�");
    cm.�Ի�����();
    return;
  } else if (cm.getInventory(3).isFull()) {
    cm.˵������("�뱣֤ #b������#k ������2��λ�á�");
    cm.�Ի�����();
    return;
  } else if (cm.getInventory(4).isFull()) {
    cm.˵������("�뱣֤ #b������#k ������2��λ�á�");
    cm.�Ի�����();
    return;
  } else if (cm.getInventory(5).isFull()) {
    cm.˵������("�뱣֤ #b������#k ������2��λ�á�");
    cm.�Ի�����();
    return;
  }
  var Ⱥ�ȼ� = cm.getPlayer().Ⱥ�ȼ�;
  if (status == 0) {
    var selStr =
      "	  Hi~#b#h ##k��ӭ����#r" + cm.��������() + "#k������������\r\n";
    //selStr += " #L3##b���߽���#k#l\r\n";
    //selStr += " #L6##rÿ������#k#l\r\n";
    selStr += " #L1##r60��#b��������#k#l\r\n\r\n";
    selStr += " #L2##r80��#b��������#k#l\r\n\r\n";
    selStr += " #L3##r100��#b��������#k#l\r\n\r\n";
    selStr += " #L4##r120��#b��������#k#l\r\n\r\n";
    //selStr += " #L11##r[ÿ��]#b�ݷ���Ե#k#l\r\n";
    //selStr += " #L12##r[ÿ��]#bѰ�ҹ���#k#l\r\n";
    //selStr += " #L13##r[ÿ��]#b��ζ����#k#l\r\n";
    //selStr += " #L14##r[ÿ��]#b��������#k#l\r\n";
    //selStr += " #L100##r[Ⱥ��]#b��ȡ���ÿ�#k#l\r\n";
    /*selStr += " #L8##r[����]#bbabyƷ��������#k#l\r\n";
		selStr += " #L9##r[���˽�]#b�ɿ�������#k#l\r\n";
		selStr += " #L2##bÿ��ǩ��#k#l\r\n";
		selStr += " #L4##b���߽���(ȫ��)#k#l\r\n";
		selStr += " #L5##b���߽���(����)#k#l\r\n";
        selStr += " #L1##r[����]#bȥ�ֹ���լۡ#k#l\r\n";
		if (cm.getPlayer().getGMLevel() > 0) {
		}*/

    cm.˵������(selStr);
  } else if (status == 1) {
    switch (selection) {
      case 100:
        if (cm.�ж�ÿ��("Ⱥ���ÿ�����") <= 0) {
          if (Ⱥ�ȼ� == "lv.4") {
            cm.setBossRankCount9("���ÿ�", 1);
            cm.������ÿ��("Ⱥ���ÿ�����");
            cm.˵������("��ϲ���ȡ #r���ÿ�#k x 1 ��");
          } else if (Ⱥ�ȼ� == "lv.5") {
            cm.setBossRankCount9("���ÿ�", 2);
            cm.������ÿ��("Ⱥ���ÿ�����");
            cm.˵������("��ϲ���ȡ #r���ÿ�#k x 2 ��");
          } else if (Ⱥ�ȼ� == "lv.6") {
            cm.������ÿ��("Ⱥ���ÿ�����");
            cm.setBossRankCount9("���ÿ�", 3);
            cm.˵������("��ϲ���ȡ #r���ÿ�#k x 3 ��");
          } else {
            cm.˵������("���ź����޷���ȡ��");
          }
        } else {
          cm.˵������("���������ɡ�");
        }
        cm.dispose();
        break;
      case 1:
        cm.dispose();
        cm.openNpc(9900004, 100033);
        break;
      case 2:
        cm.dispose();
        cm.openNpc(9900004, 100034);
        break;
      case 3:
        cm.dispose();
        cm.openNpc(9900004, 100035);
        break;
      case 4:
        cm.dispose();
        cm.openNpc(9900004, 100036);
        break;
      case 5:
        cm.dispose();
        cm.openNpc(9900004, 100037);
        break;
      case 6:
        cm.dispose();
        cm.openNpc(9310060, 14);
        break;
      case 9:
        cm.dispose();
        cm.openNpc(9310060, 9);
        break;
      case 8:
        cm.dispose();
        cm.openNpc(9310060, 8);
        break;
      case 7:
        cm.dispose();
        cm.openNpc(9310060, 7);
        break;
      case 6:
        cm.dispose();
        cm.openNpc(9900004, 2005);
        break;
      case 5:
        cm.dispose();
        cm.openNpc(9010000, 7);
        break;
      case 4:
        cm.dispose();
        cm.openNpc(9330044, 0);
        break;
      case 3:
        cm.dispose();
        cm.openNpc(9330043, 0);
        break;
      case 2:
        cm.dispose();
        cm.openNpc(9310060, 1);
        break;
      case 1:
        cm.dispose();
        cm.openNpc(2007, 6);
        break;
    }
  }
}