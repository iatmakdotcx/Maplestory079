/* ==================
 �ű�����:  ����	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function start(mode, type, selection) {
	//qm.sendNextS("����֮ǰ��#p2090004#��һ���Գ��Ǻ�ɫ֮���Ա������#r#o9300351##k����������õ���#t4220151#��������Ϊ���ܵ�ʧ��#t4220151#������ȫ�������ˡ����븴ԭ#t4220151#����������д����ʲô���ݡ�ȥ��#b��ʦ#p2091008##k��ѯ��ԭ#t4220151#�ķ�����,������#r����#k��", 3);
	//qm.removeAll(4220151);��ʱû�취�޸�
	//qm.gainItem(4220151, 1);
	qm.forceStartQuest(21742);//��ʼ����
	qm.forceStartQuest(21743);//��ʼ����
	qm.dispose();
}

function end(mode, type, selection) {
	qm.forceCompleteQuest(21742);//�������
	qm.forceCompleteQuest(21743);//�������
	qm.dispose();
}