/*
 ��ţð�յ�(079)��Ϸ�����
 ��ɫ������
 */


var status = -1;
var sels;
var oldName = "";
var newName = "";

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
		cm.sendGetText("��ӭʹ�ý�ɫ����ȯ������������Ҫ���ĵ����֣�");
		
	}else if (status == 1) {
		oldName = cm.getPlayer().getName();
		newName = cm.getText();
		//cm.playerMessage(6, "���ֳ��� = " + �ж��ֽ���(newName));//����
		if(�ж��ֽ���(newName) > 12){
			cm.sendOk("���ֳ��Ȳ��ܳ��� #r6 �������ַ�#k�� #r12 ��Ӣ���ַ�#k");
			cm.dispose()
			return;
		}
		// cm.getPlayer().dropMessage("newName = " + newName);
		cm.sendYesNo("��ȷ��Ҫ�����ָ���Ϊ #r" + newName + " #k��");
		
	}else if (status == 2) {
		if(newName == ""){
			cm.sendSimpleS("#r���󣬽�ɫ��Ϊ�գ�", 0, 3003364);
			return;
		}
		if(cm.�ж���Ʒ����(2350002,1)){
			cm.gainItem(2350002,-1);
			switch(cm.�Ľ�ɫ��(newName)){
				case 1:
					cm.sendSimpleS("��Ҫ���ĵ����ֺ���ԭ����һ�������²����ڶ��Ұɣ�", 0, 3003364);
					cm.gainItem(2350002,1);
					return;
					
				case 2:
					cm.sendSimpleS("�����ɫ���Ѿ�����ʹ���ˣ��������ְ�", 0, 3003364);
					cm.gainItem(2350002,1);
					return;
				case 3:
					cm.sendSimpleS("����������Ƿ��ַ����������ְ�", 0, 3003364);
					cm.gainItem(2350002,1);
					return;
				case 0:
					
			}
			
			var item = cm.getNewEquip(2350002);
			cm.ȫ�����߹���("����ɫϵͳ��", "��� " + oldName + " ʹ�ø����������ָ���Ϊ�� " + newName, item);
			cm.safeDispose();
		}else{
			cm.sendSimpleS("��Ǹ����û���㹻��#v2350002#", 0, 3003364);
			cm.safeDispose();
			return;
		}
	} else {
        cm.safeDispose();
		return;
    }
}

function �ж��ֽ���(str){
	var strlen = str.length; // �ַ�������
		//chrlen = str.replace(/[^\x00-\xff]/g, '**').length // �ֽڳ���

	var j = 0;
	for (var i = 0; i < strlen; i++) {
		var chr = str.charAt(i)
		if (/[\x00-\xff]/.test(chr)) {
			j++ // ascii��Ϊ0-255��һ���ַ�����һ���ֽڵĳ���
		} else {
			j += 2 // ascii��Ϊ0-255���⣬һ���ַ����������ֽڵĳ���
		}
	}
	return j;
	
}