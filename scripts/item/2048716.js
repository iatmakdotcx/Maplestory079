/* ==================
 �ű�����: NPC	    
 �ű����ߣ�ά��   
 ��ϵ��ʽ��297870163
 =====================
 */

importPackage(java.util);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools);
importPackage(Packages.tools.packet);
var SSSR = Math.floor(Math.random() * 150);
var ���� = Math.floor(Math.random()*100);
var ǿ������ = 1;
var ��Ҷ = 2048716;
var ��Ҷ���� = 1;
var ���� = Math.floor(Math.random()*0);
var ���� = Math.floor(Math.random()*0);
var ���� = Math.floor(Math.random()*0);
var ���� = Math.floor(Math.random()*0);
var ���� = Math.floor(Math.random()*8);
var ħ�� = Math.floor(Math.random()*8);

function start() {

	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if ((mode == 0 && status == 2) || (mode == 0 && status == 13)) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			cm.sendNext("��ӭ����#r" + cm.getChannelServer().getServerName() + "#b��������ǿ��\r\n\r\n#k#rÿ������#v2048716#x1 ���ӵ�һ��װ�����150����");	
		} else if (status == 1) {	
		   if(cm.getPlayer().getBossLog("qianghua") >= 9999){//�ж�bosslog��¼
		    cm.sendOk("#eÿ��ֻ��ǿ��#r"+ǿ������+"��#kŶ!");		
			cm.dispose();
			} else if (cm.getInventory(1).getItem(1) == null) {
					cm.sendOk("�뽫Ҫǿ����װ�����õ�һ��~");
					cm.dispose();
		
	  } else if(cm.getInventory(1).getItem(1).getExpiration() != -1) {
		    cm.sendOk("��ʱװ�����ܽ���ǿ��.");
			cm.dispose();
      } else if (cm.isCash(cm.getInventory(1).getItem(1).getItemId()) == true) {
					cm.sendOk("��ǰװ�� #b#t" + cm.getInventory(1).getItem(1).getItemId() + "##k ����#r��װ��#k���޷�ǿ����");
					cm.dispose();
	  }
		 else{
			cm.sendNext("��Ҫǿ����װ��Ϊ:\r\n\r\nװ��#v"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n#r#eȷ��Ҫǿ����?\r\n");
			} 
		} else if (status == 2) {
		if (!cm.haveItem(��Ҷ, ��Ҷ����)) {
			cm.sendOk("#b��û��"+��Ҷ����+"��#v"+��Ҷ+"#.");
		    cm.dispose();					
		} else {
			cm.getPlayer().setBossLog('qianghua');//��bosslog��¼
			if (���� <= -1) {
			cm.gainItem(��Ҷ,-��Ҷ����);//�۳���Ʒ
			cm.ShowWZEffect("Effect/BasicEff.img/SkillBook/Failure/0"); //����ʧ��Ч��
			cm.sendOk("#bǿ��ʧ��.");
			cm.playerMessage(5, "����һ�����⣬��������ʧ��!");	 
		//	cm.ȫ������(cm.getPlayer().getName() + "��װ��ǿ����" + " : " + "ʹ�����ǿ��ʧ��,������أ�");
		    cm.dispose();
			} else {

		 cm.gainItem(��Ҷ,-��Ҷ����);	//�۳���Ʒ
		 var statup = new java.util.ArrayList();
		 var itemId1 = cm.getInventory(1).getItem(1).getItemId();
		 var citem = cm.getInventory(1).getItem(1).copy();
		 var cii = MapleItemInformationProvider.getInstance();
		 var stype =  cii.getInventoryType(itemId1);
		          citem.setStr(citem.getStr() + SSSR);
				//	citem.setInt(citem.getInt() + SSSR);
				//	citem.setLuk(citem.getLuk() + SSSR);
			//		citem.setDex(citem.getDex() + SSSR);
			//		citem.setWatk(citem.getWatk() +SSSR);
			//		citem.setMatk(citem.getMatk() + SSSR);
		MapleInventoryManipulator.removeFromSlot(cm.getC(),stype,1,1, false);//������һ��װ����Ŀ��һ��װ��
		MapleInventoryManipulator.addFromDrop(cm.getC(), citem,false);//������һ��װ����Ŀ��һ��װ��
		cm.playerMessage(5, "����һ�����⣬�ڵ����������ĳ�����ص�����!");	 
		cm.ȫ������(cm.getPlayer().getName() + "������ǿ����" + " : " + "ʹ�û���ɹ�ǿ��װ�� ��ϲ��ϲ��");
		cm.ShowWZEffect("Effect/BasicEff.img/SkillBook/Success/0"); //�ɹ�Ч��
		cm.dispose();
		}
		}
	}
}}	
