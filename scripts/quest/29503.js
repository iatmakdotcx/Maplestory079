/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */

var status = -1;

function start(mode, type, selection) {
    if (mode == 0) {
        if (status == 0) {
            qm.sendNext("������ʱ�����������Ϊ��������˳��׼��.");
            qm.dispose();
            return;
        } else if (status == 2) {
            status--;
        } else {
            qm.dispose();
            return;
        }
    } else {
        status++;
    }

    if (status == 0) {
        qm.askAcceptDecline("#v1142030# #e#b#t1142030##k\n\r\n\r - ʱ��: 1 hr\n\r - �����������С��....#n�������һ���Լ����������ѫ����Ϊ��?");
    } else if (status == 1) {
        qm.sendNext("��ǰ���� \n\r\n\r1. #b�������հ�#k : ???,???,??? ���\n\r2. #b��#k : 68,000,000 ���\n\r3. #bxBabyRence#k : 49,999,999 ���\n\r4. #bXxTrIStaArxx#k : 29,999,999 ���\n\r5. #bxBabyRence#k : 14,000,000 ���\n\r\n\rҪ֪�������ǲ���͸¶�ܾ��������ι���������ȷ������. \n\r���ǵã����м�¼����������ÿ�µĵ�һ���...");
    } else if (status == 2) {
        qm.sendNextPrev("ף�����˸��㡣�����û���������趨�����ڣ������������������ʸ��������Ȼ����ʱ�����ң���������ȷ�����Ƿ����ʸ����������ס���㽫���ܹ���ս�������⣬������Ҫô������һ��ս�������...");
        qm.dispose();
    }
}

function end(mode, type, selection) {}

/*function getMedalType(ids) {
    var thestring = "#b";
    var extra;
    for (x = 0; x < ids.length; x++) {
	extra = "#L" + x + "##t" + ids[x] + "##l\r\n";
	thestring += extra;
    }
    thestring += "#k";
    return thestring;
}*/
