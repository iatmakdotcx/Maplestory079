
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
textz += " \t\t#e#d ��ӭ����#r��ʹð�յ�#k#r�һ���Ҫ#v4310129#4��\r\n            [��������װ��ȫ����Ϊ10]   \r\n"              
textz += "#b#L1#Ѥ������[��������]#v1702155#\r\n";
textz += "#L2#����ѩƬ[��������]#v1702211#\r\n";
textz += "#L3#ʥ��¹[��ǹָ����]#v1702248#\r\n";
textz += "#L4#�ڰ��������׹⽣[��������]#v1702321#\r\n";
textz += "#L5#³���׹⽣[��������]#v1702323#\r\n";
textz += "#L6#ˮ��������[��������]#v1702334#\r\n";
textz += "#L7#׹��ħ���ռ�[��������]#v1702406#\r\n";
textz += "#L8#�ܲ���[��������]#v1702416#\r\n";
textz += "#L9#����õ����ɡ[��������]#v1702417#\r\n";
textz += "#L10#����С���[��������]#v1702491#\r\n";
textz += "#L11#����������Ȧ[δ֪]#v1702686#";
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
                                cm.gainItem(1702155,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
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
                                cm.gainItem(1702211,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
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
                                cm.gainItem(1702248,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
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
                                cm.gainItem(1702321,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
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
                                cm.gainItem(1702323,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
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
                                cm.gainItem(1702334,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
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
                                cm.gainItem(1702406,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
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
                                cm.gainItem(1702416,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
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
                                cm.gainItem(1702417,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
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
                                cm.gainItem(1702491,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
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
                                cm.gainItem(1702686,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
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
                                cm.gainItem(1702155,10,10,10,10,10,10,10,10,10,10,10,10,10,10);
cm.sendOk("��ϲ�㻻���ɹ���");
			   			Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "������������" + " : " + "[" + cm.getChar().getName() + "]ͨ��δ��֮�Ǹ����ɹ��һ����ſ����Ե�װ��"));
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡");
            cm.dispose();
			}
     } 
       }
         }

