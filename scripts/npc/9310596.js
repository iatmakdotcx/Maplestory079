/*

*/
var status = 0;
var psrw1 = Array(
Array(3010012, 1),//剑士 宝座
Array(3010038, 1),//空气沙发
Array(3010044, 1),//同一红伞下
Array(3010049, 1),//雪房子
Array(3010057, 1),//血色玫瑰
Array(3010058, 1),//世界末日
Array(3010059, 1),//甜甜的零食王座
Array(3010063, 1),//月亮星星抱枕椅
Array(3010070, 1),//巨无霸品克缤
Array(3010071, 1),//神兽椅
Array(3010078, 1),//大熊猫椅子
Array(3010079, 1),//肥猫猫椅子
Array(3010095, 1),//石头人座椅

Array(3010108, 1),//幼龙秋千
Array(3010112, 1),//情书柜子
Array(3010115, 1),//熊宝宝床
Array(3010116, 1),//摇滚之魂椅子
Array(3010134, 1),//
Array(3010117, 1),//魔法书椅子
Array(3010151, 1),//无人岛椅子
Array(3010156, 1),//浮游飞行器
Array(3010172, 1),//星空椅子
Array(3010195, 1),//无价之宝椅子
Array(3010194, 1),//野营篝火椅子

Array(3010225, 1),//品克缤椅子
Array(3010279, 1),//鬼节南瓜椅子
Array(3010280, 1),//水果椅子
Array(3010286, 1),//诺特勒斯椅子
Array(3010298, 1),//白熊抱抱椅子

Array(3010362, 1),//彩虹椅子

Array(3010415, 1),//熟睡鸭子椅
Array(3010423, 1),//蘑菇朋友椅子
Array(3010436, 1),//邪恶黑龙椅子
Array(3010440, 1),//寻找故乡的月妙椅子
Array(3010441, 1),//邪恶之毒椅子
Array(3010446, 1),//皮肤皇后椅子
Array(3010447, 1),//睡觉小鸟椅子
Array(3010448, 1),//泡泡浴椅子
Array(3010449, 1),//痊愈10周椅子
Array(3010450, 1),//艾莉珍椅子
Array(3010455, 1),//扎昆的帝王椅子
Array(3010456, 1),//杜鹃花椅子
Array(3010458, 1),//翻滚兔子椅子
Array(3010460, 1),//爆竹椅子
Array(3010461, 1),//赏月专用
Array(3010462, 1),//罗曼蒂克天文台
Array(3010491, 1),//首脑椅子
Array(3010494, 1),//TV椅子
Array(3010490, 1),//红色大象总统椅子
Array(3010465, 1),//可爱音符椅子
Array(3010499, 1),//痊愈10周年


Array(3010519, 1),//巨大雪人
Array(3010520, 1),//巨大企鹅
Array(3010522, 1),//
Array(3010523, 1),//
Array(3010543, 1),//魔力品克缤
Array(3010544, 1),//热带夏日椅子
Array(3010545, 1),//千年狐椅子
Array(3010592, 1),//布莱克缤椅子
Array(3010591, 1),//漫画书椅子
Array(3010528, 1),//跑步机椅子
Array(3010511, 1),//喵咪公园椅子
Array(3010590, 1),//酸甜点心椅子


Array(3010621, 1),//蛤蛤仙人
Array(3010638, 1),//画
Array(3010639, 1),//
Array(3010640, 1),//
Array(3010641, 1),//
Array(3010642, 1),//画
Array(3010658, 1),//夏日西瓜冰椅子
Array(3010670, 1),//绝对指环椅子
Array(3010682, 1),//天文台椅子
Array(3010690, 1),//滑浪飞船椅子

Array(3010700, 1),//大黄鸭椅子
Array(3010708, 1),//韩文
Array(3010714, 1),//
Array(3010715, 1),//
Array(3010716, 1),//
Array(3010717, 1),//
Array(3010718, 1),//
Array(3010755, 1),//小丫丫坐便器椅子
Array(3010751, 1),//鲸鱼椅子

Array(3010813, 1),//
Array(3010824, 1),//水星椅子
Array(3010825, 1),//金星椅子
Array(3010826, 1),//地球椅子
Array(3010827, 1),//火星椅子
Array(3010830, 1),//天王星椅子
Array(3010838, 1),//冰城堡
Array(3010831, 1),//海王星椅子
Array(3010842, 1),//猫猫郊游房车
Array(3010843, 1),//兔兔郊游
Array(3010845, 1),//
Array(3010879, 1),//繁星椅子

Array(3010956, 1),//
Array(3010965, 1),//
Array(3010976, 1),//
Array(3010980, 1),//
///////////////////////////////////////////////////////////////
Array(3012020, 1),//紫藤花吊篮椅
Array(3012023, 1),//
Array(3012028, 1),//
Array(3012024, 1),//沙滩排球
Array(3012025, 1),//小鸡弹簧
Array(3012026, 1),//旋转花茶
Array(3012027, 1),//羊羊热气球
Array(3012030, 1),//
Array(3012031, 1),//
Array(3012032, 1),//甜蜜蛋糕椅子
Array(3012024, 1), //沙滩排球椅子
Array(3012026, 1),//旋转花茶杯情侣椅子

Array(3014020, 1),//荣誉的象征
Array(3014008, 1),//
Array(3014011, 1),//MVP钻石椅子
Array(3014014, 1),//射手村演出照
Array(3014015, 1),//废弃
Array(3014016, 1),//阿里
Array(3014017, 1),//时间神殿
Array(3014018, 1),//林中之城
Array(3014019, 1),//
Array(3014020, 1),//
Array(3014027, 1),//
/////////////////////////////////////////////////////
Array(3015011, 1),//
Array(3015013, 1),//
Array(3015014, 1),//
Array(3015015, 1),//
Array(3015016, 1),//
Array(3015017, 1),//
Array(3015018, 1),//
Array(3015019, 1),//
Array(3015020, 1),//
Array(3015021, 1),//
Array(3015022, 1),//
Array(3015023, 1),//
Array(3015024, 1),//
Array(3015025, 1),//
Array(3015026, 1),//
Array(3015027, 1),//
Array(3015036, 1),//圣诞节椅子
Array(3015051, 1),//巨无霸国际巨星
Array(3015058, 1),//
Array(3015062, 1),//
Array(3015075, 1),//
Array(3015096, 1),//羊羊幻想牧场椅子

Array(3015100, 1),//奥尔卡的布偶兔
Array(3015111, 1),//
Array(3015112, 1),//
Array(3015181, 1),//
Array(3015182, 1),//
Array(3015183, 1),//
Array(3015193, 1),//

Array(3015223, 1),//
Array(3015224, 1),//
Array(3015225, 1),//
Array(3015227, 1),//
Array(3015228, 1),//
Array(3015235, 1),//
Array(3015236, 1),//
Array(3015238, 1),//
Array(3015240, 1),//
Array(3015241, 1),//
Array(3015245, 1),//
Array(3015246, 1),//土豪金币椅子
Array(3015248, 1),//孤独旅行者椅子
Array(3015257, 1),//月下庭院椅子
Array(3015262, 1),//满月清辉椅子
Array(3015263, 1),//黄色蛙漂流椅子
Array(3015272, 1),//紫色蛙漂流椅子
Array(3015295, 1),//
Array(3015297, 1),//


Array(3015300, 1),//人鱼的珊瑚礁
Array(3015301, 1),//
Array(3015309, 1),//
Array(3015316, 1),//突击！伊莉娜乐队椅子
Array(3015329, 1),//妖怪坛椅子
Array(3015341, 1),//黑猫房车
Array(3015342, 1),//
Array(3015343, 1),//
Array(3015349, 1),//青蛙摇摇机椅子
Array(3015367, 1),//斯乌铁粉椅子
Array(3015370, 1),//
Array(3015380, 1),//
Array(3015382, 1),//
Array(3015384, 1),//
Array(3015387, 1),//
Array(3015388, 1),//
Array(3015389, 1),//
Array(3015390, 1),//
Array(3015391, 1),//
Array(3015392, 1),//


Array(3015436, 1),//竹野子椅子
Array(3015437, 1),//被吞没的世界椅子
Array(3015440, 1),//钱多多椅子
Array(3015443, 1),//
Array(3015468, 1),//超越石椅子
Array(3015447, 1),//
Array(3015449, 1),//
Array(3015482, 1),//沉睡的鸭子椅子
Array(3015494, 1),//


Array(3015574, 1),//阿布拉克萨斯椅子
Array(3015582, 1),//骑士团椅子
Array(3015583, 1),//反抗者椅子
Array(3015597, 1),//蘑菇神社赏月椅子
Array(3015598, 1),//蘑菇神社蝉yu椅子
Array(3015599, 1),//消防车椅子
Array(3015529, 1),//胡萝卜椅子
Array(3015580, 1),//凉爽沙滩排球椅
Array(3015581, 1),//水枪体验椅子
Array(3015579, 1),//水流喷射推进器座椅
Array(3015552, 1),//悬挂的景观灯泡椅子


Array(3015600, 1),//努力的生意人椅子
Array(3015604, 1),//音乐盛典DJ皮亚
Array(3015605, 1),//音乐盛典DJ
Array(3015606, 1),//音乐盛典DJ
Array(3015607, 1),//音乐盛典DJ
Array(3015608, 1),//音乐盛典DJ
Array(3015609, 1),//音乐盛典DJ
Array(3015615, 1),//
Array(3015619, 1),//草莓城主椅子
Array(3015620, 1),//黑色天堂玩具椅子
Array(3015621, 1),////蘑菇神社赏花椅子
Array(3015623, 1),//银光满月椅子
Array(3015642, 1),//
Array(3015660, 1),//
Array(3015667, 1),//
Array(3015689, 1)//万圣节


);

