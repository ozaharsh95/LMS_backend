const db = require('../db')

module.exports.getUserByusername = async (obj) => {
    const record = await db.query("SELECT * FROM PEOPLE WHERE username = ?",[obj.username]);
    console.log(record);
    return record;
}

module.exports.getAllAssignments = async () => {
    const [records] = await db.query("SELECT * FROM assignment")
    return records;
}

module.exports.getAssignmentById = async (id) => {
    const [[record]] = await db.query("SELECT * FROM assignment WHERE a_id = ?", [id])
    return record;
}

module.exports.deleteAssignment = async (id) => {
    const [{ affectedRows }] = await db.query("DELETE FROM assignment WHERE a_id = ?", [id])
    return affectedRows;
}

module.exports.insertAssignment = async (obj)=>{
    // console.log(obj);
    const record = await db.query("INSERT INTO assignment (a_name,subject) values (?,?)",[obj.a_name,obj.subject]);
    // console.log(record);
}

module.exports.updateAssignment = async (obj, a_id=0 ) => {
    const record = await db.query("UPDATE assignment SET a_name = ?,subject = ? where a_id = ?",[obj.a_name,obj.subject,a_id]);
    return record[0].affectedRows;
}
