/*   By: ��ʹð�յ�.               
*/

var status = 0;

function start() {
    status = -1;
    action(1, 0, 0);
}

funct1ion action(mode, type, selection) {
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
            cm.sendSimple ("#L3##e1000���#d����#r10��#v4000313##k#n#l#L7##e1W���#d����#r100��#v4000313##k#n#l\r\n#L2##e15000���#d����#r1��#v4310030##n#l#k#L6##e15W���#d����#r10��#v4310030##n#l#k\r\n#L4##e10000���#d����#r10��#v4001465##n#k#l#L0##e10W���#d����#r100��#v4001465##n#k#l\r\n#k#L5##e5000���#d����#r10��#v4000487##k#n#l#L1##e5W���#d����#r100��#v4000487##k#n#l\r\n");
        } else if (status == 1) {
            switch(selection) {
        case 0:
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */
			if(cm.getPlayer().getCSPoints(1) >= 100000){
                cm.gainNX(-100000);
  		cm.gainItem(4001465,100);
                cm.sendOk("��ϲ�㣬������100�����ı�ʯ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100000���һ�100�����ı�ʯ�ɹ���");
                cm.dispose();
            }else{
                cm.sendOk("��û��100000����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
        case 1: 
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */
			if(cm.getPlayer().getCSPoints(1) >= 50000){
                cm.gainNX(-50000);
  		cm.gainItem(4000487,100);
                cm.sendOk("��ϲ�㣬������100����߳齱��! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]50000���һ�100����߳齱�ҳɹ���");
                cm.dispose();
            }else{
                cm.sendOk("��û��50000����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
         case 2: 
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */
			if(cm.getPlayer().getCSPoints(1) >= 15000){
                cm.gainNX(-15000);
  		cm.gainItem(4310030,1);
                cm.sendOk("��ϲ�㣬������1����Ʒ�齱��! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]15000���һ���Ʒ�齱�ҳɹ���");
                cm.dispose();
            }else{
                cm.sendOk("��û��10000����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 3: 
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */
			if(cm.getPlayer().getCSPoints(1) >= 1000){
                cm.gainNX(-1000);
  		cm.gainItem(4000313,10);
                cm.sendOk("��ϲ�㣬������10���ƽ��Ҷ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]1000���һ�10���ƽ��Ҷ�ɹ���");
                cm.dispose();
            }else{
                cm.sendOk("��û��1000����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
        case 4:
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */
			if(cm.getPlayer().getCSPoints(1) >= 10000){
                cm.gainNX(-10000);
  		cm.gainItem(4001465,10);
                cm.sendOk("��ϲ�㣬������10�����ı�ʯ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]10000���һ�10�����ı�ʯ�ɹ���");
                cm.dispose();
            }else{
                cm.sendOk("��û��10000����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
        case 5: 
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */
			if(cm.getPlayer().getCSPoints(1) >= 5000){
                cm.gainNX(-5000);
  		cm.gainItem(4000487,10);
                cm.sendOk("��ϲ�㣬������10����߳齱��! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]5000���һ�10����߳齱�ҳɹ���");
                cm.dispose();
            }else{
                cm.sendOk("��û��5000����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
         case 6: 
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */
			if(cm.getPlayer().getCSPoints(1) >= 150000){
                cm.gainNX(-150000);
  		cm.gainItem(4310030,10);
                cm.sendOk("��ϲ�㣬������10����Ʒ�齱��! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]150000���һ�10����Ʒ�齱�ҳɹ���");
                cm.dispose();
            }else{
                cm.sendOk("��û��100000����Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 7: 
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */
			if(cm.getPlayer().getCSPoints(1) >= 10000){
                cm.gainNX(-10000);
  		cm.gainItem(4000313,100);
                cm.sendOk("��ϲ�㣬������100���ƽ��Ҷ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]10000���һ�100���ƽ��Ҷ�ɹ���");
                cm.dispose();
            }else{
                cm.sendOk("��û��10000����Ҳ��ܸ��㻻��~.");
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
