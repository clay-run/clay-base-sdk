var superagent = require('superagent')

function buildSuperAgent(server, method, endpoint, key) {
    return superagent(method, server + endpoint)
                .set('private-base-key', key);
}

module.exports = function(server, key) {
    return {
        get: (endpoint) => buildSuperAgent(server, 'GET', endpoint, key),
        post: (endpoint) => buildSuperAgent(server, 'POST', endpoint, key),
        delete: (endpoint) => buildSuperAgent(server, 'DELETE', endpoint, key)
    }
}