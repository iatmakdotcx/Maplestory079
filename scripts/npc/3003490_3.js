/*
SnailMS�ű�������
*/
importClass(Packages.constants.SkillConstants);
importClass(Packages.tools.�����ַ���);

var ������� = "#fSkill/312.img/skill/3121004/icon#";
var ս��֮�� = "#fSkill/2112.img/skill/21120002/icon#";
var icon1 = "#fSkill/";
var icon2 = ".img/skill/";
var icon3 = "/icon#";

var finalSkillId = 0;
var finalSkillIdS = "";
var finalSkillName = "";

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
		var text = "��ӭ��������Ƥ���л�ϵͳ����ѡ���л���ʽ��\r\n\r\n";
		text += "#L1##bȫ���л�Ϊ���Ű�#l#k\r\n\r\n";
		text += "#L2##bȫ���л�Ϊ�°�#l#k\r\n\r\n";
		// text += "#L5##bȫ���л�Ϊ������#l#k\r\n\r\n";
		// text += "#L6##bȫ���л�Ϊ���İ�#l#k\r\n\r\n";
		text += "#L3##b��Ҫ�Լ�DIY#l#k\r\n\r\n";
		text += "#L4##b��Ҫ���óɸ�ֵ�����Чģʽ#l#k\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			cm.getPlayer().setSkillSkinAll(2);
			cm.sendOk("���ѽ�ȫ������Ƥ���л�Ϊ#r���Ű�#b��");
			cm.dispose();
			return;
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			cm.getPlayer().setSkillSkinAll(1);
			cm.sendOk("���ѽ�ȫ������Ƥ���л�Ϊ#r�°�#b��");
			cm.dispose();
			return;
		}else if (selection == 3) {
			//�������дѡ��3Ҫ������
			var skillSkin = cm.getPlayer().getSkillSkin();
			var skillTypeMap = skillSkin.getChrSkillListForJob();
			var text = "��ѡ����Ҫ����Ƥ���ļ���:\r\n\r\n";
			if(skillTypeMap != null){
				var it = skillTypeMap.entrySet().iterator();
				var i = 1;
				while(it.hasNext()){
					var entry = it.next();
					var skillId = entry.getKey();
					var skillType = entry.getValue();
					var skillIdS = skillId + " ";
					
					//cm.getPlayer().dropMessage("skillIdS0 = " + skillIdS);//����
					if(cm.getPlayer().getJob() < 1000){
						skillIdS = skillIdS.substr(0, 3) + "";
					}else{
						skillIdS = skillIdS.substr(0, 4) + "";
					}
					text += "#L" + skillId + "##b" + icon1 + skillIdS + icon2 + skillId + icon3 + �����ַ���.formatString(8, " ", SkillConstants.getSkillName(skillId)) +"#k#l";
					if(i % 3 == 0 && i != 0){
						text += "\r\n";
					}
					i++;
				}
				text += "\r\n";
				cm.sendSimple(text);
				//cm.getPlayer().dropMessage(text);
			}else{
				cm.sendOk("�����ˣ�δ�ҵ���ļ���Ƥ����");
				cm.dispose();
				return;
			}

		}else if (selection == 4) {
			//�������дѡ��4Ҫ������
			cm.getPlayer().setSkillSkinAll(0);
			cm.sendOk("���ѽ�ȫ������Ƥ���л�Ϊ#rɶҲû��#b��");
			cm.dispose();
			return;
		}else if (selection == 5) {
			//�������дѡ��4Ҫ������
			cm.getPlayer().setSkillSkinAll(3);
			cm.sendOk("���ѽ�ȫ������Ƥ���л�Ϊ#r������#b��");
			cm.dispose();
			return;
		}else if (selection == 6) {
			//�������дѡ��4Ҫ������
			cm.getPlayer().setSkillSkinAll(4);
			cm.sendOk("���ѽ�ȫ������Ƥ���л�Ϊ#r���İ�#b��");
			cm.dispose();
			return;
		}
		
	} else if (status == 2) {
		finalSkillId = selection;
		finalSkillName = SkillConstants.getSkillName(finalSkillId);
		if(finalSkillId == 0){
			cm.sendOk("�����ˣ���ѡ��ļ���IDΪ0��\r\n");
			cm.dispose();
			return;
		}
		var skillIdS = finalSkillId + " ";
		//cm.getPlayer().dropMessage("skillIdS = " + skillIdS);//����
		if(cm.getPlayer().getJob() < 1000){
			finalSkillIdS = skillIdS.substr(0, 3) + "";
			//cm.getPlayer().dropMessage("3.finalSkillIdS = " + finalSkillIdS);//����
		}else{
			finalSkillIdS = skillIdS.substr(0, 4) + "";
			//cm.getPlayer().dropMessage("4.finalSkillIdS = " + finalSkillIdS);//����
		}
		
		var text = "��ѡ���˼��� #r" + icon1 + finalSkillIdS + icon2 + finalSkillId + icon3 + finalSkillName + " #k,��Ϊ��ѡ����Ҫ�����ļ���Ƥ����\r\n";
		if(cm.getPlayer().getSkillSkin().containsType(finalSkillId, 2)){
			text += "#L0##b���Ű�Ƥ��#k\r\n\r\n";
		}
		if(cm.getPlayer().getSkillSkin().containsType(finalSkillId, 1)){
			text += "#L1##b�°�Ƥ��#k\r\n\r\n";
		}
		if(cm.getPlayer().getSkillSkin().containsType(finalSkillId, 3)){
			text += "#L3##b������Ƥ��#k\r\n\r\n";
		}
		if(cm.getPlayer().getSkillSkin().containsType(finalSkillId, 4)){
			text += "#L4##b������Ƥ��#k\r\n\r\n";
		}
		text += "#L2##b����ЧƤ��#k\r\n\r\n";
		//cm.getPlayer().dropMessage(text);//����
		cm.sendSimple(text);
	} else if (status == 3) {
		
		if(finalSkillId == 0){
			cm.sendOk("�����ˣ���ѡ��ļ���IDΪ0��\r\n");
			cm.dispose();
			return;
		}
		switch(selection){
			case 0:
				cm.getPlayer().setSkillSkin(finalSkillId, 2);
				cm.sendOk("�ѳɹ������� #r"  + icon1 + finalSkillIdS + icon2 + finalSkillId + icon3 + finalSkillName + " #k��Ƥ������Ϊ#r���Ű�Ƥ��#k\r\n");
				cm.dispose();
				break;
			case 1:
				cm.getPlayer().setSkillSkin(finalSkillId, 1);
				cm.sendOk("�ѳɹ������� #r"  + icon1 + finalSkillIdS + icon2 + finalSkillId + icon3 + finalSkillName + " #k��Ƥ������Ϊ#r�°�Ƥ��#k\r\n");
				cm.dispose();
				break;
			case 2:
				cm.getPlayer().setSkillSkin(finalSkillId, 0);
				cm.sendOk("�ѳɹ������� #r"  + icon1 + finalSkillIdS + icon2 + finalSkillId + icon3 + finalSkillName + " #k��Ƥ������Ϊ#r����ЧƤ��#k\r\n");
				cm.dispose();
				break;
			case 3:
				cm.getPlayer().setSkillSkin(finalSkillId, 3);
				cm.sendOk("�ѳɹ������� #r"  + icon1 + finalSkillIdS + icon2 + finalSkillId + icon3 + finalSkillName + " #k��Ƥ������Ϊ#r������Ƥ��#k\r\n");
				cm.dispose();
				break;
			case 4:
				cm.getPlayer().setSkillSkin(finalSkillId, 4);
				cm.sendOk("�ѳɹ������� #r"  + icon1 + finalSkillIdS + icon2 + finalSkillId + icon3 + finalSkillName + " #k��Ƥ������Ϊ#r������Ƥ��#k\r\n");
				cm.dispose();
				break;
		}
	} else {
		cm.dispose();
		return;
	}
}

