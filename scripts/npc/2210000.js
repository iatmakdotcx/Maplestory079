var status = -1;
function start() {
    if((cm.getPlayer().getLevel() < 19 || cm.getPlayer().getLevel() > 255) && !cm.getPlayer().isGM()){
        cm.sendNext("�����Ҫ�μӾ���������ĵȼ�������20��~29����");
        cm.dispose();
        return;
    }
    action(1,0,0);
}

function action(mode, type, selection){
    status++;
    if (status == 4){
        cm.saveLocation("ARIANT");
        cm.dispose();
    }
    if(mode != 1){
        if(mode == 0 && type == 0)
            status -= 2;
        else{
            cm.dispose();
            return;
        }
    }
    if (status == 0)//
        cm.sendNext("��ã���������Ŀ�̽�ų���ǰ����������ɽ������һ�����ض�Ѩ����������Ҫ��ȥ�������׷�����ʲô...");
    else if (status == 1)
        cm.sendNextPrev("������ֵ����鷢���ˣ�����ɽ�����صĵع��з���һЩ�𵴣��������ǵĿ�ֹ̽������˺ö��˻ص���Ӫ�أ��������˸�ȥ����鿴���׷�����ʲô�����~~");
    else if (status == 2)
        cm.sendSimple("���Ƿ����������ⲻ������һλ̽�ռ�ð��Σ��ȥ�鿴������ôһ���£���Ȼ���������ǿ�̽�ӵĳ�Ա�ģ���������ֹ��������̽�����顣��");
    else if (status == 3)
        cm.sendNext("������м��׶԰�..�ϴ���ɽ�����ǻ���棬��ȥ����һ��Ⱥ����Ϣ��3�����ܼ���Ҳ���Ķ����������ҿ���ɽ�е������𵴵�������ô���£���ȥ�ҵ�����������֪�����𵴵�����!!");
}