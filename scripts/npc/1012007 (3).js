
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
		var tex = "\r\n";
		tex += "#L1#��Ҫ��ȡÿ���˶��Ľ�����#l"

		cm.sendSimple(tex);
    } else if (status == 1) {
		if (cm.getBossLog("ÿ���˶�") == 0){
			sel = Math.floor(Math.random() * 2);
			if (sel == 0){
				cm.gainNX(1000)
				cm.sendOk("#b������ 1000 �����.");
			}else if(sel == 1){
				cm.setmoneyb(+10)
				cm.sendOk("#b������ 10 ���ֽ���.");
			}
			cm.setBossLog("ÿ���˶�")
			cm.dispose();
		}else{
			cm.sendOk("#b������ù�������.");
			cm.dispose();
		}
    }
}