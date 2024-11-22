/*
 This file is part of the OdinMS Maple Story Server
 Copyright (C) 2008 ~ 2010 Patrick Huy <patrick.huy@frz.cc> 
 Matthias Butz <matze@odinms.de>
 Jan Christian Meyer <vimes@odinms.de>

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU Affero General Public License version 3
 as published by the Free Software Foundation. You may not use, modify
 or distribute this program under any other version of the
 GNU Affero General Public License.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU Affero General Public License for more details.

 You should have received a copy of the GNU Affero General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */
package scripting;

import client.MapleClient;
import server.MaplePortal;
import tools.EncodingDetect;
import tools.FilePrinter;

import javax.script.*;
import java.io.*;
import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

public class PortalScriptManager {

    private static final PortalScriptManager instance = new PortalScriptManager();
    private final Map<String, PortalScript> scripts = new HashMap();
    private final static ScriptEngineFactory sef = new ScriptEngineManager().getEngineByName("nashorn").getFactory();

    public final static PortalScriptManager getInstance() {
        return instance;
    }

    private final PortalScript getPortalScript(final String scriptName) {
        if (scripts.containsKey(scriptName)) {
            return scripts.get(scriptName);
        }

        final File scriptFile = new File("scripts/portal/" + scriptName + ".js");
        if (!scriptFile.exists()) {
            scripts.put(scriptName, null);
            return null;
        }

        InputStream in = null;
        final ScriptEngine portal = sef.getScriptEngine();
        try {
            in = new FileInputStream(scriptFile);
            try (BufferedReader bf = new BufferedReader(
                    new InputStreamReader(in, EncodingDetect.getJavaEncode(scriptFile)))) {
                String lines = "load('nashorn:mozilla_compat.js');"
                        + bf.lines().collect(Collectors.joining(System.lineSeparator()));
                CompiledScript compiled = ((Compilable) portal).compile(lines);
                compiled.eval();
            } catch (FileNotFoundException e) {
                throw e;
            } catch (IOException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        } catch (final FileNotFoundException | ScriptException e) {
            System.err.println("Error executing Portalscript: " + scriptName + ":" + e);
            FilePrinter.printError("PortalScriptManager.txt", e);
        } finally {
            try {
                if (in != null) {
                    in.close();
                }
            } catch (IOException ignore) {
            }
        }
        final PortalScript script = ((Invocable) portal).getInterface(PortalScript.class);
        scripts.put(scriptName, script);
        return script;
    }

    public final void executePortalScript(final MaplePortal portal, final MapleClient c) {
        final PortalScript script = getPortalScript(portal.getScriptName());
        if (c != null && c.getPlayer() != null && c.getPlayer().isGM()) {
            c.getPlayer().dropMessage("[系统提示]您已经建立与传送点:[" + portal.getScriptName() + ".js]的连接。");
        }
        if (script != null) {
            try {
                script.enter(new PortalPlayerInteraction(c, portal));
            } catch (Exception e) {
                System.err.println("进入传送脚本失败: " + portal.getScriptName() + ":" + e);
                e.printStackTrace();
            }
        } else {
            // System.err.println("未处理的传送脚本 " + portal.getScriptName() + " 所在地图 " +
            // c.getPlayer().getMapId());
            // FilePrinter.printError("PortalScriptManager.txt", "未处理的传送脚本 " +
            // portal.getScriptName() + " 所在地图 " + c.getPlayer().getMapId());
        }
        clearScripts();
    }

    public final void clearScripts() {
        scripts.clear();
    }
}
