var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ������ = "#fUI/UIWindow/Quest/summary#";
var ������ = "#fUI/UIWindow/Quest/reward#";
var ���� = "#fUI/CashShop.img/CSDiscount/bonus#";
var ���� = "#fUI/UIWindow/Quest/BtGiveup/mouseOver/0#";
var ���� = "#fUI/UIWindow/Quest/BtOK/mouseOver/0#";
var ʱ�� = "#fUI/UIWindow/Quest/TimeQuest/AlarmClock/default/3/3#";
var ��� = "#fUI/UIWindow.img/QuestIcon/7/0#";
var ��ȡ���� = "#fUI/UIWindow.img/QuestIcon/4/0#";
var ���ʻ�� = "#fUI/UIWindow/Quest/prob#";

var ��������� = "#fUI/UIWindow/Quest/basic#";
var �������� = "#fUI/UIWindow/Quest/summary#"


var date = new Date();
var day = date.getDay();

var status = 0;

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
	if (mode == -1) {
		cm.playerMessage(1,"��ӭ�´ι���");
		cm.dispose();
		} else {
	if (status >= 0 && mode == 0) {
		cm.playerMessage(1,"��ӭ�´ι���");
		cm.dispose();
		return;
		}
	if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {
if (cm.getPlayer().get����ID() == 0 && cm.getPlayer().get��������() == 0) {
 
var ״̬ = "#rδ��ȡ����#k";
 
var ״̬1 = "#L0##b��Ҫ��ȡ����#l";
 

} else if (cm.getPlayer().get����ID() > 0 && cm.getPlayer().get��������() == 0) {
    
var ״̬ = "#r���������#k";
 
var ״̬1 = "#L2#" + ��� + "#l";
 

}else{
  
var ״̬ = "��ȥ����#r" + cm.getPlayer().get��������() + "ֻ#o" + cm.getPlayer().get����ID() + "##k";

var ״̬1 = "#L1#" + ���ڽ����� + "#l";
 
}

cm.sendSimple ("#r" + ������ + "#k\r\n��ӭ�μ�ÿСʱ��ʱ����Ұ���������\r\n����״̬��"+״̬+"\r\n "+״̬1+"\r\n #L3##b��Ҫ��������\r\n\r\n\r\n#l     " + ���� + "\r\n    " + ��� + " 50000000\r\n\r\n");      

	} else if (status == 1) {

        if (selection == 0) {
if (cm.getLevel() < 30 ) {                   
cm.playerMessage(1,"�����Ҫ30�����ϲμ�");

cm.dispose();
    
 } else {
                    
cm.openNpc(9900004, 15);                  
}
    

} else if (selection == 1) {
cm.sendOk("" + �������� + "\r\n��Ҫ����Ĺ���Ϊ#b#o" + cm.getPlayer().get����ID() + "##k����Ϊ#r" + cm.getPlayer().get��������() + "#kֻ��");
cm.dispose();
      
} else if (selection == 2) {             
 cm.openNpc(9900004, 16); 

} else if (selection == 3) {               
if (cm.getPlayer().get����ID() > 0 && cm.getPlayer().get��������() > 0) {
                    
 if(cm.getPlayer().getBeans()>= 100){          
cm.playerMessage(1,"�����ɹ����Ķ���100");

cm.gainBeans(-100);                     
cm.getPlayer().ȡ������ID();                    
cm.getPlayer().ȡ����������();                        
cm.dispose();
                    
}else{
                         
cm.playerMessage(1,"���������޷�����");
                         
cm.dispose();
                    
}
               
}else{
                     
cm.playerMessage(1,"��û�н�������");
                   
cm.dispose();
               
}
    

               
         }					
       }
     }
   }

