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
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(350060000);
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
			if (cm.getMonsterCount(350060000) > 0){
			cm.sendOk("�����..");
			cm.dispose();
			}else{
				cm.sendYesNo("������һ�׶�~");
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




 
		}else{
if(cm.getMonsterCount(350060000) <= 999){
		

	
}			
			
                           cm.warpParty(350060160,0);
 //cm.����(2, "[" + cm.getPlayer().getName() + "]���������ս�����~~");
//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("��δ����Ҷ�ǡ�:[" + cm.getChar().getName() + "]�������ս�������", 512102, true));
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}