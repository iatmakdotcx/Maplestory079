
var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var ���� ="#fMap/MapHelper/weather/witch/3#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
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

            cm.sendOk("��л��Ĺ��٣�");
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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			text += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n";
			text += "             #e#d��ӭ��������ð�յ����߽���\r\n\r\n"
			text += "             #r��ǰ����ʱ�䣺"+cm.getGamePoints()+" ����#k#n\r\n"
			text += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n";
			if(cm.getGamePoints() >= 60 && cm.getBossLog("zxsj") == 0){
					text += "             #L2##r"+С�̻�+"����ʱ��60����#l\r\n"
				} else if(cm.getGamePoints() >= 60 && cm.getBossLog("zxsj") > 0){
					text += "              "+С�̻�+"#r����ʱ��60���ӣ���ɣ�#l\r\n"//3
				} else {
					text += "             #L2##r"+С�̻�+"����ʱ��60����#l\r\n"
					//text += "   ������#v4001266#*1��#v4001126#*100��#v2022452#*10��#l\r\n\r\n"
			}
			
			if(cm.getGamePoints() >= 150 && cm.getBossLog("zxsj") == 1){
					text += "             #L3##r"+С�̻�+"����ʱ��120����#l\r\n"
				} else if(cm.getGamePoints() >= 150 && cm.getBossLog("zxsj") > 1){
					text += "              "+С�̻�+"#r����ʱ��120���ӣ���ɣ�#l\r\n"//3
				} else {
					text += "             #L3##r"+С�̻�+"����ʱ��120����#l\r\n"
					//text += "   ������#v4001126#*200��#v5040000#*5��#v4000313#*5��#v2022452#*20��#l\r\n\r\n"
			}
			
			if(cm.getGamePoints() >= 240 && cm.getBossLog("zxsj") == 2){
					text += "             #L4##r"+С�̻�+"����ʱ��240����#l\r\n"
				} else if(cm.getGamePoints() >= 240 && cm.getBossLog("zxsj") > 2){
					text += "              "+С�̻�+"#r����ʱ��240���ӣ���ɣ�#l\r\n"//3
				} else {
					text += "             #L4##r"+С�̻�+"����ʱ��240����#l\r\n"
					//text += "   ������#v4001126#*200��#v4250602#*1��#v4031456#*30��#v5150040#*2��#l\r\n\r\n"
			}
			
			if(cm.getGamePoints() >= 360 && cm.getBossLog("zxsj") == 3){
					text += "             #L5##r"+С�̻�+"����ʱ��360����#l\r\n"
				} else if(cm.getGamePoints() >= 360 && cm.getBossLog("zxsj") > 3){
					text += "              "+С�̻�+"#r����ʱ��360���ӣ���ɣ�#l\r\n"//3
				} else {
					text += "             #L5##r"+С�̻�+"����ʱ��360����#l\r\n"
					//text += "   ������#v4001126#*200��#v5390002#*10��#v2049100#*1��#v4005004#*10��#l\r\n\r\n"
			}
			
			if(cm.getGamePoints() >= 480 && cm.getBossLog("zxsj") == 4){
					text += "             #L6##r"+С�̻�+"����ʱ��480����#l\r\n"
				} else if(cm.getGamePoints() >= 480 && cm.getBossLog("zxsj") > 4){
					text += "              "+С�̻�+"#r����ʱ��480���ӣ���ɣ�#l\r\n"//3
				} else {
					text += "             #L6##r"+С�̻�+"����ʱ��480����#l\r\n"
					//text += "   ������#v5440000#���þ�2000��#v2432503#���200��#l\r\n\r\n"
			}
			if(cm.getGamePoints() >= 600 && cm.getBossLog("zxsj") == 5){
					text += "             #L7##r"+С�̻�+"����ʱ��600����#l\r\n"
				} else if(cm.getGamePoints() >= 600 && cm.getBossLog("zxsj") > 5){
					text += "              "+С�̻�+"#r����ʱ��600���ӣ���ɣ�#l\r\n"//3
				} else {
					text += "             #L7##r"+С�̻�+"����ʱ��600����#l\r\n"
					//text += "   ������#v4001126#*500��#v4001266#*1��#v3992025#*188��#v2022452#*200��#l\r\n\r\n"
					//text += "         #v2049100#*2��#v4005004#*20��#l\r\n"
			}
            cm.sendSimple(text);
        } else if (selection == 2) {
			if(cm.getGamePoints() >= 60 && cm.getBossLog("zxsj") == 0){
				cm.gainItem(4001266,1);//�Ͷ�����
				cm.gainItem(2000004,100);//����ҩˮ
				cm.gainItem(4000487,50);//�����
				cm.setBossLog('zxsj');
				cm.sendOk("�ɹ���ȡ60�������߽�����");
				cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"]��ȡ��60�������߽�����");
				cm.dispose();
			} else if(cm.getGamePoints() >= 60 && cm.getBossLog("zxsj") > 0){
				cm.sendOk("����˺��Ѿ���ȡ���ý�����");
				cm.dispose();
			} else {
				text = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
				text += "      #r"+С�̻�+"����ʱ��ﵽ60���ӿɻ��������Ʒ"+С�̻�+"\r\n"
				text += "          #v4001266#*1    #v2000004#*100    #v4000487#*50#l#k\r\n\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 3) {
			if(cm.getGamePoints() >= 150 && cm.getBossLog("zxsj") == 1){
				cm.gainItem(5390000,5);//�����龰����
				cm.gainItem(4310025,20);//�´����ر�
				cm.gainItem(4031456,30);//��Ҷ��
				cm.setBossLog('zxsj');
				cm.sendOk("�ɹ���ȡ150�������߽�����");
				cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"]��ȡ��150�������߽�����");
				cm.dispose();
			} else if(cm.getGamePoints() >= 150 && cm.getBossLog("zxsj") > 1){
				cm.sendOk("����˺��Ѿ���ȡ���ý�����");
				cm.dispose();
			} else {
				text = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
				text += "      #r"+С�̻�+"����ʱ��ﵽ150���ӿɻ��������Ʒ"+С�̻�+"\r\n"
				text += "          #v5390000#*5    #v4310025#*20    #v4031456#*30#l#k\r\n\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 4) {
			if(cm.getGamePoints() >= 240 && cm.getBossLog("zxsj") == 2){
				cm.gainItem(2049100,1);//�������
				cm.gainItem(4005004,10);//�ڰ�ˮ��
				cm.gainItem(2028074,2);//ÿ������
				cm.gainItem(4310143,10);//BOSS��
				cm.setBossLog('zxsj');
				cm.sendOk("�ɹ���ȡ240�������߽�����");
				cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"]��ȡ��240�������߽�����");
				cm.dispose();
			} else if(cm.getGamePoints() >= 240 && cm.getBossLog("zxsj") > 2){
				cm.sendOk("����˺��Ѿ���ȡ���ý�����");
				cm.dispose();
			} else {
				text = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
				text += "      #r"+С�̻�+"����ʱ��ﵽ240���ӿɻ��������Ʒ"+С�̻�+"\r\n"
				text += "      #v2049100#*1    #v4005004#*10    #v2028074#*2    #v4001129#*10#l#k\r\n\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 5) {
			if(cm.getGamePoints() >= 360 && cm.getBossLog("zxsj") == 3){
				cm.gainItem(4310057,10);//���̼����
				cm.gainItem(4310143,10);//BOSS��
				cm.gainItem(2022530,1);//ӭ��������
				cm.gainItem(5510000,5);//ԭ�ظ�����
				cm.setBossLog('zxsj');
				cm.sendOk("�ɹ���ȡ360�������߽�����");
				cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"]��ȡ��360�������߽�����");
				cm.dispose();
			} else if(cm.getGamePoints() >= 360 && cm.getBossLog("zxsj") > 3){
				cm.sendOk("����˺��Ѿ���ȡ���ý�����");
				cm.dispose();
			} else {
				text = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
				text += "      #r"+С�̻�+"����ʱ��ﵽ360���ӿɻ��������Ʒ"+С�̻�+"\r\n"
				text += "      #v4310057#*10    #v4310143#*10    #v2022530#*1    #v5510000#*5#l#k\r\n\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
        } else if (selection == 6) {
			if(cm.getGamePoints() >= 480 && cm.getBossLog("zxsj") == 4){
				cm.gainItem(4001165,20);//̫����Ĵ͸�
				cm.gainItem(4001266,1);//�Ͷ�����
				cm.gainItem(4251202,1);//����ˮ��
				cm.gainItem(3992025,128);//ʥ������
				cm.setBossLog('zxsj');
				cm.sendOk("�ɹ���ȡ480�������߽�����");
				cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"]��ȡ��480�������߽�����");
				cm.dispose();
			} else if(cm.getGamePoints() >= 480 && cm.getBossLog("zxsj") > 4){
				cm.sendOk("����˺��Ѿ���ȡ���ý�����");
				cm.dispose();
			} else {
				text = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
				text += "      #r"+С�̻�+"����ʱ��ﵽ480���ӿɻ��������Ʒ"+С�̻�+"\r\n"
				text += "      #v4001165#*20    #v4001266#*1    #v4251202#*1    #v3992025#*128#l#k\r\n\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
		} else if (selection == 7) {
			if(cm.getGamePoints() >= 600 && cm.getBossLog("zxsj") == 5){
				cm.gainItem(2049100,1);//�������
				cm.gainItem(4005004,20);//�ڰ�ˮ��
				cm.gainItem(4001266,1);//�Ͷ�����
				cm.gainItem(3992025,198);//ʥ������
				cm.setBossLog('zxsj');
				cm.sendOk("�ɹ���ȡ600�������߽�����");
				cm.worldMessage(6,"��ϲ��ң�["+cm.getName()+"]��ȡ��600�������߽�����");
				cm.dispose();
			} else if(cm.getGamePoints() >= 600 && cm.getBossLog("zxsj") > 5){
				cm.sendOk("����˺��Ѿ���ȡ���ý�����");
				cm.dispose();
			} else {
				text = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
				text += "      #r"+С�̻�+"����ʱ��ﵽ600���ӿɻ��������Ʒ"+С�̻�+"\r\n"
				text += "      #v2049100#*1    #v4005004#*20    #v4001266#*1    #v3992025#*198#l#k\r\n\r\n"
				cm.sendSimple(text);
				cm.dispose();
			}
		}
    }
}