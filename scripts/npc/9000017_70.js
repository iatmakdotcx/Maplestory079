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
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#e#d����[#v1002850#]��Ҫ#v4000175#x20�����Ѽ��õ�����������.#l\r\n\r\n"//3
            text += "#L1##r����#v1002850#��ȫ����15��G��#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,3)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("���������಻��2���ո�");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("�ֽ������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4000175,20)){
				cm.gainItem(4000175, -20);
				cm.gainItem(1002850,15,15,15,15,0,0,15,15,0,0,0,0,0,0);//�Ϲ���ָV1
            cm.sendOk("��ϲ�㻻���ɹ���");
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "��װ��������" + " : " + "[" + cm.getChar().getName() + "]ʹ��20������ģ�ͳɹ���������ʹͷ����"));
		
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡��Ҫ\r\n#v4000175#x15");
            cm.dispose();
			}
		}
    }
}


