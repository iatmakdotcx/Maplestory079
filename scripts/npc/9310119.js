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
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(703020101);
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
			if (cm.getPlayerCount(703020101) > 0){
	            cm.sendOk("�Ѿ�������ս���޷����룡");
                    cm.dispose();
			}else{
				cm.sendYesNo("���#i3994117#\n������ս����\n\r����ս���������140�����ϣ�\n\r�м��ʻ�ã�#v2290023##v2290016##v2290018##v2290021##v2290007##v2290033##v2290049##v2290051##v1432167##v1472214##v4033255##v1412103##v2340000##v4440000#��ϡ��װ������Ʒ~");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                    cm.dispose();
                }else if (cm.getLevel() < 140){
			cm.sendOk("#r140#k��������Ҳ�����ս!");
			cm.dispose();
			}else if(cm.getBossLog("���") >10) {
	            cm.sendOk("����,ϵͳ�޶�ÿ��ֻ����ս10��,���ǿ�н���,�ᱻϵͳ��������!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 2 �����ϵ���Ӳ��ܽ��룡!");
                    cm.dispose();
	}else if(cm.itemQuantity(4001696) < 1) 
{ 

	            cm.sendOk("��û��#v4001696##z4001696#���ܿ���ԭ����֮��...ȥ���ʽ�ʿ�ɣ���Ӧ��֪�������");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(703020101) <= 100){
		

	
}			cm.setBossLog("���");
			nextmap.resetFully();
                        //cm.warpParty(703020101);			
			//cm.getEventManager("siwu").startInstance(cm.getParty(),cm.getMap());
                                cm.gainItem(4001696, -1);
                          cm.spawnMobOnMap(9600086,1,578,220,703020101);
                          //cm.spawnMobOnMap(8240096,1,-118,60,350051250);
                          //cm.spawnMobOnMap(8240096,1,279,190,350051250);
                          //cm.spawnMobOnMap(8240096,1,579,362,350051250);
                          //cm.spawnMobOnMap(8240096,1,906,456,350051250);
                          //cm.spawnMobOnMap(8240096,1,1281,456,350051250);
                          //cm.spawnMobOnMap(8240096,1,117,96,350051250);
                          //cm.spawnMobOnMap(8240096,1,435,279,350051250);
                          //cm.spawnMobOnMap(8240096,1,760,456,350051250);
                          //cm.spawnMobOnMap(8240096,1,1145,456,350051250);
                         // cm.spawnMobOnMap(8240097,1,2,-16,703020101);

                                //cm.changeMusic("Bgm48/VerdelDungeon");
                           cm.warpParty(703020101, 0);
 cm.ȫ������(9, "[" + cm.getPlayer().getName() + "] : ���������ս�����~~");
//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("��δ����Ҷ�ǡ�:[" + cm.getChar().getName() + "]�������ս�������", 512102, true));
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}