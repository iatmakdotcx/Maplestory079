var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1";// ��ƷID,����
var x2;
var x3;
var x4;
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var �����Ʒ = "#v1302000#";
var add = "#fEffect/CharacterEff/1112903/0/0#";//������
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";//��ɫ�Ҽ�ͷ
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";//��ɫ�Ҽ�ͷ
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";//ѡ�����
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��ɫ��ͷ = "#fEffect/CharacterEff/1112908/0/1#";  //�ʹ�3
var ttt1 = "#fEffect/CharacterEff/1062114/1/0#";  //����
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
function start() {
    /*cm.getPlayer().setBossLog("���ѵ�",1,cm.getmoneyb());
    cm.getPlayer().setBossLog("�ۼ���������",1,cm.getmoneyb());
    cm.getPlayer().setBossLog("�����ۼ�����",0,cm.getmoneyb());
    cm.setmoneyb(-cm.getmoneyb());*/
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
             text += "             #e#r��ӭ��������ð�յ�ÿ��������#k\r\n"
            text += "                ��������������:\r\n";//	
            text += "           ��˯ɭ�֣����5000W����#r" + cm.getPlayer().getAccountLog("��˯ɭ��") + "#k/1\r\n";
            text += "           �̿����������5000W����#r" + cm.getPlayer().getAccountLog("�̿�����") + "#k/1\r\n";
            text += "           ��ɽ���������5000W����#r" + cm.getPlayer().getAccountLog("��ɽ����") + "#k/1\r\n";
            text += "           �������������1000W����#r" + cm.getPlayer().getAccountLog("��������") + "#k/2\r\n";
            text += "           ������������1000W����#r" + cm.getPlayer().getAccountLog("�������") + "#k/2\r\n";
            text += " #e#r��ȡ������ȷ���������㹻�ռ�,���ҵȼ�����200��";//	
            text += "                               \r\n     #L0##d����ȫ����ɼ�����ȡ#v2614000#x2��#v4310174#x10";//
			//text += "     \r\n#e#r#L1##d#v4032226#�һ���������";//
			//text += "     \r\n#e#r#L2##d���������һ�#v4032226#";//
            cm.sendSimple(text);
			} else if (status == 1) {
           if (selection == 0) {
            if (cm.getPlayer().getAccountLog("ÿ����������",0) > 0) {
                cm.sendOk("ÿ���˺�ÿ��ֻ����ȡ1�ν���");
                cm.dispose();
			} else	if (cm.getPlayer() .getLevel() <=200) {
	      cm.sendOk("�ܱ�Ǹ����ȼ�����200���޷���ȡ��������");
	      cm.dispose();
            } else if (cm.getPlayer().getAccountLog("��˯ɭ��") > 0 && cm.getPlayer().getAccountLog("�̿�����") > 0 && cm.getPlayer().getAccountLog("��ɽ����") > 0 && cm.getPlayer().getAccountLog("��������") > 1 && cm.getPlayer().getAccountLog("�������") > 1) {
				cm.gainItem(4310174, 10);
				cm.gainItem(2614000, 2);
                cm.getPlayer().setAccountLog("ÿ����������")
                cm.sendOk("�ɹ���ȡ������");
                cm.dispose();				
                cm.����(2, "��ң�[" + cm.getPlayer().getName() + "]�����ÿ����������ȡ�˽�����");
            } else {
                cm.sendOk("Ҫ��δ��ɣ��޷���ȡ������\r\n");
                cm.dispose();
				}
				 } else if (selection == 1) {
					if (cm.getPlayer().getAccountLog("�����һ�",0) > 0) {
                cm.sendOk("һ��ֻ�ܶһ�һ������������������Ŷ��");
                cm.dispose();
				} else if (cm.haveItem(4032226, 1) == false) {
							cm.sendOk("#v4310058#��������");
							cm.dispose();
							return;

                } else {
					cm.getPlayer().setAccountLog("��˯ɭ��");
					cm.getPlayer().setAccountLog("�̿�����");
					cm.getPlayer().setAccountLog("��ɽ����");
					cm.getPlayer().setAccountLog("��������");
					cm.getPlayer().setAccountLog("��������");
					cm.getPlayer().setAccountLog("�������");
					cm.getPlayer().setAccountLog("�������");
					cm.getPlayer().setAccountLog("�����һ�");
					cm.getPlayer().setAccountLog("�һ�����");
					cm.gainItem(4032226, -1);
					cm.����(1,"��ϲ���["+cm.getName()+"]ʹ�������Ҷһ���ÿ������������");
                    cm.sendOk("�һ��ɹ���");
                    cm.dispose();
                }
				} else if (selection == 2) {
					if (cm.getPlayer().getAccountLog("�һ�����",0) > 0) {
                    cm.sendOk("һ��ֻ�ܶһ�һ������������������Ŷ��");
				 } else if (cm.getPlayer().getAccountLog("��˯ɭ��") > 0 && cm.getPlayer().getAccountLog("�̿�����") > 0 && cm.getPlayer().getAccountLog("��ɽ����") > 0 && cm.getPlayer().getAccountLog("��������") > 1 && cm.getPlayer().getAccountLog("�������") > 1) {
                cm.dispose();
					cm.getPlayer().setAccountLog("�һ�����");
					cm.gainItem(4032226, 1);
					cm.����(1,"��ϲ���["+cm.getName()+"]ʹ�����������һ���һ�������ң�");
                    cm.sendOk("�һ��ɹ���");
                    cm.dispose();
					 } else {
                cm.sendOk("�����������㣬�޷��һ���\r\n");
                cm.dispose();
                }
				
            }
        }
    }
}


