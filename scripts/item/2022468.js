function ������������(a) {
	var playerNmae = im.getPlayer().getName();
	var ����ֵ = im.�����(a);
	var ����ֵ = im.�����(a);
    im.���ӽ�ɫ�������ֵ(����ֵ);
	im.���ӽ�ɫ�����ֵ(����ֵ);
	im.���˹���("����HP : "+����ֵ);
	im.���˹���("����MP : "+����ֵ);
	im.ȫ������(playerNmae + "ʹ��ϴѪ����HP+ :"+ ����ֵ + "    MP+" +����ֵ);
	im.ˢ��();	
}

  function action() {
	if (im.getInventory(1).isFull(5)){
		im.˵������("�뱣֤����#bװ����#k������ #r6 #k��λ��");
		im.�����Ի�();
		return;
	}
	if (im.getInventory(2).isFull(1)){
		im.˵������("�뱣֤����#b������#k������ #r2 #k��λ��");
		im.�����Ի�();
		return;
	}
	
	if(im.getPlayer().getMapId() != 910000000){
		im.sendOk("��Ǹ��ϴѪ����ֻ���������г�ʹ�ã�");
		im.dispose();
		return;
	}

	if(!im.�ж���Ʒ����(2022468,1)){
		im.˵������("��û�� "+im.��ʾ��Ʒ(2022468)+" ��");
		im.�Ի�����();
        return;
	}else{
		im.����Ʒ(2022468,1);
		������������(17);
		im.�Ի�����();
	}
	im.dispose();
}