/**
-- Odin JavaScript --------------------------------------------------------------------------------
	Master Sergeant Fox <Orbis Exchange Quest> - Orbis(200000000)
-- By ---------------------------------------------------------------------------------------------
	Sean360
-- Version Info -----------------------------------------------------------------------------------
	1.1 - Official Text [Information]
	1.0 - First Version by Sean360
---------------------------------------------------------------------------------------------------
**/

var status = 0;
var eQuestChoices = new Array (4000073,4000059,4000060,4000061,4000058,
    4000062,4000048,4000049,4000055,4000056,
    4000051,4000052,4000050,4000057,4000053,
    4000054,4000076,4000078,4000081,4000070,
    4000071,4000072,4000069,4000079,4000080);

var eQuestPrizes = new Array();

eQuestPrizes[0] = new Array ([2340000,20],  // Orange Potions
    [2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[1] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[2] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[3] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[4] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[5] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[6] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[7] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[8] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[9] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[10] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[11] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[12] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[13] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[14] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[15] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[16] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[17] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[18] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[19] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[20] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[21] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[22] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[23] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
eQuestPrizes[24] = new Array ([2340000,20],  // Orange Potions
[2000005,200],
    [2460005,5],	// Lemons
    [4310149,10], 	// Blue Potions
    [4000313,100],	// Processed Wood
    [2049124,10],	// Fried Chickens
    [4032125,5]);	// Nearest Town Scroll
var requiredItem  = 0;
var lastSelection = 0;
var prizeItem     = 0;
var prizeQuantity = 0;
var itemSet;

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
var �ȼ� = cm.getPlayer().getLevel();
    if (mode == 0 && (status == 1 || status == 3)) {
	cm.sendNext("��Ҫ��ʱ���������Ұɡ�");
	cm.dispose();
	return;
    } else if (mode == 0 && status == 3) {
	cm.dispose();
    } else if (mode == 0 && status == 4) {
	cm.sendNext("��Ҫ��ʱ���������Ұɡ�");
	cm.dispose();
	return;
    }
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) { // first interaction with NPC
	cm.sendNext("�ҵĹ��������������ռ���Ʒ�������ط����ۣ�����Щ������ø��ӵжԵģ����������ѻ�����õĵ���...�㿴���һ�������#v2000005##v2340000##v2460005##v4000313##v4310149##v2049124##v4032125#�Լ���������ֵ��");
    } else if (status == 1) {
	cm.sendYesNo("��ʽ��׺ܼ򵥣�������õõ�����Ҫ�Ķ�������Ȼ�һ���㲻��ĳ��͡�");
    } else if (status == 2) {
	var eQuestChoice = makeChoices(eQuestChoices);
	cm.sendSimple(eQuestChoice);
    } else if (status == 3){
	lastSelection = selection;
	requiredItem = eQuestChoices[selection];
	cm.sendYesNo("���ҿ���������Ҫ������� #b100�� #t" + requiredItem + "##k ����ȡһЩ�����ǰɣ� ����ǰȷ����ĵ�����λ�Ƿ��㹻�ɣ���");
    }else if (status == 4){
	itemSet = (Math.floor(Math.random() * eQuestPrizes[lastSelection].length));
	reward = eQuestPrizes[lastSelection];
	prizeItem = reward[itemSet][0];
	prizeQuantity = reward[itemSet][1];
	if(!cm.haveItem(requiredItem,100)){
	    cm.sendOk("��... ��ȷ������ #b100�� #t" + requiredItem + "##k? ������붨��������ǲ�������....");
	} else if(!cm.canHold(prizeItem)){
	    cm.sendNext("��ĵ������ƺ����ˣ������һЩ��Ҫ�Ķ����������ҽ���һ��лл��");
	} else {
	    cm.gainItem(requiredItem,-100);
	    cm.gainExp(�ȼ� * 10000);
	    cm.gainItem(prizeItem, prizeQuantity);
	    cm.sendOk("Ϊ��� #b100�� #t"+requiredItem+"##k, �������ҵĽ��� #b"+prizeQuantity+" #t"+prizeItem+"##k. ����ô������ ���Ƿ�ϲ���ҵĽ����أ��� \r\n���ϲ����ӭ�´��������ҽ��ף��һ������������ģ���");
	}
	cm.dispose();
    }
}

function makeChoices(a){
    var result  = "�ã���������Ҫѡ���������еĵ��ߣ���Ȼ��������ջ���ࡣ\r\n";
    for (var x = 0; x< a.length; x++){
	result += " #L" + x + "##v" + a[x] + "#  #t" + a[x] + "##l\r\n";
    }
    return result;
}