var QuestName = "�� #rÿ �� �� �� �� ��#k ��";//����ID
var Meso = 100000;//�������
var Exp = 10000;//��������
var ItemID = 3991029;//��������ID
var QuestItemID = 4000008;//�����������ID
var QuestItemNum = 100;//���������������

var add="";
var zzz = "#fUI/UIWindow.img/Quest/icon9/0#";
var aaa = "#fUI/UIWindow.img/Quest/icon8/0#";
var xm1 = "#fUI/ChatBalloon/pet/1/nw#";
var xm2 = "#fUI/ChatBalloon/pet/1/ne#";
var add1 = "#fEffect/CharacterEff/1112905/0/1#";//������
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";//ѡ�����
var ���� = "#fEffect/CharacterEff/1003249/2/0#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var b = "#fEffect/CharacterEff/1003271/0/0#";//����
var c = "#fEffect/CharacterEff/1112905/0/0#"; //����
var d = "#fEffect/CharacterEff/1002667/0/0#"; //����
var e = "#fEffect/CharacterEff/1003252/1/0#"; //����
var h = "#fUI/Basic/BtHide3/mouseOver/0#";
var f = "#fEffect/CharacterEff/1003252/0/0#";
var ������ = "#fEffect/CharacterEff/1112949/1/0#";
var ������ = "#fEffect/CharacterEff/1112949/0/0#";
var ������ = "#fEffect/CharacterEff/1112949/3/0#";
var �� = "#fEffect/CharacterEff/Shaman/modeSelect/lockIcon/3#";
var ��ɫ���� = "#fEffect/CharacterEff/1112925/0/1#";
var ������� = "#fEffect/CharacterEff/1102232/0/0#";
var б������ = "#fEffect/CharacterEff/1102232/1/0#";
var ������� = "#fEffect/CharacterEff/1051384/0/0#";
var ��ѹ��� = "#fEffect/CharacterEff/1051384/2/0#";
var ��Ҷ = "#fEffect/CharacterEff/1050334/1/2#";
var ���� = "#fEffect/BasicEff/ItemLevelUp/13#";
var ������ ="#fEffect/SetEff/100/effect/0#";
var ��Ʒ���ۿ� = "#fUI/CashShop/GuideWords/0#";
var ���ڲ��ǹ���ʱ�� = "#fUI/CashShop/GuideWords/1#";
var ��ȡ = "#fUI/UIWindow/QuestIcon/4/0#";
var ����ֵ = "#fUI/UIWindow/QuestIcon/8/0#";
var ����= "#fEffect/SetEff/208/effect/walk2/4#";
var ����1= "#fEffect/SetEff/208/effect/walk2/3#";
var �ɰ�����= "#fMap/MapHelper/weather/2011Haloween/2#";

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
            var textz = "      "+�������+�������+�������+ "#k#e��������ʶһ�����"+�������+�������+�������+"\n\r\n";

            textz += "    #L0##d#r"+b+b+b+"�һ�1��#v4251202#��Ҫ5��#v4251201#"+b+b+b+"#l\r\n\r\n";
			
			textz += "   #L2##d#r"+b+b+b+"�һ�10��#v4251202#��Ҫ50��#v4251201#"+b+b+b+"#l\r\n\r\n";
			
            textz += "    #L1##d#g"+��ɫ����+��ɫ����+��ɫ����+"�һ�1��#v4251201#��Ҫ5��#v4251200#"+��ɫ����+��ɫ����+��ɫ����+"#l\r\n\r\n";
			
			textz += "   #L3##d#g"+��ɫ����+��ɫ����+��ɫ����+"�һ�10��#v4251201#��Ҫ50��#v4251200#"+��ɫ����+��ɫ����+��ɫ����+"#l\r\n\r\n";

            cm.sendNext(textz);

        } else if (status == 1) {
            if (selection == 0) {
                if (cm.haveItem(4251201, 5) == false) {
					cm.sendOk("��Ǹ,#v4251201#�����������㡣");
					cm.dispose();
				} else {
					cm.gainItem(4251201, -5);
					cm.gainItem(4251202, 1);
					cm.sendOk("�һ��ɹ���")
					cm.dispose();
				}

            } else if (selection == 1) {
                if (cm.haveItem(4251200, 5) == false) {
					cm.sendOk("��Ǹ,#v4251200#�����������㡣");
					cm.dispose();
				} else {
					cm.gainItem(4251200, -5);
					cm.gainItem(4251201, 1);
					cm.sendOk("�һ��ɹ���")
					cm.dispose();
					}
					
				 } else if (selection == 2) {
                if (cm.haveItem(4251201, 50) == false) {
					cm.sendOk("��Ǹ,#v4251201#�����������㡣");
					cm.dispose();
				} else {
					cm.gainItem(4251201, -50);
					cm.gainItem(4251202, 10);
					cm.sendOk("�һ��ɹ���")
					cm.dispose();
				}
				            } else if (selection == 3) {
                if (cm.haveItem(4251200, 50) == false) {
					cm.sendOk("��Ǹ,#v4251200#�����������㡣");
					cm.dispose();
				} else {
					cm.gainItem(4251200, -50);
					cm.gainItem(4251201, 10);
					cm.sendOk("�һ��ɹ���")
					cm.dispose();
					}
            }
        }
    }
}
