
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
            text += "#e#d#b�����������[��ǿ����]�Ļ���Ҫ\r\n#v4001226#x5#v4001227#x5#v4001228#x5#v4001229#x5#v4001230#x5 \r\n #v4001126#x9999 ���5000W\r\n�Ѽ��õ����ҾͿ���Ϊ��������.#l\r\n��Ʒ��Դ���������ɫ��������ս糺����BOSS\r\n\r\n"//3
            text += "#L1##r������ǿ������ȫ����120 HP MP 2000��#l\r\n\r\n"//3
            cm.sendSimple(text);
         } else if (selection == 1) {
                      if(!cm.canHold(1012083,1)){
			cm.sendOk("��������ı��������ٿճ�1��λ�ã�");
            cm.dispose();
        } else if(cm.haveItem(4001226,5)&& cm.haveItem(4001227,5)&& cm.haveItem(4001228,5)&& cm.haveItem(4001229,5)&& cm.haveItem(4001230,5)&& cm.haveItem(4001126,9999)&&  cm.getMeso()>=50000000 ){
				cm.gainMeso(-50000000);
                                cm.gainItem(4001226,-5);
                                cm.gainItem(4001227,-5);
                                cm.gainItem(4001228,-5);
                                cm.gainItem(4001229,-5);
                                cm.gainItem(4001230,-5);
				cm.gainItem(4001126, -9999);
			var ii = MapleItemInformationProvider.getInstance();
				var type = ii.getInventoryType(1122076);	
				var toDrop = ii.randomizeStats(ii.getEquipById(1122076)).copy();
				toDrop.setFlag(1)//0����//1��ӡ//2���Խ�+��//3��+����//4���Խ���+����//5��+��//6���Խ���+��+��//7����//8���ɽ���//9�����Խ���+��//10���ɽ���+��//�����Խ���+��+��
				toDrop.setStr(120);//����*
				toDrop.setDex(120);//����
				toDrop.setInt(120);//����
				toDrop.setLuk(120);//����
				toDrop.setWatk(50);//������
				toDrop.setMatk(50);//ħ������
				toDrop.setWdef(0);//�������
				toDrop.setMdef(0);//ħ������
				toDrop.setSpeed(0);//�ƶ��ٶ�
				toDrop.setAcc(0);//����
				toDrop.setAvoid(0);//����
				toDrop.setJump(0);//��Ծ
				toDrop.setHp(2000);//����
				toDrop.setMp(2000);//ħ��
				toDrop.setOwner("");//װ������
				cm.getPlayer().getInventory(type).addItem(toDrop);
				cm.getC().getSession().write(MaplePacketCreator.addInventorySlot(type, toDrop));
				cm.sendOk("������ɣ���鿴������");
Packages.handling.world.World.Broadcast.broadcastMessage(Packages.tools.MaplePacketCreator.serverNotice(12, cm.getClient().getChannel(), "����װ������" + " : " + "[" + cm.getChar().getName() + "]�����˱�����ǿ������������һ��ϲ��/����"));
           cm.dispose();
			}else{
            cm.sendOk("���Ĳ��ϲ��㣡���鱳����");
            cm.dispose();
			}
		}
    }
}


