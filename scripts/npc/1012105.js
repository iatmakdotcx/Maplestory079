/* Ms. Tan 
	Henesys Skin Change.
*/
var status = 0;
var skin = Array(0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11);
var ct = -1;
var selectedColor = -1;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
        cm.sendNext("��ã���ӭ�������ִ廤�����ġ������ú���һ������������Ƥ����ֻҪ��#v5153000##b��Ա��#k�Ļ����ҾͿ��԰������Ҫ��Ϊ�㻤��Ƥ�������볢��һ����");
    } else if (status == 1) {
        cm.sendStyle("�����ǻ������Ŀ��ŵĻ�е�����Բ鿴�������Ч��������Ҫʲô����Ƥ���أ�����ѡһ�¡�", 5153000, skin);
    } else if (status == 2) {
        if (cm.setAvatar(5153000, skin[selection]) == 1) {
            cm.sendOk("�����,����������̾����·�ɫ��!");
			cm.dispose();
        } else {
            //cm.sendOk("�š��������û�л���ȯ�����Բ���û�л���ȯ�Ļ����ҾͲ��ܰ��㻤��Ƥ����");			
			cm.sendYesNo("��û��#v"+5153000+"#���Ƿ�������480����ȯ���̳ǵ�ȯֱ��ʹ�ã�");
			selectedColor = selection
        }
    }else if (status == 3) {
		ct = -1
		if (cm.getChar().getCSPoints(2) >= 480)
		{
			ct = 2;
		}
		else if (cm.getChar().getCSPoints(1) >= 480)
		{
			ct = 1;
		}
		
		if (ct != -1) {
			cm.gainNX(ct, -480);
			cm.gainItem(5153000, 1);
			status = 1;
			action(mode, type, selectedColor);
		} else 
		{
			cm.sendOk("��ĵ���ȯ���񲻹�����");
			cm.safeDispose();
		}
	}
}