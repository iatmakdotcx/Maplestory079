/* Dawnveil
    To Victoria Island
	Puro
    Made by Daenerys
*/
function start() {
    cm.sendYesNo("�ҿ���ֱ������ȥ��𽹬������ȥ��");
}

function action(mode, type, selection) {
    if (mode == 0) {
	cm.sendNext("��... �������㲢û��׼���á�");
	} else {
	cm.saveLocation("MULUNG_TC");
	cm.warp(700000000,0);
    }
    cm.dispose();
}
