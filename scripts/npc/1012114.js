//ͨ���������
var ͨ������ = 10;
var ͨ�ؾ��� = 1500;
var �������� = 10;
var ����Ԥ�� = [

	
];

var status = -1;

function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.�Ի�����();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;
    if (status == 0) {
        cm.sendSimple("����������ϻ������������Ҫ�ģ��Ҿ͸��㽱����˭���ҺóԵģ��Ҿͻ��ס˭��#r��Ա�޷������ͨ�ش���#k#b\r\n#L0##v4001101# x " + ͨ������ + " ͨ��#l\r\n#L1##v4001101# x 20 �� #v1002798##l#k\r\n#L3##bѡ���뿪#l");
    } else if (status == 1) {
        if (selection == 0) {
            if (!cm.isLeader()) {
                cm.sendNext("ֻ�жӳ������Ҳ�Ҫ��");
                cm.�Ի�����();
            } else {
                if (cm.haveItem(4001101, ͨ������)) {
					if(cm.haveItem(4001101, 50)){
						cm.setBossRankCount("��ȫ��Ҫ�ɾ�", 1);	
					}
                    cm.gainItem(4001101, -ͨ������);
                    cm.showEffect(true, "quest/party/clear");
                    cm.playSound(true, "Party1/Clear");
					if(cm.�ж��Ŷ�ÿ��("����") <= ��������){
						for (var i = 0; i < ����Ԥ��.length; i++) {
							gainPartyItemPro(����Ԥ��[i][0], ����Ԥ��[i][1], ����Ԥ��[i][2]);
						}
						cm.givePartyExp(ͨ�ؾ���);
						//cm.���Ŷ����(1);
					}
                   
					//���Ŷӷ�Ҷ
					////��Ҷ
					//cm.���Ŷӵ���(4002000,cm.�����(100));
					////�ƽ��Ҷ
					
                    //��¼ͨ����Ϣ
					cm.endPartyQuest(1200);
                    cm.warpParty(100000200);
                    cm.setBossRankCount("����", 1);
                    cm.givePartyBossLog("����");
                    cm.worldMessage(2, "[����-����] : ��ϲ " + cm.getPlayer().getName() + " ������飬����������");
                    cm.�Ի�����();
                } else {
                    cm.sendNext("��û����Ⱑ��");
                    cm.�Ի�����();
                }
            }
        } else if (selection == 1) {
            if (cm.haveItem(1002798, 1)) {
                cm.sendOk("���Ѿ�����");
            } else if (!cm.canHold(1002798, 1)) {
                cm.sendOk("���Ѿ�����");
            } else if (cm.haveItem(4001101, 20)) {
                cm.gainItem(4001101, -20); 
                cm.gainItem(1002798, 1);
            } else {
                cm.sendOk("����Ҫ20�������Ԫ��");
            }
            cm.�Ի�����();
        } else if (selection == 3) {
            cm.warp(100000200);
        }
    }
}


function gainItemPro(itemId, count, prop){
	var number = Math.random()*(100);
	if(number <= prop){
		cm.gainItem(itemId, count);
	}
}

function gainChrItemPro(itemId, count, prop, chr){
	var number = Math.random()*(100);
	if(number <= prop){
		//var item = cm.getNewEquip(itemId);
		chr.gainItem(itemId, count);
		chr.dropMessage(5, "��� " + cm.getItemName(itemId) + "x" + count);
	}
}

function gainPartyItemPro(itemId, count, prop){
	if (cm.getPlayer().getParty() == null || cm.getPlayer().getParty().getMembers().size() == 1) {
		gainChrItemPro(itemId, count, prop, cm.getPlayer());
		return;
	}
	var members = cm.getPlayer().getParty().getMembers();
	var it = members.iterator();
	while (it.hasNext()) {
		var chr = it.next();
		var curChar = cm.getPlayer().getMap().getCharacterById(chr.getId());
		if (curChar != null) {
			gainChrItemPro(itemId, count, prop, curChar);
		}
	}

}