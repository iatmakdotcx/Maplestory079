var setupTask;

function init() {
    scheduleNew();
}

function scheduleNew() {
    em.setProperty("open", "false");
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 10);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000; //���ö�ÿ���
    }
    // setupTask = em.scheduleAtTimestamp("startEvent", nextTime);
    // �˹������Ļ�����������ľͿ����ˡ�
}

function startEvent() {
    em.setProperty("open", "true");
    var cal = java.util.Calendar.getInstance();
    cal.set(java.util.Calendar.HOUR, 0);
    cal.set(java.util.Calendar.MINUTE, 10);
    cal.set(java.util.Calendar.SECOND, 0);
    var nextTime = cal.getTimeInMillis();
    while (nextTime <= java.lang.System.currentTimeMillis()) {
        nextTime += 1000 * 60 * 3; //���ö�ý���
    }
    setupTask = em.scheduleAtTimestamp("finishEvent", nextTime);
    ///em.broadcastServerMsg(5120026, "OX������Ѿ���ʼ���������ٶȴӸ�����ڽ���Ŷ��", true);
    ///em.broadcastServerMsg("[OX�����]  �����Ѿ������������ٶȴӸ�����ڽ���Ŷ��");
}

function finishEvent() {
    ///em.broadcastServerMsg("[OX�����] �����Ѿ��رգ�����50���Ӻ��ٴο��ţ�");
    scheduleNew();
}

function cancelSchedule() {
    if (setupTask != null) {
        setupTask.cancel(true);
    }
}