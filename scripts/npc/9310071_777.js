
var ca = java.util.Calendar.getInstance();
var year = ca.get(java.util.Calendar.YEAR);
var month = ca.get(java.util.Calendar.MONTH) + 1;
var day = ca.get(java.util.Calendar.DATE);
var hour = ca.get(java.util.Calendar.HOUR_OF_DAY);
var minute = ca.get(java.util.Calendar.MINUTE);
var second = ca.get(java.util.Calendar.SECOND);
var weekday = ca.get(java.util.Calendar.DAY_OF_WEEK);
var ��ͷ = "#fUI/Basic/BtHide3/mouseOver/0#";

function start() {
    status = -1;
	
    action(1, 0, 0)
}

function action(mode, type, selection) {
    if (status <= 0 && mode <= 0) {
        cm.dispose();
        return
    }
    if (mode == 1) {
        status++
    } else {
        status--
    }	
		if (cm.getMapId() == 108010101 ) {
            cm.dispose();
            return;
		 
    } else if (status <= 0) {
        var 
		selStr = "��ӭ���١�#v5211047#˫�����鿨һ����Ҫ6666��ȯ\r\n";
		selStr += "#L0##r��ȯ��ȡ;�����ݵ� ���� ����#l\r\n\r\n"
		selStr += "#L1##r��Ҫ����һ��˫�����鿨#l\r\n\r\n"


		   
	

        cm.sendSimple(selStr)
    } else if (status == 1) {
        switch (selection) {
		 case 1:
			//1
			//2
			//3
			//4
			//5
			/*if(!cm.beibao(1,1)){
            cm.sendOk("װ�������಻��1���ո�");
            cm.dispose();
		 }else */if(cm.getPlayer().getCSPoints(1) >= 6666){
                cm.gainNX(-6666);
                cm.gainItem(5211047,1,1);
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(3, cm.getClient().getChannel(), "���һ�ϵͳ��" + " : " + "[" + cm.getChar().getName() + "]�������һ�ϵͳ�ɹ�������˫�����鿨��"));
				cm.dispose();
			}else{
            cm.sendOk("���ĵ�ȯ����");
            cm.dispose();
			}
         break;
		 case 2:
		cm.openNpc(9310085,0);
        }
    }
}