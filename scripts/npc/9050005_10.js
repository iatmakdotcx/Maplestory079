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
            text += "#e#d����#v2043003#\r\n��Ҫ#v4000313#[#r#c4000313##k/30]#v4001126#[#r#c4001126##k/200]#v4011007#[#r#c4011007##k/2]\r\n#v4021009#[#r#c4021009##k/1]#v4031138#���[#r"+cm.getPlayer().getMeso()+"#k/10000000]#d.#l\r\n\r\n"//3
            text += "#L1##rȷ������#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��0���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4000313,30) && cm.haveItem(4001126,200)&& cm.haveItem(4011007,2)&& cm.haveItem(4021009,1)&&  cm.getMeso()>=10000000 ){
				cm.gainMeso(-10000000);
				cm.gainItem(4000313,-30);
				cm.gainItem(4001126,-200);
				cm.gainItem(4011007,-2);
				cm.gainItem(4021009,-1);
				cm.gainItem(2043003,1);
          			cm.sendOk("�����ɹ���");
   cm.worldMessage(5, "��ϲ���[" + cm.getPlayer().getName() + "]���г��������ɹ��ϳ��˱سɾ��ᣡ����������");
           		        cm.dispose();
			}else{
           		 cm.sendOk("���Ĳ��ϲ��㣡");
            		cm.dispose();
			}
		}
 	
    }
}