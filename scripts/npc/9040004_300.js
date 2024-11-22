

var MapleInventoryManipulator = Java.type('server.MapleInventoryManipulator');
var MapleItemInformationProvider = Java.type('server.MapleItemInformationProvider');
var DatabaseConnection = Java.type('database.DatabaseConnection');

//����������-----------------------------------------------------
var itemId = 3994036;
var bossLogName = "FSCS";
var rankMaxCount = 30;


//-----------------------------------------------------
var ul_yStar = "#fItem/Etc/0427/04270003/Icon9/5#";  //
var status = -1;//ģ��״̬
var chr =null;
var say = "";
var tempAllCount = 0;//

function start(){
    chr = cm.getPlayer();
	tempAllCount = QueryAllCount();
    action(1,0,0);
}

function action(mode, type, selection) {
    if(mode == -1){cm.dispose();return;}
    if(status == 0 && mode == 0) {cm.dispose();return;}
    if(mode == 1) {status++;} else {status--;}

    if(status == 0){
		say = _getTitle("��������");
		
		say += "\t\t\t\t\t\t˵���� #l\r\n#r���������ÿ����24:00��ֹ���㣬����ǰ����Ⱥ���ý���\r\n #k#eÿ�ܷ��������\r\n\r\n #rÿ�ܷ�����������һ����#v3992025#*15000\r\n\r\n #dÿ�ܷ����������ڶ����� #v3992025#*10000\r\n\r\n #gÿ�ܷ�����������������#v3992025#*5000\r\n\r\n"  
		say += "\t\t\t\t\t#L2#�鿴����#l"
		
		
        cm.sendSimple(say);
    }else if(status == 1){
		if(selection == 1){
			if(cm.itemQuantity(itemId) > 0){
				say  = "";
				
				cm.sendYesNo(say);
			}else{
				cm.sendOk("��û��#b#v"+itemId+"##z"+itemId+"##k����");
				cm.dispose();
				return;
			}
		}else{
			say = _getTitle("��������");
			say += "\r\n";
			var rankList = QueryBossLogs();
			for(var i = 0;i<rankList.length;i++){
			
				say += "\t"+ (i+1)+ "\t#b"+extend(rankList[i].chrName,12)+"    #r"+rankList[i].count+"��\r\n#k";
			}
			cm.sendOk(say);
			cm.dispose();
		}
	}else if(status == 2){
		
		//cm.getPlayer().getBossLog("bossLogName",1)
		var toCount = cm.itemQuantity(itemId);
		chr.setBossLog(bossLogName,1,toCount);
		cm.gainItem(itemId,-toCount);
		
		cm.dispose();
    }else{
        cm.dispose();
    }
}

var ul_cloud = "#fItem/Etc/0403/04031309/info/iconRaw#";  //
function _getTitle(t){
	return " "+ul_cloud+ul_cloud+ul_cloud+ul_cloud +"#r#e��"+ t+"��#k#n"+ul_cloud+ul_cloud+ul_cloud+ul_cloud +"\r\n\r\n";
}


function QueryBossLogs() {
	var con = DatabaseConnection.getConnection();
	
	var ps;
	var sql = "Select  characters.id,characters.`name`,BossLog.count from BossLog  Left Join characters On characters.accountid = BossLog.characterid where BossLog.bossid = 'FSCS' and BossLog.count > 0 group by characters.accountid ORDER BY BossLog.count DESC LIMIT "+rankMaxCount;
	ps = con.prepareStatement(sql);
	
	var res = ps.executeQuery();
    var _result = [];
    while(res.next()){
        _result.push({
            chrId:res.getInt("id"),
            chrName:res.getString("name"),
            count:res.getInt("count"),
        });
    }
	
	res.close();
	ps.close();
	return _result;
}

function QueryAllCount(){
	var con = DatabaseConnection.getConnection();
	var count = 0;
	var ps;
	var sql = "Select sum(count) as `count` from BossLog where BossLog.bossid = 'FSCS'";
	ps = con.prepareStatement(sql);
	var res = ps.executeQuery();

	if (res.next()) {
		count = res.getInt(1);
	} else {
		count = -1;
	}
	res.close();
	ps.close();
	return count;
}


function extend(text,num){//�ո�

	text = text+"";
	var curLength = text.length;
	var tempText = text.match(/[\u4E00-\u9FA5]/g);
	if(tempText != null){
		curLength += Number(text.match(/[\u4E00-\u9FA5]/g).length);
	}

	if(curLength < num){
		for(var i =0;i<num-curLength;i++){
			text += " ";
		}
	}
	return text;
}