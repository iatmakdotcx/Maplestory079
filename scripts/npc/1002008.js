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
        if (status == 0) 

{


            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			
           text += "���ã��𾴵�#b#h ##k#b ���ǵȼ��ɳ������ȡNPC#k\r\n#r�������ע�⣺����ɫ��Ϸ �������� ץ��һ��ͬ�ʣ�\r\n"//3
           //text += " \t   #d�������֣�#r"+cm.getzb()+"#k#n#d\t\t�����#b" + cm.getPlayer().getCSPoints(1) + "#k#n\t#d\r\n"
           text += " #b���ע�⣺��ȡ���ǰ�����������ռ䣬����ÿ����λ����8����λ���������Ը�#e\r\n"
	
           text += "     #L1##r5�� �ɳ����#l\r\n"//3
           text += "     #L2##r8�� �ɳ����#l\r\n"//3
           text += "     #L3##r10�� �ɳ����#l\r\n"//3
           text += "     #L4##r20�� �ɳ����#l\r\n"//3
           text += "     #L5##r30�� �ɳ����#l\r\n"//3
           text += "     #L6##r40�� �ɳ����#l\r\n"//3
           text += "     #L7##r50�� �ɳ����#l\r\n"//3
           text += "     #L8##r60�� �ɳ����#l\r\n"//3
           text += "     #L9##r70�� �ɳ����#l\r\n"//3
           text += "     #L10##r80�� �ɳ����#l\r\n"//3
           text += "     #L11##r90�� �ɳ����#l\r\n"//3
           text += "     #L12##r100�� �ɳ����#l\r\n"//3
         

		    cm.sendSimple(text);
        } else if (selection == 1) {//10���ɳ����
	if (cm.getPlayerStat("LVL") >= 5  && cm.getPlayer().getOneTimeLoga("5") <1){
		cm.getPlayer().setOneTimeLoga("5");//�����ü�¼
		cm.sendOk("��ϲ����ϵͳ������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2000000# x 50��");
	    cm.gainItem(2000000, 50);
		cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] ��ȡ��5�����³ɳ������");
		cm.sendOk("��ȡ�ɹ���");
		cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����5�����������������ռ�");
            cm.dispose();
		}
        } else if (selection == 2) {//30���ɳ����
	if(cm.getPlayerStat("LVL") >= 8 && cm.getPlayer().getOneTimeLoga("8") < 1){
			cm.getPlayer().setOneTimeLoga("8");//�����ü�¼
			cm.sendOk("��ϲ����ϵͳ������\r\n\r\n#fUI/UIWindow.img/QuestIcon/4/0#\r\n#v2000003# x 50��"); 
			cm.gainItem(2000003, 50);//5390003
			cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] ��ȡ��8�����³ɳ������");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����8�����������������ռ�");
            cm.dispose();
}
        } else if (selection == 3) {//70���ɳ����
	if(cm.getPlayerStat("LVL")>= 10 && cm.getPlayer().getOneTimeLoga("10") < 1){
			cm.getPlayer().setOneTimeLoga("10");//�����ü�¼
			cm.gainMeso(1000000 );//������
            cm.gainItem(2000005, 100);//����ҩˮ
			cm.gainDY(5000)//����3000��
			cm.gainItem(4001126, 200);//500����Ҷ
            //cm.gainItem(1003529, 1);//�Ͻ��Ҷñ��
            //cm.gainItem(1052457, 1);//�Ͻ��Ҷ�׷�
            //cm.gainItem(1102394, 1);//�Ͻ��Ҷ����
            //cm.gainItem(1082430, 1);//�Ͻ��Ҷ����
            //cm.gainItem(1072660, 1);//�Ͻ��ҶЬ��
            //cm.gainItem(2022618, 1);//�Ͻ��Ҷ������ѡ
			cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] ��ȡ��10�����³ɳ������");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����10�����������������ռ�");
            cm.dispose();
}
        } else if (selection == 4) {//100���ɳ����
	if(cm.getPlayerStat("LVL") >= 20 && cm.getPlayer().getOneTimeLoga("20") < 1){
	cm.getPlayer().setOneTimeLoga("20");//�����ü�¼
            cm.gainItem(1003946, 1);//����ñ��
            cm.gainItem(1052647, 1);//�����׷�
            cm.gainItem(1102612, 1);//��������
            cm.gainItem(1082540, 1);//��������
            cm.gainItem(1072853, 1);//����Ь��
            //cm.gainItem(2022613, 1);//����������ѡ
			cm.gainItem(4001126, 200);//500����Ҷ
			cm.gainMeso(3000000 );//������
            cm.gainItem(2000005, 100);//����ҩˮ
			cm.gainDY(10000)//����3000��
            cm.gainNX(5000);
			cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] ��ȡ��20�����³ɳ������");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����20�����������������ռ�");
            cm.dispose();
}
        } else if (selection == 5) {//110���ɳ����
	if(cm.getPlayerStat("LVL") >= 30 && cm.getPlayer().getOneTimeLoga("30") < 1){
			cm.getPlayer().setOneTimeLoga("30");//�����ü�¼
			cm.gainItem(4001126, 200);//500����Ҷ
			cm.gainMeso(5000000 );//������
            cm.gainItem(2000005, 200);//����ҩˮ
			cm.gainDY(10000)//����3000��
            cm.gainNX(5000);
  	//cm.gainItem(1113091,6,6,6,6,200,200,6,6,0,0,0,0,0,0);//�ɱ���ֹ
			cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] ��ȡ��30�����³ɳ������");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����30�����������������ռ�");
            cm.dispose();
}
        } else if (selection == 6) {//120���ɳ����
	if(cm.getPlayerStat("LVL") >= 40 && cm.getPlayer().getOneTimeLoga("40") < 1){
			cm.getPlayer().setOneTimeLoga("40");//�����ü�¼
			cm.gainItem(4001126, 200);//500����Ҷ
			cm.gainMeso(5000000 );//������
            cm.gainItem(2000005, 200);//����ҩˮ
			cm.gainDY(10000)//����3000��
            cm.gainNX(5000);
	//cm.gainItem(1012011,5,5,5,5,0,0,5,5,0,0,0,0,0,0);//ʥ������
			cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] ��ȡ��40�����³ɳ������");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����40�����������������ռ�");
            cm.dispose();
}
        } else if (selection == 7) {//130���ɳ����
	if(cm.getPlayerStat("LVL") >= 50 && cm.getPlayer().getOneTimeLog("50") < 1){
			cm.getPlayer().setOneTimeLog("50");//�����ü�¼
			cm.gainItem(4001126, 300);//500����Ҷ
			cm.gainMeso(5000000 );//������
            cm.gainItem(2000005, 200);//����ҩˮ
			cm.gainDY(10000)//����3000��
            cm.gainNX(5000);

			cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] ��ȡ��50�����³ɳ������");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����50�����������������ռ�");
            cm.dispose();
}
        } else if (selection == 8) {//140���ɳ����
	if(cm.getPlayerStat("LVL") >= 60 && cm.getPlayer().getOneTimeLoga("60") < 1){
			cm.getPlayer().setOneTimeLoga("60");//�����ü�¼
			cm.gainItem(4001126, 300);//500����Ҷ
			cm.gainMeso(5000000 );//������
            cm.gainItem(2000005, 200);//����ҩˮ
			cm.gainDY(10000)//����3000��
            cm.gainNX(5000);

			cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] ��ȡ��60�����³ɳ������");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����60�����������������ռ�");
            cm.dispose();
}
        } else if (selection == 9) {//150���ɳ����
	if(cm.getPlayerStat("LVL") >= 70 && cm.getPlayer().getOneTimeLoga("70") < 1){
			cm.getPlayer().setOneTimeLoga("70");//�����ü�¼
			cm.gainItem(4001126, 300);//500����Ҷ
			cm.gainMeso(10000000 );//������
            cm.gainItem(2000005, 200);//����ҩˮ
			cm.gainDY(10000)//����3000��
            cm.gainNX(10000);
  		//cm.gainItem(1142650,15,15,15,15,200,200,10,10,0,0,0,0,0,0);
			cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] ��ȡ��70�����³ɳ������");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����70�����������������ռ�");
            cm.dispose();
}
        } else if (selection == 10) {//160���ɳ����
	if(cm.getPlayerStat("LVL") >= 80 && cm.getPlayer().getOneTimeLoga("80") < 1){
			cm.getPlayer().setOneTimeLoga("80");//�����ü�¼
			cm.gainItem(4001126, 300);//500����Ҷ
			cm.gainMeso(10000000 );//������
            cm.gainItem(2000005, 200);//����ҩˮ
			cm.gainDY(10000)//����3000��
            cm.gainNX(10000);
			cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] ��ȡ��80�����³ɳ������");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����80�����������������ռ�");
            cm.dispose();
}


        } else if (selection == 11) {//170���ɳ����
	if(cm.getPlayerStat("LVL") >= 90 && cm.getPlayer().getOneTimeLoga("90") < 1){
			cm.getPlayer().setOneTimeLoga("90");//�����ü�¼
			cm.gainItem(4001126, 300);//500����Ҷ
			cm.gainMeso(10000000 );//������
            cm.gainItem(2000005, 200);//����ҩˮ
			cm.gainDY(20000)//����3000��
            cm.gainNX(20000);
			cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] ��ȡ��90�����³ɳ������");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����90�����������������ռ�");
            cm.dispose();
}
        } else if (selection == 12) {//180���ɳ����
	if(cm.getPlayerStat("LVL") >= 100 && cm.getPlayer().getOneTimeLog("100") < 1){
			cm.getPlayer().setOneTimeLog("100");//�����ü�¼
			cm.gainItem(4001126, 300);//500����Ҷ
			cm.gainMeso(10000000 );//������
            cm.gainItem(2000005, 200);//����ҩˮ
			cm.gainDY(20000)//����3000��
            cm.gainNX(20000);
			cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] ��ȡ��100�����³ɳ������");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����100�����������������ռ�");
            cm.dispose();
}
        } else if (selection == 13) {//190���ɳ����
	if(cm.getPlayerStat("LVL") >= 190 && cm.getPlayer().getOneTimeLog("�ɳ����13") < 1){
			cm.getPlayer().setOneTimeLog("�ɳ����13");//�����ü�¼
			cm.gainItem(4001126, 300);//500����Ҷ
			cm.gainMeso(10000000 );//������
            cm.gainItem(2000005, 200);//����ҩˮ
			cm.gainDY(20000)//����3000��
            cm.gainNX(20000);
			cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] �ﵽ190������ȡ��190�����³ɳ������");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����190�����������������ռ�");
            cm.dispose();
}
        } else if (selection == 14) {//200���ɳ����
	if(cm.getPlayerStat("LVL") >= 200 && cm.getPlayer().getOneTimeLog("�ɳ����14") < 1){
			cm.getPlayer().setOneTimeLog("�ɳ����14");//�����ü�¼
			cm.gainItem(4001126, 500);//500����Ҷ
			cm.gainMeso(10000000 );//������
            cm.gainItem(2000005, 200);//����ҩˮ
			cm.gainDY(30000)//����3000��
            cm.gainNX(30000);
  	//cm.gainItem(1142472,20,20,20,20,400,400,15,15,0,0,0,0,0,0);
             //cm.gainItem(1142111,10,10,10,10,50,50,10,10,10,10,10,10,10,10);
			cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] �ﵽ200������ȡ��200�����³ɳ������");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����200�����������������ռ�");
            cm.dispose();
}
        } else if (selection == 15) {//210���ɳ����
	if(cm.getPlayerStat("LVL") >= 210 && cm.getPlayer().getOneTimeLog("�ɳ����15") < 1){
			cm.getPlayer().setOneTimeLog("�ɳ����15");//�����ü�¼
			cm.gainItem(4001126, 500);//500����Ҷ
			cm.gainMeso(20000000 );//������
            cm.gainItem(2000005, 200);//����ҩˮ
			cm.gainDY(30000)//����3000��
            cm.gainNX(30000);
			cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] �ﵽ210������ȡ��210�����³ɳ������");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����210�����������������ռ�");
            cm.dispose();
}
        } else if (selection == 16) {//220���ɳ����
	if(cm.getPlayerStat("LVL") >= 200 && cm.getPlayer().getOneTimeLog("�ɳ����16") < 1){
			cm.getPlayer().setOneTimeLog("�ɳ����16");//�����ü�¼
			cm.gainItem(4001126, 500);//500����Ҷ
			cm.gainMeso(10000000 );//������
            cm.gainItem(2000005, 200);//����ҩˮ
			cm.gainDY(30000)//����3000��
            cm.gainNX(30000);
			cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] �ﵽ220������ȡ��220�����³ɳ������");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����220�����������������ռ�");
            cm.dispose();
}
        } else if (selection == 17) {//230���ɳ����
	if(cm.getPlayerStat("LVL") >= 230 && cm.getPlayer().getOneTimeLog("�ɳ����17") < 1){
			cm.getPlayer().setOneTimeLog("�ɳ����17");//�����ü�¼
			cm.gainItem(4001126, 1000);//500����Ҷ
			cm.gainMeso(10000000 );//������
            cm.gainItem(2000005, 200);//����ҩˮ
			cm.gainDY(30000)//����3000��
            cm.gainNX(30000);
			cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] �ﵽ230������ȡ��230�����³ɳ������");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����230�����������������ռ�");
            cm.dispose();
}
        } else if (selection == 18) {//240���ɳ����
	if(cm.getPlayerStat("LVL") >= 240 && cm.getPlayer().getOneTimeLog("�ɳ����18") < 1){
			cm.getPlayer().setOneTimeLog("�ɳ����18");//�����ü�¼
			cm.gainItem(4001126, 1000);//500����Ҷ
			cm.gainMeso(10000000 );//������
            cm.gainItem(2000005, 200);//����ҩˮ
			cm.gainDY(30000)//����3000��
            cm.gainNX(30000);
			cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] �ﵽ240������ȡ��240�����³ɳ������");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����240�����������������ռ�");
            cm.dispose();
}
        } else if (selection == 19) {//250���ɳ����
	if(cm.getPlayerStat("LVL") >= 250 && cm.getPlayer().getOneTimeLog("�ɳ����19") < 1){
			cm.getPlayer().setOneTimeLog("�ɳ����19");//�����ü�¼
			cm.gainItem(4001126, 1000);//500����Ҷ
			cm.gainMeso(10000000 );//������
            cm.gainItem(2000005, 200);//����ҩˮ
			cm.gainDY(100000)//����3000��
            cm.gainNX(100000);
			cm.worldMessage(6,"�����³ɳ��������ϲ��ң�["+cm.getName()+"] �ﵽ250������ȡ��250�����³ɳ������");
            cm.sendOk("��ȡ�ɹ���");
            cm.dispose();
		}else{
            cm.sendOk("���Ѿ���ȡ���ˣ�\r\n���ĵȼ�����250�����������������ռ�");
            cm.dispose();
}

//============================================
		}


		}
    }
//}


