var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
//var tz = "#fEffect/CharacterEff/1082565/4/0#";  //���ӷ�

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (cm.getMapId() == 180000001) {
            cm.sendOk("���ź�������ΪΥ���û����򱻽�ֹ��Ϸ���������������ϵ����Ա.");
            cm.dispose();
        }  
    else if (status == 0) {
        //var selStr = " ������������#e#rĿǰ���¸���2016 12 21#n#k������������\r\t   �װ���[#b#e#h ##n#k],��ӭ�����ع�ð�յ���������\r\n";
		var selStr = " \t#b#v2210000##v2210000##v2210000##v3994064##v3994065##v3994071##v3994082##v2210000##v2210000##v2210000##k\r\n";
		selStr += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
        selStr += "    #e#r���װ���[#b#e#h ##n#k],#e#r�����Ƕһ��Ҷһ����ġ�\r\n";
		selStr += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
		//selStr += " ���#r"+cm.getPlayer().getCSPoints(1)+"#d\t����ȯ��#r"+cm.getPlayer().getCSPoints(2)+"#d\t��ֵ����:#r"+cm.getmoneyb()+"#k\r\n";
        //selStr += " #v3994929##v4031311##v3994929##L99##e#r���ҽ�������#l#v3994929##v4031311##v3994929#\r\n\r\n";
        selStr += " #L1##e#r#v4310014#�һ���Ʒ#l#L2##b#v4310014#�һ�����#l\r\n\r\n";
		//selStr += " #L4##e#r#v4310028#�쿨����#l    #L5##b#v4310014#�һ�#l\r\n\r\n";
		//selStr += " #L4##e#r#v4310028#����#l\r\n";
        //selStr += " #L4##e#r#v3991000#ÿ�ս���#l#L6##b#v3994017#��Ϸ�̳�#l#L7##d#v3991026#��ȯ�齱#l\r\n\r\n";
        //selStr += " #L10##e#r#v3991015#װ������#l#L8##b#v3994021#��ʱ�̳�#l#L9##d#v3991041#���һ�#l\r\n\r\n";
        //selStr += " #L15##e#r#v3991015#���϶һ�#l#L12##b#v3994021#��ȡ���#l#L77##d#v3991041#����ϵͳ#l\r\n\r\n";//
		//selStr += " #L19##e#r#v3991024#�������齱#l#L13##b#v3994024#�ٷ���վ#l#L11##d#v3991050#���Ӷһ�#l\r\n\r\n";
		 //selStr += "   #b#L77# ����ϵͳ#l#k #L78# ���߽���#l\r\n\r\n";
		 //selStr += "  #L17# ��ֵ���#l  #L14##e#r#v3991024#��ֵ��վ#l\r\n\r\n";

		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
        case 0:
            cm.warp(910000000);
            cm.dispose();
            break;
		case 1:
            cm.dispose();
            cm.openNpc(9300000,5);
            break;
        case 2:
            cm.dispose();
            cm.openNpc(9300000,6);
            break;
        case 3:
            cm.dispose();
            //cm.openNpc(9310100,0);
	    cm.openShop(103);
            break;
        case 4:
            cm.dispose();
            cm.openNpc(9300000,3);
            break;
        case 5:
            cm.dispose();
            cm.openNpc(9300000,4);
            break;
        case 6:
            cm.dispose();
            cm.openNpc(9900004,9);
            break;
        case 7:
            cm.dispose();
            cm.openNpc(9900004,8);
            break;
        case 8:
            cm.dispose();
           cm.openShop(6);
            break;
        case 9:
            cm.dispose();
            cm.openNpc(9900004,26);
            break;
        case 10:
            cm.dispose();
            cm.openNpc(9310060,0);
            break;
        case 11:
            cm.dispose();
            cm.openNpc(9000017,2);
            break;
		case 14:
            cm.dispose();
            cm.openWeb("http://wpa.qq.com/msgrd?V=1&Uin=1342041396&Site");
			break;
	    case 12:
            cm.dispose();
            cm.openNpc(9900004,20);
			 break;
		case 13:
            cm.dispose();
            cm.openWeb("http://dwz.cn/4Mm3CI");
			 break;
		case 15:
            cm.dispose();
            cm.openNpc(2020000,0);
            break;
		case 16:
            cm.dispose();
            cm.openNpc(9900004,5);
            break;
        case 17:
            cm.dispose();
            cm.openNpc(9050003,0);
            break;
	    case 77:
            cm.dispose();
            cm.openNpc(9040004,0);
            break;
	    case 78:
            cm.dispose();
            cm.openNpc(9900004,9999);
            break;
		case 18:
            cm.dispose();
            cm.openNpc(9050000,0);
            break;
	    case 99:
            cm.dispose();
            cm.openNpc(9250010,0);
            break;
	    case 19:
            cm.dispose();
            cm.openNpc(9310097,0);
            break;
		}
    }
}
