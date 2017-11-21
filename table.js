module.exports = function Table(tableName, db) {
    this.findAll = function() {
        return db.api.post(`/bases/find`).send({
            table: tableName
        });
    }

    this.insert = function(values) {
        return db.api.post(`/bases/insert`).send({
            table: tableName,
            values: values
        });
    }

    this.find = function(config) {
        return db.api.post(`/bases/find`).send({
            table: tableName,
            config: config
        })
    }

    this.query = db.query;
}