/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package custom;

public class CustomConstants {

    //不显示的NPC
    public static boolean isNoSpawnNPC(int npc) {
        switch (npc) {
            //自由市场牌子
            case 9310070:
            case 9310071:
            case 9310072:
            case 9310073:
            case 9310074:
            //请双击冒险TV查看官网新闻
            case 9310082:
                return true;
        }
        return false;
    }
}
