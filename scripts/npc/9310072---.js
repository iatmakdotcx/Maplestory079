var status = -1;
var job = 0;
var type = -1;
var skill = [[8],[10000018]];

function start(){
	action(1, 0, 0);
}

function action(mode, type ,selection) {
	if(mode == 0 && status == 0) {
		status --;
	} else if(mode == 1) {
		status ++;
	} else {
		cm.dispose();
		return;
	}
	
	if (status == 0) {
		cm.sendYesNo("����ȼ�10������������԰���һ��ѧϰ Ⱥ��#s8#");
	} else if (status == 1){
		if(cm.getPlayer().getLevel() < 10){
			cm.sendNext("��ĵȼ�û�дﵽ10��");
			cm.dispose();
			return;
		}
		job = cm.getPlayer().getJob();
		if (job < 1000){
			type = 0;
		} else if (job < 2000) {
			type = 1;
		} else if (job < 3000) {
			type = 2;
		} else {
			cm.dispose();
			return;
		}
		for(var i = 0; i < skill[type].length;i++){
			var level = 1;
			if(i == 2) {
				level = 1;
			}
			cm.teachSkill(skill[type][i], level);
		}
		cm.sendNext("�����Ѿ�ѧϰ�ɹ�");
		cm.dispose();
	} else {
		cm.dispose();
	}
}