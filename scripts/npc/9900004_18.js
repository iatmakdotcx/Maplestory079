var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        if (cm.getzxwj().size() <= 1) {
            cm.sendOk("Ŀǰû������!");
            cm.dispose();
            return;
        }
        var selStr = "��ǰ���� "+cm.getzxwj().size()+" ��\r\n\r\n#b";
        var iz = cm.getzxwj().iterator();
        while (iz.hasNext()) {
            var zz = iz.next();
            selStr += "#L" + zz + "#" + cm.IDtogetPlayername(zz) +"-"+cm.IDtogetPlayerMAPID(zz)+ "#l\r\n";
        }
        cm.sendSimple(selStr);
    } else if (status == 1) {
       cm.flytoID(selection);
        cm.dispose();
    }
}