package tools.wztosql;

import provider.*;

import java.io.File;
import java.io.FileOutputStream;

public class DumpNpc {

    public static void main(String[] args) throws Exception {
        FileOutputStream out = new FileOutputStream("quest_npc.sql", true);

        MapleData Check = MapleDataProviderFactory.getDataProvider("Quest.wz").getData("Check.img");
        System.out.println(Check);
        for (MapleData child : Check.getChildren()) {
            String qid = child.getName();
            String npc0 = "null";
            String npc1 = "null";
            if (child.getChildByPath("0/npc")!=null)
            {
                npc0 = child.getChildByPath("0/npc").getData().toString();
            }
            if (child.getChildByPath("1/npc")!=null)
            {
                npc1 = child.getChildByPath("1/npc").getData().toString();
            }
            String wstr = "insert into bb(qid,npc0,npc1)values("+qid+","+npc0+","+npc1+");\r\n";
            out.write(wstr.getBytes());
        }
    }
    public static void main2(String[] args) throws Exception {
        FileOutputStream out = new FileOutputStream("map_npc.sql", true);

        File maps = MapleDataProviderFactory.fileInWZPath("Map.wz\\Map");
        MapleDataProvider map = MapleDataProviderFactory.getDataProvider(maps);
        for (MapleDataDirectoryEntry dir : map.getRoot().getSubdirectories())
        {
            for(MapleDataFileEntry f : dir.getFiles()){
                String name = dir.getName()+"/"+f.getName();
                String mapid = f.getName().replace(".img","");
                MapleData mapx = map.getData(name);
                MapleData life = mapx.getChildByPath("life");
                if(life==null)
                    continue;

                for (MapleData child : life.getChildren()) {
                    String type = (String)child.getChildByPath("type").getData();
                    if("n".equals(type)) {
                        String npcid = (String) child.getChildByPath("id").getData();
                        String wstr = "insert into aa(map,npc)values("+mapid+","+npcid+");\r\n";
                        out.write(wstr.getBytes());
                    }
                }
            }
        }
    }


}
