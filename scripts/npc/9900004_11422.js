/**

 * time:2020-07-26
 * explain: MS���ƣ�����ָ��������������ָ�����ܡ�
 * version��1.0
 * core:cm
 */


//����������-----------------------------------------------------
var cf_itemId = 2290083;//����ָ������ѧϰ����


var cf_skills = [
	//����ID���������������ܹ������ģ����ܳ�ʼ�ȼ���������ߵȼ����޶�VIP�ȼ����Ƿ���������
	[14001002,"����1���������߳�����",1,1,5,0,true],
	[1121002,"ƾ����ǿ�͵ľ����ܵ����˵Ĺ����Բ�����ˡ���",1,30,30,5,false],
];

//-----------------------------------------------------
var status = -1;//ģ��״̬
var chr =null;
var say = "";
var thisSel = null;
var thisLevel=0;
var count = 0;

function start(){
    chr = cm.getPlayer();
    action(1,0,0);
}

function action(mode, type, selection) {
    if(mode == -1){cm.dispose();return;}
    if(status == 0 && mode == 0) {cm.dispose();return;}
    if(mode == 1) {status++;} else {status--;}

    if(status == 0){
		say = _getTitle("�����ռ�����");
		say += "#d\t�������������#v"+cf_itemId+"#�Ļ�����������3�ο���ѧϰ\r\n\r\n";
		say += "\t\t\t\t #L1##bѧϰ����#l\r\n";
		say += "\t\t\t\t #L2##b��������#l\r\n";
        cm.sendSimple(say);
    }else if(status == 1){
		
		if(selection == 1){
			status = 100;
			say = _getTitle("�����ռ�����");
			say += "#dĿǰ֧��ѧϰ�ļ����У�";
			for(var i = 0;i<cf_skills.length;i++){
				if(cf_skills[i][5] == 0 || (cf_skills[i][5]>0 && cm.getVip() >cf_skills[i][5])){
					say += "\r\n\r\n#L" + i + "##s" + cf_skills[i][0] + "# ��ߵȼ�: " + cf_skills[i][4] + "  ��Ҫ#i" + cf_itemId + ":# * #r#e" + cf_skills[i][2] + "#n#k\r\n˵��:" + cf_skills[i][1] + "#l";
				}
			}
			cm.sendSimple(say);
		}else if(selection == 2){
			status = 200;
			say = _getTitle("�����ռ�����");
			say += "#dĿǰ֧�������ļ����У�";
			for(var i = 0;i<cf_skills.length;i++){
				
				if(cf_skills[i][6]){
					if(cf_skills[i][5] == 0 || (cf_skills[i][5]>0 && cm.getVip() >cf_skills[i][5])){
						say += "\r\n\r\n#L" + i + "##s" + cf_skills[i][0] + "# ��ߵȼ�: " + cf_skills[i][4] + "  ��Ҫ��Ӧ�ȼ�������#i" + cf_itemId + ":#  #r#e#n#k\r\n\r\n˵��:" + cf_skills[i][1] + "#l";
					}
				}
			}
			cm.sendSimple(say);
		}else{
			cm.dispose();
		}
    }else if(status == 101){
		thisSel = cf_skills[selection];
		if(thisSel == null){
			cm.sendOk("#r#e�����ѡ��������ѡ��");
			cm.dispose();
			return;
		}
		if(chr.getBossLog("study:"+thisSel[0],1) >0){
			cm.sendOk("#b#e���Ѿ�ѧϰ���ü����ˣ�����Ҫ�ظ�ѧϰ��");
			cm.dispose();
			return;
		}
		if(cm.getJob() <= 421) {
			cm.sendOk("#b#e�㲻������������Ҫѧϰ��");
			cm.dispose();
			return;
		}
		if(cm.getJob() >= 423) {
			cm.sendOk("#b#e�㲻������������Ҫѧϰ��");
			cm.dispose();
			return;
		}
		if(!cm.haveItem(5064300,3)) {
			cm.sendOk("#b#e��û�з���3�Σ��޷�ѧϰ��");
			cm.dispose();
			return;
		}
		
		if(cm.haveItem(cf_itemId, thisSel[2])){
			cm.sendYesNo("ϵͳ����#s" + thisSel[0] + "#���� A ��");
		} else {
			cm.sendOk("����#i" + cf_itemId + ":#���㣡");
			cm.dispose();
		}	
	}else if(status == 102){
	
		cm.gainItem(cf_itemId,-thisSel[2]);
		chr.setBossLog("study:"+thisSel[0],1,1);
		cm.teachSkill(thisSel[0],thisSel[3],thisSel[4]);
		chr.changeKeybinding(30,1,thisSel[0]);
		cm.sendOk("ѧϰ�ɹ���\r\n�뻻һ��Ƶ�����м�����Ŷ");
		cm.dispose();
	}else if(status == 201){
		thisSel = cf_skills[selection];
		if(thisSel == null){
			cm.sendOk("#r#e�����ѡ��������ѡ��");
			cm.dispose();
			return;
		}
		thisLevel = chr.getBossLog("study:"+thisSel[0],2);
		if(thisLevel  == 0){
			cm.sendOk("#r#e����δѧϰ�ü��ܣ�����ѧϰ!");
			cm.dispose();
			return;
		}
		
		if(thisLevel  >= 5){
			cm.sendOk("#e�ü����Ѿ�����������߼��ˣ������Լ��������ˡ�");
			cm.dispose();
			return;
		}
		count = (thisSel[2] * thisLevel)+1;
		if(cm.haveItem(cf_itemId, count)){
			cm.sendYesNo("ϵͳ����#s" + thisSel[0] + "#���� A ��\r\n��������������#v"+cf_itemId+"#x"+count);
		} else {
			say = "#r����#i" + cf_itemId + ":#���㣡";
			say += "#d��ǰ���ܵȼ���" +thisLevel+ "\r\n";
			say += "����������Ҫ����#v"+cf_itemId+"#x"+count+"��\r\n";
			
			cm.sendOk(say);
			cm.dispose();
		}	
	}else if(status == 202){
		cm.gainItem(cf_itemId,-count);
		chr.setBossLog("study:"+thisSel[0],1,1);
		cm.teachSkill(thisSel[0], thisLevel+1,thisSel[4]);
		chr.changeKeybinding(30,1,thisSel[0]);
		cm.sendOk("�����ɹ��������һ��Ƶ�����ɿ���Ч����");
		cm.dispose();
	}else{
        cm.dispose();
    }
}

var ul_cloud = "#fItem/Etc/0403/04031309/info/iconRaw#";  //
function _getTitle(t){
	return " "+ul_cloud+ul_cloud+ul_cloud+"#r#e��"+ t+"��#k#n"+ul_cloud+ul_cloud+ul_cloud+"\r\n\r\n";
}