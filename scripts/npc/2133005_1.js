/*
 *
 *  �˽ű���ð�յ��������
 * 
 *
 */

var ��ս���� = 1;
var status = 0;

function start() 
	{
	status = -1;
	action(1, 0, 0);
	}

function action(mode, type, selection)
{
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(300030310);
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
			if (cm.getPlayerCount(300030310) > 1){
	            cm.sendOk("�Ѿ�������ս���޷����룡");
                    cm.dispose();
			}else{
				cm.sendYesNo("����Ů��#i3994117#\n������ս����\n\r����ս���������120�����ϣ�\n\r ��Ҫ#v4000676#x50����~~");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                    cm.dispose();
                }else if (cm.getLevel() < 120){
			cm.sendOk("#r110#k��������Ҳ�����ս!");
			cm.dispose();
			}else if(cm.getBossLoga("����Ů��") >= ��ս����) {
	            cm.sendOk("����,ϵͳ�޶�ÿ���˺�ÿ��ֻ����ս" + ��ս���� + "��,���ǿ�н���,�ᱻϵͳ��������!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 2 �����ϵ���Ӳ��ܽ��룡!");
                    cm.dispose();
	}else if(cm.itemQuantity(4000676) < 50) 
{ 

	            cm.sendOk("��û��#v4000676#x50...��");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(300030310) <= 100){
		

	
}			cm.setBossLoga("����Ů��");
			nextmap.resetReactors();
                        //cm.warpParty(300030310);			
			//cm.getEventManager("siwu").startInstance(cm.getParty(),cm.getMap());
                                cm.gainItem(4000676, -50);
                                cm.spawnMobOnMap(5250007,1,-19,150,300030310);
                                //cm.changeMusic("Bgm48/VerdelDungeon");
                           cm.warp(300030310, 0);
						   cm.getMap().��ʱ��(45, true, true);
cm.ȫ������(2, "[" + cm.getPlayer().getName() + "] : ��������ڰ���ɭ����ս������Ů��������");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}