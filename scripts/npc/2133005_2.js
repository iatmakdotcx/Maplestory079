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
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(300010420);
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
			if (cm.getPlayerCount(300010420) > 1){
	            cm.sendOk("�Ѿ�������ս���޷����룡");
                    cm.dispose();
			}else{
				cm.sendYesNo("����#i3994116#\n������ս����\n\r����ս���������100�����ϣ�\n\r~");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                    cm.dispose();
                }else if (cm.getLevel() < 100){
			cm.sendOk("#r100#k��������Ҳ�����ս!");
			cm.dispose();
			}else if(cm.getBossLoga("����") >= ��ս����) {
	            cm.sendOk("����,ϵͳ�޶�ÿ���˺�ÿ��ֻ����ս" + ��ս���� + "��,���ǿ�н���,�ᱻϵͳ��������!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 2 �����ϵ���Ӳ��ܽ��룡!");
                    cm.dispose();
	}else if(cm.itemQuantity(4000440) < 50) 
{ 

	            cm.sendOk("��û��#z4000440#x50���ܹ�֤�����ʵ��...��");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(300010420) <= 100){
		

	
}			
			cm.setBossLoga("����");
			nextmap.resetReactors();
                        //cm.warpParty(300010420);			
			//cm.getEventManager("siwu").startInstance(cm.getParty(),cm.getMap());
                                cm.gainItem(4000440, -50);
                                cm.spawnMobOnMap(5250004,1,409,92,300010420);
                                //cm.changeMusic("Bgm48/VerdelDungeon");
                           cm.warp(300010420, 0);
						   cm.getMap().��ʱ��(120, true, true);
cm.ȫ������(2, "[" + cm.getPlayer().getName() + "] : ���������ս����ɭ�֡����ڡ�����");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}