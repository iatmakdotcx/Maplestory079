var a = 0;
var Text = "#b#e������ʱ� �����е���ֻ�ܴ�һ�� �һ�һ�Σ� �һ�ʱ��5.4-5.19�� ���в��ϳ������������й�С���ʳ�  #r\r\n#L20##v4001221##v4001222##v4001223##v4001224##v4001225#����Ҫ1��#r\r\n�ϳ� ��� ȫ���Թ�ħ10-88Ѫħ1000#v1802100#˫����300#l\r\n\r\n\r\n\r\n#L30##b#v4001221##v4001222##v4001223##v4001224##v4001225#+500����Ϸ��\r\n��������10-88#v1802100#\r\n\r\n\r\n\r\n";//#L30##b��ȡ��ָ��ʹ��#v3994047##v3994048##v3994049#�г�14���ſ�ǿ��
var db;
var time;

function start() {
	a = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 1)
			a++;
		else
			a--;
			if (a == -1){
				cm.dispose();
			        }else if (a == 0) {
							 a = 0;
cm.sendSimple(Text);		
			}else if (a == 1){
			if (selection == 1) {
                cm.sendOk("#b��������:#k\r\n#i1112446##t1112446#ͨ������̳ǻ�����������������");
                    cm.dispose();
		}else if (selection == 51){
                //cm.sendOk("#b:#k\r\n1.���������ղػ ��Ҫ��#v4031111# 77��#v4031110# ");
                    cm.dispose();
		
		//}else if (selection == 10){   cm.getPlayer().getBossLog("��ָ�һ�",1) == 5&&


		}else if (selection == 20){
if ( cm.itemQuantity(4001221) >=1 && cm.getPlayer().getBossLog("������Ȧ�һ�",1) == 0&& cm.itemQuantity(4001222) >=1&& cm.itemQuantity(4001223) >=1&& cm.itemQuantity(4001224) >=1&& cm.itemQuantity(4001225) >=1&& cm.getMeso()>=10000000){
var r = Math.ceil(Math.random() * 70+10);
cm.gainItem(4001221,-1);
cm.gainItem(4001222,-1);
cm.gainItem(4001223,-1);
cm.gainItem(4001224,-1);
cm.gainItem(4001225,-1);

cm.getPlayer().setBossLog("������Ȧ�һ�",1,1)
cm.gainItem(1802100,r,r,r,r,1000,1000,r,r,300,300,20,20,20,20);
cm.gainMeso(-10000000);
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "��ʱ�" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ��һ���ʱʱװ������Ȧ ���10-80���ԣ�"));


	cm.sendNext("#b�һ���ʾ:#r\r\n��ָ�һ��ɹ�����ϲ�㣡")
cm.dispose();
}else{
	var text = "#v4001221# * 1\r\n"
	   text += "#v4001222# * 1\r\n"
	   text += "#v4001223# * 1\r\n"
	   text += "#v4001224# * 1\r\n"
	   text += "#v4001225# * 1\r\n"
	   
	   text += "��Ҫ��Ϸ��# * 1000�� һ��ֻ�ܶһ�һ��\r\n"
	
cm.sendOk(text)
cm.dispose();
}

		}else if (selection == 30){
if (cm.itemQuantity(1802100) >=1 && cm.itemQuantity(4001221) >=1 && cm.itemQuantity(4001222) >=1&& cm.itemQuantity(4001223) >=1&& cm.itemQuantity(4001224) >=1&& cm.itemQuantity(4001225) >=1&& cm.getMeso()>=10000000){
var r = Math.ceil(Math.random() * 70+10);
cm.gainItem(4001221,-1);
cm.gainItem(4001222,-1);
cm.gainItem(4001223,-1);
cm.gainItem(4001224,-1);
cm.gainItem(4001225,-1);
cm.gainItem(1802100,-1);
cm.gainItem(1802100,r,r,r,r,1000,1000,r,r,300,300,20,20,20,20);
cm.gainMeso(-10000000);
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "��ʱ�" + " : " + "��ϲ��" + cm.getChar().getName() + "����ҳɹ�������ʱʱװ������Ȧ ���10-80���ԣ�"));
	cm.sendNext("#b������ʾ:#r\r\n��#v11802100#��ϲ�㣡")
cm.dispose();
}else{
	var text = " ���� ������Ȧ\r\n"
	text += "��Ҫ#v1802100# * 1\r\n"
	   text += "��Ҫ#v4001221# * 1\r\n"
	   text += "��Ҫ#v4001222# * 1\r\n"
	   text += "��Ҫ#v4001223# * 1\r\n"
	   text += "�һ�#v4001224# * 1\r\n"
	   text += "�һ�#v4001224# * 1\r\n"
	   text += "��Ҫ��Ϸ�� * 1000��\r\n"
	   
cm.sendOk(text)
cm.dispose();
}

		}else if (selection == 40){
cm.openNpc(2090104,100);
		}else if (selection == 50){
if (cm.itemQuantity(1112485) >=1 && cm.itemQuantity(4032398) >=15&& cm.itemQuantity(4000313) >=500 && cm.itemQuantity(4000270) >=1000 && cm.itemQuantity(4000272) >=1000 && cm.itemQuantity(4001084) >=1 && cm.itemQuantity(4000175) >=1 && cm.itemQuantity(4000151) >=200 && cm.itemQuantity(4000152) >=200 && cm.itemQuantity(4000244) >=20&& cm.itemQuantity(4000245) >=20){
cm.gainItem(1112495,30,30,30,30,300,300,20,20,20,20,20,20,20,20);
cm.gainItem(1112485,-1);
cm.gainItem(4032398,-15);
cm.gainItem(4000313,-500);
cm.gainItem(4000270,-1000);
cm.gainItem(4000272,-1000);
cm.gainItem(4001084,-1);
cm.gainItem(4000175,-1);
cm.gainItem(4000151,-200);
cm.gainItem(4000152,-200);
cm.gainItem(4000244,-20);
cm.gainItem(4000245,-20);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV50�ˣ���ϲ�㣡")
cm.dispose();
}else{
var text = "�Ϲ����Ž�ָLV40 * 1\r\n"
	   text += "��Ҫ#v4032398# * 15\r\n"
	   text += "��Ҫ#v4000313# * 1000\r\n"
	   text += "��Ҫ#v4000270# * 1000\r\n"
	   text += "��Ҫ#v4000272# * 500\r\n"
	   text += "��Ҫ#v4000151# * 200\r\n"
	   text += "��Ҫ#v4000152# * 200\r\n"
	   text += "��Ҫ#v4000244# * 20\r\n"
       text += "��Ҫ#v4000245# * 20\r\n"
	   text += "��Ҫ#v4001084# * 1\r\n"
	   text += "��Ҫ#v4000175# * 1\r\n"
cm.sendOk(text)
cm.dispose();
}
            }
        } 
    } 
}