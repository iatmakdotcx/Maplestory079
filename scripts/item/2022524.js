 /* * * * * * * * * * * *
 * *  �ű����ߣ�HuanMS * *
 * *  QQ��346452946  * *
 * * * * * * * * * * * */


var status = 0;

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			��Ҫ��� = 0;
			
			
			
			cm.sendYesNo("#r�ҿ��԰���Ѽ��ܵ���!!!#k");
		} else if (status == 1) {
                if (cm.getMeso() >=��Ҫ���){
                cm.sendOk("#r#e��ϲ�����������м��ܣ��Ӵ�߳����ƣ���");
				cm.teachSkill(1100000,20,20); //��׼��
				cm.teachSkill(1100002,30,30); //�ռ���
				cm.teachSkill(1101004,20,20); //���ٽ�
				cm.teachSkill(1101006,20,20); //��ŭ֮��
				cm.teachSkill(1101007,30,30);
				cm.teachSkill(1000000,16,16);
				cm.teachSkill(1000001,10,10);
				cm.teachSkill(1001004,20,20);
				cm.teachSkill(1001005,20,20);

                        cm.gainMeso(-��Ҫ���);
                        //cm.����(1, "[" + cm.getPlayer().getName() + "]ʹ����һ��������ϲ��λ��~");
			cm.dispose();
                        }else{ 
                cm.sendOk("#b��Ҳ��㣬�´��ռ���������.");
                cm.dispose();
                                 }
			}
		}
	}
