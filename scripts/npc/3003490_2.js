

var damageSkinSelection = [2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,22,23,24,25,26,27,28,
29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,
63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,91,92,93,95,
100,101,102,103,104,105,106,109,110,111,112,113,114,115,116,117,118,119,120,121,122,
123,124,125,127,128,129,130,131,133,134,135,136,137,138,140,141,142,143,145,146,
148,149,153,154,155,156,157,158,159,160,161,162,163,164,165,167,168,170,171,172,173,
174,175,176,177,178,179,180,181,182,183,184,185,186,190,191,192,193,197,198,
199,200,201,204,205,207,208,209,212,213,214,215,216,217,218,219,222,223,224,
226,227,228,229,230,231,232,233,234,235,237,238,239,241,242,243,245,246,247,249,250,
251,252,253,254,255,256,257,259,260,261,263,264,265,266,267,268,269,270,271,273,275,276,

1000,1001,1002,1003,1004,1005,1006,1007,1008,1009,1011,1012,1013,1014,1015,1016,1018,1019,
1020,1021,1022,1023,1024,1025,1026,1027,1028,1029,1031,1032,1033,1034,1035,1036,1037,1038,1039,
1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055,1056,1057,1058,1059,
1060,1061,1062,1063,1068,1069,1070,1071,1072,1073,1074,1075,1076,1077,1078,1079,
1080,1081,1082,1083,1084,1085,1086,1092,1093,1094,1095,1096,1097,1098,1099,
1100,1114,1115,1116,1117,1118,1119,1120,1121,1122,1123,1124,1125,1126,1127,1128,1129,1130,1131,1132,
1133,1134,1135,1136,1137,1140,1141,1142,1143,1144,1145,1159,1160,1161,

1236,1237,1238,1239,1240,1241,1242,1243,1244,1245,1246,1247,1248,1249,
1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1267,1268,1269,
1270,1271,1273,1274,1277,1278,1279,1280,1286,1288,1289,
1291,1292,1293,1296,1298,1299,

1303,1304,1305,1306,1307,1308,1309,1310,1311,1312,1313,1314,1315,1316,1317,1318,1319,1320
,1321,1323,1324,1325,1326,1327,1328,1329,1330,1331,1332,1333,1334,1335,1336,1337,1338,1339,
1342,1344,1345,1346,1347,1352,1353,1354,1355,1356,1358,1359,1360,


1362,1363,1364,1367,1368,1369,1370,1371,1372,1373,1377,
1380,1381,1382,1386,1387,1388,1389,1390,1391,1393,1397,1399,1400,
1402,1403,1405,1409,1410,1411,
1416,1421];   //CMS175�ٷ����е��˺�Ƥ�� �������вο��˽ű����±༭Ϊ�齱�����ȡ����������жһ������ȯ��ҹ������б༭��

var selectedSkin;
var status = -1;

function start() {
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (mode != 1) {
        if (mode == 0) { 
            cm.sendNext("�ټ���");
        }
        cm.dispose();
    } else {
        status++;
        if (status == 0) {
            var message = "��ѡ��Ҫʹ�õ��˺�Ƥ����\r\n";

            message += "#L0##fEffect/BasicEff.img/NoRed0/0##l";

            for (var i = 0; i < damageSkinSelection.length; i++) {
                message += "#L" + damageSkinSelection[i] + "##fEffect/DamageSkin.img/" + damageSkinSelection[i] + "/NoRed0/0##l";
            }            
            cm.sendSimple(message);
        } else if (status == 1) {
            selectedSkin = selection;
            cm.sendYesNo("���뻻�˺�Ƥ����");
        } else if (status == 2) {
			cm.getPlayer().dropMessage(1,"[MapleHD] [DmgSkin] " + selectedSkin); //dll�д����������ı����������˺�Ƥ����
			cm.getPlayer().dropMessage(2,"[�˺�Ƥ��ϵͳ] : [�����˺�Ƥ��IDΪ] : " + selectedSkin);
			cm.sendNext("�����ɹ���");
            cm.dispose();
        }
    }
}