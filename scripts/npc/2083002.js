/* Amon
 * Last Mission : dragon's Altar (280030000)
 */

function start() {
	cm.sendYesNo("����Ҫ�뿪���ﵽ����ȥ��");
}

function action(mode, type, selection) {
	if (mode == 1) {
		cm.warp(240040700);
		if (cm.getPlayerCount(240060200) == 1) {
			cm.getMap(211042300).resetReactors();
		}
	}
	cm.dispose();
}
