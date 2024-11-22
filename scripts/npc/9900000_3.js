/*
SnailMS�ű�������
*/
var mobList = Array(9600037, 9600038, 9600039, 9600040, 9600041, 9600042, 9600043, 9600044, 9600045, 9600046, 9600047, 9600048, 9600049, 9600050, 9600051, 9600052, 9600053, 9600054, 9600055, 9600056, 9600057, 9600058, 9600059, 9600060, 9600061, 9600062);//Ӣ����ĸ��

//var mobList = Array(9600037, 9600038, 9600039, 9600040, 9600041, 9600042, 9600043, 9600044, 9600045, 9600046, 9600047, 9600048, 9600049, 9600050, 9600051, 9600052, 9600053, 9600054, 9600055, 9600056, 9600057, 9600058, 9600059, 9600060, 9600061, 9600062);���õ�

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("�Ի�������");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		//�������д�ű���һ��Ҫ������
		var text = "��������Ҫ�ٻ�����ĸ��������A~Z����ٻ���\r\n\r\n";
		cm.sendGetNumber(text, 1, 1, 1000);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection > 0 && selection <= 1000){
			//�������дѡ��1Ҫ������
			var map = cm.getPlayer().getMap();
			if(map != null){
				var count = 0;
				var check = 0;
				var chrList = map.getAllPlayersThreadsafe();
				//cm.playerMessage(6, "chrList���� = " + chrList.size());//����
				if(chrList != null && chrList.size() > 0){
					while(count < selection){
						check++;
						if(check > 2 * selection){
							cm.sendOk("������ѭ����ǿ���˳���");
							cm.dispose();
							return;
						}
						//cm.playerMessage(6, "�����һ��ѭ����count = " + count);//����
						var it = chrList.iterator();
						while(it.hasNext()){
							check++;
							if(count >= selection){
								break;
							}
							//cm.playerMessage(6, "��ʼ�ٻ�");//����
							var i = parseInt(Math.random() * mobList.length - 1);
							//cm.playerMessage(6, "iΪ" + i);//����
							var chr = it.next();
							if(chr != null){
								var x = chr.getPosition().x;
								//cm.playerMessage(6, "xΪ" + x);//����
								var y = chr.getPosition().y;
								//cm.playerMessage(6, "yΪ" + y);//����
								cm.spawnMob_map(mobList[i], map.getId(), x, y);
								count++;
								//cm.playerMessage(6, "�ٻ���" + count + "ֻ");//����
							}else{
								cm.sendOk("���󣬶�ȡ�Ľ�ɫΪ�ա�");
								cm.dispose();
								return;
							}
							
						}
					}
				}else{
					cm.sendOk("�����Ҳ�����ͼ�ϵĽ�ɫ�б�");
					cm.dispose();
					return;
				}
			}else{
				cm.sendOk("���󣬶�ȡ��ͼΪ��ֵ��");
				cm.dispose();
				return;
			}
			cm.sendOk("�ٻ��ɹ���");
			cm.dispose();
			return;
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			cm.sendOk("ֻ������1~1000��");
			cm.dispose();
			return;
		} 
		cm.dispose();
		
	} else {
		cm.dispose();
		return;
	}
}

