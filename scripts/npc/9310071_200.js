
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ��ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
text += "���տɻ�����Ӧ��λ��������#v2041035##v2040815##v2040713##v2041315#\r\n��ʦ����Ϊ�˸���Ʒ�齱��#v4310030#\r\n"
            text += "#L23#սʿ��������#L24#��������#L25#����Ь��#L26#��������\r\n#L1#��ʦ��������#L2#��������#L3#����Ь��#L4#��������\r\n#L31#���ֱ�������#L32#��������#L33#����Ь��#L34#��������\r\n#L27#������������#L28#��������#L29#����Ь��#L30#��������\r\n#L18#������������#L19#��������#L20#����Ь��#L21#��������\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1102482,1) ){
				cm.gainItem(1102482,-1);//ð�յ��ղؼ�
				cm.gainItem(4310030,8);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ����շ�ʦ�������磡)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 2) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1082544,1) ){
				cm.gainItem(1082544,-1);//ð�յ��ղؼ�
				cm.gainItem(4310030,8);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ����շ�ʦ�������ף�)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 3) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1072744,1) ){
				cm.gainItem(1072744,-1);//ð�յ��ղؼ�
				cm.gainItem(4310030,8);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ����շ�ʦ����Ь�ӣ�)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 4) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1132175,1) ){
				cm.gainItem(1132175,-1);//ð�յ��ղؼ�
				cm.gainItem(4310030,8);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ����շ�ʦ����������)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 18) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1102485,1) ){
				cm.gainItem(1102485,-1);//ð�յ��ղؼ�
				cm.gainItem(2041035,1);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ����պ����������磡)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 19) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1082547,1) ){
				cm.gainItem(1082547,-1);//ð�յ��ղؼ�
				cm.gainItem(2040815,1);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ������˺����������ף�)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 20) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1072747,1) ){
				cm.gainItem(1072747,-1);//ð�յ��ղؼ�
				cm.gainItem(2040713,1);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ������˺�������Ь�ӣ�)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}1482216
        } else if (selection == 21) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1132178,1) ){
				cm.gainItem(1132178,-1);//ð�յ��ղؼ�
				cm.gainItem(2041315,1);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ������˺�������������)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 23) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1102481,1) ){
				cm.gainItem(1102481,-1);//ð�յ��ղؼ�
	cm.gainItem(2041035,1);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ�������սʿ�������磡)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 24) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1082543,1) ){
				cm.gainItem(1082543,-1);//ð�յ��ղؼ�
				cm.gainItem(2040815,1);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ�������սʿ�������ף�)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 25) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1072743,1) ){
				cm.gainItem(1072743,-1);//ð�յ��ղؼ�
				cm.gainItem(2040713,1);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ�������սʿ����Ь�ӣ�)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 26) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1132174,1) ){
				cm.gainItem(1132174,-1);//ð�յ��ղؼ�
				cm.gainItem(2041315,1);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ�������սʿ����������)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 27) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
					}else */if(cm.haveItem(1102484,1) ){
				cm.gainItem(1102484,-1);//ð�յ��ղؼ�
				cm.gainItem(2041035,1);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ����շ����������磡)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 28) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1082546,1) ){
				cm.gainItem(1082546,-1);//ð�յ��ղؼ�
				cm.gainItem(2040815,1);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ����շ����������ף�)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 29) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1072746,1) ){
				cm.gainItem(1072746,-1);//ð�յ��ղؼ�
				cm.gainItem(2040713,1);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ����շ�������Ь�ӣ�)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 30) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1132177,1) ){
				cm.gainItem(1132177,-1);//ð�յ��ղؼ�
				cm.gainItem(2041315,1);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ����շ�������������)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 31) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1102483,1) ){
				cm.gainItem(1102483,-1);//ð�յ��ղؼ�
				cm.gainItem(2041035,1);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ����չ��ֱ������磡)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 32) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1082545,1) ){
				cm.gainItem(1082545,-1);//ð�յ��ղؼ�
				cm.gainItem(2040815,1);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ����չ��ֱ������ף�)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 33) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1072745,1) ){
				cm.gainItem(1072745,-1);//ð�յ��ղؼ�
				cm.gainItem(2040713,1);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ����չ��ֱ���Ь�ӣ�)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 34) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
						}else */if(cm.haveItem(1132176,1) ){
				cm.gainItem(1132176,-1);//ð�յ��ղؼ�
				cm.gainItem(2041315,1);//ð�յ��ղؼ�
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���������ա�" + " : " + "[" + cm.getChar().getName() + "]�ɹ����չ��ֱ���������)"));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 35) {
			if(cm.haveItem(1402214,0) ){
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1022226);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1022226)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setStr(60);//����*
				toDrop.setDex(60);//����
				toDrop.setInt(60);//����
				toDrop.setLuk(60);//����
				toDrop.setWatk(30);//������
				toDrop.setMatk(30);//ħ������
				toDrop.setWdef(0);//�������
				toDrop.setMdef(0);//ħ������
				toDrop.setSpeed(0);//�ƶ��ٶ�
				toDrop.setAcc(0);//����
				toDrop.setAvoid(0);//����
				toDrop.setJump(0);//��Ծ
				toDrop.setHp(3000);//����
				toDrop.setMp(3000);//ħ��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
        } else if (selection == 36) {
			if(cm.haveItem(1402214,0) ){
				cm.gainItem(1112138,60,60,60,60,5000,5000,60,60,0,0,0,0,30,30);
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
		}
 	
    }
}


