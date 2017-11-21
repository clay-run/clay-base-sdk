/**
 * CLAY BASE SDK
 */
var API = require('./api.js')

function ClayBaseSDK(key, server) {
    this.api = API(server, key);

    /**
     * Do a raw SQL query against the clay base
     */
    this.query() = function(rawQuery) {
        return this.api.post('/bases/query').send({
            query: rawQuery
        }).then((res) => {
            var result = res.body.result
            
            return Promise.resolve(result);
        })
    }.bind(this)
}

module.exports = function(key, server) {
    if(!key) {
        throw new Error('CLAY BASE: Use: new Base("<private key>"). Missing private key.');
    }

    server = server || 'https://base.clay.run/v1'

    return new ClayBaseSDK(key, server);
};
