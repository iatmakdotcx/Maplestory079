var status = -1;
var ������� = "#fUI/GuildBBS/GuildBBS/Emoticon/Basic/2#";
var wtlist = new Array(
//���а����� ���ݱ�(characters)�ֶ���
	
	Array("��  �� ���а�","str"),
	Array("��  �� ���а�","dex"),
	Array("��  �� ���а�","int"),
	Array("��  �� ���а�","luk")
);
var seletype;
function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else {
        if (status == 0) {
            cm.dispose();
        }
        status--;
    }
    if (status == 0) {
        var selStr = "����,�㾹�ҽӴ���������,����������!!!\r\n\r\n";
			for(var i = 0; i < wtlist.length; i++){
				selStr += "#L"+i+"##b"+wtlist[i][0]+"#l\t";
				if((i+1)%2 == 0){
					selStr += "\r\n\r\n";
				}
			}
        cm.sendSimple(selStr);
    } else if (status == 1) {
		if(wtlist[selection][1] <= 6){
			cm.sendOk(cm.ShowJobRank(wtlist[selection][1]));
			cm.dispose();
		} else {
			cm.showwn(wtlist[selection][1]);
			cm.dispose();
		}
	} else {
		cm.sendOk("�ű�����~!");
	}
}

