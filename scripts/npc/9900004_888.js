status = -1;
var itemList = Array(
//-------����-------
Array(2290000,800,1,1),
			Array(2290001,600,1,1)
);

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.sendOk("���н�����������Ŷ��");
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.haveItem(4000313,2)) {
            cm.sendYesNo("��ӭ���٣�����#v4000313#��һ�Σ��������ܳ鵽��ƷŶ��\r\n����#r��졢�籩��11���ꡢ�ռ����Դ�����#k��ϵ��\r\nPS���ƽ��Ҷ��ͨ��#b��֡���BOSS��������ÿ��ǩ������Ҷ�һ�#k�ȷ�ʽ��ã�����չʾ#r���ֳ齱��Ʒ#k��\r\n#v01302308##v01302307##v01302310##v01302309##v01302305##v01302258##v01302249##v01402184##v01402300##v01402304##v01402308##v01402310##v01402311##v01402317##v01402319##v01402318##v01402321##v01412153##v01412164##v01422170##v01422185##v01432140##v01432150##v01432151##v01432152##v01432153##v01432154##v01432155##v01442139##v01442140##v01452148##v01452149##v01452232##v01452198##v01452302##v01462138##v01462219##v01462186##v01472241##v01472236##v01472207##v01382239##v01382235##v01382202##v01372201##v01372178##v01432136##v01432150##v01432152#");
        } else {
            cm.sendOk("��һ�ν���Ҫ#b���Żƽ��Ҷ#k���㱳�������㹻��#b#t4000313##k��?");
            cm.safeDispose();
        }
    } else if (status == 1) {
        var chance = Math.floor(Math.random() * 600);
        var finalitem = Array();
        for (var i = 0; i < itemList.length; i++) {
            if (itemList[i][1] >= chance) {
                finalitem.push(itemList[i]);
            }
        }
        if (finalitem.length != 0) {
            var item;
            var random = new java.util.Random();
            var finalchance = random.nextInt(finalitem.length);
            var itemId = finalitem[finalchance][0];
            var quantity = finalitem[finalchance][2];
            var notice = finalitem[finalchance][3];
            item = cm.gainGachaponItem(itemId, quantity, "Ѱ���", notice);
            if (item != -1) {
                cm.gainItem(4000313, -2);
                cm.sendOk("������ #b#t" + item + "##k " + quantity + "����");
            } else {
                cm.sendOk("��ȷʵ���㹻��#b#t4000313##k������ǣ�����ȷ���ڱ�����װ�������ģ������������Ƿ���һ�����ϵĿռ䡣");
            }
            cm.safeDispose();
        } else {
            cm.sendOk("�������������ʲô��û���õ���\r\n(����˰�ο������ɫ��Ҷ10�š�)");
            cm.gainItem(4000313, -2);
            cm.gainItem(4001126, 10);
            cm.safeDispose();
        }
    }
}