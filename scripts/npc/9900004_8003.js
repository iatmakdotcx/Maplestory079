/*
SnailMS�ű�������
*/
var �ط����� = 3;
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
		//�������д�ű���һ��Ҫ������
		var text = "��ѡ����Ҫ�ط���BOSS(#rÿ��ÿ�տ��ط� " + �ط����� + " ��#k)��\r\n\r\n";
		
		text += "#L1##b��ɮ#k#l\t #L17##b����ʨ��#k#l  #L2##b����#k#l\t  #L3##b��������#k#l\r\n\r\n";
		text += "#L4##b��������#k#l #L5##bƷ����#k#l    #L6##bǧ������#k#l  #L7##bϣ��˹#k#l  \r\n\r\n";
		text += "#L8##bѪ��Ů��#k#l #L9##b����Ů��#k#l  #L10##bƤ����#k#l    #L11##b����Ƥ����#k#l\r\n\r\n";
		text += "#L12##b���#k#l     #L13##b���װ��#k#l  #L14##b����#k#l      #L15##b���ױ���#k#l\r\n\r\n";
		text += "#L16##b�����˹#k#l #L18##b����#k#l #L19##b��ħ��ʦ#k#l\r\n\r\n";
		cm.sendSimple(text);
	} else if (status == 1) {
		//�������д�ڶ���Ҫ������
		if(selection == 1){
			//�������дѡ��1Ҫ������
			var map = cm.getMap(702060000);
			/* var em = cm.getEventManager("shaoling");
			if(em == null){
				cm.sendOk("��ɮ�¼��ѽ�������ͼ���Ѳ����ڶ��ѣ��޷��ط���");
				cm.dispose();
				return;
			}
			var eim = em.getInstance("shaoling");
			if(eim == null){
				cm.sendOk("��ɮ�¼��ѽ�������ͼ���Ѳ����ڶ��ѣ��޷��ط���");
				cm.dispose();
				return;
			} */
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(702060000) <= 0){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}

			if(cm.getBossLog("��ɮ�ط�") < �ط�����){
				cm.warp(702060000);
				var em = cm.getEventManager("shaoling");
				if(em != null){
					var eim = em.getInstance("shaoling");
					if(eim != null){
						eim.registerPlayer(cm.getPlayer());
						eim.restartEventTimer(eim.getTimeLeft());
					}
				}

				map.��ʱ��(map.���ʣ��ʱ��ʱ��()/60/1000, true, true);
				

				cm.setBossLog("��ɮ�ط�");
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		}else if (selection == 2) {
			//�������дѡ��2Ҫ������
			var map = cm.getMap(280030000);
			/* var em = cm.getEventManager("ZakumBattle");
			if(em == null){
				cm.sendOk("�����¼��ѽ�������ͼ���Ѳ����ڶ��ѣ��޷��ط���");
				cm.dispose();
				return;
			}
			var eim = em.getInstance("ZakumBattle");
			if(eim == null){
				cm.sendOk("�����¼��ѽ�������ͼ���Ѳ����ڶ��ѣ��޷��ط���");
				cm.dispose();
				return;
			} */
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(280030000) <= 0){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}

			if(cm.getBossLog("�����ط�") < �ط�����){
				cm.warp(280030000);
				var em = cm.getEventManager("ZakumBattle");
				if(em != null){
					var eim = em.getInstance("ZakumBattle");
					if(eim != null){
						eim.registerPlayer(cm.getPlayer());
						eim.restartEventTimer(eim.getTimeLeft());
					}
				}
				
				map.��ʱ��(map.���ʣ��ʱ��ʱ��()/60/1000, true, true);
				cm.setBossLog("�����ط�");
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		} else if (selection == 3) {
			//�������дѡ��2Ҫ������
			var map = cm.getMap(280030002);
			/* var em = cm.getEventManager("ChaosZakum");
			if(em == null){
				cm.sendOk("���������¼��ѽ�������ͼ���Ѳ����ڶ��ѣ��޷��ط���");
				cm.dispose();
				return;
			}
			var eim = em.getInstance("ChaosZakum");
			if(eim == null){
				cm.sendOk("���������¼��ѽ�������ͼ���Ѳ����ڶ��ѣ��޷��ط���");
				cm.dispose();
				return;
			} */
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(280030002) <= 0){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("���������ط�") < �ط�����){
				cm.warp(280030002);
				var em = cm.getEventManager("ChaosZakum");
				if(em != null){
					var eim = em.getInstance("ChaosZakum");
					if(eim != null){
						eim.registerPlayer(cm.getPlayer());
						eim.restartEventTimer(eim.getTimeLeft());
					}
				}
				map.��ʱ��(map.���ʣ��ʱ��ʱ��()/60/1000, true, true);
				cm.setBossLog("���������ط�");
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		} else if (selection == 4) {
			//�������дѡ��2Ҫ������
			var map = cm.getMap(240060200);
			/* var em = cm.getEventManager("DragonBattle");
			if(em == null){
				cm.sendOk("���������¼��ѽ�������ͼ���Ѳ����ڶ��ѣ��޷��ط���");
				cm.dispose();
				return;
			}
			var eim = em.getInstance("DragonBattle");
			if(eim == null){
				cm.sendOk("���������¼��ѽ�������ͼ���Ѳ����ڶ��ѣ��޷��ط���");
				cm.dispose();
				return;
			} */
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(240060200) <= 0){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("�����ط�") < �ط�����){
				cm.warp(240060200);
				var em = cm.getEventManager("DragonBattle");
				if(em != null){
					var eim = em.getInstance("DragonBattle");
					if(eim != null){
						eim.registerPlayer(cm.getPlayer());
						eim.restartEventTimer(eim.getTimeLeft());
					}
				}
				map.��ʱ��(map.���ʣ��ʱ��ʱ��()/60/1000, true, true);
				
				cm.setBossLog("�����ط�");
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		} else if (selection == 5) {
			//�������дѡ��2Ҫ������
			var map = cm.getMap(270050100);
			/* var em = cm.getEventManager("PinkBeanBattle");
			if(em == null){
				cm.sendOk("Ʒ�����¼��ѽ�������ͼ���Ѳ����ڶ��ѣ��޷��ط���");
				cm.dispose();
				return;
			}
			var eim = em.getInstance("PinkBeanBattle");
			if(eim == null){
				cm.sendOk("Ʒ�����¼��ѽ�������ͼ���Ѳ����ڶ��ѣ��޷��ط���");
				cm.dispose();
				return;
			} */
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(270050100) <= 0){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("PB�ط�") < �ط�����){
				cm.warp(270050100);
				var em = cm.getEventManager("PinkBeanBattle");
				if(em != null){
					var eim = em.getInstance("PinkBeanBattle");
					if(eim != null){
						eim.registerPlayer(cm.getPlayer());
						eim.restartEventTimer(eim.getTimeLeft());
					}
				}
				map.��ʱ��(map.���ʣ��ʱ��ʱ��()/60/1000, true, true);
				
				cm.setBossLog("PB�ط�");
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		} else if (selection == 6) {
			//�������дѡ��2Ҫ������
			var map = cm.getMap(541020800);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(!map.haveMonster(9420521) && !map.haveMonster(9420522)){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("ǧ�������ط�") < �ط�����){
				cm.warp(541020800);
				map.��ʱ��(map.���ʣ��ʱ��ʱ��()/60/1000, true, true);
				
				cm.setBossLog("ǧ�������ط�");
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		} else if (selection == 7) {
			//�������дѡ��2Ҫ������
			var map = cm.getMap(271040100);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(271040100) <= 0){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("ϣ��˹�ط�") < �ط�����){
				cm.warp(271040100);
				map.��ʱ��(map.���ʣ��ʱ��ʱ��()/60/1000, true, true);
				
				cm.setBossLog("ϣ��˹�ط�");
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		} else if (selection == 8) {
			//�������дѡ��2Ҫ������
			var map = cm.getMap(105200310);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(105200310) <= 0){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("Ѫ��Ů���ط�") < �ط�����){
				cm.warp(105200310);
				map.��ʱ��(map.���ʣ��ʱ��ʱ��()/60/1000, true, true);
				
				cm.setBossLog("Ѫ��Ů���ط�");
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		} else if (selection == 9) {
			//�������дѡ��2Ҫ������
			var map = cm.getMap(105200710);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(105200710) <= 0){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("����Ѫ��Ů���ط�") < �ط�����){
				cm.warp(105200710);
				map.��ʱ��(map.���ʣ��ʱ��ʱ��()/60/1000, true, true);
				
				cm.setBossLog("����Ѫ��Ů���ط�");
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		} else if (selection == 10) {
			//�������дѡ��2Ҫ������
			var map = cm.getMap(105200210);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(105200210) <= 0){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("Ƥ�����ط�") < �ط�����){
				cm.warp(105200210);
				map.��ʱ��(map.���ʣ��ʱ��ʱ��()/60/1000, true, true);
				
				cm.setBossLog("Ƥ�����ط�");
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		} else if (selection == 11) {
			//�������дѡ��2Ҫ������
			var map = cm.getMap(105200610);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(105200610) <= 0){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("����Ƥ�����ط�") < �ط�����){
				cm.warp(105200610);
				map.��ʱ��(map.���ʣ��ʱ��ʱ��()/60/1000, true, true);
				
				cm.setBossLog("����Ƥ�����ط�");
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		} else if (selection == 12) {
			//�������дѡ��2Ҫ������
			var map = cm.getMap(105200110);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(105200110) <= 0){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("����ط�") < �ط�����){
				cm.warp(105200110);
				map.��ʱ��(map.���ʣ��ʱ��ʱ��()/60/1000, true, true);
				
				cm.setBossLog("����ط�");
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		} else if (selection == 13) {
			//�������дѡ��2Ҫ������
			var map = cm.getMap(105200510);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(105200510) <= 0){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("���װ���ط�") < �ط�����){
				cm.warp(105200510);
				map.��ʱ��(map.���ʣ��ʱ��ʱ��()/60/1000, true, true);
				
				cm.setBossLog("���װ���ط�");
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		} else if (selection == 14) {
			//�������дѡ��2Ҫ������
			var map = cm.getMap(105200410);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(105200410) <= 0){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("�����ط�") < �ط�����){
				cm.warp(105200410);
				map.��ʱ��(map.���ʣ��ʱ��ʱ��()/60/1000, true, true);
				
				cm.setBossLog("�����ط�");
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		} else if (selection == 15) {
			//�������дѡ��2Ҫ������
			var map = cm.getMap(105200810);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(105200810) <= 0){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("���ױ����ط�") < �ط�����){
				cm.warp(105200810);
				map.��ʱ��(map.���ʣ��ʱ��ʱ��()/60/1000, true, true);
				
				cm.setBossLog("���ױ����ط�");
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		} else if (selection == 16) {
			//�������дѡ��2Ҫ������
			var map = cm.getMap(401060300);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(401060300) <= 0){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("�����˹�ط�") < �ط�����){
				cm.warp(401060300);
				map.��ʱ��(map.���ʣ��ʱ��ʱ��()/60/1000, true, true);
				
				cm.setBossLog("�����˹�ط�");
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		} else if (selection == 17) {
			//�������дѡ��2Ҫ������
			var map = cm.getMap(551030200);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(551030200) <= 0){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("����ʨ���ط�") < �ط�����){
				cm.warp(551030200);
				map.��ʱ��(map.���ʣ��ʱ��ʱ��()/60/1000, true, true);
				
				cm.setBossLog("����ʨ���ط�");
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		} else if (selection == 18) {
			//�������дѡ��2Ҫ������
			var map = cm.getMap(220080001);
			
			if(!map.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(220080001) <= 0){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}
			if(cm.getBossLog("�����ط�") < �ط�����){
				cm.warp(220080001);
				map.��ʱ��(map.���ʣ��ʱ��ʱ��()/60/1000, true, true);
				
				cm.setBossLog("�����ط�");
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		} else if (selection == 19) {
			//�������дѡ��2Ҫ������
			var map1 = cm.getMap(450013100);
			var map2 = cm.getMap(450013300);
			var map3 = cm.getMap(450013500);
			var map4 = cm.getMap(450013700);
			/* var em = cm.getEventManager("ZakumBattle");
			if(em == null){
				cm.sendOk("�����¼��ѽ�������ͼ���Ѳ����ڶ��ѣ��޷��ط���");
				cm.dispose();
				return;
			}
			var eim = em.getInstance("ZakumBattle");
			if(eim == null){
				cm.sendOk("�����¼��ѽ�������ͼ���Ѳ����ڶ��ѣ��޷��ط���");
				cm.dispose();
				return;
			} */
			if(!map1.isOwner(cm.getPlayer().getId()) && !map2.isOwner(cm.getPlayer().getId()) && !map3.isOwner(cm.getPlayer().getId()) && !map4.isOwner(cm.getPlayer().getId())){
				cm.sendOk("��û�иõ�ͼ���ط�Ȩ�ޣ�");
				cm.dispose();
				return;
			}else if(cm.getMonsterCount(450013100) <= 0 && cm.getMonsterCount(450013300) <= 0 && cm.getMonsterCount(450013500) <= 0 && cm.getMonsterCount(450013700) <= 0){
				cm.sendOk("�õ�ͼ�е�BOSS���������޷��ط���");
				cm.dispose();
				return;
			}else if(map1.���ʣ��ʱ��ʱ��() <= 0 && map2.���ʣ��ʱ��ʱ��() <= 0 && map3.���ʣ��ʱ��ʱ��() <= 0 && map4.���ʣ��ʱ��ʱ��() <= 0){
				cm.sendOk("�õ�ͼ����ʱ�ѽ������޷��ط���");
				cm.dispose();
				return;
			}

			if(cm.getBossLog("��ħ��ʦ�ط�") < �ط�����){
				var em = cm.getEventManager("BlackMageBattle");
				var eim;
				if(em != null){
					eim = em.getInstance("BlackMageBattle");
				}
				 
				if(em != null && eim != null){
					cm.playerMessage(6, "�¼�����");//����
					eim.registerPlayer(cm.getPlayer());
					eim.restartEventTimer(eim.getTimeLeft());
					if(em.getProperty("stage").equals("1")){
						cm.playerMessage(6, "map1 ");//����
						Packages.java.lang.Thread.sleep(500);
						cm.warp(450013100);
						map1.��ʱ��(map1.���ʣ��ʱ��ʱ��()/60/1000, true, true);
					}else if(em.getProperty("stage").equals("2")){
						cm.playerMessage(6, "map2 ");//����
						Packages.java.lang.Thread.sleep(500);
						cm.warp(450013300);
						map2.��ʱ��(map2.���ʣ��ʱ��ʱ��()/60/1000, true, true);
					}else if(em.getProperty("stage").equals("3")){
						cm.playerMessage(6, "map3 ");//����
						Packages.java.lang.Thread.sleep(500);
						cm.warp(450013500);
						map3.��ʱ��(map3.���ʣ��ʱ��ʱ��()/60/1000, true, true);
					}else if(em.getProperty("stage").equals("4")){
						cm.playerMessage(6, "map4 ");//����
						Packages.java.lang.Thread.sleep(500);
						cm.warp(450013700);
						map4.��ʱ��(map4.���ʣ��ʱ��ʱ��()/60/1000, true, true);
					}
					
					cm.setBossLog("��ħ��ʦ�ط�");
				}else{
					cm.playerMessage(6, "�¼�������");//����
					//cm.warp(450012500);
					//Packages.java.lang.Thread.sleep(500);
					cm.registerSquad("blackmage", 5, " �ѱ�����Ϊ�ų�����������������ʱ����ڿ���Զ����.");
					if (cm.getSquad("blackmage") != null) {
						var em = cm.getEventManager("BlackMageBattle");
						em.setProperty("leader", "true");
						var eim = em.newInstance("BlackMageBattle");
						
						var map = eim.setInstanceMap(450013100);
						map = eim.setInstanceMap(450013300);
						map = eim.setInstanceMap(450013500);
						map = eim.setInstanceMap(450013700);
						em.setProperty("state", "1");
						eim.registerSquad(cm.getSquad("blackmage"), cm.getMap(), 160102);
						Packages.java.lang.Thread.sleep(500);
                        if(cm.getMonsterCount(450013100) > 0){
							em.setProperty("stage", "1");
							var mobList = map1.getAllMonstersThreadsafe();
							cm.playerMessage(6, "mobList = " + mobList.size());//����
							if(mobList != null){
								for(var i in mobList){
									eim.registerMonster(mobList[i]);
									cm.playerMessage(6, "i = " + i);//����
								}
							}
							cm.warp(450013100);
							map1.��ʱ��(map1.���ʣ��ʱ��ʱ��()/60/1000, true, true);
							eim.startEventTimer(map1.���ʣ��ʱ��ʱ��());
						}else if(cm.getMonsterCount(450013300) > 0){
							em.setProperty("stage", "2");
							var mobList = map2.getAllMonstersThreadsafe();
							if(mobList != null){
								for(var i in mobList){
									eim.registerMonster(mobList[i]);
									cm.playerMessage(6, "i = " + i);//����
								}
							}
							cm.warp(450013300);
							map2.��ʱ��(map2.���ʣ��ʱ��ʱ��()/60/1000, true, true);
							eim.startEventTimer(map2.���ʣ��ʱ��ʱ��());
						}else if(cm.getMonsterCount(450013500) > 0){
							em.setProperty("stage", "3");
							var mobList = map3.getAllMonstersThreadsafe();
							if(mobList != null){
								for(var i in mobList){
									eim.registerMonster(mobList[i]);
									cm.playerMessage(6, "i = " + i);//����
								}
							}
							cm.warp(450013500);
							map3.��ʱ��(map3.���ʣ��ʱ��ʱ��()/60/1000, true, true);
							eim.startEventTimer(map3.���ʣ��ʱ��ʱ��());
						}else if(cm.getMonsterCount(450013700) > 0){
							em.setProperty("stage", "4");
							var mobList = map4.getAllMonstersThreadsafe();
							if(mobList != null){
								for(var i in mobList){
									eim.registerMonster(mobList[i]);
									cm.playerMessage(6, "i = " + i);//����
								}
							}
							cm.warp(450013700);
							map4.��ʱ��(map4.���ʣ��ʱ��ʱ��()/60/1000, true, true);
							eim.startEventTimer(map4.���ʣ��ʱ��ʱ��());
						}
					}
					cm.setBossLog("��ħ��ʦ�ط�");
				}

				
			}else{
				cm.sendOk("��ĸ���ÿ���ط������Ѵﵽ #r" + �ط����� + "#k �Σ��޷��ط���");
				cm.dispose();
				return;
			}
		} 

		
	} else {
		cm.dispose();
		return;
	}
}

