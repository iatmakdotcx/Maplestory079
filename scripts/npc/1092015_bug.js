var ��ɫС����1 ="#fEffect/CharacterEff/1112905/0/1#";
var ǳ��С���� ="#fMap/MapHelper/weather/balloon/5#";
var ��ɫС���� ="#fMap/MapHelper/weather/sweetHeart/0#";
var ��ɫС����1 ="#fMap/MapHelper/weather/sweetHeart/1#";
var ��ɫС����2 ="#fMap/MapHelper/weather/sweetHeart/2#";
var ��ɫС����3 ="#fMap/MapHelper/weather/sweetHeart/3#";
var ����С���� ="#fMap/MapHelper/weather/sweetHeart/5#";
var ���� = "#fEffect/CharacterEff/1051366/1/0#"; // ��ɫ����
var ��ݮ = "#fUI/GuildMark/Mark/Plant/00003000/1#"; // ��ɫ��ݮ
var ��ݮ1 = "#fUI/GuildMark/Mark/Plant/00003000/10#"; // ����ɫ��ݮ
var ��ݮ2 = "#fUI/GuildMark/Mark/Plant/00003000/11#"; // ��ɫ��ݮ
var ��ݮ3 = "#fUI/GuildMark/Mark/Plant/00003000/15#"; // ��ɫ��ݮ
var ��ݮ4 = "#fUI/GuildMark/Mark/Plant/00003000/3#"; // ��ɫ��ݮ
var ��ݮ5 = "#fUI/GuildMark/Mark/Plant/00003000/8#"; // ��ɫ��ݮ
function start() {
	
	var texts = ""+��ɫС����1+""+��ɫС����1+""+��ɫС����1+""+��ɫС����1+""+��ɫС����1+""+��ɫС����1+"��ӭ����#r" + cm.getChannelServer().getServerName() + "װ����������"+��ɫС����1+""+��ɫС����1+""+��ɫС����1+""+��ɫС����1+""+��ɫС����1+""+��ɫС����1+"\r\n";
		texts += "#L1##d"+��ݮ+"װ����������#l\r\n";
		texts += "#L2##d"+��ݮ1+"��֮����ǿ��#l\r\n";
		texts += "#L3##b"+��ݮ+"������֮��#l\r\n";
		texts += "#L8##b"+��ݮ1+"����ǿ��#l\r\n";
		//texts += "#L18##b"+��ݮ1+"�๦��ǿ��#l\r\n";
		texts += "#L20##b"+��ݮ1+"ħ����֮��#l\r\n";
		texts += "#L5##k"+��ݮ+"#d����װ��ǿ��#l\r\n";
		texts += "#L522##k"+��ݮ+"#dʱװ����#l\r\n";
		//texts += "#L6#"+��ݮ1+"#r[���˻����]ǿ������#k\r\n\r\n";
		texts += "#L4#����#r[��֮��]#k*1000    �۸�: #r30#k ����#l\r\n";
		texts += "#L7#����#r[��֮��]#n*1000    �۸�: #r40000#n ��ȯ#l\r\n";
		texts += "#L9#����#r[ħ����֮��]#n*1000    �۸�: #r50#n ����#l\r\n";
		
		cm.sendSimple(texts);
}

function action(mode, type, selection) {
	cm.dispose();
	if (selection == 1) {	
		cm.openNpc(1092015, 1);
	}else if (selection==2){
		cm.openNpc(1092015, 2);
			}else if (selection==20){
		cm.openNpc(1092015, 20);
	}else if (selection == 3){
		cm.openNpc(1092015,3);
	}else if (selection == 4){
		if(cm.getzb() < 30){
			cm.sendOk("����");
			cm.dispose();
		}else {
			cm.setzb(cm.getzb()-30)
			cm.gainItem(3992025,1000);
			cm.sendOk("����ɹ���");
			cm.dispose();
		}
	}else if (selection == 5){
		cm.openNpc(1092015,4);
			}else if (selection == 522){
		cm.openNpc(1092015,522);
	}else if (selection ==6){
		cm.openNpc(1092015,5);
	}else if (selection == 7){
		if (cm.getPlayer().getNX() < 40000) {
			cm.sendOk("��ȯ����");
			cm.dispose();
		}else {
			cm.gainNX(-40000);
			cm.gainItem(3992025,1000);
			cm.sendOk("����ɹ���");
			cm.dispose();
		}
	}else if (selection ==8){
		cm.openNpc(1092015,6);
			}else if (selection ==18){
		cm.openNpc(9900004,2132);
	}else if (selection == 9){
		if(cm.getzb() < 50){
			cm.sendOk("����");
			cm.dispose();
		}else {
			cm.setzb(cm.getzb()-50)
			cm.gainItem(3992010,1000);
			cm.sendOk("����ɹ���");
			cm.dispose();
		}
}
}