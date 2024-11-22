/*
SnailMS�ű�������
*/
importClass(Packages.database.DBConPool);
importClass(java.util.Map);
importClass(java.util.EnumMap);
importClass(java.util.ArrayList);

var chrName = "";
var oldJobId = 0;
var newJobId = 0;
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
		var text = "�������������\r\n\r\n";
		
		cm.sendGetText(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		chrName = cm.getText();
		if(chrName == "" || !��ɫ�Ƿ����(chrName)){
			cm.sendOk("�����������");
			cm.dispose();
			return;
		}
		oldJobId = ��ѯְҵID(chrName);
		var text = "��� #b" + chrName  + "#k �ĵ�ǰְҵIDΪ #b" + oldJobId + " #k��������ҪΪ��תְ��ְҵID";
		
		cm.sendGetNumber(text, oldJobId, 0, 3000);
		
	} else if (status == 2) {
		if(selection < 0){
			cm.sendOk("��������ȷ��ְҵID");
			cm.dispose();
			return;
		}
		newJobId = selection;
		var text = "ȷ��Ҫ����� #b" + chrName + "#k ��ְҵID����Ϊ #b" + newJobId + "#k ��";
		cm.sendYesNo(text);
	} else if (status == 3) {
		if(newJobId == oldJobId){
			cm.sendOk("#r����ְҵID��һ������ת�˸���į");
			cm.dispose();
			return;
		}
		var chr = �Ƿ�����(chrName);
		if(chr != null){//����
			cm.playerMessage(6, "����");//����
			var skillMap = chr.getSkills();
			var skillIdList = new ArrayList();
			cm.playerMessage(6, "skillMap" + skillMap);//����
			var i = 0;
			for(var key in skillMap){
				i++;
				if(key != null && Packages.constants.SkillConstants.isJobSkill(key.getId(), chr.getJob())){
					skillIdList.add(key.getId());
					//chr.changeSkillLevel(Packages.client.SkillFactory.getSkill(key.getId()), 0, 0);
				}
			}
			if(!skillIdList.isEmpty()){
				for(var i = 0; i < skillIdList.size(); i++){
					chr.changeSkillLevel(Packages.client.SkillFactory.getSkill(skillIdList.get(i)), 0, 0);
				}
			}
			
			/* var entryList = skillMap.entrySet();
			var entryIt = entryList.iterator();
			while(entryIt.hasNext()){
				var entry = entryIt.next();
				if(entry != null && Packages.constants.SkillConstants.isJobSkill(entry.getKey().getId(), chr.getJob())){
					chr.changeSkillLevel(Packages.client.SkillFactory.getSkill(entry.getKey().getId()), 0, 0);
				}
			} */
			var level = chr.getLevel();
			var sp = 0;
			var ap = chr.getRemainingAp();
			var str = chr.getStr();
			var dex = chr.getDex();
			var luk = chr.getLuk();
			var _int = chr.getInt();
			ap += (str - 4) + (dex - 4) + (luk - 4) + (_int - 4);
			
			if(level > 8){
				sp = (level - 8) * 3;
				if(level >= 30){
					sp++;
				}
				if(level >= 70){
					sp++;
				}
				if(level >= 120){
					sp++;
					sp++;
					sp++;
				}
			}else{
				sp = 6;
			}
			cm.playerMessage(6, "sp = " + sp);//����
			chr.changeJob(newJobId);
			chr.setStr(4);
			chr.setDex(4);
			chr.setLuk(4);
			chr.setInt(4);
			chr.setRemainingAp(ap);
			var statupdate = new EnumMap(Packages.client.MapleStat.class);
			var stat = chr.getStat();
			statupdate.put(Packages.client.MapleStat.STR, chr.getStr());
			statupdate.put(Packages.client.MapleStat.DEX, chr.getDex());
			statupdate.put(Packages.client.MapleStat.INT, chr.getInt());
			statupdate.put(Packages.client.MapleStat.LUK, chr.getLuk());
			//statupdate.put(Packages.client.MapleStat.AVAILABLEAP, chr.getRemainingAp());
			chr.getClient().sendPacket(Packages.tools.MaplePacketCreator.updatePlayerStats(statupdate, true, chr));
			chr.getClient().sendPacket(Packages.tools.MaplePacketCreator.updateAp(chr, false));
			chr.setRemainingSp(sp);
			chr.getClient().sendPacket(Packages.tools.MaplePacketCreator.updateSp(chr, false));
		}else{//������
			var con = DBConPool.getConnection();
			var ps;
			var chrId = -1;
			var level = 0;
			var str = 4;
            var dex = 4;
            var luk = 4;
            var _int = 4;
            var ap = 0;
			ps = con.prepareStatement("SELECT * FROM characters WHERE name = ?");
			ps.setString(1, chrName);
			var rs = ps.executeQuery();
			if(rs.next()){
				chrId = rs.getInt("id");
				level = rs.getInt("level");
				str = rs.getInt("str");
                dex = rs.getInt("dex");
                luk = rs.getInt("luk");
                _int = rs.getInt("int");
                ap = rs.getInt("ap");
			}
			if(chrId == -1){
				cm.sendOk("�����Ҳ�����ɫ");
				cm.dispose();
				return;
			}
			ps = con.prepareStatement("SELECT * FROM skills WHERE characterid = ?");
			ps.setInt(1, chrId);
			rs = ps.executeQuery();
			while(rs.next()){
				var skillId = rs.getInt("skillid");
				if(Packages.constants.SkillConstants.isJobSkill(skillId, oldJobId)){
					var ps0 = con.prepareStatement("Delete FROM skills WHERE characterid = ? AND skillid = ?");
					ps0.setInt(1, chrId);
					ps0.setInt(2, skillId);
					ps0.executeUpdate();
					ps0.close();
				}
			}
			var sp = 0;
			if(level > 8){
				sp = (level - 8) * 3;
				if(level >= 30){
					sp++;
				}
				if(level >= 70){
					sp++;
				}
				if(level >= 120){
					sp++;
					sp++;
					sp++;
				}
			}else{
				sp = 6;
			}
			ap += (str - 4) + (dex - 4) + (luk - 4) + (_int - 4);
			
			con = DBConPool.getConnection();
			ps = con.prepareStatement("UPDATE characters SET job = ? , sp = ? , ap = ? , str = ? , dex = ? , luk = ? , `int` = ? WHERE id = ?");
			ps.setInt(1, newJobId);
			cm.playerMessage(6, "newJobId = " + newJobId);//����
			ps.setString(2, sp + ",0,0,0,0,0,0,0,0,0");
			cm.playerMessage(6, "sp = " + sp);//����
			ps.setInt(3, ap);
			ps.setInt(4, 4);
            ps.setInt(5, 4);
            ps.setInt(6, 4);
            ps.setInt(7, 4);
            ps.setInt(8, chrId);
			cm.playerMessage(6, "chrId = " + chrId);//����
			ps.executeUpdate();
			ps.close();
			rs.close();
		}
		cm.sendOk("תְ�ɹ���");
	} else {
		cm.dispose();
		return;
	}
}


