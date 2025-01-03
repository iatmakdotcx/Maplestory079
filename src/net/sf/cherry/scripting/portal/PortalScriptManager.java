 package net.sf.cherry.scripting.portal;
 
 import java.io.File;
import java.io.FileReader;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.script.Compilable;
import javax.script.CompiledScript;
import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineFactory;
import javax.script.ScriptEngineManager;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import net.sf.cherry.client.MapleClient;
import net.sf.cherry.net.mina.FileoutputUtil;
import net.sf.cherry.server.MaplePortal;
 
 public class PortalScriptManager
 {
   private static final Logger log = LoggerFactory.getLogger(PortalScriptManager.class);
   private static PortalScriptManager instance = new PortalScriptManager();
   private Map<String, PortalScript> scripts = new HashMap();
   private ScriptEngineFactory sef;
 
   private PortalScriptManager()
   {
     ScriptEngineManager sem = new ScriptEngineManager();
     this.sef = sem.getEngineByName("javascript").getFactory();
   }
 
   public static PortalScriptManager getInstance() {
     return instance;
   }
 
   private PortalScript getPortalScript(String scriptName, MapleClient c) {
     if (c.getPlayer().isGM()) {
        c.getPlayer().dropMessage("[系统提示]您已经建立与传送门:" + scriptName + "的对话。");
     }
     if (this.scripts.containsKey(scriptName)) {
       return (PortalScript)this.scripts.get(scriptName);
     }
     File scriptFile = new File("scripts/portal/" + scriptName + ".js");
     if (!scriptFile.exists()) {
       return null;
     }
     FileReader fr = null;
     ScriptEngine portal = this.sef.getScriptEngine();
     try {
       fr = new FileReader(scriptFile);
       CompiledScript compiled = ((Compilable)portal).compile(fr);
       compiled.eval();
     } catch (Exception e) {
       System.err.println("请检查Portal为:(" + scriptName + ".js)的文件." + e);
       FileoutputUtil.log("log\\Script_Except.log", "请检查Portal为:(" + scriptName + ".js)的文件. " + e);
    // } catch (ScriptException e) {
   //    log.error("THROW", e);
   //  } catch (IOException e) {
   //    log.error("THROW", e);
     } finally {
       if (fr != null) {
         try {
           fr.close();
         } catch (IOException e) {
           log.error("ERROR CLOSING", e);
         }
       }
     }
 
     PortalScript script = (PortalScript)((Invocable)portal).getInterface(PortalScript.class);    
     if (!c.getPlayer().isGM()) {
	 	this.scripts.put(scriptName, script);
     }
     return script;
   }
 
   public boolean executePortalScript(MaplePortal portal, MapleClient c) {
     PortalScript script = getPortalScript(portal.getScriptName(), c);
 
     if ((script != null) && (!c.getPlayer().getBlockedPortals().contains(portal.getScriptName()))) {
       return script.enter(new PortalPlayerInteraction(c, portal));
     }
     return false;
   }
 
   public void clearScripts()
   {
     this.scripts.clear();
   }
 }
