var status = -1;
var job = 0;
var type = -1;
var skill = [[8, 1004, 1013],[10000018, 10001004],[20000024, 20001004]];

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
		cm.sendYesNo("����ȼ�30���ҿ��԰���һ��ѧϰ\r\n�ſ�Ⱥ�輼��#s8#\r\n��ͨ��輼��#s1004#\r\n�ʼ���輼��#s1013#\r\n");
	} else if (status == 1){
		if(cm.getPlayer().getLevel() < 2){
			cm.sendNext("��ĵȼ�û�дﵽ2��");
			cm.dispose();
			return;
		}
		job = cm.getPlayer().getJob();
		if (job < 1000){// Adv(0 ~ 522)
			type = 0;
		} else if (job < 2000) {// Cy(1000 ~ 1512)
			type = 1;
		} else if (job < 3000) {// Aran(2000 ~ 2112)
			type = 2;
		} else {
			cm.dispose();
			return;
		}
		for(var i = 0; i < skill[type].length;i++){
			var level = 1;
			if(i == 2) {
				level = 3;
			}
			cm.teachSkill(skill[type][i], level);
			cm.teachSkill(1007,3,3);
			
		}
		cm.sendNext("�����Ѿ�ѧϰ�ɹ�");
		cm.dispose();
	} else {
		cm.dispose();
	}
}