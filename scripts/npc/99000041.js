/* global cm */
var ���� = "";
var ���� = "#fUI/UIWindow/Quest/icon2/7#";
var Сѩ�� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ���ڽ����� = "#fUI/UIWindow/Quest/icon3/6#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����1 = "#fEffect/CharacterEff/1032063/0/0#";
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
        } else {
            status--;
        }
        if (status == 0) {
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			if (cm.getPlayer().get�����ж�() == 1) {
                var ���� = "����һ";
            } else if (cm.getPlayer().get�����ж�() == 2) {
                var ���� = "���ڶ�";
			} else if (cm.getPlayer().get�����ж�() == 3) {
                var ���� = "������";
			} else if (cm.getPlayer().get�����ж�() == 4) {
                var ���� = "������";
			} else if (cm.getPlayer().get�����ж�() == 5) {
                var ���� = "������";
			} else if (cm.getPlayer().get�����ж�() == 6) {
                var ���� = "������";
            } else {
               var ���� = "������";
            }
			//cm.setgrname(14);
            text += " \t\t\t"+����1+"#e#d��ӭ����#d�ع�ð�յ�#k#n \t\t\t"+����1+"#e#d              \r\n"
			text += "#d-------------- [��������] -------------[" + ���� + "]-\r\n#k";
            text += "#d" + ���� + "��ɫ���ƣ�#b" + cm.getName() + "#k#n\t\t#d" + ���� + "��ǰ����ʱ�䣺#b" + cm.getPlayer().getzxsj() + "����#k#n\r\n"
            text += "#d" + ���� + "�����#b" + cm.getPlayer().getCSPoints(1) + "#k#n\t#d  " + ���� + "���þ���#b" + cm.getPlayer().getCSPoints(2) + "#k#n\r\n"
			if(cm.getPlayer().getBossLog("�����") == 1 && cm.getPlayer().get�����ж�() == 7){
			text += "#d#L1015#" + ��ɫ��ͷ + "������ȡ" + ���� + "�����~!#l\r\n\r\n"
			}
			text += "#d-------------------- [ʵ�ù���] ----------------------\r\n#k";
            text += "#b#L111#" + ���� + "�����г�#l#L1#" + ���� + "�������#l#L1000#" + ���� + "��ݴ���#l#L1001#" + ���� + "����תְ#l\r\n"
            text += "#L6#" + ���� + "�н����#l#L3#" + ���� + "�ȼ�����#l#L1111#" + ���� + "�������#l#L211#" + ���� + "���߽���#l\r\n"
			text += "#b#L20#" + ���� + "�̵�ϵͳ#l#L21#" + ���� + "װ������#l#L22#" + ���� + "�����#l#L5#" + ���� + "ÿ��ǩ��#l\r\n"
            cm.sendSimple(text);
        } else if (selection == 1) {//
            if (cm.getgrname() <= 0 && cm.getLevel() >= 10) {
                cm.setgrname(1);
                cm.gainItem(5150040, 5);//�ʼ�����
                cm.gainItem(5151001, 5);//���ִ�Ⱦɫ�߼���Ա��
                cm.gainItem(5152001, 5);//���ִ����������߼���Ա��
                cm.gainItem(5153000, 5);//���ִ廤�����Ļ�Ա��
                cm.gainItem(5072000, 5);//���ʵ�����
				cm.gainItem(1112446, 1);//�Ϲ����Ž�ָ
				cm.gainItem(1032024, 100,100,100,100,200,200,20,0,0,0,0,0,15,20);//�������ֽ�ָ
                cm.gainDY(30000);
                //cm.getPlayer().modifyCSPoints(1, 100000);
                cm.gainMeso(10000000);
                cm.����(1, "���ȵ�����"+cm.getPlayer().getName()+"��ȡ���������");
                cm.sendOk("��ϲ��ɹ���ȡ������б����£�\r\n#v5150040# x1 #v5151001# x1\r\n#v5152001# x1 #v5153000# x1\r\n#v5072000# x5\r\n#v1142358# x1\r\n���þ� x3000 ��Ϸ�� x300000");
                cm.dispose();
            } else {
                cm.sendOk("��ȡʧ���ˣ�\r\n���ܵ�ԭ��1���ȼ�����10���޷���ȡ��\r\n���ܵ�ԭ��2�����Ѿ���ȡ��һ����,���޷��ٴ���ȡ�ˣ�\r\n�������ʣ�����ϵ�ͷ�!");
                cm.dispose();
            }
        } else if (selection == 2) {//
            cm.openNpc(9900004,2);
			 } else if (selection == 1111) {//
            cm.openNpc(9040004,0);
	    } else if (selection == 482) {//
            cm.openNpc(9900004,482);
				    } else if (selection == 999) {//
            cm.openNpc(9900004,999);
		} else if (selection == 455) {//
            cm.openNpc(9900004,455)
					} else if (selection == 258) {//
            cm.openNpc(9310085,0)
		} else if (selection == 483) {//
            cm.openNpc(9900004,483);
					} else if (selection == 20111) {//ѫ������
            cm.openNpc(9900004,2011);
					} else if (selection == 555) {//
            cm.openNpc(9900004,555);
        } else if (selection == 209) {//
            cm.openNpc(9900004,209);
		} else if (selection == 4882) {//
            cm.openNpc(9900004,1231);
		} else if (selection == 484) {//
            cm.openNpc(9900004,484);
					} else if (selection == 1117) {//
            cm.openNpc(9900000,0);
		} else if (selection == 485) {//
            cm.openNpc(9900004,485);	
					} else if (selection == 601) {//����
            cm.openNpc(9310060,0);
		} else if (selection == 602) {//����
            cm.openNpc(9000021,0);
					} else if (selection == 603) {//���ǿ��
            cm.openNpc(9310070,1);
		} else if (selection == 486) {//
            cm.openNpc(9900004,486);				
        } else if (selection == 3) { //
            cm.openNpc(9900004,3);
		} else if (selection == 209) { //
            cm.openNpc(9900004,209);
		} else if (selection == 211) { //
            cm.openNpc(9900004,211);
		} else if (selection == 210) { //
            cm.openNpc(9900004,210);
					} else if (selection == 888) { //
            cm.openNpc(9900004,888);
        } else if (selection == 4) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 5) {//
            cm.openNpc(9900004,5);
        } else if (selection == 6) {//
            cm.openNpc(9900004,6);
        } else if (selection == 7) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 8) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 9) {//
            cm.openNpc(9900004,9);
        } else if (selection == 10) {//
            cm.openNpc(9900004,10);
        } else if (selection == 11) {//
            cm.openShop(97);//NPCID�ǣ�2040051
            cm.dispose();
        } else if (selection == 12) {//
            cm.openShop(30);//NPCID:1200002
            cm.dispose();
        } else if (selection == 13) {//
            cm.openShop(39);//NPCID:2070002ī��
            cm.dispose();
        } else if (selection == 14) {//
            cm.openNpc(9310019,0);
        } else if (selection == 15) {//
            cm.openNpc(9900004,15);
        } else if (selection == 16) {//
	    cm.openNpc(9000017,0);
               /*if (cm.getbossmap() == 0){
                   cm.sendOk("������û�м������սboss�����У�");
                   cm.dispose();
                } else{
                   cm.warp(cm.getbossmap());
                   cm.dispose();
                }*/
        } else if (selection == 17) {//
            cm.openNpc(9900004,17);
		} else if (selection == 20) {//
            cm.openNpc(9900004,20);
		} else if (selection == 21) {//
            cm.openNpc(9900004,21);
		} else if (selection == 22) {//
            cm.openNpc(9900004,22);
		} else if (selection == 208) {//
            cm.openNpc(9900004,208);
		} else if (selection == 789) {//
            cm.openNpc(9900004,789);
        } else if (selection == 18) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 19) {//
            cm.openNpc(9900004,19);
} else if (selection == 112) {//
cm.openNpc(9010009,0);
} else if (selection == 115) {//
cm.warp(209000001,0);
			cm.dispose();

		} else if (selection == 111) {//
		
			cm.warp(910000000,0);
			cm.dispose();


        } else if (selection == 1000) {//
            cm.openNpc(9900004, 1000);
        } else if (selection == 1001) {//
            cm.openNpc(9900004, 1001);
        } else if (selection == 1002) {//
            cm.ˢ�µ�ͼ();
            cm.dispose();
        } else if (selection == 1003) {//
            cm.ˢ��״̬();
            cm.dispose();
        } else if (selection == 1004) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1005) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1006) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1007) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1008) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1009) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1010) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1011) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1012) {//
            cm.openNpc(9900004, 78);
        } else if (selection == 1013) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1014) {//
            cm.sendOk("�ݲ����ţ���ȴ��������");
            cm.dispose();
        } else if (selection == 1015) {//
			cm.gainItem(4251202,3);
			cm.gainItem(4011008,3);
			cm.gainItem(4000463,3);
			cm.gainMeso(10000000);
            cm.setBossLog("�����");
			cm.����(1,"��ϲ[" + cm.getName() + "]��ȡ�����������~!");
			cm.sendOk("��ϲ����ȡ���������õ����~!\r\nף����Ϸ������,��Ŀ���~!");
            cm.dispose();
        }
    }
}



