var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var ���� ="#fMap/MapHelper/weather/witch/3#";
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
            cm.sendSimple (""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+"\r\n\t          "+ С�̻� +"#r��ӭ�������ָ�������"+ С�̻� +"\r\n           "+ С�̻� +"#d����10����Ϊ5������3������"+ С�̻� +"#k\r\n"+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+""+����+"\r\n               ����#r�������#k����#r���ָ���#k\r\n\r\n                #b���й��ܶ����������ҵ�\r\n\r\n        #d����ɫ��Ϸ���������ף���̨��׽ֱ�ӷ�����#n#k#l");
        } else if (status == 1) {
            switch(selection) {
			case 0:
				cm.dispose();
				cm.openNpc(9201126,1);
            break;
            }
        }
    }
}