importPackage(java.lang);
importPackage(Packages.tools);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools.packet);
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
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "          #e#r#v4001244#������Ů����֤��Ʒ��ȡ��#v4001244#\r\n"
			text += "#b#e��֤Ҫ��#k #e˽�Ź��� �ṩ��ʵ��Ƭ + ������֤ \r\n#r             (�緢�ּ�ð�߷�Ŵ���)\r\n#k"
			text += "#l\r\n#e#b��Ʒ���ݣ�#k #d#v5200002# #v5150040# #v1142574# #v5072000# #v1402014# #v3010131##k\r\n"//3
            text += "#L1##r#v4031539#��ȡ��֤��Ʒ#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
             if(cm.haveItem(4031539,1)){
		cm.gainItem(4031539, -1);
	    cm.gainItem(5150040, 2);
		cm.gainItem(5072000, 3);
		cm.gainItem(3010131, 1);		
		cm.gainItem(1402014, 1, 1);
        cm.gainMeso(500000);
		 cm.getPlayer().modifyCSPoints(1, +2000, true);//����ȯ
		var ii = MapleItemInformationProvider.getInstance();		                
		var type = ii.getInventoryType(1142574); //���װ��������
		var toDrop = ii.randomizeStats(ii.getEquipById(1142574)).copy(); // ����һ��Equip��
		//toDrop. setFlag(1);//����������ʱ��һ�𣬷����BUG����ʧ//����
		toDrop. setStr(4);//������
		toDrop. setDex(4);//������ 
		toDrop. setInt(4);//������
		toDrop. setLuk(4);//������
		toDrop. setHp(50);//HP
        toDrop. setMp(50);//MP
		toDrop. setWatk(1);//������    
		toDrop. setMatk(1);//ħ����
		toDrop. setAvoid(40);//�ر���
		toDrop. setAcc(10);//
		//toDrop. setHands(5);//�ּ�
	    toDrop. setSpeed(5);//�ٶ�	
	    toDrop. setJump(5);//��Ծ		
		cm.getPlayer().getInventory(type).addItem(toDrop);//�����װ���������

            cm.sendOk("��ϲƯ�����Ӷһ��ɹ�!");
			cm.ȫ����ɫ����( "��ϲ[" + cm.getPlayer().getName() + "] ͨ����Ů����֤����!��һλ�����յ�����,���������!");
            cm.dispose();
			}else{
            cm.sendOk(" ��û����֤,��ȥ�ҹ������Ů����֤");
            cm.dispose();
			}
		}
    }
}



