/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */

var status = -1;

function start(mode, type, selection) {
	end(mode,type,selection); //idk lol
}

function end(mode, type, selection) {
    if (mode == 0) {
	if (status == 0) {
	    qm.sendNext("�Ҳ��㻹û׼���á�");
	    qm.dispose();
	    return;
	} else if (status >= 2) {
	    status--;
	} else {
	    qm.dispose();
	    return;
	}
    } else {
	status++;
    }
    if (status == 0) {
		qm.sendYesNo("����ڻʼ���ʿ�ţ���ô�����Ϊһ����ʿ������һԱ����");
    } else if (status == 1) {
	    qm.forceCompleteQuest();
	    if (qm.getJob() == 1111) {
		//qm.changeJob(1112);
		qm.teachSkill(10001005,1,1,-1);//Ӣ�ۻ���
	    } else if (qm.getJob() == 1211) {
		//qm.changeJob(1212);
		qm.teachSkill(10001005,1,1,-1);//Ӣ�ۻ���
	    } else if (qm.getJob() == 1311) {
		//qm.changeJob(1312);
		qm.teachSkill(10001005,1,1,-1);//Ӣ�ۻ���
	    } else if (qm.getJob() == 1411) {
		//qm.changeJob(1412);
		qm.teachSkill(10001005,1,1,-1);//Ӣ�ۻ���
	    } else if (qm.getJob() == 1511) {
		//qm.changeJob(1512);
		qm.teachSkill(10001005,1,1,-1);//Ӣ�ۻ���
	    }
	    qm.sendNext("�����ڻʼ���ʿ�ŵ���ʿ������һԱ,�����#rӢ�ۻ���#k���ܡ�");
		qm.dispose();
    } else if (status == 3) {
	qm.sendPrev("���ڻ�ȥ��Ů�ʰɡ�");
	qm.dispose();
    }
}