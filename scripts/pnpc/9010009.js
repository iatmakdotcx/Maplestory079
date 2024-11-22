/*
SnailMS�ű�������
*/
importClass(Packages.snail.Marathon);
importClass(Packages.client.MapleCharacter);
importClass(Packages.tools.�����ַ���);

var ��� = Array(250020300, "�����������");
var �յ� = Array(230040420, "�յ������ʼ��ᵯ������");
var ����ʱ�� = 30;//����
var ǰ3��Ʒ = Array(
	Array(Array(2430282, 1), Array(4310088, 1)),
	Array(Array(2340000, 2)),
	Array(Array(2340000, 2))
);
var ȫ���ȯ = 10000;
var ȫ����� = 10000;


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
		if(Marathon.isBegain() && Marathon.hasJoined(cm.getPlayer()) && cm.getPlayer().getMapId() == Marathon.getFinishMapId() && !Marathon.isFinished(cm.getPlayer())){
			if(Marathon.arrive(cm.getPlayer())){
				cm.sendOk("��ϲ������˱������ȱ��������󣬾Ϳ���������ȡ�����ˣ�");
				cm.dispose();
				return;
			}else{
				cm.sendOk("���#v" + Marathon.getItemId() + "#�أ�û�������޷���ɱ���Ŷ�������û���ڱ���״̬��Ҳ�޷���ɱ���~");
				cm.dispose();
				return;
			}
		}
		var text = "";
		if(!Marathon.isOpen()){
			text += "��Ǹ�������ɱ�����δ���������ɲ鿴��������ȡ��Ʒ��\r\n\r\n";
			text += "\t\t\t\t#L3##b�鿴����#k#l\r\n";
			text += "\t\t\t\t#L4##b�鿴��Ʒ�б�#k#l\r\n";
			text += "\t\t\t\t#L5##b��ȡ��Ʒ#k#l\r\n";
			text += "\t\t\t\t#L10##b��ؽ��ü���#k#l\r\n\r\n";
			text += "\t\t\t\t#L6##r�Բ��������#k#l\r\n\r\n";
		}else{
			text += "��ӭ�����������ĵ�#r�����ɱ���#k����α���������� #r" + ���[1] + "#k���յ��� #r" + �յ�[1] + "#k������ʱ��Ϊ #r" + Marathon.getDuration()/1000/60 + " #k���ӣ�#r�뾡�챨��#k��Ȼ��ȴ�������ʼ��\r\n\r\n";
			text += "\t\t\t\t#L1##b��Ҫ����#k#l\r\n";
			text += "\t\t\t\t#L2##b�鿴������������#k#l\r\n";
			text += "\t\t\t\t#L3##b�鿴����#k#l\r\n";
			text += "\t\t\t\t#L4##b�鿴��Ʒ�б�#k#l\r\n";
			text += "\t\t\t\t#L5##b��ȡ��Ʒ#k#l\r\n";
			text += "\t\t\t\t#L10##b��ؽ��ü���#k#l\r\n\r\n";
			text += "\t\t\t\t#L6##r�Բ��������#k#l\r\n\r\n";
		}
		
		if(cm.getPlayer().getGMLevel() >= 30){
			text += "********************����ΪGMѡ��**********************\r\n";
			text += "\t\t\t\t#L7##d�����#k#l\r\n";
			text += "\t\t\t\t#L8##d������ʼ#k#l\r\n";
			text += "\t\t\t\t#L9##d�رջ#k#l\r\n";
		}
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			if(Marathon.joinIn(cm.getPlayer())){
				cm.sendOk("��ϲ�㱨���ɹ����ѽ���������#v" + Marathon.getItemId() + "#��������ı����������ĵȺ������ʼ��\r\n#rע�������ڼ䣬������Ч����ʧ����ʹ�ñ����������±������ɼ���������\r\n");
				cm.dispose();
				return;
			}else{
				cm.sendOk("����ʧ�ܣ��뱣֤��ı����������� #r1#k ��ռ䣬���߱����Ѿ���ʼ���޷�������\r\n");
				cm.dispose();
				return;
			}
			
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			var chrIdList = Marathon.getChrIdList();
			if(chrIdList == null){
				cm.sendOk("��ʱ���˱�����\r\n");
				cm.dispose();
				return;
			}else{
				var text = "������Ա���£�\r\n";
				for(var i = 0;i < chrIdList.size(); i++){
					var chrName = MapleCharacter.getCharacterNameById(chrIdList.get(i));
					text += "\t\t\t\t\t#d" + �����ַ���.formatString(3, " ", (i + 1)) + ": #b" + �����ַ���.formatString(10, " ", chrName) + "#k\r\n";
				}
				cm.sendOk(text);
				cm.dispose();
				return;
			}
		}else if (selection == 3) {
			//�������дѡ��2Ҫ������
			var chrList = Marathon.getChrList();
			if(chrList == null){
				cm.sendOk("��ʱ������ɱ�����\r\n");
				cm.dispose();
				return;
			}else{
				var text = "���������а����£�\r\n";
				text += "\t\t\#d����\t\t\t����\t\t\t��ʱ#k\r\n";
				for(var i = 0;i < chrList.size(); i++){
					var chrName = MapleCharacter.getCharacterNameById(chrList.get(i).left);
					var min = parseInt(chrList.get(i).right/1000/60);
					var sec = parseInt(chrList.get(i).right/1000%60);
					text += "\t\t  #b" + �����ַ���.formatString(3, " ", (i + 1)) + "\t\t\t  #b" + �����ַ���.formatString(12, " ", chrName) + "   " +  + min + "��" + sec +"��#k\r\n";
				}
				cm.sendOk(text);
				cm.dispose();
				return;
			}
		}else if (selection == 4) {
			//�������дѡ��2Ҫ������
			var text = "��Ʒ�б����£�\r\n";
			for(var i = 0; i < ǰ3��Ʒ.length; i++){
				text += "�� #r" + (i + 1) + "#k ��:";
				for(var j = 0; j < ǰ3��Ʒ[i].length; j++){
					text += "#v" + ǰ3��Ʒ[i][j][0] + "##bx" + ǰ3��Ʒ[i][j][1] + "#k ";
				}
				text += "\r\n";
			}
			text += "ȫ�影����#b" + ȫ���ȯ + "#k ��ȯ��#b" + ȫ����� + " #k����\r\n";
			cm.sendOk(text);
			
		}else if (selection == 5) {
			//�������дѡ��2Ҫ������
			if(Marathon.isBegain()){
				cm.sendOk("�������ٽ����У���ȴ�������������ȡ��Ʒ��\r\n");
				cm.dispose();
				return;
			}
			if(!Marathon.isFinished(cm.getPlayer())){
				cm.sendOk("�㲢û����ɱ�������\r\n");
				cm.dispose();
				return;
			}
			if(Marathon.isRewarded(cm.getPlayer())){
				cm.sendOk("���Ѿ���ù������ˡ�\r\n");
				cm.dispose();
				return;
			}
			Marathon.setReward(cm.getPlayer(), true);
			var rank = Marathon.getRank(cm.getPlayer());
			for(var i = 0; i < ǰ3��Ʒ.length; i++){
				if(i + 1 == rank){
					for(var j = 0; j < ǰ3��Ʒ[i].length; j++){
						cm.gainItem(ǰ3��Ʒ[i][j][0], ǰ3��Ʒ[i][j][1]);
					}
				}
			}
			cm.����ȯ(ȫ���ȯ);
			cm.������ȯ(ȫ�����);
			if(rank <= ǰ3��Ʒ.length){
				cm.ȫ������(3, "��ϲ�� " + rank + " �������� " + cm.getPlayer().getName() + " ��ȡ�˷��������ɱ���������");
			}else{
				cm.ȫ������(3, "��ϲ " + cm.getPlayer().getName() + " ��ȡ�������ɱ���������");
			}
			cm.sendOk("��ϲ��ɹ���ȡ�˷��Ľ�Ʒ��\r\n");
			cm.dispose();
			return;
			
		}else if (selection == 6) {
			//�������дѡ��2Ҫ������
			cm.dispose();
			return;
		}else if (selection == 7) {
			//�������дѡ��2Ҫ������
			Marathon.setBegainMapId(���[0]);
			Marathon.setFinishMapId(�յ�[0]);
			Marathon.setDuration(����ʱ�� * 1000 * 60);
			if(Marathon.open()){
				cm.sendOk("�����ɻ�ѿ�����\r\n");
				cm.dispose();
				return;
			}else{
				cm.sendOk("����ʧ�ܣ������ɻ�Ѿ��ǿ���״̬�����ȹرջ�������¿�����\r\n");
				cm.dispose();
				return;
			}
			
			
		}else if (selection == 8) {
			//�������дѡ��2Ҫ������
			if(Marathon.begain()){
				cm.sendOk("�����ѿ�ʼ��\r\n");
				cm.dispose();
				return;
			}else{
				cm.sendOk("�޷���ʼ��ԭ��\r\n1.���˱����� \r\n2.��㡢�յ��ͼID���ô���\r\n3.δ�������\r\n");
				cm.dispose();
				return;
			}
		}else if (selection == 9) {
			//�������дѡ��2Ҫ������
			if(Marathon.close()){
				cm.sendOk("���ѽ������ɻ�رա�\r\n");
				cm.dispose();
				return;
			}else{
				cm.sendOk("�ر�ʧ�ܣ������ɻ�Ѿ��ǹر�״̬��\r\n");
				cm.dispose();
				return;
			}
		}else if (selection == 10) {
			//�������дѡ��2Ҫ������
			if(Marathon.returnSkills(cm.getPlayer())){
				cm.sendOk("���ѳɹ���ؽ��õļ��ܡ�\r\n");
				cm.dispose();
				return;
			}
			cm.sendOk("��ȡʧ�ܣ�ʧ��ԭ��������£�\r\n#r1.��û�б����õļ��ܡ�\r\n2.������δ��������������ӵ�������ǣ��Դ��ڲ���״̬���޷���ؼ��ܡ�\r\n3.���Ѿ���ȡ���ˡ�\r\n");
			cm.dispose();
			return;
		
		}
		cm.dispose();
		
	} else {
		cm.dispose();
		return;
	}
}

