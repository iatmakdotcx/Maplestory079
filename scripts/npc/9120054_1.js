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
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(803001200);
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
			if (cm.getPlayerCount(803001200) > 0){
	            cm.sendOk("�Ѿ�������ս���޷����룡");
                    cm.dispose();
			}else{
				cm.sendYesNo("糺�BOSS,��ħ��,��֮ħŮ,Ѫ�潫��,��������#1\n\r##i3994117#������ս����\n\r����ս���������140�����ϣ�\n\r�м��ʻ�ã�ϡ��װ����ר��糺���Ʒ~");
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
			}else if(cm.getBossLog("糺�01") >10) {
	            cm.sendOk("����,ϵͳ�޶�ÿ��ֻ����ս10��,���ǿ�н���,�ᱻϵͳ��������!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 2 �����ϵ���Ӳ��ܽ��룡!");
                    cm.dispose();
	}else if(cm.itemQuantity(4031497) < 1) 
{ 

	            cm.sendOk("��û��#v4031497##z4031497#��");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(803001200) <= 100){
		

	
}			cm.setBossLog("糺�01");
			nextmap.resetReactors();
                        //cm.warpParty(803001200);			
			//cm.getEventManager("siwu").startInstance(cm.getParty(),cm.getMap());
                                cm.gainItem(4031497, -1);
                     var FantMap = cm.getMap(803001200);
                     FantMap.resetFully();


			    cm.spawnMobOnMap(9400592,1,1940,276,803001200);
                            cm.spawnMobOnMap(9400591,1,1640,276,803001200);
                            cm.spawnMobOnMap(9400589,1,1040,276,803001200);
                            cm.spawnMobOnMap(9400590,1,640,276,803001200);
                          cm.warpParty(803001200);

                        
                         
 cm.����(2, "[" + cm.getPlayer().getName() + "]���������ս糺��½��~~");
//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("��δ����Ҷ�ǡ�:[" + cm.getChar().getName() + "]�������ս糺�01����", 512102, true));
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}