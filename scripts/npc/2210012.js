var weapon = [4001272];
var req = [
    [4000889, 10],
    [4000883, 10],
    [4000881, 10],
    [4000885, 10],
    [4000878, 10],
    [4033124, 30],
    [4033156, 1],
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
            msg += "#i" + req[ii][0] + "##t" + req[ii][0] + "#x" + req[ii][1];
            if (ii % 3 == 0) {
                msg += "\r\n";
            }
        }
        msg += "\r\n";
        msg += "#g----------------------------------------------\r\n";
        for (var i = 0; i < weapon.length; i++) {
            msg += "#r#L" + i + "#";
            msg += "#i" + weapon[i] + "##t" + weapon[i] + "##l\r\n";
        }
        cm.sendSimple("#d���ܴ�������?����治��һ���ܴ���ȥ�ĵط�����̽�նӵ���˵������ɽ��������һ����Ѩ������һֻ�޴�֩��֧������һ�У�������̽�ն�û���뵽��������ɲ���һֱ֩��Ϳ���֧���һ�У���ǰ����������з�����һ���ܹ�������飬�Ǿ���������������˲��������������벻���ľ�Ȼ��һ���޴��Ѿ��ɾ���ʳ�˻���������������ë���Ȼ���������ĳ�Ѩ�����۲��˼��췢��������һ�����˵����ܣ��ٹ������������Ҫ��ɽϮ��̽�ն��ˣ����ҵÿ��������ǡ�����\r\n\r\n���������ʳ�˻������û��������Ҫ�ҵ����������⼸��Ĺ۲����ƺ�������һ�־޴�����ӵ�������������Ҫ����ɽ�������ȡ����ұ������������Ѽ���Щ��Ʒ�����޴�����ӵĻ����Ǿ���ʳ�˻��϶��ᱻ�����ճ����ģ����ǻ���һ����Ϊ��Ҫ�Ķ�������#z4031171#����Щ����˵�ڻ谵��ɳĮ�ش��ɣ������������ַ�ĩ���Ǵ����������ϡ�з�ĩ��˵�Ǹ��ط���ʲô..��...˹��???\r\n\r\n" + msg + "");
    } else if (status == 1) {
        sels = selection;
        if (!cm.canHold(weapon[sels])) {
            cm.sendNext("#r�����ռ䲻��");
            cm.dispose();
            return;
        }
        for (var i = 0; i < req.length; i++) {
            if (!cm.haveItem(req[i][0], req[i][1])) {
                cm.sendNext("#b������û�п���ȡ�Ĳ��ϡ�");
                cm.dispose();
                return;
            }
        }
        cm.sendYesNo("#b�Ƿ�Ҫ����#r #i" + weapon[sels] + "#? \r\n");
    } else if (status == 2) {
        for (var i = 0; i < req.length; i++) {
            cm.gainItem(req[i][0], -req[i][1]);
        }
        cm.gainItem(weapon[sels], 1);
        cm.sendNext("#b�Ѿ������� #i" + weapon[sels] + "#");
        cm.dispose();
    } else {
        cm.sendNext("#r��������: mode : " + mode + " status : " + status);
        cm.dispose();
    }
}