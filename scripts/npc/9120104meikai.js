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
            text += "#e#r  ����������.�Ϳ���᲻���.û����õĸ���.ֻ�й��õĸ���\r\n"
			//text += "#L1##e#d1-50��#r ����:1��#v5072000##k\r\n\r\n"//3
			text += "#L2##e#d1-50��#r    ����:#v5072000# #v5041000# #v5211047##k\r\n\r\n"//3
			text += "#L3##e#d51-100��#r  ����:#v5072000# #v5041000# #v5211047##k\r\n\r\n"//3
			text += "#L4##e#d101-200��#r ����:#v5072000# #v5041000# #v5211047##k\r\n\r\n"//3
			//text += "#L5##e#d50-100��#r ����:3���� 7���� 1��#v4031559# 1��#v4031560##k\r\n\r\n"//3
			//text += "#L6##e#d100��+#r ����:5���� 10���� 1��#v4031559# 1��#v4031560##k\r\n\r\n"//3
			//text += "#L7##e#d100��+#r ����:5���� 10���� 1��#v4031559# 1��#v4031560##k\r\n\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			if(cm.getLevel() >= 1){
			cm.openNpc(9120104, 1);
		}else{
				cm.sendOk("������!����!!");
				cm.dispose();
			}		
        } else if (selection == 2) {
			if(cm.getLevel() >= 1 && cm.getLevel() <= 50){
		cm.openNpc(9120104, 1);
		}else{
				cm.sendOk("��ȼ�δ��1��-50��֮��!!");
				cm.dispose();
			}
		} else if (selection == 3) {
			if(cm.getLevel() >= 50 && cm.getLevel() <= 100){
		cm.openNpc(9120104, 2);
		}else{
				cm.sendOk("��ȼ�δ��51��-100��֮��!!");
				cm.dispose();
			}	
        } else if (selection == 4) {
						if(cm.getLevel() >= 101 && cm.getLevel() <= 200){
		cm.openNpc(9120104, 3);
		}else{			
				cm.sendOk("��ȼ�δ��101��-200��֮��!");
				cm.dispose();
			}
		} else if (selection == 5) {
						if(cm.getLevel() >= 51 && cm.getLevel() <= 100){
		cm.openNpc(9010009, 9);
		}else{			
				cm.sendOk("��ȼ�δ��51��-100��֮��!");
				cm.dispose();
			}	
		} else if (selection == 6) {
						if(cm.getLevel() >= 100 && cm.getLevel() <= 200){
		cm.openNpc(9010009, 7);
		}else{
			
				cm.sendOk("��ȼ�δ�ﵽ100��!");
				cm.dispose();
			}	
		} else if (selection == 7) {
						if(cm.getLevel() >= 100 && cm.getLevel() <= 200){
		cm.openNpc(9010009, 8);
		}else{
			
				cm.sendOk("��ȼ�δ�ﵽ100��!");
				cm.dispose();
			}
	}
    }
}


