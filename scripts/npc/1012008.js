// Credits to Moogra
var status = 0;
var map = Array(240010501);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1)
            status++;
        else
            status--;
        if (status == 0) {
            cm.sendSimple("你好, 我是GM的妹妹小贱,我可以转换(金钱)和(物品). 你想用5E冒险币交换一个 #b#v4000313##k吗? 或者你想用一个 #b#v4000313##k 交换5E冒险币?\r\n#L1# 我想用一个#b#v4000313##k 交换5E冒险币!#l\r\n\#L2# 我想用5亿冒险币交换一个#b#v4000313##k!#l");
        } else if (status == 1) {
            if (selection == 1) {
                if(cm.haveItem(4000313)) {
                    cm.gainMeso(500000000);
                    cm.gainItem(4000313,-1); 
                    cm.sendOk("交换成功，给你5E!");
                } else {
                    cm.sendOk("对不起，你没有 #b#v4000313##k!");
                }
                cm.dispose();
            } else if (status == 2) {
            } else if (selection == 2) {
                if(cm.getMeso() >= 500000000) {
                    cm.gainMeso(-500000000);
                    cm.gainItem(4000313,1);
                    cm.sendOk("交换成功!小贱欢迎您下次再来");
                } else {
                    cm.sendOk("对不起，你没有足够的冒险币!");
                }
                cm.dispose();
            }
            else{
                cm.sendOk("All right. Come back later");
            }
        }
    }
}
