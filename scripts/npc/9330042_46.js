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
            text +=  "#L1##r#v4170017#  ��ȡ  <����һ��ƽ��> ѫ�� #l\r\n\r\n"//3
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
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
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
			}else */if(cm.haveItem(4170017,1)){
				cm.gainItem(4170017, -1);
				cm.gainItem(1142151,5,5,5,5,0,0,3,3,0,0,5,5,5,5);//��ֵ��Ʒ����,����,����,����,����,HP,MP,������,ħ����,������,ħ��������,������,�ر���,��Ծ��,�ƶ��ٶ�
            cm.sendOk("�����ɹ���");
			cm.worldMessage(6,"��ң�["+cm.getName()+"] ��ȡ��  < ����һ��ƽ�� > ѫ��");
            cm.dispose();
			}else{
            cm.sendOk("û�� #v4170017# �޷����� <����һ��ƽ��>");
            cm.dispose();
			}
		}
    }
}


