


//����������-----------------------------------------------------

var taskItems = [
	//��������,��ƷID����Ʒ����
	[1,4000019,200],//��1����
	[2,4000023,200],//��2����
	[3,4000183,200],//��3����
	[4,4000164,200],//��4����
	[5,4000072,200],//��5����
	[6,4000012,200],//��6����
	[7,4000111,200]
];

var rewards = [
	//��ƷID����Ʒ����
	[3992025,288],
	[2049100,1],
	[4032398,1],
	[4001266,2],
];
//-----------------------------------------------------

var status = -1;//ģ��״̬
var chr =null;
var say = "";
var weekIndex = -1;
function start(){
	if (cm.getBossLog("ÿ������_ÿ��") > 0) {
		cm.sendOk("ÿ����������ɣ��޷��ٴ���ȡ");
		cm.dispose();
		return;
	}
	weekIndex = new Date().getDay();
	if(weekIndex>0){weekIndex-=1;}else{weekIndex =6;}
    chr = cm.getPlayer();
    action(1,0,0);
}

function action(mode, type, selection) {
    if(mode == -1){cm.dispose();return;}
    if(status == 0 && mode == 0) {cm.dispose();return;}
    if(mode == 1) {status++;} else {status--;}

    if(status == 0){
		say = _getTitle("ÿ������");
		
		say += "�뽫��������ǩ������ ";
		say += "#v"+taskItems[weekIndex][1]+"# * "+taskItems[weekIndex][2]+" ������~\r\n";
		say += "����";
		for(var i = 0;i<rewards.length;i++){
			say += "#v"+rewards[i][0]+"#x"+rewards[i][1];
		}
		say += ",�Լ���Ӧ�ȼ��ľ���ֵ����\r\n\r\n";
		say += "#b#L0#�ύ����#l";
		cm.sendSimple(say);
    }else if(status == 1){
        if (selection == 0) {
			if (!cm.haveItem(taskItems[weekIndex][1],taskItems[weekIndex][2])) {
				cm.sendNext("#e#r��ô����?�����׼���Ĳ�����֡����ٴ�ȷ�Ͻ�����Ҫ��ǩ������");
				status = -1;
			} else {
				for(var i = 0;i<rewards.length;i++){
					cm.gainItem(rewards[i][0],rewards[i][1]);
				}
				cm.gainExp(20000)
				cm.gainExpR(cm.getLevel()*cm.getLevel()*20);
				cm.gainItem(taskItems[weekIndex][1],-taskItems[weekIndex][2]);
				cm.setBossLog("ÿ������_ÿ��");
				cm.worldMessage(6,"��ң�["+cm.getName()+"]�����ð�յ� ÿ��ǩ������");
				cm.dispose();
			}
		}else{
			cm.dispose();
		}
    }else{
        cm.dispose();
    }
}

var ul_cloud = "#fItem/Etc/0403/04031309/info/iconRaw#";  //
function _getTitle(t){
	return " "+ul_cloud+ul_cloud+ul_cloud+ul_cloud +"#r#e��"+ t+"��#k#n"+ul_cloud+ul_cloud+ul_cloud+ul_cloud +"\r\n\r\n";
}