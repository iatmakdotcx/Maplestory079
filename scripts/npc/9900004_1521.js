var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ������ = "#fUI/UIWindow/Quest/icon3/6#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon2/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";
var ���ڽ����� = "#fUI/UIWindow/Quest/Tab/enabled/1#";
var ��� = "#fUI/UIWindow/Quest/Tab/enabled/2#";
var ���ڽ������� = "#fUI/UIWindow/MonsterCarnival/icon1#";
var ��ɺ� = "#fUI/UIWindow/MonsterCarnival/icon0#";
var ���� = "#fEffect/CharacterEff/1051295/0/0#";
var �ٷ� = "#fEffect/CharacterEff/1003252/0/0#";
var Сѩ�� = "#fEffect/CharacterEff/1003393/0/0#";
var ���� = "#fEffect/CharacterEff/1032063/0/0#";
var ��̾�� = "#fUI/UIWindow/Quest/icon0#";
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
			text += "            "+����+" #e����ÿ�������б�#n "+����+"\r\n"
			
			if(cm.getBossLog('ÿ������') < 1){
					text += "  #L1#"+����+"#eÿ������  (��Ҳ��ϻ���ף����)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
				} else if(cm.getBossLog('ÿ������') == 12){
					text += "  #L1#"+����+"#eÿ������  (��Ҳ��ϻ���ף����)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					text += "  #L1#"+����+"#eÿ������ (��Ҳ��ϻ���ף��)(#r���ڽ���#k)#n"+����+"#l\r\n"//3
			}
			
			if(cm.getBossLog('ÿ��Ģ����') == 0){
					if (cm.haveItem(4000040,1)){
						text += "  #L2#"+����+"#eÿ��Ź��Ģ����       (���20W)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
						text += "  #L2#"+����+"#eÿ��Ź��Ģ����       (���20W)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ��Ģ����') == 1){
					text += "  #L2#"+����+"#eÿ��Ź��Ģ����       (���20W)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ�ս�ʬĢ����') == 0){
					if (cm.haveItem(4000176,1)){
					text += "  #L3#"+����+"#eÿ��Ź��ʬĢ����   (���20W)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					text += "  #L3#"+����+"#eÿ��Ź��ʬĢ����   (���20W)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ�ս�ʬĢ����') == 1){
					text += "  #L3#"+����+"#eÿ��Ź��ʬĢ����   (���20W)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ����Ģ����') == 0){
					if (cm.haveItem(4001010,1)){
					text += "  #L4#"+����+"#eÿ��Ź����Ģ����     (���20W)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					text += "  #L4#"+����+"#eÿ��Ź����Ģ����     (���20W)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ����Ģ����') == 1){
					text += "  #L4#"+����+"#eÿ��Ź����Ģ����     (���20W)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ�������') == 0){
					if (cm.haveItem(4031227,1)){
					text += "  #L5#"+����+"#eÿ��Ź�������       (���30W)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					text += "  #L5#"+����+"#eÿ��Ź�������       (���30W)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ�������') == 1){
					text += "  #L5#"+����+"#eÿ��Ź�������       (���30W)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ�ն��') == 0){
					if (cm.haveItem(4000460,1) && cm.haveItem(4000461,1) && cm.haveItem(4000462,1)){
					text += "  #L6#"+����+"#eÿ��Ź�������Boss  (���100W)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					text += "  #L6#"+����+"#eÿ��Ź�������Boss  (���100W)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ�ն��') == 1){
					text += "  #L6#"+����+"#eÿ��Ź�������Boss  (���100W)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ�������') == 0){
					if (cm.haveItem(4000235,1)){
					text += "  #L7#"+����+"#eÿ��Ź�������   (�����ҵ�ȯ)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					text += "  #L7#"+����+"#eÿ��Ź�������   (�����ҵ�ȯ)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ�������') == 1){
					text += "  #L7#"+����+"#eÿ��Ź�������   (�����ҵ�ȯ)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ����ӥ') == 0){
					if (cm.haveItem(4000243,1)){
					text += "  #L8#"+����+"#eÿ��Ź����ӥ     (�����ҵ�ȯ)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					text += "  #L8#"+����+"#eÿ��Ź����ӥ     (�����ҵ�ȯ)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ����ӥ') == 1){
					text += "  #L8#"+����+"#eÿ��Ź����ӥ     (�����ҵ�ȯ)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ������') == 0){
					if (cm.haveItem(4000175,1)){
					text += "  #L9#"+����+"#eÿ��Ź������        (���100W)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					text += "  #L9#"+����+"#eÿ��Ź������        (���100W)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ������') == 1){
					text += "  #L9#"+����+"#eÿ��Ź������        (���100W)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ���ϰ�') == 0){
					if (cm.haveItem(4000094,3)){
					text += "  #L10#"+����+"#eÿ��Ź���ϰ�     (��������)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					text += "  #L10#"+����+"#eÿ��Ź���ϰ�     (��������)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ���ϰ�') == 1){
					text += "  #L10#"+����+"#eÿ��Ź���ϰ�     (��������)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ���칷') == 0){
					if (cm.haveItem(4000224,1)){
					text += "  #L11#"+����+"#eÿ��Ź���칷      (������� x1)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					text += "  #L11#"+����+"#eÿ��Ź���칷      (������� x1)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ���칷') == 1){
					text += "  #L11#"+����+"#eÿ��Ź���칷      (������� x1)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			if(cm.getBossLog('ÿ�մ���') == 0){
					if (cm.haveItem(4000138,1)){
					text += "  #L12#"+����+"#eÿ��Ź�����    (ף������ x1)(#r�����#k)#n"+��̾��+"#l\r\n"//3
					}else{
					text += "  #L12#"+����+"#eÿ��Ź�����    (ף������ x1)(#b�ɿ�ʼ#k)#n"+����+"#l\r\n"//3
					} 
				} else if(cm.getBossLog('ÿ�մ���') == 1){
					text += "  #L12#"+����+"#eÿ��Ź�����    (ף������ x1)(#r"+���+"#k)#n"+����+"#l\r\n"//3
				} else {
					text += "		  "+�ٷ�+"#e   (#rlv.15#k)��������2   "+�ٷ�+"#l\r\n\r\n"//3
			}
			
            cm.sendSimple(text);
        } else if (selection == 1) {
		cm.openNpc(9010009, 1);
        } else if (selection == 2) {
		 if (cm.getBossLog('ÿ��Ģ����') >= 1) {
            cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
	    cm.dispose();
        }else{
			if (cm.haveItem(4000040,1)){
				if (cm.getLevel() > 59){
                cm.gainItem(4000040, -1);
				cm.gainMeso(+200000); //�Ӽ����	
				//cm.gainMeso(+2049100); //�Ӽ����	
				cm.����(1,"��ң�"+cm.getName()+" ���ÿ��Ź��Ģ�������������20W��");
                cm.sendOk("�һ��ɹ���");
            cm.setBossLog('ÿ��Ģ����');
                cm.dispose();
		}else{
                cm.sendOk("60���Ժ�ſ�������������");
                cm.dispose();
		 }
            }else{
                cm.sendOk("�ռ�#v4000040# 1�������ң�");
                cm.dispose();
            }
		 }
        } else if (selection == 3) {
		 if (cm.getBossLog('ÿ�ս�ʬĢ����') >= 1) {
            cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
	    cm.dispose();
        }else{
			if (cm.haveItem(4000176,1)){
				if (cm.getLevel() > 59){
                cm.gainItem(4000176, -1);
				cm.gainMeso(+200000); //�Ӽ����
				//cm.gainMeso(+2049100); //�Ӽ����	
				cm.����(1,"��ң�"+cm.getName()+" ���ÿ��Ź��ʬĢ�������������20W��");
                cm.sendOk("�һ��ɹ���");
            cm.setBossLog('ÿ�ս�ʬĢ����');
                cm.dispose();
		}else{
                cm.sendOk("60���Ժ�ſ�������������");
                cm.dispose();
		 }
            }else{
                cm.sendOk("�ռ�#v4000176# 1�������ң�");
                cm.dispose();
            }
		 }
        } else if (selection == 4) {
			if (cm.getBossLog('ÿ����Ģ����') >= 1) {
            cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
	    cm.dispose();
        }else{
			if (cm.haveItem(4001010,1)){
				if (cm.getLevel() > 59){
                cm.gainItem(4001010, -1);
				cm.gainMeso(+200000); //�Ӽ����
				//cm.gainMeso(+2049100); //�Ӽ����	
				cm.����(1,"��ң�"+cm.getName()+" ���ÿ��Ź����Ģ�������������20W��");
                cm.sendOk("�һ��ɹ���");
            cm.setBossLog('ÿ����Ģ����');
                cm.dispose();
		}else{
                cm.sendOk("60���Ժ�ſ�������������");
                cm.dispose();
		 }
            }else{
                cm.sendOk("�ռ�#v4001010# 1�������ң�");
                cm.dispose();
            }
		 }
        } else if (selection == 5) {
					if (cm.getBossLog('ÿ�������') >= 1) {
						cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
						cm.dispose();
					}else{
							if (cm.haveItem(4031227,1)){
									if (cm.getLevel() > 59){
											cm.gainItem(4031227, -1);
											cm.gainMeso(+300000); //�Ӽ����
										//cm.gainMeso(+2049100); //�Ӽ����	
											cm.����(1,"��ң�"+cm.getName()+" ���ÿ�ջ�����������������30W��");
											cm.sendOk("�һ��ɹ���");
											cm.setBossLog('ÿ�������');
											cm.dispose();
									}else{
											cm.sendOk("60���Ժ�ſ�������������");
											cm.dispose();
									}
							}else{
								cm.sendOk("�ռ�#v4031227# 1�������ң�");
								cm.dispose();
							}
					}
        } else if (selection == 6) {
					if (cm.getBossLog('ÿ�ն��') >= 1) {
						cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
						cm.dispose();
					}else{
							if (cm.haveItem(4000460,1) && cm.haveItem(4000461,1) && cm.haveItem(4000462,1)){
									if (cm.getLevel() > 119){
											cm.gainItem(4000460, -1);
											cm.gainItem(4000461, -1);
											cm.gainItem(4000462, -1);
											cm.gainMeso(+1000000); //�Ӽ����
										//cm.gainMeso(+2049100); //�Ӽ����	
											cm.����(1,"��ң�"+cm.getName()+" ���ÿ�ջ��������Boss���������100W��");
											cm.sendOk("�һ��ɹ���");
											cm.setBossLog('ÿ�ն��');
											cm.dispose();
									}else{
											cm.sendOk("120���Ժ�ſ�������������");
											cm.dispose();
									}
							}else{
								cm.sendOk("�ռ�#v4000460##v4000461##v4000462# ��1�������ң�");
								cm.dispose();
							}
					}
        } else if (selection == 7) {
					if (cm.getBossLog('ÿ�������') >= 1) {
						cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
						cm.dispose();
					}else{
							if (cm.haveItem(4000235,1)){
									if (cm.getLevel() > 119){
											cm.gainItem(4000235, -1);
											var rand = 0 + Math.floor(Math.random() * 2);  //�����
											if (rand==0){
											cm.gainMeso(+1000000); //�Ӽ����
											rand="���100W��";
												}else{
											cm.gainNX(500);	//�Ӽ���ȯ
											rand="��ȯ500�㣡"
												var bf="";
											}
										//cm.gainMeso(+2049100); //�Ӽ����	
											cm.����(1,"��ң�"+cm.getName()+" ���ÿ�ջ��������������"+rand);
											cm.sendOk("�һ��ɹ���");
											cm.setBossLog('ÿ�������');
											cm.dispose();
									}else{
											cm.sendOk("120���Ժ�ſ�������������");
											cm.dispose();
									}
							}else{
								cm.sendOk("�ռ�#v4000235# 1�������ң�");
								cm.dispose();
							}
					}
        } else if (selection == 8) {
					if (cm.getBossLog('ÿ����ӥ') >= 1) {
						cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
						cm.dispose();
					}else{
							if (cm.haveItem(4000243,1)){
									if (cm.getLevel() > 119){
											cm.gainItem(4000243, -1);
											var rand = 0 + Math.floor(Math.random() * 2);  //�����
											if (rand==0){
											cm.gainMeso(+1000000); //�Ӽ����
											rand="���100W��";
												}else{
											cm.gainNX(500);	//�Ӽ���ȯ
											rand="��ȯ500�㣡"
												var bf="";
											}
										//cm.gainMeso(+2049100); //�Ӽ����	
											cm.����(1,"��ң�"+cm.getName()+" ���ÿ�ջ�������ӥ������"+rand);
											cm.sendOk("�һ��ɹ���");
											cm.setBossLog('ÿ����ӥ');
											cm.dispose();
									}else{
											cm.sendOk("120���Ժ�ſ�������������");
											cm.dispose();
									}
							}else{
								cm.sendOk("�ռ�#v4000243# 1�������ң�");
								cm.dispose();
							}
					}
		} else if (selection == 9) {
					if (cm.getBossLog('ÿ������') >= 1) {
						cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
						cm.dispose();
					}else{
							if (cm.haveItem(4000175,1)){
									if (cm.getLevel() > 129){
											cm.gainItem(4000175, -1);
											cm.gainMeso(+3000000); //�Ӽ����
										//cm.gainMeso(+2049100); //�Ӽ����	
											cm.����(1,"��ң�"+cm.getName()+" ���ÿ�ջ����������������300W��");
											cm.sendOk("�һ��ɹ���");
											cm.setBossLog('ÿ������');
											cm.dispose();
									}else{
											cm.sendOk("130���Ժ�ſ�������������");
											cm.dispose();
									}
							}else{
								cm.sendOk("�ռ�#v4000175# 1�������ң�");
								cm.dispose();
							}
					}
		} else if (selection == 10) {
					if (cm.getBossLog('ÿ���ϰ�') >= 1) {
						cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
						cm.dispose();
					}else{
							if (cm.haveItem(4000094,3)){
									if (cm.getLevel() > 149){
											cm.gainItem(4000094, -3);
										cm.gainItem(2049100, 1, 1);//����
										//cm.gainItem(5340001, 1,1);//���
										//cm.gainItem(2300000, 100,1);//���
										//cm.gainMeso(+2049100); //�Ӽ����	
											cm.����(1,"��ң�"+cm.getName()+" ���ÿ�ջ����ϰ壡�������磡");
											cm.sendOk("�һ��ɹ���");
											cm.setBossLog('ÿ���ϰ�');
											cm.dispose();
									}else{
											cm.sendOk("150���Ժ�ſ�������������");
											cm.dispose();
									}
							}else{
								cm.sendOk("�ռ�#v4000094# 3�������ң�");
								cm.dispose();
							}
					}
		} else if (selection == 11) {
					if (cm.getBossLog('ÿ���칷') >= 1) {
						cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
						cm.dispose();
					}else{
							if (cm.haveItem(4000224,1)){
									if (cm.getLevel() > 149){
											cm.gainItem(4000224, -1);
											cm.gainItem(2049100, 1);
											cm.����(1,"��ң�"+cm.getName()+" ���ÿ�ջ����칷�������������x1��");
											cm.sendOk("�һ��ɹ���");
											cm.setBossLog('ÿ���칷');
											cm.dispose();
									}else{
											cm.sendOk("150���Ժ�ſ�������������");
											cm.dispose();
									}
							}else{
								cm.sendOk("�ռ�#v4000224# 1�������ң�");
								cm.dispose();
							}
					}
		} else if (selection == 12) {
					if (cm.getBossLog('ÿ�մ���') >= 1) {
						cm.sendOk("ÿ��ֻ�ܶһ�1��Ŷ���������������Ұɣ�");
						cm.dispose();
					}else{
							if (cm.haveItem(4000138,1)){
									if (cm.getLevel() > 159){
											cm.gainItem(4000138, -1);
											cm.gainItem(2340000, 1);
											cm.����(1,"��ң�"+cm.getName()+" ���ÿ�ջ��ܴ��󣡽���ף������x1��");
											cm.sendOk("�һ��ɹ���");
											cm.setBossLog('ÿ�մ���');
											cm.dispose();
									}else{
											cm.sendOk("160���Ժ�ſ�������������");
											cm.dispose();
									}
							}else{
								cm.sendOk("�ռ�#v4000138# 1�������ң�");
								cm.dispose();
							}
					}
		} 
    }
}





