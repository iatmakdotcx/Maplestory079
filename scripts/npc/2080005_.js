var status = 0;
var suiji;
var suiji2;
var wpid = Array(
  2043003,//���ֽ���������(�س�)
  2044003,//˫�ֽ���������(�س�)
  2044303,//ǹ������������(�س�)
  2044403,//ì������������(�س�)
  2044503,//��������������(�س�)
  2044603,//�󹥻��سɾ�
  2043703,//���ȹ����سɾ�
  2043803,//���ȹ�������(�س�)
  2043303,//�̽������سɾ�
  2044703,//ȭ�׹�������(�س�)
  2044908,//��ǹ��������(�س�)
  2044815,//ָ�ڹ����سɾ� 
  2040807,//���׹�������(�س�)
  2040506,//ȫ���������ݾ���(�س�)
  2040710 //Ь����Ծ����(�س�)
);
function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        if (status == 0) {
            var txt = "";
            txt = "����ÿ���������һ�ֵ�10��NPCŶ���ҽп�˹��\r\n\r\n";

            if (cm.getPlayer().getBossLog("��������") == 9){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b������Ļ�#v4000232#X60����������ľ�ˮ#v4000233#X60����������Ĺ�ͷ#v4000234#X60�������ң���#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ���Ȼ����ȥ��.��ľ��-�ֿ����Ա-��˹��!\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
			var suiji = Math.floor(Math.random() * wpid.length);
			var suiji2= Math.floor(Math.random() * wpid.length);
            if (cm.haveItem(4000232,60) && cm.haveItem(4000233,60) && cm.haveItem(4000234,60)){
                cm.setBossLog("��������");
//cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000232, -60);
                cm.gainItem(4000233, -60);
                cm.gainItem(4000234, -60);
				cm.gainNX(30000);
				cm.gainItem(4001003, 1);
				cm.gainItem(4011008, 2);
			    //cm.gainItem(4011008, 2);
				//cm.gainItem(2022468, 5);
				cm.gainMeso(5000000);
				cm.setmoneyb(30);//����Ԫ��
				cm.gainItem(wpid[suiji],1);
				cm.gainItem(wpid[suiji2],1);
                cm.sendOk("�������һ����10�����!��ϲ���30000��ȯ��û���1������2������س�2��30��ֵ��\r\n\r\n���Ѿ���������е����������������������ɣ�");
                cm.dispose();
            }else{
                cm.sendOk("������Ļ�#v4000232#X60����������ľ�ˮ#v4000233#X60����������Ĺ�ͷ#v4000234#X60��������!");
                cm.dispose();
            }
        }
    }
}