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
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(863010210);
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
			if (cm.getMonsterCount(863010210) > 0){
			cm.sendOk("����ܵ�ͼ�������˵���..");
			cm.dispose();
			}else{
				cm.sendYesNo("��ϲ������һ�׶�~");
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




 
		}else{
if(cm.getMonsterCount(863010210) <= 999){
		

	
}			
			
                           cm.warpParty(863010240,0);
 //cm.����(2, "[" + cm.getPlayer().getName() + "]���������ս�����~~");
//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("��δ����Ҷ�ǡ�:[" + cm.getChar().getName() + "]�������ս�������", 512102, true));
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}