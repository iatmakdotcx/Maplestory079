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
			if (cm.getPlayerCount(211070200) > 0){
	            cm.sendOk("�Ѿ�������ս���޷����룡");
                    cm.dispose();
			}else{
				cm.sendYesNo("�����ǾȾȱ��ڻ�ʨ����...���Ǳ���ȡ����������!\r\n\r\n��ս���������Ҫ�ﵽ140�����ϣ����#v4032839##z4032839#��\r\n\r\n�м��ʱ�����#v1302152##v1402095##v1442116##v1332225##v1402196##v1432167##v1072972##v1052808##v1052807##v1052806##v1052805##v1052804##v1082617##v1082616##v1082615##v1082614##v1082613##v1102713##v2041020##v2041014##v2040925##v2040933##v4001608##v1072973#��ϡ��װ��");
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
			}else if(cm.getBossLog("ʨ����") >10) {
	            cm.sendOk("����,ϵͳ�޶�ÿ��ֻ����ս10��,���ǿ�н���,�ᱻϵͳ��������!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 2 �����ϵ���Ӳ��ܽ��룡!");
                    cm.dispose();
	}else if(cm.itemQuantity(4032839) < 1) 
{ 

	            cm.sendOk("��û��#z4032839#...");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(211070200) <= 100){
		

	
}			cm.setBossLog("ʨ����");
                     var FantMap = cm.getMap(211070200);
                     FantMap.resetFully();

			nextmap.resetReactors();			
			//cm.getEventManager("shiziwang").startInstance(cm.getParty(),cm.getMap());

                          cm.spawnMobOnMap(8840000,1,7,-181,211070200,6300000000);
//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("��ʨ����֮�ǡ�:[" + cm.getChar().getName() + "]���������ս��-�װ���", 5121006, true));
cm.ȫ������(2, "[" + cm.getPlayer().getName() + "]���������սʨ������~~");
                                cm.gainItem(4032839, -1);
                                cm.warpParty(211070200);
cm.ȫ������(1, "[" + cm.getPlayer().getName() + "]���������սʨ������ϣ������ƽ��������~");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}