/*
SnailMS�ű�������
*/
importClass(Packages.constants.WorldConstants);


function start() {
	status = -1;
	action(1, 0, 0);
}

var �ж�ְҵid = 112;
var ѧϰ����id = 2321005;
var ѧϰ���ܵȼ� = 30;
var ���ֵȼ� = 30;
var ������ID = 2022510;
var ����λ�� = 0;

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
		
		// var text = "\r\n\r\n";
		// text += "#L1#ѡ��1����\r\n\r\n";
		// text += "#L2#ѡ��2����\r\n\r\n";
		// cm.sendSimple(text);
		if(!cm.haveItem(������ID, 1)){
			cm.sendOk("��Ǹ����ļ������������㣡");
			cm.dispose();
			return;
		}
		if(cm.getPlayer().getJob() == �ж�ְҵid){
			cm.gainItem(������ID, -1);
			cm.teachSkill(ѧϰ����id, ѧϰ���ܵȼ�, ���ֵȼ�);
			if(����λ�� >= 1 && ����λ�� <= 9){
				cm.getPlayer().changeKeybinding(����λ�� + 1, 1, ѧϰ����id);
			}else if(����λ�� == 0){
				cm.getPlayer().changeKeybinding(11, 1, ѧϰ����id);
			}else{
				cm.sendOk("�����õļ���λ�ò��ڷ�Χ�ڣ�");
				cm.dispose();
				return;
			}
			var channel = cm.getPlayer().getClient().getChannel();
			if(channel < WorldConstants.CHANNEL_COUNT){
				cm.getPlayer().dropMessage(1, "��ϲ��ѧϰ�ɹ���");
				cm.getPlayer().changeChannel(channel + 1);
			}else{
				cm.getPlayer().dropMessage(1, "��ϲ��ѧϰ�ɹ���");
				cm.getPlayer().changeChannel(1);
			}
			
		}else{
			cm.sendOk("��Ǹ�����ְҵ������Ҫ��");
		}
		cm.dispose();
		return;
	} else if (status == 1) {
		
		if(selection == 1){
			
			
		}else if (selection == 2) {
			
			
		} 
		return;
		
	} else {
		cm.dispose();
		return;
	}
}

