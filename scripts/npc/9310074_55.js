/*
 * �ű�����: cm
 * �ű���;: ����н�
 * �ű�����: ����ؼ
 * ����ʱ��: 2014/12/18
 */


//����������-------------------------------------------
//֧�փ��Q����Ʒ�б�
var exchangeItems = [2290011,2290021,2290023,2290031,2290042,2290049,2290061,2290074,2290084,2290083,2290107,2290118,2290133];
var exchangeRatio = 2;//��Ʒ�һ�����
var exchangeToItemId= 2028009;//��Ʒ�һ�Ŀ�����ID
//-----------------------------------------------------

var chr = null;



var status = -1;
var beauty = 0;
var tosend = 0;
var sl;
var mats;
var dds;

function start() {
	chr = cm.getPlayer();
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode == -1) {
        cm.dispose();
    } else {
        if (mode == 0 && status == 0) {
            cm.dispose();
            return;
        }
        if (mode == 1) {
            status++;
        } else {
            if (status == 0) {
                cm.sendOk("�����Ҫ����н�����������Ұɡ�");
                cm.dispose();
            }
            status--;
        }
        if (status == 0) {
            // cm.getChar().gainCashDD(+1000);
            var gsjb = "";
            gsjb = " #r ���еļ�����2���һ�1�����#v2028009#\r\n";
            gsjb += "                                                             #L17##r�������б�\r\n#k#v2290011##v2290021##v2290023##v2290031##v2290042##v2290061##v2290074##v2290084##v2290083##v2290107##v2290118##v2290133##l\r\n";

            cm.sendSimple(gsjb);
        } else if (status == 1) {
            if (cm.getPlayer() >= 1 && cm.getPlayer() <= 5) {
                cm.sendOk("GM���ܲ���һ���");
                cm.dispose();
            }
            if (selection == 0) {
                if (cm.getPlayer().getCSPoints(0) / 500 == 0) {
                    cm.sendOk("�����ʻ�������޷��һ��������ҡ�");
                    status = -1;
                } else {
                    beauty = 1;
                    cm.sendGetNumber("������#r���#k�һ�#b#z4000463##k������:\r\n#b���� - (#r500 = 1#b)\r\n����˻���Ϣ - \r\n    �������: #r" +
					cm.getPlayer().getCSPoints(0) + " \r\n", 1, 1, cm.getPlayer().getCSPoints(0) / 500);

                }

            } else if (selection == 25) {
                if (cm.haveItem(4002002) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 25
                        cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 5#b)\r\n  ��ǰ����: #v4002002# �� #c4002002# ��#r \r\n", 1, 1, 100000);
                }

            } else if (selection == 17) {
				var _totalCount = 0;
				for(var i =0;i<exchangeItems.length;i++){
					_totalCount+= chr.getItemQuantity(exchangeItems[i], false);
				}
				if (_totalCount < exchangeRatio) {
					cm.sendOk("�����Ʒ����һ�.");
					status = -1;
				} else {
					beauty = 17;
					var say = "";
					say += "����������:\r\n#b���� - (#r2���� = 1��Ʒ#b)�������£�\r\n";
					for(var i =0;i<exchangeItems.length;i++){
						say+= "#v"+exchangeItems[i]+"#";
					}
					say += "\r\n";
					say += "��"+_totalCount+"������\r\n";
					var maxCount = Math.floor(_totalCount/exchangeRatio);//�������һ�����
					cm.sendGetNumber(say, 1, 1, maxCount);
				}

            } else if (selection == 20) {
                if (cm.haveItem(4000000) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 20
                        cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n  ��ǰ����: #c4000000# ��#r \r\n", 1, 1, 100000);
                }

            } else if (selection == 21) {
                if (cm.haveItem(4000016) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 21
                        cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n  ��ǰ����: #c4000016# ��#r \r\n", 1, 1, 100000);
                }

            } else if (selection == 22) {
                if (cm.haveItem(4000010) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 22
                        cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n  ��ǰ����: #c4000010# ��#r \r\n", 1, 1, 100000);
                }

            } else if (selection == 23) {
                if (cm.haveItem(4000004) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 23
                        cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n  ��ǰ����: #c4000004# ��#r \r\n", 1, 1, 100000);
                }

            } else if (selection == 24) {
                if (cm.haveItem(4000011) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 24
                        cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n  ��ǰ����: #c4000011# ��#r \r\n", 1, 1, 100000);
                }

            } else if (selection == 25) {
                if (cm.haveItem(4002002) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 25
                        cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n  ��ǰ����: #c4002002# ��#r \r\n", 1, 1, 100000);
                }

            } else if (selection == 26) {
                if (cm.haveItem(4000003) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 26
                        cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n  ��ǰ����: #c4000003# ��#r \r\n", 1, 1, 100000);
                }

            } else if (selection == 27) {
                if (cm.haveItem(4000012) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 27
                        cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1000#b)\r\n  ��ǰ����: #c4000012# ��#r \r\n", 1, 1, 100000);
                }

            } else if (selection == 30) {
                if (cm.haveItem(4031196) == 0) {
                    cm.sendOk("�����Ʒ����һ�.");
                    status = -1;
                } else {
                    beauty = 30
                        cm.sendGetNumber("����������:\r\n#b���� - (#r1 = 1#b)\r\n  ��ǰ����: #c4031196# ��#r \r\n", 1, 1, 100000);
                }

            }

        } else if (status == 2) {
            if (beauty == 1) {
                if (cm.haveItem(4000040, selection)) {
                    cm.gainItem(4000040, -selection);
                    cm.sendOk("�һ��ɹ��� [#r" + selection + "#k] �һ���:[#r" + (selection * 300000) + "#k] ��ҡ�");
                    cm.gainMeso(+300000 * selection);
                    cm.worldMessage(6, "��ң�[" + cm.getName() + "]Ŭ����ש���ڿ�������һ��ˣ�" + (selection * 300000) + " ��ҡ�");
                    cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()

                }
            }
            if (beauty == 17) {
                var _totalCount = 0;
				for(var i =0;i<exchangeItems.length;i++){
					_totalCount+= chr.getItemQuantity(exchangeItems[i], false);
				}
				
				var maxCount = Math.floor(_totalCount/exchangeRatio);//�������һ�����
				
				if(selection<=0){
					cm.sendOk("#r��Ǹ����������ȷ�Ķһ�����!");
					cm.dispose();
					return;
				}
				
				if(selection>maxCount){
					cm.sendOk("#r��Ǹ����Ĳ��ϲ��㣬�����ֻ�ܶһ���#b"+maxCount+"#r����Ʒ��");
					cm.dispose();
					return;
				}
				if (_totalCount >= exchangeRatio) {
					
					//�ۼ���Ʒ
					var needCount = selection * exchangeRatio;
					for(var i =0;i<exchangeItems.length;i++){
						var _thisItemCount = chr.getItemQuantity(exchangeItems[i], false);
						if(_thisItemCount>0){
							if(_thisItemCount>= needCount){
								cm.gainItem(exchangeItems[i],-needCount);
								needCount =0;
								break;
							}else{
								cm.gainItem(exchangeItems[i],-_thisItemCount);
								needCount-=_thisItemCount;
							}
						}
					}
					
					cm.gainItem(exchangeToItemId, selection);
					cm.sendOk("�һ��ɹ������һ���:"+selection+" #v"+exchangeToItemId+"#������׼����顣");
					cm.worldMessage(6, "��ң�[" + cm.getName() + "]һ�������˽��׼�����ÿ2���� 1��������׼����顣");
					cm.dispose();
					
				} else {
					cm.sendOk("������Ʒ���㣬�޷��һ���");
					cm.dispose()
				}
            }
            if (beauty == 20) {
                if (cm.haveItem(4000000, selection)) {
                    cm.gainItem(4000000, -selection);
                    cm.gainMeso(+1000 * selection);
                    cm.sendOk("�һ��ɹ��� [#r" + selection + "#k] ���һ���:[#r" + (selection * 1000) + "#k] ��ҡ�");
                    cm.worldMessage(6, "��ң�[" + cm.getName() + "]Ŭ����ש���ڿ�������һ��ˣ�" + (selection * 1000) + " ��ҡ�");
                    cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }
            if (beauty == 21) {
                if (cm.haveItem(4000016, selection)) {
                    cm.gainItem(4000016, -selection);
                    cm.gainMeso(+1000 * selection);
                    cm.sendOk("�һ��ɹ��� [#r" + selection + "#k] ���һ���:[#r" + (selection * 1000) + "#k] ��ҡ�");
                    cm.worldMessage(6, "��ң�[" + cm.getName() + "]Ŭ����ש���ڿ�������һ��ˣ�" + (selection * 1000) + " ��ҡ�");
                    cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }
            if (beauty == 22) {
                if (cm.haveItem(4000010, selection)) {
                    cm.gainItem(4000010, -selection);
                    cm.gainMeso(+1000 * selection);
                    cm.sendOk("�һ��ɹ��� [#r" + selection + "#k] ���һ���:[#r" + (selection * 1000) + "#k] ��ҡ�");
                    cm.worldMessage(6, "��ң�[" + cm.getName() + "]Ŭ����ש���ڿ�������һ��ˣ�" + (selection * 1000) + " ��ҡ�");
                    cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }
            if (beauty == 23) {
                if (cm.haveItem(4000004, selection)) {
                    cm.gainItem(4000004, -selection);
                    cm.gainMeso(+1000 * selection);
                    cm.sendOk("�һ��ɹ��� [#r" + selection + "#k] ���һ���:[#r" + (selection * 1000) + "#k] ��ҡ�");
                    cm.worldMessage(6, "��ң�[" + cm.getName() + "]Ŭ����ש���ڿ�������һ��ˣ�" + (selection * 1000) + " ��ҡ�");
                    cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }
            if (beauty == 24) {
                if (cm.haveItem(4002003, selection)) {
                    cm.gainItem(4002003, -selection);
                    cm.gainNX(+100 * selection);
                    cm.sendOk("�һ��ɹ��� [#r" + selection + "#k] ���һ���:[#r" + (selection * 100) + "#k] ���");
                    cm.worldMessage(6, "��ң�[" + cm.getName() + "]Ŭ����ש���ڿ�������һ��ˣ�" + (selection * 100) + " ���");
                    cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }
            if (beauty == 25) {
                if (cm.haveItem(4002002, selection)) {
                    cm.gainItem(4002002, -selection);
                    cm.gainNX(+100 * selection);
                    cm.sendOk("�һ��ɹ��� [#r" + selection + "#k] ���һ���:[#r" + (selection * 100) + "#k] ���");
                    cm.worldMessage(6, "��ң�[" + cm.getName() + "]Ŭ����ש���ڿ�������һ��ˣ�" + (selection * 100) + " ���");
                    cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }
            if (beauty == 26) {
                if (cm.haveItem(4000003, selection)) {
                    cm.gainItem(4000003, -selection);
                    cm.gainMeso(+100 * selection);
                    cm.sendOk("�һ��ɹ��� [#r" + selection + "#k] ���һ���:[#r" + (selection * 400) + "#k] ��ҡ�");
                    cm.worldMessage(6, "��ң�[" + cm.getName() + "]Ŭ����ש���ڿ�������һ��ˣ�" + (selection * 400) + " ��ҡ�");
                    cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }
            if (beauty == 27) {
                if (cm.haveItem(4000012, selection)) {
                    cm.gainItem(4000012, -selection);
                    cm.gainMeso(+400 * selection);
                    cm.sendOk("�һ��ɹ��� [#r" + selection + "#k] ���һ���:[#r" + (selection * 400) + "#k] ��ҡ�");
                    cm.worldMessage(6, "��ң�[" + cm.getName() + "]Ŭ����ש���ڿ�������һ��ˣ�" + (selection * 400) + " ��ҡ�");
                    cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }
            if (beauty == 30) {
                if (cm.haveItem(4031196, selection)) {
                    cm.gainItem(4031196, -selection);
                    cm.gainItem(4001322, selection);
                    cm.sendOk("�һ��ɹ��� [#r" + selection + "#k] ���һ���:[#r" + (selection) + "#k]�� ����ʯ");
                    cm.dispose();
                } else {
                    cm.sendOk("������������������޷��һ���");
                    cm.dispose()
                }
            }
            status = -1;
        } else {
            cm.dispose();
        }
    }
}