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
                hair_Colo_new = [30390,30580,30690,30970,30980,31570,31580,31600,31960,31970,32050,32080,32090,32100,32300,32310,32600,32610,32620,32630,32640,32650,32670,32680,32690,32700,32710,32720,33570];//��
            } else {
cm.gainItem(5150001, 1);//�����Ʒ
                hair_Colo_new = [30500,30580,31390,31980,32060,32070,32110,32170,32180,32190,32200,32210,32220,32230,32240,32250,32290,32300,32310,32340,32350,32360,32370,32380,32390,32400,32410,32420,32450,32460,32480,32530,32540,32550,32570,32580,32590,32730,32740,32750,32760,32770,32780,32790,32800,32810,32820,32840,32850,32860,32870,32880,32890,32900,32910,32920,32930,32940,32950,32960,32970,32980,32990,33490,33560,33840,33870,33880,33890,33900,33910,33920,34020,34030];//Ů
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



