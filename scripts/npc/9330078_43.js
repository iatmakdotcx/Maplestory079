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

            cm.sendOk("感谢你的光临！");
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
            text += "#e#d制作#v1012057#{75全属性 6000HP/MP}需要#v1012289#x1，#v4001126#x5000，搜集好道具我就可以为您制作了.#l\r\n\r\n"//3
            text += "#L1##r制作【75全属性血装】#l\r\n"//3
            cm.sendSimple(text);
        } else if (selection == 1) {
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("装备栏空余不足1个空格！");
            cm.dispose();
			}else */if(cm.haveItem(4001126,5000)&& cm.haveItem(1012289,1)){
				cm.gainItem(4001126, -5000);
				cm.gainItem(1012289, -1);
				cm.gainItem(1012057,75,75,75,75,6000,6000,20,20,60,60,60,60,60,60);
          			cm.sendOk("恭喜你制作成功！");
           		        cm.dispose();
			}else{
            cm.sendOk("您的材料不足，请确认背包！");
            cm.dispose();
			}
		}
    }
}


