var ��ɫ˫��ͷ = "#fUI/UIWindow.img/Quest/icon9/0#";
var ��ɫ˫��ͷ = "#fUI/UIWindow.img/Quest/icon8/0#";
var ѡ�����ͼ�� = "#fUI/UIWindow.img/QuestIcon/3/0#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var Ǧ��ͼ�� = "#fUI/UIWindow.img/PvP/btWrite/mouseOver/0#";
var ������ = "#fUI/StatusBar/BtClaim/normal/0#";
var H��ĸ = "#fUI/CashShop/CSEffect/effect/1#";
var ���ͼ�� = "#fUI/UIWindow.img/Item/BtCoin/normal/0#";
var �һ����� = "1.5";
function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("#b�õ�,�´��ټ�.");
		cm.dispose();
		} else {
	if (status >= 0 && mode == 0) {
		cm.sendOk("#b�õ�,�´��ټ�.");
		cm.dispose();
		return;
		}
	if (mode == 1) {
		status++;
		} else {
		status--;
		}

	if (status == 0) {
   	    var text= "\t\t\t\t  "+Ǧ��ͼ��+" [��ֵϵͳ] "+Ǧ��ͼ��+"\r\n\r\n";
		text += "\t\t\t"+������+" #d���˻��������: #r"+cm.getmoneyb()+" Ԫ "+������+"\r\n";
		text += "\t\t\t"+������+" #d��Ŀǰӵ��: #r"+cm.getzb()+" ����ʯ "+������+"\r\n";
		text += "#d#L1#���ȫ���һ�Ϊ��ʯ  [���Զһ�: #r"+cm.getmoneyb() * �һ�����+" "+���ͼ��+" #d��ʯ]\r\n";
		text += "#d#L2#[Nwe]С�����ļϵͳ\r\n";
		text += "#d#L3#��ֵ���\r\n";


		cm.sendSimple (text);    
	} else if (status == 1) {
		if (selection == 1) {     
			if(cm.getmoneyb() >= 1){
				if (cm.��ȡ�ƹ���ID() > 1) { 
                    var ����ȡ������ = cm.getmoneyb() * �һ�����;
                    var �ƹ��˻��� = cm.getmoneyb();
						cm.����(2,"��л[" + cm.getPlayer().getName() + "]Ϊ���ǳ���ð�յ�������"+cm.getmoneyb()+"Ԫ,���"+����ȡ������+"��ʯ��"); 
						cm.sendOk("��ϲ�������ѳɹ�����ȡ��ɣ���ȡ����ʯ:"+����ȡ������+"���ƹ��˻����"+�ƹ��˻���+"����");
                        cm.gainzb(+""+����ȡ������+"");
						cm.gaincz(+""+cm.getmoneyb()+"");
                        cm.д���ƹ�ֵ(+�ƹ��˻���);
                        cm.getChar().gaincz(+""+cm.getmoneyb()+"");
						cm.setmoneyb(-cm.getmoneyb());
						
						
						cm.dispose();
				} else {
                    var ����ȡ������ = cm.getmoneyb()*�һ�����;
						cm.sendOk("��ϲ�������ѳɹ�����ȡ��ɣ���ȡ����ʯ:"+����ȡ������+"��");
						cm.����(2,"��л[" + cm.getPlayer().getName() + "]Ϊ���ǳ���ð�յ�������"+cm.getmoneyb()+"Ԫ,���"+����ȡ������+"��ʯ��"); 
                        cm.gainzb(+""+����ȡ������+"");
                        cm.getChar().gaincz(+""+cm.getmoneyb()+"");
						cm.setmoneyb(-cm.getmoneyb());
						
						cm.dispose();   
				}	
			}else{
				cm.sendOk("������û�г�ֵ�������޷�ʹ�õġ�");
                cm.dispose();
            }
		} else if (selection == 2) {
			cm.openNpc(9900007,881);
		} else if (selection == 3) {
			cm.openNpc(9900007,1000);
		
		}
		
	}
}
}