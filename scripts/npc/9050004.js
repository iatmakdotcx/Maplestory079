var status = 0;
var item = 
Array(     
			Array(2040017,800,0), //头盔命中率卷轴60%
			Array(2040014,800,0), //头盔命中率诅咒卷轴70% 
			Array(2040013,800,0), //头盔智力卷轴30
			Array(2040012,800,0), //头盔智力卷轴70
			Array(2040105,800,0), //脸部装饰回避率卷轴10%
			Array(2040106,800,0), //脸部装饰回避率卷轴60%
			Array(2040108,800,0), //脸部装饰回避率诅咒卷轴30% 
			Array(2040109,800,0), //脸部装饰回避率诅咒卷轴70% 
			Array(2040200,800,0), //眼部装饰命中率卷轴10%
			Array(2040201,800,0), //眼部装饰命中率卷轴60%
			Array(2040203,800,0), //眼部装饰命中率诅咒卷轴30% 
			Array(2040204,800,0), //眼部装饰命中率诅咒卷轴70%
			Array(2040205,800,0), //眼部装饰智力卷轴10%
			Array(2040206,800,0), //眼部装饰智力卷轴60%
			Array(2040208,800,0), // 眼部装饰智力诅咒卷轴30%
			Array(2040209,800,0), //眼部装饰智力诅咒卷轴70%			
			Array(2040301,800,0), //耳环智力卷轴 60
			Array(2040302,800,0), //耳环智力卷轴 10
			Array(2040304,800,0), //耳环智力诅咒卷轴70
			Array(2040305,800,0), //耳环智力诅咒卷轴30
			Array(2040306,800,0), //耳环敏捷卷轴70
			Array(2040307,800,0), //耳环敏捷卷轴30
                        Array(2040406,800,0), //上衣力量卷轴70%
			Array(2040407,800,0), //上衣力量卷轴30
			Array(2040410,800,0), //上衣运气诅咒卷轴70%
			Array(2040411,800,0), //上衣运气诅咒卷轴30%
			Array(2040501,800,0), //全身铠甲敏捷卷轴60
			Array(2040509,800,0), //全身铠甲敏捷卷轴30
			Array(2040513,800,0), //全身铠甲智力卷轴60
			Array(2040518,800,0), //全身铠甲智力卷轴70
			Array(2040519,800,0), //全身铠甲智力卷轴30
			Array(2040610,800,0), //裤裙敏捷诅咒卷轴70
			Array(2040611,800,0), //裤裙敏捷诅咒卷轴30
			Array(2040613,800,0), //裤裙敏捷卷轴60%
			Array(2040704,800,0), //鞋子跳跃卷轴60
			Array(2040705,800,0), //鞋子跳跃卷轴10
			Array(2040715,800,0), //鞋子跳跃卷轴30
			Array(2040804,800,0), //手套攻击卷轴60
			Array(2040811,800,0), //手套攻击卷轴30
			Array(2040810,800,0), //手套攻击卷轴70
			Array(2040805,800,0), //手套攻击卷轴10
			Array(2040816,800,0), // 手套魔力卷轴10%
			Array(2040817,800,0), //手套魔力卷轴60%
			Array(2040815,800,0), //手套魔力卷轴30%
			Array(2040922,800,0), //盾牌魔力诅咒卷轴30%
			Array(2040919,800,0), //盾牌魔力诅咒卷轴60%
			Array(2040921,800,0), //盾牌魔力诅咒卷轴70%
			Array(2040914,800,0), // 盾牌攻击卷轴60%
			Array(2040916,700,0), //盾牌攻击卷轴70%
			Array(2040917,700,0), //盾牌攻击诅咒卷轴30%
			Array(2041013,900,0), //披风力量卷轴60
			Array(2041016,900,0), //披风智力卷轴60
			Array(2041019,900,0), //披风敏捷卷轴60
			Array(2041022,800,0), //披风运气卷轴60
			Array(2041200,100,0), //暗黑龙王石
			Array(2043005,800,0), //单手剑攻击诅咒卷轴30
			Array(2044005,800,0), //双手剑攻击诅咒卷轴30
			Array(2044305,800,0), //枪攻击诅咒卷轴30
			Array(2044405,800,0), //矛攻击诅咒卷轴30
			Array(2044505,800,0), //弓攻击诅咒卷轴30
			Array(2044605,800,0), //弩攻击诅咒卷轴30
			Array(2044705,800,0), //拳套攻击诅咒卷轴30
//-------耳环-------
			Array(1032004,800,0), //金耳环
			Array(1032005,800,0), //红十字耳环
			Array(1032006,800,0), //雷电耳环
			Array(1032007,800,0), //祖母綠耳环
			Array(1032008,800,0), //猫眼耳环
			Array(1032009,800,0), //黄方耳环
			Array(1032012,700,0), //骷髅耳环
			Array(1032017,700,0), //玫瑰耳环
			Array(1032018,700,0), //紫荆花耳环
			Array(1032019,400,0), //水仙耳环
			Array(1032022,400,0), //赤色圆型耳环
			Array(1032023,400,0), //草莓耳环
			Array(1032025,400,0), //叶子耳环
			Array(1032026,400,1), //黄水晶耳环
			Array(1032027,400,1), //黑水晶耳环
			Array(1032028,400,0), //红水晶耳环
			Array(1032035,300,1), //枫叶耳环
			Array(1032040,300,0), //枫叶型耳环
			Array(1032041,300,0), //枫叶型耳环
			Array(1032042,300,0), //枫叶型耳环
			Array(1032047,200,0), //可乐耳环
			Array(1032055,200,1), //工作人员C的旧收信机
			Array(1032056,200,1), //工作人员C的旧收信机
			Array(1032057,200,1), //工作人员C的旧收信机
			Array(1032058,200,1), //工作人员C钛质收信机
			//-------帽子-------
			Array(1002019,800,0), //白头巾
			Array(1002020,800,0), //红星头巾
			Array(1002021,800,0), //诺曼头盔
			Array(1002022,800,0), //旧诺曼头盔
			Array(1002023,800,0), //枪骑士头盔
			Array(1002024,800,0), //祖母綠武士头盔
			Array(1002030,800,0), //银制战帽
			Array(1002033,800,0), //狗皮帽
			Array(1002039,800,0), //青铜头盔
			Array(1002040,800,0), //锂矿帽
			Array(1002041,800,0), //黄色金属头箍
			Array(1002051,800,0), //青铜头盔
			Array(1002052,800,0), //锂矿头盔
			Array(1002053,800,0), //绿色皮帽
			Array(1002054,800,0), //红色皮帽
			Array(1002055,800,0), //青铜橄榄球帽
			Array(1002056,800,0), //锂矿橄榄球帽
			Array(1002057,800,0), //绿色高级皮帽
			Array(1002058,800,0), //锂矿海王头盔
			Array(1002059,800,0), //青铜海王头盔
			Array(1002060,800,0), //黑色棒球帽
			Array(1002061,800,0), //黄色棒球帽
			Array(1002062,800,0), //褐色棒球帽
			Array(1002063,800,0), //青色棒球帽
			Array(1002080,800,0), //红头巾
			Array(1002081,800,0), //青头巾
			Array(1002082,800,0), //黄头巾
			Array(1002083,800,0), //黑头巾
			Array(1002084,800,0), //将军青头盔
			Array(1002085,800,0), //锂矿十字军帽
			Array(1002086,800,0), //青铜十字军帽
			Array(1002087,800,0), //锂矿尖头盔
			Array(1002088,800,0), //黄金尖头盔
			Array(1002090,800,0), //蓝色斗笠
			Array(1002107,800,0), //飞侠红头巾
			Array(1002108,800,0), //飞侠蓝头巾
			Array(1002109,800,0), //飞侠绿头巾
			Array(1002110,800,0), //飞侠黑头巾
			Array(1002111,800,0), //飞侠黄头巾
			Array(1002161,800,0), //红冬羽
			Array(1002162,800,0), //蓝冬羽
			Array(1002163,800,0), //绿冬羽
			Array(1002164,800,0), //褐冬羽
			Array(1002165,800,0), //黑冬羽
			Array(1002171,800,0), //红假面帽
			Array(1002172,800,0), //蓝假面帽
			Array(1002173,800,0), //绿假面帽
			Array(1002174,800,0), //褐假面帽
			Array(1002175,800,0), //黑假面帽
			Array(1002176,800,0), //红防风帽
			Array(1002177,800,0), //蓝防风帽
			Array(1002178,800,0), //绿防风帽
			Array(1002179,800,0), //褐防风帽
			Array(1002180,800,0), //黑防风帽
			Array(1002181,800,0), //红海盗头巾
			Array(1002182,800,0), //蓝海盗头巾
			Array(1002183,800,0), //绿海盗头巾
			Array(1002184,800,0), //褐海盗头巾
			Array(1002185,800,0), //黑海盗头巾
			Array(1002207,800,0), //红黑太阳帽
			Array(1002208,800,0), //蓝黑太阳帽
			Array(1002209,800,0), //绿黑太阳帽
			Array(1002210,800,0), //黄黑太阳帽
			Array(1002211,800,0), //蓝贵族软帽
			Array(1002212,800,0), //红贵族软帽
			Array(1002213,800,0), //绿贵族软帽
			Array(1002214,800,0), //黑贵族软帽
			Array(1002215,800,0), //火黃金法冠
			Array(1002216,800,0), //水黃金法冠
			Array(1002217,800,0), //土黃金法冠
			Array(1002218,800,0), //黑黃金法冠

			Array(1002274,800,0), //黑十字帽
			Array(1002275,800,0), //蓝黄金翼帽
			Array(1002276,800,0), //红黄金翼帽
			Array(1002277,800,0), //绿黄金翼帽
			Array(1002278,800,0), //黑黄金翼帽
			Array(1002281,800,0), //褐天空之帽
			Array(1002282,800,0), //蓝天空之帽
			Array(1002283,800,0), //紫天空之帽
			Array(1002284,800,0), //白天空之帽
			Array(1002285,800,0), //红天空之帽
			Array(1002286,800,0), //蓝司令帽
			Array(1002287,800,0), //白黄司令帽
			Array(1002288,800,0), //绿司令帽
			Array(1002289,800,0), //黑司令帽
			Array(1002323,800,0), //蓝扣带帽
			Array(1002324,800,0), //褐扣带帽
			Array(1002325,800,0), //紫扣带帽
			Array(1002326,800,0), //红扣带帽
			Array(1002327,800,0), //褐色海盗帽
			Array(1002328,800,0), //绿色海盗帽
			Array(1002329,800,0), //红色海盗帽
			Array(1002330,800,0), //黑色海盗帽
			Array(1002363,800,0), //圣职帽(绿)
			Array(1002364,800,0), //圣职帽(蓝)
			Array(1002365,800,0), //圣职帽(红)
			Array(1002366,800,0), //圣职帽(黑)
			Array(1002377,300,0), //龙纹头盔(绿)
			Array(1002378,300,0), //龙纹头盔(蓝)
			Array(1002379,300,0), //龙纹头盔(黑)
			Array(1002380,300,0), //侠盗帽(绿)
			Array(1002381,300,0), //侠盗帽(蓝)
			Array(1002382,300,0), //侠盗帽(红)
			Array(1002383,300,0), //侠盗帽(黑)
			Array(1002391,300,0), //海盗头巾(绿)
			Array(1002392,300,0), //海盗头巾(红)
			Array(1002393,300,0), //海盗头巾(粉)
			Array(1002394,300,0), //海盗头巾(灰)
			Array(1002395,300,0), //海盗头巾(紫)
			Array(1002398,300,0), //杰斯特帽(绿)
			Array(1002399,300,0), //杰斯特帽(蓝)
			Array(1002400,300,0), //杰斯特帽(红)
			Array(1002401,300,0), //杰斯特帽(黑)
			Array(1002402,300,0), //鹰眼头盔(红)
			Array(1002403,300,0), //鹰眼头盔(蓝)
			Array(1002404,300,0), //鹰眼头盔(绿)
			Array(1002405,300,0), //鹰眼头盔(黑)
			Array(1002418,100,0), //废报纸头盔
			Array(1002419,300,0), //枫叶帽
			Array(1002424,300,1), //红马术帽
			Array(1002425,300,1), //蓝马术帽
			Array(1002436,300,0), //长老斯坦之帽
			Array(1002441,300,0), //热血头带
			Array(1002448,300,0), //紫色头巾
			Array(1002452,300,0), //黑星白头巾
			Array(1002453,300,0), //白星黑头巾
			Array(1002454,300,0), //红星黑头巾
			Array(1002455,300,0), //黑星红头巾
			Array(1002492,300,0), //白色棒球帽
			Array(1002543,300,0), //板栗帽
			Array(1002550,300,0), //黑色格莱西头盔
			Array(1002551,300,0), //蓝龙头盔
			Array(1002554,300,0), //武艺头绳
			Array(1002562,300,0), //青苹果帽
			Array(1002583,300,0), //蝙蝠客头套
			Array(1002609,300,0), //兔耳魔法帽
			Array(1002610,300,0), //水手头巾
			Array(1002613,300,0), //水手帽
			Array(1002616,300,0), //水兵头巾
			Array(1002619,300,0), //兵长头巾
			Array(1002622,300,0), //水兵帽
			Array(1002625,300,0), //海盗睡帽
			Array(1002628,300,0), //三眼海盗帽
			Array(1002631,300,0), //船头
			Array(1002634,300,0), //骷髅巾
			Array(1002637,300,0), //绞杀包头
			Array(1002640,10,1), //冲锋帽
			Array(1002643,10,1), //血海头巾
			Array(1002656,10,1), //白色忍者头巾
			Array(1002663,10,1), //可乐帽子
			Array(1002665,10,1), //西红柿帽
			Array(1002677,10,1), //玩具匠人帽
			Array(1002695,10,1), //幽灵帽
			Array(1002699,10,1), //南瓜帽子
			Array(1002707,10,1), //假面绅士帽子
			Array(1002723,10,1), //月饼帽
			Array(1002760,10,1), //地球帽
			Array(1002761,10,1), //枫叶面具
			Array(1002773,10,1), //金龙头盔
			Array(1002776,10,1), //永恒冠军盔
			Array(1002777,10,1), //永恒玄妙帽
			Array(1002778,10,1), //永恒霓翎帽
			Array(1002779,10,1), //永恒迷踪帽
			Array(1002780,10,1), //永恒海王星
			Array(1002790,10,1), //重生冠军盔
			Array(1002791,10,1), //重生玄妙帽
			Array(1002792,10,1), //重生霓翎帽
			Array(1002793,10,1), //重生迷踪帽
			Array(1002794,10,1), //重生海王星
			//------披风------
			Array(1102000,700,0), //绿色冒险披风
			Array(1102001,700,0), //蓝色冒险披风
			Array(1102002,700,0), //红色冒险披风
			Array(1102003,700,0), //白色冒险披风
			Array(1102041,200,1), //浪人披风(粉)
			Array(1102042,200,1), //浪人披风(紫)
			Array(1102043,200,1), //浪人披风(褐)
			Array(1102046,30,0), //侯爵披风
			Array(1102047,20,0), //伯爵披风
			Array(1102048,10,1), //公爵披风
			Array(1102140,20,0), //卡帕莱特披风
			Array(1102147,20,0), //玩具匠人披风
			Array(1102172,10,1), //永恒不灭披风
			Array(1102174,100,0), //工作人员披风
			Array(1102166,100,0), //枫叶披风
			Array(1102167,100,0), //枫叶披风
			Array(1102168,100,0), //枫叶披风
			//------手套------
			Array(1082000,300,0), //钢制短手套
			Array(1082001,300,0), //白纹短手套
			Array(1082002,300,0), //工地手套
			Array(1082003,300,0), //腕甲
			Array(1082004,300,0), //皮手套
			Array(1082005,300,0), //钢制机器手套
			Array(1082006,300,0), //紫矿机器手套
			Array(1082007,300,0), //青铜机器手套
			Array(1082008,300,0), //铁制轻便手套
			Array(1082009,300,0), //钢铁合金手套
			Array(1082031,300,0), //黑短指手套
			Array(1082032,300,0), //青铜飞侠手套
			Array(1082033,300,0), //锂矿飞侠手套
			Array(1082034,300,0), //黑飞侠手套
			Array(1082035,300,0), //黄轻便手套
			Array(1082036,300,0), //黑轻便手套
			Array(1082037,300,0), //青铜精神手套
			Array(1082038,300,0), //锂矿精神手套
			Array(1082039,300,0), //黑精神手套
			Array(1082042,300,0), //钢铁暴风手套
			Array(1082043,300,0), //银暴风手套
			Array(1082044,300,0), //黄金暴风手套
			Array(1082045,300,0), //黄金追击手套
			Array(1082046,300,0), //钢铁追击手套
			Array(1082047,300,0), //紫矿追击手套
			Array(1082048,300,0), //褐击中手套
			Array(1082049,300,0), //绿击中手套
			Array(1082050,300,0), //黑击中手套
			Array(1082051,300,0), //红守护手套
			Array(1082052,300,0), //蓝守护手套
			Array(1082053,300,0), //黑守护手套
			Array(1082054,300,0), //红神圣手套

			Array(1082069,300,0), //锂矿名弓手套
			Array(1082070,300,0), //黄金名弓手套
			Array(1082071,300,0), //蓝勇气手套
			Array(1082072,300,0), //黄金勇气手套
			Array(1082073,300,0), //黑勇气手套
			Array(1082074,300,0), //黑侠客手套
			Array(1082075,300,0), //红侠客手套
			Array(1082076,300,0), //黄金侠客手套
			Array(1082080,300,0), //黑元素手套
			Array(1082081,300,0), //红元素手套
			Array(1082082,300,0), //蓝元素手套
			Array(1082083,300,0), //黑意志手套
			Array(1082084,300,0), //蓝意志手套
			Array(1082085,300,0), //红意志手套
			Array(1082086,300,0), //钢铁封印手套
			Array(1082087,300,0), //黄金封印手套
			Array(1082088,300,0), //黑封印手套
			Array(1082108,300,0), //黑神眼手套
			Array(1082109,300,0), //红天使手套
			Array(1082110,300,0), //蓝天使手套
			Array(1082111,300,0), //绿天使手套
			Array(1082112,300,0), //黑天使手套
			Array(1082114,300,0), //马尔斯蓝拳套
			Array(1082115,300,0), //马尔斯绿拳套
			Array(1082116,300,0), //马尔斯红拳套
			Array(1082117,300,0), //马尔斯黑拳套
			Array(1082118,300,0), //德古拉蓝手套
			Array(1082119,300,0), //德古拉紫手套
			Array(1082120,300,0), //德古拉红手套
			Array(1082121,300,0), //魔力绿手套
			Array(1082122,300,0), //魔力蓝手套
			Array(1082123,300,0), //魔力青手套
			Array(1082125,300,0), //弦影手套(红)
			Array(1082126,300,0), //弦影手套(绿)
			Array(1082127,300,0), //弦影手套(黑)
			Array(1082128,300,0), //裂天手套(绿)
			Array(1082129,300,0), //裂天手套(紫)
			Array(1082130,300,0), //裂天手套(紫)
			Array(1082131,300,0), //杰斯特手套(蓝)
			Array(1082143,300,0), //幻光手套(紫)
			Array(1082144,300,0), //幻光手套(红)
			Array(1082145,200,1), //工地手套(黄)
			Array(1082146,200,1), //工地手套(红)
			Array(1082147,200,1), //工地手套(蓝)
			Array(1082148,200,1), //工地手套(紫)
			Array(1082149,200,1), //工地手套(褐)
			Array(1082150,200,1), //工地手套(灰)
			Array(1082151,50,0), //幻魔手套(绿)
			Array(1082152,50,0), //幻魔手套(蓝)
			Array(1082153,50,0), //幻魔手套(红)
			Array(1082154,50,0), //幻魔手套(黑)
			Array(1082158,300,0), //红色条纹手套
			Array(1082159,300,0), //蓝色条纹手套
			Array(1082160,300,0), //绿色条纹手套
			Array(1082163,300,0), //红猎人手套
			Array(1082164,300,0), //蓝色元素手套
			Array(1082167,300,0), //黑色格丽纳手套
			Array(1082168,300,0), //青龙手套
			Array(1082175,300,0), //马绍尔手套(赤)
			Array(1082176,300,0), //马绍尔手套(青)
			Array(1082177,300,0), //马绍尔手套(紫
			Array(1082178,300,0), //马绍尔手套(桃)
			Array(1082179,300,0), //马绍尔手套(黄)
			Array(1082234,10,1), //永恒定边手套
			Array(1082235,10,1), //永恒逍遥手套
			Array(1082236,10,1), //永恒白云手套
			Array(1082237,10,1), //永恒探云手套
			Array(1082238,10,1), //永恒抚浪手套
			Array(1082239,10,1), //重生定边手套
			Array(1082240,10,1), //重生逍遥手套
			Array(1082241,10,1), //重生白云手套
			Array(1082242,10,1), //重生探云手套
			Array(1082243,10,1), //重生抚浪手套
			//-------武器------
			Array(1302016,300,0), //黄色雨伞
			Array(1302017,300,0), //蓝色雨伞
			Array(1302018,300,0), //汤勺
			Array(1302019,300,0), //无名剑
			Array(1302020,300,0), //枫叶战剑
			Array(1302021,300,0), //橡皮榔头
			Array(1302022,300,0), //竹刀
			Array(1302023,300,0), //六脉神剑
			Array(1302024,300,0), //废报纸卷
			Array(1302025,300,0), //红雨伞
			Array(1302026,300,0), //黑雨伞
			Array(1302027,300,0), //绿雨伞
			Array(1302028,300,0), //紫雨伞
			Array(1302029,300,0), //褐雨伞
			Array(1302030,300,0), //枫叶剑
			Array(1302031,300,0), //七星剑
			Array(1302032,300,0), //烈焰之剑
			Array(1302035,300,0), //枫叶旗
			Array(1302036,300,0), //枫叶旗
			Array(1302042,300,0), //汤勺
			Array(1302043,300,0), //战剑
			Array(1302044,300,0), //树灵之剑
			Array(1302045,300,0), //奇型刀
			Array(1302046,300,0), //奇型刀
			Array(1302047,300,0), //汤勺
			Array(1302049,300,1), //光线鞭子
			Array(1302050,300,0), //战剑
			Array(1302051,300,0), //树灵之剑
			Array(1302052,300,0), //奇型刀
			Array(1302053,300,0), //奇型刀
			Array(1302054,300,0), //汤勺
			Array(1302056,300,0), //一刀两断
			Array(1302058,300,1), //冒险岛伞
			Array(1302059,300,0), //狂龙闪电剑
			Array(1302060,300,0), //战剑
			Array(1302061,300,1), //蔓藤鞭子
			Array(1302063,300,1), //燃烧的火焰刀
			Array(1302064,300,0), //枫叶突击剑
			Array(1302066,300,0), //枫叶3年旗
			Array(1302067,300,0), //枫叶庆典旗
			Array(1302068,300,0), //薄光刃
			Array(1302071,300,0), //粉色花边游泳圈
			Array(1302077,300,0), //新手战士之剑
			Array(1302080,300,1), //七彩霓虹灯泡
			Array(1302081,10,1), //永恒破甲剑
			Array(1302084,300,0), //火柴
			Array(1302085,300,0), //叉子
			Array(1302086,10,1), //重生破甲剑
			Array(1302087,300,0), //火炬
			Array(1302104,300,0), //鱿鱼剑
			Array(1302105,10,1), //圣诞六翼天使武器(单手剑)
			Array(1312000,300,0), //双刃斧
			Array(1312001,300,0), //战斗斧
			Array(1312002,300,0), //镰刀
			Array(1312012,300,0), //乾坤圈
			Array(1312013,300,0), //判官笔
			Array(1312014,300,0), //阎王笔
			Array(1312030,300,0), //烛影摇红
			Array(1312031,300,0), //狂龙怒斩
			Array(1312032,300,0), //枫叶破击斧
			Array(1312033,300,0), //枫叶3年旗
			Array(1312034,300,0), //粉色花边游泳圈
			Array(1312037,10,1), //永恒断蚺斧
			Array(1312038,10,1), //重生断蚺斧
			Array(1312039,10,1), //圣诞六翼天使武器(单手斧)
			Array(1322000,300,0), //铁瓜锤
			Array(1322001,300,0), //锤子
			Array(1322002,300,0), //钢锤
			Array(1322003,300,0), //棒棒果
			Array(1322004,300,0), //奇型锤
			Array(1322005,300,0), //棍棒
			Array(1322006,300,0), //钢管
			Array(1322007,300,0), //皮制手提包
			Array(1322008,300,0), //007提包
			Array(1322009,100,0), //马桶吸
			Array(1322010,300,0), //方形铁铲
			Array(1322011,300,0), //三角铁铲
			Array(1322012,100,0), //红色砖头
			Array(1322014,300,0), //大战斗锤
			Array(1322015,300,0), //骑士锤
			Array(1322016,300,0), //重锤
			Array(1322017,300,0), //旋风锤
			Array(1322018,300,0), //巨型锤
			Array(1322027,10,1), //米伽勒的平底锅
			Array(1322028,300,0), //钉头锤
			Array(1322029,300,0), //雷神钉
			Array(1322031,300,0), //葵花宝典
			Array(1322032,300,0), //铁头锤
			Array(1322033,300,0), //鬼怪棒
			Array(1322034,300,0), //铁棍
			Array(1322035,300,0), //大战斗锤
			Array(1322036,300,0), //旋风锤
			Array(1322037,300,0), //巨型锤
			Array(1322038,300,0), //暴风锤
			Array(1322051,300,1), //七夕
			Array(1322052,300,0), //狂龙地锤
			Array(1322054,300,0), //枫叶地震锤
			Array(1322055,300,0), //枫叶3年旗
			Array(1322056,300,0), //粉色花边游泳圈
			Array(1322060,10,1), //永恒惊破天
			Array(1322061,10,1), //重生惊破天
			Array(1322065,10,1), //圣诞六翼天使武器(单手钝器)
			Array(1322071,300,0), //采矿铁锹
			Array(1332000,300,0), //三角刃
			Array(1332001,300,0), //半月刃
			Array(1332002,300,0), //三指刃
			Array(1332003,300,0), //破碎刃
			Array(1332004,300,0), //双枝短刀
			Array(1332005,300,0), //刮胡刀
			Array(1332006,300,0), //战斗短刀
			Array(1332007,300,0), //短刀
			Array(1332008,300,0), //牙刀
			Array(1332025,300,0), //枫叶刃
			Array(1332026,300,0), //闪电刃
			Array(1332027,300,0), //飞羽刃
			Array(1332028,300,0), //烈焰之刃
			Array(1332029,300,0), //双古剑
			Array(1332030,300,0), //团扇
			Array(1332031,300,0), //龙刃
			Array(1332032,300,0), //圣诞树
			Array(1332033,300,0), //水晶刃
			Array(1332034,300,0), //破碎刃
			Array(1332035,300,0), //双翼刃
			Array(1332036,300,0), //凤凰刃
			Array(1332037,300,0), //黑精灵拳刃
			Array(1332038,300,0), //水晶刃
			Array(1332039,300,0), //破碎刃
			Array(1332040,300,0), //双翼刃
			Array(1332041,300,0), //凤凰刃
			Array(1332047,300,0), //黑精灵拳刃
			Array(1332049,300,0), //蝉翼龙牙破
			Array(1332050,300,0), //半月龙鳞裂
			Array(1332051,300,0), //黄金双牙钩
			Array(1332052,300,0), //阴风碎魂刃
			Array(1332053,300,0), //野外烧烤串
			Array(1332054,300,0), //闪电飞刀
			Array(1332055,300,0), //枫叶锁魄铗
			Array(1332056,300,0), //枫叶追魂刺
			Array(1332057,300,0), //枫叶3年旗
			Array(1332059,300,0), //粉色花边游泳圈
			Array(1332063,300,0), //初级盗贼的短剑
			Array(1332066,300,0), //新手刮胡刀
			Array(1332073,10,1), //永恒狂鲨锯
			Array(1332074,10,1), //永恒断首刃
			Array(1332075,10,1), //重生狂鲨锯
			Array(1332076,10,1), //重生断首刃
			Array(1332081,10,1), //圣诞六翼天使武器(短剑)
			Array(1372008,300,0), //金属短杖
			Array(1372009,300,0), //慈悲为怀
			Array(1372010,300,0), //嗜魂法杖
			Array(1372011,300,0), //羽扇
			Array(1372012,300,0), //水晶短杖
			Array(1372013,300,0), //竹杖
			Array(1372014,300,0), //火焰之杖
			Array(1372015,300,0), //天使之翼
			Array(1372016,300,0), //凤凰短杖
			Array(1372017,300,0), //领路灯
			Array(1372018,300,0), //法师短杖
			Array(1372019,300,0), //大魔法师短杖
			Array(1372020,300,0), //火焰之杖
			Array(1372021,300,0), //天使之翼
			Array(1372034,300,0), //枫叶仙姬杖
			Array(1372035,300,0), //火灵珠短杖
			Array(1372036,300,0), //毒灵珠短杖
			Array(1372037,300,0), //冰灵珠短杖
			Array(1372038,300,0), //雷灵珠短杖
			Array(1372039,300,0), //爆炎之杖
			Array(1372040,300,0), //剧毒之杖
			Array(1372041,300,0), //寒冰之杖
			Array(1372042,300,0), //狂雷之杖
			Array(1372043,300,0), //初级魔法师的杖
			Array(1372044,10,1), //永恒蝶翼杖
			Array(1372045,10,1), //重生蝶翼杖
			Array(1372046,10,1), //圣诞六翼天使武器(短杖)
			Array(1382000,300,0), //木制长杖
			Array(1382001,300,0), //精灵长杖
			Array(1382002,300,0), //法师长杖
			Array(1382003,300,0), //蓝宝石长杖
			Array(1382004,300,0), //古树长杖
			Array(1382005,300,0), //祖母綠长杖
			Array(1382006,300,0), //白龙之杖
			Array(1382007,300,0), //魔灵之翼
			Array(1382008,300,0), //魔灵之魂
			Array(1382009,300,0), //枫叶权杖
			Array(1382010,300,0), //死灵法杖
			Array(1382011,300,0), //枫树杖
			Array(1382012,300,0), //枫叶杖
			Array(1382013,300,0), //烈焰之杖
			Array(1382014,300,0), //孙家之杖
			Array(1382015,10,1), //毒蘑菇
			Array(1382016,10,1), //香菇
			Array(1382017,300,0), //金轮杖
			Array(1382018,300,0), //翡翠之杖
			Array(1382019,300,0), //护法之杖
			Array(1382020,300,0), //精灵长杖
			Array(1382032,300,0), //魔灵之翼
			Array(1382033,300,0), //死灵法杖
			Array(1382034,300,0), //魔灵之魂
			Array(1382035,300,0), //冰肌玲珑杖
			Array(1382036,300,0), //黑精灵王杖
			Array(1382037,300,0), //偃月之杖
			Array(1382039,300,0), //枫叶丹心杖
			Array(1382040,300,0), //枫叶3年旗
			Array(1382041,300,0), //夜行權杖
			Array(1382042,300,0), //粉色花边游泳圈
			Array(1382045,300,0), //火灵珠长杖
			Array(1382046,300,0), //毒灵珠长杖
			Array(1382047,300,0), //冰灵珠长杖
			Array(1382048,300,0), //雷灵珠长杖
			Array(1382049,10,1), //朱雀长杖
			Array(1382050,10,1), //玄武长杖
			Array(1382051,10,1), //白虎长杖
			Array(1382052,10,1), //青龙长杖
			Array(1382057,10,1), //永恒冰轮杖
			Array(1382059,10,1), //重生冰轮杖
			Array(1382062,10,1), //圣诞六翼天使武器(长杖)
			Array(1402006,300,0), //高原之剑
			Array(1402007,300,0), //半月巨刀
			Array(1402008,300,0), //钢铁剑
			Array(1402009,300,0), //木球棍
			Array(1402010,300,0), //铝球棍
			Array(1402011,300,0), //无极剑
			Array(1402012,300,0), //霸王剑
			Array(1402013,300,1), //白日剑
			Array(1402014,10,1), //温度计
			Array(1402015,300,0), //亚历山大之剑
			Array(1402016,300,0), //所罗门之剑
			Array(1402017,300,0), //船长佩剑
			Array(1402029,300,0), //鬼刺狼牙棒
			Array(1402030,300,0), //大刀
			Array(1402031,300,0), //虎剑
			Array(1402032,300,0), //无极剑
			Array(1402033,300,0), //霸王剑
			Array(1402034,300,0), //亚历山大之剑
			Array(1402035,300,0), //斩天刀
			Array(1402036,300,0), //飞龙巨剑
			Array(1402037,50,1), //龙背刃
			Array(1402039,300,0), //枫叶枭首剑
			Array(1402040,300,0), //枫叶3年旗
			Array(1402041,300,0), //粉色花边游泳圈
			Array(1402044,300,1), //南瓜灯笼
			Array(1402046,10,1), //永恒玄冥剑
			Array(1402047,10,1), //重生玄冥剑
			Array(1402053,10,1), //圣诞六翼天使武器(双手剑)
			Array(1412000,300,0), //双手斧
			Array(1412001,300,0), //铁斧
			Array(1412002,300,0), //钢铁斧
			Array(1412003,300,0), //太阳之斧
			Array(1412026,300,0), //炼狱魔龙斧
			Array(1412027,300,0), //枫叶乾坤轮
			Array(1412028,300,0), //枫叶3年旗
			Array(1412029,300,0), //粉色花边游泳圈
			Array(1412033,10,1), //永恒碎鼋斧
			Array(1412034,10,1), //重生碎鼋斧
			Array(1412035,10,1), //圣诞六翼天使武器(双手斧)
			Array(1422004,300,0), //板手
			Array(1422005,300,0), //黄金锤
			Array(1422006,300,0), //十字镐
			Array(1422007,300,0), //巨人锤
			Array(1422008,300,0), //大锤
			Array(1422009,300,0), //妖精之锤
			Array(1422010,300,0), //封魂之锤
			Array(1422011,300,0), //酒瓶
			Array(1422012,300,0), //雷神之锤
			Array(1422013,300,0), //狮子之魂
			Array(1422014,300,0), //枫叶锤
			Array(1422015,300,0), //黄金锤
			Array(1422028,300,0), //金龙轰天锤
			Array(1422029,300,0), //枫叶轰天镗
			Array(1422030,100,0), //粉红海豹抱枕
			Array(1422031,100,0), //蓝色海豹抱枕
			Array(1422032,300,0), //枫叶3年旗
			Array(1422033,300,0), //粉色花边游泳圈
			Array(1422036,300,0), //玩具匠人的锤子
			Array(1422037,10,1), //永恒威震天
			Array(1422038,10,1), //重生威震天
			Array(1422039,10,1), //圣诞六翼天使武器(双手钝器)
			Array(1432000,300,0), //长枪
			Array(1432001,300,0), //叉枪
			Array(1432002,300,0), //三支枪
			Array(1432003,300,0), //刺枪
			Array(1432004,300,0), //长八蛇矛
			Array(1432005,300,0), //双天戟
			Array(1432006,300,0), //十字枪
			Array(1432007,300,0), //银龙枪
			Array(1432008,300,0), //海神叉
			Array(1432009,300,0), //木精灵枪
			Array(1432010,300,0), //奥丁手戟
			Array(1432011,300,0), //寒冰破魔枪
			Array(1432012,300,0), //枫叶枪
			Array(1432013,300,0), //南瓜枪
			Array(1432014,300,0), //海神叉
			Array(1432015,300,0), //红色滑雪板
			Array(1432016,300,0), //橙色滑雪板
			Array(1432017,300,0), //绿色滑雪板
			Array(1432018,300,0), //蓝色滑雪板
			Array(1432019,300,0), //三支枪
			Array(1432020,300,0), //长八蛇矛
			Array(1432021,300,0), //十字枪
			Array(1432022,300,0), //银龙枪
			Array(1432023,300,0), //奥丁手戟
			Array(1432024,300,0), //三支枪
			Array(1432025,300,0), //长八蛇矛
			Array(1432026,300,0), //十字枪
			Array(1432027,300,0), //银龙枪
			Array(1432028,300,0), //奥丁手戟
			Array(1432030,300,0), //红莲落神枪
			Array(1432031,300,0), //三支枪
			Array(1432032,300,0), //长八蛇矛
			Array(1432033,300,0), //十字枪
			Array(1432034,300,0), //银龙枪
			Array(1432035,300,0), //奥丁手戟
			Array(1432037,300,0), //枫叶大将旗
			Array(1432038,10,1), //盘龙七冲枪
			Array(1432039,300,0), //钓鱼竿
			Array(1432040,300,0), //枫叶钻天枪
			Array(1432041,300,0), //枫叶3年旗
			Array(1432042,300,0), //粉色花边游泳圈
			Array(1432046,10,1), //圣诞树手杖
			Array(1432047,10,1), //永恒显圣枪
			Array(1432048,300,0), //铲子
			Array(1432049,10,1), //重生显圣枪
			Array(1432050,10,1), //圣诞六翼天使武器(枪)
			Array(1442002,300,0), //月灵戟
			Array(1442003,300,0), //斧戟
			Array(1442004,300,0), //拖把
			Array(1442005,300,0), //九龙刀
			Array(1442006,300,0), //蓝铁锤
			Array(1442007,300,0), //幻影
			Array(1442008,300,0), //黄龙刀
			Array(1442009,300,0), //月牙戟
			Array(1442010,300,0), //方天戟
			Array(1442011,300,0), //冲浪板
			Array(1442012,300,0), //天空雪板
			Array(1442013,300,0), //沧海雪板
			Array(1442014,300,0), //银雪板
			Array(1442015,300,0), //黄金雪板
			Array(1442016,300,0), //黑雪板
			Array(1442017,300,0), //赤血雪板
			Array(1442018,10,1), //冻冻鱼
			Array(1442019,300,0), //月神刀
			Array(1442020,300,0), //巨灵开山斧
			Array(1442021,300,0), //黄拖把
			Array(1442022,300,0), //白拖把
			Array(1442023,300,0), //黑拖把
			Array(1442024,300,0), //枫叶矛
			Array(1442025,300,0), //青龙偃月刀
			Array(1442026,300,0), //红色冲浪板
			Array(1442027,300,0), //绿色冲浪板
			Array(1442028,300,0), //蓝色冲浪板
			Array(1442029,300,0), //紫色冲浪板
			Array(1442030,300,0), //枫之雪板
			Array(1442031,300,0), //九龙刀
			Array(1442032,300,0), //方天戟
			Array(1442033,300,0), //黄龙刀
			Array(1442034,300,0), //月神刀
			Array(1442035,300,0), //九龙刀
			Array(1442036,300,0), //方天戟
			Array(1442037,300,0), //黄龙刀
			Array(1442038,300,0), //月神刀
			Array(1442039,300,0), //冻冻鱼
			Array(1442040,300,0), //九龙刀
			Array(1442041,300,0), //方天戟
			Array(1442042,300,0), //黄龙刀
			Array(1442043,300,0), //月神刀
			Array(1442044,300,0), //战魂斗杀戟
			Array(1442045,300,0), //血龙神斧
			Array(1442046,300,0), //超级滑雪板
			Array(1442051,300,0), //枫叶强袭斧
			Array(1442052,300,0), //枫叶3年旗
			Array(1442053,300,0), //粉色花边游泳圈
			Array(1442054,300,0), //红色滑水板
			Array(1442055,300,0), //绿色滑水板
			Array(1442056,300,0), //蓝色滑水板
			Array(1442057,300,0), //紫色滑水板
			Array(1442063,10,1), //永恒神光戟
			Array(1442065,300,0), //蓝色冲浪板
			Array(1442066,300,0), //红色冲浪板
			Array(1442067,10,1), //重生神光戟
			Array(1442069,300,0), //红色冲浪板
			Array(1442070,300,0), //绿色冲浪板
			Array(1442071,10,1), //圣诞六翼天使武器(矛)
			Array(1452000,300,0), //战斗弓
			Array(1452001,300,0), //打猎弓
			Array(1452002,300,0), //长弓
			Array(1452003,300,0), //钢铁弓
			Array(1452004,300,0), //凤凰之弓
			Array(1452005,300,0), //雷电
			Array(1452006,300,0), //火焰之弓
			Array(1452007,300,0), //暴风弓
			Array(1452008,300,0), //天弓
			Array(1452009,300,0), //赤神弓
			Array(1452010,300,0), //青神弓
			Array(1452011,300,0), //黄神弓
			Array(1452012,300,0), //青龙弓
			Array(1452013,300,0), //朱雀弓
			Array(1452014,300,0), //黄虎弓
			Array(1452015,300,0), //玄武弓
			Array(1452016,300,0), //漂云之弓
			Array(1452017,300,0), //魔翼之弓
			Array(1452018,300,0), //天蝎之弓
			Array(1452019,300,0), //天鹰弓(白)
			Array(1452020,300,0), //天鹰弓(黄)
			Array(1452021,300,0), //天鹰弓(黑)
			Array(1452022,300,0), //枫叶弓
			Array(1452023,300,0), //曹家之弓
			Array(1452024,300,0), //绿林弓
			Array(1452025,300,0), //蓝色梅杜斯
			Array(1452026,300,0), //黑色梅杜斯
			Array(1452044,300,0), //金龙振翅弓
			Array(1452045,300,0), //枫叶HAPPY弓
			Array(1452046,300,0), //枫叶3年旗
			Array(1452048,300,0), //粉色花边游泳圈
			Array(1452051,300,0), //初级弓手的弓
			Array(1452057,10,1), //永恒惊电弓
			Array(1452059,10,1), //重生惊电弓
			Array(1452062,10,1), //圣诞六翼天使武器(弓)
			Array(1462000,300,0), //山羊弩
			Array(1462001,300,0), //弩弓
			Array(1462002,300,0), //战斗弩弓
			Array(1462003,300,0), //猎弩弓
			Array(1462004,300,0), //鹰弩
			Array(1462005,300,0), //双弦弩
			Array(1462006,300,0), //白银弩
			Array(1462007,300,0), //炎弩
			Array(1462008,300,0), //黄金弩
			Array(1462014,300,0), //枫叶玉弩
			Array(1462015,300,0), //光圣鹞弩(白)
			Array(1462016,300,0), //金圣鹞弩(黄)
			Array(1462017,300,0), //黑暗圣鹞弩
			Array(1462018,300,0), //红炎神机弩
			Array(1462019,300,0), //枫叶弩
			Array(1462020,300,0), //烈焰之弩
			Array(1462021,300,0), //闇黑弩
			Array(1462022,300,0), //黄色可撒弩
			Array(1462023,300,0), //山羊弩
			Array(1462024,300,0), //炎弩
			Array(1462025,300,0), //黄金弩
			Array(1462026,300,0), //破天弩弓
			Array(1462027,300,0), //黑暗弩弓
			Array(1462028,300,0), //山羊弩
			Array(1462029,300,0), //炎弩
			Array(1462030,300,0), //黄金弩
			Array(1462031,300,0), //破天弩弓
			Array(1462032,300,0), //黑暗弩弓
			Array(1462033,300,0), //山羊弩
			Array(1462034,300,0), //炎弩
			Array(1462035,300,0), //黄金弩
			Array(1462036,300,0), //破天弩弓
			Array(1462037,300,0), //黑暗弩弓
			Array(1462039,300,0), //黄金飞龙弩
			Array(1462040,300,0), //枫叶击星弩
			Array(1462041,300,0), //枫叶3年旗
			Array(1462043,300,0), //粉色花边游泳圈
			Array(1462050,10,1), //永恒冥雷弩
			Array(1462051,10,1), //重生冥雷弩
			Array(1462056,10,1), //圣诞六翼天使武器(弩)
			Array(1472003,300,0), //黄金拳套
			Array(1472010,300,0), //朱矿斗拳
			Array(1472011,300,0), //青铜守护拳套
			Array(1472012,300,0), //银守护拳套
			Array(1472013,300,0), //黑守护拳套
			Array(1472014,300,0), //钢铁护腕
			Array(1472015,300,0), //赤红护腕
			Array(1472016,300,0), //朱矿护腕
			Array(1472017,300,0), //黑护腕
			Array(1472018,300,0), //钢铁手甲
			Array(1472019,300,0), //赤红手甲
			Array(1472020,300,0), //蓝宝手甲
			Array(1472021,300,0), //黑手甲
			Array(1472043,300,0), //龙之拳
			Array(1472045,300,0), //朱矿斗拳
			Array(1472046,300,0), //黑手甲
			Array(1472047,300,0), //黑战神拳套
			Array(1472048,300,0), //黑闪电甲
			Array(1472049,300,0), //龙之拳
			Array(1472051,300,0), //寒木升龙拳
			Array(1472052,300,0), //碧水落龙拳
			Array(1472053,300,0), //逆龙咆哮拳
			Array(1472054,300,0), //信玄
			Array(1472055,300,0), //枫叶定天拳
			Array(1472056,300,0), //枫叶3年旗
			Array(1472058,300,0), //粉色花边游泳圈
			Array(1472061,300,0), //初级飞侠拳套
			Array(1472063,300,0), //魔法手套
			Array(1472068,10,1), //永恒大悲赋
			Array(1472071,10,1), //重生大悲赋
			Array(1472077,10,1), //圣诞六翼天使武器(拳套)
			Array(1472800,300,0), //黄铜拳套
			Array(1482000,300,0), //指套
			Array(1482001,300,0), //拳甲
			Array(1482002,300,0), //格斗指虎
			Array(1482003,300,0), //三日月冲拳
			Array(1482004,300,0), //全覆式拳甲
			Array(1482005,300,0), //双翼拳甲
			Array(1482006,300,0), //刺棘拳甲
			Array(1482007,300,0), //蛇吻
			Array(1482008,300,0), //列翼拳甲
			Array(1482009,300,0), //强袭拳甲
			Array(1482010,300,0), //破坏者
			Array(1482011,300,0), //三刃雪钩
			Array(1482012,300,0), //剑龙拳甲
			Array(1482013,300,0), //撕裂者
			Array(1482014,300,0), //新手专用指套
			Array(1482015,300,0), //轻型覆拳甲
			Array(1482016,300,0), //轻型蛇吻
			Array(1482017,300,0), //比翼鸟
			Array(1482018,300,0), //突击拳甲
			Array(1482019,300,0), //冲击者
			Array(1482023,10,1), //永恒孔雀翎
			Array(1482024,10,1), //重生孔雀翎
			Array(1482025,300,0), //粉色花边游泳圈
			Array(1482029,10,1), //圣诞六翼天使武器(指节)
			Array(1482030,300,0), //枫叶3年旗
			Array(1492000,300,0), //短枪
			Array(1492001,300,0), //单发手铳
			Array(1492002,300,0), //大型手铳
			Array(1492003,300,0), //突击手铳
			Array(1492004,300,0), //银枪
			Array(1492005,300,0), //红杰克
			Array(1492006,300,0), //黑郁金香
			Array(1492007,300,0), //金钱豹
			Array(1492008,300,0), //速射手铳
			Array(1492009,300,0), //重装手铳
			Array(1492010,300,0), //雷明顿
			Array(1492011,300,0), //鲁格
			Array(1492012,300,0), //金枪
			Array(1492013,300,0), //枭龙
			Array(1492014,300,0), //新手专用短枪
			Array(1492015,300,0), //镀银枪
			Array(1492016,300,0), //猞猁
			Array(1492017,300,0), //急速手铳
			Array(1492018,300,0), //集火手铳
			Array(1492019,300,0), //德林杰
			Array(1492023,10,1), //永恒凤凰铳
			Array(1492025,10,1), //重生凤凰铳
			Array(1492026,300,0), //粉色花边游泳圈
			Array(1492030,10,1), //圣诞六翼天使武器(手枪)
			Array(1492034,300,0), //枫叶3年旗
			Array(1702138,300,0), //大火腿
			Array(1302073,300,0), //新加坡国旗（初学者）
			Array(1302074,300,0), //马来西亚国旗（初学者）
			Array(1302075,300,0), //新加坡国旗（单手剑）
			Array(1302076,300,0), //马来西亚国旗（单手剑）
			Array(1312035,300,0), //新加坡国旗（单手斧）
			Array(1312036,300,0), //马来西亚国旗（单手斧）
			Array(1322057,300,0), //新加坡国旗（单手杖）
			Array(1322058,300,0), //马来西亚国旗（单手杖）
			Array(1332060,300,0), //新加坡国旗（短剑）
			Array(1332061,300,0), //马来西亚国旗（短剑）
			Array(1382043,300,0), //新加坡国旗（长杖）
			Array(1382044,300,0), //马来西亚国旗（长杖）
			Array(1402042,300,0), //新加坡国旗（双手剑）
			Array(1412030,300,0), //新加坡国旗（双手斧）
			Array(1412031,300,0), //马来西亚国旗（双手斧）
			Array(1422034,300,0), //新加坡国旗（双手杖）
			Array(1432043,300,0), //新加坡国旗（枪）
			Array(1432044,300,0), //马来西亚国旗（枪）
			Array(1442058,300,0), //新加坡国旗（矛）
			Array(1452049,300,0), //新加坡国旗（弓）
			Array(1452050,300,0), //马来西亚国旗（弓）
			Array(1462044,300,0), //新加坡国旗（弩）
			Array(1462045,300,0), //马来西亚国旗（弩）
			Array(1472059,300,0), //新加坡国旗（指节）
			Array(1472060,300,0), //马来西亚国旗（指节）
			//------药水------
			Array(2000004,900,20), //特殊药水
			Array(2000005,700,20), //超级药水			
			Array(3010007,28,1), //粉色海狗靠垫
			Array(3010008,28,1), //蓝色海狗靠垫
			Array(3010009,15,1), //榻榻凳
			Array(3010010,28,1), //白玉海豹靠垫
			Array(3010016,28,1), //黑色海狗靠垫
			Array(3010017,28,1), //金色海狗靠垫
			Array(3010024,30,1), //玩具粉熊椅
			Array(3010034,30,1), //悠长假期(红色)
			Array(3010035,30,1), // 悠长假期(蓝色)
			Array(3010036,13,1), //浪漫秋千
			Array(3010041,25,1), //蝙蝠椅
			Array(3010043,25,1), //魔女的飞扫把
			Array(3010007,25,1), //寒冰椅子
			Array(3010046,25,1), //红龙椅
			Array(3010047,25,1), //蓝龙椅 
			Array(3010048,25,1), //圣诞树椅子
			Array(3010049,25,1), //雪房子
			Array(3010050,25,1), //公主椅子
			Array(3010051,25,1), //沙漠兔子1靠垫
			Array(3010052,20,1), //沙漠兔子2靠垫
			Array(3010057,50,1), //血色玫瑰
			Array(3010058,50,1), //世界末日
			Array(3010068,20,1), //露水椅子
			Array(3010070,20,1), //巨无霸品克缤
			Array(3010071,20,1), //神兽椅
			Array(3010075,50,1), //我为音乐狂
			Array(3010077,25,1), //猫头鹰椅子
			Array(3010093,50,1), //鲜美的火鸡
			Array(3010098,50,1), //电视宅人
			Array(3010099,50,1), //北极熊椅子
			Array(3010106,50,1), // 雪狼战椅
			Array(3012006,50,1), //风吹稻香
			Array(3012010,50,1), //巧克力蛋糕恋人
	              Array(3010013,50,1), //悠长假期
			Array(3010014,25,1), //月亮弯
			Array(3010018,50,1), //椰子树沙滩椅
			Array(3010019,50,1), //寿司椅
			Array(3010021,50,1), //暖暖桌
			Array(3010025,50,1), //枫叶纪念凳
			Array(3010028,50,1), //海盗的俘虏
			Array(3010029,50,1), //蓝环凳
			Array(3010030,50,1), //黑环凳
			Array(3010031,50,1), //红环凳
			Array(3010032,50,1), //黄环凳
			Array(3010033,50,1), //绿环凳
			Array(3010037,50,1), //亲亲嘴凳
			Array(3010044,50,1), //同一红伞下
			Array(3012001,50,1), //篝火
			Array(3012002,50,1), //浴桶
			Array(3010073,50,1), //PB克缤
			Array(3012003,50,1) //爱心椅子
);

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (mode == -1) {
		cm.dispose();
	} else {
		if (mode == 0) {
			cm.dispose();
			return;
		}
		if (mode == 1)
			status++;
		else
			status--;
		if (status == 0) {
			if (cm.haveItem(5220040)) {
				cm.sendYesNo("欢迎参加本次系统活动。使用飞天猪的蛋你可获得异想不到的物品！系统会随机抽取物品,是否继续使用飞天猪的迷之蛋进行抽奖？");
			} else {
				cm.sendOk("欢迎参加本次系统活动。你确定有飞天猪的蛋吗？");
				cm.dispose();
			}
		} else if (status == 1){	
			var ii = net.sf.cherry.server.MapleItemInformationProvider.getInstance();
			for(var i = 1;i<=5;i++){
				if(cm.getPlayer().getInventory(net.sf.cherry.client.MapleInventoryType.getByType(i)).isFull()){
					cm.sendOk("您至少应该让所有包裹都空出一格");
					cm.dispose();
					return;
				}
			}
			var chance = Math.floor(Math.random()*1000);
			var finalitem = Array();
			for(var i = 0 ;i<item.length;i++){
				if(item[i][1] >= chance){
					finalitem.push(item[i]);
				}
			}
			if(finalitem.length != 0){
				var random = new java.util.Random();
				var finalchance = random.nextInt(finalitem.length);
				var itemId = finalitem[finalchance][0];
				var Laba = finalitem[finalchance][2];
			          if(ii.getInventoryType(itemId).getType() == 1){
			        	var toDrop = ii.randomizeStats(ii.getEquipById(itemId)).copy();
				}
				else{
				 	 var toDrop = new net.sf.cherry.client.Equip(itemId,0).copy();
				}
				net.sf.cherry.server.MapleInventoryManipulator.addFromDrop(cm.getC(), toDrop, -1);
				if(Laba == 1){
					cm.getC().getChannelServer().getWorldInterface().broadcastMessage(null, net.sf.cherry.tools.MaplePacketCreator.getItemMega(cm.getC().getChannel(),cm.getPlayer().getName() + " : " + "从飞天猪获得！大家一起恭喜他（她）吧！！！",toDrop, true).getBytes());
				}
				cm.gainItem(5220040,-1);
				cm.sendOk("非常感谢参加本次系统活动。多多努力。获取更多的礼物吧！");
				cm.getPlayer().saveToDB(true);
				cm.dispose();
			} else {							
				cm.gainItem(5220040,-1);
				cm.gainItem(2022140,1);
				cm.getPlayer().saveToDB(true);
				cm.sendOk("欢迎参加本次系统活动。你确定有飞天猪的蛋吗？");
				cm.dispose();
			}
		}
	}
}
