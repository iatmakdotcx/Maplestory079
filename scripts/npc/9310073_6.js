
var status = -1;
var ���Ҷ ="#fMap/MapHelper/weather/maple/1#";
var ����Ҷ ="#fMap/MapHelper/weather/maple/3#";
var С�̻� ="#fMap/MapHelper/weather/squib/squib4/1#";
var victim;
var ����ʦ�ŵȼ� = 150;
var nx;
var nx1;
var ��ʦ��ͽ���� = "ͽ�ܵȼ�����70�� ʦ���ȼ�����150�� ������ͽ  ͽ��170����ʦ 150���н���˫��BUFF��1��";
var ʦͽ�������� = ""
var ��ʦ�ȼ� = 170;
var SFMR1JID = 3992025;//��ʦ�ȼ�Ϊ1�����ĵ���
var SFMR1JNU = 10;//��ʦ�ȼ�Ϊ1�������ߵ�����1

var SFMR2JID = 4000463;//��ʦ�ȼ�Ϊ2�����ĵ���
var SFMR2JNU = 3;//��ʦ�ȼ�Ϊ2�������ߵ�����2
var SFMR2JID1 = 2049100;//��ʦ�ȼ�Ϊ2�����ĵ���
var SFMR2JNU1 = 3;//��ʦ�ȼ�Ϊ2�������ߵ�����2


var SFMR3JID = 4000463;//��ʦ�ȼ�Ϊ3�����ĵ���
var SFMR3JNU = 5;//��ʦ�ȼ�Ϊ3�������ߵ�����
var SFMR3JID1 = 2049100;//��ʦ�ȼ�Ϊ3�����ĵ���
var SFMR3JNU1 = 5;//��ʦ�ȼ�Ϊ3�������ߵ�����
var SFMR3JID2 = 4005004;//��ʦ�ȼ�Ϊ3�����ĵ���
var SFMR3JNU2 = 10;//��ʦ�ȼ�Ϊ3�������ߵ�����3
var SFMR3JID3 = 3992025;//��ʦ�ȼ�Ϊ3�����ĵ���
var SFMR3JNU3 = 100;//��ʦ�ȼ�Ϊ3�������ߵ�����3

var SFMR4JID = 4000463;//��ʦ�ȼ�Ϊ4�����ĵ���
var SFMR4JNU = 8;//��ʦ�ȼ�Ϊ4�������ߵ�����
var SFMR4JID1 = 2049100;//��ʦ�ȼ�Ϊ4�����ĵ���
var SFMR4JNU1 = 10;//��ʦ�ȼ�Ϊ4�������ߵ�����
var SFMR4JID2 = 4005004;//��ʦ�ȼ�Ϊ4�����ĵ���
var SFMR4JNU2 = 20;//��ʦ�ȼ�Ϊ4�������ߵ�����
var SFMR4JID3 = 2041315;//��ʦ�ȼ�Ϊ4�����ĵ���
var SFMR4JNU3 = 2;//��ʦ�ȼ�Ϊ4�������ߵ�����4
var SFMR4JID4 = 3992025;//��ʦ�ȼ�Ϊ4�����ĵ���
var SFMR4JNU4 = 300;//��ʦ�ȼ�Ϊ4�������ߵ�����4

var SFMR5JID = 4000463;//��ʦ�ȼ�Ϊ5�����ĵ���
var SFMR5JNU = 10;//��ʦ�ȼ�Ϊ5�������ߵ�����
var SFMR5JID1 = 2049100;//��ʦ�ȼ�Ϊ5�����ĵ���
var SFMR5JNU1 = 15;//��ʦ�ȼ�Ϊ5�������ߵ�����
var SFMR5JID2 = 4005004;//��ʦ�ȼ�Ϊ5�����ĵ���
var SFMR5JNU2 = 30;//��ʦ�ȼ�Ϊ5�������ߵ�����
var SFMR5JID3 = 2040815;//��ʦ�ȼ�Ϊ5�����ĵ���
var SFMR5JNU3 = 2;//��ʦ�ȼ�Ϊ5�������ߵ�����
var SFMR5JID4 = 3992025;//��ʦ�ȼ�Ϊ5�����ĵ���
var SFMR5JNU4 = 500;//��ʦ�ȼ�Ϊ5�������ߵ�����

var SFMR6JID = 4000463;//��ʦ�ȼ�Ϊ6�����ĵ���
var SFMR6JNU = 20;//��ʦ�ȼ�Ϊ6�������ߵ�����
var SFMR6JID1 = 2049100;//��ʦ�ȼ�Ϊ6�����ĵ���
var SFMR6JNU1 = 30;//��ʦ�ȼ�Ϊ6�������ߵ�����
var SFMR6JID2 = 4005004;//��ʦ�ȼ�Ϊ6�����ĵ���
var SFMR6JNU2 = 50;//��ʦ�ȼ�Ϊ6�������ߵ�����
var SFMR6JID3 = 2040903;//��ʦ�ȼ�Ϊ6�����ĵ���
var SFMR6JNU3 = 2;//��ʦ�ȼ�Ϊ6�������ߵ�����
var SFMR6JID4 = 3992025;//��ʦ�ȼ�Ϊ6�����ĵ���
var SFMR6JNU4 = 1000;//��ʦ�ȼ�Ϊ6�������ߵ�����


var TD160JLQID = 2450000;//ͽ��160������ȡ����
var TD160JLQNU = 1;//ͽ��160������ȡ��������

var TDCSID1 = 2450000;//ͽ�ܳ�ʦ����1
var TDCSNU1 = 2;

