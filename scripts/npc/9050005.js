var QuestName = "�������� -- ͨ������";//����ID
var Meso = 1000000;//�������
var Exp = 1000000;//��������
var ItemID = 4031456;//��������ID
var QuestItemID = 4000178;//�����������ID
var QuestItemNum = 1000;//���������������

var status = 0;

	function start() {
		status = -1;
		action(1, 0, 0);
		}

	function action(mode, type, selection) {
		if (mode == -1) {
		cm.dispose();
		} else {
		if (status >= 0 && mode == 0) {
		cm.dispose();
		return;
		}
		if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {
	    var textz = "            "+QuestName+"\r\n";

		textz += " - ����������ߣ�#v"+QuestItemID+"##z"+QuestItemID+"#\r\n\r\n";

		textz += " - ��������������"+QuestItemNum+"\r\n\r\n";
		
		textz += " - ���������飺"+Exp+"\r\n\r\n";
		
		textz += " - ����������100����#v"+ItemID+"##z"+ItemID+"#\r\n\r\n";
		
		textz += " - ��������ң�"+Meso+"\r\n\r\n";
		
		cm.sendYesNo (textz);  


             } else if (status == 1) {		
		   if (cm.haveItem(QuestItemID,QuestItemNum) == false) {
		            cm.sendOk("������������������㣬��ȷ�Ϻ�������");
				    cm.dispose();					
    } else if (cm.getPlayer().getBossLog(QuestName,1) > 0) {
                    cm.sendOk("������ֻ�����һ�Ρ�");					
				    cm.dispose();
                    } else{
					cm.gainItem(QuestItemID,-QuestItemNum);	
                    cm.gainItem(ItemID,100);//��������ID������
					cm.gainExp(Exp);
					cm.gainMeso(Meso);
					cm.getPlayer().setBossLog(QuestName,1,1);
					cm.getPlayer().setBossLog("��������ɾ�ֵ",1,1);
		 		    cm.sendOk("�������");
		 		    cm.dispose();
					}

    }
   
}
}

