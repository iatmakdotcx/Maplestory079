var ������ = "#fEffect/CharacterEff.img/1032054/0/0#";
var ���� = "#fEffect/CharacterEff.img/1052203/1/0#";
var ���� = "#fEffect/CharacterEff.img/1052203/2/0#";
var ������ = "#fEffect/CharacterEff.img/1022223/2/0#";
var ����� = "#fEffect/CharacterEff.img/1022223/1/0#";
var ���� = "#fEffect/CharacterEff.img/1022223/6/0#";
var ��� = "#fEffect/CharacterEff.img/1022223/7/0#";
var �ڹ� = "#fUI/GuildMark.img/Mark/Etc/00009004/16#";
var ��� = "#fUI/GuildMark.img/Mark/Etc/00009023/14#";
var ��� = "#fUI/UIWindow.img/UserInfo/bossPetCrown#";
var С���� = "#fUI/UIWindow.img/UserList/Party/icon0#";
var �ʹ� = "#fUI/UIWindow.img/SkillMacro/Macroicon/4/iconMouseOver#";
var ���� = "#fUI/UIWindow.img/MonsterBook/icon/0";
var ���� = "#fUI/UIWindow.img/MonsterBook/icon/1";
var ���� = "#fUI/UIWindow.img/MonsterBook/icon/2";
var ���� = "#fUI/UIWindow.img/MonsterBook/icon/3";
var ���� = "#fUI/UIWindow.img/MonsterBook/icon/4";
var ���� = "#fUI/UIWindow.img/MonsterBook/icon/5";
var ���� = "#fUI/UIWindow.img/MonsterBook/icon/6";
var ���� = "#fUI/UIWindow.img/MonsterBook/icon/7";
var ���� = "#fUI/UIWindow.img/Quest/reward#";
var ��Ҷ = "#fUI/ITC.img/Base/Tab/Enable/0#";


importPackage(Packages.handling.word);
importPackage(Packages.client.inventory);
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR); //������
var month = ca.get(java.util.Calendar.MONTH) + 1; //����·�
var day = ca.get(java.util.Calendar.DATE); //��ȡ��
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY); //���Сʱ
var minute = ca.get(java.util.Calendar.MINUTE); //��÷���
var second = ca.get(java.util.Calendar.SECOND); //�����
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);

var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ľ�� = "#fUI/Basic.img/BtClaim/mouseOver/0#";
var q = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
function start() {
    status = -1;

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
			text = "\t\t     #r#e"+ ���� + ""+ ����� + ""+ ��� + "��#d��"+ ������ + "#k��#d��"+ ���� + ""+ ������ + ""+ ���� + "#k#n  \r\n\r\n";	
			text +="#L0##r"+ ��� + "�ȼ����а�"+ ��� + "#l\t\t";
			text +="#L1#"+ ��� + "�Ƹ����а�"+ ��� + "#l\t\t";
			text +="#L2#"+ ��� + "�������а�"+ ��� + "#l\t\t";
			text +="#L3#"+ ��� + "����������"+ ��� + "#l\t\t";
			text +="#e#L6#"+ �ڹ� + "����������"+ �ڹ� + "#l\t   ";
			text +="#L7#"+ �ڹ� + "���������"+ �ڹ� + "#l\t\t";
			text +="#e#L8#"+ �ڹ� + "���������"+ �ڹ� + "#l\t   ";
			text +="#L9#"+ �ڹ� + "����������"+ �ڹ� + "#l\t\t";
			text +="#e#L10#"+ �ڹ� + "ת�����а�"+ �ڹ� + "#l\t   ";
			//text +="#L4#"+ �ڹ� + "��ʦ���Ѱ�"+ �ڹ� + "#n#l\t\t";
		//	text +="#L5##r#n"+ С���� + "��ȡ�ϰ�ѫ��"+ С���� + "#l\r\n";	
            cm.sendSimple(text);
        } else if (selection == 0) {
				 cm.showlvl();
				 cm.dispose();
        } else if (selection == 1) {
		cm.showmeso();
				 cm.dispose();
        } else if (selection == 2) {
			cm.showfame();
			cm.dispose();
		}else if(selection == 3){
			cm.displayGuildRanks();
			cm.dispose();
		}else if(selection == 4){
			cm.displayGuildRanks();
			cm.dispose();
		}else if(selection == 5){
			cm.openNpc(9900004,404);
		}else if (selection == 6) {
		cm.getPlayer().showtimePLC("ͨ�ط���");
		cm.dispose();
		}else if (selection == 7) {
		cm.getPlayer().showtimePLC("ͨ�����");
		cm.dispose();
		}else if (selection == 8) {
		cm.getPlayer().showtimePLC("ͨ�����");
		cm.dispose();
		}else if (selection == 9) {
		cm.getPlayer().showtimePLC("ͨ�ض���");
		cm.dispose();
		}else if (selection == 10) {
			cm.openNpc(9900004,100866);
		cm.dispose();
		}
    }
}


