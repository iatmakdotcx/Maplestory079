/*
  ���������سɾ�����
*/

var status = 0;
var itemid = [
		1102271,
		1702089,
		1702228,
		1702299
	];

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == 0) {
        im.dispose();
        return;
    } else {
        status++;
    }
    if (status == 0) {
       var itemi = im.ȡ���������(itemid);
	   im.getItemMegaphone("���߱سɾ�����"," ����� "+im.getPlayer().getName()+" ���˳��С�" , itemi ,1)
	   im.used();
       im.dispose();
    }
}