
var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

fun1ction action(mode, type, selection) {
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
            cm.sendSimple ("#L1##e#v4000040##d�һ�#r100W���#n#k#l#L2##e#v4000176##d�һ�#r100W���#n#k#l\r\n#L3##e#v4001111##d�һ�#r500W���#n#k#l#L6##e100��#d#v4001126##d�һ�#r250W���#n#k#l\r\n");
        } else if (status == 1) {
            switch(selection) {
        case 0:
            if(cm.getMeso() >= 1000000){
                cm.sendOk("��ϲ�㣬������2OW����ֵ! .");
                cm.gainMeso(-1000000);
                cm.gainExp(200000);
                cm.dispose();
            }else{
                cm.sendOk("��û�� 1000000 ��ң��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
        case 1: 
            if(cm.haveItem(4000040,1)){
                cm.gainMeso(1000000);
				cm.gainItem(4000040,-1);
				cm.sendOk("��ϲ�㣬������100W���! .");
				cm.dispose();
            }else{
                cm.sendOk("��û���㹻�ĵ��ߣ��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
         case 2: 
            if(cm.haveItem(4000176,1)){
                cm.gainMeso(1000000);
				cm.gainItem(4000176,-1);
				cm.sendOk("��ϲ�㣬������100W���! .");
				cm.dispose();
            }else{
                cm.sendOk("��û���㹻�ĵ��ߣ��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 3: 
            if(cm.haveItem(4001111,1)){
                cm.gainMeso(5000000);
				cm.gainItem(4001111,-1);
				cm.sendOk("��ϲ�㣬������500W���! .");
				cm.dispose();
            }else{
                cm.sendOk("��û�� �㹻�� ��Ҷ���Ҳ��ܸ��㻻��~.");
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
                cm.gainMeso(2500000);
				cm.gainItem(4001126,-100);
				cm.sendOk("��ϲ�㣬������ 250W���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100�ŷ�Ҷ�һ�250W��ҳɹ���");
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