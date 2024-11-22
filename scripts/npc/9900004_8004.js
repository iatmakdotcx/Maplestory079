/*
SnailMS�ű�������
*/
importClass(Packages.tools.�����ַ���);
importClass(Packages.constants.WorldConstants);

var �����б� = Array(
	Array(21100002, "ս��ͻ��"),
	Array(21100004, "��������"),
	Array(21100005, "������Ѫ"),
	Array(21110003, "�ռ�Ͷ��"),
	Array(21110004, "��Ӱ����"),
	Array(21110006, "����"),
	Array(21120005, "��������"),
	Array(21120006, "��ʯ�ǳ�"),
	Array(21120007, "ս��֮��")
);

var ��λ = new Array(
	Array("`", 41),
	Array("1", 2),
	Array("2", 3),
	Array("3", 4),
	Array("4", 5),
	Array("5", 6),
	Array("6", 7),
	Array("7", 8),
	Array("8", 9),
	Array("9", 10),
	Array("0", 11),
	Array("-", 12),
	Array("=", 13),
	Array("Q", 16),
	Array("W", 17),
	Array("E", 18),
	Array("R", 19),
	Array("T", 20),
	Array("Y", 21),
	Array("U", 22),
	Array("I", 23),
	Array("O", 24),
	Array("P", 25),
	Array("A", 30),
	Array("S", 31),
	Array("D", 32),
	Array("F", 33),
	Array("G", 34),
	Array("H", 35),
	Array("J", 36),
	Array("K", 37),
	Array("L", 38),
	Array("Z", 44),
	Array("X", 45),
	Array("C", 46),
	Array("V", 47),
	Array("B", 48),
	Array("N", 49),
	Array("M", 50),
	Array("Shift", 42),
	Array("Ctrl", 29),
	Array("Alt", 56),
	Array("Space", 57),
	Array("Ins", 82),
	Array("Del", 83),
	Array("Home", 71),
	Array("End", 79),
	Array("Pup", 73),
	Array("Pdn", 81)
);


var choose = -1;
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
		var text = "��ѡ����Ҫ���õļ���:\r\n\r\n";
		for(var i = 0; i < �����б�.length; i++){
			if(Packages.constants.SkillConstants.isJobSkill(�����б�[i][0], cm.getPlayer().getJob())){
				text += "#L" + i + "##fSkill/" + (�����б�[i][0] + "").substring(0, 4) + ".img/skill/" + �����б�[i][0] + "/icon##b" + �����ַ���.formatString(8, " ", �����б�[i][1]) + "#k#l ";
			}
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		choose = selection;
		if(choose >= 0){
			var text = "��ѡ����#fSkill/" + (�����б�[choose][0] + "").substring(0, 4) + ".img/skill/" + �����б�[choose][0] + "/icon##b" + �����ַ���.formatString(8, " ", �����б�[choose][1]) + "#k����ѡ��Ҫ���õļ�λ��\r\n";
			for(var i = 0; i < ��λ.length; i++){
				text += "#L" + i + "##b" + �����ַ���.formatString(4, " ", ��λ[i][0]) + " "
				if((i + 1)  % 6 == 0){
					text += "\r\n";
				}
			}
			text += "\r\n";
			
			cm.sendSimple(text);
		}else{
			cm.dispose();
			return;
		}
		
		
	} else if (status == 2) {
		if(selection >= 0){
			cm.getPlayer().changeKeybinding(��λ[selection][1], 1, �����б�[choose][0]);
			var channel = cm.getPlayer().getClient().getChannel();
			if(channel < WorldConstants.CHANNEL_COUNT){
				cm.getPlayer().dropMessage(1, "���óɹ�����ȥ���̲鿴����");
				cm.getPlayer().changeChannel(channel + 1);
			}else{
				cm.getPlayer().dropMessage(1, "���óɹ�����ȥ���̲鿴����");
				cm.getPlayer().changeChannel(1);
			}
			
		}else{
			cm.sendOk("�����õļ���λ�ò��ڷ�Χ�ڣ�");
			cm.dispose();
			return;
		}
		
	} else {
		cm.dispose();
		return;
	}
}

