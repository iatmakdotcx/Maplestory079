var maps = Array(952010000, 952040000, 952030000, 952020000, 953000000, 953010000, 953030000, 953040000, 953050000, 954000000, 954010000, 954020000, 954030000, 954040000, 954050000, 954060000);
var minLevel = Array(45, 60, 70, 80, 85, 90, 120, 130, 150, 160, 175, 180, 185, 190, 195,205);
var maxLevel = Array(55, 90, 110, 130, 150, 170, 180, 200, 200, 200, 200, 200, 220, 240, 245,255);

function start() {
    var selStr = "��Ҫ��һ�ֵ��ν���?\r\n\r\n#b";
    for (var i = 0; i < maps.length; i++) {
	selStr += "#L" + i + "##m" + maps[i] + "# (����." + minLevel[i] + " - " + maxLevel[i] + ")#l\r\n";
    }
    cm.sendSimple(selStr);
}

function action(mode, type, selection) {
    if (mode == 1 && selection >= 0 && selection < maps.length) {
        if (cm.getParty() == null || !cm.isLeader()) {
			cm.sendOk("���öӳ�����.");
		} else if (cm.itemQuantity(4001516) < 1 ) { 
			cm.sendOk("��û��#v4001516#,���ܽ��룡~");
			cm.dispose();
		} else {

			var party = cm.getParty().getMembers().iterator();
			var next = true;
			while (party.hasNext()) {
				var cPlayer = party.next();
				var chr = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
				if(chr != null && !chr.haveItem(4001516)){
					cm.sendOk("�������� #r" + chr.getName() + "#k ����û��#i" + 4001516 + ":#���޷�����~");
					cm.dispose();
				}
				if (cPlayer.getLevel() < minLevel[selection] || cPlayer.getMapid() != cm.getMapId()) {
					cm.playerMessage(5, "Ҫ��ȼ���" + minLevel[selection] + ",��ǰ��ͽ�ɫ�ȼ���" + cPlayer.getLevel());//����
					next = false;
				} 
			}
			if (!next) {
				cm.sendOk("��ȷ�����ж�Ա���ڵ�ͼ�ϣ�������ȷ�ļ���Ҫ��.");
			} else {
				var em = cm.getEventManager("MonsterPark");
				cm.dispose();	
				if (em == null || em.getInstance("MonsterPark" + maps[selection]) != null) {
					cm.sendOk("�����Ѿ�����ս��.");
				} else {
					var party = cm.getParty().getMembers().iterator();
					while (party.hasNext()) {
						var cPlayer = party.next();
						var chr = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
						if(chr != null){
							chr.gainItem(4001516, -1);
						}
						
					}
					
					//cm.gainItem(4001516, -1);
					em.startInstance_Party("" + maps[selection], cm.getPlayer());
				}
			}
		}
    }
    cm.dispose();
}

