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
			if (cm.getPlayerCount(200101500) > 1){
	            cm.sendOk("�Ѿ�������ս���޷����룡");
                    cm.dispose();
			}else{
				cm.sendYesNo("��սҪ��110�����ϣ�ÿ����ս��Ҫ#v4032912#ÿ���˺�ÿ����" + ��ս���� + "�λ�����Ҫ��սѦ��˹��");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                    cm.dispose();

			}else if(cm.getBossLoga("Ѧ��˹") >= ��ս����) {
	            cm.sendOk("���˺Ž������ս�����Ѿ������ˣ�������������..");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 1 �����ϵ���Ӳ��ܽ��룡!");
                    cm.dispose();
	}else if(cm.itemQuantity(4032912) < 1) 
{ 

	            cm.sendOk("�����û��#v4032912#");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(200101500) <= 100){
		

	
}			cm.setBossLoga("Ѧ��˹");

			nextmap.resetReactors();			
			//cm.getEventManager("sl").startInstance(cm.getParty(),cm.getMap());
                         cm.spawnMobOnMap(6160003,1,763,228,200101500);

                                cm.gainItem(4032912, -1);
                                cm.warpParty(200101500);
								cm.getMap().��ʱ��(180, true, true);
                                //cm.worldSpouseMessage(0x20,"[����еĿ�����] ��� "+ cm.getChar().getName() +" ���������սѦ��˹��");
                                cm.serverNotice("������еĿ�����������" + cm.getChar().getName() + "���������Ѧ��˹��");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}