const db = require('../db')

module.exports.getUserByusername = async (obj) => {
    const [[record]] = await db.query("SELECT * FROM people WHERE username = ?",[obj.username]);
    return record;
}