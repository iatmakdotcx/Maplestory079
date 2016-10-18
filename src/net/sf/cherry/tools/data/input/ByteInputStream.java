package net.sf.cherry.tools.data.input;

public abstract interface ByteInputStream
{
  public abstract int readByte();

  public abstract long getBytesRead();

  public abstract long available();
}

/* Location:           E:\maoxiandaodanji\dist\cherry.jar
 * Qualified Name:     net.sf.cherry.tools.data.input.ByteInputStream
 * JD-Core Version:    0.6.0
 */