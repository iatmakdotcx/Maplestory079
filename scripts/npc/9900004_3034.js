var weapon = [

//10�����ɫ����
    1102944,
	1102943,  
	1102942,
	1102941,
	1102940,
	1082699,
	1082698,
	1082697,
    1082696,
    1082695,
	1073162,
	1073161,
	1073160,
	1073159,
	1073158,
	1053067,
	1053066,
	1053065,
	1053064,
	1053063,
	1004812,
	1004811,
	1004810,
	1004809,
	1004808

];
var req = [
    [4310014, 5000],//��ɫ��Ʊ
    [1003797, 1],//��ɫ��ţ��
	[1003798, 1],//��ɫ��ţ��
	[1003799, 1],//��ɫ��ţ��
	[1003800, 1],//��ɫ��ţ��
    [1003801, 1],//��ɫ��ţ��
	[1062165, 1],//��ɫ��ţ��
	[1062166, 1],//��ɫ��ţ��
	[1062167, 1],//��ɫ��ţ��
	[1062168, 1],//��ɫ��ţ��
	[1062169, 1],//��ɫ��ţ��
	[1042254, 1],//��ɫ��ţ��
	[1042255, 1],//��ɫ��ţ��
	[1042256, 1],//��ɫ��ţ��
	[1042257, 1],//��ɫ��ţ��
	[1042258, 1]//��ɫ��ţ��
	//[4000040, 1],//Ģ����ѿ��
	//[4001002, 1],//С˵��
	//[4310030, 20],//�˶����
	//[4031546, 1],//С���
	
    //[4310027, 5],
];
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
        msg += "\r\n#d��Ҫ:#b ";
        msg += "\r\n\r\n";
        for (var ii = 0; ii < req.length; ii++) {
            msg += "#i" + req[ii][0] + "##z" + req[ii][0] + "#x" + req[ii][1];
            if (ii % 3 == 0) {
                msg += "\r\n";
            }
        }
        msg += "\r\n";
        msg += "#g----------------------------------------------\r\n";
        for (var i = 0; i < weapon.length; i++) {
            msg += "#r#L" + i + "#";
            msg += "#i" + weapon[i] + "##z" + weapon[i] + "##l\r\n";
        }
        cm.sendSimple("#b#e���ã�����#r������װ#b��Ҫ���²��ϣ�û�в��Ͽɲ���Ŷ\r\n\r\n" + msg + "");
    } else if (status == 1) {
        sels = selection;
        if (!cm.canHold(weapon[sels])) {
            cm.sendNext("#r�����ռ䲻��");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#b������û��#r�㹻�Ĳ���#k�������ռ�����ȥ�ɣ�");
                cm.dispose();
                return;
            }
        }
        cm.sendYesNo("#b�Ƿ�Ҫ�һ�#r10����ϵ��#r #i" + weapon[sels] + "#? \r\n");
    } else if (status == 2) {
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        cm.gainItem(weapon[sels], 1);
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���ϳ����ġ�" + " : " + "[" + cm.getChar().getName() + "]�ɹ��ϳ���10����װ������")); 
        cm.sendNext("#b�Ѿ��һ����ˣ���ǰ�������鿴 #i" + weapon[sels] + "#");
        cm.dispose();
    } else {
        //cm.sendNext("#r��������: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}