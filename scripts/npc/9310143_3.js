/* Natalie
	Henesys VIP Hair/Hair Color Change.
*/
var status = -1;
var beauty = 0;
var hair_Colo_new;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        cm.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
       // cm.sendSimple("�����������ϰ���������ֻҪ���лʼ�����#b���ִ�������߼���Ա��#k���Ͱ�ͷ�������Ұɡ�ѡ��������������ɡ�\r\n#b#L0#��������(ʹ��#v5150001#)#l\r\n#L1#Ⱦɫ(ʹ��#v5151001#)#l");
		
			cm.sendSimple("���������520����ʦ��\r\n\r\n#L0#�������ͣ�[#rȫ�����#k]#l\r\n#L1#������ɫ��[#rȫ�����#k]#l\r\n");
		
    } else if (status == 1) {
        if (selection == 0) {
            var hair = cm.getPlayerStat("HAIR");
            hair_Colo_new = [];
            beauty = 1;
            if (cm.getPlayerStat("GENDER") == 0) {
cm.gainItem(5150001, 1);//�����Ʒ
                hair_Colo_new = [35840,35850,35860,35870,35880,35890,35900,35910,35920,35930,35940,35980,35990,36500,39060,39280,39290,39300,39310,39320,39340,39350,39360,39370,39390,39400,39410,39420,39430,39440,39450,39490,39500,39510,39520,39530,39540,39560,39570,39580,39590,39600,39610,39620,39630,39640,39650];//��
            } else {
cm.gainItem(5150001, 1);//�����Ʒ
                hair_Colo_new = [34390,34460,34550,34570,34580,35140,35370,35580,35590,35610,35670,35740,35810,35970,36610,36870,36960,36970,37150,37160,37390,37470,37480,38140,38820,38830,38950,38960,38970,38980,38990,39000,39010,39020,39030,39040,39050,39060,39070,39330,39460,39480,39550,39660,39670,39680,39690,39700,39710,39720,39730,39740,39750,39760,39770,39780,39790,39800,39810,39820,39830,39840,39850,39860,39870,39880,39890,39900,39910,39920,39930,39940,39960,39970,39980,37170,47450.44510,34730,43160];//Ů
            }
            for (var i = 0; i < hair_Colo_new.length; i++) {
                hair_Colo_new[i] = hair_Colo_new[i] + (hair % 10);
            }
            cm.askAvatar("��������ѡ�Լ�ϲ���ķ��ͣ�\r\n���ַ�ҳ����������һ��Ҫ������GMŶ��", 5150001, hair_Colo_new);
        } else if (selection == 1) {
            var currenthaircolo = Math.floor((cm.getPlayerStat("HAIR") / 10)) * 10;
            hair_Colo_new = [];
            beauty = 2;
            for (var i = 0; i < 8; i++) {
                hair_Colo_new[i] = currenthaircolo + i;
            }
cm.gainItem(5151001, 1);//�����Ʒ
            cm.askAvatar("������ѡ��ϲ������ɫ��\r\n���ַ�ҳ����������һ��Ҫ������GMŶ��", 5151001, hair_Colo_new);
        }
    } else if (status == 2) {
        if (beauty == 1) {
            if (cm.setAvatar(5150001 , hair_Colo_new[selection]) == 1) {
                cm.sendOk("�����ˣ���ô������������·��Ͱɣ�");
                cm.����(3, "[" + cm.getPlayer().getName() + "]�������·���~");
            } else {
                cm.sendOk("�š��������û��������ר�û�Ա������������˼��û�л�Ա���Ļ����ҾͲ��ܰ�������");
            }
        } else {
            if (cm.setAvatar(5151001, hair_Colo_new[selection]) == 1) {
                cm.sendOk("���ˣ�����������̾����·�ɫ�ɣ�");
                cm.����(3, "[" + cm.getPlayer().getName() + "]�����˷�����ɫ����TA~");
            } else {
                cm.sendOk("�š� ������û������������Ļ��������˼�����û�л�Ա�������ǲ����Ը���Ⱦͷ����");
            }
        }
        cm.dispose();
    }
}



