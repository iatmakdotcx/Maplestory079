/*
 ����
 */





var Icon = Array(
    Array("����", "#fEtc/ChatEmoticon/expression/1/0#"),
    Array("����", "#fEffect/CharacterEff/1112960/0/1#"),
    Array("�ǿ�", "#fUI/GuildMark/BackGround/00001013/16#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009000/15#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009001/1#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009002/4#"),
    Array("�ʹ�", "#fUI/GuildMark/Mark/Etc/00009004/3#"),
    Array("���", "#fUI/GuildMark/Mark/Etc/00009020/1#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009023/11#"),
    Array("ˮ��", "#fEffect/BasicEff/MainNotice/Gamsper/Notify/4#"),
    Array("����", "#fEffect/BasicEff/MainNotice/BlockBuster/Default/3#"),
    Array("����", "#fEffect/CharacterEff/1112905/0/0#"),
    Array("�ƶ�", "#fEffect/ItemEff/1102877/effect/default/1#"),
    Array("���", "#fEffect/ItemEff/1102874/effect/ladder/0#"),
    Array("��ʸ", "#fEffect/ItemEff/1112003/0/2#"),
    Array("��Ѽ", "#fEffect/ItemEff/1004122/effect/default/8#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009023/10#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009020/2#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009020/3#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009020/4#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009020/5#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009020/6#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009020/7#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009020/8#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009020/9#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009020/10#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009020/11#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009020/12#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009020/13#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009020/14#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009020/15#"),
    Array("����", "#fUI/GuildMark/Mark/Etc/00009020/16#"),
    Array("����", "#fUI/UIWindow2.img/Quest/quest_info/summary_icon/startcondition#"),
    Array("�ŷ�", "#fUI/GuildMark/BackGround/00001003/5#"),
    Array("�ŷ�", "#fUI/GuildMark/BackGround/00001003/12#"),
    Array("��ʯ", "#fUI/NameTag/medal/556/w#"),
    Array("��ʯ", "#fUI/NameTag/medal/556/c#"),
    Array("��ʯ", "#fUI/NameTag/medal/556/e#"),
    Array("����", "#fUI/piggyBarMinigame/crunch/5#"),
    Array("����", "#fUI/piggyBarMinigame/crunch/1#"),
    Array("Ů��", "#fUI/RunnerGame/RunnerGameUI/Effect/ItemEffect_Protect1/3#"),
    Array("Ĵָ", "#fUI/NameTag/medal/10/w#"),
    Array("Ĵָ", "#fUI/NameTag/medal/10/c#"),
    Array("Ĵָ", "#fUI/NameTag/medal/10/e#"),
    Array("�ɹ�", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/dear/7#"),
    Array("ʧ��", "#fUI/UIWindowJP/inputDirectionBattleTrigger/input/0/fail/7#"),
    Array("����", "#fUI/UIWindowGL/FeedbackSystem/Star#"),
    Array("����", "#fEffect/CharacterEff/1003393/1/0#"),
    Array("����", "#fEffect/CharacterEff/1050334/2/0#"),
    Array("����", "#fEffect/CharacterEff/1003393/0/0#"),
    Array("����", "#fEffect/CharacterEff/moveRandomSprayEff/eunwol_seal/effect/0/2#"),
    Array("����", "#fEffect/CharacterEff/1051294/1/0#"),
    Array("����", "#fEffect/CharacterEff/1051296/1/0#"),
    Array("��", "#fUI/NameTag/medal/74/w#"),
    Array("��", "#fUI/NameTag/medal/74/c#"),
    Array("��", "#fUI/NameTag/medal/74/e#"),
    Array("����", "#fUI/NameTag/medal/758/w#"),
    Array("����", "#fUI/NameTag/medal/758/c#"),
    Array("����", "#fUI/NameTag/medal/758/e#"),
    Array("����", "#fUI/NameTag/124/w#"),
    Array("����", "#fUI/NameTag/124/c#"),
    Array("����", "#fUI/NameTag/124/e#"),
    Array("ñ��", "#fUI/NameTag/nick/312/w#"),
    Array("ñ��", "#fUI/NameTag/nick/312/c#"),
    Array("ñ��", "#fUI/NameTag/nick/312/e#"),
    Array("ʥ��", "#fUI/NameTag/medal/728/w#"),
    Array("ʥ��", "#fUI/NameTag/medal/728/c#"),
    Array("ʥ��", "#fUI/NameTag/medal/728/e#"),
    Array("����", "#fUI/UIWindowPL/DuoEvent/Maximum/DuoInfo/icon/GoodF/0#"),
    Array("����", "#fUI/NameTag/medal/468/w#"),
    Array("����", "#fUI/NameTag/medal/468/c#"),
    Array("����", "#fUI/NameTag/medal/468/e#"),
    Array("ȷ��", "#fUI/CashShop.img/CSCoupon/BtOK/normal/0#"),
    Array("����", "#fEffect/ItemEff/1004738/effect/ladder/0#"),
    Array("����", "#fEffect/ItemEff/1004738/effect/default/7#")
    );
var status = 0;
//���Ƶȼ�
var minLevel = 230; //��͵ȼ�
var maxLevel = 250;//��ߵȼ�
var channel = 0; //���ÿ���ִ�е�Ƶ��

//��������
var minPlayers = 1;
var maxPlayers = 6;

//�������ȼ�����
var moblevel = 255;

//�������� ������true �رա�false
var open = true;

//���log��¼
var PQ = '·����';
//��ʼ��ͼ
var startmap = 101050000;
//�����ļ�����
var eventname = "CareLuxd";


//����ÿ�մ���
var maxenter = 1;

var txt;
function start() {
    status = -1;
    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (status >= 1 && mode == 0) {
        cm.sendOk("���Ѱ����Ӱ��ȼ���O���Ͽ�����������ս�������ɡ�");
        cm.dispose();
        return;
    }
    if (mode == 1)
        status++;
    else
        status--;

    if (status == 0) {
        if (cm.getPlayer().getClient().getChannel() == channel || channel == 0) {
            var pqtry = maxenter - cm.getPQLog(PQ);
            txt = "\t\t�� #b " + Icon[73][1] + " #r#e #fs16#�������#fs12# #n#b " + Icon[74][1] + " #k\r\n\r\n";
            txt += Icon[41][1];
            for (var i = 0; i <= 59; i++) {
                txt += Icon[42][1];
            };
            txt += Icon[43][1] + "\r\n\r\n";

            txt += "��" + Icon[68][1] + "��#b�Ƽ��ȼ� #r230 - 250#b�����Ƽ���Ա #r 3 - 6���� " + Icon[68][1] + "#k\r\n\r\n";
            txt += "��" + Icon[68][1] + "��#b�ѽ�����ͨģʽ [ #r" + cm.getPQLog(PQ) + "#b ] �غϡ�ʣ�� [ #r" + pqtry + "#b ] �غ�#k\r\n";
            txt += "��������������  #L1#" + Icon[15][1] + " #d��ʼ��ս " + Icon[15][1] + "#l#k\r\n\r\n\r\n";

            txt += Icon[41][1];
            for (var i = 0; i <= 59; i++) {
                txt += Icon[42][1];
            };
            txt += Icon[43][1] + "\r\n";
            cm.sendSimpleS(txt, 2);
        } else {
            cm.sendOk("��ǰ����ֻ����1Ƶ�����С�");
            cm.dispose();
        }

    } else if (status == 1) {
        if (selection == 1) {
            if (cm.getParty() == null) { //�ж����
                cm.sendOk("��û�д������,�޷��볡��");
                cm.dispose();
            } else if (!cm.isLeader()) { // �ж���Ӷӳ�
                cm.sendOk("�������ŶӵĶӳ����ҶԻ���");
                cm.dispose();
            } else if (cm.getPQLog(PQ) >= maxenter) {
                cm.sendOk("�������ս�����Ѿ�������,������������!");
                cm.dispose();
            } else if (!cm.allMembersHere()) {
                cm.sendOk("�����Ӳ��ֳ�Ա���ڵ�ǰ��ͼ,���ټ����ǹ������ڳ��ԡ�"); //�ж���ӳ�Ա�Ƿ���һ�ŵ�ͼ..
                cm.dispose();
            } else {
                var party = cm.getParty().getMembers();
                var mapId = cm.getMapId();
                var next = true;
                var levelValid = 0;
                var inMap = 0;

                var it = party.iterator();
                while (it.hasNext()) {
                    var cPlayer = it.next();
                    if (cPlayer.getLevel() >= minLevel && cPlayer.getLevel() <= maxLevel) {
                        levelValid += 1;
                    } else {
                        //cm.sendOk("��ӳ�Ա " + minPlayers + " ������ " + maxPlayers + "�� ���� ���г�Ա�ȼ� "+ minLevel +" ���� "+ maxLevel +" ���²ſ����볡��");
                        cm.dispose();
                        next = false;
                    }
                    if (cPlayer.getMapid() == mapId) {
                        inMap += 1;
                    }
                }
                if (party.size() > maxPlayers || inMap < minPlayers) {
                    next = false;
                }
                if (next) {
                    var em = cm.getEventManager(eventname);
                    if (em == null || open == false) {
                        cm.sendSimple("�����ļ�������,����ϵ����Ա��");
                    } else {
                        var prop = em.getProperty("state");
                        if (prop == null || prop.equals("0")) {
                            cm.setPQLog(PQ);
                            em.startInstance(cm.getParty(), cm.getMap(), "+ moblevel +");
                        } else {
                            cm.sendSimple("�Ѿ��ж����ڽ�����,�뻻����Ƶ�����ԡ�");
                        }
                        cm.dispose();
                    }
                } else {
                    cm.sendOk("��ӳ�Ա " + minPlayers + " ������ " + maxPlayers + "�� ���� ���г�Ա�ȼ� " + minLevel + " ���� " + maxLevel + " ���²ſ����볡��");
                    cm.dispose();
                }
            }
        } else if (selection == 2) {
            cm.warp(startmap, 0);
            cm.dispose();
        }
    } else if (mode == 0) {
        cm.dispose();
    }
}
