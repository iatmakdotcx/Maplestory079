/*
SnailMS�ű�������
*/
importClass(Packages.handling.channel.ChannelServer);
importClass(Packages.database.DBConPool);

var itemId = 0;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("�Ի�������");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		//�������д�ű���һ��Ҫ������
		
		var text = "��������Ҫɾ���ĵ���ID��\r\n\r\n";
		cm.sendGetNumber(text, 0, 0, 9999999);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection > 0 && cm.getNewEquip(selection) != null){
			itemId = selection;
			var text = "ȷ��Ҫɾ��������ҵ�#v" + itemId + "##z" + itemId + "#��";
			cm.sendYesNo(text);
			
		}else{
			cm.sendOk("�Ҳ�������Ʒ����������ȷ��ID");
			cm.dispose();
			return;
		}
		
	} else if(status == 2){
		var count = ɾ��������ҵ���(itemId);
		var text = "�������� " + count + " ��������ң���ɾ����#v" + itemId + "#";
		if(ɾ��������ҵ���_���ݿ�(itemId)){
			text += "��ͬʱ�ɹ�����������������ҵ�#v" + itemId + "#��\r\n";
		}
		cm.sendOk(text);
		cm.dispose();
	} else {
		cm.dispose();
		return;
	}
}

function ɾ��������ҵ���(itemId0){
	var csList = ChannelServer.getAllInstances();
	var csIt = csList.iterator();
	var i = 0;
	while (csIt.hasNext()){
		var cs = csIt.next();
		var chrIt = cs.getPlayerStorage().getAllCharacters().iterator();
		while (chrIt.hasNext()){
			chrIt.next().removeAll(itemId0, true, true);
			i++;
		}
	}
	return i;
	
}

function ɾ��������ҵ���_���ݿ�(itemId0){
	var con = DBConPool.getConnection();
	var ps;
	ps = con.prepareStatement("SELECT * FROM inventoryitems WHERE itemid = ?");
	//cm.getPlayer().dropMessage(cm.getPlayer().getId() + "");//����
	ps.setInt(1, itemId0);
	var rs = ps.executeQuery();
	if(rs.next()){
		var sqlstr = " delete from inventoryitems where itemid =" + itemId0 + "";
        ps.executeUpdate(sqlstr);
		return true;
	}
	return false;
	
}

