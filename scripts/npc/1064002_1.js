
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE); //��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE); //��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1"; // ��ƷID,����
var x2;
var x3;
var x4;
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var �����Ʒ = "#v1302000#";
var add = "#fEffect/CharacterEff/1112903/0/0#"; //������
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#"; //��ɫ�Ҽ�ͷ
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#"; //��ɫ�Ҽ�ͷ
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#"; //ѡ�����
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��ɫ��ͷ = "#fEffect/CharacterEff/1112908/0/1#"; //�ʹ�3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#"; //����
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var �۰��� = "#fItem/Etc/0427/04270005/Icon8/1#"; //
var �ջ� = "#fUI/PredictHarmony/card/19#"; //��ƬЧ���ջ�
var Ц = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/0#"; //Ц��
var ���Ҷ = "#fMap/MapHelper/weather/maple/2#";
var ���Ҷ = "#fMap/MapHelper/weather/maple/1#";
var ��Ů = "#fMap/MapHelper/weather/witch/0#"; //��Ů
var ���� = "#fMap/MapHelper/weather/balloon/4#"; //����
var ��� = "#fMap/MapHelper/weather/LoveEffect2/4/0#"; //���
var õ�� = "#fMap/MapHelper/weather/rose/0#"; //õ�廨
var �̻� = "#fMap/MapHelper/weather/squib/squib1/3#"; //�̻�
var �ʺ� ="#fEffect/ItemEff/1071085/effect/walk1/2#";
var ��ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/4#"; //
var С�ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/5#"; //
var С���� = "#fItem/Etc/0427/04270001/Icon9/0#"; //
var ����� = "#fItem/Etc/0427/04270001/Icon9/1#"; //
var Сˮ�� = "#fItem/Etc/0427/04270001/Icon10/5#"; //
var ��ˮ�� = "#fItem/Etc/0427/04270001/Icon10/4#"; //
var tz = "#fEffect/CharacterEff/1082565/4/0#"; //������
var tz1 = "#fEffect/CharacterEff/1082565/0/0#"; //������
var tz2 = "#fEffect/CharacterEff/1082565/2/0#"; //������
var а��С�� = ""; //а��С�� ��С��
var а��С��2 = "#fEffect/CharacterEff/1112960/3/1#"; //а��С�� ����
var ���� = "#fEffect/SetEff/208/effect/walk2/4#";
var ����1 = "#fEffect/SetEff/208/effect/walk2/3#";
var С�� = "#fMap/MapHelper/weather/birthday/2#";
var �һ� = "#fMap/MapHelper/weather/rose/4#";
var ����Ҷ = "#fMap/MapHelper/weather/maple/3#";
var С�̻� = "#fMap/MapHelper/weather/squib/squib4/1#";
var ���� = "#fMap/MapHelper/weather/witch/3#";

