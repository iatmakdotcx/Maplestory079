


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

            var textz = "\r\n#e欢迎来到#b冒险岛跑环#k.每人每天跑一次获取相对应的奖励，建议新人每日都做。#l\r\n\r\n";

            textz += "#L100##e#d第一轮#v4000019#100个#b(金币300万+#v2022468#X10).\r\n\r\n"//3
            textz += "#L101##e#d第二轮#v4000005#100个#b(金币600万+#v2022468#X10).\r\n\r\n"//3
            textz += "#L102##e#d第三轮#v4000007#100个#b(金币900万+#v2022468#X10).\r\n\r\n"//3
            textz += "#L103##e#d第四轮#v4000142#100个#b(金币1500万+#v2022468#X10).\r\n\r\n"//3
            textz += "#L104##e#d第五轮#v4000160#100个#b(金币2000万+#v2022468#X10).\r\n\r\n"//3
            textz += "#L105##e#d第六轮#v4000180#100个#b(金币3000万+#v2022468#X10+#v2340000#X5).\r\n\r\n"//3
            textz += "#L106##e#d第七轮#v4000274#100个#b(金币4000万+#v2022468#X10+#v4000464#X5).\r\n\r\n"//3
            textz += "#L107##e#d第八轮#v4000407#30个#b(金币5000万+#v2022468#X30+#v2614015#X5).\r\n\r\n"//3
            textz += "#L108##e#d第九轮#v4000402#30个#b(金币1E万+#v2022468#X40+#v2614015#X5).\r\n\r\n"//3
            textz += "#L109##e#d第十轮#v4000406#30个#b(金币2E#v2022468#X50#v2614015#X10#v4000464#X5.\r\n\r\n"//3

            //textz += "#d#L5#收集#v4000161##b#z4000161##r 100 #d个可兑换#r#v4032226#10只\r\n";

            //textz += "#d#L6#收集#v4000052##b#z4000052##r 100 #d个可兑换#r#v4032226#10只\r\n";

            //textz += "#d#L7#收集#v4000190##b#z4000190##r 100 #d个可兑换#r#v4032226#10只\r\n";

            //textz += "#d#L8#收集#v4001085##b#z4001085##r 1 #d个\r\n  可兑换#r1000点#d卷#l\r\n";

            //textz += "#d#L9#收集#v4001084##b#z4001084##r 1 #d个\r\n  可兑换#r1000点#d卷#l\r\n";

            //textz += "#d#L10#收集#v4001083##b#z4001083##r 1 #d个\r\n  可兑换#r2000点#d卷#l\r\n";
            cm.sendSimple(textz);


        
                }
            }
        }
    }
}
