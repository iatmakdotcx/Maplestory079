

var wui = 0;
var price = 1000000;
var fame = 1
var qty;


function start() {
	status = -1;
	action(1, 0, 0);
}
function action(mode, type, selection) { 
	if (mode == 1)
		status++;
	else 
		cm.dispose();
if (status == 0 && mode == 1) {
cm.sendYesNo("#d����Ҫ���������ҿ��Ը���ӣ�����Ҫ#r100W#dһ���ޣ�һ����๺��100��\r\n��ǰ������ֵ:#r" + cm.getPlayer().getFame() + " #fUI/UIWindow.img/QuestIcon/6/0# ");
}
else if (status == 1 && mode == 1) {
		var prompt = "#b���뻻��������?";
		cm.sendGetNumber(prompt,1,1,100)
}
else if (status == 2 && mode == 1) {
qty = selection;
cm.sendYesNo("#b�㽫����#r"+qty*price+"#b��Ҷһ�#r"+qty+"#b������,��ȷ��Ҫ�һ���");
}
else if (status == 3 && mode == 1) {
if (cm.getMeso() >= price*qty) 
{
	cm.getPlayer().addFame(+fame*qty);
	cm.gainMeso(-price*qty);
	Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(11,cm.getC().getChannel(),"����ֵ����" + " : " + cm.getPlayer().getName() +"��ҳɹ� ����ֵ������"+qty+"��������O(��_��)O~",true).getBytes());
			
	var say = "#b�ɹ��һ� " +qty+ "������?";
	cm.sendOk(say);
	cm.dispose();
	} else {
			cm.sendOk("�Բ������Ҳ���.");
			cm.dispose();
}
}
else
	cm.dispose();
}

