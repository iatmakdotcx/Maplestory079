function enter(pi) {
    //pi.openNpc(2081005);
    if (pi.haveItem(5150038)) {
        pi.gainItem(5150038, -1);
        pi.warp(910000019);
    } else {
       
        pi.mapMessage(6, "��û�г������������������������ȥ!")
    }
}




