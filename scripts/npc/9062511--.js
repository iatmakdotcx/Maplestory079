/*
SnailMS�ű�������
*/

var ����Ƥ�� = Array(
	Array(1001005, 2, "Ⱥ�幥��", "#fSkill/100.img/skill/1001005/icon#"),
	Array(1100002, 2, "�ռ���", "#fSkill/110.img/skill/1100002/icon#"),
	Array(1101004, 2, "���ٽ�", "#fSkill/110.img/skill/1101004/icon#"),
	Array(1101006, 2, "��ŭ֮��", "#fSkill/110.img/skill/1101006/icon#"),
	Array(1101007, 2, "�˺�����", "#fSkill/110.img/skill/1101007/icon#")
);

var choosed = 0;
var skillId = 0;
var type = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("�Ի�������");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		//�������д�ű���һ��Ҫ������
		var text = "��ѡ������Ҫ���õļ���Ƥ����\r\n\r\n";
		for(var i = 0; i < ����Ƥ��.length; i++){
			text += "#L" + i + "##b" + ����Ƥ��[i][3] + ����Ƥ��[i][2] + "#k#l\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection >= 0){
			skillId = ����Ƥ��[selection][0];
			choosed = selection;
			var text = "��ѡ����#b" + ����Ƥ��[selection][3] + ����Ƥ��[selection][2] + "#k������������������Ƥ�����ͣ�\r\n\r\n";
			for(var i = 1; i <= ����Ƥ��[selection][1]; i++){
				text += "\t\t\t\t#b#L" + i + "#����" + i + "#l\r\n"
			}
			cm.sendSimple(text);
		}
		
		
	} else if (status == 2){
		if(selection > 0){
			type = selection;
			cm.getPlayer().setSkillSkin(skillId, type);
			cm.sendOk("���ѳɹ�������#b" + ����Ƥ��[choosed][3] + ����Ƥ��[choosed][2] + "#k ����Ϊ #b����" + type + "#k��\r\n")
		}
	} else {
		cm.dispose();
		return;
	}
}

