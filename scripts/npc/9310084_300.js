

var status = 0;
var fee;
var chance = Math.floor(Math.random()*6+1);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0) {
            cm.sendOk("�ܺ��´��ټ�");
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendNext("�ˡ��� #h #! ���� #b~ð�յ��Ĳ���#k!������Ǯ���ֵ���Ϸ�𣿹��� ������ע��! ");
        } else if (status == 1) {
            cm.sendGetText("������ע���ٽ����?���Ӯ�˵Ļ����Ի��3���������GM�͵ķ����Ʒ,�Ǻ�,������˵��!����������Ҫ�Ĳ��Ľ���,���˱���!");
        } else if (status == 2) {
            fee = cm.getText();
            cm.sendYesNo("��ȷ��Ҫ��ע #r" + fee + "#k ð�ձ���?���ȼ������û����ô��ǮŶ!");
        } else if (status == 3) {
            if (cm.getMeso() < fee) {
                cm.sendOk("Ŷ�ǣ�������˼��û��ô��Ǯ�ˣ�ȥ׬��Ǯ�����ɣ���ɲ�����ѵ�,��ȥ����һЩ����������!");
                cm.dispose();
            } else if (cm.getMeso() > 10000000000) {
                cm.sendOk("����ȷ������Ľ�Ҳ��ܳ���10��!");
                cm.dispose();
            } else if (cm.getMeso() < 10000000) {
                cm.sendOk("�Բ���,��Ľ�Ҳ���1000��,���Բ��ܲ��ڴ˴���ע!");
                cm.dispose();
            } else if (cm.getText() > 100000000) {
                cm.sendOk("Ŷ������˼Ŷ!��������ע���ܳ���1E!");
                cm.dispose();
            } else if (cm.getText() < 10000000) {
                cm.sendOk("������ó�������Ȼ����թ�����һ��ȥ,������!");
                cm.dispose();
            } else {
                 if (chance <= 1) { 
	                    cm.gainMeso(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����!"); 
                            cm.serverNotice("���ĳ����桻����.������"+ cm.getChar().getName() +"���ڴ�ĳ����ֻʣ���ڿ㣬�䰮���� Զ��Ĳ�!"); 
	                    cm.dispose(); 
	                } 
	                else if (chance == 2) { 
	                    cm.gainMeso(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����!"); 
                            cm.serverNotice("���ĳ����桻����.������"+ cm.getChar().getName() +"���ڴ�ĳ����ֻʣ���ڿ㣬�䰮���� Զ��Ĳ�!"); 
	                    cm.dispose(); 
	                } 
	                else if (chance == 3) { 
	                    cm.gainMeso(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����!"); 
                            cm.serverNotice("���ĳ����桻����.������"+ cm.getChar().getName() +"���ڴ�ĳ����ֻʣ���ڿ㣬�䰮���� Զ��Ĳ�!"); 
	                    cm.dispose(); 
	                } 
	                else if (chance == 4) { 
	                    cm.gainMeso(-fee); 
	                    cm.sendNext("Ŷ���������������ô��Ŷ�������� ����һ����!"); 
                            cm.serverNotice("���ĳ����桻����.������"+ cm.getChar().getName() +"���ڴ�ĳ����ֻʣ���ڿ㣬�䰮���� Զ��Ĳ�!"); 
	                    cm.dispose(); 
	                } 
	                else if (chance == 5) { 
                            cm.gainItem(4000313, 5);
	                    cm.sendNext("Ŷ���������������ô��Ŷ�����۳����\r\nƭ����� ������5���ƽ��Ҷ!"); 
                            cm.serverNotice("���ĳ����桻����.������"+ cm.getChar().getName() +"���ڴ�ĳ�Ӯ������ƽ��Ҷ���䰮���� Զ��Ĳ�!"); 
	                    cm.dispose(); 
	                } 
                else if (chance >= 6) {
                    cm.gainMeso(fee * 3);
                    cm.gainExp(+400000);                   
                    cm.sendNext("#r��������ϲ��#k! ��Ӯ��! ���3���Ľ���⳥!");
                    cm.serverNotice("���ĳ����桻����ϲ"+ cm.getChar().getName() +"���ڴ�ĳ�Ӯ��3���Ľ�ң����һ��Ϊ��ף�ذ�!");
                    cm.dispose();
                }
            }
        }
    }
}