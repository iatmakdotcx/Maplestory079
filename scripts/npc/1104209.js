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
			if (cm.getPlayerCount(272030400) > 0){
	            cm.sendOk("�Ѿ�������ս���޷����룡");
                    cm.dispose();
			}else{
				cm.sendYesNo("��ֹ�������ս���ʱ����������ȵõ��ڴ�Ԫ��϶�ĸ����ص�ͬ�⣡\r\n\r\n��ս������ӳ�Ա��ﵽ170�����ϣ������ó�������������֤��#v4033117#��\r\n\r\n���ܰ��������м��ʻ�ã�\r\n#v1122034##v1122035##v1122036##v1122037##v1122038##v5200002##v4441000#��ϡ����Ʒ��װ��");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                    cm.dispose();
                }else if (cm.getLevel() < 170){
			cm.sendOk("#r170#k��������Ҳ�����ս!");
			cm.dispose();
			}else if(cm.getBossLog("��������") >10) {
	            cm.sendOk("����,ϵͳ�޶�ÿ��ֻ����ս10��,���ǿ�н���,�ᱻϵͳ��������!");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 2 �����ϵ���Ӳ��ܽ��룡!");
                    cm.dispose();
	}else if(cm.itemQuantity(4033117) < 1) 
{ 

	            cm.sendOk("��û��#v4033117##z4033117#�ܹ�֤�����ʵ��...");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(272030400) <= 100){
		

	
}			cm.setBossLog("��������");
                     var FantMap = cm.getMap(272030400);
                     FantMap.resetFully();

			nextmap.resetReactors();			
			//cm.getEventManager("aka").startInstance(cm.getParty(),cm.getMap());
                             cm.spawnMobOnMap(8860000,1,-12,-181,272030400);
//Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.startMapEffect("����Ԫ��϶��:[" + cm.getChar().getName() + "]���������ս�������գ�", 5121006, true));
cm.ȫ������(2, "[" + cm.getPlayer().getName() + "]���������ս��Ԫ��϶-�������գ�~~");
                                cm.gainItem(4033117, -1);
                                cm.warpParty(272030400);
                                //cm.serverNotice("��ʱ���϶������" + cm.getChar().getName() + "�����������ս��������ȥ�ˣ�");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}