package net.sf.cherry.client.messages.commands;

import java.util.Arrays;
import java.util.LinkedHashSet;
import java.util.List;

import net.sf.cherry.client.Equip;
import net.sf.cherry.client.IItem;
import net.sf.cherry.client.ISkill;
import net.sf.cherry.client.Item;
import net.sf.cherry.client.MapleCharacter;
import net.sf.cherry.client.MapleClient;
import net.sf.cherry.client.MapleInventoryType;
import net.sf.cherry.client.MapleJob;
import net.sf.cherry.client.MaplePet;
import net.sf.cherry.client.MapleStat;
import net.sf.cherry.client.SkillFactory;
import net.sf.cherry.client.messages.Command;
import net.sf.cherry.client.messages.CommandDefinition;
import net.sf.cherry.client.messages.CommandProcessor;
import net.sf.cherry.client.messages.IllegalCommandSyntaxException;
import net.sf.cherry.client.messages.MessageCallback;
import net.sf.cherry.net.MaplePacket;
import net.sf.cherry.net.channel.ChannelServer;
import net.sf.cherry.server.MapleInventoryManipulator;
import net.sf.cherry.server.MapleItemInformationProvider;
import net.sf.cherry.server.MaplePortal;
import net.sf.cherry.server.MapleStorage;
import net.sf.cherry.server.TimerManager;
import net.sf.cherry.server.life.MapleLifeFactory;
import net.sf.cherry.server.life.MapleNPC;
import net.sf.cherry.server.maps.FakeCharacter;
import net.sf.cherry.server.maps.MapleMap;
import net.sf.cherry.server.maps.MapleMapObject;
import net.sf.cherry.server.maps.MapleMapObjectType;
import net.sf.cherry.tools.MaplePacketCreator;

