/*
���Ǹ�����ð�յ�˽�������ļ���һ����
QQ ��390824898
*/
var status = 0;
var choice;
var scrolls = Array(1912000,1912011,1912005,1912012,1912028,1912025,1912026,1912027,1912024);
/*
*  С ������
*/
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1)
        cm.dispose();
    else {
        if (status == 0 && mode == 0) {
            cm.dispose();
            return;
        } else if (status >= 1 && mode == 0) {
            cm.sendOk("�ðɣ���ӭ�´μ������٣�.");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;

        if (status == 0) {
            var choices = "\r\n�����������ѡ��Ĺ�����Ʒ: ";
            for (var i = 0; i < scrolls.length; i++) {
                    choices += "\r\n#L" + i + "##v" + scrolls[i] + "##t" + scrolls[i] + "##l";
            }
            cm.sendSimple("�ҿ��Ը������������ﰰ�� ,������Ҫ��һ���أ�����ѡ��ɣ�ÿ����Ҫ500���ң�." + choices);
        } else if (status == 1) {
            cm.sendYesNo("��ȷ����Ҫ���������Ʒô���⽫������500���ң���" +"\r\n#v" + scrolls[selection] + "##t" + scrolls[selection] + "#");
            choice = selection;
        } else if (status == 2) {
            if (cm.getMeso() >= 5000000) {
                cm.gainMeso(-5000000);
                cm.gainItem(scrolls[choice], 1);
                cm.sendOk("лл��Ĺ�ˣ��㹺�����Ʒ�Ѿ�������ı�����.");
                cm.dispose();
            } else {
                    cm.sendOk("��Ǹ����û�㹻��Ǯ��.");
                    cm.dispose();
            }
        }
    }
}
