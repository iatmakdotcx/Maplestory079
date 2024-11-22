importPackage(Packages.client);
importPackage(Packages.database);
importPackage(Packages.java.math);

var status = 0;
var ringnum = 0;
var id = 0;
var itemIndex;
var �Ƿ񿪷� = false;
var itemList = Array(//Array(id,Num)
	Array(4000000, 50),
	Array(4000016, 50),
	Array(4000019, 50),
	Array(4000003, 50),
	Array(4000010, 50),
	Array(4000001, 50),
	Array(4031631, 50),
	Array(4031641, 50)
	
);

var giftList = Array(//Array(id,Num)
	Array(0,0)
);
var finalGiftList = Array(//Array(id,Num)
	Array(4000005,10)
);
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
			if(!�Ƿ񿪷�){
				cm.sendOk("�������Բʺ絺��ð�ռ���");
				cm.dispose();
				return;
			}
        	id = cm.getPlayer().getId();
        	ringnum = getBossLog("paoshang",id);
        	var strlen = "��ӭ����#r���ݮð�յ���#�����淨\r\n\r\n";
        	if(ringnum == 0)
            	strlen += "#r�淨���飺 #bÿ����������յ�һ����������Ҫ������Ҫ�Ĳ��������������ҵ��������һ����һ���޴�Ľ�ƷŶ��ÿ���Ҷ����ṩ����20�����������û�п���";
            else{
            	strlen += "���Ѿ��������ε�ί����ô��";
            }
            cm.sendYesNo(strlen);
        }else if(status == 1){
			cm.getPlayer().dropMessage("��1��");
			id = cm.getPlayer().getId();
			var ran = Math.floor(Math.random() * itemList.length);
        	itemIndex = getOneTimeLog(ran, id);
			cm.getPlayer().dropMessage("itemIndex =" + itemIndex);
        	if(ringnum > 0 && ringnum < 20){//ÿ�ֽ���
        		if(cm.haveItem(itemList[itemIndex][0],itemList[itemIndex][1])){
        			cm.gainItem(itemList[itemIndex][0],-itemList[itemIndex][1]);
        			for(var i = 0; i < giftList.length;i++){
        				cm.gainItem(giftList[i][0].giftList[i][1]);
        			}
        			cm.sendNext("��ϲ�������������̣��������");
        		}else{
        			cm.sendOk("�Բ�������û����������Ҫ�Ĳ��ϣ�����Ŷ��");
        		}
        	}else if(ringnum == 20){//���ս���
        		if(cm.haveItem(itemList[itemIndex][0],itemList[itemIndex][1])){
        			cm.gainItem(itemList[itemIndex][0],-itemList[itemIndex][1]);
        			for(var i = 0; i < finalGiftList.length;i++){
        				cm.gainItem(finalGiftList[i][0].finalGiftList[i][1]);
        			}
        			cm.sendNext("��ϲ�������������̣��������");
        		}else{
        			cm.sendOk("�Բ�������û����������Ҫ�Ĳ��ϣ�����Ŷ��");
        		}
        	}else{
				cm.getPlayer().dropMessage("��2��");
        		if(itemIndex = -1){
        			setOneTimeLog(ran,id);
					itemIndex = getOneTimeLog(ran, id);
        		}else{
        			changeOneTimeLog(ran,id);
        		}
				
				var itmeid = itemList[itemIndex][0];
        		var itemnum = itemList[itemIndex][1];
        		var strlen = "����ǰ�ܻ�����Ϊ�� "+ ringnum+1 +"\r\n\r\n";
        		strlen += " �������Ҫ�����Ѽ�"+ itemnum +"��#v" + itemid + "#\r\n�ڴ����ĺ���Ϣ";
        		cm.setBossLog("paoshang");
        		cm.sendOk(strlen);
        		cm.dispose();
        	}
        }else if(status == 2){
        	if(ringnum < 20){
	        	var ran = Math.floor(Math.random() * itemList.length);
	        	var itmeid = itemList[itemIndex][0];
	        	var itemnum = itemList[itemIndex][1];
	        	if(itemIndex = -1){
	        		setOneTimeLog(ran,id);
	        	}else{
	        		changeOneTimeLog(ran,id);
	        	}
	        	var strlen = "����ǰ�ܻ�����Ϊ�� "+ ringnum+1 +"\r\n\r\n";
	        	strlen += " �������Ҫ�����Ѽ�"+ itemnum +"��#v" + itemid + "#\r\n�ڴ����ĺ���Ϣ";
	        	cm.setBossLog("paoshang");
	        	cm.sendOk(strlen);
	        	cm.dispose();
	        }else{
	        	cm.sendOK("���Ѿ���������̣�");
	        	cm.dispose();
	        }
	    }
    }          
}
function getBossLog(boss,id) {
        var con = DBConPool.getConnection();
        var count = 0;
        var ps;
        ps = con.prepareStatement("SELECT COUNT(*) FROM bosslog WHERE characterid = ? AND bossid = ? AND lastattempt >= subtime(CURRENT_TIMESTAMP, '23:0:0.0')");
        ps.setInt(1, id);
        ps.setString(2, boss);
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
    var con1 = DBConPool.getConnection();
    var ps = con1.prepareStatement("insert into onetimelog (characterid, log) values (?,?)");
    ps.setInt(1, id);
    ps.setString(2, bossid);
    ps.executeUpdate();
    ps.close();
}

function changeOneTimeLog(bossid,id) {
    var con1 = DBConPool.getConnection();
    var ps = con1.prepareStatement("update onetimelog set log = ? where characterid = ?");
    ps.setString(1, bossid);
    ps.setInt(2, id);
    ps.executeUpdate();
    ps.close();
}

function getOneTimeLog(bossid,id) {
        var con = DBConPool.getConnection();
        var count = 0;
        var ps;
        ps = con.prepareStatement("SELECT log FROM onetimelog WHERE characterid = ?  AND log = ?");
        ps.setInt(1, id);
        ps.setString(2, bossid);
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

