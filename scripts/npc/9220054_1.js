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
			if (cm.getPlayerCount(510102200) > 1){
	            cm.sendOk("�Ѿ�������ս���޷����룡");
                    cm.dispose();
			}else{
				cm.sendYesNo("��սҪ��100�����ϣ�ÿ����ս��Ҫ#v4000313#1��ÿ���˺�ÿ����" + ��ս���� +"�λ��ᣬ��Ҫ��ս��ͷȮ��");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                    cm.dispose();

			}else if(cm.getBossLoga("��ͷȮ") >= ��ս����) {
	            cm.sendOk("���˺Ž������ս�����Ѿ������ˣ�������������..");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 1 �����ϵ���Ӳ��ܽ��룡!");
                    cm.dispose();
	}else if(cm.itemQuantity(4000313) < 1) 
{ 

	            cm.sendOk("�����û��#v4000313#");
                    cm.dispose();
 
		}else{
if(cm.getMonsterCount(510102200) <= 100){
		

	
}			cm.setBossLoga("��ͷȮ");

			nextmap.resetReactors();			
			//cm.getEventManager("sl").startInstance(cm.getParty(),cm.getMap());
                         cm.spawnMobOnMap(9400897,1,1130,10,510102200);

                                cm.gainItem(4000313, -1);
                                cm.warpParty(510102200);
								cm.getMap().��ʱ��(90, true, true);
                                //cm.worldSpouseMessage(0x20,"[ά��ɭ��] ��� "+ cm.getChar().getName() +" ���������ս��ͷȮ��");
                                //cm.serverNotice("���ؾ����߲㡻����" + cm.getChar().getName() + "�����������ս��ɮȥ�ˣ�");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}