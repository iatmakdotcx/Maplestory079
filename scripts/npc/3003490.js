var ���� = "#fEffect/CharacterEff/1003393/0/0#";
var ���� = "#fUI/Basic.img/BtMax/mouseOver/0#";
var ���� = "#fUI/Basic.img/BtMin/mouseOver/0#";
var ������� = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/2#";
var ר�ÿ�ӡӡ�� = "#fItem/Consume/0259.img/02590004/info/icon#";
var �ռ�����긽ħʯ = "#fItem/Consume/0259.img/02590004/info/icon#";
var status = -1;
var selection;
var ��ʱ1;
var ��ʱ2;
var ��� = "#fItem/Special/0900.img/09000001/iconRaw/1#";
var ������ = "#fUI/StatusBar/BtClaim/normal/0#";
var ���� = "#fUI/Basic.img/BtMax/mouseOver/0#";
var ��Ʊ = "#fItem/Special/0900.img/09000002/iconRaw/0#";
var keyongzb = new Array(
  //����װ��
  /*
  1102612,
  1072853,
  1082540,
  1003946,
  1132242,
  1052647,
  */
  //��������
  1442234,
  1402210,
  1432178,
  1382222,
  1372188,
  1452216,
  1462204,
  1332238,
  1472226,
  1482179,
  1492190,
  1302289,
  //1072743,
  //1082543,
  //1102481,
  //1132174,
  //1072744,
  //1082544,
  //1102482,
  //1132175,
  //1072745,
  //1082545,
  //1102483,
  //1132176,
  //1072746,
  //1082546,
  //1102484,
  //1132177,
  //1072747,
  //1082547,
  //1102485,
  //1132178,
  //1003797,
  //1042254,
  //1062165,
  //1003798,
  //1042255,
  //1062166,
  //1003799,
  //1042256,
  //1062167,
  //1003800,
  //1042257,
  //1062168,
  //1003801,
  //1042258,
  //1062169,
  //   /*�ѹ�Ӣ*/ 1112426,
  /*���׺�����׹*/ //1122076,
  //   /*��������*/ 1432218,
  //   1402259,
  //   1302343,
  //   1422189,
  //   1412181,
  //   1322255,
  //   1312203,
  //   1492235,
  //   1482221,
  //   1472265,
  //   1332279,
  //   1382265,
  //   1372228,
  //   1462243,
  //   1452257,
  //   1092113,
  //   1112915,
  //   /*��ԯ7��*/ 1402910,
  //   1402911,
  //   1402912,
  //   1402913,
  //   1402914,
  //   1402915,
  //   1402916,
  //   /*ʥ�齣23*/ 1302922,
  //   1302923,
  //   1302926,
  //   1302929,
  //   1302930,
  //   1302931,
  //   1302932,
  //   1302933,
  //   1302934,
  //   1302935,
  //   1302936,
  //   1302938,
  //   1302939,
  //   1302941,
  //   1302942,
  //   1302943,
  //   1302944,
  //   1302945,
  //   1302946,
  //   1302947,
  //   1302948,
  //   1302949,
  //   1302950,
  //   1302951,
  //   1302952,
  //   1302953,
  //   1302954,
  //   1302955,
  //   1302956,
  //   1302957,
  //   1302958,
  //   1302959,
  //   1302960,
  //   /*����ð��֮��*/ 1122038,
  //   1122037,
  //   1122036,
  //   1122035,
  //   1122034,
  //   /*��ɫ*/ 1402917,
  //   1432311,
  //   1382288,
  //   1452306,
  //   1462253,
  //   1472802,
  //   1332290,
  //   1492246,
  //   1482233,
  //   1099015,
  //   1432312
  //   /*����*/ 
  //   1442285,
  //   1442078,
  //   1492194,
  //   1482183,
  //   1472230,
  //   1462208,
  //   1452220,
  //   1432182,
  //   1422156,
  //   1402214,
  //   1382226,
  //   1332242,
  1302000//���ֵ��ֽ�
);

//true ����
//false �ر�

function start() {
  action(1, 0, 0);
}

