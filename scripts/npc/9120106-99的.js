function start() {
	//cm.sendSimple("<3 <3");
	cm.sendSimple("#b#b����������װ����������.#k\r\n\r\n#L1##r��ָ�ϳ�\n\#l\t#L2##r�����ϳ�\n\#l\t#L3##r�����ϳ�#k\r\n\r\n#L4##r���ˮ���ϳ�#l");
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 1) {	
    cm.openNpc(9120106, 1);//��ָ�ϳ�
	}
	else if (selection == 2) {
	//cm.openNpc(9120106, 2);//�����ϳ�
	cm.sendOk("��δ���ţ������ڴ���");
	cm.dispose();
	}
	else if (selection == 3) {
	cm.openNpc(9120106, 3);//�����ϳ�
	}
	else if (selection == 4) {	
    cm.openNpc(9120106, 4);//���ˮ��
	}
}
