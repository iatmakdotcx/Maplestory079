importPackage(net.sf.sunms.tools);
importPackage(net.sf.sunms.client);
importPackage(net.sf.sunms.server)
importPackage(java.util);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools);
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
			text += "\t\t\t  #e��ӭ����#b�ع�ð�յ��ع�ð�յ� #k!#n\r\n"//L10=��δ���� L6=�
			text += "#r��ȡ��Ӧ������������㱳���ռ�ﶫ�����ܽ϶�#n\r\n"//#L1##b#v4310086# �׳����#l       
            text += " #L7##r#v4310086# ��ֵ�����ȡ#l\r\n\r\n"//3  #L6##b#v4000017##v3991031##v3991040##v3991040##v3991037##l
            text += "#L2##b#v3990000# ��������ȡ#l       #L5##b#v3991012# ���������ȡ#l\r\n\r\n"//
            //text += "#L8##b ����ѫ������������ж��ԭʼѫ�£�#l\r\n"// 	   		\r\n\r\n#L9##b �������#l
            //text += "#L11# ��˿�����1����ɫ����1��#l\r\n#L12# ��˿�����2����ɫ����2��#l\r\n#L13# ��˿�����3����ɫ����3��#l\r\n#L14# �ǻҼ���˿���������ɫ����4��#l"//3 
            text += "\r\n\r\n"
			cm.sendSimple(text);
        } else if (selection == 1) { //400���
			cm.sendNext("#e#rע�⣺ֻ����ȡһ�Σ�\r\n#k�ٴ���ȡ��������������������ݣ�����ѫ�����Խ��ᱻ���ã�");
		} else if (selection == 10) {
			cm.sendOk("��δ����.");
            cm.dispose();
			return;
		} else if (selection == 11){
			if (cm.haveItem(3990010, 1)) {
			    cm.gainItem(3990010, -1);
				cm.gainItem(2370000,7);//
				cm.gainItem(2340000,3);//����
				cm.gainItem(2049000,20);//����
				cm.gainItem(5131000,3);//����
				cm.gainItem(5200000,3);
				cm.sendOk("��ȡ�ɹ���");
				cm.worldMessage(6,"�������["+cm.getName()+"]��˿�����1��ȡ�ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("���޷���ȡ��");
				cm.dispose();
			}
		} else if (selection == 12){
			if (cm.haveItem(3990011, 1)) {
			    cm.gainItem(3990011, -1);
				cm.gainItem(2370000,3);//
				cm.gainItem(2049100,3);//����
				cm.gainItem(2049000,30);//����
				cm.gainItem(5131000,2);//����
				cm.gainItem(5200001,2);
				cm.sendOk("��ȡ�ɹ���");
				cm.worldMessage(6,"�������["+cm.getName()+"]��˿�����2��ȡ�ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("���޷���ȡ��");
				cm.dispose();
			}
		} else if (selection == 13){
			if (cm.haveItem(3990012, 1)) {
			    cm.gainItem(3990012, -1);
				cm.gainItem(2370000,5);//
				cm.gainItem(4310049,100);//����
				cm.gainItem(2049000,10);//����
				cm.gainItem(5131000,5);//����
				cm.gainItem(5200002,3);
				cm.sendOk("��ȡ�ɹ���");
				cm.worldMessage(6,"�������["+cm.getName()+"]��˿�����3��ȡ�ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("���޷���ȡ��");
				cm.dispose();
			}
		} else if (selection == 14){
			if (cm.haveItem(3990013, 1)) {
			    cm.gainItem(3990013, -1);
				cm.gainItem(2049100,10);//
				//cm.gainItem(2049000,20);//����
				cm.gainItem(5131000,3);//����
				cm.gainItem(5200000,3);
				cm.gainItem(5200001,3);
				cm.gainItem(5200002,3);
				cm.gainItem(4005004,10);
				cm.gainItem(3992025,3);
				cm.sendOk("��ȡ�ɹ���");
				cm.worldMessage(6,"�������["+cm.getName()+"]�ǻҼ���˿�������ȡ�ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("���޷���ȡ��");
				cm.dispose();
			}
		} else if (selection == 8) {//ѫ�������޸�
			if(cm.haveItem(1142347, 1)&&cm.getPlayer().getId()==236){//  
			cm.gainItem(1142347, -1);
			//cm.setBossLog("bclb1");
			cm.gainItem(1142348,26,26,26,26,400,400,13,13,13,13,8,8,8,16);//������
			cm.sendOk("��ȡ�ɹ�.");
			cm.worldMessage(6,"��ѫ�¡�["+cm.getName()+"]����ѫ�¿�ʽ�����ɹ���");
            cm.dispose();
			}else {
			cm.sendOk("��û��Ȩ�޽��д˲���������ϵ����Ա��");
			cm.dispose();
			} 
			return;
		} else if (cm.getInventory(4).isFull(8)||cm.getInventory(2).isFull(3)||cm.getInventory(1).isFull(2)){
            cm.sendOk("#b�뱣֤2��װ������3����������8���������Ŀռ䣡�����޷���ȡ.");
            cm.dispose();
			return;
        } else if (selection == 2) { //������
				if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull() && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
            cm.sendOk("#b�뱣֤ÿ����λ�����пո�,�����޷���ȡ.");
            cm.dispose();
			return;
			}
		if (cm.haveItem(3990000, 1)) {//1��
			    cm.gainItem(3990000, -1);
				cm.gainItem(1122017,1,7);//7������
				cm.gainItem(5211060,1,3);//3�� 3��
				cm.gainNX(8000);//��ȯ
				cm.gainItem(2049100,5);//����
				cm.gainItem(2340000,5);//ף��
				cm.gainItem(1142548,50,50,50,50,1000,1000,20,20,0,0,10,10,20,20);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
				cm.sendOk("������ȡ�ɹ���");
				cm.worldMessage(6,"�����ʡ�["+cm.getName()+"]����������1�๤����ȡ�ɹ���");
				cm.dispose();
			}else if (cm.haveItem(3990001, 1)) {//2��
			    cm.gainItem(3990001, -1);
				cm.gainItem(1122017,1,7);//7������
				cm.gainItem(5211060,1,1);//1�� 3��
				cm.gainNX(6000);//��ȯ
				cm.gainItem(2049100,3);//����
				cm.gainItem(2340000,3);//ף��
				cm.sendOk("������ȡ�ɹ���");
				cm.worldMessage(6,"�����ʡ�["+cm.getName()+"]����������2�๤����ȡ�ɹ���");
				cm.dispose();
			}else if (cm.haveItem(3990002, 1)) {//3��
			    cm.gainItem(3990002, -1);
				cm.gainItem(1122017,1,3);//7������
				cm.gainNX(3000);//��ȯ
				cm.worldMessage(6,"�����ʡ�["+cm.getName()+"]����������3�๤����ȡ�ɹ���");
				cm.dispose();
			}else if (cm.haveItem(3990003, 1)) {//4��
			    cm.gainItem(3990003, -1);
				cm.gainNX(2000);//��ȯ
				cm.sendOk("������ȡ�ɹ���");
				cm.worldMessage(6,"�����ʡ�["+cm.getName()+"]����������4�๤����ȡ�ɹ���");
				cm.dispose();
			}else if (cm.haveItem(3990004, 1)) {//5��
			    cm.gainItem(3990004, -1);
				cm.gainNX(1000);//��ȯ
				cm.sendOk("������ȡ�ɹ���");
				cm.worldMessage(6,"�����ʡ�["+cm.getName()+"]����������5�๤����ȡ�ɹ���");
				cm.dispose();
			}else if (cm.haveItem(3990005, 1)) {//6��
			    cm.gainItem(3990005, -1);
				cm.gainItem(1142547,40,40,40,40,2000,2000,20,20,0,0,10,10,20,20);
				cm.sendOk("������ȡ�ɹ���");
				//cm.worldMessage(6,"�����ʡ�["+cm.getName()+"]����������5�๤����ȡ�ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("���޷���ȡ��");
				cm.dispose();
			}
        } else if (selection == 3) { //������  ����
		if (cm.haveItem(3990001, 1)) {
			    cm.gainItem(3990001, -1);
				cm.gainItem(1142534,15,15,15,15,1000,1000,10,10,0,0,10,10,20,20);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
				//cm.gainItem(4310150,1);//�����
				//cm.gainItem(1122017,1,5);
				cm.gainItem(4000463,10);//GQB
				//cm.setmoneyb(50);
				//cm.gainItem(4002001,20);//����
				//cm.gainItem(4002002,20);//����
				//cm.gainItem(4002003,20);//����
				//cm.gainItem(4310059,20);//�سɶһ�
				cm.sendOk("������ȡ�ɹ���");
				cm.worldMessage(6,"�����ʡ�["+cm.getName()+"]����������������ȡ�ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("���޷���ȡ��");
				cm.dispose();
			}
        } else if (selection == 4) {//Ů����  ����
			if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull() && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
            cm.sendOk("#b�뱣֤ÿ����λ�����пո�,�����޷���ȡ.");
            cm.dispose();
			return;
			}
			if (cm.haveItem(3990002, 1)) {
			    cm.gainItem(3990002, -1);
				cm.gainItem(1142535,15,15,15,15,1000,1000,10,10,0,0,10,10,20,20);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
				//cm.gainItem(4310150,1);//�����
				//cm.gainItem(1122017,1,3);
				cm.gainItem(4000463,5);//GQB
				//cm.setmoneyb(50);
				//cm.gainItem(4002001,20);//����
				//cm.gainItem(4002002,20);//����
				//cm.gainItem(4002003,20);//����
				//cm.gainItem(4310059,20);//�سɶһ�
				cm.sendOk("������ȡ�ɹ���");
				cm.worldMessage(6,"�����ʡ�["+cm.getName()+"]����Ů����������ȡ�ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("���޷���ȡ��");
				cm.dispose();
			}
		} else if (selection == 6) {//�
		var sj=Math.floor(Math.random()*4);//0/1/2/3/4
		if(sj==2){
			if(cm.getPlayer().getLevel() >= 30 && cm.getBossLog("lqcg")==0&&cm.getBossLog("bclb")<=0){//�жϴ���   && 
			/*var ii = MapleItemInformationProvider.getInstance();
			var type = ii.getInventoryType(5211060);
			var toDrop = ii.randomizeStats(ii.getEquipById(5211060)).copy();
			var temptime = cm.setzbsj(2*60*60*1000); 
			toDrop.setExpiration(temptime);
			MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop,false);
			cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop)); 
			toDrop.setFlag(1);//����
				cm.gainItem(2049100,1,1);
				cm.gainItem(1082149,1,3);
				cm.gainItem(1002939,1,3);
				//cm.gainItem(5150038,1,1);//4.30��*/
				cm.gainItem(2049100,5);
				cm.setBossLog("bclb");
				cm.setBossLog('lqcg');
				cm.sendOk("��ȡ�ɹ���");
				//cm.setBossLog("bclb3");
				cm.worldMessage(6,"��������["+cm.getName()+"]���5��������ᣡ��л����֧�֣�");
				cm.dispose();
			}else{
				cm.sendOk("ֻ����ȡһ�Σ������㻹δ��30����");
				cm.dispose();
			}
		}else{
			cm.setBossLog("bclb");
			cm.sendOk("���ź���û���н����������һ��");
			cm.dispose();
		}
		} else if (selection == 5) {//���Ӱ�
				if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull() && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
				cm.sendOk("#b�뱣֤ÿ����λ�����пո�,�����޷���ȡ.");
				cm.dispose();
				return;
				}
			if (cm.haveItem(3991012, 1)) {
			    cm.gainItem(3991012, -1);
				cm.gainItem(1142703,10,10,10,10,1000,1000,5,5,0,0,20,20,10,10);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
				cm.gainItem(5150038,1);//
				cm.gainItem(5153000,1);//
				cm.gainItem(5152001,1);//
				cm.gainItem(5151001,1);//
				cm.gainItem(1003439,1);//fensezhatou
				//cm.gainItem(4002001,20);//����
				//cm.gainItem(4002002,20);//����
				//cm.gainItem(4002003,20);//����
				//cm.gainItem(4310059,20);//�سɶһ�
				cm.sendOk("�����ȡ�ɹ���");
				cm.worldMessage(6,"�������ȡ��["+cm.getName()+"]������֤�����ȡ�ɹ���лл��ԡ�ĳĳ���֧�֣�");
				cm.dispose();
			}else{
				cm.sendOk("���޷���ȡ��");
				cm.dispose();
			}
		} else if (selection == 9) {//����
				if (cm.getInventory(1).isFull() && cm.getInventory(2).isFull() && cm.getInventory(3).isFull()&& cm.getInventory(4).isFull()){
				cm.sendOk("#b�뱣֤ÿ����λ�����пո�,�����޷���ȡ.");
				cm.dispose();
				return;
				}
			if (cm.getBossLog("bclb")==0&&cm.getLevel()>=50) {
				var id = cm.getPlayer().getId();
				var sj=Math.floor(Math.random()*4) + 1;//0/1/2/3/4
				cm.setBossLog("bclb");
				cm.gainDY(sj*400);
				cm.gainNX(sj*200);
				cm.gainMeso(500000);
				cm.sendOk("�����ȡ�ɹ���");
				cm.worldMessage(6,"�����������["+cm.getName()+"]��ȡ�˲����������л֧�֣���");
				cm.dispose();
			}else {	
				cm.sendOk("���޷���ȡ�������Ѿ�����ˣ� ��������������ϵGM��");
				cm.dispose();
			}
		} else if (selection == 11) {//
			if(cm.getLevel()<120&&cm.haveItem(4002001,30)&&cm.haveItem(4002000,30)&&cm.haveItem(4002002,30)&&cm.haveItem(4000313,200)&&cm.haveItem(4001126,2000)&&cm.haveItem(4032398,20)&&cm.haveItem(2049100,3)&&cm.haveItem(2340000,3)&&cm.haveItem(5041000,50)&&cm.getPlayer().getMeso() >= 1500000&&cm.getPlayer().getDY() >= 10000&&cm.getPlayer().getNX() >= 10000){
			    cm.gainItem(4310060, 1);
				//cm.gainItem(5590001,1,14);//
				cm.gainItem(4002001,-30);//
				cm.gainItem(4002000,-30);//
				cm.gainItem(4002002,-30);
				cm.gainItem(4000313,-200);//
				cm.gainItem(4001126,-2000);
				cm.gainItem(4032398,-20);//
				cm.gainItem(2049100,-3);//hundun
				cm.gainItem(2340000,-3);//zhufu
				cm.gainItem(5041000,-50);
				cm.gainDY(-10000);
				cm.gainNX(-10000);
				cm.gainMeso(-1500000);
				cm.sendOk("������˳ɹ�");
				cm.worldMessage(6,"�������["+cm.getName()+"]���ͺϷ����2���˳ɹ���");
				cm.dispose();
			}else{
				cm.sendOk("��Ʒ���㣬�޷�����");
				cm.dispose();
			}
        } else if (selection == 7) { //���
		if (cm.getcz()>=40000&&cm.getOneTimeLog("400���ʶ��")==0) {
			    cm.gaincz(-40000);
				cm.gainItem(4310086,3);
				//cm.gainItem(4001266,5);//����
				//cm.gainItem(4002000,20);//��ţ
				//cm.gainItem(4002001,20);//����ţ
				//cm.gainItem(4002002,5);//ľ��
				//cm.gainItem(4031561,2);
				cm.gainItem(4310059,25);//bi cheng bi
				//cm.gainItem(4002003,20);//��ˮ��
				cm.gainItem(2340000,20);//ף��
			    cm.gainItem(2049100,25);//����
				cm.setOneTimeLog("400���ʶ��");
				//cm.gainItem(2370000,5);
				cm.sendOk("�һ���ֵ����ɹ���");
				cm.worldMessage(6,"�����������["+cm.getName()+"]��ȡ�ɹ���лл��ԡ�ĳĳ���֧�֣�");
				cm.dispose();
			/*} else if (cm.haveItem(4310086, 1) && cm.haveItem(1142347, 1)) {
			    cm.gainItem(4310086, -1);
				cm.gainItem(1142347, -1);
				//cm.gainItem(1142346, -1);
				cm.gainItem(5041000,20);
				cm.gainMeso(1);
				cm.gainItem(1142348,60,60,60,60,1500,1500,30,30,0,0,60,60,20,20);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
			    //cm.gainItem(4031558,10);//��Ʊ
				//cm.gainItem(4031559,10);//��Ʊ
				cm.gainItem(4001266,20);//����
				//cm.gainItem(4002000,20);//��ţ
				//cm.gainItem(4002001,20);//����ţ
				//cm.gainItem(4002002,20);//ľ��
				cm.gainItem(4310059,20);//bi cheng bi
				//cm.gainItem(4002003,20);//��ˮ��
				cm.gainItem(2340000,20);//ף��
			    cm.gainItem(2049100,20);//����
				cm.gainItem(2370000,20);
				cm.sendOk("�һ���ֵ����ɹ���");
				cm.worldMessage(6,"�����������["+cm.getName()+"]��ȡ�ɹ���ѫ�����Եõ�������лл��ԡ�ĳĳ���֧�֣�");
				cm.dispose();
				
			} else if (cm.haveItem(4310086, 1) && cm.haveItem(1142348, 1)) {
			    cm.gainItem(4310086, -1);
				cm.gainItem(1142348, -1);
				cm.gainItem(5041000,20);
				//cm.gainItem(1142346, -1);
				cm.gainMeso(1);
				cm.gainItem(1142349,80,80,80,80,2000,2000,40,40,0,0,80,80,20,20);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
			    //cm.gainItem(4031558,10);//��Ʊ
				//cm.gainItem(4031559,10);//��Ʊ
				cm.gainItem(4001266,20);//����
				//cm.gainItem(4002000,20);//��ţ
				//cm.gainItem(4002001,20);//����ţ
				cm.gainItem(4002002,20);//ľ��
				cm.gainItem(4310059,20);//bi cheng bi
				//cm.gainItem(4002003,20);//��ˮ��
				cm.gainItem(2340000,20);//ף��
			    cm.gainItem(2049100,20);//����
				cm.gainItem(2370000,20);
				cm.sendOk("�һ���ֵ����ɹ���");
				cm.worldMessage(6,"�����������["+cm.getName()+"]��ȡ�ɹ���ѫ�����Եõ�������лл��ԡ�ĳĳ���֧�֣�");
				cm.dispose();
				
			} else if (cm.haveItem(4310086, 1) && cm.haveItem(1142349, 1)) {
			    cm.gainItem(4310086, -1);
				cm.gainItem(1142349, -1);
				cm.gainItem(5041000,20);
				//cm.gainItem(1142346, -1);
				cm.gainMeso(1);
				cm.gainItem(1142135,100,100,100,100,2500,2500,50,50,0,0,100,100,20,20);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
			    //cm.gainItem(4031558,10);//��Ʊ
				//cm.gainItem(4031559,10);//��Ʊ
				cm.gainItem(4001266,20);//����
				//cm.gainItem(4002000,20);//��ţ
				//cm.gainItem(4002001,20);//����ţ
				//cm.gainItem(4002002,20);//ľ��
				cm.gainItem(4310059,20);//bi cheng bi
				//cm.gainItem(4002003,20);//��ˮ��
				cm.gainItem(2340000,20);//ף��
			    cm.gainItem(2049100,20);//����
				cm.gainItem(2370000,20);
				cm.sendOk("�һ���ֵ����ɹ���");
				cm.worldMessage(6,"�������������["+cm.getName()+"]��ȡ�ɹ���ѫ�����Եõ�������лл��ԡ�ĳĳ���֧�֣�");
				cm.dispose();
				
			} else if (cm.haveItem(4310086, 1) && cm.haveItem(1142135, 1)) {
			    cm.gainItem(4310086, -1);
				cm.gainItem(1142135, -1);
				cm.gainItem(5041000,20);
				//cm.gainItem(1142346, -1);
				cm.gainMeso(1);
				cm.gainItem(1142136,120,120,120,120,3000,3000,60,60,0,0,120,120,20,20);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
			    //cm.gainItem(4031558,10);//��Ʊ
				//cm.gainItem(4031559,10);//��Ʊ
				cm.gainItem(4001266,10);//����
				//cm.gainItem(4002000,20);//��ţ
				//cm.gainItem(4002001,20);//����ţ
				//cm.gainItem(4002002,20);//ľ��
				cm.gainItem(4310059,20);//bi cheng bi
				//cm.gainItem(4002003,20);//��ˮ��
				cm.gainItem(2340000,20);//ף��
			    cm.gainItem(2049100,20);//����
				cm.gainItem(2370000,20);
				cm.sendOk("�һ���ֵ����ɹ���");
				cm.worldMessage(6,"�����������["+cm.getName()+"]��ȡ�ɹ���ѫ�����Եõ�������лл��ԡ�ĳĳ���֧�֣�");
				cm.dispose();
				
			} else if (cm.haveItem(4310086, 1) && cm.haveItem(1142136, 1)) {
			    cm.gainItem(4310086, -1);
				cm.gainItem(1142136, -1);
				cm.gainItem(5041000,20);
				//cm.gainItem(1142346, -1);
				cm.gainMeso(1);
				cm.gainItem(1142216,140,140,140,140,3500,3500,70,70,0,0,140,140,20,20);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
			    //cm.gainItem(4031558,10);//��Ʊ
				//cm.gainItem(4031559,10);//��Ʊ
				cm.gainItem(4001266,20);//����
				//cm.gainItem(4002000,20);//��ţ
				//cm.gainItem(4002001,20);//����ţ
				//cm.gainItem(4002002,20);//ľ��
				cm.gainItem(4310059,20);//bi cheng bi
				//cm.gainItem(4002003,20);//��ˮ��
				cm.gainItem(2340000,20);//ף��
			    cm.gainItem(2049100,20);//����
				cm.gainItem(2370000,20);
				cm.sendOk("�һ���ֵ����ɹ���");
				cm.worldMessage(6,"�����������["+cm.getName()+"]��ȡ�ɹ���ѫ�����Եõ�������лл��ԡ�ĳĳ���֧�֣�");
				cm.dispose();

			} else if (cm.haveItem(4310086, 1) && cm.haveItem(1142216, 1)) {
			    cm.gainItem(4310086, -1);
				cm.gainItem(1142216, -1);
				cm.gainItem(5041000,20);
				//cm.gainItem(1142346, -1);
				cm.gainMeso(1);
				cm.gainItem(1142189,160,160,160,160,4000,4000,80,80,0,0,160,160,20,20);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
			    //cm.gainItem(4031558,10);//��Ʊ
				//cm.gainItem(4031559,10);//��Ʊ
				cm.gainItem(4001266,20);//����
				//cm.gainItem(4002000,20);//��ţ
				//cm.gainItem(4002001,20);//����ţ
				//cm.gainItem(4002002,20);//ľ��
				cm.gainItem(4310059,20);//bi cheng bi
				//cm.gainItem(4002003,20);//��ˮ��
				cm.gainItem(2340000,20);//ף��
			    cm.gainItem(2049100,20);//����
				cm.gainItem(2370000,20);
				cm.sendOk("�һ���ֵ����ɹ���");
				cm.worldMessage(6,"�����������["+cm.getName()+"]��ȡ�ɹ���ѫ�����Եõ�������лл��ԡ�ĳĳ���֧�֣�");
				cm.dispose();
				
			} else if (cm.haveItem(4310086, 1) && cm.haveItem(1142189, 1)) {
			    cm.gainItem(4310086, -1);
				cm.gainItem(1142189, -1);
				cm.gainItem(5041000,20);
				//cm.gainItem(1142346, -1);
				cm.gainMeso(1);
				cm.gainItem(1142371,180,180,180,180,4000,4000,90,90,0,0,180,180,20,20);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
			    //cm.gainItem(4031558,10);//��Ʊ
				//cm.gainItem(4031559,10);//��Ʊ
				cm.gainItem(4001266,20);//����
				//cm.gainItem(4002000,20);//��ţ
				//cm.gainItem(4002001,20);//����ţ
				//cm.gainItem(4002002,20);//ľ��
				cm.gainItem(4310059,20);//bi cheng bi
				//cm.gainItem(4002003,20);//��ˮ��
				cm.gainItem(2340000,20);//ף��
			    cm.gainItem(2049100,20);//����
				cm.gainItem(2370000,20);
				cm.sendOk("�һ���ֵ����ɹ���");
				cm.worldMessage(6,"�����������["+cm.getName()+"]��ȡ�ɹ���ѫ�����Եõ�������лл��ԡ�ĳĳ���֧�֣�");
				cm.dispose();

			} else if (cm.haveItem(4310086, 1) && cm.haveItem(1142371, 1)) {
			    cm.gainItem(4310086, -1);
				cm.gainItem(1142371, -1);
				cm.gainItem(5041000,20);
				//cm.gainItem(1142346, -1);
				cm.gainMeso(1);
				cm.gainItem(1142321,200,200,200,200,4000,4000,100,100,0,0,200,200,20,20);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
			    //cm.gainItem(4031558,10);//��Ʊ
				//cm.gainItem(4031559,10);//��Ʊ
				cm.gainItem(4001266,20);//����
				//cm.gainItem(4002000,20);//��ţ
				//cm.gainItem(4002001,20);//����ţ
				//cm.gainItem(4002002,20);//ľ��
				cm.gainItem(4310059,20);//bi cheng bi
				//cm.gainItem(4002003,20);//��ˮ��
				cm.gainItem(2340000,20);//ף��
			    cm.gainItem(2049100,20);//����
				cm.gainItem(2370000,20);
				cm.sendOk("�һ���ֵ����ɹ���");
				cm.worldMessage(6,"�����������["+cm.getName()+"]��ȡ�ɹ���ѫ�����Եõ�������лл��ԡ�ĳĳ���֧�֣�");
				cm.dispose();*/
			}else{
				cm.sendOk("��δ�ﵽ��ȡ��׼��");
				cm.dispose();
			}
		}else if(status==2){
			if (cm.getcz()>=1000&&!cm.haveItem(1142346)&&!cm.haveItem(1142347)&&!cm.haveItem(1142348)&&!cm.haveItem(1142349)&&!cm.haveItem(1142135)&&!cm.haveItem(1142136)&&!cm.haveItem(1142216)&&!cm.haveItem(1142189)&&!cm.haveItem(1142371)&&!cm.haveItem(1142321)) {
				//cm.gainItem(4001266,10);//����
				//cm.gainItem(4002002,10);//ľ��
				//cm.gaincz(-100);
				//cm.gainItem(4310059,1);//bi cheng bi
				//cm.gainItem(2340000,1);//ף��
			    //cm.gainItem(2049100,1);//����
				//cm.gainItem(2370000,1);
				cm.gainItem(1142346,10,10,10,10,0,0,5,5,5,5,0,0,0,0);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,�ƶ��ٶ�,��Ծ��
				//cm.setOneTimeLog("�׳���������");
				cm.sendOk("�׳�ѫ������ɹ���");
				cm.worldMessage(6,"�������ȡ��["+cm.getName()+"]�׳�ѫ����ȡ�ɹ���лл��ԡ�ĳĳ���֧�֣�");
				cm.dispose();
			}else{
				cm.sendOk("���޷���ȡ������ֵ10Ԫ������ȡ��ά+10��ѫ�£�");
				cm.dispose();
			}
		}
    }
}
