var status = 0;
var totAp = 0;
var statup;
var p;
var needLevel = 250;//ת��ȼ�
var count = 1;
var ���� =0;
var current;
var retap = 0;
var ���� = "#fEffect/CharacterEff/1114000/2/0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";

var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
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
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
          
			text += "���������δ����Ҷ�ǣ�����������о�Ա�����������о������������ƻ��ߵ����ܣ�������Ǵ���#z4000692##v4000692#1�����ģ����ǽ���һ���ҿ����ǵ����ܣ�\r\n\r\n"
        
            text += "#L1#�õģ��ҽ����������#l\r\n\r\n\r\n"//3
       
    
            cm.sendSimple(text);
        } else if (selection == 1) { 

    if (cm.getChar().getLevel() < 140) {
                cm.sendOk("�ܱ�Ǹ������Ҫ��140������ĵȼ����������ѽ��ܴ�����.");
                cm.dispose();
          




    

 }

			 else if (cm.
haveItem
(4000692) < 1 ) { 
				cm.sendOk("��û���㹻�ĺ��ģ�");
				cm.dispose();




}









else if(cm.getPlayer().getOneTimeLog('aien') >= 1 )
{
            cm.sendOk("���ṩ�ĺ��ĺܴ�̶��ϰ��������ǵ��о���");
            cm.dispose();
}
else
{
 
           
            cm.getPlayer().setOneTimeLog('aien');
            cm.gainItem(4000692 ,-1);
            cm.givePartyExp(12000000);
            cm.sendOk("������˴�����");
 cm.dispose();
}
        } 
    }
}

