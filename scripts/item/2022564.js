
importPackage(Packages.client);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.tools);

var status = 0;
var job;
var DJ = "15000"; //�۳��ĵ��
var �ߵ����ˮ�� = "4251202"; //�۳��ĵ��

var ttt = "#fUI/UIWindow.img/Quest/icon9/0#";
var xxx = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var ���� = "#fEffect/CharacterEff/1003276/0/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (status >= 0 && mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
			textz += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            textz += " \t\t\t  #e#r #v4000422#  ����ϵͳ  #v4000422##k#n\r\n "
			textz += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
            textz += "#d��ɫ���ƣ�#b" + cm.getName() + "#k#n\t\t  #d��ֵ��#b" + cm.getmoneyb() + "#k#n\r\n"	
            var textz = "#e#rװ������ϵͳ\r\n1.��һ��װ�����չ���ֻ�ܻ��չ��������100������  2.24��-96��һ�����չ��ܿ��Ի�����͹�����50�����������ܻ��մ󲿷ַ��ߡ� \r\n#k2�����ݻ��յ�װ�����Ի��50��~5000�򲻵ȵ�ð�ձ�!\r\n#b3������غ˶����װ������һ����ʮ�ĸ�����ʮ����ǰ����Ʒ�����մ�װ������Ը���\r\n#r��ܰ��ʾ��#b��һ������24���װ����#r��#b��һ������73��ǰװ����#r����Ⱥ��:��ֵ��300����\r\n";
            textz += " \t\t\t  #e#r #v4000422#  ����ϵͳ  #v4000422##k#n \r\n  "   
			
            textz += "#b#L2#������װ������һ��װ����\r\n";
            textz += "#b#L22#��һ������װ����24����װ����\r\n";
			textz += "#b#L33#��һ������װ����73��ǰ��װ����\r\n";

            //     textz += "#r#L1#���װ�������� #k+1��Ҫ#r1#b��#z4251200#\r\n";
            cm.sendSimple(textz);

        } else if (status == 1) {
			if (selection == 2) {
				
                if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1) == null) {
                    cm.sendOk("��һ��û��װ��,�޷�����.");
                } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getExpiration() == 1) {
                    cm.sendOk("��ʱװ������ʹ�øù���.");
                    cm.dispose();
                    cm.dispose();
                } else if (cm.isCash(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).getItemId())) {
                    cm.sendOk("���װ������ǿ��.");
                    cm.dispose();
                } else {

                    var statup = new java.util.ArrayList();
                    //cm.gainItem(�ߵ����ˮ��, -1)
                    var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(1).copy();
                    var ii = MapleItemInformationProvider.getInstance();
                    if (item.getWatk() < 20000 && item.getMatk() < 20000 && item.getStr() > 20000 && item.getInt() > 20000 && item.getLuk() > 20000 && item.getDex() > 20000) {
                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(6666666);
                        cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 101 && item.getMatk() < 101 && item.getStr() > 101 && item.getInt() > 101 && item.getLuk() > 101 && item.getDex() > 101) {
                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(15000000);
                        cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 100 && item.getMatk() < 100) {
                        cm.sendOk("#r#eװ������Ŷ!������գ��������һ��װ����!#k");
                        cm.dispose();

                    } else if (item.getWatk() > 101 && item.getMatk() > 101 && item.getStr() > 101 && item.getInt() > 101 && item.getLuk() > 101 && item.getDex() > 101) {
                        cm.sendOk("#r#eѫ�²��ɻ���!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 110 && item.getMatk() < 110) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(1000000);
                        cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 115 && item.getMatk() < 115) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(1500000);
                        cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 120 && item.getMatk() < 120) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(2000000);
                        cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 130 && item.getMatk() < 130) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(3000000);
                        cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 140 && item.getMatk() < 140) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(5000000);
                        cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 150 && item.getMatk() < 150) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(6000000);
                        cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 160 && item.getMatk() < 160) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(8000000);
                        cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 170 && item.getMatk() < 170) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(10000000);
                        cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 180 && item.getMatk() < 180) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(15000000);
                        cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 190 && item.getMatk() < 190) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(18000000);
                        cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 200 && item.getMatk() < 200) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(20000000);
                        cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 210 && item.getMatk() < 210) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(25000000);
                        cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 218 && item.getMatk() < 218) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(30000000);
                        cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                        cm.dispose();

                    } else if (item.getWatk() < 225 && item.getMatk() < 225) {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(40000000);
                        cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                        cm.dispose();

                    } else {

                        MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, 1, 1, true);
                        cm.gainMeso(50000000);
                        cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                        cm.dispose();
                    }

                }

            } else if (selection == 22) {
				if(cm.haveItem(2022564)< 1 ){//cm.getmoneyb()>=100
                    cm.sendOk("��û��#v2022564#����ʹ��Ŷ������Ⱥ������һ������Ȩ�޻�ȡŶ��");
                    cm.dispose();
                    return;
				}
				var ���ս�� = 0;
                for (var i = 24; i < 0; i++) {
             if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i) == null) {
                        //cm.sendOk("��һ��û��װ��,�޷�����.");
						cm.dispose();
                    } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i).getExpiration() == 1) {
                        //cm.sendOk("��ʱװ������ʹ�øù���.");
                        cm.dispose();
                    } else if (cm.isCash(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i).getItemId())) {
                        //cm.sendOk("���װ������ǿ��.");
                        cm.dispose();
                    } else {

                        var statup = new java.util.ArrayList();
                        //cm.gainItem(�ߵ����ˮ��, -1)
                        var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i).copy();
                        var ii = MapleItemInformationProvider.getInstance();
                        if (item.getWatk() < 0 && item.getMatk() < 0 && item.getStr() > 0 && item.getInt() > 0 && item.getLuk() > 0 && item.getDex() > 0) {
                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(6666666);
							���ս�� += 6666666;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                           // cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 60 && item.getMatk() < 60 && item.getStr() > 101 && item.getInt() > 101 && item.getLuk() > 101 && item.getDex() > 101) {
                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(15000000);
							���ս�� += 15000000;
							cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
             //               //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 40 && item.getMatk() < 40) {
                            //cm.sendOk("#r#eװ������Ŷ!������գ��������һ��װ����!#k");
                            cm.dispose();

                        } else if (item.getWatk() > 99 && item.getMatk() > 99 && item.getStr() > 101 && item.getInt() > 101 && item.getLuk() > 101 && item.getDex() > 101) {
                         //   cm.sendOk("#r#eѫ�²��ɻ���!#k");
                            cm.dispose();
							
                        } else if (item.getWatk() < 100 && item.getMatk() < 100) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(500000);
							���ս�� += 500000;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();
                        } else if (item.getWatk() < 110 && item.getMatk() < 110) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(1000000);
							���ս�� += 1000000;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 115 && item.getMatk() < 115) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(1500000);
							���ս�� += 1500000;
			//				cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 120 && item.getMatk() < 120) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(2000000);
							���ս�� += 2000000;
			//				cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 130 && item.getMatk() < 130) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(3000000);
							���ս�� += 3000000;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 140 && item.getMatk() < 140) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(5000000);
							���ս�� += 5000000;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                           // cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 150 && item.getMatk() < 150) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(6000000);
							���ս�� += 6000000;
			//				cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 160 && item.getMatk() < 160) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(8000000);
							���ս�� += 8000000;
			//				cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 170 && item.getMatk() < 170) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(10000000);
							���ս�� += 10000000;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 180 && item.getMatk() < 180) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(15000000);
							���ս�� += 15000000;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 190 && item.getMatk() < 190) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(18000000);
	//						���ս�� += 18000000;
							cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 200 && item.getMatk() < 200) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(20000000);
							���ս�� += 20000000;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                           // cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 210 && item.getMatk() < 210) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(25000000);
                            ���ս�� += 25000000;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
							//cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 218 && item.getMatk() < 218) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(30000000);
                            ���ս�� += 30000000;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
							//cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 225 && item.getMatk() < 225) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(40000000);
							���ս�� += 40000000;
			//				cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(50000000);
							���ս�� += 50000000;
					//		cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();
                        }

                    }
                }
				if(���ս�� > 0){
					cm.sendOk("#r#eװ�����ճɹ�,һ�����"+���ս��+" ���!#k");
					cm.dispose();
				}else{
					cm.sendOk("#r#eĿǰ��ı�����û���ܻ��յ�װ��!#k");
					cm.dispose();
				}
		
						
			} else if (selection == 33) {
				if(cm.haveItem(2022564)< 1 ){//cm.getmoneyb()>=100
                    cm.sendOk("��û��#v2022564#����ʹ��Ŷ������Ⱥ������һ������Ȩ�޻�ȡŶ��");
                    cm.dispose();
                    return;
				}
				var ���ս�� = 0;
                for (var i = 0; i < 72; i++) {
                   if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i) == null) {
                        //cm.sendOk("��һ��û��װ��,�޷�����.");
						cm.dispose();
                    } else if (cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i).getExpiration() == 1) {
                        //cm.sendOk("��ʱװ������ʹ�øù���.");
                        cm.dispose();
                    } else if (cm.isCash(cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i).getItemId())) {
                        //cm.sendOk("���װ������ǿ��.");
                        cm.dispose();
                    } else {

                        var statup = new java.util.ArrayList();
                        //cm.gainItem(�ߵ����ˮ��, -1)
                        var item = cm.getChar().getInventory(MapleInventoryType.EQUIP).getItem(i).copy();
                        var ii = MapleItemInformationProvider.getInstance();
                        if (item.getWatk() < 20000 && item.getMatk() < 20000 && item.getStr() > 20000 && item.getInt() > 20000 && item.getLuk() > 20000 && item.getDex() > 20000) {
                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(6666666);
							���ս�� += 6666666;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                           // cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 60 && item.getMatk() < 60 && item.getStr() > 101 && item.getInt() > 101 && item.getLuk() > 101 && item.getDex() > 101) {
                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(15000000);
							���ս�� += 15000000;
							cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
             //               //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 40 && item.getMatk() < 40) {
                            //cm.sendOk("#r#eװ������Ŷ!������գ��������һ��װ����!#k");
                            cm.dispose();

                        } else if (item.getWatk() > 99 && item.getMatk() > 99 && item.getStr() > 101 && item.getInt() > 101 && item.getLuk() > 101 && item.getDex() > 101) {
                         //   cm.sendOk("#r#eѫ�²��ɻ���!#k");
                            cm.dispose();
							
                        } else if (item.getWatk() < 100 && item.getMatk() < 100) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(500000);
							���ս�� += 500000;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();
                        } else if (item.getWatk() < 110 && item.getMatk() < 110) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(1000000);
							���ս�� += 1000000;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 115 && item.getMatk() < 115) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(1500000);
							���ս�� += 1500000;
			//				cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 120 && item.getMatk() < 120) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(2000000);
							���ս�� += 2000000;
			//				cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 130 && item.getMatk() < 130) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(3000000);
							���ս�� += 3000000;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 140 && item.getMatk() < 140) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(5000000);
							���ս�� += 5000000;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                           // cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 150 && item.getMatk() < 150) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(6000000);
							���ս�� += 6000000;
			//				cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 160 && item.getMatk() < 160) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(8000000);
							���ս�� += 8000000;
			//				cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 170 && item.getMatk() < 170) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(10000000);
							���ս�� += 10000000;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 180 && item.getMatk() < 180) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(15000000);
							���ս�� += 15000000;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 190 && item.getMatk() < 190) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(18000000);
	//						���ս�� += 18000000;
							cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 200 && item.getMatk() < 200) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(20000000);
							���ս�� += 20000000;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                           // cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 210 && item.getMatk() < 210) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(25000000);
                            ���ս�� += 25000000;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
							//cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 218 && item.getMatk() < 218) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(30000000);
                            ���ս�� += 30000000;
		//					cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
							//cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else if (item.getWatk() < 225 && item.getMatk() < 225) {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(40000000);
							���ս�� += 40000000;
			//				cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();

                        } else {

                            MapleInventoryManipulator.removeFromSlot(cm.getC(), MapleInventoryType.EQUIP, i, 1, true);
                            cm.gainMeso(50000000);
							���ս�� += 50000000;
					//		cm.ȫ����ɫ����("[����ϵͳ] : ������� "+cm.getPlayer().getName()+" ʹ���˸߼�װ������")
                            //cm.sendOk("#r#eװ�����ճɹ�,������һ��ð�ձ�!#k");
                            cm.dispose();
                        }

                    }
                }
				if(���ս�� > 0){
					cm.sendOk("#r#eװ�����ճɹ�,һ�����"+���ս��+" ���!#k");
					cm.dispose();
				}else{
					cm.sendOk("#r#eĿǰ��ı�����û���ܻ��յ�װ��!#k");
					cm.dispose();
				}
				
            }
        }
    }
}
