/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
package net.sf.cherry.net.channel.handler;

/**
 *
 */
import java.util.Random;

public class RandomizerNew {
    private final static Random rand = new Random();

    public static int nextInt() {
	return rand.nextInt();
    }

    public static int nextInt(final int arg0) {
	return rand.nextInt(arg0);
    }

    public static void nextBytes(final byte[] bytes) {
	rand.nextBytes(bytes);
    }

    public static boolean nextBoolean() {
	return rand.nextBoolean();
    }

    public static double nextDouble() {
	return rand.nextDouble();
    }

    public static float nextFloat() {
	return rand.nextFloat();
    }

    public static long nextLong() {
	return rand.nextLong();
    }

    public static int rand(final int lbound, final int ubound) {
	return (int) ((rand.nextDouble() * (ubound - lbound + 1)) + lbound);
    }
}
