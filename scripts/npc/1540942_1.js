/*
SnailMS�ű�������
*/
importClass(java.util.regex.Pattern);
importClass(java.util.ArrayList);
importClass(java.lang.Integer);
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
var ���� = "#fEffect/CharacterEff/1003276/0/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var aaa = "#fUI/UIWindow.img/Quest/icon9/0#";
var zzz = "#fUI/UIWindow.img/Quest/icon8/0#";
var sss = "#fUI/UIWindow.img/QuestIcon/3/0#";
var С���� = "#fItem/Etc/0427/04270001/Icon9/0#";  //
var ����� = "#fItem/Etc/0427/04270001/Icon9/1#";  //
var ���� ="#fMap/MapHelper/weather/witch/3#";
var ���ܲ� = "#fSkill/112.img/info/icon#";
//��
var ����� = "#fSkill/212.img/skill/2121003/icon#";
var �������Ч = "#fSkill/1212.img/skill/12121012/effect/3#";
var ����ħ�� = "#fSkill/212.img/skill/2121005/icon#";
var �콵���� = "#fSkill/212.img/skill/2121007/icon#";
var �콵������Ч1 = "#fSkill/1212.img/skill/12121015/effect/11#";
var �콵������Ч2 = "#fSkill/1212.img/skill/12121015/effect1/4#";
//����
var ������ = "#fSkill/222.img/skill/2221003/icon#";
var ��������Ч = "#fSkill/1212.img/skill/12121026/effect/2#";
var ��ħ�� = "#fSkill/222.img/skill/2221005/icon#";
var ��˪���� = "#fSkill/222.img/skill/2221007/icon#";
var ��˪������Ч = "#fSkill/1212.img/skill/12121029/effect/3#";
//����
var ��ʥ�� = "#fSkill/231.img/skill/2311003/icon#";
var ��ʥ����Ч = "#fSkill/1212.img/skill/12121036/effect/6#";
var ʥ�� = "#fSkill/231.img/skill/2311004/icon#";
var ʥ����Ч = "#fSkill/1212.img/skill/12121037/effect/2#";
var ǿ��ʥ�� = "#fSkill/232.img/skill/2321003/icon#";
var ������ = "#fSkill/232.img/skill/2321006/icon#";
var ʥ������ = "#fSkill/232.img/skill/2321008/icon#";
//����
var ������ = "#fSkill/131.img/skill/1311006/icon#";
var ��������Ч = "#fSkill/1112.img/skill/11121036/effect/0#";
var ǹ���� = "#fSkill/131.img/skill/1311001/icon#";
var ǹ������Ч1 = "#fSkill/1112.img/skill/11121007/effect/2#";
var ǹ������Ч2 = "#fSkill/1112.img/skill/11121007/effect0/11#";
var ������� = "#fSkill/132.img/skill/1320008/icon#";
var ���ף�� = "#fSkill/132.img/skill/1320009/icon#";
var �������� = "#fSkill/132.img/skill/1320006/icon#";
var ����ʿͻ�� = "#fSkill/132.img/skill/1321003/icon#";
var ����ʿ����̩ɽ = "#fSkill/132.img/skill/1321002/icon#";
//Ӣ��
var ������ = "#fSkill/111.img/skill/1111008/icon#";
var ��������Ч = "#fSkill/1112.img/skill/11121006/effect/10#";
var ������� = "#fSkill/112.img/skill/1121008/icon#";
var ���������Ч = "#fSkill/1112.img/skill/11121008/effect/6#";
var ������ = "#fSkill/112.img/skill/1120005/icon#";
var Ӣ������̩ɽ = "#fSkill/112.img/skill/1121002/icon#";
var Ӣ��ͻ�� = "#fSkill/112.img/skill/1121006/icon#";
var �������� = "#fSkill/112.img/skill/1121010/icon#";
//ʥ��
var �������� = "#fSkill/122.img/skill/1221009/icon#";
var ����������Ч = "#fSkill/1112.img/skill/11121028/effect/3#";
var ������ = "#fSkill/122.img/skill/1220006/icon#";
var ʥ��ʿ����̩ɽ = "#fSkill/122.img/skill/1221002/icon#";
var ʥ��ʿͻ�� = "#fSkill/122.img/skill/1221007/icon#";
var ʥ�� = "#fSkill/122.img/skill/1221011/icon#";
//var ʥ��֮�� = "#fSkill/122.img/skill/1221003/icon#";
var ʥ��֮�� = "#fSkill/122.img/skill/1221004/icon#";
var ʥ��֮����Ч = "#fSkill/1112.img/skill/11121025/effect/11#";
//����
var ������� = "#fSkill/312.img/skill/3121004/icon#";
var ���������Ч = "#fSkill/1312.img/skill/13121007/effect/2#";
var ���� = "#fSkill/312.img/skill/3121006/icon#";
var ���о��� = "#fSkill/312.img/skill/3121008/icon#";
var ���ַ�������� = "#fSkill/312.img/skill/3121003/icon#";
var ���ַ����������Ч = "#fSkill/1312.img/skill/13121012/effect/10#";
//����
var һ��Ҫ���� = "#fSkill/322.img/skill/3221007/icon#";
var һ��Ҫ������Ч = "#fSkill/1312.img/skill/13121029/effect/7#";
var ����� = "#fSkill/322.img/skill/3221005/icon#";
var ��͸�� = "#fSkill/322.img/skill/3221001/icon#";
var ��͸����Ч = "#fSkill/1312.img/skill/13121025/effect/11#";
var ���ַ�������� = "#fSkill/322.img/skill/3221003/icon#";
//����
var ����Ѫ��ɱ = "#fSkill/420.img/skill/4201005/icon#";
var ����Ѫ��ɱ��Ч = "#fSkill/1412.img/skill/14121014/effect/11#";
var һ��˫�� = "#fSkill/422.img/skill/4221007/icon#";
var һ��˫����Ч = "#fSkill/1412.img/skill/14121014/effect/11#";
var �������߷��� = "#fSkill/422.img/skill/4221004/icon#";
var ��ɱ = "#fSkill/422.img/skill/4221001/icon#";
var ��ɱ��Ч1 = "#fSkill/1412.img/skill/14121019/effect/9#";
var ��ɱ��Ч2 = "#fSkill/1412.img/skill/14121019/effect/17#";
var ��ɱ��Ч3 = "#fSkill/1412.img/skill/14121019/effect/18#";
var ��Ļ�� = "#fSkill/422.img/skill/4221006/icon#";
//��ʿ
var ���ط��� = "#fSkill/411.img/skill/4111005/icon#";
var ���ط�����Ч = "#fSkill/1412.img/skill/14121006/effect/2#";
var ��ʿ���߷��� = "#fSkill/412.img/skill/4121004/icon#";
var ���߳�� = "#fSkill/412.img/skill/4121008/icon#";
var ���߳����Ч1 = "#fSkill/1412.img/skill/14121029/effect/2#";
var ���߳����Ч2 = "#fSkill/1412.img/skill/14121029/effect/9#";
//����
var �Ի���� = "#fSkill/520.img/skill/5201004/icon#";
var �Ի������Ч = "#fSkill/1512.img/skill/15121019/effect/3#";
var ��װ = "#fSkill/522.img/skill/5221006/icon#";
var ������ = "#fSkill/522.img/skill/5221007/icon#";
var �����ڻ� = "#fSkill/522.img/skill/5221008/icon#";
var ��̺ʽ��Ϯ = "#fSkill/522.img/skill/5221003/icon#";
var ��̺ʽ��Ϯ��Ч = "#fSkill/1512.img/skill/15121025/effect/2#";
var ������� = "#fSkill/522.img/skill/5221009/icon#";
var �����籩 = "#fSkill/522.img/skill/5221004/icon#";
var �����籩��Ч1 = "#fSkill/1512.img/skill/15121026/effect/0#";
var �����籩��Ч2 = "#fSkill/1512.img/skill/15121026/effect/1#";
//�ӳ�
var ��ʯ�һ� = "#fSkill/511.img/skill/5111006/icon#";
var ��ʯ�һ���Ч = "#fSkill/1512.img/skill/15121010/effect/9#";
var Ǳ����Ԩ = "#fSkill/512.img/skill/5121001/icon#";
var Ǳ����Ԩ��Ч = "#fSkill/1512.img/skill/15121012/effect/0#";
var �������� = "#fSkill/512.img/skill/5121003/icon#";
var ���� = "#fSkill/512.img/skill/5121005/icon#";
var ����ָ = "#fSkill/512.img/skill/5121004/icon#";
var �Ż����� = "#fSkill/512.img/skill/5121010/icon#";