public class CharCommands
        implements Command {

    private ChannelServer cserv;
    private MapleStorage storage = null;

    public void execute(MapleClient c, MessageCallback mc, String[] splitted)
            throws Exception, IllegalCommandSyntaxException {
        MapleCharacter player = c.getPlayer();
        if (splitted[0].equals("!最大属性")) {
            player.setMaxHP(30000);
            player.setMaxMP(30000);
            player.setStr(32767);
            player.setDex(32767);
            player.setInt(32767);
            player.setLuk(32767);
            player.updateSingleStat(MapleStat.MAXHP, 30000);
            player.updateSingleStat(MapleStat.MAXMP, 30000);
            player.updateSingleStat(MapleStat.STR, 32767);
            player.updateSingleStat(MapleStat.DEX, 32767);
            player.updateSingleStat(MapleStat.INT, 32767);
            player.updateSingleStat(MapleStat.LUK, 32767);
        } else if (splitted[0].equals("!最小属性")) {
            player.setMaxHP(50);
            player.setMaxMP(5);
            player.setStr(4);
            player.setDex(4);
            player.setInt(4);
            player.setLuk(4);
            player.updateSingleStat(MapleStat.MAXHP, 50);
            player.updateSingleStat(MapleStat.MAXMP, 5);
            player.updateSingleStat(MapleStat.STR, 4);
            player.updateSingleStat(MapleStat.DEX, 4);
            player.updateSingleStat(MapleStat.INT, 4);
            player.updateSingleStat(MapleStat.LUK, 4);
        } else if (splitted[0].equals("!满技能")) {
            c.getPlayer().maxAllSkills();
        } else if (splitted[0].equals("!maxhp")) {
            int stat = Integer.parseInt(splitted[1]);
            player.setMaxHP(stat);
            player.updateSingleStat(MapleStat.MAXHP, stat);
        } else if (splitted[0].equals("!maxmp")) {
            int stat = Integer.parseInt(splitted[1]);
            player.setMaxMP(stat);
            player.updateSingleStat(MapleStat.MAXMP, stat);
        } else if (splitted[0].equals("!hp")) {
            int stat = Integer.parseInt(splitted[1]);
            player.setHp(stat);
            player.updateSingleStat(MapleStat.HP, stat);
        } else if (splitted[0].equals("!mp")) {
            int stat = Integer.parseInt(splitted[1]);
            player.setMp(stat);
            player.updateSingleStat(MapleStat.MP, stat);
        } else if (splitted[0].equals("!str")) {
            int stat = Integer.parseInt(splitted[1]);
            player.setStr(stat);
            player.updateSingleStat(MapleStat.STR, stat);
        } else if (splitted[0].equals("!dex")) {
            int stat = Integer.parseInt(splitted[1]);
            player.setDex(stat);
            player.updateSingleStat(MapleStat.DEX, stat);
        } else if (splitted[0].equals("!int")) {
            int stat = Integer.parseInt(splitted[1]);
            player.setInt(stat);
            player.updateSingleStat(MapleStat.INT, stat);
        } else if (splitted[0].equals("!luk")) {
            int stat = Integer.parseInt(splitted[1]);
            player.setLuk(stat);
            player.updateSingleStat(MapleStat.LUK, stat);
        } else if (splitted[0].equals("!skill")) {
            ISkill skill = SkillFactory.getSkill(Integer.parseInt(splitted[1]));
            int level = CommandProcessor.getOptionalIntArg(splitted, 2, 1);
            int masterlevel = CommandProcessor.getOptionalIntArg(splitted, 3, 1);
            if (level > skill.getMaxLevel()) {
                level = skill.getMaxLevel();
            }
            if ((masterlevel > skill.getMaxLevel()) && (skill.isFourthJob())) {
                masterlevel = skill.getMaxLevel();
            } else {
                masterlevel = 0;
            }
            player.changeSkillLevel(skill, level, masterlevel);
        } else if (splitted[0].equals("!god")) {
            boolean choice = true;
            int set = Integer.parseInt(splitted[1]);
            if (set == 1) {
                choice = true;
            } else if (set == 2) {
                choice = false;
            }
            player.setInvincible(choice);
        } else if (splitted[0].equals("!sp")) {
            int sp = Integer.parseInt(splitted[1]);
            if (sp + player.getRemainingSp() > 32767) {
                sp = 32767;
            }
            player.setRemainingSp(sp);
            player.updateSingleStat(MapleStat.AVAILABLESP, player.getRemainingSp());
        } else if (splitted[0].equals("!ap")) {
            int ap = Integer.parseInt(splitted[1]);
            if (ap + player.getRemainingAp() > 32767) {
                ap = 32767;
            }
            player.setRemainingAp(ap);
            player.updateSingleStat(MapleStat.AVAILABLEAP, player.getRemainingAp());
        } else if (splitted[0].equals("!转职")) {
            int jobId = Integer.parseInt(splitted[1]);
            if (MapleJob.getById(jobId) != null) {
                player.changeJob(MapleJob.getById(jobId));
            }
        } else if (splitted[0].equals("!活动NPC")) {
            if (splitted.length > 1) {
                boolean choice = true;
                int set = Integer.parseInt(splitted[1]);
                if (set == 1) {
                    choice = true;
                } else if (set == 2) {
                    choice = false;
                }
                for (ChannelServer chan : ChannelServer.getAllInstances()) {
                    for (MapleCharacter chr : chan.getPlayerStorage().getAllCharacters()) {
                        chr.set活动NPC(choice);
                    }
                }
            } else {
                mc.dropMessage("[1]为开.[2]为关.举例：!活动NPC 1");
            }
            mc.dropMessage("开启/关闭活动NPC成功！");
        } else if (splitted[0].equals("!whereami")||splitted[0].equals("!地图代码")) {
            int currentMap = player.getMapId();
            mc.dropMessage("You are on map " + currentMap + ".");
        } else if (splitted[0].equals("!1")) {
            c.getPlayer().showDojoClock();
            c.getSession().write(MaplePacketCreator.enableActions());
        } else if (splitted[0].equals("!2")) {
            c.getSession().write(MaplePacketCreator.environmentChange("Dojang/start", 4));
            c.getSession().write(MaplePacketCreator.enableActions());
        } else if (splitted[0].equals("!3")) {
            c.getSession().write(MaplePacketCreator.environmentChange("dojang/start/stage", 3));
            c.getSession().write(MaplePacketCreator.enableActions());
        } else if (splitted[0].equals("!4")) {
            c.getSession().write(MaplePacketCreator.getEnergy(c.getPlayer().getDojoEnergy()));
            c.getSession().write(MaplePacketCreator.enableActions());
        } else if (splitted[0].equals("!5")) {
            c.getSession().write(MaplePacketCreator.sendBlockedMessage(5));
            c.getSession().write(MaplePacketCreator.enableActions());
        } else if (splitted[0].equals("!6")) {
            c.getSession().write(MaplePacketCreator.enableActions());
        } else if (splitted[0].equals("!关门")) {
            player.getMap().clearDrops(player, true);
        } else if (splitted[0].equals("!8")) {
            c.getSession().write(MaplePacketCreator.Combo_Effect(200));
            c.getSession().write(MaplePacketCreator.enableActions());
        } else if (splitted[0].equals("!冒险币")) {
            if (2147483647 - (player.getMeso() + Integer.parseInt(splitted[1])) >= 0) {
                player.gainMeso(Integer.parseInt(splitted[1]), true);
            } else {
                player.gainMeso(2147483647 - player.getMeso(), true);
            }
        } else if (splitted[0].equals("!levelup")) {
            if (player.getLevel() < 200) {
                player.levelUp();
                player.setExp(0);
            } else {
                mc.dropMessage("You are already level 200.");
            }
        } else if (splitted[0].equals("!items")) {
            MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            short quantity = (short) CommandProcessor.getOptionalIntArg(splitted, 2, 1);
            if ((Integer.parseInt(splitted[1]) >= 5000000) && (Integer.parseInt(splitted[1]) <= 5000100)) {
                if (quantity > 1) {
                    quantity = 1;
                }
                int petId = MaplePet.createPet(Integer.parseInt(splitted[1]));
                MapleInventoryManipulator.addById(c, Integer.parseInt(splitted[1]), quantity, player.getName() + "used !item with quantity " + quantity, player.getName(), petId);
                return;
            }
            if (ii.isRechargable(Integer.parseInt(splitted[1]))) {
                quantity = ii.getSlotMax(c, Integer.parseInt(splitted[1]));
                MapleInventoryManipulator.addById(c, Integer.parseInt(splitted[1]), quantity, "Rechargable item created.", null, -1);
                return;
            }
            MapleInventoryManipulator.addById(c, Integer.parseInt(splitted[1]), quantity, player.getName() + "used !item with quantity " + quantity, null, -1);
        
        } else if (splitted[0].equals("!刷")) {
        	// TODO:Mak——貌似重复的
            MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            short quantity = (short) CommandProcessor.getOptionalIntArg(splitted, 2, 1);
            if ((Integer.parseInt(splitted[1]) >= 5000000) && (Integer.parseInt(splitted[1]) <= 5000100)) {
                if (quantity > 1) {
                    quantity = 1;
                }
                int petId = MaplePet.createPet(Integer.parseInt(splitted[1]));
                MapleInventoryManipulator.addById(c, Integer.parseInt(splitted[1]), quantity, player.getName() + "used !item with quantity " + quantity, player.getName(), petId);
                return;
            }
            if (ii.isRechargable(Integer.parseInt(splitted[1]))) {
                quantity = ii.getSlotMax(c, Integer.parseInt(splitted[1]));
                MapleInventoryManipulator.addById(c, Integer.parseInt(splitted[1]), quantity, "Rechargable item created.", player.getName(), -1);
                return;
            }
            MapleInventoryManipulator.addById(c, Integer.parseInt(splitted[1]), quantity, player.getName() + "used !item with quantity " + quantity, player.getName(), -1);
        } else if (splitted[0].equals("!nonameitem")) {
            MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            short quantity = (short) CommandProcessor.getOptionalIntArg(splitted, 2, 1);
            if ((Integer.parseInt(splitted[1]) >= 5000000) && (Integer.parseInt(splitted[1]) <= 5000100)) {
                if (quantity > 1) {
                    quantity = 1;
                }
                int petId = MaplePet.createPet(Integer.parseInt(splitted[1]));
                return;
            }
            if (ii.isRechargable(Integer.parseInt(splitted[1]))) {
                quantity = ii.getSlotMax(c, Integer.parseInt(splitted[1]));
                return;
            }
            MapleInventoryManipulator.addById(c, Integer.parseInt(splitted[1]), quantity, player.getName() + "used !nonameitem with quantity " + quantity);
       
        } else if (splitted[0].equals("!GM元神")) {
            int clones;
            try {
                clones = getOptionalIntArg(splitted, 1, 1);
            } catch (NumberFormatException asdasd) {
                return;
            }
            if (player.getFakeChars().size() > 100) {
                mc.dropMessage("元神数量最大为100个.");
            } else {
                for (int i = 0; i < clones && i + player.getFakeChars().size() < 1; i++) {
                    FakeCharacter fc = new FakeCharacter(player, player.getId() + player.getFakeChars().size() + clones + i); //FakeCharacter fc =
                    new FakeCharacter(player, player.getId());
                    player.getFakeChars().add(fc);
                    c.getChannelServer().addClone(fc);
                }
                mc.dropMessage("你的元神数量 " + player.getFakeChars().size() + "个分身.");
            }
             
        } else if (splitted[0].equals("!警告")) {
            ChannelServer cserv = c.getChannelServer();
            cserv.getPlayerStorage().getCharacterByName(splitted[1]).gainWarning(true, 1);
            cserv.getWorldInterface().broadcastMessage(null, MaplePacketCreator.serverNotice(6, "[公告事项]" + splitted[1] + " 由于使用非法程序被永久封停处理。").getBytes());
        } else if (splitted[0].equals("!丢")) {
            MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            int itemId = Integer.parseInt(splitted[1]);
            short quantity = (short) CommandProcessor.getOptionalIntArg(splitted, 2, 1);
            IItem toDrop;
            if (ii.getInventoryType(itemId) == MapleInventoryType.EQUIP) {
                toDrop = ii.randomizeStats((Equip) ii.getEquipById(itemId));
            } else {
                toDrop = new Item(itemId, (byte) 0, quantity);
            }
            toDrop.log("Created by " + player.getName() + " using !drop. Quantity: " + quantity, false);
            toDrop.setOwner(player.getName());
            player.getMap().spawnItemDropGM(player, player, toDrop, player.getPosition(), true, true);
        } else if (splitted[0].equals("!nonamedrop")) {
            MapleItemInformationProvider ii = MapleItemInformationProvider.getInstance();
            int itemId = Integer.parseInt(splitted[1]);
            short quantity = (short) CommandProcessor.getOptionalIntArg(splitted, 2, 1);
            IItem toDrop;
            if (ii.getInventoryType(itemId) == MapleInventoryType.EQUIP) {
                toDrop = ii.randomizeStats((Equip) ii.getEquipById(itemId));
            } else {
                toDrop = new Item(itemId, (byte) 0, quantity);
            }
            player.getMap().spawnItemDrop(player, player, toDrop, player.getPosition(), true, true);
        } else if (splitted[0].equals("!等级")) {
            int quantity = Integer.parseInt(splitted[1]);
            c.getPlayer().setLevel(quantity);
            c.getPlayer().levelUp();
            int newexp = c.getPlayer().getExp();
            if (newexp < 0) {
                c.getPlayer().gainExp(-newexp, false, false);
            }
        } else if (splitted[0].equals("!刷新地图")) {
            boolean custMap = splitted.length >= 2;
            int mapid = custMap ? Integer.parseInt(splitted[1]) : player.getMapId();
            MapleMap map = custMap ? player.getClient().getChannelServer().getMapFactory().getMap(mapid) : player.getMap();
            if (player.getClient().getChannelServer().getMapFactory().destroyMap(mapid)) {
                MapleMap newMap = player.getClient().getChannelServer().getMapFactory().getMap(mapid);
                MaplePortal newPor = newMap.getPortal(0);
                LinkedHashSet<MapleCharacter> mcs = new LinkedHashSet<MapleCharacter>(map.getCharacters()); // do NOT remove, fixing ConcurrentModificationEx.
                outerLoop:
                for (MapleCharacter m : mcs) {
                    for (int x = 0; x < 5; x++) {
                        try {
                            m.changeMap(newMap, newPor);
                            continue outerLoop;
                        } catch (Throwable t) {
                        }
                    }
                    mc.dropMessage("Failed warping " + m.getName() + " to the new map. Skipping...");
                }
                mc.dropMessage("地图刷新完毕，如还出现NPC不见请使用此命令.");
                return;
            }
            mc.dropMessage("Unsuccessful reset!");

        } else if (splitted[0].equals("!maxlevel")) {
            while (player.getLevel() < 200) {
                player.levelUp();
            }
            player.gainExp(-player.getExp(), false, false);
        } else if (!splitted[0].equals("!ring")) {
            if (splitted[0].equals("!ariantpq")) {
                if (splitted.length < 2) {
                    player.getMap().AriantPQStart();
                } else {
                    c.getSession().write(MaplePacketCreator.updateAriantPQRanking(splitted[1], 5, false));
                }
            } else if (splitted[0].equals("!存档")) {
                for (ChannelServer chan : ChannelServer.getAllInstances()) {
                    for (MapleCharacter chr : chan.getPlayerStorage().getAllCharacters()) {
                        chr.saveToDB(true);
                    }
                }
                mc.dropMessage("保存数据成功.");
            } else if (splitted[0].equals("!全部存档2")) {
                for (ChannelServer chan : ChannelServer.getAllInstances()) {
                    for (MapleCharacter chr : chan.getPlayerStorage().getAllCharacters()) {
                        chr.saveToDB(true);
                        if (storage != null) {
                            storage.saveToDB();
                        }
                    }
                }

                mc.dropMessage("保存数据成功.");
            } else if (splitted[0].equals("!dh")) {
                c.getPlayer().startCygnusIntro();
            } else if (splitted[0].equals("!dh3")) {
                c.getPlayer().startCygnusIntro_3();
            } else if (splitted[0].equals("!playernpc")) {
                c.getPlayer().getPlayerNPC().createPNE();
                c.getPlayer().getPlayerNPC().createPlayerNPC(c.getPlayer(), c.getPlayer().getMapId());
            } else if (splitted[0].equals("!position")) {
                mc.dropMessage("Your current co-ordinates are: " + c.getPlayer().getPosition().x + " x and " + c.getPlayer().getPosition().y + " y.");
            } else if (splitted[0].equals("!clearinvent")) {
                if (splitted.length < 2) {
                    mc.dropMessage("Please specify which tab to clear. If you want to clear all, use '!clearinvent all'.");
                } else {
                    String type = splitted[1];
                    boolean pass = false;
                    if ((type.equals("equip")) || (type.equals("all"))) {
                        if (!pass) {
                            pass = true;
                        }
                        for (int i = 0; i < 101; i++) {
                            IItem tempItem = c.getPlayer().getInventory(MapleInventoryType.EQUIP).getItem((byte) i);
                            if (tempItem == null) {
                                continue;
                            }
                            MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.EQUIP, (byte) i, tempItem.getQuantity(), false, true);
                        }
                    }
                    if ((type.equals("use")) || (type.equals("all"))) {
                        if (!pass) {
                            pass = true;
                        }
                        for (int i = 0; i < 101; i++) {
                            IItem tempItem = c.getPlayer().getInventory(MapleInventoryType.USE).getItem((byte) i);
                            if (tempItem == null) {
                                continue;
                            }
                            MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.USE, (byte) i, tempItem.getQuantity(), false, true);
                        }
                    }
                    if ((type.equals("etc")) || (type.equals("all"))) {
                        if (!pass) {
                            pass = true;
                        }
                        for (int i = 0; i < 101; i++) {
                            IItem tempItem = c.getPlayer().getInventory(MapleInventoryType.ETC).getItem((byte) i);
                            if (tempItem == null) {
                                continue;
                            }
                            MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.ETC, (byte) i, tempItem.getQuantity(), false, true);
                        }
                    }
                    if ((type.equals("etc")) || (type.equals("all"))) {
                        if (!pass) {
                            pass = true;
                        }
                        for (int i = 0; i < 101; i++) {
                            IItem tempItem = c.getPlayer().getInventory(MapleInventoryType.SETUP).getItem((byte) i);
                            if (tempItem == null) {
                                continue;
                            }
                            MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.SETUP, (byte) i, tempItem.getQuantity(), false, true);
                        }
                    }
                    if ((type.equals("cash")) || (type.equals("all"))) {
                        if (!pass) {
                            pass = true;
                        }
                        for (int i = 0; i < 101; i++) {
                            IItem tempItem = c.getPlayer().getInventory(MapleInventoryType.CASH).getItem((byte) i);
                            if ((tempItem == null) || (tempItem.getUniqueId() != 0)) {
                                continue;
                            }
                            MapleInventoryManipulator.removeFromSlot(c, MapleInventoryType.CASH, (byte) i, tempItem.getQuantity(), false, true);
                        }
                    }
                    if (!pass) {
                        mc.dropMessage("!clearinvent " + type + " does not exist!");
                    } else {
                        mc.dropMessage("Your inventory has been cleared!");
                    }
                }
            }  else if (splitted[0].equals("!全掉处理")) {
                ChannelServer cserv1 = c.getChannelServer();
                for (MapleCharacter mch : cserv1.getPlayerStorage().getAllCharacters()) {
                    mch.getClient().getSession().close();
                    mch.getClient().disconnect();
                }

            } else if (splitted[0].equalsIgnoreCase("!踢人处理")) {
                MapleCharacter victim1 = cserv.getPlayerStorage().getCharacterByName(splitted[1]);
                victim1.getClient().disconnect();
                victim1.getClient().getSession().close();
            } else if (splitted[0].equalsIgnoreCase("!读取玩家")) {
                StringBuilder builder = new StringBuilder();
                MapleCharacter victim1 = cserv.getPlayerStorage().getCharacterByName(splitted[1]);
                if (victim1 == null) {
                    return;
                }
                builder.append(MapleClient.getLogMessage(victim1, "")); // Could use null i think ?
                mc.dropMessage(builder.toString());

                builder = new StringBuilder();
                builder.append("坐标: X: ");
                builder.append(victim1.getPosition().x);
                builder.append(" Y: ");
                builder.append(victim1.getPosition().y);
                builder.append(" | RX0: ");
                builder.append(victim1.getPosition().x + 50);
                builder.append(" | RX1: ");
                builder.append(victim1.getPosition().x - 50);
                builder.append(" | FH: ");
                builder.append(victim1.getMap().getFootholds().findBelow(player.getPosition()).getId());
                mc.dropMessage(builder.toString());
                builder = new StringBuilder();
                builder.append("HP: ");
                builder.append(victim1.getHp());
                builder.append("/");
                builder.append(victim1.getCurrentMaxHp());
                builder.append(" | MP: ");
                builder.append(victim1.getMp());
                builder.append("/");
                builder.append(victim1.getCurrentMaxMp());
                builder.append(" | EXP: ");
                builder.append(victim1.getExp());
                builder.append(" | 在一个组队里: ");
                builder.append(victim1.getParty() != null);
                builder.append(" | 在一个商城里: ");
                builder.append(victim1.getTrade() != null);
                mc.dropMessage(builder.toString());
                builder = new StringBuilder();
                builder.append("远程地址: ");
                builder.append(victim1.getClient().getSession().getRemoteAddress());
                mc.dropMessage(builder.toString());
                victim1.getClient().dropDebugMessage(mc);
            } else if (splitted[0].equals("!godmode")) {
                player.setGodmode(!player.hasGodmode());
                mc.dropMessage("You are now " + (player.hasGodmode() ? "" : "not ") + "in godmode.");
            } else if (splitted[0].equals("!eventlevel")) {
                int minlevel = Integer.parseInt(splitted[1]);
                int maxlevel = Integer.parseInt(splitted[2]);
                int map = Integer.parseInt(splitted[3]);
                int minutes = CommandProcessor.getOptionalIntArg(splitted, 4, 5);
                if (splitted.length < 4) {
                    mc.dropMessage("Syntax Error: !eventlevel <minlevel> <maxlevel> <mapid> <minutes>");
                    return;
                }
                c.getChannelServer().startEvent(minlevel, maxlevel, map);
                final MapleNPC npc = MapleLifeFactory.getNPC(9201093);
                npc.setPosition(c.getPlayer().getPosition());
                npc.setCy(c.getPlayer().getPosition().y);
                npc.setRx0(c.getPlayer().getPosition().x + 50);
                npc.setRx1(c.getPlayer().getPosition().x - 50);
                npc.setFh(c.getPlayer().getMap().getFootholds().findBelow(c.getPlayer().getPosition()).getId());
                npc.setCustom(true);
                c.getPlayer().getMap().addMapObject(npc);
                c.getPlayer().getMap().broadcastMessage(MaplePacketCreator.spawnNPC(npc));
                MaplePacket msgpacket = MaplePacketCreator.serverNotice(6, "The NPC " + npc.getName() + " will be in " + c.getPlayer().getMap().getMapName() + " for " + minutes + " minutes(s). Please talk to it to be warped to the Event (Must be in between level " + minlevel + " and " + maxlevel + ")");
                ChannelServer.getInstance(c.getChannel()).getWorldInterface().broadcastMessage(c.getPlayer().getName(), msgpacket.getBytes());
                final MapleCharacter playerr = c.getPlayer();
                TimerManager.getInstance().schedule(new Runnable() {

                    public void run() {
                        List<MapleMapObject> npcs = playerr.getMap().getMapObjectsInRange(playerr.getPosition(), (1.0D / 0.0D), Arrays.asList(new MapleMapObjectType[]{MapleMapObjectType.NPC}));
                        for (MapleMapObject npcmo : npcs) {
                            MapleNPC fnpc = (MapleNPC) npcmo;
                            if ((fnpc.isCustom()) && (fnpc.getId() == npc.getId())) {
                                playerr.getMap().removeMapObject(fnpc.getObjectId());
                            }
                        }
                    }
                }, minutes * 60 * 1000);
            }
        }
    }

    public CommandDefinition[] getDefinition() {
        return new CommandDefinition[]{
                   // new CommandDefinition("1", "", "", 3),
                   // new CommandDefinition("2", "", "", 3),
                   // new CommandDefinition("3", "", "", 3),
                   // new CommandDefinition("4", "", "", 3),
                   // new CommandDefinition("5", "", "", 3),
                   // new CommandDefinition("6", "", "", 3),
                    new CommandDefinition("关门", "", "", 3),
                   // new CommandDefinition("8", "", "", 3),
                    new CommandDefinition("最大属性", "", "", 50),
                    new CommandDefinition("最小属性", "", "", 50),
                   // new CommandDefinition("maxhp", "", "", 50),
                   // new CommandDefinition("maxmp", "", "", 50),
                   // new CommandDefinition("hp", "", "", 50),
                    new CommandDefinition("存档", "", "", 50),
                   // new CommandDefinition("mp", "", "", 50),
                    //new CommandDefinition("str", "", "", 50),
                    //new CommandDefinition("dex", "", "", 50),
                    //new CommandDefinition("int", "", "", 50),
                    //new CommandDefinition("luk", "", "", 50),
                    //new CommandDefinition("skill", "", "", 4),
                    //new CommandDefinition("sp", "", "", 50),
                    //new CommandDefinition("ap", "", "", 50),
                    //new CommandDefinition("godmode", "", "", 50),
                    new CommandDefinition("转职", "", "", 50),
                    //new CommandDefinition("gob", "", "", 50),
                    //new CommandDefinition("whereami", "", "", 1),
                    new CommandDefinition("警告", "", "", 1),
                   // new CommandDefinition("shop", "", "", 50),
                    new CommandDefinition("冒险币", "", "", 50),
                    //new CommandDefinition("levelup", "", "", 50),
                    //new CommandDefinition("活动npc", "", "", 50),
                    new CommandDefinition("刷", "", "", 50),
                   // new CommandDefinition("items", "", "", 50),
                    //new CommandDefinition("nonameitem", "", "", 50),
                    new CommandDefinition("丢", "", "", 50),
                   // new CommandDefinition("nonamedrop", "", "", 50),
                    new CommandDefinition("等级", "", "", 50),
                   // new CommandDefinition("maxlevel", "", "", 50),
                    //new CommandDefinition("ring", "", "", 50),
                    //new CommandDefinition("ariantpq", "", "", 50),
                    //new CommandDefinition("dh", "", "", 50),
                    //new CommandDefinition("dh3", "", "", 50),
                    //new CommandDefinition("scoreboard", "", "", 50),
                    //new CommandDefinition("playernpc", "", "", 50),
                    new CommandDefinition("刷新地图", "", "", 50),
                    new CommandDefinition("满技能", "", "", 50),
                    new CommandDefinition("地图代码", "", "", 50),
                    new CommandDefinition("全掉处理", "", "", 50),
                   // new CommandDefinition("GM元神", "", "", 50),
                    new CommandDefinition("踢人处理", "", "", 50)
                    //new CommandDefinition("读取玩家", "", "", 50),
                    //new CommandDefinition("charinfo", "charname", "Shows info about the character with the given name", 1),
                   // new CommandDefinition("selfinfo", "charname", "Shows info about your own character", 50),
                    //new CommandDefinition("position", "", "Shows your character's coordinates", 50),
                    //new CommandDefinition("clearinvent", "<all, equip, use, etc, setup, cash>", "Clears the desired inventory", 50),
                   // new CommandDefinition("eventlevel", "<minlevel> <maxlevel> <mapid> <minutes>", "Spawns NPC to warp to an event", 50)
                };
    }

    public static int getOptionalIntArg(String splitted[], int position, int def) {
        if (splitted.length > position) {
            try {
                return Integer.parseInt(splitted[position]);
            } catch (NumberFormatException nfe) {
                return def;
            }
        }
        return def;
    }
}
