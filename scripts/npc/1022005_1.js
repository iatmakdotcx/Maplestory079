var status = 0;
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
            txt = "����ÿ�����̵�4��NPCŶ��\r\n\r\n";

            if (cm.getPS() == 3){// cm.getPS()  ����˼�� ��ȡ����ֵ�������1 �͵ó��������Ѿ�����˵�һ�� �����������еڶ�������!

                txt += "#L1##b�ռ�100��Ұ������#v4000020#�����ң���#l";
                cm.sendSimple(txt);
            }else{
                txt += "���Ѿ���ɹ��ˣ�\r\n��ڶ���������";
                cm.sendOk(txt);
                cm.dispose();
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000020,100)){
                cm.gainPS(1);//cm.gainPS(1);  ����˼�� ��������̵�һ����ʱ������� ����ֵ+1��������޷����ظ����ڶ����ˡ�ֻ���賿12��ˢ�²��У�
		
                cm.gainItem(4000020, -100);
cm.gainExpR(+150000);
cm.gainMeso(+250000);
                cm.sendOk("���̵�4�����!��ϲ��ý��=250000������=150000\r\n\r\n��");
                cm.dispose();
            }else{
                cm.sendOk("�ռ�100��Ұ������#v4000020#������!");
                cm.dispose();
            }
        }
    }
}