var psrw = Array(

Array(3015700, 1),//
Array(3015701, 1),//
Array(3015702, 1),//
Array(3015703, 1),//
Array(3015704, 1),//
Array(3015705, 1),//
Array(3015706, 1),//
Array(3015707, 1),//
Array(3015708, 1),//
Array(3015709, 1),//
Array(3015721, 1),//
Array(3015722, 1),//
Array(3015723, 1),//
Array(3015725, 1),//
Array(3015739, 1),//
Array(3015741, 1),//
Array(3015745, 1),//
Array(3015747, 1),//
Array(3015748, 1),//
Array(3015749, 1),//
Array(3015750, 1),//
Array(3015755, 1),//
Array(3015756, 1),//
Array(3015757, 1),//
Array(3015758, 1),//
Array(3015759, 1),//
Array(3015760, 1),//
Array(3015761, 1),//
Array(3015762, 1),//
Array(3015767, 1),//

Array(3015800, 1),//
Array(3015801, 1),//
Array(3015802, 1),//
Array(3015845, 1),//发射星星
Array(3015846, 1),//
//Array(3015847, 1),//
Array(3015848, 1),//
Array(3015849, 1),//
Array(3015850, 1),//
Array(3015888, 1),//
Array(3015892, 1),//
Array(3015898, 1),//
Array(3015899, 1),//

Array(3015919, 1),//
Array(3015937, 1),//
Array(3015938, 1),//
Array(3015965, 1),//
Array(3015966, 1),//
Array(3015967, 1),//
Array(3015968, 1),//
Array(3015969, 1),//
Array(3015970, 1),//
Array(3015971, 1),//
Array(3015972, 1),//
Array(3015973, 1),//
Array(3015974, 1),//
Array(3015975, 1),//
Array(3015976, 1),//
Array(3015977, 1),//
Array(3015981, 1),//

Array(3018017, 1),//异人椅子
Array(3018018, 1),//
Array(3018019, 1),//
Array(3018020, 1),//
Array(3018021, 1),//
Array(3018022, 1),//
Array(3018023, 1),//
Array(3018024, 1),//
Array(3018025, 1),//
Array(3018026, 1),//
Array(3018027, 1),//
Array(3018051, 1),//
Array(3018052, 1),//
Array(3018066, 1),//
Array(3018067, 1),//
Array(3018068, 1),//
Array(3018069, 1),//豌豆马卡龙


Array(3018228, 1),//
Array(3018229, 1),//
Array(3018230, 1),//
Array(3018249, 1),//
Array(3018126, 1),//
Array(3018127, 1),//
Array(3018128, 1),//
Array(3018129, 1),//
Array(3018130, 1),//
Array(3018131, 1),//
Array(3018132, 1),//
Array(3018133, 1),//
Array(3018136, 1),//
Array(3018137, 1),//
Array(3018138, 1),//
Array(3018139, 1),//
Array(3018996, 1),//极限滑板椅子
Array(3018101, 1),//糖果甜心
Array(3018102, 1),//
Array(3018103, 1),//
Array(3018104, 1),//
Array(3018105, 1),//
Array(3018106, 1),//
Array(3018107, 1),//
//Array(3018108, 1),//
Array(3018111, 1),//
Array(3018112, 1),//时空掌控着
Array(3018113, 1),//
Array(3018114, 1),//
Array(3018134, 1),//
Array(3018135, 1),//
Array(3018136, 1),//
Array(3018137, 1),//
Array(3018138, 1),//
Array(3018139, 1),//
Array(3018140, 1),//
Array(3018141, 1),//
Array(3018142, 1),//
Array(3018143, 1),//
Array(3018144, 1),//
Array(3018145, 1),//
Array(3018146, 1),//
Array(3018147, 1),//
Array(3018148, 1),//
Array(3018149, 1),//
Array(3018150, 1),//
Array(3018153, 1),//
Array(3018168, 1),//
Array(3018171, 1),//
Array(3018172, 1),//
Array(3018173, 1),//
Array(3018174, 1),//
Array(3018175, 1),//
Array(3018176, 1),//
Array(3018177, 1),//
Array(3018181, 1),//
Array(3018182, 1),//
Array(3018183, 1),//
Array(3018184, 1),//
Array(3018185, 1),//
Array(3018186, 1),//
Array(3018187, 1),//
Array(3018188, 1),//
Array(3018189, 1),//
Array(3018193, 1),//
Array(3018195, 1),//
Array(3018196, 1),//
Array(3018197, 1),//
Array(3018198, 1),//
Array(3018201, 1),//
Array(3018202, 1),//
Array(3018203, 1),//
Array(3018204, 1),//
Array(3018205, 1),//
Array(3018227, 1),//
Array(3018228, 1),//
Array(3018229, 1),//
Array(3018245, 1),//
Array(3018246, 1),//
Array(3018247, 1),//
Array(3018255, 1),//
Array(3018259, 1),//
Array(3018264, 1),//
Array(3018265, 1),//
Array(3018267, 1),//
Array(3018285, 1),//
Array(3018286, 1),//
Array(3018287, 1),//
Array(3018288, 1),//
Array(3018289, 1),//
Array(3018290, 1),//
Array(3018109, 1)//帐篷椅
);


