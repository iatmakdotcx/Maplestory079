/*
 * NPC : Francis (Doll master)
 * Map : 910510200
 */

var status = -1;

function action(mode, type, selection) {
    if (mode == 1) {
	status++;
    } else {
	status--;
    }
    if (status == 0) {
	cm.sendNextS("����#p1204001#��ɫ���ĳ�Ա������ô������������?? �㺦�ҵ���ë���ַ��ˣ��ҷ���ҪЧ���ں�ħ��ʦ��Ҫ����ץס���ˣ��һ����㸶�����۵ģ�", 9);
    } else if (status == 1) {
	cm.sendNextPrevS("#b(��ɫ���? ������˭? ����ô���ָ���ħ��ʦ������ϵ��Ҳ��ñ���Ŷԡ�)#k", 3);
    } else if (status == 2) {
	// if (cm.�ж�����(21719) == 1) {
		// cm.�������(21719);
	// }
	cm.forceCompleteQuest(21719);
	cm.forceStartQuest(21720);
	cm.warp(105070300, 3);
	cm.dispose();
    }
}