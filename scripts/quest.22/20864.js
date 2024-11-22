/* Cygnus revamp
 Noblesse tutorial
 The Path of a Night Walker
 Made by Daenerys
 */

var status = -1;

function start(mode, type, selection) {
    qm.forceStartQuest();
    qm.dispose();
}

function end(mode, type, selection) {
    if (mode == 0) {
        if (status == 0) {
            qm.sendNext("I await your decision...");
            qm.safeDispose();
            return;
        }
        status--;
    } else {
        status++;
    }
    if (status == 0) {
        qm.sendYesNo("Have you made your decision? The decision will be final, so think carefully before deciding what to do. Are you sure you want to become a Night Walker?");
    } else if (status == 1) {
        qm.sendNext("I have just molded your body to make it perfect for a Night Walker. If you wish to become more powerful, use Stat Window (S) to raise the appropriate stats. If you arn't sure what to raise, just click on #bAuto#k.");
        if (qm.getJob() != 1400) {
            qm.gainItem(1472061, 1);
            qm.gainItem(2070015, 800);
            qm.gainItem(2070015, 800);
            qm.gainItem(1142066, 1);
            qm.expandInventory(1, 4);
            qm.expandInventory(4, 4);
            qm.changeJob(1400);
            qm.getPlayer().gainSP(5, 0);
            qm.gainExp(1242);
        }
        qm.completeQuest();
    } else if (status == 2) {
        qm.sendNextPrev("I have also expanded your inventory slot counts for your equipment and etc. inventory. Use those slots wisely and fill them up with items required for Knights to carry.");
    } else if (status == 3) {
        qm.sendNextPrev("I have also given you a hint of #bSP#k, so open the #bSkill Menu#k to acquire new skills. Of course, you can't raise them at all once, and there are some skills out there where you won't be able to acquire them unless you master the basic skills first.");
    } else if (status == 4) {
        qm.sendNextPrev("Unlike your time as a Noblesse, once you become the Night Walker, you will lost a portion of your EXP when you run out of HP, okay?");
    } else if (status == 5) {
        qm.sendNextPrev("Now... I want you to go out there and show the world how the Knights of Cygnus operate.");
        qm.safeDispose();
    }
}