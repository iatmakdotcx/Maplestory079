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
            text += "#e#d���ã����ڷ���������õ�#v1112907#������ͨ����ո����õ�#v4002002#��һ��������Ŷ��\r\n\r\n#v1113164#ȫ����+3 ����/ħ��+3 HP+80\r\n�������:30��#v4002002#+1��#v1112907#.�Ѽ���ϾͿ������ҽ��н�����.#l\r\n\r\n"
            text += "#L1##r��ʼ����#l\r\n\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {
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
			}else {*/
			if(cm.haveItem(4002002,30) && cm.haveItem(1112907,1)){
			cm.gainItem(4002002, -30);
			cm.gainItem(1112907, -1);
			cm.gainItem(1113164,3,3,3,3,80,80,3,3,0,0,0,0,0,0);
			//cm.gainMeso(100000);
            cm.sendOk("�һ��ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��30��ľ����Ʊ+1��С���ָ��[������]�ɹ�������[�����ͽ����˽�ָ]���������֣�����ƷŶ~��");
            cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
		}
    }
}