var TDCSID2 = 4000463;//ͽ�ܳ�ʦ����2
var TDCSNU2 = 5;

var ʦ��ÿ�ս�������;
var ʦ��ÿ�ս�������;
var ��ν;
var ��ѧ�ȼ�;
var ��ѧ����;
function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    
    if (mode == 1) {
        status++;
    } else if (mode == 0 && status != 0) {
        status--;
    } else {
        cm.dispose();
        return;
    }

    if (status == 0) {
		if (cm.getPlayer().getBossLog("����ʦ��",1) == 0) {
			 ��ν = "δ��ʦ��";
		} else if (cm.getPlayer().getBossLog("��ʦ����",1) == 0) {
			 ��ν = "��ͨ��ʦ";
		} else if (cm.getPlayer().getBossLog("��ʦ����",1) >= 1 && cm.getPlayer().getBossLog("��ʦ����",1) <= 5) {
			 ��ν = "Ϊ��ʦ��";
		} else if (cm.getPlayer().getBossLog("��ʦ����",1) >= 6 && cm.getPlayer().getBossLog("��ʦ����",1) <= 10) {
			 ��ν = "ѭѭ�յ�";
		} else if (cm.getPlayer().getBossLog("��ʦ����",1) >= 11 && cm.getPlayer().getBossLog("��ʦ����",1) <= 20) {
			 ��ν = "���˲���";
		} else if (cm.getPlayer().getBossLog("��ʦ����",1) >= 21 && cm.getPlayer().getBossLog("��ʦ����",1) <= 40) {
			 ��ν = "�������";
		} else if (cm.getPlayer().getBossLog("��ʦ����",1) >= 41 && cm.getPlayer().getBossLog("��ʦ����",1) <= 999) {
			 ��ν = "��������";
		}
		if (cm.getPlayer().getBossLog("��ʦ����",1) == 0) {
			 ��ѧ�ȼ� = 1;
		} else if (cm.getPlayer().getBossLog("��ʦ����",1) >= 1 && cm.getPlayer().getBossLog("��ʦ����",1) <= 5) {
			 ��ѧ�ȼ� = 2;
		} else if (cm.getPlayer().getBossLog("��ʦ����",1) >= 6 && cm.getPlayer().getBossLog("��ʦ����",1) <= 10) {
			 ��ѧ�ȼ� = 3;
		} else if (cm.getPlayer().getBossLog("��ʦ����",1) >= 11 && cm.getPlayer().getBossLog("��ʦ����",1) <= 20) {
			 ��ѧ�ȼ� = 4;
		} else if (cm.getPlayer().getBossLog("��ʦ����",1) >= 21 && cm.getPlayer().getBossLog("��ʦ����",1) <= 40) {
			 ��ѧ�ȼ� = 5;
		} else if (cm.getPlayer().getBossLog("��ʦ����",1) >= 41 && cm.getPlayer().getBossLog("��ʦ����",1) <= 999) {
			 ��ѧ�ȼ� = 6;
		}
		if (cm.getPlayer().getBossLog("��ʦ����",1) == 0) {
			 ��ѧ���� = 0;
		} else if (cm.getPlayer().getBossLog("��ʦ����",1) >= 1 && cm.getPlayer().getBossLog("��ʦ����",1) <= 5) {
			 ��ѧ���� = 6 - cm.getPlayer().getBossLog("ͽ��",1);
		} else if (cm.getPlayer().getBossLog("��ʦ����",1) >= 6 && cm.getPlayer().getBossLog("��ʦ����",1) <= 10) {
			 ��ѧ���� = 11 - cm.getPlayer().getBossLog("ͽ��",1);
		} else if (cm.getPlayer().getBossLog("��ʦ����",1) >= 11 && cm.getPlayer().getBossLog("��ʦ����",1) <= 20) {
			 ��ѧ���� = 21 - cm.getPlayer().getBossLog("ͽ��",1);
		} else if (cm.getPlayer().getBossLog("��ʦ����",1) >= 21 && cm.getPlayer().getBossLog("��ʦ����",1) <= 40) {
			 ��ѧ���� = 41 - cm.getPlayer().getBossLog("ͽ��",1);
		} else if (cm.getPlayer().getBossLog("��ʦ����",1) >= 41 && cm.getPlayer().getBossLog("��ʦ����",1) <= 999) {
			 ��ѧ���� ="����  ���";
		}
			
		    var text = ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n";
			text += "              #r��ӭ��������ð�յ�ʦͽϵͳ#k\r\n";
			text += ""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+""+���Ҷ+"\r\n\r\n";
			text += " #rע�⣺ͽ��150������170��ǰ��ȡ��170�����ڳ�ʦǰ��ȡ#k\r\n\r\n"
			text += " 	�������������������� �� �� Ϣ����������������#k\r\n"
			text += "					#d����ǰ��#k [#r"+cm.getPlayer().getBossLog("ͽ��",1)+"#k]#d λͽ��\r\n\r\n"
			text += "		���Ľ�ѧ�ȼ�Ϊ #k[ #r"+��ѧ�ȼ�+"#k ]#d 	 ��ν #k[#r"+��ν+"#k]#d\r\n\r\n"
			text += "		���Ľ�ѧ����Ϊ#k [ #r"+cm.getPlayer().getBossLog("ͽ��",1)+"#k ]#d	 ���� #k[ #r"+��ѧ����+"#k ]#d ����#k\r\n\r\n"
			text += "	���������������������� ����������������������\r\n"
			text += "				   #r#L0#��Ҫ����ʦ��#l\r\n\r\n"
			text += "		#L90#��ʦ��ͽ����#l		#L91#ʦͽ��������#l\r\n\r\n"
			text += "#b"
			text += " 	������������������ʦ �� ѡ ���������������#k\r\n"
			text += "		#L1#��Ҫ��ͽ#l #L2#���ʦ��#l #L3#ʦ������#l#b\r\n\r\n"
			text += "	���������������������� ����������������������\r\n"
			text += " 	������������������ͽ �� ѡ ���������������#k\r\n"
			text += "		#L4#��Ҫ��ʦ#l #L5#�뿪ʦ��#l #L6#ͽ�ܽ���#l#b\r\n\r\n"
			text += "	���������������������� ����������������������\r\n"
            cm.sendSimple(text);
    } else if (status == 1){
		if (selection == 0){//����ʦ��
			var id = cm.getPlayer().getId();
			if (cm.getPlayer().getLevel() < ����ʦ�ŵȼ�){ 
				cm.sendOk("��ĵȼ����� #r"+����ʦ�ŵȼ�+" #k����");
				cm.dispose();
				return;
			}else if(cm.getPlayer().getBossLog("����ʦ��",1) == 0){
				cm.getPlayer().setBossLog("����ʦ��",1,1);
				cm.sendOk("����ʦ�ųɹ���");
				cm.worldMessage(6,"��ʦͽϵͳ��[" + cm.getChar().getName() + "]�ɹ�������ʦ�ţ�Ҫ��ʦ���ĸϽ��ˣ�");
				cm.dispose();
			} else {
				cm.sendOk("ʦ��ֻ�ܴ���һ�Ρ�");
				cm.dispose();
			}
			
        } else if (selection == 1){//��Ҫ��ͽ
		if (cm.getPlayer().getBossLog("����ʦ��",1) == 0) {
			cm.sendOk("�㻹û�н���ʦ�š�");
			cm.dispose();
		} else {
		cm.sendYesNo("ÿλʦ�����ͬʱ�� 3 ��ͽ�ܡ�");
		nx = 4;
		}

		} else if (selection == 2){//���ʦ��
		          if (cm.getPlayer().getBossLog("��ͽ_1",1) == 0 && cm.getPlayer().getBossLog("��ͽ_2",1) == 0 && cm.getPlayer().getBossLog("��ͽ_3",1) == 0) {
					  cm.sendOk("�㻹û����ͽ��");
					  cm.dispose();
				  } else {
                  cm.sendYesNo("��Ҫ��ͽ�����ʦ����");
				  nx = 0;
				  }				  
		} else if (selection == 3){//ʦ������#l#b
		          if (cm.getPlayer().getBossLog("����ʦ��",1) != 1) {
					  cm.sendOk("ֻ��ʦ�����ܻ�øý���");
					  cm.dispose();
				  } else {
                  cm.sendYesNo("ʦ������Խ�ߣ�ÿ�տ���ȡ�Ľ���Խ�á�\r\n�Ƿ�Ҫ��ȡ���յĽ�����");
				  nx = 1;
				  }	 
		} else if (selection == 4){//��ʦ����
			var gender = cm.getPlayer().getGender();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var party = cm.getPlayer().getParty().getMembers();
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if ((party.size() > 2 || victim == null || victim.getMapId() != mapId)) {
                    next = false;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("�뱣֤��Ķ�����������Ҫ��\r\n1.������ֻ�� 2 ����ҡ�\r\n2.�����Ķ��Ѷ���ͬһ�ŵ�ͼ�ڡ�");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getBossLog("��ͽ_1",1) == victim.getId() || cm.getPlayer().getBossLog("��ͽ_2",1) == victim.getId() || cm.getPlayer().getBossLog("��ͽ_3",1) == victim.getId()) {
                		cm.sendNext("�ܺã�������Ҫ�������ͽ�� "+getname(victim.getId())+" ���г�ʦ��ʽ��");
                		nx = 5;
					} else {
						cm.sendNext("���ͽ����Ӻ��������ҡ�");
						cm.dispose();
                    }

		} else if (selection == 5){//�˳�ʦ��
			if (cm.getPlayer().getBossLog("ʦ��",1) == 0) {
				cm.sendOk("�㻹û��ʦ���������˳�ʦ�š�");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog("����ʦ��",1) > 0) {
				cm.sendOk("��������Ц����");
				cm.dispose();
			} else {
				cm.sendYesNo("�Ƿ�Ҫ�˳� "+getname(cm.getPlayer().getBossLog("ʦ��",1))+" ��ʦ�ţ�");
				nx = 2;
			}
		} else if (selection == 6){//ͽ��ÿ�ս���
			if (cm.getPlayer().getBossLog("ʦ��",1) == 0) {
				cm.sendOk("�㻹û��ʦ�����޷���ȡ��");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog("����ʦ��",1) == 1) {
				cm.sendOk("���ڸ�Ц��");
				cm.dispose();
			} else if (cm.getPlayer().getBossLog("ʦ��",1) != 0 && cm.getLevel() > 149 && cm.getLevel() < 170) {
				cm.sendYesNo("�Ƿ�Ҫ��ȡͽ��150��������");
			
				nx = 3;
			} else if (cm.getPlayer().getBossLog("ʦ��",1) != 0 && cm.getLevel() > 169) {
				cm.sendYesNo("�Ƿ�Ҫ��ȡͽ��170��������");
			
				nx = 11;
			} else {
				cm.sendOk("�㲻��������");			
				cm.dispose();
			}
		} else if (selection == 90){
			cm.sendOk(��ʦ��ͽ����);
		} else if (selection == 91){
					    var text = "\r\n";
			text += " 	#e#d������������������ʦ��ÿ�ս�������������������#n#k\r\n\r\n"
			text += "	  #r[��ͨ��ʦ]��ÿ�տ���ȡ#k\r\n	#v"+SFMR1JID+"#*"+SFMR1JNU+"\r\n"
			text += "	  #r[Ϊ��ʦ��]��ÿ�տ���ȡ#k\r\n	#v"+SFMR2JID+"#*"+SFMR2JNU+"  #v"+SFMR2JID1+"#*"+SFMR2JNU1+"\r\n"
			text += "	  #r[ѭѭ����]��ÿ�տ���ȡ#k\r\n	#v"+SFMR3JID+"#*"+SFMR3JNU+"  #v"+SFMR3JID1+"#*"+SFMR3JNU1+" #v"+SFMR3JID2+"#*"+SFMR3JNU2+" #v"+SFMR3JID3+"#*"+SFMR3JNU3+"\r\n"
			text += "	  #r[���˲���]��ÿ�տ���ȡ#k\r\n	#v"+SFMR4JID+"#*"+SFMR4JNU+"  #v"+SFMR4JID1+"#*"+SFMR4JNU1+" #v"+SFMR4JID2+"#*"+SFMR4JNU2+" #v"+SFMR4JID3+"#*"+SFMR4JNU3+" #v"+SFMR4JID4+"#*"+SFMR4JNU4+"\r\n"
			text += "	  #r[�������]��ÿ�տ���ȡ#k\r\n	#v"+SFMR5JID+"#*"+SFMR5JNU+"  #v"+SFMR5JID1+"#*"+SFMR5JNU1+" #v"+SFMR5JID2+"#*"+SFMR5JNU2+" #v"+SFMR5JID3+"#*"+SFMR5JNU3+" #v"+SFMR5JID4+"#*"+SFMR5JNU4+"\r\n"
			text += "	  #r[��������]��ÿ�տ���ȡ#k\r\n	#v"+SFMR6JID+"#*"+SFMR6JNU+"  #v"+SFMR6JID1+"#*"+SFMR6JNU1+" #v"+SFMR6JID2+"#*"+SFMR6JNU2+" #v"+SFMR6JID3+"#*"+SFMR6JNU3+" #v"+SFMR6JID4+"#*"+SFMR6JNU4+"\r\n"
			text += "	#e#d���������������������� ����������������������#n#k\r\n"
			text += " 	#e#d������������������ͽ�ܿ�����ȡ����������������#n#k\r\n\r\n"
			text += "	  #r[ͽ�ܵȼ��ﵽ150]������ȡ#k\r\n				  #v"+TD160JLQID+"# * "+TD160JLQNU+"\r\n"
			text += "	  #r[ͽ�ܳɹ���ʦ�ȼ�170]������ȡ#k\r\n				  #v"+TDCSID1+"# * "+TDCSNU1+" #v"+TDCSID2+"# * "+TDCSNU2+"\r\n"
			text += "	#e#d���������������������� ����������������������#n#k\r\n"
            cm.sendSimple(text);
		   }
		} else if (status == 2) {
		       if (nx == 0) {
				   				   if (cm.getPlayer().getBossLog("��ͽ_1",1) > 0) {
					   var ��ʾ = "#L3#�� "+getname(cm.getPlayer().getBossLog("��ͽ_1",1))+" ���ʦ�ţ�\r\n"
				   } else {
					   var ��ʾ = "";
					   }
				    if (cm.getPlayer().getBossLog("��ͽ_2",1) > 0) {
					   var ��ʾ1 = "#L4#�� "+getname(cm.getPlayer().getBossLog("��ͽ_2",1))+" ���ʦ�ţ�\r\n"
				   } else {
					   var ��ʾ1 = "";
					   }
				    if (cm.getPlayer().getBossLog("��ͽ_3",1) > 0) {
					   var ��ʾ2 = "#L5#�� "+getname(cm.getPlayer().getBossLog("��ͽ_3",1))+" ���ʦ�ţ�\r\n"
				   } else {
					   var ��ʾ2 = "";
					   }
					   var text = "��ѡ����Ҫ���ʦ�ŵĵ��ӣ�\r\n#rע��ѡ������������棬�����ѡ��#k\r\n";
				      text += ��ʾ;
					  text += ��ʾ1;
					  text += ��ʾ2;
					  cm.sendSimple(text);	


				   
			   } else if (nx == 1) {//ʦ��ÿ�ս���
				  		if (��ѧ�ȼ� == 1) {
			ʦ��ÿ�ս������� = SFMR1JID;
			ʦ��ÿ�ս������� = SFMR1JNU;
		} else if (��ѧ�ȼ� == 2) {
			ʦ��ÿ�ս������� = SFMR2JID;
			ʦ��ÿ�ս������� = SFMR2JNU;
			ʦ��ÿ�ս�������1 = SFMR2JID1;
			ʦ��ÿ�ս�������1 = SFMR2JNU1;
		} else if (��ѧ�ȼ� == 3) {
			ʦ��ÿ�ս������� = SFMR3JID;
			ʦ��ÿ�ս������� = SFMR3JNU;
			ʦ��ÿ�ս�������1 = SFMR3JID1;
			ʦ��ÿ�ս�������1 = SFMR3JNU1;
			ʦ��ÿ�ս�������2 = SFMR3JID2;
			ʦ��ÿ�ս�������2 = SFMR3JNU2;
			ʦ��ÿ�ս�������3 = SFMR3JID3;
			ʦ��ÿ�ս�������3 = SFMR3JNU3;
		} else if (��ѧ�ȼ� == 4) {
			ʦ��ÿ�ս������� = SFMR4JID;
			ʦ��ÿ�ս������� = SFMR4JNU;
			ʦ��ÿ�ս�������1 = SFMR4JID1;
			ʦ��ÿ�ս�������1 = SFMR4JNU1;
			ʦ��ÿ�ս�������2 = SFMR4JID2;
			ʦ��ÿ�ս�������2 = SFMR4JNU2;
			ʦ��ÿ�ս�������3 = SFMR4JID3;
			ʦ��ÿ�ս�������3 = SFMR4JNU3;
			ʦ��ÿ�ս�������4 = SFMR4JID4;
			ʦ��ÿ�ս�������4 = SFMR4JNU4;
		} else if (��ѧ�ȼ� == 5) {
			ʦ��ÿ�ս������� = SFMR5JID;
			ʦ��ÿ�ս������� = SFMR5JNU;
			ʦ��ÿ�ս�������1 = SFMR5JID1;
			ʦ��ÿ�ս�������1 = SFMR5JNU1;
			ʦ��ÿ�ս�������2 = SFMR5JID2;
			ʦ��ÿ�ս�������2 = SFMR5JNU2;
			ʦ��ÿ�ս�������3 = SFMR5JID3;
			ʦ��ÿ�ս�������3 = SFMR5JNU3;
			ʦ��ÿ�ս�������4 = SFMR5JID4;
			ʦ��ÿ�ս�������4 = SFMR5JNU4;
			//ʦ��ÿ�ս�������5 = SFMR5JID5;
			//ʦ��ÿ�ս�������5 = SFMR5JNU5;
        } else if (��ѧ�ȼ� == 6) {
			ʦ��ÿ�ս������� = SFMR6JID;
			ʦ��ÿ�ս������� = SFMR6JNU;
			ʦ��ÿ�ս�������1 = SFMR6JID1;
			ʦ��ÿ�ս�������1 = SFMR6JNU1;
			ʦ��ÿ�ս�������2 = SFMR6JID2;
			ʦ��ÿ�ս�������2 = SFMR6JNU2;
			ʦ��ÿ�ս�������3 = SFMR6JID3;
			ʦ��ÿ�ս�������3 = SFMR6JNU3;
			ʦ��ÿ�ս�������4 = SFMR6JID4;
			ʦ��ÿ�ս�������4 = SFMR6JNU4;
			//ʦ��ÿ�ս�������5 = SFMR6JID5;
			//ʦ��ÿ�ս�������5 = SFMR6JNU5;
		}
				   if (cm.getBossLog("ʦ��ÿ�ս���") == 0 && cm.canHold(ʦ��ÿ�ս�������,ʦ��ÿ�ս�������)) {
					   cm.setBossLog("ʦ��ÿ�ս���");
					   cm.gainItem(ʦ��ÿ�ս�������,ʦ��ÿ�ս�������);
					   cm.gainItem(ʦ��ÿ�ս�������1,ʦ��ÿ�ս�������1);
					   cm.gainItem(ʦ��ÿ�ս�������2,ʦ��ÿ�ս�������2);
					   cm.gainItem(ʦ��ÿ�ս�������3,ʦ��ÿ�ս�������3);
					   cm.gainItem(ʦ��ÿ�ս�������4,ʦ��ÿ�ս�������4);
					   cm.gainItem(ʦ��ÿ�ս�������5,ʦ��ÿ�ս�������5);
					   cm.sendOk("������Ŀǰ�ĵȼ������յĽ��� [ #d#v"+ʦ��ÿ�ս�������+"##z"+ʦ��ÿ�ս�������+"##k * #r"+ʦ��ÿ�ս�������+"#k ] ��ȡ�ɹ���");
					   cm.dispose();
				   }else{
					   cm.sendOk("���ս�������ȡ�򱳰����㡣");
					   cm.dispose();
    }
			   } else if (nx == 2) {	//�˳�ʦ��
				   cm.getPlayer().setBossLog("ʦ��",1,- cm.getPlayer().getBossLog("ʦ��",1));
				   cm.sendOk("�����˳�ʦ�š�");
				   cm.dispose();
			   } else if (nx == 3) {//ͽ��150������
				   if (cm.getPlayer().getBossLog("ͽ��150������",1) == 0  && cm.canHold(TD160JLQID,TD160JLQNU) && cm.getLevel() >= 150) {//cm.getPlayer().getBossLog("ͽ��150������",1) == 0
					   cm.gainItem(2450000, 1);
					   cm.setBossLog("ͽ��150������");
					   cm.sendOk("150��������ȡ�ɹ�~");
					   cm.dispose();
				   } else {
					   cm.sendOk("��������ȡ���߱����ռ䲻�㡣");
					   cm.dispose();
				   }
			   } else if (nx == 11) {//ͽ��170������
				   if (cm.getPlayer().getBossLog("ͽ��170������",1) == 0  && cm.canHold(TD160JLQID,TD160JLQNU) && cm.getLevel() >= 170) {//cm.getPlayer().getBossLog("ͽ��150������",1) == 0
					   cm.gainItem(2450000, 2);
					   cm.gainItem(4000463, 5);
					   cm.setBossLog("ͽ��170������");
					   cm.sendOk("170��������ȡ�ɹ�~");
					   cm.dispose();
				   } else {
					   cm.sendOk("��������ȡ���߱����ռ䲻�㡣");
					   cm.dispose();
				   }
			   } else if (nx == 4) {
				   if (cm.getPlayer().getBossLog("��ͽ_1",1) > 0) {
					   var ��ʾ = "   1.ͽ�����֣�"+getname(cm.getPlayer().getBossLog("��ͽ_1",1))+"\r\n"
				   } else {
					   var ��ʾ = "#L0#1.��ǰͽ��λ��ȱ��������ͽ\r\n";
					   }
				    if (cm.getPlayer().getBossLog("��ͽ_2",1) > 0) {
					   var ��ʾ1 = "2."+getname(cm.getPlayer().getBossLog("��ͽ_2",1))+"\r\n"
				   } else {
					   var ��ʾ1 = "#L1#2.��ǰͽ��λ��ȱ��������ͽ\r\n";
					   }
				    if (cm.getPlayer().getBossLog("��ͽ_3",1) > 0) {
					   var ��ʾ2 = "3."+getname(cm.getPlayer().getBossLog("��ͽ_3",1))+"\r\n"
				   } else {
					   var ��ʾ2 = "#L2#3.��ǰͽ��λ��ȱ��������ͽ\r\n";
					   }
					   var text = "����Ϊ��ǰ��ͽ�����\r\n";
				      text += ��ʾ;
					  text += ��ʾ1;
					  text += ��ʾ2;
					  cm.sendSimple(text);	
					  
			   } else if (nx == 5) {
				   if (cm.getPlayer().getBossLog("��ͽ_1",1) == victim.getId()) {
					   var ��ʾ = "   #L6#����ͽ�� "+getname(cm.getPlayer().getBossLog("��ͽ_1",1))+" ��ʦ��\r\n"
				   } else {
					   var ��ʾ = "";
					   }
				    if (cm.getPlayer().getBossLog("��ͽ_2",1) == victim.getId()) {
					   var ��ʾ1 = "   #L7#����ͽ�� "+getname(cm.getPlayer().getBossLog("��ͽ_2",1))+" ��ʦ��\r\n"
				   } else {
					   var ��ʾ1 = "";
					   }
				    if (cm.getPlayer().getBossLog("��ͽ_3",1) == victim.getId()) {
					   var ��ʾ2 = "   #L8#����ͽ�� "+getname(cm.getPlayer().getBossLog("��ͽ_3",1))+" ��ʦ��\r\n"
				   } else {
					   var ��ʾ2 = "";
					   }
					   var text = "��ѡ��׼����ʦ��ͽ�ܣ�\r\n";
				      text += ��ʾ;
					  text += ��ʾ1;
					  text += ��ʾ2;
					  cm.sendSimple(text);	
}
		} else if (status == 3) {
			if (selection == 0) {
				if (cm.getParty() == null) {
					cm.sendNext("����Ӻ��������ң�");
					cm.dispose();
					return;
				}
			var gender = cm.getPlayer().getGender();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var party = cm.getPlayer().getParty().getMembers();
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if ((party.size() > 2 || victim == null || victim.getMapId() != mapId) || victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMapId() != mapId)) {
                    next = false;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("�뱣֤��Ķ�����������Ҫ��\r\n1.������ֻ�� 2 ����ҡ�\r\n2.�����Ķ��Ѷ���ͬһ�ŵ�ͼ�ڡ�");
                cm.dispose();
                return;
            }else if (cm.getParty() == null) {
                cm.sendNext("����Ӻ��������ң�");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getBossLog("����ʦ��",1) == 0) {
                cm.sendNext("����ʦ�����ҶԻ���");
                cm.dispose();
                return;
			} else if (victim.getLevel() > 70){
				cm.sendOk("��Ķ��ѵȼ����� 70 �����޷�����ʦ�š�");
				cm.dispose();
				return;
			} else if (victim.getBossLog("ʦ��",1) == cm.getPlayer().getId()){
				cm.sendOk("���Ѿ��չ����ͽ����");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getParty().getMembers().size() > 2){
				cm.sendOk("ÿ��ֻ�ܴ�һ��ͽ�����ţ���2����ӣ�");
				cm.dispose();
				return;
			} else {
					cm.getPlayer().setBossLog("��ͽ_1",1,victim.getId());
					victim.setBossLog("ʦ��",1,cm.getPlayer().getId());
					cm.sendOk("��ɹ�����"+victim.getName()+"Ϊͽ�ܡ�");
					cm.worldMessage(6,"��ʦͽϵͳ����[" + cm.getChar().getName() + "]��["+victim.getName()+"]��Ϊͽ�ܣ���ҹ�ϲ����~");
					cm.dispose();
					return;
			}
					
	} else if (selection == 1) {
			if (cm.getParty() == null) {
                cm.sendNext("����Ӻ��������ң�");
                cm.dispose();
                return;
			}
			var gender = cm.getPlayer().getGender();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
			
            var party = cm.getPlayer().getParty().getMembers();
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if ((party.size() > 2 || victim == null || victim.getMapId() != mapId) || victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMapId() != mapId)) {
                    next = false;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("�뱣֤��Ķ�����������Ҫ��\r\n1.������ֻ�� 2 ����ҡ�\r\n2.�����Ķ��Ѷ���ͬһ�ŵ�ͼ�ڡ�");
                cm.dispose();
                return;
            }else if (cm.getParty() == null) {
                cm.sendNext("����Ӻ��������ң�");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getBossLog("����ʦ��",1) == 0) {
                cm.sendNext("����ʦ�����ҶԻ���");
                cm.dispose();
                return;
			} else if (victim.getLevel() > 70){
				cm.sendOk("��Ķ��ѵȼ����� 70 �����޷�����ʦ�š�");
				cm.dispose();
				return;
			} else if (victim.getBossLog("ʦ��",1) == cm.getPlayer().getId()){
				cm.sendOk("���Ѿ��չ����ͽ����");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getParty().getMembers().size() > 2){
				cm.sendOk("ÿ��ֻ�ܴ�һ��ͽ�����ţ���2����ӣ�");
				cm.dispose();
				return;
			} else {
					cm.getPlayer().setBossLog("��ͽ_2",1,victim.getId());
					victim.setBossLog("ʦ��",1,cm.getPlayer().getId());
					cm.sendOk("��ɹ�����"+victim.getName()+"Ϊͽ�ܡ�");
					cm.worldMessage(6,"��ʦͽϵͳ����[" + cm.getChar().getName() + "]��["+victim.getName()+"]��Ϊͽ�ܣ���ҹ�ϲ����~");
					cm.dispose();
					return;
					}
					
			   } else if (selection == 2) {
				   if (cm.getParty() == null) {
						cm.sendNext("����Ӻ��������ң�");
						cm.dispose();
						return;
					}	
				   var gender = cm.getPlayer().getGender();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var party = cm.getPlayer().getParty().getMembers();
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if ((party.size() > 2 || victim == null || victim.getMapId() != mapId) || victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMapId() != mapId)) {
                    next = false;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("�뱣֤��Ķ�����������Ҫ��\r\n1.������ֻ�� 2 ����ҡ�\r\n2.�����Ķ��Ѷ���ͬһ�ŵ�ͼ�ڡ�");
                cm.dispose();
                return;
            }else if (cm.getParty() == null) {
                cm.sendNext("����Ӻ��������ң�");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getBossLog("����ʦ��",1) == 0) {
                cm.sendNext("����ʦ�����ҶԻ���");
                cm.dispose();
                return;
			} else if (victim.getLevel() > 70){
				cm.sendOk("��Ķ��ѵȼ����� 70 �����޷�����ʦ�š�");
				cm.dispose();
				return;
			} else if (victim.getBossLog("ʦ��",1) == cm.getPlayer().getId()){
				cm.sendOk("���Ѿ��չ����ͽ����");
				cm.dispose();
				return;
			} else if (cm.getPlayer().getParty().getMembers().size() > 2){
				cm.sendOk("ÿ��ֻ�ܴ�һ��ͽ�����ţ���2����ӣ�");
				cm.dispose();
				return;
			} else {
					cm.getPlayer().setBossLog("��ͽ_3",1,victim.getId());
					victim.setBossLog("ʦ��",1,cm.getPlayer().getId());
					cm.sendOk("��ɹ�����"+victim.getName()+"Ϊͽ�ܡ�");
					cm.worldMessage(6,"��ʦͽϵͳ����[" + cm.getChar().getName() + "]��["+victim.getName()+"]��Ϊͽ�ܣ���ҹ�ϲ����~");
					cm.dispose();
					return;
					}
			   } else if (selection == 3) { 
			       cm.sendYesNo("�Ƿ�Ҫ�� "+getname(cm.getPlayer().getBossLog("��ͽ_1",1))+" ���ʦ�ţ�");
				   nx1 = 1;
			   } else if (selection == 4) { 
			       cm.sendYesNo("�Ƿ�Ҫ�� "+getname(cm.getPlayer().getBossLog("��ͽ_2",1))+" ���ʦ�ţ�");
				   nx1 = 2;
			   } else if (selection == 5) { 
			       cm.sendYesNo("�Ƿ�Ҫ�� "+getname(cm.getPlayer().getBossLog("��ͽ_3",1))+" ���ʦ�ţ�");
				   nx1 = 3;
				   
			 } else if (selection == 6) {
				   var gender = cm.getPlayer().getGender();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var party = cm.getPlayer().getParty().getMembers();
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if ((party.size() > 2 || victim == null || victim.getMapId() != mapId) || victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMapId() != mapId)) {
                    next = false;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("�뱣֤��Ķ�����������Ҫ��\r\n1.������ֻ�� 2 ����ҡ�\r\n2.�����Ķ��Ѷ���ͬһ�ŵ�ͼ�ڡ�");
                cm.dispose();
                return;
            }else if (cm.getParty() == null) {
                cm.sendNext("����Ӻ��������ң�");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getBossLog("����ʦ��",1) == 0) {
                cm.sendNext("����ʦ�����ҶԻ���");
                cm.dispose();
                return;
			} else if (victim.getLevel() < ��ʦ�ȼ�){
				cm.sendOk("���ͽ�ܵȼ����� "+��ʦ�ȼ�+" �����޷���ʦ��");
				cm.dispose();
				return;
			} else {//====================================================��ʦ������ӵ��������������
					cm.getPlayer().setBossLog("��ʦ����",1,1);
				cm.getPlayer().setBossLog("ͽ��",1,1);
				cm.getPlayer().setBossLog("��ͽ_1",1,-cm.getPlayer().getBossLog("��ͽ_1",1));
				victim.setBossLog("ʦ��",1,-victim.getBossLog("ʦ��",1));	
                    victim.gainItem(TDCSID1, TDCSNU1);	//ͽ�ܳ�ʦ����1����ģ��Ķ���ֵ��д�����桿
                    victim.gainItem(TDCSID2, TDCSNU2);	//ͽ�ܳ�ʦ����2		����ģ��Ķ���ֵ��д�����桿		
					cm.sendOk("��ϲ���ʦ�ɹ�");
					cm.dispose();
					return;
					}	
			 } else if (selection == 7) {
				   var gender = cm.getPlayer().getGender();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var party = cm.getPlayer().getParty().getMembers();
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if ((party.size() > 2 || victim == null || victim.getMapId() != mapId) || victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMapId() != mapId)) {
                    next = false;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("�뱣֤��Ķ�����������Ҫ��\r\n1.������ֻ�� 2 ����ҡ�\r\n2.�����Ķ��Ѷ���ͬһ�ŵ�ͼ�ڡ�");
                cm.dispose();
                return;
            }else if (cm.getParty() == null) {
                cm.sendNext("����Ӻ��������ң�");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getBossLog("����ʦ��",1) == 0) {
                cm.sendNext("����ʦ�����ҶԻ���");
                cm.dispose();
                return;
			} else if (victim.getLevel() < ��ʦ�ȼ�){
				cm.sendOk("���ͽ�ܵȼ����� "+��ʦ�ȼ�+" �����޷���ʦ��");
				cm.dispose();
				return;
			} else {//====================================================��ʦ������ӵ��������������
					cm.getPlayer().setBossLog("��ʦ����",1,1);
				cm.getPlayer().setBossLog("ͽ��",1,1);
				cm.getPlayer().setBossLog("��ͽ_2",1,-cm.getPlayer().getBossLog("��ͽ_2",1));
				victim.setBossLog("ʦ��",1,-victim.getBossLog("ʦ��",1));	
                    victim.gainItem(TDCSID1, TDCSNU1);	//ͽ�ܳ�ʦ����1����ģ��Ķ���ֵ��д�����桿
                    victim.gainItem(TDCSID2, TDCSNU2);	//ͽ�ܳ�ʦ����2	����ģ��Ķ���ֵ��д�����桿					
					cm.sendOk("��ϲ���ʦ�ɹ�");
					cm.dispose();
					return;
					}	
			 } else if (selection == 8) {
				   var gender = cm.getPlayer().getGender();
            var mapId = cm.getPlayer().getMapId();
            var next = true;
            var party = cm.getPlayer().getParty().getMembers();
            var it = party.iterator();
            while (it.hasNext()) {
                var cPlayer = it.next();
                victim = cm.getPlayer().getMap().getCharacterById(cPlayer.getId());
                if ((party.size() > 2 || victim == null || victim.getMapId() != mapId) || victim.getId() != cm.getPlayer().getId() && (party.size() > 2 || victim == null || victim.getMapId() != mapId)) {
                    next = false;
                    break;
                }
            }

            if (!next) {
                cm.sendNext("�뱣֤��Ķ�����������Ҫ��\r\n1.������ֻ�� 2 ����ҡ�\r\n2.�����Ķ��Ѷ���ͬһ�ŵ�ͼ�ڡ�");
                cm.dispose();
                return;
            }else if (cm.getParty() == null) {
                cm.sendNext("����Ӻ��������ң�");
                cm.dispose();
                return;
			} else if (cm.getPlayer().getBossLog("����ʦ��",1) == 0) {
                cm.sendNext("����ʦ�����ҶԻ���");
                cm.dispose();
                return;
			} else if (victim.getLevel() < ��ʦ�ȼ�){
				cm.sendOk("���ͽ�ܵȼ����� "+��ʦ�ȼ�+" �����޷���ʦ��");
				cm.dispose();
				return;
			} else {//====================================================��ʦ������ӵ��������������
					cm.getPlayer().setBossLog("��ʦ����",1,1);
				cm.getPlayer().setBossLog("ͽ��",1,1);
				cm.getPlayer().setBossLog("��ͽ_3",1,-cm.getPlayer().getBossLog("��ͽ_3",1));
				victim.setBossLog("ʦ��",1,-victim.getBossLog("ʦ��",1));	
                    victim.gainItem(TDCSID1, TDCSNU1);	//ͽ�ܳ�ʦ����1����ģ��Ķ���ֵ��д�����桿
                    victim.gainItem(TDCSID2, TDCSNU2);	//ͽ�ܳ�ʦ����2	����ģ��Ķ���ֵ��д�����桿					
					cm.sendOk("��ϲ���ʦ�ɹ�");
					cm.dispose();
					return;
					}					
}
		} else if (status == 4) {
			   if (nx1 == 1) {
			   cm.sendOk("�ѽ� "+getname(cm.getPlayer().getBossLog("��ͽ_1",1))+" ���ʦ�ţ�");
			   cm.getPlayer().setBossLog("��ͽ_1",1,-cm.getPlayer().getBossLog("��ͽ_1",1));
               cm.dispose();
			   } else if (nx1 == 2) {
			   cm.sendOk("�ѽ� "+getname(cm.getPlayer().getBossLog("��ͽ_2",1))+" ���ʦ�ţ�");
			   cm.getPlayer().setBossLog("��ͽ_2",1,-cm.getPlayer().getBossLog("��ͽ_2",1));
               cm.dispose();
			   } else if (nx1 == 3) {
			   cm.sendOk("�ѽ� "+getname(cm.getPlayer().getBossLog("��ͽ_3",1))+" ���ʦ�ţ�");
			   cm.getPlayer().setBossLog("��ͽ_3",1,-cm.getPlayer().getBossLog("��ͽ_3",1));
               cm.dispose();
}
}
}
function getname(id){
 var con1 = Packages.database.DatabaseConnection.getConnection();
 ps1 = con1.prepareStatement("SELECT name FROM characters WHERE id = ?");
 ps1.setInt(1, id);
 var rs1 = ps1.executeQuery();
 var name;
 if (rs1.next()) {
  name = rs1.getString("name");
 } else {
  name = "������ʿ";
 }
 rs1.close();
 ps1.close();
 return name;
}