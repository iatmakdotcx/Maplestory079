

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
        else
            status--;
        if (status == 0) {
            cm.sendSimple ("#L0##e10��#d#v4170001##d�һ�#r#v4000313#30��#k#n#l#L8##e10��#d#v4170009##d�һ�#r#v4000313#20��#k#n#l\r\n#L12##e300��#d#v4000429##d�һ�#r#v5520000#����³�ǻ�á�#k#n#l\r\n#L10##e2333��#d#v4001126##d�һ�#r#v4310038##k#n#l#L5#100��#r#v4000313#�һ�1��#v4251202##n#l#k\r\n#L1##e30��#d#v4000487##d�һ�#r#v4310030##k#n#l#L2##e50��#d#v4001465##d�һ�#r#v4310030##n#l#k\r\n#L7#600��#v4000273##d�һ�#r5��#v4001465##n#l#k#L3#600��#v4000274##d�һ�#r5��#v4001465##n#l#k\r\n#L6#20��#v4310030##d�һ�1��#r#v4310066##n#l#k\r\n");
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
            if(cm.haveItem(4170001,10)){
                cm.gainItem(4000313,30);
				cm.gainItem(4170001,-10);
				cm.sendOk("��ϲ�㣬������30���ƽ��Ҷ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]10�����ﵰ�һ�30���ƽ��Ҷ�ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û���㹻�ĵ��ߣ��Ҳ��ܸ��㻻��~.");
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
            if(cm.haveItem(4000487,30)){
                cm.gainItem(4310030,1);
				cm.gainItem(4000487,-30);
				cm.sendOk("��ϲ�㣬������1����Ʒ�齱��! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]30����Ӱ�Ҷһ���Ʒ�齱�ҳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û���㹻�ĵ��ߣ��Ҳ��ܸ��㻻��~.");
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
            if(cm.haveItem(4001465,50)){
         cm.gainItem(4310030,1);
				cm.gainItem(4001465,-50);
				cm.sendOk("��ϲ�㣬������1����Ʒ�齱��! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]50�����ı�ʯ�һ���Ʒ�齱�ҳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û���㹻�ĵ��ߣ��Ҳ��ܸ��㻻��~.");
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
            if(cm.haveItem(4000274,600)){
  		cm.gainItem(4001465,5);
				cm.gainItem(4000274,-600);
				cm.sendOk("��ϲ�㣬������5�����ı�ʯ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]600�����ѵĽǶһ�5�����ı�ʯ�ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û���㹻�ĵ��ߣ��Ҳ��ܸ��㻻��~.");
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
            if(cm.haveItem(4001618,600)){
  		cm.gainItem(4000487,4);
				cm.gainItem(4001618,-600);
				cm.sendOk("��ϲ�㣬������4����Ӱ���! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]600����˵��Ҷ�һ�4����Ӱ��ҳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û���㹻�ĵ��ߣ��Ҳ��ܸ��㻻��~.");
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
            if(cm.haveItem(4000313,100)){
 				cm.gainItem(4000313,-100);
				cm.gainItem(4251202,1);
				cm.sendOk("��ϲ�㣬������1��ǿ��ˮ��! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]100���ƽ��Ҷ�һ�ǿ��ˮ���ɹ�����ǿ��װ����");
				cm.dispose();
            }else{
                cm.sendOk("��û���㹻�ĵ��ߣ��Ҳ��ܸ��㻻��~.");
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
            if(cm.haveItem(4310030,20)){
                cm.gainItem(4310066,1);
				cm.gainItem(4310030,-20);
				cm.sendOk("��ϲ�㣬�����˶���������! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]20���˶���Ҷһ����������ҳɹ��������齱����");
				cm.dispose();
            }else{
                cm.sendOk("��û���㹻�ĵ��ߣ��Ҳ��ܸ��㻻��~.");
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
            if(cm.haveItem(4000273,600)){
  		cm.gainItem(4001465,5);
				cm.gainItem(4000273,-600);
				cm.sendOk("��ϲ�㣬������5�����ı�ʯ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]600�������Ϲ�ͷ�һ�5�����ı�ʯ�ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û���㹻�ĵ��ߣ��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 8: 
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
            if(cm.haveItem(4170009,10)){
                cm.gainItem(4000313,20);
				cm.gainItem(4170009,-10);
				cm.sendOk("��ϲ�㣬������20���ƽ��Ҷ! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]10���������һ�20���ƽ��Ҷ�ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û���㹻�ĵ��ߣ��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 9: 
                cm.openNpc(9270052, 0);
            break;
            case 10: 
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
            if(cm.haveItem(4001126,2333)){
                cm.gainItem(4310038,1);
				cm.gainItem(4001126,-2333);
				cm.sendOk("��ϲ�㣬�����˱سɾ�һ���1��! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]2333����Ҷ�һ��سɾ�һ��ҳɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û���㹻�ķ�Ҷ���Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 11: 
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
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */
            if(cm.haveItem(4000429,300)){
                cm.gainItem(5520000,1);
				cm.gainItem(4000429,-300);
				cm.sendOk("��ϲ�㣬������ 1����������! .");
			        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]300����������һ����������ɹ���");
				cm.dispose();
            }else{
                cm.sendOk("��û���㹻�ĵ��ߣ��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            case 13: 
            if(cm.haveItem(4260001,100)){
                cm.gainItem(4033248,100);
				cm.gainItem(4260001,-100);
				cm.sendOk("��ϲ�㣬������100����ɫ��Ҷ! .");
				cm.dispose();
            }else{
                cm.sendOk("��û���㹻�ĵ��ߣ��Ҳ��ܸ��㻻��~.");
                cm.dispose();
            }
            break;
            }
        }
    }
}