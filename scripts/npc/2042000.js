/* ==================
 �ű�����:  ������    
 ��Ȩ����Ϸ���Ŷ�     
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
var status = 0;
var fbmc = "������껪";//��������
var minLevel = 30;//��͵ȼ�,�����ô���,�����ȴ����޳�
var maxLevel = 200;//��ߵȼ�,�����ô���,�����ȴ����޳�
var minPartySize = 2;//��VS������
var eventname = "cpq";//���������ļ�

function start() {
    status = -1;
    action(1, 0, 0);
}


function action(mode, type, selection) {
    if (mode == 1)
        status++;
    else
        cm.dispose();
    if (status == 0 && mode == 1) {
        var selStr = "��ѡ��һ������Ҫ�������껪ս�����أ�\r\n#L100# ð�յ��������Ʒ�һ�#l";
	var found = false;
        for (var i = 0; i < 6; i++){
            if (getCPQField(i+1) != "") {
                selStr += "\r\n#b#L" + i + "# " + getCPQField(i+1) + "#l#k";
		found = true;
            }
        }
        if (cm.getParty() == null) {
            cm.sendSimple("������������ҡ�\r\n#L100#ð�յ�����Ҷһ�#l");
        } else {
            if (cm.isLeader()) {

		if (found) {
                    cm.sendSimple(selStr);
		} else {
		    cm.sendSimple("Ŀǰû�з���.\r\n#L100#ð�յ������#l");
		}
            } else {
                cm.sendSimple("�����Ķӳ�������\r\n#L100#ð�յ������#l");
            }
        }
    } else if (status == 1) {
	if (selection == 100) {
	    cm.sendSimple("#b#L0#50��#v4001129##z4001129#�һ�#v1122007##z1122007##l\r\n\r\n");
	} else if (selection >= 0 && selection < 6) {
		
		if(selection > 3 ){
		minPartySize = 3;	
		}
		
	    var mapid = 980000000+((selection+1)*100);
            if (cm.getEventManager("cpq").getInstance("cpq"+mapid) == null) {
                if ((cm.getParty() != null && 1 < cm.getParty().getMembers().size() && cm.getParty().getMembers().size() < (selection == 4 || selection == 5 || selection == 8 ? 4 : 3)) || cm.getPlayer().isGM()) {
                    if (checkLevelsAndMap() ==false ) {
                        cm.sendOk("�����ﲻ����");
                        cm.dispose();
                    } else {
                        cm.getEventManager("cpq").startInstance(""+mapid, cm.getPlayer());
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("���Ķ�����������,��Ҫ"+minPartySize+"�����ϲſ��Լ��껪��");
					cm.dispose();
                }
            } else if (cm.getParty() != null && cm.getEventManager("cpq").getInstance("cpq"+mapid).getPlayerCount() == cm.getParty().getMembers().size()) {
                if (checkLevelsAndMap() ==false ) {
                        cm.sendOk("�����ﲻ����");
                        cm.dispose();
                } else {
					var pt = cm.getPlayer().getParty();
					if (pt.getMembers().size() < minPartySize) {
						cm.sendOk("��Ҫ"+minPartySize+"�����ϲſ��Լ��껪����");
						cm.dispose();
					} else {
                    //Send challenge packet here
                    var owner = cm.getChannelServer().getPlayerStorage().getCharacterByName(cm.getEventManager("cpq").getInstance("cpq"+mapid).getPlayers().get(0).getParty().getLeader().getName());
                    owner.addCarnivalRequest(cm.getCarnivalChallenge(cm.getChar()));
                    //if (owner.getConversation() != 1) {
                        cm.openNpc(owner.getClient(), 2042001);
                    //}
                    cm.sendOk("������ս�Ѿ����͡�");
                    cm.dispose();
                }
				}
            } else {
                cm.sendOk("���������������");
                cm.dispose();
            }
	} else {
	    cm.dispose();
	}
	} else if (status == 2) {
	    if (selection == 0) {
		if (!cm.haveItem(4001129,50)) {
		    cm.sendOk("�ܱ�Ǹ����û��#b50#k��#v4001129##z4001129#");
			cm.dispose();
		} else if (!cm.canHold(1122007,1)) {		
		    cm.sendOk("�����ռ䲻��.");
			cm.dispose();
		} else {
		    cm.������װ��(1122007, 0, 0, 2, 2, 2, 2, 0, 0, 2, 2, 30, 30, 0, 0, 0, 0);//id, ����, ����, ����, ����, hp, mp, �﹥, ħ��, ���, ħ��, �ر�, ����, ��Ծ, �ƶ��ٶ�
		    cm.gainItem(4001129,-50);
			cm.dispose();
		}
		cm.dispose();
	    } else if (selection == 1) {
		if (!cm.haveItem(4001129,30)) {
		    cm.sendOk("�ܱ�Ǹ����û��#b30#k��#v4001129##z4001129#");
			cm.dispose();
		} else if (!cm.canHold(2041211,1)) {
		    cm.sendOk("�����ռ䲻��.");
			cm.dispose();
		} else {
		    cm.gainItem(2041211,1);
		    cm.gainItem(4001129,-30);
			cm.dispose();
		}
	    }
        }
}

function checkLevelsAndMap() {
/*     var party = cm.getParty().getMembers();
    var mapId = cm.getMapId();
    var valid = 0;
    var inMap = 0;

    var it = party.iterator();
    while (it.hasNext()) {
        var cPlayer = it.next();
        if (!(cPlayer.getLevel() >= lowestlevel && cPlayer.getLevel() <= highestlevel)) {
            valid = 1;
        }
        if (cPlayer.getMapid() != mapId) {
            valid = 2;
        }
    }
    return valid; */
//-----------------------------------------------------------------------------	
				var party = cm.getParty().getMembers();
			var inMap = cm.partyMembersInMap();
			var levelValid = 0;
			for (var i = 0; i < party.size(); i++) {
				if (party.get(i).getLevel() >= minLevel && party.get(i).getLevel() <= maxLevel)
					levelValid++;
			}
			if (inMap < minPartySize || inMap > minPartySize) {
				cm.sendOk("��Ķ�����������" + minPartySize + "��.�����Ķ�����Ա�ټ��ڽ��븱��.");
				cm.dispose();
				return false;
			} else if (levelValid != inMap) {
				cm.sendOk("��ȷ����Ķ�����������Ա("+minPartySize +") λ ���ڱ���ͼ������С�ȼ��� " + minLevel + " �� " + maxLevel + "֮��.");
				cm.dispose();
				return false;
			}
	//-------------------------------------------------------------------------------------
	
	return true;
	
	
}

function getCPQField(fieldnumber) {
    var status = "";
    var event1 = cm.getEventManager("cpq");
    if (event1 != null) {
        var event = event1.getInstance("cpq"+(980000000+(fieldnumber*100)));
        if (event == null && fieldnumber != 5 && fieldnumber != 6 && fieldnumber != 9) {
            status = "���껪��ս���� "+fieldnumber+"(2v2)";   // 2 3  4 7  8
        } else if (event == null) {
            status = "���껪��ս���� "+fieldnumber+"(3v3)";
        } else if (event != null && (event.getProperty("started").equals("false"))) {
            var averagelevel = 0;
            for (i = 0; i < event.getPlayerCount(); i++) {
                averagelevel += event.getPlayers().get(i).getLevel();
            }
            averagelevel /= event.getPlayerCount();
            status = event.getPlayers().get(0).getParty().getLeader().getName()+"/"+event.getPlayerCount()+"��/ƽ���ȼ� "+averagelevel;
        }
    }
    return status;
}