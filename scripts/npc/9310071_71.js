
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
textz += " \t\t #e#d��ӭ����#rð�յ�#k#r�һ���Ҫ#v4310129#4��\r\n            [��������װ��ȫ����Ϊ10]   \r\n"              
textz += "#b#L1##v1002720#";
textz += "#L2##v1002752#";
textz += "#L3##v1002714#";
textz += "#L4##v1003847#";
textz += "#L5##v1002870#\r\n";
textz += "#L6##v1002884#";
textz += "#L7##v1002942#";
textz += "#L8##v1002973#";
textz += "#L9##v1002225#";
textz += "#L10##v1002548#\r\n";
textz += "#L11##v1002549#";
textz += "#L12##v1003860#";
textz += "#L13##v1004414#";
textz += "#L14##v1004756#";
textz += "#L15##v1004597#";
cm.sendSimple (textz);    
 } else if (selection == 1) {
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1002720,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ��δ��֮�Ǹ����ɹ��һ����ſ����Ե�װ��"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1002752,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ��δ��֮�Ǹ����ɹ��һ����ſ����Ե�װ��"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1002714,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ��δ��֮�Ǹ����ɹ��һ����ſ����Ե�װ��"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1003847,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ��δ��֮�Ǹ����ɹ��һ����ſ����Ե�װ��"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1002870,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ��δ��֮�Ǹ����ɹ��һ����ſ����Ե�װ��"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1002884,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ��δ��֮�Ǹ����ɹ��һ����ſ����Ե�װ��"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1002942,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ��δ��֮�Ǹ����ɹ��һ����ſ����Ե�װ��"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1002973,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ��δ��֮�Ǹ����ɹ��һ����ſ����Ե�װ��"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1002225,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ��δ��֮�Ǹ����ɹ��һ����ſ����Ե�װ��"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1002548,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ��δ��֮�Ǹ����ɹ��һ����ſ����Ե�װ��"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1002549,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ��δ��֮�Ǹ����ɹ��һ����ſ����Ե�װ��"));
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
 } else if (selection == 12) {
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1003860,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ��δ��֮�Ǹ����ɹ��һ����ſ����Ե�װ��"));
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1004414,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ��δ��֮�Ǹ����ɹ��һ����ſ����Ե�װ��"));
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
 } else if (selection == 14) {
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1004756,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ��δ��֮�Ǹ����ɹ��һ����ſ����Ե�װ��"));
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
 } else if (selection == 15) {
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
			}else */if(cm.haveItem(4310129,4)){
                                cm.gainItem(4310129, -4);
                                cm.gainItem(1004597,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ��δ��֮�Ǹ����ɹ��һ����ſ����Ե�װ��"));
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
     } 
       }
         }

