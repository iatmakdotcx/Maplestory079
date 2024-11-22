importPackage(java.lang);
importPackage(Packages.client);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.constants);
importPackage(Packages.net.channel);
importPackage(Packages.tools);
importPackage(Packages.scripting);
importPackage(Packages.tools.packet);
importPackage(Packages.tools.data);
importPackage(Packages.tools);

var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
	
    if (mode == 1) {
        status++;
    } else if (mode == 0 && status != 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
        var list = cm.getMentorLog2(1);
        var avail = "";
        if (list.size() > 0) {
            avail += "δ��ʦ��\r\n";
            for (var i = 0; i < list.size(); i++) {
                avail += "" + Packages.client.MapleCharacter.getNameById(list.get(i)) + "\r\n";
            }
            var list2 = cm.getMentorLog2(2);
            avail += "�ѳ�ʦ��\r\n";
            if (list2.size() > 0) {
                for (var j = 0; j < list2.size(); j++) {
                    avail += "" + Packages.client.MapleCharacter.getNameById(list2.get(j)) + "\r\n";
                }
            } else {
                avail += "��";
            }
            cm.sendSimple("��ĵ�����������Щ��ң�:\r\n#b" + avail);
        } else {
            cm.sendSimple("����ʱû�е���");
        }
    } else {
        cm.dispose();
    }//status
}// function

function Ok(text) {
    cm.sendOk(text);
}



