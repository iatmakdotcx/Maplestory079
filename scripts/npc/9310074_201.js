var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var ����Ҷ ="#fMap/MapHelper/weather/maple/3#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
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
			text = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n";
			text += "               #r��ӭ��������������������#k\r\n";
			text += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n";
			text += "#L1#"+С�̻�+"#e#b#v1302070#�������͵��ֽ�#l  #L2##e#b#v1312142#�������͵��ָ�#l\r\n";
            text += "#L3#"+С�̻�+"#e#b#v1322100#�������͵��ֶ���#l #L4##e#b#v1332214#�������Ͷ̵�#l\r\n";
            text += "#L5#"+С�̻�+"#e#b#v1382199#�������ͳ���#l   #L6##e#b#v1402185#��������˫�ֽ�#l\r\n";
            text += "#L7#"+С�̻�+"#e#b#v1412126#��������˫�ָ�#l #L8##e#b#v1422129#��������˫�ֶ���#l\r\n";
            text += "#L9#"+С�̻�+"#e#b#v1432158#�������ͳ�ǹ#l   #L10##e#b#v1442209#�������ͳ�ì#l\r\n";
            text += "#L11#"+С�̻�+"#e#b#v1452196#�������͹�#l    #L12##e#b#v1462184#����������#l\r\n";
            text += "#L13#"+С�̻�+"#e#b#v1472205#��������ȭ��#l    #L14##e#b#v1482159#��������ָ��#l\r\n";
            text += "#L15#"+С�̻�+"#e#b#v1492170#�������Ͷ�ǹ#l\r\n"; //  #L16##e#r#v1402014#�¶ȼ�#l
//			text += "#L17#"+С�̻�+"#e#r#v1402037#������#l       #L18##e#r#v1382037#����֮��#l\r\n";
//			text += "#L19#"+С�̻�+"#e#r#v1382049#��ȸ����#l      #L20##e#r#v1382050#���䳤��#l\r\n";
//			text += "#L21#"+С�̻�+"#e#r#v1382051#�׻�����#l      #L22##e#r#v1382052#��������#l\r\n";
            cm.sendSimple(text);
        }
		else if (selection == 1) {
			cm.openNpc(9310074, 20101);
        } 
		else if (selection == 2) {
			cm.openNpc(9310074, 20102);
        } 
		else if (selection == 3) {
			cm.openNpc(9310074, 20103);
        } 
		else if (selection == 4) {
			cm.openNpc(9310074, 20104);
        } 
		else if (selection == 5) {
			cm.openNpc(9310074, 20105);
        } 
		else if (selection == 6) {
			cm.openNpc(9310074, 20106);
        } 
		else if (selection == 7) {
			cm.openNpc(9310074, 20107);
        } 
		else if (selection == 8) {
			cm.openNpc(9310074, 20108);
        } 
		else if (selection == 9) {
			cm.openNpc(9310074, 20109);
        } 
		else if (selection == 10) {
			cm.openNpc(9310074, 20110);
        } 
		else if (selection == 11) {
			cm.openNpc(9310074, 20111);
        } 
		else if (selection == 12) {
			cm.openNpc(9310074, 20112);
        } 
		else if (selection == 13) {
			cm.openNpc(9310074, 20113);
        } 
		else if (selection == 14) {
			cm.openNpc(9310074, 20114);
        } 
		else if (selection == 15) {
			cm.openNpc(9310074, 20115);
        } 
		else if (selection == 16) {
			cm.openNpc(9310074, 20116);
		} 
		else if (selection == 17) {
			cm.openNpc(9310074, 20117);
		} 
		else if (selection == 18) {
			cm.openNpc(9310074, 20118);
		} 
		else if (selection == 19) {
			cm.openNpc(9310074, 20119);
		} 
		else if (selection == 20) {
			cm.openNpc(9310074, 20120);
		} 
		else if (selection == 21) {
			cm.openNpc(9310074, 20121);
		}
		else if (selection == 22) {
			cm.openNpc(9310074, 20122);
		}
    }
}