var ��ս���� = 1;
var ������ս���� = 1;

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
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
			if(cm.getPlayer().getMapId() == 271040100){
				cm.sendYesNo("��Ҫ��ȥô��");
			}else{
				var tex2 = "";
				var text = "";
				for (i = 0; i < 10; i++) {
					text += "";
				}
				
				//  text += "#e#r" + ���� + "�����������ļ�̨" + ���� + ".\r\n"//3     
					text += "#e#r" + �ʺ� +"#e<BOSS - Ѫ��Ů��>#n\r\n��ͼҪ��:#v4110001#x1\r\n#r(���ÿ���˺�ÿ������볡#e" + ��ս���� + "��#n,�볡��¼#eÿ����ҹ0��#n�����ʼ��)\r\n#b\r\n"
				  text += "#L1##d" + С�̻� + "�������Ѫ��Ů��(��Ա��ͬʱ�ƶ���)#l\r\n" 
				  text += "#L3##d" + С�̻� + "����������Ѫ��Ů��(��Ա��ͬʱ�ƶ���)#l\r\n"  				  
				  text += "#L2##d" + С�̻� + "��������" + С�̻� + "\r\n\r\n"//3
			 //   text += "#L5##d" + С�̻� + "�س�����" + С�̻� + "\r\n\r\n"//3
			 //   text += "#L2##d" + С�̻� + "���ص��߶���" + С�̻� + "\r\n\r\n"//3
			 
			 
				  cm.sendSimple(text);
			} 
		} else if (status == 1){

			if (selection == 3) {
				if (cm.getParty() == null) { // û�����
					cm.sendOk("����Ӻ����̸����");
					cm.dispose();
				} else if (cm.getPlayerCount(105200710) > 1 || cm.getPlayerCount(105200700) > 1) {
					cm.sendOk("�Ѿ�������ս����Ѫ��Ů���ˣ����޷�����!");
					cm.dispose();
				} else if (!cm.isLeader()) { // Not Party Leader
				   cm.sendOk("������Ķӳ�����˵��~");
				   cm.dispose();
				} else if (cm.�ж��Ŷ�ÿ��a("����Ѫ��Ů��", ������ս����) == 0) {//�ٻ�20��
					cm.sendOk("���,ϵͳ�޶�ÿ���˺�ÿ��ֻ����ս" + ������ս���� + "��!");
					cm.dispose();
				} else if(cm.haveItem(4110001,1)){//�жϻ���
					cm.gainItem(4110001, -1);//��ȥ����   
					cm.����Ŀ���ͼ(105200700); 
					cm.����Ŀ���ͼ(105200710); 					
					cm.warpParty(105200700);
					cm.���Ŷ�ÿ��a("����Ѫ��Ů��");
					// cm.spawnMobOnMap(8920100, 1, 40, 125, 105200310);
					cm.����ǰ��ͼʱ��(10, true, true);
					cm.ȫ������(6, "[ϵͳ����]��" + cm.getPlayer().getName() + " ������鿪ʼ��ս����Ѫ��Ů�������һ��Ϊ�����������ƣ�");
					cm.dispose();

				}else{
					cm.sendOk("��⣺��Ҫ��#v4110001#���ܽ����ͼ!");
					cm.dispose();
				}
			}else if (selection == 2) {
				cm.warpParty(910000000);//Ⱥ�崫��
				cm.dispose();
			
			}else if (selection == 1) {	
			
				if (cm.getParty() == null) { // û�����
					cm.sendOk("����Ӻ����̸����");
					cm.dispose();
				} else if (cm.getPlayerCount(105200310) > 1 || cm.getPlayerCount(105200300) > 1) {
					cm.sendOk("�Ѿ�������սѪ��Ů���ˣ����޷�����!");
					cm.dispose();
				} else if (!cm.isLeader()) { // Not Party Leader
				   cm.sendOk("������Ķӳ�����˵��~");
				   cm.dispose();
				} else if (cm.�ж��Ŷ�ÿ��a("Ѫ��Ů��", ��ս����) == 0) {//�ٻ�20��
					cm.sendOk("���,ϵͳ�޶�ÿ���˺�ÿ��ֻ����ս" + ��ս���� + "��!");
					cm.dispose();
				} else if(cm.haveItem(4110001,1)){//�жϻ���
					cm.gainItem(4110001, -1);//��ȥ����   
					cm.����Ŀ���ͼ(105200300); 
					cm.����Ŀ���ͼ(105200310); 					
					cm.warpParty(105200300);
					cm.���Ŷ�ÿ��a("Ѫ��Ů��");
					// cm.spawnMobOnMap(8920100, 1, 40, 125, 105200310);
					cm.����ǰ��ͼʱ��(10, true, true);
					cm.ȫ������(6, "[ϵͳ����]��" + cm.getPlayer().getName() + " ������鿪ʼ��սѪ��Ů�������һ��Ϊ�����������ƣ�");
					cm.dispose();

				}else{
					cm.sendOk("��⣺��Ҫ��#v4110001#���ܽ����ͼ!");
					cm.dispose();
				}

			} else {
				if(cm.getPlayer().getMapId() == 105200310){
					cm.warp(105200000);
					cm.dispose();
				}
			}
		} 
    }
}


