/* ==================
 �ű�����: NPC	    
 �ű���Ȩ����Ϸ���Ŷ�
 ��ϵ�ۿۣ�297870163    609654666
 =====================
 */
 var status = -1;

function action(mode, type, selection) {
    if (mode == 1)
	status++;
    else
	status--;
    if (status == 0) {
        cm.sendOk("����������ð�?");
	cm.dispose();
    }
}