


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

            var textz = "\r\n#e��ӭ����#bð�յ��ܻ�#k.ÿ��ÿ����һ�λ�ȡ���Ӧ�Ľ�������������ÿ�ն�����#l\r\n\r\n";

            textz += "#L100##e#d��һ��#v4000019#100��#b(���300��+#v2022468#X10).\r\n\r\n"//3
            textz += "#L101##e#d�ڶ���#v4000005#100��#b(���600��+#v2022468#X10).\r\n\r\n"//3
            textz += "#L102##e#d������#v4000007#100��#b(���900��+#v2022468#X10).\r\n\r\n"//3
            textz += "#L103##e#d������#v4000142#100��#b(���1500��+#v2022468#X10).\r\n\r\n"//3
            textz += "#L104##e#d������#v4000160#100��#b(���2000��+#v2022468#X10).\r\n\r\n"//3
            textz += "#L105##e#d������#v4000180#100��#b(���3000��+#v2022468#X10+#v2340000#X5).\r\n\r\n"//3
            textz += "#L106##e#d������#v4000274#100��#b(���4000��+#v2022468#X10+#v4000464#X5).\r\n\r\n"//3
            textz += "#L107##e#d�ڰ���#v4000407#30��#b(���5000��+#v2022468#X30+#v2614015#X5).\r\n\r\n"//3
            textz += "#L108##e#d�ھ���#v4000402#30��#b(���1E��+#v2022468#X40+#v2614015#X5).\r\n\r\n"//3
            textz += "#L109##e#d��ʮ��#v4000406#30��#b(���2E#v2022468#X50#v2614015#X10#v4000464#X5.\r\n\r\n"//3

            //textz += "#d#L5#�ռ�#v4000161##b#z4000161##r 100 #d���ɶһ�#r#v4032226#10ֻ\r\n";

            //textz += "#d#L6#�ռ�#v4000052##b#z4000052##r 100 #d���ɶһ�#r#v4032226#10ֻ\r\n";

            //textz += "#d#L7#�ռ�#v4000190##b#z4000190##r 100 #d���ɶһ�#r#v4032226#10ֻ\r\n";

            //textz += "#d#L8#�ռ�#v4001085##b#z4001085##r 1 #d��\r\n  �ɶһ�#r1000��#d��#l\r\n";

            //textz += "#d#L9#�ռ�#v4001084##b#z4001084##r 1 #d��\r\n  �ɶһ�#r1000��#d��#l\r\n";

            //textz += "#d#L10#�ռ�#v4001083##b#z4001083##r 1 #d��\r\n  �ɶһ�#r2000��#d��#l\r\n";
            cm.sendSimple(textz);


        
                }
            }
        }
    }
}