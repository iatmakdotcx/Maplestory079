
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("���ݣ�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            cm.sendGetNumber("#b�����������������ǿ��װ��Ŷ����\r\n#rĿǰ���ƴ�����127��/�����Ÿ��ߴ�����#b\r\nװ��ǿ������Ҫ��Ʒ��\r\n#v4251202#1��\r\nǿ��װ����д����Ҫǿ����װ�������ɣ�\r\n(#rPS����ð�װ������װ������һ��Ȼ������1)",1,1,1000);
        }
        else if(status == 1){
            xz = selection;
            cm.sendYesNo("ǿ����װ��Ϊ����"+xz+"���Ƿ������");
        }else if(status == 2){
                   if (cm.itemQuantity(4251202) < 1 ) { 
				cm.sendOk("#bװ��ǿ����Ҫ#v4251202#1����������Ʒ����#k");
				cm.dispose();
			}
              else{
			cm.gainItem(4251202,-1);
			cm.itemqh(xz,1);
			cm.lockitem(xz,true);
                       	//cm.ǿ������(xz,1);
                        //cm.���ǿ��(xz,true);
                        cm.����(4," ���:" + cm.getPlayer().getName() + " ʹ�øߵ��������װ������  + 1 ����");			cm.dispose();
        }  
        }    
    }
}


