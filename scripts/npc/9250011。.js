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
			text += "#e#b��ʹð�յ�����BOSS���ж��� #k	#n\r\n"
            text += "#L1##r�ٻ�����.{20ֻ}����Ҫ����300��ȯ��#l\r\n#L2##r�ٻ�����������Ҫ����22222��ȯ��#l\r\n#L3##r�ٻ�����.{���߾���}����Ҫ����5000��ȯ��#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.getPlayer().getCSPoints(1) >= 300){
				cm.gainNX(-300);
				cm.spawnMonster(8190003, 10);
				cm.spawnMonster(8190004, 10);
				cm.worldMessage(5,"��ң�["+cm.getName()+"]��7���ٻ��˴�����������ʿ�ǸϽ���������");
            cm.dispose();
			}else{
            cm.sendOk("������޷��ٻ���");
            cm.dispose();
			}}else if (selection == 2) {
			if(cm.getPlayer().getCSPoints(1) >= 22222){
				cm.gainNX(-22222);
				cm.spawnMonster(8800003, 1);
				cm.spawnMonster(8800004, 1);
				cm.spawnMonster(8800005, 1);
				cm.spawnMonster(8800006, 1);
				cm.spawnMonster(8800007, 1);
				cm.spawnMonster(8800008, 1);
				cm.spawnMonster(8800009, 1);
				cm.spawnMonster(8800010, 1);
				cm.spawnMonster(8800000, 1);
				cm.worldMessage(5,"��ң�["+cm.getName()+"]��7���ٻ�����������ʿ�ǸϽ���������");
            cm.dispose();
			}else{
            cm.sendOk("������޷��ٻ���");
            cm.dispose();
                       }}else if (selection == 3) {
			if(cm.getPlayer().getCSPoints(1) >= 5000){
				cm.gainNX(-5000);
				cm.spawnMonster(9400014, 1);
				cm.worldMessage(5,"��ң�["+cm.getName()+"]��7���ٻ���������ʿ�ǸϽ���������");
            cm.dispose();
			}else{
            cm.sendOk("������޷��ٻ���");
            cm.dispose();
			}
		}
    }
}


