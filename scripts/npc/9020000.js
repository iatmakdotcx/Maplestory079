/*
Lakelis - Victoria Road: Kerning City (103000000)
 **/

var status = -1;
var minMember = 1;
var maxMember = 7;
var �������� = 10;
var ����Ԥ�� = [

	[4031997, 1, 100],
	[2022468, 1, 100]
];


var eventMaps = Array(103000800, 103000801, 103000802, 103000803, 103000804, 103000805);

function start() {
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.dispose();
			return;
		}
		status--;
	}
	cm.removeAll(4001007);
	cm.removeAll(4001008);
	if (status == 0) {
		var �ı���Ϣ = "";
		�ı���Ϣ += "        #b���x1#k\r\n"
        for (var i = 0; i < ����Ԥ��.length; i++) {
            �ı���Ϣ += "   " + cm.��ʾ��Ʒ(����Ԥ��[i][0]) + "x" + ����Ԥ��[i][1] +" " + ����Ԥ��[i][2] +" % #k\r\n";
        }
		cm.sendOk("<��Ӹ���: ��һ��ͬ��>#n \r\n�㼯��ҵ��������ǻ�,��ǿ���#b��ˮ����#k��ܰ�!����ȡͨ��֤�����²���ȷ�𰸵�λ�á�����Ŀ����ȷ�ش����ﵽһ�����Ļ�,��ˮ�����ͻ�ǳ�!\r\nͨ�ػ��:	" + �ı���Ϣ + " \r\n#r���������" + cm.�ж�ÿ��ֵ("��������") + "��\r\n#b#L0#��ս���� ");
	} else if (status == 1) {
		if (cm.getParty() == null) { // No Party
			cm.sendOk("�봴�����飡");
		} else if (!cm.isLeader()) { // Not Party Leader
			cm.sendOk("�����Ķӳ�������!");
		} else {
			// Check if all party members are within Levels 21-30
			var party = cm.getParty().getMembers();
			var mapId = cm.getMapId();
			var next = true;
			var levelValid = 0;
			var inMap = 0;

			var it = party.iterator();
			while (it.hasNext()) {
				var cPlayer = it.next();
				if ((cPlayer.getLevel() >= 20 && cPlayer.getLevel() <= 256) || cPlayer.getJobId() == 900) {
					levelValid += 1;
				} else {
					next = false;
				}
				if (cPlayer.getMapid() == mapId) {
					inMap += (cPlayer.getJobId() == 900 ? 4 : 1);
				}
			}
			if (party.size() >= maxMember || inMap < minMember) {
				next = false;
			}
			// if(cm.�ж��Ŷ�ÿ��("��������", ��������) == 0){
				// cm.sendOk("��Ǹ��������Ķ����������Ѿ����� " + �������� + " ���ˣ�");
				// cm.dispose();
				// return;
			// }
			if (next) {
				var em = cm.getEventManager("KerningPQ");
				if (em == null) {
					cm.sendOk("�Ҳ����ű�������ϵGM��");
					cm.dispose();
					return;
				} else {
					var prop = em.getProperty("state");
					var chrInMap = false;
					for(var i = 0; i < eventMaps.length; i++){
						if(cm.getPlayer().isGM()){
							cm.playerMessage(6, "��ͼ " + eventMaps[i] + "  ���������" + cm.getC().getChannelServer().getMapFactory().getMap(eventMaps[i]).getCharactersSize());//����
						}
						if(cm.getC().getChannelServer().getMapFactory().getMap(eventMaps[i]).getCharactersSize() > 0){
							chrInMap = true;
							break;
						}
					}
					if (prop == null || prop.equals("0") || !chrInMap) {
						em.startInstance(cm.getParty(), cm.getMap());
					} else {
						cm.sendOk("�Ѿ��ж�����������ս�ˡ�");
						cm.dispose();
						return;
					}
					cm.removeAll(4001008);
					cm.removeAll(4001007);
				}
			} else {
				cm.sendOk("��Ķ�����Ҫ����,�ȼ�������21-255֮��,��ȷ����Ķ�����û�ж�������,���������Ѿ�������!");
			}
		}
		cm.dispose();
	}
}
