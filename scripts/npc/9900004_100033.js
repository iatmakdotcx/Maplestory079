var weapon = [

1332055, 
1332056, 
1482022,
1372034, 
1382039, 
1402039, 
1412027, 
1432040, 
1452045, 
1462040, 
1472055,
1092045,
1092046,
1092047,
1302064,
1492022,
1442125,
1422017

];

var req = [
	[4001126, 1000],
    [4031456, 20]
];

var ȫ���� = 5;
var ������ = 80;
var ħ���� = 80;

var sels;
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 0) {
        var msg = "";
        msg += "\r\n#d��Ҫ:#b\r\n\r\n���200W ";
        msg += "\r\n\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            msg += "#i" + req[ii][0] + "##t" + req[ii][0] + "#x" + req[ii][1];
            if (ii % 3 == 0) {
                msg += "\r\n";
            }
        }
        msg += "\r\n";
        msg += "#g----------------------------------------------\r\n";
		msg += "#b ��׼��ȫ����+" + ȫ���� + "��������+" + ������ + "��ħ����+" + ħ���� + "#k#r\r\n\t  ����ְͬҵ�Զ�������������ħ������#k\r\n";
        for (var i = 0; i < weapon.length; i++) {
            msg += "#r#L" + i + "#";
            msg += "#i" + weapon[i] + "##z" + weapon[i] + "##l\r\n";
        }
        cm.sendSimple("#r         #v4000110# ��������¯ #v4000110#\r\n ��Ҫ������\r\n" + msg + "");
    } else if (status == 1) {
	
        sels = selection;
        if (!cm.canHold(weapon[sels])) {
            cm.sendNext("#r�����ռ䲻��");
            cm.dispose();
            return;
        }
		

        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#b����û��#r#i" + req[i][0] + "##t" + req[i][0] + "#x" + req[i][1] + "");
                cm.dispose();
                return;
            }
           if (cm.getPlayer().getMeso() < 2000000){
                cm.sendNext("��Ҳ���");
                cm.dispose();
                return;
            }
        }
        cm.sendYesNo("#b�Ƿ�Ҫ��������#r #i" + weapon[sels] + "#? \r\n");
    } else if (status == 2) {
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
		var itemId = weapon[sels];
		if(itemId >= 1200000 && itemId < 1800000){
			var itemIdS = itemId + "";
			itemIdS = itemIdS.substr(0, 3);
			if(itemIdS.equals("147")){
				cm.������װ��(itemId, 0, 0, ȫ����, ȫ����, ȫ����, ȫ����, 0, 0, parseInt(������*40/100), parseInt(ħ����*40/100), 0, 0, 0, 0, 0, 0, 0);
			}else if(itemIdS.equals("148")){
				cm.������װ��(itemId, 0, 0, ȫ����, ȫ����, ȫ����, ȫ����, 0, 0, parseInt(������*75/100), parseInt(ħ����*75/100), 0, 0, 0, 0, 0, 0, 0);
			}else if(itemIdS.equals("149")){
				cm.������װ��(itemId, 0, 0, ȫ����, ȫ����, ȫ����, ȫ����, 0, 0, parseInt(������*75/100), parseInt(ħ����*75/100), 0, 0, 0, 0, 0, 0, 0);
			}else if(itemIdS.equals("133")){
				cm.������װ��(itemId, 0, 0, ȫ����, ȫ����, ȫ����, ȫ����, 0, 0, parseInt(������*90/100), parseInt(ħ����*90/100), 0, 0, 0, 0, 0, 0, 0);
			}else if(itemIdS.equals("137")){
				cm.������װ��(itemId, 0, 0, ȫ����, ȫ����, ȫ����, ȫ����, 0, 0, parseInt(������*120/100), parseInt(ħ����*120/100), 0, 0, 0, 0, 0, 0, 0);
			}else if(itemIdS.equals("138")){
				cm.������װ��(itemId, 0, 0, ȫ����, ȫ����, ȫ����, ȫ����, 0, 0, parseInt(������*120/100), parseInt(ħ����*120/100), 0, 0, 0, 0, 0, 0, 0);
			}else{
				cm.������װ��(itemId, 0, 0, ȫ����, ȫ����, ȫ����, ȫ����, 0, 0, ������, ħ����, 0, 0, 0, 0, 0, 0, 0);
			}
		}else{
			cm.gainItem(itemId, 1);
		}
        //cm.gainItem(weapon[sels], 1);
		cm.gainMeso(-2000000);
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���ϳ����ġ�" + " : " + "[" + cm.getChar().getName() + "]�ɹ��ϳ���60����������")); 
        cm.sendNext("#b�Ѿ����������� #i" + weapon[sels] + "#");
        cm.dispose();
    } else {
        //cm.sendNext("#r��������: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}