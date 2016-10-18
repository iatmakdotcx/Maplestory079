 package net.sf.cherry.net;
 
 import net.sf.cherry.client.MapleClient;
 
 public abstract class AbstractMaplePacketHandler
   implements MaplePacketHandler
 {
   public boolean validateState(MapleClient c)
   {
     return c.isLoggedIn();
   }
 }

/* Location:           E:\maoxiandaodanji\dist\cherry.jar
 * Qualified Name:     net.sf.cherry.net.AbstractMaplePacketHandler
 * JD-Core Version:    0.6.0
 */