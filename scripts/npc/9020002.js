importPackage(java.awt);
importPackage(Packages.tools);
importPackage(Packages.server);
importPackage(Packages.handling.world);
var status;
var ���ͨ�� = 100000;
var ͨ��ʱ�� = 1000000;
var �������� = 10;
var ����Ԥ�� = [

	[4031997, 1, 100],
	[2022468, 1, 100]
];


function start() {
    status = -1;
    action(1, 0, 0);
}
var time = 0;
function action(mode, type, selection) {
    if (mode == 0 && status == 0) {
        cm.�Ի�����();
        return;
    } else {
        if (mode == 1){
            status++;
        }else{
            status--;
		}
        var mapId = cm.getMapId();
        if (mapId == 103000890) {
            cm.warp(103000000, "mid00");
            cm.removeAll(4001007);
            cm.removeAll(4001008);
            cm.�Ի�����();
        } else {
            var outText;
            if (mapId == 103000805) {
                outText = "��ȷ��Ҫ�뿪��ͼ����";
                time = 1;
            } else {
                outText = "һ�����뿪��ͼ���㽫���ò�������������������������ٴγ��ԡ��㻹��Ҫ�뿪�����ͼ��";
                time = 0;
            }
            if (status == 0) {
                cm.sendYesNo(outText);
            } else if (mode == 1) {
				cm.warp(103000890, "st00");
				if (time == 1) {
                    getPrize();
                }
                cm.�Ի�����();
            }
        }
    }
}
//����ͨ�ؽ�������
/*
cm.���ʸ���Ʒ(��Ʒ���룬�̶�����������,��ע)��
cm.���ʸ���Ʒ2(��Ʒ���룬�������������,��ע)��
*/
function getPrize() {
	var eim = cm.getEventInstance();
	
	if(eim==null){
		var ����ʱ�� = 999999999;
	}else{
		var ����ʱ�� = (ͨ��ʱ�� - eim.getTimeLeft())/1000;
	}
	var ��ɫ = cm.getPlayer().id;
	var ����� = cm.getBossRank("��������", 2);
	var ���ط�ĩ��ȡ���� = 99999;
	//����ʢ��ĸ�󣬶���
	if(cm.�ж�ÿ��ֵ("�����������ط�ĩ")<=���ط�ĩ��ȡ����){
		//cm.���ʸ���Ʒ2(4000463,10,2,"��������");
		//cm.����ÿ��ֵ("�������й�������");
	}else{
		//cm.���˹���("�����޷���ȡ�������ҡ�");
	}
	if(cm.getBossLog("��������") < ��������){
		cm.gainMeso(50000);
		for (var i = 0; i < ����Ԥ��.length; i++) {
			gainItemPro(����Ԥ��[i][0], ����Ԥ��[i][1], ����Ԥ��[i][2]);
		}
		//cm.�������(1);
		cm.������(���ͨ��);
	}
	//�����ɾͺ��ȡ����ľ��顣
cm.worldMessage(2, "[����-��������] : ��ϲ " + cm.getPlayer().getName() + " ��ɷ������и���������ʱ�� "+formatSeconds(����ʱ��)+"��");
	if(�����>=10){
		cm.������(���ͨ��/2);
	}
	//�����ɾͺ�һ�����ʻ�ȡAP�㡣
	if(�����>=9999999){
		if(cm.�ж�ÿ��ֵ("������AP��")<=2){
			if(cm.�ٷ���(0)){
			//	cm.����ÿ��ֵ("������AP��");
			}
		}
	}
	//��¼ͨ����Ϣ
	cm.getPlayer().endPartyQuest(1201);
	cm.setBossRankCount("��������",1);
	cm.setBossLog("��������");
			if(eim!=null){
				if(cm.ȡ����ͨ��ʱ��(1,��ɫ) > ����ʱ��){
			cm.д��¼(1,��ɫ,����ʱ��);
			//cm.���˹���("��ϲ��ˢ�¸��˼�¼��");
		}else if(cm.ȡ����ͨ��ʱ��(1,��ɫ) <=0){
			cm.д��¼(1,��ɫ,����ʱ��);
			//cm.���˹���("��ϲ��ˢ�¸��˼�¼��");
		}
	}
}


function formatSeconds(value) {
    var theTime = parseInt(value);
    var theTime1 = 0;
    var theTime2 = 0;
    if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 > 60) {
            theTime2 = parseInt(theTime1 / 60);
            theTime1 = parseInt(theTime1 % 60);
        }
    }
    var result = "" + parseInt(theTime) + " �� ";
    if (theTime1 > 0) {
        result = "" + parseInt(theTime1) + " �� " + result;
    }
    if (theTime2 > 0) {
        result = "" + parseInt(theTime2) + " : " + result;
    }
    return result;
} 

function gainItemPro(itemId, count, prop){
	var number = Math.random()*(100);
	if(number <= prop){
		cm.gainItem(itemId, count);
	}
}
