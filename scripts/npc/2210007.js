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
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(910000016);
	if (mode == -1)
	{
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
			if (cm.getPlayerCount(924030300) > 0){
	            cm.sendOk("�Ѿ�������ս���޷����룡");
                    cm.dispose();
			}else{
				cm.sendYesNo("�������Ѿ�֪������������ˣ������֪���Ļ�ȥ���ʿ����ų����Ȱɣ����ڿ�̽������������Ѿ�֪�����Ҿ�����һ�̰ɣ�");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                    cm.dispose();
                }else if (cm.getLevel() < 200){
			cm.sendOk("#r200#k��������Ҳ�����ս!");
			cm.dispose();
			}else if(cm.getBossLog("dahuacao") >10) {
	            cm.sendOk("����,ϵͳ�޶�ÿ��ֻ����ս10��,���ǿ�н���,�ᱻϵͳ��������!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 1 �����ϵ���Ӳ��ܽ��룡!");
                    cm.dispose();
	}else if(cm.itemQuantity(4001272) < 1) 
{ 

	            cm.sendOk("�����û���ҵ���ʵ�����ܲ���������ȥ!��ȥ���ʿ�̽�ӳ�...");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(924030300) <= 100){
		

	
}			cm.setBossLog("dahuacao");
                     var FantMap = cm.getMap(924030300);

                     FantMap.resetFully();

			nextmap.resetReactors();			
			//cm.getEventManager("dahuacao").startInstance(cm.getParty(),cm.getMap());

                          cm.spawnMobOnMap(8860001,1,44,335,924030300,10120000000);
//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("���ұھ��ˡ�:[" + cm.getChar().getName() + "]���������ս����ʳ�˻���", 5121007, true));
cm.ȫ������(2, "[" + cm.getPlayer().getName() + "]���������ս��³��˼-�������տ���~~");
                                cm.gainItem(4001272, -1);
                                cm.warpParty(924030300);
                                //cm.serverNotice("���ұھ��ˡ�����" + cm.getChar().getName() + "�����������ս�ұڴ󻨲�ȥ�ˣ�");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}