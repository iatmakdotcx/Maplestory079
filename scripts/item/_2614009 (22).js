/*
 ��ţð�յ�(079)��Ϸ�����
 ͻ��ʯϵͳ
 */


var status = -1;
var sels;

function start() {
	status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.�Ի�����();
        return;
    }
    if (status == 0) {
		var ��������ֵ = 1000000;
		var �ɹ����� = 30;//0~100
		if(cm.�ж���Ʒ����(2614008,1)){
			if(cm.�����ж�(�ɹ�����)){
				cm.�����˺�����ֵ(��������ֵ);
				cm.gainItem(2614008,-1);
				var message = "��ϲ���<" + cm.getPlayer().getName() + ">ͻ�Ƴɹ����˺���������" + ��������ֵ + "��Ŀǰ�˺�����Ϊ" +
				cm.��ȡ�˺�����ֵ() + "��";
				cm.ȫ������(9,message);
				// var message = "ͻ�Ƴɹ����˺���������" + ��������ֵ + "��Ŀǰ�˺�����Ϊ" +
				// cm.��ȡ�˺�����ֵ() + "��";
				// cm.getPlayer().dropMessage(message);
				cm.�Ի�����();
			}else{
				var message = "���һ��������£��������������ͻ��ʯ�ϣ�����Ȼ���ˣ�";
				cm.getPlayer().dropMessage(message);
				cm.gainItem(2614008,-1);
				cm.�Ի�����();
			}
			
		}else{
			cm.getPlayer().dropMessage("��Ǹ����û���㹻��ͻ��ʯ��");
			cm.�Ի�����();
			return;
		}

    } else {
        cm.�Ի�����();
    }
}