function ��ɫ�Ƿ����(chrName){
	var con = DBConPool.getConnection();
	var ps;
	ps = con.prepareStatement("SELECT * FROM characters WHERE name = ?");
	ps.setString(1, chrName);
	var rs = ps.executeQuery();
	if(rs.next()){
		ps.close();
		rs.close();
		return true;
	}
	ps.close();
	rs.close();
	return false;
}

function ��ѯְҵID(chrName){
	var con = DBConPool.getConnection();
	var ps;
	ps = con.prepareStatement("SELECT * FROM characters WHERE name = ?");
	ps.setString(1, chrName);
	var rs = ps.executeQuery();
	var jobId = 0;
	if(rs.next()){
		jobId = rs.getInt("job");
	}
	ps.close();
	rs.close();
	return jobId;
}

function �Ƿ�����(chrName){
	var csList = Packages.handling.channel.ChannelServer.getAllInstances();
	var csIt = csList.iterator();
	while(csIt.hasNext()){
		var cs = csIt.next();
		if(cs != null){
			var chrList = cs.getPlayerStorage().getAllCharactersThreadSafe();
			var chrIt = chrList.iterator();
			while(chrIt.hasNext()){
				var chr = chrIt.next();
				if(chr != null && chr.getName() == chrName){
					return chr;
				}
			}
		}
	}
	return null;
}
