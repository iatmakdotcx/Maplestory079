package constants;

import java.nio.charset.Charset;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import net.sf.cherry.net.RecvPacketOpcode;
import net.sf.cherry.server.maps.MapleMapObjectType;

public class ServerConfig {
	public static Charset STRCHARSET = Charset.forName("GBK");
	
	public static String CONFIG_FILE_NAME = "CherryMS4Love.properties";
	public static String CONFIG_FILE_NAME_DB = "CherryMS4Love.properties";
	public static String CONFIG_FILE_NAME_LOGIN = "CherryMS4Love.properties";
	
	public static String recvops_FILE_NAME = "recvops.properties";
	public static String sendops_FILE_NAME = "sendops.properties";
	//public static String recvops_FILE_NAME = "recv.ini";
	//public static String sendops_FILE_NAME = "send.ini";
	
	public static String WZPath = "wz";
	
	
	public static void SetRMIParam() {
		System.setProperty("javax.net.ssl.keyStore", "filename.keystore");
		System.setProperty("javax.net.ssl.keyStorePassword", "passwd");
		System.setProperty("javax.net.ssl.trustStore", "filename.keystore");
		System.setProperty("javax.net.ssl.trustStorePassword", "passwd");
	}
	
	private static List<Integer> ignoreList = (List<Integer>) Collections.unmodifiableList(Arrays.asList(
			RecvPacketOpcode.NPC_ACTION.getValue(), 
			RecvPacketOpcode.MOVE_PLAYER.getValue(), 
			RecvPacketOpcode.CLOSE_RANGE_ATTACK.getValue(), 
			RecvPacketOpcode.STRANGE_DATA.getValue(), 
			RecvPacketOpcode.MOVE_LIFE.getValue(), 
			RecvPacketOpcode.MOVE_PET.getValue(),
			RecvPacketOpcode.PONG.getValue(),
			RecvPacketOpcode.MOVE_SUMMON.getValue()
            ));;
	public static boolean isIgnorePack(Short packetId){
		return ignoreList.contains((int)packetId);
	}
}
