/*
 ��ţð�յ�(079)��Ϸ�����
 ͻ��ʯϵͳ
 */
importPackage(Packages.client.inventory);
importClass(Packages.server.MapleItemInformationProvider);

var status = -1;
var sels;

function start() {
	status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 1) {
        status++;
    } else if (mode == 0) {
        status--;
    } else {
        cm.�Ի�����();
        return;
    }
    if (status == 0) {
		var type = MapleInventoryType.EQUIP;
		var item = cm.getInventory(1).getItem(1);
		if(MapleItemInformationProvider.getInstance().isCash(item.getItemId())){
			cm.sendOk("�����ֽ�װ��������ʹ�ã�");
			cm.�Ի�����();
			return;
		}
		
		if(item.��������(type)){
			cm.getPlayer().forceReAddItem_Flag(item, type);
			cm.sendSimple("��ȡ�ɹ���");
			cm.gainItem(2614022, -1);
			cm.�Ի�����();
			return;
		}else{
			cm.sendSimple("��ȡʧ�ܣ�����װ���Ƿ����Ҫ��");
			cm.�Ի�����();
			return;
		}

    } else {
        cm.�Ի�����();
    }
}