var rand = Math.floor(Math.random() * psrw.length);
var rand1 = Math.floor(Math.random() * psrw1.length);

function start() {
    status = -1;
    action(1, 0, 0);
}

function action(mode, type, selection) {
    if (status == 0 && mode == 0) {
        cm.dispose();
        return;
    }
    if (mode == 1) {
        status++;
    } else {
        status--;
    }
    if (status == 0) {
        cm.sendYesNo("#fs16##fn黑体#小施主你好呀\r\n你如果拥有#b20000点券#k,可以在我这里抽奖,我包包里面有各种炫酷的椅子是否想要试试手气，看您能获得什么?");
    } else if (status == 1) {
          if (cm.getChar().getCSPoints(1) < 20000) {
		cm.sendOk("没钱？");
		cm.dispose();
         } else if (cm.getSpace(3) < 1 && cm.getSpace(4) < 1 && cm.getSpace(5) < 1) {
		cm.sendOk("你保证你背包的每一栏都有空位");
		cm.dispose();
            } else {
			var sj = java.lang.Math.floor(Math.random() * 99 + 1);	
			if (sj <= 10){
	     item = cm.gainGachaponItem(psrw[rand][0],1, "椅子抽奖", 2);
		 cm.sendOk("获取了 #v"+psrw[rand][0]+"# #z"+psrw[rand][0]+"# 1个")
			}else if (sj > 10){
		 item = cm.gainGachaponItem(psrw1[rand1][0],1, "椅子抽奖", 1);	
           cm.sendOk("获取了 #v"+psrw1[rand1][0]+"# #z"+psrw1[rand1][0]+"# 1个")		 
			}
	   cm.gainNX(1,-20000); 
	   //cm.sendOk("获取了 #v"+psrw[rand][0]+"# #z"+psrw[rand][0]+"# 1个")
	   cm.dispose(); 
	}
		}
		}