var status = 0;
var yaoshi = 2;

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
        cm.sendSimple("#r#e<�����ػ���>#n\r\n#kͨ���޾�糺챴�յ���Ҫ��Կ��.\r\n#b#L1#�����ȡ#v4033982#����Կ�ס�("+yaoshi+"��)\r\n#L2#�����#v4033982#x4����Կ�ס�(3000���)")
    } else if (status == 1) {
        switch (selection) {
        case 1:
		    if(cm.getBossLog("����Կ��") < yaoshi)
		    {
		    cm.gainItem(4033982,1);
		    cm.setBossLog("����Կ��");
		    }else{
			cm.sendOk("ÿ��ֻ�������ȡ#v4033982#����Կ�ף�"+yaoshi+"�Ρ�");
                    cm.dispose();
			}
            break;
        case 2:
		    if(cm.getPlayer().getCSPoints(1) >= 3000 && cm.getBossLog("����Կ��1")<3)
		    {
		    cm.setBossLog("����Կ��1");
		    cm.gainItem(4033982,4);
		    cm.gainNX( -3000);
			cm.sendOk("��ϲ�㹺��ɹ������#v4033982#4������Կ�ף���ȥ��սBOSS�ɣ�");
		    }else{
			cm.sendOk("��ȷ���Ƿ��㹻3000���\r\n��ÿ�չ���Կ�״������ܳ���3��!");
                    cm.dispose();
}
            break;
        }
        cm.dispose();
    }
}
