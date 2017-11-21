module.exports = function Table(tableName, db) {
    this.findAll = function() {
        return db.query(`SELECT * FROM ${tablename}`);
    }
}