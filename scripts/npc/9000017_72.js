var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
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
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#e#d#l������[ð�յ�ѫ��]���촦���������������á�\r\n"//3
            text += "" + ��ɫ��ͷ + "#L1##e#d#v1142609#��4ά15������10����Ҫ��#v4001324#x100��#l\r\n\r\n"//3
            text += "" + ��ɫ��ͷ + "#L2##e#d#v4001324#x100+#v1142609#������#v1142907#��4ά20������15��#l\r\n"//3
            text += "" + ��ɫ��ͷ + "#L3##e#d#v4001324#x120+#v1142907#������#v1142081#��4ά30������20��#l\r\n"//3
            text += "" + ��ɫ��ͷ + "#L4##e#d#v4001324#x150+#v1142081#������#v1142158#��4ά40������25��#l\r\n"//3
            text += "" + ��ɫ��ͷ + "#L5##e#d#v4001324#x150+#v1142158#������#v1142178#��4ά50������35��#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
		         if(cm.haveItem(4001324,100)){
				cm.gainItem(4001324, -100);
				cm.gainItem(1142609,15,15,15,15,200,200,10,10,200,200,20,20,40,40);

            cm.sendOk("�����ɹ���");
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "��ѫ��������" + " : " + "[" + cm.getChar().getName() + "]�ɹ�����������������ѫ�£�"));
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
        } else if (selection == 2) {
		         if(cm.haveItem(4001324,100)&& cm.haveItem(1142609,1)){
				cm.gainItem(4001324, -100);
				cm.gainItem(1142609, -1);
				cm.gainItem(1142907,20,20,20,20,400,400,15,15,20,200,200,20,40,40);

            cm.sendOk("�����ɹ���");
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "��ѫ��������" + " : " + "[" + cm.getChar().getName() + "]�ɹ����������������˾��ѫ�£�"));
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
        } else if (selection == 3) {
		         if(cm.haveItem(4001324,120)&& cm.haveItem(1142907,1)){
				cm.gainItem(4001324, -120);
				cm.gainItem(1142907, -1);
				cm.gainItem(1142081,30,30,30,30,600,600,20,20,20,200,200,20,40,40);

            cm.sendOk("�����ɹ���");
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "��ѫ��������" + " : " + "[" + cm.getChar().getName() + "]�ɹ���������ʹð�յ���ѹ���ѫ�£�"));
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
        } else if (selection == 4) {
		         if(cm.haveItem(4001324,150)&& cm.haveItem(1142081,1)){
				cm.gainItem(4001324, -150);
				cm.gainItem(1142081, -1);
				cm.gainItem(1142158,40,40,40,40,800,800,25,25,20,200,200,20,40,40);

            cm.sendOk("�����ɹ���");
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "��ѫ��������" + " : " + "[" + cm.getChar().getName() + "]�ɹ���������ʹð�յ������ʹѫ�£�"));
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
        } else if (selection == 5) {
		         if(cm.haveItem(4001324,150)&& cm.haveItem(1142158,1)){
				cm.gainItem(4001324, -150);
				cm.gainItem(1142158, -1);
				cm.gainItem(1142178,50,50,50,50,1000,1000,35,35,20,200,200,20,40,40);

            cm.sendOk("�����ɹ���");
		Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "��ѫ��������" + " : " + "[" + cm.getChar().getName() + "]�ɹ���������ʹð�յ�Ӣ�ۺ���ѫ�£�"));
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
        } else if (selection == 6) {
		cm.openNpc(9270045, 8);
	}
    }
}


