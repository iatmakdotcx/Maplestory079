

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
					//cm.dispose();
cm.sendSimple("#e#r#L0#���󸱱�#l\r\n\r\n#b#L1#С���ϳ�����#l");
	}//status
else if (a == 1) {
switch (selection) {
case 0:
 if(((cm.getHour()>=21 && cm.getHour()<22) && (cm.getPlayer().getMapId() == 910000000) ) || cm.getPlayer().isGM()){//��Ҷ��)){
 	cm.dispose();
	cm.openNpc(3001021,1);//��ʵ��1 �޸�
		}else {
		cm.sendOk("��������9��-10��ŻῪ��!��ӭ��λð�յ�������������ð�յ�107,Ⱥ��18341304");	
		cm.dispose();	
		}
break;
case 1:

 cm.dispose()
cm.openNpc(9900000,990)
break;

	}
}//
}
}