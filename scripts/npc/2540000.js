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
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(992050000);
	if (mode == -1)
	{
		cm.dispose();
        }
    if (cm.getPlayer().getClient().getChannel() != 3 ) {
        cm.sendOk("����˹������3Ƶ���ٻ���");
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


 var check1 = cm.getMapFactory().getMap(992020000);
 var check2 = cm.getMapFactory().getMap(992024000);
 var check3 = cm.getMapFactory().getMap(992025000);
 var check4 = cm.getMapFactory().getMap(992032000);
 var check5 = cm.getMapFactory().getMap(992039000);
 var check6 = cm.getMapFactory().getMap(992050000);



            if (check1.playerCount() != 0 || check2.playerCount() != 0 || check3.playerCount() != 0 || check4.playerCount() != 0 || check5.playerCount() != 0 || check6.playerCount() != 0 ) {
                cm.sendOk("����Զ����������ս�У�~");
                cm.safeDispose();






			}else{
				cm.sendYesNo("��Դ֮��-����˿#i3994118#��ȷ��Ҫ��ս��?��ս��Ҫ����210�ȼ����ϣ�~\r\n�м��ʻ�ã�#v4440101##v4442000##v1382235##v2049301##v1302333##v1402251##v1322250##v1372222##v1382259##v1412177##v1422184##v1432214##v1442268##v1452252##v1462239##v1472261##v1482216##v1492231#\r\n");
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
			}else if(cm.getBossLog("tls1") >5) {
	            cm.sendOk("����,ϵͳ�޶�ÿ��ֻ����ս5��,���ǿ�н���,�ᱻϵͳ��������!");
                    cm.dispose();


 
		}else{
if(cm.getMonsterCount(992050000) <= 100){
		

	
}			cm.setBossLog("tls1");
                     var FantMap = cm.getMap(992050000);
 
                     FantMap.resetFully();

			nextmap.resetReactors();
                        //cm.warpParty(992050000);			
                          cm.spawnMobOnMap(9309207,1,656,185,992050000,86810603200);

                          cm.spawnMobOnMap(9390001,2,-335,155,992020000,1200000000);
                          cm.spawnMobOnMap(9390001,2,132,155,992020000,2200000000);
                          cm.spawnMobOnMap(9390001,2,432,155,992020000,3300000000);
                          cm.spawnMobOnMap(9390001,1,739,155,992020000,4400000000);
                          cm.spawnMobOnMap(9390001,1,739,155,992020000,5400000000);

                          cm.spawnMobOnMap(9390008,3,-264,208,992025000,400000000);
                          cm.spawnMobOnMap(9390008,3,19,182,992025000,400000000);
                          cm.spawnMobOnMap(9390008,3,277,208,992025000,400000000);
                          cm.spawnMobOnMap(9390008,3,402,208,992025000,400000000);

                          cm.spawnMobOnMap(9390006,1,-1113,-990,992032000,662000000);
                          cm.spawnMobOnMap(9390006,1,-809,-990,992032000,662000000);






                                //cm.gainItem(4000313, -50);
                                //cm.changeMusic("Bgm48/VerdelDungeon");
                                cm.warpParty(992020000);
//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("����Դ֮����:[" + cm.getChar().getName() + "]���������ս����˿��", 5121006, true));
cm.����(2, "[" + cm.getPlayer().getName() + "]�����������Դ֮��-����˿��~~");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}