/*
 ð�յ�(079)��Ϸ�����
 �ű�������ŷ
 */

var �������� = 1;
var ������� = 6;
var ��͵ȼ� = 69;
var ��ߵȼ� = 256;
//����Ԥ��
/*
 ��Ʒ������
 */
var ����Ԥ�� = [
	//[2022468, 34,"1~2"],
    [4030002, 70,"1~2"],
	[4030003, 70,"1~2"],
	[4030004, 70,"1~2"],
	[4030005, 70,"1~2"],
	[4030006, 70,"1~2"],
	[4030007, 70,"1~2"],
	[4030008, 70,"1~2"]
];

var status = 0;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    var em = cm.getEventManager("Romeo");
    if (em == null) {
        cm.sendOk("�Ҳ����ű�������ϵGM��");
        cm.�Ի�����();
        return;
    }
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }
    if (status == 1) {
		var �ı���Ϣ = "";
		�ı���Ϣ += "    #d#rð�ձ� 10W + #r100��ȯ#k\r\n"
		�ı���Ϣ += "    #d#r���10%����#k\r\n"
        for (var i = 0; i < ����Ԥ��.length; i++) {
            �ı���Ϣ += "   " + cm.��ʾ��Ʒ(����Ԥ��[i][0]) + "  " + ����Ԥ��[i][1] + "% ����" + ����Ԥ��[i][2] + "��#k\r\n";
        }
        cm.sendYesNo("\r\n     ����ŷ������Ҷ��������Ҫ���������#b" + �������� + " - " + ������� + "#k���ȼ�Ҫ��#b" + ��͵ȼ� + " - " + ��ߵȼ� + "#k����Ҫ�μӸ���#b����ŷ������Ҷ#k��������ʢ������#r����˹����#kŶ��\r\n\r\n   �ܼ����: #r" + cm.getBossRank("����ŷ������Ҷ", 2) + "\r\n#k   �������: #r" + cm.getBossLog("����ŷ������Ҷ") + "\r\n\r\n#k#e��������Ԥ��:#n\r\n\r\n" + �ı���Ϣ + "");
    } else if (status == 2) {
        cm.removeAll(4001130);
        cm.removeAll(4001131);
        cm.removeAll(4001132);
        cm.removeAll(4001133);
        cm.removeAll(4001134);
        cm.removeAll(4001135);
        if (cm.getPlayer().getParty() == null || !cm.isLeader()) {
            cm.sendOk("���Ҷӳ�������̸��");
        } else {
            var party = cm.getPlayer().getParty().getMembers();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var size = 0;
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                var ccPlayer = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if (ccPlayer == null || ccPlayer.getLevel() < ��͵ȼ� || ccPlayer.getLevel() > ��ߵȼ�) {
                    next = false;
                    break;
                }
                size += (ccPlayer.isGM() ? 4 : 1);
            }
            if (party.size() > ������� || party.size() < ��������) {
                next = false;
            }
            if (next) {
                em.startInstance(cm.getPlayer().getParty(), cm.getPlayer().getMap());
            } else {
                cm.sendOk("����: #b����ŷ������Ҷ#k\r\n����: #b" + �������� + " - " + ������� + "#k\r\n�ȼ�: #b" + ��͵ȼ� + " - " + ��ߵȼ� + "#k");
            }
        }
    }
}