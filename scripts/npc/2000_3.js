importPackage(Packages.client);
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
            txt = "���츣����ȡ����#k\r\n\r\n";

            if ( cm.getPlayer().getBossLog("���츣��") == 1){
				txt += "#r���Ѿ���ȡ����!";
                cm.sendOk(txt);
                cm.dispose();

            }else{
                txt += "#L1##b�����ȡ";
                cm.sendSimple(txt);
            }

        } else if (selection == 1) {
            if (cm.haveItem(4000134,0) ){
		        cm.gainItem(4000134, -0);
                cm.sendOk("��ϲ������˽���!");
				cm.worldMessage(6,"[���츣��] : ��� "+cm.getPlayer().getName()+"  ��ȡ�˹������")
				cm.gainItem(5570000, 30);//�������Ʒ1������˼
				cm.gainItem(2022465, 20);//�������Ʒ1������˼
				cm.gainItem(2460005,50);
				cm.gainExp(100000);
				cm.getPlayer().setBossLog('���츣��');
                cm.dispose();
            }else{
                cm.sendOk("r���Ѿ���ȡ����");
                cm.dispose();
            }
        }
    }
}
