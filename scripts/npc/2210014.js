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
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(240093300);
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
			if (cm.getPlayerCount(240093300) > 0){
	            cm.sendOk("�Ѿ�������ս���޷����룡");
                    cm.dispose();
			}else{
				cm.sendYesNo("֩��Ů��#i3994117#\n������ս����\n\r����ս���������155�����ϣ�\n\r ��Ҫ#v4033124#x50����~~");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                    cm.dispose();
                }else if (cm.getLevel() < 155){
			cm.sendOk("#r155#k��������Ҳ�����ս!");
			cm.dispose();
			}else if(cm.getBossLog("֩��Ů��1") >10) {
	            cm.sendOk("����,ϵͳ�޶�ÿ��ֻ����ս10��,���ǿ�н���,�ᱻϵͳ��������!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 2 �����ϵ���Ӳ��ܽ��룡!");
                    cm.dispose();
	}else if(cm.itemQuantity(4033124) < 50) 
{ 

	            cm.sendOk("��û��#v4033124#x50...��");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(240093300) <= 100){
		

	
}			cm.setBossLog("֩��Ů��1");

                     var FantMap = cm.getMap(240093300);
                     FantMap.resetFully();

			nextmap.resetReactors();
                        //cm.warpParty(240093300);			
			//cm.getEventManager("siwu").startInstance(cm.getParty(),cm.getMap());
                                cm.gainItem(4033124, -50);
                                cm.spawnMobOnMap(8800400,1,187,97,240093300,6670000000);
                                //cm.changeMusic("Bgm48/VerdelDungeon");
                           cm.warp(240093300, 0);
cm.ȫ������(2, "[" + cm.getPlayer().getName() + "]����������ұھ����ڲ���ս��֩��Ů��������");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}