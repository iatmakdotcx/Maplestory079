/*
 *
 *  �˽ű���ð�յ��������
 * 
 *
 */


var status = 0;

function start() 
	{
	status = -1;
	action(1, 0, 0);
	}

function action(mode, type, selection)
{
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(350060160);
	if (mode == -1)
	{
		cm.dispose();

    }
    if (cm.getPlayer().getClient().getChannel() != 4 ) {
        cm.sendOk("˹�ڽ�����4Ƶ���ٻ���");
        cm.dispose();
	}
	else if (mode == 0)
	{
		cm.sendOk("�õ����Ҫ��ս��ʱ������.");
		cm.dispose();
	} 
	else 
	{
	if (mode == 1)
	status++;
	else
	status--;
		
	if (status == 0)
	{	

			if (cm.getPlayerCount(350050100) > 0){
	            cm.sendOk("�Ѿ�������ս���޷����룡������Ƚ׶�1>����ͨ��1");
                    cm.dispose();

			 }else  if (cm.getPlayerCount(350050200) > 0){
	            cm.sendOk("�Ѿ�������ս���޷����룡������Ƚ׶�2>����ͨ��2");
                    cm.dispose();
			 }else  if (cm.getPlayerCount(350050300) > 0){
	            cm.sendOk("�Ѿ�������ս���޷����룡������Ƚ׶�3>��������");
                    cm.dispose();
			 }else  if (cm.getPlayerCount(350051000) > 0){
	            cm.sendOk("�Ѿ�������ս���޷����룡������Ƚ׶�4>��ɫ����D1������");
                    cm.dispose();
			 }else  if (cm.getPlayerCount(350051050) > 0){
	            cm.sendOk("�Ѿ�������ս���޷����룡������Ƚ׶�5>��ɫ����D1����2��");
                    cm.dispose();
			 }else  if (cm.getPlayerCount(350051250) > 0){
	            cm.sendOk("�Ѿ�������ս���޷����룡������Ƚ׶�6>�ŷ�ͨ����");
                    cm.dispose();
			 }else  if (cm.getPlayerCount(350060000) > 0){
	            cm.sendOk("�Ѿ�������ս���޷����룡������Ƚ׶�7>�ڲ�������ڣ�");
                    cm.dispose();
			 }else  if (cm.getPlayerCount(350060160) > 0){
	            cm.sendOk("�Ѿ�������ս���޷����룡������Ƚ׶�8>��ɫ�����ڲ�����-��е˹�ڣ�");
                    cm.dispose();
			 }else  if (cm.getPlayerCount(350060180) > 0){
	            cm.sendOk("�Ѿ�������ս���޷����룡������Ƚ׶�9>�ڲ�����2-˹�ڱ���1�׶Σ�");
                    cm.dispose();
			 }else  if (cm.getPlayerCount(350060600) > 0){
	            cm.sendOk("�Ѿ�������ս���޷����룡������Ƚ׶�10>�ڲ�����3-˹�ڱ���2�׶Σ�");
                    cm.dispose();
			 }else  if (cm.getPlayerCount(350060201) > 0){
	            cm.sendOk("�Ѿ�������ս���޷����룡������Ƚ׶�>�ط���ͼ��");
                    cm.dispose();
			}else{
				cm.sendYesNo("��˹#i3994118#\n��ս����������׼����\n\r����ս���������210�����ϣ�\n\r���������3�����ϣ�ÿ����ս��5���ط�����!����������2������!\n\r��ȷʵҪ��ս��֤�����ʵ���뽻����#v4032168#1����~\r\n");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                    cm.dispose();
                }else if (cm.getLevel() < 210){
			cm.sendOk("#r210#k��������Ҳ�����ս!");
			cm.dispose();
			}else if(cm.getBossLog("��˹") >5) {
	            cm.sendOk("����,ϵͳ�޶�ÿ��ֻ����ս5��,���ǿ�н���,�ᱻϵͳ��������!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 2 �����ϵ���Ӳ��ܽ��룡!");
                    cm.dispose();
	}else if(cm.itemQuantity(4032168) < 1) 
{ 

	            cm.sendOk("��û��#z4032168#�ܹ�֤�����ʵ��...");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(350060160) <= 100){
		

	
}			cm.setBossLog("��˹");

                     var FantMap = cm.getMap(350060600);
                     FantMap.resetFully();

                     var FantMap = cm.getMap(350060160);
                     FantMap.resetFully();
                     var FantMap = cm.getMap(350060180);
                     FantMap.resetFully();
			nextmap.resetReactors();
                        //cm.warpParty(350060160);			
			//cm.getEventManager("siwu").startInstance(cm.getParty(),cm.getMap());
                                cm.gainItem(4032168, -1);
                          cm.spawnMobOnMap(9300429,1,78,5,350050300);
                          cm.spawnMobOnMap(8240096,1,-118,60,350051250);
                          cm.spawnMobOnMap(8240096,1,279,190,350051250);
                          cm.spawnMobOnMap(8240096,1,579,362,350051250);
                          cm.spawnMobOnMap(8240096,1,906,456,350051250);
                          cm.spawnMobOnMap(8240096,1,1281,456,350051250);
                          cm.spawnMobOnMap(8240096,1,117,96,350051250);
                          cm.spawnMobOnMap(8240096,1,435,279,350051250);
                          cm.spawnMobOnMap(8240096,1,760,456,350051250);
                          cm.spawnMobOnMap(8240096,1,1145,456,350051250);
                          cm.spawnMobOnMap(8240097,1,2,-16,350060160,22636325622);
                          cm.spawnMobOnMap(8240098,1,-174,-16,350060180,33265988000);
                          cm.spawnMobOnMap(8240099,1,-17,-16,350060600,43265988000);

                                //cm.changeMusic("Bgm48/VerdelDungeon");
                                cm.warpParty(350050100);
                                //cm.givePartyItems(2432262, 5);
//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("����ɫ���á�:[" + cm.getChar().getName() + "]�����������Ľ�������", 5121000, true));
cm.����(2, "[" + cm.getPlayer().getName() + "]���������ս��ɫ����-˹�ڣ�~~");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}