var status = 0;
var yaoshi = 5;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendSimple("#r#e<���ǹ��﹫԰����>#n\r\n#k������﹫԰���뵽����������ƱŶ��~.\r\n#b#L1#�����ȡ#v4001516#���ƾ�("+yaoshi+"��)\r\n#L2#�����#v4001516#x1���ƾ�(500���)")
    } else if (status == 1) {
        switch (selection) {
        case 1:
		    if(cm.getBossLog("���ƾ�") < yaoshi)
		    {
		    cm.gainItem(4001516,1);
		    cm.setBossLog("���ƾ�");
		    }else{
			cm.sendOk("ÿ��ֻ�������ȡ#v4001516#���ƾ�"+yaoshi+"�Ρ�");
                    cm.dispose();
			}
            break;
        case 2:
		    if(cm.getPlayer().getCSPoints(1) >= 500 && cm.getBossLog("���ƾ�1")<5)
		    {
		    cm.setBossLog("���ƾ�1");
		    cm.gainItem(4001516,1);
		    cm.gainNX( -500);
			cm.sendOk("��ϲ�㹺��ɹ������#v4001516#1�����ƾ���ȥ��ս�ɣ�");
		    }else{
			cm.sendOk("��ȷ���Ƿ��㹻500���\r\n��ÿ�չ���������ܳ���5��!");
                    cm.dispose();
}
            break;
        }
        cm.dispose();
    }
}
