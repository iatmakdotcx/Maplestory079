var status = 0;
var npcid = 9010000
var heart = "#fEffect/ItemEff/1112006/0/0#";
var aaa2 = "";
var aaa1 = "";
var aaa3 = "";
var aaa5 = "";
var actionLst = [
["地图传送", function(){
	cm.dispose();
	cm.openNpc(npcid, '地图传送')
}],
["删除道具", function(){
	cm.dispose();
	cm.openNpc(npcid, '删除道具')
}],
["删除222", function(){
	cm.sendOk("cccccccc");
}],
["删除333", function(){
	cm.sendOk("sssssss");
}],
]

function start() {
  status = -1;

  action(1, 0, 0);
}
function action(mode, type, selection) {
	if (cm.getMapId() == 180000001) {
		cm.dispose();
		return;
	}
    if (mode == -1) {
        cm.dispose();
        return;
    } else {
        if (mode == 1) {
            status++;
        } else {
            status--;
        }
    }
	
	if (status == 0) {
		txt = "#b"
		//txt += "#b#L0#"+heart+"万能传送#L3#"+heart+"万能传送#L2#"+heart+"删除物品#l\r\n";
		for(var i=0;i<actionLst.length;i++)
		{
			var a = actionLst[i]
			txt += "#L"+i+"#"+a[0]+"#l"
		}
		cm.sendSimple(txt)
	}else if (status == 1) {
//		print("mode:"+mode+",type:"+type+",selection:"+selection)
		actionLst[selection][1](mode, type, selection)
	}else{
		cm.dispose();
        return;
	}
}