//ս��
var �������� = "#fSkill/2112.img/skill/21120005/icon#";
var ����������Ч = "#fSkill/1512.img/skill/15121040/effect/13#";
var ��ѩì = "#fSkill/2111.img/skill/21111005/icon#";
var ��ѩì��Ч = "#fSkill/1512.img/skill/15121039/effect/9#";
var ȫ���ӻ� = "#fSkill/2111.img/skill/21110002/icon#";
var ս��֮�� = "#fSkill/2112.img/skill/21120002/icon#";
var �����ػ� = "#fSkill/2110.img/skill/21100001/icon#";
var �����ػ���Ч = "#fSkill/1512.img/skill/15121042/effect1/4#";


��������Ч = "#fString/SnailMS.img/�¼���չʾ/����Х#";
���������Ч = "#fString/SnailMS.img/�¼���չʾ/�������#";
����������Ч = "#fString/SnailMS.img/�¼���չʾ/��������#";
ʥ��֮����Ч = "#fString/SnailMS.img/�¼���չʾ/ʥ��֮��#";
��������Ч = "#fString/SnailMS.img/�¼���չʾ/������#";
ǹ������Ч1 = "#fString/SnailMS.img/�¼���չʾ/ǹ����#";
�������Ч = "#fString/SnailMS.img/�¼���չʾ/�����#";
�콵������Ч1 = "#fString/SnailMS.img/�¼���չʾ/�콵����#";
��������Ч = "#fString/SnailMS.img/�¼���չʾ/������#";
��˪������Ч = "#fString/SnailMS.img/�¼���չʾ/��˪����#";
��ʥ����Ч = "#fString/SnailMS.img/�¼���չʾ/��ʥ��#";
ʥ����Ч = "#fString/SnailMS.img/�¼���չʾ/ʥ��#";
���������Ч = "#fString/SnailMS.img/�¼���չʾ/�������#";
���ַ����������Ч = "#fString/SnailMS.img/�¼���չʾ/���������#";
һ��Ҫ������Ч = "#fString/SnailMS.img/�¼���չʾ/һ��Ҫ����#";
��͸����Ч = "#fString/SnailMS.img/�¼���չʾ/��͸��#";
���ط�����Ч = "#fString/SnailMS.img/�¼���չʾ/���ط���#";
���߳����Ч1 = "#fString/SnailMS.img/�¼���չʾ/���߳��#";
����Ѫ��ɱ��Ч = "#fString/SnailMS.img/�¼���չʾ/����Ѫ��ɱ#";
��ɱ��Ч1 = "#fString/SnailMS.img/�¼���չʾ/��ɱ#";
��ʯ�һ���Ч = "#fString/SnailMS.img/�¼���չʾ/��ʯ�һ�#";
Ǳ����Ԩ��Ч = "#fString/SnailMS.img/�¼���չʾ/Ǳ����Ԩ#";
�Ի������Ч = "#fString/SnailMS.img/�¼���չʾ/�Ի����#";
�����籩��Ч1 = "#fString/SnailMS.img/�¼���չʾ/�����籩#";
�����ػ���Ч = "#fString/SnailMS.img/�¼���չʾ/�����ػ�#";
��ѩì��Ч = "#fString/SnailMS.img/�¼���չʾ/��ѩì#";
��˪������Ч = "#fString/SnailMS.img/�¼���չʾ/��˪����#";
һ��˫����Ч = "#fString/SnailMS.img/�¼���չʾ/һ��˫��#";
����������Ч = "#fString/SnailMS.img/�¼���չʾ/��������#";
��̺ʽ��Ϯ��Ч = "#fString/SnailMS.img/�¼���չʾ/��̺ʽ��Ϯ#";

