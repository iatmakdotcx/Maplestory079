 package net.sf.cherry.tools;
 
 import java.security.SecureRandom;
import java.util.Random;
 
 public class Randomizer
 {
   private static Randomizer instance = new Randomizer();
   private SecureRandom secureRandom;
   private Random rand;
   private int callCount;
 
   public static Randomizer getInstance()
   {
     return instance;
   }

   private Randomizer() {
     this.secureRandom = new SecureRandom();
     this.rand = new Random(this.secureRandom.nextLong());
     this.callCount = 0;
   }
 
   private void callRandom() {
     if (this.callCount > 9) {
       this.secureRandom.setSeed(this.rand.nextLong());
       this.rand.setSeed(this.secureRandom.nextLong());
     } else {
       this.callCount += 1;
     }
   }
 
   public int nextInt() {
     return this.rand.nextInt();
   }
 
   public int nextInt(int i) {
     callRandom();
     return this.rand.nextInt(i);
   }
 
   public double nextDouble() {
     return this.rand.nextDouble();
   }
 }

/* Location:           E:\maoxiandaodanji\dist\cherry.jar
 * Qualified Name:     net.sf.cherry.tools.Randomizer
 * JD-Core Version:    0.6.0
 */