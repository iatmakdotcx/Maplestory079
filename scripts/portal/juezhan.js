function enter(pi) {
    //pi.openNpc(2081005);
    if (pi.haveItem(4033731)) {
        pi.gainItem(4033731, -1);
        pi.warp(273060000);
    } else {
       
        pi.mapMessage(6, "��û��սʿԩ�꣡���������ȥ!")
    }
}




