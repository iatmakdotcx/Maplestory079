/*
 ��ţð�յ�(079)��Ϸ�����
 ���ӽ�ɫ��
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
		var �������� = 1;
		if(cm.��ȡ��ɫλ() >= 15){
			cm.sendSimpleS("��Ǹ����Ľ�ɫ�����Ѵﵽ����ӵ�����ֵ", 0, 3003364);
			cm.dispose();
			return;
		}
		if(cm.�ж���Ʒ����(2350000,1)){
			cm.���ӽ�ɫλ(��������);
			
			cm.gainItem(2350000,-1);
			// var message = "��ϲ���<" + cm.getPlayer().getName() + ">ͻ�Ƴɹ����˺���������" + ��������ֵ + "��Ŀǰ�˺�����Ϊ" +
			// cm.��ȡ�˺�����ֵ() + "��";
			//cm.ȫ������(9,message);
			var item = cm.getNewEquip(2350000);
			cm.sendSimpleS("��ϲ�����ӳɹ�����ǰ��ɫλ����Ϊ #b" + cm.��ȡ��ɫλ() + "#k ���������µ�½ȷ�ϡ�", 0, 3003364);
			cm.ȫ�����߹���("����ɫϵͳ��", "��� " + cm.getPlayer().getName() + " ʹ�ý�ɫ�������˽�ɫ�����ޣ�", item);
			cm.�Ի�����();
		}else{
			cm.sendSimpleS("��Ǹ����û���㹻��#v2350000#", 0, 3003364);
			cm.�Ի�����();
			return;
		}

    } else {
        cm.�Ի�����();
    }
}