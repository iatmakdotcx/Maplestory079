

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

	    var textz = "#d��ӭ����ð�յ� ����Ϊ���¹���װ����\r\n�����ϻ�ȡ��ͼΪ���鴬����#k\r\n";


  textz += "#L13#1.#v1052647##z1052647# ��Ҫ:#v4000380#300��  \r\n";
  textz += "#L14#2.#v1082540##z1082540# ��Ҫ:#v4000380#300��  \r\n";
  textz += "#L15#3.#v1102612##z1102612# ��Ҫ:#v4000379#300��  \r\n";
  textz += "#L16#4.#v1003946##z1003946# ��Ҫ:#v4000379#300��  \r\n";
  textz += "#L17#5.#v1072853##z1072853# ��Ҫ:#v4000379#300�� \r\n";




		cm.sendSimple (textz);  

	}else if (status == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
                  }else */
	       if (selection == 1){
                   if (!cm.haveItem(4251200,1)) {
 			cm.sendOk("�����#v4251200##z4251200#*1");
     
			cm.dispose();
		} else{
			cm.gainItem(4251200,-1);
			cm.gainItem(4031227,1);
			cm.sendOk("#b��ϲ�һ��ɹ�");
      			cm.dispose();
			}



       } else if (selection == 13){
                  if (!cm.haveItem(4000380,300)) {
    cm.sendOk("�����#v4000380#*300");
         cm.dispose();
  } else{
   cm.gainItem(4000380,-300);
   
   cm.gainItem(1052647,1);
   cm.sendOk("#b��ϲ�һ��ɹ�")
   cm.dispose();
}


       } else if (selection == 14){
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
                  }else */if (!cm.haveItem(4000380,300)) {
    cm.sendOk("�����#v4000380#*300");
         cm.dispose();
  } else{
   cm.gainItem(4000380,-300);
   cm.gainItem(1082540,1);
   cm.sendOk("#b��ϲ�һ��ɹ�")
   cm.dispose();
}


       } else if (selection == 15){
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
                  }else */if (!cm.haveItem(4000379,300)) {
    cm.sendOk("�����#v4000379#*300");
         cm.dispose();
  } else{
   cm.gainItem(4000379,-300);
   cm.gainItem(1102612,1);
   cm.sendOk("#b��ϲ�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 16){
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
                  }else */if (!cm.haveItem(4000379,300)) {
    cm.sendOk("�����#v4000379#*300");
         cm.dispose();
  } else{
   cm.gainItem(4000379,-300);
   cm.gainItem(1003946,1);
   cm.sendOk("#b��ϲ�һ��ɹ�")
   cm.dispose();
}


       } else if (selection == 17){
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
         
                  }else */if (!cm.haveItem(4000379,300)){
    cm.sendOk("�����#v4000379#*30");
         cm.dispose();
  } else{
   cm.gainItem(4000379,-300);
   cm.gainItem(1072853,1);
   cm.sendOk("#b��ϲ�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 18){
                  if (!cm.haveItem(4002001,30)) {
    cm.sendOk("�����#v4002001##z4002001#*30");
         cm.dispose();
  } else if (cm.getPlayer().getInventory
(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
   cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
   cm.dispose();
  } else{
   cm.gainItem(4002001,-30);
   cm.gainItem(1072853,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 19){
                 if (!cm.haveItem(4002001,30)) {
    cm.sendOk("�����#v4002001##z4002001#*30");
         cm.dispose();
                  } else if (!cm.haveItem(4001126,1000)) {
    cm.sendOk("�����#v4001126##z4001126#*1000");
         cm.dispose();
		  } else  if (cm.getMeso() < 20000000) {
 			cm.sendOk("�����#r20000000W#k���#k");
      			cm.dispose();
                  } else if (!cm.haveItem(1122031,1)) {
    cm.sendOk("�����#v1122031##z1122031#*1");
         cm.dispose();
  } else if (cm.getPlayer().getInventory
(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
   cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
   cm.dispose();
  } else{
   cm.gainItem(4002001,-30);
   cm.gainItem(4001126,-1000);
   cm.gainMeso(-20000000);
   cm.gainItem(1122031,-1);
   cm.gainItem(1122036,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 20){
                 if (!cm.haveItem(4002001,30)) {
    cm.sendOk("�����#v4002001##z4002001#*30");
         cm.dispose();
                  } else if (!cm.haveItem(4001126,1000)) {
    cm.sendOk("�����#v4001126##z4001126#*1000");
         cm.dispose();
		  } else  if (cm.getMeso() < 20000000) {
 			cm.sendOk("�����#r20000000W#k���#k");
      			cm.dispose();
                  } else if (!cm.haveItem(1122032,1)) {
    cm.sendOk("�����#v1122032##z1122032#*1");
         cm.dispose();
  } else if (cm.getPlayer().getInventory
(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
   cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
   cm.dispose();
  } else{
   cm.gainItem(4002001,-30);
   cm.gainItem(4001126,-1000);
   cm.gainMeso(-20000000);
   cm.gainItem(1122032,-1);
   cm.gainItem(1122037,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}

       } else if (selection == 210){
                  if (!cm.haveItem(4021000,2)) {
    cm.sendOk("�����#v4021000##z4021000#*2");
         cm.dispose();
                  } else if (!cm.haveItem(4021001,2)) {
    cm.sendOk("�����#v4021001##z4021001#*2");
         cm.dispose();
                  } else if (!cm.haveItem(4021002,2)) {
    cm.sendOk("�����#v4021002##z4021002#*2");
         cm.dispose();
                  } else if (!cm.haveItem(4021003,2)) {
    cm.sendOk("�����#v4021003##z4021003#*2");
         cm.dispose();
                  } else if (!cm.haveItem(4021004,2)) {
    cm.sendOk("�����#v4021004##z4021004#*2");
         cm.dispose();
                  } else if (!cm.haveItem(4021005,2)) {
    cm.sendOk("�����#v4021005##z4021005#*2");
         cm.dispose();
                  } else if (!cm.haveItem(4021006,2)) {
    cm.sendOk("�����#v4021006##z4021006#*2");
         cm.dispose();
                  } else if (!cm.haveItem(4021007,2)) {
    cm.sendOk("�����#v4021007##z4021007#*2");
         cm.dispose();
                  } else if (!cm.haveItem(4021008,2)) {
    cm.sendOk("�����#v4021008##z4021008#*2");
         cm.dispose();
                  } else if (!cm.haveItem(1132205,1)) {
    cm.sendOk("�����#v1132205##z1132205#*1");
         cm.dispose();
         cm.dispose();
  } else if (cm.getPlayer().getInventory
(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
   cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
   cm.dispose();
  } else{
   cm.gainItem(4021000,-2);
   cm.gainItem(4021001,-2);
   cm.gainItem(4021002,-2);
   cm.gainItem(4021003,-2);
   cm.gainItem(4021004,-2);
   cm.gainItem(4021005,-2);
   cm.gainItem(4021006,-2);
   cm.gainItem(4021007,-2);
   cm.gainItem(4021008,-2);
   cm.gainItem(1132205,-1);
   cm.gainItem(1132204,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}


       } else if (selection == 21){
                  if (!cm.haveItem(4001126,200)) {
    cm.sendOk("�����#v4001126##z4001126#*200");
         cm.dispose();
  } else if (cm.getPlayer().getInventory
(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
   cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
   cm.dispose();
  } else{
   cm.gainItem(4001126,-200);
   cm.gainItem(1092110,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}


       } else if (selection == 22){
                  if (!cm.haveItem(4001126,200)) {
    cm.sendOk("�����#v4001126##z4001126#*200");
         cm.dispose();
  } else if (cm.getPlayer().getInventory
(net.sf.cherry.client.MapleInventoryType.getByType(1)).isFull(3)){
   cm.sendOk("#b�뱣֤װ����λ������3���ո�,�����޷��һ�.");
   cm.dispose();
  } else{
   cm.gainItem(4001126,-200);
   cm.gainItem(1092111,1);
   cm.sendOk("#b�һ��ɹ�")
   cm.dispose();
}


}
}
}
}