function action(mode, type, selection) {
  if (mode == 1) {
    status++;
  } else if (mode == 0) {
    status--;
  } else {
    cm.dispose();
    return;
  }
  if (status == 0) {
    if (cm.getInventory(1).getItem(1) == null) {
      cm.sendOk("���Ҫǿ���������Ʒ���ڱ�����һ��!");
      cm.dispose();
      return;
    }

    s1 = Math.floor(Math.random() * (0 - 0) + 5);
    s2 = Math.floor(Math.random() * (0 - 0) + 5);
    s3 = Math.floor(Math.random() * (0 - 0) + 5);
    s4 = Math.floor(Math.random() * (0 - 0) + 5);
    s5 = Math.floor(Math.random() * (0 - 0) + 5);
    s6 = Math.floor(Math.random() * (0 - 0) + 5);
    s7 = Math.floor(Math.random() * (0 - 0) + 5);
    s8 = Math.floor(Math.random() * (0 - 0) + 5);
    s9 = Math.floor(Math.random() * (0 - 0) + 5);
    s10 = Math.floor(Math.random() * (0 - 0) + 5);

    item = cm
      .getChar()
      .getInventory(Packages.client.inventory.MapleInventoryType.EQUIP)
      .getItem(1)
      .copy();

    װ���Ǽ� = Number(item.getOwner().substring(4, 6));

    ��ǰ�ȼ� = cm.getInventory(1).getItem(1).getLevel();

    �������� = cm.getInventory(1).getItem(1).getUpgradeSlots();

    �ܴ��� = �������� + ��ǰ�ȼ�;

    ��߼� = 20;

    ʣ����� = ��߼� - �ܴ���;

    ��ǰװ�� = cm.getInventory(1).getItem(1).getItemId();

    ���׸�ħ = 25;
    ��Ҫ���� = 1;
    ��Ҫ����1 = 4031997;

    ��Ҫ��� = (װ���Ǽ� + 1) * 5000000 + 20000000;

    //cm.changeMusic("Bgm14/DragonNest");

    //cm.changeMusic("UI/productFail");
    tongguo = false;
    for (var i = 0; i < keyongzb.length; i++) {
      if (��ǰװ�� == keyongzb[i]) {
        tongguo = true;
      }
    }

    if (tongguo) {
      sftgxs = "";
    } else {
      sftgxs = "#r�˼�װ���޷�������";
    }

    if (װ���Ǽ� == 0) {
      dqgl = 100;
    } else if (װ���Ǽ� <= 5) {
      dqgl = 110 - װ���Ǽ� * 20;
    } else if (װ���Ǽ� < 11) {
      dqgl = 10;
    } else {
      dqgl = 5;
    }

    cggl = Math.floor(Math.random() * 100) <= dqgl;

    var text = "";
    text +=
      "\t\t#v" +
      ��Ҫ����1 +
      "# #e#b����װ���Ǽ�ǿ������#k#n #v" +
      ��Ҫ����1 +
      "#\r\n";

    text +=
      "#e#b#v" + ��ǰװ�� + "##t" + ��ǰװ�� + "#  " + sftgxs + "#n#b\r\n";

    text += "" + ���� + "#dװ���Ǽ�:Lv." + װ���Ǽ� + "\r\n";

    text += "" + ���� + "#d��ǰ�ɹ���:" + dqgl + "% #r \r\n";

    text += "" + ���� + "#d��ά+����+����+���� ͬʱ����[5~15]����\r\n";

    text += "#b��Ҫ��Ʒ��\r\n";

    text += "#v" + ��Ҫ����1 + "##t" + ��Ҫ����1 + "# X 1\r\n";

    text += "" + ��Ʊ + "ð�ձ� " + ��Ҫ��� + "\r\n";

    text += "#d���ܣ�ǿ��ʧ�ܲ��Ӵ���,ʧ�ܲ���װ��,ף������\r\n";

    text += "֧��װ����\r\n";
    for (var i = 0; i < keyongzb.length; i++) {
      text += "#i" + keyongzb[i] + ":#";
    }

    text += "\r\n----------------------------------------�Ƿ�ʼǿ����\r\n";

    //text += "          #L1##b#e"+����+"<<<��ʼ�Ǽ�ǿ��>>>"+����+"#l\r\n"

    cm.sendYesNo(text);
  } else if (status == 1) {
    item = cm
      .getChar()
      .getInventory(Packages.client.inventory.MapleInventoryType.EQUIP)
      .getItem(1)
      .copy();

    if (!tongguo) {
      var text = "#e#r��ǰװ���޷����ǣ�\r\n\r\n#bֻ֧������װ������\r\n";
      for (var i = 0; i < keyongzb.length; i++) {
        text += "#i" + keyongzb[i] + ":#";
      }

      cm.sendOk(text);
      cm.dispose();
      return;
    }

    // if (item.getPotential2() < 18) {
    //   cm.sendOk("#e#b��Ҫ���׸�ħ18����������������");
    //   cm.dispose();
    //   return;
    // }

    if (item.getPotential3() >= ���׸�ħ) {
      cm.sendOk("#e#b��Ǹ��ǰװ���Ѿ�ǿ����������");
      cm.dispose();
      return;
    }
    if (cm.getMeso() < ��Ҫ���) {
      cm.sendOk("#e#b��Ҳ���,���޷�Ϊ������...");
      cm.dispose();
      return;
    }
    if (cm.haveItem(��Ҫ����1, ��Ҫ����)) {
      cm.gainItem(��Ҫ����1, -��Ҫ����);
      //cm.gainItem(4000463,-��Ҫ����);
      cm.gainMeso(-��Ҫ���);
      if (cggl) {
        //item.setUpgradeSlots((item.getUpgradeSlots() + 1));
        item.setOwner("��Lv." + (װ���Ǽ� + 1));

        item.setStr(item.getStr() + s1);

        item.setDex(item.getDex() + s2);

        item.setInt(item.getInt() + s3);

        item.setLuk(item.getLuk() + s4);

        item.setWatk(item.getWatk() + s5);

        item.setMatk(item.getMatk() + s6);

        item.setWdef(item.getWdef() + s7); //�������

        item.setMdef(item.getMdef() + s8); //ħ������

        item.setAcc(item.getAcc() + s9); //������

        item.setAvoid(item.getAvoid() + s10); //�ر���

        //item.setHp(item.getAvoid() + s10); //setMaxHp

        cm.setLock(item);

        Packages.server.MapleInventoryManipulator.removeFromSlot(cm.getC(), Packages.client.inventory.MapleInventoryType.EQUIP, 1, 1, false);
        Packages.server.MapleInventoryManipulator.addFromDrop(cm.getC(), item, false);

        cm.sendOk("#e#b��ϲ�㣡�ɹ�����һ��\r\n");
        //cm.��������("�����Ǽ�װ��� "+cm.getName(),"���Ǽ�ǿ����,װ���õ������ǣ�",1,item.getPosition());
        cm.worldMessage(6, "�����Ǽ�װ���[" + cm.getName() + "]װ������" + װ���Ǽ� + "��" + (װ���Ǽ� + 1) + "�ɹ���");
        cm.worldMessage(6, "�����Ǽ�װ���[" + cm.getItemName(��ǰװ��) + "]����      +" + s1 + "");
        cm.worldMessage(6, "�����Ǽ�װ���[" + cm.getItemName(��ǰװ��) + "]����      +" + s2 + "");
        cm.worldMessage(6, "�����Ǽ�װ���[" + cm.getItemName(��ǰװ��) + "]����      +" + s3 + "");
        cm.worldMessage(6, "�����Ǽ�װ���[" + cm.getItemName(��ǰװ��) + "]����      +" + s4 + "");
        cm.worldMessage(6, "�����Ǽ�װ���[" + cm.getItemName(��ǰװ��) + "]������    +" + s5 + "");
        cm.worldMessage(6, "�����Ǽ�װ���[" + cm.getItemName(��ǰװ��) + "]ħ����    +" + s6 + "");
        cm.worldMessage(6, "�����Ǽ�װ���[" + cm.getItemName(��ǰװ��) + "]������    +" + s7 + "");
        cm.worldMessage(6, "�����Ǽ�װ���[" + cm.getItemName(��ǰװ��) + "]ħ������  +" + s8 + "");
        cm.worldMessage(6, "�����Ǽ�װ���[" + cm.getItemName(��ǰװ��) + "]����      +" + s9 + "");
        cm.worldMessage(6, "�����Ǽ�װ���[" + cm.getItemName(��ǰװ��) + "]�ر�      +" + s10 + "");
        //cm.worldMessage(6,"�����Ǽ�װ���[" + cm.getItemName(��ǰװ��) + "]����ֵ    +"+ s10 +"");
        cm.playerMessage(5, "��ϲ�㣬װ�����ǳɹ���");
        cm.dispose();
      } else {
        cm.sendOk(
          "�Ǽ�װ������̫����ǿ���޷�ѹ��ס��\r\n#e#b��Ǹ������ʧ�ܣ�"
        );
        cm.worldMessage(
          6,
          "�����Ǽ�װ���[" + cm.getName() + "]װ������" + װ���Ǽ� + "��" + (װ���Ǽ� + 1) + "ʧ�ܡ�"
        );
        cm.playerMessage(5, "���ᷢ��һ���⣬װ����û���κα仯��");
        cm.dispose();
      }
    } else {
      cm.sendOk("����#v" + ��Ҫ����1 + "##t" + ��Ҫ����1 + "#���㣡");
      cm.dispose();
    }
  }
} //���������
