var a = 0;
var Text = "#b#e��Ƭ�ռ�� ��Ƭ�������������й�.BOSS����  #r\r\n#L20##v2380000##v2380001##v2380002##v2380003##v2380004#�ȵȸ�Ҫ1�� �ܹ�190�ſ�Ƭ ��Ƭǰ3ҳ ��.��.ǳ�� \r\n#k��� ���λ�Ƽ���2ѡ1 #s4111006# �� #s2201002#\r\n\r\n\r\n#L50##e#d5000������1ҳ�����Ƭ����#v2028176#x10\r\n\r\n#L60##e#d5000������2ҳ�����Ƭ����#v2028177#x10\r\n\r\n#L70##e#d5000������3ҳ�����Ƭ����#v2028178#x10\r\n\r\n";//#L30##d#v2383006##v2383010# ��������Ҫ #v4000291##v4000292#��500��\r\n\r\n#L10##d#v2383048##v2383049#��������Ҫ#v4000036##v4000286#��500��#L40##r�ռ�BOSS����һҳ25��\r\n#v2388000##v2388001##v2388002##v2388003##v2388004##v2388005##v2388006##v2388007##v2388008##v2388009##v2388010##v2388011##v2388012##v2388013##v2388014##v2388015##v2388016##v2388017##v2388018##v2388019##v2388020##v2388021##v2388022##v2388023##v2388024#\r\n������Ե�50��ǿ������1000��
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

		}else if (selection == 20){
cm.openNpc(9900004,1201113);
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
	var text = "����Ⱥ�� * 1\r\n"
	   text += "����Ⱥ�� * 1\r\n"
	   text += "��Ҫ��Ϸ��# * ���ϲ���\r\n"
	
cm.sendOk(text)
cm.dispose();
}

		}else if (selection == 50){
			
if (cm.getPlayer().getCSPoints(1) >= 5000) {
               cm.gainNX(-5000);
               cm.gainItem(2028176, 10);
			cm.dispose();
		}else {
			
			cm.sendOk("��ȯ���㣡");
			cm.dispose();
		}

		}else if (selection == 60){
if (cm.getPlayer().getCSPoints(1) >= 5000) {
               cm.gainNX(-5000);
               cm.gainItem(2028177, 10);
			cm.dispose();
		}else {
			
			cm.sendOk("��ȯ���㣡");
			cm.dispose();
		}
				}else if (selection == 70){
if (cm.getPlayer().getCSPoints(1) >= 5000) {
               cm.gainNX(-5000);
               cm.gainItem(2028178, 10);
			cm.dispose();
		}else {
			
			cm.sendOk("��ȯ���㣡");
			cm.dispose();
		}
            }
        } 
    } 
}