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
            text += "#e#d����#v1112793#��Ҫ#v4031561#x10.#v4031560#x10.#v4031559#x10.#v4031558#x10.#v4002003#x10.#v4002002#x10.#v4031138#1000���Ѽ��õ����ҾͿ���Ϊ��������.����ָ�����Դ�6��#l\r\n\r\n"//3
		    text += "#L1##r�������ֽ�ָ#l\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			if (cm.getMeso() < 10000000) { 
				cm.sendOk("#bװ��������Ҫ 1000W��ң����Ľ�Ҳ���#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031561) < 10 ) { 
				cm.sendOk("#bװ��������Ҫ#v4031561#10����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031560) < 10 ) { 
				cm.sendOk("#bװ��������Ҫ#v4031560#10����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031559) < 10  ) { 
 				cm.sendOk("#bװ��������Ҫ#v4031559#10����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4031558) < 10  ) { 
 				cm.sendOk("#bװ��������Ҫ#v4031558#10����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4002003) < 10  ) { 
 				cm.sendOk("#bװ��������Ҫ#v4002003#10����������Ʒ����#k");
				cm.dispose();
			} else if (cm.itemQuantity(4002002) < 10  ) { 
 				cm.sendOk("#bװ��������Ҫ#v4002002#10����������Ʒ����#k");
				cm.dispose();
		    } else if (cm.itemQuantity(4002001) < 10  ) { 
 				cm.sendOk("#bװ��������Ҫ#v4002001#10����������Ʒ����#k");
				cm.dispose();
			
			}else{
				cm.gainItem(4031561, -10);
				cm.gainItem(4031560, -10);
				cm.gainItem(4031559, -10);
				cm.gainItem(4031558, -10);
				cm.gainItem(4002003, -10);
				cm.gainItem(4002002, -10);
				cm.gainItem(4002001, -10);
				cm.gainItem(1112793, 1);
				cm.gainMeso(-10000000);
            cm.sendOk("�����ɹ���");
			cm.ȫ������( "��ϲ[" + cm.getPlayer().getName() + "]������һö���ֽ�ָ����������");
            cm.dispose();
			}
		}
    }
}


