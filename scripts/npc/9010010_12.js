var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1";// ��ƷID,����
var x2;
var x3;
var x4;
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ttt ="#fUI/Basic/CheckBox/3#";//"+ttt+"//����
var ttt2 ="#fUI/UIWindow/Quest/icon6/7#";//"+ttt2+"//����2
var ttt3 ="#fUI/UIWindow/Quest/icon3/6#";//"+ttt3+"//����Բ
var mh1   ="#fUI/GuildMark/Mark/Animal/00002016/1#";//����
var mh2   ="#fUI/GuildMark/Mark/Animal/00002016/5#";//����
var mh3   ="#fUI/GuildMark/Mark/Animal/00002016/4#";//����
var mh4   ="#fUI/GuildMark/Mark/Animal/00002016/9#";//����
var mh5   ="#fUI/GuildMark/Mark/Animal/00002016/8#";//����
var mh6   ="#fUI/GuildMark/Mark/Animal/00002016/10#";//����
var mh7   ="#fUI/GuildMark/Mark/Animal/00002016/12#";//����
var mh8   ="#fUI/GuildMark/Mark/Animal/00002016/15#";//����
var mh9   ="#fUI/GuildMark/Mark/Animal/00002016/16#";//����
var mh10   ="#fUI/GuildMark/Mark/Animal/00002016/2#";//����
var mh11   ="#fUI/GuildMark/Mark/Animal/00002016/3#";//����
var mh12   ="#fUI/GuildMark/Mark/Animal/00002016/14#";//����
var mh13   ="#fUI/GuildMark/Mark/Animal/00002016/11#";//����

var aaa = "#fMob/7130200.img/move/0#";
var bbb = "#fMob/7130102.img/move/0#";
var ccc = "#fMob/7130300.img/move/0#";
var ddd = "#fMob/7130501.img/move/0#";
var eee = "#fMob/8140000.img/move/0#";
var fff = "#fMob/8140001.img/move/0#";
var ggg = "#fMob/8140002.img/move/0#";
var hhh = "#fMob/8140101.img/move/0#";
var iii = "#fMob/8140111.img/move/0#";
var jjj = "#fMob/8190004.img/move/0#";
var miaoshu = "#fUI/UIWindow/Quest/summary#"
var xuanshang = "#d#e����#k#n";
var richang = "#r#e�ճ�#k#n";
var zhuxianrenwu = "#b#e����#k#n";
var zhixianrenwu = "#g#e֧��#k#n";
var dengji = 0;
var jingyan = dengji*500;
var dianjuansuiji = Math.floor(Math.random()*500+1);
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day1 = ca.get(java.util.Calendar.DATE);//��ȡ��
var hour = ca.get(java.util.Calendar.HOUR); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE);//��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var date = new Date();
var day = date.getDay();
var itemchance = Math.floor(Math.random()*1240+1);

