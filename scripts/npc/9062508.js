/*
SnailMS�ű�������
*/

var ���ܻ��� = "#fSkill/1210.img/skill/12101006/effect/7#";


var minLevel = 120;//��ʿ����͵ȼ�
var ap = 30;//ÿ��Link�����ӵ�apֵ
var count;
var oldChrId = 0;
var oldAp = 0;
function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("�Ի�������");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
		count = cm.��ѯ��ʿ��ְҵ����(minLevel);
		oldChrId = cm.��ѯlink�����ɫ(cm.getC().getAccID());
		var text = "\t\t\t\t\t  #dLinkϵͳ#k\r\n";
		text += "  " + ���ܻ��� + "\t\t" + ���ܻ��� + "\r\n";
		text += "�㵱ǰӵ�� #r" + minLevel + " #k��������ʿ�Ž�ɫ������Ϊ #r" + count + "#k ��\r\n";
		text += "�ɻ�ù��� #b" + count * ap + " #k��APֵ\r\n";
		if(oldChrId != 0){
			oldAp = cm.��ѯlinkAP(cm.getC().getAccID());
			text += "��Link����ɫ #b" + cm.getCharacterNameById(oldChrId) + "#k ���� #b" + oldAp + "#k ��APֵ#k\r\n";
		}
		text += "\t#L1##d[��Ҫ���������]#l\t#L2#[��Ҫ�ջ�������]#l\r\n\r\n";
		text += "#rע�⣺Link��õ������㲻�ܼӵ�HP��MP���棬��Ȼϴ���������мǣ���\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		
		if(selection == 1){
			if(oldChrId == 0){
				if(count == 0){
					cm.sendOk("��û�п��õ�apֵ����");
					cm.dispose();
					return;
				}else if(cm.����Link(cm.getC().getAccID(), cm.getPlayer().getId(), count * ap)){
					cm.��������(count * ap);
					cm.sendOk("��ϲ�㣬����� #b" + count * ap + "#k ������~\r\n");
				}else{
					cm.sendOk("����ԭ�򣬸���Linkʧ�ܡ�");
				}
				cm.dispose();
				return;
			}else{
				cm.sendOk("���Ѿ�����ɫ #r" + cm.getCharacterNameById(oldChrId) + "#k ������Link��!���ȵ�¼�ý�ɫ�ջ�Link��\r\n");
				cm.dispose();
				return;
			}
			
		}else if (selection == 2) {
			if(cm.getPlayer().getId() != oldChrId){
				cm.sendOk("��Ǹ��ֻ�б�������Link�Ľ�ɫ�ſ����ջ�!");
				cm.dispose();
				return;
			}else if(oldAp == 0){
				cm.sendOk("��Ŀǰû�б�����Link�Ľ�ɫ��!ֱ�ӵ��#b[��Ҫ���������]#k�Ϳ����ˡ�");
				cm.dispose();
				return;
			}
			var remainAP = cm.getPlayer().getRemainingAp();
			var takeAp = cm.����Link(cm.getC().getAccID());
			if(takeAp > 0){
				if(remainAP >= takeAp){
					cm.��������(takeAp);
					cm.sendOk("�ѳɹ����չ��� #r" + oldAp + "#k ��APֵ\r\n");
					cm.dispose();
					return;
				}else{
					cm.��������(remainAP);
					takeAp -= remainAP;
					var str = cm.getPlayer().getStat().getStr();
					if(str - 4 >= takeAp){
						cm.getPlayer().getStat().setStr(str - takeAp);
						cm.ˢ��();
						cm.sendOk("�ѳɹ����չ��� #r" + oldAp + " #k��APֵ�������Ĳ���ͨ���۳��Ѽ�����ֵ�����롣\r\n");
						cm.dispose();
						return;
					}else{
						cm.getPlayer().getStat().setStr(4);
						takeAp -= (str - 4);
					}
					
					var dex = cm.getPlayer().getStat().getDex();
					if(dex - 4 >= takeAp){
						cm.getPlayer().getStat().setDex(dex - takeAp);
						cm.ˢ��();
						cm.sendOk("�ѳɹ����չ��� #r" + oldAp + " #k��APֵ�������Ĳ���ͨ���۳��Ѽ�����ֵ�����롣\r\n");
						cm.dispose();
						return;
					}else{
						cm.getPlayer().getStat().setDex(4);
						takeAp -= (dex - 4);
					}
					
					var _int = cm.getPlayer().getStat().getInt();
					if(_int - 4 >= takeAp){
						cm.getPlayer().getStat().setInt(_int - takeAp);
						cm.ˢ��();
						cm.sendOk("�ѳɹ����չ��� #r" + oldAp + " #k��APֵ�������Ĳ���ͨ���۳��Ѽ�����ֵ�����롣\r\n");
						cm.dispose();
						return;
					}else{
						cm.getPlayer().getStat().setInt(4);
						takeAp -= (_int - 4);
					}
					
					var luk = cm.getPlayer().getStat().getLuk();
					if(luk - 4 >= takeAp){
						cm.getPlayer().getStat().setLuk(luk - takeAp);
						cm.ˢ��();
						cm.sendOk("�ѳɹ����չ��� #r" + oldAp + " #k��APֵ�������Ĳ���ͨ���۳��Ѽ�����ֵ�����롣\r\n");
						cm.dispose();
						return;
					}else{
						cm.getPlayer().getStat().setLuk(4);
						takeAp -= (luk - 4);
					}
					
					var HpMpApUsed = cm.getPlayer().getHpMpApUsed();
					if(HpMpApUsed >= takeAp){
						cm.getPlayer().setHpMpApUsed(HpMpApUsed - takeAp);
						cm.ˢ��();
						cm.sendOk("�ѳɹ����չ��� #r" + oldAp + " #k��APֵ�������Ĳ���ͨ���۳��Ѽ�����ֵ�����롣\r\n");
						cm.dispose();
						return;
					}else{
						cm.getPlayer().setHpMpApUsed(0);
						takeAp -= HpMpApUsed;
					}
					
					if(takeAp > 0){
						cm.sendOk("�������� #r" + takeAp + " #k��APֵδ�ջأ����ύGM����������ϵGM����\r\n");
						cm.dispose();
						return;
					}
					
				}
			}else{
				cm.sendOk("���󣬲�ѯ��¼���Ѵ��ڵ�������Ϊ #r0#k\r\n");
				cm.dispose();
				return;
			}
			
		} 
		return;
		
	} else {
		cm.safeDispose();
		return;
	}
}

