
var MapleItemInformationProvider = Java.type('server.MapleItemInformationProvider');
var MaplePacketCreator = Java.type('tools.MaplePacketCreator');

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

    action(1, 0, 0);
}
function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    }
    else {
        if (status >= 0 && mode == 0) {

            cm.sendOk("��л��Ĺ��٣�");
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        }
        else {
            status--;
        }
        if (status == 0) {
            var tex2 = "";
            var text = "";
            for (i = 0; i < 10; i++) {
                text += "";
            }
			//��ʾ��ƷIDͼƬ�õĴ�����  #v����д��ID#
            text += "#e#d#b�����������#v1122119#�Ļ���Ҫ#v4000002#200��#v4000003#200��\r\n\r\n"//3
            text += "#L1##r��������������ȫ����15��#l\r\n\r\n"//3
            cm.sendSimple(text);
         } else if (selection == 1) {
                      if(!cm.canHold(1012083,1)){
			cm.sendOk("��������ı��������ٿճ�1��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4000002,200)&&cm.haveItem(4000003,200) ){
				cm.gainItem(4000002, -200);
				cm.gainItem(4000003, -200);
				var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1122119);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1122119)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setStr(15);//����*
				toDrop.setDex(15);//����
				toDrop.setInt(15);//����
				toDrop.setLuk(15);//����
				toDrop.setWatk(5);//������
				toDrop.setMatk(5);//ħ������
				toDrop.setWdef(50);//�������
				toDrop.setMdef(50);//ħ������
				toDrop.setSpeed(0);//�ƶ��ٶ�
				toDrop.setAcc(0);//����
				toDrop.setAvoid(0);//����
				toDrop.setJump(0);//��Ծ
				toDrop.setHp(0);//����
				toDrop.setMp(0);//ħ��
				toDrop.setOwner("��ʹð�յ�");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("������ɣ���鿴������");
				cm.worldMessage(6, "��ϲ���[" + cm.getPlayer().getName() + "]�ɹ�������[��������] ��ȡ;�������������");
				cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡��Ҫ\r\n#v4000002#x200#v4000003#x200");
            cm.dispose();
			}
        }
    }
}
