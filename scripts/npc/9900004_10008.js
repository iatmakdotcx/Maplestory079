importClass(java.util.regex.Pattern);
importClass(java.util.ArrayList);
importClass(java.lang.Integer);
// importClass(java.lang.String);
importClass(Packages.database.DBConPool);
importPackage(java.util.regex);
importClass(Packages.tools.�����ַ���);


/*
SnailMS�ű�������
*/

function start() {
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection) {
	if (status >= 0 && mode == 0) {
        cm.dispose();
        return;
    }
	if (mode == 1) {
		status++;
	} else {
		if (status == 0) {
			cm.sendOk("�Ի�������");
			cm.dispose();
			return;
		}
		status--;
	}
	if (status == 0) {
	    cm.sendYesNo("�������ô����ȷ��Ҫ����ʦ��ô��");
		// cm.getPlayer().dropMessage("��ʦ��\r\n");
		
	} else if (status == 1) {
		
		if(�뿪ʦ��(cm.getPlayer().getId())){
			cm.sendOk("�ѳɹ��뿪ʦ��\r\n");
			// cm.ȫ����ɫ����("[ʦͽϵͳ]: ��ɽ������ˮ����, " + cm.getPlayer().getName() + " ������ʦ�š�");
			cm.ȫ����ɫ����("��ʦͽϵͳ�� : ��ɽ������ˮ����, "+cm.getPlayer().getName()+"  �������Լ���ʦ�š�");
		}else{
			cm.sendOk("�㲢û��ʦ�Ű���\r\n");
		}
		cm.dispose();
		
	} else {
		cm.dispose();
		return;
	}
}

function �Ƿ��ʦ(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var result = 0;
	ps = con.prepareStatement("SELECT * FROM ͽ���б� WHERE student_id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		result = rs.getInt("graduate");
	}
	if(result > 0){
		return true;
	}else{
		return false;
	}
}

function �뿪ʦ��(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var result = 0;
	ps = con.prepareStatement("SELECT * FROM ͽ���б� WHERE student_id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		var ps0 = con.prepareStatement("Delete FROM ͽ���б� WHERE student_id = ?");
		ps0.setInt(1, chrid);
		ps0.executeUpdate();
		result = 1;
	}
	if(result > 0){
		return true;
	}else{
		return false;
	}
}

function ���ͽ���б�(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var name = "";
	ps = con.prepareStatement("SELECT * FROM characters WHERE id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		name = rs.getString("name");
	}
	return name;
}

function ���ʦ������(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var name = "";
	ps = con.prepareStatement("SELECT * FROM ͽ���б� WHERE student_id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		name = rs.getString("chrname");
	}
	return name;
}


function Ǩ��ͽ���б�(chrid){
	var con = DBConPool.getConnection();
	var ps;
	var log = "";
	var graduates_id = new ArrayList();
	var students_id = new ArrayList();
	var students_name = new ArrayList();
	var chrname = "";
	var str = "";

	ps = con.prepareStatement("SELECT * FROM characters WHERE id = ?");
	ps.setInt(1, chrid);
	var rs = ps.executeQuery();
	if(rs.next()){
		chrname = rs.getString("name");
	}else{
		return "";
	}
	ps.close();
	rs.close();
	
	var ps0 = con.prepareStatement("SELECT * FROM onetimelog WHERE characterid = ?");
	ps0.setInt(1, chrid);
	var rs0 = ps0.executeQuery();
	var is_teacher = false;
	while(rs0.next()){
		if(rs0.getString("log").equals("ʦ��")){
			is_teacher = true;
			break;
		}
	}
	if(!is_teacher){
		cm.getPlayer().dropMessage("��ɫ " + chrid + " ����ʦ��");
		return "�ý�ɫ����ʦ��";
	}
	
	var ps1 = con.prepareStatement("SELECT * FROM onetimelog WHERE characterid = ?");
	ps1.setInt(1, chrid);
	var rs1 = ps1.executeQuery();
	while(rs1.next()){
		log = rs1.getString("log");
		if(Pattern.compile("^-?[1-9]\\d*$").matcher(log).find()){
			if(Integer.parseInt(log) > 0){
				var ps2 = con.prepareStatement("SELECT * FROM characters WHERE id = ?");
				ps2.setInt(1, Integer.parseInt(log));
				var rs2 = ps2.executeQuery();
				while(rs2.next()){
					if(rs2.getInt("id") == null){
						break;
					}
					students_id.add(rs2.getInt("id"));
					students_name.add(rs2.getString("name"));
				}
				ps2.close();
				rs2.close();
			}else{
				graduates_id.add(-Integer.parseInt(log));
				str += graduates_id.get(0);
			}
			
		}
	}
	ps1.close();
	rs1.close();
	
	if(!students_id.isEmpty()){
		var ps3 = con.prepareStatement("Delete FROM ͽ���б� WHERE chrid = ?");
		ps3.setInt(1, chrid);
		ps3.executeUpdate();
		ps3.close();
		
		for(var i = 0; i < students_id.size(); i++){
			var ps4 = con.prepareStatement("INSERT INTO ͽ���б� (chrid, chrname, student_id, student_name, graduate) VALUES (?, ?, ?, ?, ?)");
			// ps4.setInt(1, i + 1);
			// ps4.setInt(1, chrid);
			// ps4.setString(2, �����ַ���.removeSpecialCharacters2(chrname));
			// ps4.setInt(3, students_id.get(i));
			// ps4.setString(4, �����ַ���.removeSpecialCharacters2(students_name.get(i)));
			
			ps4.setInt(1, chrid);
			ps4.setString(2, chrname);
			ps4.setInt(3, students_id.get(i));
			ps4.setString(4, students_name.get(i));

			if(is_contain(graduates_id, students_id.get(i))){
				ps4.setInt(5, 1);
			}else{
				ps4.setInt(5, 0);
			}
			ps4.executeUpdate();
			ps4.close();
		}
	}
	
	
	
	return str;
}

