var MapleInventoryManipulator = Java.type('server.MapleInventoryManipulator');
var MapleItemInformationProvider = Java.type('server.MapleItemInformationProvider');
var DatabaseConnection = Java.type('database.DatabaseConnection');

var status = 0;
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var ���� ="#fMap/MapHelper/weather/witch/3#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var ringnum = 0;
var id = 0;
var itemIndex;
var itemList = Array(//Array(id,Num)
Array(4000016,15),Array(4000008,15),Array(4000002,15),//����ţ�ǣ�������������
Array(4000007,15),Array(4000029,15),Array(4000023,15),//����ۣ��㽶��������
Array(4000011,15),Array(4000009,15),Array(4000037,15),//Ģ����ѿ����Ģ������ˮ��
Array(4000042,15),Array(4000032,15),Array(4000039,15),//����������Ƥ����������
Array(4000045,10),Array(4000052,15),Array(4000060,15),//�ڹ�ǣ�����β���¹⾫��
Array(4000069,15),Array(4000074,10),Array(4000102,10),//��ʬ���ݣ���ɫ��ʨβ���ڻ�ľ
Array(4000106,15),Array(4000115,10),Array(4000128,10),//�����è�޻������֣���С��
Array(4000143,15),Array(4000162,15),Array(4000180,15),//��ʬ���ޣ�������Ƭ���������
Array(4000182,15),Array(4000183,15),Array(4000188,15),//ʯ�ҷ�ƿ��ī֭ƿ��Ѽ��
Array(4000191,15),Array(4000192,10),Array(4000197,15),//��ɽ��ǣ��ǻ���ʯ��
Array(4000205,15),Array(4000207,15),Array(4000373,15),//����Ȯ��������裬ī֭

Array(4000292,15),Array(4000294,10),Array(4000329,15),//�˲���������۹�����������
Array(4000330,15),Array(4000331,15),Array(4000354,15),//�����ƴ̣������ƻ����ձ�
Array(4000089,15),Array(4000066,15),Array(4000075,15),//��åA�Ļ��£��ƺ�β�ͣ�����ͷ��

Array(4000080,15),Array(4000281,15),Array(4000298,10),//������Ȯ������������Ƥ����ֽ��
Array(4000282,15),Array(4000465,15),Array(4000472,15),//��Һˣ�Ҭ�ӿǣ��ߵ�
Array(4000469,15),Array(4000375,15),Array(4000433,15),//Χ����̥���͹�
Array(4000432,15),Array(4000434,15),Array(4000118,15),//��̦��ʯ���󻨲ݣ�С̫�մ�
Array(4000172,15),Array(4000440,15),Array(4000439,15),//��β����β�ͣ��ֲڵ�Ƥ���̦ʯ
Array(4000085,15),Array(4000050,15),Array(4000049,15),//��ʯ���ʯƬ����������죬��ѩ�˽�
Array(4000272,15),Array(4000268,15),Array(4000241,15),//������Ƭ�������ĳ��а����������Ĳ�
Array(4000233,15),Array(4000236,15),Array(4000240,10),//������ľ�ˮ����ľ�׳�ǣ�С����ë
Array(4000166,15),Array(4000163,15),Array(4000027,10),//Ϻ�⣬����Ľǣ���è����
Array(4000028,10),Array(4000127,15),Array(4000402,10),//����ţħ���Ľǣ���߹ģ�������
Array(4000394,15),Array(4000444,15),Array(4000447,15),//�׻�β�ͣ���ɫ�½���ɫͷ��
Array(4000449,15),Array(4000452,15),Array(4000454,15),//��ɫ�½���ɫͷ������ɫ�½�
Array(4000457,15),Array(4001006,15)//��ɫͷ����������ë

);
var myDate = new Date();
var year = myDate.getFullYear();
var month = myDate.getMonth() + 1;
var days = myDate.getDate();
var giftList = Array(//Array(id,Num)
	Array(2022468,3)//
);
var finalGiftList = Array(//Array(id,Num)
	Array(2022468,5)//
);
var rand=Math.floor(Math.random()*100);
//////////////////////////////////////////////////////////
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
			id = cm.getPlayer().getId();
			ringnum = cm.getBossLog("paohuan");
			var textz = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n"
				textz += "           "+С�̻� +"#r��ӭ��������ð�յ�ÿ���ܻ�#k"+С�̻� +"\r\n"
				textz += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n"
				textz += " #r�ܻ�ʱ�뱣֤�������㹻�ռ䣬��������ȡʧ�ܺ���Ը�#l\r\n"
				textz += "               #L0#"+С�̻� +"#rÿ���ܻ�˵��"+С�̻� +"#l\r\n\r\n"
				textz += "               #L1#"+С�̻� +"#b��ʼ�ܻ�����"+С�̻� +"#l\r\n\r\n";
				textz += "               #L2#"+С�̻� +"#b��ȡ25������"+С�̻� +"#l\r\n";
			cm.sendSimple (textz);   

		}else if (status == 1) {
			if (selection == 0) {
				var textz1 = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n"
				textz1 += "           "+С�̻� +"#r��ӭ��������ð�յ��ܻ�˵��#k"+С�̻� +"\r\n"
				textz1 += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n"
				textz1 += "                  #rÿ���ܻ�����Ϊ25��#l\r\n\r\n"
				textz1 += "                  #bÿ�����ʱ�̶�����\r\n                       #v3992025#*5#l\r\n";//��#v4005000#*1��#v4005001#*1��#v4005002#*1\r\n          #v4005003#*1�� #v4005004#*1��#v4001165#*1��#v4001129#*1
				textz1 += "       #rÿ���5��ʱ�������������и��ʻ�ö��⽱��\r\n                  #v3992025#*10   #v3992025#*20   #l\r\n"//#v4000313#*10��#v4031138#*500W��#v2028177#*1
				textz1 += "                #b���ȫ��25������ȡ����\r\n        #v3992025#*2088��#v4005000#*10��#v4005001#*10��#v4005002#*10\r\n     #v4005003#*10��#v4005004#*10��#v4001165#*100��#v4170012#*1��#v2028171#*1#l\r\n"
				cm.sendSimple (textz1);
				cm.dispose();
			} else if (selection == 1) {
				if (cm.getInventory(2).isFull()) {
					cm.sendOk("#b�뱣֤���������㹻�ռ䣬�����޷���ȡ����");
					cm.dispose();
					
				} else if (cm.getInventory(4).isFull()) {
					cm.sendOk("#b�뱣֤���������㹻�ռ䣬�����޷���ȡ����");
					cm.dispose();
					
				} else {
					itemIndex = getOneTimeLog(id);
					if (ringnum < 25) {
						var ran = Math.floor(Math.random()*itemList.length);
						var itemid = itemList[ran][0];
						var itemnum = itemList[ran][1];
						if (itemIndex == -1){
							setOneTimeLog(ran,id);
							cm.setBossLog("paohuan");
						} else {
							changeOneTimeLog(ran,id);
						}
						if (cm.haveItem(itemList[itemIndex][0],itemList[itemIndex][1])) {
							cm.gainItem(itemList[itemIndex][0],-itemList[itemIndex][1]);
							if (ringnum > 0 && ringnum%5 == 0) {//ÿ5������˫��
								if (rand <= 70) {
									cm.gainItem(3992025,20);//ʥ������
									//cm.gainItem(4005000,2);//ˮ��
									//cm.gainItem(4005001,2);//ˮ��
									//cm.gainItem(4005002,2);//ˮ��
									//cm.gainItem(4005003,2);//ˮ��
									//cm.gainItem(4005004,2);//�ڰ�ˮ��
									//cm.gainItem(4001165,2);//̫����Ĵ͸�
									//cm.gainItem(4001129,2);//ð�յ������
								} else {//30%���ʶ������Ʒ
									cm.gainItem(3992025,10);//ʥ������
									//cm.gainItem(4005000,2);//ˮ��
									//cm.gainItem(4005001,2);//ˮ��
									//cm.gainItem(4005002,2);//ˮ��
									//cm.gainItem(4005003,2);//ˮ��
									//cm.gainItem(4005004,2);//�ڰ�ˮ��
									//cm.gainItem(4001165,2);//̫����Ĵ͸�
									//cm.gainItem(4001129,2);//ð�յ������
									//cm.gainItem(4000313,10);//�ƽ��Ҷ
									//cm.gainItem(2028177,1);//�ܻ�����
									//cm.gainMeso(5000000);
								}
							} else {//�����̶�����
								cm.gainItem(3992025,5);//ʥ������
								//cm.gainItem(4005000,1);//ˮ��
								//cm.gainItem(4005001,1);//ˮ��
								//cm.gainItem(4005002,1);//ˮ��
								//cm.gainItem(4005003,1);//ˮ��
								//cm.gainItem(4005004,1);//�ڰ�ˮ��
								//cm.gainItem(4001165,1);//̫����Ĵ͸�
								//cm.gainItem(4001129,1);//ð�յ������
							}
							cm.setBossLog("paohuan");
							cm.sendOk("��ϲ�������ÿ���ܻ�����"+(ringnum+1)+"������������ͣ�\r\n\r\n");
							cm.dispose();
							
						} else {
							var textz2 = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n"
								textz2 += "           "+С�̻� +"#r��ӭ��������ð�յ�ÿ���ܻ�#k"+С�̻� +"\r\n"
								textz2 += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n"
								textz2 += "               Ŀǰ�Ļ���Ϊ����"+(ringnum+1)+"��#l\r\n\r\n"
								textz2 += "        �����ܻ������Ѽ�#v"+itemid+"#*"+itemnum+"�������ǰ����#l\r\n";
							cm.sendSimple (textz2);
							cm.dispose();
						}
					} else {
						cm.sendOk("����������25���ܻ�������������ճ����\r\n\r\n");
						cm.dispose();
						
					}
				}
			} else if (selection == 2) {
				if (cm.getInventory(2).isFull()) {
					cm.sendOk("#b�뱣֤�������������㹻�ռ䣬������ȡ����ʧ�ܺ���Ը���");
					cm.dispose();
					
				} else if (cm.getInventory(4).isFull()) {
					cm.sendOk("#b�뱣֤�������������㹻�ռ䣬������ȡ����ʧ�ܺ���Ը���");
					cm.dispose();
					
				} else {
					if (ringnum == 25 && cm.getBossLog("paohuanjl") == 0) {//25������
						cm.gainItem(3992025,2088);//ʥ������
						cm.gainItem(2028171,1);//�ܻ�����
						cm.gainItem(4005000,10);//ˮ��
						cm.gainItem(4005001,10);//ˮ��
						cm.gainItem(4005002,10);//ˮ��
						cm.gainItem(4005003,10);//ˮ��
						//cm.gainItem(4001165,20);//̫����Ĵ͸�
						cm.gainItem(4005004,10);//�ڰ�ˮ��
						cm.gainItem(4001165,100);//�н��
						cm.gainItem(4170012,1);//�سɵ�
						//cm.gainItem(4001129,20);//ð�յ������
						cm.setBossLog("paohuanjl");
						Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "ÿ���ܻ�" + " : " + "��ϲ��" + cm.getChar().getName() + "�������ÿ��25������������վ������������Ǹε�ת����"));
						cm.dispose();
					} else if (ringnum < 25){
						cm.sendOk("#r�㻹δ��ɱ��յ�25�����ٽ�������");
						cm.dispose();
					} else {
						cm.sendOk("#r���Ѿ���ȡ�˱��յ�25�������������ظ���ȡ��");
						cm.dispose();
					}
				}
			}
		}
	}
}

