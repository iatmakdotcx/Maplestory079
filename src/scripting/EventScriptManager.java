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

import handling.channel.ChannelServer;
import tools.FilePrinter;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * @author Matze
 */
public class EventScriptManager extends AbstractScriptManager {

    private static class EventEntry {

        public EventEntry(final String script, final Invocable iv, final EventManager em) {
            this.script = script;
            this.iv = iv;
            this.em = em;
        }

        public String script;
        public Invocable iv;
        public EventManager em;
    }

    private final Map<String, EventEntry> events = new LinkedHashMap<>();
    private final AtomicInteger runningInstanceMapId = new AtomicInteger(0);

    public final int getNewInstanceMapId() {
        return runningInstanceMapId.addAndGet(1);
    }

    private ChannelServer cserv;
    public EventScriptManager(final ChannelServer cserv, final String[] scripts) {
        super();
        this.cserv = cserv;
//
//        for (final String script : scripts) {
//            if (!script.equals("")) {
//                final Invocable iv = getInvocable("event/" + script + ".js", null);
//
//                if (iv != null) {
//                    events.put(script, new EventEntry(script, iv, new EventManager(cserv, iv, script)));
//                }
//            }
//        }
    }

    public final EventManager getEventManager(final String event) {
        EventEntry entry = events.get(event);
        if (entry != null) {
            return entry.em;
        }
        synchronized (this){
            entry = events.get(event);
            if (entry != null) {
                return entry.em;
            }
            final Invocable iv = getInvocable("event/" + event + ".js", null);

            if (iv != null) {
                entry = new EventEntry(event, iv, new EventManager(cserv, iv, event));
                events.put(event,  entry);
                init(entry);
                return entry.em;
            }
        }
        return null;
    }
    private void init(EventEntry entry) {
        try {
            ((ScriptEngine) entry.iv).put("em", entry.em);
            entry.iv.invokeFunction("init", (Object) null);

        } catch (final Exception ex) {
            System.err.println("Error initiating event: " + entry.script + ":" + ex);
            FilePrinter.printError("EventScriptManager.txt", "Error initiating event: " + entry.script + ":" + ex);
        }
    }
    public final void init() {
        for (final EventEntry entry : events.values()) {
            init(entry);
        }
    }

    public final void cancel() {
        for (final EventEntry entry : events.values()) {
            entry.em.cancel();
        }
        events.clear();
    }
}