function Ǩ�����н�ɫ(){
	var con = DBConPool.getConnection();
	var ps;
	ps = con.prepareStatement("SELECT * FROM characters");
	var rs = ps.executeQuery();
	var i = 0;
	while(rs.next()){
		var chridi = rs.getInt("id");
		cm.getPlayer().dropMessage("Ǩ���У��� " + i + " ����chrid�� " + chridi);
		Ǩ��ͽ���б�(chridi);
		i = i + 1;
		
	}
	cm.getPlayer().dropMessage("Ǩ�Ƴɹ�");
}


function ��ȡͽ���б�(){
	var con = DBConPool.getConnection();
	var ps;
	var message = "#d���ͽ���б����£�\r\n";
	message += "\t   ���\t\t����\t\t  �ȼ�\t   �Ƿ��ʦ\r\n";
	ps = con.prepareStatement("SELECT * FROM ͽ���б� WHERE chrid = ?");
	// cm.getPlayer().dropMessage(cm.getPlayer().getId() + "");
	ps.setInt(1, cm.getPlayer().getId());
	var rs = ps.executeQuery();
	var i = 1;
	while(rs.next()){
		var ps0 = con.prepareStatement("SELECT * FROM Characters WHERE id = ?");
		ps0.setInt(1, rs.getInt("student_id"));
		var rs0 = ps0.executeQuery();
		var level = 0;
		if(rs0.next()){
			level = rs0.getInt("level");
		}
		
		message += "\t\t" + i + "\t\t#b" + �����ַ���.formatString(15, " ", rs.getString("student_name")) + �����ַ���.formatString(3, " ", level + "");
		if(rs.getInt("graduate") > 0){
			message += "\t\t#g�ѳ�ʦ#d\r\n";
		}else{
			message += "\t\t#rδ��ʦ#d\r\n";
		}
		i++;
	}
	return message;
}

function ArrayList(arr) {
    this._elementData = arr || [];
}
 
var arrayListPrototype = {
 
    '_arrayPrototype': Array.prototype,
 
    '_getData': function () {
        return this._elementData;
    },
 
    'size': function () {
        return this._getData().length;
    },
 
    'isEmpty': function () {
        return this.size() === 0;
    },
 
    'contains': function (obj) {
		var i, data = this._getData(), length = data.length;
		for (i = 0; i < length; i++) {
            if (obj === data[i]) {
                return true;
            }
        }
        return false;
    },
 
    'indexOf': function (obj) {
        var i , data = this._getData(), length = data.length;
        for (i = 0; i < length; i++) {
            if (obj === data[i]) {
                return i;
            }
        }
        return -1;
    },
 
    'lastIndexOf': function (obj) {
        var i , data = this._getData(), length = data.length;
        for (i = length - 1; i > -1; i--) {
            if (obj === data[i]) {
                return i;
            }
        }
        return -1;
    },
 
    'get': function (index) {
        return this._getData()[index];
    },
 
    'set': function (index, element) {
        this._getData()[index] = element;
    },
 
    'add': function (index, element) {
        if (element) {
            this.set(index, element);
        } else {
            return this._getData().push(index);
        }
    },
 
    'remove': function (index) {
        var oldValue = this._getData()[index];
        this._getData()[index] = null;
        return oldValue;
    },
 
    'clear': function () {
        this._getData().length = 0;
    },
 
    'addAll': function (index, array) {
        if (array) {
            this._getData().splice(index, 0, array);
        } else {
            this._arrayPrototype.push.apply(this._getData(), index);
        }
    }
 
};
 
ArrayList.prototype = arrayListPrototype;

function is_contain(datas, data){
	for(var i = 0; i < datas.size(); i++){
		if(data == datas.get(i)){
			return true;
		}
	}
	return false;
}
