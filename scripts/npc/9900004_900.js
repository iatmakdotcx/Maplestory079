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
var ��ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/4#";  //
var С�ۺ찮�� = "#fItem/Etc/0427/04270001/Icon8/5#";  //
var С���� = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var ����� = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var Сˮ�� = "#fItem/Etc/0427/04270001/Icon10/5#";  //
var ��ˮ�� = "#fItem/Etc/0427/04270001/Icon10/4#";  //
var tz = "#fEffect/CharacterEff/1082565/4/0#";  //������
var tz1 = "#fEffect/CharacterEff/1082565/0/0#";  //������
var tz2 = "#fEffect/CharacterEff/1082565/2/0#";  //������
var а��С�� = "#fEffect/CharacterEff/1112960/3/0#";  //а��С�� ��С��
var а��С��2 = "#fEffect/CharacterEff/1112960/3/1#";  //а��С�� ����
var ���� ="#fEffect/SetEff/208/effect/walk2/4#";
var ����1 ="#fEffect/SetEff/208/effect/walk2/3#";
var С�� ="#fMap/MapHelper/weather/birthday/2#";
var �һ� ="#fMap/MapHelper/weather/rose/4#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/2#";
var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var ����Ҷ ="#fMap/MapHelper/weather/maple/3#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var ���� ="#fMap/MapHelper/weather/witch/3#";
//var tz = "#fEffect/CharacterEff/1082565/4/0#";  //���ӷ�
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
        var selStr = "\r\t                 #r"+ С�̻� +"�����ռ�����ѧϰ"+ С�̻� +"\r\n#l";
		selStr += "                   #L111##b�ռ����ܽ���#l   \r\n\r\n";
		selStr += "                  #L222##b���׼������������#l   \r\n\r\n";
        selStr += "#k       #L1#Ӣ�ۼ���#l    #L2#ʥ�＼��#l    #L3#���＼��#l\r\n\r\n";
		selStr += "       #L4#�𶾼���#l    #L5#���׼���#l    #L6#���̼���#l\r\n\r\n";
		selStr += "             #L7#��������#l    #L8#�������#l\r\n\r\n";
		selStr += "             #L9#��ʿ����#l    #L10#��������#l\r\n\r\n";
		selStr += "             #L11#�ӳ�����#l    #L12#��������#l\r\n\r\n";
		selStr += "                    #L13#ս����#l\r\n  ";
		
		//selStr += "      #r#L22##v1402196#FFN��������#l   #r#L8##v1052669#��ҵ�·�����#l\r\n    ";
		cm.sendSimple(selStr);
    } else if (status == 1) {
        switch (selection) {
		case 1:
            cm.dispose();
			cm.openNpc(9900004,11112);//Ӣ��
            break;
        case 2:
		    cm.dispose();
			cm.openNpc(9900004,11122);//ʥ��
            break;
        case 3:
            cm.dispose();
			cm.openNpc(9900004,11132);//����
            break;
        case 4:
            cm.dispose();
			cm.openNpc(9900004,11212);//��
            break;
		case 5:
            cm.dispose();
			cm.openNpc(9900004,11222);//����
            break;
		case 6:
            cm.dispose();
			cm.openNpc(9900004,11232);//����
            break;
		case 7:
            cm.dispose();
			cm.openNpc(9900004,11312);//����
            break;
		case 8:
            cm.dispose();
			cm.openNpc(9900004,11322);//���
            break;
		case 9:
            cm.dispose();
			cm.openNpc(9900004,11412);//���
            break;
		case 10:
            cm.dispose();
			cm.openNpc(9900004,11422);//����
            break;
		case 11:
            cm.dispose();
			cm.openNpc(9900004,11512);//�ӳ�
            break;
		case 12:
            cm.dispose();
			cm.openNpc(9900004,11522);//����
            break;
		case 13:
            cm.dispose();
			cm.openNpc(9900004,21112);//ս��
            break;
			case 111:   
			 var text = "";
				text += "\t             #v2022075##r�ռ����ܽ���#v2022075#\r\n";
				text += "\t    "+ С�̻� +"#bÿ��ְҵ��������3�κ����ѧϰ"+ С�̻� +"\r\n\r\n";
				text += "  #kӢ�ۼ��� #s11111004##l  #kʥ�＼�� #s11001002##l  #k���＼�� #s11001003##l\r\n";
				text += "#k������������������������������������������������������\r\n";
			    //text += "#k������������������������������������������������������\r\n";
				text += "  #k�𶾼��� #s12001003##l  #k���׼��� #s12111006##l  #k���̼��� #s12101006##l\r\n";
				text += "#k������������������������������������������������������\r\n";
				//text += "#k������������������������������������������������������\r\n";
				text += "          #k���似�� #s13111002##l  #k������ #s13111001##l\r\n";
				text += "#k������������������������������������������������������\r\n";
				//text += "#k������������������������������������������������������\r\n";
				text += "          #k��ʿ���� #s14111005##l  #k�������� #s14001002##l\r\n";
				text += "#k������������������������������������������������������\r\n";
				//text += "#k������������������������������������������������������\r\n";
				text += "          #k�ӳ����� #s15111007##l  #k�������� #s5221004##l\r\n";
				text += "#k������������������������������������������������������\r\n";
				text += "                  #kս���� #s21120005##l\r\n";
				text += "#k������������������������������������������������������\r\n";
				
				cm.sendSimple(text)
				cm.dispose();
            break;
								case 222:
            cm.dispose();
            cm.openNpc(9310074,55);
            break;
							case 22:
            cm.dispose();
			cm.openNpc(2110000,0);
            //cm.openNpc(9201123,0);
            break;
							case 23:
            cm.dispose();
            cm.openNpc(9270025,0);
            break;
							case 24:
            cm.dispose();
            cm.openNpc(2080000,0);
            break;
							case 26:
            cm.dispose();
            cm.openNpc(9120054,10);
            break;
							case 27:
            cm.dispose();
            cm.openNpc(1093000,1);
            break;
							case 28:
            cm.dispose();
            cm.openNpc(9310074,0);
            break;
							case 29:
            cm.dispose();
            cm.openNpc(9120006,0);
            break;
							case 30:
            cm.dispose();
            cm.openNpc(9050010,0);
            break;
							case 31:
            cm.dispose();
            cm.openNpc(9120054,0);
            break;
							case 32:
            cm.dispose();
            cm.openNpc(9120054,1000);
            break;
}
	}
    }
}
