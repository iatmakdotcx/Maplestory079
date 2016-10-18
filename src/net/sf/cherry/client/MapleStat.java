 package net.sf.cherry.client;
 
 import net.sf.cherry.net.IntValueHolder;
 
 public enum MapleStat
   implements IntValueHolder
 {
/*   SKIN(1), 
   FACE(2), 
   HAIR(4), 
   LEVEL(64), 
   JOB(128), 
   STR(256), 
   DEX(512), 
   INT(1024), 
   LUK(2048), 
   HP(4096), 
   MAXHP(8192), 
   MP(16384), 
   MAXMP(32768), 
   AVAILABLEAP(65536), 
   AVAILABLESP(131072), 
   EXP(262144), 
   FAME(524288), 
   MESO(1048576), 
   PET(2097152);*/
    SKIN(0x1),
    FACE(0x2),
    HAIR(0x4),
    LEVEL(0x40),
    JOB(0x80),
    STR(0x100),
    DEX(0x200),
    INT(0x400),
    LUK(0x800),
    HP(0x1000),
    MAXHP(0x2000),
    MP(0x4000),
    MAXMP(0x8000),
    AVAILABLEAP(0x10000),
    AVAILABLESP(0x20000),
    EXP(0x40000),
    FAME(0x80000),
    MESO(0x100000),
    PET(0x200000);
 
   private final int i;
 
   private MapleStat(int i) { this.i = i;
   }
 
   public int getValue()
   {
     return this.i;
   }
 
   public static MapleStat getByValue(int value) {
     for (MapleStat stat : values()) {
       if (stat.getValue() == value) {
         return stat;
       }
     }
     return null;
   }
 }