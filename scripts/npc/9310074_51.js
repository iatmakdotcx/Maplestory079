var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var ����Ҷ ="#fMap/MapHelper/weather/maple/3#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var a = 0;
var text;
var selection;
var itemlist = Array(
1002926,1002927,1002357,1122000,1022144);

function start() {
    a = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 1)
            a++;
        else
            a--;
        if (a == -1) {
            cm.dispose();
        } else if (a == 0) {
			text = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n           #r��ӭ��������ð�յ�ͨ�ð�װ������#k\r\n"+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n                  #b��ѡ����Ҫ���յ�װ��\r\n";
			for (var i=0; i<itemlist.length; i++) {
				text += "             #L"+i+"#"+С�̻�+"#b����#v"+itemlist[i]+"##r#z"+itemlist[i]+"#"+С�̻�+"#l\r\n\r\n";
				if (i != 0 && (i+1) % 99 == 0) {
					text += "\r\n";
				}
			}
            cm.sendSimple(text);
			
		} else if (a == 1) {
			jg = selection
			    text = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n";
				text += "           #r��ӭ��������ð�յ�ͨ�ð�װ������#b\r\n";
				text += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n";
				text += "               ����װ����#r#v"+itemlist[selection]+"##z"+itemlist[selection]+"#\r\n";
				text += "               ��õ��ߣ�#b#v3992025##z3992025#\r\n\r\n";
				text += "               ���������#r 98��398\r\n\r\n";
				text += "   					�Ƿ�ȷ�Ͻ��л���\r\n";
            cm.sendYesNo(text);
				
        } else if (a == 2) {
			if(cm.getPlayer().getBossLog("����1") >=10){
				cm.sendOk("���ջ����Ѿ�����10�Σ��޷����������ˣ�");
				cm.dispose();
				return;
			}
			
			var rand = Math.floor(Math.random()*300+98);
			if (cm.haveItem(itemlist[jg], 1) == false) {
                cm.sendOk("#b���ź�����ı����ڲ�û�����װ������ȷ�ϣ�");
                cm.dispose();
				return;
			}
			if (cm.canHold(3992025,398) == false ) {
                cm.sendOk("#b��Ǹ����ı����ռ䲻�㣬�޷����»��յ�#v3992025#����ȷ�ϣ�");
                cm.dispose();
            } else {
				cm.gainItem(itemlist[jg], -1);
				cm.setBossLog("����1");
				cm.gainItem(3992025,rand);
				cm.sendOk("#r��ϲ�㣬�ɹ�������#v"+itemlist[jg]+"#�����#v3992025#*"+rand+"");
                Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "ͨ�ð�װ������" + " : " + "��ϲ" + cm.getChar().getName() + "�ɹ�������BOSSװ���������ʥ������*"+rand+"�����ף����/���ɣ�"));           
				cm.dispose();
            }
        }
	}	
}