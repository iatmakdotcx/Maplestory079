/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
var status = -1;

function start(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;

    if (status == 0) {
	qm.sendNext("�ҿ��Ը������Ѿ�������������ĺ�Ŭ�������Ѿ���10��������Ϊ����ʱ�䣬������������Ϊһ�����壬����ʽ��Ϊ��ʿ��ѵ��������֮ǰ�����ǣ���������һ���¡�����������ϣ��beome����?");
    } else if (status == 1) {
	qm.sendNext("���о��ǲ�Ҫ��Ϊһ����ʿ�ĵ�һ·������ʵ�ϣ��������ǵ춨���㡣����������ѡ������Ҫ�ߵ�·����������Ӧ�����㲻���ڡ������Ϊʲô......���ṩ���㿴������ӣ�һ�����Ϊ��ʿ.");
    } else if (status == 2) {
	qm.sendNext("����ô�������Ƿ�����Ȥ�ڿ����Լ���Ϊ��ʿ�����䣿������Ѿ���������Ҫʲô������ʿ��Ϊ����ô�㲻һ���ῴ��...#b#L0#�������Ҹ���ô�ῴ��������Ϊ��ʿ������.#l ..#b#L1#������û��.");
    } else if (status == 3) {
	qm.sendYesNo("���뿴�����Լ���Ȩ���𣿶�Ƭ����������Ϊ�㼴��������Щ׼��.");
    // IF selected no
    //Talk to me after you have decided what you really want to do. Whatever you choose, you will not miss out or lose privileges, so don't take this too seriously...
    } else if (status == 4) {
	qm.forceStartQuest();
	qm.playerSummonHint(false);
	qm.MovieClipIntroUI(true);
	qm.warp(913040100, 0);
	qm.dispose();
    }
}

function end(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
	qm.sendNextPrev("����");
	qm.dispose();
    }
}