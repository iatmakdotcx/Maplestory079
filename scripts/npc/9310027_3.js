load("nashorn:mozilla_compat.js");
importPackage(Packages.client);
importPackage(Packages.client.inventory);
importPackage(Packages.server);
importPackage(Packages.tools);
var date = new Date();
var day = date.getDay();

var status = 0;

	function start() {
		status = -1;
		action(1, 0, 0);
		}
	function action(mode, type, selection) {
	if (mode == -1) {
		cm.sendOk("#b�õ�,�´��ټ�.");
		cm.dispose();
		} else {
	if (status >= 0 && mode == 0) {
		cm.sendOk("#b�õ�,�´��ټ�.");
		cm.dispose();
		return;
		}
	if (mode == 1)
		status++;
		else
		status--;


	if (status == 0) {
                var yu = cm.itemQuantity(4010000);
                var hs = yu*2
                var yu1 = cm.itemQuantity(4010001);
                var hs1 = yu1*2
                var yu2 = cm.itemQuantity(4010002);
                var hs2 = yu2*2
                var yu3 = cm.itemQuantity(4010003);
                var hs3 = yu3*2
                var yu4 = cm.itemQuantity(4010004);
                var hs4 = yu4*2
                var yu5 = cm.itemQuantity(4010005);
                var hs5 = yu5*2
                var yu6 = cm.itemQuantity(4010006);
                var hs6 = yu6*2
                var yu7 = cm.itemQuantity(4020000);
                var hs7 = yu7*2
                var yu8 = cm.itemQuantity(4020001);
                var hs8 = yu8*2
                var yu9 = cm.itemQuantity(4020002);
                var hs9 = yu9*2
                var yu11 = cm.itemQuantity(4020004);
                var hs11 = yu11*2
                var yu12 = cm.itemQuantity(4020005);
                var hs12 = yu12*2
                var yu13 = cm.itemQuantity(4020006);
                var hs13 = yu13*2
                var yu14 = cm.itemQuantity(4020007);
                var hs14 = yu14*2
                var yu15 = cm.itemQuantity(4020008);
                var hs15 = yu15*2
var mianfei = cm.getBossLog('huishoumukuang');
var symianfei = 10-mianfei;
   	    var add = "#e#r����Ҫ����ʲôĸ��(#rע��#b:һ������)#n#k:\r\n(ʣ��#r" + symianfei + "#k��#b,#r�������#k�޴�������#k)\r\n#L0# ��ӵ��#r"+yu+"#k��#v4010000#(�ɻ���#r" + hs + "#k����)\r\n#L1# ��ӵ��#r"+yu1+"#k��#v4010001#(�ɻ���#r" + hs1 + "#k����)\r\n#L2# ��ӵ��#r"+yu2+"#k��#v4010002#(�ɻ���#r" + hs2 + "#k����)\r\n#L3# ��ӵ��#r"+yu3+"#k��#v4010003#(�ɻ���#r" + hs3 + "#k����)\r\n#L4# ��ӵ��#r"+yu4+"#k��#v4010004#(�ɻ���#r" + hs4 + "#k����)\r\n#L5# ��ӵ��#r"+yu5+"#k��#v4010005#(�ɻ���#r" + hs5 + "#k����)\r\n#L6# ��ӵ��#r"+yu6+"#k��#v4010006#(�ɻ���#r" + hs6 + "#k����)\r\n#L7# ��ӵ��#r"+yu7+"#k��#v4020000#(�ɻ���#r" + hs7 + "#k����)\r\n#L8# ��ӵ��#r"+yu8+"#k��#v4020001#(�ɻ���#r" + hs8 + "#k����)\r\n#L9# ��ӵ��#r"+yu9+"#k��#v4020002#(�ɻ���#r" + hs9 + "#k����)\r\n#L11# ��ӵ��#r"+yu11+"#k��#v4020004#(�ɻ���#r" + hs11 + "#k����)\r\n#L12# ��ӵ��#r"+yu12+"#k��#v4020005#(�ɻ���#r" + hs12 + "#k����)\r\n#L13# ��ӵ��#r"+yu13+"#k��#v4020006#(�ɻ���#r" + hs13 + "#k����)\r\n#L14# ��ӵ��#r"+yu14+"#k��#v4020007#(�ɻ���#r" + hs14 + "#k����)\r\n#L15# ��ӵ��#r"+yu15+"#k��#v4020008#(�ɻ���#r" + hs15 + "#k����)\r\n";//

		cm.sendSimple (add);    

	} else if (status == 1) {
                var yu = cm.itemQuantity(4010000);
                var hs = yu*2
                var yu1 = cm.itemQuantity(4010001);
                var hs1 = yu1*2
                var yu2 = cm.itemQuantity(4010002);
                var hs2 = yu2*2
                var yu3 = cm.itemQuantity(4010003);
                var hs3 = yu3*2
                var yu4 = cm.itemQuantity(4010004);
                var hs4 = yu4*2
                var yu5 = cm.itemQuantity(4010005);
                var hs5 = yu5*2
                var yu6 = cm.itemQuantity(4010006);
                var hs6 = yu6*2
                var yu7 = cm.itemQuantity(4020000);
                var hs7 = yu7*2
                var yu8 = cm.itemQuantity(4020001);
                var hs8 = yu8*2
                var yu9 = cm.itemQuantity(4020002);
                var hs9 = yu9*2

                var yu11 = cm.itemQuantity(4020004);
                var hs11 = yu11*2
                var yu12 = cm.itemQuantity(4020005);
                var hs12 = yu12*2
                var yu13 = cm.itemQuantity(4020006);
                var hs13 = yu13*2
                var yu14 = cm.itemQuantity(4020007);
                var hs14 = yu14*2
                var yu15 = cm.itemQuantity(4020008);
                var hs15 = yu15*2
	if (selection == 0) {
if (yu >= 10000){
cm.sendOk ("#e#r��⵽���ÿ�ʯ������������10000,��Ѷ���Ŀ�ʯ�Ž��ֿ�");
                  	cm.dispose();
} else if (cm.getChar().�жϻ�Ա() >= 1){
		cm.gainBeans(hs);
                cm.removeAll(4010000);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs +"#k����");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("ÿ��ֻ�ܻ���#r10#k��,#r�������#k�޴�������#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs);
                cm.removeAll(4010000);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs +"#k����");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 1) {

if (yu1 >= 10000){
cm.sendOk ("#e#r��⵽���ÿ�ʯ������������10000,��Ѷ���Ŀ�ʯ�Ž��ֿ�");
                  	cm.dispose();
} else if (cm.getChar().�жϻ�Ա() >= 1){
		cm.gainBeans(hs1);
                cm.removeAll(4010001);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs1 +"#k����");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("ÿ��ֻ�ܻ���#r10#k��,#r�������#k�޴�������#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs1);
                cm.removeAll(4010001);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs1 +"#k����");
                  	cm.dispose();
                    }
                    }

	 } else if (selection == 2) {
if (yu2 >= 10000){
cm.sendOk ("#e#r��⵽���ÿ�ʯ������������10000,��Ѷ���Ŀ�ʯ�Ž��ֿ�");
                  	cm.dispose();
} else if (cm.getChar().�жϻ�Ա() >= 1){
		cm.gainBeans(hs2);
                cm.removeAll(4010002);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs2 +"#k����");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("ÿ��ֻ�ܻ���#r10#k��,#r�������#k�޴�������#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs2);
                cm.removeAll(4010002);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs2 +"#k����");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 3) {
if (yu3 >= 10000){
cm.sendOk ("#e#r��⵽���ÿ�ʯ������������10000,��Ѷ���Ŀ�ʯ�Ž��ֿ�");
                  	cm.dispose();
} else if (cm.getChar().�жϻ�Ա() >= 1){
		cm.gainBeans(hs3);
                cm.removeAll(4010003);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs3 +"#k����");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("ÿ��ֻ�ܻ���#r10#k��,#r�������#k�޴�������#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs3);
                cm.removeAll(4010003);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs3 +"#k����");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 4) {
if (yu4 >= 10000){
cm.sendOk ("#e#r��⵽���ÿ�ʯ������������10000,��Ѷ���Ŀ�ʯ�Ž��ֿ�");
                  	cm.dispose();
} else if (cm.getChar().�жϻ�Ա() >= 1){
		cm.gainBeans(hs4);
                cm.removeAll(4010004);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs4 +"#k����");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("ÿ��ֻ�ܻ���#r10#k��,#r�������#k�޴�������#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs4);
                cm.removeAll(4010004);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs4 +"#k����");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 5) {
if (yu5 >= 10000){
cm.sendOk ("#e#r��⵽���ÿ�ʯ������������10000,��Ѷ���Ŀ�ʯ�Ž��ֿ�");
                  	cm.dispose();
} else if (cm.getChar().�жϻ�Ա() >= 1){
		cm.gainBeans(hs5);
                cm.removeAll(4010005);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs5 +"#k����");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("ÿ��ֻ�ܻ���#r10#k��,#r�������#k�޴�������#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs5);
                cm.removeAll(4010005);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs5 +"#k����");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 6) {
if (yu6 >= 10000){
cm.sendOk ("#e#r��⵽���ÿ�ʯ������������10000,��Ѷ���Ŀ�ʯ�Ž��ֿ�");
                  	cm.dispose();
} else if (cm.getChar().�жϻ�Ա() >= 1){
		cm.gainBeans(hs6);
                cm.removeAll(4010006);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs6 +"#k����");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("ÿ��ֻ�ܻ���#r10#k��,#r�������#k�޴�������#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs6);
                cm.removeAll(4010006);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs6 +"#k����");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 7) {
if (yu7 >= 10000){
cm.sendOk ("#e#r��⵽���ÿ�ʯ������������10000,��Ѷ���Ŀ�ʯ�Ž��ֿ�");
                  	cm.dispose();
} else if (cm.getChar().�жϻ�Ա() >= 1){
		cm.gainBeans(hs7);
                cm.removeAll(4020000);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs7 +"#k����");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("ÿ��ֻ�ܻ���#r10#k��,#r�������#k�޴�������#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs7);
                cm.removeAll(4020000);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs7 +"#k����");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 8) {
if (yu8 >= 10000){
cm.sendOk ("#e#r��⵽���ÿ�ʯ������������10000,��Ѷ���Ŀ�ʯ�Ž��ֿ�");
                  	cm.dispose();
} else if (cm.getChar().�жϻ�Ա() >= 1){
		cm.gainBeans(hs8);
                cm.removeAll(4020001);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs8 +"#k����");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("ÿ��ֻ�ܻ���#r10#k��,#r�������#k�޴�������#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs8);
                cm.removeAll(4020001);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs8 +"#k����");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 9) {
if (yu9 >= 10000){
cm.sendOk ("#e#r��⵽���ÿ�ʯ������������10000,��Ѷ���Ŀ�ʯ�Ž��ֿ�");
                  	cm.dispose();
} else if (cm.getChar().�жϻ�Ա() >= 1){
		cm.gainBeans(hs9);
                cm.removeAll(4020002);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs9 +"#k����");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("ÿ��ֻ�ܻ���#r10#k��,#r�������#k�޴�������#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs9);
                cm.removeAll(4020002);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs9 +"#k����");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 100) {
if (yu10 >= 10000){
cm.sendOk ("#e#r��⵽���ÿ�ʯ������������10000,��Ѷ���Ŀ�ʯ�Ž��ֿ�");
                  	cm.dispose();
} else if (cm.getChar().�жϻ�Ա() >= 1){
		cm.gainBeans(hs10);
                cm.removeAll(4020003);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs10 +"#k����");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("ÿ��ֻ�ܻ���#r10#k��,#r�������#k�޴�������#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs10);
                cm.removeAll(4020003);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs10 +"#k����");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 11) {
if (yu11 >= 10000){
cm.sendOk ("#e#r��⵽���ÿ�ʯ������������10000,��Ѷ���Ŀ�ʯ�Ž��ֿ�");
                  	cm.dispose();
} else if (cm.getChar().�жϻ�Ա() >= 1){
		cm.gainBeans(hs11);
                cm.removeAll(4020004);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs11 +"#k����");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("ÿ��ֻ�ܻ���#r10#k��,#r�������#k�޴�������#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs11);
                cm.removeAll(4020004);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs11 +"#k����");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 12) {
if (yu12 >= 10000){
cm.sendOk ("#e#r��⵽���ÿ�ʯ������������10000,��Ѷ���Ŀ�ʯ�Ž��ֿ�");
                  	cm.dispose();
} else if (cm.getChar().�жϻ�Ա() >= 1){
		cm.gainBeans(hs12);
                cm.removeAll(4020005);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs12 +"#k����");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("ÿ��ֻ�ܻ���#r10#k��,#r�������#k�޴�������#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs12);
                cm.removeAll(4020005);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs12 +"#k����");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 13) {
if (yu13 >= 10000){
cm.sendOk ("#e#r��⵽���ÿ�ʯ������������10000,��Ѷ���Ŀ�ʯ�Ž��ֿ�");
                  	cm.dispose();
} else if (cm.getChar().�жϻ�Ա() >= 1){
		cm.gainBeans(hs13);
                cm.removeAll(4020006);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs13 +"#k����");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("ÿ��ֻ�ܻ���#r10#k��,#r�������#k�޴�������#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs13);
                cm.removeAll(4020006);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs13 +"#k����");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 14) {
if (yu14 >= 10000){
cm.sendOk ("#e#r��⵽���ÿ�ʯ������������10000,��Ѷ���Ŀ�ʯ�Ž��ֿ�");
                  	cm.dispose();
} else if (cm.getChar().�жϻ�Ա() >= 1){
		cm.gainBeans(hs14);
                cm.removeAll(4020007);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs14 +"#k����");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("ÿ��ֻ�ܻ���#r10#k��,#r�������#k�޴�������#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs14);
                cm.removeAll(4020007);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs14 +"#k����");
                  	cm.dispose();
                    }
                    }
	 } else if (selection == 15) {
if (yu15 >= 10000){
cm.sendOk ("#e#r��⵽���ÿ�ʯ������������10000,��Ѷ���Ŀ�ʯ�Ž��ֿ�");
                  	cm.dispose();
} else if (cm.getChar().�жϻ�Ա() >= 1){
		cm.gainBeans(hs15);
                cm.removeAll(4020008);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs15 +"#k����");
                  	cm.dispose();
                   	} else {
if(cm.getBossLog("huishoumukuang") > 100){
cm.sendOk("ÿ��ֻ�ܻ���#r100#k��,#r�������#k�޴�������#k");
cm.dispose();
                   	} else {
cm.setBossLog("huishoumukuang");
		cm.gainBeans(hs15);
                cm.removeAll(4020008);
		cm.sendOk ("�õģ�һ�����գ����#r"+ hs15 +"#k����");
                  	cm.dispose();
                    }
                    }

                } else if(selection == 54) {
                 cm.openNpc(9900001); 


               
               
                }					
		}
		}
		}

