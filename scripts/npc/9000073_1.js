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
			if (cm.getPlayerCount(252030100) > 0){
	            cm.sendOk("�Ѿ�������ս���޷����룡");
                    cm.dispose();
			}else{
				cm.sendYesNo("��սҪ��120�����ϣ�ÿ����ս��Ҫ#v4001431#ÿ����3�λ�����Ҫ��ս�����������˵Ļ����������ƽ���Ӵ��~");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                    cm.dispose();

			}else if(cm.getBossLog("nwn01") >10) {
	            cm.sendOk("���������ս�����Ѿ������ˣ�������������..");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 1 �����ϵ���Ӳ��ܽ��룡!");
                    cm.dispose();
	}else if(cm.itemQuantity(4001431) < 1) 
{ 

	            cm.sendOk("�����û��#v4001431#");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(252030100) <= 100){
		

	
}			cm.setBossLog("nwn01");

			nextmap.resetReactors();			
			//cm.getEventManager("sl").startInstance(cm.getParty(),cm.getMap());
                         cm.spawnMobOnMap(8800200,1,746,512,252030100);

                                cm.gainItem(4001431, -1);
                                cm.warpParty(252030100);
                                cm.ȫ������(2, "[" + cm.getPlayer().getName() + "]���������ս��������������");
                                //cm.serverNotice("���ؾ����߲㡻����" + cm.getChar().getName() + "�����������ս��ɮȥ�ˣ�");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}