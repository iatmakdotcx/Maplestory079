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
          
			text += "���������δ����Ҷ�ǣ���������Ľ�ʿ\r\n\r\n#k������Ҳ�����ˣ��ڲ��õ�δ�����ｫ��ΪһƬ���棬�������ǻ��ڵֿ��ţ��������˵Ķ�����������ս�������Ѿ���Զ�ˣ�������Դ�Ѿ������������������᧿�Σ�ĵز��������������еװ��#v4001696#ȥ����������ռ�챾���Ĵ�ׯ�г�����������Ȼ�����������������\r\n\r\n��ʾ����еװ��ֻ��ÿ����ȡһ��ʹ�����������ȡ��\r\n\r\n"
        
            text += "#L1#�õģ��ҽ����������#l\r\n\r\n\r\n"//3
       
    
            cm.sendSimple(text);
        } else if (selection == 1) { 

    if (cm.getChar().getLevel() < 160) {
                cm.sendOk("�ܱ�Ǹ������Ҫ��160������ĵȼ����������ѽ��ܴ�����.");
                cm.dispose();
          




    

        }














else if(cm.getBossLog("jinboshi") >2)
{
            cm.sendOk("ÿ��ֻ����ȡ3�λ�еװ�ã����������ɣ�");
            cm.dispose();
}
else
{
 
           
            cm.setBossLog("jinboshi");
            cm.gainItem(4001696 ,1);
            //cm.givePartyExp(100000000);
            cm.sendOk("��ȥ������ׯ�г������ᰲ������һ������");
 cm.dispose();
}
        } 
    }
}