var i = 0;
var �����б� = Array(		
		Array("Ӣ��", "������", ������, ��������Ч), 	
		Array("Ӣ��", "�������", �������, ���������Ч),
		Array("ʥ��ʿ", "��������", ��������, ����������Ч), 
		Array("ʥ��ʿ", "ʥ��֮��", ʥ��֮��, ʥ��֮����Ч),
		Array("����ʿ", "������", ������, ��������Ч), 
		Array("����ʿ", "ǹ����", ǹ����, ǹ������Ч1, ǹ������Ч2),
		Array("��ħ��ʦ", "�����", �����, �������Ч), 
		Array("��ħ��ʦ", "�콵����", �콵����, �콵������Ч1, �콵������Ч2),
		Array("����ħ��ʦ", "������", ������, ��������Ч), 
		Array("����ħ��ʦ", "��˪����", ��˪����, ��˪������Ч),
		Array("����", "��ʥ��", ��ʥ��, ��ʥ����Ч), 
		Array("����", "ʥ��", ʥ��, ʥ����Ч),
		Array("������", "�������", �������, ���������Ч), 
		Array("������", "���������", ���ַ��������, ���ַ����������Ч),
		Array("����", "һ��Ҫ����", һ��Ҫ����, һ��Ҫ������Ч), 
		Array("����", "��͸��", ��͸��, ��͸����Ч),
		Array("��ʿ", "���ط���", ���ط���, ���ط�����Ч), 
		Array("��ʿ", "���߳��", ���߳��, ���߳����Ч1, ���߳����Ч2),
		Array("����", "һ��˫��", һ��˫��, һ��˫����Ч), 
		Array("����", "��ɱ", ��ɱ, ��ɱ��Ч1, ��ɱ��Ч2, ��ɱ��Ч3),
		Array("���ӳ�", "��ʯ�һ�", ��ʯ�һ�, ��ʯ�һ���Ч, ��ʯ�һ���Ч, ��ʯ�һ���Ч), 
		Array("���ӳ�", "Ǳ����Ԩ", Ǳ����Ԩ, Ǳ����Ԩ��Ч),
		Array("����", "��̺ʽ��Ϯ", ��̺ʽ��Ϯ, ��̺ʽ��Ϯ��Ч), 
		Array("����", "�����籩", �����籩, �����籩��Ч1, �����籩��Ч2),
		Array("ս��", "�����ػ�", �����ػ�, �����ػ���Ч), 
		Array("ս��", "��������", ��������, ����������Ч)

		);
		
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
		var text = "��Ϊ������Ĳ��죬�����ڵ�����#r�������еļ���#k������һ������������ͬ������ͷֱ�Ը���ְҵ��һЩ#r��Ҫ����#k����չʾ����ֻ��#r��ɽһ��#k��\r\n\r\n";
		text += "\t\t#L1#" + ������ͷ + "#d�����ˣ��ϻ���࣬��㿪ʼ�ɡ�#l\r\n\r\n";
		text += "\t\t#L2#" + ������ͷ + "#d��Ҫ���ء�#l\r\n\r\n";
		cm.sendNext(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			status++;
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			cm.openNpc(1540942);
			cm.safeDispose();
			return;
		}
		
	}

	if(status > 1){
		if(selection == 3){
			cm.openNpc(1540942);
			cm.safeDispose();
			return;
		}else{
			if(i >= 10000){
				cm.openNpc(1540942);
				cm.safeDispose();
				return;
			}else if (i >= �����б�.length){
				cm.sendNext("��ʾ�������������������ѡ���ˣ�");
				i = 10000;
			}else{
				var text = "\t\t#dְҵ��#b" + �����б�[i][0] + "#d\t\t������:#b"  + �����б�[i][1] + �����б�[i][2] + "" + "\r\n\r\n";
				
				if(false){
					text += "" + �����б�[i][3] + �����б�[i][4] + "\r\n\r\n";
				}else{
					text += "" + �����б�[i][3]  + "\r\n\r\n";
				}
				text += "\t\t\t\t#L1#" + ������ͷ + "#d��һ�#l\r\n\r\n";
				text += "\t\t\t\t#L3#" + ������ͷ + "#d��Ҫ���ء�#l\r\n";
				i++;
				cm.sendSimple(text);
			}
			
		}
	}
}

