var a = 0;
var Text = "#b#e���뿨Ƭ�ռ������Ƭ���������п�Ƭ��Ӧ�Ĺ����  #r\r\n��Ҫ�ռ���Ƭǰ2����ǩҳ������ͳ�2����ǩҳ������й��￨Ƭ   \r\n#k��ɺ����Ⱥ�����λ�Ƽ���2ѡ1 �����������������ƶ���\r\n\r\n";//#L30##d#v2383006##v2383010# ��������Ҫ #v4000291##v4000292#��500��\r\n\r\n#L10##d#v2383048##v2383049#��������Ҫ#v4000036##v4000286#��500��\r\n\r\n";//#L40##r�ռ�BOSS����һҳ25��\r\n#v2388000##v2388001##v2388002##v2388003##v2388004##v2388005##v2388006##v2388007##v2388008##v2388009##v2388010##v2388011##v2388012##v2388013##v2388014##v2388015##v2388016##v2388017##v2388018##v2388019##v2388020##v2388021##v2388022##v2388023##v2388024#\r\n������Ե�50��ǿ������1000��
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
		
		}else if (selection == 10){
if (cm.itemQuantity(4000036) >=500 && cm.itemQuantity(4000286) >=500 && cm.getMeso()>=1000000&& cm.getPlayer().getBossLog("120�������",1) == 0){
cm.gainItem(4000036,-500);
cm.gainItem(4000286,-500);
cm.gainItem(2383048,1);
cm.gainItem(2383049,1);
cm.getPlayer().setBossLog("110�������",1,1);

cm.gainMeso(-1000000);

	cm.sendNext("#b�һ���ʾ:#r\r\n���ܶһ�������ϲ�㣡")
cm.dispose();
}else{
	var text = "#v4000036# * 500\r\n"
	   text += "#v4000286# * 500\r\n"
	   text += "��Ҫ��Ϸ��# * 100��\r\n"
	
cm.sendOk(text)
cm.dispose();
}

		}else if (selection == 30){
if (cm.itemQuantity(4000291) >=500 && cm.itemQuantity(4000292) >=500&& cm.getMeso()>=1000000&& cm.getPlayer().getBossLog("130�������",1) == 0){
cm.gainItem(4000291,-500);
cm.gainItem(4000292,-500);
cm.gainItem(2383006,1);
cm.gainItem(2383010,1);
cm.getPlayer().setBossLog("130�������",1,1);

cm.gainMeso(-1000000);

	cm.sendNext("#b�һ���ʾ:#r\r\n���ܶһ�������ϲ�㣡")
cm.dispose();
}else{
	var text = "#v4000036# * 500\r\n"
	   text += "#v4000286# * 500\r\n"
	   text += "��Ҫ��Ϸ��# * 100��\r\n"
	
cm.sendOk(text)
cm.dispose();
}

		}else if (selection == 40){
if (cm.itemQuantity(3700061) >=1 && cm.getMeso()>=1000000 && cm.getPlayer().getBossLog("150�������",1) == 0){
cm.gainItem(3700061,-1);

cm.gainAp(50);
cm.gainItem(3992025,1000);//��������ID������
cm.getPlayer().setBossLog("150�������",1,1);

cm.gainMeso(-1000000);

	cm.sendNext("#b�һ���ʾ:#r\r\nBOSS���һ���ɣ���ϲ�㣡")
cm.dispose();
}else{
	var text = "#v4000036# * 500\r\n"
	   text += "#v4000286# * 500\r\n"
	   text += "��Ҫ��Ϸ��# * 100��\r\n"
	
cm.sendOk(text)
cm.dispose();
}

		}else if (selection == 50){
if (cm.itemQuantity(1112475) >=1 && cm.itemQuantity(4032398) >=10  && cm.itemQuantity(4000175) >=1 && cm.itemQuantity(4000054) >=100&& cm.itemQuantity(4000053) >=100&& cm.itemQuantity(4000050) >=1000 && cm.itemQuantity(4000052) >=1000 && cm.itemQuantity(4000051) >=1000 && cm.itemQuantity(4000055) >=200  && cm.itemQuantity(4000048) >=200 ){
cm.gainItem(1112485,20,20,20,20,200,200,15,15,10,10,10,10,10,10);
cm.gainItem(1112475,-1);
cm.gainItem(4032398,-10);
cm.gainItem(4000050,-1000);
cm.gainItem(4000052,-1000);
cm.gainItem(4000051,-1000);
cm.gainItem(4000055,-200);
cm.gainItem(4000048,-200);
cm.gainItem(4000053,-100);
cm.gainItem(4000054,-100);
cm.gainItem(4000175,-1);
	cm.sendNext("#b������ʾ:#r\r\n�Ϲ����Ž�ָLV40�ˣ���ϲ�㣡")
cm.dispose();
}else{
	var text = "����Ⱥ�� * 1\r\n"
	   //text += "��Ҫ#v4032398# * 10\r\n"
	   //text += "��Ҫ#v4000050# * 1000\r\n"
	   //text += "��Ҫ#v4000052# * 1000\r\n"
	   //text += "��Ҫ#v4000051# * 1000\r\n"
	   //text += "��Ҫ#v4000055# * 200\r\n"
	   //text += "��Ҫ#v4000048# * 200\r\n"
	   //text += "��Ҫ#v4000053# * 100\r\n"
	   //text += "��Ҫ#v4000054# * 100\r\n"
	   //text += "��Ҫ#v4000175# * 1\r\n"
cm.sendOk(text)
cm.dispose();
}

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