

/*

var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ����new = "#fUI/UIWindow/Quest/icon5/1#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
*/
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
var �����Ʒ = "#v1302000#";
var x1 = "1302000,+1";// ��ƷID,����
var x2;
var x3;
var x4;
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var Բ�� = "#fUI/UIWindow/Quest/icon3/6#";
var ����new = "#fUI/UIWindow/Quest/icon2/7#";
var ����ne = "#fUI/UIWindow/Quest/icon6/7#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
var ������ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";
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
        //text += "#b#v4031344##v4031344##v4031344##v3994082##v3994077##v3994062##v4031344##v4031344##v4031344##k\r\n";
        text += "         \t\t ��ӭ����װ������ . \r\n ��ҿ����������������װ�����һ������һ��ȫ���ǿ��Ϳ�������һ������ȫ��ķ���Ӵ��~\r\n" 
     
	    text += "#L1#"+������ͷ+"[����ʦ1]#l#L2#"+������ͷ+"[����ʦ2]#l\r\n\r\n"

            text += "#L3#"+������ͷ+"[����ʦ3]#L4##b"+������ͷ+"[����ʦ4]#l\r\n\r\n"
        
            text += "#L9#"+������ͷ+"[����ʦ5]#L10##b"+������ͷ+"[����ʦ6]#l\r\n\r\n"

            //text += "#L11#"+������ͷ+"[����ʦ7]#l\r\n\r\n"

            text += ""+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+"\r\n"

	    text += "#L5#"+������ͷ+"[����ʦ1]#l#L6#"+������ͷ+"[����ʦ2]\r\n\r\n#L11#"+������ͷ+"[����ʦ3]#L12#"+������ͷ+"[����ʦ4]#l\r\n\r\n"

            text += ""+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+��ɺ�+"\r\n"

            text += "#L8##b"+������ͷ+"[�ı��ɫ]#l\r\n\r\n"

		//text += "#L3#"+����new+"[�ۺ�����]#l\r\n"
		if(cm.getPlayer().getGMLevel() > 1){
			//text += "#d\r\n������GM��Ȩ>>>>>>>>>>�������\r\n"
			//text += "#L9991#������#l\r\n"
		}
        cm.sendSimple(text);
      }  else if (selection == 1) { //���ٴ���
        cm.openNpc(2012007, 11);
      } else if (selection == 2) { //ҩˮ�̵�
        cm.openNpc(9310032, 11);
      } else if (selection == 3) { //רְ
        cm.openNpc(2010001, 11);
      }  else if (selection == 4) {//��������
        cm.openNpc(9201064, 11);
      }  else if (selection == 5) { //���ٸ�������No����
        cm.openNpc(1052004, 11);
      } else if (selection == 6) { //��������No
        cm.openNpc(2010002, 11);
      } else if (selection == 7) { //רְ
        cm.openNpc(1052005, 11);
      }  else if (selection == 8) {//��������
        cm.openNpc(1012105, 11);
      }else if (selection == 9){
	cm.openNpc(9310143, 2);
      }else if (selection == 10){
	cm.openNpc(9310143, 3);
      }else if (selection == 11){
	cm.openNpc(9310143, 6);
      }else if (selection == 12){
	cm.openNpc(9310143, 5);
      }else if (selection == 13){
	cm.openNpc(9310143, 2);
      }else if (selection == 14){
	cm.openNpc(9310143, 2);

	  }
   }
}