function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
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
        if (status == 0) { //text += "\t\t\t#e#d��ǰ����ʱ�䣺"+cm.getGamePoints()+"���ӣ�

	if (cm.getBossLog("meirihuoyue") >= 100){
		var wancheng = "#r�����#k";
                 }else{
		var wancheng = "#bδ���#k";
                    }
	if (cm.getBossLog("paoshangrenwu") >= 1){
		var wancheng1 = "#r�����#k";
                 }else{
		var wancheng1 = "#bδ���#k";
                    }
	if (cm.getBossLog("guaiwujishaling") >= 5){
		var wancheng2 = "#r�����#k";
                 }else{
		var wancheng2 = "#bδ���#k";
                    }
	if (cm.getBossLog("zhuibutaofan") >= 1){
		var wancheng3 = "#r�����#k";
                 }else{
		var wancheng3 = "#bδ���#k";
                    }
	if (cm.getBossLog("jinyarenwu") >= 1){
		var wancheng4 = "#r�����#k";
                 }else{
		var wancheng4 = "#bδ���#k";
                    }
	if (cm.getBossLog("fengyemujuan") >= 1){
		var wancheng5 = "#r�����#k";
                 }else{
		var wancheng5 = "#bδ���#k";
                    }
	if (cm.getBossLog("shijiandpian") >= 1){
		var wancheng6 = "#r�����#k";
                 }else{
		var wancheng6 = "#bδ���#k";
                    }
	if (cm.getBossLog("fubenkuangmo") >= 1){
		var wancheng7 = "#r�����#k";
                 }else{
		var wancheng7 = "#bδ���#k";
                    }
	if (cm.getBossLog("taiyanghua") >= 1){
		var wancheng8 = "#r�����#k";
                 }else{
		var wancheng8 = "#bδ���#k";
                    }
	if (day == 0){
		var zjjindu = "#L10#[" + xuanshang + "]#e��׽�ӷ�#n#k��" + wancheng3 + "��#l";
	} else if (day == 1){
		var zjjindu = "#L11#[" + xuanshang + "]#e��׽�ӷ�#n#k��" + wancheng3 + "��#l";
	} else if (day == 2){
		var zjjindu = "#L12#[" + xuanshang + "]#e��׽�ӷ�#n#k��" + wancheng3 + "��#l";
	} else if (day == 3){
		var zjjindu = "#L13#[" + xuanshang + "]#e��׽�ӷ�#n#k��" + wancheng3 + "��#l";
	} else if (day == 4){
		var zjjindu = "#L14#[" + xuanshang + "]#e��׽�ӷ�#n#k��" + wancheng3 + "��#l";
	} else if (day == 5){
		var zjjindu = "#L15#[" + xuanshang + "]#e��׽�ӷ�#n#k��" + wancheng3 + "��#l";
	} else if (day == 6){
		var zjjindu = "#L16#[" + xuanshang + "]#e��׽�ӷ�#n#k��" + wancheng3 + "��#l";
                    }
	if (day == 0){
		var zjjindu = "#L10#[" + xuanshang + "]#e��׽�ӷ�#n#k��" + wancheng3 + "��#l";
	} else if (day == 1){
		var zjjindu = "#L11#[" + xuanshang + "]#e��׽�ӷ�#n#k��" + wancheng3 + "��#l";
	} else if (day == 2){
		var zjjindu = "#L12#[" + xuanshang + "]#e��׽�ӷ�#n#k��" + wancheng3 + "��#l";
	} else if (day == 3){
		var zjjindu = "#L13#[" + xuanshang + "]#e��׽�ӷ�#n#k��" + wancheng3 + "��#l";
	} else if (day == 4){
		var zjjindu = "#L14#[" + xuanshang + "]#e��׽�ӷ�#n#k��" + wancheng3 + "��#l";
	} else if (day == 5){
		var zjjindu = "#L15#[" + xuanshang + "]#e��׽�ӷ�#n#k��" + wancheng3 + "��#l";
	} else if (day == 6){
		var zjjindu = "#L16#[" + xuanshang + "]#e��׽�ӷ�#n#k��" + wancheng3 + "��#l";
                    
                    }
				            if (cm.getLevel() < 10 ) {  
            cm.sendOk("���������Ƶȼ�10������������������������.");
					cm.dispose();
			}
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }

            text += ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"//\t\t\t

           text += "\t\t\t#e#d��ǰ����ʱ�䣺"+cm.getGamePoints()+"���ӣ�#k#n\r\n"
   


           text += "#L4##e����׷��  �ɻ�ȡ:  #v1432011#  #v1022047#  #v1472053#  #v2290017##n#k#l\r\n"


		    cm.sendSimple(text);
        } else if (selection == 1) {//ÿ�ջ�Ծ����
            cm.openNpc(9310059, 0);
        } else if (selection == 2) {//��������
            cm.openNpc(9900007, 2);
        } else if (selection == 3) { //�ռ�����
            cm.openNpc(9900007, 3);
        } else if (selection == 7) { //�ռ�����
            cm.openNpc(9900007, 333);
        } else if (selection == 4) {//����׷����
            if(cm.getLevel() < 70 ) {
              cm.sendOk("#b������Ҫ#r70#b�����ϵ���Ҳ��ܽ���..");
              cm.dispose();
          } else if (cm.getBossLog("guaiwujishaling") == 1){
          cm.sendOk("#r#e���Ѿ�����˽��������");
          cm.dispose();
	} else if (day == 0){
          if(cm.haveItem(4000053,10)) {
             cm.gainItem(4000053,-10);
             cm.gainItem(2022670,1);
          cm.setBossLog("guaiwujishaling");  
        cm.����(3,"��ϲ[" + cm.getPlayer().getName() +"]���׷����,��ú�������" + jingyan + "����," + jinbi + "���," + dianjuansuiji + "���");
          cm.dispose();
        }else{
        cm.sendOk(""+miaoshu+"\r\n#r#e����׷������#n#k:�����#v4000053#[#r"+cm.itemQuantity(4000053)+"#k/#b10#k��]\r\n"+aaa+"");
	cm.dispose();}
	} else if (day == 1){
          if(cm.haveItem(4000049,30)) {
             cm.gainItem(4000049,-30);
          cm.setBossLog("guaiwujishaling");  
             cm.gainItem(2022670,1);
         cm.gainExp(cm.getLevel()*5000);
        
        cm.gainNX(dianjuansuiji); 
cm.gainItem(itemSet[rand],1);
cm.sendOk("#e#r��ϲ�������ã�#b#z"+itemSet[rand]+"##v"+itemSet[rand]+"#.");

        cm.����(3,"��ϲ[" + cm.getPlayer().getName() +"]���׷����,��ú�������" + jingyan + "����," + jinbi + "���," + dianjuansuiji + "���");
  
          cm.dispose();
        }else{
        cm.sendOk(""+miaoshu+"\r\n#r#e����׷������#n#k:�����#v4000049#[#r"+cm.itemQuantity(4000049)+"#k/#b30#k��]\r\n"+bbb+"");
	cm.dispose();}
	} else if (day == 2){
          if(cm.haveItem(4000148,30)) {
             cm.gainItem(4000148,-30);
             cm.gainItem(2022670,1);
          cm.setBossLog("guaiwujishaling");  
         cm.gainExp(cm.getLevel()*5000);
 
        cm.gainNX(dianjuansuiji); 
cm.gainItem(itemSet[rand],1);
cm.sendOk("#e#r��ϲ�������ã�#b#z"+itemSet[rand]+"##v"+itemSet[rand]+"#.");
        cm.����(3,"��ϲ[" + cm.getPlayer().getName() +"]���׷����,��ú�������" + jingyan + "����," + jinbi + "���," + dianjuansuiji + "���");  
          cm.dispose();
        }else{
        cm.sendOk(""+miaoshu+"\r\n#r#e����׷������#n#k:�����#v4000148#[#r"+cm.itemQuantity(4000148)+"#k/#b30#k��]\r\n"+ccc+"");
	cm.dispose();}
	} else if (day == 3){
          if(cm.haveItem(4000229,20)) {
             cm.gainItem(4000229,-20);
             cm.gainItem(2022670,1);
          cm.setBossLog("guaiwujishaling");  
        cm.gainExp(cm.getLevel()*5000);
           cm.gainNX(dianjuansuiji); 
cm.gainItem(itemSet[rand],1);
cm.sendOk("#e#r��ϲ�������ã�#b#z"+itemSet[rand]+"##v"+itemSet[rand]+"#.");
        cm.����(3,"��ϲ[" + cm.getPlayer().getName() +"]���׷����,��ú�������" + jingyan + "����," + jinbi + "���," + dianjuansuiji + "���");  
          cm.dispose();
        }else{
        cm.sendOk(""+miaoshu+"\r\n#r#e����׷������#n#k:�����#v4000229#[#r"+cm.itemQuantity(4000229)+"#k/#b20#k��]\r\n"+ddd+"");
	cm.dispose();}
	} else if (day == 4){
           if(cm.haveItem(4000054,10)) {
             cm.gainItem(4000054,-10);
             cm.gainItem(2022670,1);
          cm.setBossLog("guaiwujishaling");  
        cm.gainExp(cm.getLevel()*5000);
       
        cm.gainNX(dianjuansuiji); 
cm.gainItem(itemSet[rand],1);
cm.sendOk("#e#r��ϲ�������ã�#b#z"+itemSet[rand]+"##v"+itemSet[rand]+"#.");
        cm.����(3,"��ϲ[" + cm.getPlayer().getName() +"]���׷����,��ú�������" + jingyan + "����," + jinbi + "���," + dianjuansuiji + "���");  
          cm.dispose();
        }else{
        cm.sendOk(""+miaoshu+"\r\n#r#e����׷������#n#k:�����#v4000054#[#r"+cm.itemQuantity(4000054)+"#k/#b10#k��]\r\n"+eee+"");
	cm.dispose();}
	} else if (day == 5){
          if(cm.haveItem(4000238,30)) {
             cm.gainItem(4000238,-30);
             cm.gainItem(2022670,1);
          cm.setBossLog("guaiwujishaling");  
        cm.gainExp(cm.getLevel()*5000);
       
        cm.gainNX(dianjuansuiji); 
cm.gainItem(itemSet[rand],1);
cm.sendOk("#e#r��ϲ�������ã�#b#z"+itemSet[rand]+"##v"+itemSet[rand]+"#.");
        cm.����(3,"��ϲ[" + cm.getPlayer().getName() +"]���׷����,��ú�������" + jingyan + "����," + jinbi + "���," + dianjuansuiji + "���");  
          cm.dispose();
        }else{
        cm.sendOk(""+miaoshu+"\r\n#r#e����׷������#n#k:�����#v4000238#[#r"+cm.itemQuantity(4000238)+"#k/#b30#k��]\r\n"+fff+"");
	cm.dispose();}
	} else if (day == 6){
          if(cm.haveItem(4000239,30)) {
             cm.gainItem(4000239,-30);
             cm.gainItem(2022670,1);
          cm.setBossLog("guaiwujishaling");  
        cm.gainExp(cm.getLevel()*5000);
      
        cm.gainNX(dianjuansuiji); 
cm.gainItem(itemSet[rand],1);
cm.sendOk("#e#r��ϲ�������ã�#b#z"+itemSet[rand]+"##v"+itemSet[rand]+"#.");
        cm.����(3,"��ϲ[" + cm.getPlayer().getName() +"]���׷����,��ú�������" + jingyan + "����," + jinbi + "���," + dianjuansuiji + "���");  
          cm.dispose();
        }else{
        cm.sendOk(""+miaoshu+"\r\n#r#e����׷������#n#k:�����#v4000239#[#r"+cm.itemQuantity(4000239)+"#k/#b30#k��]\r\n"+ggg+"");
	cm.dispose();}
        }else{

        cm.sendOk("�������κ�����");
	cm.dispose();}
        } else if (selection == 5) {//��׽�ӷ�
            cm.openNpc(9900007, 5);
        } else if (selection == 6) {//תְ
            cm.openNpc(9900004, 2);
        } else if (selection == 7) {//����̳�
            cm.openNpc(9310071, 0);
        } else if (selection == 8) {//�һ�ϵͳ
            cm.openNpc(9900004, 8);
        } else if (selection == 9) {//����ϵͳ
            cm.openNpc(9900004, 9);
        } else if (selection == 10) {//��׽�ӷ�
if(cm.getLevel() < 70 ) {
                cm.sendOk("#b������Ҫ70�����ϲ�����ս.");
		cm.dispose();
}else if (cm.getBossLog("lienzhuiji") == 0){
cm.sendOk("[#r�����ӷ�#k]Ǳ�ӵ�#b���֮�ǹ�԰#k��.��ȥ��������������");
cm.setBossLog('lienzhuiji');
cm.dispose();
}else if (cm.getBossLog("lienzhuiji") >= 2){
cm.sendOk("���Ĳ�������Ŭ��");
cm.dispose();
        }else{
cm.sendOk("���Ѿ����˴�������,[#r�����ӷ�#k]Ǳ�ӵ�#b���֮�ǹ�԰#k��.��ȥ��������������");
	cm.dispose();}
        } else if (selection == 11) {//��׽�ӷ�
if(cm.getLevel() < 70 ) {
                cm.sendOk("#b������Ҫ70�����ϲ�����ս.");
		cm.dispose();
}else if (cm.getBossLog("lienzhuiji1") == 0){
cm.sendOk("[#r�����ӷ�#k]Ǳ�ӵ�#bħ��������ͷ#k��.��ȥ��������������");
cm.setBossLog('lienzhuiji1');
cm.dispose();
}else if (cm.getBossLog("lienzhuiji1") >= 2){
cm.sendOk("���Ĳ�������Ŭ��");
cm.dispose();
        }else{
cm.sendOk("���Ѿ����˴�������,[#r�����ӷ�#k]Ǳ�ӵ�#bħ��������ͷ#k��.��ȥ��������������");
	cm.dispose();}
        } else if (selection == 12) {//��׽�ӷ�
if(cm.getLevel() < 70 ) {
                cm.sendOk("#b������Ҫ70�����ϲ�����ս.");
		cm.dispose();
}else if (cm.getBossLog("lienzhuiji2") == 0){
cm.sendOk("[#r�����ӷ�#k]Ǳ�ӵ�#b����֮�Ǹ����ĺ�ɭ��ͨ��#k��.��ȥ��������������");
cm.setBossLog('lienzhuiji2');
cm.dispose();
}else if (cm.getBossLog("lienzhuiji2") >= 2){
cm.sendOk("���Ĳ�������Ŭ��");
cm.dispose();
        }else{
cm.sendOk("���Ѿ����˴�������,[#r�����ӷ�#k]Ǳ�ӵ�#b����֮�Ǹ����ĺ�ɭ��ͨ��#k��.��ȥ��������������");
	cm.dispose();}

        } else if (selection == 13) {//��׽�ӷ�
if(cm.getLevel() < 70 ) {
                cm.sendOk("#b������Ҫ70�����ϲ�����ս.");
		cm.dispose();
}else if (cm.getBossLog("lienzhuiji3") == 0){
cm.sendOk("[#r�����ӷ�#k]Ǳ�ӵ�#b�ƽ𺣰�#k��.��ȥ��������������");
cm.setBossLog('lienzhuiji3');
cm.dispose();
}else if (cm.getBossLog("lienzhuiji3") >= 2){
cm.sendOk("���Ĳ�������Ŭ��");
cm.dispose();
        }else{
cm.sendOk("���Ѿ����˴�������,[#r�����ӷ�#k]Ǳ�ӵ�#b�ƽ𺣰�#k��.��ȥ��������������");
	cm.dispose();}
        } else if (selection == 14) {//��׽�ӷ�
if(cm.getLevel() < 70 ) {
                cm.sendOk("#b������Ҫ70�����ϲ�����ս.");
		cm.dispose();
}else if (cm.getBossLog("lienzhuiji4") == 0){
cm.sendOk("[#r�����ӷ�#k]Ǳ�ӵ�#b�Ϻ�ԥ԰#k��.��ȥ��������������");
cm.setBossLog('lienzhuiji4');
cm.dispose();
}else if (cm.getBossLog("lienzhuiji4") >= 2){
cm.sendOk("���Ĳ�������Ŭ��");
cm.dispose();
        }else{
cm.sendOk("���Ѿ����˴�������,[#r�����ӷ�#k]Ǳ�ӵ�#b�Ϻ�ԥ԰#k��.��ȥ��������������");
	cm.dispose();}
        } else if (selection == 15) {//��׽�ӷ�
if(cm.getLevel() < 70 ) {
                cm.sendOk("#b������Ҫ70�����ϲ�����ս.");
		cm.dispose();
}else if (cm.getBossLog("lienzhuiji5") == 0){
cm.sendOk("[#r�����ӷ�#k]Ǳ�ӵ�#b�¼�����ͷ#k��.��ȥ��������������");
cm.setBossLog('lienzhuiji5');
cm.dispose();
}else if (cm.getBossLog("lienzhuiji5") >= 2){
cm.sendOk("���Ĳ�������Ŭ��");
cm.dispose();
        }else{
cm.sendOk("���Ѿ����˴�������,[#r�����ӷ�#k]Ǳ�ӵ�#b�¼�����ͷ#k��.��ȥ��������������");
	cm.dispose();}
        } else if (selection == 16) {//��׽�ӷ�
if(cm.getLevel() < 70 ) {
                cm.sendOk("#b������Ҫ70�����ϲ�����ս.");
		cm.dispose();
}else if (cm.getBossLog("lienzhuiji6") == 0){
cm.sendOk("[#r�����ӷ�#k]Ǳ�ӵ�#b�¼��»���#k��.��ȥ��������������");
cm.setBossLog('lienzhuiji6');
cm.dispose();
}else if (cm.getBossLog("lienzhuiji6") >= 2){
cm.sendOk("���Ĳ�������Ŭ��");
cm.dispose();
        }else{
cm.sendOk("���Ѿ����˴�������,[#r�����ӷ�#k]Ǳ�ӵ�#b�¼��»���#k��.��ȥ��������������");
	cm.dispose();}
        } else if (selection == 999) {//
		if(cm.getBossLog("2016�") <= 0 && cm.canHold(4001215,3) && cm.getLevel() >= 8){
			cm.setBossLog("2016�");
            cm.gainItem(4001215, 3);
			cm.worldMessage(6,"��ң�["+cm.getName()+"]��ȡ��2016-04-10���ϻ���影�������x3��");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���������������ռ�");
            cm.dispose();
		}
		}
    }
}


