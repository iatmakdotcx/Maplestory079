/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		cm.dispose();
		return;
	}
	if (status == 0) {
		qm.sendPlayerToNpc("�侲����ֻ���롣�ðɣ�����������������ô����.");
	} else if (status == 1) {
		qm.sendPlayerToNpc("1.��������ಿ����Ȼ���ᣬ��˺�ħ��ʿ���仹�Ǻܵ�λ.");
	} else if (status == 2) {
		qm.sendPlayerToNpc("2.����˭������Ψһ��һ�����Ҳ�֪��Ϊʲô�����ҵõ��˺�ħ��ʿ�ܷ�����ĸо�.");
	} else if (status == 3) {
		qm.sendPlayerToNpc("3. ��Ҫ���������Ҷ���磬����ֻ��10�����Ҳ�������......�����ж�ǿ���ǻ�������Ȼ����!");
	} else if (status == 4) {
		qm.sendPlayerToNpc("�ң���������һ������Ҫȷ����û��ʲôë����.");
	} else {
		qm.dispose();
	}
}
function end(mode, type, selection) {
	qm.forceCompleteQuest(29952);
	qm.dispose();
}
