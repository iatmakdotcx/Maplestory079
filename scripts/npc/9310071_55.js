
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
var textz = ""+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+����+"\r\n"
textz += " \t#e#d ��ӭ����#r��ʹð�յ�#k#r�سɶһ�ϵͳ\r\n\t#r�һ���Ҫһ��#v4310038#����ֵ��á�               \r\n        #v3991018##v3991007##v3991012##v3991023##v3991003#\r\n"              
textz += "#L1##v2044003#";
textz += "#L2##v2044503#";
textz += "#L3##v2044603#";
textz += "#L4##v2044703#";
textz += "#L5##v2044908#\r\n";
textz += "#L6##v2044303#";
textz += "#L7##v2043303#";
textz += "#L8##v2044815#";
textz += "#L9##v2043003#";
textz += "#L10##v2043803#\r\n";
textz += "#L13##v2044403#";
textz += "#L12##v2044203#";
textz += "#L11##v2040807#";
cm.sendSimple (textz);    
 } else if (selection == 1) {
			//2
			/*if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310038,1)){
                                cm.gainItem(4310038, -1);
                                cm.gainItem(2044003, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ���˫�ֽ������سɾ�");
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
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4310038,1)){
				cm.gainItem(4310038, -1);
                                cm.gainItem(2044503, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ��˹������سɾ�");
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
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310038,1)){
				cm.gainItem(4310038, -1);
                                cm.gainItem(2044603, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ����󹥻��سɾ�");
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
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310038,1)){
				cm.gainItem(4310038, -1);
                                cm.gainItem(2044703, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ���ȭ�׹����سɾ�");
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
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310038,1)){
				cm.gainItem(4310038, -1);
                                cm.gainItem(2044908, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ��˶�ǹ�����سɾ�");
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
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310038,1)){
				cm.gainItem(4310038, -1);
                                cm.gainItem(2044303, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ���ǹ�����سɾ�");
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
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310038,1)){
				cm.gainItem(4310038, -1);
                                cm.gainItem(2043303, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ��˶̽������سɾ�");
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
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310038,1)){
				cm.gainItem(4310038, -1);
                                cm.gainItem(2044815, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ���ָ�ڹ����سɾ�");
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
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310038,1)){
				cm.gainItem(4310038, -1);
                                cm.gainItem(2043003, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ��˵��ֽ������سɾ�");
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
}
 } else if (selection == 11) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310038,1)){
                                cm.gainItem(4310038, -1);
                                cm.gainItem(2040807, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ������׹����سɾ�");
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
cm.sendSimple (textz);  
 } else if (selection == 10) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310038,1)){
				cm.gainItem(4310038, -1);
                                cm.gainItem(2043803, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ��˳��ȹ����سɾ�");
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
}2044403
 } else if (selection == 12) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310038,1)){
				cm.gainItem(4310038, -1);
                                cm.gainItem(2044203, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ���˫�ֶ��������سɾ�");
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();

}
 } else if (selection == 13) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4310038,1)){
				cm.gainItem(4310038, -1);
                                cm.gainItem(2044403, 1);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ���ì�����سɾ�");
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
}
     } 
       }
         }

