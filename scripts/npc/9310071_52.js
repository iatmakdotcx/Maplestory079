
var status = 0;

f1unction start() {
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
        else
            status--;
        if (status == 0) {
            cm.sendSimple ("���ã��𾴵� #b#h ##k, ����ð�յ���#r�һ�ϵͳNPC����ѡ����Ҫ�һ��ĵ���#k\r\n\r\n#L2##e100��#d#v4001126##d�һ�#r300���#n#l#k\r\n#L3##e1000��#d#v4001126##d�һ�#r3000���#n#l#k\r\n#l#k");
        } else if (status == 1) {
            switch(selection) {
        case 0:
            if(cm.haveItem(5211047,1)){
                cm.gainItem(5211047,-1);
cm.gainNX(30000);
                cm.sendOk("��ϲ�㣬������30000���! .");
 	cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]˫�����һ�3W���ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û���㹻�ĵ��ߣ��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
        case 1: 
            if(cm.haveItem(4001465,10)){
cm.gainNX(1000);
				cm.gainItem(4001465,-10);
				cm.sendOk("��ϲ�㣬������1000���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]10�����ı�ʯ�һ�1000���ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û���㹻�ĵ��ߣ��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
         case 2: 
            if(cm.haveItem(4001126,100)){
cm.gainNX(300);
				cm.gainItem(4001126,-100);
				cm.sendOk("��ϲ�㣬������300���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100����Ҷ�һ�300���ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û���㹻�ķ�Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 3: 
            if(cm.haveItem(4001126,1000)){
cm.gainNX(3000);
				cm.gainItem(4001126,-1000);
				cm.sendOk("��ϲ�㣬������3000���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]1000����Ҷ�һ�3000���ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û���㹻�ķ�Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 4: 
            if(cm.haveItem(4000313,10)){
                //cm.gainDY(100);
                cm.gainMeso(1000000);
				cm.gainItem(4000313,-10);
				cm.sendOk("��ϲ�㣬������ 1000000 ���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]10�Żƽ��Ҷ�һ�1000000��ҳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �ƽ��Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 5: 
            if(cm.haveItem(4032226,10)){
                //cm.gainDY(100);
                cm.gainMeso(1000000);
				cm.gainItem(4032226,-10);
				cm.sendOk("��ϲ�㣬������ 1000000 ���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]10ֻ�ƽ�����һ�1000000��ҳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� �ƽ������Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
           case 6: 
            if(cm.haveItem(4001126,100)){
                cm.gainItem(4000313,10);
				cm.gainItem(4001126,-100);
				cm.sendOk("��ϲ�㣬������ 10�Żƽ��Ҷ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100�ŷ�Ҷ�һ�10�Żƽ��Ҷ�ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ��Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 7: 
            if(cm.getMeso() >= 10000000){
                cm.sendOk("��ϲ�㣬������ 2000000 ����ֵ! .");
                cm.gainMeso(-10000000);
                cm.gainExp(2000000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 10000000 ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 8: 
            if(cm.getMeso() >= 100000000){
                cm.sendOk("��ϲ�㣬������ 50000000 ����ֵ! .");
                cm.gainMeso(-100000000);
                cm.gainExp(50000000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 1�� ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 9: 
                cm.openNpc(9270052, 0);
            break;
            case 10: 
            if(cm.haveItem(4031250,100)){
                cm.gainNX(2000);
				cm.gainItem(4031250,-100);
				cm.sendOk("��ϲ�㣬������ 2000��ȯ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100��ʢ���ױ��һ�2000��ȯ�ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ʢ���ױ����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 11: 
            if(cm.haveItem(4031250,100)){
                cm.gainItem(4000313,10);
				cm.gainItem(4031250,-100);
				cm.sendOk("��ϲ�㣬������ 10�Żƽ��Ҷ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100��ʢ���ױ��һ�10�Żƽ��Ҷ�ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ʢ���ױ����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 12: 
            if(cm.haveItem(4031250,100)){
                cm.gainItem(4032226,10);
				cm.gainItem(4031250,-100);
				cm.sendOk("��ϲ�㣬������ 10ֻ�ƽ�����! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100��ʢ���ױ��һ�10ֻ�ƽ�����ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ʢ���ױ����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            }
        }
    }
}