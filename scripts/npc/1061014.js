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
	var nextmap = cm.getC().getChannelServer().getMapFactory().getMap(105100300);
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
			if (cm.getPlayerCount(105100300) > 1){
	            cm.sendOk("�Ѿ�������ս���޷����룡");
                    cm.dispose();
			}else{
				cm.sendYesNo("��սҪ��50�����ϣ�ÿ���˺�ÿ����" + ��ս���� + "�λ��ᣬ��ս��ħ����");
			}
		//}
	}
	else if (status == 1) 
	{ 	
		var party = cm.getPlayer().getParty();		
		if (party == null || party.getLeader().getId() != cm.getPlayer().getId()) {
                    cm.sendOk("�㲻�Ƕӳ��������Ƕӳ���˵���ɣ�");
                    cm.dispose();

			}else if(cm.getBossLoga("jumo01") >= ��ս����) {
	            cm.sendOk("���˺Ž������ս�����Ѿ������ˣ�������������..");
                    cm.dispose();

		}else if(party.getMembers().size() < 1) {
	            cm.sendOk("��Ҫ 1 �����ϵ���Ӳ��ܽ��룡!");
                    cm.dispose();

 
		}else{
if(cm.getMonsterCount(105100300) <= 100){
		

	
}			 cm.setBossLoga('jumo01');
			nextmap.resetReactors();			
			cm.getEventManager("BossBalrog").startInstance(cm.getParty(),cm.getMap());
                          //cm.spawnMobOnMap(8230043,1,78,5,350050300);
                          //cm.spawnMobOnMap(8240096,1,-118,60,350051250);
                          //cm.spawnMobOnMap(8240096,1,279,190,350051250);
                          //cm.spawnMobOnMap(8240096,1,579,362,350051250);
                          //cm.spawnMobOnMap(8240096,1,906,456,350051250);
                          //cm.spawnMobOnMap(8240096,1,1281,456,350051250);

                                //cm.gainItem(4000313, -1);
                                cm.warpParty(105100300);
                               cm.ȫ������(6, "[" + cm.getPlayer().getName() + "]���������ս�Թ��-��ħ����֣�~");
                                //cm.setmoneyb(-100);
			cm.dispose();
		}
	}
}
}