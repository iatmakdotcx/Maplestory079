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

var ���� = Math.floor(Math.random()*100);
var ǿ������ = 1;
var ��Ҷ = 2041200;
var ��Ҷ���� = 1;
var ���� = Math.floor(Math.random()*1);+15
var ���� = Math.floor(Math.random()*1);+15
var ���� = Math.floor(Math.random()*1);+15
var ���� = Math.floor(Math.random()*1);+15
var ���� = Math.floor(Math.random()*1);+15
var ħ�� = Math.floor(Math.random()*1);+15

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
			cm.sendNext("��ӭ����#r" + cm.getChannelServer().getServerName() + "#b���޽��������İ�װ�����ڵ�һ��!\r\n\r\n#k#d50%��������1��װ������������#rÿ������#v5570000# x 1");	
		} else if (status == 1) {	
		   if(cm.getPlayer().getBossLog("qianghua") >= 999){//�ж�bosslog��¼
		    cm.sendOk("#eÿ��ֻ��ǿ��#r"+ǿ������+"��#kŶ!");		
			cm.dispose();
		   } else if(cm.getInventory(1).getItem(1).getLevel()>= 127){
			cm.sendOk("#e����Ѿ�ǿ������Ϊ127��,�޷��ڼ���ǿ��!");		
			cm.dispose();	
		
	  } else if(cm.getInventory(1).getItem(1).getExpiration() != -1) {
		    cm.sendOk("��ʱװ�����ܽ���ǿ��.");
			cm.dispose();
      } //else if (cm.getInventory(1).getItem(1).getUniqueId() > -2) {
           // cm.sendOk("�ֽ�װ���޷�ǿ����");
            //cm.dispose();
		//	}
		 else{
			cm.sendYesNo("��Ҫǿ����װ��Ϊ:\r\n\r\nװ��#v"+cm.getInventory(1).getItem(1).getItemId()+"#\r\n\r\n#r#e�ɹ�����Ϊ��50%ȷ��Ҫ����������?\r\n");
			} 
		} else if (status == 2) {
		if (!cm.haveItem(��Ҷ, ��Ҷ����)) {
			cm.sendOk("#b��û��"+��Ҷ����+"��#v"+��Ҷ+"#.");
		    cm.dispose();					
		} else {
			cm.getPlayer().setBossLog('qianghua');//��bosslog��¼
			if (���� <= 35) {
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
		citem.setFlag(1);//����
		citem.setStr(citem.getStr()+����);//������
		citem.setDex(citem.getDex()+����);//������ 
		citem.setInt(citem.getInt()+����);//������
		citem.setLuk(citem.getLuk()+����);//������
		//citem.setHp(citem.getHp()+100);//��HP
		//citem.setMp(citem.getMp()+100);//��MP
		citem.setMatk(citem.getMatk()+����);//����
		citem.setWatk(citem.getWatk()+ħ��);//ħ����
		citem.setLevel(citem.getLevel()+1);//����������
		citem.setMdef(citem.getMdef()+1);//ħ������
		//citem.setAcc(citem.getAcc()+1);//����
		citem.setAvoid(citem.getAvoid()+1);//�ر�
		//citem.setHands(citem.getHands()+1);//�ּ�
	    //citem.setSpeed(citem.getSpeed()+1);//�ƶ�
		//citem.setJump(citem.getJump()+1);//��Ծ
		citem.setUpgradeSlots(citem.getUpgradeSlots()-1);//���ٿ���������
		MapleInventoryManipulator.removeFromSlot(cm.getC(),stype,1,1, false);//������һ��װ����Ŀ��һ��װ��
		MapleInventoryManipulator.addFromDrop(cm.getC(), citem,false);//������һ��װ����Ŀ��һ��װ��
		cm.playerMessage(5, "����һ�����⣬�ɹ�ǿ����������!");	 
		cm.ȫ������(cm.getPlayer().getName() + "��ǿ��ϵͳ��" + " : " + "ʹ�ð�������ʯ�ɹ�ǿ����������!");
		cm.ShowWZEffect("Effect/BasicEff.img/SkillBook/Success/0"); //�ɹ�Ч��
		cm.dispose();
		}
		}
	}
}}	
