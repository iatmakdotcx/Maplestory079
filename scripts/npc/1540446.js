/*  
 *  
 *  ��������BOSSͨ�ýű�
 *  
 */

//var PQLog = ["BossFairyQueen"];//�����ļ�����
var maxenter = [3];//�Δ�����
var status = -1;
var minPlayers = 1;//��������˔�
var maxPlayers = 1;//��������˔�
var minLevel = [160];//��͵ȼ�����
var maxLevel = [255];//��ߵȼ�����
var PQLog = ["˹��"];//��¼�Δ�����
var moblevel = 255;//�������ȼ�����
var startmap = 350060000;//��ʼ�ĵ؈D
var open = true;//�������P ������true �P�ա�false
var chs;


function start() {
    if (cm.getMapId() == startmap) {
        var text = "";
        for (var i = 0; i < PQLog.length; i++) {
            text += "\r\n#b#L" + i + "#��ս" + PQLog[i] + "#l#k         ";
        }
        cm.sendSimple("��Boss - " + PQLog[0] + "��#n\r\n\r\n#b#h0# \n\#k��F����Ͷ���һ����ս�₀BOSS������?\r\n" + text);
    } else {
        cm.sendYesNo("��Boss - " + PQLog[0] + "��#n\r\n��F�ڴ_��,���@�e��ȥ?\r\n");
    }

}
function action(mode, type, selection) {
    if (status >= 1 && mode == 0) {
        cm.sendOk("���Ѱ����Ӱ��ȼ���O���Ͽ������Ӂ���ս�������ɡ�");
        cm.dispose();
        return;
    }
    mode == 1 ? status++ : status--;

    if (cm.getMapId() == startmap) {
        if (status == 0) {
            if  (cm.getParty() == null) {
                cm.sendOk("δ��ӡ�");
                cm.dispose();
                return;
            }
            chs = selection;
            var rwpz = "��Boss - " + PQLog[selection] + "��#n\r\n#k\r\n#r";
            rwpz += "#d       ��ǰ����ս˹��[#e#g"+cm.getBossLog("˹��") + "#n#k/#r#e3#n#k]��#n#k\r\n";
            rwpz += "\r\n#b�Ƽ��˔���" + minPlayers + " - " + maxPlayers + "#n    �Ƽ��ȼ���" + minLevel[selection] + " - " + maxLevel[selection] + "#n#k";
            rwpz += "\r\n#d��ǰ���M�У�#e#r" +cm.getBossLog("˹��")  + " #n#k��\r\n";
            cm.sendYesNo(rwpz + "#r#h0# #n#k\n\#k�Ƿ�F�ھ��M�룿#n");
        } else if (status == 1) {
            if (cm.getParty() == null) { //�ж����
                cm.sendYesNo("�㲢�]����ӣ�Ո�����齨һ�������ځ�ɡ�");
                cm.dispose();
                return;
            } else if (!cm.isLeader()) { // �ж������L
                cm.sendOk("Ո׌�ゃ����L���Ҍ�Ԓ��");
                cm.dispose();
                return;
            } else if (cm.getPlayer().getLevel() < 160) {//�ж���ҽ�ɫ�ȼ�
                cm.sendNext("��ӳ�Ա�ȼ� " + 160 + " ���� " + 255 + " ���²ſ����볡��");
                cm.dispose();
                return;
            } else if ( cm.getBossLog("˹��") >= 3) {
                cm.sendOk("����,�㵱����ս����������"+ maxenter +"�Σ�");
                cm.dispose();
                return;
            } else if (!cm.allMembersHere()) {
                cm.sendOk("�����Ӳ��ֳ�Ա���ڵ�ǰ�؈D,Ո�ټ������^�����ڳ��ԡ�"); //�ж���ӳ�Ա�Ƿ���һ���؈D..
                cm.dispose();
                return;
            } 
            else {
                      if (cm.getPlayerCount(350060160) <= 0 && cm.getPlayerCount(350060160) <= 0 && cm.getPlayerCount(350060160) <= 0 && cm.getPlayerCount(350060160) <= 0 && cm.getPlayerCount(350060160) <= 0) {
                            cm.warpParty(350060160);
                            cm.getMap(350060160).resetFully();
                            cm.spawnMob(8240097, -2, -16);
                            cm.getPlayer().setBossLog("˹��");
                            //cm.����(2,"���ռ�BOSS������" + cm.getChar().getName() + "���������Ķ��麷��η����ȥ˹����");
                    } else {
                        cm.sendOk("�ѽ��ж������M����,Ո�Q����Ƶ�����ԡ�");
                    }
                }
            cm.dispose();
        } else {
            cm.dispose();
        }
    } else {
        if (status == 0) {
            cm.warp(startmap, 0);
        }
    cm.dispose();
    }
}
