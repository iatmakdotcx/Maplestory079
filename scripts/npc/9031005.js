var status = -1;
var sel = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	if (status == 0) {
	    cm.dispose();
	}
	status--;
    }
    if (status == 0) {
	cm.sendSimple("#b#L0#ѧϰ/����������#l");
    } else if (status == 1) {
	    if (cm.getPlayer().getProfessionLevel(92040000) > 0) {
		cm.sendYesNo("��ȷ��Ҫ����������������ʧȥ������������EXP /ˮƽ.");
	    } else if (cm.getPlayer().getProfessionLevel(92020000) > 0 || cm.getPlayer().getProfessionLevel(92030000) > 0 || cm.getPlayer().getProfessionLevel(92000000) <= 0) {
		cm.sendOk("��ѧ��������������������Ϊ���Ѿ��ж���򸽼��ֹ��գ�����û�в�ҩ.");
		cm.dispose();
	    } else {
		cm.sendYesNo("����ѧϰ������?");
	    }
    } else if (status == 2) {
	    if (cm.getPlayer().getProfessionLevel(92040000) > 0) {
		cm.sendOk("�㲻��ͨ��������.");
		cm.teachSkill(92040000, 0, 0);
	    } else {
		cm.sendOk("���Ѿ�ѧ��������.");
		cm.teachSkill(92040000, 0x1000000, 0); //00 00 00 01
	    }
	    cm.dispose();
    }
}