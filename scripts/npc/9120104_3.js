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
            txt = "����ÿ����!�Ϳ���������!#k\r\n\r\n";

            if (cm.getBossLog("meitianrenwu5") == 1){
				txt += "#r��ë!24��Сʱ����!���˲���̫̰��!";
                cm.sendOk(txt);
                cm.dispose();

            }else{
                txt += "#L1##b�ռ�50��#v4000269#";
                cm.sendSimple(txt);
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000269,50) ){
		        cm.gainItem(4000269,-50);
                cm.sendOk("��ϲ������˽���!");
				cm.gainItem(5072000, 1);//�������Ʒ1������˼
				cm.gainItem(5041000, 1);//
				cm.gainItem(5211047, 1, 3);//3Сʱ˫��
				cm.gainMeso(10000);
				cm.gainExpR(10000);
				cm.setBossLog('meitianrenwu5');
                cm.dispose();
            }else{
                cm.sendOk("��Ʒ����!���ռ�50��#v4000269������!");
                cm.dispose();
            }
        }
    }
}
