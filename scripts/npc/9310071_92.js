
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
           
textz += "#b#L1##v3010086#��Ҫ5��#v3990006#";
textz += "#b#L2##v3010098#��Ҫ5��#v3990006#\r\n";
textz += "#b#L7##v3010116#��Ҫ5��#v3990006#";
textz += "#b#L8##v3010131#��Ҫ5��#v3990006#\r\n";
textz += "#b#L3##v3010102#��Ҫ2��#v3990006#";
textz += "#b#L4##v3010103#��Ҫ2��#v3990006#\r\n";
textz += "#b#L5##v3010104#��Ҫ2��#v3990006#";
textz += "#b#L6##v3010110#��Ҫ2��#v3990006#\r\n";

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
			}else */if(cm.haveItem(3990006,5)){
                                cm.gainItem(3990006, -5);
                                cm.gainItem(3010086,1);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ����ʿ�Ÿ����ɹ��һ����ſ����ӣ�"));
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
			}else */if(cm.haveItem(3990006,5)){
                                cm.gainItem(3990006, -5);
                                cm.gainItem(3010098,1);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ����ʿ�Ÿ����ɹ��һ����ſ����ӣ�"));
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
			}else */if(cm.haveItem(3990006,2)){
                                cm.gainItem(3990006, -2);
                                cm.gainItem(3010102,1);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ����ʿ�Ÿ����ɹ��һ����ſ����ӣ�"));
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
			}else */if(cm.haveItem(3990006,2)){
                                cm.gainItem(3990006, -2);
                                cm.gainItem(3010103,1);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ����ʿ�Ÿ����ɹ��һ����ſ����ӣ�"));
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
			}else */if(cm.haveItem(3990006,2)){
                                cm.gainItem(3990006, -2);
                                cm.gainItem(3010104,1);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ����ʿ�Ÿ����ɹ��һ����ſ����ӣ�"));
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
			}else */if(cm.haveItem(3990006,2)){
                                cm.gainItem(3990006, -2);
                                cm.gainItem(3010110,1);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ����ʿ�Ÿ����ɹ��һ����ſ����ӣ�"));
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
			}else */if(cm.haveItem(3990006,5)){
                                cm.gainItem(3990006, -5);
                                cm.gainItem(3010116,1);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ����ʿ�Ÿ����ɹ��һ����ſ����ӣ�"));
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
			}else */if(cm.haveItem(3990006,5)){
                                cm.gainItem(3990006, -5);
                                cm.gainItem(3010131,1);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ����ʿ�Ÿ����ɹ��һ����ſ����ӣ�"));
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
			}else */if(cm.haveItem(3990006,5)){
                                cm.gainItem(3990006, -5);
                                cm.gainItem(3010086,1);
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
			}else */if(cm.haveItem(3990006,5)){
                                cm.gainItem(3990006, -5);
                                cm.gainItem(3010086);
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

