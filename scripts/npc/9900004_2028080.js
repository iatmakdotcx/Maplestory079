
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }

            text += "#L1##b�ƹ㸣�������#l\r\n\r\n"//3
			
            cm.sendSimple(text);//cm.getmoneyb() >= 100  &&
        } else if (selection == 1) {

if(cm.haveItem(2028080,1) ){
				
                cm.gainItem(2028080, -1);//
				cm.gainItem(3992025, 500);//ʥ������
				cm.gainItem(4001165, 50);//̫����Ĵ͸�
				//cm.gainItem(2028158, 1);//�����ʽ
				//cm.gainItem(4011007, 1);//��ʯ
				//cm.gainItem(4011008, 1);//�
				cm.gainItem(4000463, 10);//�н��
				cm.gainItem(2022530, 1);//˫��
				cm.gainItem(2450000, 1);//���˵�����
                //cm.gainMeso(10000000);
				//cm.setBossLog("100");zb
				//cm.setmoneyb(100)
				//cm.setzb(+100)
			
				Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(9,cm.getC().getChannel(),"b�ƹ������" + " : " + cm.getPlayer().getName() +"��ϲ������ƹ㸣�������",true).getBytes());
						
            cm.sendOk("��ϲ����ƹ������");
            cm.dispose();
			}else{
            cm.sendOk("���ϲ���,�����Ѿ���ȡһ����");
            cm.dispose();
			}
		}
    }
}
