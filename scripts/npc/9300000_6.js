
var status = 0;
var ��ˮ�� = 4021008;
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var �Ҹ� = "#k��ܰ��ʾ���κηǷ��������ҷ�Ŵ���.��ɱ��������.";
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
            var a1 = "#L1#" + ��ɫ��ͷ + " #b��˾��������ά+10 ˫��+5  ����+10 ����+10\r\n\r\n";
            var a2 = "#L2#" + ��ɫ��ͷ + " #b��˾��������ά+15 ˫��+10 ����+15 ����+10\r\n\r\n";
            var a3 = "#L3#" + ��ɫ��ͷ + " #b��˾��������ά+20 ˫��+15 ����+20 ����+15\r\n\r\n";
            var a4 = "#L4#" + ��ɫ��ͷ + " #b��˾��������ά+30 ˫��+20 ����+30 ����+20\r\n\r\n";
            var a5 = "#L5#" + ��ɫ��ͷ + " #b��˾��������ά+40 ˫��+20 ����+40 ����+20\r\n\r\n";
            var a6 = "#L6#" + ��ɫ��ͷ + " #b��˾������#r��ά+80 ˫��+40#b ����+50 ����+20\r\n\r\n";
			var a7 = "#L7#" + ��ɫ��ͷ + " #b��˾��������ά+10 ˫��+5 ��������+10\r\n\r\n";
            var a8 = "#L8#" + ��ɫ��ͷ + " #b����#z1112454#\r\n\r\n";
            var a9 = "#L9#" + ��ɫ��ͷ + " #b����#z1112455#\r\n\r\n";
            var a10 = "#L10#" + ��ɫ��ͷ + " #b����#z1112456#\r\n\r\n";
            var a11 = "#L11#" + ��ɫ��ͷ + " #b����#z1112457#\r\n\r\n";
            var a12 = "#L12#" + ��ɫ��ͷ + " #b����#z1112458#\r\n\r\n";
			var a13 = "#L13#" + ��ɫ��ͷ + " #b����#z1112459#\r\n\r\n";
            var a14 = "#L14#" + ��ɫ��ͷ + " #b����#z1112460#\r\n\r\n";
            var a15 = "#L15#" + ��ɫ��ͷ + " #b����#z1112461#\r\n\r\n";
            var a16 = "#L16#" + ��ɫ��ͷ + " #b����#z1112462#\r\n\r\n";
            var a17 = "#L17#" + ��ɫ��ͷ + " #b����#z1112463#\r\n\r\n";
            var a18 = "#L18#" + ��ɫ��ͷ + " #b����#z1112464#\r\n\r\n";
			var a19 = "#L19#" + ��ɫ��ͷ + " #b����#z1112465#\r\n\r\n";
			



            cm.sendSimple("#e#r������ѩ����ϵͳ#b\r\n" + a1 + ""+a2+""+a3+""+a4+""+a5+""+a6+"");
        } else if (status == 1) {
		
	    if (cm.getInventory(1).isFull()){
                        cm.sendOk("#b�뱣֤װ����λ������2���ո�,�����޷��ϳ�.");
                        cm.dispose();
			return;
            }
            if (selection == 1) {//��
				if(cm.haveItem(4310014,50)){
					cm.gainItem(4310014,-50);
                    cm.gainItem(1142550,10,10,10,10,500,500,5,5,0,0,10,10,10,10);//1-14���Ӧ  1.���� 2.���� 3.���� 4.���� 5.HP 6.MP 7.�﹥ 8.ħ�� 9.��� 10.ħ�� 11.�� 12.�� 13.�� 14.��
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�2������ҹ�ϲ��",true).getBytes());
					cm.sendOk("�һ��ɹ����Ѿ�������ı�����!");
					cm.dispose();
				}else{
				cm.sendOk("��Ҫ#v4310014#X50��!");
				cm.dispose();
				}
				}else if (selection == 2) {//��
				if(cm.haveItem(4310014,100) && cm.haveItem(1142550,1)){
					cm.gainItem(4310014,-100);
                    cm.gainItem(1142553,15,15,15,15,750,750,10,10,0,0,15,15,10,10);//1-14���Ӧ  1.���� 2.���� 3.���� 4.���� 5.HP 6.MP 7.�﹥ 8.ħ�� 9.��� 10.ħ�� 11.�� 12.�� 13.�� 14.��
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�2������ҹ�ϲ��",true).getBytes());
					cm.sendOk("�һ��ɹ����Ѿ�������ı�����!");
					cm.dispose();
				}else{
				cm.sendOk("��Ҫ#v4310014#X100��!������û����һ��ѫ�¡�");
				cm.dispose();
				}
				}else if (selection == 3) {//��
				if(cm.haveItem(4310014,200) && cm.haveItem(1142553,1)){
					cm.gainItem(4310014,-200);
	
                        cm.gainItem(1142558,20,20,20,20,1000,1000,10,10,0,0,20,20,15,15);//1-14���Ӧ  1.���� 2.���� 3.���� 4.���� 5.HP 6.MP 7.�﹥ 8.ħ�� 9.��� 10.ħ�� 11.�� 12.�� 13.�� 14.��
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�2������ҹ�ϲ��",true).getBytes());
					cm.sendOk("�һ��ɹ����Ѿ�������ı�����!");
					cm.dispose();
				}else{
				cm.sendOk("��Ҫ#v4310014#X200��!������û����һ��ѫ�¡�");
				cm.dispose();
				}
				}else if (selection == 4) {//��
				if(cm.haveItem(4310014,400) && cm.haveItem(1142558,1)){
					cm.gainItem(4310014,-400);
	
                        cm.gainItem(1142559,30,30,30,30,1500,1500,15,15,0,0,30,30,20,20);//1-14���Ӧ  1.���� 2.���� 3.���� 4.���� 5.HP 6.MP 7.�﹥ 8.ħ�� 9.��� 10.ħ�� 11.�� 12.�� 13.�� 14.��
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�2������ҹ�ϲ��",true).getBytes());
					cm.sendOk("�һ��ɹ����Ѿ�������ı�����!");
					cm.dispose();
				}else{
				cm.sendOk("��Ҫ#v4310014#X400��!������û����һ��ѫ�¡�");
				cm.dispose();
				}
				}else if (selection == 5) {//��
				if(cm.haveItem(4310014,600) && cm.haveItem(1142559,1)){
					cm.gainItem(4310014,-600);
	
                        cm.gainItem(1142560,40,40,40,40,2000,2000,20,20,0,0,40,40,20,20);//1-14���Ӧ  1.���� 2.���� 3.���� 4.���� 5.HP 6.MP 7.�﹥ 8.ħ�� 9.��� 10.ħ�� 11.�� 12.�� 13.�� 14.��
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�2������ҹ�ϲ��",true).getBytes());
					cm.sendOk("�һ��ɹ����Ѿ�������ı�����!");
					cm.dispose();
				}else{
				cm.sendOk("��Ҫ#v4310014#X600��!������û����һ��ѫ�¡�");
				cm.dispose();
				}
				}else if (selection == 6) {//��
				if(cm.haveItem(4310014,999) && cm.haveItem(1142560,1)){
					cm.gainItem(4310014,-999);
	
                        cm.gainItem(1142573,80,80,80,80,3000,3000,40,40,0,0,50,50,20,20);//1-14���Ӧ  1.���� 2.���� 3.���� 4.���� 5.HP 6.MP 7.�﹥ 8.ħ�� 9.��� 10.ħ�� 11.�� 12.�� 13.�� 14.��
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�2������ҹ�ϲ��",true).getBytes());
					cm.sendOk("�һ��ɹ����Ѿ�������ı�����!");
					cm.dispose();
				}else{
				cm.sendOk("��Ҫ#v4310014#*999��!������û����һ��ѫ�¡�");
				cm.dispose();
				}
				}else if (selection == 7) {//��
				if(cm.haveItem(1112793,1) && cm.haveItem(2048720,1)&& cm.haveItem(2048721,6)  ){
					cm.gainItem(1112793,-1);
					cm.gainItem(2048720,-1);
					cm.gainItem(2048721,-6);
					
                       cm.gainItem(1112793,1026,1026,1026,1026,3000,3000,777,777,77,77,120,120,40,40);//1-14���Ӧ  1.���� 2.���� 3.���� 4.���� 5.HP 6.MP 7.�﹥ 8.ħ�� 9.��� 10.ħ�� 11.�� 12.�� 13.�� 14.��
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�8������ҹ�ϲ��",true).getBytes());
					cm.sendOk("��ֵ�����ָ���׵�8�����Ѿ�������ı�����!");
					cm.dispose();	
				}else{
				cm.sendOk("��Ҫ#v1112793#X1��#v2048720#X1+#v2048721#X6!");
				cm.dispose();
				}
				}else if (selection == 8) {//��
				if(cm.haveItem(1112793,1) && cm.haveItem(2048714,1) ){
					cm.gainItem(1112793,-1);
					cm.gainItem(2048714,-1);
                        var ii = MapleItemInformationProvider.getInstance();
                        var type = ii.getInventoryType(1112454);	
                        var toDrop = ii.randomizeStats(ii.getEquipById(1112454)).copy();
                        //var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000);//��ǰ���1 ����1�졣�Լ���
                        //toDrop.setExpiration(temptime);
                        toDrop.setFlag(1);
						toDrop.setStr(18);
						toDrop.setDex(18);
						toDrop.setInt(18);
						toDrop.setLuk(18);
                        toDrop.setWatk(18);
						toDrop.setMatk(18);
						//toDrop.setAcc(10);
						//toDrop.setAvoid(10);
						//toDrop.setSpeed(5);
						//toDrop.setJump(5);
						//toDrop.setHp(200);
						//toDrop.setMp(200);
                        cm.getPlayer().getInventory(type).addItem(toDrop);
                        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�9������ҹ�ϲ��",true).getBytes());
					cm.sendOk("��ֵ�����ָ���׵�9�����Ѿ�������ı�����!");
					cm.dispose();	
				}else{
				cm.sendOk("��Ҫ#v1112793#X1��#v2048714#X1!");
				cm.dispose();
				}
				}else if (selection == 9) {//��
				if(cm.haveItem(1112454,1) && cm.haveItem(2048714,1) ){
					cm.gainItem(1112454,-1);
					cm.gainItem(2048714,-1);
                        var ii = MapleItemInformationProvider.getInstance();
                        var type = ii.getInventoryType(1112455);	
                        var toDrop = ii.randomizeStats(ii.getEquipById(1112455)).copy();
                        //var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000);//��ǰ���1 ����1�졣�Լ���
                        //toDrop.setExpiration(temptime);
                        toDrop.setFlag(1);
						toDrop.setStr(20);
						toDrop.setDex(20);
						toDrop.setInt(20);
						toDrop.setLuk(20);
                        toDrop.setWatk(20);
						toDrop.setMatk(20);
						//toDrop.setAcc(10);
						//toDrop.setAvoid(10);
						//toDrop.setSpeed(5);
						//toDrop.setJump(5);
						//toDrop.setHp(200);
						//toDrop.setMp(200);
                        cm.getPlayer().getInventory(type).addItem(toDrop);
                        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�10������ҹ�ϲ��",true).getBytes());
					cm.sendOk("��ֵ�����ָ���׵�10�����Ѿ�������ı�����!");
					cm.dispose();	
				}else{
				cm.sendOk("��Ҫ#v1112454#X1��#v2048714#X1!");
				cm.dispose();
				}
				}else if (selection == 10) {//��
				if(cm.haveItem(1112455,1) && cm.haveItem(2048714,1) ){
					cm.gainItem(1112455,-1);
					cm.gainItem(2048714,-1);
                        var ii = MapleItemInformationProvider.getInstance();
                        var type = ii.getInventoryType(1112456);	
                        var toDrop = ii.randomizeStats(ii.getEquipById(1112456)).copy();
                        //var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000);//��ǰ���1 ����1�졣�Լ���
                        //toDrop.setExpiration(temptime);
                        toDrop.setFlag(1);
						toDrop.setStr(23);
						toDrop.setDex(23);
						toDrop.setInt(23);
						toDrop.setLuk(23);
                        toDrop.setWatk(23);
						toDrop.setMatk(23);
						//toDrop.setAcc(10);
						//toDrop.setAvoid(10);
						//toDrop.setSpeed(5);
						//toDrop.setJump(5);
						//toDrop.setHp(200);
						//toDrop.setMp(200);
                        cm.getPlayer().getInventory(type).addItem(toDrop);
                        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�11������ҹ�ϲ��",true).getBytes());
					cm.sendOk("��ֵ�����ָ���׵�11�����Ѿ�������ı�����!");
					cm.dispose();	
				}else{
				cm.sendOk("��Ҫ#v1112455#X1��#v2048714#X1!");
				cm.dispose();
				}
				}else if (selection == 11) {//��
				if(cm.haveItem(1112456,1) && cm.haveItem(2048714,1) ){
					cm.gainItem(1112456,-1);
					cm.gainItem(2048714,-1);
                        var ii = MapleItemInformationProvider.getInstance();
                        var type = ii.getInventoryType(1112457);	
                        var toDrop = ii.randomizeStats(ii.getEquipById(1112457)).copy();
                        //var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000);//��ǰ���1 ����1�졣�Լ���
                        //toDrop.setExpiration(temptime);
                        toDrop.setFlag(1);
						toDrop.setStr(26);
						toDrop.setDex(26);
						toDrop.setInt(26);
						toDrop.setLuk(26);
                        toDrop.setWatk(26);
						toDrop.setMatk(26);
						//toDrop.setAcc(10);
						//toDrop.setAvoid(10);
						//toDrop.setSpeed(5);
						//toDrop.setJump(5);
						//toDrop.setHp(200);
						//toDrop.setMp(200);
                        cm.getPlayer().getInventory(type).addItem(toDrop);
                        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�12������ҹ�ϲ��",true).getBytes());
					cm.sendOk("��ֵ�����ָ���׵�12�����Ѿ�������ı�����!");
					cm.dispose();	
				}else{
				cm.sendOk("��Ҫ#v1112456#X1��#v2048714#X1!");
				cm.dispose();
				}
				}else if (selection == 12) {//��
				if(cm.haveItem(1112457,1) && cm.haveItem(2048714,1) ){
					cm.gainItem(1112457,-1);
					cm.gainItem(2048714,-1);
                        var ii = MapleItemInformationProvider.getInstance();
                        var type = ii.getInventoryType(1112458);	
                        var toDrop = ii.randomizeStats(ii.getEquipById(1112458)).copy();
                        //var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000);//��ǰ���1 ����1�졣�Լ���
                        //toDrop.setExpiration(temptime);
                        toDrop.setFlag(1);
						toDrop.setStr(29);
						toDrop.setDex(29);
						toDrop.setInt(29);
						toDrop.setLuk(29);
                        toDrop.setWatk(29);
						toDrop.setMatk(29);
						//toDrop.setAcc(10);
						//toDrop.setAvoid(10);
						//toDrop.setSpeed(5);
						//toDrop.setJump(5);
						//toDrop.setHp(200);
						//toDrop.setMp(200);
                        cm.getPlayer().getInventory(type).addItem(toDrop);
                        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�13������ҹ�ϲ��",true).getBytes());
					cm.sendOk("��ֵ�����ָ���׵�13�����Ѿ�������ı�����!");
					cm.dispose();	
				}else{
				cm.sendOk("��Ҫ#v1112457#X1��#v2048714#X1!");
				cm.dispose();
				}
				}else if (selection == 13) {//��
				if(cm.haveItem(1112458,1) && cm.haveItem(2048714,1) ){
					cm.gainItem(1112458,-1);
					cm.gainItem(2048714,-1);
                        var ii = MapleItemInformationProvider.getInstance();
                        var type = ii.getInventoryType(1112459);	
                        var toDrop = ii.randomizeStats(ii.getEquipById(1112459)).copy();
                        //var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000);//��ǰ���1 ����1�졣�Լ���
                        //toDrop.setExpiration(temptime);
                        toDrop.setFlag(1);
						toDrop.setStr(32);
						toDrop.setDex(32);
						toDrop.setInt(32);
						toDrop.setLuk(32);
                        toDrop.setWatk(32);
						toDrop.setMatk(32);
						//toDrop.setAcc(10);
						//toDrop.setAvoid(10);
						//toDrop.setSpeed(5);
						//toDrop.setJump(5);
						//toDrop.setHp(200);
						//toDrop.setMp(200);
                        cm.getPlayer().getInventory(type).addItem(toDrop);
                        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�14������ҹ�ϲ��",true).getBytes());
					cm.sendOk("��ֵ�����ָ���׵�14�����Ѿ�������ı�����!");
					cm.dispose();	
				}else{
				cm.sendOk("��Ҫ#v1112458#X1��#v2048714#X1!");
				cm.dispose();
				}
				}else if (selection == 14) {//��
				if(cm.haveItem(1112459,1) && cm.haveItem(2048714,1) ){
					cm.gainItem(1112459,-1);
					cm.gainItem(2048714,-1);
                        var ii = MapleItemInformationProvider.getInstance();
                        var type = ii.getInventoryType(1112460);	
                        var toDrop = ii.randomizeStats(ii.getEquipById(1112460)).copy();
                        //var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000);//��ǰ���1 ����1�졣�Լ���
                        //toDrop.setExpiration(temptime);
                        toDrop.setFlag(1);
						toDrop.setStr(35);
						toDrop.setDex(35);
						toDrop.setInt(35);
						toDrop.setLuk(35);
                        toDrop.setWatk(35);
						toDrop.setMatk(35);
						//toDrop.setAcc(10);
						//toDrop.setAvoid(10);
						//toDrop.setSpeed(5);
						//toDrop.setJump(5);
						//toDrop.setHp(200);
						//toDrop.setMp(200);
                        cm.getPlayer().getInventory(type).addItem(toDrop);
                        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�15������ҹ�ϲ��",true).getBytes());
					cm.sendOk("��ֵ�����ָ���׵�15�����Ѿ�������ı�����!");
					cm.dispose();	
				}else{
				cm.sendOk("��Ҫ#v1112459#X1��#v2048714#X1!");
				cm.dispose();
				}
				}else if (selection == 15) {//��
				if(cm.haveItem(1112460,1) && cm.haveItem(2048714,1) ){
					cm.gainItem(1112460,-1);
					cm.gainItem(2048714,-1);
                        var ii = MapleItemInformationProvider.getInstance();
                        var type = ii.getInventoryType(1112461);	
                        var toDrop = ii.randomizeStats(ii.getEquipById(1112461)).copy();
                        //var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000);//��ǰ���1 ����1�졣�Լ���
                        //toDrop.setExpiration(temptime);
                        toDrop.setFlag(1);
						toDrop.setStr(38);
						toDrop.setDex(38);
						toDrop.setInt(38);
						toDrop.setLuk(38);
                        toDrop.setWatk(38);
						toDrop.setMatk(38);
						//toDrop.setAcc(10);
						//toDrop.setAvoid(10);
						//toDrop.setSpeed(5);
						//toDrop.setJump(5);
						//toDrop.setHp(200);
						//toDrop.setMp(200);
                        cm.getPlayer().getInventory(type).addItem(toDrop);
                        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�16������ҹ�ϲ��",true).getBytes());
					cm.sendOk("��ֵ�����ָ���׵�16�����Ѿ�������ı�����!");
					cm.dispose();	
				}else{
				cm.sendOk("��Ҫ#v1112460#X1��#v2048714#X1!");
				cm.dispose();
				}
				}else if (selection == 16) {//��
				if(cm.haveItem(1112461,1) && cm.haveItem(2048714,1) ){
					cm.gainItem(1112461,-1);
					cm.gainItem(2048714,-1);
                        var ii = MapleItemInformationProvider.getInstance();
                        var type = ii.getInventoryType(1112462);	
                        var toDrop = ii.randomizeStats(ii.getEquipById(1112462)).copy();
                        //var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000);//��ǰ���1 ����1�졣�Լ���
                        //toDrop.setExpiration(temptime);
                        toDrop.setFlag(1);
						toDrop.setStr(41);
						toDrop.setDex(41);
						toDrop.setInt(41);
						toDrop.setLuk(41);
                        toDrop.setWatk(41);
						toDrop.setMatk(41);
						//toDrop.setAcc(10);
						//toDrop.setAvoid(10);
						//toDrop.setSpeed(5);
						//toDrop.setJump(5);
						//toDrop.setHp(200);
						//toDrop.setMp(200);
                        cm.getPlayer().getInventory(type).addItem(toDrop);
                        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�17������ҹ�ϲ��",true).getBytes());
					cm.sendOk("��ֵ�����ָ���׵�17�����Ѿ�������ı�����!");
					cm.dispose();	
				}else{
				cm.sendOk("��Ҫ#v1112461#X1��#v2048714#X1!");
				cm.dispose();
				}
				}else if (selection == 17) {//��
				if(cm.haveItem(1112462,1) && cm.haveItem(2048714,1) ){
					cm.gainItem(1112462,-1);
					cm.gainItem(2048714,-1);
                        var ii = MapleItemInformationProvider.getInstance();
                        var type = ii.getInventoryType(1112463);	
                        var toDrop = ii.randomizeStats(ii.getEquipById(1112463)).copy();
                        //var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000);//��ǰ���1 ����1�졣�Լ���
                        //toDrop.setExpiration(temptime);
                        toDrop.setFlag(1);
						toDrop.setStr(44);
						toDrop.setDex(44);
						toDrop.setInt(44);
						toDrop.setLuk(44);
                        toDrop.setWatk(44);
						toDrop.setMatk(44);
						//toDrop.setAcc(10);
						//toDrop.setAvoid(10);
						//toDrop.setSpeed(5);
						//toDrop.setJump(5);
						//toDrop.setHp(200);
						//toDrop.setMp(200);
                        cm.getPlayer().getInventory(type).addItem(toDrop);
                        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�18������ҹ�ϲ��",true).getBytes());
					cm.sendOk("��ֵ�����ָ���׵�18�����Ѿ�������ı�����!");
					cm.dispose();	
				}else{
				cm.sendOk("��Ҫ#v1112462#X1��#v2048714#X1!");
				cm.dispose();
				}
				}else if (selection == 18) {//��
				if(cm.haveItem(1112463,1) && cm.haveItem(2048714,1) ){
					cm.gainItem(1112463,-1);
					cm.gainItem(2048714,-1);
                        var ii = MapleItemInformationProvider.getInstance();
                        var type = ii.getInventoryType(1112464);	
                        var toDrop = ii.randomizeStats(ii.getEquipById(1112464)).copy();
                        //var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000);//��ǰ���1 ����1�졣�Լ���
                        //toDrop.setExpiration(temptime);
                        toDrop.setFlag(1);
						toDrop.setStr(52);
						toDrop.setDex(52);
						toDrop.setInt(52);
						toDrop.setLuk(52);
                        toDrop.setWatk(52);
						toDrop.setMatk(52);
						//toDrop.setAcc(10);
						//toDrop.setAvoid(10);
						//toDrop.setSpeed(5);
						//toDrop.setJump(5);
						//toDrop.setHp(200);
						//toDrop.setMp(200);
                        cm.getPlayer().getInventory(type).addItem(toDrop);
                        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�19������ҹ�ϲ��",true).getBytes());
					cm.sendOk("��ֵ�����ָ���׵�19�����Ѿ�������ı�����!");
					cm.dispose();	
				}else{
				cm.sendOk("��Ҫ#v1112463#X1��#v2048714#X1!");
				cm.dispose();
				}
				}else if (selection == 19) {//��
				if(cm.haveItem(1112464,1) && cm.haveItem(2048714,1) ){
					cm.gainItem(1112464,-1);
					cm.gainItem(2048714,-1);
                        var ii = MapleItemInformationProvider.getInstance();
                        var type = ii.getInventoryType(1112465);	
                        var toDrop = ii.randomizeStats(ii.getEquipById(1112465)).copy();
                        //var temptime = new java.sql.Timestamp(java.lang.System.currentTimeMillis() + 7 * 24 * 60 * 60 * 1000);//��ǰ���1 ����1�졣�Լ���
                        //toDrop.setExpiration(temptime);
                        toDrop.setFlag(1);
						toDrop.setStr(60);
						toDrop.setDex(60);
						toDrop.setInt(60);
						toDrop.setLuk(60);
                        toDrop.setWatk(60);
						toDrop.setMatk(60);
						//toDrop.setAcc(10);
						//toDrop.setAvoid(10);
						//toDrop.setSpeed(5);
						//toDrop.setJump(5);
						//toDrop.setHp(200);
						//toDrop.setMp(200);
                        cm.getPlayer().getInventory(type).addItem(toDrop);
                        cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
						//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ�����ָ���ס�" + " : " + cm.getPlayer().getName() +"��ҳɹ��ѳ�ֵ�����ָ���׵�20������ҹ�ϲ��",true).getBytes());
					cm.sendOk("��ֵ�����ָ���׵�20�����Ѿ�������ı�����!");
					cm.dispose();	
				}else{
				cm.sendOk("��Ҫ#v1112464#X1��#v2048714#X1!");
				cm.dispose();
				}
				
				

            
            }
        }
    }
}
