/*
* �Ĳ�21��
*
*
*/

var text = "";
var text1 = "";
var score = 0;
var selectionMeso = 0;
var zhuangScore = 0;
var xianScore = 0;
var paiArray = Array(1,3,4,5);
var paiArray2 = Array(3,5,6,7);
var ran = -1;


function start() {
	status = -1;
	
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	}
	else {
		if (status == 0 && mode == 0) {
		
			cm.sendOk("��ӭ�´ι��١�");
			cm.dispose();
			return;                    
		}
		if (mode == 1) {
			status++;
		}
		else {
			 if (status == 0) {
                cm.sendNext("��ӭ�´ι��١�");
                cm.dispose();
            }
			status--;
		} 
		if (status == 0) {
			score = cm.getNX();
			text += "#fUI/UIWindow/Quest/icon3/6# ";
			text += "�����������21��,";
			text += "����ǰʣ���ȯΪ #r" + score + "#k";
			text += " #fUI/UIWindow/Quest/icon3/6#\r\n";
			text += "#L0# ��ʼ��Ϸ #l\r\n";
			cm.sendSimple(text);
		} 
		else if (status == 1) { 
			
			if(selection == 0){		
	
				cm.sendGetNumber("������Ҫ��ע���٣�\r\n", 1, 1000,10000000);
				
			}else if(selection == 1){
				text1 += "#fUI/UIWindow/Quest/icon3/6# ";
				text1 += "�淨˵����";
				text1 += " #fUI/UIWindow/Quest/icon3/6#\r\n";
				text1 += "    ׯ�ҵĵ�������15��-22��֮�䣨ׯ��Ҳ�п��ܱ�����������4��Ҫ�ƵĻ��ᣬ������ĵ�������ׯ�ҵĵ�����Ӯ������ע�Ľ��������21�����С�ڵ���ׯ�ҵĵ����������������ע�Ľ�10��J��Q��K����ʮ�㣬С�����飬������ˣ������ء�";
				cm.sendOk(text1);
				cm.dispose();
			}
		}
		//-------------��һ��Ҫ��-----------------//
		else if (status == 2) {
			selectionNX = selection;
			if(selectionNX > score){
				cm.sendOk("�������");
				cm.dispose();
			}else{
				cm.gainNX(-selectionNX);
				zhuangScore = parseInt(Math.random()*8+15); 
				for(var i = 0; i < 2; i++){
					if(zhuangScore >= 22 || zhuangScore <= 17){
						zhuangScore = parseInt(Math.random()*8+15); 
					}
				}
				
				ran = parseInt(Math.random()*paiArray.length);
				xianScore = paiArray2[ran];
				var text2 = "";
				text2 += "#n#k,��Ŀǰ�ĵ���Ϊ�� #r#e" + xianScore + "#n#k ��";
				text2 += "������Ҫ���� \r\n";
				text2 += "#L2# Ҫ  \r\n";
				text2 += "#L3# ��Ҫ  \r\n";
				cm.sendSimple(text2);
			}
			
		}
		
		//------------�ڶ���Ҫ��------------------//
		
		else if (status == 3) { 
			if(selection == 2){
				ran = parseInt(Math.random()*paiArray.length);
				xianScore += paiArray2[ran];
				if(xianScore>21){
					cm.sendOk("�Բ����������ִ���21�������ˡ�");
					//cm.gainNX(-selectionNX);
					cm.worldMessage(6, "[��һ��] :  " + cm.getPlayer().getName() + " ��ȯ��һ������" );
					cm.dispose();	
				}else{
					text2 = "";
					text2 += "#n#k,��Ŀǰ�ĵ���Ϊ�� #r#e" + xianScore + "#n#k ��";
					text2 += "������Ҫ���� \r\n";
					text2 += "#L4# Ҫ  \r\n";
					text2 += "#L5# ��Ҫ  \r\n";
					cm.sendSimple(text2);
				}
			}
			else if(selection == 3){
				if((xianScore<22 && xianScore<=zhuangScore && zhuangScore<22) || (xianScore>=22 && zhuangScore>=22)){
					cm.sendOk("ׯ�ҵĵ���Ϊ #r#e"+zhuangScore+"#n#k,���ĵ���Ϊ #r#e"+xianScore+"#n#k,�����ˡ�");
					//cm.gainNX(-selectionNX);
					cm.worldMessage(6, "[��һ��] :  " + cm.getPlayer().getName() + " ��ȯ��һ������" );
					cm.dispose();
				}else{
					cm.sendOk("#fUI/UIWindow/Quest/reward#\r\n  ׯ�ҵĵ���Ϊ #r#e"+zhuangScore+"#n#k,���ĵ���Ϊ #r#e"+xianScore+"#n#k,��Ӯ�ˡ�");
					cm.gainNX(selectionNX * 2);
					cm.worldMessage(6, "[��һ��] : ��ϲ " + cm.getPlayer().getName() + " ��ȯ��һ��Ӯ��" );
					cm.dispose();	
				}
			}
			
			
		}
		//-----------������Ҫ��---------------
		else if (status == 4) { 
			if(selection == 4){
				ran = parseInt(Math.random()*paiArray.length);
				xianScore += paiArray2[ran];
				if(xianScore>21){
					cm.sendOk("�Բ����������ִ���21�������ˡ�");
					//cm.gainNX(-selectionNX);
					cm.worldMessage(6, "[��һ��] :  " + cm.getPlayer().getName() + " ��ȯ��һ������" );
					cm.dispose();	
				}else{
					text2 = "";
					text2 += "#n#k,��Ŀǰ�ĵ���Ϊ�� #r#e" + xianScore + "#n#k ��";
					text2 += "������Ҫ���� \r\n";
					text2 += "#L6# Ҫ  \r\n";
					text2 += "#L7# ��Ҫ  \r\n";
					cm.sendSimple(text2);
				}
			}
			else if(selection == 5){
				if((xianScore<22 && xianScore<=zhuangScore && zhuangScore<22) || (xianScore>=22 && zhuangScore>=22)){
					cm.sendOk("ׯ�ҵĵ���Ϊ #r#e"+zhuangScore+"#n#k,���ĵ���Ϊ #r#e"+xianScore+"#n#k,�����ˡ�");
					//cm.gainNX(-selectionNX);
					cm.worldMessage(6, "[��һ��] :  " + cm.getPlayer().getName() + " ��ȯ��һ������" );
					cm.dispose();
				}else{
					cm.sendOk("#fUI/UIWindow/Quest/reward#\r\n  ׯ�ҵĵ���Ϊ #r#e"+zhuangScore+"#n#k,���ĵ���Ϊ #r#e"+xianScore+"#n#k,��Ӯ�ˡ�");
					cm.gainNX(selectionNX * 2);
					cm.worldMessage(6, "[��һ��] : ��ϲ " + cm.getPlayer().getName() + " ��ȯ��һ��Ӯ��" );
					cm.dispose();	
				}
			}
			
			
		}
		
		//--------���Ĵ�Ҫ��----------
		else if (status == 5) { 
			if(selection == 6){
				ran = parseInt(Math.random()*paiArray.length);
				xianScore += paiArray2[ran];
				if(xianScore>21){
					cm.sendOk("�Բ����������ִ���21�������ˡ�");
					//cm.gainNX(-selectionNX);
											cm.worldMessage(6, "[��һ��] :  " + cm.getPlayer().getName() + " ��ȯ��һ������" );
					cm.dispose();	
				}else{
					if((xianScore<22 && xianScore<=zhuangScore && zhuangScore<22) || (xianScore>=22 && zhuangScore>=22)){
						cm.sendOk("ׯ�ҵĵ���Ϊ #r#e"+zhuangScore+"#n#k,���ĵ���Ϊ #r#e"+xianScore+"#n#k,�����ˡ�");
						//cm.gainNX(-selectionNX);
						cm.worldMessage(6, "[��һ��] :  " + cm.getPlayer().getName() + " ��ȯ��һ������" );
						cm.dispose();
					}else{
						cm.sendOk("#fUI/UIWindow/Quest/reward#\r\n  ׯ�ҵĵ���Ϊ #r#e"+zhuangScore+"#n#k,���ĵ���Ϊ #r#e"+xianScore+"#n#k,��Ӯ�ˡ�");
						cm.gainNX(selectionNX * 2);
						cm.worldMessage(6, "[��һ��] : ��ϲ " + cm.getPlayer().getName() + " ��ȯ��һ��Ӯ��" );
						cm.dispose();	
					}
				}
				
			}
			else if(selection == 7){
				if((xianScore<22 && xianScore<=zhuangScore && zhuangScore<22) || (xianScore>=22 && zhuangScore>=22)){
					cm.sendOk("ׯ�ҵĵ���Ϊ #r#e"+zhuangScore+"#n#k,���ĵ���Ϊ #r#e"+xianScore+"#n#k,�����ˡ�");
					//cm.gainNX(-selectionNX);
					cm.worldMessage(6, "[��һ��] :  " + cm.getPlayer().getName() + " ��ȯ��һ������" );
					cm.dispose();
				}else{
					cm.sendOk("#fUI/UIWindow/Quest/reward#\r\n  ׯ�ҵĵ���Ϊ #r#e"+zhuangScore+"#n#k,���ĵ���Ϊ #r#e"+xianScore+"#n#k,��Ӯ�ˡ�");
					cm.gainNX(selectionNX * 2);
					cm.worldMessage(6, "[��һ��] : ��ϲ " + cm.getPlayer().getName() + " ��ȯ��һ��Ӯ��" );
					cm.dispose();	
				}
			}
			
			
		}
		//------------����-------------
		
	}
}