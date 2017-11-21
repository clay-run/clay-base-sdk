module.exports = function Table(tableName, db) {
    this.findAll = function() {
        return db.api.post(`/bases/find`).send({
            table: tableName
        }).then((res) => {
            return Promise.resolve(res.body.result);
        });
    }

    this.insert = function(values) {
        return db.api.post(`/bases/insert`).send({
            table: tableName,
            values: values
        }).then((res) => {
            return Promise.resolve(res.body.result);
        });
    }

    this.find = function(config) {
        return db.api.post(`/bases/find`).send({
            table: tableName,
            config: config
        }).then((res) => {
            return Promise.resolve(res.body.result);
        })
    }

    this.query = db.query;
}