/* ==================
 �ű�����:  NPC	    
 �ű����ߣ�����     
 ��ϵ��ʽ��2412614144
 =====================
 */

var status = 0;
//��������
var fbmc = "��ս������ɮ";

var eventname = "shaoling";//���������ļ�

var maxjinbi = 1000;//�ж���������

var minLevel = 120;
var maxLevel = 200;//�ȼ�����

var minPartySize = 1;
var maxPartySize = 6;//��������

var open = true;//false true//��������

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
            text += "#k\t\t\t��ӭ����#b" + fbmc + "#k�Ĵ��ſ�\r\n\r\n";
            text += "����Ҫ�����£�\r\n";
			text += "�ٵȼ����ƣ�#r" + minLevel + "#k - #r" + maxLevel + "#k��\t\t���������ƣ�#r" + minPartySize + " #k- #r" + maxPartySize + "#k��Ա\r\n����ս������ÿ������#r2#k�Σ�\r\n";
			text += "#L1##r��ʼ " + fbmc + "#l\r\n\r\n";
            //text += "#L2##r����������#k" + maxjinbi + "���/��#l		#L4#��ʼ��������\r\n\r\n";
			//text += "#L3##r��Ҫ�һ�#v1022073##z1022073##l\r\n\r\n";
            cm.sendSimple(text);
        } else if (selection == 1) {
	var party = cm.getPlayer().getParty();	
      if (!cm.isLeader()) { // Not Party Leader
	   cm.sendSimple("���������ս���� #b�ӳ�#k ����̸."); 
	   cm.dispose();
	} else if (cm.party.getBossLog("shaoling") >= 2) {
		cm.sendOk("����,�޶�ÿ��ֻ����ս2�Σ�");
		cm.dispose();
	} else if (cm.getParty() == null) { // No Party
	   cm.sendSimple("��ò��û�дﵽҪ��...:\r\n\r\n#r��ҳ�ԱҪ��: " + minPartySize + " , ÿ���˵ĵȼ������� " + minLevel + " �� �ȼ� " + maxLevel + ".");
	   cm.dispose();
	}else if(!cm.getPlayerCount(702060000) <= 0) {//�ж�������û����
	   cm.sendOk("����������ʱ�޷����룡!");
       cm.dispose();

	} else {
		cm.getMap(702060000).resetFully();//��ͼˢ��
		cm.setBossLog("shaoling");
	    var party = cm.getParty().getMembers();
	    var mapId = cm.getMapId();
	    var next = true;
	    var levelValid = 0;
	    var inMap = 0;
	    var it = party.iterator();
	    while (it.hasNext()) {
		var cPlayer = it.next();
		if ((cPlayer.getLevel() >= minLevel) && (cPlayer.getLevel() <= maxLevel)) {
		    levelValid += 1;
		} else {
		    next = false;
		}
		if (cPlayer.getMapid() == mapId) {
		    inMap += (cPlayer.getJobId() == 900 ? 6 : 1);
		}
	    }
	    if (party.size() > maxPartySize || inMap < minPartySize) {
		next = false;
	    }
	    if (next) {
		var em = cm.getEventManager("shaoling");
		if (em == null) {
		    cm.sendSimple("�Ҳ����ű�������GM#b\r\n");//#L0#��Ҫ�һ����Ѻ۵��۾�#l
		} else {
		    var prop = em.getProperty("state");
		    if (prop.equals("0") || prop == null) {
			em.startInstance(cm.getParty(), cm.getMap());
			cm.dispose();
			return;
		    } else {
			cm.sendSimple("���������Ѿ������� #r������ս��#k �볢�Ի�Ƶ�����ߵ�����������ɡ�");//#b\r\n#L0#��Ҫ�һ����Ѻ۵��۾�#l
		    cm.dispose();
			}
		}
	    } else {
		cm.sendSimple("��Ķ���ò��û�дﵽҪ��...:\r\n\r\n#rҪ��: " + minPartySize + " ��ҳ�Ա, ÿ���˵ĵȼ������� " + minLevel + " �� �ȼ� " + maxLevel + ".");//#b\r\n#L0#��Ҫ�һ����Ѻ۵��۾�#l
		cm.dispose();
	    }
	cm.dispose();
    }		
        } else if (selection == 2) {
		if (cm.getMeso() >= maxjinbi){//�ж϶��ٽ��
        cm.gainMeso(- maxjinbi );//�۳����ٽ��
	    cm.laba(cm.getPlayer().getName() + " [������]" + " : " + "[" + fbmc + "]��Ҫ��ʿһ�����",11);
        cm.dispose();
        }else{
        cm.sendOk("���ð�ձҲ���" + maxjinbi + "���޷�����������");
        cm.dispose();
		}
		} else if (selection == 4) {
		cm.openNpc(9310019,0);
        } else if (selection == 3) {
	var cmp = cm.getPlayer().getOneInfo(1202, "cmp");
	if (cm.haveItem(1022073,1)) {
	    cm.sendOk("�����ˡ�");
	} else if (!cm.canHold(1022073,1)) {
	    cm.sendOk("��ճ�һЩװ�����ռ䡣");
	} else if (cmp != null && parseInt(cmp) >= 100) {
	    if (cm.getPlayer().getOneInfo(1202, "have") == null || cm.getPlayer().getOneInfo(1202, "have").equals("0")) {
	    	cm.gainItem(1022073, 1, true); //should handle automatically for "have"
	    } else {
		cm.sendOk("���Ѿ���#t1022073#��.");
	    }
	} else {
	    cm.sendOk("�㻹û����#r100��#k���� Ŀǰ����: #r" + (cmp == null ? "0" : cmp) + "#k��");
	}
	cm.dispose();
					}	
	}
    }




