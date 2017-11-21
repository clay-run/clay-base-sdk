/**
 * CLAY BASE SDK
 */
var API = require('./api.js')
var Table = require('./table.js')

function ClayBaseSDK(key, server) {
    this.api = API(server, key);
    this.tables = {}

    /**
     * Do a raw SQL query against the clay base
     */
    this.query = function(rawQuery) {
        return this.api.post('/bases/query').send({
            query: rawQuery
        }).then((res) => {
            var result = res.body.result
            
            return Promise.resolve(result);
        })
    }.bind(this)

    this.select = this.get = function(table) {
        if(!this.tables[table]) {
            this.tables[table] = new Table(table, this);
        }

        return this.tables[tables]
    }.bind(this)
}

module.exports = function(key, server) {
    if(!key) {
        throw new Error('CLAY BASE: Use: new Base("<private key>"). Missing private key.');
    }

    server = server || 'https://base.clay.run/v1'

    return new ClayBaseSDK(key, server);
};
