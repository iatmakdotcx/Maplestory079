
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
textz += "#L1#50��#v4001465#�һ�50��#v4033248##L2#50��#v4033248#�һ�50��#v4001465#\r\n";
textz += "#L3#2��#v4310029#�һ�3��#v2340000#  #L4#2��#v4310029#�һ�3��#v2049100#\r\n";
textz += "#L5#10��#v4310029#�һ�15��#v2340000##L6#10��#v4310029#�һ�15��#v2049100#\r\n";
cm.sendSimple (textz);   
 } else if (selection == 1) {
        	        //1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,0)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();

			}else */if(cm.haveItem(4001465,50)){
                                cm.gainItem(4001465, -50);
                                cm.gainItem(4033248,50);
cm.sendOk("��ϲ�㻻���ɹ���");
			   				        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]ʹ��50�����ı�ʯ�һ�50����ɫ��Ҷ�ɹ���");		
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
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4033248,50)){
				cm.gainItem(4033248, -50);
                                cm.gainItem(4001465,50);
cm.sendOk("��ϲ�㻻���ɹ���");
			   				        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]ʹ��50����ɫ��Ҷ�һ�50�����ı�ʯ�ɹ���");
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
			}else */if(cm.haveItem(4310029,2)){
				cm.gainItem(4310029, -2);
                                cm.gainItem(2340000,3);
cm.sendOk("��ϲ�㻻���ɹ���");
			   				        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]ʹ��2������ͻ�ƱҶһ�3��ף������ɹ���");
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
			}else */if(cm.haveItem(4310029,2)){
				cm.gainItem(4310029, -2);
                                cm.gainItem(2049100,3);
cm.sendOk("��ϲ�㻻���ɹ���");
			   				        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]ʹ��2������ͻ�ƱҶһ�3���������ɹ���");
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
			}else */if(cm.haveItem(4310029,10)){
				cm.gainItem(4310029, -10);
                                cm.gainItem(2340000,15);
cm.sendOk("��ϲ�㻻���ɹ���");
			   				        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]ʹ��10������ͻ�ƱҶһ�15��ף������ɹ���");
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
}

cm.sendSimple (textz);    
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
			}else */if(cm.haveItem(4310029,10)){
				cm.gainItem(4310029, -10);
                                cm.gainItem(2049100,15);
cm.sendOk("��ϲ�㻻���ɹ���");
			   				        cm.worldMessage(6,"���һ�ϵͳ��["+cm.getName()+"]ʹ��10������ͻ�ƱҶһ�15���������ɹ���");
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
			/*if(!cm.beibao(1,3)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("���������಻��2���ո�");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("�ֽ������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
				cm.gainItem(4310027, -1);
                                cm.gainItem(1102386,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "���һ�ϵͳ��" + " : " + "[" + cm.getChar().getName() + "]�ɹ��һ��˿��ų��"));
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
			/*if(!cm.beibao(1,3)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("���������಻��2���ո�");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("�ֽ������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
				cm.gainItem(4310027, -1);
                                cm.gainItem(1102385,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11, cm.getClient().getChannel(), "���һ�ϵͳ��" + " : " + "[" + cm.getChar().getName() + "]�ɹ��һ��˿��ų��"));
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
			/*if(!cm.beibao(1,3)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("���������಻��2���ո�");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("�ֽ������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
				cm.gainItem(4310027, -1);
                                cm.gainItem(1102659,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
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
			/*if(!cm.beibao(1,3)){
            cm.sendOk("װ�������಻��3���ո�");
            cm.dispose();
			}else if(!cm.beibao(2,2)){
            cm.sendOk("���������಻��2���ո�");
            cm.dispose();
			}else if(!cm.beibao(3,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(4,1)){
            cm.sendOk("���������಻��1���ո�");
            cm.dispose();
			}else if(!cm.beibao(5,1)){
            cm.sendOk("�ֽ������಻��1���ո�");
            cm.dispose();
			}else */if(cm.haveItem(4310027,1)){
				cm.gainItem(4310027, -1);
                                cm.gainItem(1102659,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ��һ��˺�ɫ���ȣ�");
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
}
     } 
       }
         }