function getBossLog(boss,id) {
        var con = DatabaseConnection.getConnection();
        var count = 0;
        var ps;
        //ps = con.prepareStatement("SELECT COUNT(*) FROM bosslog WHERE characterid = ? AND bossid = ? AND lastattempt >= subtime(CURRENT_TIMESTAMP, '23:0:0.0')");
		var day = ""+year+"-"+month+"-"+days+"";
		ps = con.prepareStatement("SELECT COUNT(*) FROM bosslog WHERE characterid = ? AND bossid = ?");// AND lastattempt >= ?
        ps.setInt(1, id);
        ps.setString(2, boss);
		//ps.setString(3,day);
        var rs = ps.executeQuery();
        if (rs.next()) {
            count = rs.getInt(1);
        } else {
            count = -1;
        }
        rs.close();
        ps.close();
        return count;
}

function setOneTimeLog(bossid,id) {
    var con1 = DatabaseConnection.getConnection();
    var ps = con1.prepareStatement("insert into onetimelog (characterid, log) values (?,?)");
    ps.setInt(1, id);
    ps.setString(2, bossid);
    ps.executeUpdate();
    ps.close();
}
function changeOneTimeLog(bossid,id) {
    var con1 = DatabaseConnection.getConnection();
    var ps = con1.prepareStatement("update onetimelog set log = ? where characterid = ?");
    ps.setString(1, bossid);
    ps.setInt(2, id);
    ps.executeUpdate();
    ps.close();
}

function getOneTimeLog(id) {
        var con = DatabaseConnection.getConnection();
        var count = 0;
        var ps;
        ps = con.prepareStatement("SELECT log FROM onetimelog WHERE characterid = ?");
        ps.setInt(1, id);
        var rs = ps.executeQuery();
        if (rs.next()) {
            count = rs.getString("log");
        } else {
            count = -1;
        }
        rs.close();
        ps.close();
        return count;
}