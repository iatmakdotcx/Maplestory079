var status = 0;
var ���� = 4000463;
var ��� = 500000000;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {

         
         if (mode == -1) {//ExitChat
        cm.dispose();
    
    }else if (mode == 0){//No
        cm.sendOk("�õ�, ���������ȷ����Ҫ #b����#k.");
        cm.dispose();

    }else{            //Regular Talk
        if (mode == 1)
            status++;
        else
            status--;
        
                 if (status == 0) {
        cm.sendYesNo("����ȵ��ﵽ��200�����Ϳ�������������з���Ŷ��Ҫ �����50��  ���2E~  ������� ���Ե�100�� ��ʥ��������ȫ����20 ��ħ20"); 
        }else if (status == 1) {
        if(cm.getChar().getLevel() <= 199){
        cm.sendOk("�ܱ�Ǹ������Ҫ200�����ſ���Ͷ̥ת��.");
        cm.dispose();
       }else if (cm.haveItem(����, 50) == false){ 
        cm.sendOk("��û�д���#b#v"+����+"##k "); 
        cm.dispose(); 
        }else if (cm.getMeso() <= ���) {
        cm.sendOk("��û��"+���+"���,�Ҳ��ܰ����æŶ."); 
        cm.dispose();
        }else{
        cm.sendOk("#b�����÷ǳ���#k, ������ȷ��Ҫ#e����#n.��");
        }
        }else if (status == 2) {
        cm.getChar().setLevel(101);
		cm.getPlayer().fakeRelog();
        cm.gainMeso(-200000000);//�۳����
        cm.gainItem(4000463,-50); //�۳�����
		cm.gainSp(100)
		cm.gainItem(1032095,20,20,20,20,0,0,20,20,20,0,0,0,0,0);
        cm.sendNext("�����ɹ���");
        cm.dispose();
        }            
    }
 }
 
