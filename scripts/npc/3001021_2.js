/* ===========================================================
			ע�� itemQuantity()
	�ű�����: 		NPC
	���ڵ�ͼ:		
	�ű�����:		
=============================================================
���ű�Դ��������������Ϊ��������֮�á�����Ȩ������ϵ���ǣ����ǽ��ڵ�һʱ��ɾ����
*/

var a = 0;

function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
			if (a == -1){
				cm.dispose();
			}else if (a == 0) {
				cm.sendYesNo("#e#rȷ��Ҫ��ȥ�𣿳�ȥ�˾ͽ�������Ŷ����");

	}//status
else if (a == 1) {
cm.warp(910000000,0);
cm.dispose();
}
}
}