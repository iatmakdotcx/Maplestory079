
var ���� = "#fEffect/CharacterEff/1022223/4/0#";
var ��ɫ��ͷ = "#fUI/UIWindow/Quest/icon6/7#";
var ��ɫ�ǵ� = "#fUI/UIWindow.img/PvP/Scroll/enabled/next2#";

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
v1ar textz = ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
textz += " \t\t #e#d ��ӭ����#r��ʹð�յ�#k#r�سɶһ�ϵͳ\r\n\t\t#r�һ���Ҫһ��#v4310057#����ֵ��á�               \r\n           #v3991018##v3991007##v3991012##v3991023##v3991003#  #L0##v1442133#\r\n"              
textz += "#L1##v1402214#";
textz += "#L2##v1452220#";
textz += "#L3##v1462208#";
textz += "#L4##v1472230#";
textz += "#L5##v1492194#\r\n";
textz += "#L6##v1432182#";
textz += "#L7##v1332242#";
textz += "#L8##v1482183#";
textz += "#L9##v1422156#";
textz += "#L10##v1382226#\r\n";
cm.sendSimple (textz);
} else if (selection == 0) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4310057,1)){
                                cm.gainItem(4310057, -1);
                                cm.gainItem(1442133, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ��˺�ɫì��");
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
cm.sendSimple (textz);        
 } else if (selection == 1) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4310057,1)){
                                cm.gainItem(4310057, -1);
                                cm.gainItem(1402214, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ��˺�ɫ˫�ֽ���");
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
cm.sendSimple (textz);    
 } else if (selection == 2) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310057,1)){
				cm.gainItem(4310057, -1);
                                cm.gainItem(1452220, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ��˺�ɫ����");
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
}


cm.sendSimple (textz);    
 } else if (selection == 3) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310057,1)){
				cm.gainItem(4310057, -1);
                                cm.gainItem(1462208, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ��˺�ɫ��");
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
}

cm.sendSimple (textz);    
 } else if (selection == 4) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310057,1)){
				cm.gainItem(4310057, -1);
                                cm.gainItem(1472230, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ��˺�ɫȭ�ף�");
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
}
 } else if (selection == 5) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310057,1)){
				cm.gainItem(4310057, -1);
                                cm.gainItem(1492194, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ��˺�ɫ��ǹ��");
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
}
 } else if (selection == 6) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310057,1)){
				cm.gainItem(4310057, -1);
                                cm.gainItem(1432182, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ��˺�ɫǹ��");
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
}
 } else if (selection == 7) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310057,1)){
				cm.gainItem(4310057, -1);
                                cm.gainItem(1332242, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ��˺�ɫ�̵���");
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
}
 } else if (selection == 8) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310057,1)){
				cm.gainItem(4310057, -1);
                                cm.gainItem(1482183, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ��˺�ɫȭ�ף�");
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
}
 } else if (selection == 9) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310057,1)){
				cm.gainItem(4310057, -1);
                                cm.gainItem(1422156, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ��˺�ɫ�޴���");
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
}
 } else if (selection == 10) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310057,1)){
				cm.gainItem(4310057, -1);
                                cm.gainItem(1382226, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ��˺�ɫ���ȣ�");
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
}
     } 
       }
         }

