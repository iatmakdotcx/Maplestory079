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
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(863000920);
	if (mode == -1)
	{
		cm.dispose();

    }
    if (cm.getPlayer().getClient().getChannel() != 2 ) {
        cm.sendOk("���յ½�����2Ƶ���ٻ���");
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
 var check1 = cm.getMapFactory().getMap(863010200);
 var check2 = cm.getMapFactory().getMap(863010330);
 var check3 = cm.getMapFactory().getMap(863010210);
 var check4 = cm.getMapFactory().getMap(863010240);
 var check5 = cm.getMapFactory().getMap(863000920);
 var check6 = cm.getMapFactory().getMap(863010500);



            if (check1.playerCount() != 0 || check2.playerCount() != 0 || check3.playerCount() != 0 || check4.playerCount() != 0 || check5.playerCount() != 0 || check6.playerCount() != 0) {
                cm.sendOk("����Զ����������ս�У�~");
                cm.safeDispose();
			}else{
				cm.sendYesNo("��ս���յ�#i3994118#\n��ս����������׼����\n\r����ս���������180�����ϣ�\n\r���������2�����ϣ�\n\r��ȷʵҪ��ս��֤�����ʵ���뽻����#v4033982#1����~\n\r��ս�ɹ��м��ʻ�ã�#v1132243##v1132244##v1132245##v1132246##v1122264##v1122265##v1122266##v1122267##v1032220##v1032221##v1032222##v1032223##v4440101##v4441000##v4442000##v4310097#");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                    cm.dispose();


                }else if (cm.getLevel() < 180){
			cm.sendOk("#r180#k��������Ҳ�����ս!");
			cm.dispose();
			}else if(cm.getBossLog("���յ�2") >5) {
	            cm.sendOk("����,ϵͳ�޶�ÿ��ֻ����ս5��,���ǿ�н���,�ᱻϵͳ��������!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 2 �����ϵ���Ӳ��ܽ��룡!");
                    cm.dispose();
	}else if(cm.itemQuantity(4033982) < 1) 
{ 

	            cm.sendOk("��û��#z4033982#�ܹ�֤�����ʵ��...");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(863000920) <= 100){
		

	
}			cm.setBossLog("���յ�2");

                     var FantMap = cm.getMap(863000920);
                     FantMap.resetFully();


			nextmap.resetReactors();
                        //cm.warpParty(863000920);			
			 //cm.getEventManager("beilede").startInstance(cm.getParty(),cm.getMap());
                                cm.gainItem(4033982, -1);
                          cm.spawnMobOnMap(9390633,2,62,129,863010200);
                          cm.spawnMobOnMap(9390636,1,240,129,863010200);
                          cm.spawnMobOnMap(9390633,2,508,129,863010200);
                          cm.spawnMobOnMap(9390636,1,569,-251,863010200);
                          cm.spawnMobOnMap(9390633,2,550,-251,863010200);
                          cm.spawnMobOnMap(9390633,1,55,-251,863010200);
                          cm.spawnMobOnMap(9390633,2,-57,-706,863010200);
                          cm.spawnMobOnMap(9390633,2,219,-706,863010200);
                          cm.spawnMobOnMap(9390641,1,363,-706,863010200);

                          cm.spawnMobOnMap(9390610,1,0,68,863010330,11600062000);

                          cm.spawnMobOnMap(9390635,1,-257,129,863010210);
                          cm.spawnMobOnMap(9390635,2,-34,129,863010210);
                          cm.spawnMobOnMap(9390635,1,373,129,863010210);
                          cm.spawnMobOnMap(9390635,2,528,129,863010210);

                          cm.spawnMobOnMap(9390635,2,67,-251,863010210);
                          cm.spawnMobOnMap(9390635,1,252,-251,863010210);
                          //cm.spawnMobOnMap(9390618,2,433,-251,863010210);

                          cm.spawnMobOnMap(9390635,2,320,-706,863010210);
                          cm.spawnMobOnMap(9390635,2,20,-706,863010210);
                          //cm.spawnMobOnMap(9390618,1,-282,-706,863010210);

                          cm.spawnMobOnMap(9390612,1,0,86,863010240,11860626489);

                          cm.spawnMobOnMap(9390600,1,12,62,863000920,58260000000);



     

                                //cm.changeMusic("Bgm48/VerdelDungeon");
                                cm.warpParty(863010200,"out00");
//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("���޾�糺졿:[" + cm.getChar().getName() + "]�������ս��˱��յ£���", 5121000, true));
cm.ȫ������(2, "[" + cm.getPlayer().getName() + "]���������ս���յ£�~~");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}