importPackage(net.sf.sunms.tools);
importPackage(net.sf.sunms.client);
importPackage(net.sf.sunms.server);
importPackage(java.util);
importPackage(Packages.client);
importPackage(Packages.server);
importPackage(Packages.tools);
importPackage(Packages.tools.packet);
var status = 0;

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {

	    var //textz = "\r\n\t\t  #e���影��ϵͳ--��ǰ��������:#r" + cm.showghrs() + "��#k\r\n\r\n";//��������#r" + cm.showghrs() + "#k\r\n"
		//textz += "#e#d#L0#���������״�ͻ��10�˽���1000��ȯ(ALL)#l\r\n\r\n";
		//textz += "#e#d#L1#�����˴��״�ͻ��30�˽���2000��ȯ(ALL)#l\r\n\r\n";
		//textz += "#e#d#L2#�����˴��״�ͻ��50�˽���3000��ȯ(ALL)#l\r\n\r\n";
		//textz += "#e#d#L3#�����˴��״�ͻ��80�˽���200000��ȯ(ALL)#l\r\n\r\n";
		/*cm.sendSimple (textz);  

	}else if (status == 1) {

	if (selection == 0){//�˼��������״�ͻ��10�˽���1000��ȯ �峤��ȡ   ��������ѫ��һö(��Ա��ȡ)
			if(cm.getPlayer().getOneTimeLog("jiazu1") > 0 ){//|| cm.showghrs() != 10
			cm.sendOk("���Ѿ���ȡ���˼��帣�������");
            cm.dispose();
			}else{
			if(cm.showghrs() < 10){
			cm.sendOk("δ��������");
            cm.dispose();
			}else{
			if (cm.getPlayerStat("GID") >= 0 || cm.getPlayerStat("GRANK") != 1) {
			cm.gainNX(5000);
			//cm.gainItem(1142107,95,95,95,95,0,0,0,0,0,0,0,0,0,0);
			cm.getPlayer().setOneTimeLog("jiazu1");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�˼��������ﵽ10��,��Ϊ�峤����5000��ȯ��");
            cm.dispose();
			}else{
			//cm.gainItem(1142107,95,95,95,95,0,0,0,0,0,0,0,0,0,0);
            cm.sendOk("��ȡ�ɹ���");
			cm.getPlayer().setOneTimeLog("jiazu1");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]���ڵĴ˼��������ﵽ10��,��ȡ�˴˼��帣�������");
            cm.dispose();
}}}
}else if (selection == 1){//�˼����˴��״�ͻ��30�˽���2000��ȯ(�峤��ȡ)   �м�����ѫ��һö(��Ա��ȡ)1142108
			if(cm.getPlayer().getOneTimeLog("jiazu2") > 0 ){//|| cm.showghrs() != 10
			cm.sendOk("���Ѿ���ȡ���˼��帣�������");
            cm.dispose();
			}else{
			if(cm.showghrs() < 30){
			cm.sendOk("δ��������");
            cm.dispose();
			}else{
			if (cm.getPlayerStat("GID") >= 0 || cm.getPlayerStat("GRANK") != 1) {
			//cm.gainItem(1142108,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//�м�����ѫ��
			cm.gainNX(30000);
			cm.getPlayer().setOneTimeLog("jiazu2");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�˼��������ﵽ30��,��Ϊ�峤����30000��ȯ��");
            cm.dispose();
			}else{
			//cm.gainItem(1142108,100,100,100,100,0,0,0,0,0,0,0,0,0,0);//�м�����ѫ��
            cm.sendOk("��ȡ�ɹ���");
			cm.getPlayer().setOneTimeLog("jiazu2");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]���ڵĴ˼��������ﵽ30��,��ȡ�˴˼��帣�������");
            cm.dispose();
}}}
}else if (selection == 2){//�˼����˴��״�ͻ��50�˽���4000��ȯ(�峤��ȡ)   �߼�����ѫ��һö(��Ա��ȡ)
			if(cm.getPlayer().getOneTimeLog("jiazu3") > 0 ){//|| cm.showghrs() != 10
			cm.sendOk("���Ѿ���ȡ���˼��帣�������");
            cm.dispose();
			}else{
			if(cm.showghrs() < 50){
			cm.sendOk("δ��������");
            cm.dispose();
			}else{
			if (cm.getPlayerStat("GID") >= 0 || cm.getPlayerStat("GRANK") != 1) {
			//cm.gainItem(1142109,105,105,105,105,0,0,0,0,0,0,0,0,0,0);//�߼�����ѫ��
			cm.gainNX(100000);
			cm.getPlayer().setOneTimeLog("jiazu3");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�˼��������ﵽ50��,��Ϊ�峤����100000��ȯ��");
            cm.dispose();
			}else{
			//cm.gainItem(1142109,105,105,105,105,0,0,0,0,0,0,0,0,0,0);//�߼�����ѫ��
            cm.sendOk("��ȡ�ɹ���");
			cm.getPlayer().setOneTimeLog("jiazu3");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]���ڵĴ˼��������ﵽ50��,��ȡ�˴˼��帣�������");
            cm.dispose();
}}}
}else if (selection == 3){//�˼����˴��״�ͻ��80�˽���6000��ȯ(�峤��ȡ)   �񼶹���ѫ��һö(��Ա��ȡ)
			if(cm.getPlayer().getOneTimeLog("jiazu4") > 0 ){//|| cm.showghrs() != 10
			cm.sendOk("���Ѿ���ȡ���˴˼��帣�������");
            cm.dispose();
			}else{
			if(cm.showghrs() < 80){
			cm.sendOk("δ��������");
            cm.dispose();
			}else{
			if (cm.getPlayerStat("GID") >= 0 || cm.getPlayerStat("GRANK") != 1) {
			//cm.gainItem(1142100,110,110,110,110,0,0,0,0,0,0,0,0,0,0);//
			cm.gainNX(200000);
			cm.getPlayer().setOneTimeLog("jiazu4");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]�˼��������ﵽ80��,��Ϊ�峤����200000��ȯ��");
            cm.dispose();
			}else{
			//cm.gainItem(1142100,110,110,110,110,0,0,0,0,0,0,0,0,0,0);//
			cm.sendOk("��ȡ�ɹ���");
			cm.getPlayer().setOneTimeLog("jiazu4");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]���ڵĴ˼��������ﵽ80��,��ȡ�˴˼��帣�������");
            cm.dispose();
			}}}}}}}
