/*
�ű�����QQ��121418194
�۸������ӭ���ƣ�
*/

var status = 0;
var dianquan = 1000;//1�������ȯ
var point;
var dancidengji = 1;//�������ٵȼ�

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        if (cm.getJob()>= 1100&&cm.getJob()< 2000&&cm.getLevel()>=120&&cm.getLevel()<130) {
            cm.sendSimple("�װ���[#b#e#h ##n#k]\r\n\t ��ӭ�����ع�ð�յ���ʿ�ŷ������ģ�������ʲô�ܰﵽ��ģ�#l\r\n#L0#������ʿ�ţ���Ҫ������");
        } else {
			cm.sendOk("��ǰ��֧��������130����������������ʿ��ְҵ��");
            cm.dispose();
        }
    } else if (status == 1) {
        if (selection == 0) {
		var dengji = cm.getPlayer().getLevel();
		var liliang = cm.getPlayer().getStr();
		var minjie = cm.getPlayer().getDex();
		var yunqi = cm.getPlayer().getLuk();
		var zhili = cm.getPlayer().getInt();
			cm.sendNext("��ǰ���ĵȼ����£�"+dengji+"\r\n��ǰ������ά��������:\r\n\t������"+liliang+"\r\n\t���ݣ�"+minjie+"\r\n\t������"+yunqi+"\r\n\t������"+zhili+"\r\n\t#r��Ҫ����������һ��(����ȡ5���������Լ�1�㼼���ܵ�#r��ע������Ե���ȫ�����꣬����ᱻ���㣡#r)#k");
        }
    } else if (status == 2) {
		cm.sendNext("ע��HP/MP������õ�������");
    } else if (status == 3) {
		point = 1;
        cm.sendYesNo("��ȷ��Ҫ���� #r" + point + "#k ���ȼ���?�ǽ���Ҫ"+point*dianquan+"�ĵ�ȯ!");
    } else if (status == 4) {
		var meso = cm.getPlayer().getCSPoints(1);
		if(point*dianquan > meso){
			cm.sendOk("�㲢û���㹻��Ǯ�����ѣ�");
			cm.dispose();
			}
		var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
        text += "#L1#����+5"
		text += "#L2#����+5"
		text += "#L3#����+5"
		text += "#L4#����+5"
        cm.sendSimple("���������������ĸ�����ֵ�أ���\r\n#b" + text);
	}else if (selection == 1){
		var dengji = cm.getPlayer().getLevel();
		var liliang = cm.getPlayer().getStr();
		var minjie = cm.getPlayer().getDex();
		var yunqi = cm.getPlayer().getLuk();
		var zhili = cm.getPlayer().getInt();
		var ch = cm.getChar();
		cm.getPlayer().setRemainingAp(5*point);
		cm.resetStats(point*5+liliang, minjie, zhili, yunqi);
		ch.setLevel(dengji+1+point);
		////cm.getPlayer().gainSp(1);
		cm.gainNX(-point*dianquan);
		cm.dispose();
		cm.getPlayer().fakeRelog();
	}else if (selection == 2){
		var dengji = cm.getPlayer().getLevel();
		var liliang = cm.getPlayer().getStr();
		var minjie = cm.getPlayer().getDex();
		var yunqi = cm.getPlayer().getLuk();
		var zhili = cm.getPlayer().getInt();
		var ch = cm.getChar();
		cm.getPlayer().setRemainingAp(5*point);
		cm.resetStats(liliang, point*5+minjie, zhili, yunqi);
		ch.setLevel(dengji+1+point);
		//cm.getPlayer().gainSp(1);
		cm.gainNX(-point*dianquan);
		cm.dispose();
		cm.getPlayer().fakeRelog();
	}else if (selection == 3){
		var dengji = cm.getPlayer().getLevel();
		var liliang = cm.getPlayer().getStr();
		var minjie = cm.getPlayer().getDex();
		var yunqi = cm.getPlayer().getLuk();
		var zhili = cm.getPlayer().getInt();
		var ch = cm.getChar();
		cm.getPlayer().setRemainingAp(5*point);
		cm.resetStats(liliang,minjie, zhili, 5*point+yunqi);
		ch.setLevel(dengji+1+point);
		//cm.getPlayer().gainSp(1);
		cm.gainNX(-point*dianquan);
		cm.dispose();
		cm.getPlayer().fakeRelog();
	}else if (selection == 4){
		var dengji = cm.getPlayer().getLevel();
		var liliang = cm.getPlayer().getStr();
		var minjie = cm.getPlayer().getDex();
		var yunqi = cm.getPlayer().getLuk();
		var zhili = cm.getPlayer().getInt();
		var ch = cm.getChar();
		cm.getPlayer().setRemainingAp(5*point);
		cm.resetStats(liliang,minjie, 5*point+zhili, yunqi);
		ch.setLevel(dengji+1+point);
		//cm.getPlayer().gainSp(1);
		cm.gainNX(-point*dianquan);
		cm.dispose();
		cm.getPlayer().fakeRelog();
	}
}
